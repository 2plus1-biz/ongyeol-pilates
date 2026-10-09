import React, { useState } from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface SchedulePageProps {
  onNavigate: (page: PageId, classTitle?: string) => void;
}

interface ClassItem {
  id: string;
  days: string[];
  timeBadge: string;
  statusHighlight: string;
  highlightColor: string;
  title: string;
  description: string;
  instructor: string;
  badge: string;
  badgeType: 'olive' | 'terracotta' | 'brown';
}

const scheduleClasses: ClassItem[] = [
  {
    id: 'c1',
    days: ['월'],
    timeBadge: '월요일 07:30 - 08:20',
    statusHighlight: '• 얼리버드 개설',
    highlightColor: 'text-[#A36E47]',
    title: '모닝 얼리버드 리포머 코어',
    description: '활기찬 아침을 깨우는 활력과 호흡의 조화. 출근 전 쾌적한 4:1 소그룹',
    instructor: '정온유 원장',
    badge: '정원 2인 잔여',
    badgeType: 'olive',
  },
  {
    id: 'c2',
    days: ['월', '수', '금'],
    timeBadge: '월/수/금 10:30 - 11:20',
    statusHighlight: '• 1:1 맞춤 슬롯',
    highlightColor: 'text-[#6A684B]',
    title: '자세 밸런스 프라이빗 케딜락',
    description: '개인별 관절 불균형을 집중 분석하고 교정하는 정착 밀착 세션',
    instructor: '강서진 강사',
    badge: '1:1 단독예약',
    badgeType: 'terracotta',
  },
  {
    id: 'c3',
    days: ['화', '목'],
    timeBadge: '화/목 14:00 - 14:50',
    statusHighlight: '• 마감 임박',
    highlightColor: 'text-[#715C45]',
    title: '체어 & 바렐 힙라인 스타일링',
    description: '둥근 둔근 활성화와 고관절 스트레칭으로 바른 골반선 형성',
    instructor: '윤도현 강사',
    badge: '정원 1인 잔여',
    badgeType: 'brown',
  },
  {
    id: 'c4',
    days: ['수'],
    timeBadge: '수요일 19:30 - 20:20',
    statusHighlight: '• 예약 가능',
    highlightColor: 'text-[#6A684B]',
    title: '나이트 릴랙스 디컴프레션',
    description: '근육 릴리즈 볼과 젠링 스트레칭을 결합한 하루 피로 해소와 숙면 유도',
    instructor: '정온유 원장',
    badge: '정원 3인 잔여',
    badgeType: 'olive',
  },
  {
    id: 'c5',
    days: ['금'],
    timeBadge: '금요일 18:30 - 19:20',
    statusHighlight: '• 1:1 슬롯 오픈',
    highlightColor: 'text-[#A36E47]',
    title: '금요 인텐시브 코어 & 플로우',
    description: '정밀한 파워하우스 조절로 한 주간 굳어진 신체 에너지를 재가동',
    instructor: '강서진 강사',
    badge: '1:1 우선배정',
    badgeType: 'terracotta',
  },
  {
    id: 'c6',
    days: ['토'],
    timeBadge: '토요일 11:00 - 11:50',
    statusHighlight: '• 주말 힐링 클래스',
    highlightColor: 'text-[#715C45]',
    title: '위켄드 풀바디 리셋 & 브레스',
    description: '맑은 주말 아침의 깊은 전신 관절 모빌리티를 회복하는 주말 특화 클래스',
    instructor: '윤도현 강사',
    badge: '정원 2인 잔여',
    badgeType: 'brown',
  },
];

const dayTabs = ['전체', '월', '화', '수', '목', '금', '토'];

export const SchedulePage: React.FC<SchedulePageProps> = ({ onNavigate }) => {
  const [selectedDay, setSelectedDay] = useState<string>('전체');

  const filteredClasses = scheduleClasses.filter((item) => {
    if (selectedDay === '전체') return true;
    return item.days.includes(selectedDay);
  });

  return (
    <div className="w-full">
      {/* SUB PAGE THIN HEADER */}
      <section className="bg-white border-b border-[#D2B49A]/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[14px] text-[#8C7760] mb-3">
              <button
                onClick={() => onNavigate('home')}
                className="hover:underline cursor-pointer"
              >
                홈
              </button>
              <span>&gt;</span>
              <span className="text-[#6A684B] font-medium">수업 시간표</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              수업 시간표
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              나의 라이프스타일에 맞춘 유연한 주간 레슨 스케줄과 예약 현황
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              1:1 개인 레슨은 상시 협의 조율 가능
            </span>
          </div>
        </div>
      </section>

      {/* 1. TIMETABLE CONTROLS & WEEKDAY TABS */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-[#D2B49A]/30 gap-5">
          <div>
            <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-1">
              WEEKLY SCHEDULE
            </span>
            <h2 className="text-[28px] lg:text-[34px] font-semibold text-[#715C45]">정규 클래스 타임테이블</h2>
          </div>

          {/* Day Tabs: Only Korean */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-full border border-[#D2B49A]/40 shadow-sm">
            {dayTabs.map((day) => {
              const isActive = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-full text-[14px] sm:text-[15px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#6A684B] text-white shadow-xs'
                      : 'text-[#715C45] hover:bg-[#FAF8F4]'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:border-[#6A684B]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[14px] font-semibold text-[#6A684B] bg-[#6A684B]/10 px-3 py-1 rounded-md">
                    {item.timeBadge}
                  </span>
                  <span className={`text-[13px] font-medium ${item.highlightColor}`}>
                    {item.statusHighlight}
                  </span>
                </div>
                <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#8C7760] leading-[1.7] mb-5 font-normal">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#D2B49A]/30 flex items-center justify-between text-[14px]">
                <span className="text-[#715C45] font-medium">강사: {item.instructor}</span>
                <button
                  onClick={() => onNavigate('reservation', item.title)}
                  className={`px-3.5 py-1.5 rounded-full bg-[#FAF8F4] font-medium cursor-pointer transition-colors hover:bg-white text-[13px] ${
                    item.badgeType === 'olive'
                      ? 'text-[#6A684B] border border-[#6A684B]/30'
                      : item.badgeType === 'terracotta'
                      ? 'text-[#A36E47] border border-[#A36E47]/30'
                      : 'text-[#715C45] border border-[#D2B49A]'
                  }`}
                >
                  {item.badge}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-14 bg-white rounded-3xl border border-[#D2B49A]/30">
            <p className="text-[16px] text-[#8C7760]">선택하신 요일에 예정된 정규 클래스가 없습니다.</p>
          </div>
        )}
      </section>

      {/* 2. 1:1 LESSON APPOINTMENT GUIDE BANNER */}
      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="p-8 lg:p-10 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#715C45] mb-2.5">
              원하시는 시간대에 정규 수업이 없으신가요?
            </h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] font-normal leading-[1.7]">
              1:1 개인 레슨 및 2:1 듀엣 레슨은 전담 강사와의 협의를 통해 평일 이른 아침(07:00~)부터 늦은 저녁(21:00~)까지 자유롭게 개별 맞춤 시간으로 예약하실 수 있습니다.
            </p>
          </div>
          <button
            onClick={() => onNavigate('reservation', '1:1 개별 시간표 문의')}
            className="px-7 py-3.5 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium whitespace-nowrap shadow-sm transition-colors cursor-pointer shrink-0"
          >
            1:1 레슨 시간 문의하기
          </button>
        </div>
      </section>

      {/* COMMON CONSULTATION BANNER */}
      <ConsultationCtaBanner onNavigate={onNavigate} />
    </div>
  );
};
