-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Apr 14, 2020 at 09:41 PM
-- Server version: 8.0.18
-- PHP Version: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `buth_pharmacy`
--

-- --------------------------------------------------------

--
-- Table structure for table `appontment_type`
--

DROP TABLE IF EXISTS `appontment_type`;
CREATE TABLE IF NOT EXISTS `appontment_type` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `table_name` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `dept_id` varchar(200) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `key_access` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appontment_type`
--

INSERT INTO `appontment_type` (`id`, `name`, `table_name`, `description`, `dept_id`, `status`, `key_access`) VALUES
(1, 'GOPD', 'gopd', 'Gopd', '2', 'active', 'null'),
(2, 'COPD', 'null', 'Clinic', NULL, 'active', 'null'),
(3, 'EPS', 'null', 'Investigation', NULL, 'active', 'null'),
(4, 'PHARMACY', 'null', 'Pharmacy Department', NULL, 'active', 'null'),
(5, 'REVENUE', 'null', 'Revenue Department', NULL, 'active', 'null');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
