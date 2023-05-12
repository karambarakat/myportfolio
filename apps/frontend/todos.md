- [ ] better integration with graphql and strapi
  - [ ] apps\frontend\utils\strapi_integration.ts do this programmatically
  - [ ] apps/frontend/utils/fetchQuery.ts@fetchQuery here you may infer the value of model from the query string instead
  - [ ] in the same above file var is also not type save as it should be
  - [ ] there is no intellisense in the graphql files
  - [ ] better typescript code here apps/frontend/app/api/revalidate/route.ts@POST
    ```typescript
    // @ts-ignore
    const model = body.model as models
    ```
- [ ] better revalidation
  - [ ] general api endpoint for tag or path revalidation
  - [ ] for strapi add a middleware that bridge the gap between this general purpose and strapi payload