function musicPlayer(song){
    return {
        song, 
        play(){
            console.log(`playing song ${song}`);
        },
    };
}
let musicPlayer1 = musicPlayer("TwinkleTwinkle");
musicPlayer1.play();