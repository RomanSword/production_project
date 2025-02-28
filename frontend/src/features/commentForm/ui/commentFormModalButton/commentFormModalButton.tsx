import { ReactElement, Suspense } from 'react';

import { Spinner } from 'shared/ui';

import { CommentFormAsync } from '../commentForm/commentForm.async';
import { ModalOpenerButton } from 'widgets';

interface IProps {
    buttonText: string;
    modalName: string;
    onOpen?: () => void;
    onSubmit: () => void;
    className?: string;
}

export const CommentFormModalButton = (props: IProps): ReactElement => {
    const { buttonText, modalName, onOpen, onSubmit, className } = props;

    return (
        <ModalOpenerButton
            buttonText={buttonText}
            modalName={modalName}
            onOpen={onOpen}
            className={className}
        >
            <Suspense fallback={<Spinner />}>
                <CommentFormAsync onSubmit={onSubmit} />
            </Suspense>
        </ModalOpenerButton>
    );
};
