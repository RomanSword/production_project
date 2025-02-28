import { ReactElement, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames, getErrorTranslation } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, LoadingWrapper, TextBlock, TextBlockType, TextField } from 'shared/ui';

import {
    getCommentFormError,
    getCommentFormId,
    getCommentFormIsLoading,
    getCommentFormText
} from '../../model/selectors/commentForm';
import { commentFormActions } from '../../model/slices/commentFormSlice';

import cls from './commentForm.module.scss';

interface CommentFormProps {
    onSubmit: () => void;
    className?: string;
}

const CommentForm = ({ onSubmit, className }: CommentFormProps): ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();
    const { t: tForm } = useTranslation('form');

    useEffect(() => {
        return () => {
            dispatch(commentFormActions.clear());
        };
    }, [dispatch]);

    const id = useSelector(getCommentFormId);
    const isLoading = useSelector(getCommentFormIsLoading);
    const error = useSelector(getCommentFormError);
    const text = useSelector(getCommentFormText);

    const onChangeValue = useCallback(
        (value: string) => {
            dispatch(commentFormActions.setText(value));
        },
        [dispatch]
    );
    console.log(onSubmit);

    return (
        <div className={classNames([cls.container, className])}>
            <TextBlock
                text={`${id ? tForm('edit') : tForm('add')} ${tForm('comment').toLowerCase()}`}
                type={TextBlockType.TITLE_ARTICLE}
            />

            <LoadingWrapper
                error={error}
                isLoading={isLoading}
                className={cls.form}
            >
                <>
                    <TextField
                        id='comment_text'
                        name='text'
                        label={tForm('comment')}
                        value={text}
                        onChange={value => onChangeValue(value)}
                        readonly={isLoading}
                        isRequired={true}
                        isTextArea={true}
                        error={getErrorTranslation(error, tForm)}
                        className={cls.textField}
                    />

                    <Button
                        data-testid='comment-submit-button'
                        onClick={onSubmit}
                        isLoading={isLoading}
                        className={cls.button}
                    >
                        {tForm('publish')}
                    </Button>
                </>
            </LoadingWrapper>
        </div>
    );
};

export default CommentForm;
