import React,{useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderMain from "./components/header"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const App =()=>{
   const [collapsed,setCollapsed] =  useState(false)
   const [theme,setTheme] =  useState("light")

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };


    return (
      <Layout style={{ minHeight: '100vh' }}>
            <Router>

        <Sider  theme={theme} collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item  key="1" icon={<PieChartOutlined />}>
              <Link to="/dashboard"> dashboard </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <HeaderMain></HeaderMain>
            </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>


                  <Switch>
                    <Route exact path="/dashboard">
                      asdflkasdflk
                    </Route>

                  </Switch>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Router>

      </Layout>
    );
}

export default App;
