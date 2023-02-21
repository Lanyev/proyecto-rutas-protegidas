const router = require("express").Router();

const userServices = require("./users.services");
const passportJwt = require("../middlewares/auth.middleware");

//? /api/v1/users
router.get("/", userServices.getAllUsers);
router.post("/", userServices.postNewUser);

//? /api/v1/users/:id
router.get("/:id", passportJwt, userServices.getUserById);
router.patch("/:id", passportJwt, userServices.patchUser);
router.delete("/:id", passportJwt, userServices.deleteUser);

//? /api/v1/users/me
router.get("/me", passportJwt, userServices.getMyUser);
router.patch("/me", passportJwt, userServices.patchMyUser);
router.delete("/me", passportJwt, userServices.deleteMyUser);

module.exports = router;
