import { useState } from 'react';
import { PROJECTS } from './projects';

const useProjectTabs = () => {
    const [projects, setProjects] = useState(PROJECTS);
    const [activeProject, setActiveProject] = useState(PROJECTS[0]);

    const handleTabChange = (project) => {
        const updatedProjects = projects.map((p) =>
            p.id === project.id ? { ...p, active: true } : { ...p, active: false }
        );
        setProjects(updatedProjects);
        setActiveProject(project);
    };

    const projectTabs = projects.map(project => ({
        title: project.title,
        onClick: () => handleTabChange(project),
        active: project.active
    }));

    return { projectTabs, activeProject };
};

export default useProjectTabs;