import supabase from '../../config/supabase/supaClient';
import {Request, Response} from 'express';

const signInUser = async (req: Request, res: Response): Promise<void> => {
  const {email, password} = req.body;

  try {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      res.status(401).json({error: error.message});
    } else {
      res.status(200).json({data});
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default signInUser;
