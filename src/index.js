import './styles/style.css';
import { Project } from "./logic/project";
import { Todo } from "./logic/todo";
import { renderProject, renderProjectTabs } from './ui/projectUI';

// DOM queries
const tabsContainer = document.querySelector('.projects-tabs');
const projectContainer = document.querySelector('.project');
const projectForm = document.querySelector('.projectForm');
const todoForm = document.querySelector('.todoForm');

const projects = [];
const handlers = {
  onEdit: handleEdit,
  onRemove: handleRemove
};

let activeProject;
let todoBeingEdited = null;

init();

function init() {
    projects.push(new Project('default'));
    activeProject = projects[0];

    // adding event listeners to form
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const projectFormData = new FormData(projectForm);
    
        const name = projectFormData.get('name');
    
        const project = new Project(name);
    
        projects.push(project);

        renderProjectTabs(projects, activeProject, projectContainer, tabsContainer, setActiveTab);
    });
    
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const todoFormData = new FormData(todoForm);

        const title = todoFormData.get('title');
        const description = todoFormData.get('description');
        const dueDate = todoFormData.get('dueDate');
        const notes = todoFormData.get('notes');
        const priority = todoFormData.get('priority');
    
        if (todoBeingEdited) {
            todoBeingEdited.update({
                title,
                description,
                dueDate,
                notes,
                priority,
            });

            todoBeingEdited = null;
            todoForm.querySelector('button[type="submit"]').textContent = "Add Todo to Project";
        } else {
            const todo = new Todo(title, description, dueDate, notes, priority);
            activeProject.todos.push(todo);
        }
    
        renderProject(activeProject, projectContainer, handlers);
        todoForm.reset();
    });

    // rendering
    renderProjectTabs(projects, activeProject, projectContainer, tabsContainer, setActiveTab);
    renderProject(activeProject, projectContainer, handlers);
}

function setActiveTab(project) {
    activeProject = project;
}

function handleEdit(todo) {
  todoBeingEdited = todo;
  fillFormWithTodo(todo);
  todoForm.querySelector('button[type="submit"]').textContent = "Save Changes";
}

function handleRemove(todoId) {
  activeProject.remove(todoId);
  renderProject(activeProject, projectContainer, handlers);
}

function fillFormWithTodo(todo) {
    todoForm.elements.title.value = todo.title;
    todoForm.elements.description.value = todo.description;
    todoForm.elements.dueDate.value = todo.dueDate;
    todoForm.elements.notes.value = todo.notes;
    todoForm.elements.priority.value = todo.priority;
}