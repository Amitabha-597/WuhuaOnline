// pages/servicePersonal/Login/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendTime: '获取验证码',
    sendColor: '#363636',
    snsMsgWait: 60,
    showPwd: false,
    ConsentAgreement: true,
    showSelectShop: false,
    showSelectJob: false,
    shopName: '',
    jobName: '',
    ConsentAgreement: false,
    address: '',
    shopList: [{
        text: '勤鸽家政服务有限公司',
        value: '勤鸽家政服务有限公司'
      },
      {
        text: '尧舜禹家政服务有限公司',
        value: '尧舜禹家政服务有限公司'
      },
      {
        text: '永鑫家政服务有限公司',
        type: 'warn',
        value: '永鑫家政服务有限公司'
      }
    ],
    jobList: [{
        text: '保洁员',
        value: '保洁员'
      },
      {
        text: '保姆月嫂',
        value: '保姆月嫂'
      },
      {
        text: '维修工',
        type: 'warn',
        value: '维修工'
      }
    ]
  },
  close: function () {
    this.setData({
      showSelectShop: false,
      showSelectJob: false
    })
  },
  ShowShopSelect() {
    this.setData({
      showSelectShop: !this.data.showSelectShop
    })
  },
  ShowJobSelect() {
    this.setData({
      showSelectJob: !this.data.showSelectJob
    })
  },
  ShowShop(e) {
    this.setData({
      shopName: e.detail.value
    })
    this.close()
  },
  ShowJob(e) {
    this.setData({
      jobName: e.detail.value
    })
    this.close()
  },
  sendCode: function () {
    var inter = setInterval(function () {
      this.setData({
        smsFlag: true,
        sendColor: '#cccccc',
        sendTime: this.data.snsMsgWait + 's后重发',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendColor: '#363636',
          sendTime: '重新获取',
          snsMsgWait: 60,
          smsFlag: false
        });
      }
    }.bind(this), 1000);
  },
  ShowPwd(e) {
    this.setData({
      showPwd: e.detail.value
    })
  },
  ConsentAgreement() {
    this.setData({
      ConsentAgreement: !this.data.ConsentAgreement
    })
  },
  Register() {

    wx.showToast({
      title: '注册成功',
      icon: 'success',
      duration: 2000
    })
  },
  getLocation() {
    let that = this
    wx.chooseLocation({
      type: 'wgs84',
      success(res) {
        const address = res.address
        that.setData({
          address: address
        })
      }
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