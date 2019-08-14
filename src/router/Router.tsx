import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, TodosPage, NotFoundPage } from './Routes';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/todos" component={TodosPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
