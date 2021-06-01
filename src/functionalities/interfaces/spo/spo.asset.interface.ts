import { SpoAssetFormat } from './spo.asset.format.interface';
import { UserAccount } from './spo.user.account.interface';

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