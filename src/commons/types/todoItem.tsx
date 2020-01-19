import { TodoType } from './todoType';

export type TodoItem = {
    name: string,
    isChecked: boolean,
    type: TodoType,
    description: string,
    date: Date,
    endDate: Date | undefined,
}
