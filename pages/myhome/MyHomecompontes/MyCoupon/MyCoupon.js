// pages/myhome/MyHomecompontes/MyOrder/MyOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    notusedlist: [{
        id: 1,
        reduction: '800',
        money: 60,
        name: '某家政服务产品优惠券',
        shop: '适用于家政协会认证金牌店铺',
        date: '2020.03.08-2020.04.08'
      },
      {
        id: 2,
        reduction: '800',
        money: 100,
        name: '某家政服务产品优惠券',
        shop: '适用于家政协会认证金牌店铺',
        date: '2020.03.08-2020.04.09'
      },
      {
        id: 3,
        reduction: '800',
        money: 100,
        name: '某家政服务产品优惠券',
        shop: '适用于家政协会认证金牌店铺',
        date: '2020.03.08-2020.04.09'
      },
    ],
    
    UsedList: [{
      id: 1,
      reduction: '800',
      money: 60,
      name: '某家政服务产品优惠券',
      shop: '适用于家政协会认证金牌店铺',
      date: '2020.03.08-2020.04.08'
    },
    {
      id: 2,
      reduction: '800',
      money: 100,
      name: '某家政服务产品优惠券',
      shop: '适用于家政协会认证金牌店铺',
      date: '2020.03.08-2020.04.09'
    },
    {
      id: 3,
      reduction: '800',
      money: 100,
      name: '某家政服务产品优惠券',
      shop: '适用于家政协会认证金牌店铺',
      date: '2020.03.08-2020.04.09'
    },
  ],
  ExpiredList: [{
    id: 1,
    reduction: '800',
    money: 60,
    name: '某家政服务产品优惠券',
    shop: '适用于家政协会认证金牌店铺',
    date: '2020.03.08-2020.04.08'
  },
  {
    id: 2,
    reduction: '800',
    money: 100,
    name: '某家政服务产品优惠券',
    shop: '适用于家政协会认证金牌店铺',
    date: '2020.03.08-2020.04.09'
  },
  {
    id: 3,
    reduction: '800',
    money: 100,
    name: '某家政服务产品优惠券',
    shop: '适用于家政协会认证金牌店铺',
    date: '2020.03.08-2020.04.09'
  },
],
    
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 3
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