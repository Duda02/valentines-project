const imageSources = [
    'cat-cry.gif',
    'cat-scream.gif',
    'sad-cat.gif',
];

window.onload = function() {
    const image = document.getElementById('image');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const text = document.getElementById('text-content');

    let hoverCount = 0;
    function onMouseOver() {
        if (hoverCount > 20) {
            noButton.onmouseover = null;
            return;
        }

        noButton.style.position = 'absolute';
        noButton.style.left = `${Math.max(0, Math.floor(Math.random() * window.innerWidth - noButton.getBoundingClientRect().width))}px`;
        noButton.style.top = `${Math.max(0, Math.floor(Math.random() * window.innerHeight - noButton.getBoundingClientRect().height))}px`;
        hoverCount++;
    }

    yesButton.onclick = function(){
        image.src = "img/yes.gif";
        noButton.style.display = "none";
        yesButton.style.display = "none";
        text.innerText = "Jupiiiii!!";
    }

    let actionIndex = 0;
    noButton.onclick = function(event) {
        yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton, null).getPropertyValue('font-size')) + 8}px`;
        image.src = `img/${imageSources[actionIndex % imageSources.length]}`;

        switch (actionIndex) {
            case 0:
                swal('Coś Ci się pomyliło??', 'Spróbuj jeszcze raz', 'error');
                break;
            case 1:
                noButton.innerText = 'Aha???';
                break;
            case 2:
                noButton.innerText = 'Nie??????';
                noButton.onmouseover = onMouseOver;
                break;
            case 3:
                noButton.innerText = 'No dobrze...';
                break;
            case 4:
                const element = document.createElement('video');
                element.style.maxWidth = '-webkit-fill-available';
                element.autoplay = true;

                const source = document.createElement('source');
                source.src = 'img/cat-house.mp4';
                source.type = 'video/mp4';
                element.appendChild(source);

                swal('Już po tobie ️☠️️☠️', '', {
                    content: element
                });
                break;
            case 5:
                noButton.innerText = 'Przemyśl to.. 😭';
                break;
            case 6:
                noButton.innerText = 'Ostatnia szansa..';
                break;
            case 7:
                noButton.innerText = 'Ok.. jeśli tak wolisz';
                break;
            case 8:
                noButton.innerText = 'Definitywnie NIE??';
                break;
            case 9:
                noButton.style.display = 'none';
                text.innerText = 'Teraz już nie masz wyboru 🤗';
                break;
            default:
                console.error('Action not implemented');
        }

        actionIndex++;
    }
}

