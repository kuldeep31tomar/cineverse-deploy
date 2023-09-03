"use client";
import react from "react";
import Link from "next/link";
import {
  fetchMovies,
  selectLoadingState,
  selectMovies,
  selectSearch,
  selectSearchLoading,
  useDispatch,
  useSelector,
} from "../redux";
import { useState, useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Home() {
  const dispatch = useDispatch();

  // selectors
  const data = useSelector(selectMovies);
  const search = useSelector(selectSearch);
  const loading = useSelector(selectLoadingState);
  const searching = useSelector(selectSearchLoading);

  const [movies, setMovies] = useState<any[]>([]);
  const [searchMovies, setSearchMovies] = useState<any[]>([]);

  const currentPageRef = useRef(1);

  // infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        loading === "idle"
      ) {
        currentPageRef.current += 1;
        dispatch(fetchMovies(currentPageRef.current));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // fetch upcomming movies
  useEffect(() => {
    dispatch(fetchMovies(currentPageRef.current));
  }, []);

  // effect to parse upcomming movies data
  useEffect(() => {
    if (loading === "successful") {
      setMovies(JSON.parse(data));
    }
  }, [data, loading]);

  //effect to parse search result data
  useEffect(() => {
    if (searching === "successful") {
      setSearchMovies(JSON.parse(search));
    } else {
      setSearchMovies([]);
    }
  }, [search, searching]);

  // console.log(searchMovies)

  if (searchMovies.length > 0) {
    if (searching === 'successful') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
          {searchMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieID={movie.id}
              movieTitle={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
              ImageUrl={movie.poster_path}
            />
          ))}
        </div>
      )
    } else {
      return <Loader />
    }
  } else {
    if (loading === 'successful') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieID={movie.id}
              movieTitle={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
              ImageUrl={movie.poster_path}
            />
          ))}
        </div>
      )
    } else {
      return <Loader />
    }
  }
}
