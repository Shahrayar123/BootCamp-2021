import {Todo} from './todo';

console.clear();


let todo_list: Todo[] = [];

// creating object of Todo class
let task1: Todo = new Todo(1, "Go for walk");
let task2: Todo = new Todo(2, "Attend Meeting", true);
let task3: Todo = new Todo(3, "Eat baryani");
let task4: Todo = new Todo(4, "Work on Project");
let task5: Todo = new Todo(5, "Attend party");

// adding tasks in list
todo_list.push(task1);
todo_list.push(task2);
todo_list.push(task3);
todo_list.push(task4);
todo_list.push(task5);

console.log();

console.log("\n----------> INITIAL LIST\n");
// display tasks information

task1.displayTask();

task2.displayTask();

task3.displayTask();

task4.displayTask();

task5.displayTask();


console.log("\n----------> CHANGE STATUS OF TASK 1 & TASK 4\n");

// change status of tasks
task1.changeTaskStatus();
task4.changeTaskStatus();

console.log("\n----------> LIST AFTER CHANGING STATUS OF TASK 1 & 4\n");
// display tasks information

task1.displayTask();

task2.displayTask();

task3.displayTask();

task4.displayTask();

task5.displayTask();


// console.log("\n----------> DELETING A TASKS WHICH IS COMPLATED\n");

// deleting the tasks which is completed

// for(let index = 0; index < todo_list.length; index++)
// {
//     if(todo_list[index]['taskStatus'] == true)
//     {
//         todo_list.splice(index, 1);                
//     }
// }

// console.log("\n----------> DISPLAYING LIST AFTER DELETING TASKS\n");

// // display tasks information
// task1.displayTask();

// task2.displayTask();

// task3.displayTask();

// task4.displayTask();

// task5.displayTask();



