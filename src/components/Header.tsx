import React, { useState } from 'react';
import { PageId, NavItem } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const navItems: NavItem[] = [
  { id: 'home', label: '홈' },
  { id: 'studio', label: '스튜디오 소개' },
  { id: 'programs', label: '프로그램 소개' },
  { id: 'instructors', label: '강사 소개' },
  { id: 'before-after', label: 'Before & After' },
  { id: 'schedule', label: '수업 시간표' },
  { id: 'reviews', label: '후기' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#D2B49A]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="hover:opacity-80 transition-opacity cursor-pointer text-left flex items-center"
          aria-label="온결 필라테스 홈으로 이동"
        >
          <img
            src="/images/logo-horizontal.png"
            alt="온결 필라테스 (ONGYEOL PILATES)"
            className="h-[32px] md:h-[40px] w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-7 text-[16px] font-medium text-[#715C45]/80">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer transition-colors pb-1 ${
                    isActive
                      ? 'text-[#715C45] font-semibold border-b-2 border-[#6A684B]'
                      : 'hover:text-[#715C45]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="hidden md:block w-px h-5 bg-[#D2B49A]/40 ml-8 mr-8"></div>
          <button
            onClick={() => handleNavClick('reservation')}
            className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[16px] font-medium transition-all shadow-sm cursor-pointer ${
              currentPage === 'reservation'
                ? 'ring-2 ring-[#6A684B] ring-offset-2 ring-offset-[#FAF8F4]'
                : ''
            }`}
          >
            상담 예약
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#715C45] focus:outline-none cursor-pointer rounded-lg hover:bg-[#D2B49A]/20 transition-colors"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F4] border-b border-[#D2B49A]/40 px-6 py-5 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3.5 text-[16px] font-medium text-[#715C45]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#6A684B]/15 text-[#6A684B] font-semibold'
                      : 'hover:bg-[#D2B49A]/20 text-[#715C45]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#6A684B]"></span>}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#D2B49A]/30">
              <button
                onClick={() => handleNavClick('reservation')}
                className="w-full py-3.5 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[16px] font-medium transition-colors text-center shadow-sm cursor-pointer"
              >
                상담 예약하기
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
