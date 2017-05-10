export class Article{
    _id:string;
    __v:number;
    Description: string;
    Picture: string;
    Link : string;
    ArticleId : string ;
    Likes: number;
    name:string;
    _journal: {
        _id: string,
        picture: string
    };
    constructor(data) {
        Object.assign(this, data);
    }
}
