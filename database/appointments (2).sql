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
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `customer_id` int(100) NOT NULL,
  `department_id` int(100) NOT NULL,
  `doctor_id` int(100) DEFAULT NULL,
  `branch_id` int(200) DEFAULT NULL,
  `voucher_id` int(200) NOT NULL,
  `treatment` varchar(100) NOT NULL DEFAULT 'close',
  `lab` varchar(100) NOT NULL DEFAULT 'close',
  `prescription` varchar(100) DEFAULT 'close',
  `invoice` varchar(100) NOT NULL DEFAULT 'close',
  `voucher` varchar(100) NOT NULL DEFAULT 'close',
  `status` varchar(50) NOT NULL DEFAULT 'open',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date` varchar(100) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL,
  `gopd_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `lab_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `theater_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `radiology_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `esp_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `ipd_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `nurse_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `revenue_status` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `key_access` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `depertments_id` (`department_id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `voucher_id` (`voucher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `customer_id`, `department_id`, `doctor_id`, `branch_id`, `voucher_id`, `treatment`, `lab`, `prescription`, `invoice`, `voucher`, `status`, `created_at`, `date`, `time`, `gopd_status`, `lab_status`, `theater_status`, `radiology_status`, `esp_status`, `ipd_status`, `nurse_status`, `revenue_status`, `key_access`) VALUES
(106, 673, 1, NULL, 1, 1067, 'success', 'close', 'success', 'paid', 'success', 'closed', '2020-04-05 05:45:47', 'Apr 5, 2020', '06:45:46 AM', '', '', '', '', '', '', '', '', ''),
(108, 673, 1, NULL, 1, 1069, 'success', 'close', 'success', 'paid', 'success', 'closed', '2020-04-05 06:28:51', 'Apr 5, 2020', '07:28:51 AM', '', '', '', '', '', '', '', '', ''),
(109, 673, 1, NULL, 1, 1070, 'open', 'close', 'open', 'open', 'open', 'closed', '2020-04-05 06:54:06', 'Apr 5, 2020', '07:54:06 AM', '', '', '', '', '', '', '', '', ''),
(110, 34, 15, NULL, 0, 1071, 'open', 'close', 'open', 'open', 'open', 'terminated', '2020-04-08 23:36:32', 'Apr 8, 2020', '11:36:31 AM', '', '', '', '', '', '', '', '', ''),
(111, 12, 15, NULL, 0, 1072, 'open', 'close', 'open', 'open', 'open', 'active', '2020-04-08 23:36:52', 'Apr 8, 2020', '11:36:52 AM', '', '', '', '', '', '', '', '', ''),
(112, 435, 16, NULL, 0, 1073, 'open', 'close', 'open', 'open', 'open', 'active', '2020-03-10 13:52:32', 'Mar 10, 2020', '01:52:32 AM', '', '', '', '', '', '', '', '', ''),
(113, 67, 1, NULL, 1, 1074, 'open', 'close', 'open', 'open', 'open', 'terminated', '2020-03-10 14:29:41', 'Mar 10, 2020', '02:29:41 AM', '', '', '', '', '', '', '', '', ''),
(114, 670, 1, NULL, 1, 1075, 'open', 'close', 'open', 'open', 'open', 'active', '2020-03-10 14:30:14', 'Mar 10, 2020', '02:30:14 AM', '', '', '', '', '', '', '', '', ''),
(115, 56, 1, NULL, 1, 1085, 'open', 'close', 'open', 'open', 'open', 'terminated', '2020-04-10 11:01:57', 'Apr 10, 2020', '12:01:57 PM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(116, 4, 1, NULL, 1, 1086, 'open', 'close', 'open', 'open', 'open', 'terminated', '2020-04-10 11:15:50', 'Apr 10, 2020', '12:15:50 PM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(117, 67, 1, NULL, 1, 1087, 'open', 'close', 'open', 'open', 'open', 'terminated', '2020-04-10 13:06:38', 'Apr 10, 2020', '02:06:38 PM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(118, 3, 1, NULL, 1, 1088, 'open', 'close', 'open', 'open', 'open', 'active', '2020-04-10 11:14:45', 'Apr 10, 2020', '12:14:45 PM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(119, 36, 1, NULL, 1, 1089, 'open', 'close', 'open', 'open', 'open', 'terminated', '2020-04-10 11:15:06', 'Apr 10, 2020', '12:15:06 PM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(120, 56, 1, NULL, 1, 1090, 'open', 'close', 'open', 'open', 'open', 'active', '2020-04-11 00:29:48', 'Apr 11, 2020', '01:29:48 AM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
