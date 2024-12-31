import { bronzeAgeBackground, ironAgeBackground, mainScreenBackground, neolithicAgeBackground, stoneAgeBackground } from '../assets/imports';

export interface Task {
    id: number;
    name: string;
    description: string;
    xp: number;
    minLevel: number;
}

export interface Stage {
    id: number,
    name: string,
    tasks: Task[],
    background: string,
    minLevel: number,
    maxLevel: number
}

export const Stages: Map<string, Stage> = new Map([
    ['stoneAge', {
        id: 1,
        name: 'Stone-Age',
        tasks: [
            {
                id: 1,
                name: 'Spark of Survival',
                description: 'Find food by scavenging berries or hunting small animals',
                xp: 1,
                minLevel: 1
            },
            {
                id: 2,
                name: 'Fire Makeing',
                description: 'Discover fire by collecting wood and rubbing stones',
                xp: 2,
                minLevel: 5
            },
            {
                id: 3,
                name: 'Tool Crafting',
                description: 'Craft a basic stone tool to hunt larger prey or build shelter',
                xp: 3,
                minLevel: 10
            },
        ],
        background: stoneAgeBackground,
        minLevel: 1,
        maxLevel: 15
    }],
    ['neolithicAge', {
        id: 2,
        name: 'Neolithic-Age',
        tasks: [
            {
                id: 4,
                name: `Settler's First Step`,
                description: 'Establish a small settlement by building a primitive hut',
                xp: 5,
                minLevel: 15
            },
            {
                id: 5,
                name: 'Seed Sower',
                description: 'Plant and grow crops to secure a reliable food source',
                xp: 7,
                minLevel: 20
            },
            {
                id: 6,
                name: 'Herd Keeper',
                description: 'Domesticate animals like goats or sheep for resources',
                xp: 10,
                minLevel: 25
            },
        ],
        background: neolithicAgeBackground,
        minLevel: 16,
        maxLevel: 30
    }],
    ['bronzeAge', {
        id: 3,
        name: 'Bronze-Age',
        tasks: [
            {
                id: 7,
                name: `Ore Seeker`,
                description: 'Mine copper and tin to create the first bronze tools',
                xp: 15,
                minLevel: 30
            },
            {
                id: 8,
                name: 'Trade Pioneer',
                description: 'Engage in trade with nearby settlements to acquire rare goods',
                xp: 20,
                minLevel: 35
            },
            {
                id: 9,
                name: 'Builder of Wonders',
                description: 'Construct a notable monument or defensive wall for your civilization',
                xp: 30,
                minLevel: 40
            },
        ],
        background: bronzeAgeBackground,
        minLevel: 31,
        maxLevel: 45
    }],
    ['ironAge', {
        id: 4,
        name: 'Iron-Age',
        tasks: [
            {
                id: 10,
                name: `Iron Forging`,
                description: 'Smelt iron and create advanced weapons or farming tools',
                xp: 50,
                minLevel: 45
            },
            {
                id: 11,
                name: `Warrior’s Path`,
                description: 'Train in combat to protect your settlement or conquer new lands',
                xp: 75,
                minLevel: 50
            },
            {
                id: 12,
                name: 'Civic Leader',
                description: 'Develop governance for your growing society with laws or leadership',
                xp: 100,
                minLevel: 55
            },
        ],
        background: ironAgeBackground,
        minLevel: 46,
        maxLevel: 60
    }]
]);