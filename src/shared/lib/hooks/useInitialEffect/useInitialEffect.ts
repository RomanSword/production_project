/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export function useInitialEffect(mounCallback: () => void, unmountCallback?: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            mounCallback();
        }

        if (unmountCallback) {
            return unmountCallback;
        }
    }, []);
}
