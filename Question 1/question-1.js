function Course(className, classUnit,classCapacity) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;

    this.softEngineeringClass = function () {
        
        return this.className + " " + this.classUnit + this.classCapacity
    };
}
let course1 = new Course("softEngineeringClass", 3,50);
let course2 = new Course("networkClass", 3,50);
console.log(course1.softEngineeringClass());
console.log(course2.softEngineeringClass());


 