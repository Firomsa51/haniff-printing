export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  icon: string; // lucide icon name
  image?: string; // optional path to real photo in /public/images/services/
}

export interface ServiceCategory {
  name: string;
  services: Service[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string; // thumbnail/cover — always required, even for videos
  description: string;
  video?: string; // optional path to a video in /public/images/portfolio/ — if set, shows a play button and plays this video
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  active: boolean;
}
