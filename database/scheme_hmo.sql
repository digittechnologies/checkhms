-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:32 PM
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
-- Table structure for table `scheme_hmo`
--

CREATE TABLE `scheme_hmo` (
  `id` int(200) NOT NULL,
  `scheme_id` varchar(100) DEFAULT NULL,
  `hmo_no` varchar(100) DEFAULT NULL,
  `hmo_name` varchar(200) DEFAULT NULL,
  `about_hmo` text DEFAULT NULL,
  `hmo_address` text DEFAULT NULL,
  `hmo_email` varchar(100) DEFAULT NULL,
  `hmo_contact` varchar(100) DEFAULT NULL,
  `price_list_column` varchar(100) DEFAULT NULL,
  `price_list_name` varchar(200) DEFAULT NULL,
  `discount_1` int(10) DEFAULT 0,
  `discount_2` int(10) DEFAULT 0,
  `discount_3` int(10) DEFAULT 0,
  `status` varchar(100) DEFAULT 'active',
  `created_by` int(200) DEFAULT NULL,
  `c_date` varchar(200) DEFAULT NULL,
  `c_time` varchar(200) DEFAULT NULL,
  `updated_by` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scheme_hmo`
--

INSERT INTO `scheme_hmo` (`id`, `scheme_id`, `hmo_no`, `hmo_name`, `about_hmo`, `hmo_address`, `hmo_email`, `hmo_contact`, `price_list_column`, `price_list_name`, `discount_1`, `discount_2`, `discount_3`, `status`, `created_by`, `c_date`, `c_time`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, '1', '0000', 'General Patient', 'All Patient are entitle to this category  ', 'Default', 'Default', 'Default', '1', 'yes', 0, 0, 0, 'active', 1, NULL, NULL, NULL, '2020-06-17 23:00:00', '2020-06-17 23:00:00'),
(6, '2', '65665', 'United Health', 'United Health', 'United Health', 'unitedhealth@gmail.com', '0800797997967', '2', NULL, 90, 90, 80, 'active', NULL, NULL, NULL, NULL, '2020-06-18 22:58:02', '2020-06-18 22:58:02'),
(7, '2', '6560', 'Clokin Health', 'About Clokin', 'Clokin Address', 'clokin@yahoo.com', '06006006060', '2', NULL, 80, 50, 30, 'active', NULL, NULL, NULL, NULL, '2020-06-18 23:18:47', '2020-06-18 23:18:47'),
(8, '2', '9540', 'Gora Health', 'about Gora', 'address', 'lslsl@gmail.com', '959959959', '2', NULL, 90, 90, 90, 'active', NULL, NULL, NULL, NULL, '2020-06-18 23:24:59', '2020-06-18 23:24:59'),
(11, '2', '6560', 'kostom Health', 'ghghghhg', 'ghhjhjhj', 'kostom@gmail.com', '09087676555', '2', NULL, 80, 70, 40, 'active', NULL, NULL, NULL, NULL, '2020-06-21 16:40:07', '2020-06-21 16:40:07'),
(12, '2', '4543', 'Bowen', 'Bowen teaching hospital', 'Ogbomoso', 'bowen@gmail.com', '0908972536', '3', NULL, 20, 30, 80, 'active', NULL, NULL, NULL, NULL, '2020-06-23 19:26:15', '2020-06-23 19:26:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `scheme_hmo`
--
ALTER TABLE `scheme_hmo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `scheme_hmo`
--
ALTER TABLE `scheme_hmo`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
