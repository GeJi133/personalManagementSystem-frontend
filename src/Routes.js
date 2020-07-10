import Vue from 'vue';
import Router from 'vue-router';
import manage from '@/components/Layout/manage';

import Login from '@/components/page/account/Login.vue';
import Layout from '@/components/Layout/Layout';
import resetPassword from '@/components/page/account/resetPassword';
import viewDepartment from '@/components/page/department/viewDepartment';
import departmentList from '@/components/page/department/departmentList.vue';
import manageDepartment from '@/components/page/department/manageDepartment.vue';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';
import viewJob from '@/components/page/department/viewJob';
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
import departmentReport from '@/components/page/report/departmentReport';
import entry from '@/components/page/report/entry';
import jobReport from '@/components/page/report/jobReport';
import personalReport from '@/components/page/report/personalReport';
import dimission from '@/components/page/report/dimission';


import career from '@/components/page/personInfo/career';
import language from '@/components/page/personInfo/language';
import family from '@/components/page/personInfo/family';

//personnel
import confimationcontrol from "./components/page/personnel/confimationcontrol";
import departmentmove from "./components/page/personnel/departmentmove";
import jobgetcontrol from "./components/page/personnel/jobgetcontrol";
import postmove from "./components/page/personnel/postmove";
import staffover from "./components/page/personnel/staffover";

import checkingIn from '@/components/page/evaluation/checkingIn';
import salary from '@/components/page/evaluation/salary';

//员工
import staff from '@/components/Layout/staff';
import staffSalary from '@/components/staff/basicInfo/salary';
import staffPerformance from '@/components/staff/basicInfo/performance';
import staffMain from '@/components/staff/main';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },

    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword,
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
          path: 'manageMain',
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
        }
        ]
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: 'manageMain',
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
          path: 'manageDepartment',
          name: 'manageDepartment',
          component: manageDepartment,
        },
        {
          path: 'viewJob',
          name: 'viewJob',
          component: viewJob,
        },
        {
          path: 'jobReport',
          name: 'jobReport',
          component: jobReport,
        },
        {
          path: 'departmentReport',
          name: 'departmentReport',
          component: departmentReport,
        },
        {
          path: 'entry',
          name: 'entry',
          component: entry,
        },
        {
          path: 'dimission',
          name: 'dimission',
          component: dimission,
        },
        {
          path: 'personalReport',
          name: 'personalReport',
          component: personalReport,
        },
        {
          path: 'career',
          name: 'career',
          component: career,
        },
        {
          path: 'language',
          name: 'language',
          component: language,
        },
        {
          path: 'family',
          name: 'family',
          component: family,
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
        {
          path: 'checkingIn',
          name: 'checkingIn',
          component: checkingIn,
        },
        {
          path: 'salary',
          name: 'salary',
          component: salary,
        },
      ],
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff,
      children: [
        {
          path: 'main',
          name: 'main',
          component: staffMain,
        },
        {
          path: 'salary',
          name: 'salary',
          component: staffSalary,
        },
        {
          path: 'performance',
          name: 'performance',
          component: staffPerformance,
        },

      ],
    },
  ],
});
