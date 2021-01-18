import { gql } from '@apollo/client';

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
    }
  }
`;

export { SIGNIN };
