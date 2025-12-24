import { createEl } from "../../utils/dom";

/**
 * creates todo div and returns it
 * @param {Todo} todo 
 * @param {Project} project
 * @returns todo div
 */
export function renderTodo(todo, projectContainer, project, renderProject) {
    // todo container
    const todoDiv = createEl('div');
    
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

    const removeBtn = createEl('button');
    removeBtn.textContent = "Remove";
    removeBtn.dataset.id = todo.id;

    removeBtn.addEventListener('click', () => {
        const todoId = Number(removeBtn.dataset.id);
        project.remove(todoId);
        renderProject(project, projectContainer);
    });

    // details container
    const detailsDiv = createEl('div');
    detailsDiv.classList.add('hidden');

    // description paragraph
    const descriptionP = createEl('p');
    descriptionP.textContent = todo.description;

    const prioritySpan = createEl('span');
    prioritySpan.textContent = `Priority: ${todo.priority}`;

    const notesP = createEl('p');
    notesP.textContent = todo.notes;

    // appends
    detailsDiv.append(descriptionP, prioritySpan, notesP);
    todoDiv.append(todoH2, todoDueDate, expandBtn, detailsDiv, removeBtn);

    return todoDiv;
}