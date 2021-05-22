import { SpoAsset } from './spo.asset';
import { SpaceOneItem } from './spo.item';

export interface P2fCategory extends SpaceOneItem {
  asset?: SpoAsset;
  embedded: boolean;
  name?: string;
}