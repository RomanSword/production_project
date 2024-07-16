import { FC, SVGProps } from 'react';

import FileIcon from 'shared/assets/icons/file.svg';
import QuestionIcon from 'shared/assets/icons/question.svg';
import { RoutePath } from 'shared/config';

export interface SideBarItemType {
    path: string;
    text: string;
    RouteIcon: FC<SVGProps<SVGElement>>;
    collapsed?: boolean;
}

export const sideBarItems: SideBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'link.main',
        RouteIcon: FileIcon
    },
    {
        path: RoutePath.help,
        text: 'link.help',
        RouteIcon: QuestionIcon
    }
];
