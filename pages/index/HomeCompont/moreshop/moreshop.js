// pages/index/HomeCompont/moreshop/moreshop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoplist: [{
        img: 'shop',
        shopname: '勤鸽家政服务有限公司',
        evaluate: '100',
        volume: '1200',
        goldls: "goldl"
      },

      {
        img: 'shop',
        shopname: '勤鸽家政服务有限公司',
        evaluate: '100',
        volume: '1200',
        goldls: "goldl",
        goldls: "goldl"

      },
      {
        img: 'shop',
        shopname: '勤鸽家政服务有限公司',
        evaluate: '100',
        volume: '1200',
        goldls: "goldl"

      },
      {
        img: 'shop',
        shopname: '勤鸽家政服务有限公司',
        evaluate: '100',
        volume: '1200',
        goldls: "goldl"

      }
    ],
    typecard: [
      {
        id: 1,
        name: '金牌店铺'
      },
      {
        id: 2,
        name: '普通店铺'
      }, {
        id: 3,
        name: '清洁清洗'
      }, {
        id: 4,
        name: '保姆月嫂'
      },
      {
        id: 5,
        name: '管道疏通'
      },
       {
        id: 6,
        name: '家具维修'
      },
      {
        id: 7,
        name: '绿化除草'
      },
      {
        id: 8,
        name: '荒地开垦'
      }, {
        id: 9,
        name: '家庭教师'
      }

    ],
    typeshow:false
  },
  showtype(){
    
    this.data.typeshow = !this.data.typeshow
    this.setData({
      typeshow:this.data.typeshow
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