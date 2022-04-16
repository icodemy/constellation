// pages/detail/detail.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '',//目标星座

    constellation: {},//调用api返回的结果信息

    spinShow: true     //是否加载
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      msg: options.item  //获得要查询的目标星座
    })
    this.test()
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

  },

  //调用api查询目标星座信息
  test() {
    let target = this.data.msg //赋值
    var that = this
    wx.request({
      url: 'https://apis.juhe.cn/fapig/constellation/query',
      data: {
        keyword: target,//要查询的目标星座
        key: app.data.detail_key //api key
      },
      success: function (res) {
        console.log(res.data);
        let result = res.data.result
        that.setData({ constellation: result, spinShow: false })//返回的信息
      }
    })
    console.log("当前选择星座 =====>", this.data.msg);
  },

  //底部button事件
  backToIndex() {
    // 返回上一级关闭当前页面
    wx.navigateBack({
      delta: 1
    })
  }
})