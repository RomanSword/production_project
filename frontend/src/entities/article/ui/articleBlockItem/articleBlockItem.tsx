import { Fragment, ReactElement } from 'react';

import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

import { ArticleBlockCode } from './articleBlockCode/articleBlockCode';
import { ArticleBlockImage } from './articleBlockImage/articleBlockImage';
import { ArticleBlockText } from './articleBlockText/articleBlockText';

export function ArticleBlockItem(item: ArticleBlock): ReactElement {
    let content = <></>;

    if (item.type === ArticleBlockType.CODE) {
        content = <ArticleBlockCode text={item.code} />;
    } else if (item.type === ArticleBlockType.IMAGE) {
        content = (
            <ArticleBlockImage
                src={item.src}
                title={item.title}
            />
        );
    } else if (item.type === ArticleBlockType.TEXT) {
        content = (
            <ArticleBlockText
                title={item.title}
                paragraphs={item.paragraphs}
            />
        );
    }

    return <Fragment key={item.id}>{content}</Fragment>;
}
