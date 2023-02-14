import React from "react";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
    const { t, i18n } = useTranslation();

    return <div>
        {t("Главная страница")}
        </div>;
};

export default MainPage;
