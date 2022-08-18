//! REGISTER AND LOGIN FORM (REQ)
/**
 * @swagger
 * components:
 *   schemas:
 *     SignInUp:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *          email:
 *              type: string
 *              description: User email
 *          password:
 *              type: string
 *              description: User password
 *       example:
 *         email: university@mail.ru
 *         password: qwerty1234
 */

//! REGISTER AND LOGIN FORM (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     UserDTO:
 *       type: object
 *       required:
 *         - token
 *         - id
 *         - email
 *         - isActivated
 *       properties:
 *          token:
 *              type: string
 *              description: Access Token
 *          id:
 *              type: number
 *              description: user id
 *          email:
 *              type: string
 *              description: user email
 *          isActivated:
 *              type: boolean
 *              description: Activation status
 *       example:
 *         token: o0acs4x9aXc9rpbyzZBjDQ84GQnKwblb
 *         id: 1
 *         email: ruhose73@gmail.com
 *         isActivated: null
 */
