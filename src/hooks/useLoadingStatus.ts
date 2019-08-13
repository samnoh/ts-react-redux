import { useState, Dispatch, SetStateAction } from 'react';

type LoadingHook = [boolean, Dispatch<SetStateAction<boolean>>];

export const useLoadingStatus = (initialState: boolean = true): LoadingHook => {
    const [isLoading, setIsLoading] = useState(initialState);

    return [isLoading, setIsLoading];
};
