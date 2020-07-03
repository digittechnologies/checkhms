-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:27 PM
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
-- Table structure for table `hospital_charges`
--

CREATE TABLE `hospital_charges` (
  `id` int(200) NOT NULL,
  `charge_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `charge_amount` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_2` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `price_3` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `care_type` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_type` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `dept_id` int(200) DEFAULT NULL,
  `status` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_date` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_time` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `staff_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hospital_charges`
--

INSERT INTO `hospital_charges` (`id`, `charge_name`, `charge_amount`, `price_2`, `price_3`, `care_type`, `appointment_type`, `dept_id`, `status`, `created_date`, `created_time`, `created_at`, `updated_at`, `staff_id`) VALUES
(1, 'Normal Consultation', '25', '0', '0', 'primary', '1', 2, 'active', 'Apr 11, 2020', '12:31:59 AM', '2020-04-10 23:31:59', '2020-04-11 00:17:35', 3),
(5, 'Pharmacy Service Charge', '50', '0', '0', 'primary', '4', 1, 'active', 'May 3, 2020', '10:37:13 PM', '2020-05-03 21:37:13', '2020-05-03 21:38:17', 1003),
(8, 'GOPD DR Visit', '200', '0', '300', 'secondary', '1', 2, 'active', 'Jun 26, 2020', '11:04:10 AM', '2020-06-26 10:04:10', '2020-06-26 10:04:10', 6),
(9, 'COPD DR Visi', '300', '350', '400', 'secondary', '1', 2, 'active', 'Jun 26, 2020', '11:07:39 AM', '2020-06-26 10:07:39', '2020-06-26 10:07:39', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospital_charges`
--
ALTER TABLE `hospital_charges`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospital_charges`
--
ALTER TABLE `hospital_charges`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
