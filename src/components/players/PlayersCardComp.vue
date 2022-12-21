<template>
	<div class="card mt-3">
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{{ player.name}}</p>
					<p class="subtitle is-6">{{`${player.position}, ${player.age} anos, ${player.team_name}`}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import IPlayer from '@/interfaces/IPlayer';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: "PlayersCardComp",
	props: {
		player: {
			type: Object as PropType<IPlayer>,
			required: true
		}
	}
})

</script>

<style>
.card{
	background-color: #2B2F40;
}
.title{
	color: #fff;
}
.subtitle{
	color: #fff;
}
</style>