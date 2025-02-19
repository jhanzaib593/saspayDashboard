import Sider from "antd/es/layout/Sider";
import React from "react";
import {
  BarChartOutlined,
  LineChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  GlobalOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Affix, Button, Card, Menu } from "antd";
import logo from "../../assets/img/logo.png";
import "./index.css";

const SideNav = ({ collapsed, setCollapsed }) => {
  const [top, setTop] = React.useState(0);

  const menuItems = [
    {
      key: "1",
      icon: <BarChartOutlined />,
      label: <Link to="/">Dashboard</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "2",
      icon: <BarChartOutlined />,
      label: <Link to="/leaderboard">Leaderboard</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "3",
      icon: <ShoppingCartOutlined />,
      label: <Link to="/order">Order</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "4",
      icon: <AppstoreOutlined />,
      label: <Link to="/products">Products</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "5",
      icon: <LineChartOutlined />,
      label: <Link to="/report">Sales Report</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "6",
      icon: <MessageOutlined />,
      label: <Link to="/messages">Messages</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "7",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
    {
      key: "8",
      icon: <LogoutOutlined />,
      label: "Sign Out",
      style: { color: "#737791", height: 50, borderRadius: 15 },
    },
  ];

  return (
    <Affix offsetTop={top} style={{ backgroundColor: "white" }}>
      <Sider
        width="20em"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed} // Optional: You can toggle collapsing state
        style={{ background: "#fff", position: "static" }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <div className="logo">
            <img
              src={logo}
              alt="SysPay Logo"
              height={50}
              style={{
                width: collapsed ? "0px" : "180px",
                transition: "width 0.3s",
              }}
            />
          </div>
          {!collapsed && (
            <CloseOutlined
              style={{
                fontSize: "20px",
                color: "#737791",
                cursor: "pointer",
                padding: "10px",
              }}
              className="collapsed-close"
              onClick={() => setCollapsed(true)} // This will collapse the sidebar
            />
          )}
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{ padding: collapsed ? "0px" : "0 30px" }}
          items={menuItems}
        />
        <div style={{ padding: "0 30px" }}>
          <Card className="Card-caar">
            <GlobalOutlined
              style={{
                fontSize: "30px",
                marginBottom: "10px",
                color: "#1559ED",
                backgroundColor: "white",
                padding: 5,
                borderRadius: 10,
                position: "relative",
              }}
            />
            <p style={{ padding: "10px 0" }}>Get access to all features</p>
            <Button
              type="primary"
              style={{
                background: "#fff",
                color: "#2f6fed",
                padding: "0 30px",
                zIndex: 20,
              }}
            >
              Get Pro
            </Button>
          </Card>
        </div>
      </Sider>{" "}
    </Affix>
  );
};

export default SideNav;
