import { Action } from "../../../node_modules/@ngrx/store";

export const SET_FILTRO = '[Filter] Set Filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class setFiltroAction implements Action {

    readonly type = SET_FILTRO;

    constructor( public filtro : filtrosValidos ){

    }
    
}

export type acciones = setFiltroAction;