export function joinRules(value) {
    if (!Array.isArray(value))
        return '';

    return value.join('|');
}