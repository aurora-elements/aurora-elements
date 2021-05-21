import { SpoAssetFormat } from './spo.asset.format';
import { UserAccount } from '../user-account';

export interface SpoAsset {
  formats: SpoAssetFormat[];
  hidden: boolean;
  id: number;
  meta: {
    aliases: string[];
    created: string;
    creator: UserAccount;
    itemType: string;
    spaceKey: string;
    updated: string;
  };
  thumbnailUri: string;
  title: string;
}