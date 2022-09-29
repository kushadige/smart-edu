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
export const getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact',
    });
}
export const getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register'
    });
}
export const getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login'
    });
}

const pageController = {
    getHomePage,
    getAboutPage,
    getRegisterPage,
    getLoginPage,
    getContactPage,
};

export default pageController;
