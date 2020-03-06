(async () => {

	let eventRes = await fetch('http://localhost:4000/events');
	let myEventData = await eventRes.json();

	myEventData.forEach( async (event)=>{
		console.log('event: ', event.asset);

		let assetRes = await fetch(`http://localhost:4000/assets/${event.asset}`);
		let myAssets = await assetRes.json();
		
		console.log('assetRes: ', myAssets);

	})

})();

