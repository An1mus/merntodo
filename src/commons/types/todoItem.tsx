import { TodoCategory } from './todoCategory';

export type TodoItem = {
    id: string,
    name: string,
    isChecked: boolean,
    category: TodoCategory,
    description: string,
    date: Date,
    endDate: Date | string,
}
