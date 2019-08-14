import loadable from '@loadable/component';

export const HomePage = loadable(() =>
    import(/* webpackChunkName: "HomePage" */ '../pages/HomePage')
);

export const TodosPage = loadable(() =>
    import(/* webpackChunkName: "TodosPage" */ '../pages/TodosPage')
);

export const NotFoundPage = loadable(() =>
    import(/* webpackChunkName: "NotFoundPage" */ '../pages/NotFoundPage')
);
