(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{39:function(e,t,i){e.exports={card:"MoviePreview_card__2eHxS",movie__title:"MoviePreview_movie__title__Ms-OH"}},40:function(e,t,i){e.exports={list:"MovieList_list__3aC43",list_item:"MovieList_list_item__1eUj5"}},43:function(e,t,i){"use strict";i(0);var a=i(9),s=i(2),c=i(39),n=i.n(c),r=i(1),o=function(e){var t=e.imgSrc,i=e.title;return Object(r.jsxs)("div",{className:n.a.card,children:[Object(r.jsx)("div",{className:n.a.movie_thumb,children:Object(r.jsx)("img",{src:t,alt:i})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:n.a.movie__title,children:i})})]})},l=i(40),u=i.n(l);t.a=Object(s.f)((function(e){var t=e.movies,i=e.location;return Object(r.jsx)("ul",{className:u.a.list,children:t.map((function(e){var t=e.id,s=e.poster_path,c=e.title;return Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{className:u.a.list_item,to:{pathname:"/movies/".concat(t),state:{from:i}},children:Object(r.jsx)(o,{imgSrc:"https://image.tmdb.org/t/p/w500".concat(s),title:c})})},t)}))})}))},71:function(e,t,i){e.exports={search__field:"MoviesView_search__field__2KU0z",input:"MoviesView_input__1l5hv",search__button:"MoviesView_search__button__WfffY"}},76:function(e,t,i){"use strict";i.r(t);var a=i(36),s=i(37),c=i(42),n=i(41),r=i(0),o=i(38),l=i.n(o),u=i(43),h=i(71),_=i.n(h),m=i(1),v=function(e){Object(c.a)(i,e);var t=Object(n.a)(i);function i(){var e;Object(a.a)(this,i);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={query:"",movies:[]},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),l.a.get("https://api.themoviedb.org/3/search/movie?api_key=0e02bce2bb8651f28e47e5fdc0b7d325&query=".concat(e.state.query)).then((function(t){return e.setState({movies:t.data.results})})),e.setState({query:""})},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this.state,t=e.movies,i=e.query;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:_.a.search__field,children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{className:_.a.input,onChange:this.handleChange,type:"text",autoComplete:"off",placeholder:"Search for a movie",value:i}),Object(m.jsx)("button",{type:"submit",className:_.a.search__button,children:Object(m.jsx)("span",{children:"Search"})})]})}),Object(m.jsx)(u.a,{movies:t})]})}}]),i}(r.Component);t.default=v}}]);
//# sourceMappingURL=movies-view.46b7d8fa.chunk.js.map