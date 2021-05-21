export interface AssetFormat {
    created: string;
    downloadUri: string;
    filename?: string;
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
    status: Status;
  }
  
  enum Status {
    Converting = "converting",
    Ready = "ready",
  }