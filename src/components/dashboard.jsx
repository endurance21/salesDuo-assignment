
import {Row,col,Button} from "antd"

const Totalincome = ()=>{
     return (
        "total income"
     )
}
const Balance = ()=>{

}
const NewUser = ()=>{

}
const Transactions = ()=>{
    return (
        <div>
            <Row>
                <Col xs={20}>
                    Recent Transactions
                </Col>
                <Col xs={4}>
                    <Button> Export </Button>
                </Col>
            </Row>
            <Row className="transaction-tab">

            </Row>
        </div>
    )
}

const Dashboard = ()=>{

    return (
        "dashboard"
    )
}
export default Dashboard