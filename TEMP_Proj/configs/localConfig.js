module.exports = {
 COMPANY_DETAILS: {
	COMPANY_NAME: "Connect Pro",
	COMPANY_ADDRESS: "Connect Pro",	
	COMPANY_PHONE: "Connect Pro",
	COMPANY_EMAIL: "Connect Pro",
	COMPANY_EMAIL_PASSWORD: "Connect Pro"
 },	
 MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/connectpro',
 otpCodeExpiryTimeInMiliSecs : 600000,
 TOKEN_SECRET : process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
 SUPER_ADMIN_EMAIL : 'ConnectPro@gmail.com', // super Admin credentials
 SUPER_ADMIN_PHONE : '9945052847',//super Admin PH no
 WEB_FOLDER : "local"    
};