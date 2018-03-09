var Binary = require('mongodb').Binary;

var data = fs.readFileSync(file_path);
var insert_data = {};
insert_data.file_data= Binary(data);

var collection = db.collection('files');
collection.insert(insert_data, function(err, result) {


}
