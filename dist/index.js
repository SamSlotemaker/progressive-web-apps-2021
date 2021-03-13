"use strict";var express=require("express"),path=require("path"),fetch=require("node-fetch");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var express__default=_interopDefaultLegacy(express),path__default=_interopDefaultLegacy(path),fetch__default=_interopDefaultLegacy(fetch);const baseURL="https://api.rawg.io/api/";var api=async function(a,t){try{let e=baseURL+a;t&&(e+=t+"&"),t||(e+="?"),e+="key=b7f15a856765429c84087fadd9e167e7";const r=await fetch__default.default(e);return await r.json()}catch(e){return console.log(e),e}},genres=function(e){const a=e.results;e=a.map(e=>e.genres[0].name);return[...new Set(e)]},filter=function(e,a,t){return a?filterOnSearch(e,a):t?filterOnGenre(e,t):e};function filterOnGenre(e,a){return"all"===a?e:e.filter(e=>e.genres[0].name===a)}function filterOnSearch(e,a){return e.filter(e=>e.name.toLowerCase().includes(a))}const subjectGames="games",subjectPlatforms="platforms",pageSize="?page_size=20",page="&page=1",pageQuery=pageSize+page,ordering="?ordering=-games_count";let gameData=null,platformData=null;var renderOverview=async function(e,a){gameData||platformData||(gameData=await api(subjectGames,pageQuery),platformData=await api(subjectPlatforms,ordering),console.log("retrieve data..."));var t=genres(gameData),r=gameData.results,n=platformData.results,r=filter(r,e.query.search,e.query.genres);a.render("overview",{games:r,platforms:n,genres:t,filteredGenre:e.query.genres,searchQuery:e.query.search})},renderDetail=async function(e,a){e=await api("games/"+e.params.id);a.render("detail",{game:e})};const app=express__default.default(),port=process.env.PORT||3e3;app.use(express__default.default.static(path__default.default.join(__dirname,"static/public"))),app.use(express__default.default.urlencoded({extended:!1})),app.set("view engine","ejs"),app.set("views",path__default.default.join(__dirname,"views/pages")),app.get("/",renderOverview),app.get("/games/:id",renderDetail),app.get("*",(e,a)=>{a.render("error")}),app.listen(port,()=>{console.log(`app listening on port: ${port}`)});var src={};module.exports=src;
