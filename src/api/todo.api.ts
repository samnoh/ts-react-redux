import axios from 'axios';

import { Todo } from '../actions';

export const getTodos = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
