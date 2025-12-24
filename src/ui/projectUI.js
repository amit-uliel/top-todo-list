import { clearContainer, createEl } from "../../utils/dom";
import { renderTodo } from "./todoUI";

// render a project (todo list)
export function renderProject(project, projectContainer) {
    clearContainer(projectContainer);

    project.todos.forEach(todo => {
        const todoDiv = renderTodo(todo, projectContainer, project, renderProject);
        projectContainer.append(todoDiv);
    });
}

// render project tabs
export function renderProjectTabs(projects, activeProject, projectContainer, tabsContainer, setActiveTab) {
    clearContainer(tabsContainer);
    
    projects.forEach(project => {
        const tab = createTab(projects, project, projectContainer, tabsContainer, setActiveTab);

        if (project === activeProject) {
            tab.classList.add('active');
        }

        tabsContainer.append(tab);
    });
}

// create project tabs
function createTab(projects, project, projectContainer, tabsContainer, setActiveTab) {
    const tab = createEl('button');
    tab.textContent = project.name;

    tab.addEventListener('click', () => onTabClick(projects, project, projectContainer, tabsContainer, setActiveTab));

    return tab;
}

function onTabClick(projects, project, projectContainer, tabsContainer, setActiveTab) {
    renderProject(project, projectContainer, project);
    renderProjectTabs(projects, project, projectContainer, tabsContainer, setActiveTab);
    setActiveTab(project);
}