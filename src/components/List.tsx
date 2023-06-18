import { data } from '../data/data';
import {millisecondConverter} from'../helpers';

interface ITransProps {
  onChange: (transition: number) => void
};

const List = ({onChange}: ITransProps) => {
  data.sort((a, b) => {
    return a.timestamp - b.timestamp
  });

  return (
    <select 
      className='list'
      onChange={(e) => onChange(+e.target.value)}
    >
      {
        data.map((item, i) => 
          <option 
            key={item.id}
            id={item.id.toString()}
            value={item.timestamp}
          >{millisecondConverter(item.timestamp)}</option>
        )
      }
    </select>
  );
};

export default List;