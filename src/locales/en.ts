export default {
    alpha: 'The :attribute must only contain letters.',
    array: 'The :attribute must be an array.',
    between: {
        number: 'The :attribute must be between :min and :max.',
        string: 'The :attribute must be between :min and :max characters.',
        array: 'The :attribute must have between :min and :max items.',
    },
    boolean: 'The :attribute field must be true or false.',
    email: 'The :attribute must be a valid email address.',
    gt: {
        number: 'The :attribute must be greater than :value.',
        string: 'The :attribute must be greater than :value characters.',
        array: 'The :attribute must have more than :value items.',
    },
    gte: {
        number: 'The :attribute must be greater than or equal :value.',
        string: 'The :attribute must be greater than or equal :value characters.',
        array: 'The :attribute must have :value items or more.',
    },
    in: 'The selected :attribute is invalid.',
    integer: 'The :attribute must be an integer.',
    lt: {
        number: 'The :attribute must be less than :value.',
        string: 'The :attribute must be less than :value characters.',
        array: 'The :attribute must have less than :value items.',
    },
    lte: {
        number: 'The :attribute must be less than or equal :value.',
        string: 'The :attribute must be less than or equal :value characters.',
        array: 'The :attribute must not have more than :value items.'
    },
    max: {
        number: 'The :attribute must not be greater than :max.',
        string: 'The :attribute must not be greater than :max characters.',
        array: 'The :attribute must not have more than :max items.',
    },
    min: {
        number: 'The :attribute must be at least :min.',
        string: 'The :attribute must be at least :min characters.',
        array: 'The :attribute must have at least :min items.',
    },
    not_in: 'The selected :attribute is invalid.',
    not_regex: 'The :attribute format is invalid.',
    numeric: 'The :attribute must be a number.',
    regex: 'The :attribute format is invalid.',
    required: 'The :attribute field is required.',
    required_if: 'The :attribute field is required when :other is :value.',
    required_with: 'The :attribute field is required when :values is present.',
    required_with_all: 'The :attribute field is required when :values are present.',
    required_without: 'The :attribute field is required when :values is not present.',
    required_without_all: 'The :attribute field is required when none of :values are present.',
    string: 'The :attribute must be a string.',
}