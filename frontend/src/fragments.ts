export const ProjectEntity = /* GraphQL */ `
  fragment ProjectEntity on ProjectEntity {
    id
    attributes {
      content
      title summary github live 
      displayPicture { data { attributes { url width height } } } 
      skills { data { attributes { title } } } 
      createdAt updatedAt slug
    }
  }
`;

export const Project = /* GraphQL */ `
  fragment Project on Project {
    content
    title summary github live 
    displayPicture { data { attributes { url width height } } } 
    skills { data { attributes { title } } } 
    createdAt updatedAt slug
  }
`;

export const ProjectMeta = /* GraphQL */ `
  fragment ProjectMeta on Project {
    title summary github live 
    displayPicture { data { attributes { url width height } } } 
    skills { data { attributes { title } } } 
    createdAt updatedAt slug
  }
`;

export const Picture = /* GraphQL */ `
  fragment picture on UploadFileEntityResponse{
    data{
      attributes {
        url width height
      }
    }
  }
`;

export const Pagination = /* GraphQL */ `
  fragment Pagination on Pagination {
    total
    page
    pageSize
    pageCount
  }
`;
