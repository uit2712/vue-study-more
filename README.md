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
    
