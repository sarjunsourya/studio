import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: 'Thali/Assortment' | 'Sweet' | 'Savory' | 'Mixed';
};

// @ts-ignore
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
