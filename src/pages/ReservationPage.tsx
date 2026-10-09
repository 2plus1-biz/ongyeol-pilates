import React, { useState, useEffect } from 'react';
import { PageId, ReservationFormData } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface ReservationPageProps {
  onNavigate: (page: PageId) => void;
  initialProgram?: string;
  initialNote?: string;
}

export const ReservationPage: React.FC<ReservationPageProps> = ({
  onNavigate,
  initialProgram,
  initialNote,
}) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    program: initialProgram || '',
    timeSlot: '',
    notes: initialNote || '',
    agreePrivacy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
    if (initialNote) {
      setFormData((prev) => ({
        ...prev,
        notes: prev.notes ? `${prev.notes}\n(${initialNote})` : initialNote,
      }));
    }
  }, [initialProgram, initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 상담 안내 연락에 동의해 주세요.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      program: '',
      timeSlot: '',
      notes: '',
      agreePrivacy: false,
    });
    setIsSubmitted(false);
  };

  const programLabelMap: Record<string, string> = {
    balance: '자세 밸런스 케어 (체형 정렬/거북목)',
    core: '코어 & 라인 스타일링 (속근육 강화)',
    conditioning: '바디 컨디셔닝 (긴장 완화/스트레칭)',
    prenatal: '산전/산후 스페셜 케어',
  };

  const timeSlotLabelMap: Record<string, string> = {
    m1: '오전 (09:00 - 12:00)',
    a1: '오후 (13:00 - 17:00)',
    e1: '저녁 (18:00 - 21:00)',
    sat: '토요일 주말 상담',
  };

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
              <span className="text-[#6A684B] font-medium">상담 예약</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              상담 예약 및 오시는 길
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              나를 위한 첫 움직임, 온결의 전문 강사진과 함께 부담 없이 시작해 보세요
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              첫 방문 시 정밀 체형 분석 & 1:1 진단 무료
            </span>
          </div>
        </div>
      </section>

      {/* MAIN RESERVATION SECTION */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT: RESERVATION FORM OR COMPLETION MESSAGE */}
          <div className="lg:col-span-7 p-8 lg:p-12 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm">
            {!isSubmitted ? (
              <>
                <div className="mb-8 pb-6 border-b border-[#D2B49A]/30">
                  <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.2em] uppercase block mb-1">
                    BOOKING APPOINTMENT
                  </span>
                  <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#715C45]">
                    방문 상담 & 체험 예약 신청
                  </h2>
                  <p className="text-[15px] text-[#8C7760] mt-1.5 font-normal leading-[1.7]">
                    신청해 주시면 전담 강사가 1시간 이내에 확인 후 예약 확정 문자를 전송해 드립니다.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[14px] sm:text-[15px] font-semibold text-[#715C45] mb-2">
                        성함 <span className="text-[#A36E47]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="홍길동"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F4] border border-[#D2B49A]/40 text-[15px] text-[#715C45] placeholder-[#8C7760]/60 focus:outline-none focus:border-[#6A684B] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] sm:text-[15px] font-semibold text-[#715C45] mb-2">
                        연락처 <span className="text-[#A36E47]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="010-1234-5678"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F4] border border-[#D2B49A]/40 text-[15px] text-[#715C45] placeholder-[#8C7760]/60 focus:outline-none focus:border-[#6A684B] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[14px] sm:text-[15px] font-semibold text-[#715C45] mb-2">
                        관심 프로그램 <span className="text-[#A36E47]">*</span>
                      </label>
                      <select
                        required
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F4] border border-[#D2B49A]/40 text-[15px] text-[#715C45] focus:outline-none focus:border-[#6A684B] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="">프로그램을 선택해주세요</option>
                        <option value="balance">자세 밸런스 케어 (체형 정렬/거북목)</option>
                        <option value="core">코어 & 라인 스타일링 (속근육 강화)</option>
                        <option value="conditioning">바디 컨디셔닝 (긴장 완화/스트레칭)</option>
                        <option value="prenatal">산전/산후 스페셜 케어</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[14px] sm:text-[15px] font-semibold text-[#715C45] mb-2">
                        희망 상담 시간대 <span className="text-[#A36E47]">*</span>
                      </label>
                      <select
                        required
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F4] border border-[#D2B49A]/40 text-[15px] text-[#715C45] focus:outline-none focus:border-[#6A684B] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="">시간대를 선택해주세요</option>
                        <option value="m1">오전 (09:00 - 12:00)</option>
                        <option value="a1">오후 (13:00 - 17:00)</option>
                        <option value="e1">저녁 (18:00 - 21:00)</option>
                        <option value="sat">토요일 주말 상담</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] sm:text-[15px] font-semibold text-[#715C45] mb-2">
                      운동 목적 및 현재 통증 부위 (선택)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="예: 평소 굽은 등으로 인한 어깨 결림이 있어 정밀 체형 교정을 희망합니다."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F4] border border-[#D2B49A]/40 text-[15px] text-[#715C45] placeholder-[#8C7760]/60 focus:outline-none focus:border-[#6A684B] focus:bg-white transition-all resize-none leading-[1.7]"
                    ></textarea>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#D2B49A]/30">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreePrivacy}
                        onChange={(e) =>
                          setFormData({ ...formData, agreePrivacy: e.target.checked })
                        }
                        className="mt-1 rounded text-[#6A684B] focus:ring-[#6A684B] border-[#D2B49A] cursor-pointer"
                      />
                      <span className="text-[14px] text-[#8C7760] leading-[1.7] font-normal">
                        [필수] 개인정보 수집 및 상담 안내 연락에 동의합니다. (수집 항목: 성함, 연락처, 상담 내용 / 보유 기간: 상담 완료 후 30일 이내 파기)
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#6A684B] hover:bg-[#55533A] text-white text-[16px] font-medium transition-colors shadow-md cursor-pointer"
                  >
                    상담 예약 신청하기
                  </button>
                </form>
              </>
            ) : (
              /* SUBMISSION COMPLETION MESSAGE */
              <div className="py-6 text-center animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F4] border-2 border-[#6A684B] flex items-center justify-center text-[#6A684B] mb-5 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.2em] uppercase block mb-1">
                  RESERVATION RECEIVED
                </span>
                <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#715C45] mb-3">
                  상담 예약 신청이 정상적으로 접수되었습니다
                </h2>
                <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] max-w-lg mx-auto mb-8 font-normal">
                  온결 필라테스를 찾아주셔서 진심으로 감사드립니다.<br />
                  신청해 주신 내용을 전담 강사가 확인 후 <strong>1시간 이내</strong>에 예약 확정 안내 문자를 전송해 드립니다.
                </p>

                {/* Summary Box */}
                <div className="bg-[#FAF8F4] border border-[#D2B49A]/40 rounded-2xl p-6 text-left max-w-lg mx-auto mb-8 space-y-3 text-[15px]">
                  <div className="flex justify-between py-1.5 border-b border-[#D2B49A]/20">
                    <span className="text-[#8C7760]">신청자 성함</span>
                    <span className="font-semibold text-[#715C45]">{formData.name} 님</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#D2B49A]/20">
                    <span className="text-[#8C7760]">연락처</span>
                    <span className="font-semibold text-[#715C45]">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#D2B49A]/20">
                    <span className="text-[#8C7760]">관심 프로그램</span>
                    <span className="font-semibold text-[#715C45]">
                      {programLabelMap[formData.program] || formData.program || '자세 밸런스 케어'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#D2B49A]/20">
                    <span className="text-[#8C7760]">희망 상담 시간대</span>
                    <span className="font-semibold text-[#715C45]">
                      {timeSlotLabelMap[formData.timeSlot] || formData.timeSlot || '오후 (13:00 - 17:00)'}
                    </span>
                  </div>
                  {formData.notes && (
                    <div className="pt-2">
                      <span className="text-[#8C7760] block mb-1">운동 목적 및 요청사항:</span>
                      <p className="text-[#715C45] bg-white p-3.5 rounded-lg border border-[#D2B49A]/30 leading-[1.7]">
                        {formData.notes}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#D2B49A] hover:bg-[#FAF8F4] text-[15px] font-medium text-[#715C45] transition-colors cursor-pointer"
                  >
                    추가 상담 예약하기
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
                  >
                    홈으로 이동
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: STUDIO INFO & MAP */}
          <div className="lg:col-span-5 space-y-8">
            {/* Studio Info Box */}
            <div className="p-8 lg:p-10 rounded-3xl bg-white border border-[#D2B49A]/40 shadow-sm">
              <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.2em] uppercase block mb-1">
                STUDIO INFORMATION
              </span>
              <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#715C45] mb-6">스튜디오 방문 안내</h3>

              <div className="space-y-5 text-[15px] text-[#715C45] leading-[1.7] font-normal">
                <div className="flex items-start">
                  <span className="w-7 shrink-0 text-[#6A684B]">
                    <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#715C45]">주소</p>
                    <p className="text-[#8C7760]">
                      서울특별시 강남구 논현동 도산대로 123 도산빌딩 4층<br />
                      (강남구청역 3번 출구 도보 5분 / 신사역 3번 출구 도보 10분)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-7 shrink-0 text-[#6A684B]">
                    <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#715C45]">운영 시간</p>
                    <p className="text-[#8C7760]">
                      평일: 07:00 - 22:00<br />
                      토요일: 09:00 - 17:00 (일요일 및 공휴일 휴무)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-7 shrink-0 text-[#6A684B]">
                    <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#715C45]">연락처</p>
                    <p className="text-[#8C7760]">02-543-2025 / 010-9876-2025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-7 shrink-0 text-[#6A684B]">
                    <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#715C45]">카카오톡 채널</p>
                    <p className="text-[#8C7760]">@온결필라테스공식 (실시간 상담 가능)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Map Illustration */}
            <div className="rounded-3xl overflow-hidden border border-[#D2B49A]/40 shadow-sm bg-white p-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1W6MRrKBNYCmREMO4xHmtIzoxCoKfyrMNnZ8rzKIXOIhxdgSC2X8M67flDuDetWtlqhfU6S3VWpPvLG62EIA9Kl1lvht6xtoLjTPiVoyJqkB3AsM_fjWvDzBbEzhd-mVPxeIfknSycpM9GWl6gioiLCbASKOWw7yfjUOSh938B-sTkEPlenoM-2rIQYawpHroVQrSowKWhmtjh6itUkB4nk3jcDrf6gFFeTxfW37M87zbD2Z-_uGXOsNuw"
                  alt="온결 필라테스 약도"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[13px] text-center text-[#8C7760] mt-3.5 font-normal">
                건물 지하 전용 주차 타워 2시간 무료 지원 및 정문 발렛 가능
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
