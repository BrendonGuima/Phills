import { Category, PortfolioItem } from './types';

// ==========================================
// CENTRAL DE DADOS DO PORTFÓLIO
// ==========================================
// Aqui você pode adicionar, remover ou editar os links das fotos.
// gridSpan: 'col-span-1' = Tamanho normal (Quadrado/Retrato)
// gridSpan: 'col-span-2' = Tamanho largo (Paisagem - ocupa 2 espaços)

export const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'Neon Dreams', 
    category: Category.EVENTS, 
    imageUrl: 'https://photos.smugmug.com/Corporativo/Web-Summit-Rio-2023-Portfolio/i-h7FMGS4/0/LjqK7ZbCcwgp5dVrRsMLNvqZ7KgXHP7RQMVvqpw6g/L/foto-1-L.jpg', 
    gridSpan: 'col-span-1' 
  },
  { 
    id: 2, 
    title: 'Porsche GT3 RS', 
    category: Category.AUTOMOTIVE, 
    imageUrl: 'https://photos.smugmug.com/Esportes-Carros/Porsche-Experience-Curvelo/i-m3ddcJZ/0/KnWFdpJWG5fWbfp2FNd5rG2r2cVZXfGshGVv36qtV/X2/foto-4-X2.jpg', 
    gridSpan: 'col-span-1' 
  },
  { 
    id: 3, 
    title: 'Tech Summit 2024', 
    category: Category.CORPORATE, 
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop', 
    gridSpan: 'col-span-2' // Ocupa 2 colunas
  },
  { 
    id: 4, 
    title: 'Main Stage Energy', 
    category: Category.EVENTS, 
    imageUrl: 'https://photos.smugmug.com/FestasFestivais-Portf%C3%B3lio/So-Track-Boa-BH-2022-Portfolio/i-fschjRf/0/LB7BSbGb5NLtv5hDvPN833ct5cZLh4CLmvFhgCRWm/X2/foto-26-X2.jpg', 
    gridSpan: 'col-span-1' 
  },
  { 
    id: 5, 
    title: 'CEO Portraits', 
    category: Category.CORPORATE, 
    imageUrl: 'https://photos.smugmug.com/Marcas-e-Empresas-/i-7xMdDr9/0/KKcdMBZrmmcVVnNRfc4PBbR4FRXmFthhLZm7cGrWt/L/IMG_5009-L.jpg', 
    gridSpan: 'col-span-1' 
  },
  { 
    id: 6, 
    title: 'Vintage Classics', 
    category: Category.AUTOMOTIVE, 
    imageUrl: 'https://photos.smugmug.com/Esportes-Carros/Porsche-Experience-Curvelo/i-PMvF2CH/0/LwqknsR3bP38RHKSK9TP4GnTjF5M7hSdpbQ3KbKhx/L/IMG_230888-L.jpg', 
    gridSpan: 'col-span-2' // Ocupa 2 colunas
  },
  {
    id: 7, 
    title: 'Night Life', 
    category: Category.EVENTS, 
    imageUrl: 'https://photos.smugmug.com/Drone/i-z8bm8Zh/0/MWXxDdWT8z3V4XKXRRbjvXR3JZKS7PV3F997npvLp/L/foto-2-L.jpg', 
    gridSpan: 'col-span-1'
  }
];