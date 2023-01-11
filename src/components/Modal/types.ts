import { PropsWithChildren, SyntheticEvent } from 'react';
export type TOverlayProps = PropsWithChildren<{
  onClick: (event: SyntheticEvent<HTMLDivElement>) => void
}>

export type TModalProps = PropsWithChildren<{
  visible: boolean;
  onClose: () => void;
}>