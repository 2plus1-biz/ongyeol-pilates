/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileFloatingCta } from './components/MobileFloatingCta';
import { HomePage } from './pages/HomePage';
import { StudioPage } from './pages/StudioPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { InstructorsPage } from './pages/InstructorsPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { SchedulePage } from './pages/SchedulePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ReservationPage } from './pages/ReservationPage';

const validPages: PageId[] = [
  'home',
  'studio',
  'programs',
  'instructors',
  'before-after',
  'schedule',
  'reviews',
  'reservation',
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    return validPages.includes(hash) ? hash : 'home';
  });

  const [reservationProgram, setReservationProgram] = useState<string | undefined>();
  const [reservationNote, setReservationNote] = useState<string | undefined>();

  // Sync hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, extraParam?: string) => {
    if (page === 'reservation' && extraParam) {
      if (['balance', 'core', 'conditioning', 'prenatal'].includes(extraParam)) {
        setReservationProgram(extraParam);
      } else {
        setReservationNote(extraParam);
      }
    } else if (page !== 'reservation') {
      // clear temporary params when navigating elsewhere
      setReservationProgram(undefined);
      setReservationNote(undefined);
    }

    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#715C45] overflow-x-hidden antialiased">
      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className={`flex-1 w-full ${currentPage !== 'reservation' ? 'pb-20 md:pb-0' : ''}`}>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'studio' && <StudioPage onNavigate={handleNavigate} />}
        {currentPage === 'programs' && <ProgramsPage onNavigate={handleNavigate} />}
        {currentPage === 'instructors' && <InstructorsPage onNavigate={handleNavigate} />}
        {currentPage === 'before-after' && <BeforeAfterPage onNavigate={handleNavigate} />}
        {currentPage === 'schedule' && <SchedulePage onNavigate={handleNavigate} />}
        {currentPage === 'reviews' && <ReviewsPage onNavigate={handleNavigate} />}
        {currentPage === 'reservation' && (
          <ReservationPage
            onNavigate={handleNavigate}
            initialProgram={reservationProgram}
            initialNote={reservationNote}
          />
        )}
      </main>

      {/* Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Mobile Floating Consultation Button */}
      <MobileFloatingCta currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}
