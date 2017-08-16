//Require the dev-dependencies
var jsBayes = require("../utils/bayesNet");

var bn1 = {
	"name": "containment structure network",
	"description": "description for containment structure network",
	"dependencyOn": [],
	"data": [{
			"refId": "598b44654933ebaed7dc0009",
			"name": "Beam1",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b44654933ebaed7dc0008",
			"name": "Beam2",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b44654933ebaed7dc0007",
			"name": "Beam3",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b44654933ebaed7dc0006",
			"name": "Beam4",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "598b44654933ebaed7dc0005",
			"name": "Beam5",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b44654933ebaed7dc0004",
			"name": "Beam6",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b44654933ebaed7dc0003",
			"name": "Beam7",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b44654933ebaed7dc0002",
			"name": "Beam8",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "598b446e4933ebaed7dc000e",
			"name": "Column1",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b446e4933ebaed7dc000d",
			"name": "Column2",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b446e4933ebaed7dc000c",
			"name": "Column3",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": "598b446e4933ebaed7dc000b",
			"name": "Column4",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": null,
			"name": "Beams_System",
			"states": ["0", "1"],
			"parents": ["Beam1", "Beam2", "Beam3", "Beam4", "Beam5", "Beam6", "Beam7", "Beam8"],
			"eventType": "intermediate",
			"gateType": "OR",
			"cpTable": [

				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],

				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		},
		{
			"refId": null,
			"name": "Columns_System",
			"states": ["0", "1"],
			"parents": ["Column1", "Column2", "Column3", "Column4"],
			"eventType": "intermediate",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}, {
			"refId": null,
			"name": "Containment_Structure",
			"states": ["0", "1"],
			"parents": ["Beams_System", "Columns_System"],
			"eventType": "main",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}
	]
}


var bn2 = {
	"name": "Powerhouse entity network",
	"description": "description for powerhouse entity network",
	"dependencyOn": ["598b7cef232a51df040143d3"],
	"data": [{
			"refId": null,
			"name": "Pipes_System",
			"states": ["0", "1"],
			"eventType": "intermediate",
			"gateType": "OR",
			"parents": ["Pipe1", "Pipe2"],
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}, {
			"refId": "598b442b4933ebaed7dbfffa",
			"name": "Pipe1",
			"states": ["0", "1"],
			"eventType": "basic",
			"gateType": null,
			"parents": [],
			"cpTable": [0.09, 0.91]
		}, {
			"refId": "598b442b4933ebaed7dbfff9",
			"name": "Pipe2",
			"states": ["0", "1"],
			"eventType": "basic",
			"gateType": null,
			"parents": [],
			"cpTable": [0.09, 0.91]
		},
		{
			"refId": "598b44534933ebaed7dbfffe",
			"name": "Pumps",
			"states": ["0", "1"],
			"eventType": "basic",
			"gateType": null,
			"parents": [],
			"cpTable": [0.11, 0.89]
		},
		{
			"refId": null,
			"name": "Pumping_System",
			"states": ["0", "1"],
			"eventType": "intermediate",
			"gateType": "OR",
			"parents": ["Pumps", "Pipes_System"],
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		},
		{
			"refId": "598b444b4933ebaed7dbfffc",
			"name": "Reactor_Core",
			"states": ["0", "1"],
			"eventType": "basic",
			"gateType": null,
			"parents": [],
			"cpTable": [0.88, 0.12]
		},
		{
			"refId": "598b445b4933ebaed7dc0000",
			"name": "Turbine_System",
			"states": ["0", "1"],
			"eventType": "basic",
			"gateType": null,
			"parents": [],
			"cpTable": [0.48, 0.52]
		},
		{
			"refId": null,
			"name": "Generation_System",
			"states": ["0", "1"],
			"parents": ["Reactor_Core", "Turbine_System", "Pumping_System"],
			"eventType": "intermediate",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		},
		{
			"refId": "598b7cef232a51df040143d3",
			"name": "Containment_Structure",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "transferredNetwork",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": null,
			"name": "Powerhouse",
			"states": ["0", "1"],
			"parents": ["Containment_Structure", "Generation_System"],
			"eventType": "main",
			"gateType": "AND",
			"cpTable": [
				[1.0, 0.0],
				[0.0, 1.0],
				[0.0, 1.0],
				[0.0, 1.0]
			]
		}
	]
}

var bn3 = {
	"name": "Overall system network",
	"description": "description for overall system network",
	"dependencyOn": ["598b7d2f232a51df040143d4"],
	"data": [{
			"refId": "597a5240ca0090b2e063b6b5",
			"name": "Cable1",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "597a5245ca0090b2e063b6b6",
			"name": "Cable2",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "597a524eca0090b2e063b6b7",
			"name": "Cable3",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "597a5252ca0090b2e063b6b8",
			"name": "Transmission_Tower1",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "597a5256ca0090b2e063b6b9",
			"name": "Transmission_Tower2",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "598b7d2f232a51df040143d4",
			"name": "Powerhouse",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "transferredNetwork",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		},
		{
			"refId": "597a525aca0090b2e063b6ba",
			"name": "Distribution_Centre",
			"states": ["0", "1"],
			"parents": [],
			"eventType": "basic",
			"gateType": null,
			"cpTable": [0.18, 0.82]
		}, {
			"refId": null,
			"name": "L1_System",
			"states": ["0", "1"],
			"parents": ["Cable1", "Powerhouse"],
			"eventType": "intermediate",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}, {
			"refId": null,
			"name": "L2_System",
			"states": ["0", "1"],
			"parents": ["Cable2", "Transmission_Tower1", "L1_System"],
			"eventType": "intermediate",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}, {
			"refId": null,
			"name": "L3_System",
			"states": ["0", "1"],
			"parents": ["Cable3", "Transmission_Tower2", "L2_System"],
			"eventType": "intermediate",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}, {
			"refId": null,
			"name": "Overall_System",
			"states": ["0", "1"],
			"parents": ["Distribution_Centre", "L3_System"],
			"eventType": "main",
			"gateType": "OR",
			"cpTable": [
				[1.0, 0.0],
				[1.0, 0.0],
				[1.0, 0.0],
				[0.0, 1.0]
			]
		}
	]
}

var nets = [{
	id: 3,
	d: [1]
}, {
	id: 1,
	d: []
}, {
	id: 2,
	d: []
}, {
	id: 6,
	d: [1, 5]
}, {
	id: 4,
	d: [2]
}, {
	id: 5,
	d: [2, 1]
}, {
	id: 0,
	d: [4, 1]
}];

nets = shuffleArray(nets)

var dlist = []

do {
	for (var i = 0; i < nets.length; i++) {
		if (dlist.indexOf(nets[i].id) == -1) {
			if (nets[i].d.length == 0) {
				dlist.push(nets[i].id)
			}
			if (nets[i].d.length > 0) {
				var flag = true;
				for (var ii = 0; ii < nets[i].d.length; ii++) {
					if (dlist.indexOf(nets[i].d[ii]) == -1) {
						flag = false
					}
				}
				if (flag) {
					dlist.push(nets[i].id)
				}
			}
		}
	}

} while (dlist.length != nets.length);

// var results = jsBayes.get(nodes3);

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
