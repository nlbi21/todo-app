import { Todo } from "./models/todo.model";
import { ActionReducerMap } from "../../node_modules/@ngrx/store";
import * as todoReducer from "./todo/todo.reducer";
import * as  filtroReducer from './filter/filter.reducer';

import * as filterActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filtro: filterActions.filtrosValidos;
}

export const appReducers : ActionReducerMap<AppState> = {
    todos: todoReducer.todoReducer,
    filtro: filtroReducer.filtroReducer
}