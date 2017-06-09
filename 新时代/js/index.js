window.onload = function() {
	(function() {
		var nav = document.querySelector('.nav1');
		var nava = document.querySelectorAll('.navs a');
		console.log(nava.length)
		var navs = nav.querySelectorAll('.nav2');
		console.log(navs.length)
		for (var i = 0; i < nava.length; i++) {
			nava[i].index = i;
			nava[i].onclick = function() {
				for (var i = 0; i < nava.length; i++) {
					nava[i].className = '';
					navs[i].style.display = 'none';
				}
				this.className = 'active';
				navs[this.index].style.display = 'block';
			};
		}
		var imgsC = document.querySelector('.imgsC');
		var ul = imgsC.querySelector('ul');
		var lies = ul.querySelectorAll('li');
		var lis = ul.querySelector('li');
		var liL = parseInt(getStyle(lis, 'width'));
		var wrap = document.querySelector('.wrap');
		var spans = wrap.querySelectorAll('span');
		var num = 0;
		var timer = null;
		var btns = document.querySelectorAll('.btns a');
		var banner3 = document.querySelector('.banner3');
		var bannerImg = banner3.querySelector('img');
		var bannerDiv = banner3.querySelector('.div');
		var divH4 = bannerDiv.querySelector('h4');
		var divP = bannerDiv.querySelector('p');
		var arrImg = ['../img/teacherY.jpg'];
		var arrName = ['董建隆', '张三', '李四'];
		var arrText = ['董建隆，英语教师，研究生，1986年出生，2009年毕业于浙江大学英语...',
			'张三，英语教师，研究生，1986年出生，2009年毕业于浙江大学英语...', '李四，英语教师，研究生，1986年出生，2009年毕业于浙江大学英语...'
		];

		for (var i = 0; i < btns.length; i++) {
			btns[i].index = i;
			btns[i].onmouseover = function() {
				for (var i = 0; i < btns.length; i++) {
					btns[i].className = '';
					divH4.innerHTML = '';
				}
				this.className = 'active';
				bannerImg.src = arrImg[this.index];
				divH4.innerHTML = arrName[this.index];
				divP.innerHTML = arrText[this.index];
			};
		}


		for (var i = 0; i < lies.length; i++) {
			lies[i].onmouseover = function() {
				clearInterval(timer);
			};
			lies[i].onmouseout = function() {
				// clearInterval(timer);
				timer = setInterval(function() {
					// clearInterval(timer);
					num++;
					if (num > lies.length - 1) {
						num = 0;
					}
					ul.style.left = -num * liL + 'px';
				}, 2000);
			};
		}

		timer = setInterval(function() {
			num++;
			if (num > lies.length - 1) {
				num = 0;
			}
			ul.style.left = -num * liL + 'px';
		}, 2000)


		spans[0].onclick = function() {
			num--;
			if (num < 0) {
				num = 0;
			}
			ul.style.left = -num * liL + 'px';

		};
		spans[1].onclick = function() {
			num++;
			if (num > lies.length - 1) {
				num = 0;
			}
			ul.style.left = -num * liL + 'px';

		};

		function getStyle(obj, attr) {
			return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
		}

	})()


};