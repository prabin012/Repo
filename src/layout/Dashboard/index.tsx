import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const navItem = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
    },
    {
      id: 1,
      title: "blogs",
      path: "/blogs",
    },
    {
      id: 2,
      title: "Skills",
      path: "/about",
    },
    {
      id: 3,
      title: "Projects",
      path: "/dashboard/profile",
    },
    {
      id: 3,
      title: "Certificates",
      path: "/dashboard/profile",
    },
    {
      id: 3,
      title: "Achievements",
      path: "/dashboard/profile",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex justify-between  p-5">
        <div className="bg-gray-100 p-5">
          <div className="flex flex-col items-start justify-end ">
            {navItem.map((each) => (
              <div className="flex px-2 py-2 list-none cursor-pointer ">
                <NavLink to={each.path}>{each.title}</NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-red-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
