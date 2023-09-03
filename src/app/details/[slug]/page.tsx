"use client";

import Image from "next/image";
import { selectMovies } from "@/src/redux";
import { useState } from "react";
import { useSelector } from "react-redux";

interface MovieDetailsProps {
  params: {
    slug: any;
  };
}

export default function MovieDetails({ params }: MovieDetailsProps) {
  const movieID = params.slug;
  const data = useSelector(selectMovies);
  const [moviesData] = useState(JSON.parse(data));
  const movie = moviesData.find((data: any) => {
    return data.id === parseInt(movieID);
  });
  return (
    <div className="flex flex-col p-4 mt-4 lg:flex-row md:flex-row">
      <div className="m-auto">
        <Image
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          height={200}
          width={185}
          alt=""
        />
      </div>
      <div className="p-4 space-y-2 max-w-[90vw] lg:max-w-[70vw]">
        <div className="flex flex-row space-x-8">
          <div className="text-xl font-semibold">{movie.title}</div>
          <div className="text-lg font-semibold">
            Rating: {movie.vote_average}
          </div>
        </div>
        <div className="font-semibold text-md">
          {movie.release_date.split("-")[0]}
        </div>
        <div className="text-sm font-normal">{movie.overview}</div>
      </div>
    </div>
  );
}
