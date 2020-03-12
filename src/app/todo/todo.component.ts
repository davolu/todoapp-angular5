import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoText: string="";
  todoItems =[];

  constructor() { }
  ngOnInit(): void {

   }
  addTodoItem()
  {
    this.todoItems.push(this.todoText);
    this.todoText='';
 
  }

}
