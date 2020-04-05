import { NavLinkType } from '../../../commons/types/navLink';
import {ReactComponent as DashboardIcon} from '../../../assets/icons/Dahsboard_icon.svg';
import {ReactComponent as CategoryIcon} from '../../../assets/icons/Category_icon.svg';
import {ReactComponent as FiltersIcon} from '../../../assets/icons/Filters_icon.svg';
import {ReactComponent as KarmaIcon} from '../../../assets/icons/Karma_icon.svg';

const NAV_LINKS: NavLinkType[] = [{
        id: 0,
        title: 'Dashboard',
        to: '/',
        Icon: DashboardIcon,
    },
    {
        id: 1,
        title: 'Categories',
        to: '/categories',
        Icon: CategoryIcon,
    },
    {
        id: 2,
        title: 'Karma',
        to: '/karma',
        Icon: KarmaIcon,
    },
    {
        id: 3,
        title: 'Filters',
        to: '/filters',
        Icon: FiltersIcon,
    }
];

export default NAV_LINKS;
