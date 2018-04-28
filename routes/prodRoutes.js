var multer = require('multer')
var upload = multer({
  dest: '/tmp',
});
const userController = require('../controllers/user');
const passportConfig = require('../configs/passport');

module.exports = function(app) {

	// app.get('/', homeController.index);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.post('/signup', userController.postSignup);
// app.get('/contact', contactController.getContact);
// app.post('/contact', contactController.postContact);
// app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
// app.post('/account/update', passportConfig.isAuthenticated, userController.postUpdateProfile);
// app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
// app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/user/:role',userController.getActors)
app.get('/user/:role/:id',userController.getSingleActor)


	// app.get('/prod/getCategoriesAndBrands',require('../joyi/apis/prodApis').getCategoriesAndBrands);
	// app.post('/prod/createCategories',require('../joyi/apis/prodApis').createCategories);
	// app.post('/prod/createProduct', upload.single('prodImage'), require('../joyi/apis/prodApis').createProduct);
    };