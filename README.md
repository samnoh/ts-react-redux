# TypeScript + React + Redux

## `Dependencies`

-   axios
-   react
-   react-redux
-   redux
-   redux-thunk

## `TIL`

### RCA

-   `--typescript`

```bash
create-react-app ts-react-redux --typescript
```

### Functional Components

```tsx
import React from 'react';

interface Props<P> {
    msg?: P;
}

export const App = <P extends string>(props: Props<P>) => {
    return (...);
};
```

### TS + Redux + Thunk

-   Store

```typescript
import { createStore, applyMiddleware, Store } from 'redux';

const store: Store<IAppState> = createStore(rootReducer, applyMiddleware(thunk));
```

-   Action Creator

```typescript
import { Action } from 'redux';
import { Dispatch } from 'redux';

enum ActionTypes { // global in this case
    LOAD_DATA, // = 0
    ... // = 1, 2, ...
}

interface ILoadData extends Action<ActionTypes.LOAD_DATA> {
    payload: Data[];
}

interface IDeleteData extends Action<ActionTypes.DELETE_DATA> {
    payload: number;
}

type DataActions = ILoadData | IDeleteData | IeditData;

const loadData = () => async (dispatch: Dispatch): Promise<void> => {
    try{
        const res = await ...
        dispatch<ILoadData>({ type: ActionTypes.LOAD_DATA, payload: res.data });
    } catch(e) {
        console.error(e);
    }
};

const deleteData = (id: number): IDeleteData => ({
    type: ActionTypes.LOAD_DATA,
    payload: id
});
```

-   Reducer

```typescript
import { Reducer } from 'redux';

interface IDataState {
    readonly data: Data[];
 }

const initialState: IDataState = {
    data: []
};

const DataReducer: Reducer<IDataState, DataActions> = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.LOAD_DATA:
            ...
    }
}

interface IAppState {
    readonly data: IDataState;
}

const rootReducer = combineReducers<IAppState>({
    data: DataReducer
});
```

-   Connect

```typescript
import { connect } from 'react-redux';

interface IProps {
    data: Data[];
    loadData: () => Promise<void>;
    deleteData: typeof deleteData
}
const _DataContainer = ({data, loadData, deleteData}: IProps) => {
    return ...
}

export const DataContainer = connect(
    (store: IDataState) => ({
        data: store.data.data
    }),
    { loadData, deleteData }
)(_DataContainer);
```
