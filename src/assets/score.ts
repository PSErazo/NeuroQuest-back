import { asapScheduler } from "rxjs";

export interface Score extends Game {
    userId: string;
    score: number;
}

export interface Game{
    nameGame?: string;
    gameId: number;
}

/*
Game : 1 - sequence
Game : 2 - visual
Game : 3 - reaction
*/