"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Home, X } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuery,
  searchSlice,
  selectSearch,
  selectSearchLoading,
} from "../redux";
import Link from "next/link";

function NavBar() {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearch);
  const searching = useSelector(selectSearchLoading);
  let placeholder = "Search";

  const [searchInput, setSearchInput] = useState<string>("");
  const handlesearch = (query: string) => {
    if (searchInput.length > 0) {
      dispatch<any>(fetchQuery(query));
    } else {
      alert("Enter a name to search!");
    }
  };
  const clearSearchHandler = (e: any) => {
    placeholder = "Search";
    dispatch(searchSlice.actions.clearSearch());
  };
  return (
    <div className="border-b">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center w-full max-w-sm space-x-2">
          <div className="flex items-center w-full max-w-sm space-x-2">
            <Input
              placeholder={placeholder}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {searching === "successful" ? (
              <Button onClick={(e) => clearSearchHandler(e)}>Clear</Button>
            ) : (
              <Button onClick={() => handlesearch(searchInput)}>Search</Button>
            )}
          </div>
        </div>
        <div className="flex items-center pl-2 space-x-2 lg:space-x-6">
          <Link href={"/"}>
            <Button variant="outline" size="icon">
              <Home className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <ModeToggle />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
