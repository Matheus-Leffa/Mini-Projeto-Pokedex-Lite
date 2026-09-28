import { PokemonResumo } from "./Pokemon";

class CatalogoPokemon{
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

        if(jaExiste){
            console.log(`${pokemon.nome} já está no catálogo!`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`${pokemon.nome} adicionado ao catálogo.`);
    }

    listar(): void {
    if (this.pokemons.length === 0) {
      console.log("Catálogo vazio.");
      return;
    }

    this.pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")}`
      );
    });
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log("Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log("Pokémon removido do catálogo.");
  }
}