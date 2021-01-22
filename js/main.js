function brokul (){
    var br = document.getElementsByClassName("brokul1");
    var im = document.createElement('img');
    br.firstChild.addEventListener("click", function(){
        this.classList.add("brokulimg");
    });
    
}