import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import { CambiarEstadoTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo : Todo;
  @ViewChild('txtInputFisico') txtInputFisico : ElementRef;
  chkField : FormControl;
  txtInput : FormControl;
  editando : boolean;


  constructor(private store : Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkField.valueChanges.subscribe( () => { 
      const action = new CambiarEstadoTodoAction(this.todo.id);
      this.store.dispatch( action );
    });

  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;
    setTimeout(() => {
      if(this.txtInput.invalid){
        return;
      }
  
      if(this.txtInput.value === this.todo.texto){
        return;
      }
  
      const action = new EditarTodoAction(this.todo.id, this.txtInput.value);
      this.store.dispatch( action );
    }, 1);
    
  }

  borrarTodo(){
    const action = new BorrarTodoAction( this.todo.id );
    this.store.dispatch( action );
  }

}
