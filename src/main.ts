import { TerminalController } from "./controllers/TerminalController";
import { CatalogoPokemon } from "./models/CatalogoPokemon";
import { formatarMenu } from "./utils/textFormatters";
import { buscarPokemon } from "./services/PokeApiService";

async function executar(): Promise<void>{
    const terminal = new TerminalController();
    const catalogo = new CatalogoPokemon;

    try {
        let executando = true;

        while(executando){
            console.log(formatarMenu());
            const opcao = await terminal.perguntar("Escolha uma opção: ");

            switch (opcao){
                case "1": {
                    const nomeOuId = await terminal.perguntar("Nmoe ou ID: ");
                    const pokemon = await buscarPokemon(nomeOuId);

                    if(pokemon){
                        catalogo.adicionar(pokemon);
                    }
                    break;
                }

                case "2":
                    catalogo.listar();
                    break;

                case "3": {
                    const valor = await terminal.perguntar("ID para remover: ");
                    const id = Number(valor);

                    if(!Number.isInteger(id)){
                        console.log("Informe um ID numérico válido!");
                        break;
                    }

                    catalogo.remover(id);
                    break;
                }

                case "0":
                    executando = false;
                    break;

                default:
                    console.log("Opçao inválida!");
            }
        }
    } finally {
        terminal.fechar();
    }
}

executar().catch((erro: unknown) => {
    console.error("Erro inesperado:", erro);
    process.exitCode = 1;
});

