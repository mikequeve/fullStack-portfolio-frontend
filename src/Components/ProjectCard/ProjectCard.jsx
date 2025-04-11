import React from 'react';
import './ProjectCard.css';
import { Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, img, title, description, demoLink, data }) => {
  return (
    <div className='project__card'>
      <img src={img} alt={`${title} - project image`} />
      <div className='project__card-content'>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className='flex-center project__card-footer'>
          <a
            href={demoLink}
            target='_blank'
            rel='noopener noreferer'
            className='flex-center project__link'
          >
            Demo <Globe className='project__icon' />
          </a>
          <Link
            to={`/projects/${id}`}
            className='flex-center project__link details'
            data={data}
          >
            Details <ArrowRight className='project__icon' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
