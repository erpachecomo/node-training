

const fs = require('fs');

let todoList = [];

const saveDB = () => {
  let data = JSON.stringify(todoList);
  fs.writeFile('./db/data.json', data, (err) => {
    if(err) throw err;
    
    console.log('Changed have been saved on the DB succesfully')
  })
}

const loadDB = () => {
  try{
    todoList = require('../db/data.json')
  }
  catch(err){
    todoList = []; 
  }
}

const getTodoList = () => {
  loadDB();
  return todoList;
}

const add = (description) => {
  loadDB();
  let todo={
    description,
    completed:false
  }
  todoList.push(todo);
  saveDB();
  return todo;
}

const update = (description, completed) => {
  loadDB();
  let index = todoList.findIndex(item => item.description === description);
  if(index<0)
    throw new Error(`To Do '${description}' does not exists`)
  todoList[index].completed = completed;
  saveDB();
}

const delete = (description) => {
  loadDB();
  todoList.splice( todoList.indexOf(description), 1 );
  saveDB();
}

module.exports = {
  add,
  getTodoList,
  update
}