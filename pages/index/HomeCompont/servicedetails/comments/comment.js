// pages/index/HomeCompont/servicedetails/comments/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    commentcheck: false,
    iscommentreply:false,
    commentreplyuser:'',
    userevaluation: [{
        id: '1',
        useravatar: 'useravatar',
        name: '阿花',
        evaluateL: '打扫得十分好，五星好评',
        date: '04-03 12:29'

      },
      {
        id: '2',
        useravatar: 'useravatar',
        name: '阿狗',
        evaluateL: '打扫得十分好，五星好评',
        date: '04-03 12:29',
        shopname:'勤鸽家政服务',
        shopmsg:'感谢您对我公司服务的信任， 期待您下次光临！'

      },
      {
        id: '3',
        useravatar: 'useravatar',
        name: '阿风',
        evaluateL: '打扫得十分好，五星好评',
        date: '04-03 12:29',
        shopname:'勤鸽家政服务',
        shopmsg:'感谢您对我公司服务的信任， 期待您下次光临！'

      },
      {
        id: '4',
        useravatar: 'useravatar',
        name: '阿美',
        evaluateL: '打扫得十分好，五星好评',
        date: '04-03 12:29',
        shopname:'勤鸽家政服务',
        shopmsg:'s'

      }
    ],
    typelist: [{
      id: 1,
      typename:'清洁清洗'
    }, 
    {
      id: 2,
      typename:'月嫂'
    }, {
      id: 3,
      typename:'育儿嫂'
    }, {
      id: 4,
      typename:'保姆'
    }, {
      id: 5,
      typename:'日常保洁'
    }, {
      id: 6,
      typename:'油烟机清洗'
    }, {
      id: 7,
      typename:'全屋大扫除'
    }
    
  ]
  },
  userReply(e){
    this.iscommentreply=!this.iscommentreply
    this.setData({
      commentreplyuser:e.currentTarget.dataset.item,
      iscommentreply:this.iscommentreply,
    })

  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  checktype(e) {
    this.commentcheck = !this.commentcheck
    console.log(this.commentcheck);
    this.setData({
      commentcheck: this.commentcheck
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