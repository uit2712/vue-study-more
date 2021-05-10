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
# Cài đặt vscode
-Tải vscode từ nguồn: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
# Cấu trúc thư mục
    .
    ├── public                                      # Chứa những file có thể truy cập từ bên ngoài như css, hình ảnh
    │   ├── css                   
    |   |   ├──desktop                              # Chứa css của bản desktop
    |   |   |   ├──cart.css                         # Chứa css trang Giỏ hàng
    |   |   |   ├──global.css                       # Chứa css chung
    |   |   |   ├──order-success.css                # Chứa css trang Đặt hàng thành công (thank you)
    |   |   |   └──popup-detail.css                 # Chứa css của popup trang chi tiết
    |   |   ├──img                                  # Chứa hình ảnh của dự án như các icon, theme tết,...
    |   |   └──css                                  # Chứa css của bản mobile
    |   |   |   └──...
    │   ├── icons                 # End-to-end, integration tests (alternatively `e2e`)
    │   └── unit                # Unit tests
    ├── src                     # Source files (alternatively `lib` or `app`)
    |   ├── api                                     # Chứa thông tin các hàm gọi api để lấy dữ liệu
    |   |   ├── index.js                            # Cấu hình request dùng chung sử dụng thư viện axios + sinh ra đường dẫn api thích hợp cho từng môi trường
    |   |   ├── cart.js                             # Định nghĩa các hàm gọi api để lấy dữ liệu dựa vào biến dùng chung `request` trong file ./src/api/index.js => chưa làm được: nên phân theo trang, ví dụ trong thư mục api chỉ nên có 4 file: index.js, page-cart-api.js (chứa các hàm gọi api cho trang `Giỏ hàng`), page-cart-result-api.js (chứa các hàm gọi api cho trang `Đặt hàng thành công` hay trang `Thank you`), page-popup-product-detail.js (chứa các hàm gọi api cho trang `Chi tiết sản phẩm` hay popup mua sản phẩm)
    |   |   └──...
    |   ├── assets                                  # Chứa các file hỗ trợ thêm cho project như
    |   |   ├── log-hash-to-file.js                 # Khi build project (sinh ra các file js, html, css, hình ảnh để sử dụng) bằng câu lệnh npm run build, ở đây đề cập tới môi trường production với 1 chuỗi hash đằng sau tên file (ví dụ: index.min.[hash].js, với hash là 1 chuỗi ngẫu nhiên chiều dài tối đa 20 ký tự) => ghi chuỗi hash này vào 1 file tên hash.txt để chỉ định phiên bản => chưa làm được: tạo ra ít nhất 4 phiên bản để chuyển đổi qua lại khi 1 bản có lỗi
    |   |   └──...
    |   ├── common                                  # Chứa các thư mục/file dùng chung
    |   |   ├── actions                             # Bỏ qua thư mục này, không dùng nữa
    |   |   ├── components                          # Các component dùng chung
    |   |   |   ├── CenterSupport.vue               # Hiển thị thông tin của tải giao hàng: Hệ thống đang kiểm tra thời gian nhận hàng và phí vận chuyển. Nhân viên sẽ gọi cho Quý Khách xác nhận trong vòng 15 phút. => Dùng cho tải giao hàng trang `Giỏ hàng` + trang `Thank you`
    |   |   |   ├── CustomSelect.vue                # Dùng cho dropdown ds tỉnh thành, quận huyện, phường xã trang `Giỏ hàng`
    |   |   |   ├── DelayedInput.vue                # Dùng cho các input thay đổi giá trị sau 1 khoảng thời gian nào đó, trong trường hợp này dùng cho trang 'Giỏ hàng', trường hợp nhập giá trị vào input, sau 1 khoảng thời gian thì mới cập nhật giá trị mới nhất rồi gởi lên server => tránh gởi request liên tục lên server
    |   |   |   ├── DeliveryTimeSelection.vue       # Dùng cho dropdown chọn thời gian giao/nhận hàng, dùng cho trang `Giỏ hàng`
    |   |   |   ├── GiftPromotion.vue               # Khuyến mãi chọn, dùng cho trang `Chi tiết` (popup) + trang `Giỏ hàng`
    |   |   |   ├── GlobalPopup.vue                 # Popup dùng chung cho trang `Chi tiết` (popup) + trang `Giỏ hàng`
    |   |   |   ├── HeightTransition.vue            # Hiệu ứng fade-in và fade-out (từ từ hiện ra và từ từ biến mất) dùng cho các dropdown
    |   |   |   ├── LatchOrderErrors.vue            # Hiển thị lỗi tải giao hàng: hết hàng, không đủ số lượng, không giao được, dùng cho trang `Giỏ hàng`, dùng chung cho 2 trường hợp `Giao tận nơi` và `Nhận tại siêu thị`
    |   |   |   ├── Loading.vue                     # Hiệu ứng loading, dùng cho tất cả các trang
    |   |   |   ├── LocationSelection.vue           # Chứa các dropdown tỉnh thành, quận huyện, phường xã và button ẩn hiện dropdown, dùng cho tra `Giỏ hàng`
    ├── .env.development                            # Chứa cấu hình cho môi trường development:
                                                        ## NODE_ENV => tên môi trường
                                                            NODE_ENV: Được sử dụng ở file vue.config.js (process.env.NODE_ENV)
                                                        ## VUE_APP_ROOT_API => tên biến của môi trường bắt đầu bằng VUE_APP
                                                            VUE_APP_ROOT_API: Được sử dụng ở file ./src/api/index.js trong hàm getRootApiSubdomain (process.env.VUE_APP_ROOT_API)
    ├── .env.local                                  # Chứa cấu hình cho môi trường local
    ├── .env.production                             # Chứa cấu hình cho môi trường production
    ├── .env.staging                                # Chứa cấu hình cho môi trường staging
    ├── jsconfig.json                               # Cấu hình cho đường dẫn chung với @/* tương đương ./src/*
                                                        Lợi ích: thay vì đứng ở trong file ./src/common/components/box-order/BoxOrder.vue và sử dụng import { receiptMethodType, } from '../../common/types'; => sử dụng import { receiptMethodType, } from '@/common/types';
    ├── package.json                                # Chứa các thư viện cần thiết để chạy ứng dụng + chứa các đoạn script để chạy ứng dụng:
                                                        ## Cú pháp: npm run <tên-script>
                                                            ## Ví dụ:
                                                                npm run serve           => chạy ứng dụng, tuy nhiên trong trường hợp này ứng dụng chúng ta chạy bằng cách sinh ra các file tĩnh trước như html, css, js nên câu lệnh này không hoạt động trong trường hợp này
                                                                npm run build           => Sinh ra cái file js ở tất cả các môi trường development, local, production => dùng ở nhánh master (tổng hợp tất cả các)
                                                                npm run build-pro       => Sinh ra các file js ở môi trường production
                                                                npm run build-local     => Sinh ra các file js ở môi trường local và development => dùng ở nhánh beta (nhánh này để xem trước tất cả các kịch bản, tính năng mới sắp sửa release, đang test) + dùng ở nhánh dev (nhánh này sẽ gom tất cả các tính năng sắp sửa release đã qua giai đoạn test)
    └── vue.config.js                               # Cấu hình để build ra các file js, css, hình ảnh dùng lệnh npm run build-xx cho các môi trường + bao gồm cả bundle và minify
    
