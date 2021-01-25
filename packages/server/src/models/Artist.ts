import mongoose, { Schema } from 'mongoose'
import { nanoid } from 'nanoid'
import { Artist as ArtistType } from '../graphql/types'

const ArtistSchema: Schema = new Schema(
  {
    id: {
      type: String,
      default: () => nanoid(),
    },
    modelId: {
      type: Schema.Types.ObjectId, // a user object id
      required: true,
      refPath: 'modelId.modelName',
    },
    modelName: {
      type: String,
      required: true,
      enum: ['User'],
    },
    url: {
      type: String,
      required: true,
      unique: true,
      maxlength: 30,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 80,
    },
    avatar: String,
    releases: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Release' }],
    owner: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    fans: { type: [mongoose.SchemaTypes.ObjectId], ref: 'User' },
    country: {
      type: [String],
      required: true,
    },
    biography: { type: String, maxlength: 2000 },
    tag: { type: String, maxlength: 80 },
    socialLinks: { type: Object },
    website: String,
    galleryImages: [String],
  },
  { timestamps: true },
)

const Artist: mongoose.Model<ArtistType> = mongoose.model(
  'Artist',
  ArtistSchema,
)

export default Artist
