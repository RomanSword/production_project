import { FC, PropsWithChildren } from 'react';

// Functional Component with Children
declare type FCC = FC<PropsWithChildren>;

// Functional Component with Children and Props
declare type FCCP<T> = FC<PropsWithChildren<T>>;
