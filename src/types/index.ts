export interface CityData {
  city: string;
  state: string;
  about: string;
  why: string;
  reviews: Review[];
  services: Service[];
  metaDescription: string;
  metaTitle: string;
}

export interface Review {
  text: string;
  author: string;
  rating: number;
}

export interface Service {
  title: string;
  description: string;
  metaDescription: string;
  slug: string;
}

export interface SiteConfig {
  logo: string;
  email: string;
  phone: string;
  nicheKeywords: string[];
  copyright: {
    text: string;
    link: string;
  };
  sitewideLink: {
    text: string;
    url: string;
  };
  favicon: string;
}