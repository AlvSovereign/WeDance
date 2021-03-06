import { AuthenticationError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import { User } from 'components/src/graphql/generated/graphql'
import models from '../models'

const secret = process.env.JWT_SECRET

/**
 * takes a user object and creates  jwt out of it
 * using user.id and user.role
 * @param {Object} user the user to create a jwt for
 */
const createToken = ({ _id, accountType, role }: User) =>
  jwt.sign({ _id: _id!.toString(), role }, secret!)

/**
 * will attemp to verify a jwt and find a user in the
 * db associated with it. Catches any error and returns
 * a null user
 * @param {String} token jwt from client
 */
const getUserFromToken = async (tokenString: string) => {
  const token = tokenString && tokenString.split('Bearer ')[1]
  try {
    const userToken: any = await jwt.verify(token, secret!)
    const { _id, ...rest } = await models.User.findById(userToken._id)

    return { _id: _id.toString(), token, ...rest }
  } catch (e) {
    return null
  }
}

/**
 * checks if the user is on the context object
 * continues to the next resolver if true
 * @param {Function} next next resolver function ro run
 */
const authenticated: any = (next: any) => (
  root: any,
  args: any,
  context: any,
  info: any,
) => {
  if (!context.user) {
    throw new AuthenticationError(
      'User is not authenticated to perform this operation',
    )
  }

  return next(root, args, context, info)
}

/**
 * checks if the user on the context has the specified role.
 * continues to the next resolver if true
 * @param {String} role enum role to check for
 * @param {Function} next next resolver function to run
 */
const authorized = (role: any, next: any) => (
  root: any,
  args: any,
  context: any,
  info: any,
) => {
  if (role !== context.user.role) {
    throw new AuthenticationError(
      'User not authorized to perform this operation',
    )
  }

  return next(root, args, context, info)
}

export { getUserFromToken, authenticated, authorized, createToken }
