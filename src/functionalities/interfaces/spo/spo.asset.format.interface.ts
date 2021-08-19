export interface SpoAssetFormat {
  created: string;
  downloadUri: string;
  filename?: string;
  name: string;
  meta?: {
    author?: string;
    height?: number;
    isAnimatedImage?: boolean;
    pageCount?: number;
    title?: string;
    warnings?: string[];
    width?: number;
  };
  size?: number;
  status: 'ready' | 'converting' | 'empty' | 'failed' | 'waiting' ;
}