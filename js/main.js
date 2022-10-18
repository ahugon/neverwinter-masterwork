

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
  constructor(name, profession, amount, reqs, mtype) {
    this.name = name;
    this.profession = profession;
    this.amount = amount;
    this.reqs = reqs;
    this.mtype = mtype
  }

  vueObject() {
    return { name: this.name, profession: this.profession, amount: this.amount, reqs: this.reqs, mtype: this.mtype };
  }
}

class CraftedItem {
  constructor(name, profession, reqs) {
    this.name = name;
    this.profession = profession;
    this.reqs = reqs;
  }

  vueObject() {
    return { name: this.name, profession: this.profession, reqs: this.reqs };
  }
}

// constants
var MAPS = "Explorer Chart";
var GMS = "Guild Marks";
var DROP = "Chest/Drop";
var COPPER = "Copper";
var SILVER = "Silver";
var GOLD = "Gold";

// types of mats
var RAW = "raw";
var CRAFTED = "crafted";

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
var sharMires = new Zone("Sharandar: The Mires");
var sharGrove = new Zone("Sharandar: The Grove");
var sharRuins = new Zone("Sharandar: The Ruins");
var newSharandar = new Zone("New Sharandar");

// declare sources of raw mats
var gathering = new Origin("Gathering", pe, GOLD);
var profVendor = new Origin("Professions Vendor", pe, COPPER);
var mwVendor = new Origin("Travelling Merchant", stronghold, GMS);
var hotenowMap = new Origin("Untapped Resources", hotenow, MAPS);
var whisperingMap = new Origin("Untapped Resources", whispering, MAPS);
var skyholdMap = new Origin("Untapped Resources", skyhold, MAPS);
var brynShanderMap = new Origin("Untapped Resources", brynShander, MAPS);
var lonelywoodMap = new Origin("Untapped Resources", lonelywood, MAPS);
var coldRunMap = new Origin("Untapped Resources", coldRun, MAPS);
var soshenstarMap = new Origin("Untapped Resources", soshenstar, MAPS);
var sharMiresMap = new Origin("Untapped Resources", sharMires, MAPS);
var sharGroveMap = new Origin("Untapped Resources", sharGrove, MAPS);
var sharRuinsMap = new Origin("Untapped Resources", sharRuins, MAPS);
var omuMap = new Origin("Untapped Resources", omu, MAPS);
var atelier = new Origin("Atelier", stronghold, GMS);
var goldsmith = new Origin("Goldsmith", stronghold, GMS);
var tenterground = new Origin("Tenterground", stronghold, GMS);
var bloomery = new Origin("Bloomery", stronghold, GMS);
var tannery = new Origin("Tannery", stronghold, GMS);
var tong = new Origin("Tomb of the Nine Gods", dungeon, DROP);
var msp = new Origin("Spellplague Caverns (Master)", dungeon, DROP);
var vos = new Origin("Vault of Stars", dungeon, DROP);
var allosaurs = new Origin("Allosaurs", soshenstar, DROP);
var batiri = new Origin("Batiri", soshenstar, DROP);
var spiders = new Origin("Spiders", chult, DROP);
var dinosaurs = new Origin("Dinosaurs", chult, DROP);
var lions = new Origin("Lions", chult, DROP);
var sharMobs = new Origin("New Sharandar Mobs", newSharandar, DROP);

// declare trash mats
var ironSand = new RawMaterial("Iron Sand", gathering, 0.2, RAW);
var oakLog = new RawMaterial("Oak Log", gathering, 0.75, RAW);
var sharkOil = new RawMaterial("Shark Oil", mwVendor, 250, RAW);
var calfSkin = new RawMaterial("Calf Skin", mwVendor, 250, RAW);
var rockSalt = new RawMaterial("Rock Salt", profVendor, 30, RAW);

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

// declare raw mats from Sharandar 3k maps
var weepingwillowstears = new RawMaterial("Weeping Willow's Tears", sharMiresMap, 1, RAW);
var soulfireflies = new RawMaterial("Soulfire Flies", sharRuinsMap, 1, RAW);
var silvertonguemoss = new RawMaterial("Silvertongue Moss", sharRuinsMap, 1, RAW);
var trollsearwaxresin = new RawMaterial("Troll's Earwax Resin", sharRuinsMap, 1, RAW);
var feywoodlog = new RawMaterial("Feywood Log", sharGroveMap, 1, RAW);
var dryadhair = new RawMaterial("Dryad Hair", sharGroveMap, 1, RAW);
var hardenedblightbark = new RawMaterial("Hardened Blight Bark", sharGroveMap, 1, RAW);
var shadeleaves = new RawMaterial("Shade Leaves", sharMiresMap, 1, RAW);
var shadowdemonseyes = new RawMaterial("Shadowdemon's Eyes", sharMiresMap, 1, RAW);

// declare raw mats from GM vendors
var tincal = new RawMaterial("Tincal", atelier, 2000, RAW);
var alkali = new RawMaterial("Alkali", atelier, 2000, RAW);
var redRouge = new RawMaterial("Red Rouge", goldsmith, 2000, RAW);
var potash = new RawMaterial("Potash", tenterground, 2000, RAW);
var terebinth = new RawMaterial("Terebinth", atelier, 400, RAW);
var ironRust = new RawMaterial("Iron Rust", bloomery, 200, RAW);
var tannersLiquor = new RawMaterial("Tanner's Liquor", tannery, 2000, RAW);
var saltMarshCrystal = new RawMaterial("Salt-Marsh Crystal", atelier, 2000, RAW);

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
var shatteredsnowflakes = new RawMaterial("Shattered Snowflakes", vos, 0, RAW);
var displacerbeastswhisker = new RawMaterial("Displacer Beast's Whisker", vos, 0, RAW);
var shardofdawnslight = new RawMaterial("Shard of Dawn's Light", vos, 0, RAW);
var corpseflowerthorn = new RawMaterial("Corpse Flower Thorn", vos, 0, RAW);
var questionablePieceOfLeather = new RawMaterial("Questionable Piece of Leather", sharMobs, 0, RAW);

// crafted mats level 1-70:
var craftedCharcoal = new CraftedMaterial("Charcoal", alchemy, 4, [
  { item: oakLog, amount: 12 }
], CRAFTED);

// declare crafted mats (mw1-4)
// mw1-3: 

var goldNugget = new CraftedMaterial("Gold Nugget", jewelcrafting, 1, [
  { item: goldOre, amount: 2 }, 
  { item: rockSalt, amount: 1 }
], CRAFTED);

var darkLacquer = new CraftedMaterial("Dark Lacquer", artificing, 1, [
  { item: lacquerBranch, amount: 4 }, 
  { item: craftedCharcoal, amount: 2 }
], CRAFTED);

var redEnamel = new CraftedMaterial("Red Enamel", alchemy, 1, [
  { item: silex, amount: 6 }, 
  { item: ironRust, amount: 2 }, 
  { item: terebinth, amount: 1 }
], CRAFTED);

var oilOfVitriol = new CraftedMaterial("Oil of Vitriol", alchemy, 1, [
  { item: ironSand, amount: 12 }
], CRAFTED);

var aquaFortis = new CraftedMaterial("Aqua Fortis", alchemy, 1, [
  { item: oilOfVitriol, amount: 1 }, 
  { item: alum, amount: 2 }, 
  { item: nitre, amount: 1 }
], CRAFTED);

var concentratedAquaRegia = new CraftedMaterial("Concentrated Aqua Regia", alchemy, 1, [
  { item: salAmmoniac, amount: 2 }, 
  { item: aquaFortis, amount: 1 }, 
  { item: nitre, amount: 1 }
], CRAFTED);

var vellum = new CraftedMaterial("Vellum", leatherworking, 1, [
  { item: slakedLime, amount: 1 }, 
  { item: calfSkin, amount: 1}
], CRAFTED);

var adamantBloom = new CraftedMaterial("Adamant Bloom", blacksmithing, 1, [
  { item: adamantSand, amount: 3 }, 
  { item: craftedCharcoal, amount: 3 }
], CRAFTED);

var adamantIngot = new CraftedMaterial("Adamant Ingot", blacksmithing, 1, [
  { item: adamantBloom, amount: 2 }, 
  { item: darkLacquer, amount: 1 }
], CRAFTED);

var adamantPlate = new CraftedMaterial("Adamant Plate", armorsmithing, 1, [
  { item: adamantIngot, amount: 1 }
], CRAFTED);

var goldIngot = new CraftedMaterial("Gold Ingot", jewelcrafting, 1, [
  { item: goldNugget, amount: 3 }, 
  { item: concentratedAquaRegia, amount: 1 }
], CRAFTED);

var goldWire = new CraftedMaterial("Gold Wire", jewelcrafting, 1, [
  { item: goldIngot, amount: 2 }, 
  { item: sharkOil, amount: 2 }
], CRAFTED);

var scintillantGlass = new CraftedMaterial("Scintillant Glass", artificing, 5, [
  { item: rawRubellite, amount: 1 }, 
  { item: rawSphene, amount: 1 }, 
  { item: goldWire, amount: 1 }
], CRAFTED);

var sphene = new CraftedMaterial("Sphene", jewelcrafting, 5, [
  { item: rawSphene, amount: 4 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var rubellite = new CraftedMaterial("Rubellite", jewelcrafting, 5, [
  { item: rawRubellite, amount: 4 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var artisansEnamel = new CraftedMaterial("Artisan's Enamel", artificing, 5, [
  { item: scintillantGlass, amount: 2 }, 
  { item: fartouchedResiduum, amount: 1 }, 
  { item: alkali, amount: 1 }
], CRAFTED);

var hardsand = new CraftedMaterial("Hardsand", alchemy, 5, [
  { item: spruceLog, amount: 2 }, 
  { item: adamantPlate, amount: 1 }
], CRAFTED);

var brightsilverIngot = new CraftedMaterial("Brightsilver Ingot", jewelcrafting, 5, [
  { item: redRouge, amount: 1 }, 
  { item: scintillantGlass, amount: 1 }, 
  { item: hardsand, amount: 2 }, 
  { item: nativeSilver, amount: 10 }
], CRAFTED);

// mw4: 
var bronzewoodLumber = new CraftedMaterial("Bronzewood Lumber", artificing, 4, [
  { item: bronzewoodLog, amount: 12 }, 
  { item: tincal, amount: 1 }
], CRAFTED);

var livingBronzewood = new CraftedMaterial("Living Bronzewood", artificing, 3, [
  { item: bronzewoodLumber, amount: 4 }, 
  { item: tearOfUbtao, amount: 1 }
], CRAFTED);

var lakhVarnish = new CraftedMaterial("Lakh Varnish", alchemy, 3, [
  { item: lakhResin, amount: 15 }, 
  { item: terebinth, amount: 5 }
], CRAFTED);

var livingVarnish = new CraftedMaterial("Living Varnish", alchemy, 3, [
  { item: lakhVarnish, amount: 3 }, 
  { item: tearOfUbtao, amount: 1 }
], CRAFTED);

var brilliantBead = new CraftedMaterial("Brilliant Bead", jewelcrafting, 4, [
  { item: batiriPrism, amount: 12 }, 
  { item: scintillantGlass, amount: 4 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var chultanSilkThread = new CraftedMaterial("Chultan Silk Thread", tailoring, 4, [
  { item: silkwormCocoon, amount: 12 }, 
  { item: effervescentWater, amount: 6 }
], CRAFTED);

var chultanSilk = new CraftedMaterial("Chultan Silk", tailoring, 2, [
  { item: chultanSilkThread, amount: 4 }, 
  { item: potash, amount: 1 }, 
  { item: spiderSilk, amount: 4 }
], CRAFTED);

var juteMacrame = new CraftedMaterial("Jute Macrame", tailoring, 3, [
  { item: samarachanJute, amount: 15 }, 
], CRAFTED);

var fangedOrnament = new CraftedMaterial("Fanged Ornament", jewelcrafting, 2, [
  { item: juteMacrame, amount: 3 }, 
  { item: allosaurFang, amount: 6 }, 
  { item: brilliantBead, amount: 4 }
], CRAFTED);

var featheredOrnament = new CraftedMaterial("Feathered Ornament", jewelcrafting, 2, [
  { item: juteMacrame, amount: 3 }, 
  { item: brilliantPinion, amount: 12 }, 
  { item: brilliantBead, amount: 4 }
], CRAFTED);

var obsidianShard = new CraftedMaterial("Obsidian Shard", blacksmithing, 4, [
  { item: obsidian, amount: 12 }, 
  { item: redRouge, amount: 1 }
], CRAFTED);

var soulfiredObsidian = new CraftedMaterial("Soulfired Obsidian", blacksmithing, 3, [
  { item: obsidianShard, amount: 4 }, 
  { item: moteOfSoulfire, amount: 1 }
], CRAFTED);

var lichstoneEnamel = new CraftedMaterial("Lichstone Enamel", artificing, 3, [
  { item: lichstone, amount: 1 }, 
  { item: artisansEnamel, amount: 4 }
], CRAFTED);

var hardenedBronzewood = new CraftedMaterial("Hardened Bronzewood", armorsmithing, 2, [
  { item: bronzewoodLumber, amount: 4 }, 
  { item: lakhVarnish, amount: 1 }
], CRAFTED);

var lionFur = new CraftedMaterial("Lion Fur", leatherworking, 2, [
  { item: lionHide, amount: 12 }, 
  { item: alum, amount: 6 }, 
  { item: tincal, amount: 1 }, 
  { item: tannersLiquor, amount: 1 }
], CRAFTED);

var lacqueredDinosaurLeather = new CraftedMaterial("Lacquered Dinosaur Leather", leatherworking, 2, [
  { item: chultanTeaLeaves, amount: 12 }, 
  { item: tannersLiquor, amount: 1 }, 
  { item: lakhVarnish, amount: 2 }, 
  { item: dinosaurHide, amount: 8 }
], CRAFTED);


// declare crafted items (mw5)
/* rings */
var bronzewoodRaidRing = new CraftedItem("Bronzewood Raid Ring", jewelcrafting, [
    { item: livingBronzewood, amount: 1 }, 
    { item: bronzewoodLumber, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var beadedAssaultRing = new CraftedItem("Beaded Assault Ring", jewelcrafting, [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var beadedRestorationRing = new CraftedItem("Beaded Restoration Ring", jewelcrafting, [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 2 }, 
    { item: chultanTeaLeaves, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var lichstoneWardRing = new CraftedItem("Lichstone Ward Ring", jewelcrafting, [
    { item: lichstoneEnamel, amount: 1 }, 
    { item: bronzewoodLumber, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);

/* necklaces */
var beadedAmulet = new CraftedItem("Beaded Amulet", jewelcrafting, [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var bronzewoodAmulet = new CraftedItem("Bronzewood Amulet", jewelcrafting, [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: bronzewoodLumber, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var fangedBeadedAmulet = new CraftedItem("Fanged Beaded Amulet", jewelcrafting, [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var lichstoneAmulet = new CraftedItem("Lichstone Amulet", jewelcrafting, [
    { item: lichstoneEnamel, amount: 1 }, 
    { item: obsidianShard, amount: 2 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: lakhVarnish, amount: 1 }
  ]);

/* weapons */
// CW
var obsidianMiztonhiyo = new CraftedItem("Obsidian Miztonhiyo (CW)", artificing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: juteMacrame, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 1 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var fangedQuiilpia = new CraftedItem("Fanged Quiilpia (CW)", artificing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: chultanSilkThread, amount: 1 }
  ]);
// DC
var featheredTeotlanextli = new CraftedItem("Feathered Teotlanextli (DC)", artificing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: juteMacrame, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 1 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var featheredIlhuilli = new CraftedItem("Feathered Ilhuilli (DC)", artificing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
// SW
var obsidianTecpatl = new CraftedItem("Obsidian Tecpatl (SW)", artificing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: obsidianShard, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: juteMacrame, amount: 1 }, 
    { item: lakhVarnish, amount: 1 }
  ]);
var dinohideTemicamatl = new CraftedItem("Dinohide Temicamatl (SW)", artificing, [
    { item: livingVarnish, amount: 3 }, 
    { item: lacqueredDinosaurLeather, amount: 4 }, 
    { item: chultanSilkThread, amount: 2 }, 
    { item: vellum, amount: 4 }
  ]);
// HR
var bronzewoodTlahuitolli = new CraftedItem("Bronzewood Tlahuitolli (HR)", artificing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 2 }, 
    { item: chultanSilkThread, amount: 2}, 
    { item: lakhVarnish, amount: 1 }
  ]);
var obsidianItztopilli = new CraftedItem("Obsidian Itztopilli (HR)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lionFur, amount: 2 }, 
    { item: bronzewoodLumber, amount: 1 }
  ]);
// GF
var bronzewoodMacuahuitl = new CraftedItem("Bronzewood Macuahuitl (GF)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: brightsilverIngot, amount: 3 }, 
    { item: sphene, amount: 1 }
  ]);
var bronzewoodMahuizzochimalli = new CraftedItem("Bronzewood Mahuizzochimalli (GF)", armorsmithing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: obsidianShard, amount: 4 }, 
    { item: lionFur, amount: 1 }
  ]);
// OP
var bronzewoodQuauhololli = new CraftedItem("Bronzewood Quauhololli (OP)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: darkLacquer, amount: 3 }, 
    { item: chultanSilk, amount: 1 }
  ]);
var bronzewoodCuauhchimalli = new CraftedItem("Bronzewood Cuauhchimalli (OP)", armorsmithing, [
    { item: livingBronzewood, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 1 }, 
    { item: lionFur, amount: 2 }
  ]);
// GWF
var bronzewoodHuitzauhqui = new CraftedItem("Bronzewood Huitzauhqui (GWF)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: brightsilverIngot, amount: 3 }, 
    { item: redEnamel, amount: 4 }
  ]);
var silkMecatica = new CraftedItem("Silk Mecatica (GWF)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: brilliantBead, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: chultanSilkThread, amount: 1 }
  ]);
// TR
var obsidianOmihuictli = new CraftedItem("Obsidian Omihuictli (TR)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: obsidianShard, amount: 4 }, 
    { item: lacqueredDinosaurLeather, amount: 2 }, 
    { item: hardenedBronzewood, amount: 1 }, 
    { item: featheredOrnament, amount: 1 }
  ]);
var obsidianItecpayo = new CraftedItem("Obsidian Itecpayo (TR)", blacksmithing, [
    { item: soulfiredObsidian, amount: 3 }, 
    { item: hardenedBronzewood, amount: 4 }, 
    { item: featheredOrnament, amount: 2 }, 
    { item: brightsilverIngot, amount: 1 }
  ]);

/* belts */
var beadedSash = new CraftedItem("Beaded Sash", tailoring, [
    { item: soulfiredObsidian, amount: 1 }, 
    { item: brilliantBead, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);
var bronzewoodSash = new CraftedItem("Bronzewood Sash", tailoring, [
    { item: livingBronzewood, amount: 1 }, 
    { item: brilliantBead, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);
var fangedSash = new CraftedItem("Fanged Sash", tailoring, [
    { item: soulfiredObsidian, amount: 1 }, 
    { item: fangedOrnament, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);
var lichstoneSash = new CraftedItem("Lichstone Sash", tailoring, [
    { item: lichstoneEnamel, amount: 1 }, 
    { item: obsidianShard, amount: 2 }, 
    { item: chultanSilk, amount: 4 }, 
    { item: juteMacrame, amount: 1 }
  ]);

// Sharandar craftable materials
var earsNTears = new CraftedMaterial("Ears 'n Tears", alchemy, 3, [
  { item: weepingwillowstears, amount: 15 }, 
  { item: terebinth, amount: 5 }
], CRAFTED);
var saltyTearsVarnish = new CraftedMaterial("Salty Tears Varnish", alchemy, 3, [
  { item: earsNTears, amount: 3 }, 
  { item: weepingwillowstears, amount: 3 }
], CRAFTED);
var feywoodLumber = new CraftedMaterial("Feywood Lumber", armorsmithing, 4, [
  { item: feywoodlog, amount: 12 }, 
  { item: soulfireflies, amount: 1 }
], CRAFTED);
var hardenedFeywood = new CraftedMaterial("Hardened Feywood", armorsmithing, 2, [
  { item: feywoodLumber, amount: 4 }, 
  { item: earsNTears, amount: 1 }
], CRAFTED);
var livingFeywood = new CraftedMaterial("Living Feywood", artificing, 3, [
  { item: weepingwillowstears, amount: 1 }, 
  { item: feywoodLumber, amount: 4 }
], CRAFTED);
var dawnsSilverEnamel = new CraftedMaterial("Dawn's Silver Enamel", artificing, 3, [
  { item: silvertonguemoss, amount: 4 }, 
  { item: shardofdawnslight, amount: 1 }
], CRAFTED);
var frozenDawnsDew = new CraftedMaterial("Frozen Dawn's Dew", blacksmithing, 4, [
  { item: shardofdawnslight, amount: 4 }, 
  { item: shatteredsnowflakes, amount: 1 }
], CRAFTED);
var silverVines = new CraftedMaterial("Silver Vines", blacksmithing, 3, [
  { item: silvertonguemoss, amount: 12 }, 
  { item: shardofdawnslight, amount: 1 }
], CRAFTED);
var wovenWhiskers = new CraftedMaterial("Woven Whiskers", tailoring, 2, [
  { item: displacerbeastswhisker, amount: 15 }, 
], CRAFTED);
var beadsOfLight = new CraftedMaterial("Beads of Light", jewelcrafting, 4, [
  { item: silvertonguemoss, amount: 12 },
  { item: silverVines, amount: 4 },  
  { item: shardofdawnslight, amount: 1 }
], CRAFTED);
var crystallineOrnament = new CraftedMaterial("Crystalline Ornament", jewelcrafting, 2, [
  { item: beadsOfLight, amount: 4 }, 
  { item: shardofdawnslight, amount: 12 }, 
  { item: wovenWhiskers, amount: 3 }
], CRAFTED);
var thornedOrnament = new CraftedMaterial("Thorned Ornament", jewelcrafting, 2, [
  { item: beadsOfLight, amount: 4 }, 
  { item: wovenWhiskers, amount: 3 }, 
  { item: corpseflowerthorn, amount: 6 }
], CRAFTED);
var lacqueredLeaves = new CraftedMaterial("Lacquered Leaves", leatherworking, 2, [
  { item: questionablePieceOfLeather, amount: 12 }, 
  { item: earsNTears, amount: 1 }, 
  { item: soulfireflies, amount: 1 }, 
  { item: dryadhair, amount: 1 }
], CRAFTED);
var lacqueredAgedLeather = new CraftedMaterial("Lacquered 'Aged' Leather", leatherworking, 2, [
  { item: shadowdemonseyes, amount: 12 }, 
  { item: soulfireflies, amount: 1 }, 
  { item: earsNTears, amount: 2 }, 
  { item: questionablePieceOfLeather, amount: 8 }
], CRAFTED);
var feyFibers = new CraftedMaterial("Fey Fibers", tailoring, 1, [
  { item: weepingwillowstears, amount: 6 }, 
  { item: dryadhair, amount: 12 }
], CRAFTED);
var feydFabrics = new CraftedMaterial("Fey'd Fabrics", tailoring, 3, [
  { item: weepingwillowstears, amount: 6 }, 
  { item: dryadhair, amount: 12 }
], CRAFTED);
var wovenFeyLeaves = new CraftedMaterial("Woven Fey Leaves", tailoring, 2, [
  { item: feyFibers, amount: 4 }, 
  { item: soulfireflies, amount: 1 }, 
  { item: dryadhair, amount: 4 }
], CRAFTED);


// Sharandar weapons
var feywoodLongbow = new CraftedItem("Feywood Longbow (Ranger)", artificing, [
    { item: livingFeywood, amount: 3 }, 
    { item: crystallineOrnament, amount: 2 },
    { item: silverVines, amount: 2 }, 
    { item: feyFibers, amount: 2 }, 
    { item: earsNTears, amount: 1 },  
  ]);
var feywoodPactBlade = new CraftedItem("Feywood Pact Blade (Warlock)", artificing, [
    { item: livingFeywood, amount: 3 }, 
    { item: wovenWhiskers, amount: 1 },
    { item: silverVines, amount: 4 }, 
    { item: crystallineOrnament, amount: 2 }, 
    { item: earsNTears, amount: 1 },  
  ]);
var silverineOrb = new CraftedItem("Silverine Orb (Wizard)", artificing, [
    { item: livingFeywood, amount: 3 }, 
    { item: crystallineOrnament, amount: 2 },
    { item: silverVines, amount: 1 }, 
    { item: wovenWhiskers, amount: 4 }, 
    { item: earsNTears, amount: 1 },  
  ]);
var silverineSceptor = new CraftedItem("Silverine Sceptor (Cleric)", artificing, [
    { item: livingFeywood, amount: 3 }, 
    { item: crystallineOrnament, amount: 2 },
    { item: silverVines, amount: 1 }, 
    { item: wovenWhiskers, amount: 4 }, 
    { item: earsNTears, amount: 1 },  
  ]);
var feywoodLute = new CraftedItem("Feywood Lute (Bard)", artificing, [
    { item: hardenedFeywood, amount: 4 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: thornedOrnament, amount: 2 }, 
    { item: earsNTears, amount: 1 },  
  ]);
var frozenDewIcon = new CraftedItem("Frozen Dew Icon (Cleric)", artificing, [
    { item: hardenedFeywood, amount: 4 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: thornedOrnament, amount: 2 }, 
    { item: earsNTears, amount: 1 },  
  ]);
var petrifiedGrimoire = new CraftedItem("Petrified Grimoire (Warlock)", artificing, [
    { item: lacqueredAgedLeather, amount: 4 }, 
    { item: saltyTearsVarnish, amount: 3 },
    { item: feyFibers, amount: 2 }, 
    { item: shadeleaves, amount: 4 },  
  ]);
var thornedTalisman = new CraftedItem("Thorned Talisman (Wizard)", artificing, [
    { item: beadsOfLight, amount: 4 }, 
    { item: livingFeywood, amount: 3 },
    { item: thornedOrnament, amount: 2 }, 
    { item: feyFibers, amount: 1 },  
  ]);
var feywoodBroadSlab = new CraftedItem("Feywood Broad Slab (Barbarian)", blacksmithing, [
    { item: hardenedFeywood, amount: 4 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: lacqueredAgedLeather, amount: 2 }, 
    { item: displacerbeastswhisker, amount: 3 },  
    { item: dawnsSilverEnamel, amount: 4 }, 
  ]);
var feywoodCarvedBlade = new CraftedItem("Feywood Carved Blade (Fighter)", blacksmithing, [
    { item: hardenedFeywood, amount: 4 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: lacqueredAgedLeather, amount: 2 }, 
    { item: displacerbeastswhisker, amount: 3 },  
    { item: shatteredsnowflakes, amount: 1 }, 
  ]);
var feywoodClub = new CraftedItem("Feywood Club (Paladin)", blacksmithing, [
    { item: hardenedFeywood, amount: 4 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: lacqueredAgedLeather, amount: 2 }, 
    { item: earsNTears, amount: 3 },  
    { item: wovenFeyLeaves, amount: 1 },
  ]);
var feywoodRapier = new CraftedItem("Feywood Rapier (Bard)", blacksmithing, [
    { item: hardenedFeywood, amount: 1 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: lacqueredAgedLeather, amount: 2 }, 
    { item: silverVines, amount: 4 },  
    { item: crystallineOrnament, amount: 1 },
  ]);
var feywoodStiletto = new CraftedItem("Feywood Stiletto (Rogue)", blacksmithing, [
    { item: hardenedFeywood, amount: 1 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: lacqueredAgedLeather, amount: 2 }, 
    { item: silverVines, amount: 4 },  
    { item: crystallineOrnament, amount: 1 },
  ]);
var feywoodBlades = new CraftedItem("Feywood Blades (Ranger)", blacksmithing, [
    { item: frozenDawnsDew, amount: 3 },
    { item: lacqueredLeaves, amount: 2 }, 
    { item: hardenedFeywood, amount: 4 },  
    { item: feywoodLumber, amount: 1 },
  ]);
var feywoodDagger = new CraftedItem("Feywood Dagger (Rogue)", blacksmithing, [
    { item: frozenDawnsDew, amount: 3 },
    { item: crystallineOrnament, amount: 2 }, 
    { item: hardenedFeywood, amount: 4 },  
    { item: displacerbeastswhisker, amount: 1 },
  ]);
var feywoodBuckler = new CraftedItem("Feywood Buckler (Fighter)", armorsmithing, [
    { item: livingFeywood, amount: 3 },
    { item: crystallineOrnament, amount: 2 }, 
    { item: silverVines, amount: 4 },  
    { item: lacqueredLeaves, amount: 1 },
  ]);
var feywoodShield = new CraftedItem("Feywood Shield (Paladin)", armorsmithing, [
    { item: livingFeywood, amount: 3 },
    { item: lacqueredLeaves, amount: 2 }, 
    { item: hardenedFeywood, amount: 4 },  
    { item: lacqueredAgedLeather, amount: 1 },
  ]);
var feydLeafSwordKnot = new CraftedItem("Fey'd Leaf Sword Knot' (Barbarian)", tailoring, [
    { item: beadsOfLight, amount: 4 }, 
    { item: frozenDawnsDew, amount: 3 },
    { item: crystallineOrnament, amount: 2 }, 
    { item: feyFibers, amount: 1 },  
  ]);


var CRAFTABLE_ITEMS = { "5": [], "7": [] };
var  TIERS = [{ name: "Chultan Masterwork", location: "Chult", num: "5" }, 
            { name: "Masterwork of Sharandar", location: "New Sharandar", num: "7" }];

function initializePage() {

  CRAFTABLE_ITEMS_V = [];

  CRAFTABLE_ITEMS_V.push(bronzewoodRaidRing.vueObject());
  CRAFTABLE_ITEMS_V.push(beadedAssaultRing.vueObject());
  CRAFTABLE_ITEMS_V.push(beadedRestorationRing.vueObject());
  CRAFTABLE_ITEMS_V.push(lichstoneWardRing.vueObject());

  CRAFTABLE_ITEMS_V.push(beadedAmulet.vueObject());
  CRAFTABLE_ITEMS_V.push(bronzewoodAmulet.vueObject());
  CRAFTABLE_ITEMS_V.push(fangedBeadedAmulet.vueObject());
  CRAFTABLE_ITEMS_V.push(lichstoneAmulet.vueObject());

  CRAFTABLE_ITEMS_V.push(beadedSash.vueObject());
  CRAFTABLE_ITEMS_V.push(bronzewoodSash.vueObject());
  CRAFTABLE_ITEMS_V.push(fangedSash.vueObject());
  CRAFTABLE_ITEMS_V.push(lichstoneSash.vueObject());

  // CW
  CRAFTABLE_ITEMS_V.push(obsidianMiztonhiyo.vueObject());
  CRAFTABLE_ITEMS_V.push(fangedQuiilpia.vueObject());

  // DC
  CRAFTABLE_ITEMS_V.push(featheredTeotlanextli.vueObject());
  CRAFTABLE_ITEMS_V.push(featheredIlhuilli.vueObject());

  // SW
  CRAFTABLE_ITEMS_V.push(obsidianTecpatl.vueObject());
  CRAFTABLE_ITEMS_V.push(dinohideTemicamatl.vueObject());

  // HR
  CRAFTABLE_ITEMS_V.push(bronzewoodTlahuitolli.vueObject());
  CRAFTABLE_ITEMS_V.push(obsidianItztopilli.vueObject());

  // OP
  CRAFTABLE_ITEMS_V.push(bronzewoodQuauhololli.vueObject());
  CRAFTABLE_ITEMS_V.push(bronzewoodCuauhchimalli.vueObject());

  // GF
  CRAFTABLE_ITEMS_V.push(bronzewoodMacuahuitl.vueObject());
  CRAFTABLE_ITEMS_V.push(bronzewoodMahuizzochimalli.vueObject());

  // GWF
  CRAFTABLE_ITEMS_V.push(bronzewoodHuitzauhqui.vueObject());
  CRAFTABLE_ITEMS_V.push(silkMecatica.vueObject());

  // TR
  CRAFTABLE_ITEMS_V.push(obsidianOmihuictli.vueObject());
  CRAFTABLE_ITEMS_V.push(obsidianItecpayo.vueObject());

  CRAFTABLE_ITEMS_VII = [];

  // CW
  CRAFTABLE_ITEMS_VII.push(silverineOrb.vueObject());
  CRAFTABLE_ITEMS_VII.push(thornedTalisman.vueObject());

  // DC
  CRAFTABLE_ITEMS_VII.push(silverineSceptor.vueObject());
  CRAFTABLE_ITEMS_VII.push(frozenDewIcon.vueObject());

  // SW
  CRAFTABLE_ITEMS_VII.push(feywoodPactBlade.vueObject());
  CRAFTABLE_ITEMS_VII.push(petrifiedGrimoire.vueObject());

  // HR
  CRAFTABLE_ITEMS_VII.push(feywoodBlades.vueObject());
  CRAFTABLE_ITEMS_VII.push(feywoodLongbow.vueObject());

  // OP
  CRAFTABLE_ITEMS_VII.push(feywoodClub.vueObject());
  CRAFTABLE_ITEMS_VII.push(feywoodShield.vueObject());

  // GF
  CRAFTABLE_ITEMS_VII.push(feywoodCarvedBlade.vueObject());
  CRAFTABLE_ITEMS_VII.push(feywoodBuckler.vueObject());

  // GWF
  CRAFTABLE_ITEMS_VII.push(feydLeafSwordKnot.vueObject());
  CRAFTABLE_ITEMS_VII.push(feywoodBroadSlab.vueObject());

  // TR
  CRAFTABLE_ITEMS_VII.push(feywoodDagger.vueObject());
  CRAFTABLE_ITEMS_VII.push(feywoodStiletto.vueObject());


  CRAFTABLE_ITEMS["5"] = CRAFTABLE_ITEMS_V;
  CRAFTABLE_ITEMS["7"] = CRAFTABLE_ITEMS_VII;
}

window.onload = function() {
  initializePage();

  Vue.component('craftable-item', {
    props: ['item', 'selection'], 
    data: function() {
      return {
        selected: false, 
      }
    }, 
    methods: {
      itemClicked: function() {
        if(!this.selected) { // only process the click if it's being selected,
                              // not if it's being repeatedly clicked after selected
          this.$emit('selectitem', this.item.name);
          this.selected = true;

          for(var i = 0; i < this.item.reqs.length; i++) {
            var req = this.item.reqs[i];
            console.log("adding req: " + req.item.name);
            this.$emit('addmaterial', req);
          }
        }
      }, 
      getSelectedClass: function() {
        if(this.selection != "") {
          if(this.selection == this.item.name) {
            return "selected";
          } else {
            this.selected = false;
            return "not-selected";
          }
        } else {
          return "";
        }
      }
    }, 
    template: `
      <div class="craftable-item vert-flex" @click="itemClicked()" :class="getSelectedClass()">
        <div class="craftable-item-name">{{ item.name }}</div>
      </div>
    `
  });

  Vue.component('mw-tier', {
    props: [ 'tier' ], 
    methods: {
      tierClicked: function() {
        this.$emit('selecttier', this.tier.num);
        console.log("selecting tier " + this.tier.name);
      }
    }, 
    template: `
      <div class="mw-tier" @click="tierClicked()">
        {{ tier.name }}<span>{{ tier.location }}</span>
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
      this.$root.$emit('addtototals', [thisMat, mult]);
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
        <div class="crafted-material-profession">{{ mat.item.profession.name }} &middot; success yields {{ mat.item.amount }}</div>
        <div class="crafted-material-expand" v-show="!expanded" @click="expanded = !expanded">Expand for requirements &raquo;</div>
        <div class="crafted-material-expand" v-show="expanded" @click="expanded = !expanded">&laquo; Collapse</div>
        <div class="crafted-material-reqs" v-show="expanded">
          <material v-for="sm in mat.item.reqs" :key="sm.item.name" :mat="sm" :multiplier="multiplier * ((mat.item.amount > mat.amount) ? 1 : Math.ceil(mat.amount / mat.item.amount))"></material>
        </div>
      </div>
    `
  });

  Vue.component('total', {
    props: ['t'], 
    template: `
      <div class="raw-material">
        <div class="raw-material-name">{{ t.name }} &times; {{ t.count }}</div>
      </div>
    `
  });

  // Vue app
  var vm = new Vue({
    el: '#item-select-wrap', 
    data: {
      tiers: TIERS, 
      craftables: [], 
      materials: [], 
      totals: [], 
      selectedItem: "", 
      selectedTier: "",
    }, 
    mounted: function() {
      // register listener on root to listen for addtototals event (from material component)
      this.$root.$on("addtototals", this.addMaterialToTotals);
    }, 
    methods: {
      resetTier: function() {
        this.materials = [];
        this.totals = [];
        this.selectedItem = "";
        this.selectedTier = "";
      }, 
      selectTier: function(tier) {
        this.selectedTier = tier;
        this.craftables = CRAFTABLE_ITEMS[tier];
      }, 
      resetItem: function() {
        this.materials = [];
        this.totals = [];
        this.selectedItem = "";
      }, 
      selectItem: function(si) {
        this.selectedItem = si;
      }, 
      addMaterial: function(mat) {
        this.materials.push(mat);
      }, 
      addMaterialToTotals: function(mat_mult) {
        var mat = mat_mult[0];
        var mult = mat_mult[1];
        //console.log("root version of addMaterialToTotals() called with " + mat.item.name + " x " + mult);

        var item = mat.item;
        var found = false;

        if(typeof item != "undefined" && item.mtype == "crafted") {
          console.log("found a craftable, " + item.name + " crafted " + mult + " time");
        }

        if(typeof item != "undefined" && item.mtype == 'raw') {
          var itemName = item.name;
          for(var i = 0; i < this.totals.length; i++) {
            var total = this.totals[i];
            if(total.name == itemName) {
              total.count += (mat.amount * mult);
              console.log("added " + (mat.amount * mult) + " to total for " + itemName + ", now " + total.count);
              found = true;
            }
          }
          if(!found) {
            this.totals.push({ name: itemName, count: mat.amount * mult });
            console.log("added initial " + (mat.amount * mult) + " " + itemName);
          }
        }
      }
    }
  });

}