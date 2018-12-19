/**
 * 日期过滤器
 * @param  {[type]} val  不用传，默认为需要过滤的数据
 * @param  {[type]} type 需要返回的类型
 *                          默认 'yyyy-MM-dd hh:mm:ss'
 *                          可以根据需求返回不同格式，如: 'yy/MM/dd', 'hh:mm:ss', 'yyyy-MM-dd'等等
 */
const filterTime = (time, format) => {
	format = format || 'yyyy-MM-dd hh:mm:ss';
  	if (time && time.toString().indexOf('Date') >= 0) {
        time = time.replace('/Date(', '').replace(')/', '')
   } else {
		return ""
   }
    let date = new Date(parseInt(time));
  
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let dt = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
  
    for (let key in dt) {
      if (new RegExp(`(${key})`).test(format)) {
        let str = dt[key] + ''
        format = format.replace(RegExp.$1,
          (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length)
        );
      }
    }
    return format;
}

const filterInput = (obj) => { // 输入框保留两位小数
	if (typeof obj == 'number') {
		obj += ''
	}
	if(obj != '' && obj.substr(0, 1) == '.') {
		obj = "";
	}
	obj = obj.replace(/^0*(0\.|[1-9])/, '$1'); //解决 粘贴不生效  
	obj = obj.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符  
	obj = obj.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的       
	obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
	obj = obj.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数       
	if(obj.indexOf(".") < 0 && obj != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
		if(obj.substr(0, 1) == '0' && obj.length == 2) {
			obj = obj.substr(1, obj.length);
		}
	}
	return obj
}

const filterImg = (val) => {
    let img = val;
    if (val == '' || val == null) {
        img = '../static/common/images/avatar.jpg';
    } else if (val.indexOf("http") >= 0) {
        img = val;
    } else if (val.indexOf("UpLoads") >= 0) {
        img = config.IMG_URL + val;
    }
    return img;
}

const filtertoFixed = (val, options) => {
    val = Number(val).toFixed(2) + '';
    options = mui.extend({}, {
        money: '',
        divide: false,
        suffix: false
    }, options)
    // 千位分隔符(逗号)
    if(options.divide) {
        let str = val.substring(0,val.indexOf(".")).replace( /\B(?=(?:\d{3})+$)/g, ',' );
        let dot = val.substring(val.length,val.indexOf("."));
        val =  str + dot;
    }
    // 千 k， 万 w
    if(options.suffix) {
        if(val > 10000) {
            val = `${val}w`;
        } else if(val > 1000) {
            val = `${val}k`
        }
    }
    switch(options.money) {
        case '$':
            val = '$'+val;
            break;
        case '￥':
            val = '￥' + val;
            break;
    }
    return val
}

export {
    filterTime,
    filterImg,
    filtertoFixed,
    filterInput
}