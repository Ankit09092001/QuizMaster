const db = require('../../config/db');


class StudentReport {
    constructor(ID,name,marks){
        this.ID = ID;
        this.name=name;
        this.marks = marks;
        
        
    }

    async save(){
        let sql = `
        INSERT INTO studentReport(
            ID,name,marks 
        )
        VALUES(
            '${this.ID}',
            ' ${this.name}',
           ' ${this.marks}'
           
        );
        `;

        const [newStudent, _] = await db.execute(sql);

        return newStudent;
    }

    static findAll(){
        let sql = "SELECT * FROM studentReport;";
        return db.execute(sql);
    }

    static findById(ID){
        let sql = `SELECT * FROM studentReport WHERE ID = '${ID}';`;
        return db.execute(sql);
    }
}

module.exports = StudentReport;