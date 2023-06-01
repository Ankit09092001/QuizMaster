const db = require('../../config/db');


class AdminLogin {
    constructor(email, password){
        this.email = email;
        this.password = password;
        
    }


   
    static findById(email){
        let sql = `SELECT * FROM adminlogin WHERE email = '${email}';`;
        console.log(db.execute(sql));
        
        return db.execute(sql);
    }

    

}

module.exports = AdminLogin;