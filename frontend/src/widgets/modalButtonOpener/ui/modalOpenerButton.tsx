import { useSelector } from 'react-redux';
import { ReactElement, useCallback } from 'react';

import { FCCP } from 'app/types/declarations';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, Modal, Portal } from 'shared/ui';

import { getOpenedModals } from '../model/selectors/getModaIsOpened';
import { modalActions } from '../model/slice/modalOpenerSlice';

interface IProps {
    buttonText: string;
    modalName: string;
    onOpen?: () => void;
    className?: string;
}

export const ModalOpenerButton: FCCP<IProps> = (props): ReactElement => {
    const { buttonText, modalName, onOpen, className, children } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();
    const openedModals = useSelector(getOpenedModals);
    const isOpened = openedModals?.some(item => item === modalName);

    const handleChangeModalVisibility = useCallback((): void => {
        if (onOpen) {
            onOpen();
        }

        dispatch(modalActions.changeModalVisibility(modalName));
    }, [dispatch, modalName, onOpen]);

    return (
        <>
            <Button
                onClick={handleChangeModalVisibility}
                className={className}
            >
                {buttonText}
            </Button>

            {isOpened && (
                <Portal>
                    <Modal onClose={handleChangeModalVisibility}>{children}</Modal>
                </Portal>
            )}
        </>
    );
};
