//armament

// --DC - сложность

/*
    DC - Сложность спасброска
    AC - Класс доспеха
    HD - (HealthDice) Уровень персонажа
*/

const cost = {
    discard: "Отменить фильтр",
    cst0:   '0',
    cst1:   '1',       
    cst2:   '2',       
    cst3:   '3',       
    cst4:   '4',
    cst5:   '5',           
    cst6:   '6',
    cst10:  '10',
    varys:  'Вариативная'
}

const castTime = {
    discard:        "Отменить фильтр",  
    none:           "Нет",                           //"none",
    bonus:          "Бонусное действие",             //"Bonus action",
    action:         "Основное действие",             //"1 action",
    reaction:       "Реакция",                       //"Reaction",
    reactionTkDmg:  "Реакция на получение урона",    //"Reaction, which you take when you take damage from a source you can see",
    round:          "Раунд",                         //"1 round"
    hour1:          "1 Час",                         //"hour1"
    minute10:       "10 Минут"                       //"minute10"
}

const rng = {
    discard:        "Отменить фильтр",               
    none:           "Нет",                           //"none",
    self:           "На себя",                       //"Self",
    touch:          "Касание",                       //"Touch",
    ft5:            "5 футов",                       //"5 feet",
    ft10:           "10 футов",                      //"10 feet",
    ft20:           "20 футов",                      //"20 feet",
    ft30:           "30 футов",                      //"30 feet",
    ft40:           "40 футов",                      //"40 feet",
    ft60:           "60 футов",                      //"60 feet",
    ft80:           "80 футов",                      //"80 feet",
    ft100:          "100 футов",                     //"100 feet",
    ft120:          "120 футов",                     //"120 feet",
    ft200:          "200 футов",                     //"200 feet",
    ft500:          "500 футов",                     //"500 feet",
    heilinBogen:    "Дистанция святого лука",        //"Equal to your Heilig Bogen",
    cone30:         "На себя (30-футовый конус)",    //"Self (30-foot cone)",
    mile1:          "1 миля (5280 футов)",           //"1 mile",
    varies:         "Вариативная",                   //"Varies",
    special:        "Специальноя",                   //"Special",
    sight:          "Зона видимости"
}

const tp = {
    discard: {
        name: "Отменить фильтр",
        ico: null
    },
    acid: {
        name: "Кислота",
        ico: '<i class="fa-solid fa-soap"></i>'
    },                                               //"Acid",
    blood: {
        name: "Кровь",
        ico: '<i class="fa-solid fa-droplet"></i>'
    },                                               //"Blood",
    bow: {
        name: "Лук",
        ico: '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
    },                                               //"Bow",
    dark: {
        name: "Тьма",
        ico: '<i class="fa-solid fa-location-pin"></i>'
    },                                               //"Dark",
    defence: {
        name: "Защита",
        ico: '<i class="fa-solid fa-shield-halved"></i>'
    },                                               //"Defence",
    earth: {
        name: "Земля",
        ico: '<i class="fa-regular fa-gem"></i>'
    },                                               //"Earth",
    fire: {
        name: "Огонь",
        ico: '<i class="fa-solid fa-fire"></i>'
    },                                               //"Fire",
    common: {
        name: "Общие",
        ico: '<i class="fa-solid fa-group-arrows-rotate"></i>'
    },                                               //"Common",
    gravity: {
        name: "Гравитация",
        ico: '<i class="fa-solid fa-tent-arrows-down"></i>'
    },                                               //"Gravity",
    healing: {
        name: "Лечение",
        ico: '<i class="fa-solid fa-heart-pulse"></i>'
    },                                              //"Healing",
    hollow: {
        name: "Пустота",
        ico: '<i class="fa-solid fa-moon"></i>'
    },                                              //"Hollow",
    ice: {
        name: "Лед",
        ico: '<i class="fa-solid fa-ice-cream"></i>'
    },
    illusion: {
        name: "Иллюзия",
        ico: '<i class="fa-solid fa-eye"></i>'
    },
    kido: {
        name: "Кидо",
        ico: '<i class="fa-solid fa-hat-wizard"></i>'
    },
    light: {
        name: "Свет",
        ico: '<i class="fa-solid fa-sun"></i>'
    },
    lightning: {
        name: "Молния",
        ico: '<i class="fa-solid fa-bolt-lightning"></i>'
    },
    oppression: {
        name: "Давление",
        ico: '<i class="fa-solid fa-arrows-down-to-line"></i>'
    },
    poison: {
        name: "Яд",
        ico: '<i class="fa-solid fa-skull-crossbones"></i>'
    },
    shell: {
        name: "Оболочка",
        ico: '<i class="fa-solid fa-circle-notch"></i>'
    },
    sound: {
        name: "Звук",
        ico: '<i class="fa-solid fa-ear-listen"></i>'
    },
    summon: {
        name: "Призыв",
        ico: '<i class="fa-solid fa-paw"></i>'
    },
    water: {
        name: "Вода",
        ico: '<i class="fa-solid fa-water"></i>'
    },
    weapon: {
        name: "Оружие",
        ico: '<i class="fa-solid fa-khanda"></i>'
    },
    wind: {
        name: "Оружие",
        ico: '<i class="fa-solid fa-wind"></i>'
    }
}

const rch = {
    discard:        "Отменить фильтр",  
    none:           "Нет",                           //"none",
    rch6:           "6",                             //"6",
    rch1_6:         "1-6",                           //"1—6",
    rchDay1:        "1/День",                        //"1/Day",
    rchRest_SL:     "Короткий или долгий отдых",     //"Short or Long Rest"
    rchRest_L:      "Длительный отдых"               //"Long Rest"
}

const knd = {
    discard:        "Отменить фильтр",
    usual:          "Обячная способность",
    ultimate:       "Ультиматичная способность",
    ascended:       "Способность возвышения",
    mastershot:     "Мастерский выстрел"
}

const hd = {
    discard: "Отменить фильтр",
    none:    "нет",
    hd1:       "HD 1",
    hd2:       "HD 2",
    hd3:       "HD 3",
    hd4:       "HD 4",
    hd5:       "HD 5",
    hd6:       "HD 6",
    hd7:       "HD 7",
    hd8:       "HD 8",
    hd10:      "HD 10",
    hd11:      "HD 11",
    hd12:      "HD 12",
    hd14:      "HD 14",
    hd15:      "HD 15",
    hd16:      "HD 16",
    hd18:      "HD 18",
    hd19:      "HD 19",
    hd20:      "HD 20",
    hd23:      "HD 23",
    hd24:      "HD 24",
    hd25:      "HD 25",
    hd26:      "HD 26"
}

const componentsCol = {
    discard:         "Отменить фильтр",
    verbal:          "Вербальный",
    somatic:         "Соматический",
    material:        "Материальный",
    released:        "Высвобождение"
}

const durationCol = {
    discard:         "Отменить фильтр",
    until_sealed:    "До отмены",    
    concentration:   "Концентрация",
    minute1:         "1 Минута",   
    minute2:         "2 Минуты",
    minute5:         "5 Минут",
    minute10:        "10 Минут", 
    round1:          "1 Раунд", 
    round2:          "2 Раунда",    
    round5:          "5 Раундов",
    instantaneous:   "Мгновенно",   
    hour1:           "1 Час",     
    special:         "Особенное",
    day2:            "2 Дня" 
}

const armamentAbilitiescolumns = {
    cost: {
        translate: "Стоимость",
        value: cost,
        itemType: "value"
    },
    castTime: {
        translate: "Время накладывания",
        value: castTime,
        itemType: "value"
    },
    rng: {
        translate: "Дистанция",
        value: rng,
        itemType: "value"
    },
    tp: {
        translate: "Тип",
        value: tp,
        itemType: "value"
    },
    rch: {
        translate: "Перезарядка",
        value: rch,
        itemType: "value"
    },
    componentsCol: {
        translate: "Компоненты",
        value: componentsCol,
        itemType: "bool"
    },
    durationCol: {
        translate: "Длительность",
        value: durationCol,
        itemType: "bool"
    },
    knd: {
        translate: "Тип способности",
        value: knd,
        itemType: "value"
    },
    hd: {
        translate: "HD",
        value: hd,
        itemType: "value"
    }
}

const armamentAbilitiesContent = [
    {
        type: tp.acid,
        cost: cost.cst0, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотная форма [Acid Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure acid. While this ability is active, your armament damage type is changed to acid damage.
    If you have a Summon, you may have this ability apply to it's weapons as well.
    You may dismiss this ability as as a bonus action.
     You may reselect this ability multiple times, each time choosing one of the following options:
     * You may activate this ability as a bonus action and dismiss it at will.
    * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.acid,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотное оружие [Acidic Weapon]', 
        requirements: '', 
        data:
        `
    Your armament glistens with acid, dealing an additional 1d6 acid damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.acid,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Едкое оружие [Caustic Weapon]', 
        requirements: 'Одна кислотная способность', 
        data:
        `
    When you score a critical hit with your armament, the target has residual acid on them, taking 1d6 acid damage at the start of each of it's turns.
    
                                On each of it's turns, the target can use an action to make a Dexterity saving throw. On a success, the target removes the residual acid, ending this effect.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.acid,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотная броня [Acid Armor]', 
        requirements: 'Одна кислотная способность', 
        data:
        `
     Your body secretes a layer of acid for the duration. The acid does not harm you. For the duration, you gain the following benefits:
                                * You have resistance to acid damage
                                * Any nonmagical weapon made of metal or wood that hits you corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits you is destroyed after dealing damage. If the weapon is magical, its owner must make a Constitution saving throw. On a failure it receives the -1 penalty to damage rolls, but the weapon is not destroyed if the penalty reaches -5 or beyond. If the ammunition that hit you is magical, its owner must make a Con saving throw, on a failure the ammunition is destroyed after dealing damage.
    
                                After 3 hours magical weapons with penalties from this ability are removed.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You are now immune to acid damage instead
                                * Increase the saving throw DC by 1
                                * Double the amount of hours it takes for penalties to be removed
        `
    },
    {
        type: tp.acid,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотный выстрел [Acid Shot]', 
        requirements: 'Одна кислотная способность', 
        data:
        `
    You target one creature you can see within range and hurl acid at them. They must make a dexterity saving throw. On a failure they are covered in acid. Whenever the target takes an action, they are dealt 1d10 acid damage.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components
                                * This ability no longer requires concentration
        `
    },
    {
        type: tp.acid,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотный плевок [Acid Spit]', 
        requirements: 'Две кислотные способности', 
        data:
        `
    A stream of acid spews from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d6 acid damage at start of each of its turns.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components
                                * This ability no longer requires concentration
                                * Increase the damage by an additional 1d6, maximum 4d6.
        `
    },
    {
        type: tp.acid,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотный бассейн [Acid Pool]', 
        requirements: 'Две кислотные способности', 
        data:
        `
    Acid covers the ground in a 10-foot radius centered on a point within range you choose and turns it into difficult terrain for the duration.
    
                                When the acid appears, each creature standing in its area must succeed on a Dexterity saving throw or take 1d4 acid damage. A creature that enters the area or ends its turn there takes 1d6 acid damage.
    
                                Each time you select this ability the damage is increased by 1d6, to a maximum of 4d6.
    
                                You may select this ability multiple times, each time selecting one of the following options:
                                * Increase the range by 10 feet, radius by 10 feet, and duration by one minute.
                                * This ability no longer requires V or S components.
                                * A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.
        `
    },
    {
        type: tp.acid,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кислотный дождь [Acid Rain]', 
        requirements: 'Три кислотные способности', 
        data:
        `
    Acidic rain pours down in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature that starts their turn in the cylinder takes 4d6 acid damage.
    
                                The acid turns the area of effect into difficult terrain for the duration.
    
                                You may select this ability multiple times, each time selecting one of the following options:
                                * This ability no longer requires concentration
                                * This ability no longer requires V or S components
                                * Increase the range by 10 feet, radius by 10 feet, and duration by one minute.
        `
    },
    {
        type: tp.acid,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Прикосновение разложения [Corrosive Touch]', 
        requirements: 'Четыре кислотные способности', 
        data:
        `
    You imbue your armament with corrosive acid. For the duration, when you hit a creature with your armament and the creature is wearing non-stone, non-magical armor, it takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed.
                                If the armor or shield is magical, the creature must make a Constitution saving throw, on a failure gaining the cummulative penalty for the duration. The armor is not destroyed if the AC is reduced to 10 or beyond and the shield isn't destroyed either if its bonus is reduced to +0 or beyond. After 3 hours magical armor or shields with penalties from this ability are removed.
    
                                You may selected this ability multiple times, each time selecting one of the following options:
                                * Increase the duration by 1 round
                                * Increase the saving throw by 1
                                * Double the amount of hours it takes for penalties to be removed
        `
    },
    {
        type: tp.acid,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Атака разложением [Corrosive Attack] (Ultimate)', 
        requirements: 'Пять кислотных способностей', 
        data:
        `
    You choose an area within range and unleash a deadly corrosive acid in a 40-foot cube. Each creature in the area takes 10d6 acid damage on a failed save and half as much on a successful one.
    
                                Additionally, any creatures that failed their saving throw continue to take 10d6 acid damage at the beginning of their turns as long as you maintain concentration. If these creatures were wielding any non-stone, non-magical weapons, their weapons take a permanent and 
    
                                \pagebreakNum
    
                                cumulative -1 penalty to damage rolls each time they take damage from this ability. If it's penalty drops to -5, the weapon is destroyed. If they are wielding any non-stone, non-magical armor or shields, it takes a permanent and cumulative -1 penalty to the AC it offers. Armor os shields reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed.
    
                                If any of the affects weapons, armor or shields are magical, they are allowed a saving throw each time they take damage, on a success not receiving a penalty.
    
                                Magical objects and fauna within the area that are not attended  are allowed a saving throw. on a failed saving throw they suffer the same effects as a creature that failed the saving throw. Mundane fauna and non-stone objects decay and corrodes away.
    
                                You may reselect this ability a second time, if you do the range is doubled, the cube size is doubled, and the damage die size is increased to a d10.
    
        `
    },
    {
        type: tp.acid,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма разложения [Corrosive Form] (Ascended)', 
        requirements: 'Атака разложением и шесть кислотных способностей', 
        data:
        `
    You choose an area within range and unleash a deadly corrosive acid in a 40-foot cube. Each creature in the area takes 10d6 acid damage on a failed save and half as much on a successful one.
    
                                Additionally, any creatures that failed their saving throw continue to take 10d6 acid damage at the beginning of their turns as long as you maintain concentration. If these creatures were wielding any non-stone, non-magical weapons, their weapons take a permanent and 
    
                                \pagebreakNum
    
                                cumulative -1 penalty to damage rolls each time they take damage from this ability. If it's penalty drops to -5, the weapon is destroyed. If they are wielding any non-stone, non-magical armor or shields, it takes a permanent and cumulative -1 penalty to the AC it offers. Armor os shields reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed.
    
                                If any of the affects weapons, armor or shields are magical, they are allowed a saving throw each time they take damage, on a success not receiving a penalty.
    
                                Magical objects and fauna within the area that are not attended  are allowed a saving throw. on a failed saving throw they suffer the same effects as a creature that failed the saving throw. Mundane fauna and non-stone objects decay and corrodes away.
    
                                You may reselect this ability a second time, if you do the range is doubled, the cube size is doubled, and the damage die size is increased to a d10.
    
        `
    },
    {
        type: tp.acid,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сверхкислота [Superacid] (Ascended)', 
        requirements: 'Шесть кислотных способностей', 
        data:
        `
    Your Acid abilities are increased in power.
    
                                Your armament abilities or Kido that deal acid damage ignore acid resistance. If a creature would be immune to acid damage, it instead takes half damage.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Клинок крови [Blade of Blood]', 
        requirements: '', 
        data:
        `
    You empower your armament with your blood. When you activate this ability, you lose 1d3 hit points and your armament deals an additional 1d6 damage. You may dismiss this ability as a bonus action.
                                Each time you reselect this ability the dice size of the hit points you lose increases by one step to a maximum of 1d10 and the additional damage dice size this ability deals increases by one step to a maximum of 1d12.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires concentration, V or S components.
                                * Reduce the dice size of the hit points you lose from this ability by one step, minimum 1d3.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        true, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кровоточащий удар [Bleeding Strike]', 
        requirements: '', 
        data:
        `
    The next time you hit a creature with your armament before this ability ends, the weapon opens a grievous wound on the target. At the start of each of its turns the target must make a Constitution saving throw. On a failed save, it takes 1d4 damage. On a successful save, the effect ends. If the target or a creature within 5 feet of it uses an action to patch the wound, or if some other effect heals the wound, the effect ends.
                                Each time you reselect this ability, the duration increased by 1 round.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step; maximum 1d10.
                                * Increase the save DC by 1; you can only select this option a total of 5 times.
    
        `
    },
    {
        type: tp.blood,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ранящий клинок [Wounding Blade]', 
        requirements: 'Клинок крови (3)', 
        data:
        `
    When you score a critical hit on a creature with your armament, the target is dealt 2 points of Constitution damage.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кровавый щит [Blood Shield]', 
        requirements: 'Одна кровавая способность', 
        data:
        `
    When an attack roll is made against you, as a reaction you create a shield of your own blood. You lose 1d4 hit points and gain the same amount as a bonus to your armor class against that attack.
                                Each time you reselect this ability the dice size is increased by one step to a maximum of a 1d12.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components. You may select this option a second time, no longer requiring the W component.
                                * The duration of this ability is changed to ""Concentration, until your next turn.""
        `
    },
    {
        type: tp.blood,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.touch, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: true, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кровавый ремесло [Bloodcraft]', 
        requirements: 'Одна кровавая способность', 
        data:
        `
    You can affect or extract information from blood in various methods. The blood must be unattended, such as puddles of blood within a 5-foot cube or a vial blood. You may also touch a willing creature and they lose 1d4 hit points.
                                * You know the type of creature who shed the blood. Additionally, for the next 24 hours you can change the blood and when the creature or blood is identified, it registers as another creature type of your choice.
                                * You know if the blood carries any diseases or poisons. Additionally, you know the type of disease or poison if you've encountered it before.
                                * You know how old the blood is or the age of the creature.
                                * You turn a puddle of blood into a trap. For the next 8 hours, when a creature enters the same space as the blood they take 1d6 piercing damage.
                                * You fortify a creatures blood. For the next hour the target has advantage on Constitution saving throws against poisons and diseases.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Вампирский удар [Vampiric Strike]', 
        requirements: 'Одна кровавая способность', 
        data:
        `
    For the duration when you make a successful melee weapon attack with your armament against a creature, you reap the life energy from them. You regain hit points equal to the base damage dealt by your armament.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * Increase the duration by 1 round.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Истощение реацу [Drain Reiatsu]', 
        requirements: 'Вампирский удар и одна кровавая способность', 
        data:
        `
     You make a melee weapon attack with your armament against a creature. On a success you rend the targets reiatsu. The target loses 1d6 spell points. If the target has spell slots, they loses 1d3 spell slots of their choice.
    
                                This ability has no affect on creatures that can't cast spells.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the damage by one step, maximum 1d12.
                                * You regain SP equal to the SP the target lost. If you have spell slots you regain a number of spell slots they lost.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кровавый выстрел [Blood Shot]', 
        requirements: 'Две кровавых способности', 
        data:
        `
    Your fire a projectile of blood toward a creature within range. Make a ranged weapon attack against the target. On a hit, the target takes 3d6 piercing, bludgeoning or slashing damage (your choice when you activate this ability).
                                Each time you reselect this ability, you gain an additional projectile to a maximum of four. You can direct the additional projectiles at the same target or a different one, you must make a separate attack roll for any additional projectiles.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V components.
                                * The range of this ability is increased by 10 feet.
                                * Increase the damage dice size to a d8. You must have selected this ability four times before you can select this option.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Магия крови [Blood Magic]', 
        requirements: 'Три кровавых способности', 
        data:
        `
    You use your own life force to fuel your Kidō. If you would enhance your Kidō with metamagic, instead of expending Sorcery Points, you instead lose 1d8 hit points for each Sorcery Point that would be spent. You can only do this a number of times equal to your proficiency bonus. On a long rest you regain any spent uses.
    
                                When casting Kidō, instead of spending SP or Spell Slots, you roll your hit die a number of times equal to the spells level. You lose a number of hit points equal to the total amount rolled.
        `
    },
    {
        type: tp.blood,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Взрыв крови [Blood Burst]', 
        requirements: 'Три кровавых способности', 
        data:
        `
    You create an explosion of blood from you. Each creature within 30 feet of you must succeed on a Dexterity saving throw or take 6d6 bludgeoning, piercing or slashing damage (your choice when you activate this ability). A creature that succeeds on its saving throw takes half as much damage.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the area by 10 feet.
                                * Increase the save DC by 2.
                                * If a creature critically fails on their saving throw, they take 1 point of Constitution damage. You must have selected this ability three times before you can select this option.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Предвидящий выстрел [Anticipating Shot]', 
        requirements: '', 
        data:
        `
    Whenever a hostile creature uses special movement, at the end of the movement if they are within your Heilig Bogen range, as a reaction you can make a single weapon attack against that creature.
    
                                While ascended, you make two weapon attacks against that creature instead of one.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.mastershot,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Изгоняющая стрела [Banishing Arrow] (Master Shot)', 
        requirements: '', 
        data:
        `
    You use abjuration magic to temporarily banish your target to a harmless location in the valley of screams. The creature hit doesn't take damage and instead must succeed on a Charisma saving throw or be banished. While banished in this way, the target's speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Обманчивая стрела [Beguiling Arrow]', 
        requirements: '', 
        data:
        `
    Your enchantment magic causes this arrow to temporarily beguile its target. When the creature is hit, instead of dealing damage choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the charmed target is attacked, dealt damage or forced to make a saving throw.
    
                                While ascended, this effect instead ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Разрывная стрела [Bursting Arrow]', 
        requirements: '', 
        data:
        `
    You imbue your Heilig Bogen with force energy drawn from the school of evocation. The energy detonates after your attack. Immediately after you hit the creature, the target and all other creatures within 30 feet of it take 2d6 force damage.
    
                                While ascended, the damage is increased to 2d10.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Критическая стрела [Critical Arrow]', 
        requirements: '', 
        data:
        `
     You score a critical hit on a roll of 18 or 20.
    
                                While ascended, you score a critical hit on a roll of 17 through 20 instead.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Изогнутая стрела [Curving Arrow]', 
        requirements: '', 
        data:
        `
    You learn how to direct an errant attack toward a new target. When you make an attack and miss, you can use a bonus
    
                                action to reroll the attack roll against a different target within 60 feet of the original target if you made a ranged attack, or a different target within 5 feet of the original target if you made a melee attack.
    
                                While ascended, you have advantage on the reroll.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ослепительная стрела [Dazing Arrow]', 
        requirements: '', 
        data:
        `
    The creature hit must make a Constitution saving throw or suffer disadvantage on attacks until the end of their next turn.
    
                                While ascended, if the target fails the Constitution saving throw they also suffer disadvantage on saving throws for the duration. 
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отклоняющая стрела [Deflecting Arrow]', 
        requirements: '', 
        data:
        `
    You can use your reaction to deflect a melee weapon attack or a missile from a ranged attack when you are hit. When you do so, the damage you take from the attack is reduced by your Heilig Bogen base Damage + your Dexterity modifier + your Quincy level.
    
                                While ascended, the damage is reduced by your Heilig Bogen base Damage + your Dexterity modifier + double your Quincy level instead.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Рассеивающая стрела [Dispelling Arrow]', 
        requirements: '', 
        data:
        `
    You use abjuration magic to try to temporarily suppress magic. The creature or object hit, or magical effect within 10 feet of the hit target, has any spell of 3rd level or lower on it to end. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.
    
                                While ascended, any spell of 5th level or lower on the target ends instead of 3rd.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Разрушающая стрела [Disrupting Arrow]', 
        requirements: '', 
        data:
        `
    An undead creature hit takes an extra 1d6 radiant damage. The target must make a Wisdom saving throw. If the creature fails it's saving throw, it is turned for 1 minute or until it takes damage.
    
                                A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions.
    
                                For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.
    
                                While ascended, the damage is increased to 3d6 and the target has disadvantage on their Wisdom saving throw.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Дальняя стрела [Distant Arrow]', 
        requirements: '', 
        data:
        `
    Attacking at long range doesn't impose disadvantage on your attack. If the hit creature is in your long range it takes an additional 2d6 force damage.
    
                                While ascended, the creature takes an additional 2d8 force damage instead.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отвлекающая стрела [Distracting Arrow]', 
        requirements: '', 
        data:
        `
    You distract your foe giving your allies an opening. The hit creature takes an additional 1d6 force damage and the next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.
    
                                While ascended, the damage is increased to 2d6. 
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Элементальная стрела [Elemental Arrow]', 
        requirements: '', 
        data:
        `
    You imbue your arrow with Elemental power. Choose one of the following damage types: acid, cold, fire, lightning, necrotic, poison, radiant or thunder. When you hit the creature, the damage you deal is changed to the chosen damage type and the target takes an additional 1d6 damage of the chosen type.
    
                                While ascended, the additional damage is increased to 2d6.  
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.mastershot,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ослабляющая стрела [Enfeebling Arrow] (Master Shot)', 
        requirements: '', 
        data:
        `
    You weave necromantic magic into your attack. The creature hit takes an extra 2d8 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by it's weapon attacks is halved until the start of your next turn.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.mastershot,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Цепляющаяся стрела [Grasping Arrow] (Master Shot)', 
        requirements: '', 
        data:
        `
    When this attack strikes its target, conjuration magic creates grasping ethereal bindings, which wrap around the target. The creature hit takes an extra 2d6 force damage, its speed is reduced by 10 feet, and it takes 2d6 bludgeoning damage the first time on each turn it moves 1 foot or more. The target or any creature that can reach it can use its action to remove the bindings with a successful Strength (Athletics) check against your save DC. Otherwise, the bindings last for 1 minute or until this ability is used again.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.heilinBogen, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Клавьер [Klavier]', 
        requirements: '', 
        data:
        `
    You fire multiple arrows in succession. You make three separate ranged weapon attacks against one target within range.
                                On a hit, the target takes an additional 1d6 force damage.
    
                                While ascended, the additional damage is increased to 2d6.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Легкий дождь [Licht Regen] (Master Shot)', 
        requirements: '', 
        data:
        `
    After gathering reishi, you unleash a devastating volley of innumerable arrows. You unleash a column of arrows from you in a direction of your choice. Each creature within the 30-foot-radius, 90-foot-high cylinder must make a Dexterity saving throw. A creature takes 8d6 force damage on a failed save, or half as much damage on a successful one.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Пронзающая стрела [Piercing Arrow]', 
        requirements: '', 
        data:
        `
    You use transmutation magic to give your arrow an ethereal quality. When you use this option, you don't make an attack roll for the attack. Instead, the arrow shoots forward in a line, which is 1 foot wide and 60 feet long, before disappearing. The arrow passes harmlessly through abjects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the attack, plus an additional 2d8 piercing damage. On a successful save, a target takes half as much damage.
    
                                While ascended, the additional damage is increased to 2d10.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Закрепляющая стрела [Pinning Arrow]', 
        requirements: '', 
        data:
        `
    When you hit a creature, instead of dealing damage, you attempt to reduce the targets speed. If the target is large or smaller, it must make a Strength saving throw. On a failed save, you reduce the targets movement by half until the end of your next turn.
    
                                While ascended, targets that are a greater size category than large are affected.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Точная стрела [Precise Arrow]', 
        requirements: '', 
        data:
        `
    You gain a +20 bonus on your attack roll. If the attack hits, you add your Wisdom modifier to the damage roll.
                                While ascended, you deal an additional 2d6 force damage.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отталкивающая стрела [Pushing Arrow]', 
        requirements: '', 
        data:
        `
    When you hit a creature instead of dealing damage, you attempt to drive the target back. If the target is large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.
    
                                While ascended, targets that are a greater size category than large are affected.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft120, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Поисковая стрела [Seeking Arrow]', 
        requirements: '', 
        data:
        `
    Using divination magic, you create an arrow with the ability to seek out a target. Choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw, on a failed save taking damage as if they were hit by the attack, or half as much on a successful one. Otherwise, the arrow disappears after travelling as far as it can.
    
                                On a failed save, you also always know the target’s location for the duration, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can’t become hidden from you, and if it’s invisible, it gains no benefit from that condition against you.
    
                                While ascended, the duration increased to 24 hours.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.mastershot,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Теневая стрела [Shadow Arrow] (Master Shot)', 
        requirements: '', 
        data:
        `
    You weave illusion magic into your attack, causing it to occlude your foe's vision with shadows. The creature hit takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 10 feet away until the start of your next turn.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.mastershot,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Духовная стрела [Soul Arrow] (Master Shot)', 
        requirements: '', 
        data:
        `
    When you hit a creature, instead of dealing damage, the target temporarily loses it's magic prowess. If the target has any spell slots, they lose 2d4 spell slots of their choice, as if they were expended. If the target has Spell Points, they lose 2d8 SP as if they were expended. 
        `
    },
    {
        type: tp.bow,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Шагающий выстрел [Stepping Shot]', 
        requirements: '', 
        data:
        `
    When you hit a creature with your heilig bogen, you can immediately use Hirenkyaku.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Спотыкающаяся стрела [Tripping Arrow]', 
        requirements: '', 
        data:
        `
    When you hit a creature, instead of dealing damage you attempt to knock the target down. If the target is large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.
    
                                While ascended, targets that are a greater size category than large are affected.
        `
    },
    {
        type: tp.bow,
        cost: cost.cst5, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.mastershot,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ранящая стрела [Wounding Arrow] (Master Shot)', 
        requirements: '', 
        data:
        `
    When you hit a creature, you wound the target. At the start of each of the wounded creatures turns, it takes 2d6 necrotic damage for each time you've wounded it, and it can then make a Constitution saving throw, ending the effect of all such wounds on it on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a Wisdom (Medicine) check, ending the effect of such wounds on it on a success.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Некротическая форма [Necrotic Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure dark energy. While this ability is active, your armaments damage type is changed to necrotic damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Темное оружие [Dark Weapon]', 
        requirements: '', 
        data:
        `
    Darkness spreads across your armament, dealing an additional 1d4 necrotic damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Теневое оружие [Umbral Weapon]', 
        requirements: 'Одна темная способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 Nectrotic damage, and is blinded. On each of its turns, the target can use an action to make a Charisma saving throw. On a success, this effect ends. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of 1d10.
    
        `
    },
    {
        type: tp.dark,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Аура тьмы [Aura of Dark]', 
        requirements: 'Две темныя способности', 
        data:
        `
    Your body emanates with deadly darkness for the ability's duration. The darkness doesn't harm you. Until the ability ends, you gain the following benefits:
                                * You have resistance to Necrotic and Radiant damage.
                                * You shed magical darkness around you in a 10-foot-radius sphere. Each time you reselect this ability, the sphere is increased by 10 feet.
                                * Any creature that moves inside the sphere for the first time on a turn or ends its turn there, takes 1d4 necrotic damage. Each time you reselect this ability, the damage dice size is increased by one step to a maximum of 1d10.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * While this ability is active you are instead immune to necrotic damage.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Тьма [Darkness]', 
        requirements: 'Одна темная способность', 
        data:
        `
    Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration.
    
                                The darkness spreads around corners. Nonmagical light can't illuminate the area. if the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with a opaque object, such as a bowl or a helm, blocks the darkness.
    
                                If any of this ability's area overlaps with an area of light created by Kido of 2nd level or lower, the spell that created the light is dispelled. Each time you reselect this ability, the level of kido this ability dispels increases by one.
    
                                If any of this ability's area overlaps with an area of light created by a armament, you make a Reiatsu check, if successful, the light is dispelled. Each time you reselect this ability, you gain a +1 bonus on this Reiatus check.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range and radius of this ability by 10 feet.
                                * Increase the duration by 1 minute.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.touch, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Темное зрение [Darkvision]', 
        requirements: 'Тьма [Darkness]', 
        data:
        `
    You touch a willing creature giving it's eyes an umbral glow. For the duration, that creature has darkvision out to a range of 60 feet. Each time you reselect this ability, the range is increased by 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the duration of this ability by 1 minute.
                                * This ability no longer requires V components.
                                * Affected creatures may see into magical darkness, and while this ability is active, the affected creatures are immune to being Blinded.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft80, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Теневой взрыв [Umbral Blast]', 
        requirements: 'Две темныя способности', 
        data:
        `
    A beam of darkness streaks toward a creature within range. Make a ranged attack against the target. On a hit, the target takes 3d8 necrotic damage.
    
                                Each time you reselect this ability, you gain an additional beam to a maximum of four beams. You can direct the additional beams at the same target or a different one, you must make a separate attack roll for any additional beams.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V components.
                                * The range is increased by 10 feet.
                                * Increase the damage die size to a d10. You must have select this ability four times before you can select this option.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена тьмы [Wall of Dark]', 
        requirements: 'Три темных способности', 
        data:
        `
    A glowing wall of inky blackness appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick.
    
                                The wall blocks line of sight, but creatures and objects can pass through it.
    
                                When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d6 necrotic damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded. A blinded creature can make a Constitution saving
    
                                throw at the end of each of its turns, ending the effect on itself on a success.
    
                                A creature that ends its turn in the walls area takes 4d6 necrotic damage. Until the spell ends, you can use an action to launch a beam of darkness from the wall at one creature you can see within 40 feet of it. Make a ranged attack. On a hit, the target takes 4d6 necrotic damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the walls length drops to 0 feet, the ability ends. 
    
                                Each time you reelect this ability, increase the damage by 1d6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range, height, and length of this ability by 10 feet.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * The blind duration is increased by 1 minute.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Всплеск тьмы [Burst of Dark] (Ultimate)', 
        requirements: 'Четыре темных способности', 
        data:
        `
    Darkness erupts outwards from you in a 60-foot-radius-sphere centered on you. Each creature within the area must make a Constitution saving throw. On a failed save, a creatures takes 7d8 necrotic damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded.
    
                                A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.
    
                                This ability dispels any light in its area that was created by Kido. Each time you reselect this ability, increase the damage by 1d8.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the radius sphere by 10 feet.
                                * Increase the save DC 2.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Черная дыра [Black Hole] (Ascended)', 
        requirements: 'Пять темных способностей', 
        data:
        `
    Pitch darkness erupts in a 60-foot-radius-sphere centered on a point you choose within range. Each creature in that darkness must make a Constitution saving throw. On a failed save, a creature takes 20d6 necrotic damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this ability. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns.
    
                                On a successful save, it is no longer blinded. This ability dispels any light in its area that was created by Kido.
    
                                If a creature is slain by this ability they are sucked in the center, gone, and utterly destroyed. Only the direct intervention of a deity can restore an annihilated creature.
    
                                You may reselect this ability a second time, if you do the radius of the sphere is doubled, creatures are blinded whether they succeed the save or not, and the damage dice size is increased to d10.
        `
    },
    {
        type: tp.dark,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Нечастивая тьма [Unholy Dark] (Ascended)', 
        requirements: 'Шесть темных способностей', 
        data:
        `
    Your Dark abilities are increased in power.
    
                                Your armament abilities or Kido that deal necrotic damage ignore resistances. If a creature would be immune to necrotic damage, it instead takes half damage.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Броня [Armor]', 
        requirements: '', 
        data:
        `
    When released, your armament transforms into a suit of armor around you. This armor takes the form of any light armor from the Player's Handbook (or any other source approved by your DM). You are considered proficient with this armor.
    
                                If you have a Summon when you activate this ability, you may have your Summon gain the armor instead.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * You retain your weapon when you use this ability.
                                * You may select medium armor with this ability. If you select this option a second time you may select heavy armor.
                                * If your armament would gain a Magic Weapon bonus, as a bonus action you may instead apply that bonus to your AC. You must have selected four Armor abilities before you can choose this option.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Щит [Shield]', 
        requirements: '', 
        data:
        `
    You manifest a shield in your off-hand. If you have a Summon when you activate this ability, you may have your Summon gain the shield instead.
    
                                You may reselect this ability a second time, if you do, while wielding your shield, your off-hand is considered open.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.ft5, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Удар щитом [Shield Bash]', 
        requirements: 'Щит [Shield]', 
        data:
        `
    Your shield is considered a melee weapon that deals 1d4 bludgeoning damage; you are considered proficient with it.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the damage dice size by one step, to a maximum of 1d12.
                                * Your shield is treated as your armament for the purposes of benefiting from any bonuses, features, spells, or armament abilities your armament would. You must have selected this ability twice before choosing this option.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        true, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Оборонительный всплеск [Defensive Surge]', 
        requirements: 'Одна оборонительная способность', 
        data:
        `
     When you are hit by an attack you create a barrier. For the duration you gain 4 temporary hit points.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the temporary hit points by +2.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Великий спасбросок [Greater Saving Throw]', 
        requirements: 'Две оборонительные способности', 
        data:
        `
    When you would make a saving throw, as a reaction you gain a +1 bonus on that saving throw.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the bonus this ability provides by 1, to a maximum of +5.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Железное тело [Iron Body]', 
        requirements: 'Три оборонительные способности', 
        data:
        `
    You have a Damage Threshold of 3 (A source with a damage threshold has immunity to all damage unless it takes an amount of damage from a single attack or effect equal to or greater than its damage threshold, in which case it takes damage as normal).
    
                                You may reselect this ability multiple times, each time increasing the damage threshold by 1.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Шипованный доспех [Thornmail]', 
        requirements: 'Четыре оборонительные способности', 
        data:
        `
    Whenever you are dealt damage by a melee attack, the attacker takes 1d4 damage. This ability can work in conjunction with abilities such as ""Fire Form"".
    
                                You may reselect this ability multiple times, each time increasing the damage by an additional 1d4 to a maximum 5d4.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сопротивленеи заклинаниям [Spell Resistance]', 
        requirements: 'Пять оборонительных способностей', 
        data:
        `
    While wearing your Armor, you have advantage on saving throws against spells. If your Summon is wearing the Armor, it benefits from this ability instead.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Быстрая защита [Quick Defense]', 
        requirements: 'Шесть оборонительных способностей', 
        data:
        `
    You gain an additional reaction, additional reactions from this ability can only be used on barrier abilities and require you to spend 2 SP.
    
                                You may reselect this ability multiple times, each time gaining an additional reaction.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Защитник [Protector]', 
        requirements: 'Семь оборонительных способностей', 
        data:
        `
    If a creature within range would be subjected to a spell or ability, and that spell or ability would trigger an Armor ability if you were the subject to it, you may activate the Armor ability but your ally would benefit from the ability instead.
    
                                You may reselect this ability a second time, if you do, whenever you active your Armor ability, you may have a willing creature within 60 feet gain the Armor and benefit it from it.
        `
    },
    {
        type: tp.defence,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Великое сопротивление заклинаниям [Greater Spell Resistance] (Ascended)', 
        requirements: 'Семь оборонительных способностей, Сопротивленеи заклинаниям [Spell Resistance] и Банкай', 
        data:
        `
    While Ascended, you have resistance against damage from spells.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма земли [Earth Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure earth. While this ability is active, your armaments damage type is changed to bludgeoning damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Каменное оружие [Stone Weapon]', 
        requirements: '', 
        data:
        `
    You armament is infused with large pieces of stone and earth, dealing an additional 1d4 bludgeoning damage.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of 1d12.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гранитное оружие [Granite Weapon]', 
        requirements: 'Одна земляная способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 bludgeoning damage and is hit with so much force they are incapacitated. At the end of each of its turns, the target can make a Constitution saving throw. On a success, this ability ends on the target.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of a 1d10.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Матрица земли [Mold Earth]', 
        requirements: 'Одна земляная способность', 
        data:
        `
    You choose or touch a portion of dirt, mud, stone or similar material that you can see within range and that fits within
    
                                a 10-foot cube. You manipulate it in one of the following ways:
    
                                * You can reshape the material in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension.
    
                                * You cause shapes, colors, or both to appear on the material, spelling out words, creating images, or shaping patterns. The changes last for the duration.
    
                                * If the material you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for the duration.
    
                                * You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn’t possible.
    
                                * You transmute rock to mud or vice versa. If you would transmute rock to mud while a creature is within the area they must succeed a strength saving throw or the area is considered difficult terrain. If you would transmute mud to rock, creatures in the area must succeed a Dexterity saving throw or be restrained for the duration. A restrained creature can use it's action to make an additional Strength saving throw to break away from the solidified rock.
    
                                If you use this ability multiple times, you can only have a number of its non-instantaneous effects, equal to your proficiency bonus, active at a time, and you can dismiss such an effect as an action.
                                Each time you select this ability, the area of the cube you can affect is increased by 5 feet, and the thickness you can affect is increased by 1 foot.
    
                                You may select this ability multiple times, each time selecting one of the following options:
                                * increase the range by 10 feet.
                                * This ability no longer requires V components.
                                * Increase the duration by 1 hour.
                                * This ability no longer requires Concentration.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Земляной щит [Earth Shield]', 
        requirements: 'Две земляных способности', 
        data:
        `
    Until the ability ends, bits of rock spread across your body, and you gain the following benefits:
    
                                * You reduce any physical damage you take by 3.
                                * This increases by one each time you select this ability.
                                * You can move across difficult terrain made of earth, stone or similar material without spending extra movement.
                                * You may disperse the shield, shooting rock and stone in a 20-foot radius sphere centered on you. Creatures within the sphere must make a dexterity saving throw or take 2d6 bludgeoning damage. On a successful save, they take half damage. Every time you select this ability increase the radius of the sphere by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * Increase the damage by 1d6, to a maximum of 7d6.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       true,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена камня [Wall of Stone]', 
        requirements: 'Матрица земли [Mold Earth] и одна земляная способность', 
        data:
        `
    A nonmagical wall of solid stone springs into existence at a point you choose within range.
                                The wall is 3 inches thick and is composed of up to five 10-foot-by-10-foot panels. Each panel must be continuous with at least on other panel. Each time you reselect this ability, the thickness is increased by 1 inch.
    
                                If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.
    
                                The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. the wall doesn’t need to be vertical or resting on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus you can use this spell to bridge a chasm or create a ramp.
    
                                If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.
    
                                The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 10 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM’s discretion.
                                If you maintain your concentration on this ability for its whole duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the ability ends..
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You can create an additional panel.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Взрыв земли [Earth Blast]', 
        requirements: 'Три земляных способности', 
        data:
        `
    Choose a single creature you can see within range. A projectile of churned earth is launched at the target.
                                Make a ranged attack against the target. On a hit, the target takes 3d8 bludgeoning damage.
                                Each time you reselect this ability, you gain an additional projectile to a maximum of four. You can direct the additional projectiles at the same target or a different one, you must make a separate attack roll for any additional projectiles..
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V components.
                                * The range is increased by 10 feet.
                                * Increase the damage die size to a d10. You must have selected this ability four times before you can select this option.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Тремор [Tremor]', 
        requirements: 'Четыре земляных способности', 
        data:
        `
    You strike the ground, creating a tremor that ripples outward from you in a 40-foot radius. Each creature within range must succeed on a Dexterity saving throw or take 7d10 bludgeoning damage and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.
    
                                Each time you reselect this ability the radius is increased by 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V components.
                                * Increase the save DC by 1. 
                                * Increase the damage by 1d10.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.ft120, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Каменные Столпы [Pillars of Stone] (ultimate)', 
        requirements: 'Пять земляных способностей', 
        data:
        `
    For the duration of this ability you can cause columns of stone to erupt from the earth. 
                                As an action, you cause column of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet; each time you reselect this ability the diameter and height is increased by 5 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30
    
                                hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius. The rubble lasts until cleared.
    
                                If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or take 5d8 bludgeoning damage and be lifted by the pillar. A creature can choose to fail the save. If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 5d8 bludgeoning damage and is restrained, pinched between the pillar and the obstacle.
    
                                The restrained creature can use an action to make a Strength or Dexterity check (the creature’s choice) against the ability's saving throw DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.
                                Each time you reselect this ability, increase the damage by 1d8..
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 20 feet.
                                * This ability no longer requires V components.
                                * As an action, you instead cause two columns of earth to burst from the ground from two different points instead of one.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.ft500, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Землетресение [Earthquake] (ascended)', 
        requirements: 'Шесть земляных способностей', 
        data:
        `
    You create a seismic disturbance at a point on the ground that you can see within range. 
                                For the duration, an intense tremor rips through the ground in a 100-foot- radius circle centered on that point and shakes creatures and structures in contact with the ground in that area. 
                                The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature’s concentration is broken. 
    
                                When you use this ability and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone and takes 10d6 bludgeoning damage. 
                                This ability can have additional effects depending on the terrain in the area, as determined by the DM. 
    
                                **Fissures.** 
    
                                Fissures open throughout the ability's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the spell’s area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens. 
                                A fissure that opens beneath a structure causes it to automatically collapse (see below). 
    
                                **Structures.** 
    
                                The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure’s height must make a Dexterity saving throw. On a failed save, the creature takes 20d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn’t fall prone or become buried.
    
                                You may select this ability a second time, if you do, the number of fissues is doubled, the size of the fissures are doubled and the damage this ability does to structures is doubled.
        `
    },
    {
        type: tp.earth,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Бедрок [Bedrock] (ascended)', 
        requirements: 'Шесть земляных способностей', 
        data:
        `
    Your Earth abilities are increased in power. Your armament abilities or Kido that deal bludgeoning damage ignore resistances. If a creature would be immune to bludgeoning damage, it instead takes half damage.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма огня [Fire Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure fire. While this ability is active, your armaments damage type is changed to fire damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Пламенное оружие [Flaming Weapon]', 
        requirements: '', 
        data:
        `
    Your armament ignites on fire, dealing an additional 1d4 fire damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Опаляющее оружие [Scorching Weapon]', 
        requirements: 'Одна огненная способность', 
        data:
        `
    When you score a critical hit with your armament, the target an additional 1d6 fire damage at the start of each of its turns. On each of its turns the target can use an action to put out the fire, ending the effect.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the damage die size by one step, to a maximum of a 1d10.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Контроль пламени [Control Flames]', 
        requirements: 'Одна огненная способность', 
        data:
        `
    You chose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:
                                * You instantaneously extinguish the flames within the cube.
                                * You double or halve the are of bright light and dim light cast by the flame, change its color, or both. You choose the duration.
                                * You cause simple shapes - such as the vague form of a creature, an inanimate object, or a location - to appear within the flames and animate as you lie. You choose the duration.
                                * You may also have a flickering flame appear in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. You can dismiss this effect as an action.
    
                                Each time you reselect this ability, the cube is increased by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may now affect magical fire.
                                * The flame you can produce with this ability creates no heat and doesn't use oxygen if you so choose; this flame can be covered or hidden, but not smothered or quenched.
                                * Increase the duration of this ability by 1 hour.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Огненный щит [Fire Shield]', 
        requirements: 'Две огненные способности', 
        data:
        `
    Flames race across your body for the ability's duration. The flames don't harm you or your equipment. Until the ability ends, you gain the following benefits:
                                * You have resistance to fire and cold damage.
                                * You shed bright light in a 5-foot radius and dim light for an additional 5 feet.
                                * Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there, takes 1d4 fire damage. Each time you reselect this ability, the damage dice size is increased by one step, to a maximum of a 1d10.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
    
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * The range of bright and dim light you shed is doubled.
                                * You are immune to fire damage instead.
                                * You may choose if this ability's damage affects creatures or not.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.cone30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Конус огня [Cone of Fire]', 
        requirements: 'Три огненные способности', 
        data:
        `
    A roaring cone of fire erupts from you.
    
                                Each creature in a 30-foot cone must make a Dexterity saving throw. A creature takes 3d8 fire damage on a filed ave, or half as much damage on a successful one.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the cone size by 5 feet.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена огня [Wall of Fire]', 
        requirements: 'Четыре огненные способности', 
        data:
        `
    You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.
    
                                When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creatures takes 4d6 fire damage, or half as much damage on a successful save.
    
                                One side of the wall, selected by you when you cast this spell, deals 4d6 dire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creatures takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.
    
                                Each time you reselect this ability, increase the damage by 1d6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range, height, length, and diameter of this ability by 10 feet.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * Increase the save DC by 1.
                                * You may choose both sides of the wall to deal damage.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Столб огня [Pillar of Flame]', 
        requirements: 'Четыре огненные способности', 
        data:
        `
    A vertical column of fire roars to life on a point you choose within range. This column is 40 feet high with a 10-foot radius. Each creature within the pillar must make a
    
                                Dexterity saving throw.
    
                                A creatures takes 6d6 fire damage on a failed save, or half as much damage on a successful one. You may have this ability be instantaneous or persist for an hour. Each time you reselect this ability, increase the damage by 1d6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * Increase the radius and height of the cylinder by 5 feet.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Огненный шторм [Fire Storm] (Ultimate)', 
        requirements: 'Пять огненных способностей', 
        data:
        `
    A storm made up of sheets of roaring flame appears in a location you choose within range.
    
                                The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube msut have a least one face adjacent to the face of another cube. Each creature in the area takes 7d8 fire damage.
    
                                The fire damages plants, objects in the area, and ignites flammable objects that aren't being worn or carried.
    
                                Each time you reselect this ability, increase the damage by 1d8.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the size of the cubes by 5 feet.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.mile1, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Метиоритный рой [Meteor Swarm] (Ascended)', 
        requirements: 'Шесть огненных способностей', 
        data:
        `
    Blazing orbs of fire plummet to the ground at four different points you can see within range.
    
                                Each creature in a 20-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creatures takes 10d6 fire damage and 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.
    
                                This ability damages plants, objects in the area and ignites flammable objects that aren't being worn or carried.
    
                                You may reselect this ability a second time, if you do, creatures can be affected more than once from the fiery bursts.
        `
    },
    {
        type: tp.fire,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Адское пламя [Hellfire] (Ascended)', 
        requirements: 'Шесть огненных способностей', 
        data:
        `
    Your armament abilities and Kido that deals fire damage, ignore resistances. If a creature would be immune to fire damage, they instead take half damage.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная сила [Increased Strength]', 
        requirements: '', 
        data:
        `
    While your armament is active, your Strength score is increased by 2.
    
                                You may reselect this ability multiple times, each time increasing your Strength score by 1.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная ловкость [Increased Dexterity]', 
        requirements: '', 
        data:
        `
    While your armament is active, your Dexterity score is increased by 2.
    
                                You may reselect this ability multiple times, each time increasing your Dexterity score by 1.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенное телосложение [Increased Constitution]', 
        requirements: '', 
        data:
        `
    While your armament is active, your Constitution score is increased by 2.
    
                                You may reselect this ability multiple times, each time increasing your Constitution score by 1.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенный интеллект [Increased Intelligence]', 
        requirements: '', 
        data:
        `
    While your armament is active, your Intelligence score is increased by 2.
    
                                You may reselect this ability multiple times, each time increasing your Intelligence score by 1.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная мудрость [Increased Wisdom]', 
        requirements: '', 
        data:
        `
    While your armament is active, your Wisdom score is increased by 2.
    
                                You may reselect this ability multiple times, each time increasing your Wisdom score by 1.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная харизма [Increased Charisma]', 
        requirements: '', 
        data:
        `
    While your armament is active, your Charisma score is increased by 2.
    
                                You may reselect this ability multiple times, each time increasing your Charisma score by 1.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная спасбросок [Increased Saving Throw]', 
        requirements: '', 
        data:
        `
    While your armament is active you gain a +1 bonus to saving throws.
    
                                You may reselect this ability up to three times, each time increasing this bonus by 1, for a maximum of +4.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенный навык [Increased Saving Throw]', 
        requirements: '', 
        data:
        `
    Choose a skill you are not proficient in, while your armament is active, you are considered proficient in the chosen skill.
    
                                You may reselect this ability multiple times, each time selecting another skill you are not proficient in.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная скорость [Increased Speed]', 
        requirements: '', 
        data:
        `
    While your armament is active, all your forms of movement are increased by 5 feet.
    
                                You may reselect this ability multiple times, each time increasing this bonus by 5 feet.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Быстрое воплощение [Quick Release]', 
        requirements: '', 
        data:
        `
    You may release your armament as Bonus action.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Великое быстрое воплощение [Quick Release Greater]', 
        requirements: 'Форма вознесения (ascended)', 
        data:
        `
    You may activate your Ascended form as a Bonus action if you're armament is released.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенный талант [Increased Talent]', 
        requirements: '', 
        data:
        `
    Gain a feat you qualify for.
    
                                You may reselect this ability multiple times, to a total of three times.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная концентрация [Increased Concentration]', 
        requirements: 'Одна способность вооружения', 
        data:
        `
    While your armament is released, you have advantage on checks to maintain concentration on armament abilities.
        `
    },
    {
        type: tp.common,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft40, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Духовный взрыв [Spirit Blast]', 
        requirements: 'Одна способность вооружения', 
        data:
        `
    A blast of reiatsu hurdles toward a creature within range from you.
    
                                Make a ranged attack against the target. On a hit, the target takes 2d8 force damage. Each time you reselect this ability, you gain an additional beam to a maximum of four beams. You can direct the additional beams at the same target or a different one, you must make a separate attack roll for any additional beams.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
    
                                * This ability no longer requires V or S components.
                                * Increase the range by 10 feet.
                                * Increase the damage dice size by one step; maximum d12.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Повышенная внимательность [Increased Awareness]', 
        requirements: 'Четыре способности вооружения', 
        data:
        `
    You gain the following benefits:
                                * You add your proficiency bonus to your initiative rolls.
                                * You have a +2 bonus to your passive Wisdom (Perception) score.
                                * You have blindsight with a range of 5 feet. This stacks with other sources of blindsight.
        `
    },
    {
        type: tp.common,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Полет [Flying]', 
        requirements: 'Шесть способностей вооружения', 
        data:
        `
    You gain a flying speed of 60 feet for the duration. When this ability ends, you begin to fall if you are still aloft, unless you can stop the fall.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * Increase the Fly speed by 10 feet.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ускоренная способность [Quickened Ability] (Ascended)', 
        requirements: 'Шесть способностей вооружения', 
        data:
        `
    Choose an armament ability with a casting time of one action, it is now changed to a Bonus action.
    
                                You may reselect this ability multiple times.
        `
    },
    {
        type: tp.common,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Улучшенное вознесение [Improved Ascencion] (Ascended)', 
        requirements: 'Форма вознесения (ascended)', 
        data:
        `
    Choose two armament abilities, you only have access to these abilities while ascended. 
    
                                You may select this ability multiple times.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гравитационный клинок [Gravity Blade]', 
        requirements: '', 
        data:
        `
    Your armament pulses with gravitational forces, when you deal damage with your armament the target is pushed 5 ft away from you in a direction they choose.
    
                                You may reselect this ability multiple times,each time choosing one of the
                                following options:
                                * You may activate this ability as a bonus action
                                * This ability no longer requires concentration. You must have selected this ability twice
                                before selecting this option.
                                * The weapon will deal an additional 1d4 force damage. Each time you reselect this
                                option, the damage die size increases by one step, maximum 1d12.
                                * The amount of feet the target is pushed is increased by 5ft, maximum 60 ft.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Контроль гравитации [Control Gravity]', 
        requirements: '', 
        data:
        `
    You manipulate gravity in a 10-foot cube that you can see within range. Choose one of the following effects when you activate this ability. The effect lasts for the duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you’ve halted.
    
                                Any creature can ignore the effects of this ability with a successful Strength saving throw.
    
                                The duration increases by 1 minute for each other Gravity ability you have.
    
                                **Magnify gravity:** All objects and creatures within the area have their weight doubled and each creature must spend 1 extra foot of movement for every foot they move using their Speed.
    
                                **Reduce gravity:** All objects and creatures within the area have their weight halved and each creature that moves 1 foot, moves an additional 1 foot.
    
                                **Repel gravity:** On initiative of 10, each creature within 30 feet of the area is pushed back 5 feet away from the center in a direction they choose.
    
                                **Attract gravity:** On initiative of 10, each creature within 30 feet of the area is pulled 5 feet towards the center in a direction they choose.
    
                                **Lock gravity:** You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. If the object is fixed in the air, it can hold up to 2,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your armament save DC. On a success, the creature can move the object up to 10 feet.
    
                                You must have selected this ability three times before you can use this effect.
    
                                You may reselect this ability multiple times,each time choosing one of the
                                following options:
                                * You may activate this ability as a bonus action
                                * The duration is increased by 1 minute
                                * The area is increased by 10 feet
                                * Increase the initiative this ability acts on by 2
                                * For Lock Gravity, the object weight you can affect is increased by 5 lbs and the weight
                                the object can hold is increased by 500 lbs.
    
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гравитационное оружие [Graviton Weapon]', 
        requirements: 'Одна гравитационная способность', 
        data:
        `
    When you score a critical hit with your armament, the target and each creature within 5 feet of them take 1d4 force damage.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 5 feet
                                * Increase the damage die size by one step, maximum 1d10
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reactionTkDmg, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отталкивание [Repulsion]', 
        requirements: 'Контроль гравитации [Control Gravity]', 
        data:
        `
    With incredible speed you create a sphere of gravity around you to repel projectiles and attackers. A powerful force emanates out from you in a 10-foot radius sphere centered on you pushing away all physical items, creatures and spells. This also potentially negates any damage you would take from the triggered source.
    
                                Using this ability breaks Concentration.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components
                                * Increase the sphere size by 5 feet, maximum 30 feet
                                * A creature caught in the save makes a Dexterity saving throw, on a failure they 2d6 force damage. Each time you reselect this option, the damage die size increases by one step, maximum 2d12.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гравитас [Gravitas]', 
        requirements: 'Две гравитационные способности', 
        data:
        `
    You violently manipulate gravity to forcefully move a creature you can see within range. The target makes a STR saving throw. On a failed save, you may push or pull the target up to 15 feet in any single direction, if you move the target into a solid surface, the target takes 1d8 bludgeoning for every 5 ft they moved this way.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the amount of ft you can move a target by 5ft.
                                * This ability no longer requires V components.
                                * You may select an additional target for this ability. You must have selected this ability
                                three times before you can select this option.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гравитационная волна [Gravity Wave]', 
        requirements: 'Две гравитационные способности', 
        data:
        `
    You unleash an intense gravitational pressure to push or pull creatures and objects. Each creature in a 60-foot cone must make a Strength saving throw. A creature takes 4d6 force damage and is pulled toward you or pushed 15 feet from you, you must choose which before using this ability. On a successful save, a creature takes half damage and isn’t moved.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * increase the cone size by 5 feet
                                * increase the amount of feet pushed or pulled by 5 feet
                                * Creatures that fail the saving throw are also knocked prone. You must have chosen this
                                ability twice before you can select this option.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Вытеснитель [Displacer]', 
        requirements: 'Три гравитационные способности', 
        data:
        `
    You open up a hole in space by a target and yourself to swap places. The target can make a Strength saving throw, on a success, this spell fails.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may use this ability as a bonus action.
                                * The range increases by 5 feet
                                * You may select any two targets instead of one target and yourself.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.touch, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        true, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гравитационный карман [Gravitational Pocket]', 
        requirements: 'Три гравитационные способности', 
        data:
        `
    Make a melee attack against a creature you can reach. On a hit, the target takes 1d10 force damage and collapses into an impossibly tiny point in space where it stood, vanishing and then reappearing at the end of the turn within the same space they left. If there is any object or creature occupying the space, they are shunted away to the nearest unoccupied space of their choice. A creature affected by this ability is immune to it for 1 round.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the damage by an additional 1d10
                                * Increase the number of rounds the target vanishes by 1 
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Энтропия [Entropy]', 
        requirements: 'Три гравитационные способности', 
        data:
        `
    You create a destabilized field of gravity around a target you can see within range. Make a ranged attack against the target. On a hit, the target takes 1d6 force damage and, for the duration, at the beginning of each of the target's turns it is shunted 20 feet in a random direction between forward, backward, left or right. The target can resist the forced movement in increments of 5 feet, but for every 5 feet it doesn’t move it takes 1d6 force damage.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires concentration
                                * Increase the duration by 1 minute
                                * Increase the amount a creature is shunted by 5 feet 
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Освобождение гравитации [Gravity Unbound]', 
        requirements: 'Четыре гравитационные способности', 
        data:
        `
    You disrupt the gravity around you in a 20 foot sphere centered on you, that moves with you. For the duration the field has the following effects:
    
                                * Each other creature in the field has their speed reduced to 0.
                                * Each other creature have disadvantage on weapon attacks
                                * Your other gravity abilities pull or push creatures an additional 10 feet if they do so. 
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst5, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.action, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сингулярность [Singularity] (Ultimate)', 
        requirements: 'Пять гравитационных способностей', 
        data:
        `
    You create a 2-foot-diameter black sphere on a point that you can see within range, it hovers in that space.
    
                                The sphere obliterates all matter that passes through it. Artifacts are the exception. Anything that touches the sphere but isn't wholly engulfed and obliterated by it takes 10d6 force damage.
    
                                On initiative of 30, each creature within 60 feet of the sphere must make a Strength saving throw, on a failure they are pulled 35 feet towards its center.
    
                                If the sphere comes into contact with a planar portal, such as that created by the gate spell, or an extradimensional space, such as that within a portable hole, the GM determines what catastrophic event happens.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the amount of singularities you create by 1 to a max of 3
                                * The sphere deals 10d8 damage instead 
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst6, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.action, 
        range: rng.varies, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Графитационная бомбардировка [Gravitational Bombardment] (Ascended)', 
        requirements: 'Пять гравитационных способностей', 
        data:
        `
    You create 10 one-inch diameter spheres of collapsing space that orbit around you. For the duration whenever a creature is subjected to another one of your gravity abilities or spells that forcefully moves a creature, you may launch up to 3 spheres at the creature. Each sphere deals 3d8 force damage. Additionally, when a creature is hit with a sphere it explodes and sends out gravitational energy out from the creature in a 20-foot radius sphere. Each other creature within the sphere must make a dexterity saving throw. A creature takes 2d6 force damage for each meteor on a failed saving throw or half as much on a successful one.
        `
    },
    {
        type: tp.gravity,
        cost: cost.cst6, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Падающая звезда [Falling Star] (Ascended)', 
        requirements: 'Шесть гравитационных способностей', 
        data:
        `
    You create a bsphere of unstable gravity around you. As part of this action, you gain a fly speed of 600 feet and you can move up to 600 feet. During this movement, if you impact any surface or creature the sphere is discharged with massive force. The impacted object or creature, and each other creature within 80 feet of it must make a Strength saving throw. An affected creature or object takes 30d6 force damage on a failed saving throw and is pushed back 30 feet in a direction you choose. Objects and creatures take half as much on a successful one and aren’t moved.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Расширенный Кайдо [Expanded Kaido]', 
        requirements: 'Возможность создавать заклинания или магический договор', 
        data:
        `
    You learn two new Kaido spells of your choice from the Shinigami spell list or two spells from any other spell list that regain hit points or grant temporary hit points.
    
                                You may reselect this ability multiple times.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        true,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Лечащий клинок [Healing Blade]', 
        requirements: '', 
        data:
        `
    Your armament no longer deals lethal damage.
    
                                Whenever your armament would deal damage to a creature, they instead regain hit points equal to the damage dealt. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the duration of this ability by 1 round.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        true, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Улучшенное исцеление [Improved Healing]', 
        requirements: 'Возможность создавать заклинания или магический договор', 
        data:
        `
    While this ability is active, when you cast a spell that restores hit points or grants temporary hit points, the creature regains an additional 1d4 hit points or gains an additional 1d4 temporary hit points.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase die size by one step, to a maximum of 1d12.
                                * Increase the duration of this ability by 1 round.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.special, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      true, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       true,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Лечащее прикосновение [Healing Touch]', 
        requirements: 'Cure Wounds и одна лечащая способность', 
        data:
        `
    As part of this ability you cast a Kaido spell or any other spell that regains hit points or grants temporary hit points of 1st level or lower that you know, without spending SP
    
                                and without requiring material components.
    
                                You may reselect this ability multiple times, each time increasing the level of the spell by one, maximum level 7.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Лечащий фактор [Healing Factor]', 
        requirements: 'Две лечащие способности', 
        data:
        `
    While conscious you regain 1 hit point at the start of your turn.
    
                                You gain additional benefits depending on the number of times you've selected this ability:     
                                2 - When you succeed on a death saving throw, you gain an additional success.     
                                3 - You have advantage on saving throws against being poisoned.       
                                4 - You are immune to diseases.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the amount of hit points regained by 1, to a maximum of 8.
                                * Additionally, at the start of your turn you heal one point of ability score damage.
                                * Additionally, at the start of your turn you regrow one severed appendage, other than you head. You must have selected this ability three times before you can select this option.
                                * Additionally, at the start of your turn, you can end one of the following conditions: blinded, deafened, paralyzed or poisoned. You must have selected this ability three times before you can select this option.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Армия исцеления [Panoply of Healing]', 
        requirements: 'Три лечащие способности', 
        data:
        `
    You bestow up to three creatures within range a number of temporary hit points equal to your level + the number of Healing abilities you have.
    
                                Each time you reselect this ability the range increases by 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * Increase the duration by 1 minute.
                                * Affected creatures also benefit from your Healing Factor (if you have the ability). You must have selected this ability four times before you can select this option.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Снятие боли [Pain Release]', 
        requirements: 'Четыре лечащие способности', 
        data:
        `
    You make a single melee or a single ranged weapon attack, with a normal range of 80 feet and a long range of 120 feet, with your armament. If successful you deal damage equal to the amount of hit points creatures have regained through your Kido or armament abilities since the previous dawn.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * If you choose to make a melee attack, you have advantage on the attack roll.
                                * If you choose to make a ranged attack, the normal and long range is doubled.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.hour1, 
        range: rng.touch, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Воскресение [Resurrection]', 
        requirements: 'Пять лечащих способностей', 
        data:
        `
    You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free, willing and hasn't been reincarnated, the target returns to life with all its hit points.
    
                                This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't however, remove magical diseases, curses, and the life; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.
    
                                This spell closes all mortal wounds and restores any missing body parts.
    
                                Coming back from the dead is an ordeal. The target takes a -4 penalty to all D20 rolls. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.
    
                                Restoring life to a creature that hasn't been dead for one year or longer taxes you greatly. While your armament is reforming, you have disadvantage on all attack rolls, ability checks and saving throws.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Круг жизни [Circle of Life] (Ascended)', 
        requirements: 'Шесть лечащих способностей', 
        data:
        `
    A sphere of positive energy ripples out in a 60-foot-radius sphere from a point you choose within range. If a creature would be reduced to 0 hit points or less, they are instead reduced to 1 hit point. You can dismiss this ability at will.
    
                                Each time you reselect this ability, the range is increased by 10 feet and the radius increases by 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You may cast this ability as a reaction, the trigger being an ally you can see within range taking damage.
                                * Additionally, when this ability ends through the duration expiring or you dismissing the ability, any creature within the sphere regains 8d4 hit points.
        `
    },
    {
        type: tp.healing,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Высшее исцеление [Supreme Healing] (Ascended)', 
        requirements: 'Шесть лечащих способностей', 
        data:
        `
    When you would normally roll one or more dice to restore hit points with Kido or a armament ability, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение способностей [Ability Increase]', 
        requirements: '', 
        data:
        `
    Choose one of the Hollows ability scores, it increases by 2.
                    
                                This ability may be selected multiple times.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Агрессия [Aggressive]', 
        requirements: '6 HD', 
        data:
        `
    As a bonus action, the Hollow can move up to it's speed towards a hostile creature that it can see. 
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Засадный [Ambusher]', 
        requirements: '4 HD', 
        data:
        `
    In the first round of a combat, the Hollow has advantage on attack rolls against any creature it surprised.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd2,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Амфибия [Amphibious]', 
        requirements: '2 HD', 
        data:
        `
    The Hollow can breathe air and water.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rch1_6, 
        name: 'Чародейский оберег [Arcane Ward]', 
        requirements: 'Архитип Мигия', 
        data:
        `
    When the Hollow takes damage, it creates a magical barrier around itself. The barrier reduces the damage by 1d10, to a minimum of 0, and then vanishes.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * Increase the damage reduced by an additional 1d10; maximum 4d10.
                                * Choose a number not chosen: 2, 3, 4, 5. This ability also recharges on that result.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd1,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Армадура [Armadura]', 
        requirements: '1 HD, Архитип Дефенса', 
        data:
        `
    While you are wearing no armor and not wielding a shield, your AC equals 10 + your Constitution modifier.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Убийца [Assassinate]', 
        requirements: '10 HD, Засадный [Ambusher]', 
        data:
        `
    During its first turn, the Hollow has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the Hollow scores against a surprised creature is a critical hit.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Неуловимый [Avoidance]', 
        requirements: '10 HD, Ловкость 16', 
        data:
        `
    If the Hollow is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Пробужденный разум [Awakened Mind]', 
        requirements: '6 HD, Интеллект 16', 
        data:
        `
    The Hollow can telepathically speak to any creature it can see within 30 feet of it, provided the creature can understand at least one language.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Бала [Bala]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow makes a ranged attack against a target it can see within range. On a hit, the target takes 2d4 force damage. If the Hollow has multiattck, it can replace one or more of its attacks with a Bala.
                    
                                For each 4 HD above 4 HD, the range is increased by 5 feet.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * Increase the damage by an additional 1d4, maximum 6d4.
                                * Increase the range by 20 feet.
                                * The Hollow gains a +1 bonus on the attack roll using this ability; maximum +4.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchDay1, 
        name: 'Боевое командование [Battle Command]', 
        requirements: '12 HD, Харизма 15', 
        data:
        `
    As a Bonus action the Hollow chooses one creature within 30 feet of it that it can see. If the chosen creature can see or hear the Hollow, that creature can use its reaction to make one melee attack or to take the Dodge or Hide action. For each 4 HD above 12 HD, the Hollow gains an additional use of this ability, maximum 6/Day.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Берсерк [Berserk]', 
        requirements: '10 HD, 40 HP, Сила 14', 
        data:
        `
    Whenever the Hollow starts its turn with 10 hit points or fewer, roll a d6. On a 6, the hollow goes berserk. On each of its turns while berserk, the Hollow attacks the nearest creature it can see. If no creature is near enough to and attack, the Hollow attacks an object, with preference for an object smaller than itself. Once the Hollow goes berserk, it continues to do so until it is destroyed or regains all its hit points.                
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Укус [Bite]', 
        requirements: '3 HD, Рот', 
        data:
        `
    You gain the Bite natural melee weapon. Its range is 5 feet and the damage is equal to your unarmed strike damage.
                    
                                If you already have a Bite attack, then it deals an additional damage dice.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Крававое безумие [Blood Frenzy]', 
        requirements: '4 HD, Сила 13', 
        data:
        `
    The hollow has advantage on melee attack rolls against any creature that doesn't have all its hit points.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: true,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rch6, 
        name: 'Дыхательное оружие [Breath Weapon]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow gains a breath weapon taking the form of either a 15-foot cone or 30-foot line, this choice is permanent. The Hollow also chooses an element type from the following, this is the damage type the Breath weapon deals; Acid, Cold, Fire, Lightning or Poison.
                    
                                Each creature in that area must make a Dexterity saving throw, taking 4d6 damage on a failed save, or half as much damage on a successful one.
                    
                                If the hollow already has a breath weapon, instead it's range increases by 10 feet and the damage is increased by 2d6 or it also recharges on a 4.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * Choose a number 1 through 6 that this ability doesn't recharge on, it now recharges on the chosen number. You can only select this augment twice.
                                * Increase the range by 10 feet.
                                * The damage increases by 2d6.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd5,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Грубый [Brute]', 
        requirements: '5 HD, Сила 13', 
        data:
        `
    Choose one of the Hollows melee weapons, it deals one extra die of its damage.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Землерой [Burrow]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow has a Burrow speed of 30 feet. For each 4 HD above 4 HD it the burrow speed increases by 5 feet; maximum 60 feet.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst6, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rch1_6, 
        name: 'Серо [Cero]', 
        requirements: '6 HD, Бала [Bala]', 
        data:
        `
    The Hollow fies a powerful blast of concentrated spiritual energy. A beam forming a line 100 feet long and 5 feet wide blasts from the Hollow in a direction they choose. Each creature in the line must make a Dexterity saving throw. A creatures takes 6d6 force damage on a failed save, or half as much damage on a successful one.
                    
                                For each 2 HD above 6 HD, the length of the line increases by 10 feet.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * Increase the damage by an additional 1d6; maximum 10d6.
                                * Choose a number 1 through 6 that this ability doesn't recharge on, it now recharges on the chosen number. You can only select this augment twice.
                                * Increase the save DC by +1; maximum +4.
                                * If the Hollow has Multiattack, it can replace one of its attacks with a Cero. This ability must have been selected three times before this option can be selected.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst10, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd18,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rch6, 
        name: 'Серо Оскурас [Cero Oscuras]', 
        requirements: '18 HD, Серо, Гран Рей Серо [Gran Rey Cero]', 
        data:
        `
    The Hollow fies a powerful dark blast of concentrated spiritual energy. A beam forming a line 500 feet long and 5 feet wide blasts from the Hollow in a direction they choose. Each creature in the line must make a Dexterity saving throw. A creatures takes 6d12 force damage on a failed save, or half as much damage on a successful one.
                    
                                For each 4 HD above 18 HD, the damage increased by 1d12.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Кожа хамелиона [Chameleon Skin]', 
        requirements: '10 HD, Ловкость 14', 
        data:
        `
    The Hollow can change the color & texture of it's exterior to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide.
    
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Рывок [Charge]', 
        requirements: '4 HD', 
        data:
        `
    If the Hollow moves at least 15 feet straight toward a target and then hits it with a natural weapon on the same turn, the target takes an extra 2d6 damage.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst6, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Очарование [Charm]', 
        requirements: '12 HD, Харизма 14', 
        data:
        `
    As an action, the hollow targets one humanoid it can see within 30 feet of it. If the target can see the hollow, the target must succeed on a Wisdom saving throw against this magic or be charmed by the hollow. The charmed target regards the hollow as a trusted friend to be heeded and protected. Although the target isn’t under the hollow’s control, it takes the hollow’s requests or actions in the most favorable way it can.
                    
                                Each time the hollow or the hollow’s companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 12 hours or until the hollow is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Когти [Claws]', 
        requirements: '3 HD, Руки и запястья', 
        data:
        `
    You gain the Claws natural melee weapon. Its range is 5 feet and the damage is equal to your unarmed strike damage.
                    
                                If you already have a Claw attack, then they deal an additional damage dice.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd24,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Синхронизация разумов [Cognition Synchronization]', 
        requirements: '24 HD, Пескиса [Pesquisa], Мудрость 16', 
        data:
        `
    The Hollow chooses up to 11 creatures it is familiar with. If those creatures are on the same plane, while the Hollow concentrates on this ability, it can broadcast information of whatever it is currently seeing or experiencing to the chosen creatures.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сокрушительный прыжок [Crushing Leap]', 
        requirements: '12 HD, Огромный размер', 
        data:
        `
    If the Hollow jumps at least 20 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures is pushed to an unoccupied space within 5 feet of the Hollow and must make a Dexterity saving throw. On a failed save, a creature takes 4d12 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn’t knocked prone.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_SL, 
        name: 'Проклятие [Curse]', 
        requirements: '14 HD', 
        data:
        `
    As an action the Hollow targets one creature that it can see within 30 feet. The target must succeed on a Charisma saving throw or be cursed.
                    
                                While cursed, the target has vulnerability to one type of damage of Hollows choice. The curse lasts until ended with a greater restoration spell, a remove curse spell, or similar magic.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Уменьшение перезарядки [Decrease Recharge]', 
        requirements: '', 
        data:
        `
    Choose an ability the Hollow has that recharges, except for a Breath Weapon. Choose a number it doesn't recharge on, it now recharges on that number. This ability may be selected multiple times, each time choosing an ability that hasn't been chosen.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отражение атаки [Deflect Attack]', 
        requirements: '14 HD', 
        data:
        `
    As a Reaction the Hollow adds 5 to its AC against one weapon attack that would hit it. To do so, the Hollow must see the attacker and be wielding a melee weapon.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отражение дальней атаки [Deflect Missiles]', 
        requirements: '14 HD', 
        data:
        `
    As a Reaction, in response to being hit by a ranged weapon attack, the Hollow deflects the missile. The damage it takes from the attack is reduced by 1d10. If the damage is reduced to 0, it catches the missile if it’s small enough to hold in one hand and it has a hand free. For each 4 HD above 14 HD, the damage is reduced by 1d10; maximum 4d10.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst6, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd23,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_SL, 
        name: 'Дизоррер [Descorrer]', 
        requirements: '23 HD, Кумон [Kūmon]', 
        data:
        `
    As an action the Hollow opens a pathway into the garganta, and up to four willing creatures can follow inside. Descorrer is a much more stable form of travel and always provides a safe and short walk to any location familiar to the Hollow on a different plane of existence.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Дьявольский взгляд [Devils Sight]', 
        requirements: '12 HD, Темное зрение [Darkvision]', 
        data:
        `
    Magical darkness doesn't impede the hollows darkvision.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Смещение [Displacement[', 
        requirements: '10 HD', 
        data:
        `
    The Hollow beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage.                
                                If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the Hollow is incapacitated or has a speed of 0. 
    
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst2, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Пикирующая атака [Dive Attack]', 
        requirements: '3 HD, Возможность летать', 
        data:
        `
    If the Hollow is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon atack, the attack deals an extra 1d6 damage to the target.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd15,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Скольжение по земле [Earth Glide]', 
        requirements: '15 HD', 
        data:
        `
    The Hollow can traverse through nonmagical, unworked earth and stone. While doing so, the Hollow doesn’t disturb the material it moves through.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst6, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd18,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Поглащение воспоминаний [Eat Memories]', 
        requirements: '18 HD', 
        data:
        `
    As an action the Hollow targets one creature it can see within 5 feet of it. The target must succeed on a Wisdom saving throw or take 4d8 psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, Oozes, Plants, and Undead succeed on the save automatically.
                    
                                While memory drained, the target must roll a d4 and subtract the number rolled from its ability checks and attack rolls. Each time the target is memory drained beyond the first, the die size increases by one; maximum d12, at which point the target becomes unconscious for 1 hour. The effect then ends.
                    
                                The Hollow learns all the languages a memory-drained target knows and gains all its skill proficiencies.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd15,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Поглащение элементов [Elemental Absorption]', 
        requirements: '15 HD, Сопротивление элементам [Elemental Resistance]', 
        data:
        `
    The Hollow chooses a damage type they are resistant too. Whenever the Hollow is subjected to the chosen damage, it takes no damage and instead regains a number of hit points equal to the damage dealt.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сопротивленеи элементам [Elemental Resistance]', 
        requirements: '8 HD', 
        data:
        `
    The Hollow chooses a damage type from the following they are not vulnerable to: Acid, Cold, Fire, Lightning, Necrotic, Poison, Radiant and Thunder. The Hollow has resistance to the chosen damage type.
                    
                                Additionally, the Hollow must choose an element type they're not vulnerable or resistant to, they are now vulnerable to the chosen damage type.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd24,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ускользающий [Elusive]', 
        requirements: '24 HD, Ловкость 18', 
        data:
        `
    No attack roll has advantage against the Hollow unless it's incapacitated.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Загадочный разум [Enigmatic Mind]', 
        requirements: '14 HD, Интеллект 18', 
        data:
        `
    The Hollow's mind can't be read, creatures can communicate telepathically with the Hollow only if it allows and magic can't determine whether the Hollow is lying.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение [Enlarge]', 
        requirements: '4 HD, Телосложение13, Средний размер', 
        data:
        `
    As an action, for 1 minute, the hollow magically increases in size, along with anything it is wearing or carrying. While enlarged, the hollow is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the hollow  lacks the room to become Large, it attains the maximum size possible in the space available. 
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd2,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Дополнительный навык [Extra Skill]', 
        requirements: '2 HD', 
        data:
        `
    Choose two skills, the Hollow is now proficient in those skills. This ability can be selected multiple times.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Страх безумия [Fear Frenzy]', 
        requirements: '8 HD, Харизма 14', 
        data:
        `
    The Hollow has advantage on attack rolls against frightened creatures.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Происхождение фей [Fey Ancestry]', 
        requirements: '', 
        data:
        `
    The Hollow has advantage on saving throws against being charmed, and magic can't put the Hollow to sleep.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd11,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Дьявольское благословение [Fiendish Blessing]', 
        requirements: '11 HD, Харизма 15', 
        data:
        `
    The Hollow gains a bonus to AC equal to their Charisma bonus.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Филби [Flby]', 
        requirements: '3 HD, Возможность летать', 
        data:
        `
    The hollow doesn't provoke an opportunity attack when it flies out of an enemy's reach.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst6, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd19,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ужасающее присутствие [Frightful Presence]', 
        requirements: '19 HD, Харизма 20', 
        data:
        `
    As an action, each creature of the hollows choice that is within 120 feet of the hollow and aware of it must succeed on a Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    
                                If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the hollows Frightful Presence for the next 24 hours. 
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst5, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd26,
        abKind: knd.usual,
        castingTime: castTime.minute10, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      true, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Наблюдатель гарганты [Garganta Broadcast]', 
        requirements: '26 HD, Пескиса [Pesquisa], Мудрость 16 или Интеллект 16', 
        data:
        `
    The Hollow can see and hear a particular creature they choose that is on the same plane of existence as them. The target must make a Wisdom saving throw, which is modified by how well the hollow knows the target and the sort of physical connection they have to it. If a target knows they're using this ability, it can fail the saving throw voluntarily if it wants to be observed.
                    
                                On a successful save, the target isn't affected, and the Hollow can't use this ability against it again for 24 hours.
                    
                                On a failed save, the ability creates an invisible sensor within 10 feet of the target. The Hollow can see and hear through the sensor as it they were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creatures that can see invisible objects sees the sensor as a small luminous orb.
                    
                                | Save Modifier  | Knowledge |
                                |:---:|:-----------:|
                                |  +5  | Secondhand (They've heard of the target) |
                                |  0  | Firsthand (Hollow has met the target) |
                                |  -5  | Familiar (Hollow knows the target well) |
                    
                                | Save Modifier  | Connection |
                                |:---:|:-----------:|
                                |  -2  | Likeness or pictures |
                                |  -4  | Possession or garment |
                                |  -10  | Body part, lock of hair, bit of nail, or the like |
                    
                                Instead of targeting a creature, the Hollow can choose a location they have seen before as the target of the spell. When it does, the sensor appears at the location and doesn't move.
    
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd16,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Звуковое Сонидо [Gemelos Sonido]', 
        requirements: '16 HD, Сонидо [Sonido], Ловкость 14', 
        data:
        `
    Instead of using Sonido, the Hollow can create afterimages of itself that lasts for 1 minute, or until it loses concentration (as if it were concentrating on a spell). It can create an afterimage for each 10 feet of Sonido; maximum five. The afterimages appear in an unoccupied space that the hollow can see within 20 feet of it. As a bonus action on it's turn, it can move the illusions up to 30 feet to a space it can see, but it must remain within 100 feet of it.
                    
                                The afterimages AC equals 10 + the Hollows Dexterity modifier or natural armor bonus, whichever is higher. If the duplicate would take damage it is destroyed, and duplicates automatically fail any saving throw.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst10, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_L, 
        name: 'Гонзуи [Gonzui]', 
        requirements: '14 HD, Телосложение 16', 
        data:
        `
    The Hollow inhales and attempts to suck out the souls of all beings within range and be devoured.
                    
                                Each creature within 20 feet of the Hollow is affected. If the Hollow has double or more HD of the creatures within range, they are slain and their souls devoured. Otherwise, they must make a Constitution saving throw. Any creatures with the Spiritual Awareness trait are allowed a saving throw regardless.
                    
                                For each 4 HD above 14 HD, the range is increased by 10 feet.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd18,
        abKind: knd.usual,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_SL, 
        name: 'Гран Рей Серо [Gran Rey Cero]', 
        requirements: '18 HD, Серо [Cero]', 
        data:
        `
    By mixing their own blood with a Cero, a Hollow can fire a Cero with much greater attack power and speed. 
                    
                                To activate this ability the Hollow loses hit points equal to the number of hit die they have.
                    
                                Each creature in a 60-foot cone must make a Dexterity saving throw. A creature takes 6d10 force damage on a failed save, or half as much damage on a successful one.
                    
                                For each 4 HD above 18 HD, the size of the cone increases by 10 feet.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * The ability also has a Recharge 6.
                                * Increase the save DC by +1; maximum +4.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Иеро [Hierro]', 
        requirements: '4 HD', 
        data:
        `
    The Hollows Reiryoku condenses, creating steel-hard skin.
                    
                                Bludgeoning, piercing and slashing damage the Hollow takes is reduced by 2.
                    
                                This ability may be selected multiple times, each time the damage is further reduced by 1, but the requirement increases by 2 HD as well.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Высокая скорость регенерации [High-Speed Regeneration]', 
        requirements: '8 HD', 
        data:
        `
    The Hollow regains 3 hit points at the start of its turn. The Hollow dies only if it starts its turn with 0 hit points and doesn't use High-Speed Regeneration.
                    
                                Whenever the Hollow would gain another 5 hit die, the amount of hit points regained is increased by 1.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * Instead of regaining hit points, the Hollow may regrow a severed limb. The Hollow must have 10 HD before selecting this option.
                                * Instead of regaining hit points, the Hollow can regrow an organ. The Hollow must have 15 HD before selecting this option.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Останавливающее дыхание [Hold Breath]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow can hold its breath for 10 minutes. For each 2 HD above 4 HD the hollow has, it can hold its breathe for an additional minute.
    
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ходьба по льду [Ice Walk]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow can move across and climb icy surfaces without needing to make an ability check, and difficult terrain composed of ice or snow doesn't cost the Hollow extra movement.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Освещение [Illumination]', 
        requirements: '6 HD', 
        data:
        `
    The hollow sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Иллюзорная внешность [Illusory Appearance]', 
        requirements: '10 HD, Интеллект 13 или Мудрость 13', 
        data:
        `
    As an action, the hollow covers itself and anything it is wearing or carrying with a magical illusion that makes it look like another creature of it's general size and humanoid shape. The illusion ends if the hollow takes a bonus action to end it or if it dies.
                    
                                The changes wrought by this effect fail to hold up to physical inspection. For example, the hollow could appear to have smooth skin, but someone touching it would feel its rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a Intelligence (Investigation) check to discern that the hollow is disguised.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Неизменаяемая форма [Immutable Form]', 
        requirements: '8 HD', 
        data:
        `
    The Hollow is immune to any spell or effect that would alter its form.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd24,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Индексируемый Радар [Indice Radar]', 
        requirements: '24 HD, Пескиса [Pesquisa] (3), Интеллект 13', 
        data:
        `
    Thrusting their index finger into the ground, a luminous trail rapidly extends outwards from the Hollow in the direction of the target within range and gauging their Reiryoku.
                    
                                The Hollow chooses one creature within range, the Hollow gains the knowledge of the creature HD amount, how many armament abilities they possess if any, and the highest spell they can cast.
                    
                                Whenever the Hollows hit die increases by one, the range is increased by 10 feet.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Врожденный заклинатель [Innate Spellcasting]', 
        requirements: '6 HD, Магия [Magia]', 
        data:
        `
    The Hollow chooses two spells it knows of 3rd level or lower. It can innately cast the chosen spell once per day each, requiring no material components or SP.
                    
                                If the hollow already has Innate Spellcasting, it can ignore the requirements for this ability and chooses one of it's spell lists, they can cast those spells an additional time per day each.
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * The hollow chooses two spells it knows of 3rd level or lower. It can innately cast the chosen spell twice per day requiring no material components.
                                * The hollow chooses a spell it knows of 4th level or higher. It can innately cast the chosen spell once per day each requiring no material components.
                                * Choose a spell the hollow can innately cast, it can cast it an additional time per day.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd20,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Непостижимый [Inscrutable]', 
        requirements: '20 HD, Мудрость 16 или Интеллект 16', 
        data:
        `
    The Hollow is immune to any effect that would sense its emotions or read its thorughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain its intentions or sincerity have disadvantage.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Острый слух [Keen Hearing]', 
        requirements: '3 HD', 
        data:
        `
    The Hollow has advantage on Wisdom (Perception) checks that rely on hearing.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Острый взгляд [Keen Sight]', 
        requirements: '3 HD', 
        data:
        `
    The Hollow has advantage on Wisdom (Perception) checks that rely on sight.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Острый нюх [Keen Smell]', 
        requirements: '3 HD', 
        data:
        `
    The Hollow has advantage on Wisdom (Perception) checks that rely on smell.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.round, 
        range: rng.ft10, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_L, 
        name: 'Кумон [Kūmon]', 
        requirements: '4 HD', 
        data:
        `
    Hollows have an innate ability to tear the barriers between planes. The Hollow chooses a point it can see and opens a circular portal, 10 feet in diameter, to a different plane of existence. On the other plane, another portal opens up. The Hollow can specify a target destination in general terms.
                    
                                Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отзвук лабиринта [Labyrinthine Recall]', 
        requirements: '6 HD', 
        data:
        `
    The Hollow can perfectly recall any path it has traveled.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Локус разума [Locus of the Mind]', 
        requirements: '14 HD, Магия [Magia]', 
        data:
        `
    The Hollow can maintain concentration on two different spells at the same time. In addition, it has advantage on saving throws to maintain concentration spells.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Магия [Magia]', 
        requirements: '4 HD, Мудрость, Интеллект или Харизма 12', 
        data:
        `
    The Hollow gains the ability to cast spells. They cast spells from the Shinigami spell list. The Hollow chooses Wisdom, Intelligence or Charisma to be it's spell casting score.
                    
                                The hollow learns 2 cantrips and two 1st level spells.
                    
                                Starting when the Hollow gains 6 HD, and at each 2 HD above 6 HD, the Hollow learns an additional spell.
                    
                                The Hollows Max Spell Level is their HD divided by 5, rounded down, minimum level 1. 
                    
                                If the Hollow already has the Spellcasting feature, it ignores this ability's requirements and Spellcasting is replaced by this ability. They keep their current spells known and they increase their Spell Point Pool by 10.
                    
                                This ability can be selected multiple times, each time choosing one of the following:
                                * The hollow learns 2 new Cantrips
                                * The hollow learns 2 new spells
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Магическое сопротивление [Magic Resistance]', 
        requirements: '12 HD', 
        data:
        `
    The Hollow has advantage saving throws against spells and other magical effects.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Магическое оружие [Magic Weapons]', 
        requirements: '6 HD', 
        data:
        `
    The hollows weapon attacks are magical.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Боевое преимущество [Martial Advantage]', 
        requirements: '10 HD, Сила 12 или Ловкость 12', 
        data:
        `
    Once per turn, the hollow can deal an extra 2d6 damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hollow that isn’t incapacitated.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Маска дикой природы [Mask of the Wild]', 
        requirements: '10 HD, Владение навыком (Скрытность)', 
        data:
        `
    The Hollow can attempt to hide even when it is only lightly obscured by foliage, heavy rain, falling snow, mist and other natural phenomena.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Мимикрия [Mimicry]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom (Insight) check.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd5,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Мульти атака [Multi-Attack]', 
        requirements: '5 HD', 
        data:
        `
    The Hollow can make two attacks instead of one when it takes the attack action. For each 5 HD above 5 HD, it gains an additional attack.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.mile1, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_L, 
        name: 'Негасион [Negación]', 
        requirements: 'Тип пустого ""Гиллиан""', 
        data:
        `
    A square beam of light engulfs a target in a beam of light, completely isolating them from the plane they're currently in.
                    
                                When the Gillian has a Kūmon active, it can use this ability to draw a non-hostile creature into the Kūmon. The affected creature is immune to damage and cannot be targeted by attacks, abilities or spells. 
                    
                                When a Hollow is no longer a Gillian, it loses this ability and replaces it with another Hollow ability it meets the requirements for.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ловкий побег [Nimble Escape]', 
        requirements: '4 HD, Ловкость 13', 
        data:
        `
    The Hollow can take the Disengage or Hide action as a bonus action on each of its turns.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Тактика стаи [Pack Tactics]', 
        requirements: '3 HD', 
        data:
        `
    The Hollow has advantage on an attack roll against a creature if at least one of the Hollows allies is within 5 feet of the creature and the ally isn't incapacitated.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Пальма планча [Palma Plancha]', 
        requirements: '10 HD', 
        data:
        `
    Once per turn, when a Hollow deals damage with one of their natural weapons or unarmed strike, they can spend 2 SP and deal additional damage equal to their natural armor bonus.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd23,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      true, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Пескиса [Pesquisa]', 
        requirements: '23 HD', 
        data:
        `
    The Hollow sends out a radiating pulse in the form of a 30-foot-radius sphere which reacts to sources of Reiatsu, allowing it to determine the location of any sensed individuals and gauge how powerful they are. 
                    
                                At each minute the Hollow gains the following knowledge:
                                1. Number of sensed individuals.
                                2. Distance of the senses individuals.
                                3. Creature type of the sensed individuals.
                                4. If the sensed individuals, have more or less HD.
                    
                                For each 2 HD above 23 HD, the radius is increased by 10 feet.
                    
                                This ability may be selected multiple times, each time reducing the amount of time requires to gain the knowledge by one minute.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst4, 
        rules: true,
        forSummon: true,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rch6, 
        name: 'Взгляд окаменения [Petrifying Gaze]', 
        requirements: '12 HD, глаза', 
        data:
        `
    As an action, the Hollow fixes its gaze on one creature within 60 feet that it can see and that can see its eyes. The target must make a Constitution saving throw. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is retrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success.
                    
                                The petrification last until the creature is freed by a greater restoration spell or similar magic.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd5,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Внезапная атака [Pounce]', 
        requirements: '5 HD, Четырехлапый, Когти [Claws], Укус [Bite]', 
        data:
        `
    If the Hollow moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a Strength saving throw or be knocked prone. If the target is prone, the Hollow can make one bite attack against it as a bonus action.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd7,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Психическая защита [Psychic Defense]', 
        requirements: '7 HD, Мудрость 14', 
        data:
        `
    While the hollow is wearing no armor and wielding no shield, its AC includes its Wisdom modifier
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Буйство [Rampage]', 
        requirements: '10 HD, Укус [Bite]', 
        data:
        `
    When the Hollow reduced a creature to 0 hit points with a melee attack on its turn, the Hollow can take a bonus action to move up to half its speed and make a bite attack.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd18,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Реактивный [Reactive]', 
        requirements: '18 HD, Ловкость 18', 
        data:
        `
    The hollow can take one reaction on every turn in a combat
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Безрассудный [Reckless]', 
        requirements: '6 HD, Сила 14', 
        data:
        `
    At the start of its turn, the hollow can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn 
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_SL, 
        name: 'Безжалостный [Relentless]', 
        requirements: '6 HD', 
        data:
        `
    If the Hollow takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead. For each 4 HD above 8 HD, the damage needed to take is reduced by 2, minimum 10 damage.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst10, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd25,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ресурексион [Resurrección: Segunda Etapa]', 
        requirements: '25 HD, Арранкар, количество способностей не ниже 16', 
        data:
        `
    The Hollow must be in Resurrección to activate this ability.
                    
                                When the Hollow enters this form it gains the following benefits for the duration:
                                * 30 temporary hit points, these stack with any existing temporary hit points.
                                * Walking speed and Sonido increases by 30 feet          
                                * Gain 2 Armament abilities, these are only available in this form.
                                * Gain 2 Bankai abilities, these are only available in this form.
                                * Gain 2 Hollow abilities, these are only available in this form.
                                * All natural weapons, armament and unarmed strike damage dice is increased by one step
                    
                                This ability may be selected multiple times, each time choosing one of the following augments:
                                * Increase the duration by 1 minute
                                * You gain an additional armament and hollow ability or a Bankai ability in this form
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сокрытие в тенях [Shadow Stealth]', 
        requirements: '8 HD, Ловкость 13', 
        data:
        `
    While in dim light or darkness, the Hollow can take the Hide action as a bonus action.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Осадный монстр [Siege Monster]', 
        requirements: '10 HD, Сила 16', 
        data:
        `
    The hollow deals double damage to objects and structures
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst10, 
        rules: true,
        forSummon: false,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft20, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchRest_SL, 
        name: 'Сильбидо [Silbido]', 
        requirements: '12 HD, Харизма 13', 
        data:
        `
    Once per day, the Holow can summon Menos that appear in unoccupied spaces that they can see within range. Choose one of the following options for what appears:
                    
                                * One Menos of challenge rating 2 or lower.
                                * Two menos of challenge rating 1 or lower.
                                * Four Menos of challenge rating 1/2 or lower.
                                * Eight Menos of challenge rating 1/4 or lower.
                    
                                The Menos dissapear when it drops to 0 hit points.
                    
                                The summoned creatures are friendly to the Hollow and it's companions. They act on the same turn as the Hollow. They obey any verbal commands that are issued to them (no action required by the Hollow). If the Hollow doesn't issue any commands to them, they attack any hostile creatures.
                    
                                The DM has the creatures' statistics.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение размера [Size Increase]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow size increases by one category. Increasing its Strength score by 1 (maximum 18) and decreasing its Dexterity by 1 (minimum 8).
                    
                                This ability may be selected multiple times, to a maximum size of gargantuan.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Скользкий [Slippery]', 
        requirements: '4 HD', 
        data:
        `
    The Hollow has advantage on ability checks and saving throws made to escape a grapple.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchDay1, 
        name: 'Скрытая атака [Sneak Attack]', 
        requirements: '4 HD, Ловкость 15, навык (Скрытность)', 
        data:
        `
    The Hollow deals an extra 1d4 damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the Hollow that isn't incapacitated and the Hollow doesn't have disadvantage on the attack roll.
                    
                                For each 4 HD above 4 HD, the uses per day is increased by one; maximum 6\Day. For each 2 HD above 4 HD, the damage is increased by 1d4; maximum 6d4.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd24,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: true, 
            released: false
        }, 
        material_stuff: '(один из глаз заклинателя, который поглощает способность)',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.rchDay1, 
        name: 'Солита Виста [Solita Vista]', 
        requirements: '24 HD, Пескиса [Pesquisa], Мудрость 13 или Интеллект 13', 
        data:
        `
    The Hollow removes one of its eyes and crushes it, which turns into dust and flows around up to 12 willing creatures.
                    
                                Affected creatures experience events that the Hollow has experienced that it chooses as far back as one week. The affected creatures experience the events as the Hollow did, the sight, sounds, emotions, etc. The amount of time the Hollow can relay is 1 minute for each two HD it possesses, these minutes need not be consecutive of the same day or event. It can be one minute of one day, and another minute of another day.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd6,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сонидо [Sonido]', 
        requirements: '6 HD', 
        data:
        `
    The Hollow gains a Shunpo of 40 feet. For each 4 HD above 6 HD, the Shunpo is increased by 10 feet.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd2,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Паучье лазанье [Spider Climb]', 
        requirements: '2 HD', 
        data:
        `
    The Hollow can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd2,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Уверенный [Sure-Footed]', 
        requirements: '2 HD, Сила 13 или Ловкость 13', 
        data:
        `
    The Hollow has advantage on Strength and Dexterity saving throws against effects that would knock it prone.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Неожиданная атака [Surprise Attack]', 
        requirements: '8 HD', 
        data:
        `
    If the Hollow surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 1d6 damage from the attack. For each 4 HD above 8 HD, the damage increases by 1d6; maximum 4d6.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Проглатывание целиком [Swallow Whole]', 
        requirements: '10 HD, Укус [Bite], Большой размер существа', 
        data:
        `
    When the Hollow succeeds on it's Bite attack, If the target is at least one size smaller, it must succeed on a Dexterity saving throw or be swallowed by the Hollow. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the Hollow, and takes 3d4 acid damage at the start of each of the Hollows turns.
                    
                                If the Hollow takes 10 damage or more on a single turn from a creature inside it, the Hollow must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the Hollow. 
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Хвост [Tail]', 
        requirements: '3 HD', 
        data:
        `
    You gain a tail. You can grasp things with your tail. It has a reach of 5 feet, and it can lift a number of pounds equal your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container. Your DM might allow other simple tasks to be added to that list of options.
                    
                                Your tail can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.
                    
                                This ability may be selected multiple times, each time choosing one of the following options:
                                * Your tail is considered a melee weapon; using Dexterity.
                                * You can use your tail to grapple someone. You must have a Strength 16 to select this option.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd4,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Щупальце [Tentacle]', 
        requirements: '4 HD', 
        data:
        `
    You gain a tentacle. You can grasp things with your tentacle. It has a reach of 5 feet, and it can lift a number of pounds equal your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container. Your DM might allow other simple tasks to be added to that list of options.
                    
                                Your tentacle can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.
                    
                                This ability may be selected multiple times, each time choosing one of the following options:
                    
                                * Your tentacle is considered a melee weapon, you must choose if its Strength or Dexterity based.
                                * You can use your tentacle to grapple someone. You must have a Strength 16 to select this option.
                                * You gain another tentacle.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd3,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Местный камуфляж [Terrain Camouflage]', 
        requirements: '3 HD', 
        data:
        `
    Choose one of the following terrains: Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Underwater, or Urban. The Hollow has advantage on Dexterity (Stealth) checks made to hide in the chosen terrain.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd10,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Тунеллер [Tunneler]', 
        requirements: '10 HD, Землерой [Burrow]', 
        data:
        `
    The Hollow can burrow through solid rock at half its burrowing speed and leaves a 10-foot-diameter tunnel in its wake.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.hd12,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Мстительный следопыт [Vengeful Tracker]', 
        requirements: '12 HD', 
        data:
        `
    The Hollow knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the Hollow are on different planes of existence. If the creature being tracked by the Hollow dies, the Hollow knows.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Хождение по воде [Water Walking]', 
        requirements: '8 HD', 
        data:
        `
    The Hollow can walk across water and other liquids as if they were solid ground.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst3, 
        rules: true,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Паутина [Web]', 
        requirements: '8 HD', 
        data:
        `
    As an action, the Hollow spews out webbing at a creature it can see within 30 feet. The target is restrained by webbing. As an action, the restrained target can make a Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; HP 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd8,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Паучий сенсор [Web Sense]', 
        requirements: '8 HD', 
        data:
        `
    While in contact with a web, the Hollow knows the exact location of any other creature in contact with the same web.
                    
                                Additionally, the Hollow ignores movement restrictions caused by webbing.
        `
    },
    {
        type: tp.hollow,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.hd14,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Уязвленная ярость [Wounded Fury]', 
        requirements: '12 HD', 
        data:
        `
    While the Hollow has 10 hit points or fewer, the Hollow has advantage on attack rolls. In addition, it deals an extra 1d6 damage to any target it hits with a melee attack. For each 4 HD above 14 HD, the Hollow deals an additional 1d6 damage; maximum 6d6.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма холода [Cold Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure ice. While this ability is active, your armaments damage type is changed to cold damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ледяное оружие [Ice Weapon]', 
        requirements: '', 
        data:
        `
    Ice rimes your armament, dealing an additional 1d4 cold damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or s components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Замораживающее оружие [Freezing Weapon]', 
        requirements: 'Одна ледяная способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 cold damage and is slowed. The target can use an action to make a Strength or Constitution saving throw. On a success, this effect ends.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, maximum of a 1d10.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Контроль льда и снега [Control Ice & Snow]', 
        requirements: 'Одна ледяная способность', 
        data:
        `
    You choose nonmagical ice, snow or water that you can see within range and that fits within a 5-foot cube. You affect it in one of the follows ways:
                                * You instantaneously freeze the water into ice or snow, you instantaneously melt ice or snow into water or can harden show into ice or soften ice to snow.
                                * You lower the temperature by two temperature bands This change lasts for the duration.
                                * You cause simple shapes - such as vague form of a creature, an inanimate object or location - to appear within the ice or snow as you lie. The shapes last for the duration.
                                * If you use this ability multiple times, you can only have a number of its non-instantaneous effects, equal to your proficiency bonus active at a time, and you can dismiss such an effect as an action.
    
                                Each time you reselect this ability, the cube is increased by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may now affect magical ice, snow or water.
                                * The ice you can produce with this ability cannot be thawed out magically or otherwise.
                                * You can lower the temperature by an additional 2 temperature bands.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ледяной щит [Ice Shield]', 
        requirements: 'Две ледяные способности', 
        data:
        `
    A coat of ice surrounds your body for the ability's duration. The ice doesn't harm you or your equipment. Until the ability ends, you gain the following benefits:
                                * You have resistance to cold and fire damage.
                                * You reduce the next physical damage you take by 4, one you've taken this amount of damage, this part of the ability ends. Each time you reselect this ability, this increased by 1.
                                * Any creature that is within 5 feet of you is slowed. Each time you reselect this ability, the range increases by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You are immune to cold damage instead.
                                * You may choose if this ability's damage affects creatures or not.
    
        `
    },
    {
        type: tp.ice,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Конус льда [Cone of Ice]', 
        requirements: 'Три ледяные способности', 
        data:
        `
    A blast of cold air erupts from you. Each creature in a 60-foot cone must make a Dexterity saving throw. A creatures takes 3d8 cold damage on a failed save, or half as much damage on a successful one.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the cone size by 5 feet.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена льда [Wall of Ice]', 
        requirements: 'Четыре ледяные способности', 
        data:
        `
    You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of up to ten 10-foot-square panels. Each panel must be continuous with another panel. In any form, the wall is 1 foot thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature within its area is puched to one side of the wall and must make dexterity saving throw. On a failed save, the creatures takes 4d6 cold damage, or half as much damage on a successful save.
    
                                The wall is an object that can be damaged and thus breached. Each panel has AC 12 and 10 hit points per inch of thickness, and it is vulnerable to fire damage. Reducing a panel of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving throw the sheet of frigid air for the first time on turn must make a Constitution saving throw. The creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one.
    
                                Each time you reselect this ability, increase the damage by 1d6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You can create an additional panel.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Столб льда [Pillar of Ice]', 
        requirements: 'Четыре ледяные способности', 
        data:
        `
    A 10-foot-radius, 40-foot-high column of ice rises from the ground, lifting any object or creature (including you) standing in the area into the air. Creatures succeeding on a Dexterity saving throw can choose to avoid the column, on failure taking 6d6 cold damage.
    
                                Moving or fighting atop the ice column requires an Acrobatics check. Those who fail fall prone and must immediately succeed on a Dexterity saving throw or slip off the column, taking commensurate falling damage.
    
                                Creatures atop the column as it rises may be smashed against the ceiling or other overhead obstruction, which deals 3d6 cold damage and 3d6 bludgeoning damage. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * Increase the radius and height or the cylinder by 5 feet.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ледяной шторм [Ice Storm] (Ultimate)', 
        requirements: 'Пять ледяных способностей', 
        data:
        `
    A hail of rock-hard ice pounds on five ares you choose within range.
    
                                The area consists of 80-foot-radius, 40-foot-high cylinder. Each creature in the area takes 7d8 cold damage.
    
                                Hailstones causes the creatures within it's area to be slowed.
    
                                Each time you reselect this ability, increase the damage by 1d8.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the radius and height by 10 feet.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.mile1, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ледяной рой [Ice Swarm] (Ascended)', 
        requirements: 'Шесть ледяных способностей', 
        data:
        `
    Freezing orbs of ice plummet to the ground at four different points you can see within range.
    
                                Each creature in a 20-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creatures takes 10d6 cold damage and 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one icy bursts is affected only once.
    
                                This ability damages plants, objects in the area and freezes water solid.
    
                                You may reselect this ability a second time, if you do, creatures can be affected more than once from the icy bursts.
        `
    },
    {
        type: tp.ice,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.mile1, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ниже нуля [Subzero] (Ascended)', 
        requirements: 'Шесть ледяных способностей', 
        data:
        `
    Your armament abilities or Kido that deal cold damage, ignore resistances. If a creature would be immune to cold damage, they instead take half damage.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Психическая форма [Psychic Form]', 
        requirements: '', 
        data:
        `
    While this ability is active, your armaments damage type is changed to psychic damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Оружие разума [Mind Weapon]', 
        requirements: '', 
        data:
        `
    Your armament deals an additional 1d4 psychic damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Псионическое оружие [Psionic Weapon]', 
        requirements: 'Одна иллюзорная способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 psychic damage and is incapacitated. At the end of each of its turns, the target can make a intelligence saving throw. On a success, the effect ends on the target.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of a 1d10.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Иллюзия [Illusion]', 
        requirements: 'Одна иллюзорная способность', 
        data:
        `
    You create one image of an object that is no larger than a 5-foot cube. Each time you reselect this ability, the cube increased by 5 feet and the number of images you can create increases by one.
    
                                The image appears at a spot that you can see within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.
    
                                As long as you are within range of the illusion, you can use your action to alter its appearance. Each time you reselect this ability, the range of this ability increases by 10 feet.
    
                                Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against the save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * You can instead use a bonus action to alter the illusion.
                                * You can create images of creatures.
                                * You can also create and altar auditory sensations with the illusion.
                                * You can also create and alter olfactory sensations within the illusion.
                                * You can also create and altar temperatures appropriate to the illusion.
                                * You can spend an action to 'program' scripted events your illusion follows, as well as specific conditions that must be met to activate, or change the events. These events continue to loop until the end of the duration, or you program different events. You must have select this ability four times before you can select this option.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сокрытие себя [Disguise Self]', 
        requirements: 'Одна иллюзорная способность', 
        data:
        `
    You make yourself - including your clothing, armor, weapons and other belongs on your person - look different for the duration, or until you use your action to dismiss it.
    
                                You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.
    
                                The changes wrought by this ability fail to hold up to physical inspection. For example, if you use this ability to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this ability to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.
    
                                To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your save DC.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
    
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * Increase the duration by 1 minute.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Зеркальное изображение [Mirror Image]', 
        requirements: 'Две иллюзорные способности', 
        data:
        `
    Three illusory duplicates of yourself appear in your space. For the duration, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which images is real. You can use your action to dismiss the illusory duplicates.
    
                                Each time a creature targets you with an attack during the ability's duration, roll a d20 to determine whether the attack instead targets one of your duplicates.
    
                                If the number rolled is equal to or greaterh than 20 - 8 - the number of duplicates, you may change the attack's target to a duplicate.
    
                                A duplicates AC equal 10 + your Dexterity modifier. If an attack hits a duplicate, teh duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The ability ends when all duplicates are destroyed.
    
                                A creature is unaffected by this ability if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the duration by 1 minute.
                                * Increase the amount of duplicates by one, maximum of six duplicates.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Страх [Fear]', 
        requirements: 'Три иллюзорные способности', 
        data:
        `
    Choose a single creature you can see within range, you project a phantasmal image of that creature’s worst fears that is only visible to that creature. Each time you reselect this ability the range increased by 10 feet.
    
                                The target must make a Intelligence saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target’s turns before the spell ends, the target must succeed on a Wisdom saving throw or take 2d8 psychic damage. On a successful save, the spell ends.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * You can target an additional creature, maximum 5.
                                * Increase the damage by 1d8 to a maximum of 6d8.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Призрачный убийца [Phantasmal Killer]', 
        requirements: 'Четыре иллюзорные способности', 
        data:
        `
    You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This ability has no effect on undead or constructs. Each time you reselect this ability the cube is increased by 5 feet.
    
                                The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.
    
                                The target can use its action to examine the phantasm with an Intelligence (Investigation) check against the save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the ability ends.
    
                                While a target is affected by the ability, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall it was pushed, it slipped, or a strong wind might have knocked it off.
    
                                An affected target is so convinced of the phantasm’s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 4d6 psychic damage to the target if it is in the phantasm's area of within 5 fee of the phantasm,
    
                                provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * this ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Галлюциногенный ландшафт [Hallucinatory Terrain]', 
        requirements: 'Четыре иллюзорные способности', 
        data:
        `
    You make terrain in an area up to 20-foot-cube look, sound, smell, and even feel like some other sort of terrain. each time
    
                                Each time you reselect this ability, the cube increases by 5 feet. The terrain’s general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.
    
                                Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn’t disguise, conceal, or add creatures.
    
                                The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell’s area disappears immediately.
    
                                A creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * Increase the duration by 1 minute.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.ft20, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          true
        }, 
        recharge: rch.none, 
        name: 'Геас [Geas] (Ultimate)', 
        requirements: 'Пять иллюзорных способностей', 
        data:
        `
    You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide.
                                If the creature can understand you it becomes charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can’t understand you is unaffected by this ability.
    
                                Each time you reselect this ability the damage increases by 1d10.
    
                                You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the ability ends. You can end the ability early by using an action to dismiss it. A remove curse, greater restoration, or similar magic or ability also ends it.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * Increase the duration by 1 day.
                                * A creature may take damage more than once each day. You must have selected this ability three times before you can select this option.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Тюрьма разума [Mental Prison] (Ascended)', 
        requirements: 'Шесть иллюзорных способностей', 
        data:
        `
    You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw
    
                                The target succeeds automatically if it is immune to being charmed.
    
                                On a successful save, the target takes 10d10 psychic damage, and the ability ends. On a failed save, the target takes 10d10 psychic damage, and you make the area immediately around the target’s space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can’t see or hear anything beyond it and is restrained for the ability's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends.
    
                                You may select this ability a second time, if you do, this ability affects creatures even if they are immune to being charmed and the damage is doubled.
        `
    },
    {
        type: tp.illusion,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Двойная мечта [Double Dream] (Ascended)', 
        requirements: 'Шесть иллюзорных способностей', 
        data:
        `
    Your armament abilities or Kido that deal psychic damage, ignore resistances. If a creature would be immune to psychic damage, they instead take half damage.
    
                                Additionally, when you target a creature with an Illusion ability or spell, and they are currently under the effects of another Illusion ability or spell used by you, they have disadvantage on the saving throw.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Расширенное кидо [Expanded Kidō]', 
        requirements: '', 
        data:
        `
    You learn two new spells of your choice from your class's spell list, or one spell of your choice from any other spell list.
    
                                You may reselect this ability multiple times.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        true, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Клинок манны [Spell Blade]', 
        requirements: '', 
        data:
        `
    You channel Kidō into your weapon.
    
                                When you use this ability, you must spend a spell slot, for the duration you gain a bonus to attack and damage rolls made with your armament equal to the level of the spell slot expended for the duration.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * Increase the duration by one round.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Клинок арканы [Arcane Blade]', 
        requirements: 'Одна способность кидо', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 force damage and you regain an expended spell slot of your choice, maximum level two.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the damage dice size by one step, to a maximum of a 1d10.
                                * Increase the max level of the spell slot you regain by one, to a maximum of 7th level.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Метамагия [Metamagic]', 
        requirements: 'Одна способность кидо', 
        data:
        `
    You learn one Metamagic option of your choice. You also gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source, but can be used only on Metamagic). You regain all spend sorcery points when you finish a long rest.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You gain another Metamagic option of your choice.
                                * You gain 1 additional sorcery point.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Оборонительное Кидо [Kidō Ward]', 
        requirements: 'Две способности кидо', 
        data:
        `
    You create a magical ward on yourself that lasts for the duration. You can expend a spell slot, the ward has hit points equal to the spell level + your proficiency bonus. Whenever you take damage, the ward takes the damage instead. If this damage reduced the ward to 0 hit points, you take any remaining damage.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer require V or s components.
                                * This ability no longer requires concentration.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Связь арканы [Arcane Channeling]', 
        requirements: 'Три способности кидо', 
        data:
        `
    Once during your turn when you take the attack action and successfully land an attack with your armament, you may cast a spell as part of the same action. The spell must have a casting time of one action, and either have a range of touch or require an attack roll. The attack deals damage normally; then the effect of the spell is resolved.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * The spell you cast no longer needs to have a range of touch.
                                * The spell you cast no longer need needs to require an attack roll.
        `
    },
    {
        type: tp.kido,
        cost: cost.varys, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.ft40, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Контр - клинок [Counter Blade]', 
        requirements: 'Четыре способности кидо', 
        data:
        `
    If a creature you can see within range activates an armament ability you expend a number of SP points equal to that armaments SP cost and make a Reiatsu check apposed by that creatures Reiatsu check. If your check is greater than their roll, the creatures weapon ability fails and has no effect.
    
                                This ability does not affect Final Shikai or Bankai abilities.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * You can affect Bankai abilities. You must have Bankai before you can select this option.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.special, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       true,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Омни заклинание [Omni Spell] (Ultimate)', 
        requirements: 'Пять способностей кидо', 
        data:
        `
    When you activate this ability you choose 3 spells you know. As part of the same action you simultaneously cast the chosen spells, choosing which order they resolve. You still need any necessary components to cast the chosen spells. Additionally, these spells cannot be countered.
    
                                You gain two levels of exhaustion.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability does not require V or S components.
                                * You do not need the components for the chosen spells.
                                * You can choose an additional spell with this ability.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.action, 
        range: rng.special, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       true, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Чародейский всплеск [Arcane Surge] (Ascended)', 
        requirements: 'Шесть способностей кидо', 
        data:
        `
    When you active this ability, roll a d8. As part of the same action you may activate the rolled option, or on another turn as an action during the duration.
    
                                | d8  | Effect |
                                |:---:|:-----------|
                                |  1  | Roll on the Wild Magic table |
                                |  2  | For the duration, your movement is reduced by half and you have resistance to all damage |
                                |  3  | You have advantage on ability checks and you reroll 1's on attack and damage rolls for the duration |
                                |  4  | You cast Sleep with the 5d8's maximized |
                                |  5  | You instantaneously teleport yourself and any number of other creatures within 5 feet of you, up to 100 feet. Each creature appears in an unoccupied space |
                                |  6  | You cast Fireball |
                                |  7  | You regain 100 hit points |
                                |  8  | Your Kidō is drained to power a brilliant 60-foot radius explosion centered on you. This ability expends all of your Spell points and/or spell slots. This ability deals 1d8 force damage per spell slot expended or 2 points of force damage per spell point expended. Each creature within range must make a dexterity saving throw. On a successful save they take half damage. |
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the duration by 2 minutes.
                                * When you activate this ability, you roll 2d8's instead and choose one result. You must have selected this ability two times before you can choose this option.
        `
    },
    {
        type: tp.kido,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Критическое заклинание [Critical Spell] (Ascended)', 
        requirements: 'Шесть способностей кидо', 
        data:
        `
    Whenever you cast a spell that requires a saving throw, and any affected creatures roll a 1 on their saving throw, you may choose one of the following effects:
                                * If the spell deals damage, you double the damage dice.
                                * If the spell would allow additional saving throws, the affected creature rolls them with disadvantage.
                                * If the spell has a duration, you double it.
                                * If the spell had a single target and requires concentration, you do not need to concentrate.
        `
    },
    {
        type: tp.light,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сияющая форма [Radiant Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure light. While this ability is active, your armaments damage type is changed to radiant damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.light,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Оружие света [Luminous Weapon]', 
        requirements: '', 
        data:
        `
    Your armament illuminates with righteous energy, dealing an additional 1d4 radiant damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.light,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Раскаленное оружие [Incandescent Weapon]', 
        requirements: 'Одна световая способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 radiant damage, and is blinded. On each of its turns, the target can use an action to make a Constitution saving throw. On a success, this effect ends. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of 1d10.
        `
    },
    {
        type: tp.light,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Аура света [Aura of Light]', 
        requirements: 'Две световые способности', 
        data:
        `
    Your body glows with deadly light for the ability's duration. The light doesn't harm you. Until the ability ends, you gain the following benefits:
                                * You have resistance to Necrotic and Radiant damage.
                                * You shed magical bright light in a 10-foot-radius sphere and dim light for an additional 10 feet. Each time you reselect this ability, the sphere is increased by 10 feet.
                                * Any creature that moves inside the sphere for the first time on a turn or ends its turn there, takes 1d4 radiant damage. Each time you reselect this ability, the damage dice size is increased by one step to a maximum of 1d10.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * While this ability is active you are instead immune to radiant damage.
        `
    },
    {
        type: tp.light,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Дневной свет [Daylight]', 
        requirements: 'Одна световая способность', 
        data:
        `
    A 20-foot-radius sphere of magical light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 20 feet. 
    
                                The blinding light causes enemies within the area to have disadvantage on attack rolls.
    
                                Nonmagical darkness can't darken the area. if the point you choose is on an object you are holding or one that isn't being worn or carried, the light emanates from the object and moves with it. Completely covering the source of the light with a opaque object, such as a bowl or a helm, blocks the light.
    
                                If any of this ability's area overlaps with an area of darkness created by Kido of 2nd level or lower, the spell that created the darkness is dispelled. Each time you reselect this ability, the level of kido this ability dispels increases by one.
    
                                If any of this ability's area overlaps with an area of darkness created by a armament you make a Reiatsu check, if successful, the darkness is dispelled. Each time you reselect this ability, you gain a +1 bonus on this Reiatus check.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
    
                                * Increase the range and radius of this ability by 10 feet.
                                * Increase the duration by 1 minute.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
        `
    },
    {
        type: tp.light,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.touch, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Дневное зрение [Lightvision]', 
        requirements: 'Дневной свет [Daylight]', 
        data:
        `
    You touch a willing creature giving it's eyes a luminous glow. For the duration, that creature has darkvision out to a range of 60 feet. Additionally, the creature is unaffected by bright light. Each time you reselect this ability, the range is increased by 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the duration of this ability by 1 minute.
                                * This ability no longer requires V components.
                                * Affected creatures may see into magical darkness, and while this ability is active, the affected creatures are immune to being Blinded. You must have selected this ability two times before you can select this option.
        `
    },
    {
        type: tp.light,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft80, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Взрыв света [Luminous Blast]', 
        requirements: 'Две световые способности', 
        data:
        `
    A beam of light streaks toward a creature within range. Make a ranged attack against the target. On a hit, the target takes 3d8 radiant damage.
    
                                Each time you reselect this ability, you gain an additional beam to a maximum of four beams. You can direct the additional beams at the same target or a different one, you must make a separate attack roll for any additional beams.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V components.
                                * The range is increased by 10 feet.
                                * Increase the damage die size to a d10. You must have select this ability four times before you can select this option.
        `
    },
    {
        type: tp.light,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена света [Wall of Light]', 
        requirements: 'Три световые способности', 
        data:
        `
    A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface.
    
                                The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 60 feet and dim light for an additional 60 feet.
    
                                When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d6 radiant damage, and it is blinded for 1 minute.
    
                                On a successful save, it takes half as much damage and isn't blinded.
    
                                A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.
    
                                A creature that ends its turn in the walls area takes 4d6 radiant damage. Until the spell ends, you can use an action to launch a beam of light from the wall at one creature you can see within 40 feet of it.
    
                                Make a ranged attack. On a hit, the target takes 4d6 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the walls length drops to 0 feet, the ability ends. 
    
                                Each time you reelect this ability, increase the damage by 1d6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range, height, and length of this ability by 10 feet.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * The blind duration is increased by 1 minute.
        `
    },
    {
        type: tp.light,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Всплеск света [Burst of Light] (Ultimate)', 
        requirements: 'Четыре световые способности', 
        data:
        `
    The light of dawn shines outward from you in a 60-foot-radius-sphere centered on you. This light is sunlight. Each creature within the area takes 7d8 radiant damage and is blinded for 1 minute. 
    
                                A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.
    
                                This ability dispels any darkness in its area that was created by Kido. Each time you reselect this ability, increase the damage by 1d8.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the radius sphere by 10 feet.
                                * Increase the save DC 2.
        `
    },
    {
        type: tp.light,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Супернова [Supernova] (Ascended)', 
        requirements: 'Пять световых способностей', 
        data:
        `
    Brilliant sunlight flashes in a 60-foot-radius-sphere centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 20d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this ability. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. This ability dispels any darkness in its area that was created by Kido.
    
                                If a creature is slain by this ability they are vaporized, gone, and utterly destroyed. Only the direct intervention of a deity can restore an annihilated character.
    
                                You may select this ability a second time, if you do the radius sphere is doubled, creatures are blinded whether they succeed the save or not, and the damage dice size is increased to d10.
        `
    },
    {
        type: tp.light,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Святой свет [Holy Light] (Ascended)', 
        requirements: 'Шесть световых способностей', 
        data:
        `
    Your Light abilities are increased in power.
    
                                Your armament abilities or Kido that deal radiant damage ignore resistances. If a creature would be immune to radiant damage, it instead takes half damage.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма молнии [Lightning Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure electricity. While this ability is active, your armaments damage type is changed to lightning damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Электрическое оружие [Electric Weapon]', 
        requirements: '', 
        data:
        `
    Your armament is charged with electricity, dealing an additional 1d4 lightning damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
    
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Шоковое оружие [Shocking Weapon]', 
        requirements: 'Одна молниевая способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 lightning damage, and is stunned. At the beginning of each of its turns, the target can make another Constitution saving throw. On a success, this effect ends. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of 1d10.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.reaction, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Отражение снаряда [Deflect Bolt]', 
        requirements: 'Одна молниевая способность', 
        data:
        `
    You are able to deflect lighting. If you would be subjected to a bolt of lightning or similar effect, and you succeed the saving throw or if it's an attack that hits you, you reduce the damage
    
                                by 1d10 + Dexterity modifier + Proficiency bonus. If you would reduce the damage to zero you deflect the effect, causing it to fail.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may use this ability even if you fail the saving throw.
                                * You further reduce the damage you take by an amount equal to your level.
                                * When you would successfully deflect an effect, you can instead redirect it. As part of the reaction, you change the direction or targets of the effect. Any creatures within the new area must make the appropriate saving throw and suffer any damage or effects as stated by the effect. If a ranged attack would need to be made, you do so at proficiency with a range of 10 x proficiency bonus.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Молниевый щит [Lightning Shield]', 
        requirements: 'Две молниевые способности', 
        data:
        `
    Lightning sparks across your body for the duration. The lightning doesn't harm you. Until the ability ends, you gain the following benefits:
                                * You have resistance to lightning and thunder damage.
                                * All forms of movement are increased by 10 feet. Each time you reselect this ability this bonus increases by 5 feet.
                                * Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d4 lightning damage. Each time you reselect this ability, the damage dice size is increased by one step, to a maximum of a 1d10.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You are immune to lightning damage instead.
                                * You may choose if this ability's damage effects creatures or not.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Молниевый снаряд [Lightning Bolt]', 
        requirements: 'Три молниевые способности', 
        data:
        `
    A stroke of lightning forming a line 60 feet long and 5 feet wide blasts out from you in a direction you choose.
    
                                Each creature in the light must make a Dexterity saving throw. A creatures takes 6d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V components.
                                * Increase the length by 5 feet.
                                * Increase the damage by 1d6.
                                * For each creature that failed their saving throw, you have up to one bolt leap from that creature to a target within 30 feet. A target can be a creature or an object and can only be targeted by one of the bolts. You must have selected this ability twice before you can choose this option.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft80, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Призыв молнии [Call Lightning]', 
        requirements: 'Четыре молниевые способности', 
        data:
        `
    A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 20-foot radius, centered on a point you can see within range directly above you. The ability fails if you can’t see a point in the air where the storm cloud could appear (for example, if you are in a room that can’t accommodate the cloud). Each time you select this ability increase the radius increases by 5 feet.
    
                                When you use this ability, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 4d6 Lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the ability ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability no longer requires V components.
                                * This ability no longer requires Concentration.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Штормовой шаг [Storm Step]', 
        requirements: 'Четыре молниевые способности', 
        data:
        `
    You transform into a bolt of Lightning and transport yourself to an area within range. Each time you reselect this ability the range increases by 10 feet.
    
                                You must either have line of sight to your destination or you must specify a direction and distance within range. Creatures and objects in the path of your passage take 5d8 points of Lightning damage or half as much one successful save.
    
                                If your path intersects with a solid object, you damage the barrier accordingly. If the damage is enough to break through the barrier, you continue beyond the barrier as long as the ability's range permits; otherwise, your movement stops in the square adjacent to the barrier and the effect ends.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the damage by 1d8.
                                * When you arrive at your destination, each creature within 10 feet must make a Dexterity saving throw. Taking 3d6 lightning damage on failed save, or half as much on a success.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.action, 
        range: rng.ft200, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Шаровая молния [Lightning Sphere] (Ultimate)', 
        requirements: 'Пять молниевых способностей', 
        data:
        `
    A crackling globe of electric energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere.
                                Each creature within the area takes 7d8 Lightning damage.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * Increase the radius by 10 feet.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.reaction, 
        range: rng.self, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Перезаряженный [Supercharged] (Ascended)', 
        requirements: 'Шесть молниевых способностей', 
        data:
        `
    While released, when you are subject to an ability or spell that deals 15 points or more of Lightning damage, as a reaction you are unaffected by that ability or spell and you can enter your Ascended form and activate this ability at the same time.
                                While this ability is active you gain the following benefits:
                                * Increase all forms of movement by 30 feet.
                                * You Dexterity score becomes 20.
                                * You gain advantage on Dexterity saving throws and skill checks.
                                * You regain 5 hit points at the start of your turn as long as you are conscious.
                                * You are immune to Exhaustion and the Paralyzed condition.
    
                                You may reselect this ability a second time, if you do you gain the following benefits instead:
                                * Increase all forms of movement by 60 feet.
                                * You Dexterity score becomes 24.
                                * You gain advantage on Dexterity saving throws and skill checks. Additionally, you gain a bonus equal to your level.
                                * You regain 10 hit points at the start of your turn as long as you are conscious.
                                * You are immune to the Exhaustion, Paralyzed, Incapacitated and Poisoned conditions.
        `
    },
    {
        type: tp.lightning,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сверхмолнии [Suberbolts] (Ascended)', 
        requirements: 'Шесть молниевых способностей', 
        data:
        `
    Your Lighting abilities are increased in power.
    
                                Your armament abilities or Kido that deal lightning damage ignore resistances. If a creature would be immune to lightning damage, it instead takes half damage.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Аура давления [Oppressive Aura]', 
        requirements: 'Харизма 14, навык (Запугивание)', 
        data:
        `
    You unleash your reiatsu in a 30-foot-radius sphere centered on you. This sphere moves with you. Any creature within this sphere must make a Reaitsu check opposed by your Reiatsu check. On a failure, they are subjected to the effects of your Oppressive Aura.
    
                                Affected creatures within the sphere roll a d4 and subtract the number rolled from any attack roll they make.
                                You may also choose a number of creatures equal to your proficiency bonus + 1 to not be affected by your Oppressive Aura.
    
                                The radius of the sphere is increased by 10 feet for every other Oppression ability you possess.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the radius of the sphere by 10 feet.
                                * This ability no longer requires V or S components.
                                * Increase the dice size by on step, to a maximum of a 1d8.
                                * Increase the number of creatures you can choose to not be affected by this ability by four.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление скорости [Suppress Speed]', 
        requirements: 'Аура давления [Oppressive Aura]', 
        data:
        `
    Creatures affected by your Oppressive Aura have all their forms of movement reduced by 5 feet, to a minimum of 5 feet.
    
                                You may reselect this ability multiple times, each time reducing speed by 5 feet.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление навыков [Suppress Skill]', 
        requirements: 'Аура давления [Oppressive Aura]', 
        data:
        `
    Whenever a creature affected by your Oppressive Aura makes a skill check, they must roll a d4 and subtract the number rolled from it.
    
                                You may reselect this ability multiple times, each time increase the die size by one step to a maximum of a 1d12.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление брони [Suppress Armor]', 
        requirements: 'Аура давления [Oppressive Aura]', 
        data:
        `
    Creatures affected by your Oppressive Aura have their Armor Class reduced by 2 to a minimum of 1.
    
                                You may reselect this ability multiple times, each time reducing their Armor Class by 2.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление способностей [Suppress Ability]', 
        requirements: 'Аура давления [Oppressive Aura] и два других способности давления', 
        data:
        `
    Choose an ability score, this choice is permanent. Creatures affected by your Oppressive Aura have the the chosen ability score reduced by 2, to a minimum of 6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the penalty by 2.
                                * Choose an additional ability score this penalty applies too.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление магии [Suppress Magic]', 
        requirements: 'Аура давления [Oppressive Aura] и три других способности давления', 
        data:
        `
    Creatures affected by your Oppressive Aura have one spell slot they are barred from using, starting from their highest.
    
                                You may reselect this ability multiple times, each time affecting an additional spell slot.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление урона [Suppress Damage]', 
        requirements: 'Аура давления [Oppressive Aura] и четыре других способности давления', 
        data:
        `
    The damage die size of any ability, attack or spell of a creature or object affected by your Oppressive Aura is reduced by one step, to a minimum of 1d4.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление спасбросков [Suppress Saves', 
        requirements: 'Аура давления [Oppressive Aura] и пять других способностей давления', 
        data:
        `
    Whenever a creature affected by your Oppressive Aura makes a saving throw, they must roll a d4 and subtract the number rolled from the saving throw.
    
                                You may reselect this ability multiple times, each time increasing the die size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.none, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       true,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление жизненной силы [Suppress Vitality] (Ultimate)', 
        requirements: 'Аура давления [Oppressive Aura] и шесть других способностей давления', 
        data:
        `
    Your Reiatsu becomes overwhelming, making it difficult to breathe. For the duration you are considered incapacitated.
                                The air within your Oppressive Aura is no longer breathable except for you.
                                You can concentrate on this ability and Oppressive Aura at the same time, however you have disadvantage on concentration checks.
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the duration by 1 minute.
        `
    },
    {
        type: tp.oppression,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подавление силы [Suppress Power] (Ascended)', 
        requirements: 'Аура давления [Oppressive Aura] и шесть других способностей давления', 
        data:
        `
    Creatures affected by your Oppressive Aura have a 20% chance that any spell they cast fails.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the percent chance of failure by 10%, maximum 50%.
                                * This ability also affects weapon abilities
        `
    },
    {
        type: tp.poison,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма яда [Poison Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure poison. While this ability is active, your armaments damage type is changed to poison damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ядовитое оружие [Venomous Weapon]', 
        requirements: '', 
        data:
        `
    Your armament secretes poison, dealing an additional 1d4 poison damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Токсическое оружие [Toxic Weapon]', 
        requirements: 'Одна ядовитая способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 poison damage, and is poisoned. On each of its turns, the target can use an action to make a Constitution saving throw. On a success, this effect ends. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of 1d10.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Чувство яда [Poison Sense]', 
        requirements: 'Одна ядовитая способность', 
        data:
        `
    While your armament is released you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.
    
                                This ability can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range by 10 feet.
                                * This ability is no longer blocked by 1 foot of stone or 1 inch of common metal.
                                * This ability is no longer blocked by a thin sheet of lead or 3 feet of wood or dirt. You must have selected this ability twice before you can choose this option.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft30, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ядовитое облако [Poison Cloud]', 
        requirements: 'Одна ядовитая способность', 
        data:
        `
    You create a 20-foot-radius sphere of poisonous gas centered on a point within range. The sphere spreads around corners, and its area is heavily obscured, It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.
    
                                While within range, as an action you can move the cloud up to 20 feet and shape the gas in any way you choose so long as it a 5x5 portion of the cloud is adjacent to another.
                                Any creatures that begins or ends its turn within the cloud must succeed on a Constitution saving throw or be poisoned for the duration. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the ability ends on the target.
    
                                Each time you reselect this ability the range increases by 20 feet.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - Increase the range by 10 feet.
                                - This ability no longer requires V or S comonents.
                                - This ability no longer requires Concentration.
                                - Increase the duration b 1 minute.
                                - Increase the save DC by 1
        `
    },
    {
        type: tp.poison,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Ядовитый щит [Poison Shield]', 
        requirements: 'Две ядовитые способности', 
        data:
        `
    Poisonous gas surrounds your body for the duration. The poison does not affect you. Until the ability ends, you gain the following benefits:
                                * You have resistance to acid and poison damage.
                                * A creature that touches you, hits you with a melee attack or ends their within 5 feet of you, takes 1d4 poison damage. Every time you reselect this ability the damage dice size is increased by one step to a maximum of a 1d10.
                                * You can use your action to create a 15-foot cone of poisonous gas extending out from you in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 2d6 poison damage on failed save, and half as much damage on a successful one. Using this ends the ability. Each time you reselect this ability, the cone increases by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You are instead immune to poison damage and the poisoned condition.
                                * Increase the damage of the cone by 1d6.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Конус яда [Cone of Poison]', 
        requirements: 'Три ядовитые способности', 
        data:
        `
    Poisonous gas surrounds your body for the duration. The poison does not affect you. Until the ability ends, you gain the following benefits:
                                * You have resistance to acid and poison damage.
                                * A creature that touches you, hits you with a melee attack or ends their within 5 feet of you, takes 1d4 poison damage. Every time you reselect this ability the damage dice size is increased by one step to a maximum of a 1d10.
                                * You can use your action to create a 15-foot cone of poisonous gas extending out from you in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 2d6 poison damage on failed save, and half as much damage on a successful one. Using this ends the ability. Each time you reselect this ability, the cone increases by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires Concentration.
                                * You are instead immune to poison damage and the poisoned condition.
                                * Increase the damage of the cone by 1d6.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Губитель [Blighter]', 
        requirements: 'Четыре ядовитые способности', 
        data:
        `
    You ravage your foes with a deadly disease. Whenever a creature is dealt poison damage or gains the poisoned condition from one of your armament abilities or spells,
    
                                you may infect them with one of your diseases selected from below, your choice. 
    
                                **Cackle Fever:** Symptoms manifest 1d6 hours after infection and include fever and disorientation. The infected creature gains one level of exhaustion that can’t be removed until the disease is cured.
    
                                Any event that causes the infected creature great stress — including entering combat, taking damage, experiencing fear, or having a nightmare — forces the creature to make a Constitution saving throw. On a failed save, the creature takes 1d6 psychic damage and becomes incapacitated with mad laughter for 1 minute.
    
                                The creature can repeat the saving throw at the end of each of its turns, ending the mad laughter and the incapacitated condition on a success.
    
                                At the end of each long rest, an infected creature can make a Constitution saving throw. On a successful save, the DC for this save and for the save to avoid an attack of mad laughter drops by 1d6. When the saving throw DC drops to 0, the creature recovers from the disease.
    
                                **Sewer Plague:** Symptoms manifest 1d6 days after infection and include fatigue and cramps. The infected creatures gains one level of exhaustion that can't be removed until the disease is cured or as stated below, and it regains only half the normal of hit points from spending Hit Dice and when taking a long rest, the creature must spend Hit Die to regain hit points; spent hit dice are then regained as normal.
    
                                At the end of each long rest, an infected creature must make a Constitution saving throw. On a failed save, the creature gains one level of exhaustion. On a successful save, the creatures exhaustion level decreases by one level. If a successful saving throw reduces the infected creature’s level of exhaustion to 0 or below, the creature recovers from the disease.
    
                                **Sight Rot:** Symptoms manifest 1d6 minutes after infection and include bleeding from the eyes. The creature’s vision starts to become blurry. The creature takes a −1 penalty to attack rolls and ability checks that rely on sight. At the end of each long rest after the symptoms appear, the creature must make a Constitution saving throw, on a failure the penalty worsens by 1. On a success, the penalty is reduced by 1. When it reaches −5, the victim is blinded until its sight is restored by magic such as lesser restoration or heal. If a successful saving throw reduced the penalty to 0 or below, the creature recovers from the disease.
    
                                Sight rot can be cured using a rare flower called Eyebright, which grows in some swamps. Given an hour, a character who has proficiency with an herbalism kit can turn the flower into one dose of ointment. Applied to the eyes before a long rest, one dose of it prevents the disease from worsening after that rest. After three doses, the ointment cures the disease entirely.
    
                                **Mage Pox:** Symptoms manifest 1d6 minutes after infection and include vertigo and small blue dots across their body. Whenever the creatures casts a spell there is a 10% chance the spell fails. At the end of each long rest the creature must make a Constitution saving throw, on a failure the spell failure chance increases by 5%. On a success, its reduced by 5%. If a successful saving throw reduced the spell failure to 0% or below, the creature recovers from the disease.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Reduce the amount of time for symptoms to manifest from a d6 to a d4.
                                * Increase any damage from this ability by 1d6.
                                * Increase the save DC by 1.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.varies, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Веномансер [Venomancer]', 
        requirements: 'Четыре ядовитые способности', 
        data:
        `
    You ravage your foes with a lethal poison. As an action you can conjure one dose of poison of your choice from the list below. One does created this way can be applied to one weapon, or three pieces of Ammunition, or smeared on a 5x5 surface or three servings of food or water. If a dose is not applied or used within the duration, it expires and loses its potency.
    
                                **Pygmy Poison (Contact):** A creature subjected to this poison must succeed on a Constitution saving throw or be 
                                poisoned for the duration. The poisoned creature can't take bonus actions or reactions. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    
                                **Oil of Paralysis (Ingested):** A creature subjected to this poison must succeed on a Constitution saving throw or be poisoned for the duration. The poisoned creature is paralyzed. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    
                                **Enmity Dust (Inhaled):** A creature subjected to this poison must succeed on a Constitution saving throw or be poisoned for the duration. The poisoned creature must spend it's action on it's turn to take the Attack action against the nearest creature.
    
                                The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    
                                **Serpent Venom (Injury):** A creature subjected to this poison must succeed on a Constitution saving throw or be poisoned for the duration. The poisoned creature takes 2d6 poison damage at the beginning of each of its turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the duration by 1 minute.
                                * You conjure an additional dose.
                                * Increase the damage this ability does by 1d6.
                                * Increase the save DC by 1.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Миазмы [Miasma] (Ultimate)', 
        requirements: 'Пять ядовитых способностей', 
        data:
        `
    You spew out a toxic deluge in a 30-foot cone out from you. Each creature in the area takes 7d8 poison damage.
    
                                Additionally, each creature dealt damage this way must make a Constitution saving throw gaining one level of
    
                                exhaustion on a failure. As long as you maintain concentration, each creature must make a Constitution saving throw at the end of its turn. On a success a level of exhaustion gained by this ability is removed, on a failure they gain a level of exhaustion.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability does not require V or S components.
                                * Increase the cone size by 20 feet.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Мор [Pestilence] (Ascended)', 
        requirements: 'Шесть ядовитых способностей', 
        data:
        `
    You create a 40-foot-radius sphere of poisonous fog centered on you that follows you. The sphere spreads around corners, and its area is lightly obscured. It lasts for the duration or until a wind of strong or greater speed (at least 21 miles per hour) disperses it.
    
                                Each creature in the fog (except you) must make a Constitution saving throw. On a failed save, a creature takes 20d6 poison damage and is poisoned for 1 minute. On a successful save, it takes half as much damage and isn't poisoned by this ability.
    
                                A creature poisoned by this ability has its ability scores reduced by 1. A creature is allowed an additional saving throw at the end of each of its turns. On a successful save 1 point of this reduction is removed, a failure, their ability scores are further reduced by 1. A creature within the fog has disadvantage on the saving throw.
    
                                All non-magical flora and fauna within the cloud withers and dies.
    
                                You may reselect this ability a second time, if you do the radius, duration of the poison is doubled and the damage is increased to a d10.
        `
    },
    {
        type: tp.poison,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Гниение [Putrid Poison] (Ascended)', 
        requirements: 'Шесть ядовитых способностей', 
        data:
        `
    Your Poison abilities are increased in power.
    
                                Your armament abilities or Kido that deal poison damage ignore resistances. If a creature would be immune to poison damage, it instead takes half damage.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма снаряда [Projectile Form]', 
        requirements: '', 
        data:
        `
    Your armament changes to it's ""Projectile Form"". As a bonus action you can revert your armament back to its original form.
    
                                While in this form your armament gains the following traits:
                                * You cannot make attacks of opportunity with your armament.
                                * Your armament cannot gain or benefit from any weapon properties.
                                * This armament cannot be disarmed or targeted.
                                * Your weapons damage type can be bludgeoning, piercing or slashing. You must choose one before you make any attacks.
                                * You do not make ""ranged"" or  ""melee"" attack rolls with this weapon. When you would make an attack with this weapon, instead you choose a target within 60 feet you can see. They make a Dexterity saving throw. On a failed saving throw they take damage. Half as much damage on a success. When a targeted creature would roll a 1 on this saving throw, the attack is considered a critical hit.
    
                                Each time you reselect this ability or another Projectile ability, the range is increased by 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action.
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * While in this form, your armament deals an additional 1d4 damage.
                                * You can make Opportunity attacks while in this form. You must have selected this ability 3 times before you can select this option.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Линейная атака [Line Attack]', 
        requirements: 'Форма снаряда [Projectile Form]', 
        data:
        `
    While your armament is in Projectile Form, once on your turn when you make an attack, the attack can instead take the form of a line thats 50 feet long and 5 feet wide originating from you and centered on your target.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the length of the line by 10 feet.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Конусная атака [Cone Attack]', 
        requirements: 'Форма снаряда [Projectile Form]', 
        data:
        `
    While your armament is in Projectile Form, once on your turn when you make an attack, the attack can instead take the form of a 15-foot cone centered on your target.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the cone by 10 feet.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst4, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Сферическая атака [Sphere Attack]', 
        requirements: 'Форма снаряда [Projectile Form], одна другая способность снаряда', 
        data:
        `
    While your armament is in Projectile Form, once on your turn when you make an attack, the attack can instead take the form of a 20-foot-radius sphere centered on your target.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the radius by 10 feet.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst3, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Циллиндрическая атака [Cylinder Attack]', 
        requirements: 'Форма снаряда [Projectile Form], одна другая способность снаряда', 
        data:
        `
    While your armament is in Projectile Form, once on your turn when you make an attack, the attack can instead take the form of a 10-foot-radius and 30-foot high cylinder centered on your target.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the radius and height by 10 feet.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst5, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Эманация [Emanation]', 
        requirements: 'Форма снаряда [Projectile Form], две другие способности снаряда', 
        data:
        `
    While in projectile form, your armament begins to surround you providing you an offensive defense. For the duration you cannot move.
    
                                You are surrounded by a 10-foot radius, 20-foot high cylinder centered on the square yo occupy. Any creature that would begin its turn, end its turn, or come in contact with the cylinder must make a Dexterity saving throw. On a failed save taking 4d6 bludgeoning, piercing or slashing damage (your choice) or half as much on a successful save.
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the radius and height by 5 feet.
                                * Increase the duration by 1 minute.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Формирование [Shaping]', 
        requirements: 'Форма снаряда [Projectile Form], три другие способности снаряда', 
        data:
        `
    When you use a Projectile ability that forces other creatures to make a saving throw, you can protect some of those creatures from the ability. Choose two of those creatures, the chosen creatures succeed on their saving throw and take no damage from the ability.
    
                                You may reselect this ability multiple times, each time choosing two additional creatures.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение массы [Increased Mass] (Ascended)', 
        requirements: 'Форма снаряда [Projectile Form], три другие способности снаряда', 
        data:
        `
    Evasion and similar abilities do not function against your Projectile abilities.
        `
    },
    {
        type: tp.shell,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение скорости [Increased Velocity] (Ascended)', 
        requirements: 'Форма снаряда [Projectile Form], три другие способности снаряда', 
        data:
        `
    Creatures have disadvantage on Dexterity saving throws against your Projectile abilities.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма звука [Sound Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure sound. While this ability is active, your armaments damage type is changed to thunder damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Звуковое оружие [Sonic Weapon]', 
        requirements: '', 
        data:
        `
    Your armament reverberates, dealing an additional 1d4 thunder damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Оглушающее оружие [Deafening Weapon]', 
        requirements: 'Одна звуковая способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 thunder damage, and is deafened. On each of its turns, the target can use an action to make a Constitution saving throw. On a success, this effect ends. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, to a maximum of 1d10.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Управление звуком [Sculpt Sound]', 
        requirements: 'Одна звуковая способность', 
        data:
        `
    You create sound or manipulate non-magical sound in an area within range and that fits within a 5-foot cube. Choose one of the following effects:
    
                                * You create a sound that lasts for the duration. You can dismiss it as an action. The volume can range from a whisper to a scream. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the effect ends.
                                * You can either increase or decrease the volume of any and all sounds within the area. You can decrease the volume of the area down to a whisper or increase it to that of thunder.
                                * Within the area, you can change the current existing sounds characteristics, such as pitch, texture, timbre, or spatial location. For example, make someones voice sound an octave higher or lower, make a subject sound like someone else, change the sound of of a conversation to the sound of a crowd, or make the sounds sound further away or closer, or change the sound of an instrument to sound like another. Any non-willing creature is allowed a Constitution saving throw to resist the changes.
    
                                If you use this ability multiple times, you can only have a number of its effects, equal to your proficiency bonus, active at a time.
    
                                Each time you reslect this ability, the cube is increased by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may affect magical sound.
                                * Incrase the range by 10 feet.
                                * Increase the duration by 1 hour.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Звуковой щит [Sound Shield]', 
        requirements: 'Две звуковые способности', 
        data:
        `
    You manipulate sound waves to surround your body for the duration. This sound does not harm you or your equipment. Until the ability ends, you gain the following benefits:
                                * You have resistance to energy damage.
                                * A creature that touches you, hits you with a melee attack or ends their turn adjacent to you, takes 1d4 thunder damage. Every time you reselect this ability, the damage die size increases by one step, to a maximum of a 1d10.
                                * As an action you can end this ability by dispersing the Sound Shield in a violent burst. Each creature within 30 feet of you must succeed a Constitution saving throw. Take 2d6 thunder damage, or half as much on a successful save. Each time you reselect this ability the range increases by 5 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * You are now immune to thunder damage. If you select this option a second time, you are immune to being deafened.
                                * Increase the damage of the burst by 1d6.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Конус звука [Cone of Sound]', 
        requirements: 'Три звуковые способности', 
        data:
        `
    A boom cone of sound erupts from you. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 6d6 thunder damage on a failed save, or half as much damage on a successful one.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the cone by 5 feet.
                                * Increase the damage by 1d6.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена звука [Wall of Sound]', 
        requirements: 'Четыре звуковые способности', 
        data:
        `
    You create a semi-physical barrier of sound within range, it can be free floating or on a surface. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick or a hemispherical dome/sphere with a radius of 20 feet. The wall is translucent and lasts for the duration.
    
                                When the wall appears, each creature within its area must make a Constitution saving throw. On a failed save, a creature takes 4d6 thunder damage, or half as much damage on a successful save. You may also designated if sound from within can pass outside of the wall, or if sound from the outside can enter within or both.
    
                                Any creature that passes through the wall must make a Constitution saving throw. On failed save, they take 4d6 thunder damage and do not pass through, on success they take half damage and pass through.
    
                                Each time you reselect this ability, increase the damage by 1d6.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the range, height, length and radius of this ability by 10 feet.
                                * This ability no longer requires V or S components.
                                * This ability no longer requires concentration.
                                * Increase the save DC by 1.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Звуковой взрыв [Sonic Boom] (Ultimate)', 
        requirements: 'Пять звуковых способностей', 
        data:
        `
    A cacophonous boom erupts out from you in a 60-foot-radius-sphere centered on you.
    
                                Each creature within the area takes 7d18 thunder damage and must make a Constitution saving throw. 
    
                                On a failed save, a creature is deafened for 1 minute and knocked back up to 10 feet away landing prone. On a successful not being knocked back or becoming prone.
                                A creature deafened by this ability makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer deafened.
    
                                Each time you select this ability, increase the damage by 1d8.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * This ability no longer requires V or S components.
                                * Increase the radius sphere by 10 feet.
                                * Increase the save DC by 2.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Поле разрушения [Disruption Field] (Ascended)', 
        requirements: 'Шесть звуковых способностей', 
        data:
        `
    You create a barrier of sound that surrounds you. This barrier is a 40-foot-sphere centered on you, this barrier moves with you. While active you and allies gain the following benefits:
                                * You and allies within the field gain advantage on saving throws against abilities and spells that would deal energy damage.
                                * You and your allies have immunity to being deafened.
                                * Enemies that begin or end their turn within the field must make a constitution saving throw taking 10d6 thunder damage and becoming deafened for 1 minute, or half as much damage on a successful save.
                                * Enemies within the field must make a Constitution saving throw. On a failed save, as long as they are within the field they have disadvantage on saving throws.
    
                                You may select this ability a second time, if you do the radius sphere is doubled, and the damage dice size is increased to d10.
        `
    },
    {
        type: tp.sound,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Звуковой резонанс [Sonic Resonance] (Ascended)', 
        requirements: 'Шесть звуковых способностей', 
        data:
        `
    Your Sonic abilities are increased in power.
    
                                Your armament abilities or Kido that deal thunder damage ignore resistances. If a creature would be immune to thunder damage, it instead takes half damage.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst2, 
        rules: true,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft5, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Призыв [Summon]', 
        requirements: '', 
        data:
        `
    *When you select this ability you must choose a Summon. To do so, choose any type of creature with a stat block in the Monster Manual (or any other resource approved by your DM) with a challenge rating 1/2 or lower. Any additional Summon abilities gained will add to, change or remove from your Summons stat block.*
    
                                You toss your armament into an unoccupied space you choose within range, it transforms into your Summon. As an action you control what your Summon does.
    
                                While your armament is your Summon it gains the following traits:
                                * Your Summon has a proficiency bonus equal to yours.
                                * Any abilities or attacks your Summon has that deal damage, its damage amount is changed to your base armament damage.
                                * If your Summon is reduced to 0 hit points, it reverts back to your armament and falls to the ground.
                                * You can't have more than one Summon active at a time.
    
                                For every other Summon ability you have, the duration of this ability is increased by 1 minute.
    
                                Whenever you level up and your HD increases, your Summons HD increases by one.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
    
                                * When you activate Summon, you gain a copy of your Armament
                                * The casting time is changed to a Bonus action 
                                * This ability doesn't require V or S components
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Клинок призыва [Summons Blade]', 
        requirements: 'Призыв [Summon]', 
        data:
        `
    Your Summon has a copy of your armament, if any. However, it cannot use any armament abilities.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение очков способностей [Ability Score Increase]', 
        requirements: 'Призыв [Summon]', 
        data:
        `
    Choose one of your Summons ability scores, it increases by 2, or you can increase two ability scores of your Summon by 1 instead.
    
                                You may reselect this ability multiple times.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Природная броня [Natural Armor]', 
        requirements: 'Призыв [Summon]', 
        data:
        `
    Your Summon gains a natural armor bonus of 2. If it already has natural armor, it increases by 2.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение числа здоровья [Hit Point Increase]', 
        requirements: 'Призыв [Summon]', 
        data:
        `
    Your summon gains two hit die, and its maximum hit points increases. To determine the amount of the increase, roll your Summons Hit Die (the type of die appears in the Summons stat block), and add its Constitution modifier.
    
                                You may reselect this ability multiple times.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение скорости [Speed Increase]', 
        requirements: 'Призыв [Summon]', 
        data:
        `
    Select one of your Summons modes of movement, it increases by 10 feet.
    
                                You may reselect this ability multiple times.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Расширенное видение [Extra Sense]', 
        requirements: 'Призыв [Summon]', 
        data:
        `
    Your Summon gains one of the following senses:
                                * Blindsight 30 feet.
                                * Darkvision 60 feet.
                                * Tremorsense 80 feet.
    
                                You may reselect this ability multiple times, each time choosing a different sense.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Расширенное движение [Extra Movement]', 
        requirements: 'Призыв [Summon], три способности призыва', 
        data:
        `
    Your Summon gains one of the following movements modes:
    
                                Burrow speed of 50 feet.
                                Climb speed of 40 feet.
                                Fly speed of 30 feet.
                                Swim speed of 60 feet.
    
                                You may reselect this ability multiple times, each time choosing a different movement mode.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Истинное зрение [truesight]', 
        requirements: 'Призыв [Summon], Расширенное видение [Extra Sense], две способности призыва', 
        data:
        `
    Your summon gains truesight out to 30 feet.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Иммунитет к состояниям [Condition Immunity]', 
        requirements: 'Призыв [Summon], пять способностей призыва', 
        data:
        `
    Choose one of the conditions listed below, your Summon is immune to that condition.
    
                                Blinded, Charmed, Deafened, Frightened, Paralyzed, Petrified, or poisoned.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Choose another condition your Summon is now immune too.
                                * Choose Restrained, Stunned or Exhaustion, your Summon is now immune to that condition. You must have selected this ability once, and have five other Summon abilities before you can choose this option.
    
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Передача чувств [Share Senses]', 
        requirements: 'Призыв [Summon], шесть способностей призыва', 
        data:
        `
    While your Summon is within 100 feet of you, you can communicate with it telepathically. Additionally, as a bonus action, you can see through your Summon's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the Summon has. During this time, you are deaf and blind with regard to your own senses.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Регенерация [Regeneration]', 
        requirements: 'Призыв [Summon], восемь способностей призыва', 
        data:
        `
    Your Summon regains 10 hit points at the start of your turn. Choose a damage type, if your Summon took damage of the chosen type since your last turn, this ability doesn't function at the start of your next turn.
    
                                You may reselect this ability multiple times, each time increasing the amount of hit points regained by 2.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Передача заклинаний [Share Spells]', 
        requirements: 'Призыв [Summon], десять способностей призыва', 
        data:
        `
    when you cast a spell targeting yourself, you can also affect your Summon with the spell if your Summon is within 30 feet of you.
        `
    },
    {
        type: tp.summon,
        cost: cost.cst0, 
        rules: false,
        forSummon: true,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Трансмогрификация [Transmogrify] (Ascended)', 
        requirements: 'Призыв [Summon], четыре способностей призыва, форма Ascended', 
        data:
        `
    At the end of each long rest or when you enter your ascended form, you may reselect all your Summoning armament abilities, choosing new ones if desired.
        `
    },
    {
        type: tp.water,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма воды [Water Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure water. While this ability is active, your armaments damage type is changed to cold damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.water,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Водное оружие [Aquatic Weapon]', 
        requirements: '', 
        data:
        `
    Your armament drips with magical water, dealing an additional 1d4 cold damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.water,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Приливное оружие [Tidal Weapon]', 
        requirements: 'Одна водная способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 cold damage, and is knocked prone. 
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the damage die size by one step, to a maximum of 1d10.
        `
    },
    {
        type: tp.water,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Управление водой [Shape Water]', 
        requirements: 'Одна водная способность', 
        data:
        `
    You choose an area of non-magical water (solid, liquid or gas) that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:
    
                                * You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.
                                * You cause the water to form into simple shapes and animate at your direction. This change lasts for the duration.
                                * You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for the duration.
                                * You freeze the water, provided that there are no creatures in it. This frozen water can and will melt over time.
                                * You melt the ice, you may have the water retain its shape if able.
                                * vaporize the water or sublimate the ice, which expands to a 30-foot-radius sphere of vapor centered on the water or ice. This vapor is ambient temperature and does not cause damage. The sphere spreads around corners, and its area is lightly obscured. It falls to the ground as water after 1 hour or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. If the environment is Extreme Cold, the vapor turns to snow at the the end of the round and falls to the ground. If the environment is Extreme Heat, the vapor disperses at the end of the round.
                                * You condense the vapor, causing it to fall to the ground as water and form a puddle on the ground.
                                * You depose the vapor, causing it to fall to the ground as snow and form a patch on the ground.
    
                                If you activate this ability multiple times, you can only have a number of its non-instantaneous effects, equal to your proficiency bonus, active at a time, and you can dismiss such an effect as an action.
    
                                Each time you reselect this ability, the area of the cube you can affect is increased by 5 feet.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - You can now affect magical water.
                                - Increase the range by 10 feet.
                                - Increase the duration by 1 hour.
        `
    },
    {
        type: tp.water,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Водяной щит [Water Shield]', 
        requirements: 'Две водные способности', 
        data:
        `
    Swirling water surrounds your body for the duration. This water does not harm you or your equipment. Until the ability ends, you gain the following benefits:
                                * You have resistance to acid, fire and bludgeoning damage, and you are vulnerable to lightning damage. 
                                * Whenever a creature is within 5 feet of you, you may have them make a saving throw. The creature chooses Strength or Dexterity. On a failed save, the creature is knocked prone.
                                * You have a swimming speed of 40 feet.
                                * You are able to breathe underwater.
    
                                You may select this ability multiple times, each time choosing one of the following options:
    
                                - This ability no longer requires V or S components.
                                - This ability no longer requires concentration.
                                - You are no longer vulnerable to lightning damage.
        `
    },
    {
        type: tp.water,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft20, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подводный рыцарь [Undersea Knight]', 
        requirements: 'Две водные способности', 
        data:
        `
    Up to four willing creatures within range gain the following benefits:
                                * You are able to move across any liquid surface – such as water, acid, mud, snow, quicksand, or lava – as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). If the target is submerged in a liquid, the ability carries the target to the surface of the liquid at a rate of 60 feet per round.
                                * You are able to breathe underwater until the ability ends. Affected creatures also retain their normal mode of respiration.
                                * You have advantage on Athletic checks for swimming.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - You may activate this ability as a bonus action.
                                - Increase the range by 10 feet.
                                - This ability no longer requires V or S components.
                                - This ability no longer requires concentration.
                                - Increase the duration by 1 minute.
                                - Increase the the number of willing creatures you can target by 2.
        `
    },
    {
        type: tp.water,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft20, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Подводный рыцарь [Undersea Knight]', 
        requirements: 'Две водные способности', 
        data:
        `
    Up to four willing creatures within range gain the following benefits:
                                * You are able to move across any liquid surface – such as water, acid, mud, snow, quicksand, or lava – as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). If the target is submerged in a liquid, the ability carries the target to the surface of the liquid at a rate of 60 feet per round.
                                * You are able to breathe underwater until the ability ends. Affected creatures also retain their normal mode of respiration.
                                * You have advantage on Athletic checks for swimming.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - You may activate this ability as a bonus action.
                                - Increase the range by 10 feet.
                                - This ability no longer requires V or S components.
                                - This ability no longer requires concentration.
                                - Increase the duration by 1 minute.
                                - Increase the the number of willing creatures you can target by 2.
        `
    },
    {
        type: tp.water,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft80, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Водяной взрыв [Water Blast]', 
        requirements: 'Три водные способности', 
        data:
        `
    You hurl a condense ball of water toward a creature within range.
                                Make a ranged attack against the target. On a hit, the target takes 3d8 bludgeoning damage.
                                Each time you select this ability, you gain an additional ball to a maximum of four. You can direct the additional balls at the same target or a different one, you must make a separate attack roll for any additional ball.
    
                                You may select this option multiple times, each time choosing one of the following options:
                                - This ability no longer requires V components.
                                - The range is increased by 10 feet.
                                - Increase the damage die size to a d10. You must have selected this ability four times before you can select this option.
        `
    },
    {
        type: tp.water,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Стена воды [Wall of Water]', 
        requirements: 'Три водные способности', 
        data:
        `
    You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the ability ends. The wall’s space is difficult terrain.
    
                                Any ranged weapon attack that enters the wall’s space has disadvantage on the attack roll, and fire damage
                                is halved if the fire effect passes through the wall to reach its target. Spells and abilities that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen).
    
                                Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall’s water doesn’t fill it.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - Increase the range by 10 feet.
                                - This ability no longer requires V or S components.
                                - This ability no longer requires concentration.
                                - Increase the length, height and diameter of the wall by 10 feet. The thickness is also increased by 1 foot to a maximum of 5 feet.
        `
    },
    {
        type: tp.water,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft80, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Приливная волна [Tidal Wave]', 
        requirements: 'Четыре водные способности', 
        data:
        `
    You conjure up a wave of water that crashes down on an area within range.
    
                                The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 7d10 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn’t knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and remains for the next minute.
    
                                Each time you select this ability, increase the maximum length, width and height by 5 feet.
    
                                You may select this option multiple times, each time choosing one of the following options:
                                - Increase the range by 10 feet.
                                - This ability no longer requires V components.
                                - Increase the duration the water remains for 1 minute.
                                - Increase the save DC by 1.
        `
    },
    {
        type: tp.water,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.sight, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        true, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Цунами [Tsunami] (Ultimate)', 
        requirements: 'Пять водных способностей', 
        data:
        `
    A wall of water springs into existence at a point you choose within range. You can make the wall up to 60 feet long, 60 feet high, and 25 feet thick. The wall lasts for the duration.
    
                                When the wall appears, each creature within its area takes 7d8 bludgeoning damage.
    
                                At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 25 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 7d8 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 20 feet, and the damage creatures take from the ability on subsequent rounds is reduced by 1d8. When the wall reaches 0 feet in height or the duration expires, the ability ends.
    
                                A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against the save DC in order to move at all. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - This ability no longer requires V or S components.
                                - Increase the duration by 1 round.
                                - increase the walls length and height by 20 feet, and the thicknes by 5 feet.
                                - Increase the save DC by 2.
        `
    },
    {
        type: tp.water,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ascended,
        castingTime: castTime.round, 
        range: rng.mile1, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       true,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Водоворот [Maelstrom] (Ascended)', 
        requirements: 'Шесть водных способностей', 
        data:
        `
    A mass of 20-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 10d6 bludgeoning damage and be pulled 10 feet toward the center. Once a creature reaches the center, if they would take damage, the hit die is increased by one step and they begin to drown.
                                As an action any creature within the area can make an additional Strength saving throw, however they do so at disadvantage. On a successful save they are able to move.
    
                                You may select this ability a second time, if you do the range, duration, depth and radius is doubled. The damage dice size is also increased to a d10.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма оружия [Weapon Form]', 
        requirements: '', 
        data:
        `
    When you select this ability, you may choose one of the melee weapons in the PHB (PG 149) as a weapon form. When you activate this ability your armament changes into one of the selected weapon forms. While in this form your current weapon loses its statistics and gains the new weapons statistics. If your armament's damage dice is greater than any of your weapon forms, you may have it retain the greater damage.
    
                                You may select this ability multiple times, each time choosing one of the following actions:
                                - Choose a new weapon form.
                                - This ability no longer requires V or S components.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Улучшенное оружие [Enhanced Weapon]', 
        requirements: '', 
        data:
        `
    Choose one of the following weapon properties. Your armament gains the chosen weapon property.
                                * Finesse
                                * Light
                                * Reach
                                * Thrown (10/20)
                                * Versatile (Damage dice size increased by one step when used with two hands to make a weapon attack)
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - Choose an additional weapon property.
                                - Increase both values of the Thrown range by 10 feet. You must have selected the Thrown weapon property before you can choose this option.
                                - Your armament retains the selected weapon properties even when you use Weapon Form of similar abilities.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Закаленная сталь [Tempered Steel]', 
        requirements: 'Одна способность оружия*', 
        data:
        `
    Your armament is more resilient. If an effect would damage, break, or destroy your armament without a save, you are allowed a saving throw (except for Final Shikai or similar effect). On a success negating the destructions effect. If you are allowed a saving throw you have advantage on that saving throw.
    
                                If an effect would build up a cumulative penalty on your armament and be destroyed at a certain threshold, that threshold is doubled.
    
                                If a creature would attempt to disarm your armament you are holding, you can use your reaction to make a melee weapon attack against that creature.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Грань богоубийцы [Godslayers Edge]', 
        requirements: 'Две способности оружия*', 
        data:
        `
    Weapon attacks you make with your armament ignore damage resistance to it's damage type.
    
                                If the subject of your attack would be immune to your armament base damage type, that immunity is instead treated as resistance.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Увеличение критического урона [Increased Critical]', 
        requirements: 'Три способности оружия*', 
        data:
        `
    You score a critical on a roll of 19 or 20 when making weapon attack rolls with your armament.
    
                                If you already have a similar ability, the extra damage dice is maxed.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Оружие небес [Weapon of Heaven]', 
        requirements: 'Четыре способности оружия*', 
        data:
        `
    While using your armament, you may add your proficiency bonus to weapon attack damage rolls with it.
        `
    },
    {
        type: tp.weapon,
        cost: cost.cst4, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.bonus, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Зачарованное оружие [Enchanted Weapon]', 
        requirements: 'Пять способностей оружия*', 
        data:
        `
    When you select this ability, you may choose one of the enchantments listed below. You can dismiss this ability as a bonus action.
    
                                * Acid - For the duration your weapon deals an extra 1d4 acid damage.
    
                                * Flame - For the duration your weapon deals an extra 1d4 fire damage.
    
                                * Frost - For the duration your weapon deals an extra 1d4 cold damage.
    
                                * Lightning - For the duration your weapon deals an extra 1d4 lightning damage.
    
                                * Necrotic - For the duration your weapon deals an extra 1d4 necrotic damage.
    
                                * Poison - For the duration your weapon deals an extra 1d4 poison damage.
    
                                * Radiant - For the duration your weapon deals an extra 1d4 radiant damage.
    
                                * Thunder - For the duration your weapon deals an extra 1d4 thunder damage.
    
                                * Wind - For the duration your weapon deals an extra 1d4 force damage.
    
                                * Returning - When you make a ranged attack using this armament, immediately after the attack, the weapon flies back to your hand. Your armament must have the Thrown weapon property before you can select this Enchantment.
    
                                * Defender - The first time you attack with your armament on each of your turns, you can transfer some or all of the weapon's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, if you have a +3, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the weapon to gain a bonus to AC from it. 
    
                                * Dancing - As a bonus action you toss your armament into the air and it begins to hover. You may have it fly up to 30 feet, and it attacks one creature of your choice within 5 feet of it. The weapon uses your attack roll and ability score modifier to damage rolls. While the weapon hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it. As a bonus action, you can have the weapon fly up to 30 feet to try and return to your hand. If you have no hand free, it falls to the ground at your feet. It also ceases to hover if you grasp it or move more than 60 feet away from it. You must have selected this ability once before you can select this Enchantment.
    
                                * Speed - You can make one additional attack with this armament when you take the attack action. You must have selected this ability two times before you can select this Enchantment.
    
                                * Slaying - Choose one creature type (Soul, Bount, Hollow, Quincy, Human), when the chosen creature type takes damage, the creature must make a DC 17 Constitution saving throw, taking an extra 6d8 damage on a failed save, or half as much extra damage on a successful one. You must have selected this ability three times before you can select this Enchantment.
    
                                You may reselect this ability multiple times, each time choosing another enchantment.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Форма ветра [Wind Form]', 
        requirements: '', 
        data:
        `
    Your armament becomes pure air. While this ability is active, your armaments damage type is changed to force damage.
    
                                If you have a Summon, you may have this ability apply to it's weapons as well. You may dismiss this ability as as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or S components.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Зефирное оружие [Zephyr Weapon]', 
        requirements: '', 
        data:
        `
    Wind rages across your armament, dealing an additional 1d4 force damage. You may dismiss this ability as a bonus action.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action and dismiss it at will.
                                * This ability no longer requires V or s components.
                                * Increase the damage dice size by one step, to a maximum of a 1d12.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst0, 
        rules: false,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.none, 
        range: rng.none, 
        components: 
        { 
            verbal:   false, 
            somatic:  false, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Циклонное оружие [Cyclone Weapon]', 
        requirements: 'Одна воздушная способность', 
        data:
        `
    When you score a critical hit with your armament, the target takes an additional 1d4 force damage and is pushed back 10 feet.
    
                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * Increase the save DC by 1.
                                * Increase the damage die size by one step, maximum of a 1d10.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft60, 
        components: 
        { 
            verbal:   false, 
            somatic:  true, 
            material: false, 
            released: false
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         true, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Контроль ветров [Control Winds]', 
        requirements: 'Одна воздушная способность', 
        data:
        `
    You take control of the air in a 5-foot cube that you can see within range. Choose one of the following effects when you activate this ability. The effect lasts for the duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the
    
                                effect or to restart one you’ve halted.
    
                                **Gusts.** A wind picks up within the cube, continually blowing in a horizontal direction that you choose. You choose the intensity of the wind: calm, moderate, or strong.
    
                                If the wind is moderate or strong, ranged weapon attacks that pass through it or that are made against targets within the cube have disadvantage on their attack rolls.
    
                                If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.
    
                                **Downdraft.** You cause a sustained blast of strong wind to blow downward from the top of the cube.
                                Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls.
    
                                A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.
    
                                **Updraft.** You cause a sustained updraft within the cube, rising upward from the cube’s bottom edge.
                                Creatures that end a fall within the cube take only half damage from the fall.
    
                                When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.
    
                                Each time you reselect this ability the cube increases by 5 feet.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - Increase the range by 10 feet.
                                - Increase the duration by 1 hour.
                                - When you choose gust, you can choose two different directions.
                                - Downdraft also affects non-flying creatures.
                                - When a creature ends a fall in an updraft, they take no fall damage instead. If a creature jumps within an updraft, their jump height is doubled instead.
                                - You may activate this ability as a bonus action. If you select this option a second time, you may activate this ability as a reaction, but can only select the updraft option if you do so.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst1, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  true, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Щит ветра [Wind Shield]', 
        requirements: 'Две воздушные способности', 
        data:
        `
    Until the ability ends, wind whirls around you, and you gain the following benefits:
    
                                * Weapon attacks made against you have disadvantage on the attack roll.
                                * You gain a flying speed of 10 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.
                                * Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d4 force damage. Each time you reselect this ability, the damage dice size is increased by one step to a maximum of a 1d10.
    
                                You may select this ability multiple times, each time choosing one of the following options:
    
                                - This ability no longer requires V or S components.
                                - This ability no longer requires Concentration.
                                - You may choose if this ability damages creatures or not.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.ft80, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Коса ветра [Wind Scythe]', 
        requirements: 'Три воздушные способности', 
        data:
        `
    You launch a crescent blade of wind toward a creature within range.
                                Make a ranged attack against the target. On a hit, the target takes 3d8 force damage.
    
                                Each time you select this ability, you gain an additional blade to a maximum of four blades. You can direct the additional blades at the same target or a different one, you must make a separate attack roll for any additional blades.
    
                                You may select this option multiple times, each time choosing one of the following options:
                                - This ability no longer requires V components.
                                - The range is increased by 10 feet.
                                - Increase the damage die size to a d10. You must have selected this ability four times before you can select this option.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst2, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.usual,
        castingTime: castTime.action, 
        range: rng.self, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: false, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        false, 
            instantaneous: true, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Воздушный взрыв [Wind Blast]', 
        requirements: 'Четыре воздушные способности', 
        data:
        `
    A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose. Each creature in the line must make a Strength saving throw. A creature takes 6d6 force damage on a failed save and be pushed back 15 feet away from you in a direction following the line, or half as much damage on a successful one and not be pushed back.
    
                                The wind disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 80 percent chance to extinguish them.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - This ability no longer requires V components.
                                - Increase the length by 10 feet.
                                - Increase the damage by 1d6.
                                - Increase the range creatures are pushed back by an additional 5 feet.
        `
    },
    {
        type: tp.wind,
        cost: cost.cst3, 
        rules: true,
        forSummon: false,
        hdHollow: hd.none,
        abKind: knd.ultimate,
        castingTime: castTime.round, 
        range: rng.ft100, 
        components: 
        { 
            verbal:   true, 
            somatic:  true, 
            material: false, 
            released: true
        }, 
        material_stuff: '',
        duration:
        { 
            until_sealed:  false, 
            concentration: true, 
            minute1:       false,
            minute2:       false, 
            minute5:       false,
            minute10:      false, 
            round1:        false, 
            round2:        false,
            round5:        true, 
            instantaneous: false, 
            hour1:         false, 
            special:       false,
            day2:          false
        }, 
        recharge: rch.none, 
        name: 'Торнадо [Tornado] (Ultimate)', 
        requirements: 'Пять воздушных способностей', 
        data:
        `
    You conjure a raging tornado on a point that you can see on the ground within range, this area must be able to fit the tornado or this ability fails. The tornado is a 40-foot-radius, 80-foot-high cylinder centered on that point. Until the
    
                                ability ends, you can use your action to move the tornado up to 30 feet in any direction along the ground.
    
                                The tornado sucks up any Medium or smaller objects that aren’t secured to anything and that aren’t worn or carried by anyone. A creature must make a Strength saving throw the first time on a turn that it enters the tornado or that the tornado enters its space, including when the tornado first appears. A creature takes 7d8 force damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top, and takes an additional 7d8 force damage each turn its within the tornado.
    
                                A restrained creature moves with the whirlwind and falls when the duration ends, unless the creature has some means to stay aloft. A restrained creature can use an action to make a Strength or Dexterity check against the  save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 × 10 feet away from it in a random direction.
    
                                This ability deals damage to structures within its radius. If a structure drops to 0 hit points, it collapses and pieces of the structure are automatically flung outside the area of the tornado potentially damaging nearby creatures. Any creature within 30 ft. of the tornado's radius when a structure collapses within it must make a Dexterity saving throw. On a failed save,  the creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, the creature takes half damage and doesn't fall prone.
    
                                \pagebreakNum
    
                                This also increases the damage any creatures can potentially take by 2d6 bludgeoning and 2d6 slashing damage.
    
                                You may select this ability multiple times, each time choosing one of the following options:
                                - This ability no longer requires V or S components.
                                - Increase the duration by 1 round.
                                - increase the radius and height by 10 feet.
                                - Increase the save DC by 1.
        `
    }
]