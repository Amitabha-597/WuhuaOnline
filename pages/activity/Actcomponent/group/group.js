// pages/activity/component/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    writerList:[{
      id:"1",
      whiterimg:'whiter',
      content:'150㎡内住宅全面清洁 一次',
      newprice:'166.00',
      oldprice:'199.00',
      people:3,
      remain:'68',

    },
    {
      id:"2",
      whiterimg:'whiter',
      content:'150㎡内住宅全面清洁 二次',
      newprice:'166.00',
      oldprice:'199.00',
      people:3,
      remain:'88',

    },
    {
      id:"3",
      whiterimg:'whiter',
      content:'150㎡内住宅全面清洁 二次',
      newprice:'166.00',
      oldprice:'199.00',
      people:3,
      remain:'88',

    },
    {
      id:"4",
      whiterimg:'whiter',
      content:'150㎡内住宅全面清洁 二次',
      newprice:'166.00',
      oldprice:'199.00',
      people:3,
      remain:'88',

    }]
  },
  Goandmakeaist(){
    wx.navigateTo({
      url: '/pages/activity/Actcomponent/groupdetails/groupdetails',
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