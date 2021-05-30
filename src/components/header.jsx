import {Row,Col} from "antd"
const Header = ()=>{
    return (
        <div className="header">

        <Row>
        <Col xs={18}>
        input
        </Col>
        <Col xs={6}>
        <Row>
            <Col>
            setting
            </Col>
            <Col>
            messages
            </Col>
            <Col>
            notification
            </Col>
            <Col>
            pofile
            </Col>
        </Row>
        </Col>
        </Row>
        </div>
    )
}

export default Header