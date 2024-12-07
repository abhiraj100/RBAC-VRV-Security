export const users = [
  {
    userId: 1,
    name: "Abhiraj",
    email: "abhiraj@gmail.com",
    role: "Admin",
    status: "Active",
    created: "2024-01-01",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    userId: 2,
    name: "Arvind",
    email: "arvind@gmail.com",
    role: "User",
    status: "Inactive",
    created: "2024-02-25",
    image: "",
  },
  {
    userId: 3,
    name: "Akshay",
    email: "akshay@gmail.com",
    role: "User",
    status: "Active",
    created: "2024-03-22",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    userId: 4,
    name: "Pranav",
    email: "pranav@gmail.com",
    role: "Manager",
    status: "Inactive",
    created: "2024-06-13",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    userId: 5,
    name: "Harsh",
    email: "harsh@gmail.com",
    role: "Manager",
    status: "Active",
    created: "2024-06-13",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const roles = [
  {
    Id: 1,
    rolename: "Admin",
    description:
      "Has full access to all resources and can manage all users and data.",
    permissions: {
      read: true,
      write: true,
      delete: true,
      manageRoles: true,
      viewAnalytics: true,
    },
  },
  {
    Id: 2,
    rolename: "User",
    description:
      "Can read and write their own data, but cannot modify others' data.",
    permissions: {
      read: true,
      write: false,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
  {
    Id: 3,
    rolename: "Manager",
    description:
      "Can manage users, assign roles, and view reports, but cannot delete data.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },

  {
    Id: 4,
    rolename: "Super Admin",
    description:
      "Has the highest level of access, can perform any action across the platform, including system-level management.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: false,
    },
  },
];

export const permissions = [
  {
    id: 1,
    permission: "Read",
    description: "Allows reading of data",
  },
  {
    id: 2,
    permission: "Write",
    description: "Allows writing of data",
  },
  {
    id: 3,
    permission: "Execute",
    description: "Allows execution of operations",
  },
];
