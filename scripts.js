// simple object construction

// var teacher = { 
// 	name: "Chris",
// 	school: "NYCDA"
// }

// var bike = {
// 	wheels: "2",
// 	frame: "cruiser",
// 	brand: "Tribe"
// }

function Bike(brand, frame) {
	this.wheels = 2;
	this.brand = brand;
	this.frame = frame;
	this.addTrainingWheels = addTrainingWheels; // This is a method on the Bike object.
	this.removeTrainingWheels = removeTrainingWheels;
}

function addTrainingWheels(trainingWheels) {
	this.wheels += trainingWheels;
}

function removeTrainingWheels() {
	if (this.wheels > 2) {
		this.wheels -= 2;
	}
}

var brooklyn = new Bike("Brooklyn", "hybrid");
// Javascript will now identify var bike as a Bike object, rather than just a generic object.
var schwinn = new Bike("Schwinn", "road");
var tribe = new Bike("Tribe", "city bike");

function Motorcycle() {
	Bike.apply(this, arguments);
	this.engine = true;
	this.mpg = 50;
}

var indian = new Motorcycle("Indian", "Touring");
var harley = new Motorcycle("Harley Davidson", "Crusier");













