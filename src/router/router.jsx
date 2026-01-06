// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import App from '../App.jsx';
import NotFound from '../page/NotFound.jsx';

const staticRoutes = [
  { path: '/', element: <App /> ,
    children: [...routes]
  },
  { path: '*', element: <NotFound /> }, // 404
];

// 路由配置已经在 ./routes 中以符合 react-router 的 route 对象格式定义（含 element）
const router = createBrowserRouter(staticRoutes);

export default router;
