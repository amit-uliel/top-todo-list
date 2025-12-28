export class Todo {
    static counter = 0;
    constructor(title, description, dueDate, priority, notes) {
        this.id = Todo.counter++;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    update({ title, description, dueDate, priority, notes }) {
        if (title?.trim()) this.title = title;
        if (description?.trim()) this.description = description;
        if (dueDate) this.dueDate = dueDate;
        if (priority) this.priority = priority;
        if (notes?.trim()) this.notes = notes;
    }
}