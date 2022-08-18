//! API NETWORK STATUS



//! BADREQUEST
/**
 * @swagger
 * components:
 *   schemas:
 *     BadRequest:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *          status:
 *              type: integer
 *              description: Bad Request Status
 *          message:
 *              type: string
 *              description: Bad Request Error Message
 *       example:
 *         status: 400
 *         message: Bad Request Error Message
 */


//! INTERNAL
/**
 * @swagger
 * components:
 *   schemas:
 *     Internal:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *          status:
 *              type: integer
 *              description: Internal Status
 *          message:
 *              type: string
 *              description: Internal Error Message
 *       example:
 *         status: 500
 *         message: Internal Error Message
 */

//! BADREQUEST
/**
 * @swagger
 * components:
 *   schemas:
 *     Accepted:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *          status:
 *              type: integer
 *              description: Accepted Status
 *          message:
 *              type: string
 *              description: Accepted Message
 *       example:
 *         status: 202
 *         message: Успешно
 */

