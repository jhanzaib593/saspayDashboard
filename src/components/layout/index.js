import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderCon from "../header/index";
import SideNav from "../siderNav";

const LayoutCom = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      // Collapse sidebar if window width is less than 1200px, expand otherwise
      setCollapsed(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout theme="light" style={{ minHeight: "100vh" }}>
      {/* Pass collapsed state to SideNav */}
      <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />

      <Layout>
        {/* Pass collapsed state and setCollapsed to HeaderCon */}
        <HeaderCon collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* The main content */}
        <Layout.Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default LayoutCom;
