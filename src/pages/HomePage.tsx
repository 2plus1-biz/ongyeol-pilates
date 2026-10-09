import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { ConsultationCtaBanner } from '../components/ConsultationCtaBanner';

interface HomePageProps {
  onNavigate: (page: PageId, extra?: string) => void;
}

interface JournalTip {
  id: string;
  image: string;
  title: string;
  summary: string;
  readingTime: string;
  content: string[];
}

const journalTips: JournalTip[] = [
  {
    id: 'tip1',
    image: '/src/assets/images/neck_stretch_routine_1791542356910.jpg',
    title: '직장인 거북목 스트레칭',
    summary:
      '모니터에 쏠린 목과 굳은 승모근을 3분 만에 개운하게 이완하고, 흉곽 호흡으로 맑은 머리를 되찾는 턱 당기기 루틴입니다.',
    readingTime: '읽는 시간 3분',
    content: [
      '1. 의자에 엉덩이를 깊숙이 밀착하고 척추를 위로 곧게 펴주세요.',
      '2. 검지를 턱 끝에 대고, 목 뒤쪽이 길어지는 느낌으로 턱을 수평으로 지그시 당겨줍니다 (고개를 숙이지 마세요).',
      '3. 갈비뼈를 풍선처럼 부풀리며 4초간 숨을 들이마시고, 6초간 내쉬며 승모근의 긴장을 어깨 아래로 툭 떨어뜨립니다.',
      '4. 하루 3회, 5세트 반복하면 오후의 묵직한 두통과 어깨 결림이 눈에 띄게 완화됩니다.',
    ],
  },
  {
    id: 'tip2',
    image: '/src/assets/images/postpartum_core_breathing_1791542370434.jpg',
    title: '출산 후 코어 회복 첫걸음',
    summary:
      '무리한 윗몸일으키기 대신 골반기저근과 복횡근을 부드럽게 깨워 허리 통증을 줄이고 탄력을 되찾는 산후 안심 호흡법입니다.',
    readingTime: '읽는 시간 4분',
    content: [
      '1. 바닥에 편안히 누워 무릎을 세우고, 골반과 허리가 중립(바닥과 손바닥 하나 간격)을 유지하도록 합니다.',
      '2. 숨을 들이마시며 골반 기저근을 편안히 이완하고, 천천히 내쉬며 배꼽을 등 쪽으로 얇게 납작하게 조여줍니다.',
      '3. 소변을 참는 듯한 미세한 감각으로 골반 바닥 근육을 살짝 끌어올립니다 (겉근육에 무리한 힘이 들어가지 않도록 주의).',
      '4. 산후 무리한 복근 운동은 복직근 이개를 악화시킬 수 있으므로, 심부 속근육 호흡부터 차근차근 회복하는 것이 필수적입니다.',
    ],
  },
  {
    id: 'tip3',
    image: '/src/assets/images/neutral_sitting_posture_1791542381462.jpg',
    title: '허리 부담 줄이는 앉는 법',
    summary:
      '좌골로 바닥을 지지하고 척추 중립을 유지하여 장시간 앉아 있어도 요추 피로와 다리 부종을 최소화하는 바른 착석 가이드입니다.',
    readingTime: '읽는 시간 3분',
    content: [
      '1. 엉덩이 양쪽의 뾰족한 뼈(좌골)가 의자 바닥면에 균등하게 닿아 있는지 체중을 점검합니다.',
      '2. 골반이 뒤로 말리지 않도록 아랫배를 살짝 지지하고, 정수리가 천장 쪽으로 길어지는 느낌을 유지합니다.',
      '3. 발바닥 전체가 지면에 안정적으로 닿아야 하며, 다리를 꼬는 습관은 골반 비대칭의 주원인이므로 피해주세요.',
      '4. 50분마다 한 번씩 일어나 기지개를 켜고 고관절 앞쪽 장요근을 부드럽게 펴주세요.',
    ],
  },
];

const instagramPhotos = [
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1Wp-7pkg1khTYinK7wYJ4VSd0ReaUk_YIkD9ENBKK7CqtMq5cJ1RoDJI0GjinVD_VnRI8fnlAqYjEf0fzeWh6S35StmRiOx8rfig3wY5c_VDIbj9mErXdoJY6fvdInL-T_dSZUIupzaxDUxrnWm59MxzbAb6xohzHl79C3Ln6-PPma5a4Ni9vhg9VouLZNC5B-WBqHF6NTeDlu20StMTWrCxdJzKsheRAkHDBRWJ1y2HKlABaX79tUJbQ',
    alt: '온결 필라테스 리포머 세션',
    caption: '몸의 결을 바르게 다듬는 리포머 세션',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1XNRSU9O4Vm11Bw2pTZ9uEuiBt42NRJZLOPNql2JYEwS_3vh33472W7B_rOXvbzukMIHJaepK9Z7XLhFCNUsrDMCM-H2MU4vpejihLxZcuJz_TwD8UdWhw_NHrt4L386cby4yrbQnFrvHWrLHdoKUbpKd6Iu0xqU3MCRkkPB4MlFDdeLO5ri05QNhbTO4kt_vXj3nUGpjDCWHE6Yg8OuJZpNFJdT0eRpWJ0KOO8jO5mNomXAcnx4g9KfQ',
    alt: '1:1 프라이빗 스위트 룸',
    caption: '따뜻한 자연광이 머무는 프라이빗 룸',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1UF7g2e47o-HiHd_XXWsDwsKwLZaYw82dY85jqH34kulCTuVY2osR8xCOJiODfG3SWmCKlU6WAUX0cj0iHhItdMhOwlvzHpT-WAY7tRdcRjeXdG2snSUgdNfkidkSSG7Q6MTT4a0lGO9eW5YiHE58S5zrMWz8JJxUCctRWkNrZ5nBHigXlR8Fpl9Rzngnpz5_hXYPQEZP3NFjjdPIdmVA_4su3SfxIC_sVIhSEISKKW0ezCG_GOhaZVlWU',
    alt: '2:1 듀엣 스튜디오 전경',
    caption: '함께 호흡하며 활력을 채우는 듀엣 룸',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1UnFskMvqBvwGskM1lJHh-pEiDTCLHH29PLwJTewYtNG4ndVlOAs2uVtqPeTPg1kQ2oA4BWwrY6X2NmeSKn8wJ6uGgT86oDMxe45HQZ6-rrDslp6u7beZWkJQJqyZ99sz9pL1843kjkA5f_obsBjzASzRAPYe3axN3RH0VGpGpLl5qEBVvXKv4KsQzZyBU_0YfBI9hXU24osCDPKYRLmX-Lk9mPsesyswucWGvoXu2fIfLbiZbrylUmUw',
    alt: '호텔식 파우더 & 어메니티',
    caption: '운동 후 온전한 쉼을 위한 파우더 공간',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1U7acBOP8VLMQ29i4pa6NmrArTOMt2_8iz9QZkF49dryYsS14Fl5j-nTw58QgIf0egH-2duiIl-Z81-J5L5mEv2CEfI3tJVkEeCNAuJIsJwg8Y95VGjF6hBsT16fsQRf8CIzTeSOhsPrAv4tSKewl-y7lXueMd8cq2-Kg5BKF1_FtHm56ros0Gw_SQ_trHr-IbcMkax15NXDUQEbj6kF5in3M6fr5HKwT3q5zF6FiR3A0NKaddYz4EGYWw',
    alt: '웰컴 티 라운지',
    caption: '계절 유기농 티와 함께하는 마인드풀 타임',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1X66laqv84N8mCs29NHuwW2Bujmal2Bi2otmyySQWBp4qzZ2D3AbdEdsCm0uA--sJbimoPpva-LfqYa1068XMCEJl0IwGealki6rm8jYIHAyDfJrqbU5HdD6zbtwCBuYBMPdaci67a5_BzsYEUXfDNBLCQLIl9NWs2reXXc97Pge8S82RPZO2s9Fn4nVN_o08c49B_VF5ObfDiyZaAa2X0NFQ0e0CMHUWdhGH9pdYy8_y2YdaYgPoaxHRo',
    alt: '강사진 1:1 디테일 티칭',
    caption: '섬세한 손길로 전하는 바른 척추 정렬',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeTipModal, setActiveTipModal] = useState<JournalTip | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO VIDEO BANNER */}
      <section className="relative w-full h-[580px] lg:h-[660px] overflow-hidden bg-[#715C45]/10 select-none">
        {/* Background Video or Poster Image based on prefers-reduced-motion */}
        <div className="absolute inset-0 w-full h-full">
          {prefersReducedMotion ? (
            <img
              src="/videos/hero-pilates-poster.jpg"
              alt="온결 필라테스"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/videos/hero-pilates-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-pilates.mp4" type="video/mp4" />
            </video>
          )}
          {/* Subtle dark gradient on the left so white text is crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent"></div>
        </div>

        {/* Hero Slogan & Actions Fixed over the Video (Left-aligned) */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 [@media(min-width:1025px)]:px-20 w-full text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F4]/20 backdrop-blur-sm text-[13px] tracking-wider uppercase mb-4 text-[#FAF8F4] font-medium border border-[#FAF8F4]/30">
              MINDFUL PILATES STUDIO
            </span>
            <h1 className="text-[34px] lg:text-[56px] font-semibold leading-[1.22] mb-5 tracking-tight">
              몸의 결을 바르게,<br />일상에 온기를.
            </h1>
            <p className="text-[16px] lg:text-[17px] text-[#FAF8F4]/90 max-w-xl mb-8 leading-[1.7] font-normal">
              바쁜 하루 속, 나에게 집중하는 온전한 시간. 온결 필라테스에서 해부학적 전문성과 섬세한 정렬을 통해 건강한 움직임과 삶의 균형을 찾아보세요.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('reservation')}
                className="px-8 py-4 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[16px] font-medium transition-colors shadow-md cursor-pointer"
              >
                상담 예약하기
              </button>
              <button
                onClick={() => onNavigate('programs')}
                className="px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[16px] font-medium transition-colors border border-white/40 cursor-pointer"
              >
                프로그램 알아보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP (숫자 띠) */}
      <section className="border-b border-[#D2B49A]/30 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#D2B49A]/30 text-center">
          <div className="pt-2 md:pt-0">
            <p className="text-3xl lg:text-4xl font-semibold text-[#715C45]">1:1 / 2:1</p>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] mt-1.5 font-normal">
              프라이빗 중심 밀착 수업
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-3xl lg:text-4xl font-semibold text-[#715C45]">100%</p>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] mt-1.5 font-normal">
              국제 공인 전문 강사진
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-3xl lg:text-4xl font-semibold text-[#715C45]">98.4%</p>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] mt-1.5 font-normal">
              회원 재등록 및 수업 만족도
            </p>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY & VALUES (브랜드 철학 한 줄 + 가치 카드 3개) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-3">
          PHILOSOPHY OF ONGYEOL
        </span>
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
          온전한 숨과 결을 찾는 곳
        </h2>
        <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto mb-14 leading-[1.7] font-normal">
          온결 필라테스는 깊은 호흡과 바른 움직임으로 몸의 중심을 되찾는 공간입니다.<br className="hidden sm:inline" />
          단순한 칼로리 소모를 넘어 신체 균형과 삶의 호흡을 조화롭게 연결합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-left">
          <div className="p-8 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-13 h-13 rounded-xl bg-[#FAF8F4] flex items-center justify-center text-[#A36E47] mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-3">자세 균형</h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
              틀어진 신체 중심축과 척추 정렬을 정밀 분석하여 비대칭을 점검하고, 일상에서 무너지지 않는 건강한 정렬 상태를 유지하도록 돕습니다.
            </p>
            <span className="inline-block text-[13px] font-medium text-[#A36E47] bg-[#D2B49A]/20 px-3.5 py-1.5 rounded-md">
              기초 체형 정렬 & 골반 균형 관리
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-13 h-13 rounded-xl bg-[#FAF8F4] flex items-center justify-center text-[#A36E47] mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-3">의식적 움직임</h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
              무의식적인 보상작용 패턴을 멈추고 차분하게 호흡과 동작에 온전히 몰입합니다. 섬세한 인지 조절을 통해 단단하고 유연한 코어를 확립합니다.
            </p>
            <span className="inline-block text-[13px] font-medium text-[#A36E47] bg-[#D2B49A]/20 px-3.5 py-1.5 rounded-md">
              코어 안정화 & 근신경계 활성화
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#D2B49A]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-13 h-13 rounded-xl bg-[#FAF8F4] flex items-center justify-center text-[#A36E47] mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-3">회복</h3>
            <p className="text-[15px] lg:text-[16px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
              근육 이완과 부드러운 스트레칭으로 뭉친 긴장감을 해소합니다. 세션 후 온전한 여유와 함께 몸과 마음이 한결 가벼워지는 편안함을 체감합니다.
            </p>
            <span className="inline-block text-[13px] font-medium text-[#A36E47] bg-[#D2B49A]/20 px-3.5 py-1.5 rounded-md">
              통증 완화 스트레칭 & 마인드풀 릴랙스
            </span>
          </div>
        </div>
      </section>

      {/* 4. 처음 오시는 분 안내 — 「첫 방문은 이렇게 진행돼요」 4단계 타임라인 */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#D2B49A]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-3">
            WELCOME GUIDE
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
            첫 방문은 이렇게 진행돼요
          </h2>
          <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto mb-16 leading-[1.7] font-normal">
            필라테스가 처음이셔도 부담 없이 편안하게 시작하실 수 있도록, 온결의 첫 만남은 섬세한 경청과 전문 체형 분석으로 출발합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Step 1 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-bold text-[#A36E47] bg-[#A36E47]/10 px-2.5 py-1 rounded-full">
                    STEP 01
                  </span>
                </div>
                <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                  상담 예약
                </h3>
                <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
                  온라인 예약 폼이나 유선으로 원하시는 편안한 요일과 시간대를 선택해 사전 일정을 조율합니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D2B49A]/30 text-[13px] text-[#715C45]">
                소요: 1분 내 모바일 접수
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-bold text-[#A36E47] bg-[#A36E47]/10 px-2.5 py-1 rounded-full">
                    STEP 02
                  </span>
                </div>
                <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                  체형 분석 상담 (30분)
                </h3>
                <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
                  Exbody 3D 정밀 장비로 관절 각도와 골반 기울기, 일상 속 만성 통증 요인을 깊이 있게 진단합니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D2B49A]/30 text-[13px] text-[#715C45]">
                소요: 30분 정밀 체형 측정
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-bold text-[#A36E47] bg-[#A36E47]/10 px-2.5 py-1 rounded-full">
                    STEP 03
                  </span>
                </div>
                <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                  체험 레슨 1회
                </h3>
                <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
                  측정된 내 몸의 가동 범위에 맞춰 호흡법과 기본 기구 정렬을 전담 강사와 1:1로 직접 경험합니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D2B49A]/30 text-[13px] text-[#715C45]">
                소요: 50분 1:1 맞춤 기구 체험
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/40 flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#D2B49A]/40 flex items-center justify-center text-[#6A684B]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-bold text-[#A36E47] bg-[#A36E47]/10 px-2.5 py-1 rounded-full">
                    STEP 04
                  </span>
                </div>
                <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-2.5">
                  맞춤 수업 계획
                </h3>
                <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
                  체험 후 개인의 체형 회복 목표와 일상 라이프스타일에 가장 적합한 운동 주기와 프로그램을 제안해 드립니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D2B49A]/30 text-[13px] text-[#715C45]">
                소요: 10분 운동 목표 리포트
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 수강권 안내 — 카드 3개(1:1 개인 레슨 / 2:1 듀엣 레슨 / 4:1 소그룹) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-3">
          MEMBERSHIP & PRICING
        </span>
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
          투명하고 합리적인 수강권 안내
        </h2>
        <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto mb-16 leading-[1.7] font-normal">
          강요 없는 상담과 정직한 정찰제로 회원님의 건강한 운동 루틴을 진심으로 응원합니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left items-stretch">
          {/* Card 1: 1:1 개인 레슨 */}
          <div className="p-8 rounded-3xl bg-white border border-[#D2B49A]/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-semibold text-[#715C45] bg-[#D2B49A]/25 px-3 py-1 rounded-md">
                  100% 밀착 맞춤형
                </span>
                <span className="text-[13px] text-[#8C7760]">1인 단독 룸</span>
              </div>
              <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-3">
                1:1 개인 레슨
              </h3>
              <p className="text-[15px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                개인별 3D 체형 분석 데이터를 바탕으로 오직 한 사람만을 위한 맞춤형 정렬 시퀀스를 진행합니다.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 mb-7">
                <div className="flex items-baseline justify-between mb-2 pb-2 border-b border-[#D2B49A]/20">
                  <span className="text-[14px] text-[#8C7760]">1회 체험가</span>
                  <span className="text-[20px] font-bold text-[#715C45]">85,000원</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-[#8C7760]">정규 10회권</span>
                  <span className="text-[22px] font-bold text-[#6A684B]">790,000원</span>
                </div>
                <p className="text-[13px] text-[#8C7760] mt-1 text-right">(회당 7.9만원 상당)</p>
              </div>

              <div className="space-y-2.5 mb-8 text-[15px] text-[#715C45] leading-[1.6]">
                <p className="font-semibold text-[#715C45] mb-2 text-[14px]">추천 대상</p>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5 mt-2 shrink-0"></span>
                  <span>척추 측만·골반 불균형 등 정밀 체형 교정이 시급하신 분</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5 mt-2 shrink-0"></span>
                  <span>필라테스가 처음이라 기초 호흡부터 꼼꼼히 배우고 싶으신 분</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5 mt-2 shrink-0"></span>
                  <span>나만의 일정에 맞춰 자유롭게 수업 시간을 예약하고 싶으신 분</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('reservation', '1:1 개인 레슨 수강권 문의')}
              className="w-full py-4 rounded-xl border border-[#D2B49A] hover:bg-[#FAF8F4] text-[16px] font-medium text-[#715C45] transition-colors cursor-pointer"
            >
              상담 예약하기
            </button>
          </div>

          {/* Card 2: 2:1 듀엣 레슨 (가운데 카드 강조) */}
          <div className="p-8 rounded-3xl bg-white border-2 border-[#6A684B] shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 right-8 bg-[#6A684B] text-white text-[13px] font-semibold px-4 py-1 rounded-full shadow-sm">
              MOST POPULAR
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-semibold text-[#6A684B] bg-[#6A684B]/15 px-3 py-1 rounded-md">
                  동반 수강 혜택
                </span>
                <span className="text-[13px] text-[#8C7760]">2인 전용 스튜디오</span>
              </div>
              <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-3">
                2:1 듀엣 레슨
              </h3>
              <p className="text-[15px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                지인, 모녀, 친구와 함께 같은 공간에서 호흡을 맞추며 1:1 수준의 밀착 지도를 누립니다.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#6A684B]/30 mb-7">
                <div className="flex items-baseline justify-between mb-2 pb-2 border-b border-[#D2B49A]/20">
                  <span className="text-[14px] text-[#8C7760]">1인 1회 체험가</span>
                  <span className="text-[20px] font-bold text-[#715C45]">55,000원</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-[#8C7760]">1인 10회권</span>
                  <span className="text-[22px] font-bold text-[#6A684B]">490,000원</span>
                </div>
                <p className="text-[13px] text-[#8C7760] mt-1 text-right">(1인 회당 4.9만원 상당)</p>
              </div>

              <div className="space-y-2.5 mb-8 text-[15px] text-[#715C45] leading-[1.6]">
                <p className="font-semibold text-[#715C45] mb-2 text-[14px]">추천 대상</p>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6A684B] mr-2.5 mt-2 shrink-0"></span>
                  <span>모녀·자매·친구·연인이 함께 즐겁고 활기차게 운동하고 싶으신 분</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6A684B] mr-2.5 mt-2 shrink-0"></span>
                  <span>1:1 레슨의 밀착 티칭과 합리적인 가격대를 동시에 누리고 싶으신 분</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6A684B] mr-2.5 mt-2 shrink-0"></span>
                  <span>서로 건강한 동기부여를 주고받으며 꾸준히 지속하고 싶으신 분</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('reservation', '2:1 듀엣 레슨 수강권 문의')}
              className="w-full py-4 rounded-xl bg-[#6A684B] hover:bg-[#55533A] text-[16px] font-medium text-white transition-colors cursor-pointer shadow-md"
            >
              상담 예약하기
            </button>
          </div>

          {/* Card 3: 4:1 소그룹 레슨 */}
          <div className="p-8 rounded-3xl bg-white border border-[#D2B49A]/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-semibold text-[#715C45] bg-[#D2B49A]/25 px-3 py-1 rounded-md">
                  최대 4인 정원제
                </span>
                <span className="text-[13px] text-[#8C7760]">소그룹 리포머 룸</span>
              </div>
              <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-3">
                4:1 소그룹 레슨
              </h3>
              <p className="text-[15px] text-[#8C7760] leading-[1.7] mb-6 font-normal">
                소수 인원으로만 제한하여 강사의 섬세한 티칭과 자세 교정이 흐트러지지 않도록 관리합니다.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#D2B49A]/30 mb-7">
                <div className="flex items-baseline justify-between mb-2 pb-2 border-b border-[#D2B49A]/20">
                  <span className="text-[14px] text-[#8C7760]">1회 체험가</span>
                  <span className="text-[20px] font-bold text-[#715C45]">35,000원</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-[#8C7760]">정규 10회권</span>
                  <span className="text-[22px] font-bold text-[#6A684B]">290,000원</span>
                </div>
                <p className="text-[13px] text-[#8C7760] mt-1 text-right">(회당 2.9만원 상당)</p>
              </div>

              <div className="space-y-2.5 mb-8 text-[15px] text-[#715C45] leading-[1.6]">
                <p className="font-semibold text-[#715C45] mb-2 text-[14px]">추천 대상</p>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5 mt-2 shrink-0"></span>
                  <span>대형 학원의 북적임 없이 쾌적한 4인 소수 정예 수업을 원하시는 분</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5 mt-2 shrink-0"></span>
                  <span>매주 정해진 시간에 규칙적인 운동 루틴을 확립하고 싶으신 분</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A36E47] mr-2.5 mt-2 shrink-0"></span>
                  <span>리포머와 다양한 소도구로 전신 근력과 활력을 기르고 싶으신 분</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('reservation', '4:1 소그룹 수강권 문의')}
              className="w-full py-4 rounded-xl border border-[#D2B49A] hover:bg-[#FAF8F4] text-[16px] font-medium text-[#715C45] transition-colors cursor-pointer"
            >
              상담 예약하기
            </button>
          </div>
        </div>
      </section>

      {/* 6. 오늘의 자세 팁(저널) — 「바른 자세 저널」 카드 3개 */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#D2B49A]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-3">
            DAILY POSTURE JOURNAL
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
            온결이 전하는 바른 자세 저널
          </h2>
          <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto mb-16 leading-[1.7] font-normal">
            수업 시간뿐만 아니라 하루 24시간 일상에서도 건강한 숨과 결을 이어갈 수 있도록 실천 팁을 나눕니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {journalTips.map((tip) => (
              <div
                key={tip.id}
                onClick={() => setActiveTipModal(tip)}
                className="group rounded-3xl bg-[#FAF8F4] border border-[#D2B49A]/40 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-3 text-[13px] text-[#A36E47] font-medium">
                      <span>자세 케어 가이드</span>
                      <span>{tip.readingTime}</span>
                    </div>
                    <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#715C45] mb-3 group-hover:text-[#6A684B] transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-[15px] text-[#8C7760] leading-[1.7] font-normal">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-6 pt-2 flex items-center justify-between text-[14px] font-medium text-[#6A684B]">
                  <span>자세히 읽어보기</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 인스타그램 — 「@ongyeol.pilates」 정사각 사진 6장 그리드와 팔로우 버튼 */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <span className="text-[13px] font-semibold text-[#A36E47] tracking-[0.25em] uppercase block mb-3">
          INSTAGRAM GALLERY
        </span>
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#715C45] mb-4">
          @ongyeol.pilates
        </h2>
        <p className="text-[16px] lg:text-[17px] text-[#8C7760] max-w-2xl mx-auto mb-14 leading-[1.7] font-normal">
          스튜디오의 따뜻한 일상과 실시간 소식을 온결 인스타그램에서 가장 먼저 만나보세요.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-[#D2B49A]/40 shadow-xs"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#715C45]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <p className="text-[13px] font-medium leading-tight">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 rounded-full bg-[#FAF8F4] border-2 border-[#D2B49A] hover:bg-white text-[#715C45] hover:text-[#A36E47] text-[16px] font-semibold transition-all shadow-sm"
        >
          <svg className="w-5 h-5 mr-2.5 text-[#A36E47]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          인스타그램 @ongyeol.pilates 팔로우하기
        </a>
      </section>

      {/* 8. COMMON CTA (하단 상담 예약 배너) */}
      <ConsultationCtaBanner onNavigate={onNavigate} />

      {/* Journal Tip Detail Modal */}
      {activeTipModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F4] max-w-lg w-full rounded-3xl p-6 md:p-8 border border-[#D2B49A]/50 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#D2B49A]/30 mb-5">
              <span className="text-[13px] font-semibold text-[#A36E47] bg-[#A36E47]/15 px-3 py-1 rounded-full">
                {activeTipModal.readingTime}
              </span>
              <button
                onClick={() => setActiveTipModal(null)}
                className="text-[#8C7760] hover:text-[#715C45] cursor-pointer text-xl p-1"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <h3 className="text-[22px] lg:text-[24px] font-semibold text-[#715C45] mb-4">
              {activeTipModal.title}
            </h3>

            <p className="text-[15px] lg:text-[16px] text-[#8C7760] mb-6 leading-[1.7]">
              {activeTipModal.summary}
            </p>

            <div className="space-y-3.5 bg-white p-5 rounded-2xl border border-[#D2B49A]/30 mb-6 text-[15px] text-[#715C45] leading-[1.7]">
              {activeTipModal.content.map((step, idx) => (
                <p key={idx}>{step}</p>
              ))}
            </div>

            <div className="text-right">
              <button
                onClick={() => setActiveTipModal(null)}
                className="px-6 py-2.5 rounded-full bg-[#6A684B] hover:bg-[#55533A] text-white text-[15px] font-medium cursor-pointer"
              >
                확인 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
