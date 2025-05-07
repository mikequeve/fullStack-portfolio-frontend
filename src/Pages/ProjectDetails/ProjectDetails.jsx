import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Background from '../../Components/Background/Background';
import './ProjectDetails.css';
import { ArrowLeft, ChevronRight, SquareCode, Github, Globe } from 'lucide-react';
import { GlobalContext } from '../../context/GlobalContext';
import Loader from '../../Components/Loader/Loader';

const ProjectDetails = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getProjectById } = useContext(GlobalContext);

  const { title, description, imageUrl, repoLink, demoLink, stack } = project;

  useEffect(() => {
    setLoading(true);
    const loadProject = async () => {
      const data = await getProjectById(id);
      if (data) setProject(data);
      setLoading(false);
    };
    loadProject();
  }, [id]);

  const stackArray = stack ? stack.split(',').map((item) => item.trim()) : [];

  return (
    <>
      <Background />
      <section className='flex-center project__details'>
        <article className='container flex-column'>
          <div className='breadcrumbs'>
            <a onClick={() => navigate(-1)} className='flex-center tech__btn'>
              <ArrowLeft size={20} strokeWidth={2} />
              Back
            </a>
            <div className='flex-center'>
              <span>Projects</span>
              <ChevronRight size={20} strokeWidth={2} className='chevron' />
              <span>{title}</span>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className='project__details-content flex-center'>
              <div className='flex-column left__side side'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='flex-column stack__container'>
                  <div className='flex-center'>
                    <SquareCode
                      size={26}
                      strokeWidth={2}
                      color='#4c3289'
                      className='code'
                    />
                    <h5>Technologies Used</h5>
                  </div>
                  <div className='stack__content flex-center'>
                    {stackArray.map((item, index) => (
                      <span key={index} className='tech__btn'>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex-column right__side side'>
                <img src={imageUrl} alt='' />
                <div className='flex-center actions__container'>
                  <div className='flex-center tech__btn button'>
                    <Globe />
                    <a href={demoLink} target='_blank' rel='noopener noreferer'>
                      DEMO
                    </a>
                  </div>
                  {repoLink ? (
                    <div className='flex-center tech__btn button'>
                      <Github />
                      <a href={repoLink} target='_blank' rel='noopener noreferer'>
                        GITHUB
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          )}
        </article>
      </section>
    </>
  );
};

export default ProjectDetails;
