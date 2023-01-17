// assets
import { DashboardOutlined, ChromeOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    ChromeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'testpage',
            title: 'Test Page',
            type: 'item',
            url: '/testpage',
            icon: icons.ChromeOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
