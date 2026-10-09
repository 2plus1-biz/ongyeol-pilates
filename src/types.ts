export type PageId =
  | 'home'
  | 'studio'
  | 'programs'
  | 'instructors'
  | 'before-after'
  | 'schedule'
  | 'reviews'
  | 'reservation';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  program: string;
  timeSlot: string;
  notes: string;
  agreePrivacy: boolean;
}
