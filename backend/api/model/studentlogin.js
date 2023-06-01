const db = require('../../config/db');


class StudentLogin {
    constructor(ID,name, email, password){
        this.ID = ID;
        this.name=name;
        this.email = email;
        this.password = password;
        
    }

    async save(){
        let sql = `
        INSERT INTO studentlogin(
            ID, name, email, password
        )
        VALUES(
            '${this.ID}',
            '${this.name}',
           '${this.email}',
            '${this.password}'
        );
        `;

        const [newStudent, _] = await db.execute(sql);

        return newStudent;
    }
   

    static findAll(){
        let sql = "SELECT * FROM studentlogin;";
        return db.execute(sql);
    }

    static findById(email){
        let sql = `SELECT * FROM studentlogin WHERE email = '${email}';`;
        console.log(db.execute(sql));
        
        return db.execute(sql);
    }

    

}

module.exports = StudentLogin;