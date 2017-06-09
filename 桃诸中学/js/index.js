$(function(){
	move();
	function move(){
        var oUl = $('.imgs').find('ul');
        var oLiWidth = oUl.find('li').innerWidth();
        var timer = null;

        function leftMove(){
            oUl.find('li:last').prepend(oUl);
            oUl.css('magin-left','-oLiWidth');
            oUl.animate({'margin-left':0});
        }
        function rightMove(){
            oUl.animate({'margin-left':-oLiWidth},function(){
                oUl.find('li:first').appendTo(oUl);
                oUl.css('margin-left','0');
            })
        }
        timer = setInterval(rightMove,2000);
        oUl.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(rightMove,2000);
        })

    }
	
	
	banner()
	function banner(){
		var oDl = document.getElementById('jsfz');
		var aDd = oDl.getElementsByTagName('dd');
		var dysj = document.querySelector('.dysj');
		var texts = dysj.querySelectorAll('.school_text');
		
		for(var i=0;i<aDd.length;i++){
			aDd[i].index = i;
			aDd[i].onmouseover = function(){
				for(var i =0;i<aDd.length;i++){
					aDd[i].className = '';
					texts[i].style.display = 'none';
				}
				aDd[this.index].className = 'active';
				texts[this.index].style.display = 'block';
			}
			
		}
	}
})
