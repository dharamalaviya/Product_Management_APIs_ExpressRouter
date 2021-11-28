const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/productOfCompany",(req,res)=>{
    const cId = req.body.company_id;
    if(cId){
        return res.json({data:{
            product_id : "p1",
            title : "Hard Disk",
            price : "8000",
            category : "Magnetic storage medium",
            company_id : "c1",
            seller_id : "s1"
        }});
    }
    return res.json({data:"No data found"});
});

router.get("/productOfSeller",(req,res)=>{
    const cId = req.body.seller_id;
    if(cId){
        return res.json({data:{
            product_id : "p1",
            title : "Hard Disk",
            price : "8000",
            category : "Magnetic storage medium",
            company_id : "c1",
            seller_id : "s1"
        }});
    }
    return res.json({data:"No data found"});
});


router.post("/addProduct",(req,res)=>{
    const {addProduct} = req.body;

    if(addProduct){
        return res.json({data:"New product added successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});

router.put("/updateProductCategory",(req,res)=>{
    const pId = req.body.product_id;
    const c = req.body.category;
    if(pId && c){
        return res.json({data:"Product category updated successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});

router.delete("/deleteProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:"Product deleted successfully"});
    }
    return res.json({data:"Something is wrong please try again"});
});
module.exports = router;