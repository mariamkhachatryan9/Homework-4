// Create a TV class with properties like brand, channel and volume.
// ● Specify brand in a constructor parameter. Channel should be 1 by default. Volume
// should be 50 by default.
// ● Add methods to increase and decrease volume. Volume can never be below 0 or
// above 100.
// ● Add a method to set the channel. Let's say the TV has only 50 channels so if you try
// to set channel 60 the TV will stay at the current channel.
// ● Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint:
// consider using it from the constructor).
// ● It's useful to write a status that returns info about the TV status like: "Panasonic
// at channel 8, volume 75".

class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        if (volume < 0 || volume > 100) {
            throw new Error("Wrong value")
        }
        this.volume = volume;
    }

    increaseVol() {
        this.volume++;
        if (this.volume > 100) {
            this.volume = 100;
        }

    }
    decreaseVol() {
        this.volume--;
        if (this.volume < 0) {
            this.volume = 0;
        }

    }
    setChannel(channel) {
        if (channel <= 50 && channel >= 1) {
            this.channel = channel;
        }
    }
    resetTV() {
        this.channel = 1;
        this.volume = 50;
    }

    status() {
        console.log(this.brand + " " + "at channel " + this.channel + ", volume " + this.volume);
    }
}


let tv = new TV("Samsung", 25, 100);
tv.increaseVol();
tv.increaseVol();
tv.setChannel(25);
tv.resetTV();
tv.status();
console.log(tv);