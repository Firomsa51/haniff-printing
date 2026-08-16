export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  icon: string; // lucide icon name
}

export interface ServiceCategory {
  name: string;
  services: Service[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  active: boolean;
}
