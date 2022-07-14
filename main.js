document.addEventListener('DOMContentLoaded', ()=>{
    document.addEventListener('click', playVideo)

    function playVideo(){
        const video=document.querySelector('.fullscreen');
        
        if(video.playing){
        }
        else{
            video.play()
        }
    }
})