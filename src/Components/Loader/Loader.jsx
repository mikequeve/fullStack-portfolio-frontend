import React from 'react';
import { NewtonsCradle } from 'ldrs/react';
import 'ldrs/react/NewtonsCradle.css';
import './Loader.css';
import Background from '../Background/Background';

const Loader = () => {
  return (
    <>
      <Background />
      <div className='flex-center loader'>
        <article className='container flex-center'>
          <NewtonsCradle size='120' speed='1.4' color='white' />
        </article>
      </div>
    </>
  );
};

export default Loader;
