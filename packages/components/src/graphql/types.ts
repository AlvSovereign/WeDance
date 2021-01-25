import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { gql } from '@apollo/client'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  URL: any
}

export enum AccountType {
  Basic = 'BASIC',
  Premium = 'PREMIUM',
  Super = 'SUPER',
}

export enum DanceGenre {
  Kizomba = 'KIZOMBA',
  UrbanKiz = 'URBAN_KIZ',
  GhettoZouk = 'GHETTO_ZOUK',
  Afrobeats = 'AFROBEATS',
  Salsa = 'SALSA',
  Bachata = 'BACHATA',
  Swing = 'SWING',
  NewStyleHustle = 'NEW_STYLE_HUSTLE',
  BrazilianZouk = 'BRAZILIAN_ZOUK',
}

export enum Role {
  Artist = 'ARTIST',
  Fan = 'FAN',
}

export enum ReleaseType {
  Single = 'SINGLE',
  Ep = 'EP',
  Album = 'ALBUM',
  Mix = 'MIX',
}

export enum SocialType {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
}

export type ReleaseEntry = Track | Mix

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type ArtistInput = {
  _id?: Maybe<Scalars['ID']>
  url: Scalars['String']
  createdAt?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  releases?: Maybe<Array<Maybe<ReleaseInput>>>
  fans?: Maybe<Array<UserInput>>
  countries?: Maybe<Array<Scalars['String']>>
  biography?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  socialLinks?: Maybe<Array<SocialLinksInput>>
  website?: Maybe<Scalars['String']>
  galleryImages?: Maybe<Array<Scalars['String']>>
}

export type PlaylistInput = {
  createdAt?: Maybe<Scalars['String']>
  isPrivate?: Maybe<Scalars['Boolean']>
  tracks?: Maybe<Array<TrackInput>>
  playlistImage?: Maybe<Scalars['String']>
  createdBy?: Maybe<UserInput>
  followers?: Maybe<Array<UserInput>>
  genre?: Maybe<DanceGenre>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type ReleaseInput = {
  _id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  performedBy?: Maybe<Array<ArtistInput>>
  owner?: Maybe<ArtistInput>
  releaseType?: Maybe<ReleaseType>
  tracks?: Maybe<Array<TrackInput>>
  label?: Maybe<Array<Scalars['String']>>
  coverImage?: Maybe<Scalars['String']>
  producedBy?: Maybe<Array<ArtistInput>>
  publishDate?: Maybe<Scalars['String']>
  credits?: Maybe<Scalars['String']>
}

export type SettingsInput = {
  emailNotifications?: Maybe<Scalars['Boolean']>
  pushNotifications?: Maybe<Scalars['Boolean']>
}

export type SocialLinksInput = {
  type?: Maybe<SocialType>
  url?: Maybe<Scalars['String']>
}

export type SigninInput = {
  email: Scalars['String']
}

export type TrackInput = {
  createdAt?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  performedBy?: Maybe<Array<Scalars['String']>>
  producedBy?: Maybe<Array<Scalars['String']>>
  coverImage?: Maybe<Scalars['String']>
  filename?: Maybe<Scalars['String']>
  likes?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Int']>
  label?: Maybe<Scalars['String']>
  plays?: Maybe<Scalars['Int']>
  genre?: Maybe<Array<Maybe<DanceGenre>>>
  credits?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['URL']>
}

export type UserInput = {
  _id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  isVerified?: Maybe<Scalars['Boolean']>
  isRegistered?: Maybe<Scalars['Boolean']>
  accountType?: Maybe<AccountType>
  role?: Maybe<Role>
  avatar?: Maybe<Scalars['String']>
  alias?: Maybe<Scalars['String']>
  artist?: Maybe<ArtistInput>
  token?: Maybe<Scalars['String']>
  playlists?: Maybe<Array<PlaylistInput>>
  releasesSaved?: Maybe<Array<ReleaseInput>>
  following?: Maybe<Array<ArtistInput>>
  friends?: Maybe<Array<UserInput>>
  likedSongs?: Maybe<Array<ReleaseInput>>
  countries?: Maybe<Array<Scalars['String']>>
  settings?: Maybe<SettingsInput>
}

export type Artist = {
  _id?: Maybe<Scalars['String']>
  id: Scalars['ID']
  createdAt: Scalars['String']
  name: Scalars['String']
  avatar?: Maybe<Scalars['String']>
  releases?: Maybe<Array<Maybe<Release>>>
  modelId: Scalars['ID']
  url: Scalars['String']
  fans?: Maybe<Array<User>>
  countries?: Maybe<Array<Scalars['String']>>
  biography?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  socialLinks?: Maybe<Array<SocialLinks>>
  website?: Maybe<Scalars['String']>
  galleryImages?: Maybe<Array<Scalars['String']>>
}

export type Mix = {
  _id: Scalars['ID']
  id: Scalars['ID']
  createdAt: Scalars['String']
  producedBy?: Maybe<Array<Artist>>
  coverImage?: Maybe<Scalars['String']>
  filename: Scalars['String']
  title: Scalars['String']
  likes?: Maybe<Scalars['Int']>
  length: Scalars['Int']
  label?: Maybe<Scalars['String']>
  plays?: Maybe<Scalars['Int']>
  tracks?: Maybe<Array<Maybe<Track>>>
  genre?: Maybe<Array<Maybe<DanceGenre>>>
}

export type Playlist = {
  id: Scalars['ID']
  createdAt: Scalars['String']
  isPrivate: Scalars['Boolean']
  tracks: Array<Track>
  playlistImage?: Maybe<Scalars['String']>
  createdBy: User
  followers?: Maybe<Array<User>>
  genre?: Maybe<DanceGenre>
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export type Release = {
  _id: Scalars['ID']
  id: Scalars['ID']
  createdAt: Scalars['String']
  title: Scalars['String']
  performedBy: Array<Artist>
  owner: Artist
  releaseType: ReleaseType
  tracks: Array<Track>
  label: Array<Scalars['String']>
  coverImage?: Maybe<Scalars['String']>
  producedBy: Array<Artist>
  publishDate: Scalars['String']
  credits?: Maybe<Scalars['String']>
}

export type Settings = {
  id: Scalars['ID']
  userId: Scalars['ID']
  emailNotifications: Scalars['Boolean']
  pushNotifications: Scalars['Boolean']
}

export type SocialLinks = {
  type: SocialType
  url: Scalars['String']
}

export type Track = {
  _id: Scalars['ID']
  id: Scalars['ID']
  createdAt: Scalars['String']
  title: Scalars['String']
  performedBy?: Maybe<Array<Scalars['String']>>
  producedBy?: Maybe<Array<Scalars['String']>>
  coverImage?: Maybe<Scalars['String']>
  filename: Scalars['String']
  likes?: Maybe<Scalars['Int']>
  duration: Scalars['Int']
  label?: Maybe<Scalars['String']>
  plays?: Maybe<Scalars['Int']>
  genre?: Maybe<Array<Maybe<DanceGenre>>>
  credits?: Maybe<Scalars['String']>
  url: Scalars['URL']
}

export type User = {
  _id?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  email: Scalars['String']
  name: Scalars['String']
  createdAt: Scalars['String']
  isVerified: Scalars['Boolean']
  isRegistered: Scalars['Boolean']
  accountType: AccountType
  role: Role
  avatar?: Maybe<Scalars['String']>
  alias?: Maybe<Scalars['String']>
  artist?: Maybe<Artist>
  token?: Maybe<Scalars['String']>
  playlists?: Maybe<Array<Playlist>>
  releasesSaved?: Maybe<Array<Release>>
  following?: Maybe<Array<Artist>>
  friends?: Maybe<Array<User>>
  likedSongs?: Maybe<Array<ReleaseEntry>>
  countries?: Maybe<Array<Scalars['String']>>
  settings?: Maybe<Settings>
}

export type Query = {
  artist?: Maybe<Artist>
  artists?: Maybe<Array<Maybe<Artist>>>
  releasesByArtist: Release
  me?: Maybe<User>
}

export type QueryArtistArgs = {
  input?: Maybe<ArtistInput>
}

export type QueryReleasesByArtistArgs = {
  input?: Maybe<ReleaseInput>
}

export type Mutation = {
  me: User
  signin: User
  socialSignin: User
}

export type MutationMeArgs = {
  input?: Maybe<UserInput>
}

export type MutationSigninArgs = {
  input: SigninInput
}

export type MutationSocialSigninArgs = {
  input: SigninInput
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  URL: ResolverTypeWrapper<Scalars['URL']>
  AccountType: AccountType
  DanceGenre: DanceGenre
  Role: Role
  ReleaseType: ReleaseType
  SocialType: SocialType
  ReleaseEntry: ResolversTypes['Track'] | ResolversTypes['Mix']
  AdditionalEntityFields: AdditionalEntityFields
  String: ResolverTypeWrapper<Scalars['String']>
  ArtistInput: ArtistInput
  ID: ResolverTypeWrapper<Scalars['ID']>
  PlaylistInput: PlaylistInput
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  ReleaseInput: ReleaseInput
  SettingsInput: SettingsInput
  SocialLinksInput: SocialLinksInput
  SigninInput: SigninInput
  TrackInput: TrackInput
  Int: ResolverTypeWrapper<Scalars['Int']>
  UserInput: UserInput
  Artist: ResolverTypeWrapper<Artist>
  Mix: ResolverTypeWrapper<Mix>
  Playlist: ResolverTypeWrapper<Playlist>
  Release: ResolverTypeWrapper<Release>
  Settings: ResolverTypeWrapper<Settings>
  SocialLinks: ResolverTypeWrapper<SocialLinks>
  Track: ResolverTypeWrapper<Track>
  User: ResolverTypeWrapper<
    Omit<User, 'likedSongs'> & {
      likedSongs?: Maybe<Array<ResolversTypes['ReleaseEntry']>>
    }
  >
  Query: ResolverTypeWrapper<{}>
  Mutation: ResolverTypeWrapper<{}>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  URL: Scalars['URL']
  ReleaseEntry: ResolversParentTypes['Track'] | ResolversParentTypes['Mix']
  AdditionalEntityFields: AdditionalEntityFields
  String: Scalars['String']
  ArtistInput: ArtistInput
  ID: Scalars['ID']
  PlaylistInput: PlaylistInput
  Boolean: Scalars['Boolean']
  ReleaseInput: ReleaseInput
  SettingsInput: SettingsInput
  SocialLinksInput: SocialLinksInput
  SigninInput: SigninInput
  TrackInput: TrackInput
  Int: Scalars['Int']
  UserInput: UserInput
  Artist: Artist
  Mix: Mix
  Playlist: Playlist
  Release: Release
  Settings: Settings
  SocialLinks: SocialLinks
  Track: Track
  User: Omit<User, 'likedSongs'> & {
    likedSongs?: Maybe<Array<ResolversParentTypes['ReleaseEntry']>>
  }
  Query: {}
  Mutation: {}
}

export type IsAuthenticatedDirectiveArgs = {}

export type IsAuthenticatedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IsAuthenticatedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ColumnDirectiveArgs = { overrideType?: Maybe<Scalars['String']> }

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IdDirectiveArgs = {}

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export interface UrlScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL'
}

export type ReleaseEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReleaseEntry'] = ResolversParentTypes['ReleaseEntry']
> = {
  __resolveType: TypeResolveFn<'Track' | 'Mix', ParentType, ContextType>
}

export type ArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']
> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  releases?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Release']>>>,
    ParentType,
    ContextType
  >
  modelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  fans?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>
  countries?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  socialLinks?: Resolver<
    Maybe<Array<ResolversTypes['SocialLinks']>>,
    ParentType,
    ContextType
  >
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  galleryImages?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MixResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mix'] = ResolversParentTypes['Mix']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  producedBy?: Resolver<
    Maybe<Array<ResolversTypes['Artist']>>,
    ParentType,
    ContextType
  >
  coverImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  length?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  plays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  tracks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Track']>>>,
    ParentType,
    ContextType
  >
  genre?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['DanceGenre']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isPrivate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>
  playlistImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  followers?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >
  genre?: Resolver<Maybe<ResolversTypes['DanceGenre']>, ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ReleaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Release'] = ResolversParentTypes['Release']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  performedBy?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType
  >
  owner?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>
  releaseType?: Resolver<ResolversTypes['ReleaseType'], ParentType, ContextType>
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>
  label?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  coverImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  producedBy?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType
  >
  publishDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  credits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Settings'] = ResolversParentTypes['Settings']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  emailNotifications?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  pushNotifications?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SocialLinksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SocialLinks'] = ResolversParentTypes['SocialLinks']
> = {
  type?: Resolver<ResolversTypes['SocialType'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TrackResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  performedBy?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  producedBy?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  coverImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  plays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  genre?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['DanceGenre']>>>,
    ParentType,
    ContextType
  >
  credits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isRegistered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  playlists?: Resolver<
    Maybe<Array<ResolversTypes['Playlist']>>,
    ParentType,
    ContextType
  >
  releasesSaved?: Resolver<
    Maybe<Array<ResolversTypes['Release']>>,
    ParentType,
    ContextType
  >
  following?: Resolver<
    Maybe<Array<ResolversTypes['Artist']>>,
    ParentType,
    ContextType
  >
  friends?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >
  likedSongs?: Resolver<
    Maybe<Array<ResolversTypes['ReleaseEntry']>>,
    ParentType,
    ContextType
  >
  countries?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  settings?: Resolver<
    Maybe<ResolversTypes['Settings']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  artist?: Resolver<
    Maybe<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QueryArtistArgs, never>
  >
  artists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Artist']>>>,
    ParentType,
    ContextType
  >
  releasesByArtist?: Resolver<
    ResolversTypes['Release'],
    ParentType,
    ContextType,
    RequireFields<QueryReleasesByArtistArgs, never>
  >
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  me?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationMeArgs, never>
  >
  signin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSigninArgs, 'input'>
  >
  socialSignin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSocialSigninArgs, 'input'>
  >
}

export type Resolvers<ContextType = any> = {
  URL?: GraphQLScalarType
  ReleaseEntry?: ReleaseEntryResolvers<ContextType>
  Artist?: ArtistResolvers<ContextType>
  Mix?: MixResolvers<ContextType>
  Playlist?: PlaylistResolvers<ContextType>
  Release?: ReleaseResolvers<ContextType>
  Settings?: SettingsResolvers<ContextType>
  SocialLinks?: SocialLinksResolvers<ContextType>
  Track?: TrackResolvers<ContextType>
  User?: UserResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
export type DirectiveResolvers<ContextType = any> = {
  isAuthenticated?: IsAuthenticatedDirectiveResolver<any, any, ContextType>
  entity?: EntityDirectiveResolver<any, any, ContextType>
  column?: ColumnDirectiveResolver<any, any, ContextType>
  id?: IdDirectiveResolver<any, any, ContextType>
}

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>
export type SigninMutationVariables = Exact<{
  input: SigninInput
}>

export type SigninMutation = {
  signin: Pick<
    User,
    | '_id'
    | 'id'
    | 'accountType'
    | 'alias'
    | 'avatar'
    | 'email'
    | 'isRegistered'
    | 'isVerified'
    | 'name'
    | 'role'
    | 'token'
  > & {
    artist?: Maybe<
      Pick<
        Artist,
        | '_id'
        | 'id'
        | 'name'
        | 'createdAt'
        | 'countries'
        | 'biography'
        | 'tag'
        | 'website'
        | 'galleryImages'
      > & {
        releases?: Maybe<
          Array<
            Maybe<
              Pick<Release, '_id' | 'title' | 'coverImage' | 'publishDate'> & {
                tracks: Array<Pick<Track, '_id'>>
              }
            >
          >
        >
        socialLinks?: Maybe<Array<Pick<SocialLinks, 'type' | 'url'>>>
      }
    >
  }
}

export type GetMeQueryVariables = Exact<{ [key: string]: never }>

export type GetMeQuery = {
  me?: Maybe<
    Pick<
      User,
      | '_id'
      | 'id'
      | 'name'
      | 'email'
      | 'createdAt'
      | 'isVerified'
      | 'isRegistered'
      | 'accountType'
      | 'role'
      | 'avatar'
      | 'alias'
      | 'token'
    > & { artist?: Maybe<Pick<Artist, '_id'>> }
  >
}

export type ArtistQueryVariables = Exact<{
  input?: Maybe<ArtistInput>
}>

export type ArtistQuery = {
  artist?: Maybe<
    Pick<
      Artist,
      | '_id'
      | 'id'
      | 'name'
      | 'countries'
      | 'createdAt'
      | 'biography'
      | 'url'
      | 'tag'
      | 'website'
      | 'galleryImages'
    > & {
      releases?: Maybe<
        Array<
          Maybe<
            Pick<Release, '_id'> & {
              tracks: Array<
                Pick<
                  Track,
                  | '_id'
                  | 'credits'
                  | 'filename'
                  | 'genre'
                  | 'label'
                  | 'likes'
                  | 'plays'
                  | 'title'
                  | 'url'
                >
              >
            }
          >
        >
      >
    }
  >
}

export type ArtistsQueryVariables = Exact<{ [key: string]: never }>

export type ArtistsQuery = {
  artists?: Maybe<Array<Maybe<Pick<Artist, 'url'>>>>
}

export type GetReleasesByArtistQueryVariables = Exact<{
  input?: Maybe<ReleaseInput>
}>

export type GetReleasesByArtistQuery = {
  releasesByArtist: Pick<
    Release,
    | '_id'
    | 'createdAt'
    | 'title'
    | 'releaseType'
    | 'label'
    | 'coverImage'
    | 'publishDate'
    | 'credits'
  > & {
    performedBy: Array<Pick<Artist, '_id'>>
    owner: Pick<Artist, '_id'>
    tracks: Array<
      Pick<
        Track,
        | '_id'
        | 'credits'
        | 'filename'
        | 'genre'
        | 'label'
        | 'likes'
        | 'plays'
        | 'title'
        | 'url'
      >
    >
    producedBy: Array<Pick<Artist, '_id'>>
  }
}

export const SigninDocument = gql`
  mutation Signin($input: SigninInput!) {
    signin(input: $input) {
      _id
      id
      accountType
      alias
      avatar
      email
      isRegistered
      isVerified
      name
      role
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
export type SigninMutationFn = ApolloReactCommon.MutationFunction<
  SigninMutation,
  SigninMutationVariables
>

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSigninMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SigninMutation,
    SigninMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<SigninMutation, SigninMutationVariables>(
    SigninDocument,
    baseOptions,
  )
}
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>
export type SigninMutationResult = ApolloReactCommon.MutationResult<SigninMutation>
export type SigninMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SigninMutation,
  SigninMutationVariables
>
export const GetMeDocument = gql`
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

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetMeQuery,
    GetMeQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    baseOptions,
  )
}
export function useGetMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetMeQuery,
    GetMeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    baseOptions,
  )
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>
export type GetMeQueryResult = ApolloReactCommon.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>
export const ArtistDocument = gql`
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
      }
      tag
      website
      galleryImages
    }
  }
`

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useArtistQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ArtistQuery,
    ArtistQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ArtistQuery, ArtistQueryVariables>(
    ArtistDocument,
    baseOptions,
  )
}
export function useArtistLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ArtistQuery,
    ArtistQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ArtistQuery, ArtistQueryVariables>(
    ArtistDocument,
    baseOptions,
  )
}
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>
export type ArtistQueryResult = ApolloReactCommon.QueryResult<
  ArtistQuery,
  ArtistQueryVariables
>
export const ArtistsDocument = gql`
  query Artists {
    artists {
      url
    }
  }
`

/**
 * __useArtistsQuery__
 *
 * To run a query within a React component, call `useArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useArtistsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ArtistsQuery,
    ArtistsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ArtistsQuery, ArtistsQueryVariables>(
    ArtistsDocument,
    baseOptions,
  )
}
export function useArtistsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ArtistsQuery,
    ArtistsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ArtistsQuery, ArtistsQueryVariables>(
    ArtistsDocument,
    baseOptions,
  )
}
export type ArtistsQueryHookResult = ReturnType<typeof useArtistsQuery>
export type ArtistsLazyQueryHookResult = ReturnType<typeof useArtistsLazyQuery>
export type ArtistsQueryResult = ApolloReactCommon.QueryResult<
  ArtistsQuery,
  ArtistsQueryVariables
>
export const GetReleasesByArtistDocument = gql`
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

/**
 * __useGetReleasesByArtistQuery__
 *
 * To run a query within a React component, call `useGetReleasesByArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReleasesByArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReleasesByArtistQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetReleasesByArtistQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetReleasesByArtistQuery,
    GetReleasesByArtistQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetReleasesByArtistQuery,
    GetReleasesByArtistQueryVariables
  >(GetReleasesByArtistDocument, baseOptions)
}
export function useGetReleasesByArtistLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetReleasesByArtistQuery,
    GetReleasesByArtistQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetReleasesByArtistQuery,
    GetReleasesByArtistQueryVariables
  >(GetReleasesByArtistDocument, baseOptions)
}
export type GetReleasesByArtistQueryHookResult = ReturnType<
  typeof useGetReleasesByArtistQuery
>
export type GetReleasesByArtistLazyQueryHookResult = ReturnType<
  typeof useGetReleasesByArtistLazyQuery
>
export type GetReleasesByArtistQueryResult = ApolloReactCommon.QueryResult<
  GetReleasesByArtistQuery,
  GetReleasesByArtistQueryVariables
>
