<template>
	<div class="container">
		<PlayersComp @when-saving-player="savePlayer" />
		<PlayersCardComp v-for="(player, index) in players" :key="index" :player="player"/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayersComp from '@/components/players/PlayersComp.vue';
import IPlayer from '@/interfaces/IPlayer';
import PlayersCardComp from '@/components/players/PlayersCardComp.vue';
import http from '@/http';

export default defineComponent({
	name: "PlayersView",
	components: {
    PlayersComp,
    PlayersCardComp
},
	data() {
		return {
			players: [] as IPlayer[]
		}
	},
	methods: {
		savePlayer(player: IPlayer) {
			this.players.push(player)
		},
		async getAllPlayers() {
			try {
				const res = await http.get("/players")
				console.log(res.data)
				this.players = res.data
			} catch (error) {
				console.error()
			}
		},
	},
	created (){
		this.getAllPlayers()
	}
})

</script>