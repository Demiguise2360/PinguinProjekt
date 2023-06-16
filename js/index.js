function shuffle(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
$(function() {
    let images = $("#gameholder > [id^=penguin]").remove().get();
    shuffle(images);
    for (let i = 0; i < images.length; i++) {
        $("#gameholder").append(images[i]);
    }
});
penguinfound = 0
alredyfoundpenguin1 = false
alredyfoundpenguin2 = false
alredyfoundpenguin3 = false
alredyfoundpenguin4 = false
alredyfoundpenguin5 = false
alredyfoundpenguin6 = false
alredyfoundpenguin7 = false
alredyfoundpenguin8 = false
$(document).ready( function() {
    //This code will run after your page loads
    $(".yeti").mouseup(function() {
        alert("Yaaaarrrr!");
        location.reload();
    });
});
function penguin1() {
    if (alredyfoundpenguin1 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin1 = true
    }
}
function penguin2() {
    if (alredyfoundpenguin2 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin2 = true
    }
}
function penguin3() {
    if (alredyfoundpenguin3 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin3 = true
    }
}
function penguin4() {
    if (alredyfoundpenguin4 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin4 = true
    }
}
function penguin5() {
    if (alredyfoundpenguin5 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin5 = true
    }
}
function penguin6() {
    if (alredyfoundpenguin6 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin6 = true
    }
}
function penguin7() {
    if (alredyfoundpenguin7 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin7 = true
    }
}
function penguin8() {
    if (alredyfoundpenguin8 == false) {
        penguinfound ++
        if (penguinfound == 8) {
            alert("Well done you found all the penguins");
            location.reload();
        }
        alredyfoundpenguin8 = true
    }
}