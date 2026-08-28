import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const isInternal = Boolean(project.slug);
  const href = isInternal ? `/work/${project.slug}` : project.url;
  const Wrapper = isInternal ? Link : "a";
  const extra = isInternal
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper to={href} href={href} className="card project-card" {...extra}>
      {project.image ? (
        <div className="project-image">
          <img src={`/images/${project.image}`} alt="" />
        </div>
      ) : null}
      <div className="project-body">
        {project.tag ? <span className="tag">{project.tag}</span> : null}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.tags?.length ? (
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}

export default ProjectCard;
