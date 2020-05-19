<template>
    <div>
        <validation-observer v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
            {{ provinces.selected }}
            <select2
                :options="provinces.options"
                placeholder="Chọn tỉnh, thành phố"
                searchInputPlaceholder="Nhập tỉnh, thành để tìm nhanh"
                v-model="provinces.selected"
                :rules="REQUIRED_SELECT2_RULE"
                name="Tỉnh, thành phố"
            >
                <!-- <option disabled value="0">Chọn tỉnh/thành phố</option> -->
            </select2>
            {{ districts.selected }}
            <select2
                :options="districts.options"
                placeholder="Chọn quận, huyện"
                searchInputPlaceholder="Nhập quận, huyện để tìm nhanh"
                v-model="districts.selected"
                :rules="REQUIRED_SELECT2_RULE"
                name="Quận, huyện"
            >
                <!-- <option disabled value="0">Chọn huyện/quận</option> -->
            </select2>
            {{ wards.selected }}
            <select2
                :options="wards.options"
                placeholder="Chọn phường, xã"
                searchInputPlaceholder="Nhập phường, xã để tìm nhanh"
                v-model="wards.selected"
                :rules="REQUIRED_SELECT2_RULE"
                name="Phường, xã"
            >
                <!-- <option disabled value="0">Chọn huyện/quận</option> -->
            </select2>
            <button type="submit">Submit</button>
            </form>
        </validation-observer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Select2 from './Select2.vue'
    import { ValidationObserver } from 'vee-validate';
    import rulesName from '../../validations/vee-validate';

    const provinces = [
        { id: 9, text: 'Hồ Chí Minh' },
        { id: 2, text: 'Hà Nội' },
    ]

    const districts = [
        {
            provinceId: 9,
            districts: [
                { id: 1, text: 'Quận 1' },
                { id: 2, text: 'Quận 2' },
                { id: 3, text: 'Quận 4' },
            ]
        },
        {
            provinceId: 2,
            districts: [
                { id: 1, text: 'Quận Thanh Xuân' },
                { id: 2, text: 'Quận Tây Hồ' },
                { id: 3, text: 'Quận Nam Từ' },
            ]
        },
    ]

    const wards = [
        {
            provinceId: 9,
            districtId: 1,
            wards: [
                { id: 1, text: 'Phường Bến Nghé' },
                { id: 2, text: 'Phường Bến Thành' },
                { id: 3, text: 'Phường Cầu Ông Lãnh' },
            ]
        },
        {
            provinceId: 9,
            districtId: 2,
            wards: [
                { id: 1, text: 'Phường An Khánh' },
                { id: 2, text: 'Phường An Lợi Đông' },
                { id: 3, text: 'Phường An Phú' },
            ]
        }
    ]

    export default Vue.extend({
        components: {
            Select2,
            ValidationObserver,
        },
        data() {
            return {
                provinces: {
                    selected: 0,
                    options: []
                },
                districts: {
                    selected: 0,
                    options: []
                },
                wards: {
                    selected: 0,
                    options: [],
                }
            }
        },
        watch: {
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
            ...rulesName,
        },
    })
</script>

<style scoped>
    select {
        width: 200px;
    }
</style>