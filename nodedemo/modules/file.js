var fs = require('fs');

module.exports = {
  /**
   * 读取文件
   * @param {String} filePath 文件路劲
   */
  readFile: function(filePath) {
    try {
      var data = fs.readFileSync(filePath);
      return data;
    } catch (error) {
      // 抛出错误
      throw error;
    }
  },

  /**
   * 读取图片
   * @param {String} imgPath 图片路径
   */
  readImg: function(imgPath) {
    try {
      var data = fs.readFileSync(imgPath, 'binary');
      return data;
    } catch (error) {
      throw error;
    }
  }
}