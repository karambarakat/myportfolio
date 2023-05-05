module.exports = ({ env }) => [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', env('AWS_BUCKET_URL')],
                    'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', env('AWS_BUCKET_URL')],
                    upgradeInsecureRequests: null
                }
            }
        }
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public'
];
// export default [
//   'strapi::errors',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'connect-src': ["'self'", 'https:'],
//           'img-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'dl.airtable.com',
//             env('AWS_REGION')
//           ],
//           'media-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'dl.airtable.com',
//             env('AWS_REGION')
//           ],
//           upgradeInsecureRequests: null
//         }
//       }
//     }
//   },
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public'
// ]
