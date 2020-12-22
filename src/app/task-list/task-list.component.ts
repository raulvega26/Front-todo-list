import { Component, OnInit } from '@angular/core';
import { ModelTask } from './task-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskStatusOptions = [
    {
      value: 'inProgress',
      label: 'In progress'
    },
    {
      value: 'pending',
      label: 'Pending'
    },
    {
      value: 'finished',
      label: 'Finished'
    }
  ];
  public task: any;

  constructor() {
    this.task = new ModelTask();
  }

  ngOnInit() {
    this.task = [];
    for (let i = 0; i < 10; i++) {
      this.task.push({id: i, description: 'Description of Task ' + i, statusName: this.taskStatusOptions[(i % 3)].value});
    }
  }

  getAllItems() {
    return this.task.items;
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
