import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  );
};
