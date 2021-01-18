export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  URL: any;
};

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

export type ReleaseEntry = Track | Mix;

export type SigninInput = {
  email: Scalars['String'];
};

export type Artist = {
  _id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  releases?: Maybe<Array<Maybe<Release>>>;
  owner: User;
  fans?: Maybe<Array<User>>;
  countries?: Maybe<Array<Scalars['String']>>;
  biography?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<Array<SocialLinks>>;
  website?: Maybe<Scalars['String']>;
  galleryImages?: Maybe<Array<Scalars['String']>>;
};

export type Mix = {
  _id: Scalars['ID'];
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  producedBy?: Maybe<Array<Artist>>;
  coverImage?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  title: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
  length: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  plays?: Maybe<Scalars['Int']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
  genre?: Maybe<Array<Maybe<DanceGenre>>>;
};

export type Playlist = {
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  tracks: Array<Track>;
  playlistImage?: Maybe<Scalars['String']>;
  createdBy: User;
  followers?: Maybe<Array<User>>;
  genre?: Maybe<DanceGenre>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Release = {
  _id: Scalars['ID'];
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  title: Scalars['String'];
  performedBy: Array<Artist>;
  owner: Artist;
  releaseType: ReleaseType;
  tracks: Array<Track>;
  label: Array<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  producedBy: Array<Artist>;
  publishDate: Scalars['String'];
  credits?: Maybe<Scalars['String']>;
};

export type Settings = {
  id: Scalars['ID'];
  userId: Scalars['ID'];
  emailNotifications: Scalars['Boolean'];
  pushNotifications: Scalars['Boolean'];
};

export type SocialLinks = {
  type: SocialType;
  url: Scalars['String'];
};

export type Track = {
  _id: Scalars['ID'];
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  title: Scalars['String'];
  performedBy?: Maybe<Array<Scalars['String']>>;
  producedBy?: Maybe<Array<Scalars['String']>>;
  coverImage?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
  duration: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  plays?: Maybe<Scalars['Int']>;
  genre?: Maybe<Array<Maybe<DanceGenre>>>;
  credits?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
};

export type User = {
  _id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  isVerified: Scalars['Boolean'];
  isRegistered: Scalars['Boolean'];
  accountType: AccountType;
  role: Role;
  avatar?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  artist?: Maybe<Artist>;
  token?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Playlist>>;
  releasesSaved?: Maybe<Array<Release>>;
  following?: Maybe<Array<Artist>>;
  friends?: Maybe<Array<User>>;
  likedSongs?: Maybe<Array<ReleaseEntry>>;
  countries?: Maybe<Array<Scalars['String']>>;
  settings?: Maybe<Settings>;
};

export type Query = {
  me?: Maybe<User>;
};

export type Mutation = {
  signin: User;
  socialSignin: User;
};

export type MutationSigninArgs = {
  input: SigninInput;
};

export type MutationSocialSigninArgs = {
  input: SigninInput;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

import { ObjectID } from 'mongodb';
export type UserDbObject = {
  _id?: Maybe<ObjectID>;
  _id: ObjectID;
  email: string;
  name: string;
  createdAt: string;
  isVerified: boolean;
  isRegistered: boolean;
  accountType: string;
  role: string;
  avatar?: Maybe<string>;
  alias?: Maybe<string>;
  artist?: Maybe<Artist>;
  token?: Maybe<string>;
  playlists?: Maybe<Array<Playlist>>;
  releasesSaved?: Maybe<Array<Release>>;
  following?: Maybe<Array<Artist>>;
  friends?: Maybe<Array<User>>;
  likedSongs?: Maybe<Array<ReleaseEntry>>;
  countries?: Maybe<Array<string>>;
  settings?: Maybe<Settings>;
};
