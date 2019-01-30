
// =======     BATTLE PHASE    ========

//PLAYER CHARACTER
var char = {
    name: "",
    //^will have a name from user
    armor: {
        headArmor: {
            HP: 0,
            atk: 0,
            def: 0
        },
        bodyArmor: {
            HP: 0,
            atk: 0,
            def: 0
        },
        feetArmor: {
            HP: 0,
            atk: 0,
            def: 0
        },
        weapon: {
            HP: 0,
            atk: 0,
            def: 0
        },   //object
    },
    equipHPTotal: armor.headArmor.HP + armor.bodyArmor.HP + armor.feetArmor.HP + weapon.HP,
    statHP: 0,  //we assign this on confirmation on Creation page
    bonusHP: 0, //This is the same as initial statHP. 
    totalHP: equipHPTotal + statHP + bonusHP,
    // ^ This is the final, dynamic HP value
    // ------------------------------
    equipAtkTotal: armor.headArmor.atk + armor.bodyArmor.atk + armor.feetArmor.atk + weapon.atk,
    //--
    statAtk: 0, //we assign this on confirmation on Creation page
    bonusAtk: 0, //This is the same as initial statAtk. 
    totalAtk: equipAtkTotal + statAtk + bonusAtk,
    // ^ This is the final, dynamic ATK value
    // ------------------------------
    equipDefTotal: armor.headArmor.def + armor.bodyArmor.def + armor.feetArmor.def + weapon.def,
    //--    
    statDef: 0, //we assign this on confirmation on Creation pages
    bonusDef: 0, //This is the same as initial statDef. 
    totalDef: equipDefTotal + statDef + bonusDef,
    // ^ This is the final, dynamic DEF value
    // ------------------------------



    // maybe this could be an inventory array, with arrays within?
    charWeaponArr: [weapon1],   //this starts empty. We push our chosen weapon here upon confirmation on Creation page.
    charHeadArr: [head1, head2], //this starts empty, also. We push our chosen armors here at Creation page.
    charBodyArr: [body1, body2],
    charFeetArr: [feet1, feet2]

    // focus: false,
    //^turned off for now (Iceboxed)
};