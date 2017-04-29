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
        "1001": "",
        "1002": "",
        "1003": ""
    },
    FB: {
        "2001": "",
        "2002": "",
        "2003": ""
    },
    MEETUP: {
        "3001": "",
        "3002": "",
        "3003": ""
    },
    TWITTER: {
        "4001": "",
        "4002": "",
        "4003": ""
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