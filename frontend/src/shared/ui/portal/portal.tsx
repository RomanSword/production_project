import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { FCCP } from 'app/types/declarations';

interface PortalProps {
    element?: HTMLElement;
}

export const Portal: FCCP<PortalProps> = (props): ReactElement => {
    const { children, element = document.getElementsByClassName('app')[0] || document.body } =
        props;

    // eslint-disable-next-line
    // @ts-ignore
    const portal = createPortal(children, element) as ReactElement;

    return portal;
};
