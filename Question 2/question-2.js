// class Media {
//     constructor (visual, news) {
//         this.mediaType1 = visual;
//         this.mediaType2 = news;
//     }
//     logMedia () {
//         return 'I like' + this.mediaType1 + 'media';
//     }
// }

// class Book extends Media() {
//     constructor (visualmMdia, newsMedia , xMedia) {
//     super(visualmMdia, newsMedia);
//     this.xMedia = xMedia;
//     }

//     read () {
//         console.log("reading" + this.xMedia);
//     }
// }

// const bookObj = new Book (100, 200, 5);
// console.log(bookObj.read())

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();