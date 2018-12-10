			/**
			 * 获取指定格式的时间
			 * @param {Object} dt 日期对象作为参数
			 * 返回的是字符串的日期时间
			 */
			function getDate(dt){//把一个对象当作形参
				year=dt.getFullYear();
				month=dt.getMonth()+1;//从0开始，故要加1
				day=dt.getDate();
				hour=dt.getHours();
				minute=dt.getMinutes();
				second=dt.getSeconds();
				
				//实现二位制效果，比如6月就会写成06月
				year=year<10?"0"+year:year;
				month=month<10?"0"+month:month;
				day=day<10?"0"+day:day;
				hour=hour<10?"0"+hour:hour;
				minute=minute<10?"0"+minute:minute;
				second=second<10?"0"+second:second;
				
				
				return year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";
			}