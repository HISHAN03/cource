import type { NextApiRequest, NextApiResponse } from 'next'
import { Course } from '../../db/index';
import dbConnect from '../api/dbConnect';
dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  console.log("request reached here")
  if (req.method == 'GET') {
    const courses = await Course.find();
    res.json({ courses });
  }

  else if (req.method == 'POST') {
    const course = new Course(req.body);
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course.id });

  }
  else {
    res.status(405).json({ error: 'Method Not Allowed' });  
  }
}
