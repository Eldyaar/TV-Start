import React from 'react';
import {useLanguage} from "../LanguageContext/LanguageContext";

const SomeComponent = () => {
    const { selectedLanguage } = useLanguage();

    return (
        <div className="fff">
            {selectedLanguage === 'RU' && <span>Привет мир</span>}
            {selectedLanguage === 'EN' && <span>Hello world</span>}
        </div>
    );
};

export default SomeComponent;
