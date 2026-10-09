import React from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface StudioPageProps {
  onNavigate: (page: PageId) => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onNavigate }) => {
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
              <span className="text-[#6A684B] font-medium">스튜디오 소개</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] tracking-tight">
              스튜디오 소개
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] mt-2 font-normal leading-[1.7]">
              따뜻한 자연광과 오크 원목이 어우러진 도심 속 온전한 힐링 안식처
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#D2B49A]/50 text-[13px] text-[#A36E47] font-medium">
              미국 Balanced Body 최고급 기구 전실 완비
            </span>
          </div>
        </div>
      </section>

      {/* 1. BRAND STORY */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-[#D2B49A]/40 aspect-[4/3]">
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1XNRSU9O4Vm11Bw2pTZ9uEuiBt42NRJZLOPNql2JYEwS_3vh33472W7B_rOXvbzukMIHJaepK9Z7XLhFCNUsrDMCM-H2MU4vpejihLxZcuJz_TwD8UdWhw_NHrt4L386cby4yrbQnFrvHWrLHdoKUbpKd6Iu0xqU3MCRkkPB4MlFDdeLO5ri05QNhbTO4kt_vXj3nUGpjDCWHE6Yg8OuJZpNFJdT0eRpWJ0KOO8jO5mNomXAcnx4g9KfQ"
              alt="온결 필라테스 스튜디오 전경"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-3">
              BRAND STORY
            </span>
            <h2 className="text-[28px] lg:text-[38px] font-semibold text-[#715C45] mb-6 leading-snug">
              몸의 결을 고르게 하고,<br />일상에 따스한 온기를 채우는 공간
            </h2>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] leading-[1.7] mb-4 font-normal">
              '온결'은 따스한 기운과 신체의 바른 결을 뜻합니다. 바쁜 도심 생활 속에서 우리는 종종 자신의 호흡을 잊고, 틀어진 자세와 긴장된 근육으로 일상을 버텨냅니다.
            </p>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
              온결 필라테스는 회원의 몸 상태를 기계적으로 판단하지 않습니다. 섬세한 관찰과 전문 해부학적 지식을 바탕으로 각자의 고유한 신체 결에 맞는 가장 자연스러운 움직임의 궤적을 함께 찾아갑니다.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D2B49A]/30">
              <div>
                <p className="text-[14px] text-[#8C7760] font-normal">설립 가치</p>
                <p className="text-[16px] lg:text-[17px] font-semibold text-[#715C45] mt-1">정직한 티칭과 프라이빗 케어</p>
              </div>
              <div>
                <p className="text-[14px] text-[#8C7760] font-normal">공간 지향점</p>
                <p className="text-[16px] lg:text-[17px] font-semibold text-[#715C45] mt-1">자연주의 어스톤 웰니스 룸</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR SPACE CARDS */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#D2B49A]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
              SPACES OF ONGYEOL
            </span>
            <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-3">
              몸과 마음이 편안해지는 4가지 공간
            </h2>
            <p className="text-[16px] lg:text-[17px] text-[#8C7760] font-normal leading-[1.7]">
              회원님의 온전한 휴식과 몰입을 위해 세심하게 설계된 독립 공간들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Space 1 */}
            <div className="p-7 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-52 h-52 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/src/assets/images/private_pilates_suite_1791541277206.jpg"
                  alt="1:1 프라이빗 룸"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <span className="text-[13px] font-semibold text-[#A36E47] uppercase tracking-wider block mb-1">
                    01. PRIVATE SUITE
                  </span>
                  <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
                    1:1 프라이빗 룸
                  </h3>
                  <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                    캐딜락, 리포머, 체어, 바렐 등 모든 기구가 전용 배치되어 외부 시선 없이 강사와 1:1로 온전히 몰입하는 독립 룸입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D2B49A]/30 text-[14px] text-[#715C45]">
                  기구 구성: 캐딜락, 리포머, 래더바렐, 체어 풀세트
                </div>
              </div>
            </div>

            {/* Space 2 */}
            <div className="p-7 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-52 h-52 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UF7g2e47o-HiHd_XXWsDwsKwLZaYw82dY85jqH34kulCTuVY2osR8xCOJiODfG3SWmCKlU6WAUX0cj0iHhItdMhOwlvzHpT-WAY7tRdcRjeXdG2snSUgdNfkidkSSG7Q6MTT4a0lGO9eW5YiHE58S5zrMWz8JJxUCctRWkNrZ5nBHigXlR8Fpl9Rzngnpz5_hXYPQEZP3NFjjdPIdmVA_4su3SfxIC_sVIhSEISKKW0ezCG_GOhaZVlWU"
                  alt="2:1 듀엣 룸"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <span className="text-[13px] font-semibold text-[#6A684B] uppercase tracking-wider block mb-1">
                    02. DUET STUDIO
                  </span>
                  <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
                    2:1 듀엣 룸
                  </h3>
                  <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                    가족, 연인, 친구와 함께 운동할 수 있는 2인 전용 스튜디오입니다. 넓은 동선 간격과 독립 리포머 타워가 준비되어 있습니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D2B49A]/30 text-[14px] text-[#715C45]">
                  기구 구성: 알레그로 2 타워 리포머 2대, 소도구 풀세트
                </div>
              </div>
            </div>

            {/* Space 3 */}
            <div className="p-7 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-52 h-52 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/src/assets/images/vanity_powder_room_1791541288839.jpg"
                  alt="파우더 & 탈의실"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <span className="text-[13px] font-semibold text-[#715C45] uppercase tracking-wider block mb-1">
                    03. VANITY & AMENITIES
                  </span>
                  <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
                    파우더 & 탈의실
                  </h3>
                  <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                    호텔식 개별 파우더 부스와 최고급 드라이기, 유기농 아로마 핸드워시가 비치되어 운동 전후 쾌적함을 보장합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D2B49A]/30 text-[14px] text-[#715C45]">
                  시설 완비: 1인 독립 락커, 다이슨 헤어 케어 기기, 유기농 어메니티
                </div>
              </div>
            </div>

            {/* Space 4 */}
            <div className="p-7 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-52 h-52 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1U7acBOP8VLMQ29i4pa6NmrArTOMt2_8iz9QZkF49dryYsS14Fl5j-nTw58QgIf0egH-2duiIl-Z81-J5L5mEv2CEfI3tJVkEeCNAuJIsJwg8Y95VGjF6hBsT16fsQRf8CIzTeSOhsPrAv4tSKewl-y7lXueMd8cq2-Kg5BKF1_FtHm56ros0Gw_SQ_trHr-IbcMkax15NXDUQEbj6kF5in3M6fr5HKwT3q5zF6FiR3A0NKaddYz4EGYWw"
                  alt="웰컴 티 라운지"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <span className="text-[13px] font-semibold text-[#A36E47] uppercase tracking-wider block mb-1">
                    04. MINDFUL LOUNGE
                  </span>
                  <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
                    웰컴 티 라운지
                  </h3>
                  <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
                    수업 전후 따뜻한 블렌딩 유기농 차를 마시며 차분하게 마인드풀니스를 누릴 수 있는 온결만의 시그니처 쉼터입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D2B49A]/30 text-[14px] text-[#715C45]">
                  제공 서비스: 계절별 맞춤 블렌딩 티, 웰니스 큐레이션 도서
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE FACILITY GUIDES */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
            FACILITY STANDARDS
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-3">
            안심하고 머무는 청결 & 편의 시설
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B] mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
              매 세션 100% 항균 소독
            </h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
              회원 퇴실 즉시 모든 가죽 매트, 스트랩 및 터치 바를 인체 무해 친환경 소독액으로 꼼꼼하게 살균 소독합니다.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B] mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
              친환경 실내 공기 케어
            </h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
              스위스 IQAir 공기청정 시스템과 대용량 전열교환 환기 설비로 사계절 내내 숲속 수준의 산소 농도를 유지합니다.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B] mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2">
              무료 전용 주차 & 발렛
            </h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] font-normal">
              건물 내 전용 주차 타워 2시간 무료 주차 및 정문 발렛 서비스를 지원하여 운동 전후 이동의 편의를 극대화했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LOCATION SUMMARY */}
      <section className="py-20 bg-white border-t border-[#D2B49A]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="p-8 lg:p-12 rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-2">
                LOCATION GUIDE
              </span>
              <h2 className="text-[28px] lg:text-[36px] font-semibold text-[#715C45] mb-4">
                온결 필라테스 오시는 길
              </h2>
              <div className="space-y-4 text-[15px] lg:text-[16px] text-[#715C45] mb-8 font-normal leading-[1.7]">
                <p>
                  <strong className="font-semibold text-[#715C45]">주소:</strong> 서울특별시 강남구 논현동 도산대로 123 도산빌딩 4층
                </p>
                <p>
                  <strong className="font-semibold text-[#715C45]">지하철:</strong> 7호선·신분당선 강남구청역 3번 출구 도보 5분 / 3호선 신사역 도보 10분
                </p>
                <p>
                  <strong className="font-semibold text-[#715C45]">운영시간:</strong> 평일 07:00 - 22:00 / 토요일 09:00 - 17:00 (일요일 및 공휴일 휴무)
                </p>
              </div>
              <button
                onClick={() => onNavigate('reservation')}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
              >
                상세 오시는 길 및 예약 안내 보기
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#D2B49A]/40 shadow-sm aspect-[3/2]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1W6MRrKBNYCmREMO4xHmtIzoxCoKfyrMNnZ8rzKIXOIhxdgSC2X8M67flDuDetWtlqhfU6S3VWpPvLG62EIA9Kl1lvht6xtoLjTPiVoyJqkB3AsM_fjWvDzBbEzhd-mVPxeIfknSycpM9GWl6gioiLCbASKOWw7yfjUOSh938B-sTkEPlenoM-2rIQYawpHroVQrSowKWhmtjh6itUkB4nk3jcDrf6gFFeTxfW37M87zbD2Z-_uGXOsNuw"
                alt="스튜디오 약도"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CONSULTATION BANNER */}
      <ConsultationCtaBanner onNavigate={onNavigate} />
    </div>
  );
};
