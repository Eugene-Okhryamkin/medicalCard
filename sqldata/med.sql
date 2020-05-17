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
-- Table structure for table `bloodanalisys`
--

DROP TABLE IF EXISTS `bloodanalisys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodanalisys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) NOT NULL,
  `Rhesus` varchar(45) NOT NULL,
  `Group` varchar(45) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  `Date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idbloodAnalisys_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodanalisys`
--

LOCK TABLES `bloodanalisys` WRITE;
/*!40000 ALTER TABLE `bloodanalisys` DISABLE KEYS */;
INSERT INTO `bloodanalisys` VALUES (1,'45345234','+','1','2007 15321','2007 15321',''),(2,'234324','asdfdsaf','asdfasdf','2010 35786','2007 15321','asdfs');
/*!40000 ALTER TABLE `bloodanalisys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnosis`
--

DROP TABLE IF EXISTS `diagnosis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnosis` (
  `idDiagnosis` int NOT NULL AUTO_INCREMENT,
  `Date` varchar(45) NOT NULL,
  `codeOfSic` varchar(45) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  PRIMARY KEY (`idDiagnosis`),
  UNIQUE KEY `idDiagnosis_UNIQUE` (`idDiagnosis`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnosis`
--

LOCK TABLES `diagnosis` WRITE;
/*!40000 ALTER TABLE `diagnosis` DISABLE KEYS */;
INSERT INTO `diagnosis` VALUES (1,'02.01.2019','A00-A09 ','2007 15321','2007 15321'),(4,'asfdsadfas','asdf','asdfasf','2007 15321'),(5,'asdfasd','fsadfasdfas','asdfasdfasfasdf','2007 15321'),(6,'asdf','asdfas','asdfasd','2007 15321'),(7,'asdf','sadfsa','asdfas','2007 15321');
/*!40000 ALTER TABLE `diagnosis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentforgetexemption`
--

DROP TABLE IF EXISTS `documentforgetexemption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentforgetexemption` (
  `idDocumentForGetExemption` int NOT NULL AUTO_INCREMENT,
  `Num` varchar(255) NOT NULL,
  `Date` varchar(45) NOT NULL,
  `PayedBy` varchar(65) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  PRIMARY KEY (`idDocumentForGetExemption`),
  UNIQUE KEY `idDocumentForGetExemption_UNIQUE` (`idDocumentForGetExemption`),
  UNIQUE KEY `Num_UNIQUE` (`Num`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentforgetexemption`
--

LOCK TABLES `documentforgetexemption` WRITE;
/*!40000 ALTER TABLE `documentforgetexemption` DISABLE KEYS */;
INSERT INTO `documentforgetexemption` VALUES (11,'asdfsa','asfdsadfas','asdfsdaf','asdfasdf'),(13,'asdfsad','sadfasdf','asdfasdfs','2007 15321');
/*!40000 ALTER TABLE `documentforgetexemption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `epicrisis`
--

DROP TABLE IF EXISTS `epicrisis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `epicrisis` (
  `idEpicrisis` int NOT NULL AUTO_INCREMENT,
  `Date` varchar(45) NOT NULL,
  `Passport` varchar(255) NOT NULL,
  `LinkToFile` varchar(255) NOT NULL,
  `Doctor` varchar(255) NOT NULL,
  PRIMARY KEY (`idEpicrisis`),
  UNIQUE KEY `idEpicrisis_UNIQUE` (`idEpicrisis`),
  UNIQUE KEY `LinkToFile_UNIQUE` (`LinkToFile`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `epicrisis`
--

LOCK TABLES `epicrisis` WRITE;
/*!40000 ALTER TABLE `epicrisis` DISABLE KEYS */;
INSERT INTO `epicrisis` VALUES (1,'02.05.2020','2007 15321','uploads\\epicrisis\\эпикриз.docx','2007 15321'),(6,'05.05.2020','70','uploads\\epicrisis\\эпикризАртемов.docx','2007 15321'),(10,'05.05.2020','2010 35786','uploads\\epicrisis\\эпикризАртемов.docx1588695986560','2007 15321'),(13,'05.05.2020','2010 35786','uploads\\epicrisis\\эпикризАртемов.docx1588697914650','2007 15321'),(14,'06.05.2020','2010 35786','uploads\\epicrisis\\1588768754877эпикриз.docx','2007 15321');
/*!40000 ALTER TABLE `epicrisis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fluorography`
--

DROP TABLE IF EXISTS `fluorography`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fluorography` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Date` varchar(45) NOT NULL,
  `Code` varchar(255) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnew_table_UNIQUE` (`id`),
  UNIQUE KEY `CodeOfFluorography_UNIQUE` (`Code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fluorography`
--

LOCK TABLES `fluorography` WRITE;
/*!40000 ALTER TABLE `fluorography` DISABLE KEYS */;
INSERT INTO `fluorography` VALUES (1,'asdf5t4352345','asdfas','2007 15321','2007 15321');
/*!40000 ALTER TABLE `fluorography` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mrt`
--

DROP TABLE IF EXISTS `mrt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mrt` (
  `idmrt` int NOT NULL,
  `CodeOfMrt` varchar(255) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Data` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  PRIMARY KEY (`idmrt`),
  UNIQUE KEY `idmrt_UNIQUE` (`idmrt`),
  UNIQUE KEY `CodeOfMrt_UNIQUE` (`CodeOfMrt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mrt`
--

LOCK TABLES `mrt` WRITE;
/*!40000 ALTER TABLE `mrt` DISABLE KEYS */;
/*!40000 ALTER TABLE `mrt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacients`
--

DROP TABLE IF EXISTS `pacients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacients` (
  `idpacient` int NOT NULL AUTO_INCREMENT,
  `OMC` varchar(255) NOT NULL,
  `CodeOfExemption` varchar(255) NOT NULL,
  `SNILS` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `Middlename` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `DateOfBirth` varchar(255) NOT NULL,
  `LiveArea` varchar(255) NOT NULL,
  `LiveRegion` varchar(255) NOT NULL,
  `LiveSettlement` varchar(255) NOT NULL,
  `LiveNeighborhood` varchar(255) NOT NULL,
  `LiveHouse` varchar(255) NOT NULL,
  `LiveHousing` varchar(255) NOT NULL,
  `LiveAppartment` varchar(255) NOT NULL,
  `StayArea` varchar(255) NOT NULL,
  `StayRegion` varchar(255) NOT NULL,
  `StaySettlement` varchar(255) NOT NULL,
  `StayNeighborhood` varchar(255) NOT NULL,
  `StayHouse` varchar(255) NOT NULL,
  `StayHousing` varchar(255) NOT NULL,
  `StayAppartment` varchar(255) NOT NULL,
  `HomePhoneNumber` varchar(255) NOT NULL,
  `PlaceOfWork` varchar(255) NOT NULL,
  `Proffession` varchar(255) NOT NULL,
  `Position` varchar(255) NOT NULL,
  `Dependant` varchar(255) NOT NULL,
  `Passport` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role` varchar(255) NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `RightToPreferentialService` varchar(255) NOT NULL,
  `Disability` varchar(255) NOT NULL,
  PRIMARY KEY (`idpacient`),
  UNIQUE KEY `idpacient_UNIQUE` (`idpacient`),
  UNIQUE KEY `OMC_UNIQUE` (`OMC`),
  UNIQUE KEY `SNILS_UNIQUE` (`SNILS`),
  UNIQUE KEY `Passport_UNIQUE` (`Passport`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacients`
--

LOCK TABLES `pacients` WRITE;
/*!40000 ALTER TABLE `pacients` DISABLE KEYS */;
INSERT INTO `pacients` VALUES (40,'0000208242111010','-','116-973-385 89','Алексеев','Иванович','Иван','05.03.1996','Воронежская область','36','Воронеж','ул.Кольцова','125','1','12','Воронежская область','36','Воронеж','ул.Кольцова','125','1','12','89178885535','NetCracker','Разработчик программного обеспечения','Senior Software Engineer','-','2007 15321','$2a$12$AI9e/bwz383rKPjgiSrbv.MRGJiE8kDrd12IVSrotDH3GeMwWDuUi','Admin','Мужской','-','-'),(70,'0000001231231234','-','116-973-385 22','Артемов','Михаилович','Николай','01.01.1999','Воронежская область','36','Воронеж','ул.Некрасова','14','2','11','Воронежская область','36','Воронеж','ул.Некрасова','14','2','11','89178885234','DSR','Разработчик программного обеспечения','Middle Software Engineer','-','2010 35786','$2a$12$c2pxgP4rI69pLirNVIq3IuVB2f07rDvWfjmMg0TC6VPe9ZQ.wPISe','Pacient','Мужской','-','-');
/*!40000 ALTER TABLE `pacients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spec`
--

DROP TABLE IF EXISTS `spec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spec` (
  `idSpec` int NOT NULL,
  `isDead` tinyint NOT NULL,
  `Passport` varchar(45) NOT NULL,
  PRIMARY KEY (`idSpec`),
  UNIQUE KEY `idSpec_UNIQUE` (`idSpec`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spec`
--

LOCK TABLES `spec` WRITE;
/*!40000 ALTER TABLE `spec` DISABLE KEYS */;
/*!40000 ALTER TABLE `spec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stoolanalisys`
--

DROP TABLE IF EXISTS `stoolanalisys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stoolanalisys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  `Date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnew_table_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stoolanalisys`
--

LOCK TABLES `stoolanalisys` WRITE;
/*!40000 ALTER TABLE `stoolanalisys` DISABLE KEYS */;
INSERT INTO `stoolanalisys` VALUES (1,'53453425','2007 15321','2007 15321','5234532453sdfds');
/*!40000 ALTER TABLE `stoolanalisys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `urineanalisys`
--

DROP TABLE IF EXISTS `urineanalisys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `urineanalisys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  `Date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idUrineAnalisys_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `urineanalisys`
--

LOCK TABLES `urineanalisys` WRITE;
/*!40000 ALTER TABLE `urineanalisys` DISABLE KEYS */;
INSERT INTO `urineanalisys` VALUES (1,'asdfas','2007 15321','2007 15321','6543654');
/*!40000 ALTER TABLE `urineanalisys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xray`
--

DROP TABLE IF EXISTS `xray`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xray` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(255) NOT NULL,
  `Date` varchar(45) NOT NULL,
  `Passport` varchar(45) NOT NULL,
  `Doctor` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idXRay_UNIQUE` (`id`),
  UNIQUE KEY `CodeOfXRay_UNIQUE` (`Code`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xray`
--

LOCK TABLES `xray` WRITE;
/*!40000 ALTER TABLE `xray` DISABLE KEYS */;
INSERT INTO `xray` VALUES (2,'455646356','01.03.2020','asdfsadfsadf','2007 15321'),(3,'4364563456','asdfassfad','2007 15321','2007 15321'),(11,'ghfgh','thytrhsafasf','2007 15321','2007 15321');
/*!40000 ALTER TABLE `xray` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-16 10:33:15
