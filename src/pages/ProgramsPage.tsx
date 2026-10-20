import React from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface ProgramsPageProps {
  onNavigate: (page: PageId, program?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
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
              <span className="text-[#6A684B] font-medium">프로그램 소개</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              프로그램 소개
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              신체 유형과 운동 목적에 최적화된 온결의 3대 시그니처 커리큘럼
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              정밀 체형 분석(Exbody) 기반 1:1 개인화 설계
            </span>
          </div>
        </div>
      </section>

      {/* 1. DETAILED 3 PROGRAMS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
            SIGNATURE PROGRAMS
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-3">
            당신의 몸에 맞는 움직임을 찾다
          </h2>
          <p className="text-[16px] lg:text-[17px] text-[#8C7760] font-normal leading-[1.7]">
            획일화된 루틴이 아닌, 개인별 신체 정렬과 라이프스타일을 섬세하게 반영한 전문 프로그램입니다.
          </p>
        </div>

        <div className="space-y-12">
          {/* Program 1: 자세 밸런스 */}
          <div className="p-8 lg:p-12 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/restored/balance-reformer.jpg"
                alt="자세 밸런스 프로그램"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2.5 mb-3">
                  <span className="text-[13px] font-semibold text-[#715C45] bg-[#D2B49A]/30 px-3 py-1 rounded-md">
                    체형 정렬 특화
                  </span>
                  <span className="text-[14px] text-[#8C7760]">추천 주기: 주 2~3회</span>
                </div>
                <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#715C45] mb-3">
                  자세 밸런스 케어
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  거북목, 굽은 등, 라운드숄더, 골반 불균형 등으로 무너진 신체 중심축을 바로세우는 기초이자 핵심 코스입니다. 관절의 정상 가동 범위를 점진적으로 회복하며 신체의 불균형을 교정합니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-5 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 text-[14px] leading-[1.7]">
                  <div>
                    <p className="font-semibold text-[#715C45] mb-1.5 text-[15px]">추천 대상</p>
                    <p className="text-[#8C7760]">
                      • 하루 종일 모니터를 보는 직장인<br />
                      • 좌우 어깨 높이나 골반 높이가 다른 분<br />
                      • 걸을 때 특정 부위 피로감이 집중되는 분
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#715C45] mb-1.5 text-[15px]">사용 기구 & 소도구</p>
                    <p className="text-[#8C7760]">
                      • 캐딜락 (트라피즈 테이블)<br />
                      • 래더바렐 & 스파인 코렉터<br />
                      • 자세 정렬 밸런스 패드 및 스트랩
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#D2B49A]/30">
                <span className="text-[14px] lg:text-[15px] text-[#A36E47] font-medium">
                  체계적인 3D 체형 측정 비교 리포트 제공
                </span>
                <button
                  onClick={() => onNavigate('reservation', 'balance')}
                  className="px-7 py-3 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
                >
                  프로그램 상담 예약
                </button>
              </div>
            </div>
          </div>

          {/* Program 2: 코어 & 라인 */}
          <div className="p-8 lg:p-12 rounded-3xl bg-white border-2 border-[#6A684B] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative">
            <div className="absolute -top-3.5 right-8 bg-[#6A684B] text-white text-[13px] font-semibold px-4 py-1 rounded-full shadow-sm">
              MOST POPULAR
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/restored/core-training.jpg"
                alt="코어 & 라인 프로그램"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2.5 mb-3">
                  <span className="text-[13px] font-semibold text-[#A36E47] bg-[#A36E47]/15 px-3 py-1 rounded-md">
                    심화 코어 강화
                  </span>
                  <span className="text-[14px] text-[#8C7760]">추천 주기: 주 2~3회</span>
                </div>
                <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#715C45] mb-3">
                  코어 & 라인 스타일링
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  복부 깊은 심부 근육(복횡근), 골반기저근, 다열근을 활성화하여 겉근육의 불필요한 과긴장을 덜어내고 탄탄하며 날렵한 몸의 실루엣을 완성하는 파워풀 시그니처 코스입니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-5 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 text-[14px] leading-[1.7]">
                  <div>
                    <p className="font-semibold text-[#715C45] mb-1.5 text-[15px]">추천 대상</p>
                    <p className="text-[#8C7760]">
                      • 코어 중심 지지력이 약해 허리 피로가 잦은 분<br />
                      • 군살 없는 단단한 복부와 힙업을 원하는 분<br />
                      • 출산 후 떨어진 복직근 및 골반 기저근 회복
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#715C45] mb-1.5 text-[15px]">사용 기구 & 소도구</p>
                    <p className="text-[#8C7760]">
                      • 알레그로 2 리포머<br />
                      • 운다 체어 (Wunda Chair)<br />
                      • 스프링보드 & 미니 볼
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#D2B49A]/30">
                <span className="text-[14px] lg:text-[15px] text-[#A36E47] font-medium">
                  유연성과 코어 근력을 동시 증진하는 인터벌 시퀀스
                </span>
                <button
                  onClick={() => onNavigate('reservation', 'core')}
                  className="px-7 py-3 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
                >
                  프로그램 상담 예약
                </button>
              </div>
            </div>
          </div>

          {/* Program 3: 바디 컨디셔닝 */}
          <div className="p-8 lg:p-12 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/restored/conditioning-relax-stretch.jpg"
                alt="바디 컨디셔닝 프로그램"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2.5 mb-3">
                  <span className="text-[13px] font-semibold text-[#715C45] bg-[#D2B49A]/30 px-3 py-1 rounded-md">
                    긴장 완화 & 이완
                  </span>
                  <span className="text-[14px] text-[#8C7760]">추천 주기: 주 1~2회</span>
                </div>
                <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#715C45] mb-3">
                  바디 컨디셔닝 & 릴랙스
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  무리한 근력 소모 없이 깊은 호흡과 부드러운 타깃 스트레칭으로 만성 긴장과 스트레스를 비워내는 웰니스 리셋 코스입니다. 운동이 처음이신 분도 부담 없이 시작하실 수 있습니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-5 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 text-[14px] leading-[1.7]">
                  <div>
                    <p className="font-semibold text-[#715C45] mb-1.5 text-[15px]">추천 대상</p>
                    <p className="text-[#8C7760]">
                      • 운동을 처음 시작하거나 유연성이 부족한 비기너<br />
                      • 만성적인 목·어깨 결림과 뻐근함이 잦은 분<br />
                      • 강도 높은 운동보다 편안한 휴식을 원하는 분
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#715C45] mb-1.5 text-[15px]">사용 기구 & 소도구</p>
                    <p className="text-[#8C7760]">
                      • 리포머 타워 시스템<br />
                      • 릴랙세이션 폼롤러 및 젠링<br />
                      • 테라밴드 & 탄성 스트레칭 링
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#D2B49A]/30">
                <span className="text-[14px] lg:text-[15px] text-[#A36E47] font-medium">
                  부드러운 관절 가동성 증진과 심신 안정
                </span>
                <button
                  onClick={() => onNavigate('reservation', 'conditioning')}
                  className="px-7 py-3 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
                >
                  프로그램 상담 예약
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LESSON FORMATS (1:1 / 2:1 / SMALL GROUP) */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#D2B49A]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
              LESSON FORMATS
            </span>
            <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-3">
              나의 라이프스타일에 맞춘 수업 형태
            </h2>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] font-normal leading-[1.7]">
              온결 필라테스는 회원의 목표와 프라이버시를 존중하는 최적의 레슨 형태를 제안합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-semibold text-[#6A684B] bg-[#6A684B]/10 px-3 py-1 rounded-md inline-block mb-4">
                  100% 맞춤형
                </span>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#715C45] mb-3">
                  1:1 프라이빗 레슨
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  독립된 단독 룸에서 전문 강사와 1:1로 밀착 진행됩니다. 체형 분석 데이터에 기반하여 오직 한 사람만을 위한 맞춤형 시퀀스를 구성합니다.
                </p>
                <ul className="text-[15px] text-[#715C45] space-y-2.5 mb-6 leading-[1.6]">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6A684B] mr-2.5"></span>
                    회원 전용 개별 차트 정밀 관리
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6A684B] mr-2.5"></span>
                    수업 시간 자유 예약제 운영
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6A684B] mr-2.5"></span>
                    전 기구(캐딜락·리포머·체어·바렐) 사용
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#D2B49A]/30">
                <span className="text-[14px] font-semibold text-[#A36E47]">정밀 체형 관리 / 비기너 추천</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-semibold text-[#A36E47] bg-[#A36E47]/10 px-3 py-1 rounded-md inline-block mb-4">
                  동반 수강 혜택
                </span>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#715C45] mb-3">
                  2:1 듀엣 레슨
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  지인, 모녀, 부부, 친구와 함께 같은 공간에서 호흡을 맞추며 즐겁게 운동할 수 있는 프로그램입니다. 1:1 레슨의 전문성과 소그룹의 활기를 동시에 누립니다.
                </p>
                <ul className="text-[15px] text-[#715C45] space-y-2.5 mb-6 leading-[1.6]">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5"></span>
                    2인 전용 듀엣 스튜디오 진행
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5"></span>
                    상호 동기부여 및 합리적 수강료
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5"></span>
                    독립 타워 리포머 2대 완비
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#D2B49A]/30">
                <span className="text-[14px] font-semibold text-[#A36E47]">커플·모녀·친구 추천</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-semibold text-[#715C45] bg-[#715C45]/10 px-3 py-1 rounded-md inline-block mb-4">
                  최대 4인 정원제
                </span>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#715C45] mb-3">
                  4:1 소그룹 레슨
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  소수 인원으로만 제한하여 강사의 섬세한 티칭과 자세 교정이 흐트러지지 않도록 관리하는 고품격 부티크 소그룹 수업입니다.
                </p>
                <ul className="text-[15px] text-[#715C45] space-y-2.5 mb-6 leading-[1.6]">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#715C45] mr-2.5"></span>
                    철저한 정원 관리로 밀착 티칭
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#715C45] mr-2.5"></span>
                    주간 요일/시간대별 다양한 타임테이블
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#715C45] mr-2.5"></span>
                    리포머 & 소도구 연계 시퀀스
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#D2B49A]/30">
                <span className="text-[14px] font-semibold text-[#A36E47]">꾸준한 루틴 형성 추천</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP BY STEP PROCESS (4 STEPS) */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
            CURRICULUM FLOW
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-3">
            수업 진행 과정 4단계
          </h2>
          <p className="text-[16px] lg:text-[17px] text-[#8C7760] font-normal leading-[1.7]">
            온결 필라테스는 체계적인 과학적 프로세스를 통해 안전하고 확실한 변화를 만들어 갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm relative">
            <span className="text-3xl font-bold text-[#A36E47]/40 block mb-3">01</span>
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">사전 체형 측정</h3>
            <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
              Exbody 3D 장비로 전신 정면·측면 척추 정렬과 골반 기울기를 분석하고 관절 가동 범위를 점검합니다.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm relative">
            <span className="text-3xl font-bold text-[#A36E47]/40 block mb-3">02</span>
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">1:1 맞춤 플랜 설계</h3>
            <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
              측정 데이터를 바탕으로 개인의 라이프스타일과 근육 긴장 패턴에 맞춘 단계별 운동 목표를 수립합니다.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm relative">
            <span className="text-3xl font-bold text-[#A36E47]/40 block mb-3">03</span>
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">정밀 기구 레슨</h3>
            <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
              전문 강사의 촉지(Tactile cueing)와 호흡 가이드를 통해 올바른 근신경 자극을 전달하며 세션을 진행합니다.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm relative">
            <span className="text-3xl font-bold text-[#A36E47]/40 block mb-3">04</span>
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">피드백 & 리포트</h3>
            <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
              세션 종료 후 당일 동작 피드백 및 일상 생활에서 지켜야 할 바른 자세 가이드를 모바일 차트에 기록합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-20 bg-white border-t border-[#D2B49A]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 w-full">
          <div className="text-center mb-14">
            <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45]">
              프로그램 자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-5">
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">
                Q. 필라테스를 한 번도 해본 적 없는 완전 초보자도 가능한가요?
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                네, 물론입니다. 온결의 수강생 중 60% 이상이 처음 시작하신 비기너 분들입니다. 첫 방문 시 호흡법과 기본 골반 중립 자세부터 차근차근 1:1로 지도해 드리므로 걱정 없이 시작하실 수 있습니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">
                Q. 수업 예약 및 일정 변경 규정은 어떻게 되나요?
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                전용 모바일 예약 시스템을 통해 자유롭게 예약하실 수 있습니다. 당일 취소로 인한 회원님의 불편을 줄이고자 수업 시작 12시간 전까지는 페널티 없이 자유롭게 취소 및 변경이 가능합니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-2.5">
                Q. 수업 시 준비물이나 복장은 어떻게 준비해야 하나요?
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                움직임과 근육의 결이 잘 보이는 편안한 운동복(레깅스, 핏되는 티셔츠)과 미끄럼 방지 필라테스 삭스(토삭스)를 착용해 주시면 됩니다. 스튜디오 내 쾌적한 탈의실과 샤워 어메니티가 준비되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CONSULTATION BANNER */}
      <ConsultationCtaBanner onNavigate={onNavigate} />
    </div>
  );
};
