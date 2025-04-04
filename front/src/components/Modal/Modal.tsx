/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect } from 'react';
import './Modal.scss';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  id?: string;
}

export function Modal({ id = 'modal', children, onClose = () => { } }: ModalProps) {
  useEffect(() => {
    const close = (event: any) => { if (event.keyCode === 27) onClose(); };
    window.addEventListener('keydown', close, true);
    return (() => window.removeEventListener('keydown', close, true));
  }, []);

  const handleOutsideClick = (e: any) => {
    if (e.target.id == id) {
      onClose();
    }
  };

  return (
    <div id={id} className='modal' onClick={handleOutsideClick}>
      <div className="modal__container">
        <div className="modal__container__content">
          {children}
        </div>
      </div>
    </div>
  );
}