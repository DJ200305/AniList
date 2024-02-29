const express = require("express");

const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const searchAnimeController = require("../controllers/searchAnimeController");
const searchMangaController = require("../controllers/searchMangaController");
const animeIndividualController = require("../controllers/animeIndividualController");
const mangaIndividualController = require("../controllers/mangaIndividualController");
const characterController = require("../controllers/characterController");
const staffController = require("../controllers/staffController");
const voiceArtistController = require("../controllers/voiceArtistController");
const searchCharacterController = require("../controllers/searchCharacterController");
const searchStaffController = require("../controllers/searchStaffController");
const reviewController = require("../controllers/reviewController");
const writeReviewAnimeController = require("../controllers/writeReviewAnimeController");
const writeReviewMangaController = require("../controllers/writeReviewMangaController");
const userController = require("../controllers/userController");
// work in progress
const adminController = require("../controllers/adminController");


// all routers
const webRouter = express.Router();
const searchRouter = express.Router();
const adminRouter = express.Router();


// all routes
webRouter.get("/", homeController);

webRouter.get("/login", loginController.loginControllerGET);
webRouter.post("/login", loginController.loginControllerPOST);
webRouter.get("/logout", loginController.logoutControllerGET);

webRouter.get("/signup", signupController.signupControllerGET);
webRouter.post("/signup", signupController.signupControllerPOST);


// anime individual
webRouter.get(
    "/anime/:id/:name",
    animeIndividualController.animeIndividualControllerGET
);
webRouter.post(
    "/anime/:id/:name",
    animeIndividualController.animeIndividualControllerPOST
);
webRouter.get(
    "/anime/:id/:name/reviews",
    animeIndividualController.animeIndividualReviewControllerGET
);
webRouter.get("/anime/:id/:name/social", animeIndividualController.animeIndividualSocialControllerGET)


// manga individual
webRouter.get(
    "/manga/:id/:name",
    mangaIndividualController.mangaIndividualControllerGET
);
webRouter.post(
    "/manga/:id/:name",
    mangaIndividualController.mangaIndividualControllerPOST
);
webRouter.get(
    "/manga/:id/:name/reviews",
    mangaIndividualController.mangaIndividualReviewControllerGET
);
webRouter.get("/manga/:id/:name/social", mangaIndividualController.mangaIndividualSocialControllerGET)


// character individual
webRouter.get(
    "/character/:id/:name",
    characterController.characterControllerGET
);
webRouter.post(
    "/character/:id/:name",
    characterController.characterControllerPOST
);


// staff inidvidual
webRouter.get("/staff/:id/:name", staffController.staffControllerGET);
webRouter.post("/staff/:id/:name", staffController.staffControllerPOST);

// voice actor individual
webRouter.get("/va/:id/:name", voiceArtistController.voiceArtistControllerGET);
webRouter.post("/va/:id/:name", voiceArtistController.voiceArtistControllerPOST)

// user individual
webRouter.get("/home", userController.userHomeControllerGET);
webRouter.get("/settings", userController.userSettingsControllerGET);
webRouter.post("/settings", userController.userSettingsControllerPOST)
webRouter.get("/user/:name", userController.userProfileControllerGET);
webRouter.get(
    "/user/:name/animeList",
    userController.userAnimeListControllerGET
);
webRouter.get(
    "/user/:name/mangaList",
    userController.userMangaListControllerGET
);
webRouter.get(
    "/user/:name/anime/reviews",
    reviewController.userAnimeReviewControllerGET
);
webRouter.get(
    "/user/:name/manga/reviews",
    reviewController.userMangaReviewControllerGET
);


// review individual
webRouter.get("/review/anime", reviewController.animeReviewControllerGET);
webRouter.get(
    "/review/anime/:id",
    reviewController.animeIndividualReviewControllerGET
);
webRouter.post(
    "/review/anime/:id",
    reviewController.animeIndividualReviewControllerPOST
);
webRouter.get("/review/manga", reviewController.mangaReviewControllerGET);
webRouter.get(
    "/review/manga/:id",
    reviewController.mangaIndividualReviewControllerGET
);
webRouter.post(
    "/review/manga/:id",
    reviewController.mangaIndividualReviewControllerPOST
);

webRouter.get(
    "/review/anime/editor/:id",
    writeReviewAnimeController.writeReviewAnimeControllerGET
);
webRouter.post(
    "/review/anime/editor/:id",
    writeReviewAnimeController.writeReviewAnimeControllerPOST
);

webRouter.get(
    "/review/manga/editor/:id",
    writeReviewMangaController.writeReviewMangaControllerGET
);
webRouter.post(
    "/review/manga/editor/:id",
    writeReviewMangaController.writeReviewMangaControllerPOST
);

// search anime
searchRouter.get("/anime", searchAnimeController.searchAnimeControllerGET);
searchRouter.post("/anime", searchAnimeController.searchAnimeControllerPOST);

// search manga
searchRouter.get("/manga", searchMangaController.searchMangaControllerGET);
searchRouter.post("/manga", searchMangaController.searchMangaControllerPOST);

// search character
searchRouter.get("/characters", searchCharacterController.searchCharacterControllerGET);
searchRouter.post("/characters", searchCharacterController.searchCharacterControllerPOST);

// search staff
searchRouter.get("/staff", searchStaffController.searchStaffControllerGET);
searchRouter.post("/staff", searchStaffController.searchStaffControllerPOST);

// work in progress
adminRouter.get("/", adminController.adminControllerGET);
adminRouter.get("/add/anime", adminController.adminAddAnimeControllerGET)
adminRouter.post("/add/anime", adminController.adminAddAnimeControllerPOST)
adminRouter.get("/add/manga", adminController.adminAddMangaControllerGET);
adminRouter.post("/add/manga", adminController.adminAddMangaControllerPOST);
adminRouter.get("/update/anime", adminController.adminUpdateAnimeControllerGET);
adminRouter.post("/update/anime", adminController.adminUpdateAnimeControllerPOST);
adminRouter.get("/update/manga", adminController.adminUpdateMangaControllerGET);
adminRouter.post("/update/manga", adminController.adminUpdateMangaControllerPOST);
adminRouter.get("/delete/anime", adminController.adminDeleteAnimeControllerGET);
adminRouter.post("/delete/anime", adminController.adminDeleteAnimeControllerPOST);
adminRouter.get("/delete/manga", adminController.adminDeleteMangaControllerGET);
adminRouter.post("/delete/manga", adminController.adminDeleteMangaControllerPOST);


module.exports = {
    webRouter,
    searchRouter,
    adminRouter,
};
