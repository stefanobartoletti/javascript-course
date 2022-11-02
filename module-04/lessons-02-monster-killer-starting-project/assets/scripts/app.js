const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Choose Maximum life', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
    alert('Wrong value inserted. Used 100')
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = []; 

adjustHealthBars(chosenMaxLife);

function writeToLog(entryEvent, entryValue, entryMonsterHealth, entryPlayerHealth) {
    let logEntry = {
        event: entryEvent,
        value: entryValue,
        finalMonsterHealth: entryMonsterHealth,
        finalPlayerHealth: entryPlayerHealth,
    };

    if (entryEvent === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (entryEvent === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry = {
            event: entryEvent,
            value: entryValue,
            target: 'MONSTER',
            finalMonsterHealth: entryMonsterHealth,
            finalPlayerHealth: entryPlayerHealth,
        }
    } else if (entryEvent === LOG_EVENT_MONSTER_ATTACK){
        logEntry = {
            event: entryEvent,
            value: entryValue,
            target: 'PLAYER',
            finalMonsterHealth: entryMonsterHealth,
            finalPlayerHealth: entryPlayerHealth,
        }
    } else if (entryEvent === LOG_EVENT_PLAYER_HEAL){
        logEntry = {
            event: entryEvent,
            value: entryValue,
            target: 'PLAYER',
            finalMonsterHealth: entryMonsterHealth,
            finalPlayerHealth: entryPlayerHealth,
        }
    } else if (entryEvent === LOG_EVENT_GAME_OVER){
        logEntry = {
            event: entryEvent,
            value: entryValue,
            finalMonsterHealth: entryMonsterHealth,
            finalPlayerHealth: entryPlayerHealth,
        }
    }

    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth); 
        alert('You used your bonus life');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('Draw!');
        writeToLog(LOG_EVENT_GAME_OVER, 'DRAW', currentMonsterHealth, currentPlayerHealth);
        // reset();
    } else if (currentMonsterHealth <= 0) {
        alert ('You won!');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
        // reset();
    } else if (currentPlayerHealth <= 0) {
        alert ('You lost!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
        // reset();
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

    endRound();
}


function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You cant heal more than you initial health value")
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function printLogHandler() {
    console.log(battleLog)
}


attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)