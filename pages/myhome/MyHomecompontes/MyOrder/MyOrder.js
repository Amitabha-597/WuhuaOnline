// pages/myhome/MyHomecompontes/MyOrder/MyOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    orderList: [{
        OrderTypes: 1,
        OrderNo: 98000012345678955,
        OrderType: '待付款',
        serviceContent: '90-150㎡室内清洁打扫一次',
        company: '勤鸽家政服务有限公司',
        serviceType: '清洁清洗',
        adress: '五华县',
        price: '166.00',
        num: 1,
        operationA: '取消订单',
        operationB: '立即付款',
        url: 'waitforpay/waitforpay'

      }, {
        OrderTypes: 2,
        OrderNo: 980000123456789,
        OrderType: '待上门',
        serviceContent: '90-150㎡室内清洁打扫一次',
        company: '勤鸽家政服务有限公司',
        serviceType: '清洁清洗',
        adress: '五华县',
        price: '166.00',
        num: 1,
        operationA: '提醒上门',
        operationB: '已经上门',
        url: 'waitfordoor/waitfordoor'

      },
      {
        OrderTypes: 3,
        OrderNo: 980000123456789,
        OrderType: '待服务',
        serviceContent: '90-150㎡室内清洁打扫一次',
        company: '勤鸽家政服务有限公司',
        serviceType: '清洁清洗',
        adress: '五华县',
        price: '166.00',
        num: 1,
        operationA: '投诉服务',
        operationB: '确认完成',
        url: 'waitforservice/waitforservice'

      },

      {
        OrderTypes: 4,
        OrderNo: 980000123456789,
        OrderType: '待评价',
        serviceContent: '90-150㎡室内清洁打扫一次',
        company: '勤鸽家政服务有限公司',
        serviceType: '清洁清洗',
        adress: '五华县',
        price: '166.00',
        num: 1,
        operationA: '',
        operationB: '立即评价',
        url: 'waitforevaluation/waitforevaluation'

      },



    ]
  },
  toOrderDetalis(e) {
    let OrderType = e.currentTarget.dataset.ordertypes
    wx.navigateTo({
      url: './OrderDetalis/'+OrderType+''
    })
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 5
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let selectIndex=options.ordertype
    if (selectIndex !== undefined ) {
      this.setData({
        currentIndex: selectIndex
      })
    }
   

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