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
-- Table structure for table `group_chat`
--

CREATE TABLE `group_chat` (
  `id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `message` varchar(200) DEFAULT NULL,
  `receiver` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `status` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_chat`
--

INSERT INTO `group_chat` (`id`, `sender`, `message`, `receiver`, `group_id`, `status`, `created_at`) VALUES
(64, 3, 'Oya', 16, 16, 'unread', '2020-06-02 15:03:34'),
(67, 3, 'Oya', 1002, 16, 'unread', '2020-06-02 15:03:34'),
(68, 3, 'Oya', 1002, 16, 'unread', '2020-06-02 15:03:34'),
(69, 3, 'Oya', 1003, 16, 'unread', '2020-06-02 15:03:34'),
(70, 3, 'Oya', 1006, 16, 'unread', '2020-06-02 15:03:34'),
(71, 3, 'Oya', 1007, 16, 'unread', '2020-06-02 15:03:34'),
(72, 3, 'Oya', 1007, 16, 'unread', '2020-06-02 15:03:34'),
(73, 3, 'Oya', 1008, 16, 'unread', '2020-06-02 15:03:34'),
(74, 3, 'Oya', 1004, 16, 'unread', '2020-06-02 15:03:34'),
(75, 3, 'Oya', 1005, 16, 'unread', '2020-06-02 15:03:34'),
(76, 3, 'Hello here', 16, 16, 'unread', '2020-06-02 15:11:57'),
(77, 1010, 'hi', 16, 16, 'unread', '2020-06-09 18:20:51'),
(78, 1010, 'hi', 3, 16, 'unread', '2020-06-09 18:20:51'),
(79, 1010, 'hi', 16, 16, 'read', '2020-06-09 18:20:52'),
(80, 3, 'hello', 16, 16, 'unread', '2020-06-09 18:20:58'),
(81, 3, 'hello', 16, 16, 'read', '2020-06-09 18:20:58'),
(82, 1010, 'hi', 16, 16, 'unread', '2020-06-09 18:31:20'),
(83, 1010, 'hi', 3, 16, 'unread', '2020-06-09 18:31:20'),
(84, 1010, 'hi', 16, 16, 'read', '2020-06-09 18:31:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `group_chat`
--
ALTER TABLE `group_chat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `group_chat`
--
ALTER TABLE `group_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
