// constructors
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
  constructor(name, origin, cost, mtype) {
    this.name = name; 
    this.origin = origin;
    this.cost = cost;
    this.mtype = mtype;
  }

  vueObject() {
    return { name: this.name, origin: this.origin.vueObject(), cost: this.cost, mtype: this.mtype };
  }
}

class CraftedMaterial {
  constructor(name, profession, t2Amount, t3Amount, reqs, mtype) {
    this.name = name;
    this.profession = profession;
    this.t2 = t2Amount;
    this.t3 = t3Amount;
    this.reqs = reqs;
    this.mtype = mtype
  }

  vueObject() {
    return { name: this.name, profession: this.profession, t2: this.t2, t3: this.t3, reqs: this.reqs, mtype: this.mtype };
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

// types of mats
var RAW = "raw";
var CRAFTED = "crafted";

// stats
var POWER = "Power";
var CRIT = "Critical Strike";
var ARPEN = "Armor Penetration";
var RECOVERY = "Recovery";
var APGAIN = "Action Point Gain";

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
var greenVitriol = new RawMaterial("Green Vitriol x 10", atelier, 1, RAW);
var sharkOil = new RawMaterial("Shark Oil", mwVendor, 250, RAW);
var rockSalt = new RawMaterial("Rock Salt", profVendor, 30, RAW);

// declare raw mats from 1500 maps
var alum = new RawMaterial("Alum", hotenowMap, 1, RAW);
var nitre = new RawMaterial("Nitre", hotenowMap, 1, RAW);
var goldOre = new RawMaterial("Gold Ore", whisperingMap, 1, RAW); 
var salAmmoniac = new RawMaterial("Sal Ammoniac", hotenowMap, 1, RAW);

// declare raw mats from SKT 3k maps
var rawSphene = new RawMaterial("Raw Sphene", brynShanderMap, 1, RAW);
var rawRubellite = new RawMaterial("Raw Rubellite", coldRunMap, 1, RAW);

// declare raw mats from Chult 3k maps
var samarachanJute = new RawMaterial("Samarachan Jute", omuMap, 1, RAW);
var lakhResin = new RawMaterial("Lakh Resin", soshenstarMap, 1, RAW);
var bronzewoodLog = new RawMaterial("Bronzewood Log", soshenstarMap, 1, RAW);
var brilliantPinion = new RawMaterial("Brilliant Pinion", omuMap, 1, RAW);
var chultanTeaLeaves = new RawMaterial("Chultan Tea Leaves", soshenstarMap, 1, RAW);

// declare raw mats from GM vendors
var tincal = new RawMaterial("Tincal", atelier, 2000, RAW);
var alkali = new RawMaterial("Alkali", atelier, 2000, RAW);
var redRouge = new RawMaterial("Red Rouge", goldsmith, 2000, RAW);
var terebinth = new RawMaterial("Terebinth", atelier, 400, RAW);

// declare drops
var tearOfUbtao = new RawMaterial("Tear of Ubtao", tong, 0, RAW);
var allosaurFang = new RawMaterial("Allosaur Fang", allosaurs, 0, RAW);
var batiriPrism = new RawMaterial("Batiri Prism", batiri, 0, RAW);
var fartouchedResiduum = new RawMaterial("Fartouched Residuum", msp, 0, RAW);

// declare crafted mats (mw1-4)
// mw1-3: 

var goldNugget = new CraftedMaterial("Gold Nugget", jewelcrafting, 0, 1, [
  { item: goldOre, amount: 2 }, 
  { item: rockSalt, amount: 1 }
], CRAFTED);

var oilOfVitriol = new CraftedMaterial("Oil of Vitriol", alchemy, 0, 1, [
  { item: greenVitriol, amount: 4 }
], CRAFTED);

var aquaFortis = new CraftedMaterial("Aqua Fortis", alchemy, 0, 1, [
  { item: oilOfVitriol, amount: 1 }, 
  { item: alum, amount: 2 }, 
  { item: nitre, amount: 1 }
], CRAFTED);

var concentratedAquaRegia = new CraftedMaterial("Concentrated Aqua Regia", alchemy, 0, 1, [
  { item: salAmmoniac, amount: 2 }, 
  { item: aquaFortis, amount: 1 }, 
  { item: nitre, amount: 1 }
], CRAFTED);

var goldIngot = new CraftedMaterial("Gold Ingot", jewelcrafting, 0, 1, [
  { item: goldNugget, amount: 3 }, 
  { item: concentratedAquaRegia, amount: 1 }
], CRAFTED);

var goldWire = new CraftedMaterial("Gold Wire", mailsmithing, 0, 1, [
  { item: goldIngot, amount: 2 }, 
  { item: sharkOil, amount: 2 }
], CRAFTED);

var scintillantGlass = new CraftedMaterial("Scintillant Glass", artificing, 1, 5, [
  { item: rawRubellite, amount: 1 }, 
  { item: rawSphene, amount: 1 }, 
  { item: goldWire, amount: 1 }
], CRAFTED);

var artisansEnamel = new CraftedMaterial("Artisan's Enamel", artificing, 1, 5, [
  { item: scintillantGlass, amount: 2 }, 
  { item: fartouchedResiduum, amount: 1 }, 
  { item: alkali, amount: 1 }
], CRAFTED);

// mw4: 
var bronzewoodLumber = new CraftedMaterial("Bronzewood Lumber", artificing, 1, 4, [
  { item: bronzewoodLog, amount: 12 }, 
  { item: tincal, amount: 1 }
], CRAFTED);

var livingBronzewood = new CraftedMaterial("Living Bronzewood", artificing, 1, 3, [
  { item: bronzewoodLumber, amount: 4 }, 
  { item: tearOfUbtao, amount: 1 }
], CRAFTED);

var lakhVarnish = new CraftedMaterial("Lakh Varnish", alchemy, 1, 3, [
  { item: lakhResin, amount: 15 }, 
  { item: terebinth, amount: 5 }
], CRAFTED);

var livingVarnish = new CraftedMaterial("Living Varnish", alchemy, 1, 3, [
  { item: lakhVarnish, amount: 3 }, 
  { item: tearOfUbtao, amount: 1 }
], CRAFTED);

var brilliantBead = new CraftedMaterial("Brilliant Bead", jewelcrafting, 1, 4, [
  { item: batiriPrism, amount: 12 }, 
  { item: scintillantGlass, amount: 4 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var juteMacrame = new CraftedMaterial("Jute Macrame", tailoring, 1, 3, [
  { item: samarachanJute, amount: 15 }, 
], CRAFTED);

var fangedOrnament = new CraftedMaterial("Fanged Ornament", jewelcrafting, 0, 2, [
  { item: juteMacrame, amount: 3 }, 
  { item: allosaurFang, amount: 6 }, 
  { item: brilliantBead, amount: 4 }
], CRAFTED);

var featheredOrnament = new CraftedMaterial("Feathered Ornament", jewelcrafting, 0, 2, [
  { item: juteMacrame, amount: 3 }, 
  { item: brilliantPinion, amount: 12 }, 
  { item: brilliantBead, amount: 4 }
], CRAFTED);

// declare crafted items (mw5)
var bronzewoodRaidRing = new CraftedItem("Bronzewood Raid Ring", jewelcrafting, [
    { stat: POWER, amount: 543 }, 
    { stat: CRIT, amount: 814 }
  ], [
    { item: livingBronzewood, amount: 1 }, 
    { item: bronzewoodLumber, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var beadedAssaultRing = new CraftedItem("Beaded Assault Ring", jewelcrafting, [
    { stat: ARPEN, amount: 814 }, 
    { stat: CRIT, amount: 543 }
  ], [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var beadedRestorationRing = new CraftedItem("Beaded Restoration Ring", jewelcrafting, [
    { stat: POWER, amount: 543 }, 
    { stat: RECOVERY, amount: 814 }
  ], [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 2 }, 
    { item: chultanTeaLeaves, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var beadedAmulet = new CraftedItem("Beaded Amulet", jewelcrafting, [
    { stat: POWER, amount: 380 }, 
    { stat: CRIT, amount: 398 }, 
    { stat: ARPEN, amount: 380 }, 
    { stat: APGAIN, amount: 1 }
  ], [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var bronzewoodAmulet = new CraftedItem("Bronzewood Amulet", jewelcrafting, [
    { stat: POWER, amount: 380 }, 
    { stat: CRIT, amount: 398 }, 
    { stat: RECOVERY, amount: 380 }, 
    { stat: APGAIN, amount: 1 }
  ], [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: bronzewoodLumber, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var fangedBeadedAmulet = new CraftedItem("Fanged Beaded Amulet", jewelcrafting, [
    { stat: POWER, amount: 398 }, 
    { stat: CRIT, amount: 380 }, 
    { stat: RECOVERY, amount: 380 }, 
    { stat: APGAIN, amount: 1 }
  ], [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);

var CRAFTABLE_ITEMS = [];
var MATERIALS = [];

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
        MATERIALS.splice(0, MATERIALS.length);

        for(var i = 0; i < it.reqs.length; i++) {
          var req = it.reqs[i];
          console.log("adding req: " + req.item.name);
          MATERIALS.push(req);
        }
      }
    }, 
    template: `
      <div class="col-md-2 col-xs-4">
        <div class="craftable-item vert-flex" @click="itemClicked(item)">
          <div class="craftable-item-name">{{ item.name }}</div>
        </div>
      </div>
    `
  });

  Vue.component('material', {
    props: ['mat'], 
    data: function() {
      return {
        expanded: false
      }
    },
    template: `
      <div class="raw-material" v-if="mat.item.mtype == 'raw'">
        <div class="raw-material-name">{{ mat.item.name }} &times; {{ mat.amount }}</div>
        <div class="raw-material-source">via <span>{{ mat.item.origin.name }}</span> <i>({{ mat.item.origin.zone.name }})</i></div>
        <div class="raw-material-cost" v-if="mat.item.origin.reqs == 'Chest/Drop'">RNG from <span>{{ mat.item.origin.reqs }}</span></div>
        <div class="raw-material-cost" v-else>requires <span>{{ mat.item.cost }} {{ mat.item.origin.reqs }}</span></div>
      </div>
      <div class="crafted-material" v-else-if="mat.item.mtype == 'crafted'">
        <div class="crafted-material-name">{{ mat.item.name }} &times; {{ mat.amount }}</div>
        <div class="crafted-material-profession">{{ mat.item.profession.name }} &middot; t2 yields {{ mat.item.t2 }}, t3 yields {{ mat.item.t3 }}</div>
        <div class="crafted-material-expand" v-show="!expanded" @click="expanded = !expanded">Expand for requirements &raquo;</div>
        <div class="crafted-material-expand" v-show="expanded" @click="expanded = !expanded">&laquo; Collapse</div>
        <div class="crafted-material-reqs" v-show="expanded">
          <material v-for="sm in mat.item.reqs" :key="sm.name" :mat="sm"></material>
        </div>
      </div>
    `
  });

  // Vue app
  var selectItemApp = new Vue({
    el: '#item-select-wrap', 
    data: {
      craftables: CRAFTABLE_ITEMS, 
      materials: MATERIALS
    }
  });

}