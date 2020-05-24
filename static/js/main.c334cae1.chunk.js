(this["webpackJsonpifit-page"]=this["webpackJsonpifit-page"]||[]).push([[0],{101:function(n,e,t){n.exports=t(217)},106:function(n,e,t){},217:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(77),o=t.n(i),l=(t(106),t(2)),c=t(1),u=t(78);function m(){var n=Object(l.a)(["\n  body, html { \n    box-sizing: border-box;\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    user-select: none;\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"]);return m=function(){return n},n}var s=Object(c.createGlobalStyle)(m()),d=t(7),p=t(3);function f(){var n=Object(l.a)(["\n  text-transform: uppercase;\n  background: #0069D2;\n  color: #FFF;\n  border: none;\n  border-radius: 4px;\n  padding: 10px 19px;\n  outline: none;\n  cursor: pointer;\n"]);return f=function(){return n},n}var g=c.default.button(f());function b(){var n=Object(l.a)(["\n  background: #969799;\n  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);\n  &:hover {\n    transform: scale(1.01);\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(l.a)(["\n  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);\n  &:hover {\n    transform: scale(1.01);\n  }\n"]);return x=function(){return n},n}function h(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  gap: 20px;\n  margin: 10px 20px;\n"]);return h=function(){return n},n}function v(){var n=Object(l.a)(["\n  font-weight: 400;\n  border-bottom: 1px solid black;\n  padding: 20px;\n  &:hover {\n    color: rgba(0,0,0,0.8);\n  }\n"]);return v=function(){return n},n}function E(){var n=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 2px solid #d5d6d6;\n  padding: 20px;\n  text-transform: uppercase;\n  &:hover {\n    color: rgba(46, 49, 52);\n  }\n"]);return E=function(){return n},n}function w(){var n=Object(l.a)(["\n  width: 100%;\n  margin: 20px 0;\n  #product-0 {\n    border-top: 2px solid #d5d6d6;\n  }\n  #site-item-0 {\n    border-top: 1px solid black;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n  position: absolute;\n  top: 48px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-bottom: 20px;\n  background: #FFF;\n  z-index: 101;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return y=function(){return n},n}var j=c.default.div(y()),k=c.default.ul(w()),O=c.default.li(E()),_=c.default.li(v()),U=c.default.div(h()),F=Object(c.default)(g)(x()),S=Object(c.default)(g)(b());var M=function(){return a.a.createElement(j,null,a.a.createElement(k,null,a.a.createElement(p.b,{to:"#"},a.a.createElement(O,{id:"product-0"},"Blog")),a.a.createElement(p.b,{to:"#"},a.a.createElement(O,null,"Nourish")),a.a.createElement(p.b,{to:"#"},a.a.createElement(O,null,"Product"))),a.a.createElement(k,null,a.a.createElement(p.b,{to:"#"},a.a.createElement(_,{id:"site-item-0"},"Exercise")),a.a.createElement(p.b,{to:"#"},a.a.createElement(_,null,"Nutrition")),a.a.createElement(p.b,{to:"#"},a.a.createElement(_,null,"Activity")),a.a.createElement(p.b,{to:"#"},a.a.createElement(_,null,"Sleep"))),a.a.createElement(U,null,a.a.createElement(p.b,{to:"#"},a.a.createElement(F,null,"Sign Up")),a.a.createElement(p.b,{to:"#"},a.a.createElement(S,null,"Log In"))))};function z(){var n=Object(l.a)([""]);return z=function(){return n},n}function C(){var n=Object(l.a)(["\n  position: absolute;\n  left: 18px;\n  height: 28px;\n  width: 28px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  align-items: center;\n  cursor: pointer;\n  .icon {\n    display: inline-block;\n    .line1,\n    .line2,\n    .line3 {\n      margin: 6px 0;\n      height: 2px;\n      width: 35px;\n      background: rgba(46, 49, 52, 0.8);\n      transition: transform 0.4s ease;\n    }\n\n    .view.line1 {\n      -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n      transform: rotate(-45deg) translate(-9px, 6px);\n    }\n\n    .view.line2 {\n      opacity: 0;\n    }\n\n    .view.line3 {\n      -webkit-transform: rotate(45deg) translate(-4px, -8px);\n      transform: rotate(45deg) translate(-4px, -8px);\n    }\n  }\n"]);return C=function(){return n},n}function H(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 15px 23px 15px 40px;\n  background: #fff;\n  border-bottom: 1px solid #d5d6d6;\n"]);return H=function(){return n},n}var V=c.default.div(H()),N=c.default.div(C()),B=c.default.img(z());var I=function(n){return a.a.createElement(V,null,a.a.createElement(N,{onClick:function(){return n.handleMenuClick()},viewMenu:n.viewMenu},a.a.createElement("div",{className:"icon"},a.a.createElement("div",{className:n.viewMenu?"line1 view":"line1"}),a.a.createElement("div",{className:n.viewMenu?"line2 view":"line2"}),a.a.createElement("div",{className:n.viewMenu?"line3 view":"line3"}))),a.a.createElement(p.b,{to:"#"},a.a.createElement(B,{src:"".concat("/ifit-page","/img/Group 13 Copy.png"),alt:""})))},G=t(221),L=t(220);function Y(){var n=Object(l.a)(["\n  padding: 10px 19px;\n  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);\n  &:hover {\n    transform: scale(1.01);\n  }\n"]);return Y=function(){return n},n}function A(){var n=Object(l.a)(["\n  text-transform: uppercase;\n  margin: 29px 25px;\n  padding-bottom: 5px;\n  text-decoration: underline solid transparent;\n  transition: border-bottom 0.3s ease;\n  border-bottom: 1px solid transparent;\n  &:hover {\n    border-bottom: 1px solid black; \n  }\n"]);return A=function(){return n},n}function P(){var n=Object(l.a)(["\n  display: flex;\n"]);return P=function(){return n},n}function R(){var n=Object(l.a)(["\n\n"]);return R=function(){return n},n}function q(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-size: 14px;\n  padding-left: 40px;\n  padding-right: 23px;\n  background: #fff;\n  border-bottom: 0.5px solid #d5d6d6;\n  border-top: 1px solid #d5d6d6;\n  transition: transform 550ms;\n  transform: translateY(0);\n  ","\n"]);return q=function(){return n},n}var T=c.default.div(q(),(function(n){return n.isHeroVisible?"\n        transform: translateY(0);\n      ":"\n        transform: translateY(-48px);\n      "})),W=c.default.img(R()),D=c.default.ul(P()),J=c.default.li(A()),X=Object(c.default)(g)(Y());var K=function(n){return a.a.createElement(T,{isHeroVisible:n.isHeroVisible},a.a.createElement(p.b,{to:"#"},a.a.createElement(W,{src:"".concat("/ifit-page","/img/Group 13 Copy.png"),alt:""})),a.a.createElement(D,null,a.a.createElement(p.b,{to:"#"},a.a.createElement(J,null,"Exercise")),a.a.createElement(p.b,{to:"#"},a.a.createElement(J,null,"Nutrition")),a.a.createElement(p.b,{to:"#"},a.a.createElement(J,null,"Activity")),a.a.createElement(p.b,{to:"#"},a.a.createElement(J,null,"Sleep"))),a.a.createElement(X,null,"Sign Up"))};function Z(){var n=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  border-right: 2px solid #d5d6d6;\n  padding: 16.5px 43px;\n  color: rgba(46,49,52,0.8);\n  text-transform: uppercase;\n  &:hover {\n    color: rgba(46, 49, 52);\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n  display: flex;\n"]);return $=function(){return n},n}function Q(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  background: #FFF;\n  border-bottom: 0.5px solid #d5d6d6;\n  transition: transform 500ms;\n  transform: translateY(0);\n  transform: ",";\n  ","\n"]);return Q=function(){return n},n}var nn=c.default.div(Q(),(function(n){return n.isHeroVisible?"translateY(0)":"translateY(-%100)"}),(function(n){return n.isHeroVisible?"\n        transform: translateY(0);\n      ":"\n        transform: translateY(-100%);\n      "})),en=c.default.ul($()),tn=c.default.li(Z());var rn=function(n){return a.a.createElement(nn,{isHeroVisible:n.isHeroVisible},a.a.createElement(en,null,a.a.createElement(p.b,{to:"#"},a.a.createElement(tn,null,"Blog")),a.a.createElement(p.b,{to:"#"},a.a.createElement(tn,null,"Nourish")),a.a.createElement(p.b,{to:"#"},a.a.createElement(tn,null,"Shop"))))};function an(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: fixed;\n  z-index: 100;\n"]);return an=function(){return n},n}var on=c.default.header(an());var ln=function(n){return a.a.createElement(on,{id:"header"},a.a.createElement(G.a,{as:L.a,minWidth:780},a.a.createElement(rn,{isHeroVisible:n.isHeroVisible}),a.a.createElement(K,{isHeroVisible:n.isHeroVisible})),a.a.createElement(G.a,{as:L.a,maxWidth:780},a.a.createElement(I,{handleMenuClick:n.handleMenuClick,viewMenu:n.viewMenu})))};function cn(){var n=Object(l.a)(["\n  opacity: 0;\n  transition: opacity 2s ease-in;\n  will-change: opacity;\n  ","\n"]);return cn=function(){return n},n}var un=c.default.div(cn(),(function(n){if(n.isVisible)return"\n        opacity: 1;\n      "}));var mn=function(n){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),i=t[0],o=t[1],l=Object(r.useRef)();return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(n){n.forEach((function(n){o(n.isIntersecting)}))}));n.observe(l.current);var e=l.current;return function(){return n.unobserve(e)}}),[]),a.a.createElement(un,{isVisible:i,ref:l},n.children)};function sn(){var n=Object(l.a)(["\n  padding: 15px 85px;\n  margin-top: 48px;\n  font-weight: 550;\n  &:hover {\n    background-color: rgba(90,78,189,1);\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  font-size: 2em;\n  padding: 10px;\n  line-height: 1.2em;\n  color: #FFF;\n  text-align: center;\n  animation: "," 1s ease-in forwards;\n  @media (min-width: 780px) {\n    font-size: 3em;\n  }\n  @media (min-width: 1100px) {\n    font-size: 4em;\n  }\n"]);return dn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return pn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  position: absolute;\n  z-index: 5;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */\n"]);return fn=function(){return n},n}function gn(){var n=Object(l.a)(["\n  width: 100%;\n"]);return gn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  margin-top: 57px;\n  @media (min-width: 780px) {\n    margin-top: 126px;\n  }\n"]);return bn=function(){return n},n}var xn=c.default.div(bn()),hn=c.default.img(gn()),vn=c.default.div(fn()),En=Object(c.keyframes)(pn()),wn=c.default.h1(dn(),En),yn=Object(c.default)(g)(sn());var jn=function(n){return a.a.createElement(xn,{id:"hero"},a.a.createElement(hn,{src:"/ifit-page/img/hero.webp",alt:""}),a.a.createElement(vn,null,a.a.createElement(mn,null,a.a.createElement(wn,{isHeroVisible:n.isHeroVisible},"The best personal training, right in your own home")),a.a.createElement(yn,null,"Join iFit Coach")))};function kn(){var n=Object(l.a)(["\n  text-align: center;\n"]);return kn=function(){return n},n}function On(){var n=Object(l.a)(["\n"]);return On=function(){return n},n}function _n(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 24px;\n  margin-bottom: 16px;\n"]);return _n=function(){return n},n}function Un(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 100%;\n"]);return Un=function(){return n},n}var Fn=c.default.div(Un()),Sn=c.default.div(_n()),Mn=c.default.img(On()),zn=c.default.p(kn());var Cn=function(n){return a.a.createElement(Fn,null,a.a.createElement(Sn,null,a.a.createElement(Mn,{src:n.review.imgUrl,alt:""})),a.a.createElement(zn,null,'"',n.review.content,'"'))},Hn=[{id:0,author:"GearJunkie",imgUrl:"".concat("/ifit-page","/img/reviews/gearjunkie-vector-logo.png"),content:"You focus on putting in the work, and the technology handles the rest."},{id:1,author:"Wired",imgUrl:"".concat("/ifit-page","/img/reviews/wired_logo.png"),content:"Literally transports you from home to wherever you choose to run."},{id:2,author:"Mashable",imgUrl:"".concat("/ifit-page","/img/reviews/mashable_logo.png"),content:"Breathes new life into a tired, old running routine."},{id:3,author:"Graham",imgUrl:"".concat("/ifit-page","/img/reviews/wired_logo.png"),content:"Simply makes me excited every day to get outside and be active."},{id:4,author:"Sharon",imgUrl:"".concat("/ifit-page","/img/reviews/wired_logo.png"),content:"After trying so many different ways to keep my workout fresh, this is the best."}];function Vn(){var n=Object(l.a)(["\n  right: 16px;\n"]);return Vn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  left: 16px;\n"]);return Nn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: 2px solid #8B919E; \n  background: rgba(0,12,40,0.79);\n  cursor: pointer;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    transform: scale(1.05);\n  }\n  z-index: 20;\n"]);return Bn=function(){return n},n}function In(){var n=Object(l.a)(["\n  background: #FFF;\n  height: 184px;\n  min-width: 320px;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);\n  margin: 0 6px;\n  @media (min-width: 1200px) {\n    min-width: 480px;\n  }\n  transition: all 0.6s linear;\n  transform: translateX(0);\n  transform: scaleX(100%);\n  ","\n\n  ","\n"]);return In=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  width: 100%;\n  background: #F4F5F7;\n  overflow: hidden;\n  p {\n    text-align: center;\n  }\n"]);return Gn=function(){return n},n}var Ln=c.default.div(Gn()),Yn=c.default.div(In(),(function(n){if(n.isGoingRight)return"\n        transform: translateX(-100%);\n      "}),(function(n){if(n.isGoingLeft)return"\n\n      "})),An=c.default.div(Bn()),Pn=Object(c.default)(An)(Nn()),Rn=Object(c.default)(An)(Vn());var qn=function(){var n=Object(r.useState)(0),e=Object(d.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),l=Object(d.a)(o,2),c=l[0],u=l[1],m=Object(r.useState)(!1),s=Object(d.a)(m,2),p=s[0],f=s[1],g=function(n,e){return"left"===e?n<Hn.length-1?n+1:0:"right"===e?n>0?n-1:Hn.length-1:void 0};return a.a.createElement(Ln,null,a.a.createElement(Pn,{onMouseDown:function(){return f(!0),void i(g(t,"left"))},onMouseUp:function(){return console.log("done left"),void f(!1)}},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/chevron_left.png"),alt:""})),a.a.createElement(Rn,{onMouseDown:function(){return console.log("moving right"),i(g(t,"right")),void u(!0)},onMouseUp:function(){return console.log("doneright"),void u(!1)}},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/chevron_right.png"),alt:""})),function(n){var e=Hn.slice(n),t=Hn.slice(0,n),r=e.concat(t),i=[];return r.forEach((function(n){return i.push(a.a.createElement(Yn,{key:"review~".concat(n.id),isGoingRight:c,isGoingLeft:p},a.a.createElement(Cn,{review:n})))})),i}(t))};function Tn(){var n=Object(l.a)(["\n  height: 28px;\n  width: 28px;\n  align-self: baseline;\n  justify-self: end; \n  border-radius: 4px;\n"]);return Tn=function(){return n},n}function Wn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  &>* {\n    margin-bottom: 12px;\n  }\n  .statistic-box {\n    display: flex;\n    line-height: 12px;\n    font-size: 10px;\n  }\n  h3 {\n    font-size: 16px;\n    letter-spacing: 0.3;\n    line-height: 18px;\n  }\n  .stat-icon {\n    height: 12px;\n    width: 12px;\n    margin-right: 4px;\n  }\n  p {\n    margin-right: 8px;\n  }\n  /* p {\n    line-height: 16px;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #0069D2;\n    letter-spacing: 0.5;\n  } */\n"]);return Wn=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  padding: 16px;\n  justify-content: space-between;\n  align-content: flex-start;\n"]);return Dn=function(){return n},n}function Jn(){var n=Object(l.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 112px;\n  background: rgba(0,12,40,0.53);\n  border-top-right-radius: 4px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .number {\n    font-size: 28px;\n    margin-bottom: 8px;\n  }\n  .workouts {\n    text-transform: uppercase;\n    font-size: 10px;\n    margin-bottom: 8px;\n  }\n  .videos {\n    border: 1px solid white;\n    height: 24px;\n    width: 24px;\n  }\n"]);return Jn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]);return Xn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 164px;\n  position: relative;\n"]);return Kn=function(){return n},n}function Zn(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-rows: 1.16fr 1fr;\n  height: 280px;\n  width: 288px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  \n  border-radius: 4px;\n  margin: 8px;\n  cursor: pointer;\n  transition: box-shadow 0.5s ease;\n  &:hover {\n    transform: translateY(-0.6px);\n    box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.33), -2px 5px 4px rgba(0, 0, 0, 0.33);\n  }\n"]);return Zn=function(){return n},n}var $n=c.default.div(Zn()),Qn=c.default.div(Kn()),ne=c.default.img(Xn()),ee=c.default.div(Jn()),te=c.default.div(Dn()),re=c.default.div(Wn()),ae=c.default.img(Tn());var ie=function(n){return a.a.createElement($n,null,a.a.createElement(Qn,null,a.a.createElement(ne,{src:n.item.imgUrl,alt:""}),n.item.workouts&&a.a.createElement(ee,null,a.a.createElement("p",{className:"number"},n.item.workouts),a.a.createElement("p",{className:"workouts"},"Workouts"),a.a.createElement("img",{src:"".concat("/ifit-page","/icons/icn_playlist copy 3.png"),alt:""}))),a.a.createElement(te,null,a.a.createElement(re,null,a.a.createElement("h3",null,n.item.title),a.a.createElement("div",{className:"statistic-box"},n.item.time&&a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{className:"stat-icon",src:"".concat("/ifit-page","/icons/icn_timer_line.png"),alt:""}),a.a.createElement("p",null,n.item.time)),n.item.amount&&a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{className:"stat-icon",src:"".concat("/ifit-page","/icons/icn_distance_line.png"),alt:""}),a.a.createElement("p",null,n.item.amount)))),a.a.createElement(ae,{src:n.item.thumbUrl})))},oe=[{id:0,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (24).png"),title:"Lake Inniscarra, Ireland -- Pyramid",time:"30:53",amount:"6,248 M",thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/puspure_sanita_avatar_002.png"),workouts:null},{id:1,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (18).png"),title:"Performance Series",time:null,amount:null,thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/francia_susan_avatar_001.png"),workouts:9},{id:2,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (25).png"),title:"Slow Pulls and Fast Intervals",time:"44:13",amount:"9,948 M",thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/Alex_Silver_Fagan.png"),workouts:null},{id:3,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (19)library4.png"),title:"20 Minutes to Toned",time:null,amount:null,thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/gregory_alex_avatar_01.png"),workouts:12},{id:4,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (32).png"),title:"Charles Race, Boston, Massachusetts",time:"36:22",amount:"8,648 M",thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/whipple_mary_hero3x_001.png"),workouts:null},{id:5,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (20).png"),title:"Full-Body HIIT Series",time:null,amount:null,thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/eden_hannah_avatar_03.png"),workouts:12},{id:6,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (35).png"),title:"Kafue River, Zambia -- Power Stroke Pyramid",time:"22:22",amount:"4,660 M",thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/nanchengwa_desmond_avatar_003.png"),workouts:null},{id:7,imgUrl:"".concat("/ifit-page","/img/desktop-library/img_marketing_web_cardimg_marketing_web_card@2x (21).png"),title:"Shred & Burn Series",time:null,amount:null,thumbUrl:"".concat("/ifit-page","/img/desktop-thumb/fonts.png"),workouts:16}];function le(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n  max-width: 1300px;\n"]);return le=function(){return n},n}var ce=c.default.div(le());var ue=function(){return a.a.createElement(ce,null,function(){var n=[];return oe.forEach((function(e){return n.push(a.a.createElement(ie,{key:"card~".concat(e.id),item:e}))})),n}())};function me(){var n=Object(l.a)(["\n  font-size: 24px;\n  line-height: 28px;\n  color: #2E3134;\n  text-align: center;\n"]);return me=function(){return n},n}function se(){var n=Object(l.a)(["\n  height: 258px;\n"]);return se=function(){return n},n}function de(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 330px;\n  width: 330px;\n  margin: 12px;\n"]);return de=function(){return n},n}var pe=c.default.div(de()),fe=c.default.img(se()),ge=c.default.h3(me());var be=function(n){return a.a.createElement(pe,null,a.a.createElement(p.b,{to:"#"},a.a.createElement(fe,{src:n.item.imgUrl,alt:""}),a.a.createElement(ge,null,n.item.name)))},xe=[{id:0,name:"Treadmills",imgUrl:"".concat("/ifit-page","/img/equipment/NTL390190664.png")},{id:1,name:"Bikes",imgUrl:"".concat("/ifit-page","/img/equipment/bikeperson.png")},{id:2,name:"Ellipticals",imgUrl:"".concat("/ifit-page","/img/equipment/ellipticalperson.png")},{id:3,name:"Strength",imgUrl:"".concat("/ifit-page","/img/equipment/6-pulley12557.png")}];function he(){var n=Object(l.a)(["\n  font-size: 24px;\n  line-height: 28px;\n  color: #34383C;\n  text-align: center;\n"]);return he=function(){return n},n}function ve(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return ve=function(){return n},n}function Ee(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ee=function(){return n},n}var we=c.default.div(Ee()),ye=c.default.div(ve()),je=c.default.h2(he());var ke=function(){return a.a.createElement(we,{id:"equip"},a.a.createElement(je,null,"Interested in our exciting iFit-enabled equipment?"),a.a.createElement(ye,null,function(){var n=[];return xe.forEach((function(e){return n.push(a.a.createElement(mn,{key:"equipment-fade~".concat(e.id)},a.a.createElement(be,{key:"equipment~".concat(e.id),item:e})))})),n}()))};function Oe(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  .legal-links {\n    display: flex;\n    padding: 5px;\n    a {\n      margin: 5px 10px;\n    }\n    p:hover {\n      text-decoration: underline;\n    }\n  }\n  p {\n    color: #fff;\n  }\n"]);return Oe=function(){return n},n}function _e(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-bottom: 2px solid #585a5d;\n  padding: 20px;\n  select {\n    position: relative;\n    background: #2e3134;\n    padding: 5px;\n    border: none;\n    outline: none;\n    font-size: 14px;\n    line-height: 16px;\n    letter-spacing: 0.5;\n    color: #fff;\n    cursor: pointer;\n  }\n  option {\n    background: white;\n    color: black;\n    padding: 5px;\n  }\n  @media (min-width: 780px) {\n    position: absolute;\n    width: 200px;\n    left: 40px;\n    border: none;\n    bottom: 15px;\n  }\n"]);return _e=function(){return n},n}function Ue(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2px solid #585a5d;\n  border-bottom: 2px solid #585a5d;\n  ul {\n    display: flex;\n  }\n  li {\n    height: 44px;\n    width: 44px;\n    margin: 16px;\n    background-image: linear-gradient(to bottom right, #0069d2, #28e1a5);\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  img {\n    margin: 2px;\n    padding: 7px;\n    background-color: #2e3134;\n    border-radius: 50%;\n  }\n"]);return Ue=function(){return n},n}function Fe(){var n=Object(l.a)(["\n  h4 {\n    margin-bottom: 16px;\n    letter-spacing: 0.5;\n  }\n  li {\n    margin-bottom: 16px;\n    color: rgba(255, 255, 255, 0.73);\n    letter-spacing: 0.3;\n    &:hover {\n      color: #fff;\n    }\n  }\n"]);return Fe=function(){return n},n}function Se(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 80px;\n  padding: 10px 15px;\n"]);return Se=function(){return n},n}var Me=c.default.div(Se()),ze=c.default.div(Fe()),Ce=c.default.div(Ue()),He=c.default.div(_e()),Ve=c.default.div(Oe());function Ne(){var n=Object(l.a)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #2E3134;\n  padding-top: 48px;\n  color: #FFF;\n"]);return Ne=function(){return n},n}var Be=c.default.div(Ne());var Ie=function(){return a.a.createElement(Be,null,a.a.createElement(Me,null,a.a.createElement(ze,null,a.a.createElement("h4",null,"Company"),a.a.createElement("ul",null,a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"About")),a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"Contact Us")),a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"Careers")))),a.a.createElement(ze,null,a.a.createElement("h4",null,"Account"),a.a.createElement("ul",null,a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"Log In")),a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"Create Account")))),a.a.createElement(ze,null,a.a.createElement("h4",null,"Support"),a.a.createElement("ul",null,a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"Help Center")),a.a.createElement(p.b,{to:"#"},a.a.createElement("li",null,"Accessibility"))))),a.a.createElement(Ce,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.youtube.com/user/iFitLive"},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/social_media/youtube.png"),alt:""}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://pinterest.com/ifit"},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/social_media/pinterest.png"),alt:""}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.facebook.com/ifit"},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/social_media/facebook.png"),alt:""}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://twitter.com/ifit"},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/social_media/twitter.png"),alt:""}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://instagram.com/ifit"},a.a.createElement("img",{src:"".concat("/ifit-page","/icons/social_media/instagram.png"),alt:""}))))),a.a.createElement(He,null,a.a.createElement("select",{name:"language",id:"language"},a.a.createElement("option",{value:"english"},"English"),a.a.createElement("option",{value:"french"},"French"),a.a.createElement("option",{value:"spanish"},"Spanish"),a.a.createElement("option",{value:"german"},"German"),a.a.createElement("option",{value:"dutch"},"Dutch"),a.a.createElement("option",{value:"polish"},"Polish"))),a.a.createElement(Ve,null,a.a.createElement("div",{className:"legal-links"},a.a.createElement(p.b,{to:"#"},a.a.createElement("p",null,"Privacy Policy")),a.a.createElement(p.b,{to:"#"},a.a.createElement("p",null,"Terms of Use"))),a.a.createElement("p",null,"\xa9 iFit.com. All Rights Reserved.")))};var Ge=function(){var n=Object(r.useState)(!0),e=Object(d.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),l=Object(d.a)(o,2),c=l[0],u=l[1],m=Object(r.useState)(!1),s=Object(d.a)(m,2),p=s[0],f=s[1],g=function(){f(!p)};return Object(r.useEffect)((function(){u(!0)}),[]),Object(r.useEffect)((function(){var n=function(){var n=document.getElementById("hero").getBoundingClientRect();n.bottom<127&&t?i(!1):n.bottom>127&&i(!0)};return c&&window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[c,t]),c&&p?a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{handleMenuClick:g,viewMenu:p}),a.a.createElement(M,null)):a.a.createElement(a.a.Fragment,null,a.a.createElement(ln,{isHeroVisible:t,handleMenuClick:g,viewMenu:p}),a.a.createElement(jn,{isHeroVisible:t}),a.a.createElement(qn,null),a.a.createElement(ue,null),a.a.createElement(ke,null),a.a.createElement(Ie,null))};function Le(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Le=function(){return n},n}var Ye=c.default.div(Le());var Ae=function(){return a.a.createElement(Ye,{id:"content"},a.a.createElement(u.Reset,null),a.a.createElement(s,null),a.a.createElement(Ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p.a,null,a.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.c334cae1.chunk.js.map