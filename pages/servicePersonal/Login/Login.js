// pages/servicePersonal/Login/Login.js
Page({
  data: {
    inputValue: null,
    showPwd: false,
    ConsentAgreement: false
  },

  clearInput: function (res) {
    this.setData({
      'inputValue': ''
    })
  },
  switch1Change(e) {
    this.setData({
      showPwd: e.detail.value
    })
  },
  ConsentAgreement() {
    
    this.setData({
      ConsentAgreement: !this.data.ConsentAgreement
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