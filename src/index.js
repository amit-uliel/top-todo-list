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
let activeProject;

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
    
        const todo = new Todo(title, description, dueDate, notes, priority);
    
        activeProject.todos.push(todo);
    
        renderProject(activeProject, projectContainer, activeProject);
    });

    // rendering
    renderProjectTabs(projects, activeProject, projectContainer, tabsContainer, setActiveTab);
    renderProject(activeProject, projectContainer, activeProject);
}

function setActiveTab(project) {
    activeProject = project;
}