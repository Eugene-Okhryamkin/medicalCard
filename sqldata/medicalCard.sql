-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: med
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Dumping data for table `bloodanalisys`
--

LOCK TABLES `bloodanalisys` WRITE;
/*!40000 ALTER TABLE `bloodanalisys` DISABLE KEYS */;
INSERT INTO `bloodanalisys` VALUES (1,'45345234','+','1','2007 15321','2007 15321',''),(2,'234324','asdfdsaf','asdfasdf','2010 35786','2007 15321','asdfs');
/*!40000 ALTER TABLE `bloodanalisys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `diagnosis`
--

LOCK TABLES `diagnosis` WRITE;
/*!40000 ALTER TABLE `diagnosis` DISABLE KEYS */;
INSERT INTO `diagnosis` VALUES (1,'02.01.2019','A00-A09 ','2007 15321','2007 15321'),(4,'asfdsadfas','asdf','asdfasf','2007 15321'),(5,'asdfasd','fsadfasdfas','asdfasdfasfasdf','2007 15321'),(6,'asdf','asdfas','asdfasd','2007 15321'),(7,'asdf','sadfsa','asdfas','2007 15321');
/*!40000 ALTER TABLE `diagnosis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `documentforgetexemption`
--

LOCK TABLES `documentforgetexemption` WRITE;
/*!40000 ALTER TABLE `documentforgetexemption` DISABLE KEYS */;
INSERT INTO `documentforgetexemption` VALUES (11,'asdfsa','asfdsadfas','asdfsdaf','asdfasdf'),(13,'asdfsad','sadfasdf','asdfasdfs','2007 15321');
/*!40000 ALTER TABLE `documentforgetexemption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `epicrisis`
--

LOCK TABLES `epicrisis` WRITE;
/*!40000 ALTER TABLE `epicrisis` DISABLE KEYS */;
/*!40000 ALTER TABLE `epicrisis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `fluorography`
--

LOCK TABLES `fluorography` WRITE;
/*!40000 ALTER TABLE `fluorography` DISABLE KEYS */;
INSERT INTO `fluorography` VALUES (1,'asdf5t4352345','asdfas','2007 15321','2007 15321');
/*!40000 ALTER TABLE `fluorography` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `mrt`
--

LOCK TABLES `mrt` WRITE;
/*!40000 ALTER TABLE `mrt` DISABLE KEYS */;
/*!40000 ALTER TABLE `mrt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pacients`
--

LOCK TABLES `pacients` WRITE;
/*!40000 ALTER TABLE `pacients` DISABLE KEYS */;
INSERT INTO `pacients` VALUES (40,'0000208242111010','-','116-973-385 89','Алексеев','Иванович','Иван','05.03.1996','Воронежская область','36','Воронеж','ул.Кольцова','125','1','12','Воронежская область','36','Воронеж','ул.Кольцова','125','1','12','89178885535','NetCracker','Разработчик программного обеспечения','Senior Software Engineer','-','2007 15321','$2a$12$AI9e/bwz383rKPjgiSrbv.MRGJiE8kDrd12IVSrotDH3GeMwWDuUi','Admin','Мужской','-','-'),(70,'0000001231231234','-','116-973-385 22','Артемов','Михаилович','Николай','01.01.1999','Воронежская область','36','Воронеж','ул.Некрасова','14','2','11','Воронежская область','36','Воронеж','ул.Некрасова','14','2','11','89178885234','DSR','Разработчик программного обеспечения','Middle Software Engineer','-','2010 35786','$2a$12$c2pxgP4rI69pLirNVIq3IuVB2f07rDvWfjmMg0TC6VPe9ZQ.wPISe','Pacient','Мужской','-','-');
/*!40000 ALTER TABLE `pacients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `spec`
--

LOCK TABLES `spec` WRITE;
/*!40000 ALTER TABLE `spec` DISABLE KEYS */;
/*!40000 ALTER TABLE `spec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `stoolanalisys`
--

LOCK TABLES `stoolanalisys` WRITE;
/*!40000 ALTER TABLE `stoolanalisys` DISABLE KEYS */;
INSERT INTO `stoolanalisys` VALUES (1,'53453425','2007 15321','2007 15321','5234532453sdfds');
/*!40000 ALTER TABLE `stoolanalisys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `urineanalisys`
--

LOCK TABLES `urineanalisys` WRITE;
/*!40000 ALTER TABLE `urineanalisys` DISABLE KEYS */;
INSERT INTO `urineanalisys` VALUES (1,'asdfas','2007 15321','2007 15321','6543654');
/*!40000 ALTER TABLE `urineanalisys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `xray`
--

LOCK TABLES `xray` WRITE;
/*!40000 ALTER TABLE `xray` DISABLE KEYS */;
INSERT INTO `xray` VALUES (2,'455646356','01.03.2020','asdfsadfsadf','2007 15321'),(3,'4364563456','asdfassfad','2007 15321','2007 15321'),(11,'ghfgh','thytrhsafasf','2007 15321','2007 15321');
/*!40000 ALTER TABLE `xray` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'med'
--

--
-- Dumping routines for database 'med'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-18 12:25:42
