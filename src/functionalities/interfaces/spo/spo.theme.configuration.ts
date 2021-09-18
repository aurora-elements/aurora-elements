import { SpoAsset } from './spo.asset.interface';
import { SpoColor } from './spo.color';
import { SpoItem } from './spo.item.interface';

export interface ThemeConfiguration extends SpoItem {
  backgroundColor: SpoColor;
  backgroundImage: SpoAsset;
  logo: SpoAsset;
  slogan: SpoAsset;
}