import * as todoActions from './todo.actions';
import { Todo } from '../models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const estadoInicial : Todo[] = [todo1, todo2];

export function todoReducer( state = estadoInicial, 
    action : todoActions.Acciones ) {
    
        switch (action.type) {
            case todoActions.AGREGAR_TODO:
                const todo = new Todo (action.texto);
                return [ ...state, todo ];

            case todoActions.CAMBIAR_ESTADO:
                return state.map( todoEdit => {
                    if(todoEdit.id == action.id){
                        return {
                            ...todoEdit,
                            completado : !todoEdit.completado
                        };
                    } else {
                        return todoEdit;
                    }
                });
            
            case todoActions.CAMBIAR_TODOS_ESTADO:
                return state.map( todoEdit => {
                    return {
                        ...todoEdit,
                        completado : action.completado
                    };
                });

            case todoActions.EDITAR_TODO:
                return state.map( todoEdit => {
                    if(todoEdit.id == action.id){
                        return {
                            ...todoEdit,
                            texto : action.texto
                        };
                    } else {
                        return todoEdit;
                    }
                });
            case todoActions.BORRAR_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id);

            case todoActions.BORRAR_TODOS_COMPLETADOS:
                return state.filter( todoEdit => !todoEdit.completado);

            default:
                return state;
        }

}