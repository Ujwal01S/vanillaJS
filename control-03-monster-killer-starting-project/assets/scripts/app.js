const ATTACK_VALUE = 10;
const MOSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 16;
const HEAL_VALUE = 20;
let hasBonusLife= true;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound () {
    const initialPlayerHealth = currentPlayerHealth;
    const monsterDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -=monsterDamage;

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would have died but bonus health saved you');
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth >0) {
        alert('You have won');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
        aleart('You Lost!');
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have a draw')
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE
    } else if(mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const monsterDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -=monsterDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth >0) {
        alert('You have won');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
        aleart('You Lost!');
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have a draw')
    }
}



function attackHandler() {
    attackMonster('ATTACK')
}

function strongAttackHandler () {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler () {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal to more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)