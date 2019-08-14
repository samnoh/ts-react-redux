import React, { memo } from 'react';

import { Navbar } from '../Navbar';

export const App = memo(({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
});
