# Có vài chuyện cần cấu hình trong file này
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
## Output directory/folder
- Đây là thư mục sinh ra các file do chạy câu lệnh sau mà ra
```
vue-cli-service build ...
```
- Trong project này, các file này được sinh ra trong thư mục **wwwroot** của **.net core**
```javascript
const env = process.env.NODE_ENV;

function getOutputDir() {
    switch(env) {
        case 'local': return '../../wwwroot/vue-local';
        case 'development': return '../../wwwroot/vue-dev';
        case 'staging': return '../../wwwroot/vue-stg';
        case 'production': return '../../wwwroot/vue-pro';
        case 'mock': return '../../wwwroot/vue-mock';
        default: return '';
    }
}
```
Với **env** là tên của môi trường được lấy từ các file dạng **.env.**
## Bundle
- Ở đây chúng ta sử dụng webpack để gom nhiều file javascript hay file css thành 1 file chung (quá trình này gọi là bundle) => lợi ích là giảm thiểu số lượng request cần gọi lúc ban đầu
```javascript
module.exports = {
    configureWebpack: {
        ...
        entry: {
            ['mobile/index.min']: [
                './public/css/mobile/popup-detail.css',
                './public/css/mobile/global.css',
                './public/css/mobile/alert.css'
            ],
            ['mobile/cart.min']: [
                './public/css/mobile/cart.css',
                './public/css/mobile/global.css'
            ],
            ['mobile/cart-result.min']: [
                './public/css/mobile/order-success.css',
                './public/css/mobile/global.css',
                './public/css/mobile/alert.css'
            ],
            ['desktop/index.min']: [
                './public/css/desktop/popup-detail.css',
                './public/css/desktop/global.css',
                './public/css/desktop/alert.css'
            ],
            ['desktop/cart.min']: [
                './public/css/desktop/cart.css',
                './public/css/desktop/global.css'
            ],
            ['desktop/cart-result.min']: [
                './public/css/desktop/order-success.css',
                './public/css/desktop/global.css',
                './public/css/desktop/alert.css'
            ]
        },
        ...
    }
}
```
## Minify
- Ở đây chúng ta dùng webpack để tối giản các file css, javascript được sinh ra trong quá trình build như lược bỏ các ký tự khoảng trắng, rút gọn tên/biến,... (quá trình này gọi là minify), thông thường chúng ta dùng minify ở môi trường production => lợi ích: giảm tối đa dung lượng file, tăng tốc độ tải ban đầu của website
- Mặc định quá trình minify chỉ thực thi ở môi trường production thôi
```javascript
module.exports = {
    configureWebpack: {
        ...
    },
    chainWebpack: config => {
        if (env === 'production') {
            config
                .plugin('extract-css')
                .tap(([options, ...args]) => [{filename: `css/[name].[hash].css`}, ...args]);
        }
        
        config.output
            .filename(`js/[name]${env === 'production' ? '.[hash]' : ''}.js`)
            .chunkFilename(`js/[name]${env === 'production' ? '.[hash]' : ''}.js`);

    },
    filenameHashing: false,
}
```
- Lưu ý: nếu dùng **filenameHashing: true** thì lúc build cũng sẽ sinh ra hash trong tên của từng file js, css cho chúng ta nhưng lại có quá nhiều hash khác nhau, dùng cách này chúng ta sẽ sinh ra cùng 1 hash cho tất cả các file => lợi ích: cách chúng ta đang dùng là nhúng các file tĩnh vào trong file razor của .net core nên dùng cách này có thể đảm bảo đúng 1 hash cho tất cả
## Ghi chuỗi hash ra file
```javascript
var HashPlugin = require('./src/assets/log-hash-to-file');

module.exports = {
    configureWebpack: {
        ...,
        plugins: [
            new HashPlugin({ path: getOutputDir(), fileName: 'hash.txt' })
        ]
    },
    ...
}
```
