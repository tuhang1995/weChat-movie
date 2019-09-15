//index.js
//获取应用实例
const API_URL = "https://douban.uieee.com/v2/movie/top250?start="
const utils = require('../../utils/util')
const app = getApp()

Page({
  data: {
    movies: [],
    title: '加载中...',
    start:0, 
  },
  getList(start){ 
    utils.sendRequest(API_URL + start, 'GET', {})
      .then((res) => {
        console.log(res)
        wx.hideToast() 
        if(res.data.subjects.length == 0){
          wx.showToast({
            title: '没有更多数据'
          })
          return
        }
        var list = res.data.subjects; 
        this.setData({
          title: res.data.title,
          movies: this.data.movies.concat(list)
        }) 
      }, (error) => {
        console.log(error);
      }) 
  },
  onLoad() {
    wx.showToast({
      title: '加载中..',
      icon: "loading" 
    }) 
   // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) { 
    //     that.setData({
    //       scrollHeight: res.windowHeight
    //     });
    //   }
    // }); 
    this.getList(this.data.start)
  },
  onReachBottom: function () {  
    // 该方法绑定了页面滑动到底部的事件
    //var that = this;
    wx.showToast({
      title: '加载中..',
      icon: "loading"
    }) 
    this.data.start += 20
    this.getList(this.data.start);
  }, 
  onPullDownRefresh: function (event) { 
    //做上拉刷新
    wx.showToast({
      title: '正在刷新..',
      icon: "loading"
    }) 
    this.start = 0;
    this.setData({
      movies: [],
      scrollTop: 0
    });
    this.getList(this.start)
  }
 
})
