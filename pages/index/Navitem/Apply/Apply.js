// pages/index/Navitem/Apply/Apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowgender: false,
    isShowEducation:false,
    Gender: "请选择性别",
    Education:'请选择学历'
  },
  showGender() {
    this.setData({
      isShowgender: !this.data.isShowgender
    })
  },
  Gender(e) {

    this.setData({
      Gender: e.currentTarget.dataset.gender,
      isShowgender: !this.data.isShowgender
    })

  },
  showEducation() {
    this.setData({
      isShowEducation: !this.data.isShowEducation
    })
  },
  Education(e) {

    this.setData({
      Education: e.currentTarget.dataset.education,
      isShowEducation: !this.data.isShowEducation
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