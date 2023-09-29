import Project from './Project';
import styles from './ProjectPage.module.css'
import { Category, projects } from '@/lib/projects';

type ProjectPageProps = {
  category: Category
}

export default function ProjectPage({ category }: ProjectPageProps) {
    const filteredProjects = projects.filter(project => project.category === category)

  return (

    <ul className={styles.projects}>{
        filteredProjects.map(project => {
        return(
            <Project 
                category={project.category}
                key={project.repo}
                src={project.src}
                site={project.site}
                repo={project.repo}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
            />
            )
        })}
    </ul>

  )
}
