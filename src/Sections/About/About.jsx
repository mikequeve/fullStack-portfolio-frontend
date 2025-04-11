import React, { useContext } from 'react';
import './About.css';
import { FileText, CodeXml, Award, Waypoints, SquareArrowOutUpRight } from 'lucide-react';
import { GlobalContext } from '../../context/GlobalContext';

const stack = [
  { name: 'react' },
  { name: 'javaScript' },
  { name: 'tailwind' },
  { name: 'bootstrap' },
  { name: 'figma' },
  { name: 'adobe xd' },
  { name: 'wordpress' },
  { name: 'photoshop' },
  { name: 'illustrator' },
  { name: 'java' },
  { name: 'sql databases' },
];

const About = () => {
  const { projects } = useContext(GlobalContext);

  const statsData = [
    { icon: CodeXml, label: 'Total Projects', value: `0${projects.length}` },
    { icon: Award, label: 'Certificates', value: '06' },
    { icon: Waypoints, label: 'Years of Experience', value: '01' },
  ];

  return (
    <section className='flex-center site__about' id='About'>
      <article className='flex-column container'>
        <div className='flex-column section__subtitle'>
          <h2 className='subtitle' data-aos='fade-up' data-aos-duration='600'>
            About Me
          </h2>
        </div>
        <div className='flex-center about__content'>
          <div
            className='flex-column about__text-container'
            data-aos='fade-right'
            data-aos-duration='800'
          >
            <h3>Hello, I'm</h3>
            <span>Michael Quesada Vega</span>
            <p>
              Web developer, passionate about creating dynamic and functional web
              applications. My dedication and curiosity to learn new technologies drives
              me to continuously improve my skills.
            </p>
            <div className='tech__container'>
              {stack.map((item, index) => (
                <h5 className='tech__btn' key={index}>
                  {item.name}
                </h5>
              ))}
            </div>
            <a
              href='https://drive.google.com/file/d/1aXyyWoSUftfO8hX0tLMa3WhIyr4JAZJl/view?usp=sharing'
              rel='noopenner noreferrer'
              target='_blank'
              className='secondary__btn'
            >
              Explore CV <FileText />
            </a>
          </div>
          <div className='flex-column stats__container'>
            {statsData.map((item, index) => {
              return (
                <div
                  className='flex-column stat__card'
                  key={index}
                  data-aos='fade-left'
                  data-aos-duration='1000'
                >
                  <div className='flex-center stat__card-header'>
                    <span className='flex-center stat__icon'>
                      <item.icon />
                    </span>
                    <h3 className='stat__value'>{item.value}</h3>
                  </div>
                  <div className='flex-center stat__card-footer'>
                    <p>{item.label}</p>
                    <SquareArrowOutUpRight className='stat__card-arrow' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
