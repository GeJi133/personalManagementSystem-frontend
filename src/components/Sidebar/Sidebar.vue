<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app"><span class="primary-word">Sing</span> App</router-link>
      </header>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="主页"
            link="/app/dashboard"
            iconName="flaticon-home"
            index="dashboard"
            isHeader
        />
        <NavLink
                :activeItem="activeItem"
                header="员工管理"
                link="/app/components"
                iconName="flaticon-network"
                index="components"
                :childrenLinks="[
              { header: 'Charts', link: '/app/components/charts' },
              { header: 'Icons', link: '/app/components/icons' },
              { header: 'Maps', link: '/app/components/maps' },
            ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="岗位管理"
                link="/app/components"
                iconName="flaticon-network"
                index="components"
                :childrenLinks="[
              { header: '部门管理', link: '/app/departmentList' },
              { header: '部门详情', link: '/app/viewDepartment' },
              { header: '部门分类', link: '/app/Sectordepartment' },
            ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="人事管理"
                link="/app/components"
                iconName="flaticon-network"
                index="components"
                :childrenLinks="[
              { header: '员工入职管理', link: '/app/jobgetcontrol' },
              { header: '试用期管理', link: '/app/confimationcontrol' },
              { header: '部门调动管理', link: '/app/departmentmove' },
              { header: '岗位调动管理', link: '/app/postmove' },
              { header: '员工离职管理', link: '/app/staffover' },

            ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="报表管理"
                link="/app/components"
                iconName="flaticon-network"
                index="components"
                :childrenLinks="[
              { header: '新聘员工表', link: '/app/newstaffchart' },
              { header: '离职员工表', link: '/app/overstaffchart' },
              { header: '部门调动员工表', link: '/app/postmovechart' },
              { header: '岗位调动员工表', link: '/app/departmentmovechart' },
              { header: '人事月表', link: '/app/mouthchart' },

            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Components"
            link="/app/components"
            iconName="flaticon-network"
            index="components"
            :childrenLinks="[
              { header: 'Charts', link: '/app/components/charts' },
              { header: 'Icons', link: '/app/components/icons' },
              { header: 'Maps', link: '/app/components/maps' },
              {header:'Notifications',link:'/app/notifications'},
              {header:'Tables Basic',link: '/app/tables'},
              {header:'Typography',link: '/app/typography'},
              {header:'DashBoard',link: '/app/dashboard'}

            ]"
        />
      </ul>
      <p>
      <h5 class="navTitle">
        LABELS
        <a class="actionLink">
          <i class="la la-plus float-right"/>
        </a>
      </h5>
      <ul class="sidebarLabels">
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger mr-2"/>
            <span class="labelName">My Recent</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary mr-2"/>
            <span class="labelName">Starred</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle mr-2"/>
            <span class="labelName">Background</span>
          </a>
        </li>
      </ul>
      <h5 class="navTitle">
        PROJECTS
      </h5>
      <div class="sidebarAlerts">
        <b-alert
            v-for="alert in alerts"
            :key="alert.id"
            class="sidebarAlert" variant="transparent"
            show dismissible
        >
          <span>{{alert.title}}</span><br/>
          <b-progress class="sidebarProgress progress-xs mt-1"
                      :variant="alert.color" :value="alert.value" :max="100"/>
          <small>{{alert.footer}}</small>
        </b-alert>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
