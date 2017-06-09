window.onload = function() {
	var page = document.querySelector('.page');
	var pageA = page.querySelectorAll('a');
	for (var i = 0; i < pageA.length; i++) {
		pageA[i].onclick = function() {
			for (var i = 0; i < pageA.length; i++) {
				pageA[i].className = '';
			}
			this.className = 'active';
		};
	}
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
};