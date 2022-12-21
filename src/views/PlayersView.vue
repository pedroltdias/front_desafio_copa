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
		}
	}
})

</script>