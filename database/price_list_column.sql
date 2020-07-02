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
-- Table structure for table `price_list_column`
--

CREATE TABLE `price_list_column` (
  `id` int(11) NOT NULL,
  `column_name` varchar(100) NOT NULL,
  `price_list_name` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated_by` varchar(80) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `price_list_column`
--

INSERT INTO `price_list_column` (`id`, `column_name`, `price_list_name`, `status`, `updated_by`, `updated_at`) VALUES
(1, 'selling_price', 'General Price', 'active', '1', '2020-06-17 23:00:00'),
(2, 'price_2', 'NHIS', 'active', '1', '2020-06-17 23:00:00'),
(3, 'price_3', 'GORA', 'active', '1', '2020-06-17 23:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `price_list_column`
--
ALTER TABLE `price_list_column`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `price_list_column`
--
ALTER TABLE `price_list_column`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
