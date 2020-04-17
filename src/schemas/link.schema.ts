import { Schema } from 'mongoose';
import { nanoid } from 'nanoid';

export const LinkSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(10), // 10 symbols - we have some collision probability, so, have to decide here
      unique: true,
    },
    originalUrl: {
      type: String,
      validate: {
        validator: function (v) {
          try {
            // URL constructor validates URL and throws if something wrong
            return new URL(v) instanceof URL;
          } catch {
            return false;
          }
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
      required: [true, 'Original URL is required'],
    },
    baseURL: {
      type: String,
      required: true,
      default: 'http://localhost:3000',
    },
    accessed: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true },
);

// make sure short ID is indexed and unique
LinkSchema.index({ _id: 1 }, { unique: true });

// Creates short URL from baseURL and _id
LinkSchema.virtual('shortUrl').get(function () {
  return new URL(this._id, this.baseURL).toString();
});
