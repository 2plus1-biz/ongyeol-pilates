import React, { useState } from 'react';
import { PageId } from '../types';

interface FooterProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#D2B49A]/20 border-t border-[#D2B49A]/40 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-[#D2B49A]/30">
          <div>
            <img
              src="/images/logo-horizontal.png"
              alt="온결 필라테스 (ONGYEOL PILATES)"
              className="h-[36px] w-auto object-contain mb-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onNavigate('home')}
            />
            <p className="text-[14px] sm:text-[15px] text-[#8C7760] font-normal leading-[1.7]">
              몸의 결을 바르게, 일상에 온기를. 프라이빗 부티크 필라테스 스튜디오
            </p>
          </div>
          <div className="flex flex-wrap gap-5 mt-6 md:mt-0 text-[15px] sm:text-[16px] font-medium text-[#715C45]/80">
            <button
              onClick={() => onNavigate('home')}
              className={`cursor-pointer transition-colors ${currentPage === 'home' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              홈
            </button>
            <button
              onClick={() => onNavigate('studio')}
              className={`cursor-pointer transition-colors ${currentPage === 'studio' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              스튜디오 소개
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className={`cursor-pointer transition-colors ${currentPage === 'programs' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              프로그램 소개
            </button>
            <button
              onClick={() => onNavigate('instructors')}
              className={`cursor-pointer transition-colors ${currentPage === 'instructors' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              강사 소개
            </button>
            <button
              onClick={() => onNavigate('before-after')}
              className={`cursor-pointer transition-colors ${currentPage === 'before-after' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              Before & After
            </button>
            <button
              onClick={() => onNavigate('schedule')}
              className={`cursor-pointer transition-colors ${currentPage === 'schedule' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              수업 시간표
            </button>
            <button
              onClick={() => onNavigate('reviews')}
              className={`cursor-pointer transition-colors ${currentPage === 'reviews' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              후기
            </button>
            <button
              onClick={() => onNavigate('reservation')}
              className={`cursor-pointer transition-colors ${currentPage === 'reservation' ? 'text-[#715C45] font-semibold' : 'hover:text-[#715C45]'}`}
            >
              상담 예약
            </button>
          </div>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-[14px] text-[#8C7760] leading-relaxed font-normal">
          <div>
            <p className="font-semibold text-[#715C45] mb-2 text-[15px]">사업자 정보</p>
            <p>상호: 온결 필라테스 스튜디오</p>
            <p>대표자: 정온유 | 사업자등록번호: 214-82-01938</p>
            <p>통신판매업신고: 제 2024-서울강남-0312호</p>
          </div>
          <div>
            <p className="font-semibold text-[#715C45] mb-2 text-[15px]">위치 및 문의</p>
            <p>서울특별시 강남구 논현동 도산대로 123 4층</p>
            <p>전화: 02-543-2025 / 010-9876-2025</p>
            <p>이메일: contact@ongyeolpilates.kr</p>
            <p>인스타그램: @ongyeol.pilates</p>
          </div>
          <div>
            <p className="font-semibold text-[#715C45] mb-2 text-[15px]">레슨 정책</p>
            <p>• 100% 모바일 당일 및 사전 예약제 운영</p>
            <p>• 당일 예약 취소 규정 (수업 12시간 전 무료 취소)</p>
            <p>• 전 강사진 개인 맞춤 차트 실시간 연동</p>
          </div>
          <div>
            <p className="font-semibold text-[#715C45] mb-2 text-[15px]">고객 센터</p>
            <p>평일 07:00 - 22:00 (점심시간 12:00 - 13:00)</p>
            <p>카카오 채널: @온결필라테스 공식</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => setModalType('privacy')}
                className="underline hover:text-[#715C45] cursor-pointer"
              >
                개인정보처리방침
              </button>
              <button
                onClick={() => setModalType('terms')}
                className="underline hover:text-[#715C45] cursor-pointer"
              >
                이용약관
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#D2B49A]/30 text-center text-[13px] text-[#8C7760]">
          &copy; 2025 ONGYEOL PILATES. All rights reserved.
        </div>
      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F4] max-w-lg w-full rounded-3xl p-6 md:p-8 border border-[#D2B49A]/50 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#D2B49A]/30 mb-4">
              <h3 className="font-semibold text-[#715C45] text-base">
                {modalType === 'privacy' ? '개인정보처리방침' : '이용약관 안내'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="text-[#8C7760] hover:text-[#715C45] cursor-pointer p-1"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-[#8C7760] leading-relaxed space-y-3">
              {modalType === 'privacy' ? (
                <>
                  <p>1. 온결 필라테스는 이용자의 개인정보를 매우 소중하게 다루며, 관련 법령을 철저히 준수합니다.</p>
                  <p>2. 수집 항목: 성명, 연락처, 상담 및 레슨 관리 내용.</p>
                  <p>3. 수집 목적: 예약 확정 안내, 맞춤형 레슨 일정 조율 및 상담 서비스 제공.</p>
                  <p>4. 보유 기간: 수집 목적 달성 또는 회원 요청 시 즉시 파기(최대 1년 보관).</p>
                </>
              ) : (
                <>
                  <p>1. 온결 필라테스는 100% 사전 예약제로 회원의 최상의 수업 퀄리티를 유지합니다.</p>
                  <p>2. 예약 취소 및 변경은 수업 개시 12시간 전까지 별도의 차감 없이 가능합니다.</p>
                  <p>3. 쾌적한 위생 관리를 위해 전용 토삭스 착용을 권장드립니다.</p>
                  <p>4. 회원의 건강 상태와 통증 이력은 전담 강사와의 문진 시 사전 고지하여 주시기 바랍니다.</p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#D2B49A]/30 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-full bg-[#6A684B] text-white text-xs font-medium cursor-pointer"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
