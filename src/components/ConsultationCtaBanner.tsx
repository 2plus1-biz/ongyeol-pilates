import React from 'react';
import { PageId } from '../types';

interface ConsultationCtaBannerProps {
  onNavigate: (page: PageId) => void;
}

export const ConsultationCtaBanner: React.FC<ConsultationCtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-20 mt-16">
      <div className="rounded-3xl bg-[#D2B49A]/25 border border-[#D2B49A]/50 p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div className="mb-2 md:mb-0 max-w-3xl">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.2em] uppercase block mb-2">
            START YOUR JOURNEY
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-3 leading-snug">
            나를 위한 첫 움직임, 온결에서 시작하세요
          </h2>
          <p className="text-[16px] lg:text-[17px] text-[#8C7760] font-normal leading-[1.7]">
            온결 필라테스는 100% 사전 예약제로 운영되며, 첫 방문 시 정밀 체형 측정 및 1:1 상담을 무료로 진행해 드립니다.
          </p>
        </div>
        <button
          onClick={() => onNavigate('reservation')}
          className="px-8 py-4 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[16px] font-medium transition-colors shadow-sm whitespace-nowrap cursor-pointer shrink-0"
        >
          방문 상담 예약하기
        </button>
      </div>
    </section>
  );
};
