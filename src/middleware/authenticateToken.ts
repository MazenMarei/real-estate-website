import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

export default function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers["authorization"] as string;
    
  
  const token = authHeader && authHeader.split(" ")[1];
  
  if (!token) {    
    res.status(401).json({ message: "Access denied. No token provided." });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = decoded;

      return next();
    } catch (err) {
      res.status(403).json({ message: "Invalid or expired token." });
    }
  }
}
