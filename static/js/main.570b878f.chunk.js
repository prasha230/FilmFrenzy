(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(28)},2:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(4),i=n.n(l);n(20),n(22),n(2);var r=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"175px"}},c.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/null/cinema---v1.png",style:{height:"75%",filter:"invert(1)"},alt:"FlimFrenzy"}),c.a.createElement("div",null,"FilmFrenzy"))))};var o=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},e.heading))},s=n(1);var m=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),l=n[0],i=n[1];return Object(a.useEffect)(function(){fetch("https://api.themoviedb.org/3/movie/".concat(e.movieId,"/videos?api_key=").concat("06e9b33440d2a29d5403d55b13da1319","&language=en-US")).then(function(e){return e.json()}).then(function(e){e.results.map(function(e){"Trailer"===e.type&&i(e.key)})})},[]),c.a.createElement("div",{className:"modalBackground"},c.a.createElement("div",{className:"modal_container"},c.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/","w500").concat(e.poster_path),className:"modal_image"}),c.a.createElement("div",{className:"modal_detail"},c.a.createElement("div",null,c.a.createElement("div",{className:"titleCloseBtn"},c.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/null/macos-close.png",onClick:function(){e.setModalIsOpen(!1)},className:"titleCloseBtn"})),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,e.movieName)),c.a.createElement("div",{className:"body"},c.a.createElement("p",null,e.desc))),c.a.createElement("div",{style:{display:"flex",justifyContent:"end",padding:"20px"}},c.a.createElement("button",{className:"trailer_button",onClick:function(){return window.open("".concat("https://www.youtube.com/watch?v=").concat(l))}},"Watch Trailer")))))};var u=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),l=n[0],i=n[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"movie_card",style:{cursor:"pointer"},onClick:function(){return i(!0)}},c.a.createElement("div",{className:"card_thumb"},c.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/","w342").concat(e.poster_path),alt:"Poster"})),c.a.createElement("div",{className:"card_title"},e.movie.title)),l&&c.a.createElement(m,{setModalIsOpen:i,movieName:e.movie.title,desc:e.movie.overview,poster_path:e.poster_path,movieId:e.movie.id}))};var d=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),l=n[0],i=n[1];return Object(a.useEffect)(function(){fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("06e9b33440d2a29d5403d55b13da1319")).then(function(e){return e.json()}).then(function(e){i(e.results)})},[]),c.a.createElement("div",{className:"movie_list"},l.map(function(e){return c.a.createElement(u,{key:e.id,movie:e,poster_path:e.poster_path})}))},p=n(5),v=n(6),h=n(9),E=n(7),f=n(10),g=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{style:{display:"flex",width:"180px",justifyContent:"space-between",alignItems:"center"}},c.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/null/cinema---v1.png",style:{height:"20%",filter:"invert(1)"},alt:"FlimFrenzy"}),c.a.createElement("div",null,"FilmFrenzy")),c.a.createElement("div",null,"TMDB"))}}]),t}(a.Component);var b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r,null),c.a.createElement(o,{heading:"Trending Movies"}),c.a.createElement(d,null),c.a.createElement(g,null))},y=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,29)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),l(e),i(e)})},w=n(8),j=n.n(w);i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j.a,{url:"https://img.icons8.com/ios-glyphs/30/null/cinema---v1.png"}),c.a.createElement(b,null))),y()}},[[11,3,2]]]);
//# sourceMappingURL=main.570b878f.chunk.js.map