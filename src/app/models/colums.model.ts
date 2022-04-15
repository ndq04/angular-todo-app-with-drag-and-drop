import { InputInterface } from '../InputInterface';
import { TodoInterface } from '../TodoInterface';

export interface Columns {
  name: string;
  input: InputInterface;
  tasks: TodoInterface[];
}
