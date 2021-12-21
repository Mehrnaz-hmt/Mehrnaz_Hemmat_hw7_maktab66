function Course(className, classUnit,classCapacity) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;

}


let software = new Course("softEngineeringClass", 3,50);
let network = new Course("networkClass", 3,50);

software.book = "software book"
network.project = true;
console.log(software)
console.log(network)


 