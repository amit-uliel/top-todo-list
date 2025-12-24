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

    // edit title
    editTitle(newTitle) {
        if (!newTitle?.trim()) return;
        this.title = newTitle;
    }

    // edit description
    editDescription(newDescription) {
        if (!newDescription?.trim()) return;
        this.description = newDescription;
    }

    // edit priority
    editPriority(newPriority) {
        if (!newPriority?.trim()) return;
        this.priority = newPriority;
    }

    // edit notes
    editNotes(newNotes) {
        if (!newNotes?.trim()) return;
        this.notes = newNotes;
    }
}