import express from "express";
import {
  createMovie,
  getMovies,
  getMovieById,
  getTopRecommendedMovies,
} from "./movie.controller";
import { MovieSchema } from "./movie.validation";
import { validate } from "../../middlewares/validate";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", validate(MovieSchema), createMovie);
router.get("/recommended", getTopRecommendedMovies);

export default router;
