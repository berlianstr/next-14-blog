"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import { fetchPokemonDetails } from "@/utils/service";
import Image from "next/image";

export default function DetailBlogs({
  params,
}: {
  params: { pokemonId: string };
}) {
  const [pokemon, setPokemon] = useState<any>(null);
  const [isCaught, setIsCaught] = useState(false);
  const [nickname, setNickname] = useState("");
  const [showNicknameInput, setShowNicknameInput] = useState(false);

  useEffect(() => {
    async function getPokemonDetails() {
      const data = await fetchPokemonDetails(params.pokemonId);
      setPokemon(data);
    }

    getPokemonDetails();
  }, [params.pokemonId]);

  const handleCatch = () => {
    const success = Math.random() < 0.5; // 50% success rate
    if (success) {
      setIsCaught(true);
      setShowNicknameInput(true);
    } else {
      alert("The Pokémon escaped!");
    }
  };

  const handleAddToMyList = () => {
    const myPokemonList =
      JSON.parse(localStorage.getItem("myPokemonList")!) || [];
    const newPokemon = { id: pokemon.id, name: pokemon.name, nickname };
    myPokemonList.push(newPokemon);
    localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));
    alert(`${nickname || pokemon.name} has been added to your list!`);
    setShowNicknameInput(false);
  };

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col gap-8 py-8">
      <Container className="pt-20 flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center">
        <div className="md:w-6/12 w-full flex-col md:h-[500px] h-[300px] flex-shrink-0 relative bg-gray-100">
          <Image
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            src={pokemon.sprites.front_default}
            fill
            className="rounded-lg object-cover object-center mb-9"
            alt={pokemon.name}
          />
        </div>
        <div className="md:w-6/12 md:ml-12 lg:ml-16 md:order-last flex flex-col gap-4">
          <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide mt-4 lg:leading-tight text-left">
            {pokemon.name}
          </h2>
          <div className=" text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200 ">
            <div className="">
              <h3>Types</h3>
              <div className="ml-2">
                {pokemon.types.map((typeInfo: any, index: number) => (
                  <li key={index}>{typeInfo.type.name}</li>
                ))}
              </div>
            </div>
            <div className="">
              <h3>Moves</h3>
              <div className="ml-2">
                {pokemon.moves
                  .slice(0, 5)
                  .map((moveInfo: any, index: number) => (
                    <li key={index}>{moveInfo.move.name}</li>
                  ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleCatch}
            disabled={isCaught}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isCaught ? "Caught!" : "Catch this Pokémon"}
          </button>

          {showNicknameInput && (
            <div className="nickname-section mt-4">
              <input
                type="text"
                placeholder="Give your Pokémon a nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="border p-2 rounded"
              />
              <button
                onClick={handleAddToMyList}
                className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
              >
                Add to My Pokémon List
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
