# Code splitting
## Kỹ thuật code splitting là gì
- Code splitting: hiểu nôm na là phân chia code thành nhiều file độc lập, vậy tại sao cần phân chia như này? theo nhu cầu ngày 1 tăng của website thì dung lượng file javascript của website ngày càng lớn hay, tuy nhiên nếu bạn để ý kỹ thì có những thứ lúc vừa vào website thì vẫn chưa dùng đến, nghĩa là những thứ đó không nhất định được gom chung vào file javascript để tải ngay lúc ban đầu. Thử tưởng tượng file javascript để tải về lúc ban đầu có dung lượng 5MB, nhưng có tới tận 3MB không dùng đến, có phải bạn đang lãng phí tải về những thứ chưa dùng đến ngay lúc ban đầu? Nên phát sinh chuyện dynamic import
## Code coverage
![image](https://user-images.githubusercontent.com/36779105/117940612-71ddd700-b333-11eb-8f9a-2ecf9c2787cc.png)
## Dynamic import
```javascript
const LoginModal = () => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: 'login-modal' */
  './path/to/LoginModal.js');
  
...
// thêm hiệu ứng loading
LoginModal().then(() => {
  // dừng hiệu ứng loading
}).catch((error) => {
  // dừng hiệu ứng loading
})
```
- Với **webpackPrefetch** => chỉ ra cho trình duyệt biết rằng **LoginModal** trong ví dụ trên có thể dùng hoặc không trong tương lai, nếu dùng nó sẽ tải về và thực thi các câu lệnh sau khi đã tải file **LoginModal** về
- Với **webpackChunkName** => tên của **LoginModal** được định nghĩa ở trên, nếu không chỉ ra rõ **webpackChunkName** là gì, thì mặc định sẽ được đếm từ **0.js**, **1.js**,...
