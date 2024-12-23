var localeNames = ['None', 'Fortress', 'Forest and Hills', 'Desert', 'Swamp', 'Volcano', 'Jungle', 'Castle Schrade', 'Battlegrounds', 'Great Arena', 'Small Arena'];

var rewardTypes = [ 'Base', 'Break Monster Part', "Break Rathian's Head", "Break Rathian's Wing", "Break Rathalos' Head", "Break Rathalos' Wing", "Unk", "Unk", "Unk", "Unk", "Break Kut-Ku's Ears", "Additional 1", "Additional 2", "Additional 3", "Additional 4", "Additional 5", "Break Lao's Horn", "Break Lao's Head", "Break Lao's Back", "Break Lao's Right Shoulder", "Break Lao's Left Shoulder", "Deliver 0", "Deliver 5", "Deliver 10", "Deliver 15", "Deliver 20", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Additional 1", "Additional 2", "Additional 3", "Additional 4", "Additional 5" ];

var difficulty = [ 'Low Rank', 'High Rank', ' G Rank', 'Training' ];

var stageName = [ 'None', 'Jungle 3', 'Jungle 1', 'Jungle 7', 'Jungle BC', 'Jungle 5', 'Swamp 3', 'Desert Secret', 'Battleground BC', 'Swamp 5', 'Fortress BC', 'Fortress 2', 'Fortress 5', 'NA', 'Fortress 1', 'NA', 'Swamp 1', 'NA', 'Jungle 4', 'Jungle 6', 'Schrade BC', 'FnH BC', 'Jungle 9', 'Jungle 10', 'NA', 'Schrade 1', 'Jungle 8', 'NA', 'Fortress 3', 'NA', 'Fortress 4', 'Fortress 6', 'FnH 6', 'FnH 3', 'FnH 10', 'FnH 8', 'FnH 9', 'FnH 4', 'FnH 2', 'FnH 1', 'FnH 5', 'FnH 7', 'FnH 11', 'FnH 12', 'Swamp 4', 'Desert 2', 'Jungle 2', 'Desert 6', 'Desert 9', 'Desert 8', 'Desert BC', 'Desert 1', 'Desert 4', 'Desert 10', 'Desert 5', 'Desert 11', 'Desert 7', 'Desert 3', 'Volcano 2', 'Volcano 4', 'Volcano 5', 'Volcano BC', 'Volcano 8', 'Volcano 1', 'Volcano 3', 'Volcano 6', 'Volcano 7', 'Swamp BC', 'Swamp 2', 'Swamp 9', 'Swamp 8', 'Swamp 10', 'Swamp 6', 'Swamp 11', 'Swamp Secret', 'Swamp 7', 'Minegarde Center', 'Guild Tavern', 'Market', 'Smithy', 'Guest House', 'Pawn Room', 'Rook Room', 'Bishop Room', 'Queen Room', 'King Room', 'Kokoto Room', 'Kokoto', 'Battleground 1', 'Arena BC', 'Great Arena', 'Small Arena' ];

var MonsterVar = [ ['None'], ['Rathian'], ['Fatalis'], ['Kelbi (Male)', 'Kelbi (Female)'], ['Mosswine'], ['Bullfango (Normal)', 'Bullfango (Large)', 'Bullfango (Weak)', 'Bullfango (Weak Large)'], ['Yian Kut-Ku'], ['Lao-Shan Lung'], ['Cephadrome'], ['Felyne'], ['Veggie Elder'], ['Rathalos'], ['Aptonoth (Adult 0)', 'Aptonoth (Adult Weak 1)', 'Aptonoth (Baby)', 'Aptonoth (Juvenile)', 'Aptonoth (Adult Weak 4)', 'Aptonoth (Adult 5)'], ['Genprey'], ['Diablos'], ['Khezu'], ['Velociprey'], ['Gravios'], ['Felyne Cart'], ['Vespoid'], ['Gypceros'], ['Plesioth'], ['Basarios'], ['Melynx'], ['Hornetaur'], ['Apceros'], ['Monoblos'], ['Velocidrome'], ['Gendrome'], ['Rock (Medium White)', 'Rock (Medium Blue)', 'Ore Rock', 'Mossy Rock', 'Exploding Rock', 'Rock (Large Blue)', 'Rock (Large White)'] ];

var difficulty = [ 'Low Rank', 'High Rank', ' G Rank', 'Training' ];

var questTypes = ["Unknown", "Hunting", "Gathering", "Unk", "Capturing", "Unk", "Unk", "Unk", "Unk", "Special", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Unk", "Huntaton"];

var oneStar = [
    [ 1, 0 ],
    [ 37, 0 ],
    [ 2, 0 ],
    [ 3, 0 ],
    [ 38, 3 ],
    [ 6, 0 ],
    [ 10014, 6 ],
    [ 7, 10014 ],
    [ 10015, 0 ],
    [ 4, 10015 ],
    [ 11, 0 ],
    [ 20, 0 ],
    [ 21, 0 ],
    [ 35, 0 ]
];

var twoStar = [
    [ 40, 0 ],
    [ 28, 40 ],
    [ 23, 0 ],
    [ 16, 0 ],
    [ 8, 0 ],
    [ 10022, 0 ],
    [ 18, 10022 ],
    [ 10028, 0 ],
    [ 5, 10028 ],
    [ 39, 10028 ],
    [ 10036, 0 ],
    [ 10039, 0 ],
    [ 10, 10039 ],
    [ 12, 10039 ],
    [ 14, 0 ],
    [ 15, 14 ],
    [ 24, 14 ],
    [ 19, 0 ],
    [ 47, 0 ],
    [ 10030, 0 ],
    [ 54, 10030 ]
];

var threeStar = [
    [ 10032, 0 ],
    [ 10033, 80000 ],
    [ 46, 10032 ],
    [ 51, 10032 ],
    [ 27, 10039 ],
    [ 10040, 80000 ],
    [ 45, 10039 ],
    [ 10038, 80000 ],
    [ 33, 0 ],
    [ 10043, 0 ],
    [ 26, 10043 ],
    [ 31, 0 ],
    [ 32, 31 ],
    [ 42, 31 ],
    [ 10046, 0 ],
    [ 41, 10046 ],
    [ 49, 10046 ],
    [ 10041, 0 ],
    [ 10042, 80000 ],
    [ 10045, 0 ],
    [ 55, 10045 ],
    [ 10035, 0 ],
    [ 43, 10035 ],
    [ 50, 10035 ],
    [ 44, 0 ],
    [ 53, 10036 ],
    [ 48, 0 ],
    [ 10047, 10048 ],
    [ 10048, 10048 ],
    [ 52, 10048 ]
];

var fourStar = [
	[ 1002, 0 ],
	[ 1004, 0 ],
	[ 1009, 0 ],
	[ 1012, 23 ],
	[ 1006, 0 ],
	[ 1010, 0 ],
	[ 1015, 0 ],
	[ 1003, 0 ],
	[ 1013, 0 ],
	[ 1016, 0 ],
	[ 1001, 1016 ],
	[ 1011, 0 ],
	[ 1017, 1011 ],
	[ 1008, 0 ],
	[ 1005, 0 ],
	[ 1007, 1005 ],
	[ 1014, 1005 ],
	[ 1018, 1016 ],
	[ 1019, 43 ]
];

var ItemNames = [
    "－－－－－－",
    "Book of Combos 1",
    "Book of Combos 2",
    "Book of Combos 3",
    "Book of Combos 4",
    "Book of Combos 5",
    "Alchemy Guide",
    "Potion",
    "Mega Potion",
    "Nutrients",
    "Mega Nutrients",
    "Antidote",
    "Immunizer",
    "Power Juice",
    "Mega Juice",
    "Demondrug",
    "Mega Demondrug",
    "Power Pill",
    "Armorskin",
    "Mega Armorskin",
    "Armor Pill",
    "Cool Drink",
    "Hot Drink",
    "Psychoserum",
    "Monster Fluid",
    "Monster Broth",
    "Herbal Medicine",
    "Max Potion",
    "Ancient Potion",
    "Catalyst",
    "Gunpowder",
    "Lifecrystals",
    "Lifepowder",
    "Powercharm",
    "Powertalon",
    "Armorcharm",
    "Armortalon",
    "Raw Meat",
    "Rare Steak",
    "Well-Done Steak",
    "Gourmet Steak",
    "Burnt Meat",
    "Poisoned Meat",
    "Tainted Meat",
    "Drugged Meat",
    "Kingmeat",
    "Throwing Knife",
    "Poison Thrw Knf",
    "Sleeping Thr Knf",
    "Paralyze Thr Knf",
    "Bomb Material",
    "Paintball",
    "Flash Bomb",
    "Sonic Bomb",
    "Dung",
    "Dung Bomb",
    "Smoke Bomb",
    "Poison Smoke Bmb",
    "Farcaster",
    "Spiderweb",
    "Net",
    "Pitfall Trap",
    "Trap Tool",
    "Barrel Lid",
    "Small Barrel",
    "Large Barrel",
    "Sm Barrel-Bomb",
    "Sm Barrel-Bomb+",
    "Lg Barrel-Bomb",
    "Lg Barrel-Bomb+",
    "Huskberry",
    "Sm Bone Husk",
    "Lg Bone Husk",
    "Normal S Lv1",
    "Normal S Lv2",
    "Normal S Lv3",
    "Pierce S Lv1",
    "Pierce S Lv2",
    "Pierce S Lv3",
    "Pellet S Lv1",
    "Pellet S Lv2",
    "Pellet S Lv3",
    "Crag S Lv1",
    "Crag S Lv2",
    "Crag S Lv3",
    "Clust S Lv1",
    "Clust S Lv2",
    "Clust S Lv3",
    "Flaming S",
    "Ice S",
    "Thunder S",
    "Dragon S",
    "Recov S Lv1",
    "Recov S Lv2",
    "Poison S Lv1",
    "Poison S Lv2",
    "Stun S Lv1",
    "Stun S Lv2",
    "Sleep S Lv1",
    "Sleep S Lv2",
    "Tranq S",
    "Paint S",
    "Demon S",
    "Armor S",
    "Cricket",
    "Worm",
    "Firefly",
    "Frog",
    "Tuna Bait",
    "Arrowana Bait",
    "Goldenfish Bait",
    "Mega Fishing Fly",
    "Old Pickaxe",
    "Iron Pickaxe",
    "Mega Pickaxe",
    "Old Bugnet",
    "Bugnet",
    "Mega Bugnet",
    "BBQ Spit",
    "Gourmet BBQ Spit",
    "Whetstone",
    "Binoculars",
    "Garbage",
    "Flute",
    "Health Flute",
    "Antidote Flute",
    "Demon Flute",
    "Armor Flute",
    "Honey",
    "Herb",
    "Antidote Herb",
    "Fire Herb",
    "Ivy",
    "Sleep Herb",
    "Sap Plant",
    "Felvine",
    "Cactus Flower",
    "King Cactus",
    "Hot Pepper",
    "Special Mushroom",
    "Blue Mushroom",
    "Nitroshroom",
    "Stunshroom",
    "Toadstool",
    "Dragon Toadstool",
    "Spicy Mushroom",
    "Paintberry",
    "Power Seed",
    "Armor Seed",
    "Dragon Seed",
    "Scatternut",
    "Needleberry",
    "Bomberry",
    "Stone",
    "Disk Stone",
    "Iron Ore",
    "Earth Crystal",
    "Machalite Ore",
    "Dragonite Ore",
    "Carbalite Ore",
    "Great Stone",
    "Union Ore",
    "Firestone",
    "Firecell Stone",
    "Coal",
    "Lightcrystal",
    "Novacrystal",
    "Pure Crystal",
    "Antiseptic Stone",
    "Ice Crystal",
    "Knife Mackerel",
    "Sushifish",
    "Sleepyfish",
    "Pin Tuna",
    "Rumblefish",
    "Scatterfish",
    "Burst Arrowana",
    "Bomb Arrowana",
    "Goldenfish",
    "Speartuna",
    "Insect Husk",
    "Yambug",
    "Bughopper",
    "Snakebee Larva",
    "Godbug",
    "Bitterbug",
    "Flashbug",
    "Thunderbug",
    "King Scarab",
    "Joiner Grasshppr",
    "Screamer",
    "Poison Sac",
    "Toxin Sac",
    "Stun Sac",
    "Paralysis Sac",
    "Sleep Sac",
    "Coma Sac",
    "Flame Sac",
    "Inferno Sac",
    "Electro Sac",
    "Thunder Sac",
    "Power Extract",
    "Pale Extract",
    "Sm Monster Bone",
    "Med Monster Bone",
    "Lg Monster Bone",
    "Monster Bone+",
    "Mystery Bone",
    "Unknown Skull",
    "Master's Skull",
    "Bone",
    "Wyvern Fang",
    "Wyvern Claw",
    "Mosswine Hide",
    "Mosswine Head",
    "Bullfango Pelt",
    "Bullfango Head",
    "Kelbi Horn",
    "Kelbi Hide",
    "Velociprey Fang",
    "Velociprey Scale",
    "Velociprey Scle+",
    "Velociprey Hide",
    "Velociprey Hide+",
    "Velocidrome Claw",
    "Velocidrome Head",
    "WhtVelopry Scale",
    "Wht Velopry Hide",
    "Genprey Fang",
    "Genprey Scale",
    "Genprey Scale+",
    "Genprey Hide",
    "Genprey Hide+",
    "Gendrome Hide",
    "Ioprey Fang",
    "Ioprey Scale",
    "Ioprey Scale+",
    "Ioprey Hide",
    "Ioprey Hide+",
    "Iodrome Hide",
    "Kut-Ku Coin",
    "Kut-Ku Scale",
    "Kut-Ku Shell",
    "Kut-Ku Carapace",
    "Kut-Ku Ear",
    "Long Kut-Ku Ear",
    "Tiny Beak",
    "Giant Beak",
    "Splendid Beak",
    "Kut-Ku Webbing",
    "Kut-Ku Wing",
    "BluKutKuCarapace",
    "Blue Kut-Ku Ear",
    "Blue Kut-Ku Wing",
    "Gypceros Coin",
    "Rubbery Hide",
    "Rubbery Hide+",
    "Gypceros Head",
    "Pur Rubbery Hide",
    "Piscine Fang",
    "Piscine Liver",
    "Piscine Jaw",
    "Plesioth Coin",
    "Plesioth Scale",
    "Plesioth Scale+",
    "Plesioth Fin",
    "Plesioth Top Fin",
    "Grn Plesioth Scl",
    "Grn Plesioth Fin",
    "Cephalos Coin",
    "Cephalos Scale",
    "Cephalos Scale+",
    "Cephalos Fin",
    "Cephalos Fin+",
    "Coral Cphlos Scl",
    "Coral Cphlos Fin",
    "Rathian Coin",
    "Rathian Claw",
    "Rathian Scale",
    "Rathian Scale+",
    "Rathian Plate",
    "Rathian Ruby",
    "Rathian Shell",
    "Rathian Carapace",
    "Rathian Spike",
    "Pnk Rathian Claw",
    "Pnk Rathian Scl",
    "Pnk Rathian Scl+",
    "Pnk Rthian Plate",
    "Pnk Rathian Rby",
    "Pnk Rathian Shl",
    "Pnk Rathian Cpc",
    "Pnk Rthian Thorn",
    "Gld Rathian Clw",
    "Gld Rathian Scl",
    "Gld Rthian Plate",
    "Gld Rathian Rby",
    "Gld Rathian Shl",
    "Gld Rthian Thorn",
    "Rathalos Coin",
    "Rathalos Claw",
    "Rathalos Scale",
    "Rathalos Scale+",
    "Rathalos Plate",
    "Rathalos Ruby",
    "Rathalos Shell",
    "Rathlos Carapace",
    "Wyvern Marrow",
    "Rathalos Tail",
    "Rathalos Webbing",
    "Rathalos Wing",
    "Azure Rthlos Clw",
    "Azure Rthlos Scl",
    "Azre Rthlos Scl+",
    "Azre Rthls Plate",
    "Azure Rthlos Rby",
    "Azure Rthlos Shl",
    "Azure Rthlos Cpc",
    "Rthlos BrainStem",
    "Azur Rthlos Tail",
    "Azr Rthls Webbng",
    "Azur Rthlos Wing",
    "Slvr Rthalos Clw",
    "Slvr Rthalos Scl",
    "Slvr Rthls Plate",
    "Slvr Rthalos Rby",
    "Slvr Rthalos Shl",
    "Slvr Rthals Tail",
    "Slv Rthls Webbng",
    "Slvr Rthlos Wing",
    "Khezu Coin",
    "Flabby Hide",
    "Khezu Hide - Tan",
    "Pale Bone",
    "Pale Khezu Steak",
    "Pale Lips",
    "Alluring Hide",
    "Basarios Coin",
    "Basarios Shell",
    "Basrios Carapace",
    "Basarios Wing",
    "Basarios Tears",
    "Gravios Coin",
    "Gravios Shell",
    "Gravios Carapace",
    "GraviosHeavyShl",
    "Gravios Wing",
    "StrngGraviosWing",
    "Gravios Head",
    "Gravios Jaw",
    "Blk Gravios Shl",
    "Blk Gravios Cpc",
    "Blk Gravios Head",
    "Blk Gravios Wing",
    "Twisted Horn",
    "Majestic Horn",
    "Solid Blos Horn",
    "Diablos Shell",
    "Diablos Carapace",
    "Diablos Spine",
    "Diablos Thoracic",
    "Diablos Tail",
    "Blos Jaw",
    "Blos Fang",
    "TwstBlkBlosHrn",
    "Black Blos Shell",
    "Black Blos Spine",
    "Black Blos Tail",
    "Vespoid Abdomen",
    "Vespoid Shell",
    "Vespoid Carapace",
    "Vespoid Wing",
    "Vespoid Bladefin",
    "Vspoid Razorwing",
    "Hornetaur Shell",
    "Hornet Carapace",
    "Hornetaur Head",
    "Hornetaur Wing",
    "Hornet Bladefin",
    "Hornet Razorwing",
    "Sm Lobstershell",
    "Lg Lobstershell",
    "Gt Lobstershell",
    "Monoblos Coin",
    "Crimson Horn",
    "Monoblos Shell",
    "Monoblos Spine",
    "Monoblos Heart",
    "Wht Monoblos Hrn",
    "Wht Monoblos Shl",
    "Wht Monoblos Spn",
    "Kirin Horn",
    "Kirin Hide+",
    "Kirin Mane",
    "Kirin Thndr Tail",
    "Kirin Azure Horn",
    "Kirin Azr T-Tail",
    "Sm Lao-Shan Claw",
    "Lao-Shan's Claw",
    "Lao-Shan's Horn",
    "Lao-Shan's Scale",
    "Lao-Shan Scale+",
    "Lao-Shan's Plate",
    "Lao-Shan's Ruby",
    "Lao-Shan's Shell",
    "Lao-ShanCarapace",
    "Lao-Shan's Spine",
    "LaoShan Thoracic",
    "LaoS Heavy Shell",
    "Azure LaoS Claw",
    "Azure LaoS Horn",
    "Azure LaoS Scale",
    "Azure LaoS Plate",
    "Azure LaoS Shell",
    "Azure LaoS Spine",
    "Fatalis' Horn",
    "Fatalis' Spike",
    "Fatalis' Gore",
    "Fatalis' Scale",
    "Fatalis' Scale+",
    "Thck Fatalis Scl",
    "Fatalis' Shell",
    "Fatalis Carapace",
    "Fatalis Hvy Shl",
    "Fatalis' Crust",
    "Hrd Fatalis Crst",
    "Hvy Fatalis Crst",
    "Fatalis' Eye",
    "Fatalis Shrp Eye",
    "Fatalis Evil Eye",
    "Fatalis' Webbing",
    "Fatalis' Wing",
    "Fatalis Strg Wng",
    "Fatlis Crmsn Hrn",
    "Fatlis Crmsn Scl",
    "Fatlis Crmsn Shl",
    "Ft Crmsn B-Plate",
    "Fatalis Devl Eye",
    "Fatlis Crmsn Wng",
    "Egg Ticket",
    "Jewel Ticket",
    "Commendation",
    "Pawprint Stamp",
    "Old Lady's Note",
    "Guild Ticket",
    "Silver Ticket",
    "Gold Ticket",
    "Platinum Ticket",
    "BBQ Ticket",
    "Hunter Citation",
    "Grt Sword Ticket",
    "Hammer Ticket",
    "Lance Ticket",
    "Saber Ticket",
    "Gunner Ticket",
    "Paw Pass Ticket",
    "Magazine Ticket",
    "Dengeki Ticket",
    "ThunderG Voucher",
    "Chrome Voucher",
    "Lost Umbrella",
    "Chief's Old Swrd",
    "Ruststone BG",
    "Ruststone GS",
    "Ruststone Hmr",
    "Ruststone SnS",
    "Ruststone Lan",
    "Ancient Stone BG",
    "Ancient Stone GS",
    "Ancient Stone Hm",
    "Ancient Stone SS",
    "Ancient Stone Ln",
    "Organizer Guide",
    "Backpacker Guide",
    "Mosswine Info",
    "Bullfango Info",
    "Kelbi Info",
    "Aptonoth Info",
    "Apceros Info",
    "Felyne Info",
    "Melynx Info",
    "Velociprey Info",
    "Velocidrome Info",
    "Genprey Info",
    "Gendrome Info",
    "Ioprey Info",
    "Iodrome Info",
    "Rathalos Info",
    "Rathian Info",
    "Yian Kut-Ku Info",
    "Gypceros Info",
    "Vespoid Info",
    "Hornetaur Info",
    "Khezu Info",
    "Plesioth Info",
    "Cephalos Info",
    "Cephadrome Info",
    "Monoblos Info",
    "Diablos Info",
    "Gravios Info",
    "Basarios Info",
    "Kirin Info",
    "Lao-Shan Info",
    "Fatalis Info",
    "Silver Egg",
    "Golden Egg",
    "Map",
    "First-aid Med.",
    "Ration",
    "Portable Spit",
    "Mini Whetstone",
    "Tranq Bomb",
    "Ballista S",
    "Cannon S",
    "Wyvern",
    "Wyvern Egg",
    "Herbivore Egg",
    "Sootstone Ore",
    "Quartz Ore",
    "Powderstone",
    "Disk S",
    "Antidote S",
    "Dung S"
];