// pages/index/HomeCompont/ConfirmOrder/index.js
Page({

  data: {
    showSelectWaiter: false,
    showPayMode: false,
    showCoupon: false,
    forIndex: 0,
    unitPrice: '166.01',
    totalPrice: '00.00',
    totalNum: 15,
    waiter: [{
        text: '王桂华',
        value: 1
      },
      {
        text: '张芳',
        value: 2
      },
      {
        text: '李兴凤',
        type: 'warn',
        value: 3
      }
    ],
    PayMode: [{
        text: '微信支付',
        value: '微信支付'
      },
      {
        text: '余额支付',
        value: '余额支付'
      },
    ],
    Coupon: [{
        id: 1,
        text: '省10：组合优惠',
        value: '10.00 省20：组合优惠',
        type: 'warn',
      },
      {
        id: 2,
        text: '10.00 省20：组合优惠',
        value: '10.00 省20：组合优惠'

      },
      {
        id: 3,
        text: '20.00 省30：满减活动',
        value: '20.00 省30：满减活动'
      },
      {
        id: 4,
        text: '不适用优惠券',
        value: '20.00 省30：满减活动'
      },

    ],
  },
  showPayMode() {
    this.setData({
      showPayMode: true
    })
  },
  showCoupon() {
    this.setData({
      showCoupon: true
    })
  },

  SelectWriter() {
    this.setData({
      showSelectWaiter: true
    })
  },
  close: function () {
    this.setData({
      showSelectWaiter: false
    })
  },
  btnClick(e) {
    console.log(e.currentTarget.dataset)


    this.close()
  },

  AddNum (e) {
    console.log(e);
    
    let numChange = parseInt(e.currentTarget.dataset.num)
    let totalNum = parseInt(this.data.totalNum)
    let unitPrice = parseFloat(this.data.unitPrice)
    let totalPrice = parseFloat(this.data.totalPrice)
   
    totalNum += numChange
    totalPrice = totalNum * unitPrice
    totalPrice=totalPrice.toFixed(2)
    if (totalNum >= 1) {
      this.setData({
        totalNum: totalNum,
        totalPrice: totalPrice
      })
    }


  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let totalNum = parseInt(this.data.totalNum)
    let unitPrice = parseFloat(this.data.unitPrice)
    let totalPrice = parseFloat(this.data.totalPrice)
    totalPrice = totalNum * unitPrice
    totalPrice=totalPrice.toFixed(2)
    this.setData({
      totalPrice: totalPrice
    })
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