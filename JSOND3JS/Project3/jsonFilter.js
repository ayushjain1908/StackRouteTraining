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


  for(var i=0;i<popData.length;i++){

      if(popData[i].country == "China" || popData[i].country =="India" || popData[i].country =="Indonesia"
    || popData[i].country =="Japan" || popData[i].country =="Republic of Korea" || popData[i].country =="Saudi Arabia"
  || popData[i].country =="Turkey"){

    asiaPop = asiaPop + popData[i].population;
    asiaGdp = asiaGdp + gdpData[i].gdp;
  }
   else if(popData[i].country =="Argentina" || popData[i].country=="Brazil"){
     saPop = saPop + popData[i].population;
     saGdp = saGdp + gdpData[i].gdp;
   }
   else if(popData[i].country=="Canada" || popData[i].country=="Mexico" || popData[i].country=="USA"){
     naPop = naPop + popData[i].population;
     naGdp = naGdp + gdpData[i].gdp;
   }
   else if(popData[i].country=="Australia"){
     ausPop = ausPop + popData[i].population;
     ausGdp = ausGdp + gdpData[i].gdp;
   }
   else if(popData[i].country=="South Africa"){
     afrPop = afrPop + popData[i].population;
     afrGdp = afrGdp + gdpData[i].gdp;
   }
   else{
     eurPop = eurPop + popData[i].population;
     eurGdp = eurGdp + gdpData[i].gdp;
   }
  }
  afr.continent = "Africa";
  afr.population = afrPop;
  contPopData.push(afr);
  afr ={};
  afr.continent = "Africa";
  afr.gdp = afrGdp;
  contGdpData.push(afr);

  asia.continent = "Asia";
  asia.population = asiaPop;
  contPopData.push(asia);
  asia ={};
  asia.continent = "Asia";
  asia.gdp = asiaGdp;
  contGdpData.push(asia);

  aus.continent = "Australia";
  aus.population = ausPop;
  contPopData.push(aus);
  aus ={};
  aus.continent = "Australia";
  aus.gdp = ausGdp;
  contGdpData.push(aus);

  eur.continent = "Europe";
  eur.population = eurPop;
  contPopData.push(eur);
  eur ={};
  eur.continent = "Europe";
  eur.gdp = eurGdp;
  contGdpData.push(eur);

  na.continent = "North America";
  na.population = naPop;
  contPopData.push(na);
  na ={};
  na.continent = "North America";
  na.gdp = naGdp;
  contGdpData.push(na);

  sa.continent = "South America";
  sa.population = saPop;
  contPopData.push(sa);
  sa ={};
  sa.continent = "South America";
  sa.gdp = saGdp;
  contGdpData.push(sa);




  //console.log(JSON.stringify(purpowGrowthData,null,2));
});
