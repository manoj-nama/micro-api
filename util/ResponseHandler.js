const formatSuccess = (data) => {
    data = data instanceof Array ? data : [data]
    return {
        success: true,
        records: data
    }
};

const formatFailure = (resource, code) => {
    return {
        success: false,
        error: {
            code,
            message: MESSAGES[resource][code] || "Something went wrong!"
        }
    };
};

const MESSAGES = {
    AUTH: {
        "1001": "Unable to Authenticate User."
    },
    EVENT: {
        "2001": "No results found."
    },
    CUSTOM: {
        "400": "Something went wrong."
    }
};


module.exports = {
    formatSuccess,
    formatFailure
};

// res.status(400).send(ResponseHandler.formatFailure("CUSTOM", 400));
// res.status(400).send(ResponseHandler.formatFailure("AUTH", 1001));