import React from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface InstructorsPageProps {
  onNavigate: (page: PageId, instructorNote?: string) => void;
}

export const InstructorsPage: React.FC<InstructorsPageProps> = ({ onNavigate }) => {
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
              <span className="text-[#6A684B] font-medium">강사 소개</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              강사 소개
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              정통 해부학 전문성과 섬세한 공감으로 회원의 신체 변화를 이끄는 강사진
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              전 강사진 물리치료학·체육학 전공 & 국제 공인 자격 보유
            </span>
          </div>
        </div>
      </section>

      {/* 1. TEACHING PHILOSOPHY */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
          TEACHING PHILOSOPHY
        </span>
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
          섬세한 관찰에서 시작되는 변화
        </h2>
        <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto leading-[1.7] font-normal">
          온결의 모든 강사진은 단순한 동작 지시자가 아닙니다. 회원의 걸음걸이, 호흡의 깊이, 미세한 관절의 긴장까지 깊이 관찰하여, 부상 위험 없는 안전하고 올바른 움직임의 길을 안내합니다.
        </p>
      </section>

      {/* 2. DETAILED 3 INSTRUCTOR CARDS */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Instructor 1 */}
          <div className="p-8 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#FAF8F4] shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X66laqv84N8mCs29NHuwW2Bujmal2Bi2otmyySQWBp4qzZ2D3AbdEdsCm0uA--sJbimoPpva-LfqYa1068XMCEJl0IwGealki6rm8jYIHAyDfJrqbU5HdD6zbtwCBuYBMPdaci67a5_BzsYEUXfDNBLCQLIl9NWs2reXXc97Pge8S82RPZO2s9Fn4nVN_o08c49B_VF5ObfDiyZaAa2X0NFQ0e0CMHUWdhGH9pdYy8_y2YdaYgPoaxHRo"
                  alt="정온유 대표원장"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mb-6">
                <span className="text-[13px] font-semibold text-[#A36E47] bg-[#A36E47]/15 px-3.5 py-1 rounded-full inline-block mb-2">
                  대표원장
                </span>
                <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-1">
                  정온유 원장
                </h3>
                <p className="text-[15px] text-[#8C7760] font-normal">체형 정렬 및 척추 역학 전담</p>
              </div>

              <div className="space-y-4 mb-6 text-[14px] lg:text-[15px] leading-[1.7] border-t border-b border-[#D2B49A]/30 py-5">
                <div>
                  <p className="font-semibold text-[#715C45] mb-1 text-[15px]">전문 분야</p>
                  <p className="text-[#8C7760]">
                    경추·요추 척추 정렬 케어, 골반 비대칭 밸런스, 만성 피로 회복
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#715C45] mb-1 text-[15px]">주요 자격 및 이력</p>
                  <ul className="text-[#8C7760] space-y-1">
                    <li>• Balanced Body Master Instructor 수료</li>
                    <li>• 물리치료학 석사 및 임상 재활 8년 경력</li>
                    <li>• 산전산후 필라테스 국제 전문 강사</li>
                    <li>• 대한도수물리치료학회 정회원</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 mb-6 text-center">
                <p className="text-[14px] lg:text-[15px] text-[#715C45] leading-[1.7] font-normal">
                  "몸이 보내는 신호를 섬세하게 관찰하고, 일상 속 잊혀졌던 깊은 활력과 바른 호흡을 되찾아 드리겠습니다."
                </p>
              </div>
              <button
                onClick={() => onNavigate('reservation', '정온유 원장 1:1 상담 희망')}
                className="block w-full py-3.5 text-center rounded-xl bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
              >
                정온유 원장 1:1 상담 신청
              </button>
            </div>
          </div>

          {/* Instructor 2 */}
          <div className="p-8 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#FAF8F4] shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UuKwI8y8UhX_aT8XpABNzBtr0oE-HFRVsxT_nnF4fChBHe0KW2YwgtgoH3q1Qs2rTeSpEPT7Qi9PxnUCCFRtc_yQUIBNZKJp0eSraF5zE6nsh67_wMJ-wbhqdKdTOIS4X4Bu6AmGfEZ5crll7-vKdTJqU0sxgyoErL9-jZJTWBNvFOxjrCvf6MU_iJqEmKi3S8ZC_B9Niw3Gt0-2aMXGIo5ofzNDfiLq5d9KiqNoLGHUGxnf0Pm7wGepo"
                  alt="강서진 수석강사"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mb-6">
                <span className="text-[13px] font-semibold text-[#6A684B] bg-[#6A684B]/15 px-3.5 py-1 rounded-full inline-block mb-2">
                  수석강사
                </span>
                <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-1">
                  강서진 강사
                </h3>
                <p className="text-[15px] text-[#8C7760] font-normal">코어 파워 & 바디라인 스타일링</p>
              </div>

              <div className="space-y-4 mb-6 text-[14px] lg:text-[15px] leading-[1.7] border-t border-b border-[#D2B49A]/30 py-5">
                <div>
                  <p className="font-semibold text-[#715C45] mb-1 text-[15px]">전문 분야</p>
                  <p className="text-[#8C7760]">
                    파워 코어 강화, 슬림 바디라인 완성, 다이어트 & 인터벌 필라테스
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#715C45] mb-1 text-[15px]">주요 자격 및 이력</p>
                  <ul className="text-[#8C7760] space-y-1">
                    <li>• Polestar Pilates Comprehensive 인증</li>
                    <li>• 연세대학교 체육교육학 학사 졸업</li>
                    <li>• 골프 기능성 트레이닝 및 회전 파워 시퀀스 수료</li>
                    <li>• 소도구 & 매트 지도자 과정 수석 강사</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 mb-6 text-center">
                <p className="text-[14px] lg:text-[15px] text-[#715C45] leading-[1.7] font-normal">
                  "정확한 호흡과 움직임 속에서 발견하는 당당하고 온전한 자신감을 끝까지 함께 만들어 가겠습니다."
                </p>
              </div>
              <button
                onClick={() => onNavigate('reservation', '강서진 강사 1:1 상담 희망')}
                className="block w-full py-3.5 text-center rounded-xl bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
              >
                강서진 강사 1:1 상담 신청
              </button>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className="p-8 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#FAF8F4] shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X9cJe6Y48Mkvz32ROC0o890gpTl4ssMGMm7nXBykDaommj97oJtt1rm3A15TX-DrFtBTHEkkYMtWiaBdFeQHn8cTn9bhqdJxcfGEDRkdpxxoo5sHqDGpwC4Orml3p9gU7Sm74iRA9ZrU1K2MDQnHBtgB98KNmb1lbq20_L9u2XXtDiXFdLTO-pGd1Vef4qpTuc1czIWNjsBKlObhQzxpFKPqBlnQhEc1XC0JQPoOvfPqtyUJfY_0q4bqM"
                  alt="윤도현 전임강사"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mb-6">
                <span className="text-[13px] font-semibold text-[#715C45] bg-[#715C45]/15 px-3.5 py-1 rounded-full inline-block mb-2">
                  전임강사
                </span>
                <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-1">
                  윤도현 강사
                </h3>
                <p className="text-[15px] text-[#8C7760] font-normal">기능성 운동처방 & 컨디셔닝</p>
              </div>

              <div className="space-y-4 mb-6 text-[14px] lg:text-[15px] leading-[1.7] border-t border-b border-[#D2B49A]/30 py-5">
                <div>
                  <p className="font-semibold text-[#715C45] mb-1 text-[15px]">전문 분야</p>
                  <p className="text-[#8C7760]">
                    스포츠 손상 예방, 관절 가동성 회복, 근육 긴장 완화 스트레칭
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#715C45] mb-1 text-[15px]">주요 자격 및 이력</p>
                  <ul className="text-[#8C7760] space-y-1">
                    <li>• STOTT PILATES Full Certified</li>
                    <li>• 스포츠의학 전공 / 근막 이완 테라피스트</li>
                    <li>• 골반 및 척추 기능 평가 및 교정 전문가 과정</li>
                    <li>• 라운드숄더 & 굽은 등 교정 스페셜리스트</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 mb-6 text-center">
                <p className="text-[14px] lg:text-[15px] text-[#715C45] leading-[1.7] font-normal">
                  "일상의 뻐근한 피로감을 걷어내고, 관절마다 가장 편안하고 자연스러운 움직임을 선물해 드리겠습니다."
                </p>
              </div>
              <button
                onClick={() => onNavigate('reservation', '윤도현 강사 1:1 상담 희망')}
                className="block w-full py-3.5 text-center rounded-xl bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
              >
                윤도현 강사 1:1 상담 신청
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CONSULTATION BANNER */}
      <ConsultationCtaBanner onNavigate={onNavigate} />
    </div>
  );
};
