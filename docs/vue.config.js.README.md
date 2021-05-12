# Có 3 chuyện cần làm trong file này
## Public path:
- Đây là đường dẫn truy cập bên ngoài của các file được sinh ra trong quá trình build sử dụng câu lệnh
```
vue-cli-service build ...
```
+ Ví dụ: trong file **package.json** có các script sau:
```json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "dev": "start node ./src/mock-server/index.js & start vue-cli-service serve",
    "build": "vue-cli-service build --mode local & vue-cli-service build --mode development & vue-cli-service build --mode production",
    "build-pro": "vue-cli-service build --mode production",
    "build-local": "vue-cli-service build --mode local & vue-cli-service build --mode development",
    "build:report": "vue-cli-service build --report --mode local",
    "lint": "vue-cli-service lint"
}
```
- Đoạn mã liên quan:
```javascript
const env = process.env.NODE_ENV;

function getPublicPath() {
    switch(env) {
        case 'local': return '/vue-local';
        case 'development': return `${subApplicationUrl}/vue-dev`;
        case 'staging': return `${subApplicationUrl}/vue-stg`;
        case 'production': return '//cdn.tgdd.vn/mwgcart/vue-pro';
        case 'mock': return '/vue-mock';
        default: return '';
    }
}
```
Với **env** là tên của môi trường được lấy từ các file dạng **.env.**
