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
        name: "Ветер",
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым кислотным. Пока эта способность активна, тип урона, наносимого вашим вооружением, изменяется на урон от кислоты.</p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию.</p><p>Вы можете отменить эту способность в качестве бонусного действия.</p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение блестит кислотой, нанося дополнительный урон кислотой на 1 к 6. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, на цели остаются остатки кислоты, которые наносят ей 1d6 урона кислотой в начале каждого хода. </p><p></p><p>В каждом из своих ходов цель может использовать действие для выполнения спасброса на ловкость. В случае успеха цель удаляет остатки кислоты, прекращая этот эффект. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте коэффициент сохранения на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    На это время ваше тело выделяет слой кислоты. Кислота не причиняет вам вреда. На это время вы получаете следующие преимущества: </p><p>* У вас повышается устойчивость к кислотному повреждению </p><p>* Любое немагическое оружие из металла или дерева, попадающее в вас, подвергается коррозии. После нанесения урона оружие получает постоянный и совокупный штраф -1 к броскам урона. Если его штраф падает до -5, оружие уничтожается. Немагические боеприпасы из металла или дерева, попавшие в вас, уничтожаются после нанесения урона. Если оружие магическое, его владелец должен совершить спасбросок Конституции. В случае неудачи он получает штраф -1 к броскам урона, но оружие не уничтожается, если штраф достигает -5 или выше. Если попавший в вас боеприпас магический, его владелец должен совершить спасбросок от кона, в случае неудачи боеприпас уничтожается после нанесения урона. </p><p></p><p>Через 3 часа магическое оружие, на которое наложены штрафы от этой способности, удаляется. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Теперь вы невосприимчивы к урону от кислоты </p><p>* Увеличьте DC спасброска на 1 </p><p>* Удвоьте количество часов, необходимое для снятия штрафов.
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
        `,
        data_ru:
        `
    Вы нацеливаетесь на одно существо, которое видите в пределах досягаемости, и бросаете в него кислоту. Оно должно совершить спасбросок на ловкость. В случае неудачи оно покрывается кислотой. Всякий раз, когда цель предпринимает какое-либо действие, ей наносится урон кислотой 1d10. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Эта способность больше не требует концентрации
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
        `,
        data_ru:
        `
    Струя кислоты извергается из вас линией длиной 30 футов и шириной 5 футов в выбранном вами направлении. Каждое существо в линии должно успешно выполнить спасбросок на ловкость или быть покрыто кислотой на время или до тех пор, пока существо не воспользуется своим действием, чтобы соскрести или смыть кислоту с себя или другого существа. Существо, покрытое кислотой, получает 2d6 урона от кислоты в начале каждого своего хода. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S </p><p>* Для этой способности больше не требуется концентрация </p><p>* Увеличьте урон дополнительно на 1d6, максимум на 4d6.
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
        `,
        data_ru:
        `
    Кислота покрывает землю в радиусе 10 футов с центром в выбранной вами точке в пределах досягаемости и превращает ее на время в труднопроходимую местность. </p><p></p><p>Когда появляется кислота, каждое существо, стоящее в своей зоне, должно успешно выполнить спасбросок на ловкость или получить 1d4 ед. урона кислотой. Существо, которое входит в зону или заканчивает там свой ход, получает 1d6 ед. урона кислотой. </p><p></p><p>Каждый раз, когда вы выбираете эту способность, урон увеличивается на 1d6, максимум до 4d6. </p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность действия на 10 футов, радиус на 10 футов и продолжительность на одну минуту. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Существо, которое входит в зону или заканчивает там свой ход, также должно преуспеть в спасброске на ловкость или упасть ничком.
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
        `,
        data_ru:
        `
    Кислотный дождь льется в цилиндре радиусом 20 футов и высотой 40 футов с центром в точке в пределах досягаемости. Каждое существо, начинающее свой ход в цилиндре, получает урон кислотой 4d6. </p><p></p><p>Кислота превращает область действия в труднопроходимую местность на время действия. </p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Эта способность больше не требует концентрации </p><p>* Для этой способности больше не требуются компоненты V или S </p><p>* Увеличьте дальность действия на 10 футов, радиус на 10 футов и продолжительность на одну минуту.
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
        `,
        data_ru:
        `
    Вы пропитываете свое вооружение разъедающей кислотой. На время, когда вы поражаете существо своим вооружением и существо носит не каменную, немагическую броню, оно получает постоянный и совокупный штраф -1 к предлагаемому им AC. Броня, уменьшенная до AC, равного 10, или щит, повышенный до бонуса +0, уничтожаются. </p><p>Если броня или щит магические, существо должно совершить спасбросок Конституции, в случае неудачи получая накопительный штраф на время действия. Броня не разрушается, если AC уменьшен до 10 или выше, и щит также не разрушается, если его бонус уменьшен до + 0 или выше. Через 3 часа магическая броня или щиты со штрафами от этой способности удаляются. </p><p></p><p>Вы можете использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличивайте продолжительность на 1 раунд </p><p>* Увеличивайте спасбросок на 1 </p><p>* Удваивайте количество часов, необходимое для снятия штрафов
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

        `,
        data_ru:
        `
    Вы выбираете область в пределах досягаемости и выпускаете смертоносную едкую кислоту в 40-футовом кубе. Каждое существо в этой области получает 10d6 едкого урона от кислоты при неудачном спасении и вдвое меньше при успешном.</p><p></p><p>Кроме того, все существа, провалившие спасбросок, продолжают получать 10d6 едкого урона в начале своих ходов, пока вы сохраняете концентрацию. Если бы эти существа владели каким-либо не каменным, немагическим оружием, к их оружию добавлялось бы постоянное и накопительный штраф -1 к броскам урона каждый раз, когда они получают урон от этой способности. Если значение штрафа падает до -5, оружие уничтожается. Если у противника есть какие-либо не каменные, немагические доспехи или щиты, он получает постоянный и совокупный штраф -1 к предлагаемому им AC. Щиты Armor os, уменьшенные до AC, равного 10, или щит, который получает бонус +0, уничтожаются.</p><p></p><p>Если какое-либо из поражающих видов оружия, брони или щитов является магическим, им разрешается спасбросок каждый раз, когда они получают урон, в случае успеха без получения штрафа.</p><p></p><p>Магическим объектам и фауне в пределах зоны, которые не посещаются, разрешается сделать спасбросок. при неудачном спасброске на них действуют те же эффекты, что и на существо, провалившее спасбросок. Обычная фауна и некаменные предметы разлагаются и подвергаются коррозии.</p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, дальность действия увеличится вдвое, размер кубика удвоится, а размер кубика урона увеличится до d10.
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

        `,
        data_ru:
        `
    Вы выбираете область в пределах досягаемости и выпускаете смертоносную едкую кислоту в 40-футовом кубе. Каждое существо в этой области получает 10d6 едкого урона от кислоты при неудачном спасении и вдвое меньше при успешном.</p><p></p><p>Кроме того, все существа, провалившие спасбросок, продолжают получать 10d6 едкого урона в начале своих ходов, пока вы сохраняете концентрацию. Если бы эти существа владели каким-либо не каменным, немагическим оружием, к их оружию добавлялось бы постоянное и накопительный штраф -1 к броскам урона каждый раз, когда они получают урон от этой способности. Если значение штрафа падает до -5, оружие уничтожается. Если у противника есть какие-либо не каменные, немагические доспехи или щиты, он получает постоянный и совокупный штраф -1 к предлагаемому им AC. Щиты Armor os, уменьшенные до AC, равного 10, или щит, который получает бонус +0, уничтожаются.</p><p></p><p>Если какое-либо из поражающих видов оружия, брони или щитов является магическим, им разрешается спасбросок каждый раз, когда они получают урон, в случае успеха без получения штрафа.</p><p></p><p>Магическим объектам и фауне в пределах зоны, которые не посещаются, разрешается сделать спасбросок. при неудачном спасброске на них действуют те же эффекты, что и на существо, провалившее спасбросок. Обычная фауна и некаменные предметы разлагаются и подвергаются коррозии.</p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, дальность действия увеличится вдвое, размер кубика удвоится, а размер кубика урона увеличится до d10.
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
        `,
        data_ru:
        `
    Ваши кислотные способности увеличены в силе. </p><p></p><p>Ваши способности к вооружению или Кидо, наносящие кислотный урон, игнорируют устойчивость к кислотам. Если существо невосприимчиво к кислотному урону, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    Вы усиливаете свое вооружение своей кровью. Когда вы активируете эту способность, вы теряете 1d3 очка жизни, а ваше вооружение наносит дополнительный 1d6 урона. Вы можете отклонить эту способность как бонусное действие. </p><p>Каждый раз, когда вы повторно выбираете эту способность, размер кубика потерянных вами очков жизни увеличивается на один шаг максимум до 1d10, а размер кубика дополнительного урона, наносимого этой способностью, увеличивается на один шаг максимум до 1d12. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Эта способность больше не требует концентрации, V или S компонентов. </p><p>* Уменьшите размер кубика, в котором вы теряете очки жизни из-за этой способности, на один шаг, минимум на 1d3.
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

        `,
        data_ru:
        `
    В следующий раз, когда вы поразите существо своим оружием до окончания действия этой способности, оружие нанесет цели тяжелую рану. В начале каждого своего хода цель должна совершить спасительный бросок. При неудачном сохранении эффект наносит 1d4 урона. При успешном сохранении эффект заканчивается. Если цель или существо в радиусе 5 футов от нее использует действие, чтобы залатать рану, или если какой-либо другой эффект залечивает рану, эффект заканчивается. </p><p>Каждый раз, когда вы повторно выбираете эту способность, продолжительность увеличивается на 1 раунд. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг; максимум 1d10. </p><p>* Увеличьте DC сохранения на 1; вы можете выбрать этот параметр всего 5 раз.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар по существу своим вооружением, цели наносится 2 очка урона от телосложения.
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
                                * The duration of this ability is changed to Concentration, until your next turn.
        `,
        data_ru:
        `
    Когда против вас выполняется бросок атаки, в качестве реакции вы создаете щит из своей собственной крови. Вы теряете 1d4 очков жизни и получаете столько же в качестве бонуса к своему классу брони при этой атаке. </p><p>Каждый раз, когда вы повторно выбираете эту способность, размер кубика увеличивается на один шаг максимум до 1d12. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. Вы можете выбрать эту опцию во второй раз, больше не требуя компонента W. </p><p>* Продолжительность действия этой способности изменена на Концентрация до вашего следующего хода.
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
        `,
        data_ru:
        `
    Вы можете воздействовать на кровь или извлекать информацию из нее различными способами. Кровь должна быть под рукой, например, лужи крови в 5-футовом кубе или кровь из флакона. Вы также можете прикоснуться к желающему существу, и оно потеряет 1d4 хита. </p><p>* Вы знаете тип существа, пролившего кровь. Кроме того, в течение следующих 24 часов вы можете менять кровь, и когда существо или кровь идентифицированы, оно регистрируется как другой тип существа по вашему выбору. </p><p>* Вы знаете, несет ли кровь какие-либо болезни или яды. Кроме того, вы знаете тип болезни или яда, если сталкивались с этим раньше. </p><p>* Вы знаете, сколько лет крови или возраст существа. </p><p>* Вы превращаете лужу крови в ловушку. В течение следующих 8 часов, когда существо входит в то же пространство, что и кровь, оно получает 1d6 проникающего урона. </p><p>* Вы усиливаете кровь существа. В течение следующего часа цель имеет преимущество в спасительных бросках против ядов и болезней.
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
        `,
        data_ru:
        `
    На время проведения успешной атаки оружием ближнего боя с вашим вооружением против существа вы забираете у него жизненную энергию. Вы восстанавливаете очки жизни, равные базовому урону, наносимому вашим вооружением. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте продолжительность на 1 раунд.
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
        `,
        data_ru:
        `
    Вы проводите атаку оружием ближнего боя своим вооружением против существа. В случае успеха вы разрушаете рейацу цели. Цель теряет 1d6 очков заклинаний. Если у цели есть ячейки для заклинаний, она теряет 1d3 ячейки для заклинаний по своему выбору. </p><p></p><p>Эта способность не влияет на существ, которые не могут использовать заклинания. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличивайте урон на одну ступень, максимум на 1d12. </p><p>* Вы восстанавливаете SP, равный SP, потерянному целью. Если у вас есть слоты для заклинаний, вы восстанавливаете количество потерянных ими слотов для заклинаний.
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
        `,
        data_ru:
        `
    Вы выпускаете кровавый снаряд в существо, находящееся в пределах досягаемости. Атакуйте цель оружием дальнего боя. При попадании цель получает 3d6 колющего, дубинящего или рубящего урона (на ваш выбор при активации этой способности). </p><p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный снаряд максимум до четырех. Вы можете направить дополнительные снаряды в ту же цель или в другую, вы должны сделать отдельный бросок атаки для любых дополнительных снарядов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Радиус действия этой способности увеличен на 10 футов. </p><p>* Увеличьте размер кубика урона до d8. Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Ты используешь свою собственную жизненную силу, чтобы подпитывать своего Ребенка. Если вы улучшите свое Кидо с помощью метамагии, то вместо того, чтобы тратить очки магии, вы потеряете 1d8 очков жизни за каждое потраченное очко магии. Вы можете делать это только количество раз, равное вашему бонусу за мастерство. При длительном отдыхе вы восстанавливаете все потраченные умения. </p><p></p><p>При разыгрывании Кидо вместо того, чтобы тратить SP или слоты заклинаний, вы бросаете свой кубик с поражением количество раз, равное уровню заклинаний. Вы теряете количество очков жизни, равное общему количеству выпавших.
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
        `,
        data_ru:
        `
    Вы создаете из себя взрыв крови. Каждое существо в радиусе 30 футов от вас должно успешно выполнить спасительный бросок на ловкость или получить 6d6 дубинообразного, колющего или рубящего урона (на ваш выбор при активации этой способности). Существо, успешно выполнившее спасительный бросок, получает вдвое меньше урона.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте площадь на 10 футов.</p><p>* Увеличьте спасительный DC на 2.</p><p>* Если существо критически проваливает свой спасбросок, оно получает 1 очко урона от телосложения. Вы должны были выбрать эту возможность три раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Всякий раз, когда враждебное существо использует специальное движение, в конце движения, если оно находится в пределах досягаемости вашего Хайлиг Богена, в качестве реакции вы можете нанести по этому существу единственную атаку оружием. </p><p></p><p>Находясь в вознесении, вы совершаете две атаки оружием против этого существа вместо одной.
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
        `,
        data_ru:
        `
    Вы используете магию отречения, чтобы временно изгнать свою цель в безопасное место в долине криков. Существо, попавшее в цель, не получает урона и вместо этого должно успешно выполнить спасбросок харизмы или быть изгнано. При изгнании таким образом скорость цели равна 0, и она выведена из строя. В конце своего следующего хода цель снова появляется на том месте, которое она освободила, или на ближайшем незанятом месте, если это место занято.
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
        `,
        data_ru:
        `
    Ваша магия зачаровывания заставляет эту стрелу временно вводить в заблуждение цель. Когда существо будет поражено, вместо нанесения урона выберите одного из своих союзников в радиусе 30 футов от цели. Цель должна успешно выполнить спасительный бросок Мудрости, в противном случае выбранный союзник зачаровывает ее до начала вашего следующего хода. Этот эффект заканчивается раньше, если зачарованная цель атакована, ей нанесен урон или она вынуждена совершить спасительный бросок. </p><p></p><p>При вознесении этот эффект заканчивается раньше, если выбранный союзник атакует зачарованную цель, наносит ей урон или вынуждает ее совершить спасительный бросок.
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
        `,
        data_ru:
        `
    Вы наполняете свой Хайлиг Боген энергией силы, полученной в школе вызывания. Энергия взрывается после вашей атаки. Сразу после попадания в существо цель и все другие существа в радиусе 30 футов от нее получают урон силой 2d6. </p><p></p><p>При вознесении урон увеличивается до 2d10.
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
        `,
        data_ru:
        `
    Вы получаете критический удар при броске 18 или 20. </p><p></p><p>Находясь на подъеме, вы получаете критический удар при броске с 17 по 20.
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
        `,
        data_ru:
        `
    Вы узнаете, как направить ошибочную атаку на новую цель. Когда вы совершаете атаку и промахиваетесь, вы можете использовать бонус </p><p></p><p>действие по повторному броску атаки против другой цели в радиусе 60 футов от первоначальной цели, если вы совершали атаку дальнего боя, или против другой цели в радиусе 5 футов от первоначальной цели, если вы совершали атаку ближнего боя. </p><p></p><p>Находясь на подъеме, у вас есть преимущество при повторном розыгрыше.
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
        `,
        data_ru:
        `
    Пораженное существо должно совершить спасбросок телосложения или испытывать недостаток в атаках до конца своего следующего хода. </p><p></p><p>Находясь в вознесении, если цель не выполняет спасбросок телосложения, она также испытывает недостаток в спасбросах на время хода.
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
        `,
        data_ru:
        `
    Вы можете использовать свою реакцию, чтобы отразить атаку оружием ближнего боя или ракетой при атаке дальнего боя, когда в вас попадут. Когда вы делаете это, урон, который вы получаете от атаки, уменьшается на ваш базовый урон Heilig Bogen + ваш модификатор ловкости + ваш уровень Квинси. </p><p></p><p>При вознесении урон уменьшается на базовый урон от Хайлиг Богена + модификатор ловкости + вместо этого удваивается ваш уровень Квинси.
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
        `,
        data_ru:
        `
    Вы используете магию отречения, чтобы попытаться временно подавить магию. При попадании существа или предмета или магическом эффекте в радиусе 10 футов от пораженной цели действие любого заклинания 3-го уровня или ниже прекращается. Для каждого заклинания 4-го уровня или выше, применяемого к цели, проведите проверку способности, используя свою способность к наложению заклинаний. DC равен 10 + уровню заклинания. При успешной проверке действие заклинания заканчивается. </p><p></p><p>При вознесении любое заклинание 5-го уровня или ниже на цели заканчивается вместо 3-го.
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
        `,
        data_ru:
        `
    Попадание в нежить наносит дополнительный урон сиянием 1d6. Цель должна совершить спасбросок Мудрости. Если существо проваливает свой спасбросок, оно поворачивается на 1 минуту или до тех пор, пока не получит урон. </p><p></p><p>Обращенное существо должно проводить свои ходы, пытаясь отойти от вас как можно дальше, и оно не может добровольно переместиться на расстояние менее 30 футов от вас. Оно также не может реагировать. </p><p></p><p>Для своего действия оно может использовать только действие Рывка или попытаться убежать от эффекта, который мешает ему двигаться. Если двигаться некуда, существо может использовать действие Уклонения. </p><p></p><p>При вознесении урон увеличивается до 3d6, и цель получает недостаток в своем спасброске Мудрости.
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
        `,
        data_ru:
        `
    Атака на дальней дистанции не накладывает ущерба на вашу атаку. Если пораженное существо находится на дальней дистанции, оно получает дополнительный урон силой 2d6. </p><p></p><p>При вознесении существо получает дополнительный урон в размере 2d8 силы.
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
        `,
        data_ru:
        `
    Вы отвлекаете своего врага, давая вашим союзникам возможность действовать. Пораженное существо получает дополнительный урон силой 1d6, и следующий бросок атаки против цели атакующим, отличным от вас, имеет преимущество, если атака произведена до начала вашего следующего хода. </p><p></p><p>При вознесении урон увеличивается до 2d6.
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
        `,
        data_ru:
        `
    Вы наполняете свою стрелу силой стихии. Выберите один из следующих типов урона: кислота, холод, огонь, молния, некротический, ядовитый, лучезарный или гром. Когда вы поражаете существо, наносимый вами урон изменяется на выбранный тип урона, и цель получает дополнительный урон 1d6 выбранного типа. </p><p></p><p>При вознесении дополнительный урон увеличивается до 2d6.
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
        `,
        data_ru:
        `
    Вы добавляете в свою атаку некромантическую магию. Удар по существу наносит дополнительный 2d8 некротического урона. Цель также должна успешно выполнить спасбросок Конституции, в противном случае урон, наносимый ее оружием, уменьшается вдвое до начала вашего следующего хода.
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
        `,
        data_ru:
        `
    Когда эта атака поражает цель, магия заклинания создает захватывающие эфирные путы, которые обволакивают цель. Удар существа наносит дополнительный урон силой 2d6, его скорость снижается на 10 футов, и оно получает урон от ударов дубинкой 2d6 при первом перемещении на 1 фут или более за каждый ход. Цель или любое существо, которое может до нее дотянуться, может использовать свое действие для снятия привязок с успешной проверки Силы (Атлетика) по вашему сохраненному DC. В противном случае привязки длятся в течение 1 минуты или до тех пор, пока эта способность не будет использована снова.
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
        `,
        data_ru:
        `
    Вы выпускаете несколько стрел подряд. Вы производите три отдельные атаки оружием дальнего боя по одной цели в пределах досягаемости. </p><p>При попадании цель получает дополнительный урон силой 1d6. </p><p></p><p>При вознесении дополнительный урон увеличивается до 2d6.
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
        `,
        data_ru:
        `
    Собрав рейши, вы выпускаете сокрушительный залп бесчисленных стрел. Вы выпускаете колонну стрел от себя в выбранном вами направлении. Каждое существо в радиусе 30 футов и цилиндре высотой 90 футов должно совершить спасительный бросок на ловкость. Существо получает 8d6 силового урона при неудачном спасении или вдвое меньше урона при успешном.
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
        `,
        data_ru:
        `
    Вы используете магию трансмутации, чтобы придать вашей стреле неземное качество. Когда вы используете эту опцию, вы не делаете бросок атаки для атаки. Вместо этого стрелка устремляется вперед по линии шириной 1 фут и длиной 60 футов, прежде чем исчезнуть. Стрелка безвредно проходит сквозь объекты, игнорируя укрытие. Каждое существо в этой линии должно совершить спасбросок на ловкость. При неудачном спасброске существо получает урон, подобный тому, как если бы оно было поражено атакой, плюс дополнительный урон от пронизывания 2d8. При успешном спасении цель получает вдвое меньше урона. </p><p></p><p>При вознесении дополнительный урон увеличивается до 2d10.
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
        `,
        data_ru:
        `
    Когда вы поражаете существо, вместо нанесения урона вы пытаетесь уменьшить скорость цели. Если цель большая или меньше, она должна сделать бросок с сохранением силы. При неудачном сохранении вы уменьшаете перемещение целей наполовину до конца вашего следующего хода. </p><p></p><p>При вознесении затрагиваются цели, размер которых больше, чем крупных.
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
        `,
        data_ru:
        `
    Вы получаете бонус +20 к броску атаки. Если атака поражает, вы добавляете свой модификатор Мудрости к броску урона.</p><p>При вознесении вы наносите дополнительный урон силой 2d6.
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
        `,
        data_ru:
        `
    Когда вы поражаете существо, вместо того, чтобы наносить урон, вы пытаетесь отбросить цель назад. Если цель большая или меньше, она должна сделать бросок с сохранением силы. При неудачном сохранении вы отталкиваете цель на расстояние до 15 футов от себя. </p><p></p><p>При вознесении поражаются цели, размер которых больше, чем крупных.
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
        `,
        data_ru:
        `
    Используя магию прорицания, вы создаете стрелу, способную находить цель. Выберите одно существо, которое вы видели за последнюю минуту. Стрела летит к этому существу, при необходимости огибая углы и игнорируя прикрытие на три четверти и половину. Если цель находится в пределах досягаемости и есть путь, достаточно большой, чтобы стрела долетела до цели, цель должна совершить спасбросок на ловкость, при неудачном спасении получая урон такой же, как если бы она была поражена атакой, или вдвое меньший при успешной. В противном случае стрелка исчезает, пролетев как можно дальше. </p><p></p><p>При неудачном сохранении вы также всегда знаете местоположение цели на время, но только пока вы двое находитесь на одном плане существования. Пока у вас есть это знание, цель не может скрыться от вас, а если она невидима, то это условие не принесет ей никакой пользы против вас. </p><p></p><p>Во время вознесения продолжительность увеличилась до 24 часов.
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
        `,
        data_ru:
        `
    Вы вплетаете магию иллюзии в свою атаку, заставляя ее закрывать зрение вашего противника тенями. Попадание в существо наносит дополнительный психический урон 2d6, и оно должно успешно выполнить спасбросок Мудрости, иначе вы не сможете видеть ничего дальше 10 футов до начала вашего следующего хода.
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
        `,
        data_ru:
        `
    Когда вы поражаете существо, вместо нанесения урона цель временно теряет свои магические способности. Если у цели есть слоты для заклинаний, они теряют 2d4 слота для заклинаний по своему выбору, как если бы они были израсходованы. Если у цели есть очки заклинаний, они теряют 2d8 SP, как если бы они были израсходованы.
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
        `,
        data_ru:
        `
    Когда вы поражаете существо своим хайлиг богеном, вы можете немедленно использовать Хиренкьяку.
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
        `,
        data_ru:
        `
    Когда вы поражаете существо, вместо нанесения урона вы пытаетесь сбить цель с ног. Если цель большая или меньше, она должна сделать бросок с сохранением силы. При неудачном спасении вы сбиваете цель с ног. </p><p></p><p>При увеличении затрагиваются цели, размер которых больше, чем large.
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
        `,
        data_ru:
        `
    Когда вы попадаете в существо, вы раните цель. В начале каждого хода раненого существа оно получает 2d6 некротического урона за каждый раз, когда вы его ранили, и затем оно может сделать спасбросок Конституции, прекращающий действие всех таких ран на него в случае успеха. В качестве альтернативы, раненое существо или существо в радиусе 5 футов от него может использовать действие для проверки Мудрости (Лекарства), прекращая действие на него таких ран в случае успеха.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистой темной энергией. Пока эта способность активна, тип урона, наносимого вашим вооружением, изменяется на некротический урон. </p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отклонить эту способность как бонусное действие. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Тьма распространяется по вашему вооружению, нанося дополнительный 1d4 некротического урона. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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

        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный 1d4 некротического урона и ослепляется. В каждый из своих ходов цель может использовать действие, чтобы сделать спасбросок Харизмы. В случае успеха этот эффект заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте постоянный ток сохранения на 1. </p><p>* Увеличьте размер кубика урона на одну ступень, максимум до 1d10.
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
        `,
        data_ru:
        `
    Ваше тело излучает смертельную тьму на время действия способности. Тьма не причиняет вам вреда. Пока способность не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к урону от некроза и излучения. </p><p>* Вы распространяете магическую тьму вокруг себя в сфере радиусом 10 футов. Каждый раз, когда вы повторно выбираете эту способность, сфера увеличивается на 10 футов. </p><p>* Любое существо, которое впервые за ход заходит внутрь сферы или заканчивает там свой ход, получает 1d4 некротического урона. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг максимум до 1d10. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Пока эта способность активна, вы невосприимчивы к некротическим повреждениям.
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
        `,
        data_ru:
        `
    Магическая тьма распространяется из выбранной вами точки в пределах досягаемости, заполняя сферу радиусом 15 футов на время действия. </p><p></p><p>Тьма распространяется по углам. Немагический свет не может осветить область. если выбранная вами точка находится на предмете, который вы держите в руках, или на том, который не носят, темнота исходит от объекта и перемещается вместе с ним. Полное закрывание источника темноты непрозрачным предметом, таким как чаша или шлем, блокирует темноту. </p><p></p><p>Если какая-либо область этой способности перекрывается с областью света, созданной Кидо 2-го уровня или ниже, заклинание, создавшее свет, рассеивается. Каждый раз, когда вы повторно выбираете эту способность, уровень кидо, которое эта способность рассеивает, увеличивается на единицу. </p><p></p><p>Если какая-либо область этой способности перекрывается с областью света, созданной оружием, вы выполняете проверку Рейацу, в случае успеха свет рассеивается. Каждый раз, когда вы повторно выбираете эту способность, вы получаете бонус +1 к этому повторному чеку. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность действия и радиус действия этой способности на 10 футов. </p><p>* Увеличьте продолжительность действия на 1 минуту. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация.
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
        `,
        data_ru:
        `
    Вы прикасаетесь к желающему существу, придавая его глазам затеняющее свечение. На время действия это существо обладает темным зрением на расстоянии 60 футов. Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте продолжительность действия этой способности на 1 минуту. </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Пораженные существа могут видеть в магической темноте, и пока эта способность активна, пораженные существа невосприимчивы к ослеплению.
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
        `,
        data_ru:
        `
    Луч тьмы устремляется к существу в пределах досягаемости. Нанесите по цели дальнюю атаку. При попадании цель получает 3d8 некротического урона. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный луч максимум к четырем лучам. Вы можете направить дополнительные лучи на ту же цель или на другую, вы должны сделать отдельный бросок атаки для любых дополнительных лучей. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Дальность стрельбы увеличена на 10 футов. </p><p>* Увеличьте размер кубика урона до d10. Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Светящаяся стена чернильной черноты появляется в выбранной вами точке в пределах досягаемости. Стена отображается в любой выбранной вами ориентации: горизонтально, вертикально или по диагонали. Он может свободно парить или опираться на твердую поверхность. Стена может достигать 60 футов в длину, 10 футов в высоту и 5 футов в толщину. </p><p></p><p>Стена блокирует линию видимости, но существа и предметы могут проходить сквозь нее. </p><p></p><p>Когда появляется стена, каждое существо в своей области должно сделать спасбросок Конституции. При неудачном спасении существо получает 4d6 некротического урона и ослепляется на 1 минуту. При успешном спасении оно получает вдвое меньше урона и не ослепляется. Ослепленное существо может совершить спасительный бросок телосложения </p><p></p><p>в конце каждого из своих ходов, прекращая действие эффекта на себя в случае успеха. </p><p></p><p>Существо, завершающее свой ход в области стен, получает 4d6 некротического урона. Пока действие заклинания не закончится, вы можете использовать действие, чтобы запустить луч тьмы со стены в одно существо, которое вы можете увидеть в радиусе 40 футов от него. Нанесите дальнюю атаку. При попадании цель получает 4d6 некротического урона. Независимо от того, попали вы или промахнулись, уменьшите длину стены на 10 футов. Если длина стен упадет до 0 футов, действие способности закончится. </p><p></p><p>Каждый раз, когда вы повторно используете эту способность, урон увеличивается на 1d6. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность действия, высоту и длину этой способности на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Продолжительность действия вслепую увеличена на 1 минуту.
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
        `,
        data_ru:
        `
    Тьма извергается наружу от вас сферой радиусом 60 футов с центром в вас. Каждое существо в пределах области должно сделать спасбросок Конституции. При неудачном спасении существо получает 7d8 некротического урона и ослепляется на 1 минуту. При успешном спасении оно получает вдвое меньше урона и не ослепляется. </p><p></p><p>Существо, ослепленное этим заклинанием, делает еще один спасбросок Конституции в конце каждого из своих ходов. При успешном спасении оно больше не ослеплено. </p><p></p><p>Эта способность рассеивает любой свет в своей области, созданный Кидо. Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1d8. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте радиус сферы на 10 футов. </p><p>* Увеличьте сохранение DC на 2.
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
        `,
        data_ru:
        `
    Кромешная тьма возникает в сфере радиусом 60 футов с центром в выбранной вами точке в пределах досягаемости. Каждое существо в этой темноте должно совершить спасбросок Конституции. При неудачном спасении существо получает 20d6 некротического урона и ослепляется на 1 минуту. При успешном спасении оно получает вдвое меньше урона и не ослепляется этой способностью. Существо, ослепленное этим заклинанием, делает еще один спасбросок Конституции в конце каждого из своих ходов. </p><p></p><p>При успешном спасении оно больше не ослеплено. Эта способность рассеивает любой свет в своей области, созданный Кидо. </p><p></p><p>Если существо убито этой способностью, оно всасывается в центр, исчезает и полностью уничтожается. Только прямое вмешательство божества может восстановить уничтоженное существо. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, в этом случае радиус сферы удваивается, существа ослепляются независимо от того, удалось им спастись или нет, а размер кубика урона увеличивается до d10.
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
        `,
        data_ru:
        `
    Ваши темные способности увеличены в силе. </p><p></p><p>Ваши способности к вооружению или Кидо, наносящие некротический урон, игнорируют сопротивление. Если существо было бы невосприимчиво к некротическому урону, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    При освобождении ваше вооружение трансформируется в доспехи вокруг вас. Эта броня принимает форму любой легкой брони из Руководства игрока (или любого другого источника, одобренного вашим DM). Вы считаетесь опытным в обращении с этой броней. </p><p></p><p>Если при активации этой способности у вас появляется Призыв, то вместо него вы можете получить броню. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* При использовании этой способности вы сохраняете свое оружие. </p><p>* Вы можете выбрать среднюю броню с этой способностью. Если вы выберете эту опцию во второй раз, вы можете выбрать тяжелую броню. </p><p>* Если ваше вооружение получит бонус к магическому оружию, в качестве бонусного действия вы можете вместо этого применить этот бонус к своему АК. Вы должны выбрать четыре способности к броне, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы создаете щит в свободное от работы время. Если при активации этой способности у вас появляется Призыв, то вместо него ваш Призыв может получить щит. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, держа в руках щит, ваша свободная рука считается открытой.
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
        `,
        data_ru:
        `
    Ваш щит считается оружием ближнего боя, наносящим 1d4 урона от ударов дубинкой; вы считаетесь опытным в обращении с ним. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12. </p><p>* Ваш щит рассматривается как ваше вооружение для получения преимуществ от любых бонусов, функций, заклинаний или способностей вооружения, которые дает ваше вооружение. Вы должны дважды выбрать эту способность, прежде чем выбирать этот вариант.
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
        `,
        data_ru:
        `
    Когда вы подвергаетесь атаке, вы создаете барьер. На это время вы получаете 4 временных очка жизни. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте временные очки жизни на +2.
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
        `,
        data_ru:
        `
    Когда вы делаете спасительный бросок, в качестве реакции вы получаете бонус +1 к этому спасительному броску. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте бонус, который дает эта способность, на 1, максимум до +5.
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
        `,
        data_ru:
        `
    У вас порог урона 3 (Источник с порогом урона невосприимчив ко всему урону, если только он не получит количество урона от одной атаки или эффекта, равное или превышающее его порог урона, и в этом случае он получает урон как обычно). </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз увеличивая порог урона на 1.
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
    Whenever you are dealt damage by a melee attack, the attacker takes 1d4 damage. This ability can work in conjunction with abilities such as Fire Form.

                                You may reselect this ability multiple times, each time increasing the damage by an additional 1d4 to a maximum 5d4.
        `,
        data_ru:
        `
    Всякий раз, когда вам наносят урон в результате атаки ближнего боя, атакующий получает урон 1d4. Эта способность может работать в сочетании с такими способностями, как Форма огня. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз увеличивая урон дополнительно на 1d4 до максимального 5d4.
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
        `,
        data_ru:
        `
    Пока вы носите Броню, у вас есть преимущество в спасбросках против заклинаний. Если ваш Призывающий одет в Броню, он получает выгоду от этой способности.
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
        `,
        data_ru:
        `
    Вы получаете дополнительную реакцию, дополнительные реакции от этой способности могут быть использованы только на барьерные способности и требуют от вас потратить 2 SP. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз получая дополнительную реакцию.
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
        `,
        data_ru:
        `
    Если существо в пределах досягаемости будет подвергнуто заклинанию или способности, и это заклинание или способность активировали бы способность Брони, если бы вы были подвержены ей, вы можете активировать способность Брони, но вместо этого ваш союзник извлек бы выгоду из этой способности. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, всякий раз, когда вы активируете свою способность Брони, у вас может быть добровольное существо в радиусе 60 футов, которое получит Броню и получит от нее пользу.
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
        `,
        data_ru:
        `
    Находясь на Вознесении, вы обладаете устойчивостью к урону от заклинаний.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чисто земным. Пока эта способность активна, тип урона, наносимого вашим оружием, изменяется на урон от ударов дубинкой. </p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отклонить эту способность как бонусное действие. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение наполнено крупными кусками камня и земли, наносящими дополнительный урон от ударов дубинкой 1d4.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный 1d4 урона от ударов дубинкой и получает удар такой силы, что становится недееспособной. В конце каждого из своих ходов цель может сделать спасбросок Конституции. В случае успеха эта способность заканчивается у цели. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте время сохранения на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Вы выбираете или касаетесь куска грязи, глины, камня или подобного материала, который видите в пределах досягаемости и который помещается в пределах </p><p></p><p>10-футового куба. Вы манипулируете им одним из следующих способов: </p><p></p><p>* Вы можете изменять форму материала в этой области любым выбранным вами способом в течение всего срока действия. Вы можете увеличить или уменьшить высоту участка, создать или засыпать траншею, возвести или выровнять стену или сформировать колонну. Масштаб любых таких изменений не может превышать половины наибольшего размера участка. </p><p></p><p>* Вы придаете материалу форму, цвет или и то, и другое вместе, произнося слова, создавая изображения или формируя узоры. Изменения сохраняются в течение всего срока действия. </p><p></p><p>* Если материал, на который вы нацеливаетесь, лежит на земле, вы превращаете его в труднопроходимый рельеф. В качестве альтернативы, вы можете превратить землю в обычный рельеф, если это уже труднопроходимый рельеф. Это изменение длится некоторое время. </p><p></p><p>* Вы прикасаетесь к каменному предмету среднего или меньшего размера или к куску камня размером не более 5 футов любого размера и придаете ему любую форму, соответствующую вашим целям. Так, например, вы могли бы придать большому камню форму оружия, идола или сундука или проделать небольшой проход в стене, если толщина стены не превышает 5 футов. Вы также можете придать форму каменной двери или ее рамы, чтобы она плотно закрывалась. Созданный вами объект может иметь до двух петель и защелку, но более тонкая механическая детализация невозможна. </p><p></p><p>* Вы превращаете камень в грязь или наоборот. Если вы хотите превратить камень в грязь, пока существо находится в пределах области, оно должно выполнить бросок с сохранением силы, или область считается труднопроходимой. Если вы хотите превратить грязь в камень, существа в этом районе должны выполнить спасительный бросок на Ловкость или быть ограничены на время. Связанное существо может использовать свое действие, чтобы совершить дополнительный силовой бросок, чтобы оторваться от затвердевшего камня. </p><p></p><p>Если вы используете эту способность несколько раз, у вас может быть одновременно активировано только несколько ее не мгновенных эффектов, равных вашему бонусу к навыкам, и вы можете отклонить такой эффект как действие. </p><p>Каждый раз, когда вы выбираете эту способность, площадь куба, на который вы можете повлиять, увеличивается на 5 футов, а толщина, на которую вы можете повлиять, увеличивается на 1 фут. </p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* увеличьте дальность на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Увеличьте продолжительность на 1 час. </p><p>* Эта способность больше не требует концентрации.
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
        `,
        data_ru:
        `
    Пока действие способности не закончится, осколки камня разлетятся по вашему телу, и вы получите следующие преимущества: </p><p></p><p>* Вы уменьшаете любой наносимый вами физический урон на 3. </p><p>* Это значение увеличивается на единицу каждый раз, когда вы выбираете эту способность. </p><p>* Вы можете перемещаться по труднопроходимой местности из земли, камня или подобного материала, не затрачивая лишних движений. </p><p>* Вы можете рассеивать щит, стреляя камнями в сферу радиусом 20 футов с центром вокруг вас. Существа внутри сферы должны совершить спасбросок на ловкость или получить 2d6 урона от ударов дубинкой. При успешном спасении они получают половину урона. Каждый раз, когда вы выбираете эту способность, увеличивайте радиус сферы на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Эта способность больше не требует концентрации. </p><p>* Увеличьте урон на 1d6, максимум до 7d6.
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
        `,
        data_ru:
        `
    Немагическая стена из цельного камня возникает в выбранной вами точке в пределах досягаемости. </p><p>Стена имеет толщину 3 дюйма и состоит из пяти панелей размером 10 на 10 футов. Каждая панель должна быть сплошной, по крайней мере, с другой панелью. Каждый раз, когда вы повторно выбираете эту возможность, толщина увеличивается на 1 дюйм. </p><p></p><p>Если стена пересекает пространство существа при его появлении, существо оттесняется в одну сторону от стены (на ваш выбор). Если существо будет окружено со всех сторон стеной (или стеной и другой твердой поверхностью), это существо может совершить спасительный бросок на Ловкость. В случае успеха он может использовать свою реакцию, чтобы увеличить скорость, так что он больше не будет окружен стеной. </p><p></p><p>Стена может иметь любую форму, какую вы пожелаете, хотя она не может занимать то же пространство, что существо или объект. стена не обязательно должна быть вертикальной или опираться на какой-либо прочный фундамент. Однако он должен сливаться с существующим камнем и прочно поддерживаться им. Таким образом, вы можете использовать это заклинание для наведения моста через пропасть или создания ската. </p><p></p><p>Если вы создаете пролет длиной более 20 футов, вы должны вдвое уменьшить размер каждой панели для создания опор. Вы можете придать стене грубую форму, чтобы создать зубцы и т.д. </p><p></p><p>Стена - это объект из камня, который можно повредить и, таким образом, пробить брешь. Каждая панель имеет AC 15 и 10 хит-пойнтов на дюйм толщины. Уменьшение панели до 0 хит-пойнтов разрушает ее и может привести к разрушению соединенных панелей по усмотрению мастера. </p><p>Если вы сохраняете концентрацию на этой способности на протяжении всего ее действия, стена становится постоянной и не может быть рассеяна. В противном случае стена исчезает, когда действие способности заканчивается.. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Вы можете создать дополнительную панель.
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
        `,
        data_ru:
        `
    Выберите единственное существо, которое вы можете увидеть в пределах досягаемости. В цель будет запущен снаряд из взбитой земли. </p><p>Нанесите по цели дальнюю атаку. При попадании цель получает 3d8 урона от ударов дубинкой. </p><p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный снаряд максимум до четырех. Вы можете направить дополнительные снаряды в ту же цель или в другую, вы должны сделать отдельный бросок атаки для любых дополнительных снарядов.. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Дальность действия увеличена на 10 футов. </p><p>* Увеличьте размер кубика урона до d10. Вы должны выбирать эту способность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы ударяетесь о землю, создавая дрожь, которая распространяется от вас в радиусе 40 футов. Каждое существо в пределах досягаемости должно успешно выполнить спасительный бросок на ловкость или получить 7d10 урона от удара дубинкой и упасть ничком. Существо, успешно выполнившее спасительный бросок, получает вдвое меньше урона и не падает ничком.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, радиус действия увеличивается на 10 футов.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V.</p><p>* Увеличьте количество сохраняемых DC на 1. </p><p>* Увеличьте урон на 1d10.
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
        `,
        data_ru:
        `
    На время действия этой способности вы можете вызывать извержение каменных столбов из земли. </p><p>В качестве действия вы вызываете взрыв каменных столбов из мест на земле, которые вы можете видеть в пределах досягаемости. Каждая колонна представляет собой цилиндр диаметром 5 футов и высотой до 30 футов; каждый раз, когда вы повторно выбираете эту способность, диаметр и высота увеличиваются на 5 футов. В местах, где колонны, кажется, должен быть достаточно широким для ее диаметр, и вы можете ориентироваться на землю под существом, если то существо среднего или меньше. Каждый компонент переменного тока 5 и 30 </p><p></p><p>хит-поинтов. При уменьшении до 0 очков жизни колонна рассыпается в щебень, что создает зону со сложным рельефом в радиусе 10 футов. Завалы сохраняются до тех пор, пока их не расчистят. </p><p></p><p>Если под существом создается столб, это существо должно успешно выполнить спасбросок на ловкость или получить 5d8 урона от удара дубинкой и быть поднято столбом. Существо может выбрать провал спасброса. Если столбу не удается достичь полной высоты из-за потолка или другого препятствия, существо на столбе получает 5d8 урона от ударов дубинкой и оказывается зажатым между столбом и препятствием. </p><p></p><p>Ограниченное существо может использовать действие, чтобы проверить Силу или Ловкость (по выбору существа) в сравнении с DC спасброска способности. В случае успеха существо больше не удерживается и должно либо сойти со столба, либо упасть с него. </p><p>Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1d8.. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 20 футов. </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* В качестве действия вы вместо одной заставляете два столба земли вырваться из-под земли в двух разных точках.
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
        `,
        data_ru:
        `
    Вы создаете сейсмическое возмущение в точке на земле, которую можете видеть в пределах досягаемости. </p><p>В течение всего этого времени интенсивный подземный толчок сотрясает землю по кругу радиусом 100 футов с центром в этой точке и сотрясает существ и сооружения, соприкасающиеся с землей в этой области. </p><p>Земля в этом районе становится труднопроходимой. Каждое существо на земле, которое концентрируется, должно совершить спасбросок Конституции. При неудачном спасброске концентрация существа нарушается. </p><p></p><p>Когда вы используете эту способность и в конце каждого хода концентрируетесь на ней, каждое существо на земле в этом районе должно совершить спасительный бросок на Ловкость. При неудачном спасении существо падает ничком и получает 10d6 урона от ударов дубинкой. </p><p>Эта способность может иметь дополнительные эффекты в зависимости от местности в данной области, как определено мастером. </p><p></p><p>** Трещины.** </p><p></p><p>Трещины открываются по всей области действия способности в начале вашего следующего хода после того, как вы произнесете заклинание. Всего в местах, выбранных мастером, открывается 1d6 таких трещин. Каждая имеет глубину 1d10 x 10 футов, ширину 10 футов и простирается от одного края области действия заклинания до противоположной стороны. Существо, стоящее на месте, где открывается трещина, должно успешно выполнить спасбросок на ловкость или упасть в нее. Существо, которое успешно выполняет сейв, движется краем трещины, когда она открывается. </p><p>Трещина, открывающаяся под конструкцией, приводит к ее автоматическому обрушению (см. Ниже). </p><p></p><p>** Конструкции.** </p><p></p><p>Тремор наносит 50 ед. урона от ударов дубинкой по любому сооружению, соприкасающемуся с землей в этом районе, когда вы произносите заклинание и в начале каждого из ваших ходов, пока заклинание не закончится. Если сооружение падает до 0 очков жизни, оно разрушается и потенциально наносит урон ближайшим существам. Существо, находящееся на расстоянии половины высоты сооружения, должно сделать спасбросок на ловкость. При неудачном спасении существо получает 20d6 урона от ударов дубинкой, падает ничком и оказывается погребенным под обломками, требуя проверки DC 20 на силу (Атлетика) в качестве действия для побега. Мастер может увеличить или уменьшить DC в зависимости от характера обломков. При успешном спасении существо получает вдвое меньше урона и не падает ничком и не зарывается в землю. </p><p></p><p>Вы можете выбрать эту способность во второй раз, если вы это сделаете, количество трещин удвоится, размер трещин удвоится и урон, который эта способность наносит сооружениям, удвоится.
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
        `,
        data_ru:
        `
    Ваши земные способности увеличены в силе. Ваши способности к вооружению или кидо, наносящие урон от ударов дубинкой, игнорируют сопротивление. Если существо было бы невосприимчиво к урону от ударов дубинкой, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым огнем. Пока эта способность активна, тип урона, наносимого вашим оружием, меняется на урон от огня. </p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение воспламеняется, нанося дополнительный урон от огня на 1d4. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон от огня в размере 1d6 в начале каждого хода. На каждом из своих ходов цель может использовать действие для тушения огня, прекращая действие эффекта.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Вы выбрали немагическое пламя, которое можете видеть в пределах досягаемости и которое помещается в 5-футовом кубе. Вы воздействуете на него одним из следующих способов: </p><p>* Вы мгновенно гасите пламя внутри куба. </p><p>* Вы удваиваете или уменьшаете вдвое количество яркого и тусклого света, отбрасываемого пламенем, меняете его цвет или и то, и другое. Вы выбираете продолжительность. </p><p>* Вы заставляете простые фигуры, такие как расплывчатые очертания существа, неодушевленного предмета или местоположения, появляться в пламени и оживать, пока вы лежите. Вы выбираете продолжительность. </p><p>* У вас также может появиться мерцающее пламя в руке. Пламя остается там в течение всего времени и не причиняет вреда ни вам, ни вашему оборудованию. Пламя излучает яркий свет в радиусе 10 футов и тусклый - еще на 10 футов. Вы можете не принимать этот эффект за действие. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, куб увеличивается на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Теперь вы можете влиять на магический огонь. </p><p>* Пламя, которое вы можете создать с помощью этой способности, не выделяет тепла и не использует кислород, если вы того пожелаете; это пламя можно прикрыть или спрятать, но не задушить или погасить. </p><p>* Увеличьте продолжительность действия этой способности на 1 час.
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
        `,
        data_ru:
        `
    Языки пламени пробегают по вашему телу на время действия способности. Языки пламени не причиняют вреда вам или вашему снаряжению. Пока действие способности не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к урону от огня и холода. </p><p>* Вы проливаете яркий свет в радиусе 5 футов и приглушаете его еще на 5 футов. </p><p>* Любое существо, которое впервые приближается к вам на расстояние 5 футов за ход или заканчивает на этом свой ход, получает 1d4 урона от огня. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг, максимум до 1d10. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p></p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Диапазон яркого и тусклого света, который вы излучаете, удваивается. </p><p>* Вместо этого вы невосприимчивы к урону от огня. </p><p>* Вы можете выбрать, влияет ли урон от этой способности на существ или нет.
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
        `,
        data_ru:
        `
    Из вас вырывается ревущий огненный конус. </p><p></p><p>Каждое существо в 30-футовом конусе должно совершить спасительный бросок на ловкость. Существо получает 3d8 урона от огня при поданном аве или вдвое меньше урона при успешном аве. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер конуса на 5 футов. </p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Вы создаете стену огня на твердой поверхности в пределах досягаемости. Вы можете сделать стену длиной до 60 футов, высотой 20 футов и толщиной 1 фут или кольцевую стену диаметром до 20 футов, высотой 20 футов и толщиной 1 фут. Стена непрозрачна и сохраняется на время действия. </p><p></p><p>Когда появляется стена, каждое существо в пределах своей зоны должно сделать спасбросок на ловкость. При неудачном спасении существо получает 4d6 урона от огня, или вдвое меньше урона при успешном спасении. </p><p></p><p>Одна сторона стены, выбранная вами при произнесении этого заклинания, наносит 4d6 тяжелых повреждений каждому существу, которое заканчивает свой ход в пределах 10 футов от этой стороны или внутри стены. Существо получает тот же урон, когда оно впервые попадает в стену за ход или заканчивает там свой ход. Другая сторона стены не наносит урона. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d6. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте радиус действия, высоту, длину и диаметр этой способности на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте запас постоянного тока на 1. </p><p>* Вы можете выбрать обе стороны стены для нанесения урона.
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
        `,
        data_ru:
        `
    Вертикальный столб огня оживает на точку вы выберете в ассортименте. Этот столбец 40 футов высотой с 10-футовый радиус. Каждое существо в колонне должны сделать </p><p></p><p>Экономия ловкость броска. </p><p></p><p>Существа получают 6d6 урона от огня при неудачном спасении или вдвое меньше урона при успешном. Эта способность может действовать мгновенно или сохраняться в течение часа. Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1 к 6. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Для этой функции больше не требуются компоненты V или S. </p><p>* Увеличьте радиус и высоту цилиндра на 5 футов.
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
        `,
        data_ru:
        `
    Шторм, состоящий из полос ревущего пламени, появляется в выбранном вами месте в пределах досягаемости.</p><p></p><p>Область шторма состоит из десяти 10-футовых кубов, которые вы можете расположить по своему усмотрению. Каждый куб должен иметь по крайней мере одну грань, смежную с гранью другого куба. Каждое существо в этой области получает 7d8 урона от огня.</p><p></p><p>Огонь повреждает растения, предметы в округе и воспламеняет легковоспламеняющиеся предметы, которые не носят и не переносят с собой.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1d8.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте размер кубиков на 5 футов.
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
        `,
        data_ru:
        `
    Пылающие огненные шары падают на землю в четырех разных точках, которые вы можете видеть в пределах досягаемости. </p><p></p><p>Каждое существо в сфере радиусом 20 футов с центром в каждой выбранной вами точке должно совершить спасительный бросок на ловкость. Сфера разлетается по углам. Существа получают 10d6 урона от огня и 10d6 урона от ударов дубинкой при неудачном спасении или вдвое меньше урона при успешном. Существо, находящееся в зоне действия более чем одного огненного взрыва, поражается только один раз. </p><p></p><p>Эта способность наносит урон растениям, предметам в этом районе и воспламеняет легковоспламеняющиеся предметы, которые не носят и не переносят с собой. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, огненные всплески могут поразить существ более одного раза.
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
        `,
        data_ru:
        `
    Ваши способности к вооружению и кидо, наносящие урон от огня, игнорируют сопротивление. Если существо невосприимчиво к урону от огня, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, ваш показатель силы увеличивается на 2. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая свой показатель силы на 1.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, ваш показатель ловкости увеличивается на 2. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая свой показатель ловкости на 1.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, ваш показатель телосложения увеличивается на 2. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая свой показатель телосложения на 1.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, ваш показатель интеллекта увеличивается на 2. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая свой показатель интеллекта на 1.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, ваш показатель мудрости увеличивается на 2. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая свой показатель мудрости на 1.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, ваш показатель харизмы увеличивается на 2.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая свой показатель харизмы на 1.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, вы получаете бонус +1 к спасбросам.</p><p></p><p>Вы можете повторно использовать эту способность до трех раз, каждый раз увеличивая этот бонус на 1, максимум на +4.
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
        `,
        data_ru:
        `
    Выберите навык, которым вы не владеете, пока ваше вооружение активно, вы считаетесь владеющим выбранным навыком. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая другой навык, которым вы не владеете.
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
        `,
        data_ru:
        `
    Пока ваше вооружение активно, все ваши способы передвижения увеличиваются на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая этот бонус на 5 футов.
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
        `,
        data_ru:
        `
    Вы можете использовать свое вооружение в качестве бонусного действия.
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
        `,
        data_ru:
        `
    Вы можете активировать свою Вознесенную форму в качестве бонусного действия, если ваше вооружение будет выпущено.
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
        `,
        data_ru:
        `
    Получите навык, на который вы имеете право. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, в общей сложности три раза.
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
        `,
        data_ru:
        `
    Пока ваше вооружение освобождено, у вас есть преимущество при проверках, позволяющих сохранять концентрацию на способностях вооружения.
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
        `,
        data_ru:
        `
    Удар рейацу отбрасывает препятствия к существу в пределах досягаемости от вас. </p><p></p><p>Нанесите по цели дальнюю атаку. При попадании цель получает 2d8 силового урона. Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный луч максимум к четырем лучам. Вы можете направить дополнительные лучи на ту же цель или на другую, вы должны сделать отдельный бросок атаки для любых дополнительных лучей. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p></p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте дальность стрельбы на 10 футов. </p><p>* Увеличьте размер кубика урона на одну ступень; максимум d12.
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
        `,
        data_ru:
        `
    Вы получаете следующие преимущества:</p><p>* Вы добавляете бонус за мастерство к своим броскам инициативы.</p><p>* У вас есть бонус + 2 к вашему пассивному показателю мудрости (восприятия).</p><p>* У вас есть слепота с дальностью действия 5 футов. Это сочетается с другими источниками слепоты.
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
        `,
        data_ru:
        `
    На время полета вы набираете скорость 60 футов. Когда эта способность заканчивается, вы начинаете падать, если все еще находитесь в воздухе, если только не сможете остановить падение.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Для этой способности больше не требуется концентрация.</p><p>* Увеличьте скорость полета на 10 футов.
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
        `,
        data_ru:
        `
    Выберите способность вооружения со временем разыгрывания одного действия, теперь она заменена на бонусное действие. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Выберите две способности к вооружению, у вас есть доступ к этим способностям только во время вознесения. </p><p></p><p>Вы можете выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Ваше вооружение пульсирует под действием гравитационных сил, когда вы наносите урон своим вооружением, цель отталкивается на 5 футов от вас в выбранном ею направлении. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов </p><p>: </p><p>Вы можете активировать эту способность в качестве бонусного действия </p><p>* Эта способность больше не требует концентрации. Вы должны выбрать эту способность дважды </p><p>прежде чем выбрать эту опцию. </p><p>* Оружие будет наносить дополнительный урон силой 1d4. Каждый раз, когда вы повторно выбираете эту опцию </p><p>размер кубика урона увеличивается на один шаг, максимум на 1d12. </p><p>* Расстояние, на которое отбрасывается цель, увеличивается на 5 футов, максимум на 60 футов.
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

        `,
        data_ru:
        `
    Вы управляете гравитацией в 10-футовом кубе, который вы можете видеть в пределах досягаемости. При активации этой способности выберите один из следующих эффектов. Эффект сохраняется до тех пор, пока вы не воспользуетесь своим действием в более позднем ходе для переключения на другой эффект. Вы также можете использовать свое действие для временной остановки эффекта или перезапуска того, который вы остановили. </p><p></p><p>Любое существо может игнорировать эффекты этой способности при успешном броске с сохранением силы. </p><p></p><p>Продолжительность увеличивается на 1 минуту для каждой другой вашей способности к притяжению. </p><p></p><p>** Увеличьте силу тяжести: ** Вес всех объектов и существ в пределах зоны увеличивается вдвое, и каждое существо должно тратить 1 дополнительный фут движения на каждый фут, который оно перемещает, используя свою скорость. </p><p></p><p>** Уменьшите гравитацию: ** Вес всех объектов и существ в пределах зоны уменьшается вдвое, и каждое существо, которое перемещается на 1 фут, перемещается еще на 1 фут. </p><p></p><p>** Противодействие силе тяжести: ** По инициативе 10 каждое существо в радиусе 30 футов от зоны отодвигается на 5 футов от центра в выбранном им направлении. </p><p></p><p>** Притягивание силы тяжести: ** По инициативе 10 каждое существо в радиусе 30 футов от зоны притягивается на 5 футов к центру в выбранном им направлении. </p><p></p><p>** Блокировка силы тяжести: ** Вы касаетесь объекта, который весит не более 10 фунтов, и заставляете его волшебным образом зафиксироваться на месте. Если объект зафиксирован в воздухе, он может выдерживать до 2000 фунтов веса. Увеличение веса приводит к падению предмета. В противном случае существо может использовать действие для проверки прочности вашего оружия, за исключением DC. В случае успеха существо может переместить предмет на расстояние до 10 футов. </p><p></p><p>Вы должны выбрать эту способность три раза, прежде чем сможете использовать этот эффект. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов </p><p>: </p><p>* Вы можете активировать эту способность в качестве бонусного действия </p><p>* Продолжительность действия увеличена на 1 минуту </p><p>* Площадь действия увеличена на 10 футов </p><p>* Увеличьте инициативу, на которую действует эта способность, на 2 </p><p>* Для обеспечения силы тяжести замка вес объекта, на который вы можете воздействовать, увеличивается на 5 фунтов, а вес </p><p>, который может удерживать объект, увеличивается на 500 фунтов.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель и каждое существо в радиусе 5 футов от нее получают урон силой 1d4. </p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность стрельбы на 5 футов </p><p>* Увеличьте размер кубика урона на одну ступень, максимум на 1d10
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
        `,
        data_ru:
        `
    С невероятной скоростью вы создаете вокруг себя сферу притяжения для отражения снарядов и атакующих. Мощная сила исходит от вас в виде сферы радиусом 10 футов, сосредоточенной на вас, отталкивающей все физические предметы, существ и заклинания. Это также потенциально сводит на нет любой урон, который вы могли бы получить от активированного источника. </p><p></p><p>Использование этой способности нарушает концентрацию. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер сферы на 5 футов, максимум на 30 футов </p><p>* Существо, пойманное при спасении, выполняет спасбросок на ловкость, при неудаче оно наносит 2d6 урона. Каждый раз, когда вы повторно выбираете эту опцию, размер кубика урона увеличивается на один шаг, максимум на 2d12.
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
        `,
        data_ru:
        `
    Вы жестоко манипулируете гравитацией, чтобы с силой переместить существо, которое видите в пределах досягаемости. Цель делает спасбросок STR. При неудачном спасении вы можете толкать или тянуть цель на расстояние до 15 футов в любом направлении, если вы переместите цель на твердую поверхность, цель получит 1d8 ударов дубинкой за каждые 5 футов, которые она проделала таким образом. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте расстояние, на которое вы можете переместить цель, на 5 футов. </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Вы можете выбрать дополнительную цель для этой способности. Вы должны выбрать эту способность </p><p>три раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы создаете сильное гравитационное давление, чтобы толкать или тянуть существ и предметы. Каждое существо в 60-футовом конусе должно совершить бросок с сохранением силы. Существо получает 4d6 силового урона и притягивается к вам или отбрасывается на 15 футов от вас, вы должны выбрать, что именно, прежде чем использовать эту способность. При успешном спасении существо получает половину урона и не перемещается. </p><p></p><p>Вы можете повторно выбирать эту возможность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* увеличьте размер конуса на 5 футов </p><p>* увеличьте количество выталкиваемых ног на 5 футов </p><p>* Существа, которые провалить спасбросок также повалили ничком. Вы, должно быть, выбрал этот </p><p>способность дважды, прежде чем выбрать этот вариант.
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
        `,
        data_ru:
        `
    Вы создаете дыру в пространстве между целью и собой, чтобы поменяться местами. Цель может сделать бросок для сохранения силы, в случае успеха это заклинание не срабатывает. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете использовать эту способность в качестве бонусного действия. </p><p>* Дальность увеличивается на 5 футов </p><p>* Вы можете выбрать любые две цели вместо одной цели и себя.
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
        `,
        data_ru:
        `
    Совершите атаку ближнего боя против существа, до которого сможете дотянуться. При попадании цель получает урон силой 1d10 и сжимается в невероятно крошечную точку в пространстве, где она стояла, исчезая, а затем появляясь снова в конце хода в том же пространстве, которое она покинула. Если пространство занимает какой-либо объект или существо, они перемещаются в ближайшее незанятое пространство по их выбору. Существо, на которое воздействует эта способность, становится невосприимчивым к ней на 1 раунд. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте урон дополнительно на 1d10 </p><p>* Увеличьте количество раундов, после которых цель исчезает, на 1
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
        `,
        data_ru:
        `
    Вы создаете дестабилизированное поле тяжести вокруг цели, которую видите в пределах досягаемости. Нанесите по цели дальнюю атаку. При попадании цель получает урон силой 1d6, и в течение всего времени действия в начале каждого поворота цель отклоняется на 20 футов в произвольном направлении вперед, назад, влево или вправо. Цель может сопротивляться принудительному перемещению с шагом в 5 футов, но за каждые 5 футов, когда она не перемещается, она получает 1d6 силового урона. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Эта способность больше не требует концентрации </p><p>* Увеличьте продолжительность на 1 минуту </p><p>* Увеличьте расстояние, на которое перемещается существо, на 5 футов
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
        `,
        data_ru:
        `
    Вы нарушаете гравитацию вокруг вас в 20-футовой сфере с центром в центре, которая движется вместе с вами. На время действия поля действуют следующие эффекты: </p><p></p><p>* Скорость каждого другого существа в поле снижается до 0. </p><p>* Каждое другое существо имеет преимущество при атаке оружием </p><p>* Ваши другие гравитационные способности подтягивают или толкают существ еще на 10 футов, если они это делают.
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
        `,
        data_ru:
        `
    Вы создаете черную сферу диаметром 2 фута в точке, которую можете видеть в пределах досягаемости, и она парит в этом пространстве. </p><p></p><p>Сфера уничтожает всю материю, которая проходит через нее. Исключение составляют артефакты. Все, что касается сферы, но не поглощается ею полностью, наносит урон силой 10d6. </p><p></p><p>По инициативе 30 каждое существо в радиусе 60 футов от сферы должно совершить силовой бросок, в случае неудачи оно подтягивается на 35 футов к ее центру. </p><p></p><p>Если сфера соприкасается с плоским порталом, например, созданным заклинанием врат, или с внепространственным пространством, например, внутри переносной дыры, мастер определяет, какое катастрофическое событие произойдет. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте количество создаваемых вами сингулярностей на 1 максимум до 3 </p><p>* Вместо этого сфера наносит 10d8 урона
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
        `,
        data_ru:
        `
    Вы создаете 10 сфер сжимающегося пространства диаметром в один дюйм, которые вращаются вокруг вас. На время действия, когда существо подвергается еще одной из ваших гравитационных способностей или заклинаний, которые принудительно перемещают существо, вы можете запустить в него до 3 сфер. Каждая сфера наносит 3d8 силового урона. Кроме того, при попадании в существо сферой оно взрывается и выделяет гравитационную энергию из существа в сфере радиусом 20 футов. Каждое другое существо внутри сферы должно выполнить спасбросок на ловкость. Существо получает 2d6 силового урона за каждый метеорит при неудачном спасброске или вдвое меньше при успешном.
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
        `,
        data_ru:
        `
    Вы создаете вокруг себя сферу нестабильной гравитации. В рамках этого действия вы набираете скорость полета 600 футов и можете перемещаться на высоту до 600 футов. Во время этого движения, если вы ударяете по какой-либо поверхности или существу, сфера разряжается с огромной силой. Пораженный объект или существо и каждое другое существо в радиусе 80 футов от него должны выполнить бросок с сохранением силы. Пораженное существо или предмет получает 30d6 силового урона при неудачном спасброске и отбрасывается на 30 футов в выбранном вами направлении. Объекты и существа получают вдвое меньше урона при успешном спасброске и не перемещаются.
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
        `,
        data_ru:
        `
    Вы изучаете два новых заклинания Кайдо по вашему выбору из списка заклинаний Синигами или два заклинания из любого другого списка заклинаний, которые восстанавливают очки жизни или предоставляют временные очки жизни. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Ваше вооружение больше не наносит смертельного урона. </p><p></p><p>Всякий раз, когда ваше вооружение наносит урон существу, оно вместо этого восстанавливает очки жизни, равные нанесенному урону. Вы можете отклонить эту способность как бонусное действие. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте продолжительность действия этой способности на 1 раунд.
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
        `,
        data_ru:
        `
    Пока эта способность активна, когда вы произносите заклинание, восстанавливающее очки жизни или дарующее временные очки жизни, существо восстанавливает дополнительные 1d4 очков жизни или получает дополнительные 1d4 временных очков жизни. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая одну из следующих опций: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер матрицы на один шаг, максимум до 1d12. </p><p>* Увеличьте продолжительность действия этой способности на 1 раунд.
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
        `,
        data_ru:
        `
    Как часть этой способности, вы разыгрываете заклинание Кайдо или любое другое заклинание, которое восстанавливает очки жизни или предоставляет временные очки жизни 1-го уровня или ниже, которые вам известны, не тратя SP </p><p></p><p>и не требуя материальных компонентов. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз повышая уровень заклинания на единицу, максимум на 7 уровень.
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
        `,
        data_ru:
        `
    Находясь в сознании, вы восстанавливаете 1 хит-пойнт в начале своего хода. </p><p></p><p>Вы получаете дополнительные преимущества в зависимости от того, сколько раз вы выбирали эту способность.: </p><p>2 - Когда вам удается смертельный спасбросок, вы получаете дополнительный успех. </p><p>3 - У вас есть преимущество в спасбросках от отравления. </p><p>4 - Вы невосприимчивы к болезням. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте количество восстановленных очков жизни на 1, максимум до 8. </p><p>* Кроме того, в начале своего хода вы исцеляете одно очко урона от умений. </p><p>* Кроме того, в начале своего хода вы отращиваете один отрубленный отросток, кроме головы. Вы должны выбрать эту способность три раза, прежде чем сможете выбрать эту опцию. </p><p>* Кроме того, в начале своего хода вы можете отменить одно из следующих условий: ослепление, оглушение, паралич или отравление. Вы должны выбрать эту способность три раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы даруете максимум трем существам в пределах досягаемости количество временных очков жизни, равное вашему уровню + количество ваших способностей к исцелению. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте продолжительность на 1 минуту. </p><p>* Пораженные существа также получают пользу от вашего фактора исцеления (если у вас есть такая способность). Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы совершаете одиночную атаку ближнего боя или дальнего боя с обычным радиусом действия 80 футов и большим радиусом действия 120 футов с вашим вооружением. В случае успеха вы наносите урон, равный количеству очков жизни, которые существа восстановили с помощью ваших способностей Кидо или вооружения с момента предыдущего рассвета. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Если вы решите атаковать в ближнем бою, у вас будет преимущество в броске атаки. </p><p>* Если вы решите атаковать на расстоянии, обычная и дальняя дистанции увеличатся вдвое.
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
        `,
        data_ru:
        `
    Вы прикасаетесь к мертвому существу, которое было мертво не более ста лет, которое не умерло от старости и которое не является нежитью. Если его душа свободна, желает и не была перевоплощена, цель возвращается к жизни со всеми своими хитпоинтами.</p><p></p><p>Это заклинание нейтрализует любые яды и излечивает обычные болезни, поражавшие существо после его смерти. Однако это не устраняет магические болезни, проклятия и жизнь; если такие эффекты не устранены до произнесения заклинания, они поражают цель при ее возвращении к жизни.</p><p></p><p>Это заклинание закрывает все смертельные раны и восстанавливает все отсутствующие части тела.</p><p></p><p>Воскрешение из мертвых - тяжелое испытание. Цель получает штраф -4 ко всем броскам D20. Каждый раз, когда цель заканчивает длительный отдых, штраф уменьшается на 1, пока она не исчезнет.</p><p></p><p>Восстановление жизни существу, которое не было мертвым в течение одного года или дольше, сильно облагает вас налогом. Пока ваше вооружение обновляется, у вас есть недостаток во всех бросках атаки, проверках способностей и спасбросах.
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
        `,
        data_ru:
        `
    Сфера положительной энергии расходится в сфере радиусом 60 футов из выбранной вами точки в пределах досягаемости. Если у существа должно быть уменьшено количество очков жизни до 0 или меньше, вместо этого оно уменьшается до 1 очка жизни. Вы можете отключить эту способность по своему желанию. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов, а радиус увеличивается на 10 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Вы можете использовать эту способность в качестве реакции, триггером которой является союзник, которого вы можете видеть в пределах досягаемости, наносящий урон. </p><p>* Кроме того, когда действие этой способности заканчивается по истечении срока действия или вы отменяете ее, любое существо внутри сферы восстанавливает 8d4 хит-пойнта.
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
        `,
        data_ru:
        `
    Когда вы обычно бросаете один или несколько кубиков, чтобы восстановить очки жизни с помощью Кидо или способности вооружения, вместо этого вы используете максимально возможное число для каждого кубика. Например, вместо восстановления 2d6 очков жизни существу вы восстанавливаете 12.
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
        `,
        data_ru:
        `
    Выберите одну из оценок способности Пустота, она увеличивается на 2. </p><p></p><p>Эту способность можно выбирать несколько раз.
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
        `,
        data_ru:
        `
    В качестве бонусного действия Пустота может двигаться на своей скорости навстречу враждебному существу, которое она может видеть.
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
        `,
        data_ru:
        `
    В первом раунде боя Пустота имеет преимущество в бросках атаки против любого существа, которого она застала врасплох.
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
        `,
        data_ru:
        `
    Пустота может дышать воздухом и водой.
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
        `,
        data_ru:
        `
    Когда Пустота получает урон, она создает вокруг себя магический барьер. Барьер уменьшает урон на 1d10, как минимум до 0, а затем исчезает. </p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих улучшений: </p><p>* Увеличьте уменьшенный урон дополнительно на 1d10; максимум на 4d10. </p><p>* Выберите невыбранное число: 2, 3, 4, 5. Эта способность также перезаряжается в зависимости от этого результата.
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
        `,
        data_ru:
        `
    Пока вы не носите доспехов и не владеете щитом, ваш AC равен 10 + вашему модификатору телосложения.
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
        `,
        data_ru:
        `
    Во время своего первого хода Пустота имеет преимущество в бросках атаки против любого существа, которое не сделало ход. Любой удар, который Пустота наносит застигнутому врасплох существу, является критическим ударом.
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
        `,
        data_ru:
        `
    Если Пустота подвергается эффекту, который позволяет ей совершить спасбросок и получить только половину урона, то вместо этого она не получает никакого урона, если ей удается выполнить спасбросок, и только половину урона, если он терпит неудачу.
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
        `,
        data_ru:
        `
    Пустота может телепатически разговаривать с любым существом, которое она может увидеть в радиусе 30 футов от себя, при условии, что это существо понимает хотя бы один язык.
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
        `,
        data_ru:
        `
    Пустота наносит дальнюю атаку по цели, которую она может видеть в пределах досягаемости. При попадании цель получает урон силой 2d4. Если у Лощины есть мультиатака, она может заменить одну или несколько своих атак Балой.</p><p></p><p>За каждые 4 HD выше 4 HD дальность увеличивается на 5 футов.</p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих улучшений:</p><p>* Увеличьте урон дополнительно на 1d4, максимум на 6d4.</p><p>* Увеличьте дальность на 20 футов.</p><p>* Пустотелый получает +1 бонус к броску атаки, используя эту способность; максимум +4.
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
        `,
        data_ru:
        `
    В качестве Бонусного действия Пустота выбирает одно существо в радиусе 30 футов от себя, которое она может видеть. Если выбранное существо может видеть или слышать Пустоту, это существо может использовать свою реакцию для проведения одной атаки ближнего боя или для выполнения действия Уклонения или Скрытия. За каждые 4 HD выше 12 HD Пустота получает дополнительное использование этой способности, максимум 6 раз в день.
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
        `,
        data_ru:
        `
    Всякий раз, когда Холлоу начинает свой ход с 10 очками жизни или меньше, бросьте d6. При выпадении 6 холлоу впадает в неистовство. На каждом из своих ходов, находясь в неистовстве, Пустота атакует ближайшее существо, которое она может увидеть. Если ни одно существо не находится достаточно близко, чтобы атаковать, Пустота атакует объект, отдавая предпочтение объекту меньшего размера, чем она сама. Как только Пустота впадает в неистовство, это продолжается до тех пор, пока она не будет уничтожена или не восстановит все свои хиты.
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
        `,
        data_ru:
        `
    Вы получаете естественное оружие ближнего боя Укус. Его радиус действия составляет 5 футов, а наносимый урон равен вашему урону от удара без оружия. </p><p></p><p>Если у вас уже есть атака Укус, то она наносит дополнительный кубик урона.
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
        `,
        data_ru:
        `
    Лощина имеет преимущество в бросках атаки ближнего боя против любого существа, у которого нет всех своих хит-пойнтов.
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
        `,
        data_ru:
        `
    Холлоу получает оружие дыхания, имеющее форму либо 15-футового конуса, либо 30-футовой линии, этот выбор является постоянным. Пустота также выбирает тип элемента из следующих, это тип урона, который наносит оружие Дыхания: Кислота, Холод, Огонь, Молния или Яд. </p><p></p><p>Каждое существо в этой области должно совершить спасбросок на ловкость, получив 4d6 урона при неудачном спасении или вдвое меньше урона при успешном. </p><p></p><p>Если у лощины уже есть оружие дыхания, то вместо этого его дальность увеличивается на 10 футов, а урон увеличивается на 2d6 или оно также перезаряжается на 4. </p><p></p><p>Эта способность может быть выбрана несколько раз, каждый раз выбирая одно из следующих дополнений: </p><p>* Выберите числа с 1 по 6, от которых эта способность не перезаряжается, теперь она перезаряжается от выбранного числа. Вы можете выбрать это усиление только дважды. </p><p>* Увеличьте дальность на 10 футов. </p><p>* Урон увеличивается на 2d6.
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
        `,
        data_ru:
        `
    Выберите одно из оружия ближнего боя Hollows, оно наносит один дополнительный кубик от его урона.
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
        `,
        data_ru:
        `
    У Лощины скорость закапывания составляет 30 футов. Для каждых 4 HD выше 4 HD скорость закапывания увеличивается на 5 футов; максимум 60 футов.
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
        `,
        data_ru:
        `
    Впадина испускает мощный выброс концентрированной духовной энергии. Луч, образующий линию длиной 100 футов и шириной 5 футов, вырывается из Впадины в выбранном ими направлении. Каждое существо в линии должно совершить спасбросок на ловкость. Существо получает 6d6 силового урона при неудачном спасении или вдвое меньше урона при успешном. </p><p></p><p>Для каждых 2 HD выше 6 HD длина линии увеличивается на 10 футов. </p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих увеличений: </p><p>* Увеличьте урон дополнительно на 1d6; максимум на 10d6. </p><p>* Выберите числа с 1 по 6, при которых эта способность не перезаряжается, теперь она перезаряжается при выбранном числе. Вы можете выбрать это усиление только дважды. </p><p>* Увеличьте DC сохранения на +1; максимум + 4. </p><p>* Если у Пустого есть мультиатака, он может заменить одну из своих атак Серо. Эта способность должна быть выбрана три раза, прежде чем можно будет выбрать этот параметр.
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
        `,
        data_ru:
        `
    Лощина испускает мощный темный взрыв концентрированной духовной энергии. Луч, образующий линию длиной 500 футов и шириной 5 футов, вырывается из Лощины в выбранном ими направлении. Каждое существо в линии должно совершить спасбросок на ловкость. Существо получает 6d12 силового урона при неудачном спасении или вдвое меньше урона при успешном. </p><p></p><p>За каждые 4 HD выше 18 HD урон увеличивается на 1d12.
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

        `,
        data_ru:
        `
    Дупло может менять цвет и текстуру своей внешности, чтобы соответствовать цвету и текстуре своего окружения. В результате у него есть преимущество при проверках ловкости (скрытности), сделанных для скрытности.
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
        `,
        data_ru:
        `
    Если Пустой перемещается по крайней мере на 15 футов прямо к цели, а затем поражает ее естественным оружием в тот же ход, цель получает дополнительный урон 2d6.
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
        `,
        data_ru:
        `
    В качестве действия пустота нацеливается на одного гуманоида, которого она может видеть в радиусе 30 футов от себя. Если цель может видеть пустоту, цель должна успешно выполнить спасбросок Мудрости против этой магии или быть очарована пустотой. Зачарованная цель рассматривает пустого как надежного друга, к которому нужно прислушиваться и защищать. Хотя цель не находится под контролем пустого, она принимает просьбы или действия пустого самым благоприятным образом, каким только может. </p><p></p><p>Каждый раз, когда пустотелый или его товарищи причиняют какой-либо вред цели, он может повторить спасительный бросок, прекращая действие на себя в случае успеха. В противном случае эффект длится 12 часов или до тех пор, пока пустота не будет уничтожена, не окажется на другом плане существования, чем цель, или не выполнит бонусное действие для прекращения эффекта.
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
        `,
        data_ru:
        `
    Вы получаете естественное оружие ближнего боя Когти. Его радиус действия составляет 5 футов, а наносимый урон равен вашему урону от удара без оружия. </p><p></p><p>Если у вас уже есть атака когтями, то они наносят дополнительный кубик урона.
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
        `,
        data_ru:
        `
    Пустота выбирает до 11 существ, с которыми она знакома. Если эти существа находятся на одном уровне, пока Пустота концентрируется на этой способности, она может транслировать выбранным существам информацию о том, что она в данный момент видит или испытывает.
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
        `,
        data_ru:
        `
    Если Пустотелый прыгает по крайней мере на 20 футов во время своего движения, он может затем использовать это действие, чтобы приземлиться на ноги в пространстве, где находится одно или несколько других существ. Каждое из этих существ выталкивается на незанятое пространство в радиусе 5 футов от Впадины и должно совершить спасительный бросок на Ловкость. При неудачном спасении существо получает 4d12 урона от ударов дубинкой и падает ничком. При успешном спасении существо получает вдвое меньше урона и не падает ничком.
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
        `,
        data_ru:
        `
    В качестве действия Пустота нацеливается на одно существо, которое она может видеть в радиусе 30 футов. Цель должна успешно выполнить спасбросок Харизмы или быть проклята. </p><p></p><p>Будучи проклятой, цель уязвима к одному типу урона по выбору Пустоты. Проклятие действует до тех пор, пока не закончится более сильным заклинанием восстановления, снимающим проклятие заклинанием или подобной магией.
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
        `,
        data_ru:
        `
    Выберите способность, которой обладает Пустота и которая перезаряжается, за исключением оружия Дыхания. Выберите число, от которого она не перезаряжается, теперь она перезаряжается от этого числа. Эта способность может быть выбрана несколько раз, каждый раз выбирая способность, которая еще не была выбрана.
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
        `,
        data_ru:
        `
    В качестве реакции Пустота добавляет 5 к своему AC против одной атаки оружием, которая поразила бы ее. Для этого Пустота должна видеть атакующего и владеть оружием ближнего боя.
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
        `,
        data_ru:
        `
    В качестве реакции, в ответ на попадание в цель из оружия дальнего боя, Пустота отклоняет ракету. Урон, который она получает от атаки, уменьшается на 1d10. Если урон уменьшен до 0, он ловит ракету, если она достаточно мала, чтобы держать ее в одной руке, и у нее свободна рука. За каждые 4 HD выше 14 HD урон уменьшается на 1d10; максимум на 4d10.
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
        `,
        data_ru:
        `
    В качестве действия Лощина открывает путь в гарганту, и до четырех желающих существ могут последовать за ней внутрь. Descorrer - это гораздо более стабильная форма путешествий, которая всегда обеспечивает безопасную и короткую прогулку в любое место, знакомое the Hollow на другом плане существования.
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
        name: `Дьявольский взгляд [Devil's Sight]`, 
        requirements: '12 HD, Темное зрение [Darkvision]', 
        data:
        `
    Magical darkness doesn't impede the hollows darkvision.
        `,
        data_ru:
        `
    Магическая темнота не препятствует темному зрению в пустотах.
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

        `,
        data_ru:
        `
    Полый зверь создает магическую иллюзию, из-за которой кажется, что он стоит рядом со своим реальным местоположением, в результате чего броски атаки против него становятся невыгодными. </p><p>Если он поражен атакой, эта черта нарушается до конца его следующего хода. Эта черта также нарушается, когда Пустой выведен из строя или имеет скорость 0.
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
        `,
        data_ru:
        `
    Если Холлоу летит и пикирует по крайней мере на 30 футов прямо на цель, а затем поражает ее ударом оружия ближнего боя, атака наносит цели дополнительный урон 1d6.
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
        `,
        data_ru:
        `
    Пустота может проходить через немагическую, необработанную землю и камень. При этом Пустота не нарушает материал, через который проходит.
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
        `,
        data_ru:
        `
    В качестве действия Пустота нацелена на одно существо, которое она может видеть в радиусе 5 футов от себя. Цель должна успешно выполнить спасительный бросок Мудрости или получить 4d8 психического урона и лишиться памяти до тех пор, пока не завершится короткий или длительный отдых или пока она не получит пользу от заклинания большего восстановления или исцеления. Конструкции, илы, Растения и нежить автоматически преуспевают в сохранении. </p><p></p><p>Пока память истощена, цель должна бросить d4 и вычесть выпавшее число из своих проверок способностей и бросков атаки. Каждый раз, когда память цели истощается сверх первой, размер кубика увеличивается на единицу; максимум d12, после чего цель теряет сознание на 1 час. Затем эффект заканчивается. </p><p></p><p>Пустота изучает все языки, которые знает цель с истощенной памятью, и приобретает все свои навыки.
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
        `,
        data_ru:
        `
    Пустота выбирает тип урона, к которому она также устойчива. Всякий раз, когда Пустота подвергается выбранному урону, она не получает урона, а вместо этого восстанавливает количество очков жизни, равное нанесенному урону.
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
        `,
        data_ru:
        `
    Пустота выбирает тип урона из следующих, к которым она не уязвима: Кислота, Холод, Огонь, Молния, Некротический, Ядовитый, Лучезарный и Гром. Пустота устойчива к выбранному типу урона. </p><p></p><p>Кроме того, Пустотелые должны выбрать тип элемента, к которому они не уязвимы и не устойчивы, теперь они уязвимы к выбранному типу повреждений.
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
        `,
        data_ru:
        `
    Ни один бросок атаки не имеет преимущества против Пустого, если только он не выведен из строя.
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
        `,
        data_ru:
        `
    Мысли Пустого нельзя прочитать, существа могут телепатически общаться с Пустым, только если это позволяет, а магия не может определить, лжет ли Пустота.
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
        `,
        data_ru:
        `
    В результате в течение 1 минуты пустота волшебным образом увеличивается в размерах вместе со всем, что на ней надето. Увеличенная пустота имеет большие размеры, удваивает свой кубик урона при атаках оружием, основанным на силе (входит в состав атак), и с преимуществом выполняет проверки силы и броски для сохранения силы. Если углублению не хватает места, чтобы стать Большим, оно достигает максимально возможного размера в доступном пространстве.
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
        `,
        data_ru:
        `
    Выберите два навыка, Пустота теперь владеет этими навыками. Эту способность можно выбирать несколько раз.
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
        `,
        data_ru:
        `
    Лощина имеет преимущество в бросках атаки против испуганных существ.
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
        `,
        data_ru:
        `
    У Лощины есть преимущество при спасбросках против зачарования, а магия не может усыпить Лощину.
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
        `,
        data_ru:
        `
    Пустой получает бонус к AC, равный его бонусу за харизму.
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
        `,
        data_ru:
        `
    Пустота не провоцирует атаку при удобном случае, когда она улетает за пределы досягаемости противника.
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
        `,
        data_ru:
        `
    Каждое выбранное существо из лощины, находящееся в радиусе 120 футов от лощины и осознающее это, должно выполнить спасбросок Мудрости или испугаться на 1 минуту. Существо может повторять спасительный бросок в конце каждого из своих ходов, прекращая действие эффекта на себя в случае успеха. </p><p></p><p>Если спасительный бросок существа успешен или эффект для него заканчивается, существо становится невосприимчивым к Ужасающему Присутствию пустоты в течение следующих 24 часов.
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

        `,
        data_ru:
        `
    Пустые могут видеть и слышать конкретное выбранное ими существо, которое находится на том же плане существования, что и они. Цель должна совершить спасительный бросок Мудрости, который зависит от того, насколько хорошо пустой знает цель и какую физическую связь он имеет с ней. Если цель знает, что она использует эту способность, она может добровольно отказаться от спасброса, если хочет, чтобы за ней наблюдали. </p><p></p><p>При успешном сохранении цель не подвергается воздействию, и Пустой не может снова использовать против нее эту способность в течение 24 часов. </p><p></p><p>При неудачном сохранении способность создает невидимый датчик в радиусе 10 футов от цели. Пустые могут видеть и слышать через датчик, как будто они были там. Датчик перемещается вместе с целью, оставаясь в пределах 10 футов от нее в течение всего времени. Существа, способные видеть невидимые объекты, воспринимают датчик как маленький светящийся шар. </p><p></p><p>| Сохранить модификатор | Знания | </p><p>|:---:|:-----------:| </p><p>| +5 | Из вторых рук (Они слышали о цели) | </p><p>| 0 | Из первых рук (Холлоу встретился с целью) | </p><p>| -5 | Знакомый (Холлоу хорошо знает цель) | </p><p></p><p>| Сохранить Модификатор | Подключение | </p><p>|:---:|:-----------:| </p><p>| -2 | Сходство или картинки | </p><p>| -4 | Владение или одежда | </p><p>| -10 | Часть тела, прядь волос, кусочек ногтя или тому подобное | </p><p></p><p>Вместо того, чтобы нацеливаться на существо, Пустой может выбрать место, которое он видел раньше, в качестве цели заклинания. Когда это происходит, датчик появляется на нужном месте и не перемещается.
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
        `,
        data_ru:
        `
    Вместо использования Сонидо, Пустота может создавать остаточные изображения самой себя, которые длятся в течение 1 минуты или до тех пор, пока она не потеряет концентрацию (как если бы она концентрировалась на заклинании). Он может создавать остаточное изображение на каждые 10 футов Sonido; максимум пять. Остаточные изображения появляются в незанятом пространстве, которое пустота может видеть в радиусе 20 футов от себя. В качестве бонусного действия в свой ход он может перемещать иллюзии на расстояние до 30 футов в пространство, которое он может видеть, но он должен оставаться в пределах 100 футов от них. </p><p></p><p>AC остаточных изображений равен 10 + модификатору ловкости Пустоты или бонусу к естественной броне, в зависимости от того, что больше. Если дубликат получит урон, он уничтожается, и дубликаты автоматически проваливают любой спасбросок.
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
        `,
        data_ru:
        `
    Пустота вдыхает и пытается высосать души всех существ в радиусе действия и быть съеденным. </p><p></p><p>Поражено каждое существо в радиусе 20 футов от Пустоты. Если в пределах досягаемости Холлоу находится двойное или более HD существ, они убиты, а их души пожраны. В противном случае они должны сделать спасбросок Конституции. Любым существам с чертой Духовного осознания разрешается спасбросок независимо от этого. </p><p></p><p>За каждые 4 HD выше 14 HD дальность увеличивается на 10 футов.
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
        `,
        data_ru:
        `
    Смешивая собственную кровь с Серо, Пустой может стрелять Серо с гораздо большей силой атаки и скоростью. </p><p></p><p>Чтобы активировать эту способность, Пустой теряет очки жизни, равные количеству имеющихся у него кубиков. </p><p></p><p>Каждое существо в 60-футовом конусе должно совершить спасбросок на ловкость. Существо получает 6d10 силового урона при неудачном спасении или вдвое меньше урона при успешном. </p><p></p><p>За каждые 4 HD выше 18 HD размер конуса увеличивается на 10 футов. </p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих дополнений: </p><p>* У способности также есть перезарядка 6. </p><p>* Увеличьте значение экономии постоянного тока на +1; максимум +4.
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
        `,
        data_ru:
        `
    Рейреку Пустоты уплотняются, создавая твердую, как сталь, кожу.</p><p></p><p>Урон от ударов дубинкой, колющих и рубящих ударов, наносимый Пустотами, уменьшен на 2.</p><p></p><p>Эта способность может быть выбрана несколько раз, каждый раз наносимый урон дополнительно уменьшается на 1, но требования также увеличиваются на 2 HD.
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
        `,
        data_ru:
        `
    Пустой восстанавливает 3 очка жизни в начале своего хода. Пустой умирает, только если он начинает свой ход с 0 очками жизни и не использует высокоскоростную регенерацию.</p><p></p><p>Всякий раз, когда Пустой получает еще 5 кубиков с попаданиями, количество восстановленных очков жизни увеличивается на 1.</p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих улучшений:</p><p>* Вместо восстановления хитов, Пустота может отрастить отрубленную конечность. У Пустоты должно быть 10 HD, прежде чем выбрать эту опцию.</p><p>* Вместо восстановления хитов, Пустота может отрастить орган. Перед выбором этой опции в углублении должно быть 15 HD.
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

        `,
        data_ru:
        `
    Пустота может задерживать дыхание на 10 минут. За каждые 2 HD выше 4 HD, которые есть у пустоты, она может задерживать дыхание еще на минуту.
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
        `,
        data_ru:
        `
    Пустотелый может передвигаться по обледенелым поверхностям и взбираться по ним без необходимости проверки способностей, а труднопроходимая местность, состоящая из льда или снега, не требует от Пустотелого дополнительных перемещений.
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
        `,
        data_ru:
        `
    Углубление излучает либо тусклый свет в радиусе 15 футов, либо яркий свет в радиусе 15 футов и тусклый свет еще на 15 футов. Можно переключаться между опциями в процессе действия.
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
        `,
        data_ru:
        `
    В качестве действия пустота покрывает себя и все, что на ней надето, магической иллюзией, которая делает ее похожей на другое существо такого же размера и гуманоидной формы. Иллюзия заканчивается, если пустой выполняет бонусное действие, чтобы покончить с ней, или если он умирает. </p><p></p><p>Изменения, вызванные этим эффектом, не выдерживают физического контроля. Например, впадина может казаться гладкой, но тот, кто прикоснется к ней, почувствует ее грубую плоть. В противном случае существо должно предпринять действие по визуальному осмотру иллюзии и успешно провести проверку интеллекта (Расследование), чтобы определить, что дупло замаскировано.
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
        `,
        data_ru:
        `
    Пустота невосприимчива к любым заклинаниям или эффектам, которые могли бы изменить ее форму.
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
        `,
        data_ru:
        `
    Они тыкают указательным пальцем в землю, и светящийся след быстро вытягивается наружу из Впадины в направлении цели, находящейся в пределах досягаемости, и измеряют их Рейреку. </p><p></p><p>Пустой выбирает одно существо в пределах досягаемости, Пустой получает информацию о количестве HD существ, о том, сколькими способностями к вооружению они обладают, если таковые имеются, и о самом высоком заклинании, которое они могут применить. </p><p></p><p>Всякий раз, когда количество пуль, попадающих в кубик, увеличивается на единицу, дальность стрельбы увеличивается на 10 футов.
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
        `,
        data_ru:
        `
    Пустой выбирает два известных ему заклинания 3-го уровня или ниже. Он может использовать каждое выбранное заклинание один раз в день, не требуя материальных компонентов или SP. </p><p></p><p>Если у пустого уже есть Врожденное Заклинание, он может проигнорировать требования к этой способности и выбрать одно из своих списков заклинаний, они могут разыгрывать эти заклинания дополнительно каждый раз в день. </p><p></p><p>Эта способность может быть выбрана несколько раз, каждый раз выбирая одно из следующих улучшений: </p><p>* Пустота выбирает два известных ей заклинания 3-го уровня или ниже. Он может использовать выбранное заклинание дважды в день, не требуя материальных компонентов. </p><p>* Пустота выбирает известное ей заклинание 4-го уровня или выше. Он может использовать выбранное заклинание один раз в день, каждое из которых не требует материальных компонентов. </p><p>* Выберите заклинание, которое пустота может использовать от природы, оно может использовать его дополнительный раз в день.
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
        `,
        data_ru:
        `
    Пустой невосприимчив к любому эффекту, который мог бы ощутить его эмоции или прочитать его мысли, а также к любому заклинанию предсказания, от которого он отказывается. Проверки Мудрости (Проницательности), сделанные для выяснения его намерений или искренности, имеют недостаток.
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
        `,
        data_ru:
        `
    Пустота имеет преимущество при проверке Мудрости (Восприятия), которая полагается на слух.
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
        `,
        data_ru:
        `
    Пустота имеет преимущество при проверке Мудрости (Восприятия), которая полагается на зрение.
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
        `,
        data_ru:
        `
    Пустота имеет преимущество при проверке Мудрости (Восприятия), которая основывается на обонянии.
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
        `,
        data_ru:
        `
    Пустые обладают врожденной способностью разрушать барьеры между плоскостями. Пустота выбирает точку, которую может видеть, и открывает круглый портал диаметром 10 футов на другой план существования. На другом плане открывается другой портал. Пустота может указать целевое назначение в общих чертах. </p><p></p><p>Любое существо или объект, входящий в портал, выходит из другого портала, как если бы они были рядом друг с другом.
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
        `,
        data_ru:
        `
    Пустота может прекрасно вспомнить любой пройденный ею путь.
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
        `,
        data_ru:
        `
    Пустота может сохранять концентрацию на двух разных заклинаниях одновременно. Кроме того, у нее есть преимущество при спасбросах для сохранения заклинаний концентрации.
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
        `,
        data_ru:
        `
    Пустые получают способность накладывать заклинания. Они накладывают заклинания из списка заклинаний Синигами. Пустые выбирают Мудрость, Интеллект или Харизму в качестве оценки за наложение заклинаний.</p><p></p><p>Пустота изучает 2 заклинания и два заклинания 1-го уровня.</p><p></p><p>Начиная с того момента, когда Пустота набирает 6 HD, и при каждых 2 HD выше 6 HD Пустота изучает дополнительное заклинание.</p><p></p><p>Максимальный уровень заклинания Hollows равен их HD, разделенному на 5, округленному в меньшую сторону, минимальному уровню 1. </p><p></p><p>Если у Пустого уже есть функция заклинания, она игнорирует требования к этой способности, и Заклинание заменяется этой способностью. Они сохраняют свои текущие заклинания известными и увеличивают свой запас очков заклинаний на 10.</p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих:</p><p>* Пустота изучает 2 новых заклинания</p><p>* Пустота изучает 2 новых заклинания
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
        `,
        data_ru:
        `
    У Лощины есть преимущество в спасбросках против заклинаний и других магических эффектов.
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
        `,
        data_ru:
        `
    Атаки пустотелым оружием обладают магической силой.
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
        `,
        data_ru:
        `
    Один раз за ход пустота может нанести дополнительный урон 2d6 существу, пораженному атакой оружием, если это существо находится в пределах 5 футов от союзника пустоты, который не выведен из строя.
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
        `,
        data_ru:
        `
    В дупле можно попытаться спрятаться, даже если оно лишь слегка прикрыто листвой, сильным дождем, падающим снегом, туманом и другими природными явлениями.
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
        `,
        data_ru:
        `
    Пустота может имитировать любые звуки, которые она слышала, включая голоса. Существо, которое слышит звуки, может сказать, что это имитация, после успешной проверки на Мудрость (Проницательность).
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
        `,
        data_ru:
        `
    Пустой может нанести две атаки вместо одной, когда выполняет атакующее действие. За каждые 5 HD выше 5 HD он получает дополнительную атаку.
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
        requirements: 'Тип пустого Гиллиан', 
        data:
        `
    A square beam of light engulfs a target in a beam of light, completely isolating them from the plane they're currently in.
                    
                                When the Gillian has a Kūmon active, it can use this ability to draw a non-hostile creature into the Kūmon. The affected creature is immune to damage and cannot be targeted by attacks, abilities or spells. 
                    
                                When a Hollow is no longer a Gillian, it loses this ability and replaces it with another Hollow ability it meets the requirements for.
        `,
        data_ru:
        `
    Квадратный луч света охватывает цель лучом света, полностью изолируя ее от плоскости, в которой она в данный момент находится.</p><p></p><p>Когда у Джиллиан активирован Кумон, она может использовать эту способность, чтобы привлечь в Кумона не враждебное существо. Пораженное существо невосприимчиво к урону и не может быть мишенью для атак, способностей или заклинаний. </p><p></p><p>Когда Пустота больше не является Джиллиан, она теряет эту способность и заменяет ее другой способностью, для которой она соответствует требованиям.
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
        `,
        data_ru:
        `
    Лощина может выполнять действие Расцепления или Скрытия в качестве бонусного действия на каждом из своих ходов.
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
        `,
        data_ru:
        `
    Пустота имеет преимущество при броске атаки против существа, если хотя бы один из союзников Пустоты находится в пределах 5 футов от существа и союзник не выведен из строя.
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
        `,
        data_ru:
        `
    Один раз за ход, когда Пустой наносит урон одним из своих естественных видов оружия или невооруженным ударом, он может потратить 2 SP и нанести дополнительный урон, равный его бонусу к естественной броне.
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
        `,
        data_ru:
        `
    Пустота посылает излучающий импульс в виде сферы радиусом 30 футов, которая реагирует на источники Рейацу, позволяя ей определять местоположение любых обнаруженных людей и оценивать, насколько они сильны. </p><p></p><p>Каждую минуту Пустота получает следующие сведения: </p><p>1. Количество обнаруженных особей. </p><p>2. Расстояние между чувствующими особями. </p><p>3. Тип существа обнаруженных особей. </p><p>4. Если у обнаруженных особей больше или меньше HD. </p><p></p><p>Для каждых 2 HD выше 23 HD радиус увеличивается на 10 футов. </p><p></p><p>Эта способность может быть выбрана несколько раз, каждый раз сокращая количество времени, необходимое для получения знаний, на одну минуту.
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
        `,
        data_ru:
        `
    В качестве действия Пустота фиксирует свой взгляд на одном существе в радиусе 60 футов, которое она может видеть и которое может видеть ее глаза. Цель должна сделать спасбросок телосложения. Если спасбросок не удался на 5 или более раз, существо мгновенно каменеет. В противном случае существо, не выполнившее спасбросок, начинает превращаться в камень и проходит повторное обучение. Связанное существо должно повторить спасительный бросок в конце своего следующего хода, окаменев при неудаче или прекратив действие эффекта при успехе. </p><p></p><p>Окаменение длится до тех пор, пока существо не будет освобождено более сильным восстанавливающим заклинанием или подобной магией.
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
        `,
        data_ru:
        `
    Если Пустота движется по крайней мере на 15 футов прямо к существу, а затем поражает его атакой когтями в тот же ход, эта цель должна успешно выполнить силовой бросок или быть сбита с ног. Если цель лежит ничком, Дупло может нанести по ней один укус в качестве бонусного действия.
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
        `,
        data_ru:
        `
    В то время как пустота не носит брони и не владеет щитом, ее AC включает модификатор Мудрости
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
        `,
        data_ru:
        `
    Когда Пустотелый уменьшил количество очков жизни существа до 0 атакой ближнего боя в свой ход, Пустотелый может предпринять бонусное действие, увеличивающее его скорость вдвое и наносящее атаку укусом.
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
        `,
        data_ru:
        `
    Лощина может принимать одну реакцию на каждый ход в бою
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
        `,
        data_ru:
        `
    В начале своего хода пустой может получить преимущество по всем броскам атаки оружием ближнего боя, которые он совершает в течение этого хода, но броски атаки против него имеют преимущество до начала следующего хода
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
        `,
        data_ru:
        `
    Если Пустота получает 10 единиц урона или меньше, что уменьшило бы ее до 0 очков жизни, то вместо этого она уменьшается до 1 очка жизни. За каждые 4 HD выше 8 HD необходимый для получения урона уменьшается на 2, минимум на 10 единиц урона.
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
        `,
        data_ru:
        `
    Пустой должен быть в режиме Воскрешения, чтобы активировать эту способность.</p><p></p><p>Когда Пустой принимает эту форму, он получает следующие преимущества на время действия:</p><p>* 30 временных очков жизни, они суммируются с любыми существующими временными очками жизни.</p><p>* Скорость ходьбы и Сонидо увеличиваются на 30 футов </p><p>* Получите 2 способности к вооружению, они доступны только в этой форме.</p><p>* Получите 2 способности банкай, они доступны только в этой форме.</p><p>* Получите 2 Пустые способности, они доступны только в этой форме.</p><p>* Все кубики природного оружия, доспехов и урона от ударов без оружия увеличены на одну ступень</p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих улучшений:</p><p>* Увеличьте продолжительность на 1 минуту</p><p>* Вы получаете дополнительное вооружение и пустотелую способность или способность Банкай в этой форме
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
        `,
        data_ru:
        `
    Находясь в условиях тусклого освещения или темноты, the Hollow может выполнить действие Спрятаться в качестве бонуса.
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
        `,
        data_ru:
        `
    Пустота наносит двойной урон предметам и конструкциям
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
        `,
        data_ru:
        `
    Один раз в день Персонаж может вызывать людей, которые появляются в незанятых местах, которые он может видеть в пределах досягаемости. Выберите один из следующих вариантов для того, что появляется: </p><p></p><p>* Один человек с рейтингом вызова 2 или ниже. </p><p>* Два мено с рейтингом сложности 1 или ниже. </p><p>* Четыре Мено с рейтингом сложности 1/2 или ниже. </p><p>* Восемь Мено с рейтингом сложности 1/4 или ниже. </p><p></p><p>Менос исчезает, когда его количество падает до 0 очков жизни. </p><p></p><p>Призванные существа дружелюбны к Лощине и ее компаньонам. Они действуют в тот же ход, что и Лощина. Они подчиняются любым устным командам, которые им отдаются (Пустота не требует никаких действий). Если Пустота не отдает им никаких команд, они атакуют любых враждебных существ. </p><p></p><p>У DM есть статистика существ.
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
        `,
        data_ru:
        `
    Размер полости увеличивается на одну категорию. Увеличивается показатель силы на 1 (максимум 18) и уменьшается Ловкость на 1 (минимум 8). </p><p></p><p>Эта способность может быть выбрана несколько раз, до максимального размера gargantuan'а.
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
        `,
        data_ru:
        `
    Лощина имеет преимущество при проверке способностей и спасительных бросках, сделанных, чтобы избежать схватки.
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
        `,
        data_ru:
        `
    Пустота наносит дополнительный урон 1d4, когда поражает цель атакой оружием и имеет преимущество при броске атаки, или когда цель находится в пределах 5 футов от союзника Пустоты, который не выведен из строя, и у Пустоты нет недостатка при броске атаки. </p><p></p><p>За каждые 4 HD выше 4 HD количество использований в день увеличивается на единицу; максимум 6\ День. За каждые 2 HD выше 4 HD урон увеличивается на 1d4; максимум 6d4.
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
        `,
        data_ru:
        `
    Пустота удаляет один из своих глаз и раздавливает его, который превращается в пыль и обтекает до 12 существ, желающих этого. </p><p></p><p>Пострадавшие существа переживают события, которые Пустота пережила по своему выбору еще неделю назад. Пострадавшие существа переживают события так же, как это было в Пустоте, вид, звуки, эмоции и т.д. Время, которое Полый может ретранслировать, составляет 1 минуту на каждые два HD, которыми он обладает, эти минуты не обязательно должны быть последовательными в один и тот же день или событие. Это может быть одна минута одного дня и еще одна минута другого дня.
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
        `,
        data_ru:
        `
    Лощина получает Шунпо в 40 футов. За каждые 4 HD выше 6 HD Шунпо увеличивается на 10 футов.
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
        `,
        data_ru:
        `
    Пустотелый может лазать по труднопроходимым поверхностям, в том числе вверх ногами по потолкам, без необходимости проверки способности.
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
        `,
        data_ru:
        `
    Пустота имеет преимущество в Силе и Ловкости при спасительных бросках против эффектов, которые могли бы сбить ее с ног.
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
        `,
        data_ru:
        `
    Если Пустота застает существо врасплох и поражает его атакой во время первого раунда боя, цель получает дополнительный урон 1d6 от атаки. За каждые 4 HD выше 8 HD урон увеличивается на 1d6; максимум 4d6.
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
        `,
        data_ru:
        `
    Когда Пустотелый успешно атакует своим Укусом, если цель хотя бы на один размер меньше, он должен выполнить спасительный бросок на Ловкость или быть проглоченным Пустотелым. Проглоченное существо ослеплено и сковано, полностью защищено от атак и других эффектов за пределами Пустоты и получает 3d4 ед. урона кислотой в начале каждого хода в Пустоте. </p><p></p><p>Если Лощина получает 10 единиц урона или более за один ход от существа, находящегося внутри нее, Лощина должна успешно выполнить спасбросок конституции DC 20 в конце этого хода или отрыгнуть всех проглоченных существ, которые падают ничком в радиусе 10 футов от Лощины.
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
        `,
        data_ru:
        `
    Вы получаете хвост. Вы можете хвататься за предметы своим хвостом. Его длина достигает 5 футов, и он может поднять количество фунтов, равное вашему показателю силы. Вы можете использовать его для выполнения следующих простых задач: поднимать, ронять, удерживать, толкать или тянуть предмет или существо; открывать или закрывать дверь или контейнер. Ваш администратор может разрешить добавление других простых задач к этому списку опций. </p><p></p><p>Ваш хвост не может владеть оружием или щитами или делать что-либо, требующее ручной точности, например, использовать инструменты или магические предметы или выполнять соматические компоненты заклинания. </p><p></p><p>Эта способность может быть выбрана несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Ваш хвост считается оружием ближнего боя; требуется ловкость. </p><p>* Вы можете использовать свой хвост, чтобы схватить кого-нибудь. У вас должно быть количество баллов 16, чтобы выбрать этот вариант.
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
        `,
        data_ru:
        `
    Вы получаете щупальце. Вы можете хвататься за предметы своим щупальцем. Его длина достигает 5 футов, и оно может поднять количество фунтов, равное вашему показателю силы. Вы можете использовать его для выполнения следующих простых задач: поднимать, ронять, удерживать, толкать или тянуть предмет или существо; открывать или закрывать дверь или контейнер. Ваш администратор может разрешить добавление других простых задач к этому списку опций. </p><p></p><p>Ваше щупальце не может владеть оружием или щитами или делать что-либо, требующее ручной точности, например, использовать инструменты или магические предметы или выполнять соматические компоненты заклинания. </p><p></p><p>Эту способность можно выбирать несколько раз, каждый раз выбирая один из следующих вариантов: </p><p></p><p>* Ваше щупальце считается оружием ближнего боя, вы должны выбрать, зависит ли оно от силы или ловкости. </p><p>* Вы можете использовать свое щупальце, чтобы схватить кого-нибудь. У вас должна быть сила 16, чтобы выбрать эту опцию. </p><p>* Вы получаете еще одно щупальце.
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
        `,
        data_ru:
        `
    Выберите один из следующих ландшафтов: Арктический, Прибрежный, Пустынный, Лесной, Луговой, Холмистый, Горный, Болотный, Подземный, Подводный или Городской. Лощина имеет преимущество при проверке ловкости (Скрытности), выполняемой для того, чтобы спрятаться на выбранной местности.
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
        `,
        data_ru:
        `
    Пустота может прорыться в твердой породе с половиной своей скорости и оставляет за собой туннель диаметром 10 футов.
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
        `,
        data_ru:
        `
    Пустота знает расстояние до любого существа, которому она стремится отомстить, и направление его движения, даже если существо и Пустота находятся на разных планах существования. Если существо, за которым следит Пустота, умирает, Пустота знает.
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
        `,
        data_ru:
        `
    Полая может ходить по воде и другим жидкостям, как по твердой земле.
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
        `,
        data_ru:
        `
    В качестве действия Пустота выпускает паутину в существо, которое она может видеть в радиусе 30 футов. Цель удерживается паутиной. В качестве действия связанная цель может провести проверку на Прочность, разорвав перепонку в случае успеха. Сеть также может быть атакована и уничтожена (AC 10; HP 5; уязвимость к урону от огня; невосприимчивость к ударам дубинкой, ядом и психическому урону).
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
        `,
        data_ru:
        `
    Находясь в контакте с паутиной, Пустота знает точное местоположение любого другого существа, находящегося в контакте с той же паутиной. </p><p></p><p>Кроме того, Пустота игнорирует ограничения на передвижение, вызванные паутиной.
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
        `,
        data_ru:
        `
    Хотя у Лощины 10 очков жизни или меньше, у Лощины есть преимущество в бросках атаки. Кроме того, она наносит дополнительный урон 1d6 любой цели, пораженной атакой ближнего боя. За каждые 4 HD выше 14 HD Пустота наносит дополнительный урон 1d6; максимум 6d6.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым льдом. Пока эта способность активна, тип урона, наносимого вашим оружием, меняется на урон от холода. </p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Лед покрывает ваше вооружение, нанося дополнительный урон холодом на 1d4. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или s. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон холодом на 1d4 и замедляется. Цель может использовать действие, чтобы сделать спасбросок силы или телосложения. При успешном завершении этот эффект заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте значение сохранения DC на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум на 1d10.
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
        `,
        data_ru:
        `
    Вы выбираете немагический лед, снег или воду, которые можете видеть в пределах досягаемости и которые помещаются в 5-футовый куб. Вы воздействуете на них одним из следующих способов: </p><p>* Вы мгновенно замораживаете воду в лед или снег, вы мгновенно превращаете лед или снег в воду или можете превратить шоу в лед или размягчить лед в снег. </p><p>* Вы понижаете температуру на два температурных диапазона, и это изменение длится в течение всего срока действия. </p><p>* Пока вы лежите, вы заставляете простые фигуры - такие как расплывчатые очертания существа, неодушевленного предмета или местоположения - появляться во льду или снегу. Фигуры сохраняются в течение всего времени. </p><p>* Если вы используете эту способность несколько раз, у вас может быть активировано только количество ее не мгновенных эффектов, равных вашему бонусу за мастерство, и вы можете отклонить такой эффект как действие. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, куб увеличивается на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Теперь вы можете воздействовать на магический лед, снег или воду. </p><p>* Лед, который вы можете создать с помощью этой способности, нельзя разморозить магическим или иным способом. </p><p>* Вы можете снизить температуру еще на 2 температурных диапазона.
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

        `,
        data_ru:
        `
    Ваше тело покрыто слоем льда на время действия способности. Лед не причиняет вреда вам или вашему снаряжению. Пока действие способности не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к урону от холода и огня. </p><p>* Вы уменьшаете следующий наносимый вами физический урон на 4, после получения такого количества урона эта часть способности заканчивается. Каждый раз, когда вы повторно выбираете эту способность, она увеличивается на 1. </p><p>* Любое существо, находящееся в радиусе 5 футов от вас, замедляется. Каждый раз, когда вы повторно выбираете эту способность, дальность действия увеличивается на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Вместо этого вы невосприимчивы к урону от холода. </p><p>* Вы можете выбрать, влияет ли урон от этой способности на существ или нет.
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
        `,
        data_ru:
        `
    Из вас вырывается струя холодного воздуха. Каждое существо в 60-футовом конусе должно совершить спасительный бросок на ловкость. Существо получает 3d8 урона от холода при неудачном спасении или вдвое меньше урона при успешном. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер конуса на 5 футов. </p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Вы создаете ледяную стену на твердой поверхности в пределах досягаемости. Вы можете придать ему форму полусферического купола или сферы радиусом до 10 футов, а можете сформировать плоскую поверхность, состоящую из десяти панелей площадью до 10 квадратных футов. Каждая панель должна быть сплошной с другой панелью. В любой форме стена имеет толщину 1 фут и прослужит на протяжении всего срока. Если стена прорезает пространство существа при его появлении, существо, находящееся в пределах его зоны, отбрасывается к одной стороне стены и должно совершить спасительный бросок на ловкость. При неудачном спасении существа получают 4d6 урона от холода, или вдвое меньше урона при успешном спасении.</p><p></p><p>Стена - это объект, который можно повредить и, таким образом, пробить брешь. Каждая панель имеет 12 и 10 хит-пойнтов на дюйм толщины и уязвима к повреждениям от огня. Уменьшение количества попаданий в панель стены до 0 уничтожает ее и оставляет после себя слой холодного воздуха на пространстве, которое занимала стена. Существо, которое впервые за ход бросает слой холодного воздуха, должно совершить спасбросок телосложения. Существо получает 4d6 урона от холода при неудачном спасении или вдвое меньше урона при успешном.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1 к 6.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте дальность на 10 футов.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Для этой способности больше не требуется концентрация.</p><p>* Вы можете создать дополнительную панель.
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
        `,
        data_ru:
        `
    Ледяной столб радиусом 10 футов и высотой 40 футов поднимается из земли, поднимая в воздух любой предмет или существо (включая вас), стоящие в этом районе. Существа, преуспевшие в спасброске на ловкость, могут уклониться от колонны, в случае неудачи получая 6d6 урона от холода. </p><p></p><p>Перемещение или бой на вершине ледяной колонны требует проверки акробатики. Те, кто потерпел неудачу, падают ничком и должны немедленно выполнить спасбросок на ловкость или соскользнуть со столба, получив соответствующий урон при падении. </p><p></p><p>Существа на вершине колонны, когда она поднимается, могут быть разбиты о потолок или другое препятствие над головой, что наносит 3d6 урона от холода и 3d6 урона от ударов дубинкой. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте радиус и высоту цилиндра на 5 футов. </p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Град из твердого, как камень, льда обрушивается на пять выбранных вами соток в пределах досягаемости. </p><p></p><p>Территория состоит из цилиндра радиусом 80 футов и высотой 40 футов. Каждое существо в этой зоне получает 7d8 урона от холода. </p><p></p><p>Град замедляет существ в пределах своей области. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1d8. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте радиус и высоту на 10 футов.
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
        `,
        data_ru:
        `
    Замораживающие ледяные шары падают на землю в четырех разных точках, которые вы можете видеть в пределах досягаемости. </p><p></p><p>Каждое существо в сфере радиусом 20 футов с центром в каждой выбранной вами точке должно совершить спасбросок на ловкость. Сфера разлетается по углам. Существа получают 10d6 урона от холода и 10d6 урона от ударов дубинкой при неудачном спасении или вдвое меньше урона при успешном. Существо, находящееся в зоне более чем одного ледяного взрыва, поражается только один раз. </p><p></p><p>Эта способность наносит урон растениям, предметам в этом районе и замораживает воду. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, существа могут пострадать от ледяных взрывов более одного раза.
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
        `,
        data_ru:
        `
    Ваши способности к вооружению или кидо, наносящие урон холодом, игнорируют сопротивление. Если существо невосприимчиво к урону холодом, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    Пока эта способность активна, тип урона от оружия меняется на психический урон. </p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к оружию. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение наносит дополнительный 1d4 психического урона. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный 1d4 психического урона и становится недееспособной. В конце каждого хода цель может совершить интеллектуальный спасбросок. В случае успеха действие эффекта прекращается на цели. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте время сохранения на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Вы создаете одно изображение объекта размером не более 5-футового куба. Каждый раз, когда вы повторно выбираете эту возможность, куб увеличивается на 5 футов, а количество изображений, которые вы можете создать, увеличивается на единицу. </p><p></p><p>Изображение появляется в месте, которое вы можете видеть в пределах досягаемости, и сохраняется в течение всего времени. Изображение является чисто визуальным; оно не сопровождается звуком, запахом или другими сенсорными эффектами. </p><p></p><p>Пока вы находитесь в пределах досягаемости иллюзии, вы можете использовать свое действие, чтобы изменить ее внешний вид. Каждый раз, когда вы повторно выбираете эту способность, радиус действия этой способности увеличивается на 10 футов. </p><p></p><p>Физическое взаимодействие с изображением показывает, что это иллюзия, потому что вещи могут проходить через него. Существо, которое использует свое действие для изучения изображения, может определить, что это иллюзия, после успешной проверки Интеллекта (расследования) с сохранением DC. Если существо распознает иллюзию такой, какая она есть, оно может видеть сквозь изображение, и другие его сенсорные качества становятся для существа неуловимыми. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Вместо этого вы можете использовать бонусное действие, чтобы изменить иллюзию. </p><p>* Вы можете создавать изображения существ. </p><p>* Вы также можете создавать и изменять слуховые ощущения с помощью иллюзии. </p><p>* Вы также можете создавать и изменять обонятельные ощущения в рамках иллюзии. </p><p>* Вы также можете создать температуру алтаря, соответствующую иллюзии. </p><p>* Вы можете потратить действие, чтобы запрограммировать события по сценарию, которым следует ваша иллюзия, а также определенные условия, которые должны быть выполнены для активации или изменения событий. Эти события продолжают повторяться до окончания продолжительности, или вы программируете другие события. Вы должны выбрать эту возможность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы заставляете себя - включая свою одежду, доспехи, оружие и другие принадлежности к вашей персоне - выглядеть по-другому на время или до тех пор, пока вы не воспользуетесь своим действием, чтобы избавиться от этого. </p><p></p><p>Вы можете казаться на 1 фут ниже или выше, а можете казаться худым, толстым или что-то среднее. Вы не можете изменить свой тип телосложения, поэтому вы должны принять форму, которая имеет такое же базовое расположение конечностей. В противном случае, степень иллюзии зависит от вас. </p><p></p><p>Изменения, вызванные этой способностью, не выдерживают физического контроля. Например, если вы используете эту способность, чтобы добавить шляпу к своему наряду, предметы проходят через шляпу, и любой, кто прикоснется к ней, ничего не почувствует или почувствует вашу голову и волосы. Если вы используете эту способность казаться тоньше, чем вы есть на самом деле, рука того, кто протянет руку, чтобы прикоснуться к вам, столкнется с вами, когда она, казалось бы, все еще находится в воздухе. </p><p></p><p>Чтобы распознать, что вы замаскированы, существо может использовать свое действие для проверки вашей внешности и должно успешно выполнить проверку интеллекта (Расследование) по вашему сохраненному DC. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p></p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте продолжительность на 1 минуту.
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
        `,
        data_ru:
        `
    В вашем пространстве появляются три иллюзорных дубликата вас самих. На время действия дубликаты перемещаются вместе с вами и имитируют ваши действия, меняя положение, поэтому невозможно отследить, какие изображения настоящие. Вы можете использовать свое действие, чтобы удалить иллюзорные дубликаты. </p><p></p><p>Каждый раз, когда существо атакует вас в течение действия способности, бросьте d20, чтобы определить, нацелена ли атака на одного из ваших дубликатов. </p><p></p><p>Если выпавшее число равно или больше 20 - 8 - количество дубликатов, вы можете изменить цель атаки на дубликат. </p><p></p><p>Количество дубликатов равно 10 + ваш модификатор ловкости. Если атака поражает дубликат, дубликат уничтожается. Дубликат может быть уничтожен только атакой, которая поражает его. При этом игнорируются все другие повреждения и эффекты. Способность заканчивается, когда все дубликаты уничтожены. </p><p></p><p>Эта способность не влияет на существо, если оно не может видеть, если оно полагается на чувства, отличные от зрения, такие как слепота, или если оно может воспринимать иллюзии как ложные, как при истинном зрении. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте продолжительность на 1 минуту. </p><p>* Увеличьте количество дубликатов на один, максимум на шесть.
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
        `,
        data_ru:
        `
    Выбрав единственное существо, которое вы можете увидеть в пределах досягаемости, вы проецируете призрачный образ худших страхов этого существа, который виден только этому существу. Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов. </p><p></p><p>Цель должна совершить интеллектуальный спасбросок. При неудачном спасении цель на время пугается. В конце каждого хода цели до окончания действия заклинания цель должна успешно выполнить спасбросок Мудрости или получить 2d8 психического урона. При успешном спасброске действие заклинания заканчивается. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Вы можете нацелиться на дополнительное существо, максимум на 5. </p><p>* Увеличьте урон на 1d8, максимум до 6d8.
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
        `,
        data_ru:
        `
    Вы создаете иллюзию, которая внедряется в разум существа, которое вы можете видеть в пределах досягаемости. Цель должна совершить интеллектуальный спасбросок. При неудачном сохранении вы создаете призрачный объект, существо или другое видимое явление по вашему выбору, размер которого не превышает 10-футовый куб и который на время действия виден только цели. Эта способность не влияет на нежить или конструкции. Каждый раз, когда вы повторно выбираете эту способность, куб увеличивается на 5 футов. </p><p></p><p>Фантом включает в себя звук, температуру и другие стимулы, также очевидные только для существа. </p><p></p><p>Цель может использовать свое действие для проверки фантома с проверкой интеллекта (Расследования) по сохраненному DC. Если проверка проходит успешно, цель понимает, что фантом - это иллюзия, и действие способности заканчивается. </p><p></p><p>Пока способность воздействует на цель, цель относится к фантому так, как если бы он был реальным. Цель рационализирует любые нелогичные результаты взаимодействия с фантомом. Например, цель, пытающаяся пройти по призрачному мосту, перекинутому через пропасть, падает, как только ступает на мост. Если объект переживает падение, он все еще верит, что мост существует, и находит какое-то другое объяснение своему падению: его столкнули, он поскользнулся или его мог сорвать сильный ветер. </p><p></p><p>Пораженная цель настолько убеждена в реальности фантома, что может даже получать урон от иллюзии. Фантом, созданный в виде существа, может атаковать цель. Точно так же фантом, созданный в виде огня, лужи кислоты или лавы, может сжечь цель. В каждом раунде вашего хода фантом может наносить 4d6 психического урона цели, если она находится в зоне действия фантома в пределах 5 метров от фантома., </p><p></p><p>при условии, что иллюзия представляет существо или опасность, которые логически могут наносить урон, например, атакуя. Цель воспринимает урон как тип, соответствующий иллюзии. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Вы придаете ландшафту площадью до 20 кубических футов внешний вид, звук, запах и даже ощущения, похожие на какой-то другой ландшафт. каждый раз, когда </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, куб увеличивается на 5 футов. Однако общая форма местности остается прежней. Открытые поля или дорогу можно сделать похожими на болото, холм, расщелину или какую-либо другую труднопроходимую местность. Пруд можно сделать похожим на травянистый луг, пропасть - на пологий склон или усыпанный камнями овраг - на широкую и гладкую дорогу. </p><p></p><p>Аналогичным образом, вы можете изменять внешний вид структур или добавлять их там, где их нет. Заклинание не маскирует и не добавляет существ. </p><p></p><p>Иллюзия включает в себя звуковые, визуальные, тактильные и обонятельные элементы, поэтому она может превратить чистую местность в труднопроходимую (или наоборот) или иным образом затруднить передвижение по местности. Любая часть иллюзорной местности (например, камень или палка), удаленная из зоны действия заклинания, немедленно исчезает. </p><p></p><p>Существо, внимательно изучающее иллюзию, может попытаться проверить Интеллект (Расследование) вашего заклинания save DC, чтобы не поверить ему. Существо, которое распознает иллюзию такой, какая она есть, видит ее как расплывчатое изображение, наложенное на местность. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте продолжительность на 1 минуту.
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
        `,
        data_ru:
        `
    Вы отдаете магическую команду существу, которое видите в пределах досягаемости, заставляя его выполнить какую-то услугу или воздержаться от какого-то действия по вашему решению. </p><p>Если существо может понять вас, оно становится очарованным вами на какое-то время. Пока вы зачаровываете существо, оно получает 5d10 психического урона каждый раз, когда действует прямо вопреки вашим инструкциям, но не чаще одного раза в день. На существо, которое не может вас понять, эта способность не действует. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d10. </p><p></p><p>Вы можете отдать любую команду по своему выбору, за исключением действия, которое приведет к неминуемой смерти. Если вы отдадите суицидальную команду, действие способности прекратится. Вы можете досрочно прекратить действие способности, используя действие для ее отмены. Снятие проклятия, большее восстановление или подобная магия или способность также прекращают действие. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте продолжительность на 1 день. </p><p>* Существо может получать урон более одного раза в день. Вы должны были выбрать эту возможность три раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы пытаетесь привязать существо к иллюзорной клетке, которую видит только оно. Одно существо, которое вы можете видеть в пределах досягаемости, должно совершить интеллектуальный спасбросок </p><p></p><p>Цель преуспевает автоматически, если она невосприимчива к заклинанию. </p><p></p><p>При успешном спасении цель получает 10d10 психического урона, и действие способности заканчивается. При неудачном спасении цель получает 10d10 психического урона, и вы заставляете область непосредственно вокруг пространства цели казаться ей каким-то образом опасной. Вы можете вызвать у цели ощущение, что она окружена огнем, плавающими бритвами или отвратительной пастью, полной капающих зубов. Какую бы форму ни принимала иллюзия, цель не может видеть или слышать ничего за ее пределами и ограничена на время действия способности. Если цель выходит из иллюзии, совершает через нее атаку ближнего боя или достигает через нее любой части своего тела, цель получает 10d10 психического урона, и действие заклинания заканчивается. </p><p></p><p>Вы можете выбрать эту способность во второй раз, если вы это сделаете, эта способность воздействует на существ, даже если они невосприимчивы к заклинаниям, и наносимый урон удваивается.
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
        `,
        data_ru:
        `
    Ваши способности к вооружению или кидо, наносящие психический урон, игнорируют сопротивление. Если существо невосприимчиво к психическому урону, оно вместо этого получает половину урона. </p><p></p><p>Кроме того, когда вы нацеливаетесь на существо со способностью Иллюзии или заклинанием, и оно в данный момент находится под действием другой способности Иллюзии или заклинания, используемого вами, у него возникает недостаток в спасительном броске.
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
        `,
        data_ru:
        `
    Вы изучаете два новых заклинания по вашему выбору из списка заклинаний вашего класса или одно заклинание по вашему выбору из любого другого списка заклинаний. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Ты используешь Кидо в своем оружии. </p><p></p><p>Когда вы используете эту способность, вы должны потратить слот заклинаний, на время которого вы получаете бонус к броскам атаки и урона, сделанным вашим вооружением, равный уровню слота заклинаний, израсходованному за это время. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте продолжительность на один раунд.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон силой 1d4, и вы восстанавливаете израсходованную ячейку заклинаний по вашему выбору, максимум второго уровня. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10. </p><p>* Увеличьте максимальный уровень восстанавливаемого вами слота заклинаний на единицу, максимум до 7-го уровня.
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
        `,
        data_ru:
        `
    Вы изучаете один метамагический вариант по вашему выбору. Вы также получаете 2 очка магии, которые можно потратить на Метамагию (эти очки добавляются к любым очкам магии, которые у вас есть из другого источника, но могут быть использованы только на Метамагию). Вы восстанавливаете все потраченные очки магии по окончании длительного отдыха. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы получаете еще один метамагический вариант по вашему выбору. </p><p>* Вы получаете 1 дополнительное очко магии.
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
        `,
        data_ru:
        `
    Вы создаете на себя магическую защиту, которая действует в течение всего периода действия. Вы можете израсходовать слот для заклинаний, у защиты есть очки жизни, равные уровню заклинания + ваш бонус к мастерству. Всякий раз, когда вы получаете урон, защита получает его вместо вас. Если этот урон уменьшил защиту до 0 очков жизни, вы получаете весь оставшийся урон. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или s. </p><p>* Эта способность больше не требует концентрации.
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
        `,
        data_ru:
        `
    Однажды во время своего хода, когда вы выполняете атакующее действие и успешно наносите удар своим вооружением, вы можете произнести заклинание как часть того же действия. Время произнесения заклинания должно составлять одно действие, и оно должно либо иметь дальность касания, либо требовать броска атаки. Атака наносит урон в обычном режиме; тогда эффект заклинания устраняется. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Заклинание, которое вы разыгрываете, больше не должно иметь дальности касания. </p><p>* Заклинание, в котором вы больше не нуждаетесь, должно требовать броска атаки.
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
        `,
        data_ru:
        `
    Если существо, которое вы видите в пределах досягаемости, активирует способность вооружения, вы тратите количество очков SP, равное стоимости SP этого вооружения, и выполняете проверку Рейацу, соответствующую проверке Рейацу этого существа. Если ваш чек превышает их бросок, способность Оружие существа не срабатывает и не имеет эффекта. </p><p></p><p>Эта способность не влияет на финальные способности Шикай или Банкай. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Вы можете влиять на способности банкай. У вас должен быть Bankai, прежде чем вы сможете выбрать этот вариант.
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
        `,
        data_ru:
        `
    Когда вы активируете эту способность, вы выбираете 3 известных вам заклинания. В рамках одного действия вы одновременно разыгрываете выбранные заклинания, выбирая, в каком порядке они разрешаются. Вам по-прежнему понадобятся любые необходимые компоненты для разыгрывания выбранных заклинаний. Кроме того, этим заклинаниям нельзя противостоять. </p><p></p><p>Вы получаете два уровня истощения. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности не требуются компоненты V или S. </p><p>* Вам не нужны компоненты для выбранных заклинаний. </p><p>* Вы можете выбрать дополнительное заклинание с этой способностью.
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
        `,
        data_ru:
        `
    Когда вы активируете эту способность, бросьте d8. В рамках того же действия вы можете активировать опцию броска или в другой ход в качестве действия во время действия. </p><p></p><p>| d8 | Эффект | </p><p>|:---:|:-----------| </p><p>| 1 | Бросок на столе Wild Magic | </p><p>| 2 | На время действия ваше передвижение сокращается вдвое, и у вас появляется устойчивость ко всему урону | </p><p>| 3 | У вас есть преимущество при проверке способностей, и вы повторно получаете 1 по броскам атаки и урона на время действия | </p><p>| 4 | Вы применяете заклинание Сон с максимальными значениями 5d8 | </p><p>| 5 | Вы мгновенно телепортируете себя и любое количество других существ в радиусе 5 футов от вас, на расстояние до 100 футов. Каждое существо появляется на незанятом месте | </p><p>| 6 | Вы разыгрываете огненный шар | </p><p>| 7 | Вы восстанавливаете 100 очков жизни | </p><p>| 8 | Ваше Кидо истощается, чтобы вызвать мощный взрыв в радиусе 60 футов, направленный на вас. Эта способность расходует все ваши очки заклинаний и / или слоты заклинаний. Эта способность наносит 1d8 силового урона за израсходованную ячейку заклинания или 2 единицы силового урона за израсходованное очко заклинания. Каждое существо в пределах досягаемости должно совершить спасительный бросок ловкости. При успешном спасении они получают половину урона. | </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте продолжительность на 2 минуты. </p><p>* Когда вы активируете эту способность, вы вместо этого бросаете 2d8 и выбираете один результат. Вы должны выбирать эту способность два раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Всякий раз, когда вы разыгрываете заклинание, требующее спасброса, и любые затронутые существа бросают 1 при своем спасброске, вы можете выбрать один из следующих эффектов: </p><p>* Если заклинание наносит урон, вы удваиваете кубик урона. </p><p>* Если заклинание допускает дополнительные спасброски, пораженное существо делает их с недостатком. </p><p>* Если заклинание имеет продолжительность, вы удваиваете ее. </p><p>* Если заклинание имело единственную цель и требует концентрации, вам не нужно концентрироваться.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым светом. Пока эта способность активна, тип урона, наносимого вашим оружием, изменяется на урон от излучения.</p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение светится праведной энергией, нанося дополнительный урон излучением 1d4. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный 1d4 урона от излучения и ослепляется. В каждый из своих ходов цель может использовать действие для выполнения спасброска Конституция. При успешном завершении этот эффект заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте значение сохранения DC на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Ваше тело светится смертоносным светом на время действия способности. Свет не причиняет вам вреда. Пока действие способности не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к урону от некроза и излучения. </p><p>* Вы излучаете магический яркий свет в сфере радиусом 10 футов и приглушаете его еще на 10 футов. Каждый раз, когда вы повторно выбираете эту способность, сфера увеличивается на 10 футов. </p><p>* Любое существо, которое впервые перемещается внутри сферы во время хода или заканчивает там свой ход, получает 1d4 урона от излучения. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг максимум до 1d10. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Пока эта способность активна, вы невосприимчивы к урону от излучения.
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
        `,
        data_ru:
        `
    Сфера магического света радиусом 20 футов распространяется из выбранной вами точки в пределах досягаемости. Сфера яркая и отбрасывает тусклый свет еще на 20 футов. </p><p></p><p>Ослепляющий свет приводит к тому, что враги в пределах области получают преимущество при бросках атаки. </p><p></p><p>Немагическая тьма не может затемнить область. если выбранная вами точка находится на предмете, который вы держите в руках, или на том, который не носят и не носят с собой, свет исходит от объекта и перемещается вместе с ним. Полное закрывание источника света непрозрачным предметом, таким как чаша или шлем, блокирует свет. </p><p></p><p>Если какая-либо область действия этой способности перекрывается с областью тьмы, созданной Кидо 2-го уровня или ниже, заклинание, создавшее тьму, рассеивается. Каждый раз, когда вы повторно выбираете эту способность, уровень кидо, которое эта способность рассеивает, увеличивается на единицу. </p><p></p><p>Если какая-либо область этой способности перекрывается с областью тьмы, созданной оружием, вы выполняете проверку Рейацу, и в случае успеха тьма рассеивается. Каждый раз, когда вы повторно выбираете эту способность, вы получаете бонус +1 к этому повторному чеку. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p></p><p>* Увеличьте дальность действия и радиус действия этой способности на 10 футов. </p><p>* Увеличьте продолжительность действия на 1 минуту. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация.
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
        `,
        data_ru:
        `
    Вы касаетесь волевого существа, придавая его глазам сияние. На время действия это существо обладает зрением в темноте на расстоянии 60 футов. Кроме того, на существо не влияет яркий свет. Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте продолжительность действия этой способности на 1 минуту. </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Пораженные существа могут видеть в магической темноте, и пока эта способность активна, пораженные существа невосприимчивы к ослеплению. Вы должны были выбрать эту возможность два раза, прежде чем сможете выбрать этот параметр.
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
        `,
        data_ru:
        `
    Луч света устремляется к существу в пределах досягаемости. Нанесите по цели дальнюю атаку. При попадании цель получает 3d8 урона от излучения. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный луч максимум к четырем лучам. Вы можете направить дополнительные лучи на ту же цель или на другую, вы должны сделать отдельный бросок атаки для любых дополнительных лучей. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Дальность стрельбы увеличена на 10 футов. </p><p>* Увеличьте размер кубика урона до d10. Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Мерцающая стена яркого света появляется в выбранной вами точке в пределах досягаемости. Стена отображается в любой выбранной вами ориентации: горизонтально, вертикально или по диагонали. Он может свободно парить или опираться на твердую поверхность. </p><p></p><p>Стена может достигать 60 футов в длину, 10 футов в высоту и 5 футов в толщину. Стена блокирует линию обзора, но существа и предметы могут проходить сквозь нее. Она излучает яркий свет на расстояние 60 футов и тусклый - еще на 60 футов. </p><p></p><p>Когда появляется стена, каждое существо в своей зоне должно совершить спасбросок Конституции. При неудачном спасении существо получает 4d6 урона от излучения и ослепляется на 1 минуту. </p><p></p><p>При успешном спасении оно получает вдвое меньше урона и не ослепляется. </p><p></p><p>Ослепленное существо может сделать спасбросок Конституции в конце каждого из своих ходов, прекращая действие эффекта на себя в случае успеха. </p><p></p><p>Существо, завершающее свой ход в зоне стен, получает 4d6 урона от излучения. Пока действие заклинания не закончится, вы можете использовать действие, чтобы запустить луч света со стены в одно существо, которое вы можете увидеть в радиусе 40 футов от него. </p><p></p><p>Нанесите дальнюю атаку. При попадании цель получает 4d6 урона от излучения. Независимо от того, попали вы или промахнулись, уменьшите длину стены на 10 футов. Если длина стен уменьшится до 0 футов, действие способности закончится. </p><p></p><p>Каждый раз, когда вы повторно используете эту способность, урон увеличивается на 1d6. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность действия, высоту и длину этой способности на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Продолжительность действия вслепую увеличена на 1 минуту.
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
        `,
        data_ru:
        `
    Свет зари распространяется от вас в виде сферы радиусом 60 футов с центром в вас. Этот свет - солнечный свет. Каждое существо в пределах области получает 7d8 урона от излучения и ослепляется на 1 минуту. </p><p></p><p>Существо, ослепленное этим заклинанием, делает еще один спасбросок Конституции в конце каждого из своих ходов. При успешном спасении оно больше не ослеплено. </p><p></p><p>Эта способность рассеивает любую тьму в своей области, созданную Кидо. Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1d8. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте радиус сферы на 10 футов. </p><p>* Увеличьте сохранение DC на 2.
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
        `,
        data_ru:
        `
    Яркий солнечный свет вспыхивает в сфере радиусом 60 футов с центром в выбранной вами точке в пределах досягаемости. Каждое существо при таком освещении должно сделать спасбросок телосложения. При неудачном спасении существо получает 20d6 урона от излучения и ослепляется на 1 минуту. При успешном спасении оно получает вдвое меньше урона и не ослепляется этой способностью. Существо, ослепленное этим заклинанием, делает еще один спасбросок Конституции в конце каждого из своих ходов. При успешном спасении оно больше не ослеплено. Эта способность рассеивает любую тьму в своей области, созданную Кидо. </p><p></p><p>Если существо убито этой способностью, оно испаряется, исчезает и полностью уничтожается. Только прямое вмешательство божества может восстановить уничтоженный характер. </p><p></p><p>Вы можете выбрать эту способность во второй раз, при этом радиус сферы удваивается, существа ослепляются независимо от того, удалось им спастись или нет, а размер кубика урона увеличивается до d10.
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
        `,
        data_ru:
        `
    Ваши способности к свету увеличены в силе. </p><p></p><p>Ваши способности к вооружению или кидо, наносящие урон от излучения, игнорируют сопротивление. Если существо невосприимчиво к урону от излучения, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым электричеством. Пока эта способность активна, тип урона, наносимого вашим вооружением, изменяется на урон от молнии.</p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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

        `,
        data_ru:
        `
    Ваше вооружение заряжается электричеством, нанося дополнительный урон молнией 1d4. Вы можете отменить эту способность в качестве бонусного действия. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон от молнии 1d4 и оглушается. В начале каждого из своих ходов цель может сделать еще один спасбросок Конституции. При успешном завершении этот эффект заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте значение сохранения DC на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Вы можете отражать удары молнии. Если вы подвергнетесь удару молнии или подобному эффекту, и вам удастся спасти бросок, или если это атака, которая поражает вас, вы уменьшаете урон </p><p></p><p>на 1d10 + Модификатор ловкости + Бонус к навыкам. Если вы уменьшаете урон до нуля, вы отклоняете эффект, вызывая его сбой. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Вы можете использовать эту способность, даже если не выполнили спасбросок. </p><p>* Вы дополнительно уменьшаете наносимый вами урон на величину, равную вашему уровню. </p><p>* Когда вы успешно отразили эффект, вы можете вместо этого перенаправить его. Как часть реакции, вы меняете направление или цели эффекта. Все существа в новой области должны совершить соответствующий спасбросок и получить любой урон или эффекты, указанные эффектом. Если потребуется провести атаку дальнего боя, вы делаете это на уровне мастерства с 10-кратным бонусом к навыку.
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
        `,
        data_ru:
        `
    Молния искрит по вашему телу в течение всего времени действия. Молния не причиняет вам вреда. Пока действие способности не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к урону от молнии и грома. </p><p>* Все виды передвижения увеличиваются на 10 футов. Каждый раз, когда вы повторно выбираете эту способность, этот бонус увеличивается на 5 футов. </p><p>* Любое существо, которое впервые приближается к вам на расстояние 5 футов во время хода или заканчивает свой ход там, получает 1d4 урона от молнии. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг, максимум до 1d10. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Эта способность больше не требует концентрации. </p><p>* Вместо этого вы невосприимчивы к урону от молнии. </p><p>* Вы можете выбрать, влияет ли урон от этой способности на существ или нет.
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
        `,
        data_ru:
        `
    Удар молнии, образующий линию длиной 60 футов и шириной 5 футов, вылетает из вас в выбранном вами направлении. </p><p></p><p>Каждое существо в свете должно совершить спасительный бросок на ловкость. Существо получает 6d6 урона от молнии при неудачном спасении или вдвое меньше урона при успешном. Молния поджигает легковоспламеняющиеся предметы в зоне, которые никто не носит. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Увеличьте длину на 5 футов. </p><p>* Увеличьте урон на 1d6. </p><p>* За каждое существо, не выполнившее спасительный бросок, у вас есть до одного прыжка стрелы от этого существа к цели в радиусе 30 футов. Целью может быть существо или объект, и в него может попасть только одна из стрел. Вы должны были дважды выбрать эту возможность, прежде чем сможете выбрать этот вариант.
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
        `,
        data_ru:
        `
    Появляется грозовое облако в форме цилиндра высотой 10 футов и радиусом 20 футов с центром в точке, которую вы можете видеть в пределах досягаемости прямо над собой. Способность не срабатывает, если вы не видите точку в воздухе, где может появиться грозовое облако (например, если вы находитесь в комнате, которая не может вместить облако). Каждый раз, когда вы выбираете эту способность, радиус увеличивается на 5 футов. </p><p></p><p>Когда вы используете эту способность, выберите точку, которую сможете видеть в пределах досягаемости. Из облака в эту точку падает молния. Каждое существо в радиусе 5 футов от этой точки должно совершить спасбросок на ловкость. Существо получает 4d6 урона от молнии при неудачном спасении или вдвое меньше урона при успешном. В каждый из ваших ходов, пока способность не закончится, вы можете использовать свое действие, чтобы снова вызвать молнию таким образом, нацеливаясь на ту же точку или другую. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Вы превращаетесь в молнию и перемещаетесь в зону, находящуюся в пределах досягаемости. Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов. </p><p></p><p>Вы должны либо иметь прямую видимость до пункта назначения, либо указать направление и расстояние в пределах досягаемости. Существа и объекты на пути вашего прохождения получают 5d8 единиц урона от молнии или вдвое меньше за одно успешное спасение. </p><p></p><p>Если ваш путь пересекается с твердым предметом, вы соответствующим образом повреждаете барьер. Если урона достаточно, чтобы прорваться через барьер, вы продолжаете движение за барьером до тех пор, пока позволяет дальность действия способности; в противном случае ваше движение останавливается в квадрате, примыкающем к барьеру, и действие эффекта заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте урон на 1d8. </p><p>* Когда вы прибудете к месту назначения, каждое существо в радиусе 10 футов должно совершить спасбросок на ловкость. Получает 3d6 урона от молнии при неудачном спасении или вдвое меньше при успешном.
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
        `,
        data_ru:
        `
    Потрескивающий шар электрической энергии вылетает из ваших пальцев в выбранную вами точку в пределах досягаемости, где он взрывается сферой радиусом 60 футов. </p><p>Каждое существо в пределах области получает 7d8 урона от молнии. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность на 10 футов. </p><p>* Увеличьте радиус на 10 футов.
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
        `,
        data_ru:
        `
    Во время освобождения, когда на вас распространяется способность или заклинание, наносящее 15 и более единиц урона от Молнии, в качестве реакции на вас эта способность или заклинание не действует, и вы можете войти в свою Вознесенную форму и активировать эту способность одновременно. </p><p>Пока эта способность активна, вы получаете следующие преимущества: </p><p>* Увеличиваете все формы передвижения на 30 футов. </p><p>* Ваш показатель ловкости становится 20. </p><p>* Вы получаете преимущество при спасбросах на ловкость и проверках навыков. </p><p>* Вы восстанавливаете 5 очков жизни в начале своего хода, пока находитесь в сознании. </p><p>* Вы невосприимчивы к истощению и парализованному состоянию. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если сделаете это, то вместо этого получите следующие преимущества: </p><p>* Увеличьте все формы передвижения на 60 футов. </p><p>* Ваш показатель ловкости становится 24. </p><p>* Вы получаете преимущество при спасбросах на ловкость и проверках навыков. Кроме того, вы получаете бонус, равный вашему уровню. </p><p>* Вы восстанавливаете 10 очков жизни в начале своего хода, пока вы в сознании. </p><p>* Вы невосприимчивы к Истощению, Параличу, Недееспособности и Отравлению.
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
        `,
        data_ru:
        `
    Ваши способности к освещению увеличены по мощности. </p><p></p><p>Ваши способности к вооружению или кидо, наносящие урон от молнии, игнорируют сопротивление. Если существо невосприимчиво к урону от молнии, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    Вы запускаете свое рейацу в сферу радиусом 30 футов, центрированную на вас. Эта сфера движется вместе с вами. Любое существо внутри этой сферы должно выполнить проверку Реаицу, которой противостоит ваша проверка Рейацу. В случае неудачи они подвергаются воздействию вашей Гнетущей ауры. </p><p></p><p>Пораженные существа внутри сферы бросают d4 и вычитают выпавшее число из любого броска атаки, который они делают. </p><p>Вы также можете выбрать количество существ, равное вашему бонусу к навыкам + 1, на которых ваша Угнетающая аура не повлияет. </p><p></p><p>Радиус сферы увеличивается на 10 футов для каждой другой вашей способности Угнетения. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте радиус сферы на 10 футов. </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте размер кубика на один шаг, максимум до 1d8. </p><p>* Увеличьте количество существ, на которых вы можете выбрать, чтобы на них не влияла эта способность, на четыре.
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
        `,
        data_ru:
        `
    У существ, на которых действует ваша Гнетущая аура, все формы передвижения снижены на 5 футов, как минимум до 5 футов. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз снижая скорость на 5 футов.
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
        `,
        data_ru:
        `
    Всякий раз, когда существо, подверженное вашей Гнетущей Ауре, делает проверку навыка, оно должно бросить d4 и вычесть из него выпавшее число. </p><p></p><p>Вы можете повторно выбирать эту возможность несколько раз, каждый раз увеличивая размер матрицы на один шаг максимум до 1d12.
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
        `,
        data_ru:
        `
    Класс брони существ, на которых действует ваша Гнетущая аура, снижается на 2, как минимум, до 1. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз снижая класс их брони на 2.
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
        `,
        data_ru:
        `
    Выберите оценку способности, этот выбор является постоянным. У существ, на которых действует ваша гнетущая аура, оценка выбранной способности снижается на 2, как минимум, до 6. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте штраф на 2. </p><p>* Выберите дополнительную оценку способности, это наказание также применяется.
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
        `,
        data_ru:
        `
    У существ, на которых действует ваша Гнетущая аура, есть один слот заклинаний, который им запрещено использовать, начиная с самого высокого уровня. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз затрагивая дополнительный слот заклинаний.
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
        `,
        data_ru:
        `
    Размер кубика урона от любой способности, атаки или заклинания существа или объекта, на которые действует ваша Гнетущая аура, уменьшается на одну ступень, как минимум до 1d4.
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
        `,
        data_ru:
        `
    Всякий раз, когда существо, подверженное вашей Гнетущей Ауре, совершает спасбросок, оно должно бросить d4 и вычесть выпавшее число из спасброса. </p><p></p><p>Вы можете повторно выбирать эту возможность несколько раз, каждый раз увеличивая размер матрицы на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Ваше Рейацу становится подавляющим, затрудняя дыхание. На это время вы считаетесь недееспособным. </p><p>Воздух внутри вашей Гнетущей ауры больше не пригоден для дыхания, кроме вас. </p><p>Вы можете концентрироваться на этой способности и гнетущей ауре одновременно, однако у вас есть недостаток в проверке концентрации. </p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте продолжительность на 1 минуту.
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
        `,
        data_ru:
        `
    Существа, на которых действует ваша Гнетущая аура, имеют 20% шанс, что любое примененное ими заклинание не сработает. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличивает процент вероятности неудачи на 10%, максимум на 50%. </p><p>* Эта способность также влияет на способности к оружию
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым ядом. Пока эта способность активна, тип урона от вашего вооружения меняется на урон от яда.</p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к оружию. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение выделяет яд, нанося дополнительный урон ядом на 1d4. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон ядом 1d4 и становится отравленной. В каждый из своих ходов цель может использовать действие, чтобы сделать спасбросок Конституции. При успешном завершении этот эффект заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте значение сохранения DC на 1. </p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Когда ваше оружие выпущено, вы можете ощущать присутствие и местоположение ядов, ядовитых существ и болезней в радиусе 30 футов от вас. Вы также определяете вид яда, ядовитого существа или болезни в каждом конкретном случае. </p><p></p><p>Эта способность может проникать через большинство барьеров, но она блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева или грязи. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте дальность действия на 10 футов. </p><p>* Эта способность больше не блокируется 1 футом камня или 1 дюймом обычного металла. </p><p>* Эта способность больше не блокируется тонким листом свинца, 3 футами дерева или грязью. Вы должны дважды выбрать эту способность, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы создаете сферу ядовитого газа радиусом 20 футов с центром в точке в пределах досягаемости. Сфера распространяется по углам, и ее площадь сильно затемнена, она сохраняется до тех пор, пока ветер средней или большей скорости (не менее 10 миль в час) не рассеет ее. </p><p></p><p>Находясь в пределах досягаемости, в качестве действия вы можете перемещать облако на высоту до 20 футов и придавать газу любую выбранную вами форму, при условии, что часть облака размером 5х5 примыкает к другой. </p><p>Любое существо, которое начинает или заканчивает свой ход в облаке, должно успешно выполнить спасбросок Конституции или быть отравлено на время. В конце каждого из своих ходов цель может сделать еще один спасбросок Конституции. В случае успеха действие способности заканчивается на цели. </p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 20 футов. </p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>- Увеличьте дальность на 10 футов. </p><p>- Для этой способности больше не требуются компоненты V или S. </p><p>- Для этой способности больше не требуется концентрация. </p><p>- Увеличьте продолжительность b на 1 минуту. </p><p>- Увеличьте сохранение DC на 1
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
        `,
        data_ru:
        `
    Ядовитый газ окружает ваше тело на время действия. Яд на вас не действует. Пока способность не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к кислотному и ядовитому урону. </p><p>* Существо, которое прикасается к вам, поражает вас атакой ближнего боя или завершает ее в радиусе 5 футов от вас, получает 1d4 урона ядом. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг, максимум до 1d10. </p><p>* Вы можете использовать свое действие, чтобы создать 15-футовый конус ядовитого газа, исходящий от вас в выбранном вами направлении. Каждое существо в конусе должно совершить спасбросок телосложения. Существо получает 2d6 урона от яда при неудачном спасении и вдвое меньше урона при успешном. При использовании этой способности действие способности прекращается. Каждый раз, когда вы повторно выбираете эту способность, конус увеличивается на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Вместо этого вы невосприимчивы к урону от яда и состоянию отравления. </p><p>* Увеличьте урон от конуса на 1d6.
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
        `,
        data_ru:
        `
    Ядовитый газ окружает ваше тело на время действия. Яд на вас не действует. Пока способность не закончится, вы получаете следующие преимущества: </p><p>* У вас есть устойчивость к кислотному и ядовитому урону. </p><p>* Существо, которое прикасается к вам, поражает вас атакой ближнего боя или завершает ее в радиусе 5 футов от вас, получает 1d4 урона ядом. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг, максимум до 1d10. </p><p>* Вы можете использовать свое действие, чтобы создать 15-футовый конус ядовитого газа, исходящий от вас в выбранном вами направлении. Каждое существо в конусе должно совершить спасбросок телосложения. Существо получает 2d6 урона от яда при неудачном спасении и вдвое меньше урона при успешном. При использовании этой способности действие способности прекращается. Каждый раз, когда вы повторно выбираете эту способность, конус увеличивается на 5 футов. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Для этой способности больше не требуется концентрация. </p><p>* Вместо этого вы невосприимчивы к урону от яда и состоянию отравления. </p><p>* Увеличьте урон от конуса на 1d6.
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
        `,
        data_ru:
        `
    Вы поражаете своих врагов смертельной болезнью. Всякий раз, когда существо получает урон от яда или приобретает отравленное состояние от одной из ваших способностей к вооружению или заклинаний,</p><p></p><p>вы можете заразить их одним из ваших заболеваний, выбранных ниже, на ваш выбор. </p><p></p><p>** Коклевая лихорадка: ** Симптомы проявляются через 1-6 часов после заражения и включают лихорадку и дезориентацию. Зараженное существо получает один уровень истощения, который не может быть снят до тех пор, пока болезнь не будет излечена.</p><p></p><p>Любое событие, вызывающее у зараженного существа сильный стресс, включая вступление в бой, получение урона, переживание страха или кошмарный сон, заставляет существо совершить спасбросок Конституции. При неудачном спасении существо получает 1d6 психического урона и становится недееспособным из-за безумного смеха на 1 минуту.</p><p></p><p>Существо может повторять спасительный бросок в конце каждого из своих ходов, прекращая безумный смех и недееспособное состояние в случае успеха.</p><p></p><p>В конце каждого длительного отдыха зараженное существо может совершить спасбросок Конституции. При успешном спасении DC за это спасение и за спасение от приступа безумного смеха снижается на 1d6. Когда DC спасброса падает до 0, существо выздоравливает от болезни.</p><p></p><p>** Канализационная чума: ** Симптомы проявляются через 1d6 дней после заражения и включают усталость и судороги. Зараженные существа получают один уровень истощения, который не может быть снят до тех пор, пока болезнь не будет излечена, или как указано ниже, и они восстанавливают только половину нормального количества очков жизни, потратив Кубики с попаданиями, и при длительном отдыхе существо должно потратить Кубик с попаданиями, чтобы восстановить очки с попаданиями; потраченные кубики с попаданиями затем восстанавливаются в обычном режиме.</p><p></p><p>В конце каждого длительного отдыха зараженное существо должно совершить спасбросок Конституции. При неудачном спасении существо получает один уровень истощения. При успешном спасении уровень истощения существа снижается на один уровень. Если успешный спасбросок снижает уровень истощения зараженного существа до 0 или ниже, существо выздоравливает от болезни.</p><p></p><p>** Ухудшение зрения: ** Симптомы проявляются через 1d6 минут после заражения и включают кровотечение из глаз. Зрение существа начинает расплываться. Существо получает штраф -1 за броски атаки и проверки способностей, которые зависят от зрения. В конце каждого длительного отдыха после появления симптомов существо должно совершить спасбросок телосложения, при неудаче штраф увеличивается на 1. При успехе штраф уменьшается на 1. Когда оно достигает -5, жертва ослепляется до тех пор, пока ее зрение не будет восстановлено с помощью магии, такой как меньшее восстановление или исцеление. Если успешный спасбросок снизил штраф до 0 или ниже, существо выздоравливает от болезни.</p><p></p><p>Зрительную гниль можно вылечить с помощью редкого цветка под названием Очанка, который растет на некоторых болотах. В течение часа персонаж, владеющий набором для травничества, может превратить цветок в одну дозу мази. Нанесенная на глаза перед длительным отдыхом, одна доза мази предотвращает обострение заболевания после этого отдыха. После трех доз мазь полностью излечивает заболевание.</p><p></p><p>** Оспа магов: ** Симптомы проявляются через 1d6 минут после заражения и включают головокружение и маленькие синие точки по всему телу. Всякий раз, когда существо произносит заклинание, вероятность того, что заклинание сработает, составляет 10%. В конце каждого длительного отдыха существо должно сделать спасбросок Конституции, при неудаче шанс неудачи заклинания увеличивается на 5%. При успехе он уменьшается на 5%. Если успешный спасбросок снизил вероятность неудачи заклинания до 0% или ниже, существо выздоравливает от болезни.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Сократите время проявления симптомов с d6 до d4.</p><p>* Увеличьте любой урон от этой способности на 1d6.</p><p>* Увеличьте DC сохранения на 1.
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
        `,
        data_ru:
        `
    Вы поражаете своих врагов смертельным ядом. В качестве действия вы можете вызвать одну дозу яда по вашему выбору из приведенного ниже списка. Одно изделие, созданное таким образом, может быть нанесено на одно оружие, или на три единицы боеприпасов, или размазано по поверхности размером 5х5, или на три порции пищи или воды. Если доза не применяется или не используется в течение установленного срока, срок ее действия истекает и она теряет свою эффективность.</p><p></p><p>** Карликовый яд (Контакт): ** Существо, подвергшееся воздействию этого яда, должно успешно выполнить спасбросок конституции или быть </p><p>отравленным на время. Отравленное существо не может выполнять бонусные действия или реакции. Существо может повторять спасительный бросок в конце каждого из своих ходов, прекращая действие эффекта на себя в случае успеха.</p><p></p><p>** Масло паралича (проглочено): ** Существо, подвергшееся воздействию этого яда, должно успешно выполнить спасбросок Конституции или быть отравленным на время. Отравленное существо парализовано. Существо может повторять спасительный бросок в конце каждого из своих ходов, прекращая действие эффекта на себя в случае успеха.</p><p></p><p>** Пыль Вражды (вдыхается): ** Существо, подвергшееся воздействию этого яда, должно успешно выполнить спасбросок Конституции или быть отравленным на время действия. Отравленное существо должно потратить свое действие в свой ход, чтобы предпринять Атакующее действие против ближайшего существа.</p><p></p><p>Существо может повторять спасительный бросок в конце каждого из своих ходов, прекращая действие эффекта на себя в случае успеха.</p><p></p><p>** Змеиный яд (Травма): ** Существо, подвергшееся воздействию этого яда, должно успешно выполнить спасбросок Конституции или быть отравленным на время действия. Отравленное существо получает 2d6 урона от яда в начале каждого из своих ходов. Существо может повторить спасбросок в конце каждого из своих ходов, прекратив действие эффекта на себя в случае успеха.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте продолжительность на 1 минуту.</p><p>* Вы вызываете дополнительную дозу.</p><p>* Увеличьте урон, наносимый этой способностью, на 1d6.</p><p>* Увеличьте спасительный DC на 1.
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
        `,
        data_ru:
        `
    Вы извергаете ядовитый поток в виде 30-футового конуса от себя. Каждое существо в этом районе наносит 7d8 ядовитого урона. </p><p></p><p>Кроме того, каждое существо получает повреждения Таким образом, необходимо сделать сохранение Конституции бросить набирает один уровень </p><p></p><p>истощение на провал. Покуда вы поддерживаете концентрацию, каждое существо должно сделать сохранение Конституции бросить в конце своего хода. При успехе уровень истощения, полученный этой способностью, удаляется, при неудаче они получают уровень истощения. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности не требуются компоненты V или S. </p><p>* Увеличьте размер конуса на 20 футов.
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
        `,
        data_ru:
        `
    Вы создаете сферу ядовитого тумана радиусом 40 футов, сосредоточенную на вас, которая следует за вами. Сфера распространяется по углам, и ее область слегка затемнена. Это длится до тех пор, пока сильный или более скоростной ветер (не менее 21 мили в час) не рассеет его. </p><p></p><p>Каждое существо в тумане (кроме вас) должно сделать спасбросок Конституции. При неудачном спасении существо получает урон ядом 20d6 и отравляется на 1 минуту. При успешном спасении оно получает вдвое меньше урона и не отравляется этой способностью. </p><p></p><p>У существа, отравленного этой способностью, количество очков способностей снижается на 1. Существу разрешается дополнительный спасбросок в конце каждого хода. При успешном спасении 1 очко этого снижения снимается, при неудаче их оценки способностей дополнительно снижаются на 1. Существо в тумане имеет недостаток при спасброске. </p><p></p><p>Вся немагическая флора и фауна внутри облака увядает и умирает. </p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, если вы увеличите радиус действия, продолжительность действия яда удвоится, а урон увеличится до d10.
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
        `,
        data_ru:
        `
    Ваши ядовитые способности увеличены в силе. </p><p></p><p>Ваши способности к вооружению или кидо, наносящие ядовитый урон, игнорируют сопротивление. Если существо было бы невосприимчиво к ядовитому урону, оно вместо этого получает половину урона.
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
    Your armament changes to it's Projectile Form. As a bonus action you can revert your armament back to its original form.

                                While in this form your armament gains the following traits:
                                * You cannot make attacks of opportunity with your armament.
                                * Your armament cannot gain or benefit from any weapon properties.
                                * This armament cannot be disarmed or targeted.
                                * Your weapons damage type can be bludgeoning, piercing or slashing. You must choose one before you make any attacks.
                                * You do not make ranged or  melee attack rolls with this weapon. When you would make an attack with this weapon, instead you choose a target within 60 feet you can see. They make a Dexterity saving throw. On a failed saving throw they take damage. Half as much damage on a success. When a targeted creature would roll a 1 on this saving throw, the attack is considered a critical hit.

                                Each time you reselect this ability or another Projectile ability, the range is increased by 10 feet.

                                You may reselect this ability multiple times, each time choosing one of the following options:
                                * You may activate this ability as a bonus action.
                                * Increase the range by 10 feet.
                                * This ability no longer requires V or S components.
                                * While in this form, your armament deals an additional 1d4 damage.
                                * You can make Opportunity attacks while in this form. You must have selected this ability 3 times before you can select this option.
        `,
        data_ru:
        `
    Ваше вооружение принимает Форму снаряда. В качестве бонусного действия вы можете вернуть своему вооружению его первоначальную форму.</p><p></p><p>Находясь в этой форме, ваше вооружение приобретает следующие характеристики:</p><p>* Вы не можете совершать удобные атаки с помощью своего оружия.</p><p>* Ваше оружие не может приобретать какие-либо свойства оружия.</p><p>* Это оружие нельзя обезвредить или нацелить.</p><p>* Тип урона, наносимого вашим оружием, может быть колющим или рубящим. Вы должны выбрать один из них, прежде чем совершать какие-либо атаки.</p><p>* Вы не выполняете броски атаки дальнего или ближнего боя с этим оружием. Когда вы хотите атаковать этим оружием, вместо этого вы выбираете цель в пределах 60 футов, которую можете видеть. Они делают спасбросок на ловкость. При неудачном спасброске они получают урон. Вдвое меньше урона при успешном. Когда целевое существо бросает 1 при этом спасброске, атака считается критическим попаданием.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность или другую способность к метанию снаряда, дальность увеличивается на 10 футов.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия.</p><p>* Увеличьте дальность на 10 футов.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Находясь в этой форме, ваше вооружение наносит дополнительный урон на 1d4.</p><p>* Находясь в этой форме, вы можете проводить альтернативные атаки. Вы должны были выбрать эту возможность 3 раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Пока ваше вооружение находится в форме снаряда, однажды в свой ход, когда вы совершаете атаку, атака может вместо этого принять форму линии длиной 50 футов и шириной 5 футов, исходящей от вас и центрированной на вашей цели. </p><p></p><p>Вы можете повторно выбирать эту возможность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте длину лески на 10 футов.
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
        `,
        data_ru:
        `
    Хотя ваше вооружение имеет форму снаряда, однажды в свой ход, когда вы совершаете атаку, атака может вместо этого принять форму 15-футового конуса с центром в вашей цели.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте конус на 10 футов.
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
        `,
        data_ru:
        `
    Хотя ваше вооружение имеет форму снаряда, однажды в свой ход, когда вы совершаете атаку, атака может вместо этого принять форму сферы радиусом 20 футов с центром в вашей цели. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте радиус на 10 футов.
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
        `,
        data_ru:
        `
    Хотя ваше вооружение имеет форму снаряда, однажды в свой ход, когда вы совершаете атаку, атака может вместо этого принять форму цилиндра радиусом 10 футов и высотой 30 футов, центрированного на вашей цели. </p><p></p><p>Вы можете повторно использовать эту возможность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Увеличьте радиус и высоту на 10 футов.
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
        `,
        data_ru:
        `
    Находясь в форме снаряда, ваше вооружение начинает окружать вас, обеспечивая вам наступательную защиту. На это время вы не можете двигаться. </p><p></p><p>Вы окружены цилиндром радиусом 10 футов и высотой 20 футов, центрированным на площади, которую вы занимаете. Любое существо, которое начнет свой ход, закончит его или соприкоснется с цилиндром, должно совершить спасительный бросок на Ловкость. При неудачном спасении получает 4d6 урона от ударов дубинкой, колющим или рубящим ударом (на ваш выбор) или вдвое меньше при успешном спасении. </p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов: </p><p>* Для этой способности больше не требуются компоненты V или S. </p><p>* Увеличьте радиус и высоту на 5 футов. </p><p>* Увеличьте продолжительность на 1 минуту. </p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Когда вы используете способность Снаряд, которая заставляет других существ совершать спасительный бросок, вы можете защитить некоторых из этих существ от этой способности. Выберите двух из этих существ, выбранные существа успешно выполнят свой спасбросок и не получат урона от способности. </p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая двух дополнительных существ.
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
        `,
        data_ru:
        `
    Уклонение и подобные способности не действуют против ваших способностей Метать Снаряды.
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
        `,
        data_ru:
        `
    Существа имеют недостаток в ловкости спасительных бросков против ваших способностей метать Снаряды.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым звуком. Пока эта способность активна, тип урона от вашего вооружения меняется на урон от грома.</p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ваше вооружение отражается, нанося дополнительный урон от грома на 1d4. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон от грома в размере 1d4 и оглушается. В каждый из своих ходов цель может использовать действие для выполнения спасброса Конституция. При успешном завершении этот эффект заканчивается. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте значение сохранения DC на 1.</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Вы создаете звук или манипулируете немагическим звуком в зоне, находящейся в пределах досягаемости и умещающейся в 5-футовом кубе. Выберите один из следующих эффектов:</p><p></p><p>* Вы создаете звук, который длится постоянно. Вы можете отмахнуться от этого как от действия. Громкость может варьироваться от шепота до крика. Звук не ослабевает на протяжении всего времени звучания, или вы можете издавать отдельные звуки в разное время, прежде чем эффект закончится.</p><p>* Вы можете увеличить или уменьшить громкость любых звуков в пределах области. Вы можете уменьшить громкость области до шепота или увеличить до раскатов грома.</p><p>* В пределах области вы можете изменить текущие характеристики существующих звуков, такие как высота звука, текстура, тембр или пространственное расположение. Например, сделайте так, чтобы чей-то голос звучал на октаву выше или ниже, сделайте так, чтобы предмет звучал как кто-то другой, измените звук разговора на шум толпы, или сделайте так, чтобы звуки звучали дальше или ближе, или измените звук инструмента, чтобы он звучал как другой. Любому несогласному существу разрешается сделать спасбросок конституции, чтобы противостоять изменениям.</p><p></p><p>Если вы используете эту способность несколько раз, у вас одновременно может быть активировано только количество ее эффектов, равное вашему бонусу к навыкам.</p><p></p><p>Каждый раз, когда вы повторно используете эту способность, куб увеличивается на 5 футов.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете влиять на магический звук.</p><p>* Увеличьте дистанцию на 10 футов.</p><p>* Увеличьте продолжительность на 1 час.
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
        `,
        data_ru:
        `
    Вы манипулируете звуковыми волнами, чтобы они окружали ваше тело на время действия. Этот звук не причиняет вреда вам или вашему оборудованию. Пока действие способности не закончится, вы получаете следующие преимущества:</p><p>* У вас есть устойчивость к энергетическому урону.</p><p>* Существо, которое касается вас, поражает вас атакой ближнего боя или заканчивает свой ход рядом с вами, получает 1d4 урона от грома. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на одну ступень, максимум до 1d10.</p><p>* В качестве действия вы можете прекратить действие этой способности, рассеяв Звуковой щит мощной очередью. Каждое существо в радиусе 30 футов от вас должно выполнить спасбросок Телосложение. Получает 2d6 урона от грома, или вдвое меньше при успешном спасении. Каждый раз, когда вы повторно выбираете эту способность, дальность действия увеличивается на 5 футов.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Для этой способности больше не требуется концентрация.</p><p>* Теперь вы невосприимчивы к урону от грома. Если вы выберете эту опцию во второй раз, вы невосприимчивы к оглушению.</p><p>* Увеличьте урон от взрыва на 1d6.
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
        `,
        data_ru:
        `
    Из вас вырывается бум-конус звука. Каждое существо в 60-футовом конусе должно совершить спасбросок телосложения. Существо получает 6d6 урона от грома при неудачном спасении или вдвое меньше урона при успешном.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте конус на 5 футов.</p><p>* Увеличьте урон на 1d6.
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
        `,
        data_ru:
        `
    Вы создаете полуфизический звуковой барьер в пределах досягаемости, он может находиться в свободном плавании или на поверхности. Вы можете сделать стену длиной до 60 футов, высотой 20 футов и толщиной 1 фут, кольцевую стену диаметром до 20 футов, высотой 20 футов и толщиной 1 фут или полусферический купол / сферу радиусом 20 футов. Стена полупрозрачна и сохраняется на время действия.</p><p></p><p>Когда появляется стена, каждое существо в пределах своей области должно сделать спасбросок Конституции. При неудачном спасении существо получает 4d6 урона от грома, или вдвое меньше урона при успешном спасении. Вы также можете определить, может ли звук изнутри проникать за пределы стены, или может ли звук снаружи проникать внутрь, или и то, и другое.</p><p></p><p>Любое существо, проходящее сквозь стену, должно сделать спасбросок Конституции. При неудачном спасении они получают 4d6 урона от грома и не проходят насквозь, при успехе они получают половину урона и проходят насквозь.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, увеличивайте урон на 1d6.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте дальность действия, высоту, длину и радиус действия этой способности на 10 футов.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Эта способность больше не требует концентрации.</p><p>* Увеличьте запас постоянного тока на 1.
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
        `,
        data_ru:
        `
    Из вас вырывается какофонический грохот в сфере радиусом 60 футов с центром вокруг вас.</p><p></p><p>Каждое существо в пределах области получает 7d18 урона от грома и должно совершить спасбросок Конституции. </p><p></p><p>При неудачном спасении существо оглушается на 1 минуту и отбрасывается на расстояние до 10 футов, приземляясь ничком. При успешном спасении существо не отбрасывается назад или становится ничком.</p><p>Существо, оглушенное этой способностью, делает еще один спасбросок Конституции в конце каждого из своих ходов. При успешном спасении оно больше не оглушается.</p><p></p><p>Каждый раз, когда вы выбираете эту способность, урон увеличивается на 1d8.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте радиус сферы на 10 футов.</p><p>* Увеличьте значение сохранения постоянного тока на 2.
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
        `,
        data_ru:
        `
    Вы создаете звуковой барьер, который окружает вас. Этот барьер представляет собой 40-футовую сферу, центрированную на вас, этот барьер перемещается вместе с вами. Пока вы активны, вы и союзники получаете следующие преимущества:</p><p>* Вы и союзники на поле боя получаете преимущество в спасбросках против способностей и заклинаний, наносящих энергетический урон.</p><p>* Вы и ваши союзники невосприимчивы к оглушению.</p><p>* Враги, которые начинают или заканчивают свой ход на поле, должны совершить спасбросок Конституция, получив 10d6 урона от грома и оглохнув на 1 минуту, или вдвое меньше урона при успешном спасении.</p><p>* Противники на поле должны совершить спасбросок Конституции. При неудачном спасении, пока они находятся на поле, у них меньше шансов на спасброски.</p><p></p><p>Вы можете выбрать эту способность во второй раз, если вы это сделаете, радиус сферы увеличится вдвое, а размер кубика урона увеличится до d10.
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
        `,
        data_ru:
        `
    Ваши звуковые способности увеличены по мощности.</p><p></p><p>Ваши способности к вооружению или кидо, наносящие урон от грома, игнорируют сопротивление. Если существо невосприимчиво к урону от грома, оно вместо этого получает половину урона.
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
        `,
        data_ru:
        `
    * Когда вы выбираете эту способность, вы должны выбрать Призыв. Для этого выберите любой тип существа с блоком характеристик из Руководства по монстрам (или любого другого ресурса, одобренного вашим мастером) с рейтингом сложности 1/2 или ниже. Любые дополнительные полученные способности к призыву дополняют, изменяют или удаляют из вашего блока характеристик призыва.*</p><p></p><p>Вы бросаете свое вооружение в выбранное вами свободное место в пределах досягаемости, оно преобразуется в ваш Призыв. В ходе действия вы контролируете действие своего Призыва.</p><p></p><p>Хотя ваше вооружение зависит от вашего Призыва, оно приобретает следующие характеристики:</p><p>* К вашему призыву добавляется бонус к навыкам, равный вашему.</p><p>* Любые способности или атаки, которые наносит ваш Призыв, изменяются на урон от вашего базового вооружения.</p><p>* Если ваш Призыв уменьшен до 0 очков жизни, он возвращается обратно в ваше вооружение и падает на землю.</p><p>* У вас не может быть активировано более одного призыва одновременно.</p><p></p><p>Для каждой другой вашей способности призыва продолжительность действия этой способности увеличивается на 1 минуту.</p><p></p><p>Всякий раз, когда вы повышаете уровень и ваш HD увеличивается, ваш уровень призыва увеличивается на единицу.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p></p><p>* Когда вы активируете Призыв, вы получаете копию своего Вооружения</p><p>* Время применения меняется на бонусное действие </p><p>* Для этой способности не требуются компоненты V или S
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
        `,
        data_ru:
        `
    Ваш призыв содержит копию вашего вооружения, если таковое имеется. Однако он не может использовать никакие способности вооружения.
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
        `,
        data_ru:
        `
    Выберите одну из ваших способностей Призыва, она увеличится на 2, или вместо этого вы можете увеличить две способности вашего Призыва на 1.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Ваш призыватель получает бонус к естественной броне в размере 2. Если у него уже есть естественная броня, она увеличивается на 2.
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
        `,
        data_ru:
        `
    Ваш призыв получает два кубика с попаданиями, и его максимальное количество очков жизни увеличивается. Чтобы определить величину увеличения, бросьте кубик, поражающий призыв (тип кубика отображается в блоке характеристик призыва), и добавьте модификатор его конституции.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Выберите один из режимов передвижения вашего призывателя, он увеличивается на 10 футов.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз.
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
        `,
        data_ru:
        `
    Ваш призыв получает одно из следующих чувств:</p><p>* Зрение вслепую на 30 футов.</p><p>* Зрение в темноте на 60 футов.</p><p>* Чувство тремора на 80 футов.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая другое ощущение.
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
        `,
        data_ru:
        `
    Ваш призыв получает один из следующих режимов передвижения:</p><p></p><p>Скорость погружения в нору - 50 футов.</p><p>Скорость набора высоты - 40 футов.</p><p>Скорость полета - 30 футов.</p><p>Скорость плавания - 60 футов.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая другой режим передвижения.
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
        `,
        data_ru:
        `
    Ваш призыв усиливает Истинное Зрение на расстоянии до 30 футов.
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

        `,
        data_ru:
        `
    Выберите одно из перечисленных ниже условий, ваш Призыв невосприимчив к этому условию.</p><p></p><p>Ослеплен, Зачарован, Оглушен, напуган, парализован, окаменел или отравлен.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Выберите другое условие, при котором ваш призыв теперь также невосприимчив.</p><p>* Выберите Сдержанный, Оглушенный или Истощенный, ваш призыв теперь невосприимчив к этому состоянию. Вы должны были выбрать эту способность один раз и обладать пятью другими способностями призыва, прежде чем сможете выбрать этот вариант.
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
        `,
        data_ru:
        `
    Пока ваш Призыв находится в радиусе 100 футов от вас, вы можете общаться с ним телепатически. Кроме того, в качестве бонусного действия вы можете видеть глазами своего Призывателя и слышать то, что слышит он, до начала вашего следующего хода, получая преимущества любых особых чувств, которыми обладает Призыватель. В течение этого времени вы глухи и слепы по отношению к своим собственным чувствам.
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
        `,
        data_ru:
        `
    Ваш призыв восстанавливает 10 очков жизни в начале вашего хода. Выберите тип урона. Если ваш Призыв получил урон выбранного типа с момента вашего последнего хода, эта способность не действует в начале вашего следующего хода.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз увеличивая количество восстановленных очков жизни на 2.
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
        `,
        data_ru:
        `
    когда вы произносите заклинание, нацеленное на вас самих, вы также можете повлиять этим заклинанием на свой Призыв, если он находится в пределах 30 футов от вас.
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
        `,
        data_ru:
        `
    В конце каждого длительного отдыха или когда вы входите в свою вознесенную форму, вы можете повторно выбрать все свои способности к Призыву оружия, при желании выбрав новые.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистой водой. Пока эта способность активна, тип урона, наносимого вашим оружием, изменяется на урон от холода.</p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    С вашего вооружения стекает магическая вода, наносящая дополнительный урон холодом на 1d4. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон холодом на 1d4 и падает ничком. </p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d10.
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
        `,
        data_ru:
        `
    Вы выбираете область немагической воды (твердой, жидкой или газообразной), которую можете видеть в пределах досягаемости и которая помещается в 5-футовый куб. Вы манипулируете ею одним из следующих способов:</p><p></p><p>* Вы мгновенно перемещаете или иным образом изменяете поток воды по своему усмотрению на расстояние до 5 футов в любом направлении. Это движение не обладает достаточной силой, чтобы нанести ущерб.</p><p>* Вы заставляете воду принимать простые формы и анимироваться по вашему указанию. Это изменение длится некоторое время.</p><p>* Вы меняете цвет или непрозрачность воды. Воду необходимо постоянно менять одинаковым образом. Это изменение длится в течение всего срока действия.</p><p>* Вы замораживаете воду при условии, что в ней нет живых существ. Эта замороженная вода может со временем растаять и будет таять.</p><p>* При растапливании льда вода может сохранить свою форму, если это возможно.</p><p>* выпаривайте воду или сублимируйте лед, который расширяется до сферы пара радиусом 30 футов с центром в воде или льду. Этот пар имеет температуру окружающей среды и не наносит повреждений. Сфера растекается по углам, и ее площадь слегка затемняется. Он падает на землю в виде воды через 1 час или до тех пор, пока ветер средней или большей скорости (не менее 10 миль в час) не рассеет его. Если в окружающей среде очень холодно, пар в конце раунда превращается в снег и падает на землю. Если в окружающей среде очень жарко, пар рассеивается в конце раунда.</p><p>* Вы конденсируете пар, в результате чего он падает на землю в виде воды и образует лужу на земле.</p><p>* Вы выпускаете пар, в результате чего он падает на землю в виде снега и образует на земле пятно.</p><p></p><p>Если вы активируете эту способность несколько раз, у вас может быть одновременно активировано только несколько ее не мгновенных эффектов, равных вашему бонусу к навыкам, и вы можете отклонить такой эффект как действие.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, площадь куба, на который вы можете воздействовать, увеличивается на 5 футов.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Теперь вы можете воздействовать на магическую воду.</p><p>- Увеличьте дальность действия на 10 футов.</p><p>- Увеличьте продолжительность на 1 час.
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
        `,
        data_ru:
        `
    Бурлящая вода окружает ваше тело на время действия. Эта вода не причиняет вреда вам или вашему снаряжению. Пока действие способности не закончится, вы получаете следующие преимущества:</p><p>* У вас есть устойчивость к урону от кислоты, огня и ударов дубинкой, и вы уязвимы к урону от молнии. </p><p>* Всякий раз, когда существо находится в пределах 5 футов от вас, вы можете попросить его сделать спасительный бросок. Существо выбирает Силу или Ловкость. При неудачном спасении существо падает ничком.</p><p>* Ваша скорость плавания составляет 40 футов.</p><p>* Вы можете дышать под водой.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p></p><p>- Для этой способности больше не требуются компоненты V или S.</p><p>- Для этой способности больше не требуется концентрация.</p><p>- Вы больше не уязвимы к урону от молнии.
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
        `,
        data_ru:
        `
    До четырех желающих существ в пределах досягаемости получают следующие преимущества:</p><p>* Вы можете передвигаться по любой жидкой поверхности – такой как вода, кислота, грязь, снег, зыбучие пески или лава, – как если бы это была безвредная твердая почва (существа, пересекающие расплавленную лаву, все еще могут получать урон от высокой температуры). Если цель погружена в жидкость, способность поднимает цель на поверхность жидкости со скоростью 60 футов за раунд.</p><p>* Вы можете дышать под водой, пока действие способности не закончится. Пострадавшие существа также сохраняют свой обычный режим дыхания.</p><p>* У вас есть преимущество при спортивных проверках на умение плавать.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Вы можете активировать эту способность в качестве бонусного действия.</p><p>- Увеличьте дальность на 10 футов.</p><p>- Для этой способности больше не требуются компоненты V или S.</p><p>- Эта способность больше не требует концентрации.</p><p>- Увеличьте продолжительность на 1 минуту.</p><p>- Увеличьте количество готовых существ, на которых вы можете нацелиться, на 2.
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
        `,
        data_ru:
        `
    Вы бросаете конденсирующийся водяной шар в существо, находящееся в пределах досягаемости.</p><p>Атакуйте цель на расстоянии. При попадании цель получает 3d8 урона от удара дубинкой.</p><p>Каждый раз, когда вы выбираете эту способность, вы получаете дополнительный шар максимум до четырех. Вы можете направить дополнительные шары в ту же цель или в другую, вы должны сделать отдельный бросок атаки для любого дополнительного мяча.</p><p></p><p>Вы можете выбирать эту опцию несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Для этой способности больше не требуются компоненты V.</p><p>- Дальность действия увеличена на 10 футов.</p><p>- Увеличьте размер кубика урона до d10. Вы должны были выбрать эту возможность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Вы создаете в воображении стену воды на земле в точке, которую можете видеть в пределах досягаемости. Вы можете сделать стену длиной до 30 футов, высотой 10 футов и толщиной 1 фут, или вы можете сделать кольцевую стену диаметром до 20 футов, высотой 20 футов и толщиной 1 фут. Стена исчезает, когда способность заканчивается. Пространство стены представляет собой сложный рельеф.</p><p></p><p>Любая атака оружием дальнего боя, которая попадает в пространство стены, оказывает негативное влияние на бросок атаки, а урон от огня </p><p>уменьшается вдвое, если эффект огня проходит сквозь стену, достигая своей цели. Заклинания и способности, наносящие урон от холода и проходящие сквозь стену, приводят к тому, что участок стены, через который они проходят, намерзает (замораживается участок площадью не менее 5 квадратных футов).</p><p></p><p>Каждая замороженная секция площадью 5 квадратных футов имеет AC 5 и 15 очков жизни. Уменьшение замороженной секции до 0 очков жизни уничтожает ее. Когда секция разрушена, вода стены не заполняет ее.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Увеличьте дальность на 10 футов.</p><p>- Для этой способности больше не требуются компоненты V или S.</p><p>- Для этой способности больше не требуется концентрация.</p><p>- Увеличьте длину, высоту и диаметр стены на 10 футов. Толщина также увеличивается на 1 фут, максимум до 5 футов.
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
        `,
        data_ru:
        `
    Вы вызываете волну воды, которая обрушивается на территорию в пределах досягаемости.</p><p></p><p>Площадь может достигать 30 футов в длину, 10 футов в ширину и 10 футов в высоту. Каждое существо в этой области должно совершить спасбросок на ловкость. При неудачном спасении существо получает 7d10 урона от ударов дубинкой и падает ничком. При успешном спасении существо получает вдвое меньше урона и не падает ничком. Затем вода растекается по земле во всех направлениях, туша незащищенное пламя в его зоне и в радиусе 30 футов от него, и остается в течение следующей минуты.</p><p></p><p>Каждый раз, когда вы выбираете эту способность, увеличивайте максимальную длину, ширину и высоту на 5 футов.</p><p></p><p>Вы можете выбирать эту опцию несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Увеличьте дальность на 10 футов.</p><p>- Для этой способности больше не требуются компоненты V.</p><p>- Увеличьте время пребывания воды в течение 1 минуты.</p><p>- Увеличьте значение сохранения постоянного тока на 1.
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
        `,
        data_ru:
        `
    Стена из воды возникает в выбранной вами точке в пределах досягаемости. Вы можете сделать стену длиной до 60 футов, высотой 60 футов и толщиной 25 футов. Стена прослужит долго.</p><p></p><p>Когда появляется стена, каждое существо в пределах своей зоны получает 7d8 урона от ударов дубинкой.</p><p></p><p>В начале каждого вашего хода после появления стены стена вместе со всеми находящимися в ней существами отодвигается от вас на 25 футов. Любое огромное или меньшее существо внутри стены или в пространство которого стена входит при его движении, должно выполнить бросок с сохранением силы или получить 7d8 урона от удара дубинкой. Существо может получить этот урон только один раз за раунд. В конце хода высота стены уменьшается на 20 футов, а урон, наносимый существами от способности в последующих раундах, уменьшается на 1d8. Когда стена достигает 0 футов в высоту или время действия истекает, действие способности прекращается.</p><p></p><p>Существо, застрявшее в стене, может передвигаться вплавь. Однако из-за силы волны существо должно выполнить успешную проверку силы (Атлетика) по сравнению с сохраненным DC, чтобы вообще двигаться. Если проверка не пройдена, оно не может двигаться. Существо, которое выходит из зоны, падает на землю.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Для этой способности больше не требуются компоненты V или S.</p><p>- Увеличьте продолжительность на 1 раунд.</p><p>- увеличьте длину и высоту стен на 20 футов, а толщину на 5 футов.</p><p>- Увеличьте коэффициент сохранения на 2.
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
        `,
        data_ru:
        `
    Появляется масса воды глубиной 20 футов и кружится в радиусе 30 футов с центром в точке, которую вы можете видеть в пределах досягаемости. Точка должна находиться на земле или в водоеме. Пока действие заклинания не закончится, эта область является труднопроходимой, и любое существо, начинающее там свой ход, должно преуспеть в броске с сохранением силы или получить 10d6 урона от ударов дубинкой и быть оттащенным на 10 футов к центру. Как только существо достигает центра, если оно получает урон, количество попаданий увеличивается на одну ступень, и оно начинает тонуть.</p><p>В качестве действия любое существо в пределах зоны может сделать дополнительный бросок для сохранения силы, однако оно делает это в невыгодном положении. При успешном спасении оно может двигаться.</p><p></p><p>Вы можете выбрать эту способность во второй раз, при этом дальность, продолжительность, глубина и радиус действия удваиваются. Размер кубика урона также увеличивается до d10.
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
        `,
        data_ru:
        `
    Когда вы выбираете эту способность, вы можете выбрать одно из видов оружия ближнего боя из PHB (СТР. 149) в качестве формы оружия. Когда вы активируете эту способность, ваше вооружение меняется на одну из выбранных форм оружия. Находясь в этой форме, ваше текущее оружие теряет свою статистику и получает статистику нового оружия. Если кубики урона вашего вооружения больше, чем у любой из ваших форм оружия, вы можете сохранить за ним больший урон.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая одно из следующих действий:</p><p>- Выберите новую форму оружия.</p><p>- Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Выберите одно из следующих свойств оружия. Ваше вооружение приобретает выбранное свойство оружия.</p><p>* Изящество</p><p>* Легкость</p><p>* Досягаемость</p><p>* Брошенный (10/20)</p><p>* Универсальность (размер кубика урона увеличивается на одну ступень при использовании оружия двумя руками для атаки)</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Выберите дополнительное свойство оружия.</p><p>- Увеличьте оба значения дальности броска на 10 футов. Вы должны выбрать свойство Брошенное оружие, прежде чем сможете выбрать эту опцию.</p><p>- Ваше вооружение сохраняет выбранные свойства оружия, даже если вы используете форму оружия с аналогичными способностями.
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
        `,
        data_ru:
        `
    Ваше вооружение более устойчиво. Если эффект повредит, сломает или уничтожит ваше вооружение без сохранения, вам разрешается сделать спасбросок (за исключением Финального шикай или аналогичного эффекта). При успешном выполнении, сводящем на нет эффект разрушений. Если вам разрешен спасбросок, у вас есть преимущество в этом спасброске.</p><p></p><p>Если эффект увеличивает совокупный штраф к вашему вооружению и будет уничтожен при достижении определенного порога, этот порог удваивается.</p><p></p><p>Если существо попытается обезвредить ваше оружие, которое вы держите в руках, вы можете использовать свою реакцию, чтобы атаковать это существо оружием ближнего боя.
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
        name: `Грань богоубийцы [Godslayer's Edge]`, 
        requirements: 'Две способности оружия*', 
        data:
        `
    Weapon attacks you make with your armament ignore damage resistance to it's damage type.

                                If the subject of your attack would be immune to your armament base damage type, that immunity is instead treated as resistance.
        `,
        data_ru:
        `
    Атаки оружием, которые вы производите своим вооружением, игнорируют сопротивление урону в зависимости от типа урона.</p><p></p><p>Если объект вашей атаки невосприимчив к базовому типу урона вашего вооружения, этот иммунитет вместо этого рассматривается как сопротивление.
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
        `,
        data_ru:
        `
    Вы набираете критическое значение при броске 19 или 20 очков при выполнении бросков атаки оружием с вашим вооружением.</p><p></p><p>Если у вас уже есть подобная способность, количество кубиков дополнительного урона увеличивается.
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
        `,
        data_ru:
        `
    Используя свое вооружение, вы можете добавить бонус к навыкам к броскам урона от атаки оружием с его помощью.
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
        `,
        data_ru:
        `
    Выбрав эту способность, вы можете выбрать одно из перечисленных ниже заклинаний. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>* Кислота - На время действия ваше оружие наносит дополнительный урон кислотой на 1d4.</p><p></p><p>* Пламя - на время действия ваше оружие наносит дополнительный урон от огня 1d4.</p><p></p><p>* Мороз - на время действия ваше оружие наносит дополнительный урон от холода 1d4.</p><p></p><p>* Молния - на время действия ваше оружие наносит дополнительный урон от молнии на 1d4.</p><p></p><p>* Некротический - на время действия ваше оружие наносит дополнительный урон от некроза на 1d4.</p><p></p><p>* Яд - на время действия ваше оружие наносит дополнительный урон ядом на 1d4.</p><p></p><p>* Излучение - на время действия ваше оружие наносит дополнительный урон излучением на 1d4.</p><p></p><p>* Гром - на время действия ваше оружие наносит дополнительный урон от грома на 1d4.</p><p></p><p>* Ветер - на время действия ваше оружие наносит дополнительный урон от силы на 1d4.</p><p></p><p>* Возвращение - когда вы совершаете атаку дальнего боя с использованием этого оружия, сразу после атаки оружие возвращается к вам в руку. Ваше оружие должно обладать свойством Брошенное оружие, прежде чем вы сможете выбрать это заклинание.</p><p></p><p>* Защитник - При первой атаке своим вооружением в каждый из своих ходов вы можете перенести часть или весь бонус к оружию на свой класс брони, вместо того чтобы использовать бонус при любых атаках в этот ход. Например, если у вас есть + 3, вы можете уменьшить бонус к броскам атаки и урона до + 1 и получить + 2 бонуса к AC. Скорректированные бонусы остаются в силе до начала вашего следующего хода, хотя вы должны держать оружие, чтобы получить от него бонус к AC. </p><p></p><p>* Танец - В качестве бонусного действия вы подбрасываете свое оружие в воздух, и оно начинает парить. Вы можете заставить его взлететь на высоту до 30 футов и атаковать одно выбранное вами существо в радиусе 5 футов от него. Оружие использует ваш бросок атаки и модификатор оценки способностей для бросков урона. Пока оружие парит, вы можете использовать бонусное действие, чтобы заставить его пролететь до 30 футов и переместиться в другое место в радиусе 30 футов от вас. В рамках того же бонусного действия вы можете заставить меч атаковать одно существо в радиусе 5 футов от него. В качестве бонусного действия вы можете заставить оружие пролететь до 30 футов, чтобы попытаться вернуться в вашу руку. Если у вас нет свободной руки, он падает на землю к вашим ногам. Он также перестает парить, если вы возьметесь за него или отойдете от него более чем на 60 футов. Вы должны выбрать эту способность один раз, прежде чем сможете использовать это заклинание.</p><p></p><p>* Скорость - Вы можете совершить одну дополнительную атаку этим оружием, когда выполняете атакующее действие. Вы должны выбрать эту способность два раза, прежде чем сможете использовать это Заклинание.</p><p></p><p>* Убийство - Выберите один тип существа (Душа, Баунт, Лощина, Квинси, Человек), когда выбранный тип существа получает урон, существо должно совершить спасбросок Конституции DC 17, получив дополнительный урон 6d8 при неудачном спасении или вдвое меньше дополнительного урона при успешном. Вы должны выбрать эту способность три раза, прежде чем сможете использовать это заклинание.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая другое заклинание.
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
        `,
        data_ru:
        `
    Ваше вооружение становится чистым воздухом. Пока эта способность активна, тип урона, наносимого вашим вооружением, изменяется на урон силой.</p><p></p><p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или S.
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
        `,
        data_ru:
        `
    Ветер бушует в вашем вооружении, нанося дополнительный урон силой 1d4. Вы можете отменить эту способность в качестве бонусного действия.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Вы можете активировать эту способность в качестве бонусного действия и отменить ее по своему желанию.</p><p>* Для этой способности больше не требуются компоненты V или s.</p><p>* Увеличьте размер кубика урона на один шаг, максимум до 1d12.
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
        `,
        data_ru:
        `
    Когда вы наносите критический удар своим оружием, цель получает дополнительный урон силой 1d4 и отбрасывается на 10 футов.</p><p></p><p>Вы можете повторно использовать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>* Увеличьте коэффициент сохранения на 1.</p><p>* Увеличьте размер кубика урона на одну ступень, максимум на 1d10.
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
        `,
        data_ru:
        `
    Вы получаете контроль над воздухом в 5-футовом кубе, который можете видеть в пределах досягаемости. При активации этой способности выберите один из следующих эффектов. Эффект сохраняется до тех пор, пока вы не воспользуетесь своим действием в более позднем ходе для переключения на другой эффект. Вы также можете использовать свое действие для временной остановки эффекта</p><p></p><p>или перезапуска эффекта, который вы остановили.</p><p></p><p>** Порывы. ** Внутри куба поднимается ветер, постоянно дующий в выбранном вами горизонтальном направлении. Вы выбираете интенсивность ветра: спокойный, умеренный или сильный.</p><p></p><p>Если ветер умеренный или сильный, атаки оружием дальнего боя, которые проходят сквозь него или наносятся по целям внутри куба, имеют недостаток в бросках атаки.</p><p></p><p>Если ветер сильный, любое существо, движущееся против ветра, должно тратить 1 дополнительный фут движения на каждую перемещенную ногу.</p><p></p><p>** Нисходящий поток. ** Вы создаете продолжительный порыв сильного ветра, который дует вниз от вершины куба.</p><p>Атаки из оружия дальнего боя, которые проходят через куб или наносятся по целям внутри него, имеют недостаток в бросках атаки.</p><p></p><p>Существо должно выполнить бросок с сохранением силы, если оно впервые влетает в куб на ходу или начинает свой ход с полета. При неудачном спасении существо падает ничком.</p><p></p><p>** Восходящий поток. ** Вы создаете устойчивый восходящий поток внутри куба, поднимающийся вверх от нижнего края куба.</p><p>Существа, завершающие падение внутри куба, получают только половину урона от падения.</p><p></p><p>Когда существо в кубе совершает вертикальный прыжок, оно может подпрыгнуть на 10 футов выше обычного.</p><p></p><p>Каждый раз, когда вы повторно выбираете эту способность, куб увеличивается на 5 футов.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Увеличьте дальность на 10 футов.</p><p>- Увеличьте продолжительность на 1 час.</p><p>- Когда вы выбираете порыв ветра, вы можете выбрать два разных направления.</p><p>- Нисходящий поток также влияет на нелетающих существ.</p><p>- Когда существо завершает падение в восходящем потоке, оно не получает урона при падении. Если существо прыгает в пределах восходящего потока, высота его прыжка увеличивается вдвое.</p><p>- Вы можете активировать эту способность в качестве бонусного действия. Если вы выберете эту опцию во второй раз, вы можете активировать эту способность в качестве реакции, но можете выбрать опцию восходящего потока только в том случае, если вы это сделаете.
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
        `,
        data_ru:
        `
    Пока действие способности не закончится, вокруг вас кружится ветер, и вы получаете следующие преимущества:</p><p></p><p>* Атаки оружием, нанесенные против вас, уменьшают бросок атаки.</p><p>* Вы увеличиваете скорость полета на 10 футов. Если вы все еще летите, когда действие заклинания заканчивается, вы падаете, если только не сможете каким-то образом предотвратить это.</p><p>* Любое существо, которое впервые приближается к вам на расстояние 5 футов во время хода или заканчивает свой ход там, получает 1d4 силового урона. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг максимум до 1d10.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p></p><p>- Эта способность больше не требует компонентов V или S.</p><p>- Эта способность больше не требует концентрации.</p><p>- Вы можете выбрать, наносит ли эта способность урон существам или нет.
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
        `,
        data_ru:
        `
    Вы запускаете серповидный клинок ветра в существо, находящееся в пределах досягаемости.</p><p>Атакуйте цель на расстоянии. При попадании цель получает урон силой 3d8.</p><p></p><p>Каждый раз, когда вы выбираете эту способность, вы получаете дополнительный клинок максимум к четырем клинкам. Вы можете направить дополнительные клинки на ту же цель или на другую, вы должны сделать отдельный бросок атаки для любых дополнительных клинков.</p><p></p><p>Вы можете выбирать эту опцию несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Для этой способности больше не требуются компоненты V.</p><p>- Дальность действия увеличена на 10 футов.</p><p>- Увеличьте размер кубика урона до d10. Вы должны были выбрать эту возможность четыре раза, прежде чем сможете выбрать эту опцию.
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
        `,
        data_ru:
        `
    Линия сильного ветра длиной 60 футов и шириной 10 футов дует от вас в выбранном вами направлении. Каждое существо в линии должно сделать бросок с сохранением силы. Существо получает 6d6 силового урона при неудачном спасении и будет отброшено на 15 футов от вас в направлении, следующем за линией, или вдвое меньше урона при успешном спасении и не будет отброшено назад.</p><p></p><p>Ветер рассеивает газ или пар и гасит свечи, факелы и подобные незащищенные очаги пламени в этом районе. Это заставляет защищенное пламя, например, фонарей, бешено плясать и имеет 80-процентный шанс погасить его.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Для этой способности больше не требуются компоненты V.</p><p>- Увеличьте длину на 10 футов.</p><p>- Увеличьте урон на 1d6.</p><p>- Увеличьте дальность, на которой существа отбрасываются назад еще на 5 футов.
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
        `,
        data_ru:
        `
    Вы вызываете бушующий торнадо в точке, которую видите на земле в пределах досягаемости, эта область должна соответствовать торнадо, иначе эта способность не срабатывает. Торнадо представляет собой цилиндр радиусом 40 футов и высотой 80 футов с центром в этой точке. До тех пор, пока по окончании действия способности вы можете использовать свое действие, чтобы переместить торнадо на высоту до 30 футов в любом направлении по земле.</p><p></p><p>Торнадо засасывает любые предметы среднего или меньшего размера, которые ни к чему не прикреплены и которые никто не носит и не переносит. Существо должно совершить силовой бросок в первый раз за ход, когда оно попадает в торнадо или когда торнадо входит в его пространство, в том числе при первом появлении торнадо. Существо получает 7d8 силового урона при неудачном спасении или вдвое меньше урона при успешном. Кроме того, крупное или меньшее существо, которому не удается сохранить силу, должно успешно выполнить бросок с сохранением Силы или оказаться связанным в вихре до окончания действия заклинания. Когда существо начинает свой ход, сдерживаемое вихрем, существо затягивается в него на 5 футов выше, если только оно не находится наверху, и получает дополнительный урон силой 7d8 за каждый ход внутри торнадо.</p><p></p><p>Связанное существо движется вместе с вихрем и падает по окончании его действия, если только у существа нет каких-либо средств удержаться в воздухе. Связанное существо может использовать действие, чтобы проверить Силу или Ловкость в соответствии с сохраненным DC. В случае успеха вихрь больше не удерживает существо и отбрасывает его на расстояние 3d6 × 10 футов в случайном направлении.</p><p></p><p>Эта способность наносит урон сооружениям в радиусе действия. Если строение теряет 0 очков жизни, оно разрушается, и его куски автоматически разлетаются за пределы зоны действия торнадо, потенциально нанося урон ближайшим существам. Любое существо в радиусе 30 футов от торнадо, когда внутри него рушится конструкция, должно совершить спасительный бросок на Ловкость. При неудачном спасении существо получает 4d8 урона от ударов дубинкой и падает ничком. При успешном спасении существо получает половину урона и не падает ничком.</p><p></p><p>\Разрыв страницы</p><p></p><p>Это также увеличивает урон, который потенциально могут получить любые существа, на 2d6 урона от ударов дубинкой и 2d6 рубящего урона.</p><p></p><p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p><p>- Для этой способности больше не требуются компоненты V или S.</p><p>- Увеличьте продолжительность на 1 раунд.</p><p>- увеличьте радиус и высоту на 10 футов.</p><p>- Увеличьте постоянный ток сохранения на 1.
        `
    },
    {
        type: tp.wind,
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
        name: 'Ураган [Hurricane] (Ascended)', 
        requirements: 'Шесть воздушных способностей', 
        data:
        `
    You conjure a deadly and devastating storm that descends from the sky. A 60-foot radius, and 60-foot tall cylinder appears centered on you. You are unaffected by your own Hurricane. The ability fails if you can't see a point in the sky where the storm can descend from (for example, if you are in a room that can't accommodate the storm).

                                Within the storm, all ranged attacks and spells always miss their target, being swept away from the raging winds. Vision is lightly obscured, the terrain is difficult, and other creatures have disadvantage on concentration checks.

                                Within the storm you have a fly speed of 60 feet and take no damage from the storm itself, however you can still take damage from flying debris, but you have advantage on dexterity saving throws to avoid debris within the storm.

                                When the storm appears, small and smaller creatures are instantly swept away from the winds. Medium and large creatures must make a Strength saving throw, on a failed save they are swept away from the winds. Huge and larger creatures must make a Strength saving throw with advantage, on a failed save they are swept away by the winds.
                                If a creature begins its turn within the storm they must make a Strength saving throw, taking 10d6 force damage, or half as much on a successful save. If a creature has been swept away by the winds, they have disadvantage on the saving throw.

                                These raging winds also deal damage to structures within the area. If a structure drops to 0 hit points, it collapses and pieces of the structure are swept by the winds increasing the damage creatures and structures take within the storm by 4d6 bludgeoning damage and 4d6 slashing damage. Each structure that collapses within the area further increases the damage the same amount.

                                A creature that has been swept away by the storm are flung randomly closer to the eye of the storm, or away from the eye by 4d6 x 10 feet. A creature that has been swept away by the storm can spend a bonus action to make a dexterity saving throw against the save DC. On a success, they can control the direction they move in.

                                The eye of the storm is 1/4 the size of the storm and none of the effects of the storm are active within it.

                                You may reselect this ability a second time, if you do the size of the area is doubled.
        `,
        data_ru:
        `
    Вы вызываете смертоносный и разрушительный шторм, который обрушивается с неба. В центре вас появляется цилиндр радиусом 60 футов и высотой 60 футов. На вас не влияет ваш собственный ураган. Способность не срабатывает, если вы не видите точку в небе, откуда может обрушиться буря (например, если вы находитесь в комнате, которая не может вместить бурю).</p><p></p><p>Во время шторма все дальние атаки и заклинания всегда попадают мимо цели, уносимые бушующими ветрами. Зрение слегка затуманено, местность сложная, а у других существ меньше возможностей для проверки концентрации.</p><p></p><p>Во время шторма вы летите со скоростью 60 футов и не получаете урона от самого шторма, однако вы все еще можете получать урон от летящих обломков, но у вас есть преимущество в спасительных бросках на ловкость, чтобы избегать попадания обломков в шторм.</p><p></p><p>Когда начинается шторм, маленькие существа мгновенно уносятся ветром. Средние и крупные существа должны сделать силовой бросок, при неудачном спасении они уносятся ветром. Огромные существа должны с преимуществом совершить силовой бросок, при неудачном сейве их уносит ветром.</p><p>Если существо начинает свой ход во время шторма, оно должно совершить бросок с сохранением силы, получив 10d6 силового урона или вдвое меньше при успешном спасении. Если существо было унесено ветром, оно теряет преимущество при спасброске.</p><p></p><p>Эти бушующие ветры также наносят урон строениям в пределах области. Если строение падает до 0 очков жизни, оно разрушается, и куски строения уносятся ветром, увеличивая урон, наносимый существами и сооружениями во время шторма, на 4d6 урона от ударов дубинкой и 4d6 рубящего урона. Каждое разрушающееся сооружение в пределах данной области еще больше увеличивает урон на ту же величину.</p><p></p><p>Существо, унесенное штормом, случайным образом отбрасывается ближе к эпицентру шторма или от него на расстояние 4d6 x 10 футов. Существо, унесенное штормом, может потратить бонусное действие, чтобы совершить спасбросок на ловкость против спасенного DC. В случае успеха оно может контролировать направление своего движения.</p><p></p><p>Глаз бури составляет 1/4 размера шторма, и ни одно из эффектов шторма в нем не действует.</p><p></p><p>Вы можете повторно выбрать эту способность во второй раз, в этом случае размер области увеличится вдвое.
        `
    },
    {
        type: tp.wind,
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
        name: 'Пронзительные ветры [Piercing Winds] (Ascended)', 
        requirements: 'Шесть воздушных способностей', 
        data:
        `
    Your Wind abilities are increased in power.

                                Your armament abilities or Kido that deal force damage ignore resistances. If a creature would be immune to force damage, it instead takes half damage.
        `,
        data_ru:
        `
    Ваши способности к ветру увеличены по мощности.</p><p></p><p>Ваши способности к вооружению или кидо, наносящие силовой урон, игнорируют сопротивление. Если существо невосприимчиво к силовому урону, оно вместо этого получает половину урона.
        `
    }
]