<template>
    <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <input type="radio" id="isShipAtHome" value="0" v-model="shippingAddress" />
            <label for="isShipAtHome">Địa chỉ giao hàng</label>
            <input type="radio" id="isShipAtStore" value="1" v-model="shippingAddress" />
            <label for="isShipAtStore">Nhận tại siêu thị</label>
            <div v-show="shippingAddress == '0'">
                <select2
                    :options="shipAtHome.provinces.options"
                    placeholder="Chọn tỉnh, thành phố"
                    searchInputPlaceholder="Nhập tỉnh, thành để tìm nhanh"
                    v-model="shipAtHome.provinces.selected"
                    :rules="`requiredIfSelect2:${shippingAddress === '0'}`"
                    name="Tỉnh, thành phố"
                />
                <select2
                    :options="shipAtHome.districts.options"
                    placeholder="Chọn quận, huyện"
                    searchInputPlaceholder="Nhập quận, huyện để tìm nhanh"
                    v-model="shipAtHome.districts.selected"
                    :rules="`requiredIfSelect2:${shippingAddress === '0'}`"
                    name="Quận, huyện"
                />
                <select2
                    :options="shipAtHome.wards.options"
                    placeholder="Chọn phường, xã"
                    searchInputPlaceholder="Nhập phường, xã để tìm nhanh"
                    v-model="shipAtHome.wards.selected"
                    :rules="`requiredIfSelect2:${shippingAddress === '0'}`"
                    name="Phường, xã"
                />
            </div>
            <div v-show="shippingAddress === '1'">
                <select2
                    :options="shipAtStore.provinces.options"
                    placeholder="Chọn tỉnh, thành phố"
                    searchInputPlaceholder="Nhập tỉnh, thành để tìm nhanh"
                    v-model="shipAtStore.provinces.selected"
                    :rules="`requiredIfSelect2:${shippingAddress === '1'}`"
                    name="Tỉnh, thành phố"
                />
                <select2
                    :options="shipAtStore.districts.options"
                    placeholder="Chọn quận, huyện"
                    searchInputPlaceholder="Nhập quận, huyện để tìm nhanh"
                    v-model="shipAtStore.districts.selected"
                    :rules="`requiredIfSelect2:${shippingAddress === '1'}`"
                    name="Quận, huyện"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </validation-observer>
</template>

<script>
    import Vue from 'vue'
    import Select2 from '@/components/select2/Select2.vue'
    import { ValidationObserver } from 'vee-validate'
    import { provinces, districts, wards } from '@/mock-data/addresses'
    import ruleNames from '@/validations/vee-validate';

    export default Vue.extend({
        data() {
            return {
                shippingAddress: '0',
                shipAtStore: {
                    provinces: {
                        selected: 0,
                        options: provinces
                    },
                    districts: {
                        selected: 0,
                        options: [],
                    },
                    wards: {
                        selected: 0,
                        options: [],
                    }
                },
                shipAtHome: {
                    provinces: {
                        selected: 0,
                        options: provinces
                    },
                    districts: {
                        selected: 0,
                        options: [],
                    },
                    wards: {
                        selected: 0,
                        options: [],
                    }
                }
            }
        },
        components: {
            Select2,
            ValidationObserver,
        },
        watch: {
            'shippingAddress': function() {
                this.provinces.selected = 9;
                this.districts.selected = 0;
                this.wards.selected = 0;
            },
            'provinces.selected': function() {
                this.updateDistricts();
            },
            'districts.selected': function() {
                this.updateWards();
            },
        },
        created() {
            this.provinces.options = provinces;
            this.provinces.selected = 9;
            this.updateDistricts();
        },
        methods: {
            updateDistricts() {
                this.clearDistricts();
                this.clearWards();
                const availableDistricts = districts.find(d => d.provinceId === this.provinces.selected);
                if (availableDistricts) {
                    this.districts.options = availableDistricts.districts;
                }
            },
            updateWards() {
                this.clearWards();
                const availableWards = wards.find(w => w.provinceId === this.provinces.selected
                    && w.districtId === this.districts.selected);
                if (availableWards) {
                    this.wards.options = availableWards.wards;
                }
            },
            clearDistricts() {
                this.districts.options = [];
            },
            clearWards() {
                this.wards.options = [];
            },
            onSubmit() {
                alert('Submit success');
            }
        },
        computed: {
            ...ruleNames,
        }
    })
</script>

<style scoped>

</style>