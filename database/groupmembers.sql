-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2020 at 04:31 AM
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
-- Database: `buth_backup`
--

-- --------------------------------------------------------

--
-- Table structure for table `groupmembers`
--

CREATE TABLE `groupmembers` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `status` varchar(200) DEFAULT 'active',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groupmembers`
--

INSERT INTO `groupmembers` (`id`, `user`, `group_id`, `admin_id`, `status`, `time`) VALUES
(6, 3, 16, 3, 'active', '2020-05-31 21:11:50'),
(7, 1010, 16, 3, 'active', '2020-05-31 21:11:50'),
(8, 1002, 16, 3, 'active', '2020-06-02 08:43:58'),
(9, 1002, 16, 3, 'active', '2020-06-02 08:44:03'),
(10, 1003, 16, 3, 'active', '2020-06-02 08:46:35'),
(11, 1006, 16, 3, 'active', '2020-06-02 08:46:42'),
(12, 1007, 16, 3, 'active', '2020-06-02 08:49:11'),
(13, 1007, 16, 3, 'active', '2020-06-02 08:49:11'),
(14, 1008, 16, 3, 'active', '2020-06-02 08:50:41'),
(15, 1004, 16, 3, 'active', '2020-06-02 08:53:39'),
(16, 1005, 16, 3, 'active', '2020-06-02 08:55:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groupmembers`
--
ALTER TABLE `groupmembers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groupmembers`
--
ALTER TABLE `groupmembers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
