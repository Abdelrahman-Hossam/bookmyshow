import { Request, Response, NextFunction } from "express";
import * as Movieservice from "./movie.service";

export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = Movieservice.createMovie(req.body);
    res.status(201).json({ movie });
  } catch (error) {
    next(error);
  }
};

export const getMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await Movieservice.getAllMovies();
    res.status(200).json({ movies });
  } catch (error) {
    next(error);
  }
};

export const getMovieById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieById = await Movieservice.getMovieById(req.params.id);
    res.status(200).json({ movieById });
  } catch (error) {
    next(error);
  }
};

export const getTopRecommendedMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recommendedMovies = await Movieservice.getTopMoviesByVotes(5);
    res.status(200).json({ recommendedMovies });
  } catch (error) {
    next(error);
  }
};
