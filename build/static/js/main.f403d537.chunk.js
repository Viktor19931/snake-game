(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{15:function(n,t,e){n.exports=e(22)},22:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(11),c=e.n(a),i=e(5),u=e(3),f=e(1),s=e(2);function l(){var n=Object(f.a)(["\n  width: 2%;\n  height: 2%;\n  z-index: 1;\n  position: absolute;\n  background-color: red;\n  border: 1px solid #fff;\n  top: ","%;\n  left: ","%;\n"]);return l=function(){return n},n}function b(){var n=Object(f.a)(["\n  width: 600px;\n  height: 600px;\n  overflow: hidden;\n  margin: 50px auto;\n  position: relative;\n  border: 2px solid #000;\n"]);return b=function(){return n},n}function d(){var n=Object(f.a)(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border: 1px solid violet;\n  box-sizing: border-box;\n  border-radius: 0 6px 6px 0;\n"]);return d=function(){return n},n}function p(){var n=Object(f.a)(['\n  top: 4px;\n  width: 7px;\n  height: 2px;\n  right: -7px;\n  z-index: -1;\n  position: absolute;\n  background-color: red;\n  &:before {\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0px;\n    position: absolute;\n    border-style: solid;\n    border-width: 1px 3px 1px 0;\n    border-color: transparent #fff transparent transparent;\n  }\n']);return p=function(){return n},n}function h(){var n=Object(f.a)(["\n  top: unset;\n  bottom: 0.5px;\n"]);return h=function(){return n},n}function v(){var n=Object(f.a)(['\n  height: 4px;\n  width: 4px;\n  position: absolute;\n  top: 0.5px;\n  right: 4px;\n  background-color: #fff;\n  border-radius: 50%;\n  &:before {\n    right: 0;\n    top: 1px;\n    width: 2px;\n    content: "";\n    height: 2px;\n    border-radius: 50%;\n    position: absolute;\n    background-color: #000;\n  }\n']);return v=function(){return n},n}function O(){var n=Object(f.a)(["\n    transform: rotate(","deg);\n  "]);return O=function(){return n},n}function g(){var n=Object(f.a)(["\n  background-color: violet;\n  border-radius: 0 6px 6px 0;\n  ","\n"]);return g=function(){return n},n}function j(){var n=Object(f.a)(["\n  width: 2%;\n  height: 2%;\n  z-index: 2;\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #000;\n  top: ","%;\n  left: ","%;\n"]);return j=function(){return n},n}var m=s.b.div(j(),(function(n){return n.top}),(function(n){return n.left})),x=Object(s.b)(m)(g(),(function(n){var t=n.direction;return Object(s.a)(O(),function(n){return"DOWN"===n?90:"UP"===n?270:"LEFT"===n?180:0}(t))})),E=s.b.div(v()),k=Object(s.b)(E)(h()),w=s.b.div(p()),T=s.b.div(d()),I=s.b.div(b()),R=s.b.div(l(),(function(n){return n.top}),(function(n){return n.left})),F=function(n){var t=n.snakeCoordinates,e=n.direction;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,Object.assign({direction:e},{left:t[t.length-1][0],top:t[t.length-1][1]}),o.a.createElement(T,null,o.a.createElement(E,null),o.a.createElement(k,null),o.a.createElement(w,null))),t.slice(0,-1).map((function(n){return o.a.createElement(m,{key:"".concat(n[0],"-").concat(n[1]),left:n[0],top:n[1]})})))},W=function(n){var t=n.foodCoordinates;return o.a.createElement(R,{left:t[0],top:t[1]})},y=function(){var n=Math.floor,t=Math.random;return[2*n((98*t()+1)/2),2*n((98*t()+1)/2)]},C=[[0,0],[2,0],[4,0]],G=function(){var n=Object(r.useState)(C),t=Object(u.a)(n,2),e=t[0],a=t[1],c=Object(r.useState)(y()),f=Object(u.a)(c,2),s=f[0],l=f[1],b=Object(r.useState)("RIGHT"),d=Object(u.a)(b,2),p=d[0],h=d[1],v=Object(r.useState)(500),O=Object(u.a)(v,2),g=O[0],j=O[1],m=Object(r.useState)(0),x=Object(u.a)(m,2),E=x[0],k=x[1],w={37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},T=Object(r.useCallback)((function(n){var t,e;t=p,e=w[n.keyCode],!("LEFT"===t&&"RIGHT"===e||"RIGHT"===t&&"LEFT"===e||"UP"===t&&"DOWN"===e||"DOWN"===t&&"UP"===e)&&h(w[n.keyCode])}),[p,w]),R=function(){g>10&&j(g-10)},G=function(){var n=Object(i.a)(e);n.unshift(e[0]),a(n)};Object(r.useEffect)((function(){!function(){var n=e[e.length-1];n[0]===s[0]&&n[1]===s[1]&&(l(y()),k((function(n){return n+1})),G(),R())}(),function(){var n=Object(i.a)(e),t=e[e.length-1];n.pop(),n.forEach((function(n){n[0]===t[0]&&n[1]===t[1]&&H()}))}(),function(){var n=e[e.length-1];if(n[0]>99||n[1]>99||n[0]<0||n[1]<0){var t=Object(i.a)(e),r=t[t.length-1];switch(p){case"RIGHT":r=[0,r[1]];break;case"LEFT":r=[98,r[1]];break;case"DOWN":r=[r[0],0];break;case"UP":r=[r[0],98]}t.push(r),t.shift(),setTimeout((function(){return a(t)}),0)}}()}));var H=function(){h("RIGHT"),a(C),k(0)};return function(n,t){var e=Object(r.useRef)(),o=Object(r.useRef)();Object(r.useEffect)((function(){e.current=n}),[n]),Object(r.useEffect)((function(){return o.current=setInterval((function(){e.current()}),t),function(){return clearInterval(o.current)}}),[t])}((function(){var n=Object(i.a)(e),t=n[n.length-1];switch(p){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}n.push(t),n.shift(),console.log(n),a(n)}),g),Object(r.useEffect)((function(){document.onkeydown=T}),[T]),o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Your score is ".concat(E," ")),o.a.createElement(I,null,o.a.createElement(F,{snakeCoordinates:e,direction:p}),o.a.createElement(W,{foodCoordinates:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f403d537.chunk.js.map