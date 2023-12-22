import  {User} from "../../db/index"
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../api/dbConnect';
dbConnect();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == 'POST') {
    const { name, password } = req.body;
    const newUser = new User({ username:name, password });
     newUser.save();
     console.log("saved sucessfully")

    res.status(200).json({ message: 'Signin successful' });
  }
  else {
    res.status(405).json({ error: 'Method Not Allowed' });  
  }
}
