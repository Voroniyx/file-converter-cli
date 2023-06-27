export type promptType = "text" | "number" | "confirm" | "list" | "toggle" | "select"

export interface IBasePrompt {
    type: promptType,
    name: string,
    message: string
}

export interface ITextPrompt extends IBasePrompt {
    initial: string,
}

export interface INumberPrompt extends IBasePrompt {
    initial: number,
    min: number,
    max: number,
    float: boolean
}

export interface IConfirmPrompt extends IBasePrompt {
    initial: boolean
}

export interface IListPrompt extends IBasePrompt {
    initial: boolean | string,
    separator: string,
}

export interface ITogglePrompt extends IBasePrompt {
    initial: boolean,
    active: string,
    inactive: string
}

export interface ISelectPromptChoice {
    title: string,
    description: string,
    value: string,
    disabled: boolean
}

export interface ISelectPrompt extends IBasePrompt {
    initial: number,
    hint: string,
    warn: string,
    choices: ISelectPromptChoice[]
}