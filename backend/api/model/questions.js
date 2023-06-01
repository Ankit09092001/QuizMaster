const db = require("../../config/db");

class QUestion {
  constructor(qid, question, op1, op2, op3, op4, answer) {
    this.qid = qid;
    this.question = question;
    this.op1 = op1;
    this.op2 = op2;
    this.op3 = op3;
    this.op4 = op4;
    this.answer = answer;
  }

  async save() {
    let sql = `
        INSERT INTO questions(
            qid, question , op1 , op2 , op3 , op4 , answer
        )
        VALUES(
            '${this.qid}',
            '${this.question}',
           '${this.op1}',
           '${this.op2}',
           '${this.op3}',
           '${this.op4}',
            '${this.answer}'
        );
        `;

    const [newStudent, _] = await db.execute(sql);

    return newStudent;
  }

  async update(qid) {
    let sql = `
        UPDATE questions
        SET question= '${this.question}',op1= '${this.op1}',op2= '${this.op2}',op3= '${this.op3}',op4= '${this.op4}',answer= '${this.answer}'
        where qid= '${qid}'
        `;
    const [updatedQuestion, _] = await db.execute(sql);

    return updatedQuestion;
  }

  static findAll() {
    let sql = "SELECT * FROM questions;";
    return db.execute(sql);
  }

  static findById(qid) {
    let sql = `SELECT * FROM questions WHERE qid = '${qid}';`;
    return db.execute(sql);
  }
}

module.exports = QUestion;
