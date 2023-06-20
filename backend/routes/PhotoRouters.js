const express = require('express');
const router = express.Router();

// Controller
const { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotosById, updatePhoto, likePhoto, commentPhoto, searchPhotos } = require('../controllers/PhotoController');

//Middleware
const { photoInsertValidation, photoUpdateValidation, commentValidation } = require("../middlewares/PhotoValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhotos)
router.get("/search", authGuard, searchPhotos)

router.get("/:id", authGuard, getPhotosById)
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put("/like/:id", authGuard, likePhoto)
router.put("/comment/:id", authGuard, commentValidation(), validate, commentPhoto)


module.exports = router