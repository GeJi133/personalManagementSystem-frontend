import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import viewDepartment from '@/components/page/department/viewDepartment';
import departmentList from '@/components/page/department/departmentList';
import Sectordepartment from "./components/page/department/Sectordepartment";
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';

//personnel
import confimationcontrol from "./components/page/personnel/confimationcontrol";
import departmentmove from "./components/page/personnel/departmentmove";
import jobgetcontrol from "./components/page/personnel/jobgetcontrol";
import postmove from "./components/page/personnel/postmove";
import staffover from "./components/page/personnel/staffover";

//chartcontrol
import departmentmovechart from "./components/page/chartcontrol/departmentmovechart";
import mouthchart from "./components/page/chartcontrol/mouthchart";
import newstaffchart from "./components/page/chartcontrol/newstaffchart";
import overstaffchart from "./components/page/chartcontrol/overstaffchart";
import postmovechart from "./components/page/chartcontrol/postmovechart";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
        {
          path: 'viewDepartment',
          name: 'viewDepartment',
          component: viewDepartment,
        },
        {
          path: 'departmentList',
          name: 'departmentList',
          component: departmentList,
        },
        {
          path: 'Sectordepartment',
          name: 'Sectordepartment',
          component: Sectordepartment,
        },
        {
          path: 'departmentmovechart',
          name: 'departmentmovechart',
          component: departmentmovechart,
        },
        {
          path: 'mouthchart',
          name: 'mouthchart',
          component: mouthchart,
        },
        {
          path: 'newstaffchart',
          name: 'newstaffchart',
          component: newstaffchart,
        },
        {
          path: 'overstaffchart',
          name: 'overstaffchart',
          component: overstaffchart,
        },
        {
          path: 'postmovechart',
          name: 'postmovechart',
          component: postmovechart,
        },
        {
          path: 'confimationcontrol',
          name: 'confimationcontrol',
          component: confimationcontrol,
        },
        {
          path: 'departmentmove',
          name: 'departmentmove',
          component: departmentmove,
        },
        {
          path: 'jobgetcontrol',
          name: 'jobgetcontrol',
          component: jobgetcontrol,
        },
        {
          path: 'postmove',
          name: 'postmove',
          component: postmove,
        },
        {
          path: 'staffover',
          name: 'staffover',
          component: staffover,
        },
      ],
    },
  ],
});
