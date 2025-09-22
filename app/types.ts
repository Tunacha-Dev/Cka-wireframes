export type StatKey = "STR" | "DEX" | "INT" | "ARMOR" | "CRIT";
export type SlotKey =
  | "Helmet"
  | "Chest"
  | "Weapon"
  | "Shield"
  | "Boots"
  | "Ring"
  | "Amulet"
  | "Gloves"
  | "Belt";
export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic";

export type Item = {
  id: string;
  name: string;
  slot: SlotKey;
  rarity: Rarity;
  stats: Partial<Record<StatKey, number>>;
};

export type DataFile = {
  schema?: any;
  equipped: Partial<Record<SlotKey, Item | null>>;
  inventory: Item[];
  rarityOrder: Rarity[];
  compareKeys: StatKey[];
};
