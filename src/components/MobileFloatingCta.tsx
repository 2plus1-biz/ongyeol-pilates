import React from 'react';
import { PageId } from '../types';

interface MobileFloatingCtaProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const MobileFloatingCta: React.FC<MobileFloatingCtaProps> = ({ currentPage, onNavigate }) => {
  // If already on reservation page, we don't display the floating button to avoid obstructing form submit
  if (currentPage === 'reservation') {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-[#FAF8F4]/95 backdrop-blur-md border-t border-[#D2B49A]/40 shadow-lg">
      <button
        onClick={() => onNavigate('reservation')}
        className="w-full py-4 text-center rounded-full bg-[#6A684B] hover:bg-[#55533A] active:bg-[#55533A] text-white text-[16px] font-medium transition-colors shadow-md cursor-pointer block"
      >
        상담 예약하기
      </button>
    </div>
  );
};
