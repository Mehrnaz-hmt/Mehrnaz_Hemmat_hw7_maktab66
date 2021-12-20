class Media {
    constructor (brodcastMedia, printMedia,socialMedia) {
        this.brodcastMedia = brodcastMedia
        this.printMedia = printMedia
        this.socialMedia = socialMedia
    }
    presentBrodcast () {
        console.log(this.brodcastMedia)
    }
    presenPrint () {
        console.log(this.printMedia)
    }
    presentSocial () {
        console.log(this.socialMedia)
    }
}

class Book extends Media {
    constructor (presenPrint,sheets) {
        super (presenPrint,sheets);
        this.sheets = sheets;
       
    }
    presentSheets () {
        console.log(this.sheets);
    }
}

class Film extends Media {
    constructor (brodcastMedia,name) {
        super (brodcastMedia,name);
        this.name = name;
       
    }
    presentName () {
        console.log(this.name);
    }
}

class SocialMedia extends Media {
    constructor (socialMedia,name) {
        super (socialMedia,name);
        this.name = name;
       
    }
    presentName () {
        console.log(this.name);
    }
}
let book = new Book ("newspaper",100);
let film = new Film ("cinema","flatliners")
let socialMedia = new SocialMedia ("Androind Type","Instagram")
console.log(socialMedia)
console.log(film)
console.log(book)



// let media = new Media ("TV","magazine","Instagram")