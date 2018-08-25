import { Action } from "@ngrx/store";

// Agregar una tarea al todo.
export const AGREGAR_TODO = '[TODO] AGREGAR TODO';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor( public texto : string ){ }
}

// Cambiar el estado de una tarea (completado o no completado)
export const CAMBIAR_ESTADO = '[TODO] CAMBIAR ESTADO TODO';

export class CambiarEstadoTodoAction implements Action {
    readonly type = CAMBIAR_ESTADO;
    constructor( public id : number ){ }
}

// Cambiar el estado de una tarea (completado o no completado)
export const CAMBIAR_TODOS_ESTADO = '[TODO] CAMBIAR TODOS ESTADO TODO';

export class CambiarTodosEstadoTodoAction implements Action {
    readonly type = CAMBIAR_TODOS_ESTADO;
    constructor( public completado : boolean){ }
}

// Cambiar el estado de una tarea (completado o no completado)
export const EDITAR_TODO = '[TODO] EDITAR TODO';

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor( public id : number, public texto : string ){ }
}

// Borrar todo
export const BORRAR_TODO = '[TODO] BORRAR TODO';

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor( public id : number ){ }
}

// Borrar todo
export const BORRAR_TODOS_COMPLETADOS = '[TODO] BORRAR TODOS COMPLETADOS';

export class BorrarTodosCompletadosAction implements Action {
    readonly type = BORRAR_TODOS_COMPLETADOS;
    constructor( ){ }
}

export type Acciones = AgregarTodoAction | CambiarEstadoTodoAction | EditarTodoAction | BorrarTodoAction | CambiarTodosEstadoTodoAction | BorrarTodosCompletadosAction;