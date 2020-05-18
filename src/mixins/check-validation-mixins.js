const mixins = {
    watch: {
        "$data.model": function() {
            this.checkValidation();
        },
    },
    methods: {
        checkValidation: function() {
            const model = this.model;
            this.$emit("validation", { model });
        },
    },
    created() {
        this.checkValidation();
    }
};

export default mixins;