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
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `admin` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `images` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `admin`, `name`, `description`, `images`, `created_at`) VALUES
(1, 3, 'undefined', 'undefined', 'group1.png', '2020-05-31 17:50:20'),
(2, 3, 'group3', 'dijberjqwe', 'group1.png', '2020-05-31 19:33:05'),
(3, 3, 'group4', 'dijberjqwe', 'group1.png', '2020-05-31 19:37:55'),
(4, 3, 'group5', 'dijberjqwe', 'group1.png', '2020-05-31 19:38:17'),
(5, 3, 'group5', 'dijberjqwe', 'group1.png', '2020-05-31 19:39:02'),
(6, 3, 'group5', 'dijberjqweadfe', 'group1.png', '2020-05-31 19:45:26'),
(7, 3, 'group5', 'dijberjqweadfe', 'group1.png', '2020-05-31 19:48:13'),
(8, 3, 'group5', 'dijberjqweadfe', 'group1.png', '2020-05-31 19:48:48'),
(9, 3, 'group8', 'testing group', 'group1.png', '2020-05-31 19:50:32'),
(10, 3, 'group8', 'testing group', 'group1.png', '2020-05-31 19:53:11'),
(11, 3, 'group testing', 'hjwqf', 'group1.png', '2020-05-31 20:04:55'),
(12, 3, 'ahda', 'haafjae', 'group1.png', '2020-05-31 20:53:24'),
(13, 3, 'testing', 'haafjaekegfk', 'group1.png', '2020-05-31 21:04:41'),
(14, 3, 'testing343', 'haafjaekegfkdf34', 'group1.png', '2020-05-31 21:07:30'),
(15, 3, 'testing343', 'haafjaekegfkdf34', 'group1.png', '2020-05-31 21:08:48'),
(16, 3, 'testing343we', 'haafjaekegfkdf34', 'group2.JFIF', '2020-05-31 21:11:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
