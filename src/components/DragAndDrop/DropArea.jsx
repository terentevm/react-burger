import { useDrop } from 'react-dnd';

const DropArea = ({ type, onDropHandler, children, className}) => {

  const [{ isHover }, targetRef] = useDrop({
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
