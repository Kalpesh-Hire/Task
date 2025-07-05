const headerLinks = [
  { title: 'Home', route: '/home' },
  { title: 'Service', route: '/service' },
  { title: 'Analysis', route: '/anylysis' },
  { title: 'Reports', route: '/reports' },
];

const sidebarLinks = {
  Home: [
    { title: 'Education report', route: '/home/edureport' },
    { title: 'Time Report', route: '/home/time' },
    { title: 'Analytics', route: '/home/notifications' }
  ],
  Service: [
    { title: 'Previous Detail', route: '/profile/previous' },
    { title: 'Time Manage', route: '/profile/time-manage' },
    { title: 'Task Manage', route: '/profile/task-manage' }
  ],
  Analysis: [
    { title: 'Time Analysis', route: '/analysis/time-analysis' },
    { title: 'Task', route: '/analysis/task-analysis' },
    { title: 'Security', route: '/analysis/security' }
  ],
  Reports: [
    { title: 'Sales', route: '/reports/sales' },
    { title: 'Inventory', route: '/reports/inventory' },
    { title: 'User Activity', route: '/reports/activity' }
  ]
};
export {headerLinks, sidebarLinks}