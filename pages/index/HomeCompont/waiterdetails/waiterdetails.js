
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showActionsheet: false,
        groups: [{
                id: 1,
                text: '清洁清扫',
                value: '清洁清扫'
            },
            {
                id: 2,
                text: '保姆月嫂',
                value: '保姆月嫂'
            },
            {
                id: 3,
                text: '管道疏通',
                value: '管道疏通'
            },


        ]
    },
    close: function () {
        this.setData({
            showActionsheet: true
        })
    },
    btnClick(e) {
        var _this=this
        console.log(e.detail.value);
        wx.navigateTo({
            url: '/pages/index/HomeCompont/onlineservice/onlineservice',
            events: {
                // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                acceptDataFromOpenedPage: function (data) {
                    console.log(data)
                },
                someEvent: function (data) {
                    console.log(data)
                }

            },
            success: function (res) {
                // 通过eventChannel向被打开页面传送数据
                res.eventChannel.emit('', {
                    data: 'test'
                })
            }
        });

        this.close()
    },
    showAct() {
        this.setData({
            showActionsheet: true
        })
    }

})