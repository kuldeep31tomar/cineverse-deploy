"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

interface MovieCardProps {
  movieID: number;
  movieTitle: string;
  description: string | null;
  rating: number | null;
  ImageUrl: string | null;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movieID,
  movieTitle,
  description,
  rating,
  ImageUrl,
}) => {
  const truncatedTitle =
    movieTitle.length > 20 ? `${movieTitle.substring(0, 20)}...` : movieTitle;
  return (
    <>
      <Link href={`/details/${movieID}`}>
        <div className="flex flex-col p-4 m-2 border rounded-lg shadow-sm bg-card text-card-foreground hover:border-primary min-h-[60vh]">
          <div className="m-auto">
            {ImageUrl === null ? (
              <div className="h-[200px] w-[185px] text-sm">
                No image url found
              </div>
            ) : (
              <Image
                src={`https://image.tmdb.org/t/p/w185${ImageUrl}`}
                height={200}
                width={185}
                alt=""
              />
            )}
          </div>
          <div className="flex justify-between pt-2">
            <div className="text-sm font-medium">{truncatedTitle}</div>
            <div className="text-sm font-bold">{rating}</div>
          </div>
          <div className="pt-4 text-sm font-light">
            {description?.substring(0, 35) + " ..."}
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
