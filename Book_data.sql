-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: user
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `b_id` int NOT NULL,
  `b_author` varchar(255) DEFAULT NULL,
  `beprice` varchar(255) DEFAULT NULL,
  `b_genre` varchar(255) DEFAULT NULL,
  `bhprice` varchar(255) DEFAULT NULL,
  `b_image` varchar(255) DEFAULT NULL,
  `b_publisher` varchar(255) DEFAULT NULL,
  `b_summary` varchar(255) DEFAULT NULL,
  `b_title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (184668,'Ian Stewart','150.00','Story Books','379.00','https://images-na.ssl-images-amazon.com/images/I/81pvdaeqKWL.jpg','Profile Books','From Newton\'s Law of Gravity to the Black-Scholes model used by bankers to predict the markets, equations, are everywhere -- and they are fundamental to everyday life.','Seventeen Equations that Changed the World '),(471655,'James Altucher','1000.00','Commerce Books','4078.00','https://images-na.ssl-images-amazon.com/images/I/61OfdeQG5PL.jpg','Wiley','\"Trading is notoriously tough. But Altucher\'s new book adds a noteworthy addition to the library on Warren Buffett. He shows a lot of Buffett that isn\'t readily available in the existing common literature. ','Trade Like Warren Buffett: 222'),(978938,'Martin C. Brown','260.00','Computer Books','617.00','https://images-na.ssl-images-amazon.com/images/I/51y1U5JPfyL.jpg','McGraw-Hill','Explore all aspects of programming with Python in this comprehensive resource.Expert programmer Martin Brown guides you from the fundamentals of using modules through the use of advanced objectorientation classes.','Python: The Complete Reference'),(1526637,'J.K. Roeling','500.00','Story Books','1224.00','https://images-na.ssl-images-amazon.com/images/I/816M1u8u4qL.jpg','Bloomsbury Children\'s Books ','Prepare to be dazzled by this new edition of J.K. Rowling\'s Harry Potter and the Chamber of Secrets, designed and illustrated by MinaLima. ','Harry Potter and the Chamber of Secrets'),(1949395,'Vibrant Publishers, Kalpesh Ashar ','100.00','Commerce Books','499.00','https://images-na.ssl-images-amazon.com/images/I/81iRdkz8RSL.jpg','Vibrant Publishers','Financial Accounting Essentials You Always Wanted To Know: 4th Edition helps  to understand financial accounting, a critical tool to document finances to shareholders, government tax authorities and other critical parts of the business ecosystem.','Financial Accounting Essentials You Always Wanted To Know.'),(9353162,'E Balagurusamy','150.00','Computer Books','569.00','https://images-na.ssl-images-amazon.com/images/I/61FmuzUH8AL.jpg','McGraw-Hill','This most trusted book on JAVA for beginners is here with some essential updates. Retaining its style of concept explanation with exhaustive programs, solved examples,this test takes the journey of understanding JAVA to slightly higher level.','Programming with Java | 6th Edition'),(9780070,'Behrouz A. Forouzan','500.00','Computer Books','1200.00','https://images-na.ssl-images-amazon.com/images/I/51Znz0uAhnL._SX373_BO1,204,203,200_.jpg','McGraw-Hill','Data Communications And Networking (SIE) by Behrouz Forouzan is a comprehensive reference book for students pursuing their courses on networking.','DATA COMMUNICATIONS AND NETWORKING '),(9780143,'Satyajit Ray','120.00','Story Books','301.00','https://images-na.ssl-images-amazon.com/images/I/81c6XrXPjRS.jpg','Puffin ','Satyajit Ray (1921-92) was one of the greatest film-makers of his time. In 1992, he was awarded the Oscar for Lifetime Achievement by the Academy of Motion Picture Arts and Sciences. ','The Puffin Feluda Omnibus: Volume One (Adventures of Feluda)'),(91598765,'K. Mitts, Aamer Khan, T. Hems','600.00','Computer Books','1299.00','https://images-na.ssl-images-amazon.com/images/I/612fSll2zTL.jpg','Hack Book Works ','In this bundle Ethical Hacking Beginning to Advance with Cryptography & Bug Bounty ,you will learn about the fundamental concepts of Hacking+Kali Linux+Pracuticals+Bug Bounty+Cryptography with it\'s relevant theory & practicals. ','Ethical Hacking Beginning to Advance with Cryptography & Bug Bounty'),(97881799,'Stephen Hawking ','90.00','Story Books','148.00','https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL.jpg','Jaico Publishing House','Seven lectures by the brilliant theoretical physicist have been compiled into this book to try to explain to the common man, the complex problems of mathematics.','The Theory of Everything: The Origin and Fate of the Universe'),(938797149,'Om Books Editorial Team','00.00','Story Books','150.00','https://images-na.ssl-images-amazon.com/images/I/9173YBkMIsL.jpg','‎ Om Books International','The Panchatantra is a collection of short stories from India, written more than 5000 years ago! This is a collection of stories from that legendary collection.  ','101 Panchatantra Stories for Children');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int DEFAULT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'n','p');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (41);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `username` varchar(30) NOT NULL,
  `pwd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('Sathi','unknown');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_book`
--

DROP TABLE IF EXISTS `order_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_book` (
  `o_id` int NOT NULL,
  `b_genre` varchar(255) DEFAULT NULL,
  `b_id` int NOT NULL,
  `b_price` varchar(255) DEFAULT NULL,
  `b_title` varchar(255) DEFAULT NULL,
  `u_address` varchar(255) DEFAULT NULL,
  `u_id` varchar(255) DEFAULT NULL,
  `u_name` varchar(255) DEFAULT NULL,
  `u_phone` bigint NOT NULL,
  PRIMARY KEY (`o_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_book`
--

LOCK TABLES `order_book` WRITE;
/*!40000 ALTER TABLE `order_book` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Sathi Das'),(2,'Sruti Das'),(3,'Anand Das'),(4,'Ridhi'),(5,'Ridhi'),(6,'buku');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_bean`
--

DROP TABLE IF EXISTS `user_bean`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_bean` (
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` bigint NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_bean`
--

LOCK TABLES `user_bean` WRITE;
/*!40000 ALTER TABLE `user_bean` DISABLE KEYS */;
INSERT INTO `user_bean` VALUES ('Sathidas123456@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Female','Sathi das','123',8272914599),('srisovan@gmail.com','PG road','Kolkata','Male','Sovan Sarkar','9836057395',9051465791);
/*!40000 ALTER TABLE `user_bean` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userbean`
--

DROP TABLE IF EXISTS `userbean`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userbean` (
  `id` mediumtext,
  `uname` varchar(30) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `city` varchar(30) DEFAULT NULL,
  `phone` mediumtext,
  `pwd` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userbean`
--

LOCK TABLES `userbean` WRITE;
/*!40000 ALTER TABLE `userbean` DISABLE KEYS */;
INSERT INTO `userbean` VALUES ('1002','sathi','sathi@1234','kolkata','8272914599','1234');
/*!40000 ALTER TABLE `userbean` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` bigint NOT NULL,
  `cpwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('debjit123456@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$pdtiLlCaPWtVUjSyJgBk0.F3AKCgfmyoUWszoCH42CRCSLctmhY..',18272914599,NULL),('riya123456@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$c29N1bcfiNY0woHzMZq6H.lrMdK1vNc3Mkv1BkcOf0Y.GKPoaKbma',8272914599,NULL),('riya1256@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$a3VtK1vTHVNtmXS16hAAd.lQm/fQFIbsSJH2UsyqMomt4UpKMT5om',8272914599,NULL),('riya6@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$/GkSdgM7/mtnc9AEyL8jDOg7cYOOATU/5117l92oC2F7NyBCLnITi',8272914599,NULL),('rya6@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$/8ro1UUTyomVOiswgbNqGO/bDmmLn5SWIs6RtVzNqqsf6snllfblq',8272914599,NULL),('sadas1256@gmail.com','9b/1 c .n rou','Kolkata','Male','Sa das','123',8272914599,NULL),('sathas1256@gmail.com','9b/1 c .n rou','Kolkata','Female','Sa das','123',8272914599,NULL),('sathidas123456@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$x36BuWKLTv7Ine8pDcjoi.amPQj9S327OsS9MGDzXrxDzZoTDTnOy',8272914599,NULL),('siptariya@gmail.com','9b/1 c .n rou','Kolkata','Male','Sudipta das','$2a$10$iBM921zUJmDc5xB5ohr73uUT1SEnK8veBIGUPw7htvDO3JzgPxEQa',8272914599,NULL),('sritu123456@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Male','Sathi das','$2a$10$i9Dz/ChvXCH1WFUmvzkE5uYMacPJ9ip9FP8cMVI6mJbmPgAi/pWdi',8272914599,'1234'),('sudipta@gmail.com','9b/1 c .n rou','Kolkata','Male','Sudipta das','123456',8272914599,NULL),('sudipta&riya@gmail.com','9b/1 c .n rou','Kolkata','Male','Sudipta das','$2a$10$bQO4oh3ORG1rt7S6IauF0uV4dO8X9C1dwT9YLt/NMgxEG46Stt6CO',8272914599,NULL),('sudiptariya@gmail.com','9b/1 c .n rou','Kolkata','Male','Sudipta das','$2a$10$/5vZkTmK4PDwvWCOjDgdYO1QTwCutm13pG25W6ILJHMW.q7mQvzbe',8272914599,NULL),('swarnayu@gmail.com','9b/1 c.n. roy road kolkata 700039','Kolkata','Female','Sathi das','$2a$10$0AS9kjaz00zr2PQJ7ABKROaQLiddVUonz.QqPidG5Zm806J8F2Eye',8272914599,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06 18:17:40
