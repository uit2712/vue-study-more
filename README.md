# Cài đặt nodejs
-Tải nodejs từ nguồn: [https://nodejs.org/en/download/](https://nodejs.org/en/download)\
-Cài đặt nodejs
# Cài đặt vue cli
-Cài đặt vue cli bằng lệnh sau:
```
npm install -g @vue/cli
```
-Cập nhật vue cli lên bản mới nhất:
```
npm update -g @vue/cli
```
-Tài liệu thêm về vue cli: https://cli.vuejs.org/guide/
# Cấu trúc thư mục
    .
    ├── public                          # Chứa những file có thể truy cập từ bên ngoài như css, hình ảnh
    │   ├── css                   
    |   |   ├──desktop                  # Chứa css của bản desktop
    |   |   |   ├──cart.css             # Chứa css trang Giỏ hàng
    |   |   |   ├──global.css           # Chứa css chung
    |   |   |   ├──order-success.css    # Chứa css trang Đặt hàng thành công (thank you)
    |   |   |   └──popup-detail.css     # Chứa css của popup trang chi tiết
    |   |   ├──img                      # Chứa hình ảnh của dự án như các icon, theme tết,...
    |   |   └──css                      # Chứa css của bản mobile
    |   |   |   └──...
    │   ├── icons                 # End-to-end, integration tests (alternatively `e2e`)
    │   └── unit                # Unit tests
    ├── src                     # Source files (alternatively `lib` or `app`)
    |   ├── api                         # Chứa thông tin các hàm gọi api để lấy dữ liệu
    |   |   ├── index.js                # Cấu hình request dùng chung sử dụng thư viện axios + sinh ra đường dẫn api thích hợp cho từng môi trường
    |   |   ├── cart.js                 # Định nghĩa các hàm gọi api để lấy dữ liệu dựa vào biến dùng chung `request` trong file ./src/api/index.js => chưa làm được: nên phân theo trang, ví dụ trong thư mục api chỉ nên có 4 file: index.js, page-cart-api.js (chứa các hàm gọi api cho trang `Giỏ hàng`), page-cart-result-api.js (chứa các hàm gọi api cho trang `Đặt hàng thành công` hay trang `Thank you`), page-popup-product-detail.js (chứa các hàm gọi api cho trang `Chi tiết sản phẩm` hay popup mua sản phẩm)
    |   |   └──...
    |   ├── assets                      # Chứa các file hỗ trợ thêm cho project như
    |   |   ├── log-hash-to-file.js     # Khi build project (sinh ra các file js, html, css, hình ảnh để sử dụng) bằng câu lệnh npm run build, ở đây đề cập tới môi trường production với 1 chuỗi hash đằng sau tên file (ví dụ: index.min.[hash].js, với hash là 1 chuỗi ngẫu nhiên chiều dài tối đa 20 ký tự) => ghi chuỗi hash này vào 1 file tên hash.txt để chỉ định phiên bản => chưa làm được: tạo ra ít nhất 4 phiên bản để chuyển đổi qua lại khi 1 bản có lỗi
    |   |   └──...
    ├── .env.development                # Chứa cấu hình cho môi trường development:
                                            ## NODE_ENV => tên môi trường
                                                NODE_ENV: Được sử dụng ở file vue.config.js (process.env.NODE_ENV)
                                            ## VUE_APP_ROOT_API => tên biến của môi trường bắt đầu bằng VUE_APP
                                                VUE_APP_ROOT_API: Được sử dụng ở file ./src/api/index.js trong hàm getRootApiSubdomain (process.env.VUE_APP_ROOT_API)
    ├── .env.local                      # Chứa cấu hình cho môi trường local
    ├── .env.production                 # Chứa cấu hình cho môi trường production
    ├── .env.staging                    # Chứa cấu hình cho môi trường staging
    ├── jsconfig.json                   # Cấu hình cho đường dẫn chung với @/* tương đương ./src/*
                                            Lợi ích: thay vì đứng ở trong file ./src/common/components/box-order/BoxOrder.vue và sử dụng import { receiptMethodType, } from '../../common/types'; => sử dụng import { receiptMethodType, } from '@/common/types';
    ├── package.json                    # Chứa các thư viện cần thiết để chạy ứng dụng + chứa các đoạn script để chạy ứng dụng:
                                            ## Cú pháp: npm run <tên-script>
                                                ## Ví dụ:
                                                    npm run serve           => chạy ứng dụng, tuy nhiên trong trường hợp này ứng dụng chúng ta chạy bằng cách sinh ra các file tĩnh trước như html, css, js nên câu lệnh này không hoạt động trong trường hợp này
                                                    npm run build           => Sinh ra cái file js ở tất cả các môi trường development, local, production => dùng ở nhánh master (tổng hợp tất cả các)
                                                    npm run build-pro       => Sinh ra các file js ở môi trường production
                                                    npm run build-local     => Sinh ra các file js ở môi trường local và development => dùng ở nhánh beta (nhánh này để xem trước tất cả các kịch bản, tính năng mới sắp sửa release, đang test) + dùng ở nhánh dev (nhánh này sẽ gom tất cả các tính năng sắp sửa release đã qua giai đoạn test)
    └── vue.config.js                   # Cấu hình để build ra các file js, css, hình ảnh dùng lệnh npm run build-xx cho các môi trường + bao gồm cả bundle và minify
    
