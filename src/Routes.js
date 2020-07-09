import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import viewDepartment from '@/components/page/department/viewDepartment';
import departmentList from '@/components/page/department/departmentList.vue';
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

import checkingIn from '@/components/page/evaluation/checkingIn';
import salary from '@/components/page/evaluation/salary';

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
  ],
});
