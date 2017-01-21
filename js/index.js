/**
 * Created by zhaojunming on 16/12/31.
 */

function playAudioCanClick() {
    document.getElementById("AUDIO_CAN_CLICK").play();
}

function playAudioCanNotClick() {
    document.getElementById("AUDIO_CAN_NOT_CLICK").play();
}

$(function () {

    $("body").click(function (event) {
        if (event.target.dataset.canClick) {
            playAudioCanClick();
        } else {
            playAudioCanNotClick();
        }
    });


});