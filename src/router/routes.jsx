// routes.jsx
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React from 'react';
import TestPage from '../page/TestPage';

const routes = [
  {
    key: 'user',
    path: 'user',
    label: '用户管理',
    icon: <UserOutlined />,
    element: <TestPage />,
  },
  {
    key: 'video',
    path: 'video',
    label: '视频管理',
    icon: <VideoCameraOutlined />,
    element: <TestPage />,
  },
  {
    key: 'upload',
    path: 'upload',
    label: '上传中心',
    icon: <UploadOutlined />,
    element: <TestPage />,
  },
];

export default routes;
