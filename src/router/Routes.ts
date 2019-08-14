import loadable, { LoadableComponent } from '@loadable/component';

export const HomePage = loadable(() =>
    import(/* webpackChunkName: "HomePage" */ '../pages/HomePage').then(
        module => module.HomePage as any
    )
);

export const TodosPage = loadable(() =>
    import(/* webpackChunkName: "TodosPage" */ '../pages/TodosPage').then(
        module => module.TodosPage as any
    )
);

export const NotFoundPage = loadable(() =>
    import(/* webpackChunkName: "NotFoundPage" */ '../pages/NotFoundPage').then(
        module => module.NotFoundPage as any
    )
);
