import { TodoCategory } from './todoCategory';
import { Priority } from './Priority';

export type TodoItem = {
    id: string,
    name: string,
    priority: Priority,
    isChecked: boolean,
    category: TodoCategory,
    description: string,
    date: Date,
    endDate: Date | string,
}
