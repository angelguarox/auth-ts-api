import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import User, {IUser} from '../models/user.models';

export const signup = async (req: Request, res: Response) => {
	const user: IUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
	user.password = await user.encryptPassword(user.password);
	const newUser = await user.save();
	const token: string = jwt.sign({_id: newUser._id}, process.env.TOKEN_SECRET || 'OtherTokenTest', {expiresIn: 60 * 60 * 24});
	res.header('auth', token).json({message: 'User created successfully'});
};

export const signin = async (req: Request, res: Response) => {
	const user = await User.findOne({email: req.body.email});
	if(!user){
		return res.status(400).json({message: 'Email or password is wrong'});
	}
	const correctPassword: boolean = await user.validatePassword(req.body.password);
	if(!correctPassword){
		return res.status(400).json({message: 'Email or password is wrong'});
	}
	const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'OtherTokenTest', {expiresIn: 60 * 60 * 24});
	res.header('auth', token).json({message: 'User logged successfully'});
};

export const profile = async (req: Request, res: Response) => {
	const user = await User.findById(req.userId, {password: 0});
	if(!user){
		return res.status(404).json({message: 'Nt user found'});
	}
	else{
		res.json({message: 'Test', user});
	}
};