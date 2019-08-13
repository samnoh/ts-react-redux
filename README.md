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

const loadData = () => async(dispatch: Dispatch) => {
    const res = await ...
    dispatch<ILoadData>({ type: ActionTypes.LOAD_DATA, payload: res.data });
};

const deleteData = (id: number):IDeleteData => ({
    type: ActionTypes.LOAD_DATA,
    payload: id
});
```

-   Reducer

```typescript
import { Reducer } from 'redux';

interface IDataState { ... }

const initialState: IDataState = { ... };

const DataReducer: Reducer<IDataState, DataActions> = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.LOAD_DATA:
            ...
    }
}
```

-   Connect

```typescript
import { connect } from 'react-redux';
...
const DataContainer = connect(
    (store: IDataState) => ({
        data: store.data.data
    }),
    { loadData, deleteData }
)(_DataContainer);
```
