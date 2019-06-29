<template>
  <div id="car">
    排车
    <Table :columns="columns4" border :data="data1"></Table>
  </div>
</template>

<script>
  export default {
    name: "car",
    data () {
      return {
        columns4: [
          {
            title: '产装时间',
            key: 'name'
          },
          {
            title: '箱型',
            key: 'age'
          },{
            title: '产装地址',
            key: 'age'
          },{
            title: '承运人',
            key: 'age'
          },
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          }, {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          }, {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus">

</style>
