# Tạo hiệu ứng fade-in fade-out cho các dropdown
## Cách dùng
- Khai báo:
```javascript
import HeightTransition from '@/common/components/HeightTransition.vue';

export default {
  components: {
    ...,
    HeightTransition,
    ...,
  }
}
```
- Sử dụng trong template của component:
Lưu ý: element hay component muốn thêm hiệu ứng _fade-in_ hay _fade-out_ phải sử dụng **v-show** hay **v-if**
```html
<HeightTransition>
    <div
        class="selecttime"
        v-show="isActive === true"
    >
        <span
            v-for="(option, index) in options"
            :key="index"
            @click="selectOption(option)"
            :class="{ active: selectedOption.id === option.id }"
        >{{ option.text }}</span>
    </div>
</HeightTransition>
```
