// "use client";
import React, { Suspense } from "react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { fetchPokemon } from "@/utils/service";

export default async function PokemonPage(context: {
  params: {};
  searchParams: { page: number };
}) {
  const allPokemon = await fetchPokemon(12);
  console.log(allPokemon);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <p className="text-center">Loading...</p>
        </div>
      }
    >
      <Container className="py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {allPokemon?.results.map((pokemon: any, index: number) => (
            <Card
              id={(index + 1).toString()}
              key={index}
              title={pokemon.name}
              description={`This is ${pokemon.name}.`} // You can customize the description as needed
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`} // Generate image URL based on index
            />
          ))}
        </div>

        {/* <Pagination currentPage={Number(context.searchParams.page)} /> */}
      </Container>
    </Suspense>
  );
}
