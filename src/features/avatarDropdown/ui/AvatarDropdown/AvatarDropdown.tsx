import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { Dropdown } from '@/shared/ui/Popups';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // доступ к админке по ролям
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Админка'),
                href: getRouteAdminPanel(),
              },
            ]
          : []),
        {
          content: t('Профиль'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('Выйти'),
          onClick: onLogOut,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
