import { data } from '../data/data';
import Event from './Event';

interface ITimeProps {
  time: number,
};

const ItemEvent = ({time}:ITimeProps) => {
 
  return (
    <div>
       {data.map((el, i) =>
          <Event
            el={el}
            key={i}
            time={time}
          />
        )}
    </div>
  );
};

export default ItemEvent;