-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:28 PM
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
-- Table structure for table `doctor_prescriptions`
--

CREATE TABLE `doctor_prescriptions` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_id` int(200) NOT NULL,
  `instock` int(200) NOT NULL,
  `instruction` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day_supply` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `days` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dispense` int(200) DEFAULT NULL,
  `original_qty` int(200) NOT NULL,
  `quantity` int(200) NOT NULL,
  `refill_input` int(200) DEFAULT 0,
  `amount` int(200) NOT NULL,
  `amount_paid` int(200) NOT NULL,
  `refill_amount` int(200) DEFAULT NULL,
  `caution` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `p_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacist_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_id` int(200) DEFAULT NULL,
  `customer_id` int(200) DEFAULT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `refill_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `refill_voucher_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'close',
  `voucher_id` int(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctor_prescriptions`
--

INSERT INTO `doctor_prescriptions` (`id`, `item_id`, `instock`, `instruction`, `day_supply`, `days`, `dispense`, `original_qty`, `quantity`, `refill_input`, `amount`, `amount_paid`, `refill_amount`, `caution`, `created_at`, `updated_at`, `p_date`, `p_time`, `doctor_id`, `pharmacist_id`, `branch_id`, `appointment_id`, `customer_id`, `status`, `refill_status`, `refill_voucher_status`, `voucher_id`) VALUES
(93, 13, 133, '7', '7', '2.5', NULL, 40, 20, 1, 100, 2000, NULL, '.fdlflkfkld', '2020-03-23 03:00:38', '2020-03-23 03:00:38', 'Mar 23, 2020', '04:00:38 AM', 'Dr Lancelot', '3', '1', 90, 222, 'paid', 'refillable', 'close', 1051),
(92, 11, 53, '9', '5', '3', NULL, 18, 18, 1, 2, 36, NULL, '.fdlflkfkld', '2020-03-23 02:59:35', '2020-03-23 02:59:35', 'Mar 23, 2020', '03:59:35 AM', 'Dr Lancelot', '3', '1', 90, 222, 'paid', 'non-refillable', 'close', 1051),
(90, 13, 173, '5', '5', '10', NULL, 20, 40, 1, 100, 4000, NULL, 'Nill', '2020-03-19 07:08:47', '2020-03-19 07:08:47', 'Mar 19, 2020', '08:08:47 AM', 'Dr Ariloba', '3', '1', 87, 8, 'paid', 'non-refillable', 'close', 1048),
(91, 11, 83, '9', '5', '5', NULL, 30, 30, 1, 2, 60, NULL, 'nill', '2020-03-19 08:02:32', '2020-03-19 08:02:32', 'Mar 19, 2020', '09:02:32 AM', 'Dr durodola', '3', '1', 88, 8, 'paid', 'non-refillable', 'close', 1049),
(87, 11, 90, '10', '5', '1', NULL, 14, 7, 1, 2, 14, NULL, 'hffgffgg', '2020-03-17 12:46:43', '2020-03-17 12:46:43', 'Mar 17, 2020', '01:46:43 PM', 'Dr Ariloba', '3', '1', 87, 8, 'paid', 'refillable', 'close', 1048),
(86, 14, 200, '7', '5', '2', NULL, 32, 24, 2, 200, 3200, NULL, 'ghggg', '2020-03-14 09:23:16', '2020-03-14 09:23:16', 'Mar 14, 2020', '10:23:16 AM', 'Dr Ariloba', '3', '1', 86, 9, 'paid', 'refillable', 'checkout', 1047),
(85, 10, 82, '9', '1', '1.3333333333333333', NULL, 12, 24, 2, 30, 3200, NULL, 'ghggg', '2020-03-14 09:22:55', '2020-03-14 09:22:55', 'Mar 14, 2020', '10:22:55 AM', 'Dr Ariloba', '3', '1', 86, 9, 'paid', 'refillable', 'checkout', 1047),
(84, 13, 185, '7', '6', '2', NULL, 12, 12, 1, 100, 1200, NULL, 'eeee', '2020-03-14 09:16:08', '2020-03-14 09:16:08', 'Mar 14, 2020', '10:16:08 AM', 'Dr durodola', '3', '1', 85, 9, 'paid', 'non-refillable', 'close', 1046),
(83, 10, 94, '7', '6', '2', NULL, 12, 12, 1, 30, 360, NULL, 'eeee', '2020-03-14 09:15:45', '2020-03-14 09:15:45', 'Mar 14, 2020', '10:15:45 AM', 'Dr durodola', '3', '1', 85, 9, 'paid', 'non-refillable', 'close', 1046),
(134, 11, 29, '6', '5', '2', 1, 6, 6, 0, 2, 12, NULL, 'nil', '2020-05-03 16:59:07', '2020-05-03 16:59:07', 'May 3, 2020', '05:59:07 PM', 'Dr durodola', '3', '1', 13, 1, 'paid', 'non-refillable', 'close', 1104),
(129, 14, 192, '7', '5', '10', 1, 40, 40, 0, 200, 8000, NULL, 'nil', '2020-05-01 20:42:22', '2020-05-01 20:42:22', 'May 1, 2020', '09:42:22 PM', 'Dr Ariloba', '3', '1', 13, 1, 'close', 'non-refillable', 'close', 1103),
(128, 11, 29, '7', '1', '2', 1, 4, 4, 0, 2, 8, NULL, 'nil', '2020-05-01 20:41:17', '2020-05-01 20:41:17', 'May 1, 2020', '09:41:17 PM', 'Dr Ariloba', '3', '1', 13, 1, 'close', 'non-refillable', 'close', 1103),
(94, 10, 78, '7', '5', '10', NULL, 40, 40, 1, 30, 1200, NULL, 'nill', '2020-04-04 08:50:24', '2020-04-04 08:50:24', 'Apr 4, 2020', '09:50:24 AM', 'Ade', '3', '1', 98, 673, 'save', 'non-refillable', 'close', 1059),
(95, 10, 78, '5', '5', '10', NULL, 20, 20, 1, 30, 600, NULL, 'nil', '2020-04-04 09:04:49', '2020-04-04 09:04:49', 'Apr 4, 2020', '10:04:49 AM', 'Ade', '3', '1', 99, 673, 'paid', 'non-refillable', 'close', 1060),
(96, 18, 65, '5', '1', '20', NULL, 20, 20, 1, 50, 1000, NULL, 'nill', '2020-04-04 09:43:45', '2020-04-04 09:43:45', 'Apr 4, 2020', '10:43:45 AM', 'Ade', '3', '1', 100, 673, 'paid', 'non-refillable', 'close', 1061),
(97, 14, 192, '7', '1', '40', NULL, 80, 80, 1, 200, 16000, NULL, 'nil', '2020-04-04 21:31:16', '2020-04-04 21:31:16', 'Apr 4, 2020', '10:31:16 PM', 'Ade', '3', '1', 103, 673, 'close', 'non-refillable', 'close', 1064),
(98, 13, 113, '5', '5', '12', NULL, 24, 24, 1, 100, 2400, NULL, 'NILL', '2020-04-05 05:46:34', '2020-04-05 05:46:34', 'Apr 5, 2020', '06:46:34 AM', 'Dr Durosawo', '3', '1', 106, 673, 'paid', 'non-refillable', 'close', 1067),
(99, 11, 35, '6', '5', '2', NULL, 6, 6, 1, 2, 12, NULL, 'nill', '2020-04-05 06:29:57', '2020-04-05 06:29:57', 'Apr 5, 2020', '07:29:57 AM', 'ADE', '3', '1', 108, 673, 'paid', 'non-refillable', 'close', 1069),
(100, 12, 177, NULL, '1', NULL, NULL, 50, 50, 0, 3, 150, NULL, '2wwwww', '2020-04-20 21:14:11', '2020-04-20 21:14:11', 'Apr 20, 2020', '10:14:10 PM', 'Dr Ariloba', '3', '1', 5, 788, 'close', 'refillable', 'close', 1093),
(107, 12, 177, NULL, '1', '20', 1, 10, 10, 0, 3, 30, NULL, 'gjjhjgh', '2020-04-21 17:45:56', '2020-04-21 17:45:56', 'Apr 21, 2020', '06:45:56 PM', 'Dr durodola', '3', '1', 5, 788, 'close', 'non-refillable', 'close', 1093),
(102, 13, 89, '5', '5', '3', NULL, 6, 6, 0, 100, 600, NULL, 'hjjhjhjhjhj', '2020-04-21 06:05:22', '2020-04-21 06:05:22', 'Apr 21, 2020', '07:05:22 AM', 'Dr Ariloba', '3', '1', 5, 788, 'close', 'non-refillable', 'close', 1093),
(110, 11, 29, '6', '5', '5', 1, 15, 5, 10, 2, 10, 20, ',mv,mv,m', '2020-04-22 23:01:26', '2020-04-22 23:01:26', 'Apr 23, 2020', '12:01:26 AM', 'Mr Glory', '3', '1', 7, 6576, 'paid', 'refillable', 'close', 1094),
(108, 11, 29, '6', '7', '3', 1, 18, 18, 0, 2, 36, NULL, 'oidskd', '2020-04-21 17:58:16', '2020-04-21 17:58:16', 'Apr 21, 2020', '06:58:16 PM', 'Dr Ariloba', '3', '1', 5, 788, 'close', 'non-refillable', 'close', 1093),
(105, 11, 29, '6', '5', '2', 1, 6, 12, 0, 2, 24, NULL, 'kjljkkjkj', '2020-04-21 17:27:59', '2020-04-21 17:27:59', 'Apr 21, 2020', '06:27:59 PM', 'Dr durodola', '3', '1', 5, 788, 'close', 'non-refillable', 'close', 1093),
(106, 18, 45, '6', '5', '6', 1, 18, 10, 8, 50, 500, 400, 'kjljkkjkj', '2020-04-21 17:29:05', '2020-04-21 17:29:05', 'Apr 21, 2020', '06:29:05 PM', 'Dr durodola', '3', '1', 5, 788, 'close', 'refillable', 'close', 1093),
(111, 10, 58, '9', '6', '2', 1, 18, 18, 0, 30, 540, 0, ',mv,mv,m', '2020-04-22 23:02:01', '2020-04-22 23:02:01', 'Apr 23, 2020', '12:02:01 AM', 'Mr Glory', '3', '1', 7, 6576, 'paid', 'non-refillable', 'close', 1094),
(112, 11, 29, '6', '1', '12', 1, 18, 18, 0, 2, 36, NULL, 'hjvj', '2020-04-24 15:16:29', '2020-04-24 15:16:29', 'Apr 24, 2020', '04:16:29 PM', 'Dr Ariloba', '3', '1', 8, 323, 'close', 'non-refillable', 'close', 1095),
(113, 12, 177, NULL, '1', '12', 1, 17, 17, 0, 3, 51, NULL, 'hjvj', '2020-04-24 15:16:54', '2020-04-24 15:16:54', 'Apr 24, 2020', '04:16:54 PM', 'Dr Ariloba', '3', '1', 8, 323, 'close', 'non-refillable', 'close', 1095),
(114, 11, 29, '6', '1', '2', 1, 3, 3, 0, 2, 6, NULL, 'kjkhbh', '2020-04-25 13:10:30', '2020-04-25 13:10:30', 'Apr 25, 2020', '02:10:30 PM', 'Dr durodola', '3', '1', 9, 78, 'close', 'non-refillable', 'close', 1096),
(115, 14, 192, '7', '6', '6', 1, 36, 36, 0, 200, 7200, NULL, 'kjkhbh', '2020-04-25 13:10:57', '2020-04-25 13:10:57', 'Apr 25, 2020', '02:10:57 PM', 'Dr durodola', '3', '1', 9, 78, 'close', 'non-refillable', 'close', 1096),
(116, 18, 45, '5', '7', '4', 1, 16, 16, 0, 50, 800, NULL, 'kjkhbh', '2020-04-25 13:11:29', '2020-04-25 13:11:29', 'Apr 25, 2020', '02:11:29 PM', 'Dr durodola', '3', '1', 9, 78, 'close', 'non-refillable', 'close', 1096),
(117, 11, 29, '5', '5', '5', 1, 10, 10, 0, 2, 20, NULL, 'khhhhj', '2020-04-25 13:14:15', '2020-04-25 13:14:15', 'Apr 25, 2020', '02:14:15 PM', 'gjjhj', '3', '1', 9, 78, 'paid', 'non-refillable', 'close', 1097),
(118, 12, 177, NULL, '1', '5', 1, 50, 50, 0, 3, 150, NULL, 'guutuy', '2020-04-25 13:30:53', '2020-04-25 13:30:53', 'Apr 25, 2020', '02:30:53 PM', 'Dr Ariloba', '3', '1', 9, 78, 'close', 'non-refillable', 'close', 1098),
(119, 10, 58, '7', '1', '3', 1, 6, 6, 0, 30, 180, NULL, 'klsdsl', '2020-04-25 13:33:09', '2020-04-25 13:33:09', 'Apr 25, 2020', '02:33:09 PM', 'Dr Lancelot', '3', '1', 9, 78, 'close', 'non-refillable', 'close', 1098),
(120, 11, 29, '8', '1', '2', 1, 5, 5, 0, 2, 10, NULL, 'khkhkh', '2020-04-26 21:43:01', '2020-04-26 21:43:01', 'Apr 26, 2020', '10:43:01 PM', 'Dr Ariloba', '3', '1', 9, 1, 'close', 'non-refillable', 'close', 1099),
(121, 16, 0, '8', '1', '2', 1, 5, 5, 0, 180, 900, NULL, 'khkhkh', '2020-04-26 21:43:34', '2020-04-26 21:43:34', 'Apr 26, 2020', '10:43:34 PM', 'Dr Ariloba', '3', '1', 9, 1, 'close', 'non-refillable', 'close', 1099),
(122, 14, 192, '8', '1', '10', 1, 25, 25, 0, 200, 5000, NULL, 'khkhkh', '2020-04-26 21:45:07', '2020-04-26 21:45:07', 'Apr 26, 2020', '10:45:07 PM', 'Dr Ariloba', '3', '1', 9, 1, 'close', 'non-refillable', 'close', 1099),
(123, 14, 192, '7', '5', '10', 1, 40, 40, 0, 200, 8000, NULL, 'nill', '2020-04-27 17:53:26', '2020-04-27 17:53:26', 'Apr 27, 2020', '06:53:26 PM', 'Dr Lancelot', '3', '1', 10, 1, 'paid', 'non-refillable', 'close', 1100),
(124, 14, 192, '7', '5', '10', 1, 40, 20, 20, 200, 4000, 4000, 'nill', '2020-04-27 17:54:56', '2020-04-27 17:54:56', 'Apr 27, 2020', '06:54:56 PM', 'Dr Lancelot', '3', '1', 10, 1, 'paid', 'refillable', 'close', 1100),
(141, 10, 40, '5', '5', '2', 1, 4, 4, 0, 30, 120, NULL, 'nil', '2020-05-13 18:21:00', '2020-05-13 18:21:00', 'May 13, 2020', '07:20:59 PM', 'Dr durodola', '3', '1', 10, 1234, 'save', 'non-refillable', 'close', NULL),
(132, 11, 29, '5', '1', '10', 1, 10, 10, 0, 2, 20, NULL, 'nil', '2020-05-01 21:05:26', '2020-05-01 21:05:26', 'May 1, 2020', '10:05:26 PM', 'Mr Glory', '3', '1', 13, 1, 'close', 'non-refillable', 'close', 1103),
(126, 14, 192, '6', '6', '4', 1, 10, 10, 0, 200, 2000, NULL, 'nin', '2020-04-29 01:36:03', '2020-04-29 01:36:03', 'Apr 29, 2020', '02:36:03 AM', 'Dr durodola', '3', '1', 12, 1, 'paid', 'non-refillable', 'close', 1102),
(127, 10, 58, '5', '5', '4', 1, 10, 5, 5, 30, 150, 150, 'nin', '2020-04-29 01:36:21', '2020-04-29 01:36:21', 'Apr 29, 2020', '02:36:21 AM', 'Dr durodola', '3', '1', 12, 1, 'paid', 'refillable', 'close', 1102),
(135, 11, 29, '5', '1', '1', 1, 1, 1, 0, 2, 2, NULL, 'nil', '2020-05-05 23:50:35', '2020-05-05 23:50:35', 'May 6, 2020', '12:50:34 AM', 'Dr durodola', '3', '1', 13, 1, 'paid', 'non-refillable', 'close', 1105),
(136, 13, 89, '6', '5', '4', 1, 12, 12, 0, 100, 1200, NULL, 'nil', '2020-05-06 00:49:25', '2020-05-06 00:49:25', 'May 6, 2020', '01:49:25 AM', 'Dr durodola', '3', '1', 13, 890, 'paid', 'non-refillable', 'close', 1106),
(137, 11, 29, '5', '5', '5', 1, 10, 10, 0, 2, 20, NULL, 'nil', '2020-05-06 00:50:17', '2020-05-06 00:50:17', 'May 6, 2020', '01:50:17 AM', 'Dr durodola', '3', '1', 13, 890, 'paid', 'non-refillable', 'close', 1106),
(139, 10, 58, '5', '5', '3', 1, 6, 6, 0, 30, 180, NULL, 'nill', '2020-05-06 13:47:28', '2020-05-06 13:47:28', 'May 6, 2020', '02:47:28 PM', 'Dr Ariloba', '3', '1', 13, 890, 'paid', 'non-refillable', 'close', 1107),
(140, 11, 28, '7', '5', '2', 1, 8, 8, 0, 2, 16, NULL, 'nil', '2020-05-11 20:13:09', '2020-05-11 20:13:09', 'May 11, 2020', '09:13:09 PM', 'Dr durodola', '3', '1', 2, 673, 'close', 'non-refillable', 'close', 1108),
(142, 13, 65, '7', '1', '2', 1, 4, 4, 0, 100, 400, NULL, 'nin', '2020-05-13 23:14:12', '2020-05-13 23:14:12', 'May 14, 2020', '12:14:12 AM', 'Dr Ariloba', '3', '1', 7, 6576, 'paid', 'non-refillable', 'close', 1109),
(143, 14, 172, '7', '1', '4', 1, 8, 8, 0, 200, 1600, NULL, 'nin', '2020-05-13 23:22:31', '2020-05-13 23:22:31', 'May 14, 2020', '12:22:31 AM', 'Dr Ariloba', '3', '1', 7, 6576, 'paid', 'non-refillable', 'close', 1109),
(144, 13, 61, '5', '5', '3', 1, 6, 6, 0, 100, 600, NULL, 'nil', '2020-05-14 00:30:06', '2020-05-14 00:30:06', 'May 14, 2020', '01:30:06 AM', 'Dr durodola', '3', '1', 12, 78, 'paid', 'non-refillable', 'close', 1110),
(145, 11, 11, '5', '5', '2', 1, 4, 4, 0, 0, 0, NULL, 'nil', '2020-05-14 00:31:25', '2020-05-14 00:31:25', 'May 14, 2020', '01:31:25 AM', 'Dr durodola', '3', '1', 12, 78, 'close', 'non-refillable', 'close', 1111),
(146, 13, 55, '7', '5', '4', 1, 16, 16, 0, 100, 1600, NULL, 'kjcxkjc', '2020-06-22 20:34:14', '2020-06-22 20:34:14', 'Jun 22, 2020', '09:34:14 PM', 'Dr Lancelot', '6', '1', 13, 890, 'save', 'non-refillable', 'close', NULL),
(147, 13, 55, '7', '5', '4', 1, 16, 16, 0, 100, 1600, NULL, 'kjcxkjc', '2020-06-22 20:37:34', '2020-06-22 20:37:34', 'Jun 22, 2020', '09:37:33 PM', 'Dr Lancelot', '6', '1', 13, 890, 'save', 'non-refillable', 'close', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor_prescriptions`
--
ALTER TABLE `doctor_prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_prescriptions_doctor_id_index` (`doctor_id`),
  ADD KEY `doctor_prescriptions_pharmacist_id_index` (`pharmacist_id`),
  ADD KEY `doctor_prescriptions_branch_id_index` (`branch_id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `customer_id` (`appointment_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor_prescriptions`
--
ALTER TABLE `doctor_prescriptions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
