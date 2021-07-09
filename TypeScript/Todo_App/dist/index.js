"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
console.clear();
let todo_list = [];
// creating object of Todo class
let task1 = new todo_1.Todo(1, "Go for walk");
let task2 = new todo_1.Todo(2, "Attend Meeting", true);
let task3 = new todo_1.Todo(3, "Eat baryani");
let task4 = new todo_1.Todo(4, "Work on Project", true);
let task5 = new todo_1.Todo(5, "Attend party");
// adding tasks in list
todo_list.push(task1);
todo_list.push(task2);
todo_list.push(task3);
todo_list.push(task4);
todo_list.push(task5);
// display tasks infpormation
task1.displayTask();
task2.displayTask();
task3.displayTask();
task4.displayTask();
task5.displayTask();
