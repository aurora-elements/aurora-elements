import { Asset } from './asset';
import { P2fCategory } from './p2f.category';
import { SpaceOneItem } from './spo.item';

export interface P2fDocument extends SpaceOneItem {
  asset: Asset;
  category: P2fCategory;
  name: string;
}