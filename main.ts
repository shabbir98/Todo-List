#! /usr/bin/env node
import inquirer from 'inquirer';

const todo: string[] = [];
let result = '';
do {
  console.log('You current todo list: ', todo);

  const askAgain = await inquirer.prompt({
    message: 'Choose your preference:',
    type: 'list',
    choices: ['Add', 'Remove', 'Mark as Done', 'exit'],
    name: 'choose',
  });

  switch (askAgain.choose) {
    case 'Add':
      const storeTodo = await inquirer.prompt({
        message: 'Add your Todo:',
        type: 'input',
        name: 'todoArray',
      });
      todo.push(storeTodo.todoArray);
      break;

    case 'Remove':
      const removeTodo = await inquirer.prompt({
        message: 'Which Todo item to be removed:',
        type: 'list',
        choices: todo,
        name: 'remove',
      });
      todo.splice(todo.indexOf(removeTodo.remove), 1);
      console.clear();
      console.log(`'${removeTodo.remove}' has been removed from your list`);
      break;

    case 'Mark as Done':
      const selectTodo = await inquirer.prompt({
        message: 'Select which item to mark:',
        type: 'list',
        choices: todo,
        name: 'select',
      });
      todo.splice(todo.indexOf(selectTodo.select), 1);
      console.clear();
      console.log(
        `'${selectTodo.select}' has been marked done and now no longer a "Todo"`
      );
      break;

    case 'exit':
      break;
  }

  if (askAgain.choose === 'exit') result = 'exit';
} while (result !== 'exit');
