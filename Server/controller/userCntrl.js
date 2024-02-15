import asyncHandler from 'express-async-handler'
import {prisma} from '../config/prismaConfig.js'

export const createUser = asyncHandler(async(req,res)=>{
    console.log("creating a user")

    let {email} = req.body;
    // is already a user
    const userExists = await prisma.user.findUnique({where: {email:email}})
    if(!userExists){
        // create a new record in the User collection with the data provided in the req.body.
        const user = await prisma.user.create({data: req.body})
        res.status(201).json({
            message:"User registered successfully",
            user:user,
        });
    }else res.status(409).json({message:"user already exists"})
})

// function to book a visit to residency
export const bookVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;
  
    try {
      const alreadyBooked = await prisma.user.findUnique({
        where: { email },
        select: { bookedVisits: true },
      });
  
      if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
        res
          .status(400)
          .json({ message: "This residency is already booked by you" });
      } else {
        await prisma.user.update({
          where: { email: email },
          data: {
            bookedVisits: { push: { id, date } },
          },
        });
        res.send("your visit is booked successfully");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  });
  
