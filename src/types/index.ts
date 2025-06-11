export interface SidebarLink {
  href: string;
  text: string;
} 

export interface SelectOption {
  value: string;
  label: string;
}

export interface AcademicGrantsFormData {
  firstName: string;
  lastName: string;
  email: string;
  projectPreviousWork?: string;
  howDidYouHearAboutGrantsWave?: SelectOption;
  projectCategory?: string;
  applyingAs?: string;
  country?: string;
  timezone?: string;
  wouldYouShareYourResearch?: string;
  other?: string;
} 

export interface DevconGrantsFormData {
  firstName: string;
  lastName: string;
  email: string;
  uploadProposal?: File;
  company?: string;
  projectDescription?: string;
  teamProfile?: string;
  requestedAmount?: string;
  proposedTimeline?: string;
  twitter?: string;
  additionalInfo?: string;
  captchaToken?: string;
  eventFormat?: EventFormat;
  referralSource?: ReferralSource;
}

export interface EventFormat {
  value: string;
  label: string;
}

export interface ReferralSource {
  value: string;
  label: string;
} 