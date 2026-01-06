// SideMenu.jsx
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from './routes';

function renderMenu(routes) {
  return routes.map(route => {
    if (route.children && route.children.length) {
      return (
        <Menu.SubMenu
          key={route.path}
          icon={route.icon}
          title={route.label}
        >
          {renderMenu(route.children)}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={route.path} icon={route.icon}>
        {route.label}
      </Menu.Item>
    );
  });
}

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}
    >
      {renderMenu(routes)}
    </Menu>
  );
};

export default SideMenu;
