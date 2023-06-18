import React, { useState } from 'react';
import { video } from '../data/data';
import List from '../components/List';

interface IChangProps {
  onChange: (time: number) => void
};

const Video = ({onChange}: IChangProps) => {
  let [transition, setTransition] = useState<number>(0);
  const heandlerTransition = (transition: number) => {
    setTransition(transition)
  };
  const videoTime = (e: React.SyntheticEvent<HTMLVideoElement, Event>): void => {
    if(transition > 0){
      e.currentTarget.currentTime = transition/1000;
      setTransition(transition = 0);
    }
    onChange(e.currentTarget.currentTime);
  };

  return (
    <div className='wrap'>
      <video
        onTimeUpdate={(e) => videoTime(e)}
        className='video'
        src={video} 
        controls 
      />
      <List onChange={heandlerTransition}/>
    </div>
  );
};

export default Video;