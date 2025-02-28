import { LanguageSwitcher } from './languageSwitcher/languageSwitcher';
import { ModalOpenerButton } from './modalButtonOpener/ui/modalOpenerButton';
import { NavBar } from './navBar/navBar';
import { PageError } from './pageError/pageError';
import { PageScroller } from './pageScroller/pageScroller';
import { PageLoader } from './pageLoader/pageLoader';
import { SideBar } from './sideBar/ui/sideBar/sideBar';
import { ThemeSwitcher } from './themeSwitcher/themeSwitcher';
import { UserMenu } from './userMenu/userMenu';

export {
    LanguageSwitcher,
    ModalOpenerButton,
    NavBar,
    PageError,
    PageLoader,
    PageScroller,
    SideBar,
    ThemeSwitcher,
    UserMenu
};

function firstOrNull<T>(array: T[]): T | null {
    return array.length === 0 ? null : array[0];
}

interface Component<T1 = string, T2 = { text: string }> {
    name: T1;
    props: T2;
    log: () => void;
}

const button: Component = {
    name: 'Button',
    props: {
        text: 'Save'
    },
    log: () => console.log('Save button')
};
