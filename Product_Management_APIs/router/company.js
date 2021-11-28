const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/companyOfProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:{
            company_id : "c1",
            name : "SanDisk",
            product_id : "p1"
        }});
    }
    return res.json({data:"No data found"});
});

router.post("/addCompany",(req,res)=>{
    const {addCompany} = req.body;

    if(addCompany){
        return res.json({data:"New company added successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});

router.put("/updateProductId",(req,res)=>{
    const cId = req.body.company_id;
    const pId = req.body.product_id;
    if(pId && cId){
        return res.json({data:"Product_Id updated successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});

router.delete("/deleteCompany",(req,res)=>{
    const cId = req.body.company_id;
    if(cId){
        return res.json({data:"Company deleted successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});
module.exports = router;