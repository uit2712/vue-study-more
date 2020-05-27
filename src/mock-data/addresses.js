export const provinces = [
    { id: 9, text: 'Hồ Chí Minh' },
    { id: 2, text: 'Hà Nội' },
]

export const districts = [
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

export const wards = [
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

export default {
    provinces,
    districts,
    wards,
}