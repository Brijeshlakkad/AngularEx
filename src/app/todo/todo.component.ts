import { Component, OnInit } from '@angular/core';
import { TodoControllerService } from '../services/todo-controller.service';
import { Todo } from '../itodo';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  todoForm: FormGroup;
  constructor(private todoService: TodoControllerService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required],
    });
  }

  showTodoList(): void {
    this.todoService.getTodoList().subscribe((todoList) => {
      this.todoList = todoList;
      console.log(todoList);
    })
  }

  get f() { return this.todoForm.controls; }

  addTodo(): void {
    const todo: Todo = { item: this.f.todo.value };
    console.log(this.f.todo.value);
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todoList.push(todo);
    });
    this.todoForm.reset();
  }

  deleteTodo(item):void{
    this.todoService.deleteTodo(item).subscribe(()=>{
      console.log("Deleted item: "+item);
    });
  }
}
