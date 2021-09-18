import { SpoAsset } from '../spo/spo.asset.interface';
import { P2fCategory } from './p2f.category.interface';
import { SpoItem } from '../spo/spo.item.interface';

export interface P2fDocument extends SpoItem {
  asset: SpoAsset;
  category: P2fCategory;
  name: string;
}