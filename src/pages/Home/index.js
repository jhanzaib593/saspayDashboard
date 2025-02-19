import { Button, Card, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import {
  ImportOutlined,
  LineChartOutlined,
  TagFilled,
  UploadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./index.css";
import Linecharts from "../../components/charts/linecharts";
import RevenueChart from "../../components/charts/revenueChart";
import CustomerSatisfactionChart from "../../components/charts/customerSatisfactionChart";
import TargetRealityChart from "../../components/charts/targetRealityChart";
import TopProductsTable from "../../components/charts/topProductsTable";
import SalesMapping from "../../components/charts/salesMapping";
import VolumeServiceChart from "../../components/charts/volumeServiceChart";

const Home = () => {
  return (
    <>
      <Content style={{ margin: "20px" }}>
        <Row
          gutter={[16, 16]}
          style={{ marginTop: 20 }}
          justify={"space-around"}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={15}
            xxl={15}
            style={{
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: 20,
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <h2 style={{ fontWeight: 700 }}>Today's Sales</h2>
                <p style={{ color: "#737791" }}>Sales Summary</p>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{ textAlign: "end" }}
              >
                <Button className="export-btn" style={{ fontSize: 15 }}>
                  <UploadOutlined />
                  Export
                </Button>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ padding: "20px 0 15px 0" }}>
              <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <Card
                  style={{
                    backgroundColor: "#FFE2E5",
                    border: "none",
                    borderRadius: 16,
                    height: "100%",
                  }}
                >
                  <LineChartOutlined
                    style={{
                      backgroundColor: "#FA5A7D",
                      padding: 8,
                      color: "white",
                      borderRadius: 50,
                      fontSize: 20,
                    }}
                  />
                  <p style={{ fontWeight: 600, fontSize: 25, paddingTop: 5 }}>
                    $1K
                  </p>
                  <p
                    style={{ color: "#425166", padding: "5px 0", fontSize: 16 }}
                  >
                    Total Sales
                  </p>
                  <p style={{ color: "#4079ED", fontSize: 12 }}>
                    +8% from yesterday
                  </p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6}>
                <Card
                  style={{
                    backgroundColor: "#FFF4DE",
                    border: "none",
                    borderRadius: 16,
                    height: "100%",
                  }}
                >
                  <ImportOutlined
                    style={{
                      backgroundColor: "#FF947A",
                      padding: 8,
                      color: "white",
                      borderRadius: 50,
                      fontSize: 20,
                    }}
                  />
                  <p style={{ fontWeight: 600, fontSize: 25, paddingTop: 5 }}>
                    300
                  </p>
                  <p
                    style={{ color: "#425166", padding: "5px 0", fontSize: 16 }}
                  >
                    Total Orders
                  </p>
                  <p style={{ color: "#4079ED", fontSize: 12 }}>
                    +8% from yesterday
                  </p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6}>
                <Card
                  style={{
                    backgroundColor: "#DCFCE7",
                    border: "none",
                    borderRadius: 16,
                    height: "100%",
                  }}
                >
                  <TagFilled
                    style={{
                      backgroundColor: "#3CD856",
                      padding: 8,
                      color: "white",
                      borderRadius: 50,
                      fontSize: 20,
                    }}
                  />
                  <p style={{ fontWeight: 600, fontSize: 25, paddingTop: 5 }}>
                    5
                  </p>
                  <p
                    style={{ color: "#425166", padding: "5px 0", fontSize: 16 }}
                  >
                    Products Sold
                  </p>
                  <p style={{ color: "#4079ED", fontSize: 12 }}>
                    +8% from yesterday
                  </p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6}>
                <Card
                  style={{
                    backgroundColor: "#F3E8FF",
                    border: "none",
                    borderRadius: 16,
                    height: "100%",
                  }}
                >
                  <UserAddOutlined
                    style={{
                      backgroundColor: "#BF83FF",
                      padding: 8,
                      color: "white",
                      borderRadius: 50,
                      fontSize: 20,
                    }}
                  />
                  <p style={{ fontWeight: 600, fontSize: 25, paddingTop: 5 }}>
                    8
                  </p>
                  <p
                    style={{ color: "#425166", padding: "5px 0", fontSize: 16 }}
                  >
                    New Customers
                  </p>
                  <p style={{ color: "#4079ED", fontSize: 12 }}>
                    +8% from yesterday
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={8}
            xxl={8}
            style={{
              // padding: "0 20px",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <Linecharts />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={11}
            lg={11}
            xl={10}
            xxl={10}
            className="RevenueChart"
          >
            <RevenueChart />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            xxl={6}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <CustomerSatisfactionChart />
          </Col>
          <Col
            xs={24}
            sm={11}
            md={11}
            lg={11}
            xl={7}
            xxl={7}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <TargetRealityChart />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={10}
            xxl={10}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <TopProductsTable />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={11}
            lg={11}
            xl={6}
            xxl={6}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <SalesMapping />
          </Col>
          <Col
            xs={24}
            sm={11}
            md={11}
            lg={11}
            xl={7}
            xxl={7}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <VolumeServiceChart />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Home;
