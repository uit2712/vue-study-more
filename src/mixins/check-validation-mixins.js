const mixins = {
    watch: {
        "$v.$invalid": function() {
            this.checkValidation();
        },
    },
    methods: {
        checkValidation: function() {
            const valid = !this.$v.$invalid;
            const model = this.model;
            this.$emit("validation", { valid, model });
        },
    },
    created() {
        this.checkValidation();
    }
};

export default mixins;