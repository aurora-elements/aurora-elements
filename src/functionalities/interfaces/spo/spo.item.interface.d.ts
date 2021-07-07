export interface SpaceOneItem {
    id: number;
    meta: {
        created: string;
        itemType: string;
        parent?: number;
        publish?: {
            state: State;
            start?: string;
        };
        spaceKey: string;
        updated: string;
    };
}
declare enum State {
    Draft = "DRAFT",
    Published = "PUBLISHED"
}
export {};
//# sourceMappingURL=spo.item.interface.d.ts.map