import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Task} from '../../services/tasks/model/task';

import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TasksService } from 'src/app/services/tasks';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @ViewChild('dialog', {static: false})
  public dialog: TemplateRef<any>;
  taskStatusOpts = [
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

  tasks: Task[];

  newTaskData = {
    show: false,
    control: new FormControl('')
  };

  deleteTaskData = {
    index: null,
    dialog: null
  };
  
  constructor(private matDialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    //TODO: Get tasks
    this.tasks = [];
    for (let i = 0; i < 10; i++) {
      this.tasks.push({ id: i, description: 'Description of Task ' + i, status: this.taskStatusOpts[(i%3)].value});
    }

  }

  public newTask() {
    this.newTaskData.show = true;
    this.newTaskData.control.setValue('');
  }

  public createTask() {
    const newTask = {
      id: this.tasks.length,
      status: 'pending',
      description: this.newTaskData.control.value
    }
    console.log('Creating task', newTask);
    //TODO: Add task
    this.newTaskData.show = false;
    this.newTaskData.control.setValue('');
    this.tasks.push(newTask);
    this.openSnackBar('Task created successfully','');
    console.log('Tarea creada con exito');
  }

  public cancelNewTask() {
    this.newTaskData.show = false;
    this.newTaskData.control.setValue('');
  }

  public updateTask(idx) {
    const taskToUpdate = this.tasks[idx];
    if (taskToUpdate) {
      console.log('Updating task', taskToUpdate);
      //TODO Update Task
      this.openSnackBar('Task with id ' + taskToUpdate.id + ' updated successfully','');
    }
  }

  public deleteTask(idx) {
    this.deleteTaskData.index = idx;
    this.deleteTaskData.dialog = this.matDialog.open(this.dialog);
  }

  public deleteConfirm() {
    const taskToDelete = this.tasks[this.deleteTaskData.index];
    if (taskToDelete) {
      console.log('Deleting task', taskToDelete);
      //TODO: Delete Task
      // get index of object with id:37
      var removeIndex = this.tasks.map(function(item) { return item.id; }).indexOf(this.deleteTaskData.index);
      // remove object
      this.tasks.splice(removeIndex, 1);

      this.openSnackBar('Task with id ' + taskToDelete.id + ' removed successfully','');
    }
    this.deleteTaskData.dialog.close();
    this.deleteTaskData.index = null;
    this.deleteTaskData.dialog = null;
  }

  public deleteCancel() {
    this.deleteTaskData.dialog.close();
    this.deleteTaskData.index = null;
    this.deleteTaskData.dialog = null;
  }

  private getTasks() {
    //TODO getTasks
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
