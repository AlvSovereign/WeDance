import { gql } from 'apollo-server'

const typeDefs = gql`
  directive @isAuthenticated on FIELD_DEFINITION
  directive @entity(
    embedded: Boolean
    additionalFields: [AdditionalEntityFields]
  ) on OBJECT
  directive @column(overrideType: String) on FIELD_DEFINITION
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

  input AdditionalEntityFields {
    path: String
    type: String
  }

  input ArtistInput {
    _id: ID # the user _id
    url: String!
    createdAt: String
    name: String
    avatar: String
    releases: [ReleaseInput]
    fans: [UserInput!]
    countries: [String!]
    biography: String
    tag: String
    socialLinks: [SocialLinksInput!]
    website: String
    galleryImages: [String!]
  }

  input PlaylistInput {
    createdAt: String
    isPrivate: Boolean
    tracks: [TrackInput!]
    playlistImage: String
    createdBy: UserInput
    followers: [UserInput!]
    genre: DanceGenre
    title: String
    description: String
  }

  input ReleaseInput {
    _id: ID #The artist _id
    createdAt: String
    title: String
    performedBy: [ArtistInput!]
    owner: ArtistInput
    releaseType: ReleaseType
    tracks: [TrackInput!]
    label: [String!]
    coverImage: String
    producedBy: [ArtistInput!]
    publishDate: String
    credits: String
  }

  input SettingsInput {
    emailNotifications: Boolean
    pushNotifications: Boolean
  }

  input SocialLinksInput {
    type: SocialType
    url: String
  }

  input SigninInput {
    email: String!
  }

  input TrackInput {
    createdAt: String
    title: String
    performedBy: [String!]
    producedBy: [String!]
    coverImage: String
    filename: String
    likes: Int
    duration: Int
    label: String
    plays: Int
    genre: [DanceGenre]
    credits: String
    url: URL
  }

  input UserInput {
    _id: ID
    email: String
    name: String
    createdAt: String
    isVerified: Boolean
    isRegistered: Boolean
    accountType: AccountType
    role: Role
    avatar: String
    alias: String
    artist: ArtistInput
    token: String
    playlists: [PlaylistInput!]
    releasesSaved: [ReleaseInput!]
    following: [ArtistInput!]
    friends: [UserInput!]
    likedSongs: [ReleaseInput!]
    countries: [String!]
    settings: SettingsInput
  }

  type Artist {
    _id: String
    id: ID!
    createdAt: String!
    name: String!
    avatar: String
    releases: [Release]
    modelId: ID!
    url: String!
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
    artist(input: ArtistInput): Artist
    artists: [Artist]
    releasesByArtist(input: ReleaseInput): Release!
    me: User
  }

  type Mutation {
    me(input: UserInput): User!
    signin(input: SigninInput!): User!
    socialSignin(input: SigninInput!): User!
  }
`

export default typeDefs
