// pages/tabBar1/tabbar1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'today',

    array: ['水瓶座', '双鱼座', '白羊座', '金牛座',
      '双子座', '巨蟹座', '狮子座', '处女座',
      '天秤座', '天蝎座', '射手座', '摩羯座'],

    index: 0,
    todayData: {},
    tomorrowData: {},
    weekData: {},
    monthData: {},
    yearData: {},
    Data: {},

    request2Result:true
  },

  //星座选择器触发事件
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.request();
  },

  //标签页改变触发
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    this.request();
  },

  // 请求
  request() {
    var that = this;
    wx.request({
      url: 'https://web.juhe.cn/constellation/getAll',
      data: {
        type: that.data.current,  //运势类型
        consName: that.data.array[that.data.index], //星座名称
        key: app.data.fortune_key, //api key me
      },
      success: function (res) {
        let result = res.data
        console.log('request1');
        if (res.data.error_code == 0) {
          
          that.setData({ Data: result })
        } else if (res.data.error_code == 10013 || res.data.error_code == 10012) {
          // console.log('request2()===>',that.request2());
          that.request2()
          // console.log('123==>',that.data.request2Result);
          console.log('request2');
          if (that.data.request2Result === false) {
            wx.showToast({
              title: '查询次数不足',
              icon: 'error'
            })
            that.setData({ Data: {} })
          }

        } else {
          wx.showToast({
            title: '未知错误',
            icon: 'error'
          })
          that.setData({ Data: {} })
        }
      }
    })
  },

  request2() {
    var that = this
    wx.request({
      url: 'https://web.juhe.cn/constellation/getAll',
      data: {
        type: that.data.current,
        consName: that.data.array[that.data.index],
        key: app.data.fortune_key_other    //api key other
      },
      success: function (res) {
        let result = res.data
        console.log('online key ==>',res.data);
        if (res.data.error_code == 0) {
          that.setData({ Data: result })
        } else {
          that.setData({request2Result:false})
        }
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
    this.request();
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