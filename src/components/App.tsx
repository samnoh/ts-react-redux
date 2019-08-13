import * as React from 'react';

interface Props {
    msg?: string;
}

export const App: React.FunctionComponent<Props> = ({ msg }) => {
    return (
        <>
            <h1>Hi</h1>
        </>
    );
};
