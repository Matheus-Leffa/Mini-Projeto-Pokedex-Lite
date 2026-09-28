import { readFile, writeFile } from "fs/promises";
import { PokemonResumo } from "../models/Pokemon";

const BOX_FILE = "pc_box.json";

async function carregarPokemons(): Promise<PokemonResumo[]> {
	try {
		const conteudo = await readFile(BOX_FILE, "utf8");
		const pokemons: unknown = JSON.parse(conteudo);

		if (!Array.isArray(pokemons)) {
			throw new Error("O arquivo pc_box.json deve conter um array.");
		}

		return pokemons as PokemonResumo[];
	} catch (erro: unknown) {
		if (erro instanceof Error && "code" in erro && erro.code === "ENOENT") {
			return [];
		}

		throw erro;
	}
}

async function salvarPokemons(pokemons: PokemonResumo[]): Promise<void> {
	const conteudo = JSON.stringify(pokemons, null, 2);
	await writeFile(BOX_FILE, `${conteudo}\n`, "utf8");
}

export { carregarPokemons, salvarPokemons };
