<template>
  <div id="index">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1" >
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 4
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider :style="{background: '#fff'}" ref="side_r" collapsible :collapsed-width="10" v-model="isCollapsed">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  操作模块
                </template>
                <MenuItem name="1-1" @click.native="goOperator">操作录入</MenuItem>
                <MenuItem name="1-2" @click.native="goData">数据操作</MenuItem>
                <MenuItem name="1-3" @click.native="goAdjust">审核信息</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  统计模块
                </template>
                <MenuItem name="2-1">汇总统计</MenuItem>
                <MenuItem name="2-2">各公司统计</MenuItem>
                <MenuItem name="2-3">固定门点</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  系统设置模块
                </template>
                <MenuItem name="3-1" @click.native="collapsedSider">用户权限设置</MenuItem>
                <MenuItem name="3-2">各公司统计</MenuItem>
              </Submenu>
            </Menu>
          </Sider>

          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" class="main">
              <router-view/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isCollapsed: false
      }
    },
    methods: {
      goOperator() {
        this.$router.push({
          name: 'operator'
        })
      },
      goData() {
        this.$router.push({
          name: 'operation'
        })
      },
      goAdjust() {
        this.$router.push({
          name: 'adjust'
        })
      },

    }
  }
</script>

<style lang="stylus">
  #index
    .layout
      height: 100vh
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      .ivu-layout-sider
        overflow: hidden
      .ivu-layout
        height: 95vh

    .layout-logo
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;

    .layout-nav
      width: 420px;
      margin: 0 auto;
      margin-right: 20px;

</style>
