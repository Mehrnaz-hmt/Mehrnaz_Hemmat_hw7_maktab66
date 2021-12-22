class Media {
    constructor(presentPrint) {
        this.name = presentPrint
    }
    presentPrint() {
        return this.name
    }

}

class Book extends Media {
    constructor(presentPrint, sheets) {
        super(presentPrint);
        this.sheets = sheets;
    }

    presentSheets() {
        return this.sheets
    }
}

class Film extends Media {
    constructor(presentPrint, filmName) {
        super(presentPrint);
        this.filmName = filmName;
    }

    broadcastMedia() {
        return this.filmName
    }
}

class SocialMedia extends Media {
    constructor(presentPrint, mediaName) {
        super(presentPrint);
        this.mediaName = mediaName;
    }

    presentMedia() {
        console.log(this.mediaName);
    }
}

let book = new Book("newspaper", 100);
 let film = new Film("cinema", "interstellar")
 let socialMedia = new SocialMedia("Android Type", "Instagram")
 console.log(book)
 console.log(film)
 console.log(socialMedia)



// let media = new Media ("TV","magazine","Instagram")