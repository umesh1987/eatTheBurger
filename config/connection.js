// connect to MySQL.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "gsccdpy0e0up4l7v",
        password: "ks0ivb2r6vrvfibh",
        database: "viwvhtbio2l0x74y"

    })
}
connection.connect();

module.exports = connection;