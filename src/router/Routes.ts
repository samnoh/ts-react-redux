import loadable from '@loadable/component';

export const HomePage = loadable(() =>
    import(/* webpackChunkName: "HomePage" */ '../pages/HomePage').then(
        ({ HomePage }) => HomePage as any
    )
);

export const TodosPage = loadable(() =>
    import(/* webpackChunkName: "TodosPage" */ '../pages/TodosPage').then(
        ({ TodosPage }) => TodosPage as any
    )
);

export const NotFoundPage = loadable(() =>
    import(/* webpackChunkName: "NotFoundPage" */ '../pages/NotFoundPage').then(
        ({ NotFoundPage }) => NotFoundPage as any
    )
);
