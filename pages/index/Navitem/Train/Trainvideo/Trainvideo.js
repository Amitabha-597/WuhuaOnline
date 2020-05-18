// pages/index/Navitem/Train/Train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 1,
    CatalogSelect: 0,
    CatalogList: [{
      Coursename: '家政学概论',
      Duration: 30,
      ViewTimes: 2886
    },
    {
      Coursename: '家政学概论',
      Duration: 30,
      ViewTimes: 2886
    },{
      Coursename: '家政学概论',
      Duration: 30,
      ViewTimes: 2886
    }]

  },
  CatalogSelect(e){
    this.setData({
      CatalogSelect:e.currentTarget.dataset.index
    })
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
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