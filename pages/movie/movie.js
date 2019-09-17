// pages/movie/movie.js
const API_URL = 'https://douban.uieee.com/v2/movie/subject/'
const utils = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{},
    play:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中..',
      icon: "loading"
    }) 
    utils.sendRequest(API_URL + options.id, 'GET', {})
      .then((res) => {
        wx.hideToast() 
        this.setData({ 
          movie: res.data
        })
      }, (error) => {
        console.log(error);
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onReachBottom: function () {
    console.log(123) 
  },
  videoTap: function () {
    //获取video
    this.videoContext = wx.createVideoContext('myVideo')
    if (this.data.play) {
      //开始播放
      this.videoContext.play()//开始播放
      this.setData({
        play: false
      })
    } else {
      //当play==false 显示图片 暂停

      this.videoContext.pause()//暂停播放
      this.setData({
        play: true
      })
    }
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