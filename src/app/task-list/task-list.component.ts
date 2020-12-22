import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  id: number;
  description: string;
  statusName: string;

  constructor() { }

  ngOnInit() {
    
  }


  getAllTasks() {
    
  }

  addTask() {

  }

  getTaskById() {

  }

  deleteTask() {

  }

  updateTask() {

  }

}
