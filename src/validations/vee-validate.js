import { extend, configure } from 'vee-validate';
import { required, email, is } from 'vee-validate/dist/rules';

const REQUIRED_RULE = 'required';
const REQUIRED_SELECT2_RULE = 'requiredSelect2';
const MIN_LENGTH_RULE = 'minLength';
const EMAIL_RULE = 'email';
const SAME_PASSWORD_RULE = 'samePassword';
const REQUIRED_IF_SELECT2_RULE = 'requiredIfSelect2';

export default {
    REQUIRED_RULE: () => REQUIRED_RULE,
    MIN_LENGTH_RULE: () => (value) => `${MIN_LENGTH_RULE}:${value}`,
    EMAIL_RULE: () => EMAIL_RULE,
    SAME_PASSWORD_RULE: () => (value) => `${SAME_PASSWORD_RULE}:${value}`,
    REQUIRED_SELECT2_RULE: () => REQUIRED_SELECT2_RULE,
    REQUIRED_IF_SELECT2_RULE: () => (value) => `${REQUIRED_IF_SELECT2_RULE}:${value}`,
}

configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    }
})

extend(REQUIRED_RULE, {
    ...required,
    message: (fieldName) => {
        return `${fieldName} required`;
    }
});

extend(MIN_LENGTH_RULE, {
    validate(value, args) {
        return {
            required: true,
            valid: value && value.length >= args.minLength,
        };
    },
    params: ['minLength'],
    message: (fieldName, placeholders) => {
        return `Min length is ${placeholders.minLength}`;
    }
})

extend(EMAIL_RULE, {
    ...email,
    message: 'Invalid email'
})

extend(SAME_PASSWORD_RULE, {
    ...is,
    message: 'Password mismatch'
})

extend(REQUIRED_SELECT2_RULE, {
    validate(value) {
        return Number(value) !== 0;
    },
    message: (fieldName) => {
        return `${fieldName} required`
    }
})

extend(REQUIRED_IF_SELECT2_RULE, {
    validate(value, args) {
        return args.valid === false || (args.valid === true && value !== null && value !== undefined);
    },
    params: ['valid'],
    message: (fieldName) => {
        return `${fieldName} required`
    }
})