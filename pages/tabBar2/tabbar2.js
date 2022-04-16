// pages/tabBar2/tabbar2.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    men: '',
    women: '',
    array: ['水瓶座', '双鱼座', '白羊座', '金牛座',
      '双子座', '巨蟹座', '狮子座', '处女座',
      '天秤座', '天蝎座', '射手座', '摩羯座'],
    Data: {},
    show:false
  },
  
  // 选择男生星座
  select_men: function (e) {
    console.log('男生星座选择，携带值为', e.detail.value)
    this.setData({
      men: this.data.array[e.detail.value]
    })
  },
  // 选择女生星座
  select_women: function (e) {
    console.log('女生星座选择，携带值为', e.detail.value)
    this.setData({
      women: this.data.array[e.detail.value]
    })
  },

  // 发送请求查询匹配结果
  search() {
    let men = this.data.men
    let women = this.data.women
    var that = this

    if (men === '') {
      wx.showToast({
        title: '请选择男生的星座',
        icon:'none'
      })
    }else if(women == ''){
      wx.showToast({
        title: '请选择女生的星座',
        icon:'none'
      })
    }else{
      //发送请求
      wx.request({
        url: 'https://apis.juhe.cn/xzpd/query',
        data: {
          key:app.data.matching_key, //api key
          men: men.substring(0,2),  //男生星座
          women: women.substring(0,2) //女生星座
        },
        success: function(res){
          // console.log(men,women);
          // console.log(res.data);
          if(res.data.error_code == 0){
            wx.showToast({
              title: '查询成功',
              icon: 'success'
            })
            that.setData({Data:res.data.result,show:true})
          }else if(res.data.error_code == 10013 || res.data.error_code == 10012){
            wx.showToast({
              title: '查询次数不足',
              icon: 'error'
            })
            that.setData({Data:{},show:false})
          }else{
            wx.showToast({
              title: '未知错误',
              icon: 'error'
            })
            that.setData({Data:{},show:false})
          }
          
        }
      })
    }
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