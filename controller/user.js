exports.register = async (req, res, next) => {
    try {
        JSON.parse('ddddadc');
        res.send('post /user/login');
    } catch (error) {
        next(error);
    }
}
