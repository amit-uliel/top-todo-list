import { createEl } from "../../utils/dom";

/**
 * creates todo div and returns it
 * @param {Todo} todo 
 * @param {Project} project
 * @returns todo div
 */
export function renderTodo(todo, projectContainer, project, renderProject, { onRemove, onEdit }) {
    // todo container
    const todoDiv = createEl('div');
    todoDiv.classList.add('todo-container');
    
    // title
    const todoH2 = createEl('h2');
    todoH2.textContent = todo.title;

    // due date
    const todoDueDate = createEl('time');
    todoDueDate.dateTime = todo.dueDate;
    todoDueDate.textContent = todo.dueDate;

    // expand button
    const expandBtn = createEl('button');
    expandBtn.textContent = "Expand";

    // add event listener to expand button
    expandBtn.addEventListener('click', () => {
        expandBtn.textContent = expandBtn.textContent === 'Expand' ? 'Shrink' : 'Expand'
        detailsDiv.classList.toggle('hidden');
    });

    // remove button
    const removeBtn = createEl('button');
    removeBtn.textContent = "Remove";
    removeBtn.dataset.id = todo.id;

    // add event listener to remove button
    removeBtn.addEventListener('click', () => {
        onRemove(todo.id);
    });

    // details container
    const detailsDiv = createEl('div');
    detailsDiv.classList.add('hidden');

    // description
    const descriptionP = createEl('p');
    descriptionP.textContent = todo.description;

    // priority
    const prioritySpan = createEl('span');
    prioritySpan.textContent = `Priority: ${todo.priority}`;

    // notes
    const notesP = createEl('p');
    notesP.textContent = todo.notes;

    // edit button
    const editBtn = createEl('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');

    // add event listener to edit button
    editBtn.addEventListener('click', () => {
        onEdit(todo);
    });

    // appends
    detailsDiv.append(descriptionP, prioritySpan, notesP);
    todoDiv.append(todoH2, todoDueDate, expandBtn, detailsDiv, removeBtn, editBtn);

    return todoDiv;
}