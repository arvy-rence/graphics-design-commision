export interface IDeveloper {
    developerName: string;
    developerDescription: string;
    developerImageURL: string;
    developerSocialLinks: ISocialLinks;
}

interface ISocialLinks {
    twitter: string;
    facebook: string;
    instagram: string;
}