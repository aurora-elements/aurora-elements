export interface SpoItem {
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
  
  enum State {
    Draft = "DRAFT",
    Published = "PUBLISHED",
  }
  