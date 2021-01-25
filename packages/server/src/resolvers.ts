import { AuthenticationError, IResolvers } from 'apollo-server'
import mongoose from 'mongoose'
import { URLResolver } from 'graphql-scalars'
import models, { schemas } from './models'
import { createToken } from './utils/auth'
import { Resolvers } from './graphql/types'

const resolvers: IResolvers = {
  Query: {
    artist: async (parent, { input }, ctx, info) => {
      const artist = await models.Artist.findOne(input)
      console.log('artist: ', artist)

      return artist
    },
    artists: async () => {
      const artists = await models.Artist.findAll()
      console.log('artists: ', artists)

      return artists
    },
    me: async (_, __, { user }, ___) => {
      return user
    },
  },
  Mutation: {
    // artist: async (parent, args, ctx, info) => {
    //   const { input } = args
    //   const { user } = ctx
    //   const artist = await models.Artist.createOne({
    //     ...input,
    //     owner: user._id,
    //   })
    //   return artist
    // },
    //   updateArtist: async (parent, args, ctx, info) => {
    //     const { input } = args;
    //     const { user } = ctx;
    //     if (!user.artist._id.equals(input._id)) {
    //       throw new AuthenticationError('Invalid credentials, please try again');
    //     }
    //     const { _id, ...rest } = input;
    //     const updatedArtist = await models.Artist.findByIdAndUpdate(
    //       input._id,
    //       rest
    //     );
    //     return updatedArtist;
    //   },
    //   createRelease: async (parent, args, ctx, info) => {
    //     const { input } = args;
    //     const { tracks } = input;
    //     // first save tracks, then use the track _id's to reference the release
    //     const savedTracks = await models.Track.createMany(tracks);
    //     const release = await models.Release.createOne({
    //       ...input,
    //       tracks: savedTracks.map((s: any) => s._id),
    //     });
    //     return release;
    //   },
    me: async (parent, args, ctx, info) => {
      const { input, ...rest } = args
      const callback = (err, doc) => {
        if (err) {
          console.err(err)
          throw new Error(err)
        }
        console.log('doc: ', doc)
      }
      const updatedUser = await models.User.findByIdAndUpdate(
        input._id,
        rest,
        callback,
      )

      if (updatedUser) {
        throw new AuthenticationError('Invalid credentials, please try again')
      }
      const token = createToken(updatedUser)
      // return {...updatedArtist, token};
      return null
    },
    signin: async (_, { input }) => {
      try {
        const { email } = input
        const foundUser: any = await models.User.findOne({ email })

        if (!foundUser) {
          throw new AuthenticationError('Invalid credentials, please try again')
        }

        const token = await createToken(foundUser)
        return { token, ...{ ...foundUser } }
      } catch (err) {
        console.error('Auth error', err)
      }
    },
    //   socialSignin: async (parent, args, ctx, info) => {
    //     let createdUser;
    //     const { email } = args.input;
    //     const user: any = await models.User.findOne({ email });
    //     if (!user) {
    //       createdUser = await models.User.createOne(args.input);
    //     }
    //     const token = await createToken(user || createdUser);
    //     return { token, ...{ ...user, ...createdUser } };
    //   },
    //   updateMe: async (parent, args, ctx, info) => {
    //     const { user } = ctx;
    //     const { input } = args;
    //     if (input._id !== user._id) {
    //       throw new AuthenticationError('Invalid credentials, please try again');
    //     }
    //     const { _id, ...rest } = input;
    //     const me: any = await models.User.findByIdAndUpdate(input._id, rest);
    //     return me;
    //   },
  },
  URL: URLResolver,
}

export default resolvers
