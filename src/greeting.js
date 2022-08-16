const greetingBlock = document.querySelector('.greeting')
const testBlock = document.querySelector('.testingBlock')

if (testBlock) {
    testBlock.style.backgroundColor = 'tomato'
    testBlock.style.padding = '1rem'
    testBlock.style.borderRadius = '5px'
}

if (greetingBlock) {
    greetingBlock.innerHTML = '<b>Hello! this is Home page</b>'
}

export { greetingBlock, testBlock }