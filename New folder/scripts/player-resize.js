function handleResize(){function e(){var e=document.querySelector("#header"),t=document.querySelector("#footer"),i=document.querySelector("#title"),h=document.querySelector("#tools"),d=document.querySelector("#messenger");return{body:{height:document.body.clientHeight,width:document.body.clientWidth},header:{element:e,height:e?e.clientHeight+2:0,width:e?e.clientWidth:0},footer:{element:t,height:t?t.clientHeight:0,width:t?t.clientWidth:0},title:{height:i?i.clientHeight:0,width:i?i.clientWidth:0},tools:{element:h,height:h?h.clientHeight:0,width:h?h.clientWidth:0},messenger:{width:d?d.clientWidth:0}}}var t=e(),i=document.querySelector("#player-wrap"),h=document.querySelector("#streamTextPlayer"),d=document.querySelector("#messenger-wrap"),n=document.querySelector("#messenger");if(h&&(h.style.height=t.body.height-t.header.height-t.footer.height+"px",h.style.width=t.body.width-t.messenger.width+"px"),i&&(i.style.width=t.body.width-t.messenger.width+"px"),n&&(n.style.height=t.body.height-t.header.height-t.footer.height+"px"),d&&t.messenger.width>0?d.style.width="300px":d.style.width="0px",t.tools.element){var o=t.body.width-t.title.width-50;t.tools.element.style.width=o+"px"}}function wireupResizeEvent(){window.attachEvent?window.attachEvent("onresize",handleResize):window.addEventListener("resize",handleResize),handleResize()}