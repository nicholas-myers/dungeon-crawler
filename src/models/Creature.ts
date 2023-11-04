type Species = "human" | "dwarf" | "goblin"

class Creature {
    id: number
    type?: CreatureType
    species: Species
    assets: {
        hair: string
        eyeColor: string
    }
    items: [{
        durability: number
    }]
    actions: []
    stats: {
        health: number,
        armorRating: number
    }
    traits: []
    constructor() {
    }
}

export default Creature