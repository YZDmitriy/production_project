import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarItemProps {
  item?: 
}

export const SidebarItem = ({}: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={RoutePath.main}
      theme={AppLinkTheme.SECONDARY}
      className={cls.item}
    >
      <MainIcon className={cls.icon} />
      <span className={cls.link}> {t('Главная')}</span>
    </AppLink>
  );
};
