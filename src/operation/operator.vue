<template>
  <div id="operator">
    <div class="form">
      <Form label-position="right" :label-width="85">
        <div class="division">
          <div class="item">
            <FormItem label="公司名称">
              <Input v-model="box_data.corporate_name"></Input>
            </FormItem>
          </div>
          <div class="item">
            <FormItem label="操作名">
              <Input v-model="box_data.order_name"></Input>
            </FormItem>
          </div>
        </div>
        <FormItem label="船名/航次">
          <Input v-model="box_data.name_voyage"></Input>
        </FormItem>
        <FormItem label="提单号">
          <Input v-model="box_data.bill_number"></Input>
        </FormItem>
        <div class="division">
          <div class="item">
            <FormItem label="目的港">
              <Input v-model="box_data.destination_port"></Input>
            </FormItem>
          </div>
          <div class="item">
            <FormItem label="作业码头">
              <Select v-model="box_data.wharf">
                <Option value="太平洋码头">太平洋码头</Option>
                <Option value="集装箱码头">集装箱码头</Option>
                <Option value="东方海码头">东方海码头</Option>
                <Option value="欧亚国际码头">欧亚国际码头</Option>
                <Option value="五洲国际码头">五洲国际码头</Option>
                <Option value="联盟国际码头">联盟国际码头</Option>
              </Select>
            </FormItem>
          </div>
        </div>

        <div class="selection">
          <CheckboxGroup>
            <Checkbox label="过磅" v-model="box_data.weigh"></Checkbox>
            <Checkbox label="拍照" v-model="box_data.photograph"></Checkbox>
            <Checkbox label="导箱" v-model="box_data.change_box"></Checkbox>
          </CheckboxGroup>
        </div>

        <div class="choice">

          <div class="item">
            <!--时间部分-->
            <Form inline>
              <FormItem label="开船时间">
                <Input></Input>
              </FormItem>
              <FormItem label="集港时间">
                <Input></Input>
              </FormItem>
              <FormItem label="免用箱期">
                <Input></Input>
              </FormItem>
              <!--<FormItem label="要箱号时间">-->
              <!--<Input></Input>-->
              <!--</FormItem>-->
            </Form>
          </div>

          <!--箱型部分-->
          <div class="item">
            <Form inline>
              <FormItem v-for="(type, i) in box_types" :key="i" :label="type.name">
                <InputNumber :max="10" :min="1" v-model="type.num"></InputNumber>
              </FormItem>
              <FormItem label="添加箱型" v-if="add">
                <Button icon="ios-add" type="dashed" @click.native="willAddType"></Button>
              </FormItem>
              <FormItem label="箱型" v-if="!add">
                <Input  style="width: 120px" @on-click="addType" icon="md-add-circle" v-model="box_type" ></Input>
              </FormItem>
            </Form>
          </div>
        </div>

      </Form>
    </div>

    <!--箱子具体信息-->
    <div v-for="type in box_types">
      <form-bottom v-for="n in parseInt(type.num)" :key="n" :message="type.name" :index="n" @getBoxType="getBoxType" @copyToBottom="copyToBottom"></form-bottom>
    </div>


    <!--提交部分-->
    <div class="end">
      <Form>
        <FormItem>
          <Button type="primary" @click="save">Submit</Button>
          <Button style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>

  import FormBottom from './component/FormBottom'
  import url from '../../util/url'
  import { put } from '../../util/request'

  export default {
    name: "operator",
    components: {
      FormBottom
    },
    data() {
      return {
        default_num: 0,
        box_push: true, // 判断是否向 box_type_infos 追加新的信息
        box_types: [
          {name: '20GP', num: 0},
          {name: '40HC', num: 0},
          {name: '40OT', num: 0},
          {name: '45HC', num: 0},
          {name: '40GP', num: 0},
        ],
        selection: [],
        add: true,
        box_type: '',
        box_data: {
          corporate_name: '', // 公司名称
          order_name: '', // 操作名
          name_voyage: '',
          bill_number: '',
          destination_port: '',
          wharf: '',
          sailing_day: '',
          set_port_time: '',
          destination_port: '',
          exemption_period: '',
          weigh: false,
          photograph: false,
          change_box: false,
          box_type_infos: [],
        }
      }
    },
    watch: {
      // 当输入提单号时自动将 船名中空格清除
      'box_data.bill_number': {
        handler(newName, oldName) {
          // console.log()
          this.box_data.name_voyage = this.box_data.name_voyage.replace(/\s+/g,"")
        },
        immediate: true,
      }
    },
    methods: {
      willAddType() {
        this.add = false;
      },
      addType() {
        // console.log(1);
        this.add = true;
        this.box_types.push({name: this.box_type, num: 0});
      },
      // 将每个箱型的信息穿入父组件
      getBoxType(value) {
        // console.log(value); // 接受子组件传来的值

        if (this.box_data.box_type_infos) {
          this.box_push = this.box_data.box_type_infos.find(info => info.box_index===value.box_index && info.box_type===value.box_type);  // 初始化数据需要
          if (!this.box_push) {
            this.box_data.box_type_infos.push(value);   // 不存在则添加
          } else {
            this.box_data.box_type_infos = this.box_data.box_type_infos.map(info => {   // 存在则修改
              if (info.box_index===value.box_index && info.box_type===value.box_type) {
                return value
              } else {
                return info
              }
            })
          }
        } else {
          this.box_data.box_type_infos.push(value);   // 不存在则添加
        }

      },
      // 向下复制功能实现
      copyToBottom(type, info, ...i) {
        // console.log(info);
        let {box_index, box_type, production_time, locations} = info;
        // console.log(box_type, box_index, production_time, locations);
        if (type === 'time') {
          let {production_time} = this.box_data.box_type_infos.find(info => info.box_index===box_index && info.box_type===box_type);
          // console.log(production_time)
          this.box_data.box_type_infos = this.box_data.box_type_infos.map(item => {
            if (item.box_type === box_type && item.box_index > box_index) {
              item.production_time = production_time;
              return item
            } else {
              return item
            }
          })
        } else if (type === 'location') {
          let locations = this.box_data.box_type_infos.find(info => info.box_index===box_index && info.box_type===box_type).locations;
          // console.log(i[0])
          let desp = locations.find(location => location.index === i[0]).value;
          // console.log(desp);
          this.box_data.box_type_infos = this.box_data.box_type_infos.map(item => {
            if (item.box_type === box_type && item.box_index > box_index) {
              item.locations[i[0]-1].value = desp;
              return item
            } else {
              return item
            }
          })
        }
      },
      save() {
        // this.axios.put('/api/order/add_order', this.box_data).then(res => console.log(res));
        put(url.operatorSubmit(), this.box_data).then(res => console.log(res));
      }
    }
  }
</script>

<style lang="stylus">
  #operator
    .ivu-form-item
      margin-bottom: 10px
    .form
      width: 75%
      .division
        display: flex

        .item
          flex 1
      .choice
        display: flex
        justify-content space-between
      .selection
        text-align: right

</style>
