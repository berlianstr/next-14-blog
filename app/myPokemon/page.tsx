"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import Image from "next/image";

export default function MyPokemonList() {
  const [myPokemonList, setMyPokemonList] = useState<any>([]);

  useEffect(() => {
    const storedPokemonList =
      JSON.parse(localStorage.getItem("myPokemonList")!) || [];
    setMyPokemonList(storedPokemonList);
  }, []);

  const handleRelease = (index: number) => {
    const updatedList = [...myPokemonList];
    updatedList.splice(index, 1);
    setMyPokemonList(updatedList);
    localStorage.setItem("myPokemonList", JSON.stringify(updatedList));
  };

  if (myPokemonList.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center">You haven't caught any Pokémon yet.</p>
      </div>
    );
  }

  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold text-center mb-8">My Pokémon List</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {myPokemonList.map((pokemon: any, index: number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">
                {pokemon.nickname || pokemon.name}
              </h2>
              <p className="text-gray-700">Original Name: {pokemon.name}</p>
              <button
                onClick={() => handleRelease(index)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Release
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
