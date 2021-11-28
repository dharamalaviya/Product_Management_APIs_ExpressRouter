const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/sellerOfProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:{
            seller_id : "s1",
            name : "SanDisk Seller",
            product_id : "p1"
        }});
    }
    return res.json({data:"No data found"});
});

router.post("/addSeller",(req,res)=>{
    const {addSeller} = req.body;

    if(addSeller){
        return res.json({data:"New seller added successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});

router.put("/updateProductId",(req,res)=>{
    const sId = req.body.seller_id;
    const pId = req.body.product_id;
    if(pId && sId){
        return res.json({data:"Product_Id updated successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});

router.delete("/deleteSeller",(req,res)=>{
    const sId = req.body.seller_id;
    if(sId){
        return res.json({data:"Seller deleted successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});
module.exports = router;