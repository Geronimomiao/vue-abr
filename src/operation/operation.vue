<template>
  <div id="operation">
    <div class="operation-top">
      <!--排车模块-->
      <div class="item">
        <car></car>
      </div>

      <!--提单模块-->
      <div class="item">
        <order></order>
      </div>

      <!--箱型模块-->
      <div class="item">
        <box></box>
      </div>

      <!--注意事项-->
      <div class="item">
        <tip></tip>
      </div>
    </div>

    <!--数据展示部分-->
    <div class="operation-bottom">

      <!--查询条件-->
      <Form label-position="right" :label-width="75" inline>
        <FormItem label="产装日期">
          <Input></Input>
        </FormItem>
        <FormItem label="提单号">
          <Input></Input>
        </FormItem>
        <FormItem label="箱号">
          <Input></Input>
        </FormItem>
        <FormItem label="公司">
          <Input></Input>
        </FormItem>
        <FormItem label="操作">
          <Input></Input>
        </FormItem>
        <FormItem label="承运人">
          <Input></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">查询</Button>
        </FormItem>
      </Form>

      <!--功能项切换-->
      <Tabs value="name1">
        <TabPane label="全部订单" name="name1">
          <abr-data></abr-data>
        </TabPane>
        <TabPane label="今日" name="name2">
          <today-data></today-data>
        </TabPane>
        <TabPane label="生成表单" name="name3">
          <get-form></get-form>
        </TabPane>
      </Tabs>

    </div>
  </div>
</template>

<script>

  import car from './component/car'
  import AbrData from './component/allData'
  import order from './component/order'
  import tip from './component/tip'
  import box from './component/box'
  import getForm from './component/getForm'
  import todayData from './component/todayData'

  export default {
    name: "operation",
    components: {
      car,
      AbrData,
      order,
      tip,
      box,
      getForm,
      todayData
    },
    data() {
      return {}
    },
  }

</script>

<style lang="stylus">

  #operation
    .operation-top
      display flex
      .item
        padding: 0.4rem
        flex 1
    .operation-bottom
      margin-bottom: 3rem
      .ivu-form-item
        margin: 0
        margin-top: 0.8rem
      .v-table-rightview
        width: 100% !important
      .v-table-header-row
        background-color: #f8f8f9
</style>
