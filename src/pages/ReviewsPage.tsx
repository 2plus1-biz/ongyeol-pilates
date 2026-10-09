import React, { useState } from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

interface ReviewItem {
  id: string;
  category: string;
  stars: string;
  score: string;
  date: string;
  title: string;
  content: string;
  author: string;
  course: string;
  tag: string;
  tagType: 'olive' | 'terracotta' | 'brown';
}

const allReviews: ReviewItem[] = [
  {
    id: 'r1',
    category: '자세 밸런스',
    stars: '★★★★★',
    score: '5.0',
    date: '2025.02.14',
    title: '"3개월 만에 만성 어깨 결림에서 벗어났습니다"',
    content:
      '매일 컴퓨터 앞에 앉아 있다 보니 라운드숄더가 심해 늘 두통이 있었어요. 정온유 원장님께서 갈비뼈 호흡과 날개뼈 안정화 동작을 1:1로 짚어주신 덕분에 지금은 퇴근 후에도 어깨가 뻐근하지 않고 편안합니다.',
    author: '김*서 님',
    course: '자세 밸런스 1:1 (32회차)',
    tag: '직장인',
    tagType: 'olive',
  },
  {
    id: 'r2',
    category: '코어 & 라인',
    stars: '★★★★★',
    score: '5.0',
    date: '2025.02.10',
    title: '"출산 후 처진 복부와 틀어진 골반이 제자리로"',
    content:
      '출산 후 골반 비대칭이 심해 걷는 게 불편했는데, 강서진 강사님의 섬세한 티칭 덕분에 복부 코어 힘이 확 생겼어요. 무리한 다이어트 동작 없이도 몸의 바른 실루엣이 정리되어 너무 만족스럽습니다.',
    author: '이*진 님',
    course: '코어 & 라인 1:1 (24회차)',
    tag: '산후 케어',
    tagType: 'terracotta',
  },
  {
    id: 'r3',
    category: '바디 컨디셔닝',
    stars: '★★★★★',
    score: '5.0',
    date: '2025.02.04',
    title: '"엄마와 함께 듀엣으로 운동하며 활력을 찾았어요"',
    content:
      '어머니와 함께 2:1 듀엣 레슨을 받고 있습니다. 두 사람의 체형과 운동 능력이 다른데도, 강하연 강사님께서 각자의 스프링 장력을 섬세하게 조절해 주셔서 다칠 걱정 없이 매주 즐겁게 운동하고 있습니다.',
    author: '박*은 님',
    course: '바디 컨디셔닝 듀엣 (40회차)',
    tag: '모녀 듀엣',
    tagType: 'brown',
  },
  {
    id: 'r4',
    category: '자세 밸런스',
    stars: '★★★★★',
    score: '5.0',
    date: '2025.01.28',
    title: '"호텔 스파에 온 듯한 프라이빗하고 깨끗한 환경"',
    content:
      '대형 학원 특유의 시끄러움과 복잡함이 전혀 없어요. 온결은 단독 룸에서 수업이 진행되고, 수업 끝나고 마시는 따뜻한 웰컴 티 한 잔이 하루 중 가장 힐링되는 순간입니다. 인테리어와 청결도 최고예요.',
    author: '최*하 님',
    course: '자세 밸런스 1:1 (18회차)',
    tag: '전문직',
    tagType: 'olive',
  },
  {
    id: 'r5',
    category: '코어 & 라인',
    stars: '★★★★★',
    score: '5.0',
    date: '2025.01.20',
    title: '"골프 비거리와 허리 회전 유연성이 눈에 띄게 증가"',
    content:
      '골프 칠 때 허리 쪽에 뻐근함이 잦아서 시작했는데, 흉추 회전 모빌리티와 골반 파워하우스를 집중적으로 트레이닝해 주셔서 부상도 예방되고 스윙 밸런스가 놀랄 만큼 견고해졌습니다.',
    author: '정*우 님',
    course: '코어 & 라인 1:1 (28회차)',
    tag: '골프 케어',
    tagType: 'brown',
  },
  {
    id: 'r6',
    category: '바디 컨디셔닝',
    stars: '★★★★★',
    score: '5.0',
    date: '2025.01.12',
    title: '"필라테스가 처음이었는데 부담 없이 정착했습니다"',
    content:
      '유연성이 제로라서 시작 전 두려움이 컸는데, 호흡하는 법부터 기구 사용법까지 친절하게 차근차근 알려주셨어요. 동작을 강요하지 않고 제 가동 범위에 맞춰 진행해 주셔서 자신감이 생겼습니다.',
    author: '한*민 님',
    course: '바디 컨디셔닝 1:1 (10회차)',
    tag: '운동 비기너',
    tagType: 'terracotta',
  },
];

const categoryFilters = [
  { id: 'all', label: '전체 (128)', filterKey: '전체' },
  { id: 'balance', label: '자세 밸런스 (64)', filterKey: '자세 밸런스' },
  { id: 'core', label: '코어 & 라인 (42)', filterKey: '코어 & 라인' },
  { id: 'conditioning', label: '바디 컨디셔닝 (22)', filterKey: '바디 컨디셔닝' },
];

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [sortOption, setSortOption] = useState<'latest' | 'rating'>('latest');
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);

  const filteredReviews = allReviews.filter((r) => {
    if (selectedCategory === '전체') return true;
    return r.category === selectedCategory;
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
              <span className="text-[#6A684B] font-medium">후기</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              수강 후기
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              온결 필라테스를 통해 몸의 바른 중심과 일상의 활력을 되찾은 회원님들의 이야기
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              수강생 실제 후기 평점 4.98 / 5.0
            </span>
          </div>
        </div>
      </section>

      {/* 1. FILTER TABS & SEARCH/SORT */}
      <section className="pt-16 pb-8 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#D2B49A]/30 gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {categoryFilters.map((tab) => {
              const isActive = selectedCategory === tab.filterKey;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedCategory(tab.filterKey);
                    setCurrentPageNum(1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#6A684B] text-white shadow-xs'
                      : 'bg-white border border-[#D2B49A]/40 text-[#715C45] hover:bg-[#FAF8F4]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="text-[14px] sm:text-[15px] text-[#8C7760] font-normal">
            정렬:{' '}
            <button
              onClick={() => setSortOption('latest')}
              className={`cursor-pointer ${
                sortOption === 'latest'
                  ? 'font-semibold text-[#715C45]'
                  : 'text-[#8C7760] hover:text-[#715C45]'
              }`}
            >
              최신 등록순
            </button>{' '}
            |{' '}
            <button
              onClick={() => setSortOption('rating')}
              className={`cursor-pointer ${
                sortOption === 'rating'
                  ? 'font-semibold text-[#715C45]'
                  : 'text-[#8C7760] hover:text-[#715C45]'
              }`}
            >
              만족도 높은 순
            </button>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS GRID (6 CARDS) */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:border-[#6A684B]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#A36E47] text-[15px]">
                    {review.stars}{' '}
                    <span className="text-[14px] text-[#8C7760] ml-2 font-normal">
                      {review.score}
                    </span>
                  </div>
                  <span className="text-[13px] text-[#8C7760]">{review.date}</span>
                </div>
                <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#715C45] mb-3 leading-snug">
                  {review.title}
                </h3>
                <p className="text-[15px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                  {review.content}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#D2B49A]/30">
                <div>
                  <p className="text-[15px] font-semibold text-[#715C45]">{review.author}</p>
                  <p className="text-[13px] text-[#8C7760]">{review.course}</p>
                </div>
                <span
                  className={`text-[13px] px-3 py-1 rounded-md ${
                    review.tagType === 'olive'
                      ? 'text-[#6A684B] bg-[#6A684B]/10'
                      : review.tagType === 'terracotta'
                      ? 'text-[#A36E47] bg-[#A36E47]/10'
                      : 'text-[#715C45] bg-[#715C45]/10'
                  }`}
                >
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#D2B49A]/30">
            <p className="text-[16px] text-[#8C7760]">해당 프로그램에 등록된 후기가 없습니다.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-14 flex items-center justify-center space-x-2">
          <button
            onClick={() => setCurrentPageNum(1)}
            className={`w-10 h-10 rounded-full text-[14px] font-medium cursor-pointer transition-colors ${
              currentPageNum === 1
                ? 'bg-[#6A684B] text-white'
                : 'bg-white border border-[#D2B49A]/40 text-[#715C45] hover:bg-[#FAF8F4]'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPageNum(2)}
            className={`w-10 h-10 rounded-full text-[14px] font-medium cursor-pointer transition-colors ${
              currentPageNum === 2
                ? 'bg-[#6A684B] text-white'
                : 'bg-white border border-[#D2B49A]/40 text-[#715C45] hover:bg-[#FAF8F4]'
            }`}
          >
            2
          </button>
          <button
            onClick={() => setCurrentPageNum(3)}
            className={`w-10 h-10 rounded-full text-[14px] font-medium cursor-pointer transition-colors ${
              currentPageNum === 3
                ? 'bg-[#6A684B] text-white'
                : 'bg-white border border-[#D2B49A]/40 text-[#715C45] hover:bg-[#FAF8F4]'
            }`}
          >
            3
          </button>
          <span className="text-[14px] text-[#8C7760] px-2">...</span>
          <button
            onClick={() => setCurrentPageNum(12)}
            className={`w-10 h-10 rounded-full text-[14px] font-medium cursor-pointer transition-colors ${
              currentPageNum === 12
                ? 'bg-[#6A684B] text-white'
                : 'bg-white border border-[#D2B49A]/40 text-[#715C45] hover:bg-[#FAF8F4]'
            }`}
          >
            12
          </button>
        </div>
      </section>

      {/* COMMON CONSULTATION BANNER */}
      <ConsultationCtaBanner onNavigate={onNavigate} />
    </div>
  );
};
