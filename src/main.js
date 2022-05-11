import { createApp } from 'vue'
import App from './App.vue'
// 导入 element-plus 组件以及 css 文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入路由规则
import router from './router'
// 导入 element 图标
import * as  ELIcons from '@element-plus/icons-vue'

// 将 element-plus 引用到 app 实例中
const app = createApp(App)
// 将所有图标加入到 app 的组建中
for (let iconName in ELIcons){
    app.component(iconName,ELIcons[iconName])
}


app.use(ElementPlus)
app.use(router)
app.mount('#app')
