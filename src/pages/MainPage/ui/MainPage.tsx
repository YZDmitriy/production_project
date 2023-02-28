import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t('Главная страница')}</div>;
};

export default MainPage;
