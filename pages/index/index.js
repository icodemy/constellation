// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图的图片
    swiperData : [{
      id:1,
      path:"/img/swiper/a.jpg"
    },
    {
      id:2,
      path:"/img/swiper/b.jpg"
    },
    {
      id:3,
      path:"/img/swiper/c.jpg"
    },
    {
      id:4,
      path:"/img/swiper/d.jpg"
    }],

    //存放各个星座的信息
    items: [
      {
        id:1,
        icon:"/img/icon/shuiping.png",
        descr:"水瓶座",
        date:"1.20 ~ 2.18"
      },
      {
        id:2,
        icon:"/img/icon/shuangyu.png",
        descr:"双鱼座",
        date:"2.19 ~ 3.20"
      },
      {
        id:3,
        icon:"/img/icon/baiyang.png",
        descr:"白羊座",
        date:"3.21 ~ 4.19"
      },
      {
        id:4,
        icon:"/img/icon/jinniu.png",
        descr:"金牛座",
        date:"4.20 ~ 5.20"
      },
      {
        id:5,
        icon:"/img/icon/shuangzi.png",
        descr:"双子座",
        date:"5.21 ~ 6.21"
      },
      {
        id:6,
        icon:"/img/icon/juxie.png",
        descr:"巨蟹座",
        date:"6.22 ~ 7.22"
      },
      {
        id:7,
        icon:"/img/icon/shizi.png",
        descr:"狮子座",
        date:"7.23 ~ 8.22"
      },
      {
        id:8,
        icon:"/img/icon/chunv.png",
        descr:"处女座",
        date:"8.23 ~ 9.22"
      },
      {
        id:9,
        icon:"/img/icon/tianchen.png",
        descr:"天秤座",
        date:"9.23 ~ 10.23"
      },
      {
        id:10,
        icon:"/img/icon/tianxie.png",
        descr:"天蝎座",
        date:"10.24 ~ 11.22"
      },
      {
        id:11,
        icon:"/img/icon/sheshou.png",
        descr:"射手座",
        date:"11.23 ~ 12.21"
      },
      {
        id:12,
        icon:"/img/icon/mojie.png",
        descr:"摩羯座",
        date:"12.22 ~ 1.19"
      },
          ]
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
