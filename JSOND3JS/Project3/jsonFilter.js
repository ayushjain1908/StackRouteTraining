fs = require('fs')
fs.readFile('data/datafile.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(typeof data);
  data = JSON.parse(data);
  var popData = [];
  var gdpData = [];
  var purpowData = [];
  var contPopData =[];
  var contGdpData = [];
  var popGrowthData = [];
  var purpowGrowthData = [];
  data.forEach ( function(val){
     var obj1 = {};
     var obj2 = {};
     var obj3 = {};
     var temp ={};
     //console.log(val);
     obj1.country = val['Country Name'];
     obj1.population = val["Population (Millions) - 2013"];
     popData.push(obj1);
     obj2.country = val['Country Name'];
     obj2.gdp = val["GDP Billions (US$) - 2013"];
     gdpData.push(obj2);
     obj3.country = val['Country Name'];
     obj3.purpow = val["Purchasing Power in Billions ( Current International Dollar) - 2013"];
     purpowData.push(obj3);

     temp.country = val['Country Name'];
     temp.growth1 = val["Population (Millions) - 2011"] - val["Population (Millions) - 2010"];
     temp.growth2 = val["Population (Millions) - 2012"] - val["Population (Millions) - 2011"];
     temp.growth3 = val["Population (Millions) - 2013"] - val["Population (Millions) - 2012"];
     popGrowthData.push(temp);

     temp={};
      temp.country = val['Country Name'];
      temp.growth1 = val["Purchasing Power in Billions ( Current International Dollar) - 2011"] - val["Purchasing Power in Billions ( Current International Dollar) - 2010"];
      temp.growth2 = val["Purchasing Power in Billions ( Current International Dollar) - 2012"] - val["Purchasing Power in Billions ( Current International Dollar) - 2011"];
      temp.growth3 = val["Purchasing Power in Billions ( Current International Dollar) - 2013"] - val["Purchasing Power in Billions ( Current International Dollar) - 2012"];
      purpowGrowthData.push(temp);



     //console.log(obj);

  });
  var asia = {};
  var sa ={};
  var na ={};
  var aus ={};
  var eur ={};
  var afr = {};
  var asiaPop=0;
  var asiaGdp = 0;
  var saPop = 0;
  var saGdp = 0;
  var naPop = 0;
  var naGdp =0;
  var ausPop = 0;
  var ausGdp = 0;
  var eurPop = 0;
  var eurGdp = 0;
  var afrPop = 0;
  var afrGdp = 0;
  var countryToContinent ={

      Argentina:"South America",
      Australia:"Australia",
      Brazil : "South America",
      Canada: "North America",
      China:"Asia",
      France:"Europe",
      Germany:"Europe",
      India:"Asia",
      Indonesia:"Asia",
      Italy:"Europe",
      Japan:"Asia",
      Mexico:"North America",
      'Republic of Korea':"Asia",
      Russia:"Europe",
      'Saudi Arabia':"Asia",
      'South Africa':"Africa",
      Turkey:"Asia",
      'United Kingdom':"Europe",
      USA:"North America",
  }
  var contPop ={
    Africa : 0,
    Asia : 0,
    Australia:0,
    Europe:0,
    'North America' : 0,
    'South America':0
  }
  var contGdp ={
    Africa : 0,
    Asia : 0,
    Australia:0,
    Europe:0,
    'North America' : 0,
    'South America':0
  }
  
 for(var i=0;i<popData.length;i++){
   contPop[countryToContinent[popData[i].country]] += popData[i].population
   contGdp[countryToContinent[popData[i].country]] += gdpData[i].gdp;

 }
 console.log(contPop);

  afr.continent = "Africa";
  afr.population = contPop['Africa'];
  contPopData.push(afr);
  afr ={};
  afr.continent = "Africa";
  afr.gdp =contGdp['Africa'];
  contGdpData.push(afr);

  asia.continent = "Asia";
  asia.population = contPop['Asia'];
  contPopData.push(asia);
  asia ={};
  asia.continent = "Asia";
  asia.gdp = contGdp["Asia"];
  contGdpData.push(asia);

  aus.continent = "Australia";
  aus.population = contPop['Australia'];
  contPopData.push(aus);
  aus ={};
  aus.continent = "Australia";
  aus.gdp = contGdp['Australia'];
  contGdpData.push(aus);

  eur.continent = "Europe";
  eur.population = contPop['Europe'];
  contPopData.push(eur);
  eur ={};
  eur.continent = "Europe";
  eur.gdp = contGdp['Europe'];
  contGdpData.push(eur);

  na.continent = "North America";
  na.population = contPop['North America'];
  contPopData.push(na);
  na ={};
  na.continent = "North America";
  na.gdp = contGdp['North America'];
  contGdpData.push(na);

  sa.continent = "South America";
  sa.population = contPop['South America'];
  contPopData.push(sa);
  sa ={};
  sa.continent = "South America";
  sa.gdp = contGdp['South America'];
  contGdpData.push(sa);




  //console.log(JSON.stringify(contGdpData,null,2));
});
