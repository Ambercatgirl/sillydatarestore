let oreList = {
    '🐱': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✈️': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'THEY HIT THE PENTAGON😭😭😭', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💗': { 'decimalRarity': 1 / 150000000000, 'numRarity': 150000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A distant pulse resonates with your heart, synchronising its beat with yours...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❤️‍🔥': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A compassionate warmth envelops your heart in a fiery yet comforting embrace...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '😻': { 'decimalRarity': 1 / 5000000005, 'numRarity': 5000000005, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'holy shit is this a real cat??', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏝️': { 'decimalRarity': 1 / 275320000, 'numRarity': 275320000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Huge, beaming crystals emerge from the ground, creating an ephemeral atmosphere...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✨': { 'decimalRarity': 1 / 240800000, 'numRarity': 240800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'From every corner of festive depths, bursts of color erupt like fireworks against the velvet sky...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛄': { 'decimalRarity': 1 / 183640000, 'numRarity': 183640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🦋': { 'decimalRarity': 1 / 12240000000, 'numRarity': 12240000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Deep in the temporal limbo where the threads of time coincide, a mystical figure lay guarding their integrity...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌹': { 'noLuck': true, 'decimalRarity': 1 / 194308600, 'numRarity': 194308600, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the grass swaying in the breeze far above the caverns lay a beautiful gift from nature herself...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐢': { 'decimalRarity': 1 / 4000000000, 'numRarity': 4000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In a decelerating world, this armoured juggernaut dismisses the bindings of time...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐰': { 'decimalRarity': 1 / 17800000, 'numRarity': 17800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🐰 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🦾': { 'decimalRarity': 1 / 875000000, 'numRarity': 875000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You must have an arm of steel to have found this, go and try to use it for something more useful...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥇': { 'decimalRarity': 1 / 44444444444, 'numRarity': 44444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'turn the shower on PLEASE...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🩵': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🩵 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏳': { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏳ Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍂': { 'decimalRarity': 1 / 13500000000000, 'numRarity': 13500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍂 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🦿': { 'decimalRarity': 1 / 875000000000, 'numRarity': 875000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🦿 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👁‍🗨': { 'decimalRarity': 1 / 955200890000, 'numRarity': 955200890000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '👁‍🗨 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪫': { 'decimalRarity': 1 / 36000000000, 'numRarity': 36000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪫 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📛': { 'decimalRarity': 1 / 256000000000000, 'numRarity': 256000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📛 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌼': { 'decimalRarity': 1 / 9500000000, 'numRarity': 9500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌼 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏳️‍🌈': { 'decimalRarity': 1 / 2750000000000, 'numRarity': 2750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🏳️‍🌈 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎊': { 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎊 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },    
    '💧': { 'decimalRarity': 1 / 13000000000000000, 'numRarity': 13000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💧 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },    
    '❤️‍🩹': { 'decimalRarity': 1 / 155000000000, 'numRarity': 155000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❤️‍🩹 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌋': { 'decimalRarity': 1 / 5500000000000, 'numRarity': 5500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌋 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖋️': { 'decimalRarity': 1 / 165000000000, 'numRarity': 165000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖋️ Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛩️': { 'decimalRarity': 1 / 430000000000000, 'numRarity': 430000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛩️ Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌶️': { 'decimalRarity': 1 / 1337000000000, 'numRarity': 1337000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌶️ Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎥': { 'decimalRarity': 1 / 3780000000000, 'numRarity': 3780000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎥 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔓': { 'decimalRarity': 1 / 9900000000, 'numRarity': 9900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔓 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎖️': { 'decimalRarity': 1 / 7000000000, 'numRarity': 7000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Dedication may only get you so far, yet you've proven you're willing to complete the mission..", 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤫' : { 'decimalRarity': 1 / 13370000000, 'numRarity': 13370000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "TOP TEN TUTORIAL HOW TO MOG THANK FOR WATCHING...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖐' : { 'decimalRarity': 1 / 555555555555, 'numRarity': 555555555555, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "high five! no..? ok...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    'korosan' : { 'noLuck':true,'decimalRarity': 1 / 563563563, 'numRarity': 563563563, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Extreme pain tears through your body as your fingers are ripped off one by one...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, "hasImage":true, "src" : "media/ores/korosan.png", "oreName":"Korosan"},
    'luna' : { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You hear a soft meow behind you, followed by the soft crunching of kibble...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, "hasImage":true, "src" : "media/ores/luna.png", "oreName":"Luna"},
    'pixel' : { 'decimalRarity': 1 / 6000000000, 'numRarity': 6000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You seriously cannot be this unlucky... just craft it already...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, "hasImage":true, "src" : "media/ores/pixel.webp", "oreName":"Pixel"},
    'matrix' : { 'decimalRarity': 1 / 1011010000, 'numRarity': 1011010000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Caverns so silly, even the matrix is!...", 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, "hasImage":true, "src" : "media/ores/matrix.webp", "oreName":"Matrix"},
    'apatite' : { 'decimalRarity': 1 / 3250000000, 'numRarity': 3250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A bright,sparkly, and gleaming crystal illuminates the caverns as it slowly appears...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, "hasImage":true, "src" : "media/ores/apatite.webp", "oreName":"Apatite"},

    '🐞': { 'decimalRarity': 1 / 241200000000, 'numRarity': 241200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the keeper of time dons new wings, and sacrifices beauty for survivability...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍓': { 'decimalRarity': 1 / 560000000000, 'numRarity': 560000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A sweet aroma guides you to one of nature's finest delicacies...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌳': { 'decimalRarity': 1 / 9250000000, 'numRarity': 9250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'CAKECORE13...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💐': { 'decimalRarity': 1 / 3750000000, 'numRarity': 3750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "From the depths of nature's embrace, a delicate bloom unfurls, casting a fragrant aura upon its surroundings...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥬': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A leafy green surprise decides to join the vegetable party...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥗': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A state of alignment with the natural rhythms of life, sings a harmony that resonates from the inside out...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌪️': { 'decimalRarity': 1 / 247010000, 'numRarity': 247010000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the vortex descends from the heavens, the atmosphere trembles with its raw power...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌏': { 'decimalRarity': 1 / 213200000, 'numRarity': 213200000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Ancient energies resonate in the depths with the essence of primordial earth...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌲': { 'decimalRarity': 1 / 71000000, 'numRarity': 71000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌲 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎃': { 'decimalRarity': 1 / 69000000, 'numRarity': 69000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎃 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎍': { 'decimalRarity': 1 / 35000000, 'numRarity': 35000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎍 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎄': { 'decimalRarity': 1 / 12500000, 'numRarity': 12500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎄 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪵': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪵 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌻': { 'decimalRarity': 1 / 9500000, 'numRarity': 9500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌻 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍁': { 'decimalRarity': 1 / 8900000, 'numRarity': 8900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍁 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    '🥈': { 'decimalRarity': 1 / 444444444444, 'numRarity': 444444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'uh.. idk man your choice what you do with the shower...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🏯": { 'decimalRarity': 1 / 430000000000, 'numRarity': 430000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Past architecture laughs in the face of the present and its lack of grandeur...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏰': { 'decimalRarity': 1 / 8888888888, 'numRarity': 8888888888, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An essence of royalty graces the air of majestic opulence...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌇': { 'decimalRarity': 1 / 4300000000, 'numRarity': 4300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The city shines bright as the rising sun illuminates it...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥉': { 'decimalRarity': 1 / 444444444, 'numRarity': 444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'turn the shower off...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪞': { 'decimalRarity': 1 / 426800050, 'numRarity': 426800050, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You embrace the beauty of the grayscale world, where light and shadow dance in a timeless symphony of existence...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔩': { 'decimalRarity': 1 / 420836000, 'numRarity': 420836000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A piece to the puzzle of construction, the parts may be different sizes, but all are just as integral to the end result...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧲': { 'decimalRarity': 1 / 43500000, 'numRarity': 43500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧲 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪬': { 'decimalRarity': 1 / 37000000, 'numRarity': 37000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪬 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧨': { 'decimalRarity': 1 / 31500000, 'numRarity': 31500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧨 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔗': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔗 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪙': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪙 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗿': { 'decimalRarity': 1 / 12000000, 'numRarity': 12000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗿 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪚': { 'decimalRarity': 1 / 9600000, 'numRarity': 9600000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪚 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪜': { 'decimalRarity': 1 / 7950000, 'numRarity': 7950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪜 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    

    '🚬': { 'decimalRarity': 1 / 192000000000, 'numRarity': 192000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the air is unbreathable as plumes of toxic fumes overtake the atmosphere...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🦚": { 'decimalRarity': 1 / 245000000000, 'numRarity': 245000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through the mist, the brief glint of a hundred eyes freezes you dead in your tracks...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚿': { 'decimalRarity': 1 / 6000000000, 'numRarity': 6000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A refreshing cascade rejuvenates the area...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👁️': { 'decimalRarity': 1 / 1920000000, 'numRarity': 1920000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A cosmic anomaly of nothingness emerges past the boundaries of an unseen realm...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💸': { 'decimalRarity': 1 / 754000000, 'numRarity': 754000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Softly descending, celestial radiance brings serenity to the infinite depths...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌛': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Seconds pass, centuries pass, what's the difference? We are all mere specks of life in the concept of eternity...", 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧵': { 'decimalRarity': 1 / 201061929, 'numRarity': 201061929, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A geometrical marvel adds an element of mathematical elegance...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕯️': { 'decimalRarity': 1 / 62500000, 'numRarity': 62500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕯️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕋': { 'decimalRarity': 1 / 55000000, 'numRarity': 55000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕋 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎨': { 'decimalRarity': 1 / 44000000, 'numRarity': 44000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎨 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎴': { 'decimalRarity': 1 / 13450000, 'numRarity': 13450000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎴 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥽': { 'decimalRarity': 1 / 12350000, 'numRarity': 12350000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥽 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪄': { 'decimalRarity': 1 / 9460000, 'numRarity': 9460000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪄 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎭': { 'decimalRarity': 1 / 7650000, 'numRarity': 7650000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎭 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    

    '🪸': { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the seabed is impossible to access, as living stony vines had colonised the surface of the deep...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "⚓": { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A mass of iron dropped into the abyss and a chain is all that prevents an indefinite oceanic isolation..,', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐋': { 'decimalRarity': 1 / 8000000000, 'numRarity': 8000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the vast expanse of the ocean, where the horizon stretches endlessly and the waters teem with life, a beautiful whale emerges from the depths...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💫': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Celestial bodies collide illuminating the depths with cosmic enchantment...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪩': { 'decimalRarity': 1 / 999999999, 'numRarity': 999999999, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your vision expands as your head spikes with an adrenaline rush...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👿': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Cosmic energies radiate from the depths, casting an enigmatic darkness...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌀': { 'decimalRarity': 1 / 618000000, 'numRarity': 618000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A giant celestial body emerges, releasing cosmic energy that absorbs nearby quasars...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔱': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔱 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👑': { 'decimalRarity': 1 / 65000000, 'numRarity': 65000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '👑 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐟': { 'decimalRarity': 1 / 26000000, 'numRarity': 26000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🐟 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🫧': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🫧 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤿': { 'decimalRarity': 1 / 8670000, 'numRarity': 8670000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤿 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎣': { 'decimalRarity': 1 / 8230000, 'numRarity': 8230000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎣 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛵': { 'decimalRarity': 1 / 7895000, 'numRarity': 7895000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛵ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    

    '🪦': { 'decimalRarity': 1 / 386500000000, 'numRarity': 386500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, society is linked between the dead and the living, as humans and spectres live as one...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🪤": { 'decimalRarity': 1 / 800000000000, 'numRarity': 800000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An extermination held through a siege, as success is just one stakeout away...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏔️': { 'decimalRarity': 1 / 5500000000, 'numRarity': 5500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A tear comes to your eye as you gaze upon a beautiful landscape...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌈': { 'decimalRarity': 1 / 2750000000, 'numRarity': 2750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vivid spectrum bursts forth, painting the surroundings with radiant color...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧊': { 'decimalRarity': 1 / 583000000, 'numRarity': 583000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A frigid touch brings an icy embrace from the depths...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❄️': { 'decimalRarity': 1 / 386500000, 'numRarity': 386500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The world around you takes on a surreal quality as if draped in a cloak of frozen silence...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💎': { 'decimalRarity': 1 / 170000000, 'numRarity': 170000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Unearthed from the abyss, a dazzling gemstone emerges, casting a mesmerizing glow upon you...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☄️': { 'decimalRarity': 1 / 72500000, 'numRarity': 72500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☄️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔮': { 'decimalRarity': 1 / 60000000, 'numRarity': 60000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔋': { 'decimalRarity': 1 / 36000000, 'numRarity': 36000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔋 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💍': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💍 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥏': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥏 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚜️': { 'decimalRarity': 1 / 6250000, 'numRarity': 6250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚜️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💠': { 'decimalRarity': 1 / 6000000, 'numRarity': 6000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💠 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    

    '🚨': { 'decimalRarity': 1 / 666666666666, 'numRarity': 666666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, those who survived are forced into hiding as the world is overcome with plague...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🤖": { 'decimalRarity': 1 / 640000000000, 'numRarity': 640000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Come to think of it, robots and humans aren't so unalike.. their wires for our veins, their electric current for our bloodstream and their CPU for our brains...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚠️': { 'decimalRarity': 1 / 6666666666, 'numRarity': 6666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'EXTREMELY LOUD INCORRECT BUZZER...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎆': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A sparkling burst appears as dazzling fireworks lights up the scene...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧀': { 'decimalRarity': 1 / 618000001, 'numRarity': 618000001, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the scent envelops you, your mouth may water in anticipation of the delectable flavors that await...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌌': { 'decimalRarity': 1 / 550000000, 'numRarity': 550000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An infinite collection of galaxies converge creating an enchanting radiance...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥀': { 'decimalRarity': 1 / 538000000, 'numRarity': 538000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "With bated breath, you stand paralyzed, engulfed by the suffocating grip of fear as the terrible beast's gaze falls upon you...", 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎇': { 'decimalRarity': 1 / 67500000, 'numRarity': 67500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎇 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔳': { 'decimalRarity': 1 / 46000000, 'numRarity': 46000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔳 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏹️': { 'decimalRarity': 1 / 29000000, 'numRarity': 29000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏹️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧩': { 'decimalRarity': 1 / 14500000, 'numRarity': 14500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧩 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔔': { 'decimalRarity': 1 / 12250000, 'numRarity': 12250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔔 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚗️': { 'decimalRarity': 1 / 9750000, 'numRarity': 9750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚗️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧪': { 'decimalRarity': 1 / 7500000, 'numRarity': 7500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧪 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    

    '🍖': { 'decimalRarity': 1 / 160000000000, 'numRarity': 160000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the desert thrived, and is the most habitable environment in this world...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🦴": { 'decimalRarity': 1 / 175000000000, 'numRarity': 175000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Deep within the arid sands lay fossils of an olden age, one can only wonder what beasts roamed the earth back then...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐪': { 'decimalRarity': 1 / 7800000000, 'numRarity': 7800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the midst of a violent sandstorm, an incredibly durable being treks the desolation of a once fruitful seabed...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏵️': { 'decimalRarity': 1 / 2600000000, 'numRarity': 2600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A flower imparts a fleeting beauty to the terrain...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪐': { 'decimalRarity': 1 / 709000750, 'numRarity': 709000750, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Like tendrils of gentle embrace, a serene mist glides through the air...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💥': { 'decimalRarity': 1 / 375000000, 'numRarity': 375000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Chaos reigns supreme as the forces of destruction sweep across the land...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔥': { 'decimalRarity': 1 / 160000000, 'numRarity': 160000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'oh wow 🔥🔥🔥...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔆': { 'decimalRarity': 1 / 75000000, 'numRarity': 75000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔆 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⭐': { 'decimalRarity': 1 / 70600600, 'numRarity': 70600600, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⭐ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎀': { 'decimalRarity': 1 / 31000000, 'numRarity': 31000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎀 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗡️': { 'decimalRarity': 1 / 13000000, 'numRarity': 13000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗡️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📟': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📟 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚱️': { 'decimalRarity': 1 / 7467000, 'numRarity': 7467000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚱️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖍️': { 'decimalRarity': 1 / 6800000, 'numRarity': 6800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖍️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    

    '📜': { 'decimalRarity': 1 / 200000000000, 'numRarity': 200000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, words of the ancients are heeded, and the world is given a second chance...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🎩": { 'decimalRarity': 1 / 300500000000, 'numRarity': 300500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'wanna see a magic trick ^w^...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💵': { 'decimalRarity': 1 / 8900000000, 'numRarity': 8900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'MONEY MONEY KACHINGGGG JACKPOT...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪅': { 'decimalRarity': 1 / 3250000000, 'numRarity': 3250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Effervescently, festive confetti materializes bringing bursts of celebratory charm to the surroundings...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👀': { 'decimalRarity': 1 / 955200890, 'numRarity': 955200890, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In this tumultuous symphony of the senses, time loses its meaning, and everything becomes a mere illusion...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌟': { 'decimalRarity': 1 / 257280000, 'numRarity': 257280000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the far reaches of outer space, a gleaming light catches your attention...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📝': { 'decimalRarity': 1 / 200000000, 'numRarity': 200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In this wondrous realm, the lines between fantasy and reality blur...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌚': { 'decimalRarity': 1 / 52000000, 'numRarity': 52000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌚ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏆': { 'decimalRarity': 1 / 38000000, 'numRarity': 38000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🏆 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗜️': { 'decimalRarity': 1 / 42000000, 'numRarity': 42000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗜️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎲': { 'decimalRarity': 1 / 7777777, 'numRarity': 7777777, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎲 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✂️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✂️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🃏': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🃏 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚙️': { 'decimalRarity': 1 / 5000000, 'numRarity': 5000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚙️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🐸': { 'decimalRarity': 1 / 900000000000, 'numRarity': 900000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "hehe.. ribbit...", 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🫶': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A heartfelt gesture beckons you closer, both physically and mentally...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎉': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'YIPPEEEE YIPEYIPEYIPEYIPE YIIIPPPPEEEEEEEEEE!!!...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧌': { 'decimalRarity': 1 / 696969696969, 'numRarity': 696969696969, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'WHAT ARE YOU DOING IN MY SWAMP?!!', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♾️': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'life goes on and on and on and on and on and on and on and on...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💅': { 'decimalRarity': 1 / 11201200200, 'numRarity': 11201200200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'GURLLLLLLL NO WAYYYYYYYY OMGGGGGGGGG...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '😁': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Nothing bad was ever in this layer...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪢': { 'decimalRarity': 1 / 8181818181, 'numRarity': 8181818181, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Halfheartedly sauntering into existence, a lackluster piece of twine makes a feeble attempt at garnering attention, or not...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🪽': { 'decimalRarity': 1 / 260000000000, 'numRarity': 260000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The wings of glory travelled with you to this world, but are now free to roam the skies...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚡': { 'decimalRarity': 1 / 96000000000, 'numRarity': 96000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Bestowed upon you by the Stormseer himself, as a congratulations for your electrified finds..', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍃': { 'decimalRarity': 1 / 13500000000, 'numRarity': 13500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Leaves of green elegantly glide through the sky to wherever their aerial current leads...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪶': { 'decimalRarity': 1 / 2060000000, 'numRarity': 2060000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Dancing on the air, this feather is one of the many as part of something much greater...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌦️': { 'decimalRarity': 1 / 275000000, 'numRarity': 275000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the storm dissipates, a bright light shines upon you...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌩️': { 'decimalRarity': 1 / 175000000, 'numRarity': 175000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The sky darkens, yet beautiful streaks of electrical light zap the ground below...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛈️': { 'decimalRarity': 1 / 74000000, 'numRarity': 74000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛈️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪁': { 'decimalRarity': 1 / 45500000, 'numRarity': 45500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪁 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪂': { 'decimalRarity': 1 / 30000000, 'numRarity': 30000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪂 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌨️': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌨️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌥️': { 'decimalRarity': 1 / 14400000, 'numRarity': 14400000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌥️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌤️': { 'decimalRarity': 1 / 7800000, 'numRarity': 7800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌤️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌧️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌧️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎐': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎐 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🔫': { 'decimalRarity': 1 / 615000000000, 'numRarity': 615000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your nerves spike to an all time high as your body starts to tremble in fear...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👾': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A wave of nostalgia sweeps over you as 8-bit sound effects take you back to where it all began...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏹': { 'decimalRarity': 1 / 4210000000, 'numRarity': 4210000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A bow fires an arrow, whistling through the wind as it's poised to pierce its target...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💣': { 'decimalRarity': 1 / 771100000, 'numRarity': 771100000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Fuse lighted, explosive placed, all that's left is to wait for chaos and catastrophe to ensue...", 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔨': { 'decimalRarity': 1 / 540000000, 'numRarity': 540000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Where scents of sawdust mingled with the sharp tang of metal, there lie a beautiful hammer...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪓': { 'decimalRarity': 1 / 82000000, 'numRarity': 82000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪓 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪃': { 'decimalRarity': 1 / 12210000, 'numRarity': 12210000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪃 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛡️': { 'decimalRarity': 1 / 9980000, 'numRarity': 9980000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🛡️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🗝️': { 'decimalRarity': 1 / 420000000000, 'numRarity': 420000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You thought the key to this world was special? Just you wait until this one finds its designated lock...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪝': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As graceful as a key may look, breaking a lock with this is infinitely cooler...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪡': { 'decimalRarity': 1 / 23000000000, 'numRarity': 23000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Why did you make a lacklustre key to this world when you could've just lockpicked it? Minimal brain cells I swear...", 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛎️': { 'decimalRarity': 1 / 4730000000, 'numRarity': 4730000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A timeless ringing severes your hearing...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚧': { 'decimalRarity': 1 / 1100000000, 'numRarity': 1100000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A feeling of authorisation stops you in your tracks, giving you the inclination to turn back...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛓️': { 'decimalRarity': 1 / 345000000, 'numRarity': 345000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An endless intertwining of metal keeps the world safe from otherworldly threats...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔏': { 'decimalRarity': 1 / 243800000, 'numRarity': 243800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An unknown mystery is revealed as a key is summoned to you...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖇️': { 'decimalRarity': 1 / 31337000, 'numRarity': 31337000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖇️ Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔑': { 'decimalRarity': 1 / 12700000, 'numRarity': 12700000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔑 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔒': { 'decimalRarity': 1 / 9900000, 'numRarity': 9900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔒 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '💰': { 'decimalRarity': 1 / 857000000000, 'numRarity': 857000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A silky bag showers you with money, scattering riches all around...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "💞": { 'decimalRarity': 1 / 96300000000, 'numRarity': 96300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Though it was thought impossible, an intertwining aura of love blesses two lucky individuals...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "💘": { 'decimalRarity': 1 / 35000000000, 'numRarity': 35000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A deep, sharp sensation pierces your heart, filling your mind with overwhelming thoughts of love...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚽': { 'decimalRarity': 1 / 20240000000, 'numRarity': 20240000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Don't even THINK about it...", 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📽️': { 'decimalRarity': 1 / 3780000000, 'numRarity': 3780000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You're alone, and yet you feel the eyes of millions stare upon you through a peculiar lens...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧂': { 'decimalRarity': 1 / 1337000000, 'numRarity': 1337000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "As if on the seaside, the air tastes of salt, yet there's the faint sound of yelling and profanity in the distance...", 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔪': { 'decimalRarity': 1 / 632000000, 'numRarity': 632000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Life is a beautiful thing, and all it takes is a sharp slash of steel to take...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💔': { 'decimalRarity': 1 / 155000000, 'numRarity': 155000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💔 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍆': { 'decimalRarity': 1 / 69696969, 'numRarity': 69696969, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍆 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖱️': { 'decimalRarity': 1 / 11101000, 'numRarity': 11101000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖱️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌨️': { 'decimalRarity': 1 / 10010000, 'numRarity': 10010000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌨️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💻': { 'decimalRarity': 1 / 6320000, 'numRarity': 6320000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💻 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '⚖️': { 'decimalRarity': 1 / 123321000000, 'numRarity': 123321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You feel your fate hang in the balance, as every one of your actions are weighed against one another...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌱': { 'decimalRarity': 1 / 83000000000, 'numRarity': 83000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Did you know that the mitochondria is the powerhouse of the cell?...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎓': { 'decimalRarity': 1 / 7900000000, 'numRarity': 7900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An influx of knowledge passes you by as you reap the reward of years of turmoil...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📍': { 'decimalRarity': 1 / 4321000000, 'numRarity': 4321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Mark after mark, record after record, the earth below unfolds its interior on paper before you...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📌': { 'decimalRarity': 1 / 1230000000, 'numRarity': 1230000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You briefly see the mine in all its splendor, as if all its intricacies had been mapped to a tee...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔎': { 'decimalRarity': 1 / 725000000, 'numRarity': 725000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through the glass, you gain a feeling of omniscience as your vision achieves clarity...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖊️': { 'decimalRarity': 1 / 165000000, 'numRarity': 165000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A mystical object of creativity draws in a reality of imagination...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📚': { 'decimalRarity': 1 / 48100000, 'numRarity': 48100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📚 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📐': { 'decimalRarity': 1 / 34000000, 'numRarity': 34000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📐 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📖': { 'decimalRarity': 1 / 16000000, 'numRarity': 16000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📖 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧠': { 'decimalRarity': 1 / 15500000, 'numRarity': 15500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧠 Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✏️': { 'decimalRarity': 1 / 8200000, 'numRarity': 8200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✏️ Has Spawned!', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🩸': { 'decimalRarity': 1 / 13000000000000, 'numRarity': 13000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "So be it.. take your blood trophy..! You.. are truly the bane of this world aren't you...- <br>May.. the clover be our final saving grace... from the wielder of the void.....-", 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♨️': { 'decimalRarity': 1 / 6700000000000, 'numRarity': 6700000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "..I see what you want. I'm in no state to object.. and yet I will do everything in my power to make your life hell...", 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚫': { 'decimalRarity': 1 / 1660000000000, 'numRarity': 1660000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "That's not.. possible.. how? What do you want from me? I.. don't have anything more to offer you...", 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔈': { 'decimalRarity': 1 / 666666666666, 'numRarity': 666666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "As you wish. May my silence deafen you further as your search runs dry forevermore...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛔': { 'decimalRarity': 1 / 256000000000, 'numRarity': 256000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Another breach?! What are you!? You are no regular entity, perhaps I must tend to you personally...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💢': { 'decimalRarity': 1 / 26000000000, 'numRarity': 26000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Why do you persist?! What are you trying to prove!? You're enraging me.. and I will make you suffer...", 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔇': { 'decimalRarity': 1 / 3300000000, 'numRarity': 3300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Do not speak further, for I know your determination will falter...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛑': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Curious.. very curious.. you found what you came for, now leave...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⭕': { 'decimalRarity': 1 / 600000000, 'numRarity': 600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You're still here? Very well. Do not say you were never warned...", 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔕': { 'decimalRarity': 1 / 225000000, 'numRarity': 225000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You shouldn't be here. Turn back while you still can...", 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
   
    '✡️': { 'decimalRarity': 1 / 6666666, 'numRarity': 6666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'In a magical zone where all things intertwine, the star of creation itself shines bright...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇮🇴': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇻🇬': { 'decimalRarity': 1 / 3130500, 'numRarity': 3130500, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇨🇽': { 'decimalRarity': 1 / 14020000, 'numRarity': 14020000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇯🇪': { 'decimalRarity': 1 / 92890000, 'numRarity': 92890000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇲🇵': { 'decimalRarity': 1 / 495510000, 'numRarity': 495510000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇹🇰': { 'decimalRarity': 1 / 14110000000, 'numRarity': 14110000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇻🇮': { 'decimalRarity': 1 / 74177600000, 'numRarity': 74177600000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇲🇴': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    
    '🇦🇸': { 'decimalRarity': 1 / 44270000, 'numRarity': 44270000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇨🇰': { 'decimalRarity': 1 / 174600000, 'numRarity': 174600000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇬🇵': { 'decimalRarity': 1 / 395700000, 'numRarity': 395700000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇲🇶': { 'decimalRarity': 1 / 3764000000, 'numRarity': 3764000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇵🇳': { 'decimalRarity': 1 / 6700000000, 'numRarity': 6700000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇹🇨': { 'decimalRarity': 1 / 45700000000, 'numRarity': 45700000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇨🇨': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    
    '🇦🇮': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇨🇼': { 'decimalRarity': 1 / 17500000, 'numRarity': 17500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇬🇺': { 'decimalRarity': 1 / 171000000, 'numRarity': 171000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇾🇹': { 'decimalRarity': 1 / 270000000, 'numRarity': 270000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇷🇪': { 'decimalRarity': 1 / 8590000000, 'numRarity': 8590000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇼🇫': { 'decimalRarity': 1 / 15200000000, 'numRarity': 15200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},

    '🇬🇬': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇦🇼': { 'decimalRarity': 1 / 1640000, 'numRarity': 1640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇮🇪': { 'decimalRarity': 1 / 3628000, 'numRarity': 3628000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇲🇸': { 'decimalRarity': 1 / 63788000, 'numRarity': 63788000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇬🇱': { 'decimalRarity': 1 / 269220000, 'numRarity': 269220000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇧🇱': { 'decimalRarity': 1 / 9131000000, 'numRarity': 9131000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},

    '🇦🇽': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇧🇲': { 'decimalRarity': 1 / 6350000, 'numRarity': 6350000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇬🇫': { 'decimalRarity': 1 / 29400000, 'numRarity': 29400000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇬🇮': { 'decimalRarity': 1 / 32649000, 'numRarity': 32649000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇳🇺': { 'decimalRarity': 1 / 162000000, 'numRarity': 162000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇸🇭': { 'decimalRarity': 1 / 5600000000, 'numRarity': 5600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇧🇶': { 'decimalRarity': 1 / 42424242424, 'numRarity': 42424242424, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},

    '🇫🇴': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇰🇾': { 'decimalRarity': 1 / 6870000, 'numRarity': 6870000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇫🇰': { 'decimalRarity': 1 / 53090000, 'numRarity': 53090000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇳🇫': { 'decimalRarity': 1 / 216900000, 'numRarity': 216900000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇬🇸': { 'decimalRarity': 1 / 819800850, 'numRarity': 819800850, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇵🇲': { 'decimalRarity': 1 / 5888888888, 'numRarity': 5888888888, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇮🇲': { 'decimalRarity': 1 / 84500000000, 'numRarity': 84500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},
    '🇭🇰': { 'decimalRarity': 1 / 734000000000, 'numRarity': 734000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0},

    '⚕️': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Gently materializing, a healing symbol radiates a serene energy, offering tranquility...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌙': { 'decimalRarity': 1 / 26262626262, 'numRarity': 26262626262, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Lunar rays of light dance upon your iris, captivating your adoring gaze...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪔': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'A lamp illuminates everything around you...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎷': { 'decimalRarity': 1 / 2500000000, 'numRarity': 2500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'A jazzed melody fills the room with rhythmic notes...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧫': { 'decimalRarity': 1 / 4000000000, 'numRarity': 4000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Under the watchful gaze, the bacteria undergo a myriad of transformations...', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🩺': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The heartbeats grow louder...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌡️': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'As you stand amid an increasingly sweltering atmosphere, the air grows hotter and hotter...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛸': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The sky becomes a canvas of extraterrestrial wonder as aliens fly everywhere...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪘': { 'decimalRarity': 1 / 500000000, 'numRarity': 500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The bass of drums grow increasingly louder and louder...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💱': { 'decimalRarity': 1 / 180000000, 'numRarity': 180000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Essences of exchange and trade fall through the depths, filling the cosmos with currency...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💊': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Taking this will for sure get you dizzy...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍄': { 'decimalRarity': 1 / 250000000, 'numRarity': 250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'OH MY GOD ITS THE LAST OF US PART 2024 SOMEONE SAVE US...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥁': { 'decimalRarity': 1 / 100000000, 'numRarity': 100000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The drums of liberation echo closer and closer...', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕸️': { 'decimalRarity': 1 / 40000000, 'numRarity': 40000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'As you struggle against the silken embrace of the web, you feel its delicate fibers tightening around you...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔭': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Unveiling cosmic wonders, an unknown gadget reveals the unseen...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪇': { 'decimalRarity': 1 / 20000000, 'numRarity': 20000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Rhythmic and lively beats infuse the air with a festive atmosphere...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧬': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Mysteriously emerging, a double-helix subtly unveils the secrets encoded within the fabric of existence...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📡': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '📡 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎹': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🎹 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💉': { 'decimalRarity': 1 / 17500000, 'numRarity': 17500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '💉 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍥': { 'decimalRarity': 1 / 27500000, 'numRarity': 27500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🍥 Has Spawned!', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    //'' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    //🇳🇬 🇪🇹 🇪🇬 🇨🇩 🇹🇿 🇿🇦 🇰🇪 🇺🇬 🇸🇩 🇩🇿 🇸🇨
    '🇸🇨' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇩🇿' : { 'decimalRarity': 1 / 1000100, 'numRarity': 1000100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇸🇩' : { 'decimalRarity': 1 / 1202020, 'numRarity': 1202020, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇺🇬' : { 'decimalRarity': 1 / 6789000, 'numRarity': 6789000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇰🇪' : { 'decimalRarity': 1 / 7457000, 'numRarity': 7457000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇿🇦' : { 'decimalRarity': 1 / 8673000, 'numRarity': 8673000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇹🇿' : { 'decimalRarity': 1 / 9001400, 'numRarity': 9001400, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇨🇩' : { 'decimalRarity': 1 / 14675000, 'numRarity': 14675000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇪🇬' : { 'decimalRarity': 1 / 17900250, 'numRarity': 17900250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇪🇹' : { 'decimalRarity': 1 / 20780970, 'numRarity': 20780970, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇳🇬' : { 'decimalRarity': 1 / 24000000, 'numRarity': 24000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    //🇨🇳 🇮🇳 🇮🇩 🇵🇰 🇧🇩 🇯🇵 🇵🇭 🇻🇳 🇮🇷 🇹🇷 🇧🇳
    '🇧🇳' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇹🇷' : { 'decimalRarity': 1 / 26870000, 'numRarity': 26870000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇮🇷' : { 'decimalRarity': 1 / 33568900, 'numRarity': 33568900, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇻🇳' : { 'decimalRarity': 1 / 39832400, 'numRarity': 39832400, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇭' : { 'decimalRarity': 1 / 46630980, 'numRarity': 46630980, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇯🇵' : { 'decimalRarity': 1 / 53900000, 'numRarity': 53900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇧🇩' : { 'decimalRarity': 1 / 58230475, 'numRarity': 58230475, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇰' : { 'decimalRarity': 1 / 74500670, 'numRarity': 74500670, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇮🇩' : { 'decimalRarity': 1 / 95675090, 'numRarity': 95675090, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇮🇳' : { 'decimalRarity': 1 / 114360780, 'numRarity': 114360780, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇨🇳' : { 'decimalRarity': 1 / 135600980, 'numRarity': 135600980, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    //🇺🇸 🇲🇽 🇨🇦 🇬🇹 🇭🇹 🇨🇺 🇩🇴 🇭🇳 🇳🇮 🇸🇻 🇰🇳
    //160m - 1.5b
    '🇰🇳' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇸🇻' : { 'decimalRarity': 1 / 267890000, 'numRarity': 267890000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇳🇮' : { 'decimalRarity': 1 / 376543900, 'numRarity': 376543900, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇭🇳' : { 'decimalRarity': 1 / 490870430, 'numRarity': 490870430, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇩🇴' : { 'decimalRarity': 1 / 790875100, 'numRarity': 790875100, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇨🇺' : { 'decimalRarity': 1 / 955600700, 'numRarity': 955600700, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇭🇹' : { 'decimalRarity': 1 / 1000250250, 'numRarity': 1000250250, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇬🇹' : { 'decimalRarity': 1 / 1057890700, 'numRarity': 1057890700, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇨🇦' : { 'decimalRarity': 1 / 1176943540, 'numRarity': 1176943540, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇲🇽' : { 'decimalRarity': 1 / 1245965270, 'numRarity': 1245965270, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇺🇸' : { 'decimalRarity': 1 / 1489009500, 'numRarity': 1489009500, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
   
    //🇷🇺 🇩🇪 🇬🇧 🇫🇷 🇮🇹 🇪🇸 🇵🇱 🇺🇦 🇷🇴 🇳🇱 🇻🇦
    //1.5b - 5b
    '🇻🇦' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇳🇱' : { 'decimalRarity': 1 / 1560943200, 'numRarity': 1560943200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇷🇴' : { 'decimalRarity': 1 / 1890230560, 'numRarity': 1890230560, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇺🇦' : { 'decimalRarity': 1 / 2130400290, 'numRarity': 2130400290, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇱' : { 'decimalRarity': 1 / 2468900300, 'numRarity': 2468900300, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇪🇸' : { 'decimalRarity': 1 / 2678234560, 'numRarity': 2678234560, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇮🇹' : { 'decimalRarity': 1 / 2900000120, 'numRarity': 2900000120, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇫🇷' : { 'decimalRarity': 1 / 3260870600, 'numRarity': 3260870600, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇬🇧' : { 'decimalRarity': 1 / 3790234090, 'numRarity': 3790234090, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇩🇪' : { 'decimalRarity': 1 / 4230543650, 'numRarity': 4230543650, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇷🇺' : { 'decimalRarity': 1 / 4783285008, 'numRarity': 4783285008, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    //🇧🇷 🇨🇴 🇦🇷 🇵🇪 🇻🇪 🇨🇱 🇪🇨 🇧🇴 🇵🇾 🇺🇾 🇸🇷
    //5b - 100b
    '🇸🇷' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇺🇾' : { 'decimalRarity': 1 / 7236954010, 'numRarity': 7236954010, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇾' : { 'decimalRarity': 1 / 11256256256, 'numRarity': 11256256256, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇧🇴' : { 'decimalRarity': 1 / 21455875000, 'numRarity': 21455875000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇪🇨' : { 'decimalRarity': 1 / 29599600000, 'numRarity': 29599600000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇨🇱' : { 'decimalRarity': 1 / 34100200300, 'numRarity': 34100200300, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇻🇪' : { 'decimalRarity': 1 / 44500125090, 'numRarity': 44500125090, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇪' : { 'decimalRarity': 1 / 57145672606, 'numRarity': 57145672606, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇦🇷' : { 'decimalRarity': 1 / 68154633000, 'numRarity': 68154633000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇨🇴' : { 'decimalRarity': 1 / 79233400050, 'numRarity': 79233400050, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇧🇷' : { 'decimalRarity': 1 / 92350777000, 'numRarity': 92350777000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    //🇦🇺 🇵🇬 🇳🇿 🇫🇯 🇸🇧 🇫🇲 🇻🇺 🇵🇫 🇳🇨 🇼🇸 🇹🇻
    //100b+
    '🇹🇻' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇼🇸' : { 'decimalRarity': 1 / 180245870000, 'numRarity': 180245870000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇳🇨' : { 'decimalRarity': 1 / 246780900230, 'numRarity': 246780900230, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇫' : { 'decimalRarity': 1 / 467900875030, 'numRarity': 467900875030, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇻🇺' : { 'decimalRarity': 1 / 590600700800, 'numRarity': 590600700800, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇫🇲' : { 'decimalRarity': 1 / 687500020007, 'numRarity': 687500020007, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇸🇧' : { 'decimalRarity': 1 / 754478890340, 'numRarity': 754478890340, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇫🇯' : { 'decimalRarity': 1 / 8999054000250, 'numRarity': 899905400025, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇳🇿' : { 'decimalRarity': 1 / 1350883247005, 'numRarity': 1350883247005, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇵🇬' : { 'decimalRarity': 1 / 2690225460780, 'numRarity': 2690225460780, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🇦🇺' : { 'decimalRarity': 1 / 5200540900510, 'numRarity': 5200540900510, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    //🏳️‍⚧️ 🇺🇳 
    '🇺🇳' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏁': { 'decimalRarity': 1 / 25000000000000, 'numRarity': 25000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏳️‍⚧️' : { 'decimalRarity': 1 / 500000000000000, 'numRarity': 500000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    '🍀': { 'decimalRarity': 1 / 234000000000000, 'numRarity': 234000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'This is it..? The symbol of luck itself, a simple four-leafed clover..?', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☘️': { 'decimalRarity': 1 / 12300000000000, 'numRarity': 12300000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A peculiar three-leafed clover.. there must be more to this strange aura it emanates, this feels.. incomplete...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🤍': { 'decimalRarity': 1 / 2000000, 'numRarity': 2000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤍 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖤': { 'decimalRarity': 1 / 1750000, 'numRarity': 1750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖤 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤎': { 'decimalRarity': 1 / 1500000, 'numRarity': 1500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤎 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💜': { 'decimalRarity': 1 / 1250000, 'numRarity': 1250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💜 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❤️': { 'decimalRarity': 1 / 1000000, 'numRarity': 1000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❤️ Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧡': { 'decimalRarity': 1 / 950000, 'numRarity': 950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧡 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💛': { 'decimalRarity': 1 / 900000, 'numRarity': 900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💛 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💙': { 'decimalRarity': 1 / 800000, 'numRarity': 800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💙 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💚': { 'decimalRarity': 1 / 750000, 'numRarity': 750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💚 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚫': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟤': { 'decimalRarity': 1 / 90, 'numRarity': 90, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟣': { 'decimalRarity': 1 / 80, 'numRarity': 80, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔴': { 'decimalRarity': 1 / 70, 'numRarity': 70, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟠': { 'decimalRarity': 1 / 60, 'numRarity': 60, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟡': { 'decimalRarity': 1 / 55, 'numRarity': 55, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔵': { 'decimalRarity': 1 / 50, 'numRarity': 50, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟢': { 'decimalRarity': 1 / 45, 'numRarity': 45, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟪': { 'decimalRarity': 1 / 40, 'numRarity': 40, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟥': { 'decimalRarity': 1 / 35, 'numRarity': 35, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟧': { 'decimalRarity': 1 / 30, 'numRarity': 30, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },

    '❔' : { 'noLuck': true, 'decimalRarity': 1 / 1111111111, 'numRarity': 1111111111, 'hasLog': true, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': ':trol:', 'oreTier': 'Interstellar', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📘': { 'decimalRarity': 1 / 1900000, 'numRarity': 1900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📘 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📙': { 'decimalRarity': 1 / 1500500, 'numRarity': 1500500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📙 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📕': { 'decimalRarity': 1 / 1230560, 'numRarity': 1230560, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📕 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📗': { 'decimalRarity': 1 / 854000, 'numRarity': 854000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📗 Has Spawned!', 'oreTier': 'Antique', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏏️': { 'decimalRarity': 1 / 300000, 'numRarity': 300000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '▶️': { 'decimalRarity': 1 / 250000, 'numRarity': 250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏸️': { 'decimalRarity': 1 / 200000, 'numRarity': 200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏯️': { 'decimalRarity': 1 / 175000, 'numRarity': 175000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏺️': { 'decimalRarity': 1 / 100000, 'numRarity': 100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏭️': { 'decimalRarity': 1 / 90000, 'numRarity': 90000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏮️': { 'decimalRarity': 1 / 75000, 'numRarity': 75000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏩': { 'decimalRarity': 1 / 70000, 'numRarity': 70000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏪': { 'decimalRarity': 1 / 60000, 'numRarity': 60000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏬': { 'decimalRarity': 1 / 50000, 'numRarity': 50000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏫': { 'decimalRarity': 1 / 25000, 'numRarity': 25000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✴️': { 'noLuck': true, 'decimalRarity': 1 / 5000, 'numRarity': 5000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '◀️': { 'decimalRarity': 1 / 20000, 'numRarity': 20000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔼': { 'decimalRarity': 1 / 17500, 'numRarity': 17500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔽': { 'decimalRarity': 1 / 15000, 'numRarity': 15000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '➡️': { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↖️': { 'decimalRarity': 1 / 9000, 'numRarity': 9000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↘️': { 'decimalRarity': 1 / 5000, 'numRarity': 5000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬇️': { 'decimalRarity': 1 / 3000, 'numRarity': 3000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬆️': { 'decimalRarity': 1 / 2500, 'numRarity': 2500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬅️': { 'decimalRarity': 1 / 1750, 'numRarity': 1750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↪️': { 'decimalRarity': 1 / 1500, 'numRarity': 1500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↩️': { 'decimalRarity': 1 / 1250, 'numRarity': 1250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⤴️': { 'decimalRarity': 1 / 1000, 'numRarity': 1000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⤵️': { 'decimalRarity': 1 / 750, 'numRarity': 750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔀': { 'decimalRarity': 1 / 500, 'numRarity': 500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔁': { 'decimalRarity': 1 / 300, 'numRarity': 300, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔂': { 'decimalRarity': 1 / 250, 'numRarity': 250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔄': { 'decimalRarity': 1 / 175, 'numRarity': 175, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔃': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🟫': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧱': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌫️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌊': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪨': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☢️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📰': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎂': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪈': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🦠': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☣️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❓': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☁️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📺': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚪': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌐': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♟️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✖️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❌': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕳️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    'bitcoin' : { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'erm', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    'Nyerd' : { 'decimalRarity': 1 / 450000000000, 'numRarity': 450000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "you're a NYERD!!!", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/NYERD.webp", "oreName" : "nyerd"},
    'Fox' : { 'decimalRarity': 1 / 200000000000, 'numRarity': 200000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'what the fox is going on here!!', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/STUPID_FOX.webp", "oreName" : "fox"},
    'Bismuth' : { 'decimalRarity': 1 / 830209019000, 'numRarity': 830209019000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vibrant mineral is barely detected due to its nearly unnoticeable α-decay...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/bismuth.png", "oreName" : "Bismuth"},
    'variousMinerals' : { 'decimalRarity': 1 / 2048000000000, 'numRarity': 2048000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'bro casually just found the clump of various minerals 🤑🤑...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/clump_of_various_minerals.webp", "oreName" : "Various Minerals"},
    'watermelonDiamond' : { 'decimalRarity': 1 / 170000000000, 'numRarity': 170000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💎 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/diamondcelestial.png", "oreName" : "Watermelon Diamond"},
    'godOfTheMine' : { 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'yo pickaxe sucks, mine harder...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/god-export.png", "oreName" : "God of The Mine"},
    'mushroomCats' : { 'decimalRarity': 1 / 14140000000000, 'numRarity': 14140000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the wild, many poisonous things can ruin your life...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/highcats.png", "oreName" : "Mushroom Cats"},
    'jellyfish' : { 'decimalRarity': 1 / 600000000000, 'numRarity': 600000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/jellyfish.png", "oreName" : "Magical Jellyfish"},
    'kaleidoscope' : { 'decimalRarity': 1 / 9180274130450, 'numRarity': 9180274130450, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your vision begins to distort as you hallucinate vibrant colors flying around you...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/kaleidoscope.png", "oreName" : "Kaleidoscope"},
    'qrCode' : { 'decimalRarity': 1 / 281907640568244, 'numRarity': 281907640568244, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A QR Code has appeared in the mines, I wonder where it leads you?...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/qrcode.png", "oreName" : "QR Code"},
    'mutatedGrowth' : { 'decimalRarity': 1 / 3666006060600, 'numRarity': 3666006060600, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Thick vines extend throughout the tunnels, covering everything in poison filled thorns...', 'oreTier': 'Imaginary', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/silly_mines_flower.png", "oreName" : "Mutated Growth"},
    'sillyMiner' : {'decimalRarity': 1 / 5000000000000, 'numRarity': 5000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'You found someone else mining. Thou must get rid of competitors...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/sillyminer.png", "oreName" : "Silly Miner"},
    'starglint' : { 'decimalRarity': 1 / 670000000, 'numRarity': 670000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vibrant pink and purple diamond shines its hue everywhere in a glorious fashion...', 'oreTier': 'Flawless', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0, 'hasImage' : true, "src" : "media/ores/starglint.png", "oreName" : "Starglint"},
   
    "☯️" : { 'decimalRarity': 1 / 987656789, 'numRarity': 987656789, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through light and darkness, only one may guide you to the truth...', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "⛏️": { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': 'Thoughts of what lies on the other side cloud your mind until.. a mirror image appears..?', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "⚪": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🟩": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🩶": { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🩷": { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Celestial', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 }

}
const oreTiers = {
    "Layer" : {
        colors : {"backgroundColor" : "#656565", "textColor" : "#ffffff"},
        tierMessage : ``,
    },
    "Common" : {
        colors : {"backgroundColor" : "#888888", "textColor" : "#ffffff"},
        tierMessage : ``,
    },
    "Uncommon" : {
        colors : {"backgroundColor" : "#90A2E1", "textColor" : "#ffffff"},
        tierMessage : ``,
    },
    "Rare" : {
        colors : {"backgroundColor" : "#D04373", "textColor" : "#ffffff"},
        tierMessage : ``,
    },
    "Legendary" : {
        colors : {"backgroundColor" : "#FFD55F", "textColor" : "#000000"},
        tierMessage : ``,
    },
    "Godly" : {
        colors : {"backgroundColor" : "#FF24A1", "textColor" : "#ffffff"},
        tierMessage : ``,
    },
    "Antique" : {
        colors : {"backgroundColor" : "#5A865A", "textColor" : "#ffffff"},
        tierMessage : `You unearth an old artifact...`,
    },
    "Mystical" : {
        colors : {"backgroundColor" : "#841F8C", "textColor" : "#ffffff"},
        tierMessage : `A magical substance catches your attention...`,
    },
    "Divine" : {
        colors : {"backgroundColor" : "#FFFEAB", "textColor" : "#000000"},
        tierMessage : `You receive a blessing from above...`,
    },
    "Flawless" : {
        colors : {"backgroundColor" : "#31E8FF", "textColor" : "#000000"},
        tierMessage : `The discovery of a perfect material brings you great excitement...`,
    },
    "Interstellar" : {
        colors : {"backgroundColor" : "#FF8041", "textColor" : "#ffffff"},
        tierMessage : `The stars align in your favor...`,
    },
    "Metaversal" : {
        colors : {"backgroundColor" : "#3BD216", "textColor" : "#ffffff"},
        tierMessage : `An interdimensional object manifests before your very eyes...`,
    },
    "Sacred" : {
        colors : {"backgroundColor" : "#FF3C3C", "textColor" : "#ffffff"},
        tierMessage : `A relic with a godly aura graces you with its presence...`,
    },
    "Celestial" : {
        colors : {"backgroundColor" : "#6C0000", "textColor" : "#ffffff"},
        tierMessage : `The fabric of the universe coalesces into a bizarre form of matter...`,
    },
    "Ethereal" : {
        colors : {"backgroundColor" : "#ac47ff", "textColor" : "#ffffff"},
        tierMessage : `An incomprehensible creation puts you in a trance...`,
    },
    "Imaginary" : {
        colors : {"backgroundColor" : "#41FF6D", "textColor" : "#000000"},
        tierMessage : `Reality itself bends and contorts as your mind fails to process what you are looking at...`,
    }
}
class playerTemplate {
    constructor() {
        this.gears = {
            "gear0": false, 
            "gear1": false,
            "gear2": false,
            "gear3": false,
            "gear4": false,
            "gear5": false,
            "gear6": false,
            "gear7": false,
            "gear8": false,
            "gear9": false,
            "gear10": false,
            "gear11": false,
            "gear12": false,
            "gear13": false,
            "gear14": false,
            "gear15": false,
            "gear16": false,
            "gear17": false,
            "gear18": false,
            "gear19": false,
            "gear20": false,
            "gear21": false,
            "gear22": false,
            "gear23": false,
            "gear24": false,
            "gear25": false,
            "gear26": false,
            "gear27": false,
            "gear28": false,
        }
        this.pickaxes = {
            "pickaxe0": true,
            "pickaxe1": false,
            "pickaxe2": false,
            "pickaxe3": false,
            "pickaxe4": false,
            "pickaxe5": false,
            "pickaxe6": false,
            "pickaxe7": false,
            "pickaxe8": false,
            "pickaxe9": false,
            "pickaxe10": false,
            "pickaxe11": false,
            "pickaxe12": false,
            "pickaxe13": false,
            "pickaxe14": false,
            "pickaxe15": false,
            "pickaxe16": false,
            "pickaxe17": false,
            "pickaxe18": false,
            "pickaxe19": false,
            "pickaxe20": false,
            "pickaxe21": false,
            "pickaxe22": false,
            "pickaxe23": false,
            "pickaxe24": false,
            "pickaxe25": false,
            "pickaxe26": false,
            "pickaxe28" : false,
        }
        this.settings = {
            audioSettings: {
                "Antique": {canPlay: true, volume: 50},
                "Mystical": {canPlay: true, volume: 50},
                "Divine": {canPlay: true, volume: 50},
                "Flawless": {canPlay: true, volume: 50},
                "Interstellar": {canPlay: true, volume: 50},
                "Metaversal": {canPlay: true, volume: 50},
                "Sacred": {canPlay: true, volume: 50},
                "Ethereal": {canPlay: true, volume: 15},
                "Celestial": {canPlay: true, volume: 50},
                "Imaginary": {canPlay: true, volume: 50},
            },
            musicSettings: {
                active: true,
                volume: 50
            },
            baseMineCapacity: 250000,
            minSpeed: 0,
            stopOnRare: {active: true, allowList: ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary"]},
            canDisplay: true,
            useNumbers: false,
            inventorySettings: {invToIndex: true, craftingToIndex: true},
            usePathBlocks: true,
            cavesEnabled: true,
            useDisguisedChills: false,
            usingNewEmojis: false,
            minRarityNum: 0,
            highRarityLogs: false,
            doSpawnEffects: true,
            latestLength: 10,
            useNewMusic: true,
            automineProtection: false,
            useNyerd: false,
            automineUpdate: 25,
            spawnMessageTiers: ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary"],
            lastWorld: 1
        },
        this.stats = {
            currentPickaxe: 0,
            blocksMined: 0,
            timePlayed: 0,
            cavesGenerated: 0,
            minesReset: 0,
            furthestPosX: 1000000000,
            furthestNegX: 1000000000,
            furthestY: 0
        },
        this.powerupCooldowns = {
            "powerup1": {cooldown: Date.now(), unlocked: false},
            "powerup2": {cooldown: Date.now(), unlocked: false},
            "powerup3": {cooldown: Date.now(), unlocked: false},
            "powerup4": {cooldown: Date.now(), unlocked: false},
            "powerup5": {cooldown: Date.now(), unlocked: false},
        },
        this.powerupVariables = {
            currentChosenOre : {ore: undefined, removeAt: Date.now, lastOre: undefined},
            commonsAffected : {state: false, removeAt: Date.now()},
            currentPowerupDisplayed : "powerup1",
            fakeEquipped: {originalState: undefined, item: undefined, removeAt: Date.now()},
            nextAuto: Date.now(),
            autoNum: 1,
        },
        this.oreTracker = {
            existingOres : [],
            tracking : false,
            locationX : 0,
            locationY : 0
        },
        this.currentEffect = "";
        this.upgrades = {
            "pickaxe27" : {
                level: 0,
                maxLevel: 5,
                bought: 0,
                levelLuck: [1, 3, 10, 20, 40, 100]
            }
        },
        this.wasUsing = undefined;
        this.sr1Unlocked = false;
        this.faqOffered = false;
        this.webHook = {
            active: false,
            ids : {

            },
            link: "",
        }
        this.luna = {
            layer: Math.round(Math.random() * 100000),
            lastAddedOn: new Date().getDate()
        }
        this.viewedMessages = {}
        this.avgSpeed = 0;
        this.trophyProgress = {
            "worldOneCompletion" : {
                lastMinedAmt : 0,
                lastPickaxeUsed : 0,
                blocksWithWOG : 0,
                trophyOwned : false
            },
            "worldTwoCompletion" : {
                lastMinedAmt : 0,
                lastPickaxeUsed : 0,
                blocksWithCoronary : 0,
                trophyOwned : false
            },
            "subrealmOneCompletion" : {
                trophyOwned : false

            },
        }
    }
}
function get(id) {
    return document.getElementById(`${id}`);
}
const order = [];
function orderList() {
    const thisOrder = Object.keys(oreTiers);
    for (let i = 0; i < thisOrder.length; i++) {
        getOresByTier(thisOrder[i]);
    }
}
const thisPlayer = new playerTemplate();
setTimeout(() => {
    orderList();
    for (let i = 0; i < order.length; i++) {
        const ore = order[i];
        const elem = get("clone1").cloneNode(true);
        const elemChildren = elem.children;
        elemChildren[0].textContent = ore;
        elem.id = "";
        elem.style.display = "flex";
        elemChildren[1].textContent = ore;
        for (let i = 0; i < elemChildren.length; i++) {
            elemChildren[i].id = "";
        }
        get("oreHolder").appendChild(elem);
    }
    const pickaxes = Object.keys(thisPlayer.pickaxes);
    for (let i = 1; i < pickaxes.length + 1; i++) {
        if (i !== 27) {
            const element = get("clone2").cloneNode(true);
            let name = pickaxeNames[i - 1];
            element.style.display = "block";
            element.textContent = name;
            element.id = `pickaxe${i}`;
            get("itemHolder").appendChild(element);
        }
    }
    const gears = Object.keys(thisPlayer.gears);
    for (let i = 0; i < gears.length; i++) {
        const element = get("clone2").cloneNode(true);
        let name = allGearNames[i];
        element.style.display = "block";
        element.textContent = name;
        element.id = `gear${i}`;
        get("itemHolder").appendChild(element);
    }
}, 100);

function getOreAmts(element) {
    const elems = element.children;
    console.log(elems)
    const ore = elems[0].textContent;
    const norm = Number(elems[1].value);
    const elec = Number(elems[2].value);
    const radi = Number(elems[3].value);
    const expl = Number(elems[4].value);
    console.log(norm, elec, radi, expl)
    if (!isNaN(norm)) oreList[ore]["normalAmt"] = norm;
    if (!isNaN(elec)) oreList[ore]["electrifiedAmt"] = elec;
    if (!isNaN(radi)) oreList[ore]["radioactiveAmt"] = radi;
    if (!isNaN(expl)) oreList[ore]["explosiveAmt"] = expl;
}
function getOresByTier(tier) {
    const output = [];
    console.log(tier)
    for (let ore in oreList) if (oreList[ore]["oreTier"] === tier) order.push(ore);
}
const pickaxeNames = [
    "Mulch Mallet", 
    "Mud Sickle", 
    "Dirt Ravager", 
    "Void Crusher", 
    "Geode Staff", 
    "Earth Soiler", 
    "Crypt Smasher", 
    "Labyrinthian Tide", 
    "77 Leaf Destroyer", 
    "Planet Buster", 
    "Whirlpool of Fate", 
    "Wings of Glory",
    "The Key",
    "Extreme Echolocator",
    "Corundum Caver",
    "Starborne Slasher",
    "Nyabomb",
    "Lunar Lightsabre",
    "Gemstone Engraver",
    "Gambler's Fallacy",
    "Exponential Centrifuge",
    "Singularity Slammer",
    "Staff of Binding",
    "Stormseer's Superspark Sceptre",
    "Coronary Catastrophe",
    "Null Chroma",
    "The Tree of Life",
    "Crystalline Excavator",
];
const allGearNames = [
    "Ore Tracker",
    "Real Candilium",
    "Real Vitriol",
    "Infinity Collector",
    "Layer Materializer",
    "Fortune III Book",
    "Haste II Beacon",
    "Energy Siphoner",
    "Sugar Rush",
    "Silly TP",
    "Logical Randomiser",
    "Storm Sneakers",
    "Artifice Annihilator",
    "Repurposed Replicator",
    "Cavern Capacitator",
    "High Powered Vacuum",
    "Unlocked Speedcap",
    "Infinity Collector II",
    "Clover's Undoing",
    "Fantastical Feather",
    "Statistical Analyzer",
    "Oblivion Fracturer",
    "Replicator Prototype",
    "Hyperdrive Accelerator",
    "Superenergetic Automaton",
    "Alteration Reiterator",
    "Stratum Nonillonator",
    "Biome Enchanter",
    "Celestian Reaper"
];
function toggle(item) {
    item = item.id;
    if (thisPlayer.pickaxes[item] !== undefined) {
        thisPlayer.pickaxes[item] = !thisPlayer.pickaxes[item];
        if (thisPlayer.pickaxes[item]) get(item).style.backgroundColor = "green";
        else get(item).style.backgroundColor = "red";
    }
    else if (thisPlayer.gears[item] !== undefined) {
        thisPlayer.gears[item] = !thisPlayer.gears[item];
        if (thisPlayer.gears[item]) get(item).style.backgroundColor = "green";
        else get(item).style.backgroundColor = "red";
    }
}
function prepareExport() {
    let data = {blocks: {}, player: thisPlayer};
    for (let propertyName in oreList) {
        data.blocks[propertyName] = {
            n: oreList[propertyName]["normalAmt"],
            l: oreList[propertyName]["electrifiedAmt"],
            r: oreList[propertyName]["radioactiveAmt"],
            e: oreList[propertyName]["explosiveAmt"]
        };
    }
    console.log(data);
    exportDataAsFile(toBinary(JSON.stringify(data)), "data.txt", "text/plain");
}
function exportDataAsFile(textToWrite, fileNameToSaveAs, fileType) {
    const textFileAsBlob = new Blob([textToWrite], { type: fileType });
    let downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL !== null)
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
function toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++)
        codeUnits[i] = string.charCodeAt(i);
    return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
}

function fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++)
        bytes[i] = binary.charCodeAt(i);
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
}
