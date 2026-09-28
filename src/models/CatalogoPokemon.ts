import { PokemonResumo } from "./Pokemon";
import { carregarPokemons, salvarPokemons } from "../services/BoxService";

class CatalogoPokemon{
    private pokemons: PokemonResumo[] = [];

    async carregar(): Promise<void> {
      this.pokemons = await carregarPokemons();
    }

    async adicionar(pokemon: PokemonResumo): Promise<void> {
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

        if(jaExiste){
            console.log(`${pokemon.nome} já está no catálogo!`);
            return;
        }

        this.pokemons.push(pokemon);
        await salvarPokemons(this.pokemons);
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

    async remover(id: number): Promise<void> {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log("Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
  await salvarPokemons(this.pokemons);
    console.log("Pokémon removido do catálogo.");
  }
}

export {CatalogoPokemon};