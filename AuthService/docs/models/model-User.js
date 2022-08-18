/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *          id:
 *              type: integer
 *              description: The auto-generated id for user (autoIncrement)
 *          email:
 *              type: string
 *              description: User email
 *          password:
 *              type: string
 *              description: User password
 *          phone:
 *              type: string
 *              description: User phone number
 *          name:
 *              type: string
 *              description: User firstname
 *          activationLink:
 *              type: string
 *              description: Activation link for user, cannot use twice
 *          isActivated:
 *              type: boolean
 *              description: Activation user status
 */
