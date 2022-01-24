// const imgData = [
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18011/original/DiamondMiniStuds_Earrings_YG_hero_1620.jpg?1605898798",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/10937/original/2020_PDPrefresh_Diamonds_Jenai-diamond_stud_solo_2.jpg?1587593742",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18049/original/SingleColoredMiniHoop_earring_yg_WhiteSapphire_hero_0981.jpg?1605898875",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7458/original/Nicole_-_04.09.19-079.jpg?1555006935",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18051/original/SingleMiniHoop_Earrings_YG_Hero_2544.jpg?1605898879",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/6048/original/October_19_-_Studio-0155.jpg?1542037909",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19328/original/PaveDiamondCartilage_earrings_yg_hero.jpg?1614802346",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19382/original/2_StudCartilage_Earring_YG_Rich_STACK2_3337.jpg?1614979992",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19633/original/Charlotte_large_hoops_v_hero.jpg?1617115986",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20391/original/CharlotteHoops_earring_v_med_hero_00224.jpg?1623948295",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18913/original/StatementPearl_hoops_earrings_v_hero.jpg?1610738756",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18917/original/StatementPearls_hoops_rich_hero.jpg?1610742461",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18383/original/0_CroissantDomeHoops_earring_v_hero_comp.jpg?1635171067",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/8617/original/1_CroissantDomeHoops_V_Rich_HERO_0891.jpg?1635171086",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18347/original/0_BoldHoops_earring_yg_hero_comp1.jpg?1635172403",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/6056/original/1_BoldHoops_YG_Rich_HERO_0795.jpg?1635172415",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22870/original/0_BeadedHoops_earring_YG_hero_comp.jpg?1637317321",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22871/original/1_BeadedHoops_earring_YG_solo_rich.jpg?1637317335",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17049/original/Signet_ring_yg_hero.jpg?1605794461",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/10923/original/Truth-05-01-19-minisignetring-.jpg?1587307180",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/16912/original/Heirloom_ring_Garnet_yg_hero.jpg?1605794195",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22885/original/1_HeirloomRing_Garnet_solo_fair.jpg?1637319738",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/16705/original/Beaded_ring_yg_hero_2015.jpg?1605793798",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7097/original/Ayan_-_03.15.19_-_073.jpg?1553197926",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18587/original/Snake_ring_yg_hero0394.jpg?1606424362",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/9135/original/2019-10-07_The_Menagerie-Product-14k_Snake_Ring-Single.jpg?1569857519",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22852/original/3_BoldChain_Ring_8_YG_Hero.jpg?1637090611",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22847/original/October_22_-_Studio_-_0225.jpg?1637080496",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17019/original/PaveDiamondSlimSignet_ring_yg_hero.jpg?1605794402",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/13168/original/Pave_ring_gold_onfig1.jpg?1593469726",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22418/original/0_ThinDome_Ring_YG_Hero.jpg?1635199670",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20096/original/5_ThinDomeRing_YGg.jpg?1621277410",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22448/original/0_CroissantDome_Ring_V_Hero.jpg?1635201354",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22449/original/1_CroissantDomeRing_YG_Fair_HERO_0188.jpg?1635201366",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17019/original/PaveDiamondSlimSignet_ring_yg_hero.jpg?1605794402",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/13168/original/Pave_ring_gold_onfig1.jpg?1593469726",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18132/original/DiamondLine_Necklace_yg_hero-0303.jpg?1605987711",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/6022/original/October_22_-_Studio_-_0250.jpg?1542036788",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18042/original/0_PaveDiamondBoldHoops_earring_yg_hero_comp.jpg?1635172905",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/13172/original/1_PaveDiamondBoldHoops_YG_Fair_HERO_0343.jpg?1635172937",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/16805/original/DiamondBeaded_ring_yg_hero_0370.jpg?1605793993",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/3475/original/October_19_-_Studio-0053_copy.jpg?1542037348",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/16833/original/DiamondsOpen_ring_yg_hero.jpg?1605794045",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/1898/original/October_19_-_Studio-0075_copy.jpg?1542036790",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19744/original/Wishbone_ring_yg_pair_larger.jpg?1618248029",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19695/original/1.jpg?1617389631",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18425/original/Diamond_Necklace_yg_Hero-0126.jpg?1606338357",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7143/original/Ayan_-_03.15.19_-_181.jpg?1553200345",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20463/original/0_Mini_Pave%CC%81_Diamond_Round_Necklace_yg_hero.jpg?1625087031",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20472/original/1_Mini_Pave%CC%81_Diamond_Round_Necklace_14k_fair_hero_1506.jpg?1625249723",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19054/original/RoundCut_earrings_yg_hero.jpg?1611959111",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/19057/original/RoundCut_Earring_YG_Fair_STACK_3.jpg?1611959186",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20105/original/SoloDiamond_bracelet_yg_hero_%281%29.jpg?1621355067",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20098/original/October_19_-_Studio-0204.jpg?1621354377",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/16893/original/EternityBand_Ring_yg_hero_.jpg?1605794157",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/5539/original/EngagementOnModel-Sep_26_2018-089.jpg?1538774751",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17074/original/SoloDiamond_ring_yg_hero.jpg?1605794512",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/5859/original/October_19_-_Studio-0164.jpg?1540933805",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/16947/original/LetterCharm_A_YG_HERO.jpg?1605794263",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/14749/original/Letter_Charm_YG_rich_hero.jpg?1598307499",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20067/original/0_Diamond_Letter_bracelet_yg_A_hero.jpg?1620937421",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20068/original/1_Diamond_Letter_bracelet_yg_on-fig_rich_hero_00705.jpg?1620937443",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21671/original/LargeDiamond_Necklace_yg_hero-0288.jpg?1633615882",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21672/original/2020-05-04_Large_Diamond_Cherelle-0037.jpg?1633615885",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17150/original/Twist_ring_yg_hero_0195.jpg?1605794672",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7102/original/Wynn_-_03.14.19_-_054.jpg?1553198173",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18454/original/SapphireChoker_Necklace_v_hero-0142.jpg?1606401742",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7150/original/Wynn_-_03.14.19_-_030.jpg?1553200710",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17238/original/Stacker_ring_yg_hero0371.jpg?1605820980",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/4795/original/October_19_-_Studio-0048_copy.jpg?1542036948",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21177/original/Lotus_Bracelet_V_Hero.jpg?1631659763",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7177/original/Ayan_-_03.15.19_-_107.jpg?1553202934",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20194/original/0_OpalCabochonStuds_earrings_yg_hero_Comp_V3.jpg?1622668830",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20270/original/2_OpalCabochonStuds_yg_rich_stack_317.jpg?1623158892",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21572/original/BoldLinkChain_Necklace_v_hero-0328.jpg?1633089298",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21573/original/2019-12-09_PDP_Wider_Boyfriend_ST_Bali-0078.jpg?1633089300",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21696/original/Chain_Necklace_yg_Hero-0080.jpg?1633704794",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21697/original/Truth-05-01-19-chainnecklace.jpg?1633704796",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22708/original/BoyfriendBold_Necklace_yg_Hero-0076.jpg?1635967018",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22709/original/OnModelProduct-Sep_05_2018-115.jpg?1635967019",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7102/original/Wynn_-_03.14.19_-_054.jpg?1553198173",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/18454/original/SapphireChoker_Necklace_v_hero-0142.jpg?1606401742",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7150/original/Wynn_-_03.14.19_-_030.jpg?1553200710",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/17238/original/Stacker_ring_yg_hero0371.jpg?1605820980",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/4795/original/October_19_-_Studio-0048_copy.jpg?1542036948",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21177/original/Lotus_Bracelet_V_Hero.jpg?1631659763",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/7177/original/Ayan_-_03.15.19_-_107.jpg?1553202934",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20194/original/0_OpalCabochonStuds_earrings_yg_hero_Comp_V3.jpg?1622668830",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/20270/original/2_OpalCabochonStuds_yg_rich_stack_317.jpg?1623158892",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21572/original/BoldLinkChain_Necklace_v_hero-0328.jpg?1633089298",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21573/original/2019-12-09_PDP_Wider_Boyfriend_ST_Bali-0078.jpg?1633089300",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21696/original/Chain_Necklace_yg_Hero-0080.jpg?1633704794",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/21697/original/Truth-05-01-19-chainnecklace.jpg?1633704796",
//     "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_650/https://static.mejuri.com/legacy-front/production/system/spree/products/22708/original/BoyfriendBold_Necklace_yg_Hero-0076.jpg?1635967018",
    
// ]

// const namesData = [
//     "Diamond Mini Studs",
//     "Single Colored Mini Hoop",
//     "Single Mini Hoop",
//     "Cartilage Pavé Diamond Mini Hoop",
//     "Large Charlotte Hoops",
//     "Bold Pearl Hoop Earrings",
//     "Croissant Dôme Hoops",
//     "Bold Hoops",
//     "Beaded Hoops",
//     "Signet Ring",
//     "Heirloom Ring",
//     "Beaded Ring",
//     "Snake Ring",
//     "Bold Chain Ring",
//     "Pavé Diamond Slim Signet",
//     "Thin Dôme Ring",
//     "Croissant Dôme Ring",
//     "Pavé Diamond Slim Signet",
//     "Diamonds Line Necklace",
//     "Pavé Diamond Bold Hoops",
//     "Diamond Beaded Ring",
//     "Diamonds Open Ring",
//     "Wishbone Stacker Set",
//     "Diamond Necklace",
//     "Pavé Diamond Round Necklace",
//     "Round Diamond Studs",
//     "Solo Diamond Bracelet",
//     "Eternity Band",
//     "Solo Diamond Ring",
//     "Diamond Letter Pendant",
//     "Diamond Letter Bracelet",
//     "Large Diamond Necklace",
//     "Twist Ring",
//     "Sapphire Choker",
//     "Stacker Ring",
//     "Lotus Bracelet",
//     "Opal Cabochon Studs",
//     "Bold Link Chain Necklace",
//     "Chain Necklace",
//     "Boyfriend Bold Chain Necklace",
//     "Slim Rectangular Signet Ring",
//     "Curb Chain Necklace",
//     "Square Box Chain Bracelet",
//     "Round Box Chain Necklace",
//     "Flat Curb Chain Necklace",
//     "Round Box Chain Bracelet",
//     "Curb Chain Bracelet",
//     "Diamond Mini Studs",
//     "Single Colored Mini Hoop",
//     "Single Mini Hoop",
//     "Cartilage Pavé Diamond Mini Hoop",
//     "Large Charlotte Hoops",
//     "Bold Pearl Hoop Earrings",
//     "Croissant Dôme Hoops",
//     "Bold Hoops",
//     "Beaded Hoops",
//     "Signet Ring",
//     "Heirloom Ring",
//     "Beaded Ring",
//     "Snake Ring",
//     "Bold Chain Ring",
//     "Pavé Diamond Slim Signet",
//     "Thin Dôme Ring",
//     "Croissant Dôme Ring",
//     "Pavé Diamond Slim Signet",
//     "Diamonds Line Necklace",
//     "Pavé Diamond Bold Hoops",
//     "Diamond Beaded Ring",
//     "Diamonds Open Ring",
//     "Wishbone Stacker Set",
//     "Diamond Necklace",
//     "Pavé Diamond Round Necklace",
//     "Round Diamond Studs",
//     "Solo Diamond Bracelet",
//     "Eternity Band",
//     "Solo Diamond Ring",
//     "Diamond Letter Pendant",
//     "Diamond Letter Bracelet",
//     "Large Diamond Necklace",
//     "Twist Ring",
//     "Sapphire Choker",
//     "Stacker Ring",
//     "Lotus Bracelet",
//     "Opal Cabochon Studs",
//     "Bold Link Chain Necklace",
//     "Chain Necklace",
//     "Boyfriend Bold Chain Necklace",
//     "Slim Rectangular Signet Ring",
//     "Curb Chain Necklace",
//     "Square Box Chain Bracelet",
//     "Round Box Chain Necklace",
//     "Flat Curb Chain Necklace",
//     "Round Box Chain Bracelet",
//     "Curb Chain Bracelet"
// ]

// const priceData = [
//     "240",
//     "60",
//     "30",
//     "175",
//     "125",
//     "90",
//     "75",
//     "160",
//     "150",
//     "205",
//     "550",
//     "85",
//     "325",
//     "230",
//     "385",
//     "295",
//     "75",
//     "385",
//     "310",
//     "495",
//     "205",
//     "175",
//     "375",
//     "300",
//     "300",
//     "530",
//     "225",
//     "975",
//     "205",
//     "195",
//     "295",
//     "995",
//     "80",
//     "65",
//     "75",
//     "70",
//     "160",
//     "110",
//     "160",
//     "285",
//     "145",
//     "225",
//     "65",
//     "595",
//     "550",
//     "395",
//     "175",
//     "240",
//     "60",
//     "30",
//     "175",
//     "125",
//     "90",
//     "75",
//     "160",
//     "150",
//     "205",
//     "550",
//     "85",
//     "325",
//     "230",
//     "385",
//     "295",
//     "75",
//     "385",
//     "310",
//     "495",
//     "205",
//     "175",
//     "375",
//     "300",
//     "300",
//     "530",
//     "225",
//     "975",
//     "205",
//     "195",
//     "295",
//     "995",
//     "80",
//     "65",
//     "75",
//     "70",
//     "160",
//     "110",
//     "160",
//     "285",
//     "145",
//     "225",
//     "65",
//     "595",
//     "550",
//     "395",
//     "175"
// ]

// const typeData = [
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, White Sapphire",
//     "14k Yellow Gold, Diamond",
//     "Gold Vermeil",
//     "Gold Vermeil, Pearl",
//     "Gold Vermeil",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold",
//     "Gold Vermeil",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "Gold Vermeil, White Sapphire",
//     "Gold Vermeil, White Sapphire",
//     "14k Yellow Gold, Opal",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "Titanium",
//     "Titanium",
//     "Sterling Silver",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "Titanium",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, White Sapphire",
//     "14k Yellow Gold, Diamond",
//     "Gold Vermeil",
//     "Gold Vermeil, Pearl",
//     "Gold Vermeil",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold",
//     "Gold Vermeil",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "Gold Vermeil, White Sapphire",
//     "Gold Vermeil, White Sapphire",
//     "14k Yellow Gold, Opal",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "Titanium",
//     "Titanium",
//     "Sterling Silver",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "Titanium",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, White Sapphire",
//     "14k Yellow Gold, Diamond",
//     "Gold Vermeil",
//     "Gold Vermeil, Pearl",
//     "Gold Vermeil",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold",
//     "Gold Vermeil",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "14k Yellow Gold, Diamond",
//     "Gold Vermeil, White Sapphire",
//     "Gold Vermeil, White Sapphire",
//     "14k Yellow Gold, Opal",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "Titanium",
//     "Titanium",
//     "Sterling Silver",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "14k Yellow Gold",
//     "Titanium"
// ]

// const myData = namesData.map((name, index) => {
//     return {
//         itemName: name,
//         itemPrice: priceData[index],
//         itemImage: imgData[index],
//         itemMetal: typeData[index]
//     }
// })
// console.log(myData)

