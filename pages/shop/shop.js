const util = require('../../utils/util.js')

Page({
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
    typecard: [{
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
  },
  showtype() {

    this.data.typeshow = !this.data.typeshow
    this.setData({
      typeshow: this.data.typeshow
    })
  },
  seeShop() {
    this.setData({
      typeshow: !this.data.typeshow
    })

  },



  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项 1')
      this.getTabBar().setData({
        selected: 1
      })
    }
  }
})