import React from "react";
import {
  Layout,
  Button,
  Input,
  Dropdown,
  Menu,
  Badge,
  Card,
  Avatar,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  BellOutlined,
} from "@ant-design/icons";
import "./index.css";
import { US } from "country-flag-icons/react/3x2";
import profileimg from "../../assets/img/profile.jpeg";

const { Header } = Layout;

const HeaderCon = ({ collapsed, setCollapsed }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <US
          title="United States"
          style={{
            width: "24px",
            borderRadius: 100,
            marginRight: "8px",
          }}
        />
        Eng (us)
      </Menu.Item>
    </Menu>
  );
  const menuprfile = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Header
        style={{
          background: "#fff",
          padding: "0 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px" }}
            className="collapsed-btn"
          />
          <h2 style={{ marginLeft: "20px" }}>Dashboard</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* search */}

          <Input
            placeholder="Search here..."
            className="search"
            style={{
              //   width: "100%",
              borderRadius: "10px",
              backgroundColor: "rgba(249, 250, 251, 1)",
              padding: "10px ",
              border: "none",
            }}
            prefix={
              <SearchOutlined style={{ color: "#5D5FEF", fontSize: 18 }} />
            }
          />

          {/* language Select */}

          <Dropdown
            overlay={menu}
            className="dropdown-language"
            trigger={["click"]}
          >
            <Button
              type="text"
              style={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <US
                title="United States"
                style={{
                  width: "24px",
                  borderRadius: 100,
                  marginRight: "8px",
                }}
              />
              <span className="language_name">Eng (us) </span>
              <DownOutlined
                className="language_icon"
                style={{
                  marginLeft: "8px",
                  fontSize: "10px",
                  color: "#A098AE",
                }}
              />
            </Button>
          </Dropdown>

          {/* Bell Notification */}

          <Card
            style={{
              borderRadius: "12px",
              background: "#FEF7EC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            <Badge dot color="red">
              <BellOutlined style={{ fontSize: "18px", color: "#EFAF5E" }} />
            </Badge>
          </Card>
          {/* Profile Section */}
          <Dropdown overlay={menuprfile} trigger={["click"]}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                cursor: "pointer",
              }}
            >
              <Avatar src={profileimg} size={45} style={{ borderRadius: 15 }} />
              <div className="user_name" style={{ lineHeight: "21px" }}>
                <strong
                  style={{
                    fontSize: "16px",
                    color: "#000",
                    marginBottom: "2px",
                  }}
                >
                  Musfiq
                </strong>
                <br />
                <span style={{ fontSize: "14px", color: "#A0A0A0" }}>
                  Admin
                </span>
              </div>
              <DownOutlined
                className="user_down"
                style={{ color: "#000", fontSize: 14 }}
              />
            </div>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default HeaderCon;
