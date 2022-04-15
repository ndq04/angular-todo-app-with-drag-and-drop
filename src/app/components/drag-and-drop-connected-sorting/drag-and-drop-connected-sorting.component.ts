import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { TodoInterface } from '../../TodoInterface';

@Component({
  selector: 'app-drag-and-drop-connected-sorting',
  templateUrl: './drag-and-drop-connected-sorting.component.html',
  styleUrls: ['./drag-and-drop-connected-sorting.component.scss'],
})
export class DragAndDropConnectedSortingComponent implements OnInit {
  done: TodoInterface[] = [];

  board: Board = {
    name: 'Todos Board',
    columns: [
      {
        name: 'Ideas',
        input: {
          placeholder: 'Enter idea...',
          value: '',
          isShowInput: false,
          isShowIcon: true,
        },
        tasks: [],
      },
      {
        name: 'Research',
        input: {
          placeholder: 'Enter research...',
          value: '',
          isShowInput: false,
          isShowIcon: true,
        },
        tasks: [],
      },
      {
        name: 'Todo',
        input: {
          placeholder: 'Enter todo...',
          value: '',
          isShowInput: false,
          isShowIcon: true,
        },
        tasks: [],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  toggleShowOrHidden(name: string) {
    switch (name) {
      case 'Ideas':
        let newIdeas = this.board.columns.map((column) => {
          if (column.name === 'Ideas') {
            return {
              ...column,
              input: {
                ...column.input,
                isShowInput: column.input.isShowInput === true ? false : true,
                isShowIcon: column.input.isShowIcon === true ? false : true,
              },
            };
          }
          return column;
        });
        this.board.columns = newIdeas;
        break;
      case 'Research':
        let newResearchs = this.board.columns.map((column) => {
          if (column.name === 'Research') {
            return {
              ...column,
              input: {
                ...column.input,
                isShowInput: column.input.isShowInput === true ? false : true,
                isShowIcon: column.input.isShowIcon === true ? false : true,
              },
            };
          }
          return column;
        });
        this.board.columns = newResearchs;
        break;

      default:
      case 'Todo':
        let newTodos = this.board.columns.map((column) => {
          if (column.name === 'Todo') {
            return {
              ...column,
              input: {
                ...column.input,
                isShowInput: column.input.isShowInput === true ? false : true,
                isShowIcon: column.input.isShowIcon === true ? false : true,
              },
            };
          }
          return column;
        });
        this.board.columns = newTodos;
        break;
    }
  }

  drop(event: CdkDragDrop<TodoInterface[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(this.done);
    }
  }

  add(value: string, name: string) {
    switch (name) {
      case 'Ideas':
        this.board.columns.map((column) => {
          if (column.name === 'Ideas') {
            return {
              ...column,
              tasks: column.tasks.unshift({
                title: value,
                done: false,
                id: Math.floor(Math.random() * 99999999 + 1),
              }),
            };
          }
          return column;
        });
        break;
      case 'Research':
        this.board.columns.map((column) => {
          if (column.name === 'Research') {
            return {
              ...column,
              tasks: column.tasks.unshift({
                title: value,
                done: false,
                id: Math.floor(Math.random() * 99999999 + 1),
              }),
            };
          }
          return column;
        });
        break;
      default:
      case 'Todo':
        this.board.columns.map((column) => {
          if (column.name === 'Todo') {
            return {
              ...column,
              tasks: column.tasks.unshift({
                title: value,
                done: false,
                id: Math.floor(Math.random() * 99999999 + 1),
              }),
            };
          }
          return column;
        });
        break;
    }
    let newColumns = this.board.columns.map((column) => {
      return {
        ...column,
        input: {
          ...column.input,
          value: '',
        },
      };
    });
    this.board.columns = newColumns;
  }
  deleteTask(id: number) {
    let newColumns = this.board.columns.map((column) => {
      return {
        ...column,
        tasks: column.tasks.filter((task) => task.id !== id),
      };
    });
    if (confirm('Are you sure you want to delete this task?')) {
      this.board.columns = newColumns;
    }
  }
  deleteTaskDone(id: number) {
    let newDone = this.done.filter((task) => task.id !== id);
    if (confirm('Are you sure you want to delete this task?')) {
      this.done = newDone;
    }
  }
}
