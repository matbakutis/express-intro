const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.send('hi, im the information');
});

app.get('/tacos', (req, res)=>{
	res.json({
		"taco": 52,
		"meat": "carne asada"
	});
});

app.get('/secondRoute', (req, res)=>{
	console.log(req);
	res.send('check the log');
});

app.listen(3000, ()=>{
	console.log('im listening on port 3000');
});