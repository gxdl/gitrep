/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 8.0.15 : Database - qmm
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`qmm` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `qmm`;

/*Table structure for table `qmm1` */

DROP TABLE IF EXISTS `qmm1`;

CREATE TABLE `qmm1` (
  `id` int(11) NOT NULL,
  `studentName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacherName` varchar(50) NOT NULL,
  `class1` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` varchar(50) NOT NULL,
  `resultNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `qmm1` */

insert  into `qmm1`(`id`,`studentName`,`teacherName`,`class1`,`time`,`resultNumber`) values (1,'张三','齐老师','网球','2019-05-12',10),(2,'李四','齐老师','台球','2019-05-13',10),(3,'王五','齐老师','乒乓','2019-05-14',10),(4,'叶六','齐老师','足球','2019-05-15',15),(5,'颜七','齐老师','羽毛球','2019-05-16',16),(6,'赵八','齐老师','篮球','2019-05-22',22),(7,'随便','随便','随便','2019-05-23',12),(8,'AA','AA','AA','2019-05-22',10),(9,'BB','BB','BB','2019-05-13',13),(10,'CC','CC','CC','2019-05-11',11),(11,'DD','DD','DD','2019-06-22',22),(12,'EE','EE','EE','2019-12-23',23),(13,'aa','aa','aa','2019-12-14',11),(14,'zwj','zwj','football','5-24',11),(15,'zwj','zwj','football','5-24',11),(16,'zwj','zwj','football','5-24',11),(17,'zwj','zwj','football','5-24',11),(18,'zwj','zwj','football','5-24',11),(19,'zwj','zwj','football','5-24',11),(20,'zwj','zwj','football','5-24',11),(21,'zwj','zwj','football','5-24',11),(22,'ZWJ','ZWJ','AAA','12-12',11);

/*Table structure for table `qmm2` */

DROP TABLE IF EXISTS `qmm2`;

CREATE TABLE `qmm2` (
  `c_Id` int(11) NOT NULL,
  `c_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `t_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `score1` int(11) DEFAULT NULL,
  PRIMARY KEY (`c_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `qmm2` */

insert  into `qmm2`(`c_Id`,`c_Name`,`t_Name`,`score1`) values (1,'网球','齐老师',90),(2,'台球','齐老师',80),(3,'乒乓','齐老师',75),(4,'足球','齐老师',25),(5,'羽毛球','齐老师',50),(6,'篮球','齐老师',35),(7,'随便','随便',NULL),(8,'AA','AA',30),(9,'BB','BB',40),(10,'CC','CC',NULL),(11,'DD','DD',NULL),(12,'EE','EE',NULL);

/*Table structure for table `qmm3` */

DROP TABLE IF EXISTS `qmm3`;

CREATE TABLE `qmm3` (
  `class1` varchar(50) DEFAULT NULL,
  `teacherName` varchar(50) DEFAULT NULL,
  `place1` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `qmm3` */

insert  into `qmm3`(`class1`,`teacherName`,`place1`,`time`) values ('篮球','zwj','操场','周三下午'),('足球','zwj','操场','周四下午'),('羽毛球','zzz','操场','周五下午');

/*Table structure for table `qmm4` */

DROP TABLE IF EXISTS `qmm4`;

CREATE TABLE `qmm4` (
  `class1` varchar(50) DEFAULT NULL,
  `teacherName` varchar(50) DEFAULT NULL,
  `place1` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `qmm4` */

insert  into `qmm4`(`class1`,`teacherName`,`place1`,`time`) values ('羽毛球','zzz','操场','周五下午'),('篮球','zwj','操场','周三下午');

/*Table structure for table `web` */

DROP TABLE IF EXISTS `web`;

CREATE TABLE `web` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `web` */

insert  into `web`(`username`,`password`,`email`) values ('aaaa ','aaaaaaa',' aa@qq.com '),('aaaaa ',' aaaaaaa ',' aa@qq.com '),('abc','bbbbbb','afdaf@qq.com'),('bbb ',' aaaaaa ',' bggzs@qq.com '),('bgg ',' 123456 ',' 1416920716@qq.com '),('bggzs ',' 123456 ',' 1416920716@qq.com '),('null ',' null ',' null '),('qmm ',' aaaaaa ',' 1416920716@qq.com '),('qqq ',' aaaaaa ',' 1416920716@qq.com '),('qqq1',' aaaaaa ',' 1416920716@qq.com '),('qqq2','aaaaaa','1416920716@qq.com'),('zwj','aaa','asdf@qq.com'),('zwj1 ',' 123456 ',' 1416920716@qq.com '),('zwj123 ',' aaaaaaa ',' aa@qq.com '),('zwj2 ',' aaaaaaa ',' 1416920716@qq.com ');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
