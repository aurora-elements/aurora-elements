import { SpoAsset } from './spo.asset.interface';
import { P2fCategory } from './spo.p2f.category.interface';
import { SpaceOneItem } from './spo.item.interface';
export interface P2fDocument extends SpaceOneItem {
    asset: SpoAsset;
    category: P2fCategory;
    name: string;
}
//# sourceMappingURL=spo.p2f.document.interface.d.ts.map