import {User} from "../../db/index";

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../api/dbConnect';
dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  if (req.method == 'POST') {
    const { name, password } = req.body;
    try {
      
      const newUser= await User.findOne({ username: name});
      console.log(newUser)

      if (newUser) 
      {
        console.log("User found:", newUser);
        res.status(200).json({ message: 'Signin successful' });
        // res.redirect('/hishan');
      } 
      else 
      {
        console.log("User not found");
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
  
}
