import {readable} from "svelte/store";
import type {IDeveloper} from "../types/Developer";


let emptyDevelopers: IDeveloper[] = [];

const developerList: IDeveloper[] = [
    {
        developerName: 'Luis Norbert Santiago',
        developerDescription: 'Freelance Graphic Designer without any willing clients! XD',
        developerImageURL: '/assets/devs/luis.jpg',
        developerSocialLinks: {
            twitter: 'https://twitter.com/luis_sntg?t=YT-NUT7rp1tsgPDlH46CyQ&s=09',
            facebook: 'https://www.facebook.com/luwissantiago13',
            instagram: 'https://instagram.com/luis.sntg/'
        }
    },
    {
        developerName: 'Ace Dela Cuesta',
        developerDescription: 'I love codings and I really want to learn it more.',
        developerImageURL: '/assets/devs/ace.png',
        developerSocialLinks: {
            twitter: 'https://twitter.com/Eysssjaan',
            facebook: 'https://www.facebook.com/ace.c.delacuesta',
            instagram: 'https://www.instagram.com/acedelacuesta/'
        }
    },
    {
        developerName: 'Allistair Ray Villanueva',
        developerDescription: 'I\'am Allistair Ray Villanueva, a motivated college graduate looking to apply extensive skills in video editing and graphic designing for my clients.',
        developerImageURL: '/assets/devs/allistair.png',
        developerSocialLinks: {
            twitter: 'https://twitter.com/lesterngmundo',
            facebook: 'https://www.facebook.com/lester.chico13/',
            instagram: 'None'
        }
    }
];


export const developerStore = readable(emptyDevelopers, function start(set) {
    set(developerList);
    return function stop() {
        console.log('Ended');
    }
});