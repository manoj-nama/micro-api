const EventService =  require('../../Service/EventService');

const fetchEventList = (req, res) => {
    let payload = {};
    EventService.fetchEventList(payload, (error, data) => {
        if (error) {

        } else if (!data) {

        } else {

        }
    });
};

module.exports = {
    fetchEventList
};