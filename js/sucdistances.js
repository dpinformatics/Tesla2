/**
 * Created by Diego on 30/11/2016.
 */
new Vue({
    el: '#app',
    data: {
        message: 'Distances between SuperChargers',
        destinations:[
            /*{ name:''
                , legs:[]
            },*/
            { name:'Brecht',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'31,5'   , typical:'30' , consumption:'6' , average:'190', drivetime:'0:30', chargetime:'----', dir:'S'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'63,0'   , typical:'67' , consumption:'13', average:'206', drivetime:'0:50', chargetime:'----', dir:'S'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'80,1'   , typical:'83' , consumption:'16', average:'200', drivetime:'1:00', chargetime:'----', dir:'S'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'105,6'  , typical:'112', consumption:'22', average:'197', drivetime:'1:20', chargetime:'----', dir:'S'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'154,5'  , typical:'160', consumption:'31', average:'199', drivetime:'1:55', chargetime:'----', dir:'S'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'328,5'  , typical:'362', consumption:'70', average:'210', drivetime:'3:30', chargetime:'----', dir:'S'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Aartselaar',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'32,7'   , typical:'33' , consumption:'6' , average:'194', drivetime:'0:35', chargetime:'0:05', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'38,1'   , typical:'40' , consumption:'8' , average:'199', drivetime:'0:30', chargetime:'0:10', dir:'S'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'70,0'   , typical:'76' , consumption:'15', average:'208', drivetime:'0:50', chargetime:'0:15', dir:'S'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'292,9'  , typical:'325', consumption:'63', average:'214', drivetime:'3:05', chargetime:'0:55', dir:'S'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'354,1'  , typical:'385', consumption:'74', average:'210', drivetime:'3:45', chargetime:'1:15', dir:'S'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Machelen',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'64,5'   , typical:'68' , consumption:'13', average:'202', drivetime:'0:50', chargetime:'0:15', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'38,9'   , typical:'37' , consumption:'7' , average:'182', drivetime:'0:35', chargetime:'0:10', dir:'N'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'44,6'   , typical:'47' , consumption:'9' , average:'202', drivetime:'0:40', chargetime:'0:10', dir:'S'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'267,5'  , typical:'296', consumption:'57', average:'213', drivetime:'2:50', chargetime:'0:55', dir:'S'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'328,7'  , typical:'356', consumption:'69', average:'209', drivetime:'3:30', chargetime:'1:10', dir:'S'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Gent',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'80,0'   , typical:'84' , consumption:'16' , average:'203', drivetime:'1:00', chargetime:'0:15', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'76,0'   , typical:'78' , consumption:'15' , average:'198', drivetime:'1:00', chargetime:'0:13', dir:'S'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'240,6'  , typical:'268', consumption:'52' , average:'214', drivetime:'2:35', chargetime:'0:45', dir:'S'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'301,8'  , typical:'328', consumption:'63' , average:'209', drivetime:'3:20', chargetime:'1:00', dir:'S'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'---', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Nivelles-Sud',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'102,3'  , typical:'104', consumption:'20', average:'195', drivetime:'1:15', chargetime:'0:15', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'69,5'   , typical:'67' , consumption:'13', average:'185', drivetime:'0:50', chargetime:'0:10', dir:'N'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'42,0'   , typical:'40' , consumption:'8' , average:'184', drivetime:'0:35', chargetime:'0:05', dir:'N'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'226,3'  , typical:'253', consumption:'49', average:'215', drivetime:'2:20', chargetime:'0:40', dir:'S'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'287,5'  , typical:'313', consumption:'60', average:'210', drivetime:'3:00', chargetime:'0:50', dir:'S'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Lille',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'153,7'  , typical:'160', consumption:'31', average:'201', drivetime:'1:50', chargetime:'0:25', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'74,4'   , typical:'76' , consumption:'15', average:'197', drivetime:'0:55', chargetime:'0:10', dir:'N'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'164,9'  , typical:'191', consumption:'37', average:'222', drivetime:'1:40', chargetime:'0:30', dir:'S'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'226,2'  , typical:'251', consumption:'48', average:'213', drivetime:'2:25', chargetime:'0:40', dir:'S'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'334,6'  , typical:'375', consumption:'72', average:'216', drivetime:'3:30', chargetime:'1:15', dir:'S'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Senlis',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'318,1'  , typical:'347', consumption:'67', average:'210', drivetime:'3:25', chargetime:'1:05', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'294,0'  , typical:'321', consumption:'62', average:'210', drivetime:'3:05', chargetime:'1:00', dir:'N'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'266,6'  , typical:'295', consumption:'57', average:'213', drivetime:'2:50', chargetime:'0:50', dir:'N'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'238,7'  , typical:'263', consumption:'51', average:'212', drivetime:'2:30', chargetime:'0:45', dir:'N'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'226.2'  , typical:'256', consumption:'49', average:'218', drivetime:'2:20', chargetime:'0:40', dir:'N'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'165,1'  , typical:'188', consumption:'36', average:'219', drivetime:'1:40', chargetime:'0:30', dir:'N'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'63,5'   , typical:'63' , consumption:'12', average:'191', drivetime:'0:50', chargetime:'0:10', dir:'S'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'172,0'  , typical:'187', consumption:'36', average:'209', drivetime:'2:00', chargetime:'0:30', dir:'S'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'287,0'  , typical:'325', consumption:'63', average:'218', drivetime:'3:00', chargetime:'1:00', dir:'S'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Rungis',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'376,7'  , typical:'403', consumption:'78', average:'206', drivetime:'4:10', chargetime:'1:25', dir:'N'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'352,7'  , typical:'377', consumption:'73', average:'206', drivetime:'3:50', chargetime:'1:15', dir:'N'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'325,2'  , typical:'351', consumption:'68', average:'208', drivetime:'3:35', chargetime:'1:05', dir:'N'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'297,4'  , typical:'319', consumption:'61', average:'206', drivetime:'3:15', chargetime:'0:55', dir:'N'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'284.8'  , typical:'312', consumption:'60', average:'211', drivetime:'3:05', chargetime:'0:55', dir:'N'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'223,7'  , typical:'244', consumption:'47', average:'210', drivetime:'2:25', chargetime:'0;40', dir:'N'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'61,8'   , typical:'61' , consumption:'12', average:'189', drivetime:'0:55', chargetime:'0:10', dir:'N'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'113,1'  , typical:'129', consumption:'25', average:'219', drivetime:'1:10', chargetime:'0:20', dir:'S'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'228,1'  , typical:'266', consumption:'51', average:'225', drivetime:'2:15', chargetime:'0:45', dir:'S'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Orleans',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'334,3'  , typical:'366', consumption:'70', average:'210', drivetime:'3:35', chargetime:'1:10', dir:'N'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'172,4'  , typical:'182', consumption:'35', average:'203', drivetime:'2:05', chargetime:'0:30', dir:'N'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'114,3'  , typical:'125', consumption:'24', average:'210', drivetime:'1:15', chargetime:'0:20', dir:'N'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'120,0'  , typical:'142', consumption:'27', average:'228', drivetime:'1:15', chargetime:'0:20', dir:'S'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'296,5'  , typical:'358', consumption:'69', average:'232', drivetime:'2:45', chargetime:'1:10', dir:'S'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Bourges',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'292,6'  , typical:'323', consumption:'62', average:'212', drivetime:'3:10', chargetime:'1:00', dir:'N'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'234,5'  , typical:'266', consumption:'51', average:'218', drivetime:'2:20', chargetime:'0:45', dir:'N'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'124,3'  , typical:'144', consumption:'28', average:'224', drivetime:'1:15', chargetime:'0:20', dir:'N'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'183,9'  , typical:'222', consumption:'43', average:'232', drivetime:'1:45', chargetime:'0:35', dir:'S'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'304,0'  , typical:'377', consumption:'73', average:'238', drivetime:'3:00', chargetime:'1:15', dir:'S'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                ]
            },
            { name:'SuC Clermont Ferrand',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'297,1'  , typical:'344', consumption:'66', average:'223', drivetime:'2:50', chargetime:'1:05', dir:'N'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'179,5'  , typical:'206', consumption:'40', average:'221', drivetime:'1:45', chargetime:'0:30', dir:'N'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'120,9'  , typical:'155', consumption:'30', average:'247', drivetime:'1:20', chargetime:'0:25', dir:'S'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'261,2'  , typical:'307', consumption:'59', average:'226', drivetime:'2:40', chargetime:'0:55', dir:'S'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'293,4' , typical:'316', consumption:'61', average:'207', drivetime:'3:20', chargetime:'0:55', dir:'S'}
                ]
            },
            { name:'SuC Albaret-Sainte-Marie',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'298,1'  , typical:'308', consumption:'59', average:'233', drivetime:'2:55', chargetime:'0:50', dir:'N'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'120,0'  , typical:'103', consumption:'20', average:'166', drivetime:'1:15', chargetime:'0:15', dir:'N'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'141,9'  , typical:'146', consumption:'28', average:'198', drivetime:'1:30', chargetime:'0:20', dir:'S'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'174,1' , typical:'155', consumption:'30', average:'171', drivetime:'2:10', chargetime:'0:25', dir:'S'}
                ]
            },
            { name:'SuC Aire du Caylar',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'260,9'  , typical:'277', consumption:'53', average:'204', drivetime:'2:40', chargetime:'0:50', dir:'N'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'141,9'  , typical:'167', consumption:'32', average:'227', drivetime:'1:30', chargetime:'0:30', dir:'N'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'37,1'  , typical:'18' , consumption:'3' , average:'92' , drivetime:'0:50', chargetime:'0:05', dir:'S'}
                ]
            },
            { name:'Vereilles - LA Tour-sur-Orb',
                legs:[{ destid:0,  dest:'Brecht'                    , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:1,  dest:'SuC Aartselaar'            , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:2,  dest:'SuC Machelen'              , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:3,  dest:'SuC Gent'                  , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:4,  dest:'SuC Nivelles-Sud'          , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:5,  dest:'SuC Lille'                 , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:6,  dest:'SuC Senlis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:7,  dest:'SuC Rungis'                , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:8,  dest:'SuC Orleans'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:9,  dest:'SuC Bourges'               , distance:'-----'  , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:'-'}
                    , { destid:10, dest:'SuC Clermont Ferrand'      , distance:'297,4'  , typical:'326', consumption:'63', average:'211', drivetime:'3:20', chargetime:'----', dir:'N'}
                    , { destid:11, dest:'SuC Albaret-Sainte-Marie'  , distance:'178,4'  , typical:'217', consumption:'42', average:'233', drivetime:'2:10', chargetime:'----', dir:'N'}
                    , { destid:12, dest:'SuC Aire du Caylar'        , distance:'37,5'   , typical:'51' , consumption:'10', average:'262', drivetime:'0:50', chargetime:'----', dir:'N'}
                    , { destid:13, dest:'Vereilles - La Tour-sur-Orb', distance:'-----' , typical:'---', consumption:'--', average:'---', drivetime:'----', chargetime:'----', dir:''}
                ]
            }

        ],
        activedest: 0,
        direction: 'A',
        device: 'CAR',
        time: 'D'
    },

    methods:{
        setdest: function (i, event)
            {
                alert('test' + i);
            }
       ,
        newfunct:function(){}
    }
})

