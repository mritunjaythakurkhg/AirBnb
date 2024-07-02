export interface list{
    id: number,
    title: string,
    description:string | undefined,
    price: number,
    location: string,
    number_of_beds: number,
    slideshow: slideshow[],
    counter:number,
    number_of_person: number
}

export interface slideshow {
    id: number,
    imageUrl: string
}[]