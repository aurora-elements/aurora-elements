import { SpoSpaceFeature } from "./spo.space.feature.interface";

export interface SpoSpace {
    urlKey: string,
    scopeKey: string,
    name: string,
    description: string,
    defaultLanguage: string,
    visible: boolean,
    publicApi: boolean,
    features: [],
    isProxySendAuthHeader: boolean,
    tileIconUrl: string    
} 