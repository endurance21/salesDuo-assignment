import { TiBell } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { BiMessageAlt ,FcCdLogo} from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "./header.css";
import { Row, Col, Input, Menu, Dropdown ,Badge ,Button} from "antd";
import Icon , {DownOutlined} from "@ant-design/icons";

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
);
const PandaIcon = (props) => <Icon component={PandaSvg} {...props} />;

const Profile = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (


    <Row>
          <Col xs={12} >
            <Row>Divyanshu</Row>
            <Row className="color-shade">Developer</Row>
          </Col>
          <Col xs={6} className="center">
            <PandaIcon style={{fontSize:"2rem"}}></PandaIcon>
          </Col>
            <Col className="center">
        <Dropdown overlay={menu} trigger={["click"]} >
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <DownOutlined />
            </a>
        </Dropdown>
            </Col>

        </Row>



  );
};
const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
const Header = () => {

  return (
    <div className="header h-100">
      <Row className="center h-100">
        <Col className="searchBarIcon center color-shadow" xs={1}>
          <BsSearch size={18} />
        </Col>
        <Col sm = {10} md={12} lg={14} xl={16} xxl={18}>
          <Input
            className="searchBarInput"
            value="type to search.."
            type="text"
            name="name"
          />
        </Col>
        <Col sm={6} md={5} lg={4} xl={3} xxl={2} >
          <Row>
            <Col className="headerIcon center">
            <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight" >
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <FiSettings size={20} />

            </a>
        </Dropdown>
            </Col>
            <Col className="headerIcon center">
            <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight" >
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <BiMessageAlt size={20} />
              <Badge dot style={{top: "-10px",right:"0px",verticalAlign:"top",position:"absolute",fontSize:".7rem"}}>

                </Badge>
            </a>
        </Dropdown>

            </Col>
            <Col className="headerIcon center">

            <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight" >
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <TiBell size={18}/>
                    <Badge size={"small"} count={3} style={{top: "-16px",right:"-6px",verticalAlign:"top",position:"absolute",fontSize:".7rem"}}>

                    </Badge>
            </a>
        </Dropdown>


            </Col>
            <Col className="headerIcon center">
            </Col>
          </Row>
        </Col>
        <Col sm={7}md={6}lg={5}xl={4} xxl={3}>
        <Profile/>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
