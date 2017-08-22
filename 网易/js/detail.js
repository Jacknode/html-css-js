(function() {
	var wrap = document.querySelector('#wrap');
	var ul = wrap.querySelector('#list');
	var str = '';

	for (var i = 0; i < 100; i++) {
		str += '<li>' + i + '</li>';
	}
	ul.innerHTML = str;
	mScroll({
		wrap: wrap,
		dir: 'y',
		over: 'none',
		showBar: false
	})
})();