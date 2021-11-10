import React from 'react';
import { Provider } from 'react-redux';
import { ModalSwitch } from 'react-router-modal-gallery';
import { Route, BrowserRouter } from 'react-router-dom';

import { store } from '../services/stores';
import { LayoutBase } from '../component/Layout/base';

import { LandingPage } from '../component/page/landing-page';
import { PageNotFound } from '../component/page/not-found';

export const AppRoute = () => {
    const renderWithLayout = (Comp, props) => (
        <div>
            <LayoutBase>
                <div className="z-0">
                    <Comp {...props} />
                </div>
            </LayoutBase>
        </div>
    )

    return (
        <Provider store={store}>
            <BrowserRouter basename="/portfolio">
                <>
                    <ModalSwitch>
                        <Route exact path="/" render={(props) => renderWithLayout(LandingPage, props)} />
                        <Route render={(props) => renderWithLayout(PageNotFound, props)} title="404 Not Found" />
                    </ModalSwitch>
                </>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoute;
