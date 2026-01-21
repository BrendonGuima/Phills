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
    title: 'Live Experience', 
    category: Category.EVENTS, 
    imageUrl: 'https://photos.smugmug.com/Eventos-2025/Dez20-Natanzinho-Lima-Divinopolis/i-VJdMNNN/0/LXxvbgjRtBqvLMV8HwGHgBMvpKMk92TGQRzZVBqq9/X3/Foto-15-X3.jpg', 
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
    title: 'Web Summit Rio', 
    category: Category.CORPORATE, 
    imageUrl: 'https://photos.smugmug.com/Corporativo/Web-Summit-Rio-2023-Portfolio/i-h7FMGS4/0/LjqK7ZbCcwgp5dVrRsMLNvqZ7KgXHP7RQMVvqpw6g/L/foto-1-L.jpg', 
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
    imageUrl: 'https://photos.smugmug.com/Eventos-2025/Dez08-VK-Summit-SP-2025/i-Hf779g5/0/M8wnXnH8jFGhJQDGJTvs2bvs5C8fbfKPmcKsjSMR3/X3/Foto-85-X3.jpg', 
    gridSpan: 'col-span-1' 
  },
  { 
    id: 6, 
    title: 'Sport Car',
    category: Category.AUTOMOTIVE, 
    imageUrl: 'https://photos.smugmug.com/Esportes-Carros/Porsche-Experience-Curvelo/i-Zqd58RD/0/LWJdzcfGXrxRtgScBv6bNLFMKnfV3WKQdC3h6MRn5/X3/phillipeguimaraes-57-X3.jpg', 
    gridSpan: 'col-span-2' // Ocupa 2 colunas
  },
  {
    id: 7, 
    title: 'Night Life', 
    category: Category.EVENTS, 
    imageUrl: 'https://photos.smugmug.com/Eventos-2025/Dez20-Natanzinho-Lima-Divinopolis/i-W5J2kDN/0/NKB3DccBxRpT9wnXZ3c5Vb67gkRSLvZqsCqjSPmL8/X2/Foto-111-X2.jpg', 
    gridSpan: 'col-span-1'
  }
];