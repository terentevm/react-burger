import { PropsWithChildren } from 'react';
import styles from './container.module.css';

type Props = PropsWithChildren<{}>
const Container = ({ children } : Props) => {
  return (
    <div className={styles.container}>{ children }</div>
  );
};

export default Container;
