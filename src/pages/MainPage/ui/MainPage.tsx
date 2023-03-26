import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const MainPage = () => {
  const { t } = useTranslation();

  return <Page>{t('Главная страница')}</Page>;
};

export default MainPage;
