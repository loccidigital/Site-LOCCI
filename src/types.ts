export interface DiagnosticRequest {
  companyName: string;
  website: string;
  segment: string;
  mainChannels: string[];
  biggestPain: string;
}

export interface DiagnosticResult {
  score: number;
  executiveSummary: string;
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  prioritizedPlan: {
    phase: string;
    actions: string[];
    timeframe: string;
  }[];
  googleCompletoTips: string[];
  eventTips: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  icon: string;
}
