export interface Item {
    itemName: string;
    itemImageURL: string;
    itemDescription: string;
    itemType: ItemType
}

enum ItemType {
    BRANDING,
    APPAREL,
    COVERS,
    LOGO,
    POSTERS
}