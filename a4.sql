CREATE TABLE teacherlogin (
  ID INT NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);

create table adminlogin(
   email varchar(255) NOT NULL,
   password varchar(255) NOT NULL
);
insert into adminlogin
values('admin@gmail.com','admin');
    
insert into teacherlogin
values(1,'abc@gmail.com','1234');
CREATE TABLE studentlogin (
  ID INT NOT NULL,
  name varchar(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);

insert into studentlogin
values(1,'xyz','xyz@gmail.com','1234');

CREATE TABLE questions (
  qid INT PRIMARY KEY,
  question TEXT NOT NULL,
  op1 TEXT NOT NULL,
  op2 TEXT NOT NULL,
  op3 TEXT NOT NULL,
  op4 TEXT NOT NULL,
  answer TEXT NOT NULL
);

insert into questions
values(1,'Capital of India','Delhi','Mumbai','Surat','Kolkata','Delhi');
insert into questions
values(2,'Business Capital of India','Delhi','Mumbai','Surat','Kolkata','Mumbai');
select * from questions;
delete from questions where qid=0;

create table studentReport(
   ID int primary key,
   name varchar(255),
   marks int
);

create table quiztime(
  ID int,
  time int
);
insert into quiztime
values(1,10);

create table questionbank(
  ID int,
  question varchar(255)
);
insert into questionbank
values(1,'What is capital of India');