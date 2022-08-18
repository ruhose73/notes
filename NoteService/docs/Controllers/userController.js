//! HEADER
/**
 * @swagger
 * tags:
 *   name: User Controller
 *   description: The controller is responsible for user params
 */

//! SETNAME
/**
 * @swagger
 * user/setName:
 *  post:
 *   summary: SET NAME
 *   tags: [User Controller]
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: userId
 *      schema:
 *      type: number
 *      required: true
 *      description: user id
 *      example: 1
 *    - in: body
 *      name: name
 *      schema:
 *      type: string
 *      required: true
 *      description: user name
 *      example: Misha
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SetName'
 *   responses:
 *       200:
 *         description: Имя изменено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Accepted'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Internal'
 */

//! UPDATE PASSWORD
/**
 * @swagger
 * user/updatePassword:
 *  post:
 *   summary: UPDATE PASSWORD
 *   tags: [User Controller]
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: userId
 *      schema:
 *      type: number
 *      required: true
 *      description: user id
 *      example: 1
 *    - in: body
 *      name: oldPassword
 *      schema:
 *      type: string
 *      required: true
 *      description: old password
 *      example: admin1234
 *    - in: body
 *      name: newPassword
 *      schema:
 *      type: string
 *      required: true
 *      description: new password
 *      example: qwerty1234
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdatePassword'
 *   responses:
 *       200:
 *         description: Пароль изменен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Accepted'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Internal'
 */


//! UPDATE
/**
 * @swagger
 * user/delete/:userId:
 *  get:
 *   summary: DELETE USER
 *   tags: [User Controller]
 *   parameters:
 *    - in: path
 *      name: userId
 *      schema:
 *      type: string
 *      description: id of the team
 *      example: /user/delete/1
 *   responses:
 *       200:
 *         description: Пользователь удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Accepted'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Internal'
 */