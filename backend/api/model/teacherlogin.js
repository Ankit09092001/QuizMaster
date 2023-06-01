const db = require('../../config/db');


class TeacherLogin {
    constructor(ID, email, password){
        this.ID = ID;
        this.email = email;
        this.password = password;
        
    }

    async save(){
        let sql = `
        INSERT INTO teacherlogin(
            ID, email, password
        )
        VALUES(
            '${this.ID}',
           '${this.email}',
            '${this.password}'
        );
        `;

        const [newTeacher, _] = await db.execute(sql);

        return newTeacher;
    }

    static findAll(){
        let sql = "SELECT * FROM teacherlogin;";
        return db.execute(sql);
    }

    static findById(email){
        let sql = `SELECT * FROM teacherlogin WHERE email = '${email}';`;
        return db.execute(sql);
    }
}

module.exports = TeacherLogin;