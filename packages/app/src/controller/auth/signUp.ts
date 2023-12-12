import supabase from '../../config/supabase/supaClient';

import {Request, Response} from 'express';

const signUpNewUser = async (req: Request, res: Response) => {
  const {email, password} = req.body;

  const {data, error} = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    res.status(400).json({error: error.message});
  } else {
    res.status(201).json({data});
  }
};

export default signUpNewUser;
