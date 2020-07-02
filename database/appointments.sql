-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:26 PM
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
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(200) NOT NULL,
  `customer_id` int(200) NOT NULL,
  `appointment_type` int(200) NOT NULL,
  `service_flow` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `progress_flow` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `branch_id` int(200) DEFAULT NULL,
  `clinic_id` int(200) DEFAULT NULL,
  `clinic_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'close',
  `pharm_id` int(200) DEFAULT NULL,
  `pharm_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'close',
  `record_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'close',
  `revenue_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'close',
  `investigation_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'close',
  `theater_id` int(200) DEFAULT NULL,
  `theater_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'close',
  `ward_id` int(200) DEFAULT NULL,
  `ward_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'close',
  `nurse_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'close',
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `patient_status` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT 'ipd',
  `note` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insurance_status` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT 'disabled',
  `hmo_id` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `created_by` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_branch` int(200) DEFAULT NULL,
  `created_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `a_date` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `a_time` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `customer_id`, `appointment_type`, `service_flow`, `progress_flow`, `branch_id`, `clinic_id`, `clinic_status`, `pharm_id`, `pharm_status`, `record_status`, `revenue_status`, `investigation_status`, `theater_id`, `theater_status`, `ward_id`, `ward_status`, `nurse_status`, `status`, `patient_status`, `note`, `insurance_status`, `hmo_id`, `created_by`, `created_branch`, `created_status`, `created_at`, `updated_at`, `a_date`, `a_time`, `updated_by`) VALUES
(1, 222, 4, 'CLINIC', '1', 1, 0, 'close', 14, 'open', '23', 'open', '0', 0, 'close', 0, 'close', 'close', 'open', NULL, 'jogjiwh', 'disabled', '1\r\n', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-16 13:43:38', 'Apr 16, 2020', '02:43:38 PM', NULL),
(2, 673, 4, 'CLINIC', '1', 1, 0, 'close', 15, 'open', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'terminated', NULL, 'mgjhghg', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-17 15:29:53', 'Apr 17, 2020', '04:29:53 PM', NULL),
(3, 6767, 4, 'CLINIC', '1', 1, 0, 'close', 20, 'open', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'open', NULL, 'mgjhghg', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-17 15:30:55', 'Apr 17, 2020', '04:30:55 PM', NULL),
(4, 8989, 4, 'CLINIC', '1', 1, 0, 'close', 14, 'open', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'open', NULL, 'jyuytty', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-17 15:40:37', 'Apr 17, 2020', '04:40:37 PM', NULL),
(5, 788, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'paid', '0', 'checkout', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'hjhjkj', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-18 06:02:56', 'Apr 18, 2020', '07:02:56 AM', NULL),
(6, 678, 4, 'CLINIC', '1', 1, 0, 'close', 14, 'open', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'open', NULL, 'jkfdkjfd', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-22 22:49:10', 'Apr 22, 2020', '11:49:10 PM', NULL),
(7, 6576, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'full-payment', '0', 'checkout', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'nmjkm', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-22 22:58:44', 'Apr 22, 2020', '11:58:44 PM', NULL),
(8, 323, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'paid', '0', 'checkout', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'ghgh', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-24 15:14:15', 'Apr 24, 2020', '04:14:15 PM', NULL),
(9, 78, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'full-payment', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'nil', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-25 12:20:20', 'Apr 25, 2020', '01:20:20 PM', NULL),
(10, 1234, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'open', '0', 'checkout', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'NIl', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-27 17:45:13', 'Apr 27, 2020', '06:45:13 PM', NULL),
(11, 679, 5, 'CLINIC', '1', 1, 0, 'close', 0, 'close', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'open', NULL, 'hjhjhj', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-04-28 09:09:27', 'Apr 28, 2020', '10:09:26 AM', NULL),
(12, 78, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'part-payment', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'nil', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-28 10:22:56', 'Apr 28, 2020', '11:22:55 AM', NULL),
(13, 890, 4, 'CLINIC', '1', 1, 0, 'close', 1, 'full-payment', '0', 'open', '0', 0, 'close', 0, 'close', 'close', 'checkout', NULL, 'nin', 'disabled', '1', '1003', 22, 'open', '2020-06-27 07:34:57', '2020-04-29 12:58:38', 'Apr 29, 2020', '01:58:38 PM', NULL),
(22, 2, 2, 'CLINIC', '1', 1, 27, 'open', NULL, 'close', NULL, 'full-payment', 'close', NULL, 'close', NULL, 'close', 'close', 'open', NULL, 'jkjjk', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-23 14:26:04', 'Jun 23, 2020', '03:26:04 PM', NULL),
(42, 3, 2, 'CLINIC', '1', 1, 27, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'jkjjk', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-23 16:02:47', 'Jun 23, 2020', '05:02:46 PM', NULL),
(43, 674, 2, 'CLINIC', '1', 1, 29, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'jggggh', 'enabled', '8', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-23 17:28:14', 'Jun 23, 2020', '06:28:14 PM', NULL),
(44, 57, 2, 'CLINIC', '1', 1, 28, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'close', 'ipd', 'gvhygy', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-23 19:38:14', 'Jun 23, 2020', '08:38:14 PM', NULL),
(45, 58, 2, 'CLINIC', '1', 1, 26, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'gghxsef', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-23 19:39:49', 'Jun 23, 2020', '08:39:49 PM', NULL),
(46, 56, 2, 'CLINIC', '1', 1, 26, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'frdrtt', 'enabled', '12', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-23 19:49:56', 'Jun 23, 2020', '08:49:56 PM', NULL),
(47, 229, 2, 'CLINIC: Payment', '1', 1, 27, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'hjhjhj', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-25 15:26:31', 'Jun 25, 2020', '04:26:31 PM', NULL),
(48, 1997, 2, NULL, '1', 1, 27, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'hjmhjkjjk', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-26 12:26:52', 'Jun 26, 2020', '01:26:52 PM', NULL),
(49, 2794, 2, NULL, '1', 1, 28, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'kjjkjkkj', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-26 12:28:03', 'Jun 26, 2020', '01:28:03 PM', NULL),
(50, 2798, 2, NULL, '1', 1, 28, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'kjjkjkkj', 'disabled', '1', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-26 12:31:21', 'Jun 26, 2020', '01:31:21 PM', NULL),
(51, 60591, 2, NULL, '1', 1, 27, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'jkkjjkjkkj', 'enabled', '8', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-26 12:35:32', 'Jun 26, 2020', '01:35:32 PM', NULL),
(52, 5675, 2, NULL, '1', 1, 26, 'open', NULL, 'close', 'close', 'open', 'close', NULL, 'close', NULL, 'close', 'close', 'open', 'ipd', 'fgtytyyt', 'enabled', '11', '6', 1, 'open', '2020-06-27 07:34:57', '2020-06-26 13:02:45', 'Jun 26, 2020', '02:02:45 PM', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
