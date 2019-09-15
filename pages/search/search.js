// pages/search/search.js
//let API_URL = 'https://api.douban.com/v2/movie/search?q='
const API_URL = "https://douban.uieee.com/v2/movie/top250"
const utils = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wd:'',
    detail:[],
    showEndText:false,
    play:false
  },
  //获取input 的值
  inputeidt(e){
    console.log(e.detail)
    
    this.setData({
      wd: e.detail  
    })
  //  this.getList(e.detail.value)
  },
  onPullDownRefresh(){
    this.setData({
      showEndText: false
    })
  }, 
  getList(wd){
    utils.sendRequest(API_URL, 'GET', {})
      .then((res) => {
        wx.hideToast()
        console.log(res)
        if (res.data.subjects.length == 0) {
          wx.showToast({
            title: '没有更多数据'
          })
          return
        }
       // var list = res.data.subjects;
        this.setData({
          //title: res.data.title,
         detail: res.data.subjects
        })
      }, (error) => {
        console.log(error);
      }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getList()
  },
  search(){ 
    wx.showToast({
      title: '加载中..',
      icon: "loading"
    }) 
    this.getList(this.data.wd)
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
   // this.data.showEndText = true
    this.setData({
      showEndText:true
    }) 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})