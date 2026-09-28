import { PokemonResumo } from "../models/Pokemon";

function formatarPokemon(pokemon: PokemonResumo): string {
    return `#{pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")}`;
}

function formatarMenu(): string {
    return [
        "",
        "1 - Buscar e adicionar Pokemon",
        "2 - Listar catálogo",
        "3 - Remover Pokemon",
        "0 - Sair",
    ].join("\n");
}

export {formatarMenu, formatarPokemon};