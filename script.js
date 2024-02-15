function nextScene(choice) {
    document.getElementById(currentScene).style.display = 'none';

    if (currentScene === 'scene1') {
        if (choice === 'a') {
            currentScene = 'scene2a';
        } else if (choice === 'b') {
            currentScene = 'scene2b';
        }
    }
    if (currentScene === 'scene2a') {
        if (choice === 'c') {
            currentScene = 'scene3';
        } else if (choice === 'd') {
            currentScene = 'scene4';
        }
    } 
    if (currentScene === 'scene2b') {
        if (choice === 'e') {
            currentScene = 'scene4';
        } else if (choice === 'f') {
            currentScene = 'scene4';
        }
    }

    document.getElementById(currentScene).style.display = 'block';
}
