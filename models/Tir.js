const Sequelize = require('sequelize');
const db = require('../config/db');

const Tir = db.define('tirs', {
        title: {
            type: Sequelize.STRING
        }
    }
)

module.exports = Tir;