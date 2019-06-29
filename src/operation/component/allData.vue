<template>
  <div id="all_data">
    <!--数据展示部分-->
    <v-table
      is-horizontal-resize
      column-width-drag
      style="width:100%"
      :columns="columns"
      :table-data="tableData"
      :row-click="showFare"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
      :cell-edit-done="cellEditDone"
    ></v-table>
    <!--费用部分展示-->
    <Modal
      v-model="modal"
      width="1500px"
      title="费用详情"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="total-fare" v-if="modal">
        <!--应收费用-->
        应收费用
        <v-table
          is-horizontal-resize
          column-width-drag
          style="width:100%"
          :columns="fare.should_pay.columns"
          :table-data="fare.should_pay.tableData"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          :cell-edit-done="cellEditDone"
        ></v-table>
        <!--司机应付费用-->
        司机应付费用
        <v-table
          is-horizontal-resize
          column-width-drag
          style="width:100%"
          :columns="fare.car_pay.columns"
          :table-data="fare.car_pay.tableData"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          :cell-edit-done="cellEditDone"
        ></v-table>
        <!--现场合计-->
        现场合计
        <v-table
          is-horizontal-resize
          column-width-drag
          style="width:100%"
          :columns="fare.spot_pay.columns"
          :table-data="fare.spot_pay.tableData"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          :cell-edit-done="cellEditDone"
        ></v-table>
        <!--其他-->
        其他
        <v-table
          is-horizontal-resize
          column-width-drag
          style="width:100%"
          :columns="fare.other_pay.columns"
          :table-data="fare.other_pay.tableData"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          :cell-edit-done="cellEditDone"
        ></v-table>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "data",
    data () {
      return {
        modal: false,
        tableData: [
          {"name":"赵伟","tel":"156*****1987","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟","tel":"182*****1538","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟","tel":"161*****0097","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"周伟","tel":"197*****1123","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟","tel":"183*****6678","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
        ],
        columns:  [
          {field: 'fare', title: '费用', width: 40, titleAlign: 'center',columnAlign:'center',isEdit:false,isResize:true},
          {field: 'tel', title: '日期', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
          {field: 'hobby', title: '委托人', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
          {field: 'address', title: '公司联系人', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '开船日', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '详细装货地点', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '箱型', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '承运人', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '船名', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '提单号', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '提单状态', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '箱号', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '封号', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '皮箱重量', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '目的港', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '提箱时间', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '提箱位置', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '状态', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '集港时间', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '码头', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '车牌号', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '司机电话', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '回箱位置', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
          {field: 'address', title: '进/出', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},


        ],
        fare: {
          should_pay: {
            tableData: [
              {"name":"赵伟","tel":"156*****1987","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
              {"name":"李伟","tel":"182*****1538","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
              {"name":"孙伟","tel":"161*****0097","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"}
            ],
            columns:  [
              {field: 'address', title: '运费', width: 100, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'tel', title: '过磅费', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'hobby', title: '多地装箱', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'address', title: '压箱费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '压车时间', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '堆场回空费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '回空运费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '船放费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '滞箱费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '转船费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '报关费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '买单费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '铅封费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '验货费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '倒箱费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '其他', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '合计', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '备注', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true}
            ],
          },
          car_pay: {
            tableData: [
              {"name":"李伟","tel":"182*****1538","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
              {"name":"孙伟","tel":"161*****0097","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"}
            ],
            columns:  [
              {field: 'address', title: '集港司机车号', width: 100, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'address', title: '倒短司机车号', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'address', title: '集港费', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'address', title: '倒短费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '运费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '过磅费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '提箱小费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '东疆提箱', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '东疆落箱', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '高速费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '代垫运抵费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '压车费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '压车时间', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '车辆回空运费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '堆场回空费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '多地装箱', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '落外边', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '其他费用', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '备注', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true}
            ],
          },
          spot_pay: {
            tableData: [
              {"name":"赵伟","tel":"156*****1987","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
              {"name":"李伟","tel":"182*****1538","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
              {"name":"孙伟","tel":"161*****0097","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"}
            ],
            columns:  [
              {field: 'address', title: '换单人', width: 40, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'tel', title: '换单费', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'hobby', title: '退还单费', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'address', title: '滞箱费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '滞箱天数', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '退还单费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '未使用小票位置', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '船公司', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
            ],
          },
          other_pay: {
            tableData: [
              {"name":"李伟","tel":"182*****1538","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
              {"name":"孙伟","tel":"161*****0097","fare":"详情","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"}
            ],
            columns:  [
              {field: 'address', title: '佣金', width: 100, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'tel', title: '税金', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'hobby', title: '船放费', width: 120, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
              {field: 'address', title: '转船费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '码头堆存存放费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '铅封费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '定箱号费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
              {field: 'address', title: '报关费', width: 120, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
            ],
          }
        }
      }
    },
    methods: {
      cellEditDone(newValue,oldValue,rowIndex,rowData,field){
        this.tableData[rowIndex][field] = newValue;
        // 接下来处理你的业务逻辑，数据持久化等...
      },
      showFare(rowIndex, columnName, rowData) {
        if (rowData.field === 'fare') {
          this.modal = true
        }
      },
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    }
  }
</script>

<style lang="stylus">


</style>
