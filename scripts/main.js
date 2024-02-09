$(document).ready(() => {
    main();
})

function main() {
	
    var pressedKeys = [0, 0, 0, 0, 0, 0];
	
    $("body").on("keydown", (event) => {
        console.log(pressedKeys);
        switch (event.key) {
            case "w":
                $("#w-key").css("background-color", "orange");
                pressedKeys[0] = 1;
                break;
            case "a":
                $("#a-key").css("background-color", "orange");
                pressedKeys[1] = 1;
                break;
            case "s":
                $("#s-key").css("background-color", "orange");
                pressedKeys[2] = 1;
                break;
            case "d":
                $("#d-key").css("background-color", "orange");
                pressedKeys[3] = 1;
                break;
            case "Control":
                $("#ctrl-key").css("background-color", "orange");
                pressedKeys[4] = 1;
                break;
            case " ":
                $("#space-key").css("background-color", "orange");
                pressedKeys[5] = 1;
                break;
        }
        if (pressedKeys.every((element) => {
            return element == 1
        })) {
            $("div[class='container']").css("border", "3px solid lightgreen");
        }
    })

    $("body").on("keyup", (event) => {
        switch (event.key) {
            case "w":
                $("#w-key").css("background-color", "lightblue");
                pressedKeys[0] = 0;
                break;
            case "a":
                $("#a-key").css("background-color", "lightblue");
                pressedKeys[1] = 0;
                break;
            case "s":
                $("#s-key").css("background-color", "lightblue");
                pressedKeys[2] = 0;
                break;
            case "d":
                $("#d-key").css("background-color", "lightblue");
                pressedKeys[3] = 0;
                break;
            case "Control":
                $("#ctrl-key").css("background-color", "lightblue");
                pressedKeys[4] = 0;
                break;
            case " ":
                $("#space-key").css("background-color", "lightblue");
                pressedKeys[5] = 0;
                break;
        }
        $("div[class='container']").css("border", "3px solid red");
    })
}