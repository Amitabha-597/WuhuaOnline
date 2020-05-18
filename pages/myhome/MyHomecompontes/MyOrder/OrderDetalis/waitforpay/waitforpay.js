// pages/myhome/MyHomecompontes/MyOrder/OrderDetalis/OrderDetalis..js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCancelOrder: false,
    waitforpay: [{
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
        orderOperB: '立即付款',
      }
    }],
    Coupon: [{
        id: 1,
        text: '我不需要了',
        value: '10.00 省20：组合优惠',
        type: 'warn',
      },
      {
        id: 2,
        text: '信息填写错误，需要重新下单',
        value: '10.00 省20：组合优惠'

      },
      {
        id: 3,
        text: '商家未接单',
        value: '20.00 省30：满减活动'
      },
      {
        id: 4,
        text: '其他原因',
        value: '20.00 省30：满减活动'
      },

    ],


  },
  CancelOrder() {
    this.setData({
      showCancelOrder: !this.data.showCancelOrder
    })

  },
  close: function () {
    this.setData({
      showCancelOrder: false
    })
  },
  btnClick(e) {
    console.log(e)
    this.close()
    this.reason()
  },

  reason(e) {
    // console.log(e);

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