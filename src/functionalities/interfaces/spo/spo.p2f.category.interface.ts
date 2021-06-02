import { SpoAsset } from './spo.asset.interface';
import { SpaceOneItem } from './spo.item.interface';

export interface P2fCategory extends SpaceOneItem {
  asset?: SpoAsset;
  embedded: boolean;
  name?: string;
}