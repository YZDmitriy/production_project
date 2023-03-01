import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const loginForm = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {}, []);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus={true}
        type="text"
        placeholder={`${t('Введите имя')}`}
        className={cls.input}
        onChange={onChangeUsername}
        value={loginForm.username}
      />
      <Input
        type="text"
        placeholder={`${t('Введите пароль')}`}
        className={cls.input}
        onChange={onChangePassword}
        value={loginForm.password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
