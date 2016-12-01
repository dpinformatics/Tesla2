/**
 * Created by Diego on 30/11/2016.
 */
new Vue({
    el: '#app',
    data: {
        message: 'Distances between SuperChargers',
        destinations:[
            { name:''
                , legs:[]
            },
            { name:'Brecht',
                legs:[{ dest:'Brecht',
                        distance:'---',
                        typical:'---',
                        consumption:'---',
                        average:'---',
                        drivetime:'----',
                        chargetime:'----',
                        dir:''
                      }
                    , { dest:'Aartselaar',
                        distance:100,
                        typical:105,
                        dir:'S'
                      }
                    , { dest:'Machelen',
                        distance:150,
                        typical:180,
                        dir:'S'
                      }
                    ]
            },
            { name:'Aartselaar'
                , legs:[
                { dest:'Brecht'      		, distance:100          , typical:95, dir:'N'}
                , { dest:'Aartselaar'      		, distance:0          , typical:0, dir:''}
                , { dest:'Machelen'          , distance:50          , typical:75, dir:'S'}
            ]
            },
            { name:'Machelen'
                , legs:[
                { dest:'Brecht'      		, distance:150          , typical:170, dir:'N'}
                , { dest:'Aartselaar'          , distance:50          , typical:40, dir:'N'}
            ]
            }
        ],
        activedest:0,
        direction: 'A'
    },

    methods:{
        setdest:function(i)
            {
                console.assert(false, 'test');
                this.activedest = i;
            }
       ,
        newfunct:function(){}
    }
})