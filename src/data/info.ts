// type definition for info 
type Info = {
  patch: string,
  classes: string[]
  sets: string[]
  standard: string[]
  wild: string[]
  types: string[]
  factions: string[]
  qualities: string[]
  races: string[]
  locales: Record<string, string>
}

type filters = {
  attack?: number
  cost?: number
  durability?: number
  health?: number
  collectible?: 0 | 1
  locale: string
}

export const info: Info = {
  patch: '23.6.2.144772',
  classes: [
    'Death Knight', 
    'Druid',
    'Hunter',       
    'Mage',
    'Paladin',      
    'Priest',
    'Rogue',        
    'Shaman',
    'Warlock',      
    'Warrior',
    'Dream',        
    'Neutral',
    'Whizbang',     
    'Demon Hunter'
  ],
  sets: [
    'Basic',
    'Classic',
    'Hall of Fame',
    'Missions',
    'Demo',
    'System',
    'Slush',
    'Promo',
    'Naxxramas',
    'Goblins vs Gnomes',
    'Blackrock Mountain',
    'The Grand Tournament',
    'Credits',
    'Hero Skins',
    'Tavern Brawl',
    'The League of Explorers',
    'Whispers of the Old Gods',
    'Whispers of the Old Gods',
    'One Night in Karazhan',
    'One Night in Karazhan',
    'Mean Streets of Gadgetzan',
    'Mean Streets of Gadgetzan',
    "Journey to Un'Goro",
    'Knights of the Frozen Throne',
    'Kobolds & Catacombs',
    'The Witchwood',
    'The Boomsday Project',
    "Rastakhan's Rumble",
    'Rise of Shadows',
    'Taverns of Time',
    'Saviors of Uldum',
    'Descent of Dragons',
    "Galakrond's Awakening",
    'Ashes of Outland',
    'Wild Event',
    'Scholomance Academy',
    'Battlegrounds',
    'Demon Hunter Initiate',
    'Madness at the Darkmoon Faire',
    'Forged in the Barrens',
    'Legacy',
    'Core',
    'Classic',
    'Wailing Caverns',
    'United in Stormwind',
    'Mercenaries',
    'Fractured in Alterac Valley',
    'Voyage to the Sunken City',
    'Unknown',
    'Murder at Castle Nathria'
  ],
  standard: [
    'Core',
    'Forged in the Barrens',
    'United in Stormwind',
    'Fractured in Alterac Valley',
    'Voyage to the Sunken City'
  ],
  wild: [
    'Legacy',
    'Promo',
    'Naxxramas',
    'Goblins vs Gnomes',
    'Blackrock Mountain',
    'The Grand Tournament',
    'The League of Explorers',
    'Whispers of the Old Gods',
    'Whispers of the Old Gods',
    'One Night in Karazhan',
    'One Night in Karazhan',
    'Mean Streets of Gadgetzan',
    'Mean Streets of Gadgetzan',
    "Journey to Un'Goro",
    'Knights of the Frozen Throne',
    'Kobolds & Catacombs',
    'The Witchwood',
    'The Boomsday Project',
    "Rastakhan's Rumble",
    'Rise of Shadows',
    'Saviors of Uldum',
    'Descent of Dragons',
    "Galakrond's Awakening",
    'Ashes of Outland',
    'Demon Hunter Initiate',
    'Scholomance Academy',
    'Madness at the Darkmoon Faire',
    'Forged in the Barrens',
    'United in Stormwind',
    'Fractured in Alterac Valley',
    'Voyage to the Sunken City'
  ],
  types: [ 'Hero', 'Minion', 'Spell', 'Enchantment', 'Weapon', 'Hero Power' ],
  factions: [ 'Horde', 'Alliance', 'Neutral' ],
  qualities: [ 'Common', 'Free', 'Rare', 'Epic', 'Legendary' ],
  races: [
    'Orc',       
    'Murloc',
    'Demon',     
    'Mech',
    'Elemental', 
    'Beast',
    'Totem',     
    'Pirate',
    'Dragon',    
    'All',
    'Quilboar',  
    'Naga'
  ],
  locales: {
    DE_DE: 'deDE',
    EN_GB: 'enGB',
    EN_US: 'enUS',
    ES_ES: 'esES',
    ES_MX: 'esMX',
    FR_FR: 'frFR',
    IT_IT: 'itIT',
    KO_KR: 'koKR',
    PL_PL: 'plPL',
    PT_BR: 'ptBR',
    RU_RU: 'ruRU',
    ZH_CN: 'zhCN',
    ZH_TW: 'zhTW',
    JA_JP: 'jaJP',
    TH_TH: 'thTH'
  },
}
