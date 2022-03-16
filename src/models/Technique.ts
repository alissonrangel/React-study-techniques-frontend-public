export interface TechniqueInstance{
    id: number;
    title: string;
    body: string;
    reference: string;
    link: string;
    url_image: string;
    name_image: string;
}

export type Technique = {
    title: string,
    body: string,
    reference: string,
    link: string,
    url_image?: string,
    name_image?: string,
}
