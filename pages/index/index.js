const app = getApp()
Page({

  data: {
    region: ['广东省', '广州市', '梅州梅州'],
    swiperimg: ['banner4', 'banner2', 'banner3', 'banner4'], //轮播
    tablist: [],
    tablistLess: [{
        img: 'tabicon01',
        name: "清洁清洗",
        url: '../shop/shop'
      },
      {
        img: 'tabicon02',
        name: "保姆月嫂",
        url: '../shop/shop'
      },
      {
        img: 'tabicon03',
        name: "管道疏通",

        url: '../shop/shop'
      },

      {
        img: 'tabicon04',
        name: "新闻资讯",
        url: '../index/Navitem/News/News'
      },

      {
        img: 'tabicon05',
        name: "就业申请",
        url: '../index/Navitem/Apply/Apply'

      },

      {
        img: 'tabicon06',
        name: "就业培训",
        url: '../index/Navitem/Train/Train'
      },
      {
        img: 'tabicon07',
        name: "优惠活动",
        url: '../activity/activity'
      },
      {
        img: 'more',
        name: "更多",
        tabEvent: 'showMore'
      },

    ],
    tablistMore: [{
        img: 'tabicon01',
        name: "清洁清洗",
        url: '../shop/shop'
      },
      {
        img: 'tabicon02',
        name: "保姆月嫂",
        url: '../shop/shop'
      },
      {
        img: 'tabicon03',
        name: "管道疏通",

        url: '../shop/shop'
      },

      {
        img: 'tabicon04',
        name: "新闻资讯",
        url: '../index/Navitem/News/News'
      },

      {
        img: 'tabicon05',
        name: "就业申请",
        url: '../index/Navitem/Apply/Apply'

      },

      {
        img: 'tabicon06',
        name: "就业培训",
        url: '../index/Navitem/Train/Train'
      },
      {
        img: 'tabicon07',
        name: "优惠活动",
        url: '../activity/activity'
      },
      {
        img: 'tabicon08',
        name: "家具维修",
        url: '../shop/shop'
      },
      {
        img: 'tabicon09',
        name: "绿化除草",
        url: '../shop/shop'
      }, {
        img: 'tabicon10',
        name: "荒地开垦",
        url: '../shop/shop'
      }, {
        img: 'tabicon11',
        name: "家庭教师",
        url: '../shop/shop'
      }, {
        img: 'tabicon12',
        name: "商家入驻",
        url: '../index/Navitem/DowCenter/DowCenter'

      }, {
        img: 'shouqi',
        name: "收起",
        tabEvent: 'Reduce'
      },
    ],

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

      }
    ]

  },



  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  showMore() {
    this.setData({
      tablist: this.data.tablistMore
    })

  },
  Reduce() {
    this.setData({
      tablist: this.data.tablistLess
    })
  },
  NavEvent(e) {
    if (e.currentTarget.dataset.index == this.data.tablistLess.length - 1 && e.currentTarget.dataset.index == 7) {
      this.showMore()
    } else if (e.currentTarget.dataset.index == this.data.tablistMore.length - 1 && e.currentTarget.dataset.index == 12) {
      this.Reduce()
    }
    console.log(e.currentTarget.dataset.url);
    let url = e.currentTarget.dataset.url
    if(url !=='../shop/shop'&& url !=='../activity/activity'){
      wx.navigateTo({
        url: url,
      })
    }else{
        wx.switchTab({
        url: url,
      })
    }




  },
  onLoad() {
    this.setData({
      tablist: this.data.tablistLess
    })
  },


})