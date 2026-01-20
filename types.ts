export enum Category {
  EVENTS = 'Eventos & Shows',
  CORPORATE = 'Corporativo & Marcas',
  AUTOMOTIVE = 'Automotivo',
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  gridSpan: 'col-span-1' | 'col-span-2'; // For masonry layout
}

export interface NavItem {
  label: string;
  href: string;
}