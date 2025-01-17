/// <reference path="../pb_data/types.d.ts" />


routerUse((e) => {
    e.response
        .header()
        .add(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );

    e.response
        .header()
        .add(
            'Access-Control-Allow-Origin',
            'http://localhost:5173/'
        );

    return e.next()
})
