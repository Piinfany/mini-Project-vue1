// ทำหน้าที่เข้าไปดึงเอาเนื้อหา App.vue มาใช้งาน และให้อ้างอิงไปยัง element id app ใน body index.html
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
