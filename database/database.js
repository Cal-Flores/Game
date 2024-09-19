const database = [
    {
        name: 'Chrollo',
        nen_type: 'Specialist',
        element: 'Water',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: .50,
        hp: 1200,
        strength: 12,
        potency: 2,
        buff: 'Switch One stat with Opponents stat',
        buff_acc: 30,
        elm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/7/78/Chrollo_Lucilfer_GI_Portrait.png/revision/latest?cb=20130502190618'
    },
    {
        name: 'Hisoka',
        nen_type: 'Transmutter',
        element: 'Fire',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: .50,
        hp: 1200,
        strength: 2,
        potency: 2,
        buff: 'Increase Strength by 50%',
        buff_acc: 20,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/2/29/Hisoka_Morow_YC_Portrait.png/revision/latest?cb=20190123172039'
    },
    {
        name: 'Feitan',
        nen_type: 'Conjuror',
        element: 'Lightning',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411389_960_720.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/8/86/HxH2011_EP50_Feitan_Portrait.png/revision/latest?cb=20230121061055'
    },
    {
        name: 'Phinks',
        nen_type: 'Enhancer',
        element: 'Earth',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dg6y60w-e2cc91b4-e3a5-41bb-ae2a-b16840b55f1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGc2eTYwdy1lMmNjOTFiNC1lM2E1LTQxYmItYWUyYS1iMTY4NDBiNTVmMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbgEEM5bpyitgDPI2p4J57aQL2MhoE6AmIimDIGoqxU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/8/88/HxH2011_EP41_Phinks_Portrait.png/revision/latest?cb=20221008055432'
    },
    {
        name: 'Machi',
        nen_type: 'Manipulator',
        element: 'Fire',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/4/4c/Machi_Komacine_HA_Portrait.png/revision/latest?cb=20131116122706'
    },
    {
        name: 'Shizuku',
        nen_type: 'Conjuror',
        element: 'Wind',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dfqnx68-7fe93ac3-842b-4884-8e62-b8f60a4611f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGZxbng2OC03ZmU5M2FjMy04NDJiLTQ4ODQtOGU2Mi1iOGY2MGE0NjExZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YhuFxSx0nTcNbc7JJB74NP8mzfASk6vSJHIEXLWEfAg',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/9/9e/HxH2011_EP53_Shizuku_Portrait.png/revision/latest?cb=20230122061315'
    },
    {
        name: 'Shalnark',
        nen_type: 'Manipulator',
        element: 'Water',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/c/c3/HxH2011_EP53_Shalnark_Portrait.png/revision/latest?cb=20221008053250'
    },
    {
        name: 'Nobunaga',
        nen_type: 'Enhancer',
        element: 'Wind',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dfqnx68-7fe93ac3-842b-4884-8e62-b8f60a4611f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGZxbng2OC03ZmU5M2FjMy04NDJiLTQ4ODQtOGU2Mi1iOGY2MGE0NjExZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YhuFxSx0nTcNbc7JJB74NP8mzfASk6vSJHIEXLWEfAg',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/4/46/HxH2011_EP50_Nobunaga_Portrait.png/revision/latest?cb=20230122183803'
    },
    {
        name: 'Uvogin',
        nen_type: 'Enhancer',
        element: 'Earth',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dg6y60w-e2cc91b4-e3a5-41bb-ae2a-b16840b55f1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGc2eTYwdy1lMmNjOTFiNC1lM2E1LTQxYmItYWUyYS1iMTY4NDBiNTVmMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbgEEM5bpyitgDPI2p4J57aQL2MhoE6AmIimDIGoqxU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/6/60/HxH2011_EP41_Uvogin_Portrait.png/revision/latest?cb=20230122192913'
    },
    {
        name: 'Pakunoda',
        nen_type: 'Specialist',
        element: 'Water',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/d/da/Pakunoda_YC_Portrait.png/revision/latest?cb=20190124184929'
    },
    {
        name: 'Franklin',
        nen_type: 'Manipulator',
        element: 'Earth',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dg6y60w-e2cc91b4-e3a5-41bb-ae2a-b16840b55f1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGc2eTYwdy1lMmNjOTFiNC1lM2E1LTQxYmItYWUyYS1iMTY4NDBiNTVmMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbgEEM5bpyitgDPI2p4J57aQL2MhoE6AmIimDIGoqxU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/6/62/HxH2011_EP58_Franklin_Portrait.png/revision/latest?cb=20230122063251'
    },
    {
        name: 'Bonolenov',
        nen_type: 'Transmutter',
        element: 'Wind',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dfqnx68-7fe93ac3-842b-4884-8e62-b8f60a4611f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGZxbng2OC03ZmU5M2FjMy04NDJiLTQ4ODQtOGU2Mi1iOGY2MGE0NjExZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YhuFxSx0nTcNbc7JJB74NP8mzfASk6vSJHIEXLWEfAg',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/f/fc/HxH2011_EP96_Bonolenov_Portrait.png/revision/latest?cb=20230123153232'
    },



    {
        name: 'Meruem',
        nen_type: 'Specialist',
        element: 'Water',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/5/58/Meruem_CA_Portrait.png/revision/latest?cb=20190419124312'
    },
    {
        name: 'Neferopitou',
        nen_type: 'Transmutter',
        element: 'Fire',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/2/20/109_-_Neferpitou_portrait.png/revision/latest?cb=20131218034405'
    },
    {
        name: 'Menthuthuyoupi',
        nen_type: 'Conjuror',
        element: 'Lightning',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgddau-db28e6e7-1305-45bd-b361-a80249a95e6c.png/v1/fill/w_894,h_894/lightning_type_symbol_tcg_by_jormxdos_dfgddau-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnZGRhdS1kYjI4ZTZlNy0xMzA1LTQ1YmQtYjM2MS1hODAyNDlhOTVlNmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.If8icCJc-MGpXVBsgljwsFh-uQ6Ap06jcGL8TJ8lOlU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/7/79/109_-_Menthuthuyoupi_portrait.png/revision/latest?cb=20131218033843'
    },
    {
        name: 'Phinks',
        nen_type: 'Enhancer',
        element: 'Earth',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dg6y60w-e2cc91b4-e3a5-41bb-ae2a-b16840b55f1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGc2eTYwdy1lMmNjOTFiNC1lM2E1LTQxYmItYWUyYS1iMTY4NDBiNTVmMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbgEEM5bpyitgDPI2p4J57aQL2MhoE6AmIimDIGoqxU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/8/88/HxH2011_EP41_Phinks_Portrait.png/revision/latest?cb=20221008055432'
    },
    {
        name: 'Machi',
        nen_type: 'Manipulator',
        element: 'Fire',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/4/4c/Machi_Komacine_HA_Portrait.png/revision/latest?cb=20131116122706'
    },
    {
        name: 'Shizuku',
        nen_type: 'Conjuror',
        element: 'Wind',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dfqnx68-7fe93ac3-842b-4884-8e62-b8f60a4611f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGZxbng2OC03ZmU5M2FjMy04NDJiLTQ4ODQtOGU2Mi1iOGY2MGE0NjExZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YhuFxSx0nTcNbc7JJB74NP8mzfASk6vSJHIEXLWEfAg',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/9/9e/HxH2011_EP53_Shizuku_Portrait.png/revision/latest?cb=20230122061315'
    },
    {
        name: 'Shalnark',
        nen_type: 'Manipulator',
        element: 'Water',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/c/c3/HxH2011_EP53_Shalnark_Portrait.png/revision/latest?cb=20221008053250'
    },
    {
        name: 'Nobunaga',
        nen_type: 'Enhancer',
        element: 'Wind',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dfqnx68-7fe93ac3-842b-4884-8e62-b8f60a4611f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGZxbng2OC03ZmU5M2FjMy04NDJiLTQ4ODQtOGU2Mi1iOGY2MGE0NjExZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YhuFxSx0nTcNbc7JJB74NP8mzfASk6vSJHIEXLWEfAg',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/4/46/HxH2011_EP50_Nobunaga_Portrait.png/revision/latest?cb=20230122183803'
    },
    {
        name: 'Uvogin',
        nen_type: 'Enhancer',
        element: 'Earth',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dg6y60w-e2cc91b4-e3a5-41bb-ae2a-b16840b55f1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGc2eTYwdy1lMmNjOTFiNC1lM2E1LTQxYmItYWUyYS1iMTY4NDBiNTVmMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbgEEM5bpyitgDPI2p4J57aQL2MhoE6AmIimDIGoqxU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/6/60/HxH2011_EP41_Uvogin_Portrait.png/revision/latest?cb=20230122192913'
    },
    {
        name: 'Pakunoda',
        nen_type: 'Specialist',
        element: 'Water',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/d/da/Pakunoda_YC_Portrait.png/revision/latest?cb=20190124184929'
    },
    {
        name: 'Franklin',
        nen_type: 'Manipulator',
        element: 'Earth',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dg6y60w-e2cc91b4-e3a5-41bb-ae2a-b16840b55f1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGc2eTYwdy1lMmNjOTFiNC1lM2E1LTQxYmItYWUyYS1iMTY4NDBiNTVmMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbgEEM5bpyitgDPI2p4J57aQL2MhoE6AmIimDIGoqxU',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/6/62/HxH2011_EP58_Franklin_Portrait.png/revision/latest?cb=20230122063251'
    },
    {
        name: 'Bonolenov',
        nen_type: 'Transmutter',
        element: 'Wind',
        attack: 255,
        defense: 255,
        elm_attack: 255,
        elm_defense: 255,
        elm_efficiency: 100,
        critical: 100,
        hp: 1200,
        strength: 2,
        potency: 2,
        elm: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/dfqnx68-7fe93ac3-842b-4884-8e62-b8f60a4611f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGZxbng2OC03ZmU5M2FjMy04NDJiLTQ4ODQtOGU2Mi1iOGY2MGE0NjExZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YhuFxSx0nTcNbc7JJB74NP8mzfASk6vSJHIEXLWEfAg',
        image: 'https://static.wikia.nocookie.net/hunterxhunter/images/f/fc/HxH2011_EP96_Bonolenov_Portrait.png/revision/latest?cb=20230123153232'
    }
];
