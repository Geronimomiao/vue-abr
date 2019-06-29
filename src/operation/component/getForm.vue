<template>
  <div id="get_form">
    <Table :columns="columns1" :data="data1" border></Table>
  </div>
</template>

<script>
  export default {
    name: "getForm",
    data() {
      return {
        columns1: [
          {
            title: '客户名',
            key: 'name'
          },
          {
            title: '提单号',
            key: 'age'
          },
          {
            title: 'Action',
            key: 'action',
            width: 500,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary'
                  },
                  style: {
                    marginRight: '0.7rem'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '生成Eclp'),
                h('Button', {
                  props: {
                    type: 'primary'
                  },
                  style: {
                    marginRight: '0.7rem'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '生成箱子表'),
                h('Button', {
                  props: {
                    type: 'primary'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '查看详细信息')
              ]);
            }
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
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">

  #get_form
    .choice
      height: 15vh
      display: flex
      justify-content center
      align-items: center
      flex-direction column

      .item
        padding-bottom: 0.5rem

</style>
