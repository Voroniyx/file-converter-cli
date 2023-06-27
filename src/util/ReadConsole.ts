import prompts from "prompts";

export type option = `--${string}`
export type filetype = "json" | "xml";

export interface IArgument {
    key: string,
    description: string
}

export interface IOption {
    identifier: option,
    description: string
}

export interface IReadConsoleOptions {
    arguments: IArgument[],
    options?: IOption[]
}

export default class ReadConsole {
    public arguments: IArgument[];
    public options: IOption[];

    constructor(options: IReadConsoleOptions) {
        this.arguments = options.arguments;
        this.options = options.options ?? null; 
    }

    
}