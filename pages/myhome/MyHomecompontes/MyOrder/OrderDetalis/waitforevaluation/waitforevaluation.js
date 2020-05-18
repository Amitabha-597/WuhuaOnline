// pages/myhome/MyHomecompontes/MyOrder/OrderDetalis/OrderDetalis..js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showRefund:false,
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
        price: "166.00",
        coupon: "00.00",
        Tips: '包含',
        totalprice: '166.00'
      },
      OrderInfor: {
        ordernumber: '9876543211025666',
        orderdate: '2020-03-28 16:00'
      },
  
    }],
      
    Coupon: [{
      id: 1,
      text: '服务质量差',
      value: '10.00 省20：组合优惠',
      type: 'warn',
    },
    {
      id: 2,
      text: '店铺服务描述与实际严重不符',
      value: '10.00 省20：组合优惠'

    },
    {
      id: 3,
      text: '服务人员态度差',
      value: '20.00 省30：满减活动'
    },
    {
      id: 4,
      text: '其他原因',
      value: '20.00 省30：满减活动'
    },

  ],


  },

  toApplyRefund(){
   wx.navigateTo({
     url: './ApplyRefund/ApplyRefund',
   })
    
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