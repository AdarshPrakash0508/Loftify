const music = new Audio('audio/1.mp3');
// music.play();

const song = [
    {
        id: "1",
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: "2",
        songName: `Faded <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Millionaire <br><div class="subtitle">Yo Yo Honey</div>`,
        poster: "img/3.jpg"
    },
    {
        id: "4",
        songName: `Pind De Ghere <br><div class="subtitle">Rupinder Handa</div>`, 
        poster: "img/4.jpg"
    },
    {
        id: "5",
        songName: `Tere Yaadoon Mein <br><div class="subtitle">KK</div>`, 
        poster: "img/5.jpg"
    },
    {
        id: "6",
        songName: `Sahiba <br><div class="subtitle">Stebin</div>`, 
        poster: "img/6.jpg"
    },
    {
        id: "7",
        songName: `Bikhra <br><div class="subtitle">Rovalio</div>`,
        poster: "img/7.jpg"
    },
    {
        id: "8",
        songName: `Suna Hai <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/8.jpg"
    },
    {
        id: "9",
        songName: `Dilbar <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/9.jpg"
    },
    {
        id: "10",
        songName: `Duniya <br><div class="subtitle">Abhijit Vaghani</div>`,
        poster: "img/10.jpg"
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Guru Randhawa</div>`, 
        poster: "img/11.jpg"
    },
    {
        id: "12",
        songName: `Putt Jatt Da <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/12.jpg"
    },
    {
        id: "13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg"
    },
    {
        id: "14",
        songName: `Vaaste <br><div class="subtitle">Dhvani B.</div>`,
        poster: "img/14.jpg"
    },
    {
        id: "15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg"
    },
    {
        id: "16",
        songName: `Meri Zindagi Hai tu <br><div class="subtitle">Jubin Nautiyal</div>`, 
        poster: "img/16.jpg"
    },
    {
        id: "17",
        songName: `Zaroori Tha <br><div class="subtitle">R.F.Ali Khan</div>`, 
        poster: "img/17.jpg"
    },
    {
        id: "18",
        songName: `Pasoori <br><div class="subtitle">Ali Sethi</div>`, 
        poster: "img/18.jpg"
    },
    {
        id: "19",
        songName: `Insane <br><div class="subtitle">Ap Dhillon</div>`, 
        poster: "img/19.jpg"
    },
    {
        id: "20",
        songName: `Maaye <br><div class="subtitle">B Praak</div>`, 
        poster: "img/20.jpg"
    },
    {
        id: "21",
        songName: `Naina Ashq Na Ho <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/21.jpg"
    },
    {
        id: "22",
        songName: `Khairiyat (Sad) <br><div class="subtitle">Arjit Singh</div>`,    
        poster: "img/22.jpg"
    },
    {
        id: "23",
        songName: `Desh Mere <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/23.jpg"
    },
    {
        id: "24",
        songName: `Dhokha <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/24.jpg"
    },
    {
        id: "25",
        songName: `Tera Yaar Hoon Main <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/25.jpg"
    },
    {
        id: "26",
        songName: `Chunar <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/26.jpg"
    },
    {
        id: "27",
        songName: `Galti Se Mistake <br><div class="subtitle">Arjit Singh</div>`,   
        poster: "img/27.jpg"
    },
    {
        id: "28",
        songName: `Hamari Adhuri Kahani <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/28.jpg"
    },
    {
        id: "29",
        songName: `Neki Ki Raah <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/29.jpg"
    },
    {
        id: "30",
        songName: `Humdard <br><div class="subtitle">Arjit Singh</div>`,  
        poster: "img/30.jpg"
    },
    {
        id: "31",
        songName: `Mere Yaaraa <br><div class="subtitle">Arjit Singh</div>`,       
        poster: "img/31.jpg"
    },
    {
        id: "32",
        songName: `Nashe Si Chadh Gayi <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/32.jpg"
    },
    {
        id: "33",
        songName: `Ae Watan <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/33.jpg"
    },
    {
        id: "34",
        songName: `Agar Tum Saath Ho <br><div class="subtitle">Arjit Singh</div>` ,     
        poster: "img/34.jpg"
    },
    {
        id: "35",
        songName: `Pachtaoge <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/35.jpg"
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.Style.background = `rgb(105, 105, 105, .0)`;
    });
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (ei) => {
        index = ei.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = song.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.add('bi-play-circle-fill');
        el.target.classList.remove('bi-pause-circle-fill');
    });
});



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music_duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


const back = document.getElementById('back');
const next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1; 
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});    

next.addEventListener('click', () => {
    index += 1; 
    if (index > 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
               
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});



















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementById('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song_scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song_scrollLeft += 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementById('item')[0];


