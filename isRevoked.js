const pp=async (ctx, decodedToken, token) => {
    const myuser = await require('../models/tuser/curd').loadone({
        extra: { skiploadbyid: true, },
        data: {

            find: { id: parseInt(decodedToken.userId) }
        }
    });
    if(myuser) ctx.request.myuser=myuser;
    if (myuser && (myuser.signid !== decodedToken.signid))
        return true;
    return false;
    // signid
    // console.log(decodedToken, token);
    // return true;
};
module.exports=pp;