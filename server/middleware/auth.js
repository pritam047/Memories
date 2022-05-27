import jwt from "jsonwebtoken";
import 'dotenv/config';

const auth = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1].toString();
    const isCustomAuth = token?.length < 500;  // token length < 500 for custom , and, >500 for Google

    let decodedData;
    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.userId = decodedData?.id;   // for custom auth user
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; // for google auth user
    }    

    next();   // simply means, do this and move to the next action
  } catch (error) {
    console.log(error);
  }
};

export default auth;