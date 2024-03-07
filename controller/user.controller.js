import user from '../model/User.model.js';

export const addUser = async (req, res)=>{
    try {
        const exit = await user.findOne({email: req.body.email});
        if (exit) {
            res.status(409).json({msg:"user already exist"})
            return;
        }
        const newUser = new user(req.body);
        await newUser.save();
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getUser = async (req, res) => {
    try {
      const foundUser = await user.findOne({
        email: req.body.email,
        password: req.body.password,
      });
  
      if (foundUser) {
        return res.status(200).json(foundUser);
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  };