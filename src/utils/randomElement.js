const getElementRandom = (elements) => {
    const index = Math.floor(Math.random() * elements.length);
    return elements[index];
}

export {
    getElementRandom
}