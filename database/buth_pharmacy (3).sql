-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 24, 2020 at 06:27 PM
-- Server version: 8.0.18
-- PHP Version: 7.4.0

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
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `income` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expenses` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_branch_id_index` (`branch_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE IF NOT EXISTS `activities` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `actname` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `treatment` varchar(100) NOT NULL DEFAULT 'close',
  `lab` varchar(100) NOT NULL DEFAULT 'close',
  `prescription` varchar(100) DEFAULT 'close',
  `invoice` varchar(100) NOT NULL DEFAULT 'close',
  `voucher` varchar(100) NOT NULL DEFAULT 'close',
  `status` varchar(50) NOT NULL DEFAULT 'inactive',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date` varchar(100) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customer_id_2` (`customer_id`),
  KEY `customer_id` (`customer_id`),
  KEY `depertments_id` (`department_id`),
  KEY `doctor_id` (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `customer_id`, `department_id`, `doctor_id`, `treatment`, `lab`, `prescription`, `invoice`, `voucher`, `status`, `created_at`, `date`, `time`) VALUES
(12, 1, 2, 0, 'open', 'close', 'open', 'open', 'open', 'active', '2019-11-18 06:50:51', 'Nov 18, 2019', '07:50:51 AM'),
(16, 2, 1, 0, 'open', 'close', 'open', 'open', 'open', 'active', '2019-11-18 09:47:07', 'Nov 18, 2019', '10:47:06 AM'),
(24, 3, 1, NULL, 'open', 'close', 'open', 'open', 'open', 'active', '2020-01-08 11:38:15', 'Jan 8, 2020', '12:38:15 PM'),
(25, 4, 2, NULL, 'open', 'close', 'open', 'open', 'open', 'active', '2020-01-08 15:54:47', 'Jan 8, 2020', '04:54:47 PM');

-- --------------------------------------------------------

--
-- Table structure for table `blood_details`
--

DROP TABLE IF EXISTS `blood_details`;
CREATE TABLE IF NOT EXISTS `blood_details` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `blood_pressure` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `heat_beat` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `haemoglobin` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sugar_level` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
CREATE TABLE IF NOT EXISTS `branches` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `br_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales_rep` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_quantity` int(200) NOT NULL DEFAULT '0',
  `total_cost` int(200) NOT NULL DEFAULT '0',
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `branches_contact_number_unique` (`contact_number`),
  KEY `branches_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `br_name`, `address`, `contact_number`, `sales_rep`, `total_quantity`, `total_cost`, `status`, `created_at`, `updated_at`, `staff_id`) VALUES
(1, 'Main', 'branch_main', 'Ogbomoso', '060070070700', 'kefi', 0, 0, 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00', '7'),
(4, 'Buth', 'branch_buth', 'Lala\'s Compound, Randa Area', '07007060050', 'Rep 1', 0, 0, 'active', '2019-11-17 11:51:44', '2019-11-17 11:51:44', NULL),
(5, 'Buth 2', 'branch_buth2', 'Ogbomoso', '77', 'Rep 2', 0, 0, 'active', '2019-11-17 12:14:35', '2019-11-17 12:14:35', NULL),
(6, 'Buth 3', 'branch_buth3', 'Ogbomoso', '1010', 'Rep 3', 0, 0, 'active', '2019-11-17 12:26:16', '2019-11-17 12:26:16', NULL),
(7, 'Buth 4', 'branch_buth4', 'Fourth Address Buth Street', '090112233448676', 'Rep Four', 0, 0, 'active', '2019-12-05 15:05:48', '2019-12-05 15:05:48', NULL),
(8, 'Buth 5', 'branch_buth5', 'Lala\'s Compound, Randa', '76419617167', 'Rep 5', 0, 0, 'suspend', '2020-01-03 01:34:47', '2020-01-03 01:34:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth`
--

DROP TABLE IF EXISTS `branch_buth`;
CREATE TABLE IF NOT EXISTS `branch_buth` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `branch_buth_item_detail_id_index` (`item_detail_id`),
  KEY `branch_buth_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth`
--

INSERT INTO `branch_buth` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '50', '50', '0', '20', '30', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, 'variance', NULL, '1', '0'),
(2, '0', '0', '10', '50', '40', '0', '8', '32', '0', '10', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'variance', NULL, '2', '0'),
(3, '0', '0', '0', '170', '170', '0', '0', '170', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, 'added', NULL, '3', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '50', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, 'added', NULL, '7', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth2`
--

DROP TABLE IF EXISTS `branch_buth2`;
CREATE TABLE IF NOT EXISTS `branch_buth2` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `branch_buth2_item_detail_id_index` (`item_detail_id`),
  KEY `branch_buth2_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth2`
--

INSERT INTO `branch_buth2` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, NULL, NULL, '1', '0'),
(2, '0', '0', '0', '20', '20', '0', '0', '20', '0', '0', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'added', NULL, '2', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, '0', '0', '0', '20', '10', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, 'added', NULL, '4', '0'),
(5, '0', '0', '0', '10', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, '0', '0', '0', '100', '100', '0', '0', '100', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, 'added', NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth3`
--

DROP TABLE IF EXISTS `branch_buth3`;
CREATE TABLE IF NOT EXISTS `branch_buth3` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` int(190) NOT NULL DEFAULT '0',
  `sales` int(190) NOT NULL DEFAULT '0',
  `transfer` int(190) NOT NULL DEFAULT '0',
  `receive` int(190) NOT NULL DEFAULT '0',
  `total_remain` int(190) NOT NULL DEFAULT '0',
  `close_balance` int(190) NOT NULL DEFAULT '0',
  `variance` int(190) NOT NULL DEFAULT '0',
  `physical_balance` int(190) NOT NULL DEFAULT '0',
  `amount` int(190) NOT NULL DEFAULT '0',
  `balance` int(190) NOT NULL DEFAULT '0',
  `c_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `branch_buth3_item_detail_id_index` (`item_detail_id`),
  KEY `branch_buth3_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth3`
--

INSERT INTO `branch_buth3` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, 0, 0, 0, 10, 10, 0, 0, 10, 0, 0, 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, 'added', NULL, '1', '0'),
(2, 0, 0, 0, 40, 20, 0, 0, 0, 0, 0, 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'added', NULL, '2', '0'),
(3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth4`
--

DROP TABLE IF EXISTS `branch_buth4`;
CREATE TABLE IF NOT EXISTS `branch_buth4` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `branch_buth4_item_detail_id_index` (`item_detail_id`),
  KEY `branch_buth4_staff_id_index` (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth4`
--

INSERT INTO `branch_buth4` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, NULL, NULL, '1', '0'),
(2, '0', '0', '0', '10', '10', '0', '0', '10', '0', '0', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'added', NULL, '2', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth5`
--

DROP TABLE IF EXISTS `branch_buth5`;
CREATE TABLE IF NOT EXISTS `branch_buth5` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `update_status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `branch_buth5_item_detail_id_index` (`item_detail_id`),
  KEY `branch_buth5_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth5`
--

INSERT INTO `branch_buth5` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `update_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, NULL, NULL, '1', '0'),
(2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, NULL, NULL, '2', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_main`
--

DROP TABLE IF EXISTS `branch_main`;
CREATE TABLE IF NOT EXISTS `branch_main` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` int(190) DEFAULT '0',
  `sales` int(190) DEFAULT '0',
  `transfer` int(190) DEFAULT '0',
  `receive` int(190) DEFAULT '0',
  `total_remain` int(190) DEFAULT '0',
  `close_balance` int(190) DEFAULT '0',
  `variance` int(190) DEFAULT '0',
  `physical_balance` int(190) DEFAULT '0',
  `amount` int(190) DEFAULT '0',
  `balance` int(190) DEFAULT '0',
  `c_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `add_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` int(190) NOT NULL,
  `staff_id` int(190) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `branch_names_item_detail_id_index` (`item_detail_id`),
  KEY `branch_names_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_main`
--

INSERT INTO `branch_main` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, 0, 0, 60, 510, 450, 0, 0, 450, 0, 60, 'Jan 3, 2020', '07:47:50 AM', '2020-01-03 06:47:50', '2020-01-03 06:47:50', 'transfer', NULL, 1, 0),
(2, 0, 0, 110, 1500, 1390, 0, 0, 1390, 0, 110, 'Jan 3, 2020', '07:48:34 AM', '2020-01-03 06:48:34', '2020-01-03 06:48:34', 'transfer', 'saved', 2, 0),
(3, 0, 0, 170, 550, 380, 0, 10, 370, 0, 170, 'Jan 3, 2020', '01:23:34 PM', '2020-01-03 12:23:34', '2020-01-03 12:23:34', 'variance', 'transferd', 3, 0),
(4, 0, 0, 20, 100, 80, 0, 0, 0, 0, 20, 'Jan 7, 2020', '05:07:26 PM', '2020-01-07 16:07:26', '2020-01-07 16:07:26', 'transfer', NULL, 4, 0),
(5, 0, 0, 10, 204, 204, 0, 0, 0, 0, 10, 'Jan 8, 2020', '12:16:42 PM', '2020-01-08 11:16:42', '2020-01-08 11:16:42', 'added', 'saved', 5, 0),
(6, 0, 0, 0, 3150, 3150, 0, 0, 0, 0, 0, 'Jan 8, 2020', '04:32:59 PM', '2020-01-08 15:32:59', '2020-01-08 15:32:59', 'added', NULL, 6, 0),
(7, 0, 0, 50, 250, 200, 0, 0, 200, 0, 50, 'Jan 9, 2020', '12:08:46 AM', '2020-01-08 23:08:46', '2020-01-08 23:08:46', 'added', NULL, 7, 0),
(8, 0, 0, 100, 200, 100, 0, 0, 100, 0, 100, 'Jan 9, 2020', '08:46:36 PM', '2020-01-09 19:46:36', '2020-01-09 19:46:36', 'transfer', NULL, 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `branch_names`
--

DROP TABLE IF EXISTS `branch_names`;
CREATE TABLE IF NOT EXISTS `branch_names` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `open_stock` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transfer` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `receive` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_remain` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `close_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `variance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `physical_balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `branch_names_item_detail_id_index` (`item_detail_id`),
  KEY `branch_names_staff_id_index` (`staff_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `catname` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activity_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment_tbs`
--

DROP TABLE IF EXISTS `comment_tbs`;
CREATE TABLE IF NOT EXISTS `comment_tbs` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `comment` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
CREATE TABLE IF NOT EXISTS `contents` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `header` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_image` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `list` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `othername` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '000000',
  `patient_image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `mobile_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `d_o_b` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `allergy` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `blood_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `genotype` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `n_h_i_s` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customers_email_unique` (`email`),
  UNIQUE KEY `customers_mobile_number_unique` (`mobile_number`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `othername`, `gender`, `email`, `password`, `patient_image`, `mobile_number`, `address`, `city`, `state`, `country`, `d_o_b`, `about`, `allergy`, `blood_group`, `genotype`, `n_h_i_s`, `card_number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ayo Lala', 'Name', 'Female', 'ayoadelala@yahoo.com', '000000', 'male.png', '764196171', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '10/28/2019', 'ojik', 'Allergy 1', '0+', 'AA', '7637kl', '4737474t', 'active', '2019-11-17 15:16:08', '2019-11-17 15:16:08'),
(2, 'Kune', 'Afford', 'Male', 'kunle@yahoo.com', '000000', 'male.png', '07064196171', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '11/05/2019', 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'ewedu', 'A-', 'AS', '48848', 'ae4444', 'active', '2019-11-18 00:20:15', '2019-11-18 00:20:15'),
(3, 'Alfred', 'Depay', 'Male', 'alfred@mail.com', '000000', 'male.png', '353554', 'dgtrt', 'sfwrf', 'frwrw', 'vdgdg', '11/05/2019', 'zczcczczcz', 'aadsewr', '0', 'AA', '24244dw', 'sfsf42424', 'active', '2019-11-18 10:18:03', '2019-11-18 10:18:03'),
(4, 'Tobi', 'Igeh', 'Male', 'ige@yahoo.com', '000000', 'male.png', '12345', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '10/28/1995', 'ojikororoooe eoeoeoe ekeokpepodept_id kkkldkkdk', 'oil', NULL, NULL, '7637kk', '83885', 'active', '2020-01-05 03:01:50', '2020-01-05 03:01:50');

-- --------------------------------------------------------

--
-- Table structure for table `daily_supply`
--

DROP TABLE IF EXISTS `daily_supply`;
CREATE TABLE IF NOT EXISTS `daily_supply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `value` varchar(220) NOT NULL,
  `type` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `user_id` varchar(220) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
CREATE TABLE IF NOT EXISTS `departments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hosp.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `position_id` int(190) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `departments_position_id_index` (`position_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `description`, `image`, `created_at`, `updated_at`, `position_id`) VALUES
(1, 'Pharmacy', 'Pharmacy', 'pharm.jpg', '2019-11-05 23:00:00', '2019-11-05 23:00:00', 1),
(2, 'Surgeon', 'sogeon', 'doc.jpg', '2019-11-05 23:00:00', '2019-11-05 23:00:00', 3),
(10, 'Admin', 'admin', 'admin.jpg', '2019-11-10 20:27:46', '2019-11-10 20:27:46', 4),
(11, 'Cashier', 'payment', 'cash.jpg', '2019-11-10 20:28:22', '2019-11-10 20:28:22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
CREATE TABLE IF NOT EXISTS `discounts` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_prescriptions`
--

DROP TABLE IF EXISTS `doctor_prescriptions`;
CREATE TABLE IF NOT EXISTS `doctor_prescriptions` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `item_id` int(200) NOT NULL,
  `quantity` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `instruction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `day_supply` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `days` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `p_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacist_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_id` int(200) DEFAULT NULL,
  `customer_id` int(200) DEFAULT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`),
  KEY `doctor_prescriptions_doctor_id_index` (`doctor_id`),
  KEY `doctor_prescriptions_pharmacist_id_index` (`pharmacist_id`),
  KEY `doctor_prescriptions_branch_id_index` (`branch_id`),
  KEY `item_id` (`item_id`),
  KEY `customer_id` (`appointment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctor_prescriptions`
--

INSERT INTO `doctor_prescriptions` (`id`, `item_id`, `quantity`, `instruction`, `day_supply`, `days`, `created_at`, `updated_at`, `p_date`, `p_time`, `doctor_id`, `pharmacist_id`, `branch_id`, `appointment_id`, `customer_id`, `status`) VALUES
(1, 1, '60', 'Instruction Number 1', '2', '30', '2020-01-05 19:29:17', '2020-01-05 19:29:17', 'Jan 5, 2020', '08:29:17 PM', NULL, NULL, NULL, NULL, NULL, 'open'),
(2, 5, '21', 'ftytytyty', '3', '7', '2020-01-08 11:41:28', '2020-01-08 11:41:28', 'Jan 8, 2020', '12:41:28 PM', NULL, NULL, NULL, NULL, 4, 'open'),
(3, 1, '30', 'ftytytyty', '3', '10', '2020-01-08 11:42:56', '2020-01-08 11:42:56', 'Jan 8, 2020', '12:42:56 PM', NULL, NULL, NULL, NULL, 4, 'open');

-- --------------------------------------------------------

--
-- Table structure for table `duration`
--

DROP TABLE IF EXISTS `duration`;
CREATE TABLE IF NOT EXISTS `duration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `duration_name` varchar(20) NOT NULL,
  `value` varchar(20) NOT NULL DEFAULT '1',
  `type_id` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'actice',
  `created_at` datetime(6) NOT NULL,
  `updated_at` varchar(6) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

DROP TABLE IF EXISTS `general_settings`;
CREATE TABLE IF NOT EXISTS `general_settings` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `full_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `license_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `general_settings_contact_number_unique` (`contact_number`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `invoices_branch_id_index` (`branch_id`),
  KEY `invoices_staff_id_index` (`staff_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_categories`
--

DROP TABLE IF EXISTS `item_categories`;
CREATE TABLE IF NOT EXISTS `item_categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_categories`
--

INSERT INTO `item_categories` (`id`, `cat_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'maleria', 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00'),
(5, 'Anti Protozoal', 'active', '2019-11-17 12:36:50', '2019-11-17 12:36:50'),
(4, 'pain', 'suspend', '2019-11-12 15:08:48', '2019-11-12 15:08:48'),
(6, 'Anti Diabetes', 'active', '2020-01-07 16:01:33', '2020-01-07 16:01:33'),
(7, 'Anti Fungal', 'active', '2020-01-07 16:02:12', '2020-01-07 16:02:12'),
(8, 'Anti Biotics', 'active', '2020-01-07 16:04:57', '2020-01-07 16:04:57');

-- --------------------------------------------------------

--
-- Table structure for table `item_details`
--

DROP TABLE IF EXISTS `item_details`;
CREATE TABLE IF NOT EXISTS `item_details` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `generic_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `selling_price` int(190) NOT NULL DEFAULT '0',
  `purchasing_price` int(190) NOT NULL DEFAULT '0',
  `markup_price` double NOT NULL DEFAULT '0',
  `manufacture_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiring_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_img` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_unit_id` int(190) NOT NULL,
  `item_category_id` int(190) NOT NULL,
  `item_type_id` int(190) NOT NULL,
  `manufacturer_id` int(190) NOT NULL,
  `item_shelf_id` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` int(190) NOT NULL,
  `staff_id` int(190) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `generic_name` (`generic_name`),
  KEY `item_details_item_unit_id_index` (`item_unit_id`),
  KEY `item_details_item_category_id_index` (`item_category_id`),
  KEY `item_details_item_type_id_index` (`item_type_id`),
  KEY `item_details_manufacturer_id_index` (`manufacturer_id`),
  KEY `item_details_tax_id_index` (`tax_id`),
  KEY `item_details_discount_id_index` (`discount_id`),
  KEY `item_details_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_details`
--

INSERT INTO `item_details` (`id`, `generic_name`, `selling_price`, `purchasing_price`, `markup_price`, `manufacture_date`, `expiring_date`, `status`, `created_at`, `updated_at`, `item_date`, `item_time`, `item_img`, `item_unit_id`, `item_category_id`, `item_type_id`, `manufacturer_id`, `item_shelf_id`, `tax_id`, `discount_id`, `staff_id`) VALUES
(1, 'Paracetamol', 555, 460, 0, NULL, NULL, 'active', '2020-01-03 06:47:50', '2020-01-03 06:47:50', 'Jan 3, 2020', '07:47:50 AM', 'drug.jpg', 2, 5, 1, 1, '', '0', 0, NULL),
(2, 'Penicillin', 250, 100, 0, NULL, NULL, 'active', '2020-01-03 06:48:34', '2020-01-03 06:48:34', 'Jan 3, 2020', '07:48:34 AM', 'drug.jpg', 1, 5, 1, 2, '', '0', 0, NULL),
(3, 'Item 1', 150, 10, 0, NULL, NULL, 'active', '2020-01-03 12:23:34', '2020-01-03 12:23:34', 'Jan 3, 2020', '01:23:34 PM', 'drug.jpg', 2, 5, 1, 1, '', '10', 0, NULL),
(4, 'CIROFLOXACIN 500mg', 200, 20, 1.5, NULL, NULL, 'active', '2020-01-07 16:07:26', '2020-01-07 16:07:26', 'Jan 7, 2020', '05:07:26 PM', 'drug.jpg', 1, 8, 1, 2, '', '10', 0, NULL),
(5, 'Bonadol Paracetamol', 200, 100, 0, NULL, NULL, 'active', '2020-01-08 11:16:42', '2020-01-08 11:16:42', 'Jan 8, 2020', '12:16:42 PM', 'drug.jpg', 1, 5, 1, 1, '', '10', 0, NULL),
(6, 'Atorvastatin 20mg', 200, 100, 0, NULL, NULL, 'active', '2020-01-08 15:32:59', '2020-01-08 15:32:59', 'Jan 8, 2020', '04:32:59 PM', 'drug.jpg', 1, 6, 6, 6, '', '0', 0, NULL),
(7, 'Albendazole 200mg', 15, 10, 1.5, NULL, NULL, 'active', '2020-01-08 23:08:46', '2020-01-08 23:08:46', 'Jan 9, 2020', '12:08:46 AM', 'drug.jpg', 1, 5, 6, 1, '', '0', 0, NULL),
(8, 'Item 2', 0, 10, 1.5, NULL, NULL, 'active', '2020-01-09 19:46:36', '2020-01-09 19:46:36', 'Jan 9, 2020', '08:46:36 PM', 'drug.jpg', 1, 6, 6, 6, '', '0', 10, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item_types`
--

DROP TABLE IF EXISTS `item_types`;
CREATE TABLE IF NOT EXISTS `item_types` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'drug.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_types`
--

INSERT INTO `item_types` (`id`, `type_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Syrups', 'drug.jpg', '2019-10-17 16:43:21', '2019-11-06 14:16:00'),
(3, 'Drops', '1573468124.png', '2019-11-11 09:28:10', '2019-11-11 09:28:10'),
(4, 'Ingections', '1573598723.jpeg', '2019-11-12 21:44:19', '2019-11-12 21:44:19'),
(6, 'Tablets', 'drug.jpg', '2020-01-08 15:28:01', '2020-01-08 15:28:01'),
(7, 'Inhaler', 'drug.jpg', '2020-01-08 20:37:51', '2020-01-08 20:37:51'),
(8, 'Cream-Tube', 'drug.jpg', '2020-01-08 20:41:42', '2020-01-08 20:41:42');

-- --------------------------------------------------------

--
-- Table structure for table `item_units`
--

DROP TABLE IF EXISTS `item_units`;
CREATE TABLE IF NOT EXISTS `item_units` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `box_size` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_units`
--

INSERT INTO `item_units` (`id`, `name`, `box_size`, `value`, `created_at`, `updated_at`) VALUES
(1, 'PC', '200mg', '20', NULL, NULL),
(2, 'boundle', '300', 'boundle', '2019-11-10 19:46:23', '2019-11-10 19:46:23'),
(4, 'News', '22', 'kkk', '2019-11-10 19:49:16', '2019-11-10 19:49:16');

-- --------------------------------------------------------

--
-- Table structure for table `lab_depts`
--

DROP TABLE IF EXISTS `lab_depts`;
CREATE TABLE IF NOT EXISTS `lab_depts` (
  `id` int(111) NOT NULL AUTO_INCREMENT,
  `lab_name` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `department_id` int(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_depts`
--

INSERT INTO `lab_depts` (`id`, `lab_name`, `description`, `status`, `updated_at`, `department_id`) VALUES
(1, 'Lab One', 'Lab One Description', 'active', '2019-11-21 19:11:06', 2),
(2, 'Lab Two Edited', 'Lab Two Description Edited', 'suspend', '2019-11-21 19:11:27', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lab_tests`
--

DROP TABLE IF EXISTS `lab_tests`;
CREATE TABLE IF NOT EXISTS `lab_tests` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `result` varchar(200) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `note` text,
  `status` varchar(200) DEFAULT NULL,
  `test_date` varchar(100) NOT NULL,
  `test_time` varchar(100) NOT NULL,
  `lab_test_type_id` int(200) NOT NULL,
  `lab_dept_id` int(200) DEFAULT NULL,
  `appointment_id` int(200) NOT NULL,
  `staff_id` int(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_type_id` (`lab_test_type_id`),
  KEY `customer_id` (`appointment_id`),
  KEY `staff_id` (`staff_id`),
  KEY `lab_id` (`lab_dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lab_test_types`
--

DROP TABLE IF EXISTS `lab_test_types`;
CREATE TABLE IF NOT EXISTS `lab_test_types` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `test_name` varchar(200) NOT NULL,
  `test_description` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `lab_dept_id` int(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lab_type_id` (`lab_dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_test_types`
--

INSERT INTO `lab_test_types` (`id`, `test_name`, `test_description`, `updated_at`, `lab_dept_id`) VALUES
(1, 'Test One', 'Test One Description', '2019-11-23 13:38:12', 1),
(3, 'Test Two Edited', 'Test Two Description Edited', '2019-11-23 13:51:22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_details`
--

DROP TABLE IF EXISTS `manufacturer_details`;
CREATE TABLE IF NOT EXISTS `manufacturer_details` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `manufacturer_details_contact_number_unique` (`contact_number`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `manufacturer_details`
--

INSERT INTO `manufacturer_details` (`id`, `name`, `address`, `contact_number`, `details`, `status`, `created_at`, `updated_at`) VALUES
(1, 'RALBEN', 'lagos', '07000707079', 'pills', 'active', '2019-10-17 16:43:21', '2019-10-17 16:43:21'),
(2, 'Zibatab', 'ikeja', '0700706005', 'medi', 'active', '2019-11-11 10:41:32', '2019-11-11 10:41:32'),
(6, 'ATV-20', 'Dony - Triumph', '764196171', 'medi', 'active', '2020-01-08 15:27:26', '2020-01-08 15:27:26'),
(5, 'Tawa', 'Alaja Tawa', '07064196171', 'medi', 'active', '2020-01-08 11:29:52', '2020-01-08 11:29:52');

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_ledgers`
--

DROP TABLE IF EXISTS `manufacturer_ledgers`;
CREATE TABLE IF NOT EXISTS `manufacturer_ledgers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quantity` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `manufacturer_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturer_ledgers_manufacturer_detail_id_index` (`manufacturer_detail_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `med_report`
--

DROP TABLE IF EXISTS `med_report`;
CREATE TABLE IF NOT EXISTS `med_report` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `temperature` varchar(111) DEFAULT '0',
  `pulse_rate` varchar(100) DEFAULT '0',
  `respiration_rate` varchar(100) DEFAULT '0',
  `weight` varchar(100) DEFAULT '0',
  `height` varchar(100) DEFAULT '0',
  `customer_id` int(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `memos`
--

DROP TABLE IF EXISTS `memos`;
CREATE TABLE IF NOT EXISTS `memos` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `memos_staff_id_index` (`staff_id`),
  KEY `memos_branch_id_index` (`branch_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2014_10_12_000000_create_users_table', 2),
(12, '2014_10_12_100000_create_password_resets_table', 2),
(13, '2019_10_17_084100_create_roles_table', 2),
(5, '2019_10_17_085938_create_categories_table', 1),
(6, '2019_10_17_090623_create_titles_table', 1),
(7, '2019_10_17_090738_create_contents_table', 1),
(8, '2019_10_17_121151_create_name_titles_table', 1),
(9, '2019_10_20_154951_create_rate_tbs_table', 1),
(10, '2019_10_20_155054_create_comment_tbs_table', 1),
(14, '2019_10_17_084414_create_activities_table', 2),
(15, '2019_11_05_115301_create_accounts_table', 2),
(16, '2019_11_05_115323_create_branches_table', 2),
(17, '2019_11_05_115351_create_branch_names_table', 2),
(18, '2019_11_05_115433_create_customers_table', 2),
(19, '2019_11_05_115451_create_discounts_table', 2),
(20, '2019_11_05_115535_create_doctor_prescriptions_table', 2),
(21, '2019_11_05_115556_create_general_settings_table', 2),
(22, '2019_11_05_115611_create_invoices_table', 2),
(23, '2019_11_05_115628_create_item_categories_table', 2),
(24, '2019_11_05_115640_create_item_details_table', 2),
(25, '2019_11_05_115657_create_item_types_table', 2),
(26, '2019_11_05_115705_create_item_units_table', 2),
(27, '2019_11_05_115724_create_manufacturer_details_table', 2),
(28, '2019_11_05_115738_create_manufacturer_ledgers_table', 2),
(29, '2019_11_05_115806_create_memos_table', 2),
(30, '2019_11_05_120307_create_positions_table', 2),
(31, '2019_11_05_120604_create_purchases_table', 2),
(32, '2019_11_05_120615_create_taxes_table', 2),
(33, '2019_11_05_120626_create_transfers_table', 2),
(34, '2019_11_05_120640_create_vouchers_table', 2),
(35, '2019_11_05_120653_create_shelves_table', 2),
(36, '2019_11_05_145135_create_departments_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `name_titles`
--

DROP TABLE IF EXISTS `name_titles`;
CREATE TABLE IF NOT EXISTS `name_titles` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('admin@gmail.com', 'UJvvs9Z7JmzbXmp4lwzM9RTefgA0GQ0oTlSrDxshL4a1J9J51LiZB948IxxZ', '2019-11-20 21:02:01');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
CREATE TABLE IF NOT EXISTS `positions` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `position_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `kei` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`id`, `position_name`, `description`, `kei`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Pharmacist', 'Pharmacist of the organisation', 'pham01', 'pharm.jpg', 'Active', '2019-11-06 14:16:00', '2019-11-06 14:16:00'),
(2, 'Cashier', 'Cashier of the organisation', 'cashier01', 'cash.jpg', 'Active', '2019-11-06 14:18:00', '2019-11-06 14:18:00'),
(3, 'Physicians', 'Doctors/Physicians of the organisation', 'physician01', 'doc.jpg', 'Active', '2019-11-06 14:22:00', '2019-11-06 14:22:00'),
(4, 'Administrator', 'Administrator of the organisation', 'admin01', 'admin.jpg', 'Active', '2019-11-06 14:23:00', '2019-11-06 14:23:00'),
(5, 'Patient', 'Patient of the organisation', 'patient01', 'patient.jpg', 'Active', '2019-11-06 14:24:00', '2019-11-06 14:24:00');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `instock` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `newstock` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'saved',
  `p_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manufacturer_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchases_item_detail_id_index` (`item_detail_id`),
  KEY `purchases_staff_id_index` (`staff_id`),
  KEY `purchases_branch_id_index` (`branch_id`),
  KEY `purchases_manufacturer_detail_id_index` (`manufacturer_detail_id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `instock`, `quantity`, `newstock`, `status`, `p_date`, `p_time`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`, `branch_id`, `manufacturer_detail_id`) VALUES
(17, NULL, '50', NULL, 'added', '', '', '09:00:05 AM', NULL, '6', NULL, NULL, NULL),
(15, NULL, '20', '20', 'added', '', '', '08:15:20 AM', NULL, '7', NULL, NULL, NULL),
(25, '0', '100', '100', 'added', '', '', '08:47:11 PM', NULL, '8', '6', '0', NULL),
(13, NULL, '100', NULL, 'added', '', '', '12:19:46 PM', NULL, '5', NULL, NULL, NULL),
(12, NULL, '50', NULL, 'added', '', '', '05:10:53 PM', NULL, '4', NULL, NULL, NULL),
(24, '50', '500', '550', 'added', '', '', '06:04:42 PM', NULL, '3', '6', '0', NULL),
(23, '950', '500', '1450', 'added', '', '', '06:03:50 PM', NULL, '2', '6', '0', NULL),
(26, '100', '100', '200', 'added', '', '', '09:10:28 PM', NULL, '8', '6', '0', NULL),
(27, '20', '180', '200', 'added', '', '', '06:42:26 PM', NULL, '7', '3', '0', NULL),
(32, '435', '20', '455', 'added', '', '', '01:10:48 AM', NULL, '1', '3', '0', NULL),
(33, '455', '5', '460', 'added', 'Jan 11, 2020', '09:37:49 AM', NULL, NULL, '1', '3', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rate_tbs`
--

DROP TABLE IF EXISTS `rate_tbs`;
CREATE TABLE IF NOT EXISTS `rate_tbs` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `rate` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shelves`
--

DROP TABLE IF EXISTS `shelves`;
CREATE TABLE IF NOT EXISTS `shelves` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` int(190) NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `branch_id` (`branch_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shelves`
--

INSERT INTO `shelves` (`id`, `name`, `point`, `branch_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'AB', 'A2', 1, 'active', '2019-11-03 23:00:00', '2019-11-10 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

DROP TABLE IF EXISTS `taxes`;
CREATE TABLE IF NOT EXISTS `taxes` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `titles`
--

DROP TABLE IF EXISTS `titles`;
CREATE TABLE IF NOT EXISTS `titles` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name_title` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `t_image` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `views` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

DROP TABLE IF EXISTS `transfers`;
CREATE TABLE IF NOT EXISTS `transfers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quantity_from` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remain_from` int(255) NOT NULL DEFAULT '0',
  `quantity_to` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remain_to` int(255) DEFAULT '0',
  `total_quantity` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `newstock` int(255) DEFAULT '0',
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `t_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `t_time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transfers_item_detail_id_index` (`item_detail_id`),
  KEY `transfers_staff_id_index` (`staff_id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transfers`
--

INSERT INTO `transfers` (`id`, `quantity_from`, `remain_from`, `quantity_to`, `remain_to`, `total_quantity`, `newstock`, `status`, `t_date`, `t_time`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`) VALUES
(13, 'Main', 0, 'Buth 2', NULL, '10', 0, NULL, '', '', '08:06:06 AM', NULL, '5', NULL),
(12, 'Main', 0, 'Buth', NULL, '20', 0, NULL, '', '', '01:26:52 PM', NULL, '3', NULL),
(11, 'Main', 0, 'Buth', NULL, '50', 0, NULL, '', '', '07:51:01 AM', NULL, '2', NULL),
(14, 'Main', 0, 'Buth', 0, '50', 0, NULL, '', '', '09:22:22 PM', NULL, '3', NULL),
(19, 'branch_main', 70, 'branch_buth', 0, '50', 50, 'close', '', '', '06:16:06 PM', NULL, '7', '3'),
(16, 'branch_main', 485, 'branch_buth', 485, '20', 505, 'close', '', '', '04:17:12 PM', NULL, '1', '3'),
(17, 'branch_main', 1450, 'branch_buth3', 1450, '20', 1470, 'close', '', '', '04:18:20 PM', NULL, '2', '3'),
(18, 'branch_main', 100, 'branch_buth2', 0, '10', 10, 'close', '', '', '05:27:15 PM', NULL, '4', '3'),
(20, 'branch_main', 200, 'branch_buth2', 0, '50', 50, 'close', '', '', '06:25:22 PM', NULL, '8', '3'),
(21, 'branch_main', 150, 'branch_buth2', 0, '50', 50, 'close', '', '', '06:33:42 PM', NULL, '8', '3'),
(23, 'branch_main', 445, 'branch_buth', 20, '10', 30, 'close', '', '', '08:59:26 PM', NULL, '1', '3'),
(24, 'branch_main', 1410, 'branch_buth2', 0, '20', 20, 'close', '', '', '12:32:55 AM', NULL, '2', '3'),
(25, 'branch_main', 550, 'branch_buth', 0, '50', 50, 'close', '', '', '12:33:44 AM', NULL, '3', '3'),
(26, 'branch_buth', 50, 'branch_buth4', 0, '10', 10, 'close', '', '', '01:57:09 AM', NULL, '2', '3'),
(27, 'branch_main', 460, 'branch_buth3', 0, '10', 10, 'close', 'Jan 11, 2020', '09:41:09 AM', NULL, NULL, '1', '3'),
(28, 'branch_buth2', 20, 'branch_buth4', 10, '10', 20, 'open', 'Jan 11, 2020', '10:10:26 AM', NULL, NULL, '2', '3');

-- --------------------------------------------------------

--
-- Table structure for table `treatments`
--

DROP TABLE IF EXISTS `treatments`;
CREATE TABLE IF NOT EXISTS `treatments` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `treatment_type` varchar(100) NOT NULL,
  `note` varchar(100) NOT NULL,
  `treatment_date` varchar(100) NOT NULL,
  `treatment_time` varchar(100) NOT NULL,
  `appointment_id` int(100) NOT NULL,
  `staff_id` int(100) NOT NULL,
  `branch_id` int(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`appointment_id`),
  KEY `staff_id` (`staff_id`),
  KEY `branch_id` (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `d_o_b` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `mobile_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `facebook_handle` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_handle` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_handle` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `degree` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'reg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dept_id` int(190) DEFAULT NULL,
  `branch_id` int(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_mobile_number_unique` (`mobile_number`),
  KEY `users_dept_id_index` (`dept_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `gender`, `d_o_b`, `email`, `email_verified_at`, `mobile_number`, `address`, `city`, `state`, `password`, `remember_token`, `id_number`, `image`, `facebook_handle`, `twitter_handle`, `instagram_handle`, `degree`, `about`, `status`, `created_at`, `updated_at`, `dept_id`, `branch_id`) VALUES
(6, 'admin', 'admin', 'male', NULL, 'admin@gmail.com', NULL, '0807796884747', NULL, NULL, NULL, '$2y$10$IkuoyQzu4NApJ7ct3Vm/7.wUVnsP7YclTd6xT1/YTtFmcZ21Dkp2u', NULL, 'yey333', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:34:46', '2019-11-10 20:34:46', 10, 0),
(2, 'Glory', 'Olusola', 'male', NULL, 'glory@gmail.com', NULL, '080070060060', NULL, NULL, NULL, '$2y$10$Fzoku2ldHZoEIFTpYbGMK.zUXVYlMdnJ2zLve9IAqIDza.o8aI5gi', NULL, 'ww777', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:36:07', '2019-11-06 23:36:07', 2, 0),
(3, 'Ayo', 'Lala', 'male', NULL, 'ayoadelala@yahoo.com', NULL, '764196171', NULL, NULL, NULL, '$2y$10$iSRacz.5FF9N0dXy3B56Ju5Hf1kBwH0txtPA4Q1DC.3b2rOI/v5dm', NULL, 'ywy77', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:38:56', '2019-11-06 23:38:56', 1, 0),
(7, 'adeola', 'adeola', 'male', NULL, 'adeola@yahoo.com', NULL, '9494304394', NULL, NULL, NULL, '$2y$10$iSRacz.5FF9N0dXy3B56Ju5Hf1kBwH0txtPA4Q1DC.3b2rOI/v5dm', NULL, 'adeola', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:39:46', '2019-11-10 20:39:46', 1, 7),
(8, 'ppp', 'ppp', 'male', NULL, 'ppp@gmail.com', NULL, '08007070700', NULL, NULL, NULL, '$2y$10$JQZfumDyHh10SVlsHHqf6OCaSStGZ9ZXMLTEW4rKqyp.ZptztxVoO', NULL, 'jeu74', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-12 15:18:38', '2019-11-12 15:18:38', 1, 6),
(9, 'Ade', 'Duro', 'male', NULL, 'ade@gmail.com', NULL, '08077997978', NULL, NULL, NULL, '$2y$10$E6v2TpeGOzoFUMvIluL.YuKf9YZZNsmO/WD19F7aAW2uwwGQZP8Ca', NULL, 'qw1234', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-14 14:20:21', '2019-11-14 14:20:21', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `variances`
--

DROP TABLE IF EXISTS `variances`;
CREATE TABLE IF NOT EXISTS `variances` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `item_detail_id` int(255) NOT NULL,
  `branch_id` varchar(200) NOT NULL,
  `instock` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `newstock` int(255) NOT NULL,
  `purpose` varchar(50) DEFAULT NULL,
  `detail` longtext NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `v_date` varchar(50) NOT NULL,
  `v_time` varchar(50) NOT NULL,
  `user_id` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `variances`
--

INSERT INTO `variances` (`id`, `item_detail_id`, `branch_id`, `instock`, `quantity`, `newstock`, `purpose`, `detail`, `status`, `created_at`, `updated_at`, `v_date`, `v_time`, `user_id`) VALUES
(1, 1, 'branch_buth', 50, 10, 40, 'damaged', 'damaged', 'close', NULL, NULL, 'Jan 11, 2020', '09:48:22 AM', 3),
(2, 2, 'branch_buth', 40, 4, 36, 'expire', '11/12/2019', 'close', NULL, NULL, 'Jan 12, 2020', '07:31:05 PM', 3),
(3, 3, 'branch_main', 380, 10, 370, 'expire', '12/12/2019', 'close', NULL, NULL, 'Jan 13, 2020', '11:28:15 AM', 6);

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

DROP TABLE IF EXISTS `vouchers`;
CREATE TABLE IF NOT EXISTS `vouchers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quantity` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid_status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_id` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vouchers_item_detail_id_index` (`item_detail_id`),
  KEY `vouchers_customer_id_index` (`customer_id`),
  KEY `vouchers_staff_id_index` (`staff_id`),
  KEY `vouchers_branch_id_index` (`branch_id`),
  KEY `vouchers_invoice_id_index` (`invoice_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
