/* HOW-TO
	this is a sample level with everything you can use:
	"2.1" : {
		timer: 61*60,
		gravity: "down",
		spaceShipPosition: {
			x:1.02,
			y:12.0
		},
		platforms: [
			{
				"x":19.8,
				"y":2,
				type: "platform",
				orientation: "right",
			},
			{
				"x":15.8,
				"y":8.3,
				type: "platform",
				orientation: "up",
			}
		],
		mines : [
			{
				"x":0.3,
				"y":2,
				type: "mine",
				orientation: "left",
			},
			{
				"x":10.8,
				"y":0.3,
				type: "mine",
				orientation: "up",
			},
			{
				"x":10.8,
				"y":13.0,
				type: "mine",
				orientation: "down",
			},
			{
				"x":7.8,
				"y":8.2,
				type: "mine",
				orientation: "down",
			},
			{
				"x":0.3,
				"y":5.2,
				type: "mine",
				orientation: "left",
			},
			{
				"x":19.7,
				"y":5.2,
				type: "mine",
				orientation: "right",
			}
		],
		bombs: [
			{
					x:19.8,
					y:9.2,
					radius: 0.3,
					type: "bomb",
			}
		],
		warpZones: [
			{
				maxX: 10,
				minX: 0,
				maxY: 4,
				minY: 0, 
				color: "blue", 
				rotation: "right", 
				nbRotation: 2
			}
		],
		rest: [
			{
				x:19.8,
				y:1.2,
				angle:0,
				halfWidth:0.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				x:19.8,
				y:2.8,
				angle:0,
				halfWidth:0.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			//REST
			{
				x:16.8,
				y:7.8,
				angle:0,
				halfWidth:2.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:3,
				x:13.8,
				y:7.8,
				angle:0,
				halfWidth:0.2,
				halfHeight:3.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:4,
				x:5.2,
				y:8.8,
				angle:0,
				halfWidth:5.8,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:5,
				x:9.2,
				y:4.4,
				angle:0,
				halfWidth:4.8,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{ //that's how to declare a polygon
				id:6,
				x:13.5,
				y:4.4,
				polys: [
					[{x: -2.5, y: 0.3}, {x: 0.0, y: 0.3}, {x: 0, y:4}], // triangle
				],
				dynamic:false,
				type: "polygon",
				color: "#9187af"
			},
			{ //that's how to declare a circle
				id:7,
				x:10.5,
				y:4.4,
				radius: 0.3,
				dynamic:true,
				type: "circle",
				color: "#9187af"
			}
		],
	},
	================================================================
	and that how for the second part
	"1.2" : {
	timer: -1,
	gravity: "up",
	rotation: {
		rotation: "right", 
		nbRotation: 2
	},
	platforms: [
		{
			"x":10.7,
			"y":3.3,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 14.5,
			y: 5,
			halfWidth: 1.7,
			halfHeight: 0.7,
			dynamic: false
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 18,
			y: 5,
			radius: 0.7,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 4.2,
			y: 1,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 4.2,
			y: 10,
		},
	],
	rest: [
		{
			x:1.8,
			y:6.0,
			angle:0,
			halfWidth:1.7,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},

*/


var spaceShipLevels = {
	"1.1" : {
		timer: -1,
		gravity: "down",
		spaceShipPosition: {
			x:1.02,
			y:12.0
		},
		platforms: [
			{
				id:0,
				"x":9.0,
				"y":13.0,
				type: "platform",
				orientation: "down",
			},
			{
				id:1,
				"x":12.0,
				"y":8.4,
				type: "platform",
				orientation: "up",
			},
			{
				id:2,
				"x":15.0,
				"y":13.0,
				type: "platform",
				orientation: "down",
			}
		],
		mines : [
		],
		bombs: [
		],
		warpZones: [
		],
		rest: [
			{
				id:0,
				x:12.3,
				y:7.8,
				angle:0,
				halfWidth:4.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:1,
				x:2.3,
				y:8.0,
				angle:0,
				halfWidth:0.2,
				halfHeight:5.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:2,
				x:5.0,
				y:5.2,
				angle:0,
				halfWidth:0.2,
				halfHeight:5.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:3,
				x:7.8,
				y:8.0,
				angle:0,
				halfWidth:0.2,
				halfHeight:5.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:4,
				x:10.3,
				y:2.2,
				angle:0,
				halfWidth:0.2,
				halfHeight:3.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
		],
	},
	"9.1" : {
		timer: 61*60,
		gravity: "down",
		spaceShipPosition: {
			x:1.02,
			y:12.0
		},
		platforms: [
			{
				id:0,
				"x":19.8,
				"y":2,
				type: "platform",
				orientation: "right",
			},
			{
				id:1,
				"x":15.8,
				"y":8.3,
				type: "platform",
				orientation: "up",
			}
		],
		mines : [
			{
				id:0,
				"x":0.3,
				"y":2,
				type: "mine",
				orientation: "left",
			},
			{
				id:1,
				"x":10.8,
				"y":0.3,
				type: "mine",
				orientation: "up",
			},
			{
				id:2,
				"x":10.8,
				"y":13.0,
				type: "mine",
				orientation: "down",
			},
			{
				id:3,
				"x":7.8,
				"y":8.2,
				type: "mine",
				orientation: "down",
			},
			{
				id:4,
				"x":0.3,
				"y":5.2,
				type: "mine",
				orientation: "left",
			},
			{
				id:5,
				"x":19.7,
				"y":5.2,
				type: "mine",
				orientation: "right",
			}
		],
		bombs: [
	/*
			{
					id:0,
					x:19.8,
					y:9.2,
					radius: 0.3,
					type: "bomb",
			}
	*/
		],
		warpZones: [
			{
				maxX: 10,
				minX: 0,
				maxY: 4,
				minY: 0, 
				color: "blue", 
				rotation: "right", 
				nbRotation: 2
			}
		],
		rest: [
			{
				id:0,
				x:19.8,
				y:1.2,
				angle:0,
				halfWidth:0.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:1,
				x:19.8,
				y:2.8,
				angle:0,
				halfWidth:0.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			//REST
			{
				id:2,
				x:16.8,
				y:7.8,
				angle:0,
				halfWidth:2.64,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:3,
				x:13.8,
				y:7.8,
				angle:0,
				halfWidth:0.2,
				halfHeight:3.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:4,
				x:5.2,
				y:8.8,
				angle:0,
				halfWidth:5.8,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:5,
				x:9.2,
				y:4.4,
				angle:0,
				halfWidth:4.8,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:6,
				x:13.5,
				y:4.4,
				polys: [
					[{x: -2.5, y: 0.3}, {x: 0.0, y: 0.3}, {x: 0, y:4}], // triangle
				],
				dynamic:false,
				type: "polygon",
				color: "#9187af"
			}
		],
	},
	"10.1" : {
		timer: 31*60,
		gravity: "right",
		spaceShipPosition: {
			x:2.02,
			y:2.0
		},
		platforms: [
			{
				id:0,
				"x":14.8,
				"y":0.2,
				type: "platform",
				orientation: "up",
			}
		],
		mines : [
			{
				id:0,
				"x":19.7,
				"y":2,
				type: "mine",
				orientation: "right",
			},
			{
				id:1,
				"x":19.7,
				"y":5,
				type: "mine",
				orientation: "right",
			},
			{
				id:2,
				"x":16.7,
				"y":0.2,
				type: "mine",
				orientation: "up",
			},
		],
		bombs: [
		],
		warpZones: [
			{
				maxX: 20,
				minX: 0,
				maxY: 7,
				minY: 0,
				color: "blue", 
				rotation:"right", 
				nbRotation: 1,
			},
			{
				maxX: 20,
				minX: 10,
				maxY: 13,
				minY: 8,
				color: "blue", 
				rotation:"left", 
				nbRotation: 2
			},
		],
		rest: [
			{
				id:0,
				x:13.5,
				y:0.2,
				polys: [
					[{x: -2.5, y: 0.0}, {x: 0.0, y: 0.0}, {x: 0, y:9}], // triangle
				],
				dynamic:false,
				type: "polygon",
				color: "#9187af"
			},
		]
	},
	"8.1" : {
		timer: 51*60,
		gravity: "right",
		spaceShipPosition: {
			x:12.5,
			y:7.0
		},
		platforms: [
			{
				id:0,
				"x":1.8,
				"y":0.2,
				type: "platform",
				orientation: "up",
			},
			{
				id:1,
				x: 11.0,
				y: 13,
				type:"platform",
				orientation:"down"
			}
		],
		mines : [
			{
				id:0,
				"x":14.7,
				"y":0.2,
				type: "mine",
				orientation: "up",
			},
			{
				id:1,
				"x":19.7,
				"y":5,
				type: "mine",
				orientation: "right",
			},
			{
				id:2,
				"x":16.7,
				"y":0.2,
				type: "mine",
				orientation: "up",
			}, 
			{
				id: 3,
				x: 14.7,
				y:13.0,
				type:"mine",
				orientation: "down"
			},
			{
				id:4,
				x: 16.7,
				y: 13.0,
				type:"mine",
				orientation: "down"
			},
			{
				id:5,
				x: 5.0,
				y:0.2,
				type:"mine",
				orientation:"up"
			},
			{
				id:6,
				x: 9.0,
				y:0.2,
				type:"mine",
				orientation:"up"
			},
			{
				id: 7,
				x: 4.7,
				y:13.0,
				type:"mine",
				orientation: "down"
			},
		],
		bombs: [
		],
		warpZones: [
			{
				maxX: 20,
				minX: 12,
				maxY: 6.3,
				minY: 0,
				color: "blue", 
				rotation:"left", 
				nbRotation: 1,
			},
			{
				maxX: 20,
				minX: 12,
				maxY: 13,
				minY: 7.8,
				color: "blue", 
				rotation:"right", 
				nbRotation: 1
			},
		],
		rest: [
		]
	},
	"11.1" : {
		timer: -1,
		gravity: "right",
		spaceShipPosition: {
			x:10.5,
			y:7.0
		},
		platforms: [
			{
				id:0,
				"x":0.2,
				"y":0.7,
				type: "platform",
				orientation: "left",
			},
			{
				id:1,
				x: 0.2,
				y: 2.2,
				type:"platform",
				orientation:"left"
			},
			{
				id:2,
				"x":0.2,
				"y":12.4,
				type: "platform",
				orientation: "left",
			},
			{
				id:3,
				x: 0.2,
				y: 10.8,
				type:"platform",
				orientation:"left"
			},
			{
				id:4,
				x: 14.48,
				y: 10.8,
				type:"platform",
				orientation:"right"
			},
			{
				id:5,
				x: 19.2,
				y: 13.0,
				type:"platform",
				orientation:"down"
			}
		],
		mines : [
			{
				id:0,
				"x":3.0,
				"y":4.2,
				type: "mine",
				orientation: "right",
			},
			{
				id:1,
				"x":19.7,
				"y":5,
				type: "mine",
				orientation: "right",
			},
			{
				id:2,
				"x":16.7,
				"y":0.2,
				type: "mine",
				orientation: "up",
			}, 
			{
				id: 3,
				x: 3.0,
				y:8.3,
				type:"mine",
				orientation: "right"
			},
			{
				id:4,
				x: 3.0,
				y: 6.0,
				type:"mine",
				orientation: "right"
			},
			{
				id:5,
				x: 14.5,
				y: 12.5,
				type:"mine",
				orientation: "right"
			},
		],
		bombs: [
		],
		warpZones: [
			{
				maxX: 20,
				minX: 12,
				maxY: 6.3,
				minY: 0,
				color: "blue", 
				rotation:"left", 
				nbRotation: 1,
			},
			{
				maxX: 6,
				minX: 0,
				maxY: 14,
				minY: 7.8,
				color: "blue", 
				rotation:"right", 
				nbRotation: 1
			},
			{
				maxX: 6,
				minX: 0,
				maxY: 5.0,
				minY: 0,
				color: "blue",
				rotation: "left",
				nbRotation: 2
			}
		],
		rest: [
			{
				id:0,
				x:5.0,
				y:6.2,
				angle:0,
				halfWidth:1.6,
				halfHeight:3.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:1,
				x:15.0,
				y:10.2,
				angle:0,
				halfWidth:0.2,
				halfHeight:3.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{ //that's how to declare a polygon
				id:2,
				x:11.8,
				y:6.2,
				polys: [
					[{x: 0, y: 3.0}, {x: 3.0, y: 0.0}, {x: 3, y:4}], // triangle
				],
				dynamic:false,
				type: "polygon",
				color: "#9187af"
			},
		]
	},
	"7.1" : {
		timer: 36*60,
		gravity: "up",
		spaceShipPosition: {
			x:0.2,
			y:0.3
		},
		platforms: [
			{
				id:0,
				"x":19.8,
				"y":0.9,
				type: "platform",
				orientation: "right",
			},
			{
				id:1,
				"x":19.8,
				"y":10.9,
				type: "platform",
				orientation: "right",
			},
		],
		mines : [
			{
				id:0,
				"x":0.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:1,
				"x":2.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:2,
				"x":4.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:3,
				"x":6.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:4,
				"x":8.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:5,
				"x":10.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:6,
				"x":12.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
				id:7,
				"x":14.7,
				"y":3.6,
				type: "mine",
				orientation: "down",
			},
			{
			id:0,
			"x":0.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:1,
			"x":2.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:2,
			"x":4.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:3,
			"x":6.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:4,
			"x":8.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:5,
			"x":10.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:6,
			"x":12.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
			id:7,
			"x":14.7,
			"y":4.5,
			type: "mine",
			orientation: "up",
			},
			{
				id:8,
				"x": 19.8,
				"y":7,
				type:"mine",
				orientation:"right"
			},
			{
			id:0,
			"x":0.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:1,
			"x":2.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:2,
			"x":4.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:3,
			"x":6.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:4,
			"x":8.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:5,
			"x":10.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:6,
			"x":12.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
			{
			id:7,
			"x":14.7,
			"y":12.5,
			type: "mine",
			orientation: "down",
			},
		],
		bombs: [
		],
		warpZones: [
		],
		rest: [
			//REST
			{
				id:0,
				x:8.0,
				y:4.1,
				angle:0,
				halfWidth:9.0,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{ //that's how to declare a circle
				id:1,
				x:17.4,
				y:4.1,
				radius: 1.1,
				dynamic:false,
				type: "circle",
				color: "#9187af"
			},
			{
			id:0,
			x:12.0,
			y:8,
			angle:0,
			halfWidth:9.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
			},
			{
			id:0,
			x:9.0,
			y:13,
			angle:0,
			halfWidth:9.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
			}
		],

	},
	"13.1" : {
		timer: 41*60,
		gravity: "down",
		spaceShipPosition: {
			x:14.5,
			y:10.0
		},
		platforms: [
			{
				id:0,
				"x":9.0,
				"y":13.0,
				type: "platform",
				orientation: "down",
			},
			{
				id:1,
				"x":19.7,
				"y":3.55,
				type: "platform",
				orientation: "right",
			},
		],
		mines : [
			{
				id:1,
				"x":16.7,
				"y":5,
				type: "mine",
				orientation: "right",
			},
			{
				id:1,
				"x":16.7,
				"y":2,
				type: "mine",
				orientation: "right",
			},
		],
		bombs: [
			{
				id:0,
				x:12.1,
				y:3.0,
				radius: 3.5,
				type: "bomb",
			},
		],
		warpZones: [
		],
		rest: [
			{
				id:0,
				x:5.0,
				y:8.5,
				angle:0,
				halfWidth:4.7,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:0,
				x:18.0,
				y:8.5,
				angle:0,
				halfWidth:4.7,
				halfHeight:0.2,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:0,
				x:18.5,
				y:1.75,
				angle:0,
				halfWidth:1.5,
				halfHeight:1.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
			{
				id:0,
				x:18.5,
				y:5.35,
				angle:0,
				halfWidth:1.5,
				halfHeight:1.0,
				dynamic:false,
				type: "rectangle",
				color: "#9187af"
			},
		]
	},
	"17.1" : {
	timer: 41*60,
	gravity: "up",
	spaceShipPosition: {
		x:10.5,
		y:7.0
	},
	platforms: [
		{
			id:0,
			"x":14.2,
			"y":0.2,
			type: "platform",
			orientation: "up",
		},
		{
			id:1,
			"x":19.7,
			"y":3.55,
			type: "platform",
			orientation: "right",
		},
		{
			id:2,
			x: 19.7,
			y: 12.3,
			type: "platform",
			orientation: "right"
		}
	],
	mines : [
		{
			id:1,
			"x":19.7,
			"y":5,
			type: "mine",
			orientation: "right",
		},
		{
			id:2,
			"x":16.7,
			"y":0.2,
			type: "mine",
			orientation: "up",
		}, 
		{
			id:5,
			x: 19.7,
			y: 10.5,
			type:"mine",
			orientation: "right"
		},
	],
	bombs: [
		{
			id:0,
			x:4.1,
			y:3.0,
			radius: 0.6,
			type: "bomb",
		},
		{
			id:1,
			x:4.1,
			y:4.0,
			radius: 0.6,
			type: "bomb",
		}
	],
	warpZones: [
	],
	rest: [
		{
			id:0,
			x:3.0,
			y:3.3,
			angle:0,
			halfWidth:0.2,
			halfHeight:3.3,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			id:1,
			x:5.0,
			y:3.3,
			angle:0,
			halfWidth:0.2,
			halfHeight:3.3,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{ //that's how to declare a polygon
			id:2,
			x:0.0,
			y:6.2,
			polys: [
				[{x: 0, y: 0.0}, {x: 4.0, y: 4.0}, {x: 0, y:4}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
		{
			id:3,
			x:5.8,
			y:13,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			id:4,
			x:8.8,
			y:13,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"12.1" : {
	timer: -1,
	gravity: "up",
	spaceShipPosition: {
		x:4.5,
		y:12.0
	},
	platforms: [
		{
			id:0,
			"x":14.2,
			"y":0.2,
			type: "platform",
			orientation: "up",
		},
		{
			id:1,
			"x":19.7,
			"y":12.2,
			type: "platform",
			orientation: "right",
		},
	],
	mines : [
		{
			id:1,
			"x":19.7,
			"y":7,
			type: "mine",
			orientation: "right",
		},
	],
	bombs: [
		{
			id:0,
			x:4.1,
			y:4.0,
			radius: 0.6,
			type: "bomb",
		},
	],
	warpZones: [
		{
			maxX: 10,
			minX: 0,
			maxY: 4,
			minY: 0, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 2
		},
		{
			maxX: 20,
			minX: 15,
			maxY: 9,
			minY: 4, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 2
		},
	],
	rest: [
		{ //that's how to declare a polygon
			id:2,
			x:-0.5,
			y:2.2,
			polys: [
				[{x: 3*3, y: 0.0}, {x: 4.0*3, y: 0.0}, {x: 5.0*3, y:1.0*3}, {x:5.0*3, y:2.0*3}, {x: 4.0*3,y: 3.0*3}, {x:3.0*3, y:3.0*3}, {x:2.0*3,y:2.0*3},{x:2.0*3,y:1.0*3}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
		{
			id:3,
			x:4.3,
			y:6.5,
			halfWidth:1.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			id:3,
			x:15.7,
			y:6.5,
			halfWidth:1.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"15.1" : {
	timer: 60*61,
	gravity: "right",
	spaceShipPosition: {
		x:3.3,
		y:3.0
	},
	platforms: [
		{
			"x":6.4,
			"y":7.2,
			type: "platform",
			orientation: "right",
		},
		{
			"x":19.7,
			"y":5.2,
			type: "platform",
			orientation: "right",
		},
	],
	mines : [
	],
	bombs: [
		{
			x:3.3,
			y:0.4,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:3.3,
			y:5.6,
			radius: 0.7,
			type: "bomb",
		},
	],
	warpZones: [
		{
			maxX: 20,
			minX: 15,
			maxY: 7,
			minY: 0, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 2
		},
	],
	rest: [
		{
			id:0,
			x:1.0,
			y:1.5,
			halfWidth:1.4,
			halfHeight:9.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.5,
			y:1.5,
			halfWidth:1.4,
			halfHeight:5.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.9,
			y:8.4,
			halfWidth:0.1,
			halfHeight:2.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.5,
			y:9.5,
			halfWidth:1.3,
			halfHeight:1.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.5,
			y:9.5,
			halfWidth:0.2,
			halfHeight:1.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.5,
			y:7.5,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.5,
			y:11.5,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"2.1" : {
	timer: -1,
	gravity: "right",
	spaceShipPosition: {
		x:3.3,
		y:13.0
	},
	platforms: [
		{
			"x":6.4,
			"y":7.2,
			type: "platform",
			orientation: "left",
		},
		{
			"x":11.5,
			"y":12.9,
			type: "platform",
			orientation: "down",
		},
		{
			"x":14.5,
			"y":12.9,
			type: "platform",
			orientation: "down",
		},
		{
			"x":19.9,
			"y":1.0,
			type: "platform",
			orientation: "right",
		},
	],
	mines : [
	],
	bombs: [
	],
	warpZones: [
	],
	rest: [
		{
			x:1.0,
			y:11.5,
			halfWidth:1.4,
			halfHeight:2.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.0,
			y:11.5,
			halfWidth:1.4,
			halfHeight:2.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:3.1,
			y:7.2,
			halfWidth:2.9,
			halfHeight:0.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.0,
			y:9.2,
			halfWidth:0.6,
			halfHeight:4.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.0,
			y:8.2,
			halfWidth:0.6,
			halfHeight:6.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:18.0,
			y:8.2,
			halfWidth:2.6,
			halfHeight:6.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.0,
			y:2.8,
			halfWidth:5.0,
			halfHeight:0.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"3.1" : {
	timer: -1,
	gravity: "right",
	spaceShipPosition: {
		x:18.3,
		y:7.0
	},
	platforms: [
		{
			"x":19.0,
			"y":12.9,
			type: "platform",
			orientation: "down",
		},
		{
			"x":19.0,
			"y":3.9,
			type: "platform",
			orientation: "down",
		},
	],
	mines : [
	],
	bombs: [
	],
	warpZones: [
	],
	rest: [
		{
			x:13.0,
			y:9.5,
			halfWidth:7.4,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.0,
			y:4.5,
			halfWidth:7.9,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{ //that's how to declare a polygon
			x:5.5,
			y:9.4,
			polys: [
				[{x: 0.0, y: 0.0}, {x: 4.0, y: -3.0}, {x: 6.0, y:0.0}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
		{ //that's how to declare a polygon
			x:3.5,
			y:4.4,
			polys: [
				[{x: 0.0, y: 0.0}, {x: 4.0, y: -2.8}, {x: 6.0, y:0.0}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
		{ //that's how to declare a polygon
			x:3.5,
			y:13.4,
			polys: [
				[{x: 0.0, y: 0.0}, {x: 4.0, y: -2.1}, {x: 6.0, y:0.0}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
		{ //that's how to declare a polygon
			x:0.0,
			y:6.4,
			polys: [
				[{x: 0.0, y: 0.0}, {x: 4.0, y: 2.1}, {x: 0.0, y:4.0}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
	]
	},
	"4.1" : {
	timer: 41*60,
	gravity: "up",
	spaceShipPosition: {
		x:18.3,
		y:1.0
	},
	platforms: [
		{
			"x":11.0,
			"y":4.9+0.5,
			type: "platform",
			orientation: "right",
		},
		{
			"x":11.5,
			"y":4.9+0.5,
			type: "platform",
			orientation: "left",
		},
		{
			"x":2.5,
			"y":4.9+6.5,
			type: "platform",
			orientation: "up",
		},
		{
			"x":2.5,
			"y":4.3+6.5,
			type: "platform",
			orientation: "down",
		},
	],
	mines : [
	],
	bombs: [
	],
	warpZones: [
	],
	rest: [
		{
			x:13.0,
			y:2.2,
			halfWidth:7.9,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.0,
			y:2.2,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
		x:8.0,
		y:8.2,
		halfWidth:7.9,
		halfHeight:0.2,
		dynamic:false,
		type: "rectangle",
		color: "#9187af"
		},
		{
			x:21.0,
			y:8.2,
			halfWidth:2.9,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:11.25,
			y:4.0+0.5,
			halfWidth:0.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:11.25,
			y:5.8+0.5,
			halfWidth:0.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:3.45,
			y:11.15,
			halfWidth:0.2,
			halfHeight:0.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.55,
			y:11.15,
			halfWidth:0.2,
			halfHeight:0.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"5.1" : {
	timer: 41*60,
	gravity: "up",
	spaceShipPosition: {
		x:18.3,
		y:1.0
	},
	platforms: [
		{
			"x":5.0,
			"y":12.4,
			type: "platform",
			orientation: "right",
		},
	],
	mines : [
	],
	bombs: [
	],
	warpZones: [
	],
	rest: [
		{
			x:18.4,
			y:3.2,
			halfWidth:1.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.0,
			y:0.5,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:19.0,
			y:5.2,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.0,
			y:2.8,
			halfWidth:0.2,
			halfHeight:2.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:16.7,
			y:7.2,
			halfWidth:3.8,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.0,
			y:2.8,
			halfWidth:0.2,
			halfHeight:2.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:11.0,
			y:4.8,
			halfWidth:0.2,
			halfHeight:4.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:8.0,
			y:2.8,
			halfWidth:0.2,
			halfHeight:2.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:8.0,
			y:11.0,
			halfWidth:0.2,
			halfHeight:3.3,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.7,
			y:9.2,
			halfWidth:3.8,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.0,
			y:10.5,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.0,
			y:12.5,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.0,
			y:10.5,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:11.0,
			y:12.5,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.0,
			y:3.8,
			halfWidth:0.2,
			halfHeight:2.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.0,
			y:8,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:2.5,
			y:8,
			halfWidth:0.2,
			halfHeight:2.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4.4,
			y:6,
			halfWidth:1.8,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4.4,
			y:2,
			halfWidth:1.8,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:2.0,
			y:4,
			halfWidth:1.8,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.4,
			y:12.3,
			halfWidth:0.2,
			halfHeight:0.8,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"6.1" : {
	timer: 61*60,
	gravity: "right",
	spaceShipPosition: {
		x:9.5,
		y:6.5
	},
	platforms: [
		{
			"x":4.2,
			"y":6.5,
			type: "platform",
			orientation: "right",
		},
		{
			"x":14.8,
			"y":6.5,
			type: "platform",
			orientation: "left",
		},
		{
			"x":10.5,
			"y":11.0,
			type: "platform",
			orientation: "up",
		},
		{
			"x":10.5,
			"y":2.0,
			type: "platform",
			orientation: "down",
		},
	],
	mines : [
		{
			"x":5.0,
			"y":6.5,
			type: "mine",
			orientation: "left",
		},
		{
			"x":14.0,
			"y":6.5,
			type: "mine",
			orientation: "right",
		},
		{
			"x":10.5,
			"y":10.0,
			type: "mine",
			orientation: "down",
		},
		{
			"x":10.5,
			"y":3.0,
			type: "mine",
			orientation: "up",
		},
	],
	bombs: [
	],
	warpZones: [
	],
	rest: [
		{
			x:10.5,
			y:6.5,
			halfWidth:0.1,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4.5,
			y:6.5,
			halfWidth:0.1,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:14.5,
			y:6.5,
			halfWidth:0.1,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:2.5,
			halfWidth:1.0,
			halfHeight:0.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:10.5,
			halfWidth:1.0,
			halfHeight:0.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"14.1" : {
	timer: 61*60,
	gravity: "up",
	spaceShipPosition: {
		x:11.5,
		y:8.5
	},
	platforms: [
		{
			"x":11.5,
			"y":13.0,
			type: "platform",
			orientation: "down",
		},
		{
			"x":9.5,
			"y":13.0,
			type: "platform",
			orientation: "down",
		},
		{
			"x":11.5,
			"y":3.5,
			type: "platform",
			orientation: "up",
		},
		{
			"x":19.7,
			"y":4.5,
			type: "platform",
			orientation: "right",
		},
	],
	mines : [
	],
	bombs: [
		{
			x:11.5,
			y:3.0,
			radius: 0.71,
			type: "bomb",
		},
	],
	warpZones: [
	],
	rest: [
		{
			x:11.5,
			y:6.5,
			halfWidth:1.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:7.5,
			y:6.5,
			halfWidth:1.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.0,
			y:4.5,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.5,
			y:3.5,
			halfWidth:0.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:3.3,
			halfWidth:1.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.5,
			y:5.9,
			halfWidth:0.2,
			halfHeight:0.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"16.1" : {
	timer: 46*60,
	gravity: "left",
	spaceShipPosition: {
		x:1.5,
		y:12.5
	},
	platforms: [
		{
			"x":11.5,
			"y":0.3,
			type: "platform",
			orientation: "up",
		},
	],
	mines : [
	],
	bombs: [
		{
			x:1.5,
			y:10.0,
			radius: 0.71,
			type: "bomb",
		},
		{
			x:1.5,
			y:8.0,
			radius: 0.71,
			type: "bomb",
		},
		{
			x:1.5,
			y:6.0,
			radius: 0.71,
			type: "bomb",
		},
		{
			x:1.5,
			y:4.0,
			radius: 0.71,
			type: "bomb",
		},
	],
	warpZones: [
	],
	rest: [
		{
			x:2.5,
			y:11.2,
			halfWidth:5.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.75,
			y:11.2,
			halfWidth:4.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:2.0,
			y:9.2,
			halfWidth:4.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.25,
			y:9.2,
			halfWidth:5.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.0,
			y:7.2,
			halfWidth:8.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.75,
			y:7.2,
			halfWidth:2.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.0,
			y:5.2,
			halfWidth:5.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:14.5,
			y:5.2,
			halfWidth:2.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.0,
			y:3.2,
			halfWidth:5.1,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.5,
			y:3.2,
			halfWidth:4.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.5,
			y:0.7,
			halfWidth:0.2,
			halfHeight:0.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:0.7,
			halfWidth:0.2,
			halfHeight:0.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"18.1" : {
	timer: 120*60,
	gravity: "up",
	spaceShipPosition: {
		x:2.5,
		y:5.5
	},
	platforms: [
		{
			"x":15.2,
			"y":4.3,
			type: "platform",
			orientation: "left",
		},
		{
			"x":12.5,
			"y":4.3,
			type: "platform",
			orientation: "right",
		},
	],
	mines : [
		{
			"x":13.8,
			"y":4.6,
			type: "mine",
			orientation: "down",
		},
	],
	bombs: [
		{
			x:4.25,
			y:5.5,
			radius: 0.71,
			type: "bomb",
		},
		{
			x:4.0,
			y:9.0,
			radius: 0.71,
			type: "bomb",
		},
		{
			x:7.40,
			y:11.7,
			radius: 0.5,
			type: "bomb",
		},
		{
			x:6.0,
			y:1.7,
			radius: 0.5,
			type: "bomb",
		},
		{
			x:15.2,
			y:9.0,
			radius: 0.5,
			type: "bomb",
		},
		{
			x:12.4,
			y:11.7,
			radius: 0.5,
			type: "bomb",
		},
	],
	warpZones: [
		{
			maxX: 10,
			minX: 0,
			maxY: 4,
			minY: 0, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 2
		},
		{
			maxX: 20,
			minX: 13,
			maxY: 5,
			minY: 0, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 1
		}
	],
	rest: [
		{
			x:2.5,
			y:4.5,
			halfWidth:2.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.3,
			y:6.5,
			halfWidth:0.2,
			halfHeight:1.4,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4.3,
			y:7.8,
			halfWidth:1.0,
			halfHeight:0.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:2.0,
			y:10.8,
			halfWidth:1.8,
			halfHeight:0.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4.0,
			y:10.8,
			halfWidth:0.2,
			halfHeight:1.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:8.0,
			y:12.7,
			halfWidth:0.2,
			halfHeight:0.6,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:9.80,
			y:11.7,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.0,
			y:10.5,
			halfWidth:0.1,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:9.80,
			y:9.0,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:8.80,
			y:0.6,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:6.0,
			y:0.6,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.80,
			y:11.7,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.80,
			y:9.0,
			halfWidth:2.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"19.1" : {
	timer: 60*60,
	gravity: "up",
	spaceShipPosition: {
		x:7.5,
		y:6.9
	},
	platforms: [
		{
			"x":0.2,
			"y":3.1,
			type: "platform",
			orientation: "left",
		},
		{
			"x":8.2,
			"y":0.3,
			type: "platform",
			orientation: "up",
		},
		{
			"x":19.7,
			"y":8.3,
			type: "platform",
			orientation: "right",
		},
		{
			"x":4.7,
			"y":13,
			type: "platform",
			orientation: "down",
		},
	],
	mines : [
		{
			"x":0.2,
			"y":4.6,
			type: "mine",
			orientation: "left",
		},
		{
			"x":0.2,
			"y":1.6,
			type: "mine",
			orientation: "left",
		},
		{
			"x":6.2,
			"y":0.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":10.2,
			"y":0.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":19.7,
			"y":6.3,
			type: "mine",
			orientation: "right",
		},
		{
			"x":19.7,
			"y":10.3,
			type: "mine",
			orientation: "right",
		},
		{
			"x":6.3,
			"y":13,
			type: "mine",
			orientation: "down",
		},
		{
			"x":3.1,
			"y":13,
			type: "mine",
			orientation: "down",
		},
	],
	bombs: [
	],
	warpZones: [
		{
			maxX: 7,
			minX: 0,
			maxY: 7,
			minY: 0, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 2
		},
		{
			maxX: 14,
			minX: 7.1,
			maxY: 5,
			minY: 0, 
			color: "cyan", 
			rotation: "left", 
			nbRotation: 1
		},
		{
			maxX: 14,
			minX: 7.1,
			maxY: 10,
			minY: 5.1, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 1
		},
		{
			maxX: 7,
			minX: 0,
			maxY: 13,
			minY: 7.1, 
			color: "cyan", 
			rotation: "left", 
			nbRotation: 1
		},
		{
			maxX: 14.3,
			minX: 20,
			maxY: 12,
			minY: 0, 
			color: "blue", 
			rotation: "right", 
			nbRotation: 1
		},
	],
	rest: [
		{ 
			x:13.5,
			y:4.4,
			polys: [
				[{x: -2.5*3, y: 0.3}, {x: 0.0, y: 0.3}, {x: 0, y:4}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
		{ 
			x:13.5,
			y:6.4,
			polys: [
				[{x: -2.5*3, y: 0.3}, {x: 0, y:4}, {x: -2.5*3, y:4}], // triangle
			],
			dynamic:false,
			type: "polygon",
			color: "#9187af"
		},
	]
	},
	"20.1" : {
	timer: 60*60,
	gravity: "down",
	spaceShipPosition: {
		x:1.5,
		y:4.4
	},
	platforms: [
		{
			"x":12.2,
			"y":0.3,
			type: "platform",
			orientation: "up",
		},
	],
	mines : [
		{
			"x":14.2,
			"y":0.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":10.2,
			"y":0.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":19.7,
			"y":5.3,
			type: "mine",
			orientation: "right",
		},
	],
	bombs: [
		{
			x:17.8,
			y:9.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:10.8,
			y:9.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:7.8,
			y:9.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:2.8,
			y:9.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:2.8,
			y:6.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:12.8,
			y:6.2,
			radius: 0.7,
			type: "bomb",
		},
	],
	warpZones: [
	],
	rest: [
		{
			x:1.8,
			y:6.0,
			angle:0,
			halfWidth:1.7,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:3.3,
			y:5.5,
			angle:0,
			halfWidth:0.2,
			halfHeight:0.8,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.6,
			y:5.5,
			angle:0,
			halfWidth:1.2,
			halfHeight:0.2,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"21.1" : {
	timer: 60*60,
	gravity: "right",
	spaceShipPosition: {
		x:18.5,
		y:1.0
	},
	platforms: [
		{
			"x":1.2,
			"y":13.0,
			type: "platform",
			orientation: "down",
		},
	],
	mines : [
		{
			"x":15.2,
			"y":0.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":13.6,
			"y":1.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":12.0,
			"y":2.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":10.4,
			"y":3.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":8.8,
			"y":4.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":7.2,
			"y":5.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":5.6,
			"y":6.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":4.0,
			"y":7.3,
			type: "mine",
			orientation: "up",
		},
		{
			"x":2.0,
			"y":7.3,
			type: "mine",
			orientation: "up",
		},
	],
	bombs: [
		{
			x:18.0,
			y:7.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:16.0,
			y:8.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:14.0,
			y:9.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:12.0,
			y:10.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:10.0,
			y:11.2,
			radius: 0.7,
			type: "bomb",
		},
		{
			x:8.0,
			y:12.2,
			radius: 0.7,
			type: "bomb",
		},
	],
	warpZones: [
	],
	rest: [
		{
			x:19,
			y:6.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.0,
			y:7.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.0,
			y:8.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.0,
			y:9.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:11.0,
			y:10.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:9.0,
			y:11.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:7.0,
			y:12.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:18.0,
			y:8.0,
			angle:0,
			halfWidth:1.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:16.0,
			y:9.0,
			angle:0,
			halfWidth:1.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:14.0,
			y:10.0,
			angle:0,
			halfWidth:1.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.0,
			y:11.0,
			angle:0,
			halfWidth:1.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.0,
			y:12.0,
			angle:0,
			halfWidth:1.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:8.0,
			y:13.0,
			angle:0,
			halfWidth:1.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},

	/* start of .2 levels 
	 *
	 *
	 *
	 *
	 *
	 ==================================================
	 ==================================================
	 ==================================================
	 *
	 *
	 *
	 *
	 *
	 * */
	"1.2" : {
	timer: -1,
	gravity: "down",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":18.7,
			"y":3.3,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 15.2,
			y: 12,
		},
	],
	rAliens: [
	],
	rest: [
		{
			x:13.5,
			y:6.0,
			angle:0,
			halfWidth:6.7,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.5,
			y:11.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.7,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:8.5,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.7,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:1.5,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.7,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:2.5,
			y:6.5,
			angle:0,
			halfWidth:2.4,
			halfHeight:0.7,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.3,
			y:3.3,
			angle:0,
			halfWidth:0.4,
			halfHeight:0.7,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"2.2" : {
	timer: -1,
	gravity: "right",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":10.7,
			"y":3.3,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
		{
			"x":10.7,
			"y":10.3,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 15.2,
			y: 12,
		},
		{
			type: "greenAlien",
			x: 16.2,
			y: 3,
		},
		{
			type: "greenAlien",
			x: 1.2,
			y: 1,
		},
	],
	rAliens: [
	],
	rest: [
		{
			x:10,
			y:6.0,
			angle:0,
			halfWidth:10,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:9,
			y:1.5,
			angle:0,
			halfWidth:0.3,
			halfHeight:1.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.5,
			y:4.3,
			angle:0,
			halfWidth:0.3,
			halfHeight:1.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.5,
			y:10.9,
			angle:0,
			halfWidth:0.3,
			halfHeight:2.3,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"3.2" : {
	timer: 26*60,
	gravity: "up",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":10.7,
			"y":3.3,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 17.2,
			y: 12,
		},
		{
			type: "greenAlien",
			x: 17.2,
			y: 3,
		},
		{
			type: "greenAlien",
			x: 1.2,
			y: 1,
		},
		{
			type: "greenAlien",
			x: 4.2,
			y: 12,
		},
	],
	rAliens: [
	],
	rest: [
		{
			x:15.5,
			y:2.7,
			halfWidth:0.2,
			halfHeight:2.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.5,
			y:10.7,
			halfWidth:0.2,
			halfHeight:2.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.5,
			y:2.7,
			halfWidth:0.2,
			halfHeight:2.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.5,
			y:10.7,
			halfWidth:0.2,
			halfHeight:2.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.5,
			y:8.0,
			halfWidth:1.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:16.5,
			y:8.0,
			halfWidth:1.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:16.5,
			y:5.0,
			halfWidth:1.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4,
			y:5.0,
			halfWidth:1.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"4.2" : {
	timer: 31*60,
	gravity: "right",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":1.0,
			"y":7.3,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 19.2,
			y: 9,
		},
		{
			type: "greenAlien",
			x: 17.5,
			y: 9,
		},
	],
	rAliens: [
	],
	rest: [
		{
			x:16.5,
			y:2.7,
			halfWidth:0.2,
			halfHeight:2.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:16.5,
			y:10.3,
			halfWidth:0.2,
			halfHeight:3.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:18.3,
			y:11.3,
			halfWidth:1.6,
			halfHeight:2.0,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:18.3,
			y:4.3,
			halfWidth:1.6,
			halfHeight:2.0,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:18.3,
			y:1.3,
			halfWidth:1.6,
			halfHeight:0.5,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.5,
			y:3.0,
			halfWidth:0.2,
			halfHeight:3.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:13.5,
			y:12.7,
			halfWidth:0.2,
			halfHeight:4.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15,
			y:12.7,
			halfWidth:1.2,
			halfHeight:1.3,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15,
			y:3.7,
			halfWidth:1.2,
			halfHeight:1.5,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:10.7,
			halfWidth:0.2,
			halfHeight:2.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.5,
			y:3.3,
			halfWidth:0.2,
			halfHeight:3.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:7.5,
			y:1.3,
			halfWidth:0.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:7.5,
			y:8.7,
			halfWidth:0.2,
			halfHeight:4.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:9,
			y:5.7,
			halfWidth:0.8,
			halfHeight:0.8,
			dynamic:true,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"5.2" : {
	timer: 31*60,
	gravity: "down",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":20.0,
			"y":2.3,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 3.5,
			y: 9,
			halfWidth: 0.4,
			halfHeight: 2.7,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 6.5,
			y: 7,
			halfWidth: 2.4,
			halfHeight: 0.7,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 6.5,
			y: 1,
			halfWidth: 2.4,
			halfHeight: 0.7,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 16.5,
			y: 3,
			halfWidth: 0.4,
			halfHeight: 2.7,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 19.5,
			y: 10,
			halfWidth: 1.4,
			halfHeight: 0.7,
			dynamic: false
		},
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 10,
			y: 10,
			radius: 2.7,
			dynamic: false
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 1.2,
			y: 9,
		},
	],
	rAliens: [
	],
	rest: [
	]
	},
	"6.2" : {
	timer: -1,
	gravity: "left",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":20.0,
			"y":2.3,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
		{
			"x":18.0,
			"y":12.3,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 9.8,
			y: 6,
			halfWidth: 10.4,
			halfHeight: 0.4,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 10.8,
			y: 4,
			halfWidth: 0.4,
			halfHeight: 1.4,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 6.8,
			y: 1.5,
			halfWidth: 0.4,
			halfHeight: 1.4,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 4.8,
			y: 8.0,
			halfWidth: 0.4,
			halfHeight: 1.4,
			dynamic: false
		},
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 3.2,
			y: 9,
		},
		{
			type: "greenAlien",
			x: 3.2,
			y: 3,
		},
	],
	rAliens: [
	],
	rest: [
		{
			x:1.8,
			y:8.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:0.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.8,
			y:2.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:0.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"7.2" : {
	timer: -1,
	gravity: "up",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":18.0,
			"y":12.3,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 4.8,
			y: 7.0,
			halfWidth: 0.4,
			halfHeight: 4.4,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 8.8,
			y: 9.0,
			halfWidth: 0.4,
			halfHeight: 4.4,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 12.8,
			y: 7.0,
			halfWidth: 0.4,
			halfHeight: 4.4,
			dynamic: false
		},
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 3.2,
			y: 9,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 3.2,
			y: 9,
		},
	],
	rest: [
		{
			x:1.8,
			y:2.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:0.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"8.2" : {
	timer: 10*60,
	gravity: "left",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":0.0,
			"y":1.0,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 19.8,
			y: 9.0,
			halfWidth: 0.4,
			halfHeight: 1.4,
			dynamic: true
		},
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 1.2,
			y: 9,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 3.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 5.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 7.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 9.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 11.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 13.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 15.2,
			y: 9,
		},
		{
			type: "redAlien",
			x: 17.2,
			y: 9,
		},
	],
	rest: [
		{
			x:10.8,
			y:1.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"9.2" : {
	timer: 14*60,
	gravity: "down",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":14.0,
			"y":7.0,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
		{
			"x":6.0,
			"y":7.0,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 10.0,
			y: 11.0,
			halfWidth: 1.4,
			halfHeight: 0.4,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 10.0,
			y: 2.0,
			halfWidth: 1.4,
			halfHeight: 0.4,
			dynamic: false
		},
	],
	cSpikes: [
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 10.0,
			y: 7,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 11.2,
			y: 7,
		},
		{
			type: "redAlien",
			x: 9.0,
			y: 7,
		},
		{
			type: "redAlien",
			x: 10.0,
			y: 6,
		},
		{
			type: "redAlien",
			x: 10.0,
			y: 8,
		},
	],
	rest: [
	]
	},
	"10.2" : {
	timer: 40*60,
	gravity: "down",
	rotation: {
		rotation: "right", 
		nbRotation: 2
	},
	platforms: [
		{
			"x":6.0,
			"y":7.0,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 18,
			y: 5,
			radius: 1.7,
			dynamic: false
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 10.0,
			y: 7,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 11.2,
			y: 7,
		},
		{
			type: "redAlien",
			x: 9.0,
			y: 7,
		},
		{
			type: "redAlien",
			x: 10.0,
			y: 6,
		},
		{
			type: "redAlien",
			x: 10.0,
			y: 8,
		},
	],
	rest: [
	]
	},
	"11.2" : {
	timer: 61*60,
	gravity: "down",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":6.0,
			"y":7.0,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 1.2,
			y: 10,
			radius: 0.3,
			dynamic: false
		},
	],
	gAliens: [
	],
	rAliens: [
		{
			type: "redAlien",
			x: 19.2,
			y: 7,
		},
		{
			type: "redAlien",
			x: 18.5,
			y: 7,
		},
	],
	rest: [
		{
			x:18.0,
			y:6.0,
			angle:0,
			halfWidth:1.7,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:17.0,
			y:8.0,
			angle:0,
			halfWidth:3.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:14.0,
			y:8.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:16.0,
			y:5.0,
			angle:0,
			halfWidth:0.2,
			halfHeight:1.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:14.0,
			y:3.5,
			angle:0,
			halfWidth:3.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.0,
			y:11.8,
			angle:0,
			halfWidth:3.0,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.0,
			y:7.8,
			angle:0,
			halfWidth:0.2,
			halfHeight:4.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"12.2" : {
	timer: 61*60,
	gravity: "up",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":1.0,
			"y":9.0,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 10.8,
			y: 4.8,
			radius: 0.5,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 9.0,
			y: 9,
		},
		{
			type: "greenAlien",
			x: 9.0,
			y: 5,
		},
		{
			type: "greenAlien",
			x: 9.0,
			y: 2,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 10.8,
			y: 9,
		},
	],
	rest: [
		{
			x:10.0,
			y:7.8,
			angle:0,
			halfWidth:1.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.0,
			y:3.8,
			angle:0,
			halfWidth:1.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"13.2" : {
	timer: 61*60,
	gravity: "right",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 5.5,
			y: 13,
			halfWidth: 1.0,
			halfHeight: 0.4,
			dynamic: false
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 3.2,
			y: 1.8,
			radius: 0.5,
			dynamic: true
		},
		{
			type: "circleSpikes",
			x: 3.2,
			y: 1.0,
			radius: 0.5,
			dynamic: true
		},
		{
			type: "circleSpikes",
			x: 1.2,
			y: 1.0,
			radius: 0.5,
			dynamic: true
		},
		{
			type: "circleSpikes",
			x: 1.0,
			y: 1.4,
			radius: 0.5,
			dynamic: true
		},
	],
	gAliens: [
	],
	rAliens: [
		{
			type: "redAlien",
			x: 17.8,
			y: 1,
		},
		{
			type: "redAlien",
			x: 17.8,
			y: 2,
		},
		{
			type: "redAlien",
			x: 10.8,
			y: 1,
		},
		{
			type: "redAlien",
			x: 10.8,
			y: 2,
		},
	],
	rest: [
		{
			x:4.0,
			y:6.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:6.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.0,
			y:6.6,
			angle:0,
			halfWidth:0.7,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:4.8,
			y:6.6,
			angle:0,
			halfWidth:0.5,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"14.2" : {
	timer: 61*60,
	gravity: "right",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 5.5,
			y: 13,
			halfWidth: 1.0,
			halfHeight: 0.4,
			dynamic: false
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 3.2,
			y: 1.8,
			radius: 0.5,
			dynamic: true
		},
	],
	gAliens: [
	],
	rAliens: [
		{
			type: "redAlien",
			x: 17.8,
			y: 1,
		},
	],
	rest: [
		{
			x:4.0,
			y:6.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:6.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"15.2" : {
	timer: 61*60,
	gravity: "right",
	rotation: {
		rotation: "right", 
		nbRotation: 2
	},
	platforms: [
		{
			"x":5.5,
			"y":13,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 6,
			y: 10,
			halfWidth: 1.8,
			halfHeight: 0.4,
			dynamic: false
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 3.2,
			y: 1.8,
			radius: 0.5,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 17.8,
			y: 1,
		},
	],
	rAliens: [
	],
	rest: [
		{
			x:4.0,
			y:6.6,
			angle:0,
			halfWidth:0.2,
			halfHeight:6.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"16.2" : {
	timer: 18*60,
	gravity: "right",
	rotation: {
		rotation: "right", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":5.5,
			"y":10,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 13,
			y: 1,
			halfWidth: 0.5,
			halfHeight: 0.5,
			dynamic: true
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 19.2,
			y: 12.8,
			radius: 0.5,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 18.8,
			y: 1,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 13,
			y: 9,
		},
		{
			type: "redAlien",
			x: 1.8,
			y: 7,
		},
	],
	rest: [
		{
			x:16.0,
			y:3.6,
			angle:0,
			halfWidth:2.2,
			halfHeight:7.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.0,
			y:3.6,
			angle:0,
			halfWidth:1.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"17.2" : {
	timer: -1,
	gravity: "right",
	rotation: {
		rotation: "left", 
		nbRotation: 1
	},
	platforms: [
		{
			"x":5.5,
			"y":10,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 13,
			y: 1,
			halfWidth: 0.5,
			halfHeight: 0.5,
			dynamic: true
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 19.2,
			y: 12.8,
			radius: 0.5,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 18.8,
			y: 1,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 13,
			y: 9,
		},
		{
			type: "redAlien",
			x: 1.8,
			y: 7,
		},
	],
	rest: [
		{
			x:16.0,
			y:3.6,
			angle:0,
			halfWidth:2.2,
			halfHeight:7.5,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:1.0,
			y:3.6,
			angle:0,
			halfWidth:1.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"18.2" : {
	timer: -1,
	gravity: "down",
	rotation: {
		rotation: "left", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":1.5,
			"y":0.5,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
		{
			"x":4.0,
			"y":0.5,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
		{
			"x":7.0,
			"y":0.5,
			type: "alienPlatform",
			orientation: "horizontal", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 13,
			y: 6.5,
			halfWidth: 1.5,
			halfHeight: 0.7,
			dynamic: false
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 0.0,
			y: 7.0,
			radius: 1.6,
			dynamic: false
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 18.8,
			y: 12,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 1,
			y: 2,
		},
	],
	rest: [
		{
			x:8.0,
			y:3.6,
			angle:0,
			halfWidth:8.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.0,
			y:6.6,
			angle:0,
			halfWidth:8.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:8.0,
			y:9.6,
			angle:0,
			halfWidth:8.2,
			halfHeight:0.2,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"19.2" : {
	timer: -1,
	gravity: "down",
	rotation: {
		rotation: "left", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":20.0,
			"y":10.5,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 12,
			y: 6.5,
			halfWidth: 1.5,
			halfHeight: 0.7,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 3.5,
			y: 6.5,
			halfWidth: 1.5,
			halfHeight: 0.7,
			dynamic: false
		}
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 7.4,
			y: 3.0,
			radius: 2.6,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 6.8,
			y: 12,
		},
		{
			type: "greenAlien",
			x: 7.8,
			y: 12,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 14,
			y: 12,
		},
		{
			type: "redAlien",
			x: 17,
			y: 12,
		},
	],
	rest: [
		{
			x:3.0,
			y:2.0,
			angle:0,
			halfWidth:1.8,
			halfHeight:0.8,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:12.5,
			y:2.0,
			angle:0,
			halfWidth:2.2,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:10.0,
			y:11.3,
			angle:0,
			halfWidth:0.2,
			halfHeight:4.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.5,
			y:10.3,
			angle:0,
			halfWidth:0.2,
			halfHeight:2.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
	"20.2" : {
	timer: -1,
	gravity: "left",
	rotation: {
		rotation: "left", 
		nbRotation: 0
	},
	platforms: [
		{
			"x":20.0,
			"y":5.5,
			type: "alienPlatform",
			orientation: "vertical", //horizontal - vertical
		},
	],
	rSpikes : [
		{
			type: "rectangleSpikes",
			x: 10,
			y: 6.5,
			halfWidth: 2.5,
			halfHeight: 0.7,
			dynamic: false
		},
		{
			type: "rectangleSpikes",
			x: 15,
			y: 6.5,
			halfWidth: 0.5,
			halfHeight: 1.7,
			dynamic: false
		},
	],
	cSpikes: [
		{
			type: "circleSpikes",
			x: 3.0,
			y: 6.0,
			radius: 2.4,
			dynamic: true
		},
	],
	gAliens: [
		{
			type: "greenAlien",
			x: 1.8,
			y: 1,
		},
		{
			type: "greenAlien",
			x: 2.8,
			y: 1,
		},
	],
	rAliens: [
		{
			type: "redAlien",
			x: 19,
			y: 1,
		},
		{
			type: "redAlien",
			x: 17,
			y: 1,
		},
	],
	rest: [
		{
			x:2.4,
			y:9.5,
			angle:0,
			halfWidth:2.0,
			halfHeight:0.1,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:5.4,
			y:7.0,
			angle:0,
			halfWidth:0.1,
			halfHeight:2.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
		{
			x:15.4,
			y:1.0,
			angle:0,
			halfWidth:0.1,
			halfHeight:1.0,
			dynamic:false,
			type: "rectangle",
			color: "#9187af"
		},
	]
	},
};

