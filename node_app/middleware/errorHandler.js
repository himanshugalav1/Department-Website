const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;


    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case 404:
            res.json({
                title: "Page Not Page",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        default:
            res.json({
                title: "default",
                message: err.message,
                stackTrace: err.stack
            });
            break;
    }


};

module.exports = errorHandler;