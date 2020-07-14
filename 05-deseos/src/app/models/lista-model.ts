export class ListaModel {

    id          : number;
    titulo      : string;
    creadaEn    : Date;
    terminadaEn : Date;
    terminada   : boolean;
    items       : ListaModel[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime(); // Dado que el tiempo es algo imposiblede duplicar, se suara esto para no usar el id de una base de datos
    }

}
