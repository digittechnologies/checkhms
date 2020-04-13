-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2020 at 11:47 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

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
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `br_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales_rep` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_quantity` int(200) NOT NULL DEFAULT '0',
  `total_cost` int(200) NOT NULL DEFAULT '0',
  `dept_id` int(11) NOT NULL DEFAULT '0',
  `clinic_type` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kie` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `capacity` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `segment` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `br_name`, `address`, `sales_rep`, `total_quantity`, `total_cost`, `dept_id`, `clinic_type`, `kie`, `capacity`, `segment`, `status`, `created_at`, `updated_at`, `staff_id`) VALUES
(1, 'Main', 'branch_main', 'Ogbomoso', 'kefi', 0, 0, 0, NULL, NULL, NULL, NULL, 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00', '7'),
(14, 'GOPD', 'branch_gopd', 'ogbomoso', 'ola', 0, 0, 0, NULL, NULL, NULL, NULL, 'active', '2020-04-07 05:59:35', '2020-04-07 05:59:35', NULL),
(15, 'A and E', 'branch_aande', 'Ogbomoso', 'Dr Ola', 0, 0, 0, NULL, NULL, NULL, NULL, 'suspend', '2020-04-07 20:53:20', '2020-04-07 20:53:20', NULL),
(16, 'OLP', 'branch_olp', 'Ogbomoso', '3', 0, 0, 0, NULL, NULL, NULL, NULL, 'suspend', '2020-04-08 00:30:13', '2020-04-08 00:30:13', NULL),
(17, 'OPA', 'branch_opa', 'Ogbomoso', '1002', 0, 0, 0, NULL, NULL, NULL, NULL, 'active', '2020-04-12 06:44:05', '2020-04-12 06:44:05', NULL),
(18, 'OPAL', 'branch_opal', 'Ogbomoso', '1002', 0, 0, 0, NULL, NULL, NULL, NULL, 'active', '2020-04-12 07:12:43', '2020-04-12 07:12:43', NULL),
(19, 'OPALL', 'branch_opall', 'Ogbomoso', '1002', 0, 0, 2, NULL, NULL, NULL, NULL, 'active', '2020-04-12 07:25:03', '2020-04-12 07:25:03', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branches_staff_id_index` (`staff_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
