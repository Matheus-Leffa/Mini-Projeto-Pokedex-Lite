import { createInterface, Interface } from "readline/promises";
import { stdin, stdout} from "process";

class TerminalController{
    private terminal: Interface;

    constructor(){
        this.terminal = createInterface({
            input: stdin,
            output: stdout,
        });
    }

    async perguntar(mensagem: string): Promise<string>{
        const resposta = await this.terminal.question(mensagem);
        return resposta.trim();
    }

    fechar(): void {
        this.terminal.close();
    }
}

export {TerminalController};