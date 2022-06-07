export interface Item {
    itemName: string;
    itemImageURL: string;
    itemDescription: string;
    itemType: ItemType
}

export enum ItemType {
    BRANDING,
    APPAREL,
    COVERS,
    LOGO,
    POSTERS
}