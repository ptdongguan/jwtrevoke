/* code login */
if (logedinmyuser) {
    logedinmyuser = await require('../../pmain/arsave').initone({
        tablename: table, myuser: myuser || {}
    }).setsomething({
        tofind: {
            _id: logedinmyuser._id
        },
        toinc: {
            signid: 1
        },
    }).submit();
}

const token = jsonwebtoken.sign({
    userId: logedinmyuser.id, role: logedinmyuser.role, signid: logedinmyuser.signid
}, 'secret', { expiresIn: require('../../sysconf/value').JWT_EXPIRES_IN });
/* so every login signid will increase 1 , not equal to current signid then revoke */