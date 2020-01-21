import { TodoCategory } from './todoCategory';

export type TodoItem = {
    name: string,
    isChecked: boolean,
    category: TodoCategory,
    description: string,
    date: Date,
    endDate: Date | string,
}
