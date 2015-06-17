###parallax scorlling demo
===========================
一个视差滚动的简单demo,主要利用了css的clip属性。
```css
/*例如*/ clip: rect(-1714px auto -909px 0px);
```
###clip属性

描述：剪切元素，剪切顺序为顺时针（上，右，下，左）;

右为auto可以理解为100%，左边为0，例子中右边和左边不发生剪切。

###demo提取的算法

clip里的top值为: div自身的Top位置－文字自身的位置top－页面的scrollTop

clip里的bottom值为:div自身的高+(div自身的Top位置－文字自身的位置top)-页面的scrollTop

###例子描述

当页面出发scroll事件时，页面整体向上移动，滚动条向下移动，
clip top值减小，达到第二张背景图位置时，第二张图上的文字被显示出来。
同时clip bottom减小 当第三张图出来时，文字被第二张图的文字被隐藏。


===========================
[线上demo地址：http://olliesk8.github.io/Parallax_Scrolling_demo/](http://olliesk8.github.io/Parallax_Scrolling_demo/ "悬停显示")

