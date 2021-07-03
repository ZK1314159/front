module.exports = {

    // 配置跨域请求
    //原始的完整请求举例：http://localhost:8080/background/test/get?userId=20
    devServer: {
      proxy: {
        '/background': { 
          target: 'http://localhost:9000', //这里是指将http://localhost:8080 替换为 http://localhost:9000
          changeOrigin: true,
          pathRewrite: {
            '^/background': '' //去掉 /background
          }
          //处理后的真实请求：http://localhost:9000/test/get?userId=20
        }
      }
    }
  
  }