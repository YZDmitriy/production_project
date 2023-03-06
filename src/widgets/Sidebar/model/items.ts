import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemProps {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemProps[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: ProfileIcon,
  },
];
