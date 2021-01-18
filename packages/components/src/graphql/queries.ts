import { gql } from '@apollo/client';

const GET_ME = gql`
  query GetMe {
    me {
      _id
      id
      name
      email
      createdAt
      isVerified
      isRegistered
      accountType
      role
      avatar
      alias
      token
      artist {
        _id
        id
        name
        createdAt
        countries
        biography
        releases {
          _id
          title
          tracks {
            _id
          }
          coverImage
          publishDate
        }
        tag
        socialLinks {
          type
          url
        }
        website
        galleryImages
      }
    }
  }
`;

export { GET_ME };
