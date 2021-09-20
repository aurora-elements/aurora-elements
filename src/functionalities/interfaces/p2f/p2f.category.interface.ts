import { SpoAsset } from '../spo/spo.asset.interface';
import { SpoItem } from '../spo/spo.item.interface';

export interface P2fCategory extends SpoItem {
  [x: string]: any;
  asset?: SpoAsset;
  embedded: boolean;
  name?: string;
}