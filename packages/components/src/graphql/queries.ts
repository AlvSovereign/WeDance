import { gql } from '@apollo/client'

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
      }
    }
  }
`

const GET_ARTIST = gql`
  query Artist($input: ArtistInput) {
    artist(input: $input) {
      _id
      id
      name
      countries
      createdAt
      countries
      biography
      url
      # releases {
      #   _id
      #   title
      #   tracks {
      #     _id
      #   }
      #   coverImage
      #   publishDate
      # }
      tag
      # socialLinks {
      #   type
      #   url
      # }
      website
      galleryImages
    }
  }
`

const GET_ARTISTS = gql`
  query Artists {
    artists {
      url
    }
  }
`

export { GET_ARTIST, GET_ARTISTS, GET_ME }
