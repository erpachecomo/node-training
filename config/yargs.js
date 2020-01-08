const optsMultiplicar = {
    base:{
      demand: true,
      alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10
    }
    
  };
  
  const optsTodo = {
    description:{
      demand: true,
      alias: 'd',
      desc: 'Details of the to-do item'
    }
    
    
  };
  
const argvMultiplicar = require('yargs')
  .command('crear', 'Crea un archivo con la tabla de multiplicar', optsMultiplicar)
  .command('listar','Imprime en consola la tabla de multiplicar',optsMultiplicar)
  .help()
  .argv
  
const argvTodo = require('yargs')
  .command('add', 'Add a new item to the to-do list', optsTodo)
  .command('show', 'Show all the items in the to-do list')
  .command('remove', 'Remove an existing item from the to-do list', optsTodo)

  .command('update','Update an item from the to-do list',{...optsTodo, completed: {
      alias: 'c',
      default: true
    }})
  .help()
  .argv

module.exports = {
  argvMultiplicar,
  argvTodo
}