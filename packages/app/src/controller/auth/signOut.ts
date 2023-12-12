import supabase from '../../config/supabase/supaClient';
import {Request, Response} from 'express';

const signOutUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {error} = await supabase.auth.signOut();

    if (error) {
      res.status(500).json({error: error.message});
    } else {
      res.status(200).json({message: 'Sign-out successful'});
    }
  } catch (error) {
    console.error('Error during sign-out:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default signOutUser;
