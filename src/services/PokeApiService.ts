import { PokemonNotFoundError } from "../models/CustomErrors";
import { PokemonResumo, PokemonApiResponse} from "../models/Pokemon";
 
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null>{
    
    try {
        const resposta = await fetch(API_URL + nomeOuId);

        if(resposta.status === 404){
            throw new PokemonNotFoundError(nomeOuId);
        }

        if(!resposta.ok){
            throw new Error(`Erro ao consultar a PokeAPI: ${resposta.status}`);
        }

        const dado: PokemonApiResponse = await resposta.json();

        const pokemon: PokemonResumo = {
            id: dado.id,
            nome: dado.name,
            tipos: dado.types.map(item => item.type.name),
            altura: dado.height,
            peso: dado.weight
        }
            
        ;

        console.log("Pokemon encontrado: ", pokemon.nome);

        return pokemon;
        
    } catch (error) {
        if (error instanceof PokemonNotFoundError) {
        console.log(error.message);
        return null;
    }

        console.log("Erro ao consultar a PokeAPI:", error);
        return null;
    }
}

export {buscarPokemon};