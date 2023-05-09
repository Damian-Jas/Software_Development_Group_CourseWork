import React from 'react';

const Layout = ({ children }) => (
    <div className="govuk-width-container">
        <header className="govuk-header" role="banner">
            <div className="govuk-header__container govuk-width-container">
                <div className="govuk-header__logo">
                    <a href="/" className="govuk-header__link govuk-header__link--homepage">
                        <span className="govuk-header__logotype">Patient Record</span>
                    </a>
                </div>
            </div>
        </header>

        <main className="govuk-main-wrapper">
            {children}
        </main>
    </div>
);

export default Layout;
