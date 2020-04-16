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
-- Table structure for table `budget_sheet`
--

DROP TABLE IF EXISTS `budget_sheet`;
CREATE TABLE IF NOT EXISTS `budget_sheet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `appointment_id` int(11) NOT NULL,
  `charges_id` int(11) NOT NULL,
  `category` varchar(200) NOT NULL,
  `department_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `rate` varchar(200) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0',
  `amount_paid` int(11) NOT NULL DEFAULT '0',
  `balance` int(11) NOT NULL DEFAULT '0',
  `status` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `admin` int(11) NOT NULL,
  `refund` int(11) NOT NULL DEFAULT '0',
  `keyy` varchar(200) NOT NULL,
  `created_by` varchar(200) NOT NULL,
  `updated_by` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
