/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export function useInitialEffect(mountCallback: () => void, unmountCallback?: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            mountCallback();
        }

        if (unmountCallback) {
            return unmountCallback;
        }
    }, []);
}
