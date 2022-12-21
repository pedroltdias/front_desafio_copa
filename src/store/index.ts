import IMatches from "@/interfaces/IMatches"
import ITeam from "@/interfaces/ITeam"
import IPlayer from "@/interfaces/IPlayer"
import { createStore } from "vuex"


interface State {
    matches: IMatches[],
    teams: ITeam[],
    players: IPlayer[]
}

export const store = createStore<State>({
    state: {
        matches: [
            
        ]
    }
})