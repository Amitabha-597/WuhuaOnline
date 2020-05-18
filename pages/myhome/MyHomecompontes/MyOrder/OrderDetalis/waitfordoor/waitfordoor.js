// pages/myhome/MyHomecompontes/MyOrder/OrderDetalis/OrderDetalis..js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordertypelist: [],
    waitforpay: [{
      orderType: '待付款',
      icon: 'waitforpay',
      orderTips: '请在14:59完成支付 ',
      Orderstate: {
        name: '欧阳妮妮',
        tel: '12345678910',
        adress: '广东省梅州市五华县华兴北路嘉福苑4栋1单元602'
      },
      CommodityList: {

        conent: '90-150㎡室内清洁打扫一次',
        name: '勤鸽家政服务有限公司',
        sever: '清洁清洗',
        adress: '五华县',
        price: 166.00,
        num: 1,

      },

      Bill: {
        operation: true,
        price: "166.00",
        coupon: "00.00",
        Tips: '包含',
        totalprice: '166.00'
      },
      OrderInfor: {
        ordernumber: '9876543211025666',
        orderdate: '2020-03-28 16:00'
      },
      orderOperation: {
        orderOperA: '取消订单',
        Eventname:'CancelOrder',
        orderOperB: '立即付款',
      }
    }],
    waitfordoor: [{
      orderType: '待上门',
      icon: 'waitfordoor',
      orderTips: '服务人员会在预约时间上门服务，请稍等一下 ',
      Orderstate: {
        severstate1: '已经安排保洁员:',
        name: '方秀英',
        tel: '18212345678',
        severstate2: '为您上门服务'
      },
      CommodityList: {

        conent: '90-150㎡室内清洁打扫一次',
        name: '勤鸽家政服务有限公司',
        sever: '清洁清洗',
        adress: '五华县',
        price: 166.00,
        num: 1,

      },
      severWeater: {
        name: '方秀英',
        tel: '18212345678',
        post: '保洁员',
        severdate: '2020-03-28 16:00'
      },
      Bill: {
        operation: false,
        price: "166.00",
        coupon: "00.00",
        Tips: '包含',
        totalprice: '166.00'
      },
      OrderInfor: {
        ordernumber: '9876543211025666',
        orderdate: '2020-03-28 16:00'
      },
      orderOperation: {
        orderOperA: '提醒上门',
        orderOperB: '已经上门',
      }
    }],
    waitforservice: [{
      orderType: '待服务',
      icon: 'waitforservice',
      orderTips: '服务人员已经上门，马上为您服务 ',
      Orderstate: {
        severstate1: '保洁员：',
        name: '方秀英',
        tel: '18212345678',
        severstate2: '为您服务'
      },
      CommodityList: {

        conent: '90-150㎡室内清洁打扫一次',
        name: '勤鸽家政服务有限公司',
        sever: '清洁清洗',
        adress: '五华县',
        price: 166.00,
        num: 1,

      },
      severWeater: {
        name: '方秀英',
        tel: '18212345678',
        post: '保洁员',
        severdate: '2020-03-28 16:00'
      },
      Bill: {
        operation: false,
        price: "166.00",
        coupon: "00.00",
        Tips: '包含',
        totalprice: '166.00'
      },
      OrderInfor: {
        ordernumber: '9876543211025666',
        orderdate: '2020-03-28 16:00'
      },
      orderOperation: {
        orderOperA: '投诉服务',
        orderOperB: '确认完成',
      }
    }],
    waitforevaluation: [{
      orderType: '待评价',
      icon: 'waitforevaluation',
      orderTips: '快去点评此次服务吧！ ',
      Orderstate: {
        severstate1: '已经确认订单号：',
        name: '',
        tel: '980000123456789',
        severstate2: '家政服务完成'
      },
      CommodityList: {

        conent: '90-150㎡室内清洁打扫一次',
        name: '勤鸽家政服务有限公司',
        sever: '清洁清洗',
        adress: '五华县',
        price: 166.00,
        num: 1,

      },
      severWeater: {
        name: '方秀英',
        tel: '18212345678',
        post: '保洁员',
        severdate: '2020-03-28 16:00'
      },
      Bill: {
        operation: true,
        price: "166.00",
        coupon: "00.00",
        Tips: '包含',
        totalprice: '166.00'
      },
      OrderInfor: {
        ordernumber: '9876543211025666',
        orderdate: '2020-03-28 16:00'
      },
      orderOperation: {
        orderOperB: '立即评价',
      }
    }],



  },
  CancelOrder(){
    console.log(1);
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})