// pages/myhome/MyHomecompontes/MyOrder/OrderDetalis/waitforevaluation/EvaluateOrder/EvaluateOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSuccess: true,

    describeOn: 0,
    describeNot: 5,
    LogisticsOn: 0,
    LogisticsNot: 5,
    AttitudeOn: 0,
    AttitudeNot: 5,
  },

  showSuccess() {
    var that = this
    this.setData({
      showSuccess: !this.data.showSuccess
    })
    setTimeout(function () {
      that.setData({
        showSuccess: !that.data.showSuccess
      })
    }, 2000);
  },
  describeStar: function (e) {
    var in_xin = e.currentTarget.dataset.in;
    var startOn;
    if (in_xin == 'star') {
      startOn = Number(e.currentTarget.id)
    } else {
      startOn = Number(e.currentTarget.id) + this.data.describeOn
    }
    this.setData({
      describeOn: startOn,
      describeNot: 5 - startOn
    })
  },
  Logistics(e) {
    var starType = e.currentTarget.dataset.in;
    var startOn;
    if (starType == 'star') {
      startOn = Number(e.currentTarget.id)
    } else {
      startOn = Number(e.currentTarget.id) + this.data.LogisticsOn
    }
    this.setData({
      LogisticsOn: startOn,
      LogisticsNot: 5 - startOn
    })
  },
  Attitude(e) {
    var starType = e.currentTarget.dataset.in;
    var startOn;
    if (starType == 'star') {
      startOn = Number(e.currentTarget.id)
    } else {
      startOn = Number(e.currentTarget.id) + this.data.AttitudeOn
    }
    this.setData({
      AttitudeOn: startOn,
      AttitudeNot: 5 - startOn
    })
  },
  Evaluate(){
    
  }
})