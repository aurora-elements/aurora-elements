import { SpoAsset } from '../spo/spo.asset.interface';
import { SpaceOneItem } from '../spo/spo.item.interface';

export interface P2fCategory extends SpaceOneItem {
  asset?: SpoAsset;
  embedded: boolean;
  name?: string;
}