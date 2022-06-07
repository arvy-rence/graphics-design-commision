import {readable} from "svelte/store";
import type {Item} from "../types/Item";
import {ItemType} from "../types/Item";

const emptyItems: Item[] = []

const branding: Item[] = [
    {
        itemName: 'Tatangho: Arnibal na Taho',
        itemImageURL: '/assets/branding/arnibal.jpg',
        itemDescription: 'Made for Tatangho',
        itemType: ItemType.BRANDING
    },
    {
        itemName: 'Tatangho: Best Selling Taho',
        itemImageURL: '/assets/branding/best.jpg',
        itemDescription: 'Made for Tatangho',
        itemType: ItemType.BRANDING
    },
    {
        itemName: 'Lumiere Candle: Caramel Scented Candles',
        itemImageURL: '/assets/branding/caramel.gif',
        itemDescription: 'Made for Lumiere Candles',
        itemType: ItemType.BRANDING
    },
    {
        itemName: 'Tatangho: ChocoTaho Special',
        itemImageURL: '/assets/branding/choco.jpg',
        itemDescription: 'Made for Tatangho',
        itemType: ItemType.BRANDING
    },
    {
        itemName: 'Lumiere Candle: Vanilla and Coffee ',
        itemImageURL: '/assets/branding/lumiere1.gif',
        itemDescription: 'Made for Lumiere Candles: Vanilla and Coffee Candles',
        itemType: ItemType.BRANDING
    },
    {
        itemName: 'Tatangho: Pandan Taho',
        itemImageURL: '/assets/branding/pandan2.jpg',
        itemDescription: 'Made for Lumiere Candles: Vanilla and Coffee Candles',
        itemType: ItemType.BRANDING
    }
]

const apparel: Item[] = [
    {
        itemName: 'MG Hoodie Design',
        itemImageURL: '/assets/apparel/hoodie.jpg',
        itemDescription: 'Made for MG: Maison Ghost',
        itemType: ItemType.APPAREL
    },
    {
        itemName: 'MG Hoodie Back Design',
        itemImageURL: '/assets/apparel/hoodie2.jpg',
        itemDescription: 'Made for MG: Maison Ghost',
        itemType: ItemType.APPAREL
    },
    {
        itemName: 'JLF Basketball Jersey',
        itemImageURL: '/assets/apparel/jersey.jpg',
        itemDescription: 'Made for JLF',
        itemType: ItemType.APPAREL
    },
    {
        itemName: 'MG TShirt Design (Folded)',
        itemImageURL: '/assets/apparel/mg.jpg',
        itemDescription: 'Made for MG: Maison Ghost',
        itemType: ItemType.APPAREL
    }
]

const logos: Item[] = [
    {
        itemName: 'Betta Zone Icon Design',
        itemImageURL: '/assets/logoItems/betta.png',
        itemDescription: 'Made for Betta Zone',
        itemType: ItemType.LOGO
    },
    {
        itemName: 'Drip Check MNL Logo Design',
        itemImageURL: '/assets/logoItems/drip.png',
        itemDescription: 'Made for Drip Check MNL',
        itemType: ItemType.LOGO
    },
    {
        itemName: 'Boy Isda Logo Design',
        itemImageURL: '/assets/logoItems/isda.jpg',
        itemDescription: 'Made for Boy Isda',
        itemType: ItemType.LOGO
    },
    {
        itemName: 'Thrift Terz Logo Design',
        itemImageURL: '/assets/logoItems/thrift.png',
        itemDescription: 'Made for Thrift Terz',
        itemType: ItemType.LOGO
    },
]

const fb: Item[] = [
    {
        itemName: 'Betta Zone Banner Design',
        itemImageURL: '/assets/fb/betta.jpg',
        itemDescription: 'Made for Betta Zone',
        itemType: ItemType.COVERS
    },
    {
        itemName: 'Drip Check MNL Banner Design',
        itemImageURL: '/assets/fb/drip.jpg',
        itemDescription: 'Made for Drip Check MNL',
        itemType: ItemType.COVERS
    },
    {
        itemName: 'Boy Isda Banner Design',
        itemImageURL: '/assets/fb/isda.jpg',
        itemDescription: 'Made for Boy Isda',
        itemType: ItemType.COVERS
    },
    {
        itemName: 'Thrift Terz Banner Design',
        itemImageURL: '/assets/fb/thrift.jpg',
        itemDescription: 'Made for Thrift Terz',
        itemType: ItemType.COVERS
    },
]

const poster: Item[] = [
    {
        itemName: 'Labyrinth Poster',
        itemImageURL: '/assets/poster/labyrinth.png',
        itemDescription: 'Design poster: Clothing co',
        itemType: ItemType.POSTERS
    },
    {
        itemName: 'Malou\'s Birthday Poster',
        itemImageURL: '/assets/poster/malou.jpg',
        itemDescription: 'We also make birthday posters for your loved ones',
        itemType: ItemType.POSTERS
    },
    {
        itemName: 'Travis Scott x Sneaker Heads Poster',
        itemImageURL: '/assets/poster/travis.jpg',
        itemDescription: 'An album-like cover',
        itemType: ItemType.POSTERS
    },

]

export const brandStore = readable(emptyItems, function(set) {
    set(branding);
    return function stop() {
        console.log('Ended');
    }
})

export const apparelStore = readable(emptyItems, function(set) {
    set(apparel);
    return function stop() {
        console.log('Ended');
    }
})

export const logoStore = readable(emptyItems, function(set) {
    set(logos);
    return function stop() {
        console.log('Ended');
    }
})

export const fbStore = readable(emptyItems, function(set) {
    set(fb);
    return function stop() {
        console.log('Ended');
    }
})

export const posterStore = readable(emptyItems, function(set) {
    set(poster);
    return function stop() {
        console.log('Ended');
    }
})