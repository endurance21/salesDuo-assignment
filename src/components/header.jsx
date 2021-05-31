import { TiBell } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { BiMessageAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "./header.css"
import {Row,Col} from "antd";

const Header = ()=>{
    return (
        <div className="header">
        <Row>
        <Col className="searchBarIcon" xs={1}>
       <BsSearch size={20}/>
        </Col>
        <Col  xs={17}>
       <input className="searchBarInput" value="type to search.."type="text" name="name" />
        </Col>
        <Col xs={6}>
        <Row >
            <Col className="headerIcon">
                <FiSettings  size={20}/>
            </Col>
            <Col  className="headerIcon">
                <BiMessageAlt  size={20}/>
            </Col>
            <Col  className="headerIcon">
                <TiBell  size={20}/>
            </Col>
            <Col className="headerIcon">
            Divyanshu
            <p>hiii</p>
            </Col>
        </Row>
        </Col>
        </Row>
        </div>
    )
}

export default Header