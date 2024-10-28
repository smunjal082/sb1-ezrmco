import { CityData, Review, Service, SiteConfig } from '../types';

// This would be replaced with actual Google Sheets API integration
export async function fetchSheetData(sheetId: string): Promise<{
  cities: CityData[];
  config: SiteConfig;
}> {
  // Placeholder for Google Sheets API call
  // In production, this would use the Google Sheets API client
  
  return {
    cities: [],
    config: {
      logo: '',
      email: '',
      phone: '',
      nicheKeywords: [],
      copyright: {
        text: '',
        link: ''
      },
      sitewideLink: {
        text: '',
        url: ''
      },
      favicon: ''
    }
  };
}

export function processCityData(
  about: any[],
  why: any[],
  reviews: any[],
  services: any[],
  cities: any[]
): CityData[] {
  // Process raw sheet data into structured city data
  return cities.map(city => ({
    city: city.City,
    state: 'AZ', // This would come from your data
    about: about.find(a => a.StateID === city.StateID)?.About || '',
    why: why.find(w => w.StateID === city.StateID)?.Why || '',
    reviews: processReviews(reviews, city.StateID),
    services: processServices(services),
    metaDescription: `Professional water damage restoration services in ${city.City}, AZ`,
    metaTitle: `Water Damage Restoration in ${city.City}, AZ | Professional Services`
  }));
}

function processReviews(reviews: any[], stateId: string): Review[] {
  const stateReviews = reviews.find(r => r.StateID === stateId);
  if (!stateReviews) return [];

  return [
    { text: stateReviews.Review1, author: stateReviews.R1P, rating: 5 },
    { text: stateReviews.Review2, author: stateReviews.R2P, rating: 5 },
    { text: stateReviews.Review3, author: stateReviews.R3P, rating: 5 }
  ].filter(review => review.text && review.author);
}

function processServices(services: any[]): Service[] {
  return services.map(service => ({
    title: service.Service,
    description: service.Description,
    metaDescription: service.MetaDescription,
    slug: service.Service.toLowerCase().replace(/\s+/g, '-')
  }));
}