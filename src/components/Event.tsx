
interface ElemProps {
  el: {
    id: number,
    timestamp: number,
    duration: number,
    zone: {
      left: number,
      top: number,
      width: number,
      height: number,
    }
  },
  time: number,
};

const Event = ({el, time}:ElemProps) => {

  return (
    <>
      <div 
        style={{
        left: `${el.zone.left}px`,
        top: `${el.zone.top}px`,
        width: `${el.zone.width}px`,
        height: `${el.zone.height}px`}} 
        key={el.id.toString()} 
        className={time >= el.timestamp/1000 && time < (el.timestamp + el.duration)/1000 ? 'element' : ''}
      ></div>
    </>
  );
};

export default Event;