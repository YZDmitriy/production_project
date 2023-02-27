import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <input type="text" className={cls.input} />
      <input type="text" className={cls.input} />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
