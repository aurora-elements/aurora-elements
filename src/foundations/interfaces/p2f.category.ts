import { Asset } from './asset';
import { SpaceOneItem } from './spo.item';

export interface P2fCategory extends SpaceOneItem {
  asset?: Asset;
  embedded: boolean;
  name?: string;
}