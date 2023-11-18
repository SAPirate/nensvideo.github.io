let vid = document.querySelectorAll('.vid');
let title = document.querySelector('.title');
let mainVideo = document.querySelector('.main-video video');


vid.forEach(video =>{
    video.onclick = () =>{
        vid.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');

        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src= src;
            
         let text = video.children[1].innerHTML;
         title.innerHTML = text;
        
     };
    };
});