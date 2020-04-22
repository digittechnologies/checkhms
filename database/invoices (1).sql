-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2020 at 12:14 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

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
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(10) UNSIGNED NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(200) DEFAULT 0,
  `service_charge` int(200) DEFAULT 0,
  `other_charges` int(200) DEFAULT 0,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `i_date` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `i_time` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graph_date` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `doctor_prescription_id` int(200) DEFAULT NULL,
  `charges_id` int(200) DEFAULT NULL,
  `payment_method` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_id` int(200) DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `voucher_id` int(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `amount`, `paid`, `balance`, `discount`, `service_charge`, `other_charges`, `status`, `delivery_status`, `created_at`, `updated_at`, `i_date`, `i_time`, `graph_date`, `doctor_prescription_id`, `charges_id`, `payment_method`, `payment_id`, `branch_id`, `staff_id`, `voucher_id`) VALUES
(62, '1720', '1720', '0', 0, 0, 0, 'paid', 'delivered', NULL, NULL, 'Mar 14, 2020', '10:24:38 AM', '2020-03', NULL, NULL, NULL, NULL, '1', '3', 1047),
(61, '1560', '1560', '0', 0, 0, 0, 'paid', 'delivered', NULL, NULL, 'Mar 14, 2020', '10:21:56 AM', '2020-03', NULL, NULL, NULL, NULL, '1', '3', 1046),
(60, '110', '110', '0', 0, 0, 0, 'paid', 'delivered', NULL, NULL, 'Mar 14, 2020', '09:58:42 AM', '2020-03', NULL, NULL, NULL, NULL, '1', '3', 1045),
(63, '4014', '4064', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Mar 19, 2020', '09:00:50 AM', '2020-03', NULL, NULL, NULL, NULL, '1', '3', 1048),
(64, '60', '110', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Mar 19, 2020', '09:04:27 AM', '2020-03', NULL, NULL, NULL, NULL, '1', '3', 1049),
(65, '2036', '2086', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Mar 23, 2020', '04:02:51 AM', '2020-03', NULL, NULL, NULL, NULL, '1', '3', 1051),
(66, '600', '650', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Apr 4, 2020', '10:18:40 AM', '2020-04', NULL, NULL, NULL, NULL, '1', '3', 1060),
(67, '1000', '1050', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Apr 4, 2020', '12:53:28 PM', '2020-04', NULL, NULL, NULL, NULL, '1', '3', 1061),
(68, '2400', '2450', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Apr 5, 2020', '06:47:04 AM', '2020-04', NULL, NULL, NULL, NULL, '1', '3', 1067),
(69, '12', '62', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Apr 5, 2020', '07:48:04 AM', '2020-04', NULL, NULL, NULL, NULL, '1', '3', 1069),
(75, '1030', '1080', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Apr 29, 2020', '12:55:46 AM', '2020-04', 114, NULL, NULL, NULL, '1', '3', 1096),
(74, '1030', '1080', '0', 0, 50, 0, 'paid', 'delivered', NULL, NULL, 'Apr 29, 2020', '12:55:46 AM', '2020-04', 113, NULL, NULL, NULL, '1', '3', 1096);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_branch_id_index` (`branch_id`),
  ADD KEY `invoices_staff_id_index` (`staff_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
