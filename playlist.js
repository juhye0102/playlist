const song = [
    document.getElementsByClassName('name')[0],
    document.getElementsByClassName('name')[1],
    document.getElementsByClassName('name')[2],
];

const new_song = document.getElementById('new_song');
const best_song = document.getElementById('best_song');
const play_song = document.getElementById('play_song');

for (let i = 0; i < 3; i++) {
    song[i].addEventListener('click', function() {
        if(i === 0) {
            song_list(play_song, best_song, new_song);
        }
        else if(i === 1) {
            song_list(new_song, play_song, best_song);
        }
        else{
            song_list(best_song, new_song, play_song);
        }
    })
}

function song_list(song1, song2, song3) {
    song1.pause();
    song1.style = "opacity: 0";
    song2.pause();
    song2.style = "opacity: 0";
    song3.play();
    song3.style = "opacity: 1";
}