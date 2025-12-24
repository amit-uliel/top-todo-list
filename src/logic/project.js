export class Project {
    static counter = 0;
    constructor(name) {
        this.id = Project.counter++;
        this.name = name;
        this.todos = [];
    }

    // add todo item
    add(todo) {
        this.todos.push(todo);
    }

    // remove todo item
    remove(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}