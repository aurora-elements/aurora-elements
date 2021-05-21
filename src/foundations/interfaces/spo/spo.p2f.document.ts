import { SpoAsset } from './spo.asset';
import { P2fCategory } from './spo.p2f.category';
import { SpaceOneItem } from '../spo.item';

export interface P2fDocument extends SpaceOneItem {
  asset: SpoAsset;
  category: P2fCategory;
  name: string;
}