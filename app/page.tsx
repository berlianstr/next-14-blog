import Container from "@/components/Container";
import Image from "next/image";
import pokemonImg from "@/public/pokemon.jpeg";

export default async function Home() {
  return (
    <div className="relative flex flex-col gap-8 py-8">
      <Container className="pt-20 flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto  items-center ">
        <div className={`md:w-8/12   md:-order-last`}>
          <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide mt-4 lg:leading-tight text-left">
            Catch 'Em All: Explore and Discover Your Favorite Pokémon!
          </h2>
        </div>
        <div className="md:w-5/12 w-full flex-col md:h-[500px] h-[300px] flex-shrink-0 relative bg-gray-100 animate-bounce ">
          <Image
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw "
            src={pokemonImg}
            fill
            className="rounded-lg object-cover object-center mb-9 "
            alt={"thumbnail"}
          />
        </div>
      </Container>
    </div>
  );
}
