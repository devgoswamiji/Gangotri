export interface Hotspot {
  id: string;
  label: string;
  uv: [number, number];
  cameraPreset: string;
}

export interface Variant {
  id: string;
  metal: string;
  price: number;
  sku: string;
  inventory: number;
  modelUrl: string;
  previewImage: string;
  materialOverrides: {
    metalness: number;
    roughness: number;
  };
  hotspots: Hotspot[];
}

export interface Seo {
  title: string;
  description: string;
  ogImage: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  brand: string;
  price: number;
  currency: string;
  description: string;
  longDescription: string;
  collections: string[];
  variants: Variant[];
  seo: Seo;
  createdAt: number;
}
