USE `ailton-mariana-silva`;

CREATE TABLE classes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(255), 
    module INT DEFAULT 0
);

SELECT * FROM classes;

CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(255) NOT NULL,
    student_email VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

SELECT * FROM student;

CREATE TABLE hobby (
    id INT PRIMARY KEY AUTO_INCREMENT,
	hobby_name VARCHAR (255) NOT NULL UNIQUE
);

CREATE TABLE student_hobby (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hobby_id INT NOT NULL,
    student_id INT NOT NULL,
    FOREIGN KEY (hobby_id) REFERENCES hobby(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE TABLE teacher(
	teacher_id INT PRIMARY KEY,
    teacher_name VARCHAR(67) NOT NULL,
    teacher_email VARCHAR(67) UNIQUE,
    birth_date DATE NOT NULL, 
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);
  
SELECT * FROM teacher;
  
CREATE TABLE expertise (
    id INT PRIMARY KEY AUTO_INCREMENT,
    expertise_name VARCHAR(255) NOT NULL
);

INSERT INTO expertise(expertise_name)
values ("JS"); 
INSERT INTO expertise(expertise_name)
values ("CSS");
INSERT INTO expertise(expertise_name)
values ("React");
INSERT INTO expertise(expertise_name)
values ("Typescript");
INSERT INTO expertise(expertise_name)
values ("POO (Programação Orientada a Objetos)");

SELECT * FROM expertise;

CREATE TABLE teacher_expertise (
    id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id  INT NOT NULL,
    expertise_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id),
    FOREIGN KEY (expertise_id) REFERENCES expertise(id)
);

SELECT * FROM teacher_expertise;
