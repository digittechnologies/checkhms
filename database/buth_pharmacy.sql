-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 01, 2019 at 09:07 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

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

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `income` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expenses` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(10) UNSIGNED NOT NULL,
  `actname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(100) NOT NULL,
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
  `time` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `customer_id`, `department_id`, `doctor_id`, `treatment`, `lab`, `prescription`, `invoice`, `voucher`, `status`, `updated_at`, `created_at`, `date`, `time`) VALUES
(12, 1, 2, 0, 'open', 'close', 'open', 'open', 'open', 'active', '2019-11-18 06:50:51', '2019-11-18 06:50:51', 'Nov 18, 2019', '07:50:51 AM'),
(16, 2, 1, 0, 'open', 'close', 'open', 'open', 'open', 'active', '2019-11-18 09:47:07', '2019-11-18 09:47:07', 'Nov 18, 2019', '10:47:06 AM'),
(21, 3, 2, 0, 'open', 'close', 'open', 'open', 'open', 'active', '2019-11-18 10:18:53', '2019-11-18 10:18:53', 'Nov 18, 2019', '11:18:53 AM');

-- --------------------------------------------------------

--
-- Table structure for table `blood_details`
--

CREATE TABLE `blood_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `blood_pressure` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heat_beat` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `haemoglobin` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sugar_level` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `br_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales_rep` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_quantity` int(200) NOT NULL DEFAULT '0',
  `total_cost` int(200) NOT NULL DEFAULT '0',
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `br_name`, `address`, `contact_number`, `sales_rep`, `total_quantity`, `total_cost`, `status`, `created_at`, `updated_at`, `staff_id`) VALUES
(1, 'Main', 'branch_main', 'Ogbomoso', '060070070700', 'kefi', 0, 0, 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00', '7'),
(4, 'Buth', 'Buth', 'Lala\'s Compound, Randa Area', '07007060050', 'Rep 1', 0, 0, 'active', '2019-11-17 11:51:44', '2019-11-17 11:51:44', NULL),
(5, 'Buth 2', 'Buth 2', 'Ogbomoso', '77', 'Rep 2', 0, 0, 'active', '2019-11-17 12:14:35', '2019-11-17 12:14:35', NULL),
(6, 'Buth 3', 'Buth 3', 'Ogbomoso', '1010', 'Rep 3', 0, 0, 'suspend', '2019-11-17 12:26:16', '2019-11-17 12:26:16', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth`
--

CREATE TABLE `branch_buth` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth`
--

INSERT INTO `branch_buth` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '2', '0'),
(2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '3', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '4', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '5', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '6', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '7', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '8', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '9', '0'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '24', '0'),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '25', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '26', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '27', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '28', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '29', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '30', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth2`
--

CREATE TABLE `branch_buth2` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth2`
--

INSERT INTO `branch_buth2` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '2', '0'),
(2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '3', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '4', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '5', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '6', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '7', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '8', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '9', '0'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '24', '0'),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '25', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '26', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '27', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '28', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '29', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '30', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth3`
--

CREATE TABLE `branch_buth3` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth3`
--

INSERT INTO `branch_buth3` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '2', '0'),
(2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '3', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '4', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '5', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '6', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '7', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '8', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '9', '0'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '24', '0'),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '25', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '26', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '27', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '28', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '29', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, '30', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_main`
--

CREATE TABLE `branch_main` (
  `id` int(10) UNSIGNED NOT NULL,
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
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `item_detail_id` int(190) NOT NULL,
  `staff_id` int(190) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_main`
--

INSERT INTO `branch_main` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`) VALUES
(1, 10, 5, 0, 5, 10, 5, 1, 4, 500, 500, '2019-11-11 23:00:00', '2019-11-18 23:00:00', 2, 7),
(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 28, 0),
(3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2019-11-14 08:22:54', '2019-11-14 08:22:54', 29, 0),
(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2019-11-14 08:26:35', '2019-11-14 08:26:35', 30, 0);

-- --------------------------------------------------------

--
-- Table structure for table `branch_names`
--

CREATE TABLE `branch_names` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `catname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activity_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment_tbs`
--

CREATE TABLE `comment_tbs` (
  `id` int(10) UNSIGNED NOT NULL,
  `comment` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE `contents` (
  `id` int(10) UNSIGNED NOT NULL,
  `header` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `list` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `othername` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '000000',
  `patient_image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `mobile_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `d_o_b` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `allergy` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blood_group` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `genotype` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `n_h_i_s` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `othername`, `gender`, `email`, `password`, `patient_image`, `mobile_number`, `address`, `city`, `state`, `country`, `d_o_b`, `about`, `allergy`, `blood_group`, `genotype`, `n_h_i_s`, `card_number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ayo Lala', 'Name', 'Female', 'ayoadelala@yahoo.com', '000000', 'male.png', '764196171', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '10/28/2019', 'ojik', 'Allergy 1', '0+', 'AA', '7637kl', '4737474t', 'active', '2019-11-17 15:16:08', '2019-11-17 15:16:08'),
(2, 'Kune', 'Afford', 'Male', 'kunle@yahoo.com', '000000', 'male.png', '07064196171', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '11/05/2019', 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'ewedu', 'A-', 'AS', '48848', 'ae4444', 'active', '2019-11-18 00:20:15', '2019-11-18 00:20:15'),
(3, 'Alfred', 'Depay', 'Male', 'alfred@mail.com', '000000', 'male.png', '353554', 'dgtrt', 'sfwrf', 'frwrw', 'vdgdg', '11/05/2019', 'zczcczczcz', 'aadsewr', '0', 'AA', '24244dw', 'sfsf42424', 'active', '2019-11-18 10:18:03', '2019-11-18 10:18:03');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hosp.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `position_id` int(190) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `discounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_prescriptions`
--

CREATE TABLE `doctor_prescriptions` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_id` int(200) NOT NULL,
  `quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instruction` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `day_supply` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `days` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `doctor_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pharmacist_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `appointment_id` int(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_categories`
--

CREATE TABLE `item_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `cat_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_categories`
--

INSERT INTO `item_categories` (`id`, `cat_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'maleria', 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00'),
(5, 'pain', 'active', '2019-11-17 12:36:50', '2019-11-17 12:36:50'),
(4, 'pain', 'suspend', '2019-11-12 15:08:48', '2019-11-12 15:08:48');

-- --------------------------------------------------------

--
-- Table structure for table `item_details`
--

CREATE TABLE `item_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `generic_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `selling_price` int(190) NOT NULL DEFAULT '0',
  `purchasing_price` int(190) NOT NULL DEFAULT '0',
  `manufacture_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiring_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_time` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_img` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_unit_id` int(190) NOT NULL,
  `item_category_id` int(190) NOT NULL,
  `item_type_id` int(190) NOT NULL,
  `manufacturer_id` int(190) NOT NULL,
  `tax_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` int(190) NOT NULL,
  `staff_id` int(190) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_details`
--

INSERT INTO `item_details` (`id`, `generic_name`, `selling_price`, `purchasing_price`, `manufacture_date`, `expiring_date`, `status`, `created_at`, `updated_at`, `item_date`, `item_time`, `item_img`, `item_unit_id`, `item_category_id`, `item_type_id`, `manufacturer_id`, `tax_id`, `discount_id`, `staff_id`) VALUES
(2, 'Priten', 500, 200, NULL, NULL, 'active', '2019-11-11 23:00:00', '2019-11-11 23:00:00', '', '', '', 1, 1, 1, 1, '1', 1, 7),
(3, 'Penicillin', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:03:12', '2019-11-13 22:03:12', 'Nov 13, 2019', '11:03:12 PM', '', 2, 4, 3, 2, '10', 10, NULL),
(4, 'Penicillin', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:04:56', '2019-11-13 22:04:56', 'Nov 13, 2019', '11:04:56 PM', '', 2, 4, 3, 2, '10', 10, NULL),
(5, 'Penicillin', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:06:51', '2019-11-13 22:06:51', 'Nov 13, 2019', '11:06:51 PM', '', 2, 4, 3, 2, '10', 10, NULL),
(6, 'Item 1', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:09:07', '2019-11-13 22:09:07', 'Nov 13, 2019', '11:09:07 PM', '', 4, 4, 4, 3, '20', 20, NULL),
(7, 'Undefined', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:11:51', '2019-11-13 22:11:51', 'Nov 13, 2019', '11:11:51 PM', '', 1, 1, 1, 1, '0', 0, NULL),
(8, 'Item 2', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:13:06', '2019-11-13 22:13:06', 'Nov 13, 2019', '11:13:06 PM', '', 1, 1, 1, 1, '0', 0, NULL),
(9, 'Penicillin', 150, 100, NULL, NULL, 'undefined', '2019-11-13 22:14:50', '2019-11-13 22:14:50', 'Nov 13, 2019', '11:14:50 PM', '', 2, 4, 3, 2, '10', 10, NULL),
(24, 'Item 1', 555, 100, NULL, NULL, 'active', '2019-11-13 22:54:59', '2019-11-13 22:54:59', 'Nov 13, 2019', '11:54:59 PM', '', 2, 4, 1, 1, '10', 10, NULL),
(25, 'ji', 888, 888, NULL, NULL, 'active', '2019-11-13 23:30:18', '2019-11-13 23:30:18', 'Nov 14, 2019', '12:30:18 AM', 'drug.jpg', 1, 1, 1, 1, '0', 0, NULL),
(26, 'ji', 888, 888, NULL, NULL, 'active', '2019-11-13 23:34:09', '2019-11-13 23:34:09', 'Nov 14, 2019', '12:34:09 AM', '1573468124.png', 1, 1, 3, 1, '0', 0, NULL),
(27, 'G', 555, 100, NULL, NULL, 'active', '2019-11-14 08:19:02', '2019-11-14 08:19:02', 'Nov 14, 2019', '09:19:02 AM', 'drug.jpg', 1, 1, 1, 1, '0', 0, NULL),
(28, 'G', 555, 100, NULL, NULL, 'active', '2019-11-14 08:19:42', '2019-11-14 08:19:42', 'Nov 14, 2019', '09:19:42 AM', 'drug.jpg', 1, 1, 1, 1, '0', 0, NULL),
(29, 'Penicillin', 150, 100, NULL, NULL, 'active', '2019-11-14 08:22:54', '2019-11-14 08:22:54', 'Nov 14, 2019', '09:22:54 AM', '1573468124.png', 4, 4, 3, 1, '0', 0, NULL),
(30, 'Penicillin', 150, 100, NULL, NULL, 'active', '2019-11-14 08:26:35', '2019-11-14 08:26:35', 'Nov 14, 2019', '09:26:35 AM', '1573598723.jpeg', 2, 1, 4, 3, '0', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item_types`
--

CREATE TABLE `item_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `type_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'drug.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_types`
--

INSERT INTO `item_types` (`id`, `type_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'pills', 'drug.jpg', '2019-10-17 16:43:21', '2019-11-06 14:16:00'),
(3, 'Newsjhjhjh', '1573468124.png', '2019-11-11 09:28:10', '2019-11-11 09:28:10'),
(4, 'Ingections2', '1573598723.jpeg', '2019-11-12 21:44:19', '2019-11-12 21:44:19');

-- --------------------------------------------------------

--
-- Table structure for table `item_units`
--

CREATE TABLE `item_units` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `box_size` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `lab_depts` (
  `id` int(111) NOT NULL,
  `lab_name` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `department_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_depts`
--

INSERT INTO `lab_depts` (`id`, `lab_name`, `description`, `status`, `created_at`, `updated_at`, `department_id`) VALUES
(1, 'Lab One', 'Lab One Description', 'active', '2019-11-21 19:11:06', '2019-11-21 19:11:06', 2),
(2, 'Lab Two Edited', 'Lab Two Description Edited', 'suspend', '2019-11-21 22:21:40', '2019-11-21 19:11:27', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lab_tests`
--

CREATE TABLE `lab_tests` (
  `id` int(200) NOT NULL,
  `result` varchar(200) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `note` text,
  `status` varchar(200) DEFAULT NULL,
  `test_date` varchar(100) NOT NULL,
  `test_time` varchar(100) NOT NULL,
  `lab_test_type_id` int(200) NOT NULL,
  `lab_dept_id` int(200) DEFAULT NULL,
  `appointment_id` int(200) NOT NULL,
  `staff_id` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lab_test_types`
--

CREATE TABLE `lab_test_types` (
  `id` int(200) NOT NULL,
  `test_name` varchar(200) NOT NULL,
  `test_description` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `lab_dept_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_test_types`
--

INSERT INTO `lab_test_types` (`id`, `test_name`, `test_description`, `created_at`, `updated_at`, `lab_dept_id`) VALUES
(1, 'Test One', 'Test One Description', '2019-11-23 13:38:12', '2019-11-23 13:38:12', 1),
(3, 'Test Two Edited', 'Test Two Description Edited', '2019-11-23 13:55:44', '2019-11-23 13:51:22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_details`
--

CREATE TABLE `manufacturer_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `manufacturer_details`
--

INSERT INTO `manufacturer_details` (`id`, `name`, `address`, `contact_number`, `details`, `status`, `created_at`, `updated_at`) VALUES
(1, 'maxadofine', 'lagos', '070007070700', 'pils', 'active', '2019-10-17 16:43:21', '2019-10-17 16:43:21'),
(2, 'mazolinej', 'ikejah', '07007060058', 'medig', 'active', '2019-11-11 10:41:32', '2019-11-11 10:41:32'),
(3, 'Ayo Lala ty', 'Lala\'s Compound, Randa Area hsdi', '76419617167', 'medical ff', 'suspend', '2019-11-11 10:43:46', '2019-11-11 10:43:46');

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_ledgers`
--

CREATE TABLE `manufacturer_ledgers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `manufacturer_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `med_report`
--

CREATE TABLE `med_report` (
  `id` int(100) NOT NULL,
  `temperature` varchar(111) DEFAULT '0',
  `pulse_rate` varchar(100) DEFAULT '0',
  `respiration_rate` varchar(100) DEFAULT '0',
  `weight` varchar(100) DEFAULT '0',
  `height` varchar(100) DEFAULT '0',
  `customer_id` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `memos`
--

CREATE TABLE `memos` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `name_titles` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
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

CREATE TABLE `positions` (
  `id` int(10) UNSIGNED NOT NULL,
  `position_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kei` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `purchases` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `manufacturer_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rate_tbs`
--

CREATE TABLE `rate_tbs` (
  `id` int(10) UNSIGNED NOT NULL,
  `rate` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shelves`
--

CREATE TABLE `shelves` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` int(190) NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shelves`
--

INSERT INTO `shelves` (`id`, `name`, `point`, `branch_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'AB', 'A2', 1, 'active', '2019-11-03 23:00:00', '2019-11-10 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `titles`
--

CREATE TABLE `titles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_title` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `t_image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `views` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity_from` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity_to` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `treatments`
--

CREATE TABLE `treatments` (
  `id` int(50) NOT NULL,
  `treatment_type` varchar(100) NOT NULL,
  `note` varchar(100) NOT NULL,
  `treatment_date` varchar(100) NOT NULL,
  `treatment_time` varchar(100) NOT NULL,
  `appointment_id` int(100) NOT NULL,
  `staff_id` int(100) NOT NULL,
  `branch_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `d_o_b` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `mobile_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_number` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `facebook_handle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_handle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_handle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `degree` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'reg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dept_id` int(190) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `gender`, `d_o_b`, `email`, `email_verified_at`, `mobile_number`, `address`, `city`, `state`, `password`, `remember_token`, `id_number`, `image`, `facebook_handle`, `twitter_handle`, `instagram_handle`, `degree`, `about`, `status`, `created_at`, `updated_at`, `dept_id`) VALUES
(6, 'admin', 'admin', 'male', NULL, 'admin@gmail.com', NULL, '0807796884747', NULL, NULL, NULL, '$2y$10$IkuoyQzu4NApJ7ct3Vm/7.wUVnsP7YclTd6xT1/YTtFmcZ21Dkp2u', NULL, 'yey333', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:34:46', '2019-11-10 20:34:46', 10),
(2, 'Glory', 'Olusola', 'male', NULL, 'glory@gmail.com', NULL, '080070060060', NULL, NULL, NULL, '$2y$10$Fzoku2ldHZoEIFTpYbGMK.zUXVYlMdnJ2zLve9IAqIDza.o8aI5gi', NULL, 'ww777', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:36:07', '2019-11-06 23:36:07', 3),
(3, 'Ayo', 'Lala', 'male', NULL, 'ayoadelala@yahoo.com', NULL, '764196171', NULL, NULL, NULL, '$2y$10$iSRacz.5FF9N0dXy3B56Ju5Hf1kBwH0txtPA4Q1DC.3b2rOI/v5dm', NULL, 'ywy77', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:38:56', '2019-11-06 23:38:56', 2),
(7, 'adeola', 'adeola', 'male', NULL, 'adeola@yahoo.com', NULL, '9494304394', NULL, NULL, NULL, '$2y$10$sWBfCK0OEYFbH6JPboefE.g3PkQijegyBvszaNRN0e5jOGQwKYX0.', NULL, 'adeola', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:39:46', '2019-11-10 20:39:46', 1),
(8, 'ppp', 'ppp', 'male', NULL, 'ppp@gmail.com', NULL, '08007070700', NULL, NULL, NULL, '$2y$10$JQZfumDyHh10SVlsHHqf6OCaSStGZ9ZXMLTEW4rKqyp.ZptztxVoO', NULL, 'jeu74', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-12 15:18:38', '2019-11-12 15:18:38', 1),
(9, 'Ade', 'Duro', 'male', NULL, 'ade@gmail.com', NULL, '08077997978', NULL, NULL, NULL, '$2y$10$E6v2TpeGOzoFUMvIluL.YuKf9YZZNsmO/WD19F7aAW2uwwGQZP8Ca', NULL, 'qw1234', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-14 14:20:21', '2019-11-14 14:20:21', 2);

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid_status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accounts_branch_id_index` (`branch_id`);

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customer_id_2` (`customer_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `depertments_id` (`department_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `blood_details`
--
ALTER TABLE `blood_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `branches_contact_number_unique` (`contact_number`),
  ADD KEY `branches_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth`
--
ALTER TABLE `branch_buth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth2`
--
ALTER TABLE `branch_buth2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth2_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth2_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth3`
--
ALTER TABLE `branch_buth3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth3_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth3_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_main`
--
ALTER TABLE `branch_main`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_names_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_names_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_names`
--
ALTER TABLE `branch_names`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_names_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_names_staff_id_index` (`staff_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment_tbs`
--
ALTER TABLE `comment_tbs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`),
  ADD UNIQUE KEY `customers_mobile_number_unique` (`mobile_number`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `departments_position_id_index` (`position_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_prescriptions`
--
ALTER TABLE `doctor_prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_prescriptions_doctor_id_index` (`doctor_id`),
  ADD KEY `doctor_prescriptions_pharmacist_id_index` (`pharmacist_id`),
  ADD KEY `doctor_prescriptions_branch_id_index` (`branch_id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `customer_id` (`appointment_id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `general_settings_contact_number_unique` (`contact_number`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_branch_id_index` (`branch_id`),
  ADD KEY `invoices_staff_id_index` (`staff_id`);

--
-- Indexes for table `item_categories`
--
ALTER TABLE `item_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_details`
--
ALTER TABLE `item_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_details_item_unit_id_index` (`item_unit_id`),
  ADD KEY `item_details_item_category_id_index` (`item_category_id`),
  ADD KEY `item_details_item_type_id_index` (`item_type_id`),
  ADD KEY `item_details_manufacturer_id_index` (`manufacturer_id`),
  ADD KEY `item_details_tax_id_index` (`tax_id`),
  ADD KEY `item_details_discount_id_index` (`discount_id`),
  ADD KEY `item_details_staff_id_index` (`staff_id`);

--
-- Indexes for table `item_types`
--
ALTER TABLE `item_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_units`
--
ALTER TABLE `item_units`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lab_depts`
--
ALTER TABLE `lab_depts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `lab_tests`
--
ALTER TABLE `lab_tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `test_type_id` (`lab_test_type_id`),
  ADD KEY `customer_id` (`appointment_id`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `lab_id` (`lab_dept_id`);

--
-- Indexes for table `lab_test_types`
--
ALTER TABLE `lab_test_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lab_type_id` (`lab_dept_id`);

--
-- Indexes for table `manufacturer_details`
--
ALTER TABLE `manufacturer_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `manufacturer_details_contact_number_unique` (`contact_number`);

--
-- Indexes for table `manufacturer_ledgers`
--
ALTER TABLE `manufacturer_ledgers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `manufacturer_ledgers_manufacturer_detail_id_index` (`manufacturer_detail_id`);

--
-- Indexes for table `med_report`
--
ALTER TABLE `med_report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `memos`
--
ALTER TABLE `memos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `memos_staff_id_index` (`staff_id`),
  ADD KEY `memos_branch_id_index` (`branch_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `name_titles`
--
ALTER TABLE `name_titles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchases_item_detail_id_index` (`item_detail_id`),
  ADD KEY `purchases_staff_id_index` (`staff_id`),
  ADD KEY `purchases_branch_id_index` (`branch_id`),
  ADD KEY `purchases_manufacturer_detail_id_index` (`manufacturer_detail_id`);

--
-- Indexes for table `rate_tbs`
--
ALTER TABLE `rate_tbs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shelves`
--
ALTER TABLE `shelves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `titles`
--
ALTER TABLE `titles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transfers_item_detail_id_index` (`item_detail_id`),
  ADD KEY `transfers_staff_id_index` (`staff_id`);

--
-- Indexes for table `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`appointment_id`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_mobile_number_unique` (`mobile_number`),
  ADD KEY `users_dept_id_index` (`dept_id`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vouchers_item_detail_id_index` (`item_detail_id`),
  ADD KEY `vouchers_customer_id_index` (`customer_id`),
  ADD KEY `vouchers_staff_id_index` (`staff_id`),
  ADD KEY `vouchers_branch_id_index` (`branch_id`),
  ADD KEY `vouchers_invoice_id_index` (`invoice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `blood_details`
--
ALTER TABLE `blood_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `branch_buth`
--
ALTER TABLE `branch_buth`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `branch_buth2`
--
ALTER TABLE `branch_buth2`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `branch_buth3`
--
ALTER TABLE `branch_buth3`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `branch_main`
--
ALTER TABLE `branch_main`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `branch_names`
--
ALTER TABLE `branch_names`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment_tbs`
--
ALTER TABLE `comment_tbs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contents`
--
ALTER TABLE `contents`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_prescriptions`
--
ALTER TABLE `doctor_prescriptions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_categories`
--
ALTER TABLE `item_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `item_details`
--
ALTER TABLE `item_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `item_types`
--
ALTER TABLE `item_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `item_units`
--
ALTER TABLE `item_units`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `lab_depts`
--
ALTER TABLE `lab_depts`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lab_tests`
--
ALTER TABLE `lab_tests`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lab_test_types`
--
ALTER TABLE `lab_test_types`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `manufacturer_details`
--
ALTER TABLE `manufacturer_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `manufacturer_ledgers`
--
ALTER TABLE `manufacturer_ledgers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `med_report`
--
ALTER TABLE `med_report`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `memos`
--
ALTER TABLE `memos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `name_titles`
--
ALTER TABLE `name_titles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rate_tbs`
--
ALTER TABLE `rate_tbs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shelves`
--
ALTER TABLE `shelves`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `titles`
--
ALTER TABLE `titles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `treatments`
--
ALTER TABLE `treatments`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
