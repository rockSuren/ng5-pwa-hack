var express = require('express')
var app = express()

var mysql = require('mysql')

/**
 * This middleware provides a consistent API 
 * for MySQL connections during request/response life cycle
 */ 
var myConnection  = require('express-myconnection')
var dbOptions = {
	host:	  'remotemysql.com',
	user: 	  'p7Uck7iBo0',
	password: 'WbjMAoBPE2',
	port: 	  3306, 
	database: 'p7Uck7iBo0'
}
/**
 * 3 strategies can be used
 * single: Creates single database connection which is never closed.
 * pool: Creates pool of connections. Connection is auto release when response ends.
 * request: Creates new connection per new request. Connection is auto close when response ends.
 */ 
app.use(myConnection(mysql, dbOptions, 'pool'))

// Get list of softwares
app.get('/api/softwares', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM AMS_SOFTWARE ORDER BY id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
                console.log(err);
                res.status(500).send(err);
			} else {
                console.log(rows);
				res.send(rows);
			}
		})
	})
})

// Get list of hardwares
app.get('/api/hardwares', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM AMS_HARDWARE ORDER BY id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
                console.log(err);
                res.status(500).send(err);
			} else {
                console.log(rows);
				res.send(rows);
			}
		})
	})
})

// Get list of hardwares
app.get('/api/ahd', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM AHD ORDER BY req_id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
                console.log(err);
                res.status(500).send(err);
			} else {
                console.log(rows);
				res.send(rows);
			}
		})
	})
})

app.listen(3000, function(){
	console.log('Server running at port 3000: http://127.0.0.1:3000')
})