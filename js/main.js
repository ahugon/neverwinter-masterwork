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
var DEFLECT = "Deflection";
var DEFENSE = "Defense";
var HP = "Maximum Hit Points";
var AC = "AC";

// declare professions
var tailoring = new Profession("Tailoring");
var alchemy = new Profession("Alchemy");
var jewelcrafting = new Profession("Jewelcrafting");
var artificing = new Profession("Artificing");

var armorsmithing = new Profession("Armorsmithing");
var blacksmithing = new Profession("Blacksmithing");
var leatherworking = new Profession("Leatherworking");

// declare zones
var soshenstar = new Zone("Chult: Soshenstar River");
var omu = new Zone("Chult: Lost City of Omu");
var chult = new Zone("Chult: Soshenstar & Omu");
var stronghold = new Zone("Guild Stronghold");
var dungeon = new Zone("Dungeon");
var pe = new Zone("Protector's Enclave");
var hotenow  = new Zone("Mount Hotenow");
var whispering = new Zone("Whispering Caverns");
var skyhold = new Zone("Pirate's Skyhold");
var brynShander = new Zone("Icewind Dale: Bryn Shander");
var lonelywood = new Zone("Icewind Dale: Lonelywood");
var coldRun = new Zone("Icewind Dale: Cold Run");

// declare sources of raw mats
var profVendor = new Origin("Professions Vendor", pe, COPPER);
var mwVendor = new Origin("Travelling Merchant", stronghold, GMS);
var hotenowMap = new Origin("Untapped Resources", hotenow, MAPS);
var whisperingMap = new Origin("Untapped Resources", whispering, MAPS);
var skyholdMap = new Origin("Untapped Resources", skyhold, MAPS);
var brynShanderMap = new Origin("Untapped Resources", brynShander, MAPS);
var lonelywoodMap = new Origin("Untapped Resources", lonelywood, MAPS);
var coldRunMap = new Origin("Untapped Resources", coldRun, MAPS);
var soshenstarMap = new Origin("Untapped Resources", soshenstar, MAPS);
var omuMap = new Origin("Untapped Resources", omu, MAPS);
var atelier = new Origin("Atelier", stronghold, GMS);
var goldsmith = new Origin("Goldsmith", stronghold, GMS);
var tenterground = new Origin("Tenterground", stronghold, GMS);
var bloomery = new Origin("Bloomery", stronghold, GMS);
var tannery = new Origin("Tannery", stronghold, GMS);
var tong = new Origin("Tomb of the Nine Gods", dungeon, DROP);
var msp = new Origin("Spellplague Caverns (Master)", dungeon, DROP);
var allosaurs = new Origin("Allosaurs", soshenstar, DROP);
var batiri = new Origin("Batiri", soshenstar, DROP);
var spiders = new Origin("Spiders", chult, DROP);
var dinosaurs = new Origin("Dinosaurs", chult, DROP);
var lions = new Origin("Lions", chult, DROP);

// declare trash mats
var greenVitriol = new RawMaterial("Green Vitriol", atelier, 0.1, RAW);
var sharkOil = new RawMaterial("Shark Oil", mwVendor, 250, RAW);
var calfSkin = new RawMaterial("Calf Skin", mwVendor, 250, RAW);
var rockSalt = new RawMaterial("Rock Salt", profVendor, 30, RAW);
var charcoal = new RawMaterial("Charcoal", profVendor, 30, RAW);

// declare raw mats from 1500 maps
var alum = new RawMaterial("Alum", hotenowMap, 1, RAW);
var nitre = new RawMaterial("Nitre", hotenowMap, 1, RAW);
var goldOre = new RawMaterial("Gold Ore", whisperingMap, 1, RAW); 
var salAmmoniac = new RawMaterial("Sal Ammoniac", hotenowMap, 1, RAW);
var adamantSand = new RawMaterial("Adamant Sand", skyholdMap, 1, RAW);
var lacquerBranch = new RawMaterial("Lacquer Branch", skyholdMap, 1, RAW);
var silex = new RawMaterial("Silex", skyholdMap, 1, RAW);
var slakedLime = new RawMaterial("Slaked Lime", whisperingMap, 1, RAW);

// declare raw mats from SKT 3k maps
var rawSphene = new RawMaterial("Raw Sphene", brynShanderMap, 1, RAW);
var rawRubellite = new RawMaterial("Raw Rubellite", coldRunMap, 1, RAW);
var effervescentWater = new RawMaterial("Effervescent Water", coldRunMap, 1, RAW);
var spruceLog = new RawMaterial("Spruce Log", lonelywoodMap, 1, RAW);
var nativeSilver = new RawMaterial("Native Silver", brynShanderMap, 1, RAW);

// declare raw mats from Chult 3k maps
var lakhResin = new RawMaterial("Lakh Resin", soshenstarMap, 1, RAW);
var bronzewoodLog = new RawMaterial("Bronzewood Log", soshenstarMap, 1, RAW);
var chultanTeaLeaves = new RawMaterial("Chultan Tea Leaves", soshenstarMap, 1, RAW);
var silkwormCocoon = new RawMaterial("Silkworm Cocoon", soshenstarMap, 1, RAW);
var samarachanJute = new RawMaterial("Samarachan Jute", omuMap, 1, RAW);
var brilliantPinion = new RawMaterial("Brilliant Pinion", omuMap, 1, RAW);
var obsidian = new RawMaterial("Obsidian", omuMap, 1, RAW);
var chultanSpringWater = new RawMaterial("Chultan Spring Water", omuMap, 1, RAW);

// declare raw mats from GM vendors
var tincal = new RawMaterial("Tincal", atelier, 2000, RAW);
var alkali = new RawMaterial("Alkali", atelier, 2000, RAW);
var redRouge = new RawMaterial("Red Rouge", goldsmith, 2000, RAW);
var potash = new RawMaterial("Potash", tenterground, 2000, RAW);
var terebinth = new RawMaterial("Terebinth", atelier, 400, RAW);
var ironRust = new RawMaterial("Iron Rust", bloomery, 200, RAW);
var tannersLiquor = new RawMaterial("Tanner's Liquor", tannery, 2000, RAW);

// declare drops
var tearOfUbtao = new RawMaterial("Tear of Ubtao", tong, 0, RAW);
var allosaurFang = new RawMaterial("Allosaur Fang", allosaurs, 0, RAW);
var batiriPrism = new RawMaterial("Batiri Prism", batiri, 0, RAW);
var spiderSilk = new RawMaterial("Spider Silk", spiders, 0, RAW);
var dinosaurHide = new RawMaterial("Dinosaur Hide", dinosaurs, 0, RAW);
var lionHide = new RawMaterial("Lion Hide", lions, 0, RAW);
var fartouchedResiduum = new RawMaterial("Fartouched Residuum", msp, 0, RAW);
var moteOfSoulfire = new RawMaterial("Mote of Soulfire", tong, 0, RAW);
var lichstone = new RawMaterial("Lichstone", tong, 0, RAW);

// declare crafted mats (mw1-4)
// mw1-3: 

var goldNugget = new CraftedMaterial("Gold Nugget", jewelcrafting, 0, 1, [
  { item: goldOre, amount: 2 }, 
  { item: rockSalt, amount: 1 }
], CRAFTED);

var darkLacquer = new CraftedMaterial("Dark Lacquer", artificing, 0, 1, [
  { item: lacquerBranch, amount: 4 }, 
  { item: charcoal, amount: 2 }
], CRAFTED);

var redEnamel = new CraftedMaterial("Red Enamel", alchemy, 0, 1, [
  { item: silex, amount: 6 }, 
  { item: ironRust, amount: 2 }, 
  { item: terebinth, amount: 1 }
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

var vellum = new CraftedMaterial("Vellum", leatherworking, 0, 1, [
  { item: slakedLime, amount: 1 }, 
  { item: calfSkin, amount: 1}
], CRAFTED);

var adamantBloom = new CraftedMaterial("Adamant Bloom", blacksmithing, 0, 1, [
  { item: adamantSand, amount: 3 }, 
  { item: charcoal, amount: 3 }
], CRAFTED);

var adamantIngot = new CraftedMaterial("Adamant Ingot", blacksmithing, 0, 1, [
  { item: adamantBloom, amount: 2 }, 
  { item: darkLacquer, amount: 1 }
], CRAFTED);

var adamantPlate = new CraftedMaterial("Adamant Plate", armorsmithing, 0, 1, [
  { item: adamantIngot, amount: 1 }
], CRAFTED);

var goldIngot = new CraftedMaterial("Gold Ingot", jewelcrafting, 0, 1, [
  { item: goldNugget, amount: 3 }, 
  { item: concentratedAquaRegia, amount: 1 }
], CRAFTED);

var goldWire = new CraftedMaterial("Gold Wire", jewelcrafting, 0, 1, [
  { item: goldIngot, amount: 2 }, 
  { item: sharkOil, amount: 2 }
], CRAFTED);

var scintillantGlass = new CraftedMaterial("Scintillant Glass", artificing, 1, 5, [
  { item: rawRubellite, amount: 1 }, 
  { item: rawSphene, amount: 1 }, 
  { item: goldWire, amount: 1 }
], CRAFTED);

var sphene = new CraftedMaterial("Sphene", jewelcrafting, 1, 5, [
  { item: rawSphene, amount: 4 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var rubellite = new CraftedMaterial("Rubellite", jewelcrafting, 1, 5, [
  { item: rawRubellite, amount: 4 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var artisansEnamel = new CraftedMaterial("Artisan's Enamel", artificing, 1, 5, [
  { item: scintillantGlass, amount: 2 }, 
  { item: fartouchedResiduum, amount: 1 }, 
  { item: alkali, amount: 1 }
], CRAFTED);

var hardsand = new CraftedMaterial("Hardsand", alchemy, 1, 5, [
  { item: spruceLog, amount: 2 }, 
  { item: adamantPlate, amount: 1 }
], CRAFTED);

var brightsilverIngot = new CraftedMaterial("Brightsilver Ingot", jewelcrafting, 1, 5, [
  { item: redRouge, amount: 1 }, 
  { item: scintillantGlass, amount: 1 }, 
  { item: hardsand, amount: 2 }, 
  { item: nativeSilver, amount: 10 }
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

var chultanSilkThread = new CraftedMaterial("Chultan Silk Thread", tailoring, 0, 4, [
  { item: silkwormCocoon, amount: 12 }, 
  { item: effervescentWater, amount: 6 }
], CRAFTED);

var chultanSilk = new CraftedMaterial("Chultan Silk", tailoring, 0, 2, [
  { item: chultanSilkThread, amount: 4 }, 
  { item: potash, amount: 1 }, 
  { item: spiderSilk, amount: 4 }
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

var obsidianShard = new CraftedMaterial("Obsidian Shard", blacksmithing, 1, 4, [
  { item: obsidian, amount: 12 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var soulfiredObsidian = new CraftedMaterial("Soulfired Obsidian", blacksmithing, 1, 3, [
  { item: obsidianShard, amount: 4 }, 
  { item: moteOfSoulfire, amount: 1 }
], CRAFTED);

var lichstoneEnamel = new CraftedMaterial("Lichstone Enamel", artificing, 1, 3, [
  { item: lichstone, amount: 1 }, 
  { item: artisansEnamel, amount: 4 }
], CRAFTED);

var hardenedBronzewood = new CraftedMaterial("Hardened Bronzewood", armorsmithing, 0, 2, [
  { item: bronzewoodLumber, amount: 4 }, 
  { item: lakhVarnish, amount: 1 }
], CRAFTED);

var lionFur = new CraftedMaterial("Lion Fur", leatherworking, 0, 2, [
  { item: lionHide, amount: 12 }, 
  { item: alum, amount: 6 }, 
  { item: tincal, amount: 1 }, 
  { item: tannersLiquor, amount: 1 }
], CRAFTED);

var lacqueredDinosaurLeather = new CraftedMaterial("Lacquered Dinosaur Leather", leatherworking, 0, 2, [
  { item: chultanTeaLeaves, amount: 12 }, 
  { item: tannersLiquor, amount: 1 }, 
  { item: lakhVarnish, amount: 2 }, 
  { item: dinosaurHide, amount: 8 }
], CRAFTED);


// declare crafted items (mw5)
/* rings */
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
var lichstoneWardRing = new CraftedItem("Lichstone Ward Ring", jewelcrafting, [
    { stat: DEFLECT, amount: 543 }, 
    { stat: HP, amount: 3256 }
  ], [
    { item: lichstoneEnamel, amount: 1 }, 
    { item: bronzewoodLumber, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);

/* necklaces */
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
var lichstoneAmulet = new CraftedItem("Lichstone Amulet", jewelcrafting, [
    { stat: AC, amount: 2 }, 
    { stat: RECOVERY, amount: 398 }, 
    { stat: DEFENSE, amount: 380 }, 
    { stat: DEFLECT, amount: 380 }
  ], [
    { item: lichstoneEnamel, amount: 1 }, 
    { item: obsidianShard, amount: 2 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);

/* weapons */
// CW
var obsidianMiztonhiyo = new CraftedItem("Obsidian Miztonhiyo (CW)", artificing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: juteMacrame, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 1 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var fangedQuiilpia = new CraftedItem("Fanged Quiilpia (CW)", artificing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: chultanSilkThread, amount: 1 }
  ]);
// DC
var featheredTeotlanextli = new CraftedItem("Feathered Teotlanextli (DC)", artificing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: juteMacrame, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 1 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var featheredIlhuilli = new CraftedItem("Feathered Ilhuilli (DC)", artificing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
// SW
var obsidianTecpatl = new CraftedItem("Obsidian Tecpatl (SW)", artificing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: obsidianShard, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: juteMacrame, amount: 1 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var dinohideTemicamatl = new CraftedItem("Dinohide Temicamatl (SW)", artificing, [], [
    { item: livingVarnish, amount: 3 }, 
    { item: lacqueredDinosaurLeather, amount: 4 }, 
    { item: chultanSilkThread, amount: 2 }, 
    { item: vellum, amount: 4 }
  ]);
// HR
var bronzewoodTlahuitolli = new CraftedItem("Bronzewood Tlahuitolli (HR)", artificing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 2 }, 
    { item: chultanSilkThread, amount: 2}, 
    { item: lakhVarnish, amount: 1 }
  ]);
var obsidianItztopilli = new CraftedItem("Obsidian Itztopilli (HR)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lionFur, amount: 2 }, 
    { item: bronzewoodLumber, amount: 1 }
  ]);
// GF
var bronzewoodMacuahuitl = new CraftedItem("Bronzewood Macuahuitl (GF)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: brightsilverIngot, amount: 3 }, 
    { item: sphene, amount: 1 }
  ]);
var bronzewoodMahuizzochimalli = new CraftedItem("Bronzewood Mahuizzochimalli (GF)", armorsmithing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 4 }, 
    { item: lionFur, amount: 1 }
  ]);
// OP
var bronzewoodQuauhololli = new CraftedItem("Bronzewood Quauhololli (OP)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: darkLacquer, amount: 3 }, 
    { item: chultanSilk, amount: 1 }
  ]);
var bronzewoodCuauhchimalli = new CraftedItem("Bronzewood Cuauhchimalli (OP)", armorsmithing, [], [
    { item: livingBronzewood, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 1 }, 
    { item: lionFur, amount: 2 }
  ]);
// GWF
var bronzewoodHuitzauhqui = new CraftedItem("Bronzewood Huitzauhqui (GWF)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: brightsilverIngot, amount: 3 }, 
    { item: redEnamel, amount: 4 }
  ]);
var silkMecatica = new CraftedItem("Silk Mecatica (GWF)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: chultanSilkThread, amount: 1 }
  ]);
// TR
var obsidianOmihuictli = new CraftedItem("Obsidian Omihuictli (TR)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: obsidianShard, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: hardenedBronzewood, amount: 1 }, 
    { item: featheredOrnament, amount: 1 }
  ]);
var obsidianItecpayo = new CraftedItem("Obsidian Itecpayo (TR)", blacksmithing, [], [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: brightsilverIngot, amount: 1 }
  ]);

/* belts */
var beadedSash = new CraftedItem("Beaded Sash", tailoring, [], [
    { item: soulfiredObsidian, amount: 1 }, 
    { item: brilliantBead, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);
var bronzewoodSash = new CraftedItem("Bronzewood Sash", tailoring, [], [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);
var fangedSash = new CraftedItem("Fanged Sash", tailoring, [], [
    { item: soulfiredObsidian, amount: 1 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);
var lichstoneSash = new CraftedItem("Lichstone Sash", tailoring, [], [
    { item: lichstoneEnamel, amount: 1 }, 
    { item: obsidianShard, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);


var CRAFTABLE_ITEMS = [];
var MATERIALS = [];
var TOTALS_BY_MATERIAL = [];
var ITEM_SELECTED = false;
var TOTALS_EMPTIED = false;

function initializePage() {
  CRAFTABLE_ITEMS = [];

  CRAFTABLE_ITEMS.push(bronzewoodRaidRing.vueObject());
  CRAFTABLE_ITEMS.push(beadedAssaultRing.vueObject());
  CRAFTABLE_ITEMS.push(beadedRestorationRing.vueObject());
  CRAFTABLE_ITEMS.push(lichstoneWardRing.vueObject());

  CRAFTABLE_ITEMS.push(beadedAmulet.vueObject());
  CRAFTABLE_ITEMS.push(bronzewoodAmulet.vueObject());
  CRAFTABLE_ITEMS.push(fangedBeadedAmulet.vueObject());
  CRAFTABLE_ITEMS.push(lichstoneAmulet.vueObject());

  CRAFTABLE_ITEMS.push(beadedSash.vueObject());
  CRAFTABLE_ITEMS.push(bronzewoodSash.vueObject());
  CRAFTABLE_ITEMS.push(fangedSash.vueObject());
  CRAFTABLE_ITEMS.push(lichstoneSash.vueObject());

  // CW
  CRAFTABLE_ITEMS.push(obsidianMiztonhiyo.vueObject());
  CRAFTABLE_ITEMS.push(fangedQuiilpia.vueObject());

  // DC
  CRAFTABLE_ITEMS.push(featheredTeotlanextli.vueObject());
  CRAFTABLE_ITEMS.push(featheredIlhuilli.vueObject());

  // SW
  CRAFTABLE_ITEMS.push(obsidianTecpatl.vueObject());
  CRAFTABLE_ITEMS.push(dinohideTemicamatl.vueObject());

  // HR
  CRAFTABLE_ITEMS.push(bronzewoodTlahuitolli.vueObject());
  CRAFTABLE_ITEMS.push(obsidianItztopilli.vueObject());

  // OP
  CRAFTABLE_ITEMS.push(bronzewoodQuauhololli.vueObject());
  CRAFTABLE_ITEMS.push(bronzewoodCuauhchimalli.vueObject());

  // GF
  CRAFTABLE_ITEMS.push(bronzewoodMacuahuitl.vueObject());
  CRAFTABLE_ITEMS.push(bronzewoodMahuizzochimalli.vueObject());

  // GWF
  CRAFTABLE_ITEMS.push(bronzewoodHuitzauhqui.vueObject());
  CRAFTABLE_ITEMS.push(silkMecatica.vueObject());

  // TR
  CRAFTABLE_ITEMS.push(obsidianOmihuictli.vueObject());
  CRAFTABLE_ITEMS.push(obsidianItecpayo.vueObject());
}

window.onload = function() {
  initializePage();

  Vue.component('craftable-item', {
    props: ['item'], 
    methods: {
      itemClicked: function(it) {
        if(!ITEM_SELECTED) {
          ITEM_SELECTED = true;
          var thisItem = this;
          var el = thisItem.$el;
          var thisCraftableItemDiv = el.children[0];
          var craftableItemDivs = document.querySelectorAll('.craftable-item');

          for(var j = 0; j < craftableItemDivs.length; j++) {
            craftableItemDivs[j].classList.remove("selected");
            
          }
          thisCraftableItemDiv.classList.add("selected");

          for(var k = 0; k < craftableItemDivs.length; k++) {
            if(!craftableItemDivs[k].classList.contains("selected")) {
              var col = craftableItemDivs[k].parentNode;
              col.parentNode.removeChild(col);
            }
          }

          // empty the state array
          //MATERIALS.splice(0, MATERIALS.length);
          //console.log("emptied materials");
          //TOTALS_BY_MATERIAL.splice(0, TOTALS_BY_MATERIAL.length);
          //console.log("emptied totals");

          selectItemApp.selectedItem = it.name;

          for(var i = 0; i < it.reqs.length; i++) {
            var req = it.reqs[i];
            console.log("adding req: " + req.item.name);
            MATERIALS.push(req);
          }
        }
      }
    }, 
    template: `
      <div class="col-md-3 col-sm-3 col-xs-3">
        <div class="craftable-item vert-flex" @click="itemClicked(item)">
          <div class="craftable-item-name">{{ item.name }}</div>
        </div>
      </div>
    `
  });

  Vue.component('material', {
    props: ['mat', 'multiplier'], 
    data: function() {
      return {
        expanded: false
      }
    }, 
    mounted: function() {
      var mult = this.multiplier;
      var thisMat = this.mat;
      var thisMatItem = thisMat.item;
      var found = false;
      console.log("mounted for " + thisMatItem.name);

      if(typeof thisMatItem != "undefined" && thisMatItem.mtype == 'raw') {
        var thisMatItemName = thisMatItem.name;
        for(var i = 0; i < TOTALS_BY_MATERIAL.length; i++) {
          var thisTotal = TOTALS_BY_MATERIAL[i];
          if(thisTotal.name == thisMatItemName) {
            thisTotal.count += (thisMat.amount * mult);
            console.log("added " + (thisMat.amount * mult) + " to total for " + thisMatItemName + ", now " + thisTotal.count);
            found = true;
          }
        }
        if(!found) {
          TOTALS_BY_MATERIAL.push({ name: thisMatItemName, count: thisMat.amount * mult });
          console.log("added initial " + (thisMat.amount * mult) + " " + thisMatItemName);
        }
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
          <material v-for="sm in mat.item.reqs" :key="sm.name" :mat="sm" :multiplier="multiplier * ((mat.item.t3 > mat.amount) ? 1 : Math.ceil(mat.amount / mat.item.t3))"></material>
        </div>
      </div>
    `
  });

  Vue.component('total', {
    props: ['t'], 
    template: `
      <div class="col-md-3 col-sm-3 col-xs-3">
        <div class="raw-material">
          <div class="raw-material-name">{{ t.name }} &times; {{ t.count }}</div>
        </div>
      </div>
    `
  });

  // Vue app
  var selectItemApp = new Vue({
    el: '#item-select-wrap', 
    data: {
      craftables: CRAFTABLE_ITEMS, 
      materials: MATERIALS, 
      totals: TOTALS_BY_MATERIAL, 
      selectedItem: ""
    }
  });

}