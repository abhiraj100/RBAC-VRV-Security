import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";
import { FaUsers, FaKey } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { users, roles, permissions } from "../Api/MockDatas";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRoles, setTotalRoles] = useState(0);
  const [totalPermissions, setTotalPermissions] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      setTotalUsers(users.length);
      setTotalRoles(roles.length);
      setTotalPermissions(permissions.length);
    };
    calculateTotals();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Navbar />
      <div className="bg-[#e7e7f0] bg-red-500 rounded-lg shadow-md mt-6 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Overall Data
        </h2>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Component */}
            {[
              {
                label: "Total Users",
                value: totalUsers,
                icon: <FaUsers />,
                color: "orange",
                link: "/users",
              },
              {
                label: "Roles",
                value: totalRoles,
                icon: <MdSecurity />,
                color: "green",
                link: "/roles",
              },
              {
                label: "Permissions",
                value: totalPermissions,
                icon: <FaKey />,
                color: "teal",
                link: "/permissions",
              },
              {
                label: "Active Users",
                value: users.filter((user) => user.status === "Active").length,
                icon: <IoMdPeople />,
                color: "blue",
                link: "/users",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`flex items-center p-4 rounded-lg shadow-md bg-yellow-400 dark:bg-[#001F3F] transition-all hover:bg-${item.color}-200 hover:text-black`}
              >
                <div
                  className={`p-3 mr-4 text-${item.color}-500 bg-${item.color}-100 rounded-full dark:text-${item.color}-100 dark:bg-${item.color}-500`}
                >
                  {item.icon}
                </div>
                <div className="w-full">
                  <p className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300">
                    {item.label}
                  </p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {item.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
