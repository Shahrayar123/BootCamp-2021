import {Todo} from './todo';

console.clear();



let todo_list: Todo[] = [];

// creating object of Todo class
let task1: Todo = new Todo(1, "Go for walk");
let task2: Todo = new Todo(2, "Attend Meeting", true);
let task3: Todo = new Todo(3, "Eat baryani");
let task4: Todo = new Todo(4, "Work on Project", true);
let task5: Todo = new Todo(5, "Attend party");

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







