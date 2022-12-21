import IMatches from "@/interfaces/IMatches"
import ITeam from "@/interfaces/ITeam"
import IPlayer from "@/interfaces/IPlayer"
import { createStore, Store } from "vuex"
import { InjectionKey } from "vue"

interface State {
    matches: IMatches[],
    teams: ITeam[],
    players: IPlayer[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        matches: [],
        teams: [],
        players: []
    }
})