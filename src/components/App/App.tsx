import React, { memo } from 'react';

import { Navbar } from '../Navbar';
import './App.scss';

export const App = memo(({ children }) => {
    return (
        <>
            <Navbar />
            <div id="content">{children}</div>
        </>
    );
});
