import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-2">
        <h1 className="font-bold text-xl my-2">Featured Albums</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <AlbumItems
              key={index}
              image={items.image}
              name={items.name}
              desc={items.desc}
              id={items.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-2">
        <h1 className="font-bold text-xl my-2">Top Songs</h1>
        <div className="flex overflow-auto">
          {songsData.map((items, index) => (
            <SongItems
              key={index}
              name={items.name}
              image={items.image}
              file={items.file}
              desc={items.desc}
              duration={items.duration}
              id={items.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
