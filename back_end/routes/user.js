const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fileUpload = require('express-fileupload');
const User = require("../model/User");
const authenticate = require("../middleware/authenticate");
const restrictTo = require("../middleware/restrictTo");
const router = express.Router();
const nodemailer = require('nodemailer');
const sendEmail = require('../utils/sendEmail');

router.use(fileUpload());
router.post("/register", async (request, response) => {
	const { name, email, password } = request.body;
	try {
		let data = await User.findOne({ email });
		if (data) {
			return response.status(400).json({ msg: "User already exist" });
		} else {
			data = new User({
				name,
				email,
				password,
			});
		}
		const salt = await bcrypt.genSalt(10);
		data.password = await bcrypt.hash(password, salt);
		await data.save();

		const payload = {
			id: data.id,
			iat: Date.now(),
			exp: Date.now() + 60000,
		};
		jwt.sign(payload, process.env.SECRET, (err, token) => {
			if (err) throw err;
			response.json({ token });
		});
	} catch (error) {
		console.log(error);
		response.status(500).send({ msg: "Server error" });
	}
});

router.post("/login", async (request, response) => {
	const { email, password } = request.body;
	let data = await User.findOne({ email });
	if (!data) {
		return response.status(400).json({ msg: "User not found" });
	}
	const isMatch = await bcrypt.compare(password, data.password);
	if (!isMatch) {
		return response.status(400).json({ msg: "invalid Password" });
	}
	const payload = {
		id: data.id,
		iat: Date.now(),
		exp: Date.now() + 600000000,
	};

	try {
		jwt.sign(payload, process.env.SECRET, (err, token) => {

			if (err) throw err;
			console.log('login token : ', token);
			return response.
				cookie('jwt', token, { secure: false, httpOnly: true, maxAge: 900000, sameSite: 'lax' })
				.json({ msg: 'login success' });
		});
	} catch (error) {
		console.log(error);
		response.status(500).json({ msg: "Server error" });
	}
});
router.post('/logout' , (request , response)=>{

	response.clearCookie("jwt", { secure: false, httpOnly: true, sameSite: 'lax' })
	.json({ msg : 'logout success '});

})

router.get("/dashboard", authenticate, async (request, response) => {
	console.log("this is request.id", request.id);
	try {
		const user = await User.findById(request.id).select("-password");
		if (!user) {
			return response.status(500).json({ msg: "Server error" });
		}
		response.json({ msg: ` welcome back ${user.name}` });
	} catch (error) {
		response.status(500).json({ msg: "Server error" });
	}
});

router.post("/profile", authenticate, async (request, response) => {
	const userId = request.id;
	const { name, email } = request.body
	const user = await User.findById(userId).select('-password');	
	if (!user) {
		return response.status(500).json({ msg: "Server error" });
	}
	console.log(request.files);
    if(request.files === null){
        return response.status(400).json({ msg : " no file uploaded"})
    }
    const file = request.files.file;
    const newPath = `${Date.now()}-${file.name}`
    file.mv(`${__dirname}/../../front_end/public/uploads/${newPath}` , (err)=>{
        if(err){
            console.log(err);
            return response.status(500).send(err);
		}
		user.name = name;
		user.email = email;
		user.photo = newPath;
		user.save();
        response.json({ fileName : newPath ,filePath:`/uploads/${newPath}` , msg: ` you updated your data `, user})

	})
})
// for load the logged in user 
router.get("/", authenticate, async (request, response) => {
	console.log("this is request.id", request.id);
	try {
		const user = await User.findById(request.id).select("-password");
		if (!user) {
			return response.status(500).json({ msg: "Server error" });
		}
		response.json({ user });
	} catch (error) {
		response.status(500).json({ msg: "Server error" });
	}
});

///Forgot Password
router.post('/forgotPassword', async (request, response) => {
	const { email } = request.body;
	const user = await User.findOne({ email })
	if (!user) {
		return response.status(400).json({ msg: 'User with this email in not exist' })
	}
	const payload = {
		id: user.id,
		iat: Date.now()
	};

	try {
	const token = jwt.sign(
		payload,
		process.env.RESETPASSWORD_SECRET,
		{ expiresIn: '60m' }
	);
	console.log(token);
	user.passwordResetToken = token;
	user.passwordResetExpire = Date.now() + 1000 * 60 * 60
	await user.save();
	const resetUrl = `http://localhost:3000/newPassword/${token}`;  /*/ reset or what ????? */
	const message = `Forgot your password? click on the link and submit your new password and password confirmation to ${resetUrl} \n \n if you didn't forget your password please ignore this email  `;
	
		await sendEmail({
			email: user.email,
			subject: 'Your password reset link valid for 60 minutes ',
			html: message
		})
		response.status(200).json({ msg: 'you received email to change your password' })
	} catch (error) {
		console.log(error);
	}
})
router.get('/newPassword/:token', async (request, response)=>{
	const token = request.params.token;
	console.log(token);
	const user = await User.findOne({passwordResetToken: token, passwordResetExpire: {$gt : Date.now()}});
	if(!user){
		return response.status(400).json({ msg :'invalid token '})
	}
	response.status(200).json({ msg :'your token is valid you can change the password '});
})
router.post('/resetPassWord', async(request,response)=>{
    const {password, token} = request.body;
	try {
		let data = await User.findOne({passwordResetToken:token});
    if (!data) {
        return response.status(400).json({ msg: "Enter new Password" });
    }
	const salt = await bcrypt.genSalt(10);
	data.password = await bcrypt.hash(password, salt);
	data.passwordResetToken= '';
    await data.save();
	return response.status(200).json({ msg: "password reseted successfully" });
		
	} catch (error) {
		 response.status(500).json({ msg: "error with reset your password" });
	}
    

     
     
})

module.exports = router;
