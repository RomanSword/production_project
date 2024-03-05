import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false
    };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense>
                    <PageError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}
