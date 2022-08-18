//! SET NAME
/**
 * @swagger
 * components:
 *   schemas:
 *     SetName:
 *       type: object
 *       required:
 *         - userId
 *         - name
 *       properties:
 *          userId:
 *              type: number
 *              description: User id
 *          name:
 *              type: string
 *              description: User name
 *       example:
 *         userId: 1
 *         name: Misha
 */

//! UPDATE PASSWORD
/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePassword:
 *       type: object
 *       required:
 *         - userId
 *         - oldPassword
 *         - newPassword
 *       properties:
 *          userId:
 *              type: number
 *              description: User id
 *          oldPassword:
 *              type: string
 *              description: User password
 *          newPassword:
 *              type: string
 *              description: New user password
 *       example:
 *         userId: 1
 *         oldPassword: admin1234
 *         newPassword: qwerty1234
 */

//! DELETE USER
/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteUser:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *          id:
 *              type: number
 *              description: user id
 *       example:
 *         id: 1
 */
