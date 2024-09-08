export function getErrorTranslation(value: string, translation: (arg: string) => string): string {
    if (!value) {
        return '';
    }

    const [translationKey, additionalValue] = value.split(',');

    let result = translation(translationKey);

    if (additionalValue) {
        result = `${result} ${additionalValue}`;
    }

    return result;
}
