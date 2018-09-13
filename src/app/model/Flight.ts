import { OffreDePrix } from "./OffreDePrix";
import { Avions } from "./Avions";

export interface Flight {
    id:number;
    codeIATA_depart : String;
    codeIATA_arrivee : String;
    heureArrivee:Date;
    heureDepart:Date;
    avion: Avions;
    offreDePrix: OffreDePrix;

}