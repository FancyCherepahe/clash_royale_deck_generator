function getSelectedValues() {
  const deckType = document.getElementById("deck-type-select").value;
  const arena = document.getElementById("arena-select").value;
  return { deckType, arena };
}

let generateButton = document.querySelector(".container-button");
generateButton.addEventListener("click", function() {
    // Тут буде логіка генерації колоди
    const { deckType, arena } = getSelectedValues();
    if (deckType === "noChoose") {
        alert("Please choose deck type!");
        return;
    }
    let deckMain = document.querySelector(".deck-main");
    deckMain.style.display = "none";
    let deck = document.querySelector(".all-cards-div");
    deck.style.display = "flex";

    const buildings = [
        { name: "Cannon", cost: 3,  src:"building_icons/CannonCard.png", deckType: ["all", "cycle", "control", "bait", "siege"], arena: "under&5" },
        { name: "Inferno Tower", cost: 5, src:"building_icons/InfernoTowerCard.png", deckType: ["all", "control", "beatdown", "bridgeSpam", "bait"], arena: "under&5" },
        { name: "Tesla", cost: 4, src:"building_icons/TeslaCard.png", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10"},
        { name: "Bomb Tower", cost: 4, src:"building_icons/BombTowerCard.png", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "under&5" },
        { name: "Goblin Hut", cost: 4, src:"building_icons/GoblinHutCard.png",deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", ], arena: "under&5" },
        { name: "Elixir Collector", cost: 6, src:"building_icons/ElixirCollectorCard.png", deckType: ["all", "beatdown"], arena: "15" },
        { name: "Barbarian Hut", cost: 6, src:"building_icons/BarbarianHutCard.png", deckType: ["all"], arena: "9" },
        { name: "Tombstone", cost: 3, src:"building_icons/TombstoneCard.png", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam"], arena: "under&5" },
        { name: "Goblin Cage", cost: 4, src:"building_icons/GoblinCageCard.png", deckType: ["all", "cycle", "control", "beatdown"], arena: "under&5" },
    ];
    const airTroops = [
        { name: "Baby Dragon", cost: 4, src:"air_troop_icons/BabyDragonCard.png", deckType: ["all", "control", "beatdown", "bridgeSpam",], arena: "6" },
        { name: "Minions", cost: 3, src:"air_troop_icons/MinionsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Mega Minion", cost: 3, src:"air_troop_icons/MegaMinionCard.webp", deckType: ["all", "beatdown", "control"], arena: "under&5" },
        { name: "Minion Horde", cost: 5, src:"air_troop_icons/MinionHordeCard.webp", deckType: ["all", "bait"], arena: "10" },
        { name: "Inferno Dragon", cost: 4, src:"air_troop_icons/InfernoDragonCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "11" },
        { name: "Bats", cost: 2, src:"air_troop_icons/BatsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Spirit Emperess", cost: 6, src:"air_troop_icons/SpiritEmpressCard.webp", deckType: ["all", "beatdown", "control", "bait"], arena: "15" },
        { name: "Flying Machine", cost: 4, src:"air_troop_icons/FlyingMachineCard.webp", deckType: ["all", "beatdown", "control", "bridgeSpam"], arena: "under&5" },
        { name: "Skeleton Dragons", cost: 4, src:"air_troop_icons/SkeletonDragonsCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "under&5" },
        { name: "Electro Dragon", cost: 5, src:"air_troop_icons/ElectroDragonCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "12" },
        { name: "Phoenix", cost: 4, src:"air_troop_icons/PhoenixCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "12" },
    ];
    const troopsThatGoToTower = [
        { name: "Mortar", cost: 4, src:"building_icons/MortarCard.png", deckType: ["all", "siege"], arena: "under&5" },
        { name: "X-Bow", cost: 6, src:"building_icons/X-BowCard.png", deckType: ["all", "siege"], arena: "10" },
        { name: "Giant", cost: 5, src:"troops_that_go_to_tower_icons/GiantCard.webp", deckType: ["all", "beatdown"], arena: "under&5" },
        { name: "Golem", cost: 8, src:"troops_that_go_to_tower_icons/GolemCard.webp", deckType: ["all", "beatdown"], arena: "10" },
        { name: "Ballon", cost: 5, src:"troops_that_go_to_tower_icons/BalloonCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "7" },
        { name: "Lava Hound", cost: 7, src:"troops_that_go_to_tower_icons/LavaHoundCard.webp", deckType: ["all", "beatdown"], arena: "13" },
        { name: "Royal Giant", cost: 6, src:"troops_that_go_to_tower_icons/RoyalGiantCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "7" },
        { name: "Hog Rider", cost: 4, src:"troops_that_go_to_tower_icons/HogRiderCard.webp", deckType: ["all", "cycle", "bridgeSpam"], arena: "under&5" },
        { name: "Ram Rider", cost: 5, src:"troops_that_go_to_tower_icons/RamRiderCard.webp", deckType: ["all", "bridgeSpam", "beatdown"], arena: "11" },
        { name: "Wall Breakers", cost: 2, src:"troops_that_go_to_tower_icons/WallBreakersCard.webp", deckType: ["all", "cycle", "bridgeSpam", "bait"], arena: "12" },
        { name: "Miner", cost: 3, src:"troops_that_go_to_tower_icons/MinerCard.webp", deckType: ["all", "control", "bait", "cycle"], arena: "11" },
        { name: "Battle Ram", cost: 4, src:"troops_that_go_to_tower_icons/BattleRamCard.webp", deckType: ["all", "bridgeSpam", "beatdown"], arena: "under&5" },
        { name: "Skeleton Barrel", cost: 3, src:"troops_that_go_to_tower_icons/SkeletonBarrelCard.webp", deckType: ["all", "bait", "bridgeSpam"], arena: "9" },
        { name: "Suspusious Bush", cost: 2, src:"troops_that_go_to_tower_icons/SuspiciousBushCard.webp", deckType: ["all", "cycle", "bait", "control"], arena: "13" },
        { name: "Electro Giant", cost: 7, src:"troops_that_go_to_tower_icons/ElectroGiantCard.webp", deckType: ["all", "beatdown"],arena: "13" },
        { name: "Elixir Golem", cost: 3, src:"troops_that_go_to_tower_icons/ElixirGolemCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "14" },
        { name: "Rune Giant", cost: 4, src:"troops_that_go_to_tower_icons/RuneGiantCard.webp", deckType: ["all"], arena: "9" },
        { name: "Royal Hogs", cost: 5, src:"troops_that_go_to_tower_icons/RoyalHogsCard.webp", deckType: ["all", "bridgeSpam", "bait", "cycle"], arena: "7" },
        { name: "Graveyard", cost: 5, src:"troops_that_go_to_tower_icons/GraveyardCard.webp", deckType: ["all", "control", "beatdown"], arena: "12" },
        { name: "Goblin Barrel", cost: 3, src:"troops_that_go_to_tower_icons/GoblinBarrelCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "6" },
        { name: "Goblin Drill", cost: 4, src:"troops_that_go_to_tower_icons/GoblinDrillCard.webp", deckType: ["all", "bridgeSpam", "bait", "cycle", "control"], arena: "14" },
        { name: "Goblin Giant", cost: 6, src:"troops_that_go_to_tower_icons/GoblinGiantCard.webp", deckType: ["all", "beatdown"], arena: "9" },
    ];
   const smallSpells = [
        { name: "Zap", cost: 2, src:"small_spell_icons/ZapCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "brigeSpam", "siege"], arena: "under&5" },
        { name: "Log", cost: 2, src:"small_spell_icons/TheLogCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "11" },
        { name: "Arrows", cost: 3, src:"small_spell_icons/ArrowsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Giant Snowball", cost: 2, src:"small_spell_icons/GiantSnowballCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Barbarian Barrel", cost: 2, src:"small_spell_icons/BarbarianBarrelCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
        { name: "Tornado", cost: 3, src:"small_spell_icons/TornadoCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15"},
        { name: "Earthquake", cost: 3, src:"small_spell_icons/EarthquakeCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "12" },
        { name: "Vines", cost: 3, src:"small_spell_icons/VinesCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Rage", cost: 2, src:"small_spell_icons/RageCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "14" },
        { name: "Clone", cost: 3, src:"small_spell_icons/CloneCard.webp", deckType: ["all", "bait", "beatdown", "bridgeSpam"], arena: "15" },
        { name: "Royal Delivery", cost: 3, src:"small_spell_icons/RoyalDeliveryCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "14" },
        { name: "Goblin Curse", cost: 2, src:"small_spell_icons/GoblinCurseCard.webp", deckType: ["all", "cycle", "control", "bait"], arena: "14" },
    ];
   const bigSpells = [
        { name: "Fireball", cost: 4, src:"big_spell_icons/FireballCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Poison", cost: 4, src:"big_spell_icons/PoisonCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
        { name: "Rocket", cost: 6, src:"big_spell_icons/RocketCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Lightning", cost: 6, src:"big_spell_icons/LightningCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Freeze", cost: 4, src:"big_spell_icons/FreezeCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Void", cost: 3, src:"big_spell_icons/VoidCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
        { name: "Mirror", cost: +1, src:"big_spell_icons/MirrorCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "15" },
    ];
    const miniTanks = [       
        { name: "Goblinstein", cost: 5, src:"troops_that_go_to_tower_icons/GoblinsteinCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "16&above" },
        { name: "Knight", cost: 3, src:"mini_tank_icons/KnightCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Valkyrie", cost: 4, src:"mini_tank_icons/ValkyrieCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Mini P.E.K.K.A", cost: 4, src:"mini_tank_icons/MiniPEKKACard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Dark Prince", cost: 4, src:"mini_tank_icons/DarkPrinceCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "7" },
        { name: "Prince", cost: 5, src:"mini_tank_icons/PrinceCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "7" },
        { name: "Ice Golem", cost: 2, src:"mini_tank_icons/IceGolemCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Battle Healer", cost: 4, src:"mini_tank_icons/BattleHealerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Mighty Miner", cost: 4, src:"mini_tank_icons/MightyMinerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Lumberjack", cost: 4, src:"mini_tank_icons/LumberjackCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "14" },
        { name: "Fisherman", cost: 3, src:"mini_tank_icons/FishermanCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
        { name: "Royal Ghost", cost: 3, src:"mini_tank_icons/RoyalGhostCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "12" },
        { name: "Rascals", cost: 5, src:"mini_tank_icons/RascalsCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "13" },
        { name: "Bandit", cost: 3, src:"mini_tank_icons/BanditCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "13" },
        { name: "Furnace", cost: 4, src:"mini_tank_icons/FurnaceCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
        { name: "Skeleton King", cost: 4, src:"mini_tank_icons/SkeletonKingCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Monk", cost: 5, src:"mini_tank_icons/MonkCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Golden Knight", cost: 4, src:"mini_tank_icons/GoldenKnightCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Bowler", cost: 5, src:"mini_tank_icons/BowlerCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "13" },
        { name: "Goblin Machine", cost: 5, src:"mini_tank_icons/GoblinMachineCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "15" },
        { name: "Giant Skeleton", cost: 6, src:"mini_tank_icons/GiantSkeletonCard.webp", deckType: ["all", "beatdown", "bridgeSpam", "siege"], arena: "8" },
    ];
    const damageDealers = [
        { name: "Musketeer", cost: 4, src:"damage_dealer_icons/MusketeerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Archers", cost: 3, src:"damage_dealer_icons/ArchersCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Dart Goblin", cost: 3, src:"damage_dealer_icons/DartGoblinCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
        { name: "Hunter", cost: 4, src:"damage_dealer_icons/HunterCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
        { name: "Cannon Cart", cost: 5, src:"damage_dealer_icons/CannonCartCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
        { name: "Firecracker", cost: 3, src:"damage_dealer_icons/FirecrackerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "12" },
        { name: "Little Prince", cost: 3, src:"damage_dealer_icons/LittlePrinceCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Executioner", cost: 5, src:"damage_dealer_icons/ExecutionerCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "14" },
        { name: "Elite Barbarians", cost: 6, src:"damage_dealer_icons/EliteBarbariansCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "10" },
        { name: "P.E.K.K.A", cost: 7, src:"damage_dealer_icons/PEKKACard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "6" },
        { name: "Boss Bandit", cost: 6, src:"damage_dealer_icons/BossBanditCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Mega Knight", cost: 7, src:"damage_dealer_icons/MegaKnightCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "11" },
        { name: "Archer Queen", cost: 5, src:"damage_dealer_icons/ArcherQueenCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
        { name: "Three Musketeers", cost: 9, src:"damage_dealer_icons/ThreeMusketeersCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "7" },
        { name: "Sparky", cost: 6, src:"damage_dealer_icons/SparkyCard.webp", deckType: ["all", "beatdown"], arena: "11" },
    ];
    const support = [
        { name: "Wizard", cost: 5, src:"support_icons/WizardCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "under&5" },
        { name: "Witch", cost: 5, src:"support_icons/WitchCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "6" },
        { name: "Skeleton Army", cost: 3, src:"support_icons/SkeletonArmyCard.webp", deckType: ["all", "bait", "cycle", "control"],arena: "6" },
        { name: "Goblin Gang", cost: 3, src:"support_icons/GoblinGangCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "9" },
        { name: "Goblin", cost: 2, src:"support_icons/GoblinsCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "under&5" },
        { name: "Spear Goblins", cost: 2, src:"support_icons/SpearGoblinsCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "under&5" },
        { name: "Zappies", cost: 4, src:"support_icons/ZappiesCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
        { name: "Guards", cost: 3, src:"support_icons/GuardsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "6" },
        { name: "Barbarians", cost: 5, src:"support_icons/BarbariansCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Royal Recruits", cost: 7, src:"support_icons/RoyalRecruitsCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "7" },
        { name: "Skeletons", cost: 1, src:"support_icons/SkeletonsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Fire Spirit", cost: 1, src:"support_icons/FireSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Ice Spirit", cost: 1, src:"support_icons/IceSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
        { name: "Heal Spirit", cost: 1, src:"support_icons/HealSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "13" },
        { name: "Electro Spirit", cost: 1, src:"support_icons/ElectroSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Bomber", cost: 2, src:"support_icons/BomberCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
        { name: "Berserker", cost: 2, src:"support_icons/BerserkerCard.webp", deckType: ["all", "cycle", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
        { name: "Ice Wizard", cost: 3, src:"support_icons/IceWizardCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "12" },
        { name: "Electro Wizard", cost: 4, src:"support_icons/ElectroWizardCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "11" },
        { name: "Magic Archer", cost: 4, src:"support_icons/MagicArcherCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "13" },
        { name: "Goblin Demolisher", cost: 4, src:"support_icons/GoblinDemolisherCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "12" },
        { name: "Night Witch", cost: 4, src:"support_icons/NightWitchCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "14" },
        { name: "Mother Witch", cost: 4, src:"support_icons/MotherWitchCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "15" },
        { name: "Princess", cost: 3, src:"support_icons/PrincessCard.webp", deckType: ["all", "cycle", "control", "bait", "bridgeSpam"], arena: "11" },
    ];
      if (arena === "noChoose"){
        alert("Choose your arena!")
        return
      }
      if (arena === "under&5"){
        let filteredBuildings = buildings.filter(building => building.arena.includes("under&5"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena.includes("under&5"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena.includes("under&5"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "6"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "7"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "8"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "9"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena ===("9"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "10"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9") || building.arena.includes("10"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9") || airTroop.arena.includes("10"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9") || troopThatGoesToTower.arena.includes("10"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9") || smallSpell.arena.includes("10"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9") || bigSpell.arena.includes("10"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena === ("9") || miniTank.arena === ("10"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9") || damageDealer.arena === ("10"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9") || supportCard.arena.includes("10"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
        }        
        if (arena === "11") {
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9") || building.arena.includes("10") || building.arena.includes("11"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9") || airTroop.arena.includes("10") || airTroop.arena.includes("11"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9") || troopThatGoesToTower.arena.includes("10") || troopThatGoesToTower.arena.includes("11"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9") || smallSpell.arena.includes("10") || smallSpell.arena.includes("11"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9") || bigSpell.arena.includes("10") || bigSpell.arena.includes("11"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena === ("9") || miniTank.arena === ("10") || miniTank === ("11"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9") || damageDealer.arena === ("10") || damageDealer.arena === ("11"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9") || supportCard.arena.includes("10") || supportCard.arena.includes("11"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
        }        
        if(arena === "12"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9") || building.arena.includes("10") || building.arena.includes("11") || building.arena.includes("12"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9") || airTroop.arena.includes("10") || airTroop.arena.includes("11") || airTroop.arena.includes("12"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9") || troopThatGoesToTower.arena.includes("10") || troopThatGoesToTower.arena.includes("11") || troopThatGoesToTower.arena.includes("12"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9") || smallSpell.arena.includes("10") || smallSpell.arena.includes("11") || smallSpell.arena.includes("12"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9") || bigSpell.arena.includes("10") || bigSpell.arena.includes("11") || bigSpell.arena.includes("12"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena === ("9") || miniTank.arena === ("10") || miniTank.arena === ("11") || miniTank.arena === ("12"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9") || damageDealer.arena === ("10") || damageDealer.arena === ("11") || damageDealer.arena === ("12"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9") || supportCard.arena.includes("10") || supportCard.arena.includes("11") || supportCard.arena.includes("12"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
        }
      if (arena === "13"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9") || building.arena.includes("10") || building.arena.includes("11") || building.arena.includes("12") || building.arena.includes("13"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9") || airTroop.arena.includes("10") || airTroop.arena.includes("11") || airTroop.arena.includes("12") || airTroop.arena.includes("13"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9") || troopThatGoesToTower.arena.includes("10") || troopThatGoesToTower.arena.includes("11") || troopThatGoesToTower.arena.includes("12") || troopThatGoesToTower.arena.includes("13"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9") || smallSpell.arena.includes("10") || smallSpell.arena.includes("11") || smallSpell.arena.includes("12") || smallSpell.arena.includes("13"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9") || bigSpell.arena.includes("10") || bigSpell.arena.includes("11") || bigSpell.arena.includes("12") || bigSpell.arena.includes("13"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena === ("9") || miniTank.arena === ("10") || miniTank.arena === ("11") || miniTank.arena === ("12") || miniTank.arena === ("13"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9") || damageDealer.arena === ("10") || damageDealer.arena === ("11") || damageDealer.arena === ("12") || damageDealer.arena === ("13"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9") || supportCard.arena.includes("10") || supportCard.arena.includes("11") || supportCard.arena.includes("12") || supportCard.arena.includes("13"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "14"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9") || building.arena.includes("10") || building.arena.includes("11") || building.arena.includes("12") || building.arena.includes("13") || building.arena.includes("14"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9") || airTroop.arena.includes("10") || airTroop.arena.includes("11") || airTroop.arena.includes("12") || airTroop.arena.includes("13") || airTroop.arena.includes("14"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9") || troopThatGoesToTower.arena.includes("10") || troopThatGoesToTower.arena.includes("11") || troopThatGoesToTower.arena.includes("12") || troopThatGoesToTower.arena.includes("13") || troopThatGoesToTower.arena.includes("14"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9") || smallSpell.arena.includes("10") || smallSpell.arena.includes("11") || smallSpell.arena.includes("12") || smallSpell.arena.includes("13") || smallSpell.arena.includes("14"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9") || bigSpell.arena.includes("10") || bigSpell.arena.includes("11") || bigSpell.arena.includes("12") || bigSpell.arena.includes("13") || bigSpell.arena.includes("14"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena === ("9") || miniTank.arena === ("10") || miniTank.arena === ("11") || miniTank.arena === ("12") || miniTank.arena === ("13") || miniTank.arena === ("14"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9") || damageDealer.arena === ("10") || damageDealer.arena === ("11") || damageDealer.arena === ("12") || damageDealer.arena === ("13") || damageDealer.arena === ("14"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9") || supportCard.arena.includes("10") || supportCard.arena.includes("11") || supportCard.arena.includes("12") || supportCard.arena.includes("13") || supportCard.arena.includes("14"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
      if (arena === "15"){
            let filteredBuildings = buildings.filter(building => building.arena.includes("under&5") || building.arena.includes("6") || building.arena.includes("7") || building.arena.includes("8") || building.arena.includes("9") || building.arena.includes("10") || building.arena.includes("11") || building.arena.includes("12") || building.arena.includes("13") || building.arena.includes("14") || building.arena.includes("15"));
            const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
            let buildingCard = document.querySelector(".building")
            let buildingCostCard = document.querySelector(".building-cost") 
            buildingCard.innerHTML = randomBuilding.name;
            buildingCostCard.innerHTML = randomBuilding.cost;
            let buildingImage = document.querySelector(".building-image")
            buildingImage.src = randomBuilding.src;
            
            let filteredAirTroops = airTroops.filter(airTroop => airTroop.arena.includes("under&5") || airTroop.arena.includes("6") || airTroop.arena.includes("7") || airTroop.arena.includes("8") || airTroop.arena.includes("9") || airTroop.arena.includes("10") || airTroop.arena.includes("11") || airTroop.arena.includes("12") || airTroop.arena.includes("13") || airTroop.arena.includes("14") || airTroop.arena.includes("15"));
            const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
            let airTroopCard = document.querySelector(".air-troop") 
            let airTroopCostCard = document.querySelector(".air-troop-cost")
            airTroopCostCard.innerHTML = randomAirTroop.cost;
            airTroopCard.innerHTML = randomAirTroop.name;
            let airTroopImage = document.querySelector(".air-troop-image")
            airTroopImage.src = randomAirTroop.src;

            let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.arena.includes("under&5") || troopThatGoesToTower.arena.includes("6") || troopThatGoesToTower.arena.includes("7") || troopThatGoesToTower.arena.includes("8") || troopThatGoesToTower.arena.includes("9") || troopThatGoesToTower.arena.includes("10") || troopThatGoesToTower.arena.includes("11") 
            || troopThatGoesToTower.arena.includes("12") || troopThatGoesToTower.arena.includes("13") || troopThatGoesToTower.arena.includes("14") || troopThatGoesToTower.arena.includes("15"));
            const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
            let winConditionCard = document.querySelector(".win-condition") 
            let winConditionCostCard = document.querySelector(".win-condition-cost")
            winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
            winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
            let winConditionImage = document.querySelector(".win-condition-image")
            winConditionImage.src = randomTroopThatGoesToTower.src;
            
            let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.arena.includes("under&5") || smallSpell.arena.includes("6") || smallSpell.arena.includes("7") || smallSpell.arena.includes("8") || smallSpell.arena.includes("9") || smallSpell.arena.includes("10") || smallSpell.arena.includes("11") || smallSpell.arena.includes("12") || smallSpell.arena.includes("13") || smallSpell.arena.includes("14") 
            || smallSpell.arena.includes("15"));    
            const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
            let smallSpellCard = document.querySelector(".small-spell") 
            let smallSpellCostCard = document.querySelector(".small-spell-cost")
            smallSpellCostCard.innerHTML = randomSmallSpell.cost;
            smallSpellCard.innerHTML = randomSmallSpell.name;
            let smallSpellImage = document.querySelector(".small-spell-image")
            smallSpellImage.src = randomSmallSpell.src;
            
            let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.arena.includes("under&5") || bigSpell.arena.includes("6") || bigSpell.arena.includes("7") || bigSpell.arena.includes("8") || bigSpell.arena.includes("9") || bigSpell.arena.includes("10") || bigSpell.arena.includes("11") || bigSpell.arena.includes("12") || bigSpell.arena.includes("13") || bigSpell.arena.includes("14") || bigSpell.arena.includes("15"));
            const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
            let bigSpellCard = document.querySelector(".big-spell")
            let bigSpellCostCard = document.querySelector(".big-spell-cost")
            bigSpellCostCard.innerHTML = randomBigSpell.cost; 
            bigSpellCard.innerHTML = randomBigSpell.name;
            let bigSpellImage = document.querySelector(".big-spell-image")
            bigSpellImage.src = randomBigSpell.src;
            
            let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.arena === ("under&5") || miniTank.arena === ("6") || miniTank.arena === ("7") || miniTank.arena === ("8") || miniTank.arena === ("9") || miniTank.arena === ("10") || miniTank.arena === ("11") || miniTank.arena === ("12") || miniTank.arena === ("13") || miniTank.arena === ("14") || miniTank.arena === ("15"));
            const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
            let miniTankCard = document.querySelector(".mini-tank")
            let miniTankCostCard = document.querySelector(".mini-tank-cost")
            miniTankCostCard.innerHTML = randomMiniTank.cost;
            miniTankCard.innerHTML = randomMiniTank.name;
            let miniTankImage = document.querySelector(".mini-tank-image")
            miniTankImage.src = randomMiniTank.src;
            
            let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.arena === ("under&5") || damageDealer.arena === ("6") || damageDealer.arena === ("7") || damageDealer.arena === ("8") || damageDealer.arena === ("9") || damageDealer.arena === ("10") || damageDealer.arena === ("11") || damageDealer.arena === ("12") || damageDealer.arena === ("13") || damageDealer.arena === ("14") || damageDealer.arena === ("15"));
            const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
            let damageDealerCard = document.querySelector(".damage-dealer")
            let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
            damageDealerCostCard.innerHTML = randomDamageDealer.cost;
            damageDealerCard.innerHTML = randomDamageDealer.name;
            let damageDealerImage = document.querySelector(".damage-dealer-image")
            damageDealerImage.src = randomDamageDealer.src;
            
            let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.arena.includes("under&5") || supportCard.arena.includes("6") || supportCard.arena.includes("7") || supportCard.arena.includes("8") || supportCard.arena.includes("9") || supportCard.arena.includes("10") || supportCard.arena.includes("11") || supportCard.arena.includes("12") || supportCard.arena.includes("13") || supportCard.arena.includes("14") || supportCard.arena.includes("15"));
            const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
            let supportCard = document.querySelector(".support")
            const supportCostCard = document.querySelector(".support-cost")
            supportCostCard.innerHTML = randomSupport.cost;
            supportCard.innerHTML = randomSupport.name;
            let supportImage = document.querySelector(".support-image")
            supportImage.src = randomSupport.src;
            
            const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
            console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
            let averageElixirCard = document.querySelector(".avarage-elixir");
            averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
            if (averageElixir <= 3.0) {
            averageElixirCard.style.color = "green";
          } else if (averageElixir <= 4.0) {
            averageElixirCard.style.color = "yellow";
          } else {
            averageElixirCard.style.color = "red";
          }
      }
    if (arena === "16&above"){
      if (deckType === "all") {
          const randomBuilding = buildings[Math.floor(Math.random() * buildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          const randomAirTroop = airTroops[Math.floor(Math.random() * airTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;
          
          const randomTroopThatGoesToTower = troopsThatGoToTower[Math.floor(Math.random() * troopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;

          
          const randomSmallSpell = smallSpells[Math.floor(Math.random() * smallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          const randomBigSpell = bigSpells[Math.floor(Math.random() * bigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          const randomMiniTank = miniTanks[Math.floor(Math.random() * miniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          const randomDamageDealer = damageDealers[Math.floor(Math.random() * damageDealers.length)];
          let damageDealerCard = document.querySelector(".damage-dealer")
          let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
          damageDealerCostCard.innerHTML = randomDamageDealer.cost;
          damageDealerCard.innerHTML = randomDamageDealer.name;
          let damageDealerImage = document.querySelector(".damage-dealer-image")
          damageDealerImage.src = randomDamageDealer.src;
          
          const randomSupport = support[Math.floor(Math.random() * support.length)];
          let supportCard = document.querySelector(".support")
          let supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
      } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
      } else {
          averageElixirCard.style.color = "red";
      }
      };
      if (deckType === "cycle") {
          let filteredBuildings = buildings.filter(building => building.deckType.includes("cycle"));
          const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          let filteredAirTroops = airTroops.filter(airTroop => airTroop.deckType.includes("cycle"));
          const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;

          let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.deckType.includes("cycle"));
          const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;
          
          let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.deckType.includes("cycle"));    
          const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.deckType.includes("cycle"));
          const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.deckType.includes("cycle"));
          const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.deckType.includes("cycle"));
          const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
          let damageDealerCard = document.querySelector(".damage-dealer")
          let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
          damageDealerCostCard.innerHTML = randomDamageDealer.cost;
          damageDealerCard.innerHTML = randomDamageDealer.name;
          let damageDealerImage = document.querySelector(".damage-dealer-image")
          damageDealerImage.src = randomDamageDealer.src;
          
          let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("cycle"));
          const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
          let supportCard = document.querySelector(".support")
          const supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
        } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
        } else {
          averageElixirCard.style.color = "red";
        }
      };   
      if (deckType === "bait"){
          let filteredBuildings = buildings.filter(building => building.deckType.includes("bait"));
          const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          let filteredAirTroops = airTroops.filter(airTroop => airTroop.deckType.includes("bait"));
          const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;

          let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.deckType.includes("bait"));
          const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;
          
          let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.deckType.includes("bait"));    
          const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.deckType.includes("bait"));
          const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.deckType.includes("bait"));
          const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          let filteredSupport0 = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("bait"));
          const randomSupport0 = filteredSupport0[Math.floor(Math.random() * filteredSupport0.length)];
          let supportCard0 = document.querySelector(".damage-dealer")
          const supportCostCard0 = document.querySelector(".damage-dealer-cost")
          supportCostCard0.innerHTML = randomSupport0.cost;
          supportCard0.innerHTML = randomSupport0.name;
          let supportImage0 = document.querySelector(".damage-dealer-image")
          supportImage0.src = randomSupport0.src;
        
          let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("bait"));
          const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
          let supportCard = document.querySelector(".support")
          const supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          if (randomSupport.name === randomSupport0.name) {
              return alert("Ops... You got the same card twice. Please reroll your deck");
          }
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomSupport0.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
        } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
        } else {
          averageElixirCard.style.color = "red";
        }
      }
      if (deckType === "beatdown") {
        let filteredBuildings = buildings.filter(building => building.deckType.includes("beatdown"));
          const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          let filteredAirTroops = airTroops.filter(airTroop => airTroop.deckType.includes("beatdown"));
          const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;

          let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.deckType.includes("beatdown"));
          const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;
          
          let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.deckType.includes("beatdown"));    
          const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.deckType.includes("beatdown"));
          const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.deckType.includes("beatdown"));
          const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.deckType.includes("beatdown"));
          const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
          let damageDealerCard = document.querySelector(".damage-dealer")
          let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
          damageDealerCostCard.innerHTML = randomDamageDealer.cost;
          damageDealerCard.innerHTML = randomDamageDealer.name;
          let damageDealerImage = document.querySelector(".damage-dealer-image")
          damageDealerImage.src = randomDamageDealer.src;
          
          let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("beatdown"));
          const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
          let supportCard = document.querySelector(".support")
          const supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
        } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
        } else {
          averageElixirCard.style.color = "red";
        }
      }
      if (deckType === "control") {
        let filteredBuildings = buildings.filter(building => building.deckType.includes("control"));
          const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          let filteredAirTroops = airTroops.filter(airTroop => airTroop.deckType.includes("control"));
          const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;

          let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.deckType.includes("control"));
          const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;
          
          let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.deckType.includes("control"));    
          const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.deckType.includes("control"));
          const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.deckType.includes("control"));
          const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.deckType.includes("control"));
          const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
          let damageDealerCard = document.querySelector(".damage-dealer")
          let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
          damageDealerCostCard.innerHTML = randomDamageDealer.cost;
          damageDealerCard.innerHTML = randomDamageDealer.name;
          let damageDealerImage = document.querySelector(".damage-dealer-image")
          damageDealerImage.src = randomDamageDealer.src;
          
          let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("control"));
          const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
          let supportCard = document.querySelector(".support")
          const supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
        } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
        } else {
          averageElixirCard.style.color = "red";
        }
      }
      if (deckType === "siege"){
        let filteredBuildings = buildings.filter(building => building.deckType.includes("siege"));
          const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          let filteredAirTroops = airTroops.filter(airTroop => airTroop.deckType.includes("siege"));
          const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;

          let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.deckType.includes("siege"));
          const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;
          
          let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.deckType.includes("siege"));    
          const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.deckType.includes("siege"));
          const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.deckType.includes("siege"));
          const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.deckType.includes("siege"));
          const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
          let damageDealerCard = document.querySelector(".damage-dealer")
          let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
          damageDealerCostCard.innerHTML = randomDamageDealer.cost;
          damageDealerCard.innerHTML = randomDamageDealer.name;
          let damageDealerImage = document.querySelector(".damage-dealer-image")
          damageDealerImage.src = randomDamageDealer.src;
          
          let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("siege"));
          const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
          let supportCard = document.querySelector(".support")
          const supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
        } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
        } else {
          averageElixirCard.style.color = "red";
        }
      }
      if (deckType === "bridgeSpam"){
        let filteredBuildings = buildings.filter(building => building.deckType.includes("bridgeSpam"));
          const randomBuilding = filteredBuildings[Math.floor(Math.random() * filteredBuildings.length)];
          let buildingCard = document.querySelector(".building")
          let buildingCostCard = document.querySelector(".building-cost") 
          buildingCard.innerHTML = randomBuilding.name;
          buildingCostCard.innerHTML = randomBuilding.cost;
          let buildingImage = document.querySelector(".building-image")
          buildingImage.src = randomBuilding.src;
          
          let filteredAirTroops = airTroops.filter(airTroop => airTroop.deckType.includes("bridgeSpam"));
          const randomAirTroop = filteredAirTroops[Math.floor(Math.random() * filteredAirTroops.length)];
          let airTroopCard = document.querySelector(".air-troop") 
          let airTroopCostCard = document.querySelector(".air-troop-cost")
          airTroopCostCard.innerHTML = randomAirTroop.cost;
          airTroopCard.innerHTML = randomAirTroop.name;
          let airTroopImage = document.querySelector(".air-troop-image")
          airTroopImage.src = randomAirTroop.src;

          let filteredTroopsThatGoToTower = troopsThatGoToTower.filter(troopThatGoesToTower => troopThatGoesToTower.deckType.includes("bridgeSpam"));
          const randomTroopThatGoesToTower = filteredTroopsThatGoToTower[Math.floor(Math.random() * filteredTroopsThatGoToTower.length)];
          let winConditionCard = document.querySelector(".win-condition") 
          let winConditionCostCard = document.querySelector(".win-condition-cost")
          winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
          winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
          let winConditionImage = document.querySelector(".win-condition-image")
          winConditionImage.src = randomTroopThatGoesToTower.src;
          
          let filteredSmallSpells = smallSpells.filter(smallSpell => smallSpell.deckType.includes("bridgeSpam"));    
          const randomSmallSpell = filteredSmallSpells[Math.floor(Math.random() * filteredSmallSpells.length)];
          let smallSpellCard = document.querySelector(".small-spell") 
          let smallSpellCostCard = document.querySelector(".small-spell-cost")
          smallSpellCostCard.innerHTML = randomSmallSpell.cost;
          smallSpellCard.innerHTML = randomSmallSpell.name;
          let smallSpellImage = document.querySelector(".small-spell-image")
          smallSpellImage.src = randomSmallSpell.src;
          
          let filteredBigSpells = bigSpells.filter(bigSpell => bigSpell.deckType.includes("bridgeSpam"));
          const randomBigSpell = filteredBigSpells[Math.floor(Math.random() * filteredBigSpells.length)];
          let bigSpellCard = document.querySelector(".big-spell")
          let bigSpellCostCard = document.querySelector(".big-spell-cost")
          bigSpellCostCard.innerHTML = randomBigSpell.cost; 
          bigSpellCard.innerHTML = randomBigSpell.name;
          let bigSpellImage = document.querySelector(".big-spell-image")
          bigSpellImage.src = randomBigSpell.src;
          
          let filteredMiniTanks = miniTanks.filter(miniTank => miniTank.deckType.includes("bridgeSpam"));
          const randomMiniTank = filteredMiniTanks[Math.floor(Math.random() * filteredMiniTanks.length)];
          let miniTankCard = document.querySelector(".mini-tank")
          let miniTankCostCard = document.querySelector(".mini-tank-cost")
          miniTankCostCard.innerHTML = randomMiniTank.cost;
          miniTankCard.innerHTML = randomMiniTank.name;
          let miniTankImage = document.querySelector(".mini-tank-image")
          miniTankImage.src = randomMiniTank.src;
          
          let filteredDamageDealers = damageDealers.filter(damageDealer => damageDealer.deckType.includes("bridgeSpam"));
          const randomDamageDealer = filteredDamageDealers[Math.floor(Math.random() * filteredDamageDealers.length)];
          let damageDealerCard = document.querySelector(".damage-dealer")
          let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
          damageDealerCostCard.innerHTML = randomDamageDealer.cost;
          damageDealerCard.innerHTML = randomDamageDealer.name;
          let damageDealerImage = document.querySelector(".damage-dealer-image")
          damageDealerImage.src = randomDamageDealer.src;
          
          let filteredSupport = support.filter(supportCard => supportCard.deckType && supportCard.deckType.includes("bridgeSpam"));
          const randomSupport = filteredSupport[Math.floor(Math.random() * filteredSupport.length)];
          let supportCard = document.querySelector(".support")
          const supportCostCard = document.querySelector(".support-cost")
          supportCostCard.innerHTML = randomSupport.cost;
          supportCard.innerHTML = randomSupport.name;
          let supportImage = document.querySelector(".support-image")
          supportImage.src = randomSupport.src;
          
          const averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;    
          console.log("Average elixir cost of this deck is:", averageElixir.toFixed(1));
          let averageElixirCard = document.querySelector(".avarage-elixir");
          averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir.toFixed(1);
          if (averageElixir <= 3.0) {
          averageElixirCard.style.color = "green";
        } else if (averageElixir <= 4.0) {
          averageElixirCard.style.color = "yellow";
        } else {
          averageElixirCard.style.color = "red";
        }
      }
  }
});
