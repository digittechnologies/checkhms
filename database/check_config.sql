-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 20, 2020 at 05:20 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `check_config`
--

-- --------------------------------------------------------

--
-- Table structure for table `client_config`
--

DROP TABLE IF EXISTS `client_config`;
CREATE TABLE IF NOT EXISTS `client_config` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(200) NOT NULL,
  `client_phone` varchar(200) NOT NULL,
  `client_email` varchar(100) NOT NULL,
  `client_website_url` varchar(200) NOT NULL,
  `client_license_key` varchar(200) NOT NULL,
  `module_choose` varchar(100) NOT NULL,
  `client_org_type` varchar(100) NOT NULL,
  `client_org_identity` varchar(100) NOT NULL,
  `reg_time` varchar(20) NOT NULL,
  `reg_date` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `client_email` (`client_email`),
  UNIQUE KEY `client_website_url` (`client_website_url`),
  UNIQUE KEY `client_license_key` (`client_license_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
