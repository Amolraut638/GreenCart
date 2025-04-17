import Address from "../models/Address.js";


//adding address :  /api/address/add
export const addAddress = async  (req, res) => {
    try {
        const { address, userId } = req.body;
        await Address.create({...address, userId: req.userId});  // added here userId: req.userId instead of userId
        res.json({success: true, message: "Address added successfully"});

    } catch (error) {
        
        console.log(error.message);
        res.json({ success: false, message: error.message })    
    }
}

//get addresses : /api/address/get
export const getAddress = async  (req, res) => {
        try {
            const { userId } = req.body;  
            const addresses = await Address.find({userId: req.userId})  //here also same    
            res.json({success: true, addresses});

            
        } catch (error) {

            console.log(error.message);
            res.json({ success: false, message: error.message })        
            
        }
}

