// pages/index/Navitem/Apply/Applycomp/AddExp/AddExp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conentLength: 0,
    conent:"臣密言：臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘悯臣孤弱，躬亲抚养。臣少多疾病，九岁不行，零丁孤苦，至于成立。既无叔伯，终鲜兄弟，门衰祚薄，晚有儿息。外无期功强近之亲，内无应门五尺之僮，茕茕孑立，形影相吊。而刘夙婴疾病，常在床蓐，臣侍汤药，未曾废离。逮奉圣朝，沐浴清化。前太守臣逵察臣孝廉，后刺史臣荣举臣秀才。臣以供养无主，辞不赴命。诏书特下，拜臣郎中，寻蒙国恩，除臣洗马。猥以微贱，当侍东宫，非臣陨首所能上报。臣具以表闻，辞不就职。诏书切峻，责臣逋慢。郡县逼迫，催臣上道；州司临门，急于星火。臣欲奉诏奔驰，则刘病日笃；欲苟顺私情，则告诉不许：臣之进退，实为狼狈"

  },
  Maxlength(e) {

this.setData({
  conentLength:e.detail.value.length
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