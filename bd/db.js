
class db{
    constructor(){
        this.datos={comics:[]};
    }
    agregarComics (dato){
        this.datos.comics.push(dato);
    }
    listarComics(){
        return this.datos.comics;
    }
}
module.exports=new db();