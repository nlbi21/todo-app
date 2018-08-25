import { Component, OnInit } from '@angular/core';
import { CambiarTodosEstadoTodoAction } from './todo.actions';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;
  
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
  }

  marcarTodos(){
    this.completado = !this.completado;
    const action = new CambiarTodosEstadoTodoAction(this.completado);
    this.store.dispatch( action );
  }

}
