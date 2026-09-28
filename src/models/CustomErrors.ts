class PokemonNotFoundError extends Error{
    constructor(nome: string){
        super(`Pokémon ${nome} não encontrado.`);

        this.name = "PokemonNotFoundError";
    }
}

export { PokemonNotFoundError };