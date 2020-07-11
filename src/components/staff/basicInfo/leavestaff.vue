<template>
  <div class="page" >
    <div class="pb-xlg h-100" style="margin-left: 40%">

      <Widget  class="widget-auth " title="<h3 class='mt-0'>员工离职申请</h3>" customHeader >
        <p class="widget-auth-info">

        </p>
        <form class="mt" @submit.prevent="submit" >
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" ref="email" required type="text" name="email" placeholder="职工编号"/>
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="text" name="password"  placeholder="姓名"/>
          </div> <div class="form-group">
          <input class="form-control no-border" ref="password" required type="text" name="password"  placeholder="性别"/>
        </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="text" name="password" placeholder="隶属部门"/>
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="text" name="password" placeholder="在职岗位"/>
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="text" name="password" placeholder="上岗日期"/>
          </div>
          <div class="form-group">
            <p>离职理由</p>
             <textarea class="form-control no-border" placeholder="不少于200字"></textarea>
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">申请</b-button>

        </form>

      </Widget>
    </div>

  </div>
</template>

<script>
    export default {
        name: "leavestaff"
    }
</script>

<style scoped>

</style>
