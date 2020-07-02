-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:33 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `buth_pharmacy_3`
--

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
  `module_id` int(200) NOT NULL,
  `quantity` int(250) DEFAULT 0,
  `amount` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `discount_id` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_amount` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `charges` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `paid` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `balance` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `refill_qty` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `refill_amount` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `paid_status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `delivery_status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `refill_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `price_list` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `v_date` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `v_time` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_id` int(250) NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revenue_branch_id` int(200) DEFAULT NULL,
  `invoice_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 CHECKSUM=1 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`id`, `module_id`, `quantity`, `amount`, `discount_id`, `discount_amount`, `charges`, `paid`, `balance`, `refill_qty`, `refill_amount`, `paid_status`, `delivery_status`, `refill_status`, `price_list`, `created_at`, `updated_at`, `v_date`, `v_time`, `item_detail_id`, `appointment_id`, `staff_id`, `branch_id`, `revenue_branch_id`, `invoice_id`) VALUES
(1056, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-02 21:26:49', '2020-04-02 21:26:49', NULL, NULL, NULL, 757, '1', '1', NULL, NULL),
(1057, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-02 21:27:00', '2020-04-02 21:27:00', NULL, NULL, NULL, 2, '1', '1', NULL, NULL),
(1055, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-02 10:30:51', '2020-04-02 10:30:51', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1053, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-29 11:54:49', '2020-03-29 11:54:49', NULL, NULL, NULL, 143580, '1', '1', NULL, NULL),
(1054, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-29 17:01:21', '2020-03-29 17:01:21', NULL, NULL, NULL, 342, '1', '1', NULL, NULL),
(1052, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-28 03:32:31', '2020-03-28 03:32:31', NULL, NULL, NULL, 56, '1', '1', NULL, NULL),
(1051, 4, 38, '2036', NULL, '0', '0', '2036', '0', '1', '1', 'paid', 'delivered', 'refillable', NULL, '2020-03-23 02:52:02', '2020-03-23 02:52:02', 'Mar 23, 2020', '04:02:38 AM', NULL, 222, '3', '1', NULL, '65'),
(1050, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-19 12:13:57', '2020-03-19 12:13:57', NULL, NULL, NULL, 8, '1', '1', NULL, NULL),
(1049, 4, 30, '60', NULL, '0', '0', '60', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, '2020-03-19 08:01:50', '2020-03-19 08:01:50', 'Mar 19, 2020', '09:04:09 AM', NULL, 8, '3', '1', NULL, '64'),
(1048, 4, 47, '4014', NULL, '0', '0', '4014', '0', '1', '1', 'paid', 'delivered', 'refillable', NULL, '2020-03-17 12:45:56', '2020-03-17 12:45:56', 'Mar 19, 2020', '08:40:45 AM', NULL, 8, '3', '1', NULL, '63'),
(1097, 4, 10, '20', NULL, '0', '0', '20', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 25, 2020', '02:15:39 PM', NULL, 9, '3', '1', NULL, '86'),
(1096, 4, 55, '8006', NULL, '0', '0', '8006', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 25, 2020', '02:11:37 PM', NULL, 9, '3', '1', NULL, NULL),
(1045, 4, 11, '110', NULL, '0', '0', '110', '0', '7', '7', 'terminate', 'terminate', 'terminate', NULL, '2020-03-14 08:28:16', '2020-03-14 08:28:16', 'Mar 14, 2020', '09:58:16 AM', NULL, 8, '3', '1', NULL, '60'),
(1058, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-03 18:33:20', '2020-04-03 18:33:20', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1059, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-04 08:49:29', '2020-04-04 08:49:29', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1060, 4, 20, '600', NULL, '0', '0', '600', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, '2020-04-04 09:03:13', '2020-04-04 09:03:13', 'Apr 4, 2020', '10:15:59 AM', NULL, 673, '3', '1', NULL, '66'),
(1061, 4, 20, '1000', NULL, '0', '0', '1000', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, '2020-04-04 09:30:15', '2020-04-04 09:30:15', 'Apr 4, 2020', '10:43:53 AM', NULL, 673, '3', '1', NULL, '67'),
(1062, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-04 09:44:15', '2020-04-04 09:44:15', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1063, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-04 15:21:52', '2020-04-04 15:21:52', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1064, 4, 80, '16000', NULL, '0', '0', '16000', '0', '0', '0', 'un-paid', 'delivered', 'non-refillable', NULL, '2020-04-04 21:29:43', '2020-04-04 21:29:43', 'Apr 4, 2020', '10:32:08 PM', NULL, 673, '3', '1', NULL, NULL),
(1065, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-04 23:34:08', '2020-04-04 23:34:08', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1066, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-05 05:34:39', '2020-04-05 05:34:39', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1067, 4, 24, '2400', NULL, '0', '0', '2400', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, '2020-04-05 05:45:47', '2020-04-05 05:45:47', 'Apr 5, 2020', '06:46:45 AM', NULL, 673, '3', '1', NULL, '68'),
(1068, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-05 06:17:24', '2020-04-05 06:17:24', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1069, 4, 6, '12', NULL, '0', '0', '12', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, '2020-04-05 06:28:51', '2020-04-05 06:28:51', 'Apr 5, 2020', '07:30:04 AM', NULL, 673, '3', '1', NULL, '69'),
(1070, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-05 06:54:06', '2020-04-05 06:54:06', NULL, NULL, NULL, 673, '1', '1', NULL, NULL),
(1071, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-08 23:36:32', '2020-04-08 23:36:32', NULL, NULL, NULL, 34, '15', '0', NULL, NULL),
(1072, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-08 23:36:52', '2020-04-08 23:36:52', NULL, NULL, NULL, 12, '15', '0', NULL, NULL),
(1073, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-10 13:52:32', '2020-03-10 13:52:32', NULL, NULL, NULL, 435, '16', '0', NULL, NULL),
(1074, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-10 14:29:41', '2020-03-10 14:29:41', NULL, NULL, NULL, 67, '1', '1', NULL, NULL),
(1075, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-03-10 14:30:14', '2020-03-10 14:30:14', NULL, NULL, NULL, 670, '1', '1', NULL, NULL),
(1076, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 00:51:45', '2020-04-10 00:51:45', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1077, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 00:55:52', '2020-04-10 00:55:52', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1078, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 00:57:11', '2020-04-10 00:57:11', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1079, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 00:57:58', '2020-04-10 00:57:58', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1080, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 00:59:02', '2020-04-10 00:59:02', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1081, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 01:00:10', '2020-04-10 01:00:10', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1082, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 01:01:40', '2020-04-10 01:01:40', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1083, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 01:03:46', '2020-04-10 01:03:46', NULL, NULL, NULL, 5, '1', '1', NULL, NULL),
(1084, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 10:58:51', '2020-04-10 10:58:51', NULL, NULL, NULL, 56, '1', '1', NULL, NULL),
(1085, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 11:01:57', '2020-04-10 11:01:57', NULL, NULL, NULL, 56, '1', '1', NULL, NULL),
(1086, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 11:15:50', '2020-04-10 11:15:50', NULL, NULL, NULL, 4, '1', '1', NULL, NULL),
(1087, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 13:06:38', '2020-04-10 13:06:38', NULL, NULL, NULL, 67, '1', '1', NULL, NULL),
(1088, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 11:14:45', '2020-04-10 11:14:45', NULL, NULL, NULL, 3, '1', '1', NULL, NULL),
(1089, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-10 11:15:06', '2020-04-10 11:15:06', NULL, NULL, NULL, 36, '1', '1', NULL, NULL),
(1090, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-11 00:29:48', '2020-04-11 00:29:48', NULL, NULL, NULL, 56, '1', '1', NULL, NULL),
(1091, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-15 07:32:18', '2020-04-15 07:32:18', NULL, NULL, NULL, 5445, '1', '1', NULL, NULL),
(1092, 4, 0, '0', NULL, '0', '0', '0', '0', '0', '0', 'open', 'open', 'open', NULL, '2020-04-15 08:02:39', '2020-04-15 08:02:39', NULL, NULL, NULL, 454, '1', '1', NULL, NULL),
(1093, 4, 106, '1340', NULL, '0', '0', '1340', '0', '8', '400', 'paid', 'delivered', 'refillable', NULL, NULL, NULL, 'Apr 22, 2020', '11:38:37 PM', NULL, 5, '3', '1', NULL, NULL),
(1094, 4, 23, '550', NULL, '0', '0', '550', '550', '10', '20', 'paid', 'delivered', 'refillable', NULL, NULL, NULL, 'Apr 23, 2020', '12:10:27 AM', NULL, 7, '3', '1', 23, '91'),
(1095, 4, 35, '87', NULL, '0', '0', '87', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 24, 2020', '04:17:03 PM', NULL, 8, '3', '1', NULL, NULL),
(1098, 4, 56, '330', NULL, '0', '0', '330', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 25, 2020', '02:33:20 PM', NULL, 9, '3', '1', NULL, NULL),
(1099, 4, 35, '5910', NULL, '0', '0', '5910', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 26, 2020', '10:45:43 PM', NULL, 9, '3', '1', NULL, NULL),
(1100, 4, 60, '12000', NULL, '0', '0', '12000', '0', '20', '4000', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 27, 2020', '06:57:40 PM', NULL, 10, '3', '1', NULL, '85'),
(1101, 4, 10, '30', NULL, '0', '0', '30', '0', '0', '0', 'terminate', 'terminate', 'terminate', NULL, NULL, NULL, 'Apr 29, 2020', '02:35:08 AM', NULL, 12, '3', '1', NULL, NULL),
(1102, 4, 15, '2150', NULL, '0', '0', '2150', '0', '5', '150', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'Apr 29, 2020', '02:37:21 AM', NULL, 12, '3', '1', NULL, '84'),
(1103, 4, 54, '8028', NULL, '0', '0', '8028', '0', '0', '0', 'paid', 'delivered', 'non-refillable', NULL, NULL, NULL, 'May 1, 2020', '10:10:21 PM', NULL, 13, '3', '1', NULL, NULL),
(1104, 4, 6, '12', '0', '12', '50', '62', '0', '0', '0', 'paid', 'delivered', 'non-refillable', 'price_1', NULL, NULL, 'May 4, 2020', '01:27:21 AM', NULL, 13, '3', '1', 23, '87'),
(1105, 4, 1, '2', '70', '1', '0', '1', '0', '0', '0', 'paid', 'delivered', 'non-refillable', 'price_2', NULL, NULL, 'May 6, 2020', '01:45:28 AM', NULL, 13, '3', '1', 24, '89'),
(1106, 4, 22, '1220', '0', '1220', '50', '1270', '0', '0', '0', 'paid', 'delivered', 'non-refillable', 'price_1', NULL, NULL, 'May 6, 2020', '01:50:33 AM', NULL, 13, '3', '1', 23, '90'),
(1107, 4, 6, '180', '0', '180', '50', '230', '0', '0', '0', 'paid', 'delivered', 'non-refillable', 'price_1', NULL, NULL, 'May 6, 2020', '02:47:43 PM', NULL, 13, '3', '1', 23, '88'),
(1108, 4, 8, '16', '0', '16', '50', '66', '66', '0', '0', 'open', 'delivered', 'non-refillable', 'price_1', NULL, NULL, 'May 11, 2020', '09:13:32 PM', NULL, 2, '3', '1', NULL, NULL),
(1109, 4, 12, '2000', '0', '2000', '50', '2050', '1050', '0', '0', 'paid', 'delivered', 'non-refillable', 'price_1', NULL, NULL, 'May 14, 2020', '12:22:41 AM', NULL, 7, '3', '1', 23, '92'),
(1110, 4, 6, '600', '70', '180', '0', '180', '0', '0', '0', 'paid', 'delivered', 'non-refillable', 'price_2', NULL, NULL, 'May 14, 2020', '01:31:20 AM', NULL, 12, '3', '1', 23, '93'),
(1111, 4, 4, '0', '70', '0', '0', '0', '0', '0', '0', 'open', 'delivered', 'non-refillable', 'price_2', NULL, NULL, 'May 14, 2020', '01:31:28 AM', NULL, 12, '3', '1', NULL, NULL),
(1117, 2, 1, '25', '0000', '0', '0', '0', '25', '0', '0', 'open', 'open', 'open', NULL, '2020-06-23 16:02:47', '2020-06-23 16:02:47', 'Jun 23, 2020', '05:02:46 PM', NULL, 42, '6', '1', NULL, NULL),
(1118, 2, 1, '25', '9540', '22.5', '0', '0', '2.5', '0', '0', 'open', 'open', 'open', NULL, '2020-06-23 17:28:14', '2020-06-23 17:28:14', 'Jun 23, 2020', '06:28:14 PM', NULL, 43, '6', '1', NULL, NULL),
(1119, 2, 1, '25', '0000', '0', '0', '0', '25', '0', '0', 'open', 'open', 'open', NULL, '2020-06-23 19:38:14', '2020-06-23 19:38:14', 'Jun 23, 2020', '08:38:14 PM', NULL, 44, '6', '1', NULL, NULL),
(1120, 2, 1, '25', '4543', '5', '0', '0', '20', '0', '0', 'open', 'open', 'open', NULL, '2020-06-23 19:49:56', '2020-06-23 19:49:56', 'Jun 23, 2020', '08:49:56 PM', NULL, 46, '6', '1', NULL, NULL),
(1121, 2, 1, '25', '0000', '0', '0', '0', '25', '0', '0', 'open', 'open', 'open', NULL, '2020-06-25 15:26:31', '2020-06-25 15:26:31', 'Jun 25, 2020', '04:26:31 PM', NULL, 47, '6', '1', NULL, NULL),
(1122, 2, 1, '200', '0000', '0', '0', '0', '200', '0', '0', 'open', 'open', 'open', NULL, '2020-06-26 12:31:21', '2020-06-26 12:31:21', 'Jun 26, 2020', '01:31:21 PM', NULL, 50, '6', '1', NULL, NULL),
(1123, 2, 1, '200', '9540', '180', '90', '0', '20', '0', '0', 'open', 'open', 'open', NULL, '2020-06-26 12:35:32', '2020-06-26 12:35:32', 'Jun 26, 2020', '01:35:32 PM', NULL, 51, '6', '1', NULL, NULL),
(1124, 2, 1, '200', '6560', '140', '70', '0', '60', '0', '0', 'open', 'open', 'open', NULL, '2020-06-26 13:02:45', '2020-06-26 13:02:45', 'Jun 26, 2020', '02:02:45 PM', NULL, 52, '6', '1', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vouchers_item_detail_id_index` (`item_detail_id`),
  ADD KEY `vouchers_customer_id_index` (`appointment_id`),
  ADD KEY `vouchers_staff_id_index` (`staff_id`),
  ADD KEY `vouchers_branch_id_index` (`branch_id`),
  ADD KEY `vouchers_invoice_id_index` (`invoice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1125;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
