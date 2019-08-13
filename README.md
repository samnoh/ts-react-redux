# TypeScript + React + Redux

## `Dependencies`

## `TIL`

### RCA

```bash
create-react-app ts-react-redux --typescript
```

### Functional Component

```tsx
interface Props {
    msg?: string;
}

export const App: React.FunctionComponent<Props> = ({ msg }) => {
    return <>{msg}</>;
};
```
