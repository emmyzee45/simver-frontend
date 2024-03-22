import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLinks/menuLinks";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Credits",
        path: "/credits",
        icon: <MdDashboard />,
      },

      {
        title: "Rentals",
        path: "/lines",
        icon: <MdShoppingBag />,
      },
      {
        title: "Verificatiions",
        path: "/superadmin/series",
        icon: <MdWork />,
      },
      {
        title: "Support",
        path: "/superadmin/short-films",
        icon: <MdAnalytics />,
      },
    ],
  },
];

const bottomMenuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "API",
        path: "/api",
        icon: <MdDashboard />,
      },

      {
        title: "Labs",
        path: "labs",
        icon: <MdShoppingBag />,
      },
      {
        title: "Profile",
        path: "/profile",
        icon: <MdWork />,
      },
   
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between py-8 h-screen fixed">
      <div className="">
        <div className=" ">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-semibold text-[#4B494A] text-center">
                  SIM
                  <span className="text-[#EF5242]">Ver</span>
                </h4>
                <h6 className="text-[8px] uppercase text-center tracking-[2px]">
                  carrier sim provider
                </h6>
              </div>
            </div>
          </div>
          <nav className="mt-16 ">
            <ul className=" w-full flex flex-col  ">
              {menuItems.map((menu) => (
                <li key={menu.title} className="flex gap-8 flex-col">
                  {menu.list.map((item) => (
                    <MenuLink item={item} key={item.title} />
                  ))}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="">
       
            <nav>
              <ul>
                {bottomMenuItems.map((menu) => (
                  <li key={menu.title} className="flex gap-8 flex-col">
                    {menu.list.map((item) => (
                      <MenuLink item={item} key={item.title} />
                    ))}
                  </li>
                ))}
              </ul>
            </nav>
        
      </div>
    </aside>
  );
};

export default Sidebar;
