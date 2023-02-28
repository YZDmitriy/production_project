import { useState } from 'react';
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

  const [value, setValue] = useState('');


  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" placeholder={'Введите имя'} className={cls.input} autoFocus={true}/>
      <Input type="text" placeholder={'Введите пароль'} className={cls.input} />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
