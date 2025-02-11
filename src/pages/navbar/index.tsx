import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../../ui/Modal";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navItem = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "blogs",
      path: "/blogs",
    },
    {
      id: 2,
      title: "about",
      path: "/about",
    },
    {
      id: 3,
      title: "profile",
      path: "/dashboard/profile",
    },
  ];
  return (
    <div className="grid sm:grid-cols-4 p-2 border-b border-gray-200 ">
      <div className="">
        <div className="flex justify-center items-center">
          <div className="text-2xl">Logo</div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-end ">
          {navItem.map((each) => (
            <div className="flex px-2 list-none cursor-pointer ">
              <NavLink to={each.path}>{each.title}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <span
            className="text-red-400 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Logout
          </span>
        </div>
      </div>
      <Modal showModal={open} setShowModal={setOpen}>
        <div>hello</div>
      </Modal>
    </div>
  );
};

export default Navbar;
