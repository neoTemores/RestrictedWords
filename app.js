const listOfRestrictedWords = ["zoom", "channel", "galvanize", "mcsp", "garrett", "ross", "incompetent", "unfunny"];

const body = document.querySelector('body');

const loadApp = () => {
    let mainAppDiv = createMainAppContainerDiv()
    let inputBoxContainer = createInputBoxContainer(mainAppDiv)
    let postsContainer = createPostsContainer(mainAppDiv)
}
loadApp()

function createDiv() {
    return document.createElement('div')
}

function createMainAppContainerDiv() {
    let mainAppDiv = createDiv();
    mainAppDiv.id = 'mainAppDiv';
    body.appendChild(mainAppDiv);
    return mainAppDiv
}

function createInputBoxContainer(mainAppDiv) {
    let inputBoxContainer = createDiv();
    inputBoxContainer.id = 'inputBoxContainer';
    inputBoxContainer.textContent = 'THIS WILLL BE THE INPUT BOX'
    mainAppDiv.appendChild(inputBoxContainer)
    return inputBoxContainer
}




function createPostsContainer(mainAppDiv) {
    let postsContainer = createDiv();
    postsContainer.id = 'postsContainer';
    postsContainer.textContent = 'THIS WILL BE THE POSTS CONTAINER';
    mainAppDiv.appendChild(postsContainer)
    return postsContainer
}

