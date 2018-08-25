import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import * as filterActions from '../../filter/filter.actions';
import { Todo } from '../../models/todo.model';
import { BorrarTodosCompletadosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  todoPendientes: number;
  filtrosValidos : filterActions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual : filterActions.filtrosValidos;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.contarPendientes( state.todos );
    });
  }

  cambiarFiltro(nuevoFiltro : filterActions.filtrosValidos){
      const action = new filterActions.setFiltroAction( nuevoFiltro );
      this.store.dispatch ( action );
  }

  contarPendientes(todos : Todo[]){
    this.todoPendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletados(){
    const action = new BorrarTodosCompletadosAction();
    this.store.dispatch ( action );
  }

}
