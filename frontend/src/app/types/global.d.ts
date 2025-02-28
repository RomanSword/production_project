declare module '*.module.scss';
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { FC, SVGProps } from 'react';

    const content: FC<SVGProps<SVGElement>>;

    export default content;
}

declare const __IS_DEV__: boolean;
declare const __BASE_URL__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
