const mongoose = require('mongoose')
const {User} = require('../models/user');
const { handleResponse } = require('../../utils/response');


async function handleSignUp(req, res)
{
    
        try {
          const isUserExist = await User.findOne({ userName: req.body.userName });
      
      
          if (isUserExist) {
            return res.status(409).json({
              message: "User Already Exists",
              user: req.body.userName
            });
          }

          await User.create({
            firstName: req.body.firstName,
            lastName:  req.body.lastName,
            userName:  req.body.userName,
            password:  req.body.password
          });

          return res.status(201).json({
            message: "User Created Successfully"
          });
      
        } catch (error) {
          console.log(`The error is ${error}`);
          return res.status(500).json({ 
            message: "Something went wrong",
            error: error.message
          });
        }
      }

async function handleSignIn(req, res)
{
    
    const user = await User.findOne({
    userName: req.body.userName
   })
   if(user)
   {
    return res.status(404).json({
        message: "User Found Successefully",
        user: req.body.userName
    }) 
   }
   else{
    return res.status(405).json({
        message: "User Not Found"
       })  
   }
   
}
async function handleUpdate(req, res)
{
    const user = await User.findOne({
        userName: req.body.userName
    })
  if(user)
  {
   await User.updateOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password
   })
  }
}

async function handleDelete(req, res) {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      console.log('User not found');
      return res.status(404).json({
        message: "User not Found"
      });
    }

    await User.deleteOne({ userName: req.body.userName });

    return res.status(200).json({
      message: "User Removed Successfully"
    });
    // (res, message, statuscodes, data=null, error=null) 
  } catch (error) {
    console.error('Delete Error:', error);
    return handleResponse(res, "internal error", 204, null, error.message)

  }
}

async function handleGetall(req, res)
{
  const users = await User.find();
  return handleResponse(res, "Found User", 200, users, null);   
}
module.exports = {
    handleDelete,
    handleGetall,
    handleSignIn,
    handleSignUp,
    handleUpdate
}
// success
// statuscodes
// message
// cors
// bodyParsor <-> at the place of express.json()
// package.json ~ and ^ how this work

