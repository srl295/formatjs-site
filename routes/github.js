'use strict';

module.exports = function (route) {
    route.name = 'github';
    route.menu = 'GitHub';

    route.get(function (req, res) {
        res.render('github');
    });
};
