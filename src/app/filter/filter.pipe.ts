import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import * as filterActions from './filter.actions'

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filtro: filterActions.filtrosValidos): Todo[] {
    // console.log(todos);
    // console.log(filtro);

    switch ( filtro ) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      case 'todos':
        return todos;
      default:
        return todos;
    }
  }

}
