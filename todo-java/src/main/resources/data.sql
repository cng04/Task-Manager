CREATE TABLE TASKS (
    PRIORITY LONG AUTO_INCREMENT PRIMARY KEY,
    TITLE VARCHAR(50) NOT NULL,
    CATEGORY VARCHAR(50) NOT NULL,
    DESCRIPTION VARCHAR(250),
    DUE_DATE DATE NOT NULL
);