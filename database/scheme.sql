-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:31 PM
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
-- Table structure for table `scheme`
--

CREATE TABLE `scheme` (
  `id` int(250) NOT NULL,
  `scheme_name` varchar(100) DEFAULT NULL,
  `about_scheme` text DEFAULT NULL,
  `scheme_country` varchar(200) DEFAULT NULL,
  `scheme_owner` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `price_list_status` varchar(20) DEFAULT NULL,
  `price_list_column` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scheme`
--

INSERT INTO `scheme` (`id`, `scheme_name`, `about_scheme`, `scheme_country`, `scheme_owner`, `status`, `price_list_status`, `price_list_column`) VALUES
(1, 'General Cash Patient', 'General Cash Patient', 'General Cash Patient', '--', 'active', 'yes', 1),
(2, 'NHIS', 'Federal Government Of Nigeria Insurance Scheme ', 'Nigeria', 'FGC', 'active', 'yes', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `scheme`
--
ALTER TABLE `scheme`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `scheme`
--
ALTER TABLE `scheme`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
