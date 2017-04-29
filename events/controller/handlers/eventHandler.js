import EventService from '../../Service/EventService';

const fetchEventList = (req, res) => {
    let payload = {};
    EventService.fetchEventList(payload, (success) => {
        
    });
};

module.exports = {
    fetchEventList
};