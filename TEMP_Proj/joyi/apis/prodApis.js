var events = require('events');
var fs = require('fs');
var mkdirp = require('mkdirp')

exports.getCategoriesAndBrands = function(req, res){
	console.log("GET ALL CATEGORIES");
	var query = {};
	var collection = req.app.schema.categories;
	var selection = {};
	var populateDoc = "";
	req.app.crud.getAll(query, collection, selection, populateDoc, req.app, function(err, categories){
		if(err){
			console.log("Error in getting categories: ",err);
			res.status(200).json({message: "Unexpected error occured", data: {}, res:false});
		} else {
			res.status(200).json({message: "success", data: {categories:categories, brands:[]}, res:false});
		}
	});		
};

exports.createProduct = function(req, res){
	console.log("CREATING PRODUCT", req.body);

	var clientData = req.body.data;
	/* {
	    name: "PROD1",
	    description: "PROD1_DESC",
	    categoryId: 1
	};*/
	
	var eventEmitter = new events.EventEmitter();

	eventEmitter.on('checkIfProductNameExists', function(clientData){
		var collection = req.app.schema.products;
		var query = {name: clientData.name};
		var selection = {};
		var populateDoc = "";
		req.app.crud.getOneDoc(query, collection, selection, populateDoc, req.app, function(err, prod){
			if(err){
				console.log("Error in checking products: ",err);
				res.status(200).json({message: "Unexpected error occured", data: {}, res:false});
			} else {
				if(prod){
					console.log("Error in checking products: Product Already Exists");
					res.status(200).json({message: "Product Already Exists", data: {}, res:false});
				} else {
					console.log("Creating Product");
					eventEmitter.emit('createProduct',clientData);
				}
			}
		}); 
	});

	eventEmitter.on('createProduct', function(clientData){
		var collection = req.app.schema.products;
		req.app.crud.createDocument(clientData, collection, req.app, function(err, prod){
			if(err){
				console.log("Error in creating products: ",err);
				res.status(200).json({message: "Unexpected error occured", data: {}, res:false});
			} else {
				console.log("Product Created: ",prod);
				if(typeof req.file !== "undefined"){
					eventEmitter.emit('checkFolderIfExists_1',prod);
				} else {
					console.log("Error in checking products: No Image");
					res.status(200).json({message: "No Image", data: {}, res:false});	
				}				
			}
		}); 
	});

	eventEmitter.on('checkFolderIfExists_1', function(prod){
		var destPath1 = "./public/"+req.app.config.WEB_FOLDER+"/joyiWeb/prodImages/"+prod.categoryId;
		var destPath2 = "./public/"+req.app.config.WEB_FOLDER+"/adminWeb/prodImages/"+prod.categoryId;
		
		if (fs.existsSync(destPath1)) {
	        console.log("folder exist 1");
	        eventEmitter.emit('checkFolderIfExists_2',prod, destPath1, destPath2);
	    }else {
	        console.log("folder new create 1");
	        mkdirp(destPath1, function(err) {
	            if (err) {
	                console.log("Error in creating destination folders: ", err);
	                return new Error("Error while creating folder");
	            } else{
					eventEmitter.emit('checkFolderIfExists_2',prod, destPath1, destPath2);
				}
	        });
	      }
	});
	eventEmitter.on('checkFolderIfExists_2', function(prod, destPath1, destPath2){

		if (fs.existsSync(destPath2)) {
	        console.log("folder exist 2");
	        eventEmitter.emit('imageUpload',prod, destPath1, destPath2);
	    }else {
	        console.log("folder new create 2");
	        mkdirp(destPath2, function(err) {
	            if (err) {
	                console.log("Error in creating destination folders: ", err);
	                return new Error("Error while creating folder");
	            } else{
					eventEmitter.emit('imageUpload',prod, destPath1, destPath2);
				}
	        });
	      }
	});

	eventEmitter.on('imageUpload', function(prod, destPath1, destPath2){		
		var fileObj = req.file;
		console.log("fileObj: ",fileObj);
		var sourceFileLoc = fileObj.path;
		destPath1 +=  "/"+ prod._id+".jpg";
		destPath2 +=  "/"+ prod._id+".jpg";
        fs.createReadStream(sourceFileLoc).
		pipe(fs.createWriteStream(destPath1));
		fs.createReadStream(sourceFileLoc).
		pipe(fs.createWriteStream(destPath2));
		eventEmitter.emit('updateProduct',prod);
	});

	eventEmitter.on('updateProduct', function(prod){
		var collection = req.app.schema.products;
		var query = {_id: prod._id};
		var toUpdateDoc = {imageUrl: "prodImages/"+prod.categoryId+"/"+prod._id+".jpg"};
		var options = {};
		var populateDoc = "";
		req.app.crud.updateDocument(query, toUpdateDoc, collection, options, populateDoc, req.app, function(err, prod){
			if(err){
				console.log("Error in creating products: ",err);
				res.status(200).json({message: "Unexpected error occured", data: {}, res:false});
			} else {
				console.log("Product Updated: ",prod);
				res.status(200).json({message: "success", data: {product: prod}, res:true});				
			}
		}); 
	});

	eventEmitter.emit('checkIfProductNameExists',clientData);
};

exports.createCategories = function(req, res){
	//console.log("Create Categories:", req.body);
	var catdata = {
		name: req.body.name,
		descValue: req.body.descValue
	};
	var collection = req.app.schema.categories;
	console.log("catdata:", catdata);
	req.app.crud.createDocument(catdata, collection, req.app, function(err, resp){
		if(err){
			console.log("Error in posting categories: ",err);
			res.status(200).json({message: "Unexpected error occured", data: {}, res:false});
		} else {
			res.status(200).json({message: "success", data: resp, res:true});
		}
	});

};