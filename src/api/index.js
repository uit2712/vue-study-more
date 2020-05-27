import axios from 'axios';

export function getAllDistricts() {
    return new Promise((resolve) => {
        let all = [];
        [...Array(63).keys()].forEach(async (id) => {
            const provinceId = id + 1;
            const districts = axios.get(`https://thongtindoanhnghiep.co/api/city/${provinceId}/district`).then(result => result.data);
            all.push(districts);
        });
        Promise.all(all).then(r => {
            let result = [];
            r.forEach(a => {
                result.push(...a);
            })

            resolve(result);
        });
    })
}

export function getAllWards() {
    return new Promise((resolve) => {
        let all = [];
        [...Array(702).keys()].forEach(async (id) => {
            const districtId = id + 1;
            const wards = axios.get(`https://thongtindoanhnghiep.co/api/district/${districtId}/ward`).then(result => result.data);
            all.push(wards);
        });
        Promise.all(all).then(r => {
            let result = [];
            r.forEach(a => {
                result.push(...a);
            })

            resolve(result);
        });
    })
}