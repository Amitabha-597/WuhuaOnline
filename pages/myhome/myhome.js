const util = require('../../utils/util.js')

Page({
  data: {
    tabCard: [{
      icon: 'payment',
      msg: '待付款',
      orderType: 1

    }, {
      icon: 'daishangm',
      msg: '待上门',
      orderType: 2

    }, {
      icon: 'sever',
      msg: '待服务',
      orderType: 3

    }, {
      icon: 'evaluate',
      msg: '待评价',
      orderType: 4

    }],
    navList: [{
        icon: 'balance',
        name: '余额',
        url: 'Balance/Balance'
      },
      {
        icon: 'xuqiu',
        name: '我的需求',
        url: 'Balance/Balance'
      },
      {
        icon: 'pingtuan',
        name: '我的拼团',
        url: 'MyCollage/MyCollage'
      },
      {
        icon: 'youhui',
        name: '我的优惠券',
        url: 'MyCoupon/MyCoupon'
      },
      {
        icon: 'shop',
        name: '商家入驻',
        url: 'DowCenter/DowCenter'
      },
      {
        icon: 'adress',
        name: '服务地址',
        url: 'ServiceAddress/index'
      },
      {
        icon: 'kefu',
        name: '联系我们',
        url: 'ContactUs/ContactUs'
      },


    ]
  },
  toMyOrder(e) {
    let ordertype = e.currentTarget.dataset.ordertype
    wx.navigateTo({
      url: './MyHomecompontes/MyOrder/MyOrder?ordertype=' + ordertype + ' ',
    })
  },
  goMyInfo() {
    wx.navigateTo({
      url: '/pages/myhome/MyHomecompontes/MyInfo/MyInfo',
    })
  },




  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '五华家政超市',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项4 ')
      this.getTabBar().setData({
        selected: 4
      })
    }
  }
})