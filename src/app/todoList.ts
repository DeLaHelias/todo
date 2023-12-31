import { TodoItem } from './todoItem';

export class TodoList {

    constructor(
        public user: string,
        private todoItems: TodoItem[] = [],
    ) {

        // No statements required
    }

    get items(): readonly TodoItem[] {
        return this.todoItems;
    }

    addItem(task: string): void {
        this.todoItems.push(new TodoItem(task));
    }
}