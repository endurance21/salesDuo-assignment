import React,{useState, useEffect,useRef} from 'react';
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
import Loader from "./components/Loader"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App =(props)=>{
 const [loading,setloading] = useState(true)
   const [collapsed,setCollapsed] =  useState(false)
   const [theme,setTheme] =  useState("dark")
   const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
      window.setTimeout(()=>{
        setloading(false)

      },2000)
    let style = getComputedStyle(document.querySelector("body"));
    setWidth(parseInt(style.width));
    window.addEventListener("resize", () => {
        let style = getComputedStyle(document.querySelector("body"));
        setWidth(parseInt(style.width));
    });

  }, []);

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

if(loading){
  return <Loader></Loader>
}
    return (
      <Router>

      <Layout style={{ minHeight: '100vh' }} ref={ref}>

            <Sider
            breakpoint="md"
          theme={theme}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          className="sider-main"
          collapsedWidth={0}
          width={width > 600 ? "300px" : "200px"}
        >
          <div className={!collapsed?"logo":"logo-collapsed"} style={{color:"white",paddingLeft:"10px"}}>
            Artemis
            </div>
          <Row  className="headliners">
          <div style={{fontSize:`${collapsed? ".6rem" : "1rem"}`,color:`${theme=="dark"?"white":"black"}`}}> Main </div>
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
        <div style={{fontSize:`${collapsed? ".6rem" : "1rem"}`,color:`${theme=="dark"?"white":"black"}`}}> Secondary </div>
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
        <Layout className="site-layout" theme={theme}>
          <Header className="site-layout-background header-wrapper" style={{ padding: 0 }} >
            <HeaderMain></HeaderMain>
            </Header>
          <Content style={{ margin: '0 16px' }} theme={theme}>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360,backgroundColor:"#f0f2f5" }}>


                  <Switch>
                    <Route  path="/">
                      <Dashboard>

                      </Dashboard>
                    </Route>

                  </Switch>

            </div>
          </Content>

        </Layout>

      </Layout>
      </Router>

    );
}

export default App;
