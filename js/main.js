// constructors
class Stat {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  vueObject() {
    return { name: this.name, amount: this.amount };
  }
}

class Profession {
  constructor(name) {
    this.name = name;
  }

  vueObject() {
    return { name: this.name };
  }
}

class Zone {
  constructor(name) {
    this.name = name;
  }

  vueObject() {
    return { name: this.name };
  }
}

class Origin {
  constructor(name, zone, reqs) {
    this.name = name;
    this.zone = zone;
    this.reqs = reqs;
  }

  vueObject() {
    return { name: this.name, zone: this.zone, reqs: this.reqs };
  }
}

class RawMaterial {
  constructor(name, origin, cost) {
    this.name = name; 
    this.origin = origin;
    this.cost = cost;
  }

  vueObject() {
    return { name: this.name, origin: this.origin, cost: this.cost };
  }
}

class CraftedMaterial {
  constructor(name, profession, t2Amount, t3Amount, reqs) {
    this.name = name;
    this.profession = profession;
    this.t2 = t2Amount;
    this.t3 = t3Amount;
    this.reqs = reqs;
  }

  vueObject() {
    return { name: this.name, profession: this.profession, t2: this.t2, t3: this.t3, reqs: this.reqs };
  }
}

class CraftedItem {
  constructor(name, profession, stats, reqs) {
    this.name = name;
    this.profession = profession;
    this.stats = stats;
    this.reqs = reqs;
  }

  vueObject() {
    return { name: this.name, profession: this.profession, stats: this.stats, reqs: this.reqs };
  }
}

// constants
var MAPS = "Explorer Chart";
var GMS = "Guild Marks";
var DROP = "Chest/Drop";
var COPPER = "Coppers";

// declare professions
var tailoring = new Profession("Tailoring");
var alchemy = new Profession("Alchemy");
var jewelcrafting = new Profession("Jewelcrafting");
var artificing = new Profession("Artificing");
var platesmithing = new Profession("Platesmithing");
var mailsmithing = new Profession("Mailsmithing");
var weaponsmithing = new Profession("Weaponsmithing");
var leatherworking = new Profession("Leatherworking");

// declare zones
var soshenstar = new Zone("Chult: Soshenstar River");
var omu = new Zone("Chult: Lost City of Omu");
var stronghold = new Zone("Guild Stronghold");
var dungeon = new Zone("Dungeon");
var pe = new Zone("Protector's Enclave");
var hotenow  = new Zone("Mount Hotenow");
var whispering = new Zone("Whispering Caverns");
var brynShander = new Zone("Icewind Dale: Bryn Shander");
var coldRun = new Zone("Icewind Dale: Cold Run");

// declare sources of raw mats
var profVendor = new Origin("Professions Vendor", pe, COPPER);
var mwVendor = new Origin("Travelling Merchant", stronghold, GMS);
var hotenowMap = new Origin("Untapped Resources", hotenow, MAPS);
var whisperingMap = new Origin("Untapped Resources", whispering, MAPS);
var brynShanderMap = new Origin("Untapped Resources", brynShander, MAPS);
var coldRunMap = new Origin("Untapped Resources", coldRun, MAPS);
var soshenstarMap = new Origin("Untapped Resources", soshenstar, MAPS);
var omuMap = new Origin("Untapped Resources", omu, MAPS);
var atelier = new Origin("Atelier", stronghold, GMS);
var goldsmith = new Origin("Goldsmith", stronghold, GMS);
var tong = new Origin("Tomb of the Nine Gods", dungeon, DROP);
var msp = new Origin("Spellplague Caverns (Master)", dungeon, DROP);
var allosaurs = new Origin("Allosaurs", soshenstar, DROP);
var batiri = new Origin("Batiri", soshenstar, DROP);

// declare trash mats
var greenVitriol = new RawMaterial("Green Vitriol x 10", atelier, 1);
var sharkOil = new RawMaterial("Shark Oil", mwVendor, 250);
var rockSalt = new RawMaterial("Rock Salt", profVendor, 30);

// declare raw mats from 1500 maps
var alum = new RawMaterial("Alum", hotenowMap, 1);
var nitre = new RawMaterial("Nitre", hotenowMap, 1);
var goldOre = new RawMaterial("Gold Ore", whisperingMap, 1); 
var salAmmoniac = new RawMaterial("Sal Ammoniac", hotenowMap, 1);

// declare raw mats from SKT 3k maps
var rawSphene = new RawMaterial("Raw Sphene", brynShanderMap, 1);
var rawRubellite = new RawMaterial("Raw Rubellite", coldRunMap, 1);

// declare raw mats from Chult 3k maps
var samarachanJute = new RawMaterial("Samarachan Jute", omuMap, 1);
var lakhResin = new RawMaterial("Lakh Resin", soshenstarMap, 1);
var bronzewoodLog = new RawMaterial("Bronzewood Log", soshenstarMap, 1);
var brilliantPinion = new RawMaterial("Brilliant Pinion", omuMap, 1);

// declare raw mats from GM vendors
var tincal = new RawMaterial("Tincal", atelier, 2000);
var alkali = new RawMaterial("Alkali", atelier, 2000);
var redRouge = new RawMaterial("Red Rouge", goldsmith, 2000);
var terebinth = new RawMaterial("Terebinth", atelier, 400);

// declare drops
var tearOfUbtao = new RawMaterial("Tear of Ubtao", tong, 0);
var allosaurFang = new RawMaterial("Allosaur Fang", allosaurs, 0);
var batiriPrism = new RawMaterial("Batiri Prism", batiri, 0);
var fartouchedResiduum = new RawMaterial("Fartouched Residuum", msp, 0);

// declare crafted mats (mw1-4)
// mw1-3: 

var goldNugget = new CraftedMaterial("Gold Nugget", jewelcrafting, 0, 1, [
  { item: goldOre, amount: 2 }, 
  { item: rockSalt, amount: 1 }
]);

var oilOfVitriol = new CraftedMaterial("Oil of Vitriol", alchemy, 0, 1, [
  { item: greenVitriol, amount: 4 }
]);

var aquaFortis = new CraftedMaterial("Aqua Fortis", alchemy, 0, 1, [
  { item: oilOfVitriol, amount: 1 }, 
  { item: alum, amount: 2 }, 
  { item: nitre, amount: 1 }
]);

var concentratedAquaRegia = new CraftedMaterial("Concentrated Aqua Regia", alchemy, 0, 1, [
  { item: salAmmoniac, amount: 2 }, 
  { item: aquaFortis, amount: 1 }, 
  { item: nitre, amount: 1 }
]);

var goldIngot = new CraftedMaterial("Gold Ingot", jewelcrafting, 0, 1, [
  { item: goldNugget, amount: 3 }, 
  { item: concentratedAquaRegia, amount: 1 }
]);

var goldWire = new CraftedMaterial("Gold Wire", mailsmithing, 0, 1, [
  { item: goldIngot, amount: 2 }, 
  { item: sharkOil, amount: 2 }
]);

var scintillantGlass = new CraftedMaterial("Scintillant Glass", artificing, 1, 5, [
  { item: rawRubellite, amount: 1 }, 
  { item: rawSphene, amount: 1 }, 
  { item: goldWire, amount: 1 }
]);

var artisansEnamel = new CraftedMaterial("Artisan's Enamel", artificing, 1, 5, [
  { item: scintillantGlass, amount: 2 }, 
  { item: fartouchedResiduum, amount: 1 }, 
  { item: alkali, amount: 1 }
]);

// mw4: 
var bronzewoodLumber = new CraftedMaterial("Bronzewood Lumber", artificing, 1, 4, [
  { item: bronzewoodLog, amount: 12 }, 
  { item: tincal, amount: 1 }
]);

var livingBronzewood = new CraftedMaterial("Living Bronzewood", artificing, 1, 3, [
  { item: bronzewoodLumber, amount: 4 }, 
  { item: tearOfUbtao, amount: 1 }
]);

var lakhVarnish = new CraftedMaterial("Lakh Varnish", alchemy, 1, 3, [
  { item: lakhResin, amount: 15 }, 
  { item: terebinth, amount: 5 }
]);

var livingVarnish = new CraftedMaterial("Living Varnish", alchemy, 1, 3, [
  { item: lakhVarnish, amount: 3 }, 
  { item: tearOfUbtao, amount: 1 }
]);

var brilliantBead = new CraftedMaterial("Brilliant Bead", jewelcrafting, 1, 4, [
  { item: batiriPrism, amount: 12 }, 
  { item: scintillantGlass, amount: 4 }, 
  { item: redRouge, amount: 1 }
]);

var juteMacrame = new CraftedMaterial("Jute Macrame", tailoring, 1, 3, [
  { item: samarachanJute, amount: 15 }, 
]);

var fangedOrnament = new CraftedMaterial("Fanged Ornament", jewelcrafting, 0, 2, [
  { item: juteMacrame, amount: 3 }, 
  { item: allosaurFang, amount: 6 }, 
  { item: brilliantBead, amount: 4 }
]);

var featheredOrnament = new CraftedMaterial("Feathered Ornament", jewelcrafting, 0, 2, [
  { item: juteMacrame, amount: 3 }, 
  { item: brilliantPinion, amount: 12 }, 
  { item: brilliantBead, amount: 4 }
]);

// declare crafted items (mw5)
var bronzewoodRaidRing = new CraftedItem("Bronzewood Raid Ring", jewelcrafting, [], []);
var beadedAssaultRing = new CraftedItem("Beaded Assault Ring", jewelcrafting, [], []);
var beadedRestorationRing = new CraftedItem("Beaded Restoration Ring", jewelcrafting, [], []);
var beadedAmulet = new CraftedItem("Beaded Amulet", jewelcrafting, [], []);
var bronzewoodAmulet = new CraftedItem("Bronzewood Amulet", jewelcrafting, [], []);
var fangedBeadedAmulet = new CraftedItem("Fanged Beaded Amulet", jewelcrafting, [], []);

var CRAFTABLE_ITEMS = [];

function initializePage() {
  CRAFTABLE_ITEMS = [];
  CRAFTABLE_ITEMS.push(bronzewoodRaidRing.vueObject());
  CRAFTABLE_ITEMS.push(beadedAssaultRing.vueObject());
  CRAFTABLE_ITEMS.push(beadedRestorationRing.vueObject());
  CRAFTABLE_ITEMS.push(beadedAmulet.vueObject());
  CRAFTABLE_ITEMS.push(bronzewoodAmulet.vueObject());
  CRAFTABLE_ITEMS.push(fangedBeadedAmulet.vueObject());
}

window.onload = function() {
  initializePage();

  Vue.component('craftable-item', {
    props: ['item'], 
    methods: {
      itemClicked: function(it) {
        console.log("itemClicked with " + JSON.stringify(it));
      }
    }, 
    template: `
      <div class="col-md-2 col-xs-4">
        <div class="craftable-item vert-flex" v-on:click="itemClicked(item)">
          <div class="craftable-item-name">{{ item.name }}</div>
        </div>
      </div>
    `
  });

  // Vue app
  var selectItemApp = new Vue({
    el: '#item-select-wrap', 
    data: {
      craftables: CRAFTABLE_ITEMS
    }
  });

}