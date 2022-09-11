export const getHomePage = (req, res) => {
    res.status(200).send('hello from main.controller.js!');
}

const mainController = {
    getHomePage
}

export default mainController;