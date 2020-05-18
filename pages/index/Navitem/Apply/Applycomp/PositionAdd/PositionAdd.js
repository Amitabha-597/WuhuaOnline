// pages/index/Navitem/DowCenter/ServiceType/ServiceType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SelectionList: [{
        itemName: '清洁清洗1'
      },


    ],
    CandidateList: [{
        itemName: '家庭保姆'
      },
      {
        itemName: '管道维修工'
      },
      {
        itemName: '家电修理工'
      },
      {
        itemName: '绿化工人'
      },
      {
        itemName: '月嫂'
      },
      {
        itemName: '育儿嫂'
      },
      {
        itemName: '挖掘机师傅'
      },
      {
        itemName: '装修师傅'
      },
      {
        itemName: '家庭教师'
      },
    ]

  },
  delItem(e) {
    let key = Number(e.currentTarget.dataset.item)
    let SelectionList = this.data.SelectionList
    SelectionList.splice(key, 1)
    this.setData({
      SelectionList: SelectionList
    })
  },

  Repeat(arr) {
    //Set数据结构，它类似于数组，其成员的值都是唯一的
    return Array.from(new Set(arr)); // 利用Array.from将Set结构转换成数组
    console.log(1);

  },
  pushForSelection(e) {
    let item = e.currentTarget.dataset.item
    let SelectionLists = this.data.SelectionList
    SelectionLists.push(item)


    this.setData({
      SelectionList: SelectionLists
    })


  },
  ServiceTypeSave() {
    wx.navigateTo({
      url: '../../Apply',
    })
  },
  ServiceTypeCancel() {
    wx.navigateTo({
      url: '../../Apply',
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