import { OffreDePrix } from "./OffreDePrix";

export interface Flight {
    id:number;
    codeIATA_depart : String;
    codeIATA_arrivee : String;
    heurearrivee:Date;
    heuredepart:Date;
    id_avion:number;
    offreDePrix: OffreDePrix;

}