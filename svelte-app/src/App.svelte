<script>
	export let name;
	let [a,b]= [1,2];
</script>

<main>
	<h1>{name}!</h1>
	<input type="number" bind:value={a}/>
	<input type="number" bind:value={b}/>
	<span class="card">
		<div class="circle">
			<div class="starposition">
				<span class="star">
				</div>
			</div>
		</span>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	.card {
		width:50vw;
		height:75vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #d50000;
	}
	.circle {
		border-radius: 50%;
		width:35vw;
		height:60vh;
		background-color: #ffe0b2;
	}
	.starposition{
		position: relative;
		left:150px;
		top:100px;
	}
	.star {
		margin: 50px 0;
      	position: relative;
      	display: block;
      	color: #ffd600;
      	width: 0px;
      	height: 0px;
      	border-right: 100px solid transparent;
      	border-bottom: 70px solid #ffd600;
      	border-left: 100px solid transparent;
      	transform: rotate(35deg);
	}
	.star:before{
	  border-bottom: 80px solid #ffd600;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -45px;
      left: -65px;
      display: block;
      content: '';
      transform: rotate(-35deg);
	}
	.star:after{
		position: absolute;
      display: block;
      color: #ffd600;
      top: 3px;
      left: -105px;
      width: 0px;
      height: 0px;
      border-right: 100px solid transparent;
      border-bottom: 70px solid #ffd600;
      border-left: 100px solid transparent;
      transform: rotate(-70deg);
      content: '';
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
