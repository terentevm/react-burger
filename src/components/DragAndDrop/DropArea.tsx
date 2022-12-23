import { useDrop } from 'react-dnd';
import { TDropAreaProps } from './types';

const DropArea = ({ type, onDropHandler, children, className}: TDropAreaProps) => {

  const [{}, targetRef] = useDrop({
      accept: type,
      collect: monitor => ({
        isHover: monitor.isOver()
      }),
      drop(item) {
        onDropHandler(item);
      }
    });
  return (
    <div className={className} ref={targetRef}>{ children }</div>
  )
}

export { DropArea };
