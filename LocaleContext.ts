import React from "react";

interface LocaleContextType {
    locale: string;
    setLocale: (locale: string) => void;
}

const defaultValue: LocaleContextType = {
    locale: 'es',
    setLocale: () => {}
}

const LocaleContext = React.createContext(defaultValue);

export default LocaleContext;
