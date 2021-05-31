import React,{useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb ,Row ,Col} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
  QuestionCircleOutlined,
  InboxOutlined,
  FolderOpenOutlined,
  BarsOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderMain from "./components/header"
import Dashboard from "./components/dashboard"

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

            <Sider
          theme={theme}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <div className="logo" />
          <Row  className="headliners">
          Main
          </Row>
          <Menu theme={theme} defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/dashboard"> Dashboard </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Discover
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Documents">
              <Menu.Item key="8">Doc1</Menu.Item>
              <Menu.Item key="9">Doc2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<AppstoreOutlined />}
              title=" Applications"
            >
              <Menu.Item key="8">Doc1</Menu.Item>
              <Menu.Item key="9">Doc2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<FileOutlined />} title="Pages">
              <Menu.Item key="10">Page1</Menu.Item>
              <Menu.Item key="11">Page2</Menu.Item>
            </SubMenu>
      <Row className="headliners">
      Secondary
        </Row>

            <Menu.Item key="12" icon={<QuestionCircleOutlined />}>
              Support Center
            </Menu.Item>
            <Menu.Item key="13" icon={<InboxOutlined />}>
              Inbox
            </Menu.Item>
            <Menu.Item key="14" icon={<FolderOpenOutlined />}>
              File manager
            </Menu.Item>
            <Menu.Item key="15" icon={<BarsOutlined />}>
              Data List
            </Menu.Item>
            <Menu.Item key="16" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="17" icon={<LogoutOutlined />}>
              Log Out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <HeaderMain></HeaderMain>
            </Header>
          <Content style={{ margin: '0 16px' }}>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360,backgroundColor:"#f0f2f5" }}>


                  <Switch>
                    <Route exact path="/dashboard">
                      <Dashboard>

                      </Dashboard>
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
