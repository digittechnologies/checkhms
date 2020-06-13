-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2020 at 04:32 AM
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
-- Table structure for table `private_chat`
--

CREATE TABLE `private_chat` (
  `id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `message` varchar(1000) DEFAULT NULL,
  `receiver` int(11) NOT NULL,
  `status` varchar(200) DEFAULT 'read',
  `date` varchar(200) DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `private_chat`
--

INSERT INTO `private_chat` (`id`, `sender`, `message`, `receiver`, `status`, `date`, `time`) VALUES
(80, 1010, 'okay set', 3, 'read', 'June 01, 2020', '23:48'),
(81, 3, 'Hello', 1010, 'read', 'June 01, 2020', '23:48'),
(82, 1010, 'How far', 3, 'read', 'June 01, 2020', '23:49'),
(83, 3, 'am good  and you', 1010, 'read', 'June 01, 2020', '23:49'),
(84, 1010, 'am good too', 3, 'read', 'June 01, 2020', '23:49'),
(85, 3, 'what are you working on now', 1010, 'read', 'June 01, 2020', '23:49'),
(86, 1010, 'am busy doing some stuffs', 3, 'read', 'June 01, 2020', '23:50'),
(87, 3, 'ok', 1010, 'read', 'June 03, 2020', '6:3'),
(88, 3, 'hello', 1005, 'unread', 'June 09, 2020', '0:28'),
(89, 1010, 'hello', 3, 'read', 'June 09, 2020', '6:17'),
(90, 1010, 'hi', 3, 'read', 'June 09, 2020', '6:17'),
(91, 1010, 'hello', 3, 'read', 'June 09, 2020', '6:17'),
(92, 3, 'hello', 1010, 'unread', 'June 09, 2020', '6:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `private_chat`
--
ALTER TABLE `private_chat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `private_chat`
--
ALTER TABLE `private_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
