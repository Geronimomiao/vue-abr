<template>
  <div id="adjust">
    <div class="item">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div class="item">
      <div class="check">
        <div class="selection">
          <Input placeholder="箱号：MSRU 7890723" clearable  />
        </div>
        <div class="selection">
          <Input placeholder="封号： cn9823yujk3" clearable  />
        </div>
      </div>
      <div class="bill"></div>
      <div class="check">
        <div class="selection">
          <Button type="primary" long>上一张</Button>
        </div>
        <div class="selection">
          <Button type="primary" long>下一张</Button>
        </div>
        <div class="selection">
          <Button type="primary" long>确认</Button>
        </div>
        <div class="selection">
          <Button type="primary" long>下一箱</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "adjust",
    data() {
      return {
        columns1: [
          {
            title: '提单号',
            key: 'name'
          },{
            title: '封号',
            key: 'name'
          },
          {
            title: '箱号',
            key: 'age'
          },
          {
            title: '车号',
            key: 'address'
          },
          {
            title: '电话',
            key: 'address'
          }
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
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #adjust
    display: flex

    .item
      margin: 2rem
      height: 70vh
      flex 1
      .bill
        background-color: #999
        height: 50vh
      .check
        display: flex
        .selection
          flex 1

</style>
