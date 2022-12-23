import { PropsWithChildren } from 'react';
import { TDraggableItem } from '../../types';

export type TDropAreaProps = PropsWithChildren<{
  type: string;
  onDropHandler: (item: any) =>void;
  className?: string
}>