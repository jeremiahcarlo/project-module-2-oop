class BGM {
    constructor (theRoot, src) {
    this.audio = document.createElement('audio'); 
    this.audio.src = src;
    this.audio.id = 'BackgroundMusic';
    theRoot.appendChild(this.audio);
    this.audio.play ();  
    }
}
