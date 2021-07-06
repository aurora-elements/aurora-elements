export interface SpoAssetFormat {
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
declare enum Status {
    Converting = "converting",
    Ready = "ready"
}
export {};
//# sourceMappingURL=spo.asset.format.interface.d.ts.map