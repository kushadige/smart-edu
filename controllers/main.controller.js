export const getHomePage = (req, res) => {
    res.status(200).render('index', {
        page_name: 'home',
    });
};
export const getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

const mainController = {
    getHomePage,
    getAboutPage,
};

export default mainController;
