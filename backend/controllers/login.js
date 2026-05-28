

const isvalid= (req , res)=>{
    const {loginname , password} = req.body;

    if(loginname == "admin" && password == "admin123"){
        res.json({
            success: true
        });
    }else{
        res.json({
            success:false
        });
    }
};

module.exports = {isvalid};