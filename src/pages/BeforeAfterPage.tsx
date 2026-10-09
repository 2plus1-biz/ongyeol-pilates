import React from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface BeforeAfterPageProps {
  onNavigate: (page: PageId) => void;
}

export const BeforeAfterPage: React.FC<BeforeAfterPageProps> = ({ onNavigate }) => {
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
              <span className="text-[#6A684B] font-medium">Before & After</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              Before & After
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              눈속임 없는 모아레 체형 측정 격자와 3D 정밀 데이터를 통해 온결 회원님들이 직접 경험하신 실제 체형 변화
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              실제 회원 동의 기반 측정 분석 사례
            </span>
          </div>
        </div>
      </section>

      {/* 1. INTRO & ACCURACY NOTICE */}
      <section className="py-14 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
          VERIFIED RESULTS
        </span>
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
          작은 움직임이 쌓여 만드는 건강한 변화
        </h2>
        <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto leading-[1.7] font-normal">
          온결 필라테스는 과장된 체중 감량이나 조작된 수치를 제시하지 않습니다. 정밀 격자 스크린 촬영과 체형 분석 시스템을 통해 근육과 관절의 바른 정렬 변화만을 객관적으로 기록합니다.
        </p>
      </section>

      {/* 2. THREE CASE CARDS */}
      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="p-7 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between text-[14px] pb-3.5 border-b border-[#D2B49A]/30 mb-5">
                <span className="font-semibold text-[#715C45]">Case 01. 30대 직장인</span>
                <span className="text-[#8C7760]">1:1 개인 레슨 24회차</span>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#EAE3D9] flex items-center justify-center">
                  <img
                    src="/images/before-after/ba1_before.png"
                    alt="Case 01 Before 체형 측정 사진"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-[13px] px-2.5 py-0.5 rounded font-medium z-10 shadow-xs">
                    Before
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#E2E8DC] flex items-center justify-center">
                  <img
                    src="/images/before-after/ba1_after.png"
                    alt="Case 01 After 정렬 개선 사진"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-[#6A684B] text-white text-[13px] px-2.5 py-0.5 rounded font-medium z-10 shadow-xs">
                    After (12주)
                  </span>
                </div>
              </div>

              <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                거북목 & 라운드숄더 정렬 회복
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-4 font-normal">
                경추 전방 전위 각도 7도 개선 및 어깨 말림 현상 완화. 만성 어깨 결림이 현저히 줄어들고 숙면 패턴이 편안하게 회복되었습니다.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D2B49A]/30 flex items-center justify-between text-[14px]">
              <span className="text-[#A36E47] font-semibold">경추 전방 각도 58% 개선</span>
              <span className="text-[#715C45] bg-[#D2B49A]/20 px-3 py-1 rounded-md text-[13px]">
                자세 밸런스 코스
              </span>
            </div>
          </div>

          {/* Case 2 */}
          <div className="p-7 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between text-[14px] pb-3.5 border-b border-[#D2B49A]/30 mb-5">
                <span className="font-semibold text-[#715C45]">Case 02. 30대 주부(출산 후)</span>
                <span className="text-[#8C7760]">1:1 개인 레슨 30회차</span>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#EAE3D9] flex items-center justify-center">
                  <img
                    src="/images/before-after/ba2_before.png"
                    alt="Case 02 Before 체형 측정 사진"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-[13px] px-2.5 py-0.5 rounded font-medium z-10 shadow-xs">
                    Before
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#E2E8DC] flex items-center justify-center">
                  <img
                    src="/images/before-after/ba2_after.png"
                    alt="Case 02 After 정렬 개선 사진"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-[#6A684B] text-white text-[13px] px-2.5 py-0.5 rounded font-medium z-10 shadow-xs">
                    After (15주)
                  </span>
                </div>
              </div>

              <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                골반 좌우 비대칭 & 척추 균형 회복
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-4 font-normal">
                좌우 요근 높이편차 1.8cm 차이에서 정상 수치 범위 안착. 복부 심부 근육 활성화로 골반 축 안정화 및 보행 시 바른 중심축을 확립했습니다.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D2B49A]/30 flex items-center justify-between text-[14px]">
              <span className="text-[#A36E47] font-semibold">골반 대칭도 92% 회복</span>
              <span className="text-[#715C45] bg-[#D2B49A]/20 px-3 py-1 rounded-md text-[13px]">
                산후 코어 & 라인
              </span>
            </div>
          </div>

          {/* Case 3 */}
          <div className="p-7 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between text-[14px] pb-3.5 border-b border-[#D2B49A]/30 mb-5">
                <span className="font-semibold text-[#715C45]">Case 03. 40대 전문직</span>
                <span className="text-[#8C7760]">듀엣 레슨 36회차</span>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#EAE3D9] flex items-center justify-center">
                  <img
                    src="/images/before-after/ba3_before.png"
                    alt="Case 03 Before 체형 측정 사진"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-[13px] px-2.5 py-0.5 rounded font-medium z-10 shadow-xs">
                    Before
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#E2E8DC] flex items-center justify-center">
                  <img
                    src="/images/before-after/ba3_after.png"
                    alt="Case 03 After 정렬 개선 사진"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-[#6A684B] text-white text-[13px] px-2.5 py-0.5 rounded font-medium z-10 shadow-xs">
                    After (18주)
                  </span>
                </div>
              </div>

              <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                골반 전방경사 및 허리 긴장 완화
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-4 font-normal">
                요추 과전만 완화 및 장요근 스트레칭, 둔근 활성화를 통해 만성 피로가 현저히 감소하고 바른 기립 자세를 자연스럽게 유지하게 되었습니다.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D2B49A]/30 flex items-center justify-between text-[14px]">
              <span className="text-[#A36E47] font-semibold">요추 안정성 4.1배 향상</span>
              <span className="text-[#715C45] bg-[#D2B49A]/20 px-3 py-1 rounded-md text-[13px]">
                바디 컨디셔닝
              </span>
            </div>
          </div>
        </div>

        {/* Footnote Notice */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#D2B49A]/30 text-center">
          <p className="text-[13px] text-[#8C7760] font-normal leading-[1.7]">
            * 상기 사진 및 측정 수치는 온결 필라테스 실제 회원의 동의 하에 게시되었으며, 개인의 체형 특성과 운동 주기에 따라 회복 속도 및 체감 변화는 상이할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 3. MEASUREMENT PROCESS GUIDE */}
      <section className="py-20 bg-white border-t border-[#D2B49A]/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full text-center">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
            PRECISION ASSESSMENT
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
            온결의 정밀 측정 및 리포트 시스템
          </h2>
          <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-xl mx-auto mb-12 font-normal leading-[1.7]">
            모든 회원은 첫 방문 시 체형 정밀 측정 분석을 거치며, 매 10회차마다 전후 정렬 비교 리포트를 제공받아 운동 효과를 투명하게 점검합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30">
              <span className="text-[17px] lg:text-[18px] font-semibold text-[#6A684B] block mb-2">
                01. 3D 관절 모션 측정
              </span>
              <p className="text-[15px] text-[#8C7760] font-normal leading-[1.7]">
                정면·측면 서 있는 자세 및 걷기 동작 시 관절의 궤적과 비대칭 기울기를 오차 없이 스캔합니다.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30">
              <span className="text-[17px] lg:text-[18px] font-semibold text-[#6A684B] block mb-2">
                02. 근육 단축·약화 분석
              </span>
              <p className="text-[15px] text-[#8C7760] font-normal leading-[1.7]">
                과긴장된 근육과 늘어나서 힘을 쓰지 못하는 심부 근육을 판별하여 맞춤 운동 우선순위를 수립합니다.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30">
              <span className="text-[17px] lg:text-[18px] font-semibold text-[#6A684B] block mb-2">
                03. 개인 모바일 차트 제공
              </span>
              <p className="text-[15px] text-[#8C7760] font-normal leading-[1.7]">
                매 세션 후 기록된 전후 사진과 강사 피드백을 모바일에서 언제든 열람하며 변화를 체감합니다.
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
