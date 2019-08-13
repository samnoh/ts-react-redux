# TypeScript + React + Redux

## `Dependencies`

-   axios
-   redux
-   react-redux
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
