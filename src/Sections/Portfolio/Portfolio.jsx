import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './Portfolio.css';
import Loader from '../../Components/Loader/Loader';

const Portfolio = (props) => {
  const { projects, loading } = props;

  return (
    <section className='flex-center site__portfolio' id='Portfolio'>
      <article className='flex-column container'>
        <div className='flex-column section__subtitle' data-aos='fade-up'>
          <h2 className='subtitle'>Portfolio Showcase</h2>
          <p>Explore my journey through the projects I've developed.</p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='flex-center portfolio__content'>
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos={
                  index % 3 === 0
                    ? 'fade-up-right'
                    : index % 3 === 1
                    ? 'fade-up'
                    : 'fade-up-left'
                }
                data-aos-duration='1000'
              >
                <ProjectCard
                  id={project.projectId}
                  img={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                  repoLink={project.repoLink}
                  data={projects}
                />
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default Portfolio;
