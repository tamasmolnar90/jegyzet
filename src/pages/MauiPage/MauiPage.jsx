import { Outlet } from "react-router-dom";
import SideNavigation from "../../components/SideNavigation";

export default function LinuxPage({ links }) {
  return (
    <div style={{ display: "flex" }}>
      <SideNavigation links={links} />
      <div style={{ margin: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
