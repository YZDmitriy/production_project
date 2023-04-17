import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popover/ui/Dropdown/Dropdown';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popover';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const dispatch = useDispatch();

  // доступ к админке по ролям
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('ProdProj App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <Popover
            direction="bottom left"
            trigger={
              <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
              </Button>
            }
          >
            123456
          </Popover>

          <Dropdown
            direction="bottom left"
            className={cls.dropdown}
            items={[
              ...(isAdminPanelAvailable
                ? [
                    {
                      content: t('Админка'),
                      href: RoutePath.admin_panel,
                    },
                  ]
                : []),
              {
                content: t('Профиль'),
                href: RoutePath.profile + authData.id,
              },
              {
                content: t('Выйти'),
                onClick: onLogOut,
              },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
          />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}{' '}
    </header>
  );
});
