export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  time: string;
  image: string;
  features: string[];
  idealFor: string[];
  benefits: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  idealFor: string[];
  benefits: string[];
  price: string;
  time: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  time: string;
  features: string[];
  recommended?: boolean;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
