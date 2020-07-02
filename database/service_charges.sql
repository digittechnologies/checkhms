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
-- Table structure for table `service_charges`
--

CREATE TABLE `service_charges` (
  `id` int(200) NOT NULL,
  `appointment_id` int(200) NOT NULL,
  `voucher_id` int(200) NOT NULL,
  `service_charge_id` int(200) NOT NULL,
  `service_charge_name` varchar(100) DEFAULT NULL,
  `dept_id` int(200) NOT NULL,
  `amount` varchar(200) NOT NULL DEFAULT '0',
  `balance` varchar(200) NOT NULL DEFAULT '0',
  `nhis_no` varchar(100) DEFAULT NULL,
  `hmo_no` int(200) DEFAULT 1,
  `discount_percentage` varchar(200) NOT NULL DEFAULT '0',
  `discount_amount` varchar(200) NOT NULL DEFAULT '0',
  `total_amount` varchar(200) NOT NULL DEFAULT '0',
  `status` varchar(20) NOT NULL DEFAULT 'open',
  `c_date` varchar(80) NOT NULL,
  `c_time` varchar(80) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_by` int(20) NOT NULL,
  `updated_by` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service_charges`
--

INSERT INTO `service_charges` (`id`, `appointment_id`, `voucher_id`, `service_charge_id`, `service_charge_name`, `dept_id`, `amount`, `balance`, `nhis_no`, `hmo_no`, `discount_percentage`, `discount_amount`, `total_amount`, `status`, `c_date`, `c_time`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(4, 42, 1117, 1, 'Normal Consultation', 2, '25', '25', NULL, 0, '0', '0', '25', 'open', 'Jun 23, 2020', '05:02:46 PM', '2020-06-23 16:02:47', '2020-06-23 16:02:47', 6, 6),
(5, 43, 1118, 1, 'Normal Consultation', 2, '25', '2.5', NULL, 9540, '90', '22.5', '2.5', 'open', 'Jun 23, 2020', '06:28:14 PM', '2020-06-23 17:28:14', '2020-06-23 17:28:14', 6, 6),
(6, 44, 1119, 1, 'Normal Consultation', 2, '25', '25', NULL, 0, '0', '0', '25', 'open', 'Jun 23, 2020', '08:38:14 PM', '2020-06-23 19:38:14', '2020-06-23 19:38:14', 6, 6),
(7, 46, 1120, 1, 'Normal Consultation', 2, '25', '20', NULL, 4543, '20', '5', '20', 'open', 'Jun 23, 2020', '08:49:56 PM', '2020-06-23 19:49:56', '2020-06-23 19:49:56', 6, 6),
(8, 47, 1121, 1, 'Normal Consultation', 2, '25', '25', NULL, 0, '0', '0', '25', 'open', 'Jun 25, 2020', '04:26:31 PM', '2020-06-25 15:26:31', '2020-06-25 15:26:31', 6, 6),
(9, 50, 1122, 8, 'GOPD DR Visit', 2, '200', '200', NULL, 0, '0', '0', '200', 'open', 'Jun 26, 2020', '01:31:21 PM', '2020-06-26 12:31:21', '2020-06-26 12:31:21', 6, 6),
(10, 51, 1123, 8, 'GOPD DR Visit', 2, '200', '20', NULL, 9540, '90', '180', '20', 'open', 'Jun 26, 2020', '01:35:32 PM', '2020-06-26 12:35:32', '2020-06-26 12:35:32', 6, 6),
(11, 52, 1124, 8, 'GOPD DR Visit', 2, '200', '60', NULL, 6560, '70', '140', '60', 'open', 'Jun 26, 2020', '02:02:45 PM', '2020-06-26 13:02:45', '2020-06-26 13:02:45', 6, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `service_charges`
--
ALTER TABLE `service_charges`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `service_charges`
--
ALTER TABLE `service_charges`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
