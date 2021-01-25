import { gql } from '@apollo/client'

const SIGNIN = gql`
  mutation Signin($input: SigninInput!) {
    signin(input: $input) {
      _id
      id
      accountType
      alias
      # artist
      avatar
      # countries
      email
      # following
      # friends
      isRegistered
      isVerified
      # likedSongs
      name
      # playlists
      role
      # settings
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
`

export { SIGNIN }
