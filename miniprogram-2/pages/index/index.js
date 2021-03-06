import pu from "../../utils/pu.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(pu);
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      success:res=>{
        console.log(res.data);
       res.data.forEach(item => {
        var time=item.posttime*1000;
        let d=new Date(time);
        let year=d.getFullYear();
        let month=(d.getMonth()+1)<10?"0"+(d.getMonth()+1):d.getMonth()+1;
        let day=d.getDate()<10?"0"+d.getDate()  :d.getDate();
        let posttime=year+"-"+month+"-"+day;
        item.posttime=posttime;
        item.title=pu.strlen(item.title,25)
       });
        this.setData({
          dataList:res.data
        })
      }
    })
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