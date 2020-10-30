import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface IPayload{
	_id: string;
	iat: number;
	exp: number;
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('auth');
	if(!token){
		return res.status(401).json({message: 'Access denied'});
	}
	else{
		const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'OtherTokenTest') as IPayload;
		req.userId = payload._id;
	}
	next();
};