export function translateClassName(className) {
  return CLASS_NAME_MAP.get(className);
}

// Adapted from https://github.com/tensorflow/tfjs-models/blob/c3331788759b04f5c5827a372910640ca1cfd8d4/mobilenet/src/imagenet_classes.ts
const IMAGENET_CLASSES = {
  0: "tench, Tinca tinca",
  1: "goldfish, Carassius auratus",
  2:
    "great white shark, white shark, man-eater, man-eating shark, " +
    "Carcharodon carcharias",
  3: "tiger shark, Galeocerdo cuvieri",
  4: "hammerhead, hammerhead shark",
  5: "electric ray, crampfish, numbfish, torpedo",
  6: "stingray",
  7: "cock",
  8: "hen",
  9: "ostrich, Struthio camelus",
  10: "brambling, Fringilla montifringilla",
  11: "goldfinch, Carduelis carduelis",
  12: "house finch, linnet, Carpodacus mexicanus",
  13: "junco, snowbird",
  14: "indigo bunting, indigo finch, indigo bird, Passerina cyanea",
  15: "robin, American robin, Turdus migratorius",
  16: "bulbul",
  17: "jay",
  18: "magpie",
  19: "chickadee",
  20: "water ouzel, dipper",
  21: "kite",
  22: "bald eagle, American eagle, Haliaeetus leucocephalus",
  23: "vulture",
  24: "great grey owl, great gray owl, Strix nebulosa",
  25: "European fire salamander, Salamandra salamandra",
  26: "common newt, Triturus vulgaris",
  27: "eft",
  28: "spotted salamander, Ambystoma maculatum",
  29: "axolotl, mud puppy, Ambystoma mexicanum",
  30: "bullfrog, Rana catesbeiana",
  31: "tree frog, tree-frog",
  32: "tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",
  33: "loggerhead, loggerhead turtle, Caretta caretta",
  34: "leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",
  35: "mud turtle",
  36: "terrapin",
  37: "box turtle, box tortoise",
  38: "banded gecko",
  39: "common iguana, iguana, Iguana iguana",
  40: "American chameleon, anole, Anolis carolinensis",
  41: "whiptail, whiptail lizard",
  42: "agama",
  43: "frilled lizard, Chlamydosaurus kingi",
  44: "alligator lizard",
  45: "Gila monster, Heloderma suspectum",
  46: "green lizard, Lacerta viridis",
  47: "African chameleon, Chamaeleo chamaeleon",
  48:
    "Komodo dragon, Komodo lizard, dragon lizard, giant lizard, " +
    "Varanus komodoensis",
  49: "African crocodile, Nile crocodile, Crocodylus niloticus",
  50: "American alligator, Alligator mississipiensis",
  51: "triceratops",
  52: "thunder snake, worm snake, Carphophis amoenus",
  53: "ringneck snake, ring-necked snake, ring snake",
  54: "hognose snake, puff adder, sand viper",
  55: "green snake, grass snake",
  56: "king snake, kingsnake",
  57: "garter snake, grass snake",
  58: "water snake",
  59: "vine snake",
  60: "night snake, Hypsiglena torquata",
  61: "boa constrictor, Constrictor constrictor",
  62: "rock python, rock snake, Python sebae",
  63: "Indian cobra, Naja naja",
  64: "green mamba",
  65: "sea snake",
  66: "horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",
  67: "diamondback, diamondback rattlesnake, Crotalus adamanteus",
  68: "sidewinder, horned rattlesnake, Crotalus cerastes",
  69: "trilobite",
  70: "harvestman, daddy longlegs, Phalangium opilio",
  71: "scorpion",
  72: "black and gold garden spider, Argiope aurantia",
  73: "barn spider, Araneus cavaticus",
  74: "garden spider, Aranea diademata",
  75: "black widow, Latrodectus mactans",
  76: "tarantula",
  77: "wolf spider, hunting spider",
  78: "tick",
  79: "centipede",
  80: "black grouse",
  81: "ptarmigan",
  82: "ruffed grouse, partridge, Bonasa umbellus",
  83: "prairie chicken, prairie grouse, prairie fowl",
  84: "peacock",
  85: "quail",
  86: "partridge",
  87: "African grey, African gray, Psittacus erithacus",
  88: "macaw",
  89: "sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",
  90: "lorikeet",
  91: "coucal",
  92: "bee eater",
  93: "hornbill",
  94: "hummingbird",
  95: "jacamar",
  96: "toucan",
  97: "drake",
  98: "red-breasted merganser, Mergus serrator",
  99: "goose",
  100: "black swan, Cygnus atratus",
  101: "tusker",
  102: "echidna, spiny anteater, anteater",
  103:
    "platypus, duckbill, duckbilled platypus, duck-billed platypus, " +
    "Ornithorhynchus anatinus",
  104: "wallaby, brush kangaroo",
  105: "koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",
  106: "wombat",
  107: "jelly fish",
  108: "sea anemone, anemone",
  109: "brain coral",
  110: "flatworm, platyhelminth",
  111: "nematode, nematode worm, roundworm",
  112: "conch",
  113: "snail",
  114: "slug",
  115: "sea slug, nudibranch",
  116: "chiton, coat-of-mail shell, sea cradle, polyplacophore",
  117: "chambered nautilus, pearly nautilus, nautilus",
  118: "Dungeness crab, Cancer magister",
  119: "rock crab, Cancer irroratus",
  120: "fiddler crab",
  121:
    "king crab, Alaska crab, Alaskan king crab, Alaska king crab, " +
    "Paralithodes camtschatica",
  122: "American lobster, Northern lobster, Maine lobster, Homarus americanus",
  123:
    "spiny lobster, langouste, rock lobster, crawfish, crayfish, sea " +
    "crawfish",
  124: "crayfish, crawfish, crawdad, crawdaddy",
  125: "hermit crab",
  126: "isopod",
  127: "white stork, Ciconia ciconia",
  128: "black stork, Ciconia nigra",
  129: "spoonbill",
  130: "flamingo",
  131: "little blue heron, Egretta caerulea",
  132: "American egret, great white heron, Egretta albus",
  133: "bittern",
  134: "crane",
  135: "limpkin, Aramus pictus",
  136: "European gallinule, Porphyrio porphyrio",
  137: "American coot, marsh hen, mud hen, water hen, Fulica americana",
  138: "bustard",
  139: "ruddy turnstone, Arenaria interpres",
  140: "red-backed sandpiper, dunlin, Erolia alpina",
  141: "redshank, Tringa totanus",
  142: "dowitcher",
  143: "oystercatcher, oyster catcher",
  144: "pelican",
  145: "king penguin, Aptenodytes patagonica",
  146: "albatross, mollymawk",
  147:
    "grey whale, gray whale, devilfish, Eschrichtius gibbosus, " +
    "Eschrichtius robustus",
  148: "killer whale, killer, orca, grampus, sea wolf, Orcinus orca",
  149: "dugong, Dugong dugon",
  150: "sea lion",
  151: "Chihuahua",
  152: "Japanese spaniel",
  153: "Maltese dog, Maltese terrier, Maltese",
  154: "Pekinese, Pekingese, Peke",
  155: "Shih-Tzu",
  156: "Blenheim spaniel",
  157: "papillon",
  158: "toy terrier",
  159: "Rhodesian ridgeback",
  160: "Afghan hound, Afghan",
  161: "basset, basset hound",
  162: "beagle",
  163: "bloodhound, sleuthhound",
  164: "bluetick",
  165: "black-and-tan coonhound",
  166: "Walker hound, Walker foxhound",
  167: "English foxhound",
  168: "redbone",
  169: "borzoi, Russian wolfhound",
  170: "Irish wolfhound",
  171: "Italian greyhound",
  172: "whippet",
  173: "Ibizan hound, Ibizan Podenco",
  174: "Norwegian elkhound, elkhound",
  175: "otterhound, otter hound",
  176: "Saluki, gazelle hound",
  177: "Scottish deerhound, deerhound",
  178: "Weimaraner",
  179: "Staffordshire bullterrier, Staffordshire bull terrier",
  180:
    "American Staffordshire terrier, Staffordshire terrier, American pit " +
    "bull terrier, pit bull terrier",
  181: "Bedlington terrier",
  182: "Border terrier",
  183: "Kerry blue terrier",
  184: "Irish terrier",
  185: "Norfolk terrier",
  186: "Norwich terrier",
  187: "Yorkshire terrier",
  188: "wire-haired fox terrier",
  189: "Lakeland terrier",
  190: "Sealyham terrier, Sealyham",
  191: "Airedale, Airedale terrier",
  192: "cairn, cairn terrier",
  193: "Australian terrier",
  194: "Dandie Dinmont, Dandie Dinmont terrier",
  195: "Boston bull, Boston terrier",
  196: "miniature schnauzer",
  197: "giant schnauzer",
  198: "standard schnauzer",
  199: "Scotch terrier, Scottish terrier, Scottie",
  200: "Tibetan terrier, chrysanthemum dog",
  201: "silky terrier, Sydney silky",
  202: "soft-coated wheaten terrier",
  203: "West Highland white terrier",
  204: "Lhasa, Lhasa apso",
  205: "flat-coated retriever",
  206: "curly-coated retriever",
  207: "golden retriever",
  208: "Labrador retriever",
  209: "Chesapeake Bay retriever",
  210: "German short-haired pointer",
  211: "vizsla, Hungarian pointer",
  212: "English setter",
  213: "Irish setter, red setter",
  214: "Gordon setter",
  215: "Brittany spaniel",
  216: "clumber, clumber spaniel",
  217: "English springer, English springer spaniel",
  218: "Welsh springer spaniel",
  219: "cocker spaniel, English cocker spaniel, cocker",
  220: "Sussex spaniel",
  221: "Irish water spaniel",
  222: "kuvasz",
  223: "schipperke",
  224: "groenendael",
  225: "malinois",
  226: "briard",
  227: "kelpie",
  228: "komondor",
  229: "Old English sheepdog, bobtail",
  230: "Shetland sheepdog, Shetland sheep dog, Shetland",
  231: "collie",
  232: "Border collie",
  233: "Bouvier des Flandres, Bouviers des Flandres",
  234: "Rottweiler",
  235: "German shepherd, German shepherd dog, German police dog, alsatian",
  236: "Doberman, Doberman pinscher",
  237: "miniature pinscher",
  238: "Greater Swiss Mountain dog",
  239: "Bernese mountain dog",
  240: "Appenzeller",
  241: "EntleBucher",
  242: "boxer",
  243: "bull mastiff",
  244: "Tibetan mastiff",
  245: "French bulldog",
  246: "Great Dane",
  247: "Saint Bernard, St Bernard",
  248: "Eskimo dog, husky",
  249: "malamute, malemute, Alaskan malamute",
  250: "Siberian husky",
  251: "dalmatian, coach dog, carriage dog",
  252: "affenpinscher, monkey pinscher, monkey dog",
  253: "basenji",
  254: "pug, pug-dog",
  255: "Leonberg",
  256: "Newfoundland, Newfoundland dog",
  257: "Great Pyrenees",
  258: "Samoyed, Samoyede",
  259: "Pomeranian",
  260: "chow, chow chow",
  261: "keeshond",
  262: "Brabancon griffon",
  263: "Pembroke, Pembroke Welsh corgi",
  264: "Cardigan, Cardigan Welsh corgi",
  265: "toy poodle",
  266: "miniature poodle",
  267: "standard poodle",
  268: "Mexican hairless",
  269: "timber wolf, grey wolf, gray wolf, Canis lupus",
  270: "white wolf, Arctic wolf, Canis lupus tundrarum",
  271: "red wolf, maned wolf, Canis rufus, Canis niger",
  272: "coyote, prairie wolf, brush wolf, Canis latrans",
  273: "dingo, warrigal, warragal, Canis dingo",
  274: "dhole, Cuon alpinus",
  275: "African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",
  276: "hyena, hyaena",
  277: "red fox, Vulpes vulpes",
  278: "kit fox, Vulpes macrotis",
  279: "Arctic fox, white fox, Alopex lagopus",
  280: "grey fox, gray fox, Urocyon cinereoargenteus",
  281: "tabby, tabby cat",
  282: "tiger cat",
  283: "Persian cat",
  284: "Siamese cat, Siamese",
  285: "Egyptian cat",
  286:
    "cougar, puma, catamount, mountain lion, painter, panther, " +
    "Felis concolor",
  287: "lynx, catamount",
  288: "leopard, Panthera pardus",
  289: "snow leopard, ounce, Panthera uncia",
  290: "jaguar, panther, Panthera onca, Felis onca",
  291: "lion, king of beasts, Panthera leo",
  292: "tiger, Panthera tigris",
  293: "cheetah, chetah, Acinonyx jubatus",
  294: "brown bear, bruin, Ursus arctos",
  295:
    "American black bear, black bear, Ursus americanus, Euarctos " +
    "americanus",
  296: "ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",
  297: "sloth bear, Melursus ursinus, Ursus ursinus",
  298: "mongoose",
  299: "meerkat, mierkat",
  300: "tiger beetle",
  301: "ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",
  302: "ground beetle, carabid beetle",
  303: "long-horned beetle, longicorn, longicorn beetle",
  304: "leaf beetle, chrysomelid",
  305: "dung beetle",
  306: "rhinoceros beetle",
  307: "weevil",
  308: "fly",
  309: "bee",
  310: "ant, emmet, pismire",
  311: "grasshopper, hopper",
  312: "cricket",
  313: "walking stick, walkingstick, stick insect",
  314: "cockroach, roach",
  315: "mantis, mantid",
  316: "cicada, cicala",
  317: "leafhopper",
  318: "lacewing, lacewing fly",
  319:
    "dragonfly, darning needle, devil's darning needle, sewing needle, " +
    "snake feeder, snake doctor, mosquito hawk, skeeter hawk",
  320: "damselfly",
  321: "admiral",
  322: "ringlet, ringlet butterfly",
  323: "monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",
  324: "cabbage butterfly",
  325: "sulphur butterfly, sulfur butterfly",
  326: "lycaenid, lycaenid butterfly",
  327: "starfish, sea star",
  328: "sea urchin",
  329: "sea cucumber, holothurian",
  330: "wood rabbit, cottontail, cottontail rabbit",
  331: "hare",
  332: "Angora, Angora rabbit",
  333: "hamster",
  334: "porcupine, hedgehog",
  335: "fox squirrel, eastern fox squirrel, Sciurus niger",
  336: "marmot",
  337: "beaver",
  338: "guinea pig, Cavia cobaya",
  339: "sorrel",
  340: "zebra",
  341: "hog, pig, grunter, squealer, Sus scrofa",
  342: "wild boar, boar, Sus scrofa",
  343: "warthog",
  344: "hippopotamus, hippo, river horse, Hippopotamus amphibius",
  345: "ox",
  346: "water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",
  347: "bison",
  348: "ram, tup",
  349:
    "bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky " +
    "Mountain sheep, Ovis canadensis",
  350: "ibex, Capra ibex",
  351: "hartebeest",
  352: "impala, Aepyceros melampus",
  353: "gazelle",
  354: "Arabian camel, dromedary, Camelus dromedarius",
  355: "llama",
  356: "weasel",
  357: "mink",
  358: "polecat, fitch, foulmart, foumart, Mustela putorius",
  359: "black-footed ferret, ferret, Mustela nigripes",
  360: "otter",
  361: "skunk, polecat, wood pussy",
  362: "badger",
  363: "armadillo",
  364: "three-toed sloth, ai, Bradypus tridactylus",
  365: "orangutan, orang, orangutang, Pongo pygmaeus",
  366: "gorilla, Gorilla gorilla",
  367: "chimpanzee, chimp, Pan troglodytes",
  368: "gibbon, Hylobates lar",
  369: "siamang, Hylobates syndactylus, Symphalangus syndactylus",
  370: "guenon, guenon monkey",
  371: "patas, hussar monkey, Erythrocebus patas",
  372: "baboon",
  373: "macaque",
  374: "langur",
  375: "colobus, colobus monkey",
  376: "proboscis monkey, Nasalis larvatus",
  377: "marmoset",
  378: "capuchin, ringtail, Cebus capucinus",
  379: "howler monkey, howler",
  380: "titi, titi monkey",
  381: "spider monkey, Ateles geoffroyi",
  382: "squirrel monkey, Saimiri sciureus",
  383: "Madagascar cat, ring-tailed lemur, Lemur catta",
  384: "indri, indris, Indri indri, Indri brevicaudatus",
  385: "Indian elephant, Elephas maximus",
  386: "African elephant, Loxodonta africana",
  387: "lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",
  388: "giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",
  389: "barracouta, snoek",
  390: "eel",
  391:
    "coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus " +
    "kisutch",
  392: "rock beauty, Holocanthus tricolor",
  393: "anemone fish",
  394: "sturgeon",
  395: "gar, garfish, garpike, billfish, Lepisosteus osseus",
  396: "lionfish",
  397: "puffer, pufferfish, blowfish, globefish",
  398: "abacus",
  399: "abaya",
  400: "academic gown, academic robe, judge's robe",
  401: "accordion, piano accordion, squeeze box",
  402: "acoustic guitar",
  403: "aircraft carrier, carrier, flattop, attack aircraft carrier",
  404: "airliner",
  405: "airship, dirigible",
  406: "altar",
  407: "ambulance",
  408: "amphibian, amphibious vehicle",
  409: "analog clock",
  410: "apiary, bee house",
  411: "apron",
  412:
    "ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, " +
    "dustbin, trash barrel, trash bin",
  413: "assault rifle, assault gun",
  414: "backpack, back pack, knapsack, packsack, rucksack, haversack",
  415: "bakery, bakeshop, bakehouse",
  416: "balance beam, beam",
  417: "balloon",
  418: "ballpoint, ballpoint pen, ballpen, Biro",
  419: "Band Aid",
  420: "banjo",
  421: "bannister, banister, balustrade, balusters, handrail",
  422: "barbell",
  423: "barber chair",
  424: "barbershop",
  425: "barn",
  426: "barometer",
  427: "barrel, cask",
  428: "barrow, garden cart, lawn cart, wheelbarrow",
  429: "baseball",
  430: "basketball",
  431: "bassinet",
  432: "bassoon",
  433: "bathing cap, swimming cap",
  434: "bath towel",
  435: "bathtub, bathing tub, bath, tub",
  436:
    "beach wagon, station wagon, wagon, estate car, beach waggon, station " +
    "waggon, waggon",
  437: "beacon, lighthouse, beacon light, pharos",
  438: "beaker",
  439: "bearskin, busby, shako",
  440: "beer bottle",
  441: "beer glass",
  442: "bell cote, bell cot",
  443: "bib",
  444: "bicycle-built-for-two, tandem bicycle, tandem",
  445: "bikini, two-piece",
  446: "binder, ring-binder",
  447: "binoculars, field glasses, opera glasses",
  448: "birdhouse",
  449: "boathouse",
  450: "bobsled, bobsleigh, bob",
  451: "bolo tie, bolo, bola tie, bola",
  452: "bonnet, poke bonnet",
  453: "bookcase",
  454: "bookshop, bookstore, bookstall",
  455: "bottlecap",
  456: "bow",
  457: "bow tie, bow-tie, bowtie",
  458: "brass, memorial tablet, plaque",
  459: "brassiere, bra, bandeau",
  460: "breakwater, groin, groyne, mole, bulwark, seawall, jetty",
  461: "breastplate, aegis, egis",
  462: "broom",
  463: "bucket, pail",
  464: "buckle",
  465: "bulletproof vest",
  466: "bullet train, bullet",
  467: "butcher shop, meat market",
  468: "cab, hack, taxi, taxicab",
  469: "caldron, cauldron",
  470: "candle, taper, wax light",
  471: "cannon",
  472: "canoe",
  473: "can opener, tin opener",
  474: "cardigan",
  475: "car mirror",
  476: "carousel, carrousel, merry-go-round, roundabout, whirligig",
  477: "carpenter's kit, tool kit",
  478: "carton",
  479: "car wheel",
  480:
    "cash machine, cash dispenser, automated teller machine, automatic " +
    "teller machine, automated teller, automatic teller, ATM",
  481: "cassette",
  482: "cassette player",
  483: "castle",
  484: "catamaran",
  485: "CD player",
  486: "cello, violoncello",
  487: "cellular telephone, cellular phone, cellphone, cell, mobile phone",
  488: "chain",
  489: "chainlink fence",
  490:
    "chain mail, ring mail, mail, chain armor, chain armour, ring armor, " +
    "ring armour",
  491: "chain saw, chainsaw",
  492: "chest",
  493: "chiffonier, commode",
  494: "chime, bell, gong",
  495: "china cabinet, china closet",
  496: "Christmas stocking",
  497: "church, church building",
  498: "cinema, movie theater, movie theatre, movie house, picture palace",
  499: "cleaver, meat cleaver, chopper",
  500: "cliff dwelling",
  501: "cloak",
  502: "clog, geta, patten, sabot",
  503: "cocktail shaker",
  504: "coffee mug",
  505: "coffeepot",
  506: "coil, spiral, volute, whorl, helix",
  507: "combination lock",
  508: "computer keyboard, keypad",
  509: "confectionery, confectionary, candy store",
  510: "container ship, containership, container vessel",
  511: "convertible",
  512: "corkscrew, bottle screw",
  513: "cornet, horn, trumpet, trump",
  514: "cowboy boot",
  515: "cowboy hat, ten-gallon hat",
  516: "cradle",
  517: "crane",
  518: "crash helmet",
  519: "crate",
  520: "crib, cot",
  521: "Crock Pot",
  522: "croquet ball",
  523: "crutch",
  524: "cuirass",
  525: "dam, dike, dyke",
  526: "desk",
  527: "desktop computer",
  528: "dial telephone, dial phone",
  529: "diaper, nappy, napkin",
  530: "digital clock",
  531: "digital watch",
  532: "dining table, board",
  533: "dishrag, dishcloth",
  534: "dishwasher, dish washer, dishwashing machine",
  535: "disk brake, disc brake",
  536: "dock, dockage, docking facility",
  537: "dogsled, dog sled, dog sleigh",
  538: "dome",
  539: "doormat, welcome mat",
  540: "drilling platform, offshore rig",
  541: "drum, membranophone, tympan",
  542: "drumstick",
  543: "dumbbell",
  544: "Dutch oven",
  545: "electric fan, blower",
  546: "electric guitar",
  547: "electric locomotive",
  548: "entertainment center",
  549: "envelope",
  550: "espresso maker",
  551: "face powder",
  552: "feather boa, boa",
  553: "file, file cabinet, filing cabinet",
  554: "fireboat",
  555: "fire engine, fire truck",
  556: "fire screen, fireguard",
  557: "flagpole, flagstaff",
  558: "flute, transverse flute",
  559: "folding chair",
  560: "football helmet",
  561: "forklift",
  562: "fountain",
  563: "fountain pen",
  564: "four-poster",
  565: "freight car",
  566: "French horn, horn",
  567: "frying pan, frypan, skillet",
  568: "fur coat",
  569: "garbage truck, dustcart",
  570: "gasmask, respirator, gas helmet",
  571: "gas pump, gasoline pump, petrol pump, island dispenser",
  572: "goblet",
  573: "go-kart",
  574: "golf ball",
  575: "golfcart, golf cart",
  576: "gondola",
  577: "gong, tam-tam",
  578: "gown",
  579: "grand piano, grand",
  580: "greenhouse, nursery, glasshouse",
  581: "grille, radiator grille",
  582: "grocery store, grocery, food market, market",
  583: "guillotine",
  584: "hair slide",
  585: "hair spray",
  586: "half track",
  587: "hammer",
  588: "hamper",
  589: "hand blower, blow dryer, blow drier, hair dryer, hair drier",
  590: "hand-held computer, hand-held microcomputer",
  591: "handkerchief, hankie, hanky, hankey",
  592: "hard disc, hard disk, fixed disk",
  593: "harmonica, mouth organ, harp, mouth harp",
  594: "harp",
  595: "harvester, reaper",
  596: "hatchet",
  597: "holster",
  598: "home theater, home theatre",
  599: "honeycomb",
  600: "hook, claw",
  601: "hoopskirt, crinoline",
  602: "horizontal bar, high bar",
  603: "horse cart, horse-cart",
  604: "hourglass",
  605: "iPod",
  606: "iron, smoothing iron",
  607: "jack-o'-lantern",
  608: "jean, blue jean, denim",
  609: "jeep, landrover",
  610: "jersey, T-shirt, tee shirt",
  611: "jigsaw puzzle",
  612: "jinrikisha, ricksha, rickshaw",
  613: "joystick",
  614: "kimono",
  615: "knee pad",
  616: "knot",
  617: "lab coat, laboratory coat",
  618: "ladle",
  619: "lampshade, lamp shade",
  620: "laptop, laptop computer",
  621: "lawn mower, mower",
  622: "lens cap, lens cover",
  623: "letter opener, paper knife, paperknife",
  624: "library",
  625: "lifeboat",
  626: "lighter, light, igniter, ignitor",
  627: "limousine, limo",
  628: "liner, ocean liner",
  629: "lipstick, lip rouge",
  630: "Loafer",
  631: "lotion",
  632:
    "loudspeaker, speaker, speaker unit, loudspeaker system, speaker " +
    "system",
  633: "loupe, jeweler's loupe",
  634: "lumbermill, sawmill",
  635: "magnetic compass",
  636: "mailbag, postbag",
  637: "mailbox, letter box",
  638: "maillot",
  639: "maillot, tank suit",
  640: "manhole cover",
  641: "maraca",
  642: "marimba, xylophone",
  643: "mask",
  644: "matchstick",
  645: "maypole",
  646: "maze, labyrinth",
  647: "measuring cup",
  648: "medicine chest, medicine cabinet",
  649: "megalith, megalithic structure",
  650: "microphone, mike",
  651: "microwave, microwave oven",
  652: "military uniform",
  653: "milk can",
  654: "minibus",
  655: "miniskirt, mini",
  656: "minivan",
  657: "missile",
  658: "mitten",
  659: "mixing bowl",
  660: "mobile home, manufactured home",
  661: "Model T",
  662: "modem",
  663: "monastery",
  664: "monitor",
  665: "moped",
  666: "mortar",
  667: "mortarboard",
  668: "mosque",
  669: "mosquito net",
  670: "motor scooter, scooter",
  671: "mountain bike, all-terrain bike, off-roader",
  672: "mountain tent",
  673: "mouse, computer mouse",
  674: "mousetrap",
  675: "moving van",
  676: "muzzle",
  677: "nail",
  678: "neck brace",
  679: "necklace",
  680: "nipple",
  681: "notebook, notebook computer",
  682: "obelisk",
  683: "oboe, hautboy, hautbois",
  684: "ocarina, sweet potato",
  685: "odometer, hodometer, mileometer, milometer",
  686: "oil filter",
  687: "organ, pipe organ",
  688: "oscilloscope, scope, cathode-ray oscilloscope, CRO",
  689: "overskirt",
  690: "oxcart",
  691: "oxygen mask",
  692: "packet",
  693: "paddle, boat paddle",
  694: "paddlewheel, paddle wheel",
  695: "padlock",
  696: "paintbrush",
  697: "pajama, pyjama, pj's, jammies",
  698: "palace",
  699: "panpipe, pandean pipe, syrinx",
  700: "paper towel",
  701: "parachute, chute",
  702: "parallel bars, bars",
  703: "park bench",
  704: "parking meter",
  705: "passenger car, coach, carriage",
  706: "patio, terrace",
  707: "pay-phone, pay-station",
  708: "pedestal, plinth, footstall",
  709: "pencil box, pencil case",
  710: "pencil sharpener",
  711: "perfume, essence",
  712: "Petri dish",
  713: "photocopier",
  714: "pick, plectrum, plectron",
  715: "pickelhaube",
  716: "picket fence, paling",
  717: "pickup, pickup truck",
  718: "pier",
  719: "piggy bank, penny bank",
  720: "pill bottle",
  721: "pillow",
  722: "ping-pong ball",
  723: "pinwheel",
  724: "pirate, pirate ship",
  725: "pitcher, ewer",
  726: "plane, carpenter's plane, woodworking plane",
  727: "planetarium",
  728: "plastic bag",
  729: "plate rack",
  730: "plow, plough",
  731: "plunger, plumber's helper",
  732: "Polaroid camera, Polaroid Land camera",
  733: "pole",
  734:
    "police van, police wagon, paddy wagon, patrol wagon, wagon, black " +
    "Maria",
  735: "poncho",
  736: "pool table, billiard table, snooker table",
  737: "pop bottle, soda bottle",
  738: "pot, flowerpot",
  739: "potter's wheel",
  740: "power drill",
  741: "prayer rug, prayer mat",
  742: "printer",
  743: "prison, prison house",
  744: "projectile, missile",
  745: "projector",
  746: "puck, hockey puck",
  747: "punching bag, punch bag, punching ball, punchball",
  748: "purse",
  749: "quill, quill pen",
  750: "quilt, comforter, comfort, puff",
  751: "racer, race car, racing car",
  752: "racket, racquet",
  753: "radiator",
  754: "radio, wireless",
  755: "radio telescope, radio reflector",
  756: "rain barrel",
  757: "recreational vehicle, RV, R.V.",
  758: "reel",
  759: "reflex camera",
  760: "refrigerator, icebox",
  761: "remote control, remote",
  762: "restaurant, eating house, eating place, eatery",
  763: "revolver, six-gun, six-shooter",
  764: "rifle",
  765: "rocking chair, rocker",
  766: "rotisserie",
  767: "rubber eraser, rubber, pencil eraser",
  768: "rugby ball",
  769: "rule, ruler",
  770: "running shoe",
  771: "safe",
  772: "safety pin",
  773: "saltshaker, salt shaker",
  774: "sandal",
  775: "sarong",
  776: "sax, saxophone",
  777: "scabbard",
  778: "scale, weighing machine",
  779: "school bus",
  780: "schooner",
  781: "scoreboard",
  782: "screen, CRT screen",
  783: "screw",
  784: "screwdriver",
  785: "seat belt, seatbelt",
  786: "sewing machine",
  787: "shield, buckler",
  788: "shoe shop, shoe-shop, shoe store",
  789: "shoji",
  790: "shopping basket",
  791: "shopping cart",
  792: "shovel",
  793: "shower cap",
  794: "shower curtain",
  795: "ski",
  796: "ski mask",
  797: "sleeping bag",
  798: "slide rule, slipstick",
  799: "sliding door",
  800: "slot, one-armed bandit",
  801: "snorkel",
  802: "snowmobile",
  803: "snowplow, snowplough",
  804: "soap dispenser",
  805: "soccer ball",
  806: "sock",
  807: "solar dish, solar collector, solar furnace",
  808: "sombrero",
  809: "soup bowl",
  810: "space bar",
  811: "space heater",
  812: "space shuttle",
  813: "spatula",
  814: "speedboat",
  815: "spider web, spider's web",
  816: "spindle",
  817: "sports car, sport car",
  818: "spotlight, spot",
  819: "stage",
  820: "steam locomotive",
  821: "steel arch bridge",
  822: "steel drum",
  823: "stethoscope",
  824: "stole",
  825: "stone wall",
  826: "stopwatch, stop watch",
  827: "stove",
  828: "strainer",
  829: "streetcar, tram, tramcar, trolley, trolley car",
  830: "stretcher",
  831: "studio couch, day bed",
  832: "stupa, tope",
  833: "submarine, pigboat, sub, U-boat",
  834: "suit, suit of clothes",
  835: "sundial",
  836: "sunglass",
  837: "sunglasses, dark glasses, shades",
  838: "sunscreen, sunblock, sun blocker",
  839: "suspension bridge",
  840: "swab, swob, mop",
  841: "sweatshirt",
  842: "swimming trunks, bathing trunks",
  843: "swing",
  844: "switch, electric switch, electrical switch",
  845: "syringe",
  846: "table lamp",
  847: "tank, army tank, armored combat vehicle, armoured combat vehicle",
  848: "tape player",
  849: "teapot",
  850: "teddy, teddy bear",
  851: "television, television system",
  852: "tennis ball",
  853: "thatch, thatched roof",
  854: "theater curtain, theatre curtain",
  855: "thimble",
  856: "thresher, thrasher, threshing machine",
  857: "throne",
  858: "tile roof",
  859: "toaster",
  860: "tobacco shop, tobacconist shop, tobacconist",
  861: "toilet seat",
  862: "torch",
  863: "totem pole",
  864: "tow truck, tow car, wrecker",
  865: "toyshop",
  866: "tractor",
  867:
    "trailer truck, tractor trailer, trucking rig, rig, articulated " +
    "lorry, semi",
  868: "tray",
  869: "trench coat",
  870: "tricycle, trike, velocipede",
  871: "trimaran",
  872: "tripod",
  873: "triumphal arch",
  874: "trolleybus, trolley coach, trackless trolley",
  875: "trombone",
  876: "tub, vat",
  877: "turnstile",
  878: "typewriter keyboard",
  879: "umbrella",
  880: "unicycle, monocycle",
  881: "upright, upright piano",
  882: "vacuum, vacuum cleaner",
  883: "vase",
  884: "vault",
  885: "velvet",
  886: "vending machine",
  887: "vestment",
  888: "viaduct",
  889: "violin, fiddle",
  890: "volleyball",
  891: "waffle iron",
  892: "wall clock",
  893: "wallet, billfold, notecase, pocketbook",
  894: "wardrobe, closet, press",
  895: "warplane, military plane",
  896: "washbasin, handbasin, washbowl, lavabo, wash-hand basin",
  897: "washer, automatic washer, washing machine",
  898: "water bottle",
  899: "water jug",
  900: "water tower",
  901: "whiskey jug",
  902: "whistle",
  903: "wig",
  904: "window screen",
  905: "window shade",
  906: "Windsor tie",
  907: "wine bottle",
  908: "wing",
  909: "wok",
  910: "wooden spoon",
  911: "wool, woolen, woollen",
  912: "worm fence, snake fence, snake-rail fence, Virginia fence",
  913: "wreck",
  914: "yawl",
  915: "yurt",
  916: "web site, website, internet site, site",
  917: "comic book",
  918: "crossword puzzle, crossword",
  919: "street sign",
  920: "traffic light, traffic signal, stoplight",
  921: "book jacket, dust cover, dust jacket, dust wrapper",
  922: "menu",
  923: "plate",
  924: "guacamole",
  925: "consomme",
  926: "hot pot, hotpot",
  927: "trifle",
  928: "ice cream, icecream",
  929: "ice lolly, lolly, lollipop, popsicle",
  930: "French loaf",
  931: "bagel, beigel",
  932: "pretzel",
  933: "cheeseburger",
  934: "hotdog, hot dog, red hot",
  935: "mashed potato",
  936: "head cabbage",
  937: "broccoli",
  938: "cauliflower",
  939: "zucchini, courgette",
  940: "spaghetti squash",
  941: "acorn squash",
  942: "butternut squash",
  943: "cucumber, cuke",
  944: "artichoke, globe artichoke",
  945: "bell pepper",
  946: "cardoon",
  947: "mushroom",
  948: "Granny Smith",
  949: "strawberry",
  950: "orange",
  951: "lemon",
  952: "fig",
  953: "pineapple, ananas",
  954: "banana",
  955: "jackfruit, jak, jack",
  956: "custard apple",
  957: "pomegranate",
  958: "hay",
  959: "carbonara",
  960: "chocolate sauce, chocolate syrup",
  961: "dough",
  962: "meat loaf, meatloaf",
  963: "pizza, pizza pie",
  964: "potpie",
  965: "burrito",
  966: "red wine",
  967: "espresso",
  968: "cup",
  969: "eggnog",
  970: "alp",
  971: "bubble",
  972: "cliff, drop, drop-off",
  973: "coral reef",
  974: "geyser",
  975: "lakeside, lakeshore",
  976: "promontory, headland, head, foreland",
  977: "sandbar, sand bar",
  978: "seashore, coast, seacoast, sea-coast",
  979: "valley, vale",
  980: "volcano",
  981: "ballplayer, baseball player",
  982: "groom, bridegroom",
  983: "scuba diver",
  984: "rapeseed",
  985: "daisy",
  986:
    "yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, " +
    "Cypripedium parviflorum",
  987: "corn",
  988: "acorn",
  989: "hip, rose hip, rosehip",
  990: "buckeye, horse chestnut, conker",
  991: "coral fungus",
  992: "agaric",
  993: "gyromitra",
  994: "stinkhorn, carrion fungus",
  995: "earthstar",
  996:
    "hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola " +
    "frondosa",
  997: "bolete",
  998: "ear, spike, capitulum",
  999: "toilet tissue, toilet paper, bathroom tissue"
};

// Adapted from https://gist.github.com/PonDad/4dcb4b242b9358e524b4ddecbee385e9#file-imagenet_class_index-json
const JA_CLASSES = [
  {
    num: "n01440764",
    en: "tench",
    ja: "テンチ"
  },
  {
    num: "n01443537",
    en: "goldfish",
    ja: "金魚"
  },
  {
    num: "n01484850",
    en: "great_white_shark",
    ja: "ホホジロザメ"
  },
  {
    num: "n01491361",
    en: "tiger_shark",
    ja: "イタチザメ"
  },
  {
    num: "n01494475",
    en: "hammerhead",
    ja: "ハンマーヘッド"
  },
  {
    num: "n01496331",
    en: "electric_ray",
    ja: "シビレエイ"
  },
  {
    num: "n01498041",
    en: "stingray",
    ja: "アカエイ"
  },
  {
    num: "n01514668",
    en: "cock",
    ja: "コック"
  },
  {
    num: "n01514859",
    en: "hen",
    ja: "めんどり"
  },
  {
    num: "n01518878",
    en: "ostrich",
    ja: "ダチョウ"
  },
  {
    num: "n01530575",
    en: "brambling",
    ja: "アトリ"
  },
  {
    num: "n01531178",
    en: "goldfinch",
    ja: "ゴシキヒワ"
  },
  {
    num: "n01532829",
    en: "house_finch",
    ja: "ハウスフィンチ"
  },
  {
    num: "n01534433",
    en: "junco",
    ja: "ユキヒメドリ"
  },
  {
    num: "n01537544",
    en: "indigo_bunting",
    ja: "インディゴホオジロ"
  },
  {
    num: "n01558993",
    en: "robin",
    ja: "ロビン"
  },
  {
    num: "n01560419",
    en: "bulbul",
    ja: "ブルブル"
  },
  {
    num: "n01580077",
    en: "jay",
    ja: "カケス"
  },
  {
    num: "n01582220",
    en: "magpie",
    ja: "カササギ"
  },
  {
    num: "n01592084",
    en: "chickadee",
    ja: "四十雀"
  },
  {
    num: "n01601694",
    en: "water_ouzel",
    ja: "水クロウタドリ"
  },
  {
    num: "n01608432",
    en: "kite",
    ja: "凧"
  },
  {
    num: "n01614925",
    en: "bald_eagle",
    ja: "白頭ワシ"
  },
  {
    num: "n01616318",
    en: "vulture",
    ja: "ハゲワシ"
  },
  {
    num: "n01622779",
    en: "great_grey_owl",
    ja: "カラフトフクロウ"
  },
  {
    num: "n01629819",
    en: "European_fire_salamander",
    ja: "欧州ファイアサラマンダー"
  },
  {
    num: "n01630670",
    en: "common_newt",
    ja: "共通イモリ"
  },
  {
    num: "n01631663",
    en: "eft",
    ja: "イモリ"
  },
  {
    num: "n01632458",
    en: "spotted_salamander",
    ja: "サンショウウオを発見"
  },
  {
    num: "n01632777",
    en: "axolotl",
    ja: "アホロートル"
  },
  {
    num: "n01641577",
    en: "bullfrog",
    ja: "ウシガエル"
  },
  {
    num: "n01644373",
    en: "tree_frog",
    ja: "アマガエル"
  },
  {
    num: "n01644900",
    en: "tailed_frog",
    ja: "つかれたカエル"
  },
  {
    num: "n01664065",
    en: "loggerhead",
    ja: "とんちき"
  },
  {
    num: "n01665541",
    en: "leatherback_turtle",
    ja: "オサガメ"
  },
  {
    num: "n01667114",
    en: "mud_turtle",
    ja: "鼈"
  },
  {
    num: "n01667778",
    en: "terrapin",
    ja: "テラピン"
  },
  {
    num: "n01669191",
    en: "box_turtle",
    ja: "ハコガメ"
  },
  {
    num: "n01675722",
    en: "banded_gecko",
    ja: "縞模様のヤモリ"
  },
  {
    num: "n01677366",
    en: "common_iguana",
    ja: "共通イグアナ"
  },
  {
    num: "n01682714",
    en: "American_chameleon",
    ja: "アメリカンカメレオン"
  },
  {
    num: "n01685808",
    en: "whiptail",
    ja: "ウィッペイル"
  },
  {
    num: "n01687978",
    en: "agama",
    ja: "アガマトカゲ"
  },
  {
    num: "n01688243",
    en: "frilled_lizard",
    ja: "フリルトカゲ"
  },
  {
    num: "n01689811",
    en: "alligator_lizard",
    ja: "アリゲータートカゲ"
  },
  {
    num: "n01692333",
    en: "Gila_monster",
    ja: "アメリカドクトカゲ"
  },
  {
    num: "n01693334",
    en: "green_lizard",
    ja: "緑のトカゲ"
  },
  {
    num: "n01694178",
    en: "African_chameleon",
    ja: "アフリカのカメレオン"
  },
  {
    num: "n01695060",
    en: "Komodo_dragon",
    ja: "コモドドラゴン"
  },
  {
    num: "n01697457",
    en: "African_crocodile",
    ja: "アフリカのワニ"
  },
  {
    num: "n01698640",
    en: "American_alligator",
    ja: "アメリカワニ"
  },
  {
    num: "n01704323",
    en: "triceratops",
    ja: "トリケラトプス"
  },
  {
    num: "n01728572",
    en: "thunder_snake",
    ja: "雷のヘビ"
  },
  {
    num: "n01728920",
    en: "ringneck_snake",
    ja: "リングネックスネーク"
  },
  {
    num: "n01729322",
    en: "hognose_snake",
    ja: "ホーノースヘビ"
  },
  {
    num: "n01729977",
    en: "green_snake",
    ja: "緑のヘビ"
  },
  {
    num: "n01734418",
    en: "king_snake",
    ja: "キングスネーク"
  },
  {
    num: "n01735189",
    en: "garter_snake",
    ja: "ガータースネーク"
  },
  {
    num: "n01737021",
    en: "water_snake",
    ja: "水蛇"
  },
  {
    num: "n01739381",
    en: "vine_snake",
    ja: "つるヘビ"
  },
  {
    num: "n01740131",
    en: "night_snake",
    ja: "夜のヘビ"
  },
  {
    num: "n01742172",
    en: "boa_constrictor",
    ja: "ボア・コンストリクター"
  },
  {
    num: "n01744401",
    en: "rock_python",
    ja: "ロックパイソン"
  },
  {
    num: "n01748264",
    en: "Indian_cobra",
    ja: "インドコブラ"
  },
  {
    num: "n01749939",
    en: "green_mamba",
    ja: "グリーンマンバ"
  },
  {
    num: "n01751748",
    en: "sea_snake",
    ja: "ウミヘビ"
  },
  {
    num: "n01753488",
    en: "horned_viper",
    ja: "ツノクサリヘビ"
  },
  {
    num: "n01755581",
    en: "diamondback",
    ja: "ダイヤ"
  },
  {
    num: "n01756291",
    en: "sidewinder",
    ja: "サイドワインダー"
  },
  {
    num: "n01768244",
    en: "trilobite",
    ja: "三葉虫"
  },
  {
    num: "n01770081",
    en: "harvestman",
    ja: "刈り入れ作業者"
  },
  {
    num: "n01770393",
    en: "scorpion",
    ja: "サソリ"
  },
  {
    num: "n01773157",
    en: "black_and_gold_garden_spider",
    ja: "黒と金の庭クモ"
  },
  {
    num: "n01773549",
    en: "barn_spider",
    ja: "納屋クモ"
  },
  {
    num: "n01773797",
    en: "garden_spider",
    ja: "庭クモ"
  },
  {
    num: "n01774384",
    en: "black_widow",
    ja: "クロゴケグモ"
  },
  {
    num: "n01774750",
    en: "tarantula",
    ja: "タランチュラ"
  },
  {
    num: "n01775062",
    en: "wolf_spider",
    ja: "オオカミのクモ"
  },
  {
    num: "n01776313",
    en: "tick",
    ja: "ダニ"
  },
  {
    num: "n01784675",
    en: "centipede",
    ja: "百足"
  },
  {
    num: "n01795545",
    en: "black_grouse",
    ja: "クロライチョウ"
  },
  {
    num: "n01796340",
    en: "ptarmigan",
    ja: "雷鳥"
  },
  {
    num: "n01797886",
    en: "ruffed_grouse",
    ja: "ひだえりの付いたライチョウ"
  },
  {
    num: "n01798484",
    en: "prairie_chicken",
    ja: "草原チキン"
  },
  {
    num: "n01806143",
    en: "peacock",
    ja: "孔雀"
  },
  {
    num: "n01806567",
    en: "quail",
    ja: "ウズラ"
  },
  {
    num: "n01807496",
    en: "partridge",
    ja: "ヤマウズラ"
  },
  {
    num: "n01817953",
    en: "African_grey",
    ja: "アフリカの灰色"
  },
  {
    num: "n01818515",
    en: "macaw",
    ja: "コンゴウインコ"
  },
  {
    num: "n01819313",
    en: "sulphur-crested_cockatoo",
    ja: "硫黄トキオウム"
  },
  {
    num: "n01820546",
    en: "lorikeet",
    ja: "インコ"
  },
  {
    num: "n01824575",
    en: "coucal",
    ja: "バンケン"
  },
  {
    num: "n01828970",
    en: "bee_eater",
    ja: "蜂食べる人"
  },
  {
    num: "n01829413",
    en: "hornbill",
    ja: "サイチョウ"
  },
  {
    num: "n01833805",
    en: "hummingbird",
    ja: "ハチドリ"
  },
  {
    num: "n01843065",
    en: "jacamar",
    ja: "錐嘴"
  },
  {
    num: "n01843383",
    en: "toucan",
    ja: "オオハシ"
  },
  {
    num: "n01847000",
    en: "drake",
    ja: "ドレイク"
  },
  {
    num: "n01855032",
    en: "red-breasted_merganser",
    ja: "赤ブレストアイサ属のガモ"
  },
  {
    num: "n01855672",
    en: "goose",
    ja: "ガチョウ"
  },
  {
    num: "n01860187",
    en: "black_swan",
    ja: "黒い白鳥"
  },
  {
    num: "n01871265",
    en: "tusker",
    ja: "タスカービール"
  },
  {
    num: "n01872401",
    en: "echidna",
    ja: "ハリモグラ"
  },
  {
    num: "n01873310",
    en: "platypus",
    ja: "カモノハシ"
  },
  {
    num: "n01877812",
    en: "wallaby",
    ja: "ワラビー"
  },
  {
    num: "n01882714",
    en: "koala",
    ja: "コアラ"
  },
  {
    num: "n01883070",
    en: "wombat",
    ja: "ウォンバット"
  },
  {
    num: "n01910747",
    en: "jellyfish",
    ja: "クラゲ"
  },
  {
    num: "n01914609",
    en: "sea_anemone",
    ja: "イソギンチャク"
  },
  {
    num: "n01917289",
    en: "brain_coral",
    ja: "脳サンゴ"
  },
  {
    num: "n01924916",
    en: "flatworm",
    ja: "扁形動物"
  },
  {
    num: "n01930112",
    en: "nematode",
    ja: "線虫"
  },
  {
    num: "n01943899",
    en: "conch",
    ja: "巻き貝"
  },
  {
    num: "n01944390",
    en: "snail",
    ja: "カタツムリ"
  },
  {
    num: "n01945685",
    en: "slug",
    ja: "ナメクジ"
  },
  {
    num: "n01950731",
    en: "sea_slug",
    ja: "ウミウシ"
  },
  {
    num: "n01955084",
    en: "chiton",
    ja: "キトン"
  },
  {
    num: "n01968897",
    en: "chambered_nautilus",
    ja: "オウムガイ"
  },
  {
    num: "n01978287",
    en: "Dungeness_crab",
    ja: "アメリカイチョウガニ"
  },
  {
    num: "n01978455",
    en: "rock_crab",
    ja: "岩カニ"
  },
  {
    num: "n01980166",
    en: "fiddler_crab",
    ja: "シオマネキ"
  },
  {
    num: "n01981276",
    en: "king_crab",
    ja: "タラバガニ"
  },
  {
    num: "n01983481",
    en: "American_lobster",
    ja: "アメリカンロブスター"
  },
  {
    num: "n01984695",
    en: "spiny_lobster",
    ja: "伊勢エビ"
  },
  {
    num: "n01985128",
    en: "crayfish",
    ja: "ザリガニ"
  },
  {
    num: "n01986214",
    en: "hermit_crab",
    ja: "ヤドカリ"
  },
  {
    num: "n01990800",
    en: "isopod",
    ja: "等脚類"
  },
  {
    num: "n02002556",
    en: "white_stork",
    ja: "コウノトリ"
  },
  {
    num: "n02002724",
    en: "black_stork",
    ja: "ナベコウ"
  },
  {
    num: "n02006656",
    en: "spoonbill",
    ja: "ヘラサギ"
  },
  {
    num: "n02007558",
    en: "flamingo",
    ja: "フラミンゴ"
  },
  {
    num: "n02009229",
    en: "little_blue_heron",
    ja: "小さな青いサギ"
  },
  {
    num: "n02009912",
    en: "American_egret",
    ja: "アメリカン白鷺"
  },
  {
    num: "n02011460",
    en: "bittern",
    ja: "にがり"
  },
  {
    num: "n02012849",
    en: "crane",
    ja: "クレーン"
  },
  {
    num: "n02013706",
    en: "limpkin",
    ja: "ツルモドキ科の鳥"
  },
  {
    num: "n02017213",
    en: "European_gallinule",
    ja: "ヨーロピアン水鳥"
  },
  {
    num: "n02018207",
    en: "American_coot",
    ja: "アメリカオオバン"
  },
  {
    num: "n02018795",
    en: "bustard",
    ja: "ノガン"
  },
  {
    num: "n02025239",
    en: "ruddy_turnstone",
    ja: "キョウジョシギ"
  },
  {
    num: "n02027492",
    en: "red-backed_sandpiper",
    ja: "赤担保シギ"
  },
  {
    num: "n02028035",
    en: "redshank",
    ja: "アカアシシギ"
  },
  {
    num: "n02033041",
    en: "dowitcher",
    ja: "オオハシシギ"
  },
  {
    num: "n02037110",
    en: "oystercatcher",
    ja: "ミヤコドリ"
  },
  {
    num: "n02051845",
    en: "pelican",
    ja: "ペリカン"
  },
  {
    num: "n02056570",
    en: "king_penguin",
    ja: "キングペンギン"
  },
  {
    num: "n02058221",
    en: "albatross",
    ja: "アルバトロス"
  },
  {
    num: "n02066245",
    en: "grey_whale",
    ja: "コククジラ"
  },
  {
    num: "n02071294",
    en: "killer_whale",
    ja: "シャチ"
  },
  {
    num: "n02074367",
    en: "dugong",
    ja: "ジュゴン"
  },
  {
    num: "n02077923",
    en: "sea_lion",
    ja: "アシカ"
  },
  {
    num: "n02085620",
    en: "Chihuahua",
    ja: "チワワ"
  },
  {
    num: "n02085782",
    en: "Japanese_spaniel",
    ja: "狆"
  },
  {
    num: "n02085936",
    en: "Maltese_dog",
    ja: "マルチーズ犬"
  },
  {
    num: "n02086079",
    en: "Pekinese",
    ja: "狆"
  },
  {
    num: "n02086240",
    en: "Shih-Tzu",
    ja: "シーズー、シーズー"
  },
  {
    num: "n02086646",
    en: "Blenheim_spaniel",
    ja: "ブレナムスパニエル"
  },
  {
    num: "n02086910",
    en: "papillon",
    ja: "パピヨン"
  },
  {
    num: "n02087046",
    en: "toy_terrier",
    ja: "トイテリア"
  },
  {
    num: "n02087394",
    en: "Rhodesian_ridgeback",
    ja: "ローデシアン・リッジバック"
  },
  {
    num: "n02088094",
    en: "Afghan_hound",
    ja: "アフガンハウンド"
  },
  {
    num: "n02088238",
    en: "basset",
    ja: "バセット犬"
  },
  {
    num: "n02088364",
    en: "beagle",
    ja: "ビーグル"
  },
  {
    num: "n02088466",
    en: "bloodhound",
    ja: "ブラッドハウンド"
  },
  {
    num: "n02088632",
    en: "bluetick",
    ja: "ブルーティック"
  },
  {
    num: "n02089078",
    en: "black-and-tan_coonhound",
    ja: "黒と黄褐色の猟犬"
  },
  {
    num: "n02089867",
    en: "Walker_hound",
    ja: "ウォーカーハウンド"
  },
  {
    num: "n02089973",
    en: "English_foxhound",
    ja: "イングリッシュフォックスハウンド"
  },
  {
    num: "n02090379",
    en: "redbone",
    ja: "レッドボーン"
  },
  {
    num: "n02090622",
    en: "borzoi",
    ja: "ボルゾイ"
  },
  {
    num: "n02090721",
    en: "Irish_wolfhound",
    ja: "アイリッシュ・ウルフハウンド"
  },
  {
    num: "n02091032",
    en: "Italian_greyhound",
    ja: "イタリアングレーハウンド"
  },
  {
    num: "n02091134",
    en: "whippet",
    ja: "ウィペット"
  },
  {
    num: "n02091244",
    en: "Ibizan_hound",
    ja: "イビサハウンド"
  },
  {
    num: "n02091467",
    en: "Norwegian_elkhound",
    ja: "ノルウェーエルクハウンド"
  },
  {
    num: "n02091635",
    en: "otterhound",
    ja: "オッターハウンド"
  },
  {
    num: "n02091831",
    en: "Saluki",
    ja: "サルーキ"
  },
  {
    num: "n02092002",
    en: "Scottish_deerhound",
    ja: "スコティッシュ・ディアハウンド"
  },
  {
    num: "n02092339",
    en: "Weimaraner",
    ja: "ワイマラナー"
  },
  {
    num: "n02093256",
    en: "Staffordshire_bullterrier",
    ja: "スタフォードシャーブルテリア"
  },
  {
    num: "n02093428",
    en: "American_Staffordshire_terrier",
    ja: "アメリカン・スタッフォードシャー・テリア"
  },
  {
    num: "n02093647",
    en: "Bedlington_terrier",
    ja: "ベドリントンテリア"
  },
  {
    num: "n02093754",
    en: "Border_terrier",
    ja: "ボーダーテリア"
  },
  {
    num: "n02093859",
    en: "Kerry_blue_terrier",
    ja: "ケリーブルーテリア"
  },
  {
    num: "n02093991",
    en: "Irish_terrier",
    ja: "アイリッシュテリア"
  },
  {
    num: "n02094114",
    en: "Norfolk_terrier",
    ja: "ノーフォークテリア"
  },
  {
    num: "n02094258",
    en: "Norwich_terrier",
    ja: "ノーリッチ・テリア"
  },
  {
    num: "n02094433",
    en: "Yorkshire_terrier",
    ja: "ヨークシャーテリア"
  },
  {
    num: "n02095314",
    en: "wire-haired_fox_terrier",
    ja: "ワイヤーヘアー・フォックステリア"
  },
  {
    num: "n02095570",
    en: "Lakeland_terrier",
    ja: "レークランドテリア"
  },
  {
    num: "n02095889",
    en: "Sealyham_terrier",
    ja: "シーリーハムテリア"
  },
  {
    num: "n02096051",
    en: "Airedale",
    ja: "エアデール"
  },
  {
    num: "n02096177",
    en: "cairn",
    ja: "ケルン"
  },
  {
    num: "n02096294",
    en: "Australian_terrier",
    ja: "オーストラリアテリア"
  },
  {
    num: "n02096437",
    en: "Dandie_Dinmont",
    ja: "ダンディディンモントテリア"
  },
  {
    num: "n02096585",
    en: "Boston_bull",
    ja: "ボストンブル"
  },
  {
    num: "n02097047",
    en: "miniature_schnauzer",
    ja: "ミニチュアシュナウザー"
  },
  {
    num: "n02097130",
    en: "giant_schnauzer",
    ja: "ジャイアントシュナウザー"
  },
  {
    num: "n02097209",
    en: "standard_schnauzer",
    ja: "スタンダードシュナウザー"
  },
  {
    num: "n02097298",
    en: "Scotch_terrier",
    ja: "スコッチテリア"
  },
  {
    num: "n02097474",
    en: "Tibetan_terrier",
    ja: "チベタンテリア"
  },
  {
    num: "n02097658",
    en: "silky_terrier",
    ja: "シルキーテリア"
  },
  {
    num: "n02098105",
    en: "soft-coated_wheaten_terrier",
    ja: "ソフトコーテッド・ウィートン・テリア"
  },
  {
    num: "n02098286",
    en: "West_Highland_white_terrier",
    ja: "ウェストハイランドホワイトテリア"
  },
  {
    num: "n02098413",
    en: "Lhasa",
    ja: "ラサ"
  },
  {
    num: "n02099267",
    en: "flat-coated_retriever",
    ja: "フラットコーテッド・レトリーバー"
  },
  {
    num: "n02099429",
    en: "curly-coated_retriever",
    ja: "カーリーコーティングされたレトリーバー"
  },
  {
    num: "n02099601",
    en: "golden_retriever",
    ja: "ゴールデンレトリバー"
  },
  {
    num: "n02099712",
    en: "Labrador_retriever",
    ja: "ラブラドル・レトリーバー犬"
  },
  {
    num: "n02099849",
    en: "Chesapeake_Bay_retriever",
    ja: "チェサピーク湾レトリーバー"
  },
  {
    num: "n02100236",
    en: "German_short-haired_pointer",
    ja: "ジャーマン・ショートヘア・ポインタ"
  },
  {
    num: "n02100583",
    en: "vizsla",
    ja: "ビズラ"
  },
  {
    num: "n02100735",
    en: "English_setter",
    ja: "イングリッシュセッター"
  },
  {
    num: "n02100877",
    en: "Irish_setter",
    ja: "アイリッシュセッター"
  },
  {
    num: "n02101006",
    en: "Gordon_setter",
    ja: "ゴードンセッター"
  },
  {
    num: "n02101388",
    en: "Brittany_spaniel",
    ja: "ブリタニースパニエル"
  },
  {
    num: "n02101556",
    en: "clumber",
    ja: "クランバー"
  },
  {
    num: "n02102040",
    en: "English_springer",
    ja: "イングリッシュスプリンガー"
  },
  {
    num: "n02102177",
    en: "Welsh_springer_spaniel",
    ja: "ウェルシュスプリンガースパニエル"
  },
  {
    num: "n02102318",
    en: "cocker_spaniel",
    ja: "コッカースパニエル"
  },
  {
    num: "n02102480",
    en: "Sussex_spaniel",
    ja: "サセックススパニエル"
  },
  {
    num: "n02102973",
    en: "Irish_water_spaniel",
    ja: "アイルランドのウォータースパニエル"
  },
  {
    num: "n02104029",
    en: "kuvasz",
    ja: "クバース犬"
  },
  {
    num: "n02104365",
    en: "schipperke",
    ja: "スキッパーキー"
  },
  {
    num: "n02105056",
    en: "groenendael",
    ja: "ベルジアン・シェパード・ドッグ・グローネンダール"
  },
  {
    num: "n02105162",
    en: "malinois",
    ja: "マリノア"
  },
  {
    num: "n02105251",
    en: "briard",
    ja: "ブリアール"
  },
  {
    num: "n02105412",
    en: "kelpie",
    ja: "ケルピー"
  },
  {
    num: "n02105505",
    en: "komondor",
    ja: "コモンドール"
  },
  {
    num: "n02105641",
    en: "Old_English_sheepdog",
    ja: "オールドイングリッシュシープドッグ"
  },
  {
    num: "n02105855",
    en: "Shetland_sheepdog",
    ja: "シェトランドシープドッグ"
  },
  {
    num: "n02106030",
    en: "collie",
    ja: "コリー"
  },
  {
    num: "n02106166",
    en: "Border_collie",
    ja: "ボーダーコリー"
  },
  {
    num: "n02106382",
    en: "Bouvier_des_Flandres",
    ja: "ブーヴィエ・デ・フランドル"
  },
  {
    num: "n02106550",
    en: "Rottweiler",
    ja: "ロットワイラー"
  },
  {
    num: "n02106662",
    en: "German_shepherd",
    ja: "ジャーマンシェパード"
  },
  {
    num: "n02107142",
    en: "Doberman",
    ja: "ドーベルマン犬"
  },
  {
    num: "n02107312",
    en: "miniature_pinscher",
    ja: "ミニチュアピンシャー"
  },
  {
    num: "n02107574",
    en: "Greater_Swiss_Mountain_dog",
    ja: "グレータースイスマウンテンドッグ"
  },
  {
    num: "n02107683",
    en: "Bernese_mountain_dog",
    ja: "バーネーズマウンテンドッグ"
  },
  {
    num: "n02107908",
    en: "Appenzeller",
    ja: "アッペンツェル"
  },
  {
    num: "n02108000",
    en: "EntleBucher",
    ja: "エントレブッシャー"
  },
  {
    num: "n02108089",
    en: "boxer",
    ja: "ボクサー"
  },
  {
    num: "n02108422",
    en: "bull_mastiff",
    ja: "ブルマスチフ"
  },
  {
    num: "n02108551",
    en: "Tibetan_mastiff",
    ja: "チベットマスチフ"
  },
  {
    num: "n02108915",
    en: "French_bulldog",
    ja: "フレンチブルドッグ"
  },
  {
    num: "n02109047",
    en: "Great_Dane",
    ja: "グレートデーン"
  },
  {
    num: "n02109525",
    en: "Saint_Bernard",
    ja: "セントバーナード"
  },
  {
    num: "n02109961",
    en: "Eskimo_dog",
    ja: "エスキモー犬"
  },
  {
    num: "n02110063",
    en: "malamute",
    ja: "マラミュート"
  },
  {
    num: "n02110185",
    en: "Siberian_husky",
    ja: "シベリアンハスキー"
  },
  {
    num: "n02110341",
    en: "dalmatian",
    ja: "ダルメシアン"
  },
  {
    num: "n02110627",
    en: "affenpinscher",
    ja: "アーフェンピンシャー"
  },
  {
    num: "n02110806",
    en: "basenji",
    ja: "バセンジー"
  },
  {
    num: "n02110958",
    en: "pug",
    ja: "パグ"
  },
  {
    num: "n02111129",
    en: "Leonberg",
    ja: "レオンバーグ"
  },
  {
    num: "n02111277",
    en: "Newfoundland",
    ja: "ニューファンドランド島"
  },
  {
    num: "n02111500",
    en: "Great_Pyrenees",
    ja: "グレートピレニーズ"
  },
  {
    num: "n02111889",
    en: "Samoyed",
    ja: "サモエド"
  },
  {
    num: "n02112018",
    en: "Pomeranian",
    ja: "ポメラニアン"
  },
  {
    num: "n02112137",
    en: "chow",
    ja: "チャウ"
  },
  {
    num: "n02112350",
    en: "keeshond",
    ja: "キースホンド"
  },
  {
    num: "n02112706",
    en: "Brabancon_griffon",
    ja: "ブラバンソングリフォン"
  },
  {
    num: "n02113023",
    en: "Pembroke",
    ja: "ペンブローク"
  },
  {
    num: "n02113186",
    en: "Cardigan",
    ja: "カーディガン"
  },
  {
    num: "n02113624",
    en: "toy_poodle",
    ja: "トイプードル"
  },
  {
    num: "n02113712",
    en: "miniature_poodle",
    ja: "ミニチュアプードル"
  },
  {
    num: "n02113799",
    en: "standard_poodle",
    ja: "スタンダードプードル"
  },
  {
    num: "n02113978",
    en: "Mexican_hairless",
    ja: "メキシカン・ヘアーレス"
  },
  {
    num: "n02114367",
    en: "timber_wolf",
    ja: "シンリンオオカミ"
  },
  {
    num: "n02114548",
    en: "white_wolf",
    ja: "白いオオカミ"
  },
  {
    num: "n02114712",
    en: "red_wolf",
    ja: "レッドウルフ"
  },
  {
    num: "n02114855",
    en: "coyote",
    ja: "コヨーテ"
  },
  {
    num: "n02115641",
    en: "dingo",
    ja: "ディンゴ"
  },
  {
    num: "n02115913",
    en: "dhole",
    ja: "ドール"
  },
  {
    num: "n02116738",
    en: "African_hunting_dog",
    ja: "リカオン"
  },
  {
    num: "n02117135",
    en: "hyena",
    ja: "ハイエナ"
  },
  {
    num: "n02119022",
    en: "red_fox",
    ja: "アカギツネ"
  },
  {
    num: "n02119789",
    en: "kit_fox",
    ja: "キットキツネ"
  },
  {
    num: "n02120079",
    en: "Arctic_fox",
    ja: "ホッキョクギツネ"
  },
  {
    num: "n02120505",
    en: "grey_fox",
    ja: "灰色のキツネ"
  },
  {
    num: "n02123045",
    en: "tabby",
    ja: "タビー"
  },
  {
    num: "n02123159",
    en: "tiger_cat",
    ja: "虎猫"
  },
  {
    num: "n02123394",
    en: "Persian_cat",
    ja: "ペルシャ猫"
  },
  {
    num: "n02123597",
    en: "Siamese_cat",
    ja: "シャム猫"
  },
  {
    num: "n02124075",
    en: "Egyptian_cat",
    ja: "エジプトの猫"
  },
  {
    num: "n02125311",
    en: "cougar",
    ja: "クーガー"
  },
  {
    num: "n02127052",
    en: "lynx",
    ja: "オオヤマネコ"
  },
  {
    num: "n02128385",
    en: "leopard",
    ja: "ヒョウ"
  },
  {
    num: "n02128757",
    en: "snow_leopard",
    ja: "ユキヒョウ"
  },
  {
    num: "n02128925",
    en: "jaguar",
    ja: "ジャガー"
  },
  {
    num: "n02129165",
    en: "lion",
    ja: "ライオン"
  },
  {
    num: "n02129604",
    en: "tiger",
    ja: "虎"
  },
  {
    num: "n02130308",
    en: "cheetah",
    ja: "チーター"
  },
  {
    num: "n02132136",
    en: "brown_bear",
    ja: "ヒグマ"
  },
  {
    num: "n02133161",
    en: "American_black_bear",
    ja: "アメリカクロクマ"
  },
  {
    num: "n02134084",
    en: "ice_bear",
    ja: "氷のクマ"
  },
  {
    num: "n02134418",
    en: "sloth_bear",
    ja: "ナマケグマ"
  },
  {
    num: "n02137549",
    en: "mongoose",
    ja: "マングース"
  },
  {
    num: "n02138441",
    en: "meerkat",
    ja: "ミーアキャット"
  },
  {
    num: "n02165105",
    en: "tiger_beetle",
    ja: "ハンミョウ"
  },
  {
    num: "n02165456",
    en: "ladybug",
    ja: "てんとう虫"
  },
  {
    num: "n02167151",
    en: "ground_beetle",
    ja: "グランドビートル"
  },
  {
    num: "n02168699",
    en: "long-horned_beetle",
    ja: "カミキリムシ"
  },
  {
    num: "n02169497",
    en: "leaf_beetle",
    ja: "ハムシ"
  },
  {
    num: "n02172182",
    en: "dung_beetle",
    ja: "フンコロガシ"
  },
  {
    num: "n02174001",
    en: "rhinoceros_beetle",
    ja: "サイハムシ"
  },
  {
    num: "n02177972",
    en: "weevil",
    ja: "ゾウムシ"
  },
  {
    num: "n02190166",
    en: "fly",
    ja: "ハエ"
  },
  {
    num: "n02206856",
    en: "bee",
    ja: "蜂"
  },
  {
    num: "n02219486",
    en: "ant",
    ja: "蟻"
  },
  {
    num: "n02226429",
    en: "grasshopper",
    ja: "バッタ"
  },
  {
    num: "n02229544",
    en: "cricket",
    ja: "クリケット"
  },
  {
    num: "n02231487",
    en: "walking_stick",
    ja: "杖"
  },
  {
    num: "n02233338",
    en: "cockroach",
    ja: "ゴキブリ"
  },
  {
    num: "n02236044",
    en: "mantis",
    ja: "カマキリ"
  },
  {
    num: "n02256656",
    en: "cicada",
    ja: "蝉"
  },
  {
    num: "n02259212",
    en: "leafhopper",
    ja: "ヨコバイ"
  },
  {
    num: "n02264363",
    en: "lacewing",
    ja: "クサカゲロウ"
  },
  {
    num: "n02268443",
    en: "dragonfly",
    ja: "トンボ"
  },
  {
    num: "n02268853",
    en: "damselfly",
    ja: "イトトンボ"
  },
  {
    num: "n02276258",
    en: "admiral",
    ja: "提督"
  },
  {
    num: "n02277742",
    en: "ringlet",
    ja: "リングレット"
  },
  {
    num: "n02279972",
    en: "monarch",
    ja: "君主"
  },
  {
    num: "n02280649",
    en: "cabbage_butterfly",
    ja: "モンシロチョウ"
  },
  {
    num: "n02281406",
    en: "sulphur_butterfly",
    ja: "硫黄蝶"
  },
  {
    num: "n02281787",
    en: "lycaenid",
    ja: "シジミチョウ"
  },
  {
    num: "n02317335",
    en: "starfish",
    ja: "ヒトデ"
  },
  {
    num: "n02319095",
    en: "sea_urchin",
    ja: "うに"
  },
  {
    num: "n02321529",
    en: "sea_cucumber",
    ja: "ナマコ"
  },
  {
    num: "n02325366",
    en: "wood_rabbit",
    ja: "木のウサギ"
  },
  {
    num: "n02326432",
    en: "hare",
    ja: "野ウサギ"
  },
  {
    num: "n02328150",
    en: "Angora",
    ja: "アンゴラ"
  },
  {
    num: "n02342885",
    en: "hamster",
    ja: "ハムスター"
  },
  {
    num: "n02346627",
    en: "porcupine",
    ja: "ヤマアラシ"
  },
  {
    num: "n02356798",
    en: "fox_squirrel",
    ja: "キツネリス"
  },
  {
    num: "n02361337",
    en: "marmot",
    ja: "マーモット"
  },
  {
    num: "n02363005",
    en: "beaver",
    ja: "ビーバー"
  },
  {
    num: "n02364673",
    en: "guinea_pig",
    ja: "モルモット"
  },
  {
    num: "n02389026",
    en: "sorrel",
    ja: "栗色"
  },
  {
    num: "n02391049",
    en: "zebra",
    ja: "シマウマ"
  },
  {
    num: "n02395406",
    en: "hog",
    ja: "豚"
  },
  {
    num: "n02396427",
    en: "wild_boar",
    ja: "イノシシ"
  },
  {
    num: "n02397096",
    en: "warthog",
    ja: "イボイノシシ"
  },
  {
    num: "n02398521",
    en: "hippopotamus",
    ja: "カバ"
  },
  {
    num: "n02403003",
    en: "ox",
    ja: "雄牛"
  },
  {
    num: "n02408429",
    en: "water_buffalo",
    ja: "水牛"
  },
  {
    num: "n02410509",
    en: "bison",
    ja: "バイソン"
  },
  {
    num: "n02412080",
    en: "ram",
    ja: "ラム"
  },
  {
    num: "n02415577",
    en: "bighorn",
    ja: "ビッグホーン"
  },
  {
    num: "n02417914",
    en: "ibex",
    ja: "アイベックス"
  },
  {
    num: "n02422106",
    en: "hartebeest",
    ja: "ハーテビースト"
  },
  {
    num: "n02422699",
    en: "impala",
    ja: "インパラ"
  },
  {
    num: "n02423022",
    en: "gazelle",
    ja: "ガゼル"
  },
  {
    num: "n02437312",
    en: "Arabian_camel",
    ja: "アラビアラクダ"
  },
  {
    num: "n02437616",
    en: "llama",
    ja: "ラマ"
  },
  {
    num: "n02441942",
    en: "weasel",
    ja: "イタチ"
  },
  {
    num: "n02442845",
    en: "mink",
    ja: "ミンク"
  },
  {
    num: "n02443114",
    en: "polecat",
    ja: "ケナガイタチ"
  },
  {
    num: "n02443484",
    en: "black-footed_ferret",
    ja: "クロアシイタチ"
  },
  {
    num: "n02444819",
    en: "otter",
    ja: "カワウソ"
  },
  {
    num: "n02445715",
    en: "skunk",
    ja: "スカンク"
  },
  {
    num: "n02447366",
    en: "badger",
    ja: "狸"
  },
  {
    num: "n02454379",
    en: "armadillo",
    ja: "アルマジロ"
  },
  {
    num: "n02457408",
    en: "three-toed_sloth",
    ja: "ミユビナマケモノ"
  },
  {
    num: "n02480495",
    en: "orangutan",
    ja: "オランウータン"
  },
  {
    num: "n02480855",
    en: "gorilla",
    ja: "ゴリラ"
  },
  {
    num: "n02481823",
    en: "chimpanzee",
    ja: "チンパンジー"
  },
  {
    num: "n02483362",
    en: "gibbon",
    ja: "テナガザル"
  },
  {
    num: "n02483708",
    en: "siamang",
    ja: "フクロテナガザル"
  },
  {
    num: "n02484975",
    en: "guenon",
    ja: "オナガザル"
  },
  {
    num: "n02486261",
    en: "patas",
    ja: "パタス"
  },
  {
    num: "n02486410",
    en: "baboon",
    ja: "ヒヒ"
  },
  {
    num: "n02487347",
    en: "macaque",
    ja: "マカク"
  },
  {
    num: "n02488291",
    en: "langur",
    ja: "ヤセザル"
  },
  {
    num: "n02488702",
    en: "colobus",
    ja: "コロブス属"
  },
  {
    num: "n02489166",
    en: "proboscis_monkey",
    ja: "テングザル"
  },
  {
    num: "n02490219",
    en: "marmoset",
    ja: "マーモセット"
  },
  {
    num: "n02492035",
    en: "capuchin",
    ja: "オマキザル"
  },
  {
    num: "n02492660",
    en: "howler_monkey",
    ja: "ホエザル"
  },
  {
    num: "n02493509",
    en: "titi",
    ja: "ティティ"
  },
  {
    num: "n02493793",
    en: "spider_monkey",
    ja: "クモザル"
  },
  {
    num: "n02494079",
    en: "squirrel_monkey",
    ja: "リスザル"
  },
  {
    num: "n02497673",
    en: "Madagascar_cat",
    ja: "マダガスカル猫"
  },
  {
    num: "n02500267",
    en: "indri",
    ja: "インドリ"
  },
  {
    num: "n02504013",
    en: "Indian_elephant",
    ja: "インドゾウ"
  },
  {
    num: "n02504458",
    en: "African_elephant",
    ja: "アフリカゾウ"
  },
  {
    num: "n02509815",
    en: "lesser_panda",
    ja: "レッサーパンダ"
  },
  {
    num: "n02510455",
    en: "giant_panda",
    ja: "ジャイアントパンダ"
  },
  {
    num: "n02514041",
    en: "barracouta",
    ja: "バラクータ"
  },
  {
    num: "n02526121",
    en: "eel",
    ja: "ウナギ"
  },
  {
    num: "n02536864",
    en: "coho",
    ja: "ギンザケ"
  },
  {
    num: "n02606052",
    en: "rock_beauty",
    ja: "岩の美しさ"
  },
  {
    num: "n02607072",
    en: "anemone_fish",
    ja: "クマノミ"
  },
  {
    num: "n02640242",
    en: "sturgeon",
    ja: "チョウザメ"
  },
  {
    num: "n02641379",
    en: "gar",
    ja: "ガー"
  },
  {
    num: "n02643566",
    en: "lionfish",
    ja: "ミノカサゴ"
  },
  {
    num: "n02655020",
    en: "puffer",
    ja: "フグ"
  },
  {
    num: "n02666196",
    en: "abacus",
    ja: "そろばん"
  },
  {
    num: "n02667093",
    en: "abaya",
    ja: "アバヤ"
  },
  {
    num: "n02669723",
    en: "academic_gown",
    ja: "アカデミックガウン"
  },
  {
    num: "n02672831",
    en: "accordion",
    ja: "アコーディオン"
  },
  {
    num: "n02676566",
    en: "acoustic_guitar",
    ja: "アコースティックギター"
  },
  {
    num: "n02687172",
    en: "aircraft_carrier",
    ja: "空母"
  },
  {
    num: "n02690373",
    en: "airliner",
    ja: "旅客機"
  },
  {
    num: "n02692877",
    en: "airship",
    ja: "飛行船"
  },
  {
    num: "n02699494",
    en: "altar",
    ja: "祭壇"
  },
  {
    num: "n02701002",
    en: "ambulance",
    ja: "救急車"
  },
  {
    num: "n02704792",
    en: "amphibian",
    ja: "両生類"
  },
  {
    num: "n02708093",
    en: "analog_clock",
    ja: "アナログ時計"
  },
  {
    num: "n02727426",
    en: "apiary",
    ja: "養蜂場"
  },
  {
    num: "n02730930",
    en: "apron",
    ja: "エプロン"
  },
  {
    num: "n02747177",
    en: "ashcan",
    ja: "ごみ入れ"
  },
  {
    num: "n02749479",
    en: "assault_rifle",
    ja: "アサルトライフル"
  },
  {
    num: "n02769748",
    en: "backpack",
    ja: "バックパック"
  },
  {
    num: "n02776631",
    en: "bakery",
    ja: "ベーカリー"
  },
  {
    num: "n02777292",
    en: "balance_beam",
    ja: "平均台"
  },
  {
    num: "n02782093",
    en: "balloon",
    ja: "バルーン"
  },
  {
    num: "n02783161",
    en: "ballpoint",
    ja: "ボールペン"
  },
  {
    num: "n02786058",
    en: "Band_Aid",
    ja: "バンドエイド"
  },
  {
    num: "n02787622",
    en: "banjo",
    ja: "バンジョー"
  },
  {
    num: "n02788148",
    en: "bannister",
    ja: "バニスター"
  },
  {
    num: "n02790996",
    en: "barbell",
    ja: "バーベル"
  },
  {
    num: "n02791124",
    en: "barber_chair",
    ja: "理髪店の椅子"
  },
  {
    num: "n02791270",
    en: "barbershop",
    ja: "理髪店"
  },
  {
    num: "n02793495",
    en: "barn",
    ja: "納屋"
  },
  {
    num: "n02794156",
    en: "barometer",
    ja: "バロメーター"
  },
  {
    num: "n02795169",
    en: "barrel",
    ja: "バレル"
  },
  {
    num: "n02797295",
    en: "barrow",
    ja: "バロー"
  },
  {
    num: "n02799071",
    en: "baseball",
    ja: "野球"
  },
  {
    num: "n02802426",
    en: "basketball",
    ja: "バスケットボール"
  },
  {
    num: "n02804414",
    en: "bassinet",
    ja: "バシネット"
  },
  {
    num: "n02804610",
    en: "bassoon",
    ja: "ファゴット"
  },
  {
    num: "n02807133",
    en: "bathing_cap",
    ja: "水泳帽"
  },
  {
    num: "n02808304",
    en: "bath_towel",
    ja: "バスタオル"
  },
  {
    num: "n02808440",
    en: "bathtub",
    ja: "バスタブ"
  },
  {
    num: "n02814533",
    en: "beach_wagon",
    ja: "ビーチワゴン"
  },
  {
    num: "n02814860",
    en: "beacon",
    ja: "ビーコン"
  },
  {
    num: "n02815834",
    en: "beaker",
    ja: "ビーカー"
  },
  {
    num: "n02817516",
    en: "bearskin",
    ja: "ベアスキン"
  },
  {
    num: "n02823428",
    en: "beer_bottle",
    ja: "ビール瓶"
  },
  {
    num: "n02823750",
    en: "beer_glass",
    ja: "ビールグラス"
  },
  {
    num: "n02825657",
    en: "bell_cote",
    ja: "ベルコート"
  },
  {
    num: "n02834397",
    en: "bib",
    ja: "ビブ"
  },
  {
    num: "n02835271",
    en: "bicycle-built-for-two",
    ja: "自転車"
  },
  {
    num: "n02837789",
    en: "bikini",
    ja: "ビキニ"
  },
  {
    num: "n02840245",
    en: "binder",
    ja: "バインダー"
  },
  {
    num: "n02841315",
    en: "binoculars",
    ja: "双眼鏡"
  },
  {
    num: "n02843684",
    en: "birdhouse",
    ja: "巣箱"
  },
  {
    num: "n02859443",
    en: "boathouse",
    ja: "ボートハウス"
  },
  {
    num: "n02860847",
    en: "bobsled",
    ja: "ボブスレー"
  },
  {
    num: "n02865351",
    en: "bolo_tie",
    ja: "ループタイ"
  },
  {
    num: "n02869837",
    en: "bonnet",
    ja: "ボンネット"
  },
  {
    num: "n02870880",
    en: "bookcase",
    ja: "本棚"
  },
  {
    num: "n02871525",
    en: "bookshop",
    ja: "書店"
  },
  {
    num: "n02877765",
    en: "bottlecap",
    ja: "瓶のキャップ"
  },
  {
    num: "n02879718",
    en: "bow",
    ja: "弓"
  },
  {
    num: "n02883205",
    en: "bow_tie",
    ja: "ちょうネクタイ"
  },
  {
    num: "n02892201",
    en: "brass",
    ja: "真鍮"
  },
  {
    num: "n02892767",
    en: "brassiere",
    ja: "ブラジャー"
  },
  {
    num: "n02894605",
    en: "breakwater",
    ja: "防波堤"
  },
  {
    num: "n02895154",
    en: "breastplate",
    ja: "胸当て"
  },
  {
    num: "n02906734",
    en: "broom",
    ja: "ほうき"
  },
  {
    num: "n02909870",
    en: "bucket",
    ja: "バケツ"
  },
  {
    num: "n02910353",
    en: "buckle",
    ja: "バックル"
  },
  {
    num: "n02916936",
    en: "bulletproof_vest",
    ja: "防弾チョッキ"
  },
  {
    num: "n02917067",
    en: "bullet_train",
    ja: "新幹線"
  },
  {
    num: "n02927161",
    en: "butcher_shop",
    ja: "精肉店"
  },
  {
    num: "n02930766",
    en: "cab",
    ja: "タクシー"
  },
  {
    num: "n02939185",
    en: "caldron",
    ja: "大釜"
  },
  {
    num: "n02948072",
    en: "candle",
    ja: "キャンドル"
  },
  {
    num: "n02950826",
    en: "cannon",
    ja: "大砲"
  },
  {
    num: "n02951358",
    en: "canoe",
    ja: "カヌー"
  },
  {
    num: "n02951585",
    en: "can_opener",
    ja: "缶切り"
  },
  {
    num: "n02963159",
    en: "cardigan",
    ja: "カーディガン"
  },
  {
    num: "n02965783",
    en: "car_mirror",
    ja: "車のミラー"
  },
  {
    num: "n02966193",
    en: "carousel",
    ja: "回転木馬"
  },
  {
    num: "n02966687",
    en: "carpenter's_kit",
    ja: "大工のキット"
  },
  {
    num: "n02971356",
    en: "carton",
    ja: "カートン"
  },
  {
    num: "n02974003",
    en: "car_wheel",
    ja: "車のホイール"
  },
  {
    num: "n02977058",
    en: "cash_machine",
    ja: "現金自動預け払い機"
  },
  {
    num: "n02978881",
    en: "cassette",
    ja: "カセット"
  },
  {
    num: "n02979186",
    en: "cassette_player",
    ja: "カセット・プレーヤー"
  },
  {
    num: "n02980441",
    en: "castle",
    ja: "城"
  },
  {
    num: "n02981792",
    en: "catamaran",
    ja: "カタマラン"
  },
  {
    num: "n02988304",
    en: "CD_player",
    ja: "CDプレーヤー"
  },
  {
    num: "n02992211",
    en: "cello",
    ja: "チェロ"
  },
  {
    num: "n02992529",
    en: "cellular_telephone",
    ja: "スマートフォン"
  },
  {
    num: "n02999410",
    en: "chain",
    ja: "鎖"
  },
  {
    num: "n03000134",
    en: "chainlink_fence",
    ja: "チェーンリンクフェンス"
  },
  {
    num: "n03000247",
    en: "chain_mail",
    ja: "チェーンメール"
  },
  {
    num: "n03000684",
    en: "chain_saw",
    ja: "チェーンソー"
  },
  {
    num: "n03014705",
    en: "chest",
    ja: "胸"
  },
  {
    num: "n03016953",
    en: "chiffonier",
    ja: "シフォニア"
  },
  {
    num: "n03017168",
    en: "chime",
    ja: "チャイム"
  },
  {
    num: "n03018349",
    en: "china_cabinet",
    ja: "中国キャビネット"
  },
  {
    num: "n03026506",
    en: "Christmas_stocking",
    ja: "クリスマスの靴下"
  },
  {
    num: "n03028079",
    en: "church",
    ja: "教会"
  },
  {
    num: "n03032252",
    en: "cinema",
    ja: "映画"
  },
  {
    num: "n03041632",
    en: "cleaver",
    ja: "クリーバー"
  },
  {
    num: "n03042490",
    en: "cliff_dwelling",
    ja: "崖の住居"
  },
  {
    num: "n03045698",
    en: "cloak",
    ja: "マント"
  },
  {
    num: "n03047690",
    en: "clog",
    ja: "クロッグ"
  },
  {
    num: "n03062245",
    en: "cocktail_shaker",
    ja: "カクテルシェーカー"
  },
  {
    num: "n03063599",
    en: "coffee_mug",
    ja: "コーヒーマグ"
  },
  {
    num: "n03063689",
    en: "coffeepot",
    ja: "コーヒーポット"
  },
  {
    num: "n03065424",
    en: "coil",
    ja: "コイル"
  },
  {
    num: "n03075370",
    en: "combination_lock",
    ja: "ダイヤル錠"
  },
  {
    num: "n03085013",
    en: "computer_keyboard",
    ja: "コンピュータのキーボード"
  },
  {
    num: "n03089624",
    en: "confectionery",
    ja: "製菓"
  },
  {
    num: "n03095699",
    en: "container_ship",
    ja: "コンテナ船"
  },
  {
    num: "n03100240",
    en: "convertible",
    ja: "コンバーチブル"
  },
  {
    num: "n03109150",
    en: "corkscrew",
    ja: "コークスクリュー"
  },
  {
    num: "n03110669",
    en: "cornet",
    ja: "コルネット"
  },
  {
    num: "n03124043",
    en: "cowboy_boot",
    ja: "カウボーイブーツ"
  },
  {
    num: "n03124170",
    en: "cowboy_hat",
    ja: "カウボーイハット"
  },
  {
    num: "n03125729",
    en: "cradle",
    ja: "クレードル"
  },
  {
    num: "n03126707",
    en: "crane",
    ja: "クレーン"
  },
  {
    num: "n03127747",
    en: "crash_helmet",
    ja: "クラッシュヘルメット"
  },
  {
    num: "n03127925",
    en: "crate",
    ja: "木箱"
  },
  {
    num: "n03131574",
    en: "crib",
    ja: "ベビーベッド"
  },
  {
    num: "n03133878",
    en: "Crock_Pot",
    ja: "クロークポット"
  },
  {
    num: "n03134739",
    en: "croquet_ball",
    ja: "クロケットボール"
  },
  {
    num: "n03141823",
    en: "crutch",
    ja: "松葉杖"
  },
  {
    num: "n03146219",
    en: "cuirass",
    ja: "胸当て"
  },
  {
    num: "n03160309",
    en: "dam",
    ja: "ダム"
  },
  {
    num: "n03179701",
    en: "desk",
    ja: "机"
  },
  {
    num: "n03180011",
    en: "desktop_computer",
    ja: "デスクトップコンピューター"
  },
  {
    num: "n03187595",
    en: "dial_telephone",
    ja: "ダイヤル電話"
  },
  {
    num: "n03188531",
    en: "diaper",
    ja: "おむつ"
  },
  {
    num: "n03196217",
    en: "digital_clock",
    ja: "デジタル時計"
  },
  {
    num: "n03197337",
    en: "digital_watch",
    ja: "デジタル腕時計"
  },
  {
    num: "n03201208",
    en: "dining_table",
    ja: "ダイニングテーブル"
  },
  {
    num: "n03207743",
    en: "dishrag",
    ja: "意気地なし"
  },
  {
    num: "n03207941",
    en: "dishwasher",
    ja: "食器洗い機"
  },
  {
    num: "n03208938",
    en: "disk_brake",
    ja: "ディスクブレーキ"
  },
  {
    num: "n03216828",
    en: "dock",
    ja: "ドック"
  },
  {
    num: "n03218198",
    en: "dogsled",
    ja: "犬ぞり"
  },
  {
    num: "n03220513",
    en: "dome",
    ja: "ドーム"
  },
  {
    num: "n03223299",
    en: "doormat",
    ja: "玄関マット"
  },
  {
    num: "n03240683",
    en: "drilling_platform",
    ja: "掘削基地"
  },
  {
    num: "n03249569",
    en: "drum",
    ja: "ドラム"
  },
  {
    num: "n03250847",
    en: "drumstick",
    ja: "ドラムスティック"
  },
  {
    num: "n03255030",
    en: "dumbbell",
    ja: "ダンベル"
  },
  {
    num: "n03259280",
    en: "Dutch_oven",
    ja: "ダッチオーブン"
  },
  {
    num: "n03271574",
    en: "electric_fan",
    ja: "扇風機"
  },
  {
    num: "n03272010",
    en: "electric_guitar",
    ja: "エレキギター"
  },
  {
    num: "n03272562",
    en: "electric_locomotive",
    ja: "電気機関車"
  },
  {
    num: "n03290653",
    en: "entertainment_center",
    ja: "娯楽施設"
  },
  {
    num: "n03291819",
    en: "envelope",
    ja: "封筒"
  },
  {
    num: "n03297495",
    en: "espresso_maker",
    ja: "エスプレッソマシーン"
  },
  {
    num: "n03314780",
    en: "face_powder",
    ja: "フェースパウダー"
  },
  {
    num: "n03325584",
    en: "feather_boa",
    ja: "フェザーボア"
  },
  {
    num: "n03337140",
    en: "file",
    ja: "ファイル"
  },
  {
    num: "n03344393",
    en: "fireboat",
    ja: "消防艇"
  },
  {
    num: "n03345487",
    en: "fire_engine",
    ja: "消防車"
  },
  {
    num: "n03347037",
    en: "fire_screen",
    ja: "ファイアースクリーン"
  },
  {
    num: "n03355925",
    en: "flagpole",
    ja: "旗竿"
  },
  {
    num: "n03372029",
    en: "flute",
    ja: "フルート"
  },
  {
    num: "n03376595",
    en: "folding_chair",
    ja: "折り畳み式椅子"
  },
  {
    num: "n03379051",
    en: "football_helmet",
    ja: "フットボールヘルメット"
  },
  {
    num: "n03384352",
    en: "forklift",
    ja: "フォークリフト"
  },
  {
    num: "n03388043",
    en: "fountain",
    ja: "噴水"
  },
  {
    num: "n03388183",
    en: "fountain_pen",
    ja: "万年筆"
  },
  {
    num: "n03388549",
    en: "four-poster",
    ja: "四柱"
  },
  {
    num: "n03393912",
    en: "freight_car",
    ja: "貨車"
  },
  {
    num: "n03394916",
    en: "French_horn",
    ja: "フレンチホルン"
  },
  {
    num: "n03400231",
    en: "frying_pan",
    ja: "フライパン"
  },
  {
    num: "n03404251",
    en: "fur_coat",
    ja: "毛皮のコート"
  },
  {
    num: "n03417042",
    en: "garbage_truck",
    ja: "ごみ収集車"
  },
  {
    num: "n03424325",
    en: "gasmask",
    ja: "ガスマスク"
  },
  {
    num: "n03425413",
    en: "gas_pump",
    ja: "ガソリンポンプ"
  },
  {
    num: "n03443371",
    en: "goblet",
    ja: "ゴブレット"
  },
  {
    num: "n03444034",
    en: "go-kart",
    ja: "ゴーカート"
  },
  {
    num: "n03445777",
    en: "golf_ball",
    ja: "ゴルフボール"
  },
  {
    num: "n03445924",
    en: "golfcart",
    ja: "ゴルフカート"
  },
  {
    num: "n03447447",
    en: "gondola",
    ja: "ゴンドラ"
  },
  {
    num: "n03447721",
    en: "gong",
    ja: "ゴング"
  },
  {
    num: "n03450230",
    en: "gown",
    ja: "ガウン"
  },
  {
    num: "n03452741",
    en: "grand_piano",
    ja: "グランドピアノ"
  },
  {
    num: "n03457902",
    en: "greenhouse",
    ja: "温室"
  },
  {
    num: "n03459775",
    en: "grille",
    ja: "グリル"
  },
  {
    num: "n03461385",
    en: "grocery_store",
    ja: "食料品店"
  },
  {
    num: "n03467068",
    en: "guillotine",
    ja: "ギロチン"
  },
  {
    num: "n03476684",
    en: "hair_slide",
    ja: "ヘアスライド"
  },
  {
    num: "n03476991",
    en: "hair_spray",
    ja: "ヘアスプレー"
  },
  {
    num: "n03478589",
    en: "half_track",
    ja: "半トラック"
  },
  {
    num: "n03481172",
    en: "hammer",
    ja: "ハンマー"
  },
  {
    num: "n03482405",
    en: "hamper",
    ja: "妨げます"
  },
  {
    num: "n03483316",
    en: "hand_blower",
    ja: "ハンドブロワー"
  },
  {
    num: "n03485407",
    en: "hand-held_computer",
    ja: "タブレット"
  },
  {
    num: "n03485794",
    en: "handkerchief",
    ja: "ハンカチ"
  },
  {
    num: "n03492542",
    en: "hard_disc",
    ja: "ハードディスク"
  },
  {
    num: "n03494278",
    en: "harmonica",
    ja: "ハーモニカ"
  },
  {
    num: "n03495258",
    en: "harp",
    ja: "ハープ"
  },
  {
    num: "n03496892",
    en: "harvester",
    ja: "ハーベスタ"
  },
  {
    num: "n03498962",
    en: "hatchet",
    ja: "斧"
  },
  {
    num: "n03527444",
    en: "holster",
    ja: "ホルスター"
  },
  {
    num: "n03529860",
    en: "home_theater",
    ja: "ホームシアター"
  },
  {
    num: "n03530642",
    en: "honeycomb",
    ja: "ハニカム"
  },
  {
    num: "n03532672",
    en: "hook",
    ja: "フック"
  },
  {
    num: "n03534580",
    en: "hoopskirt",
    ja: "フープスカート"
  },
  {
    num: "n03535780",
    en: "horizontal_bar",
    ja: "水平バー"
  },
  {
    num: "n03538406",
    en: "horse_cart",
    ja: "馬車"
  },
  {
    num: "n03544143",
    en: "hourglass",
    ja: "砂時計"
  },
  {
    num: "n03584254",
    en: "iPod",
    ja: "アイフォーン"
  },
  {
    num: "n03584829",
    en: "iron",
    ja: "鉄"
  },
  {
    num: "n03590841",
    en: "jack-o'-lantern",
    ja: "ジャックオーランタン"
  },
  {
    num: "n03594734",
    en: "jean",
    ja: "ジーンズ"
  },
  {
    num: "n03594945",
    en: "jeep",
    ja: "ジープ"
  },
  {
    num: "n03595614",
    en: "jersey",
    ja: "ジャージー"
  },
  {
    num: "n03598930",
    en: "jigsaw_puzzle",
    ja: "ジグソーパズル"
  },
  {
    num: "n03599486",
    en: "jinrikisha",
    ja: "人力車"
  },
  {
    num: "n03602883",
    en: "joystick",
    ja: "ジョイスティック"
  },
  {
    num: "n03617480",
    en: "kimono",
    ja: "着物"
  },
  {
    num: "n03623198",
    en: "knee_pad",
    ja: "膝パッド"
  },
  {
    num: "n03627232",
    en: "knot",
    ja: "結び目"
  },
  {
    num: "n03630383",
    en: "lab_coat",
    ja: "白衣"
  },
  {
    num: "n03633091",
    en: "ladle",
    ja: "ひしゃく"
  },
  {
    num: "n03637318",
    en: "lampshade",
    ja: "ランプのかさ"
  },
  {
    num: "n03642806",
    en: "laptop",
    ja: "ノートパソコン"
  },
  {
    num: "n03649909",
    en: "lawn_mower",
    ja: "芝刈り機"
  },
  {
    num: "n03657121",
    en: "lens_cap",
    ja: "レンズキャップ"
  },
  {
    num: "n03658185",
    en: "letter_opener",
    ja: "レターオープナー"
  },
  {
    num: "n03661043",
    en: "library",
    ja: "ライブラリ"
  },
  {
    num: "n03662601",
    en: "lifeboat",
    ja: "救命ボート"
  },
  {
    num: "n03666591",
    en: "lighter",
    ja: "ライター"
  },
  {
    num: "n03670208",
    en: "limousine",
    ja: "リムジン"
  },
  {
    num: "n03673027",
    en: "liner",
    ja: "ライナー"
  },
  {
    num: "n03676483",
    en: "lipstick",
    ja: "口紅"
  },
  {
    num: "n03680355",
    en: "Loafer",
    ja: "ローファー"
  },
  {
    num: "n03690938",
    en: "lotion",
    ja: "ローション"
  },
  {
    num: "n03691459",
    en: "loudspeaker",
    ja: "スピーカー"
  },
  {
    num: "n03692522",
    en: "loupe",
    ja: "ルーペ"
  },
  {
    num: "n03697007",
    en: "lumbermill",
    ja: "製材所"
  },
  {
    num: "n03706229",
    en: "magnetic_compass",
    ja: "磁気コンパス"
  },
  {
    num: "n03709823",
    en: "mailbag",
    ja: "郵袋"
  },
  {
    num: "n03710193",
    en: "mailbox",
    ja: "メールボックス"
  },
  {
    num: "n03710637",
    en: "maillot",
    ja: "マイヨ"
  },
  {
    num: "n03710721",
    en: "maillot",
    ja: "マイヨ"
  },
  {
    num: "n03717622",
    en: "manhole_cover",
    ja: "マンホールの蓋"
  },
  {
    num: "n03720891",
    en: "maraca",
    ja: "マラカス"
  },
  {
    num: "n03721384",
    en: "marimba",
    ja: "マリンバ"
  },
  {
    num: "n03724870",
    en: "mask",
    ja: "マスク"
  },
  {
    num: "n03729826",
    en: "matchstick",
    ja: "マッチ棒"
  },
  {
    num: "n03733131",
    en: "maypole",
    ja: "メイポール"
  },
  {
    num: "n03733281",
    en: "maze",
    ja: "迷路"
  },
  {
    num: "n03733805",
    en: "measuring_cup",
    ja: "計量カップ"
  },
  {
    num: "n03742115",
    en: "medicine_chest",
    ja: "薬箱"
  },
  {
    num: "n03743016",
    en: "megalith",
    ja: "巨石"
  },
  {
    num: "n03759954",
    en: "microphone",
    ja: "マイク"
  },
  {
    num: "n03761084",
    en: "microwave",
    ja: "マイクロ波"
  },
  {
    num: "n03763968",
    en: "military_uniform",
    ja: "軍服"
  },
  {
    num: "n03764736",
    en: "milk_can",
    ja: "ミルク缶"
  },
  {
    num: "n03769881",
    en: "minibus",
    ja: "ミニバス"
  },
  {
    num: "n03770439",
    en: "miniskirt",
    ja: "ミニスカート"
  },
  {
    num: "n03770679",
    en: "minivan",
    ja: "ミニバン"
  },
  {
    num: "n03773504",
    en: "missile",
    ja: "ミサイル"
  },
  {
    num: "n03775071",
    en: "mitten",
    ja: "ミトン"
  },
  {
    num: "n03775546",
    en: "mixing_bowl",
    ja: "ミキシングボウル"
  },
  {
    num: "n03776460",
    en: "mobile_home",
    ja: "移動住宅"
  },
  {
    num: "n03777568",
    en: "Model_T",
    ja: "モデルT"
  },
  {
    num: "n03777754",
    en: "modem",
    ja: "モデム"
  },
  {
    num: "n03781244",
    en: "monastery",
    ja: "修道院"
  },
  {
    num: "n03782006",
    en: "monitor",
    ja: "モニター"
  },
  {
    num: "n03785016",
    en: "moped",
    ja: "モペット"
  },
  {
    num: "n03786901",
    en: "mortar",
    ja: "モルタル"
  },
  {
    num: "n03787032",
    en: "mortarboard",
    ja: "モルタルボード"
  },
  {
    num: "n03788195",
    en: "mosque",
    ja: "モスク"
  },
  {
    num: "n03788365",
    en: "mosquito_net",
    ja: "蚊帳"
  },
  {
    num: "n03791053",
    en: "motor_scooter",
    ja: "スクーター"
  },
  {
    num: "n03792782",
    en: "mountain_bike",
    ja: "マウンテンバイク"
  },
  {
    num: "n03792972",
    en: "mountain_tent",
    ja: "山のテント"
  },
  {
    num: "n03793489",
    en: "mouse",
    ja: "マウス"
  },
  {
    num: "n03794056",
    en: "mousetrap",
    ja: "ネズミ捕り"
  },
  {
    num: "n03796401",
    en: "moving_van",
    ja: "引っ越しトラック"
  },
  {
    num: "n03803284",
    en: "muzzle",
    ja: "銃口"
  },
  {
    num: "n03804744",
    en: "nail",
    ja: "ネイル"
  },
  {
    num: "n03814639",
    en: "neck_brace",
    ja: "ネックブレース"
  },
  {
    num: "n03814906",
    en: "necklace",
    ja: "ネックレス"
  },
  {
    num: "n03825788",
    en: "nipple",
    ja: "乳首"
  },
  {
    num: "n03832673",
    en: "notebook",
    ja: "ノート"
  },
  {
    num: "n03837869",
    en: "obelisk",
    ja: "オベリスク"
  },
  {
    num: "n03838899",
    en: "oboe",
    ja: "オーボエ"
  },
  {
    num: "n03840681",
    en: "ocarina",
    ja: "オカリナ"
  },
  {
    num: "n03841143",
    en: "odometer",
    ja: "オドメーター"
  },
  {
    num: "n03843555",
    en: "oil_filter",
    ja: "オイルフィルター"
  },
  {
    num: "n03854065",
    en: "organ",
    ja: "器官"
  },
  {
    num: "n03857828",
    en: "oscilloscope",
    ja: "オシロスコープ"
  },
  {
    num: "n03866082",
    en: "overskirt",
    ja: "オーバースカート"
  },
  {
    num: "n03868242",
    en: "oxcart",
    ja: "牛車"
  },
  {
    num: "n03868863",
    en: "oxygen_mask",
    ja: "酸素マスク"
  },
  {
    num: "n03871628",
    en: "packet",
    ja: "パケット"
  },
  {
    num: "n03873416",
    en: "paddle",
    ja: "パドル"
  },
  {
    num: "n03874293",
    en: "paddlewheel",
    ja: "パドルホイール"
  },
  {
    num: "n03874599",
    en: "padlock",
    ja: "南京錠"
  },
  {
    num: "n03876231",
    en: "paintbrush",
    ja: "絵筆"
  },
  {
    num: "n03877472",
    en: "pajama",
    ja: "パジャマ"
  },
  {
    num: "n03877845",
    en: "palace",
    ja: "宮殿"
  },
  {
    num: "n03884397",
    en: "panpipe",
    ja: "パンパイプ"
  },
  {
    num: "n03887697",
    en: "paper_towel",
    ja: "ペーパータオル"
  },
  {
    num: "n03888257",
    en: "parachute",
    ja: "パラシュート"
  },
  {
    num: "n03888605",
    en: "parallel_bars",
    ja: "平行棒"
  },
  {
    num: "n03891251",
    en: "park_bench",
    ja: "公園のベンチ"
  },
  {
    num: "n03891332",
    en: "parking_meter",
    ja: "パーキングメーター"
  },
  {
    num: "n03895866",
    en: "passenger_car",
    ja: "乗用車"
  },
  {
    num: "n03899768",
    en: "patio",
    ja: "パティオ"
  },
  {
    num: "n03902125",
    en: "pay-phone",
    ja: "有料電話"
  },
  {
    num: "n03903868",
    en: "pedestal",
    ja: "台座"
  },
  {
    num: "n03908618",
    en: "pencil_box",
    ja: "筆箱"
  },
  {
    num: "n03908714",
    en: "pencil_sharpener",
    ja: "鉛筆削り"
  },
  {
    num: "n03916031",
    en: "perfume",
    ja: "香水"
  },
  {
    num: "n03920288",
    en: "Petri_dish",
    ja: "ペトリ皿"
  },
  {
    num: "n03924679",
    en: "photocopier",
    ja: "コピー機"
  },
  {
    num: "n03929660",
    en: "pick",
    ja: "選ぶ"
  },
  {
    num: "n03929855",
    en: "pickelhaube",
    ja: "スパイク付き鉄かぶと"
  },
  {
    num: "n03930313",
    en: "picket_fence",
    ja: "杭柵"
  },
  {
    num: "n03930630",
    en: "pickup",
    ja: "拾う"
  },
  {
    num: "n03933933",
    en: "pier",
    ja: "桟橋"
  },
  {
    num: "n03935335",
    en: "piggy_bank",
    ja: "貯金箱"
  },
  {
    num: "n03937543",
    en: "pill_bottle",
    ja: "錠剤瓶"
  },
  {
    num: "n03938244",
    en: "pillow",
    ja: "枕"
  },
  {
    num: "n03942813",
    en: "ping-pong_ball",
    ja: "ピンポン球"
  },
  {
    num: "n03944341",
    en: "pinwheel",
    ja: "風車"
  },
  {
    num: "n03947888",
    en: "pirate",
    ja: "海賊"
  },
  {
    num: "n03950228",
    en: "pitcher",
    ja: "ピッチャー"
  },
  {
    num: "n03954731",
    en: "plane",
    ja: "飛行機"
  },
  {
    num: "n03956157",
    en: "planetarium",
    ja: "プラネタリウム"
  },
  {
    num: "n03958227",
    en: "plastic_bag",
    ja: "ビニール袋"
  },
  {
    num: "n03961711",
    en: "plate_rack",
    ja: "皿立て"
  },
  {
    num: "n03967562",
    en: "plow",
    ja: "プラウ"
  },
  {
    num: "n03970156",
    en: "plunger",
    ja: "プランジャー"
  },
  {
    num: "n03976467",
    en: "Polaroid_camera",
    ja: "ポラロイドカメラ"
  },
  {
    num: "n03976657",
    en: "pole",
    ja: "ポール"
  },
  {
    num: "n03977966",
    en: "police_van",
    ja: "警察車"
  },
  {
    num: "n03980874",
    en: "poncho",
    ja: "ポンチョ"
  },
  {
    num: "n03982430",
    en: "pool_table",
    ja: "ビリヤード台"
  },
  {
    num: "n03983396",
    en: "pop_bottle",
    ja: "ポップ・ボトル"
  },
  {
    num: "n03991062",
    en: "pot",
    ja: "ポット"
  },
  {
    num: "n03992509",
    en: "potter's_wheel",
    ja: "ろくろ"
  },
  {
    num: "n03995372",
    en: "power_drill",
    ja: "パワードリル"
  },
  {
    num: "n03998194",
    en: "prayer_rug",
    ja: "礼拝用敷物"
  },
  {
    num: "n04004767",
    en: "printer",
    ja: "プリンタ"
  },
  {
    num: "n04005630",
    en: "prison",
    ja: "刑務所"
  },
  {
    num: "n04008634",
    en: "projectile",
    ja: "発射体"
  },
  {
    num: "n04009552",
    en: "projector",
    ja: "プロジェクター"
  },
  {
    num: "n04019541",
    en: "puck",
    ja: "パック"
  },
  {
    num: "n04023962",
    en: "punching_bag",
    ja: "サンドバッグ"
  },
  {
    num: "n04026417",
    en: "purse",
    ja: "財布"
  },
  {
    num: "n04033901",
    en: "quill",
    ja: "クイル"
  },
  {
    num: "n04033995",
    en: "quilt",
    ja: "キルト"
  },
  {
    num: "n04037443",
    en: "racer",
    ja: "レーサー"
  },
  {
    num: "n04039381",
    en: "racket",
    ja: "ラケット"
  },
  {
    num: "n04040759",
    en: "radiator",
    ja: "ラジエーター"
  },
  {
    num: "n04041544",
    en: "radio",
    ja: "無線"
  },
  {
    num: "n04044716",
    en: "radio_telescope",
    ja: "電波望遠鏡"
  },
  {
    num: "n04049303",
    en: "rain_barrel",
    ja: "天水桶"
  },
  {
    num: "n04065272",
    en: "recreational_vehicle",
    ja: "RV車"
  },
  {
    num: "n04067472",
    en: "reel",
    ja: "リール"
  },
  {
    num: "n04069434",
    en: "reflex_camera",
    ja: "レフレックスカメラ"
  },
  {
    num: "n04070727",
    en: "refrigerator",
    ja: "冷蔵庫"
  },
  {
    num: "n04074963",
    en: "remote_control",
    ja: "リモコン"
  },
  {
    num: "n04081281",
    en: "restaurant",
    ja: "レストラン"
  },
  {
    num: "n04086273",
    en: "revolver",
    ja: "リボルバー"
  },
  {
    num: "n04090263",
    en: "rifle",
    ja: "ライフル"
  },
  {
    num: "n04099969",
    en: "rocking_chair",
    ja: "ロッキングチェア"
  },
  {
    num: "n04111531",
    en: "rotisserie",
    ja: "焼肉料理店"
  },
  {
    num: "n04116512",
    en: "rubber_eraser",
    ja: "消しゴム"
  },
  {
    num: "n04118538",
    en: "rugby_ball",
    ja: "ラグビーボール"
  },
  {
    num: "n04118776",
    en: "rule",
    ja: "ルール"
  },
  {
    num: "n04120489",
    en: "running_shoe",
    ja: "ランニングシューズ"
  },
  {
    num: "n04125021",
    en: "safe",
    ja: "安全"
  },
  {
    num: "n04127249",
    en: "safety_pin",
    ja: "安全ピン"
  },
  {
    num: "n04131690",
    en: "saltshaker",
    ja: "塩の入れ物"
  },
  {
    num: "n04133789",
    en: "sandal",
    ja: "サンダル"
  },
  {
    num: "n04136333",
    en: "sarong",
    ja: "サロン"
  },
  {
    num: "n04141076",
    en: "sax",
    ja: "サックス"
  },
  {
    num: "n04141327",
    en: "scabbard",
    ja: "鞘"
  },
  {
    num: "n04141975",
    en: "scale",
    ja: "規模"
  },
  {
    num: "n04146614",
    en: "school_bus",
    ja: "スクールバス"
  },
  {
    num: "n04147183",
    en: "schooner",
    ja: "スクーナー"
  },
  {
    num: "n04149813",
    en: "scoreboard",
    ja: "スコアボード"
  },
  {
    num: "n04152593",
    en: "screen",
    ja: "画面"
  },
  {
    num: "n04153751",
    en: "screw",
    ja: "スクリュー"
  },
  {
    num: "n04154565",
    en: "screwdriver",
    ja: "ドライバー"
  },
  {
    num: "n04162706",
    en: "seat_belt",
    ja: "シートベルト"
  },
  {
    num: "n04179913",
    en: "sewing_machine",
    ja: "ミシン"
  },
  {
    num: "n04192698",
    en: "shield",
    ja: "シールド"
  },
  {
    num: "n04200800",
    en: "shoe_shop",
    ja: "靴屋"
  },
  {
    num: "n04201297",
    en: "shoji",
    ja: "障子"
  },
  {
    num: "n04204238",
    en: "shopping_basket",
    ja: "買い物かご"
  },
  {
    num: "n04204347",
    en: "shopping_cart",
    ja: "ショッピングカート"
  },
  {
    num: "n04208210",
    en: "shovel",
    ja: "シャベル"
  },
  {
    num: "n04209133",
    en: "shower_cap",
    ja: "シャワーキャップ"
  },
  {
    num: "n04209239",
    en: "shower_curtain",
    ja: "シャワーカーテン"
  },
  {
    num: "n04228054",
    en: "ski",
    ja: "スキー"
  },
  {
    num: "n04229816",
    en: "ski_mask",
    ja: "スキーマスク"
  },
  {
    num: "n04235860",
    en: "sleeping_bag",
    ja: "寝袋"
  },
  {
    num: "n04238763",
    en: "slide_rule",
    ja: "計算尺"
  },
  {
    num: "n04239074",
    en: "sliding_door",
    ja: "引き戸"
  },
  {
    num: "n04243546",
    en: "slot",
    ja: "スロット"
  },
  {
    num: "n04251144",
    en: "snorkel",
    ja: "スノーケル"
  },
  {
    num: "n04252077",
    en: "snowmobile",
    ja: "スノーモービル"
  },
  {
    num: "n04252225",
    en: "snowplow",
    ja: "除雪機"
  },
  {
    num: "n04254120",
    en: "soap_dispenser",
    ja: "ソープディスペンサー"
  },
  {
    num: "n04254680",
    en: "soccer_ball",
    ja: "サッカーボール"
  },
  {
    num: "n04254777",
    en: "sock",
    ja: "靴下"
  },
  {
    num: "n04258138",
    en: "solar_dish",
    ja: "太陽の皿"
  },
  {
    num: "n04259630",
    en: "sombrero",
    ja: "ソンブレロ"
  },
  {
    num: "n04263257",
    en: "soup_bowl",
    ja: "スープ皿"
  },
  {
    num: "n04264628",
    en: "space_bar",
    ja: "スペースキー"
  },
  {
    num: "n04265275",
    en: "space_heater",
    ja: "スペースヒーター"
  },
  {
    num: "n04266014",
    en: "space_shuttle",
    ja: "スペースシャトル"
  },
  {
    num: "n04270147",
    en: "spatula",
    ja: "へら"
  },
  {
    num: "n04273569",
    en: "speedboat",
    ja: "スピードボート"
  },
  {
    num: "n04275548",
    en: "spider_web",
    ja: "クモの巣"
  },
  {
    num: "n04277352",
    en: "spindle",
    ja: "スピンドル"
  },
  {
    num: "n04285008",
    en: "sports_car",
    ja: "スポーツカー"
  },
  {
    num: "n04286575",
    en: "spotlight",
    ja: "スポットライト"
  },
  {
    num: "n04296562",
    en: "stage",
    ja: "ステージ"
  },
  {
    num: "n04310018",
    en: "steam_locomotive",
    ja: "蒸気機関車"
  },
  {
    num: "n04311004",
    en: "steel_arch_bridge",
    ja: "鋼アーチ橋"
  },
  {
    num: "n04311174",
    en: "steel_drum",
    ja: "スチールドラム"
  },
  {
    num: "n04317175",
    en: "stethoscope",
    ja: "聴診器"
  },
  {
    num: "n04325704",
    en: "stole",
    ja: "ストール"
  },
  {
    num: "n04326547",
    en: "stone_wall",
    ja: "石垣"
  },
  {
    num: "n04328186",
    en: "stopwatch",
    ja: "ストップウォッチ"
  },
  {
    num: "n04330267",
    en: "stove",
    ja: "レンジ"
  },
  {
    num: "n04332243",
    en: "strainer",
    ja: "ストレーナー"
  },
  {
    num: "n04335435",
    en: "streetcar",
    ja: "路面電車"
  },
  {
    num: "n04336792",
    en: "stretcher",
    ja: "ストレッチャー"
  },
  {
    num: "n04344873",
    en: "studio_couch",
    ja: "スタジオソファ"
  },
  {
    num: "n04346328",
    en: "stupa",
    ja: "仏舎利塔"
  },
  {
    num: "n04347754",
    en: "submarine",
    ja: "潜水艦"
  },
  {
    num: "n04350905",
    en: "suit",
    ja: "スーツ"
  },
  {
    num: "n04355338",
    en: "sundial",
    ja: "日時計"
  },
  {
    num: "n04355933",
    en: "sunglass",
    ja: "サングラス"
  },
  {
    num: "n04356056",
    en: "sunglasses",
    ja: "サングラス"
  },
  {
    num: "n04357314",
    en: "sunscreen",
    ja: "日焼け止め剤"
  },
  {
    num: "n04366367",
    en: "suspension_bridge",
    ja: "つり橋"
  },
  {
    num: "n04367480",
    en: "swab",
    ja: "綿棒"
  },
  {
    num: "n04370456",
    en: "sweatshirt",
    ja: "トレーナー"
  },
  {
    num: "n04371430",
    en: "swimming_trunks",
    ja: "海パン"
  },
  {
    num: "n04371774",
    en: "swing",
    ja: "スイング"
  },
  {
    num: "n04372370",
    en: "switch",
    ja: "スイッチ"
  },
  {
    num: "n04376876",
    en: "syringe",
    ja: "注射器"
  },
  {
    num: "n04380533",
    en: "table_lamp",
    ja: "電気スタンド"
  },
  {
    num: "n04389033",
    en: "tank",
    ja: "タンク"
  },
  {
    num: "n04392985",
    en: "tape_player",
    ja: "テーププレーヤー"
  },
  {
    num: "n04398044",
    en: "teapot",
    ja: "ティーポット"
  },
  {
    num: "n04399382",
    en: "teddy",
    ja: "テディ"
  },
  {
    num: "n04404412",
    en: "television",
    ja: "テレビ"
  },
  {
    num: "n04409515",
    en: "tennis_ball",
    ja: "テニスボール"
  },
  {
    num: "n04417672",
    en: "thatch",
    ja: "サッチ"
  },
  {
    num: "n04418357",
    en: "theater_curtain",
    ja: "劇場のカーテン"
  },
  {
    num: "n04423845",
    en: "thimble",
    ja: "指ぬき"
  },
  {
    num: "n04428191",
    en: "thresher",
    ja: "脱穀機"
  },
  {
    num: "n04429376",
    en: "throne",
    ja: "王位"
  },
  {
    num: "n04435653",
    en: "tile_roof",
    ja: "瓦屋根"
  },
  {
    num: "n04442312",
    en: "toaster",
    ja: "トースター"
  },
  {
    num: "n04443257",
    en: "tobacco_shop",
    ja: "タバコ屋"
  },
  {
    num: "n04447861",
    en: "toilet_seat",
    ja: "便座"
  },
  {
    num: "n04456115",
    en: "torch",
    ja: "トーチ"
  },
  {
    num: "n04458633",
    en: "totem_pole",
    ja: "トーテムポール"
  },
  {
    num: "n04461696",
    en: "tow_truck",
    ja: "レッカー車"
  },
  {
    num: "n04462240",
    en: "toyshop",
    ja: "玩具屋"
  },
  {
    num: "n04465501",
    en: "tractor",
    ja: "トラクター"
  },
  {
    num: "n04467665",
    en: "trailer_truck",
    ja: "トレーラートラック"
  },
  {
    num: "n04476259",
    en: "tray",
    ja: "トレイ"
  },
  {
    num: "n04479046",
    en: "trench_coat",
    ja: "トレンチコート"
  },
  {
    num: "n04482393",
    en: "tricycle",
    ja: "三輪車"
  },
  {
    num: "n04483307",
    en: "trimaran",
    ja: "三胴船"
  },
  {
    num: "n04485082",
    en: "tripod",
    ja: "三脚"
  },
  {
    num: "n04486054",
    en: "triumphal_arch",
    ja: "凱旋門"
  },
  {
    num: "n04487081",
    en: "trolleybus",
    ja: "トロリーバス"
  },
  {
    num: "n04487394",
    en: "trombone",
    ja: "トロンボーン"
  },
  {
    num: "n04493381",
    en: "tub",
    ja: "バスタブ"
  },
  {
    num: "n04501370",
    en: "turnstile",
    ja: "回転ドア"
  },
  {
    num: "n04505470",
    en: "typewriter_keyboard",
    ja: "タイプライターのキーボード"
  },
  {
    num: "n04507155",
    en: "umbrella",
    ja: "傘"
  },
  {
    num: "n04509417",
    en: "unicycle",
    ja: "一輪車"
  },
  {
    num: "n04515003",
    en: "upright",
    ja: "直立"
  },
  {
    num: "n04517823",
    en: "vacuum",
    ja: "真空"
  },
  {
    num: "n04522168",
    en: "vase",
    ja: "花瓶"
  },
  {
    num: "n04523525",
    en: "vault",
    ja: "ボールト"
  },
  {
    num: "n04525038",
    en: "velvet",
    ja: "ベルベット"
  },
  {
    num: "n04525305",
    en: "vending_machine",
    ja: "自動販売機"
  },
  {
    num: "n04532106",
    en: "vestment",
    ja: "祭服"
  },
  {
    num: "n04532670",
    en: "viaduct",
    ja: "高架橋"
  },
  {
    num: "n04536866",
    en: "violin",
    ja: "バイオリン"
  },
  {
    num: "n04540053",
    en: "volleyball",
    ja: "バレーボール"
  },
  {
    num: "n04542943",
    en: "waffle_iron",
    ja: "ワッフル焼き型"
  },
  {
    num: "n04548280",
    en: "wall_clock",
    ja: "壁時計"
  },
  {
    num: "n04548362",
    en: "wallet",
    ja: "財布"
  },
  {
    num: "n04550184",
    en: "wardrobe",
    ja: "ワードローブ"
  },
  {
    num: "n04552348",
    en: "warplane",
    ja: "戦闘機"
  },
  {
    num: "n04553703",
    en: "washbasin",
    ja: "洗面器"
  },
  {
    num: "n04554684",
    en: "washer",
    ja: "ワッシャー"
  },
  {
    num: "n04557648",
    en: "water_bottle",
    ja: "水筒"
  },
  {
    num: "n04560804",
    en: "water_jug",
    ja: "水差し"
  },
  {
    num: "n04562935",
    en: "water_tower",
    ja: "給水塔"
  },
  {
    num: "n04579145",
    en: "whiskey_jug",
    ja: "ウイスキージャグ"
  },
  {
    num: "n04579432",
    en: "whistle",
    ja: "ホイッスル"
  },
  {
    num: "n04584207",
    en: "wig",
    ja: "かつら"
  },
  {
    num: "n04589890",
    en: "window_screen",
    ja: "窓網戸"
  },
  {
    num: "n04590129",
    en: "window_shade",
    ja: "ブラインド"
  },
  {
    num: "n04591157",
    en: "Windsor_tie",
    ja: "ウィンザーネクタイ"
  },
  {
    num: "n04591713",
    en: "wine_bottle",
    ja: "ワインボトル"
  },
  {
    num: "n04592741",
    en: "wing",
    ja: "翼"
  },
  {
    num: "n04596742",
    en: "wok",
    ja: "中華鍋"
  },
  {
    num: "n04597913",
    en: "wooden_spoon",
    ja: "木製スプーン"
  },
  {
    num: "n04599235",
    en: "wool",
    ja: "ウール"
  },
  {
    num: "n04604644",
    en: "worm_fence",
    ja: "ワームフェンス"
  },
  {
    num: "n04606251",
    en: "wreck",
    ja: "難破船"
  },
  {
    num: "n04612504",
    en: "yawl",
    ja: "ヨール"
  },
  {
    num: "n04613696",
    en: "yurt",
    ja: "パオ"
  },
  {
    num: "n06359193",
    en: "web_site",
    ja: "サイト"
  },
  {
    num: "n06596364",
    en: "comic_book",
    ja: "コミックブック"
  },
  {
    num: "n06785654",
    en: "crossword_puzzle",
    ja: "クロスワードパズル"
  },
  {
    num: "n06794110",
    en: "street_sign",
    ja: "道路標識"
  },
  {
    num: "n06874185",
    en: "traffic_light",
    ja: "交通信号灯"
  },
  {
    num: "n07248320",
    en: "book_jacket",
    ja: "ブックカバー"
  },
  {
    num: "n07565083",
    en: "menu",
    ja: "メニュー"
  },
  {
    num: "n07579787",
    en: "plate",
    ja: "プレート"
  },
  {
    num: "n07583066",
    en: "guacamole",
    ja: "グアカモーレ"
  },
  {
    num: "n07584110",
    en: "consomme",
    ja: "コンソメ"
  },
  {
    num: "n07590611",
    en: "hot_pot",
    ja: "ホットポット"
  },
  {
    num: "n07613480",
    en: "trifle",
    ja: "パフェ"
  },
  {
    num: "n07614500",
    en: "ice_cream",
    ja: "アイスクリーム"
  },
  {
    num: "n07615774",
    en: "ice_lolly",
    ja: "アイスキャンディー"
  },
  {
    num: "n07684084",
    en: "French_loaf",
    ja: "フランスパン"
  },
  {
    num: "n07693725",
    en: "bagel",
    ja: "ベーグル"
  },
  {
    num: "n07695742",
    en: "pretzel",
    ja: "プレッツェル"
  },
  {
    num: "n07697313",
    en: "cheeseburger",
    ja: "チーズバーガー"
  },
  {
    num: "n07697537",
    en: "hotdog",
    ja: "ホットドッグ"
  },
  {
    num: "n07711569",
    en: "mashed_potato",
    ja: "マッシュポテト"
  },
  {
    num: "n07714571",
    en: "head_cabbage",
    ja: "キャベツ"
  },
  {
    num: "n07714990",
    en: "broccoli",
    ja: "ブロッコリー"
  },
  {
    num: "n07715103",
    en: "cauliflower",
    ja: "カリフラワー"
  },
  {
    num: "n07716358",
    en: "zucchini",
    ja: "ズッキーニ"
  },
  {
    num: "n07716906",
    en: "spaghetti_squash",
    ja: "そうめんかぼちゃ"
  },
  {
    num: "n07717410",
    en: "acorn_squash",
    ja: "ドングリかぼちゃ"
  },
  {
    num: "n07717556",
    en: "butternut_squash",
    ja: "カボチャ"
  },
  {
    num: "n07718472",
    en: "cucumber",
    ja: "キュウリ"
  },
  {
    num: "n07718747",
    en: "artichoke",
    ja: "アーティチョーク"
  },
  {
    num: "n07720875",
    en: "bell_pepper",
    ja: "ピーマン"
  },
  {
    num: "n07730033",
    en: "cardoon",
    ja: "カルドン"
  },
  {
    num: "n07734744",
    en: "mushroom",
    ja: "キノコ"
  },
  {
    num: "n07742313",
    en: "Granny_Smith",
    ja: "リンゴ"
  },
  {
    num: "n07745940",
    en: "strawberry",
    ja: "イチゴ"
  },
  {
    num: "n07747607",
    en: "orange",
    ja: "オレンジ"
  },
  {
    num: "n07749582",
    en: "lemon",
    ja: "レモン"
  },
  {
    num: "n07753113",
    en: "fig",
    ja: "イチジク"
  },
  {
    num: "n07753275",
    en: "pineapple",
    ja: "パイナップル"
  },
  {
    num: "n07753592",
    en: "banana",
    ja: "バナナ"
  },
  {
    num: "n07754684",
    en: "jackfruit",
    ja: "パラミツ"
  },
  {
    num: "n07760859",
    en: "custard_apple",
    ja: "カスタードアップル"
  },
  {
    num: "n07768694",
    en: "pomegranate",
    ja: "ザクロ"
  },
  {
    num: "n07802026",
    en: "hay",
    ja: "干し草"
  },
  {
    num: "n07831146",
    en: "carbonara",
    ja: "カルボナーラ"
  },
  {
    num: "n07836838",
    en: "chocolate_sauce",
    ja: "チョコレートソース"
  },
  {
    num: "n07860988",
    en: "dough",
    ja: "パン生地"
  },
  {
    num: "n07871810",
    en: "meat_loaf",
    ja: "ミートローフ"
  },
  {
    num: "n07873807",
    en: "pizza",
    ja: "ピザ"
  },
  {
    num: "n07875152",
    en: "potpie",
    ja: "ポットパイ"
  },
  {
    num: "n07880968",
    en: "burrito",
    ja: "ブリトー"
  },
  {
    num: "n07892512",
    en: "red_wine",
    ja: "赤ワイン"
  },
  {
    num: "n07920052",
    en: "espresso",
    ja: "エスプレッソ"
  },
  {
    num: "n07930864",
    en: "cup",
    ja: "カップ"
  },
  {
    num: "n07932039",
    en: "eggnog",
    ja: "エッグノッグ"
  },
  {
    num: "n09193705",
    en: "alp",
    ja: "アルプス"
  },
  {
    num: "n09229709",
    en: "bubble",
    ja: "バブル"
  },
  {
    num: "n09246464",
    en: "cliff",
    ja: "崖"
  },
  {
    num: "n09256479",
    en: "coral_reef",
    ja: "サンゴ礁"
  },
  {
    num: "n09288635",
    en: "geyser",
    ja: "間欠泉"
  },
  {
    num: "n09332890",
    en: "lakeside",
    ja: "湖畔"
  },
  {
    num: "n09399592",
    en: "promontory",
    ja: "岬"
  },
  {
    num: "n09421951",
    en: "sandbar",
    ja: "砂州"
  },
  {
    num: "n09428293",
    en: "seashore",
    ja: "海岸"
  },
  {
    num: "n09468604",
    en: "valley",
    ja: "谷"
  },
  {
    num: "n09472597",
    en: "volcano",
    ja: "火山"
  },
  {
    num: "n09835506",
    en: "ballplayer",
    ja: "野球選手"
  },
  {
    num: "n10148035",
    en: "groom",
    ja: "新郎"
  },
  {
    num: "n10565667",
    en: "scuba_diver",
    ja: "スキューバダイバー"
  },
  {
    num: "n11879895",
    en: "rapeseed",
    ja: "菜種"
  },
  {
    num: "n11939491",
    en: "daisy",
    ja: "デイジー"
  },
  {
    num: "n12057211",
    en: "yellow_lady's_slipper",
    ja: "蘭"
  },
  {
    num: "n12144580",
    en: "corn",
    ja: "トウモロコシ"
  },
  {
    num: "n12267677",
    en: "acorn",
    ja: "ドングリ"
  },
  {
    num: "n12620546",
    en: "hip",
    ja: "ヒップ"
  },
  {
    num: "n12768682",
    en: "buckeye",
    ja: "トチノキ"
  },
  {
    num: "n12985857",
    en: "coral_fungus",
    ja: "サンゴ菌"
  },
  {
    num: "n12998815",
    en: "agaric",
    ja: "ハラタケ"
  },
  {
    num: "n13037406",
    en: "gyromitra",
    ja: "シャグマアミガサタケ"
  },
  {
    num: "n13040303",
    en: "stinkhorn",
    ja: "スッポンタケ"
  },
  {
    num: "n13044778",
    en: "earthstar",
    ja: "ハラタケ"
  },
  {
    num: "n13052670",
    en: "hen-of-the-woods",
    ja: "舞茸"
  },
  {
    num: "n13054560",
    en: "bolete",
    ja: "きのこ"
  },
  {
    num: "n13133613",
    en: "ear",
    ja: "耳"
  },
  {
    num: "n15075141",
    en: "toilet_tissue",
    ja: "トイレットペーパー"
  }
];

// { "tench, Tinca tinca": "テンチ", ... }
const CLASS_NAME_MAP = new Map(
  [...Array(1000).keys()].map(i => [IMAGENET_CLASSES[i], JA_CLASSES[i].ja])
);
