// pages/index/HomeCompont/servicedetails/servicedetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 2,
    waiterlist: [{
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人',
        }

      },
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人'
        }

      },
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人'
        }

      },
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人'
        }

      },
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人'
        }

      }
    ],
    serviceItems: [{
        id: 1,
        img: "serviceItems",
        content: '	150㎡内住宅全面清洁一次',
        evaluate: 100,
        frequency: 150,
        price: 166.00,
      },
      {
        id: 2,
        img: "serviceItems",
        content: '	150㎡内住宅全面清洁一次',
        evaluate: 100,
        frequency: 150,
        price: 166.00,
      },
      {
        id: 3,
        img: "serviceItems",
        content: '	150㎡内住宅全面清洁一次',
        evaluate: 100,
        frequency: 150,
        price: 166.00,
      },
      {
        id: 4,
        img: "serviceItems",
        content: '	150㎡内住宅全面清洁一次',
        evaluate: 100,
        frequency: 150,
        price: 166.00,
      }
    ],
    userevaluation: [{
      id:'1',
      useravatar: 'useravatar',
      name: '阿花',
      evaluateL: '打扫得十分好，五星好评',
      date: '04-03 12:29'

    },
    {
      id:'2',
      useravatar: 'useravatar',
      name: '阿狗',
      evaluateL: '打扫得十分好，五星好评',
      date: '04-03 12:29'

    }]
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