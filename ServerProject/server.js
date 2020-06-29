const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var corsOptions = {
    origin: 'http://localhost:4200',
    //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
    //giả sử node server là http://localhost:8000
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  };
  const app = express();
	app.use(cors());
	app.use(bodyParser.json());
	
	
	app.listen(8000, () => {
		console.log('Server started!');
	  });
	app.route('/api/position').get((req, res) => {
	  console.log('position');
		res.send([{Name:'KinhDoanh', id:'a01' }, { Name:'VanPhong', id:'a02' }]
		);
	});
	app.route('/api/acc/insert').post((req, res)=>{
		console.log('insert Position');
		console.log('position info:'+req.body);
		res.send(201, req.body);
	})