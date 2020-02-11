import { TodoCategory } from './todoCategory';

export type TodoItem = {
    id: string,
    name: string,
    priority: string,
    isChecked: boolean,
    category: TodoCategory,
    description: string,
    date: Date,
    endDate: Date | string,
}
