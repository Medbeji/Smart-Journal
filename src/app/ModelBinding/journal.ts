export class Journal{
_id:string;
__v:number;
    lienFb:string;
    _categorie:string;

        constructor(data) {
        Object.assign(this, data);
    }
}