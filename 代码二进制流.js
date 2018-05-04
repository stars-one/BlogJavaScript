<script type="text/javascript">  
        window.onload=function(){  
            var c = document.createElement("canvas");
			  
            var ctx = c.getContext("2d");  
            c.id = "mycanvas";  
            
         var home = document.getElementById("home");
		
        c.height = home.offsetHeight;//设置宽
		c.width = document.body.offsetWidth;//设置高

		var mdiv = document.createElement("div");//通过js创建一个div
	
		mdiv.id = "mdiv";//设置div的id
		mdiv.appendChild(c);  //div中添加canvas画布
        document.body.appendChild(mdiv);//body添加div
		
            //要掉落的文字  
            var txts = "01";  
            //转换为数组  
            txts = txts.split("");  
              
            var font_size = 16;  
            var columns = c.width/font_size; //计算纵队数  
              
            var drops = [];  
            //初始值  
            for(var x = 0; x < columns; x++)  
                drops[x] = 1;   
              
            //窗体大小发生改变  
            window.onresize = function(){  
                //使绘图区域全屏  
                c.height = window.innerHeight;  
                c.width = window.innerWidth;  
                columns = c.width/font_size; //计算纵队数  
                for(var x = 0; x < columns; x++)  
                    drops[x] = 1;  
            }  
              
            //进入全屏  
            function requestFullScreen() {  
                var de = document.documentElement;  
                if (de.requestFullscreen) {  
                    de.requestFullscreen();  
                } else if (de.mozRequestFullScreen) {  
                    de.mozRequestFullScreen();  
                } else if (de.webkitRequestFullScreen) {  
                    de.webkitRequestFullScreen();  
                }  
            }  
              
            //添加点击监听事件（点击全屏）  
            /*document.body.addEventListener('click',function(){  
                requestFullScreen(); //调用全屏  
            },false);  */
              
            //绘制下落的文字  
            function draw()  
            {  
                //让背景逐渐由透明到不透明  
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";  
                ctx.fillRect(0, 0, c.width, c.height);  
                  
                ctx.fillStyle = "#0F0"; //文本颜色（绿色）  
                ctx.font = font_size + "px arial";  
                //逐行输出文字  
                for(var i = 0; i < drops.length; i++)  
                {  
                    //随机取要输出的文字  
                    var text = txts[Math.floor(Math.random()*txts.length)];  
                    //输出文字，注意坐标的计算  
                    ctx.fillText(text, i*font_size, drops[i]*font_size);  
                      
                    //如果绘满一屏或随机数大于0.95（此数可自行调整，效果会不同）  
                    if(drops[i]*font_size > c.height || Math.random() > 0.95)  
                        drops[i] = 0;  
                      
                    //用于Y轴坐标增加  
                    drops[i]++;  
                }  
            }  
              
            setInterval(draw, 33);//定时执行  
        }  
    </script>