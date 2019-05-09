<template>
  <div :class="typeId === 1 ? 'data_list' : 'data_else'">
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="left">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="right">
        <div class="title">{{item.title}}</div>
        <div class="size">规格：{{item.size}}</div>
        <div class="price">
          <div class="num">￥{{item.num}}</div>
          <div class="add">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artitle-list',
  props: {
    list: {
      type: Array,
      required: true
    },
    typeId: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data () {
    return {

    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
.data_list{
  width:100%;
  padding-left:30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .list{
    width:100%;
    height:240px;
    background: #fcfcfc;
    box-shadow: inset 0 -1px 0 0 #EBEBEB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      width:200px;
      height:200px;
      background: lawngreen;
      img{
        width:100%;
        height:100%;
      }
    }
    .right{
      flex:1;
      display: flex;
      flex-direction: column;
      padding:0 30px;
      box-sizing: border-box;
      .title{
        font-family: PingFangSC-Regular;
        font-size: 28px;
        color: #333333;
        line-height: 40px;
      }
      .size{
        font-family: PingFangSC-Regular;
        font-size:24px;
        color: #999999;
        line-height: 24px;
        margin:20px 0;
      }
      .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .num{
          font-family: PingFangSC-Regular;
          font-size: 32px;
          color: #333333;
          line-height: 32px;
        }
        .add{
          width:50px;
          height:50px;
          color:#fff;
          background: #5ADAD0;
          border-radius: 6px;
          text-align: center;
          line-height: 50px;
        }
      }
    }
  }
}
.data_else{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  :nth-child(odd){
    border-right:2px solid #EBEBEB;
  }
  .list{
    width:50%;
    height:520px;
    border-bottom:1px solid #EBEBEB;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding:0 38px;
    box-sizing: border-box;
    .left{
      width:100%;
      height:298px;
      margin:20px 0;
      background: lawngreen;
      border:0;
      img{
        width:100%;
        height:100%;
      }
    }
    .right{
      width:100%;
      flex:1;
      display: flex;
      flex-direction: column;
      .title{
        font-family: PingFangSC-Regular;
        font-size: 28px;
        color: #333333;
        letter-spacing: 0;
        line-height: 40px;
        border:0;
      }
      .size{
        font-family: PingFangSC-Regular;
        font-size: 24px;
        color: #999999;
        line-height: 24px;
        margin-top:14px;
        border:0;
      }
      .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border:0;
        .num{
          font-family: PingFangSC-Regular;
          font-size: 32px;
          color: #333333;
          line-height: 32px;
        }
        .add{
          width:50px;
          height:50px;
          color:#fff;
          background: #5ADAD0;
          border-radius: 6px;
          text-align: center;
          line-height: 50px;
        }
      }
    }
  }
}
</style>
