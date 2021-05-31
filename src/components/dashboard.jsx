import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";
import {
  Row,
  Col,
  Button,
  Tabs,
  Tag,
  Statistic,
  Progress,
  Menu,
  Dropdown,
  Badge,
  Card,
} from "antd";
import {
  FileExcelOutlined,
  SearchOutlined,
  ExportOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Table, ExportTableButton } from "ant-table-extensions";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import AnimatedNumber from "animated-number-react";
import "./dashboard.css";

const { TabPane } = Tabs;

const BadgeC = ({ value }) => {
  return (
    <div
      style={{
        display: "inline-block",
        borderRadius: "10px",
        fontSize: "initial",
        backgroundColor: "#00D084",
        color: "white",
        marginLeft: "5px",
        padding: "1px",
      }}
    >
      +{value}%
    </div>
  );
};
const Totalincome = () => {
  const { countUp } = useCountUp({ end: 100, duration: 4, decimals: 2 });

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div className="w-100 total-income-wrapper  box-shadow">
      <Row className="heading color-shade">
        <Col xs={20}>Total Income</Col>
        <Col xs={4} style={{ textAlign: "end" }}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              ...
            </a>
          </Dropdown>
          ,
        </Col>
      </Row>
      <Row className="income-dollar badge-text bold">
        {"$ " + countUp}
        <BadgeC value={6.6} />
      </Row>
      <Row className="income-progress-bar">
        <Progress percent={countUp} status="active" showInfo={false}></Progress>
      </Row>
      <Row className="color-shade">Yearly Goal</Row>
    </div>
  );
};
const Balance = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
      console.log("component did mount")
    let style = getComputedStyle(ref.current);
    setWidth(parseInt(style.width));
    window.addEventListener("resize", () => {
        console.log("resize calleds")
        let style = getComputedStyle(ref.current);
        setWidth(parseInt(style.width));
    });
    // window.resizeTo(0,0)
    // window.dispatchEvent(new Event('resize'));
    console.log("hero")
    window.dispatchEvent(new Event('resize'))
    return ()=>{
        console.log("un mounted")
    }
  }, []);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  const formatValue1 = (value) => (
    <div style={{ fontSize: width * 0.05 + "px" }} className="bold">
      {" "}
      {Number(value).toFixed(2)} %{" "}
    </div>
  );
  const formatValue2 = (value) => (
    <div style={{ fontSize: width * 0.05 + "px" }} className="bold">
      {" "}
      ${Number(value).toFixed(2)}{" "}
    </div>
  );
console.log("balance",width)
  return (
    <div
      style={{
        margin: "0px 0px 0px 30px",
        backgroundColor: "white",
        borderRadius: "3px",
      }}
    >
      <Row
        style={{ borderBottom: ".5px solid  rgba(0,0,0,0.1)", padding: "10px" }}
      >
        <Col xs={17} style={{ fontSize: "2rem" }}>
          Balance
        </Col>
        <Col xs={7} style={{ textAlign: "end" }}>
          <Dropdown overlay={menu}>
            <Button className="color-shade">
              Monthly <DownOutlined  style={{color:"black"}}/>
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-evenly", padding: "10px 3px " }}>
        <Col
          style={{
            border: ".2px solid rgba(0,0,0,0.1)",
            padding: "5px 2rem",
            borderRadius: "5px",
          }}
        >
          <Row className="color-shade">Earnings</Row>

          <Row className="badge-text">
            <AnimatedNumber
              value={120}
              duration={3000}
              formatValue={formatValue1}
            ></AnimatedNumber>
            <BadgeC value={2.5}></BadgeC>
          </Row>
        </Col>
        <Col
          style={{
            border: ".2px solid  rgba(0,0,0,0.1)",
            padding: "5px 2rem",
            borderRadius: "5px",
          }}
        >
          <Row className="color-shade">Sales Value</Row>

          <Row className="badge-text">
            <AnimatedNumber
              value={150}
              duration={3000}
              formatValue={formatValue2}
            ></AnimatedNumber>
            <BadgeC value={1.5}></BadgeC>
          </Row>
        </Col>
      </Row>
      <Row ref={ref} style={{ paddingTop: "80px" }}>
        <AreaChart
          width={width>600 ? width-75 : width}
          height={150}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area type="linear" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </Row>
    </div>
  );
};

const NewUser = () => {
  const { countUp } = useCountUp({ end: 90, duration: 4, decimals: 2 });
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    setWidth(ref.current.getBoundingClientRect().width);
    window.addEventListener("resize", () => {
      setWidth(ref.current.getBoundingClientRect().width);
    });
  }, []);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  console.log("width",width)
  return (
    <div className="w-100 total-income-wrapper  box-shadow">
      <Row className="heading color-shade">
        <Col xs={20}>New Users</Col>
        <Col xs={4} style={{ textAlign: "end" }}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              ...
            </a>
          </Dropdown>
          ,
        </Col>
      </Row>
      <Row className="income-dollar badge-text bold">
        {countUp + "%"}
        <BadgeC value={6.6} />
      </Row>

      <Row className="color-shade" ref={ref}>
        <BarChart
          width={width ? width : 300}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Bar dataKey="pv" fill="#0693E3" background={{ fill: "#eee" }} />
        </BarChart>
      </Row>
    </div>
  );
};

const Transactions = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columnsData = [
    {
      title: "Invoice Id",
      dataIndex: "Invoice",
      key: "invoice",
      sorter: (a, b) => a.Invoice.length - b.Invoice.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      render: (item) => {
        return <div>CODE {"  " + item}</div>;
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "#F44336";
        if (status == "completed") {
          color = "#4CAF50";
        } else if (status == "pending") {
          color = "#FCB900";
        }
        return (
          <div
            color={color}
            style={{
              backgroundColor: color,
              color: "white",
              borderRadius: "10px",
              display: "inline-block",
              padding: "2px",
            }}
          >
            {status}
          </div>
        );
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (amount) => {
        return <div>$ {"  " + amount}</div>;
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
    },
  ];
  const rowData = [
    {
      key: 1,
      Invoice: "Toyota 1 ",
      Date: "Celica",
      Description: 35000,
      status: "completed",
      Amount: "400",
    },
    {
      key: 2,
      Invoice: "Toyota 2 ",
      Date: "Celica",
      Description: 35000,
      status: "pending",
      Amount: "400",
    },
    {
      key: 3,
      Invoice: "Toyota 3 ",
      Date: "Celica",
      Description: 35000,
      status: "pending",
      Amount: "400",
    },
    {
      key: 4,
      Invoice: "Toyota 42",
      Date: "Celica",
      Description: 35000,
      status: "completed",
      Amount: "400",
    },
    {
      key: 5,
      Invoice: "Toyota 32",
      Date: "Celica",
      Description: 35000,
      status: "error",
      Amount: "400",
    },
    {
      key: 6,
      Invoice: "Toyota c223",
      Date: "Celica",
      Description: 35000,
      status: "completed",
      Amount: "400",
    },
    {
      key: 7,
      Invoice: "Toyota 232",
      Date: "Celica",
      Description: 35000,
      status: "completed",
      Amount: "400",
    },
  ];
  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div className="transaction-wrapper" style={{ width: "100%" }}>
      <Row>
        <Col xs={20}>
          <h1>Recent Transactions</h1>
        </Col>
        <Col xs={4} style={{ textAlign: "end" }}>
          <ExportTableButton
            dataSource={rowData}
            columns={columnsData}
            btnProps={{ type: "primary", icon: <ExportOutlined /> }}
          >
            Export
          </ExportTableButton>
        </Col>
      </Row>
      <Row className="transaction-tab">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Incoming " key="1">
            <Table
              rowSelection={rowSelection}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={rowData}
              columns={columnsData}
            />
          </TabPane>
          <TabPane tab="Invoices" key="2">
            <Table
              rowSelection={rowSelection}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={rowData}
              columns={columnsData}
            />
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row>
        <Col xs={12}>
          <Row>
            <Totalincome></Totalincome>
          </Row>
          <Row style={{ margin: "30px 0px" }}>
            <NewUser></NewUser>
          </Row>
        </Col>
        <Col xs={12}>
          <Balance></Balance>
        </Col>
      </Row>
      <Row>
        <Transactions></Transactions>
      </Row>
    </div>
  );
};
export default Dashboard;
