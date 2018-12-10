//原生ajax函数封装

    function ajax (method, url, params, done) {
        method = method.toUpperCase()
        var xhr = new XMLHttpRequest()
  
        //将传入的json参数对象转化为url格式中的Key/value键值对
        if (typeof params === 'object') {
          var tempArr = []
          for (var key in params) {
            var value = params[key]
            tempArr.push(key + '=' + value)
          }
          params = tempArr.join('&')
        }
  
        if (method === 'GET') {
          url += '?' + params
        }
  
        xhr.open(method, url, true)
  
        var data = null
        if (method === 'POST') {
          //post请求要设置请求头
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
          data = params
        }

        xhr.send(data)
        xhr.onreadystatechange = function () {
          if (this.readyState !== 4) return
          // 不应该在封装的函数中主观的处理响应结果
          // console.log(this.responseText)
          // 你说我太主观，那么你告诉我应该做什么
          done(this.responseText)
        }

      }