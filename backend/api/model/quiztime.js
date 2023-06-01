const db = require("../../config/db");

class QuizTime {
  constructor(ID , time) {
     this.ID = ID;
     this.time = time;
  }

 

  async update(ID) {
    let sql = `
        UPDATE quiztime
        SET time= '${this.time}'
        where ID= '${ID}';
        `;
    const [updatedQuestion, _] = await db.execute(sql);

    return updatedQuestion;
  }

  static findAll() {
    let sql = "SELECT * FROM quiztime;";
    return db.execute(sql);
  }

  
}

module.exports = QuizTime;
