<template>
  <div id="HomePage">
    <el-container>
      <el-header>
        <div class="title">Ticket Booking System</div>
        <div class="control">
          <span>Welcome! </span>
          <el-dropdown size="medium">
            <span class="el-dropdown-link">
              Karmen<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Log Out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="avatar">
            <img src="../assets/images/protrait.png" alt="" />
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="210px">
          <el-menu router text-color="#fff">
            <el-menu-item index="/movieslist">
              <i class="el-icon-menu"></i>
              <span slot="title">Movies List</span>
            </el-menu-item>
            <el-menu-item index="/orderpage">
              <i class="el-icon-menu"></i>
              <span slot="title">Orders</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <div class="main-right el-main">
          <div class="main-title">
            <span>{{ $route.name }}</span>
          </div>
          <el-main>
            <router-view :key="$route.path"></router-view>
          </el-main>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
}
.el-header {
  z-index: 9;
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 1440px;
  background-color: #0e3637;
  color: #fff;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    margin-left: 30px;
    font-size: 28px;
    font-weight: 600;
  }
  .control {
    height: 100%;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.1rem;
      font-weight: 550;
    }
    .el-dropdown {
      cursor: pointer;
      color: $brand-accent;
    }
    .avatar {
      margin-left: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.el-aside {
  margin-top: 60px;

  text-align: center;
  line-height: 200px;
  min-height: calc(100vh - 60px);

  .el-menu {
    background-color: #071c1c;
    height: 100%;
    .el-menu-item {
      user-select: none;
      display: flex;
      align-items: center;
      &.is-active {
        color: $brand-accent;
      }
    }
  }
}

.main-right {
  margin-top: 60px;
  padding: 0 !important;
  overflow: visible !important;
  min-width: 1173px;
  .main-title {
    background-color: $brand-accent;
    width: 100%;
    height: 50px;
    top: 180px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(224, 224, 224);
    span {
      display: inline-block;
      height: 24px;
      font-size: 16px;
      margin-left: 20px;
      color: #ffffff;
      border-left: 3px solid $brand-primary;
      padding-left: 10px;
    }
  }
  .el-main {
    background-color: $brand-primary;
    color: #333;
    text-align: center;
    line-height: 20px !important;
  }
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
