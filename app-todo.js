
const {argvTodo: argv} = require('./config/yargs')
const colors = require('colors')

const toDo = require('./to-do/to-do')

let command = argv._[0];
switch (command) {
  
  case 'add':
    let item = toDo.add(argv.description);
    break;
    
  case 'show':
    const list = toDo.getTodoList();
    console.log('To Do List:'.green)

    for(let item of list){
      console.log(`${item.completed ? 'â' : 'â'} ${item.description}`)
    }
    break;
    
  case 'update':
    toDo.update(argv.description, argv.completed)
    break;
    
  case 'remove':
    toDo.remove(argv.description)
    break;

  default:
    console.log('Comando desconocido');
}
