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
      releases {
        _id
      }
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

const GET_RELEASES_BY_ARTIST = gql`
  query GetReleasesByArtist($input: ReleaseInput) {
    releasesByArtist(input: $input) {
      _id
      createdAt
      title
      performedBy {
        _id
      }
      owner {
        _id
      }
      releaseType
      tracks {
        _id
        credits
        filename
        genre
        label
        likes
        plays
        title
        url
      }
      label
      coverImage
      producedBy {
        _id
      }
      publishDate
      credits
    }
  }
`

export { GET_ARTIST, GET_ARTISTS, GET_ME, GET_RELEASES_BY_ARTIST }
