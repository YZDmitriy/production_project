/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

// Компонент для тестирования Error Boundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button theme={ButtonTheme.STANDARD} onClick={onThrow}>
      {t('throw error')}
    </Button>
  );
};
