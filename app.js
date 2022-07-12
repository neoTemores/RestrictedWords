const listOfRestrictedWords = ["zoom", "channel", "galvanize", "mcsp", "garrett", "ross", "incompetent", "unfunny"];

let listOfPosts = [];

const body = document.querySelector('body');

const loadApp = () => {
    let mainAppDiv = createMainAppContainerDiv()
    let inputBoxContainer = createInputBoxContainer(mainAppDiv)
    let postsContainer = createPostsContainer(mainAppDiv)
    createTextArea(inputBoxContainer)
    createPostButton(inputBoxContainer)
}
loadApp()

function createDiv() {
    return document.createElement('div')
}

//creates main div that contains entire application
function createMainAppContainerDiv() {
    let mainAppDiv = createDiv();
    mainAppDiv.id = 'mainAppDiv';
    body.appendChild(mainAppDiv);
    return mainAppDiv
}

//creates main input box container that holds text area and post btn
function createInputBoxContainer(mainAppDiv) {
    let inputBoxContainer = createDiv();
    inputBoxContainer.id = 'inputBoxContainer';
    mainAppDiv.appendChild(inputBoxContainer);
    return inputBoxContainer
}

function createTextArea(inputBoxContainer) {
    let textArea = document.createElement('textarea');
    textArea.id = 'textArea';
    inputBoxContainer.appendChild(textArea)
}

function createPostButton(inputBoxContainer) {
    let postBtn = document.createElement('button');
    postBtn.textContent = 'Post';
    postBtn.id = 'postBtn'
    inputBoxContainer.appendChild(postBtn)

    postBtn.addEventListener('click', () => {
        obtainTextAreaValue()
    })
}

function inputText() {
    return document.querySelector('#textArea').value
}

function obtainTextAreaValue() {
    let postText = inputText()
    postText.length > 0 ? splitPostTextIntoArray(postText.toLowerCase()) : null

}

function splitPostTextIntoArray(text) {
    let arrayOfWords = text.split(' ');
    checkForRestrictedWord(arrayOfWords)
}

function checkForRestrictedWord(arrayOfWords) {
    let indexOfRestrictedWord = []

    for (let i = 0; i < listOfRestrictedWords.length; i++) {
        const current = listOfRestrictedWords[i];

        arrayOfWords.forEach((word, index) => {
            if (word === current) {
                indexOfRestrictedWord.push(index)
            }
        })
    }

    replacePostRestrictedWords(indexOfRestrictedWord)
}

function createDashes(num) {
    let stringOfDashes = ''
    while (num > 0) {
        stringOfDashes += '-'
        num--
    }
    return stringOfDashes
}

function replacePostRestrictedWords(array) {
    let postText = inputText().split(' ')

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        let numOfDashesToCreate = postText[current].length - 1
        let firstLetter = postText[current].split('')[0]

        let newWord = `${firstLetter}${createDashes(numOfDashesToCreate)}`
        postText[current] = newWord
    }

    listOfPosts = [postText.join(' '), ...listOfPosts]

    displayPosts(listOfPosts)
}

//creates main posts container
function createPostsContainer(mainAppDiv) {
    let postsContainer = createDiv();
    postsContainer.id = 'postsContainer';
    postsContainer.textContent = 'THIS WILL BE THE POSTS CONTAINER';
    mainAppDiv.appendChild(postsContainer)
    return postsContainer
}

function displayPosts(arrayOfPosts) {
    console.log(arrayOfPosts)
}