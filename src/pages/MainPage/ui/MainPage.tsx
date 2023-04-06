import { useTranslation } from 'react-i18next';
import { Page } from '../../../widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <ListBox />
    </Page>
  );
};

export default MainPage;
