<template>
  <div id="form_bottom">
    <Form inline>
      <FormItem label="箱型">
        <Input :placeholder="box_info.box_type" disabled></Input>
      </FormItem>
      <FormItem label="承运人">
        <Input v-model="box_info.carrier"></Input>
      </FormItem>
      <FormItem label="导箱时间">
        <Input v-model="box_info.guide_box_time"></Input>
      </FormItem>
      <FormItem label="产装时间">
        <Input icon="md-arrow-round-down" v-model="box_info.production_time" @on-click="copy('time')"></Input>
      </FormItem>
      <FormItem
        v-for="(item, index) in box_info.locations"
        v-if="item.status"
        :key="index"
        :label="'产装地点' + item.index"
      >
        <Input type="text" icon="md-arrow-round-down" v-model="item.value" @on-click="copy('location', index+1)"></Input>
      </FormItem>
      <FormItem>
        <Button @click="handleRemove(index)" class="del">Delete</Button>
        <Button type="dashed" long @click="handleAdd" icon="md-add">增加地址</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "FormBottom",
    props: ["message", "index"],
    data() {
      return {
        box_info: {   // 单个箱子所有信息
          box_index: this.index,  // 每个箱子的标示
          box_type: this.message,
          carrier: '',
          guide_box_time: '',
          production_time: '',
          locations: [
            {
              value: '',
              index: 1,
              status: 1
            }
          ]
        }
      }
    },
    methods: {
      handleAdd() {
        this.index++;
        this.box_info.locations.push({
          value: '',
          index: this.index,
          status: 1
        });
      },
      copy(type, ...i) {
        // console.log(...i);
        this.$emit('copyToBottom', type, this.box_info, ...i);
      }
    },
    mounted() {
      this.$emit('getBoxType', this.box_info);
    },
    updated() {
      this.$emit('getBoxType', this.box_info);
    },
    beforeDestroy() {
      // 组件销毁时 删除父组件 多余信息
      // console.log(22)
    }
  }
</script>

<style lang="stylus">

  #form_bottom
    .del
      visibility: hidden

</style>
