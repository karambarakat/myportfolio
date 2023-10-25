// eslint-disable
export const Project = /* GraphQL */ `
  fragment Project on ProjectEntity {
    id
    attributes {
      title
      content
      summary
      github
      live
      displayPicture {
        data {
          attributes {
            url
          }
        }
      }
      skills {
        data {
          attributes {
            title
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`;
