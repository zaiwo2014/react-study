import { Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
import SideMenu from './router/SideMenu.jsx';
import { Outlet } from 'react-router-dom';

const App = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <img src="./src/assets/react.svg" alt="logo" style={{ width: 32, height: 32, margin: 16 }} />
      <div className="logo" />

      <SideMenu />
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: 'center',
          }}
        >
          {/* 具体的网页内容 */}
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);
export default App;