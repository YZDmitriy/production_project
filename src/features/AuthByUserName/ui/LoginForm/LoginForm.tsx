// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autofocus={true} type="text" placeholder={`${t('Введите имя')}`} className={cls.input} />
      <Input type="text" placeholder={`${t('Введите пароль')}`} className={cls.input} />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
