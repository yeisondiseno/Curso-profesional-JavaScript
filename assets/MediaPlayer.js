function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.toggle = function() {
    if( this.media.paused) {
        this.media.play()
    } else {
        this.media.pause()
    }
}

export default MediaPlayer