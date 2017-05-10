export class Categorie{
_id:string;
__v:number;
    name:string;
    _journal:string;

        constructor(data) {
        Object.assign(this, data);
    }
}