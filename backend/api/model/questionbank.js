const db = require("../../config/db");

class QUestion {
  constructor(ID, question) {
    this.ID = ID;
    this.question = question;
  }

  async save() {
    let sql = `
        INSERT INTO questionbank(
            ID, question
        )
        VALUES(
            '${this.ID}',
            '${this.question}'
        );
        `;

    const [newStudent, _] = await db.execute(sql);

    return newStudent;
  }

  

  static findAll() {
    let sql = "SELECT * FROM questionbank;";
    return db.execute(sql);
  }

  
}

module.exports = QUestion;
