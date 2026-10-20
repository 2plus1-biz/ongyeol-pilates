import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

interface GoogleMapLocationProps {
  className?: string;
}

const STUDIO_LOCATION = {
  lat: 37.5204,
  lng: 127.0322,
};

export const GoogleMapLocation: React.FC<GoogleMapLocationProps> = ({ className = '' }) => {
  const [infoOpen, setInfoOpen] = useState(true);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${STUDIO_LOCATION.lat},${STUDIO_LOCATION.lng}&destination_place_id=OngyeolPilates`;

  // Embed URL requiring zero API keys, fully functioning on Netlify / any domain
  const embedMapUrl = `https://maps.google.com/maps?q=${STUDIO_LOCATION.lat},${STUDIO_LOCATION.lng}+(%EC%98%A8%EA%B2%B0%ED%95%84%EB%9D%BC%ED%85%8C%EC%8A%A4)&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className={`relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden border border-[#D2B49A]/40 shadow-sm bg-[#FAF8F4] ${className}`}>
      {apiKey ? (
        <APIProvider apiKey={apiKey} language="ko" region="KR">
          <Map
            defaultCenter={STUDIO_LOCATION}
            defaultZoom={16}
            mapId="DEMO_MAP_ID"
            gestureHandling="cooperative"
            disableDefaultUI={false}
            className="w-full h-full min-h-[340px]"
            style={{ width: '100%', height: '100%', minHeight: '340px' }}
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          >
            <AdvancedMarker
              position={STUDIO_LOCATION}
              title="온결 필라테스"
              onClick={() => setInfoOpen(!infoOpen)}
            >
              <Pin
                background="#6A684B"
                borderColor="#55533A"
                glyphColor="#FAF8F4"
                scale={1.2}
              />
            </AdvancedMarker>

            {infoOpen && (
              <InfoWindow
                position={STUDIO_LOCATION}
                onCloseClick={() => setInfoOpen(false)}
                headerContent={
                  <div className="font-semibold text-[#715C45] text-[14px] pr-2">
                    온결 필라테스
                  </div>
                }
              >
                <div className="text-[13px] text-[#8C7760] leading-snug max-w-[220px] py-1">
                  <p className="font-medium text-[#715C45] mb-1">도산빌딩 4층</p>
                  <p className="text-[12px] mb-2">강남구청역 3번 출구 도보 5분</p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[12px] font-semibold text-[#6A684B] hover:text-[#55533A] hover:underline"
                  >
                    Google 지도에서 길찾기 →
                  </a>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      ) : (
        <iframe
          src={embedMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="온결 필라테스 도산 본점 위치"
          className="w-full h-full min-h-[340px]"
        />
      )}

      {/* External quick navigation overlay button */}
      <div className="absolute bottom-3 right-3 z-10 pointer-events-auto">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white/95 hover:bg-white backdrop-blur-xs text-[#715C45] hover:text-[#6A684B] rounded-lg text-[12px] font-medium shadow-md border border-[#D2B49A]/40 transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-[#6A684B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>큰 지도 / 길찾기</span>
        </a>
      </div>
    </div>
  );
};
