import { gql } from 'apollo-server'

const typeDefs = gql`
  directive @isAuthenticated on FIELD_DEFINITION
  directive @entity on OBJECT
  directive @column on FIELD_DEFINITION
  directive @id on FIELD_DEFINITION

  scalar URL

  enum AccountType {
    BASIC
    PREMIUM
    SUPER
  }

  enum DanceGenre {
    KIZOMBA
    URBAN_KIZ
    GHETTO_ZOUK
    AFROBEATS
    SALSA
    BACHATA
    SWING
    NEW_STYLE_HUSTLE
    BRAZILIAN_ZOUK
  }

  enum Role {
    ARTIST
    FAN
  }

  enum ReleaseType {
    SINGLE
    EP
    ALBUM
    MIX
  }

  enum SocialType {
    FACEBOOK
    INSTAGRAM
  }

  union ReleaseEntry = Track | Mix
  # union PerformedByEntry = Artist | String
  # union ProducedByEntry = Artist | String

  input SigninInput {
    email: String!
  }

  type Artist {
    _id: String
    id: ID!
    createdAt: String!
    name: String!
    avatar: String
    releases: [Release]
    owner: User!
    fans: [User!]
    countries: [String!]
    biography: String
    tag: String
    socialLinks: [SocialLinks!]
    website: String
    galleryImages: [String!]
  }

  type Mix {
    _id: ID!
    id: ID!
    createdAt: String!
    producedBy: [Artist!]
    coverImage: String
    filename: String!
    title: String!
    likes: Int
    length: Int!
    label: String
    plays: Int
    tracks: [Track]
    genre: [DanceGenre]
  }

  type Playlist {
    id: ID!
    createdAt: String!
    isPrivate: Boolean!
    tracks: [Track!]!
    playlistImage: String
    createdBy: User!
    followers: [User!]
    genre: DanceGenre
    title: String!
    description: String
  }

  type Release {
    _id: ID!
    id: ID!
    createdAt: String!
    title: String!
    performedBy: [Artist!]!
    owner: Artist!
    releaseType: ReleaseType!
    tracks: [Track!]!
    label: [String!]!
    coverImage: String
    producedBy: [Artist!]!
    publishDate: String!
    credits: String
  }

  type Settings {
    id: ID!
    userId: ID!
    emailNotifications: Boolean!
    pushNotifications: Boolean!
  }

  type SocialLinks {
    type: SocialType!
    url: String!
  }

  type Track {
    _id: ID!
    id: ID!
    createdAt: String!
    title: String!
    performedBy: [String!]
    producedBy: [String!]
    coverImage: String
    filename: String!
    likes: Int
    duration: Int!
    label: String
    plays: Int
    genre: [DanceGenre]
    credits: String
    url: URL!
  }

  type User @entity {
    _id: ID @id
    id: ID! @id
    email: String! @column
    name: String! @column
    createdAt: String! @column
    isVerified: Boolean! @column
    isRegistered: Boolean! @column
    accountType: AccountType! @column
    role: Role! @column
    avatar: String @column
    alias: String @column
    artist: Artist @column
    token: String @column
    playlists: [Playlist!] @column
    releasesSaved: [Release!] @column
    following: [Artist!] @column
    friends: [User!] @column
    likedSongs: [ReleaseEntry!] @column
    countries: [String!] @column
    settings: Settings @column
  }

  type Query {
    me: User
  }

  type Mutation {
    signin(input: SigninInput!): User!
    socialSignin(input: SigninInput!): User!
  }
`

export default typeDefs
