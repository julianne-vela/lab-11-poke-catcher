// IMPORT MODULES under test here:
const pokedex = [
    {
        '_id': '5cef3501ef6005a77cd4fd17',
        'pokemon': 'bulbasaur',
        'id': 1,
        'species_id': 1,
        'height': 7,
        'weight': 69,
        'base_experience': 64,
        'type_1': 'grass',
        'type_2': 'poison',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'special_attack': 65,
        'special_defense': 65,
        'speed': 45,
        'ability_1': 'overgrow',
        'ability_2': 'NA',
        'ability_hidden': 'chlorophyll',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'egg_group_1': 'monster',
        'egg_group_2': 'plant',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 1,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'bulbasaur',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
    },
    {
        '_id': '5cef3501ef6005a77cd4fd19',
        'pokemon': 'ivysaur',
        'id': 2,
        'species_id': 2,
        'height': 10,
        'weight': 130,
        'base_experience': 142,
        'type_1': 'grass',
        'type_2': 'poison',
        'attack': 62,
        'defense': 63,
        'hp': 60,
        'special_attack': 80,
        'special_defense': 80,
        'speed': 60,
        'ability_1': 'overgrow',
        'ability_2': 'NA',
        'ability_hidden': 'chlorophyll',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'egg_group_1': 'monster',
        'egg_group_2': 'plant',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        'generation_id': 1,
        'evolves_from_species_id': '1',
        'evolution_chain_id': 1,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'ivysaur',
        'pokedex': 'http://www.pokemon.com/us/pokedex/ivysaur'
    },
    {
        '_id': '5cef3501ef6005a77cd4fd1a',
        'pokemon': 'charmander',
        'id': 5,
        'species_id': 4,
        'height': 6,
        'weight': 85,
        'base_experience': 62,
        'type_1': 'fire',
        'type_2': 'NA',
        'attack': 52,
        'defense': 43,
        'hp': 39,
        'special_attack': 60,
        'special_defense': 50,
        'speed': 65,
        'ability_1': 'blaze',
        'ability_2': 'NA',
        'ability_hidden': 'solar-power',
        'color_1': '#F08030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'monster',
        'egg_group_2': 'dragon',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 2,
        'shape_id': 6,
        'shape': 'upright',
        'pokebase': 'charmander',
        'pokedex': 'http://www.pokemon.com/us/pokedex/charmander'
    },
    {
        '_id': '5cef3501ef6005a77cd4fd1b',
        'pokemon': 'charmeleon',
        'id': 6,
        'species_id': 5,
        'height': 11,
        'weight': 190,
        'base_experience': 142,
        'type_1': 'fire',
        'type_2': 'NA',
        'attack': 64,
        'defense': 58,
        'hp': 58,
        'special_attack': 80,
        'special_defense': 65,
        'speed': 80,
        'ability_1': 'blaze',
        'ability_2': 'NA',
        'ability_hidden': 'solar-power',
        'color_1': '#F08030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'monster',
        'egg_group_2': 'dragon',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
        'generation_id': 1,
        'evolves_from_species_id': '4',
        'evolution_chain_id': 2,
        'shape_id': 6,
        'shape': 'upright',
        'pokebase': 'charmeleon',
        'pokedex': 'http://www.pokemon.com/us/pokedex/charmeleon'
    },
    {
        '_id': '5cef3501ef6005a77cd4fd1c',
        'pokemon': 'charizard',
        'id': 7,
        'species_id': 6,
        'height': 17,
        'weight': 905,
        'base_experience': 240,
        'type_1': 'fire',
        'type_2': 'flying',
        'attack': 84,
        'defense': 78,
        'hp': 78,
        'special_attack': 109,
        'special_defense': 85,
        'speed': 100,
        'ability_1': 'blaze',
        'ability_2': 'NA',
        'ability_hidden': 'solar-power',
        'color_1': '#F08030',
        'color_2': '#A890F0',
        'color_f': '#DE835E',
        'egg_group_1': 'monster',
        'egg_group_2': 'dragon',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        'generation_id': 1,
        'evolves_from_species_id': '5',
        'evolution_chain_id': 2,
        'shape_id': 6,
        'shape': 'upright',
        'pokebase': 'charizard',
        'pokedex': 'http://www.pokemon.com/us/pokedex/charizard'
    },
];

const pokeBag = [
    { 'pokemon': 'bulbasaur', 'encountered': 2, 'captured': 1 },
    { 'pokemon': 'caterpie', 'encountered': 2, 'captured': 0 },
    { 'pokemon': 'kakuna', 'encountered': 2, 'captured': 0 },
    { 'pokemon': 'squirtle', 'encountered': 1, 'captured': 0 },
    { 'pokemon': 'charmeleon', 'encountered': 1, 'captured': 1 },
    { 'pokemon': 'pidgey', 'encountered': 2, 'captured': 1 },
    { 'pokemon': 'ivysaur', 'encountered': 1, 'captured': 0 },
    { 'pokemon': 'wartortle', 'encountered': 1, 'captured': 0 },
    { 'pokemon': 'beedrill', 'encountered': 1, 'captured': 0 },
    { 'pokemon': 'charmander', 'encountered': 1, 'captured': 0 },
    { 'pokemon': 'metapod', 'encountered': 1, 'captured': 0 }
];

import {
    findByName,
} from '../common/utils/utils.js';
import {
    encounterMungies,
    captureMungies,
    nameMungies,
} from '../results/render-results.js';

const test = QUnit.test;

test('findByName should take in Charmander and return the associated object', assert => {

    const pokemon = {
        '_id': '5cef3501ef6005a77cd4fd1a',
        'pokemon': 'charmander',
        'id': 5,
        'species_id': 4,
        'height': 6,
        'weight': 85,
        'base_experience': 62,
        'type_1': 'fire',
        'type_2': 'NA',
        'attack': 52,
        'defense': 43,
        'hp': 39,
        'special_attack': 60,
        'special_defense': 50,
        'speed': 65,
        'ability_1': 'blaze',
        'ability_2': 'NA',
        'ability_hidden': 'solar-power',
        'color_1': '#F08030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'monster',
        'egg_group_2': 'dragon',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 2,
        'shape_id': 6,
        'shape': 'upright',
        'pokebase': 'charmander',
        'pokedex': 'http://www.pokemon.com/us/pokedex/charmander'
    };

    const result = findByName(pokedex, pokemon.pokemon);

    assert.deepEqual(result, pokemon);
});

test('encounterMungies should take in rotoData and return an array of numbers reflecting the encounter counts', assert => {
    const encounterDataArray = [2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1];

    const result = encounterMungies(pokeBag);

    assert.deepEqual(result, encounterDataArray);
});

test('captureMungies should take in rotoData and return an array of numbers reflecting the capture counts', assert => {
    const captureDataArray = [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0];

    const result = captureMungies(pokeBag);

    assert.deepEqual(result, captureDataArray);
});

test('nameMungies should take in rotoData and return an array of strings reflecting the pokemon names', assert => {
    const nameDataArray = ['bulbasaur', 'caterpie', 'kakuna', 'squirtle', 'charmeleon', 'pidgey', 'ivysaur', 'wartortle', 'beedrill', 'charmander', 'metapod'];

    const result = nameMungies(pokeBag);

    assert.deepEqual(result, nameDataArray);
});
