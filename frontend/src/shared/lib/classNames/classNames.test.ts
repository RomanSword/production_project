import { classNames } from 'shared/lib';

test('with two classes', () => {
    expect(classNames(['class1', 'class2'])).toBe('class1 class2');
});

test('with three classes and false values', () => {
    expect(classNames(['class1', '', 'class2', '', 'class3'])).toBe('class1 class2 class3');
});
