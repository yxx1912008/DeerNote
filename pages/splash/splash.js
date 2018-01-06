
// 启动页面
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 屏幕初始高度
    screenHeight: 0,
    // 屏幕初始宽度
    screenWidth: 0,
    /**启动图显示时长 单位毫秒 */
    splashTime: 3000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 闭包
    var that = this;
    /** 根据当前系统屏幕宽高，设置启动图 */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth
        });
      },
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /** 初次渲染完成，停留两秒跳转到主页 */
    this.getIndex();
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

  /**
   * 启动图显示完毕后跳到主页
   */
  getIndex: function () {
    setTimeout(function () {
      wx.redirectTo({
        url: '../index/index',
      })
    }, this.data.splashTime);
  },

})
