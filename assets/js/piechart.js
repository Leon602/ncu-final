fetch('http://127.0.0.1:8000/DIP/DrugSearch/getGenderNum/',{method:'POST',body:encodeURI({"id":1})})
  .then(function(response) {
  console.log(response.json());
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
  
		var step;
		var test;
		var arr = [];
		for (step = 0; step < 5; step++) {
		  // 執行五次：從step為0到4
		  console.log('Walking east one step');
		  var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			console.log(r);
			console.log(g);
		  test = {
				label: "test3", //標籤
				data: [r, 55, 8, 46, 20, b], //資料
				//圖表背景色
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgb(75, 192, 192)',
				//外框線寬度
				borderWidth: 1
			  };
			  arr.push(test);
		}
		var ctx = document.getElementById("chart-area");
		//標籤若超過兩個要用陣列表示，若沒有就是字串表示
		var myChart = new Chart(ctx, {
		  type: "line", //圖表類型
		  data: {
			//標題
			labels: ["2014", "2015", "2017", "2018", "2019", "2020"],
			datasets: arr
			/**[
			  {
				label: "test1", //標籤
				data: [12, 19, 3, 5, 2, 3], //資料
				//圖表背景色
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgb(75, 192, 192)',
				//外框線寬度
				borderWidth: 1
			  },
			  {
				label: "test2", //標籤
				data: [20, 5, 33, 5, 45, 4], //資料
				//圖表背景色
				borderColor: 'rgb(75, 55, 193)',
				backgroundColor: 'rgb(75, 55, 193)',
				//外框線寬度
				borderWidth: 1
			  }
			  
			]**/
		  },
		  options: {
			scales: {
				x: {
				  title: {
					display: true,
					text: '年'
				  }
				},
				y: {
				  title: {
					display: true,
					text: '人數'
				  }
				}
			}
		  }
		});