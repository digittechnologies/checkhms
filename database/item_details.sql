-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2020 at 03:28 PM
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
-- Table structure for table `item_details`
--

CREATE TABLE `item_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `generic_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_3` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `price_2` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `selling_price` int(190) NOT NULL DEFAULT 0,
  `purchasing_price` int(190) NOT NULL DEFAULT 0,
  `markup_price` double NOT NULL DEFAULT 0,
  `manufacture_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiring_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_time` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_img` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_unit_id` int(190) NOT NULL,
  `item_category_id` int(190) NOT NULL,
  `item_type_id` int(190) NOT NULL,
  `manufacturer_id` int(190) NOT NULL,
  `item_shelf_id` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `discount_id` int(190) DEFAULT 0,
  `staff_id` int(190) DEFAULT NULL,
  `shelve_id` int(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_details`
--

INSERT INTO `item_details` (`id`, `generic_name`, `price_3`, `price_2`, `selling_price`, `purchasing_price`, `markup_price`, `manufacture_date`, `expiring_date`, `status`, `created_at`, `updated_at`, `item_date`, `item_time`, `item_img`, `item_unit_id`, `item_category_id`, `item_type_id`, `manufacturer_id`, `item_shelf_id`, `tax_id`, `discount_id`, `staff_id`, `shelve_id`) VALUES
(10, 'Acetazolamide 250mg (Diamox)', '15', '11', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 13:38:49', '2020-02-29 13:38:49', 'Feb 29, 2020', '07:38:49 PM', '1583858063.png', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(11, 'Acetylsalicylic Acid 300mg (Aspirin)', '0', '0', 2, 2, 1, NULL, NULL, 'active', '2020-02-29 13:45:26', '2020-02-29 13:45:26', 'Feb 29, 2020', '07:45:26 PM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(12, 'Acetylsalicylic Acid 75mg (Vasoprin)', '0', '0', 3, 3, 1, NULL, NULL, 'active', '2020-02-29 13:50:03', '2020-02-29 13:50:03', 'Feb 29, 2020', '07:50:03 PM', '1583744614.jpeg', 8, 10, 10, 7, '4', '0', 0, 3, 4),
(13, 'Actifed', '0', '0', 3, 100, 1, NULL, NULL, 'active', '2020-02-29 13:51:36', '2020-02-29 13:51:36', 'Feb 29, 2020', '07:51:36 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(14, 'Activated Charcoal', '5', '0', 200, 200, 1, NULL, NULL, 'active', '2020-02-29 13:52:54', '2020-02-29 13:52:54', 'Feb 29, 2020', '07:52:54 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(15, 'Acyclovir 400mg', '0', '50', 250, 250, 1, NULL, NULL, 'active', '2020-02-29 13:57:48', '2020-02-29 13:57:48', 'Feb 29, 2020', '07:57:48 PM', 'drug.jpg', 8, 33, 7, 7, '4', '0', 0, 3, 4),
(16, 'Addyzoa', '0', '0', 200, 180, 1, NULL, NULL, 'active', '2020-02-29 13:59:23', '2020-02-29 13:59:23', 'Feb 29, 2020', '07:59:23 PM', 'drug.jpg', 8, 23, 7, 7, '4', '0', 0, 3, 4),
(17, 'Albendazole 400mg', '0', '0', 100, 100, 1, NULL, NULL, 'active', '2020-02-29 14:01:09', '2020-02-29 14:01:09', 'Feb 29, 2020', '08:01:09 PM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(18, 'Allopurinol 100mg (zyloric)', '0', '30', 50, 50, 1, NULL, NULL, 'active', '2020-02-29 14:03:26', '2020-02-29 14:03:26', 'Feb 29, 2020', '08:03:26 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(19, 'Allendronic acid', '0', '0', 100, 450, 1, NULL, NULL, 'active', '2020-02-29 14:05:26', '2020-02-29 14:05:26', 'Feb 29, 2020', '08:05:26 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(20, 'Aminophyline 100mg', '0', '0', 100, 5, 1, NULL, NULL, 'active', '2020-02-29 14:07:06', '2020-02-29 14:07:06', 'Feb 29, 2020', '08:07:06 PM', 'drug.jpg', 8, 37, 7, 7, '4', '0', 0, 3, 4),
(21, 'Amiodarone', '0', '0', 100, 120, 1, NULL, NULL, 'active', '2020-02-29 14:07:58', '2020-02-29 14:07:58', 'Feb 29, 2020', '08:07:58 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(22, 'Amitriptyline 25mg (Tryptizol)', '0', '0', 100, 10, 1, NULL, NULL, 'active', '2020-02-29 14:10:20', '2020-02-29 14:10:20', 'Feb 29, 2020', '08:10:20 PM', 'drug.jpg', 8, 35, 7, 7, '4', '0', 0, 3, 4),
(23, 'Amlodipine 10mg', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 14:15:21', '2020-02-29 14:15:21', 'Feb 29, 2020', '08:15:21 PM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(24, 'Amlodipine 5mg', '0', '0', 15, 15, 1, NULL, NULL, 'active', '2020-02-29 14:19:33', '2020-02-29 14:19:33', 'Feb 29, 2020', '08:19:33 PM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(25, 'Amodiaquine 200mg (Camoquine)', '0', '0', 15, 20, 1, NULL, NULL, 'active', '2020-02-29 14:23:34', '2020-02-29 14:23:34', 'Feb 29, 2020', '08:23:34 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(26, 'Amoxicillin 250mg (Amoxyl)', '0', '0', 15, 10, 1, NULL, NULL, 'active', '2020-02-29 14:25:33', '2020-02-29 14:25:33', 'Feb 29, 2020', '08:25:33 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(27, 'Amoxicillin 500mg (Amoxyl)', '0', '0', 15, 15, 1, NULL, NULL, 'active', '2020-02-29 17:03:34', '2020-02-29 17:03:34', 'Feb 29, 2020', '11:03:34 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(28, 'Amoxicillin/Clavunalate 1000mg (Augmentin)', '0', '0', 15, 160, 1, NULL, NULL, 'active', '2020-02-29 17:04:43', '2020-02-29 17:04:43', 'Feb 29, 2020', '11:04:43 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(29, 'Amoxicillin/clavunalate 375mg 	(Augmentin)', '0', '0', 15, 60, 1, NULL, NULL, 'active', '2020-02-29 17:13:30', '2020-02-29 17:13:30', 'Feb 29, 2020', '11:13:30 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(30, 'Amoxicillin/Clavunalate 625mg 	(Augmentin)', '0', '0', 15, 100, 1, NULL, NULL, 'active', '2020-02-29 17:15:01', '2020-02-29 17:15:01', 'Feb 29, 2020', '11:15:01 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(31, 'Ampicillin/Cloxacillinn 500mg (Ampiclox)', '0', '0', 15, 20, 1, NULL, NULL, 'active', '2020-02-29 17:15:46', '2020-02-29 17:15:46', 'Feb 29, 2020', '11:15:46 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(32, 'Anorol 	(Norflex)', '0', '0', 15, 25, 1, NULL, NULL, 'active', '2020-02-29 17:16:56', '2020-02-29 17:16:56', 'Feb 29, 2020', '11:16:56 PM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(33, 'Anusol Suppositories', '0', '0', 15, 180, 1, NULL, NULL, 'active', '2020-02-29 17:20:21', '2020-02-29 17:20:21', 'Feb 29, 2020', '11:20:21 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(34, 'Anusol HCT Supp', '0', '0', 15, 350, 1, NULL, NULL, 'active', '2020-02-29 17:20:59', '2020-02-29 17:20:59', 'Feb 29, 2020', '11:20:59 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(35, 'Artemether/Lumenfantrine 20/120mg x24 (Coartem)', '0', '0', 15, 480, 1, NULL, NULL, 'active', '2020-02-29 17:22:43', '2020-02-29 17:22:43', 'Feb 29, 2020', '11:22:43 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(36, 'Artemether/Lumenfantrine 80/480mg x6 (Coartem)', '0', '0', 15, 540, 1, NULL, NULL, 'active', '2020-02-29 17:23:49', '2020-02-29 17:23:49', 'Feb 29, 2020', '11:23:49 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(37, 'Artesunate 100mg', '0', '0', 15, 0, 1, NULL, NULL, 'active', '2020-02-29 17:24:59', '2020-02-29 17:24:59', 'Feb 29, 2020', '11:24:59 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(38, 'Artesunate 50mg', '0', '0', 15, 60, 1, NULL, NULL, 'active', '2020-02-29 17:25:39', '2020-02-29 17:25:39', 'Feb 29, 2020', '11:25:39 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(39, 'Arthocare Forte', '0', '0', 15, 130, 1, NULL, NULL, 'active', '2020-02-29 17:26:11', '2020-02-29 17:26:11', 'Feb 29, 2020', '11:26:11 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(40, 'Arthrotec 75mg', '0', '0', 15, 80, 1, NULL, NULL, 'active', '2020-02-29 17:27:10', '2020-02-29 17:27:10', 'Feb 29, 2020', '11:27:10 PM', 'drug.jpg', 8, 12, 7, 7, '4', '0', 0, 3, 4),
(41, 'Ascorbic Acid 100mg (Vitamin-C) white', '0', '0', 15, 2, 1, NULL, NULL, 'active', '2020-02-29 17:29:40', '2020-02-29 17:29:40', 'Feb 29, 2020', '11:29:40 PM', 'drug.jpg', 8, 36, 7, 7, '4', '0', 0, 3, 4),
(42, 'Astymin Cap', '0', '0', 15, 80, 1, NULL, NULL, 'active', '2020-02-29 17:30:15', '2020-02-29 17:30:15', 'Feb 29, 2020', '11:30:15 PM', 'drug.jpg', 8, 36, 7, 7, '4', '0', 0, 3, 4),
(43, 'Astyfer Cap', '0', '0', 15, 80, 1, NULL, NULL, 'active', '2020-02-29 17:31:33', '2020-02-29 17:31:33', 'Feb 29, 2020', '11:31:33 PM', 'drug.jpg', 8, 39, 7, 7, '4', '0', 0, 3, 4),
(44, 'Atenolol 100mg', '0', '0', 15, 20, 1, NULL, NULL, 'active', '2020-02-29 17:32:39', '2020-02-29 17:32:39', 'Feb 29, 2020', '11:32:39 PM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(45, 'Atenolol 50mg', '0', '0', 15, 10, 1, NULL, NULL, 'active', '2020-02-29 17:33:15', '2020-02-29 17:33:15', 'Feb 29, 2020', '11:33:15 PM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(46, 'Atorvastatin 10mg', '0', '0', 15, 30, 1, NULL, NULL, 'active', '2020-02-29 17:34:03', '2020-02-29 17:34:03', 'Feb 29, 2020', '11:34:03 PM', 'drug.jpg', 8, 21, 7, 7, '4', '0', 0, 3, 4),
(47, 'Atorvastatin 20mg', '0', '0', 15, 60, 1, NULL, NULL, 'active', '2020-02-29 17:34:39', '2020-02-29 17:34:39', 'Feb 29, 2020', '11:34:38 PM', 'drug.jpg', 8, 21, 7, 7, '4', '0', 0, 3, 4),
(48, 'Avodart 0.5mg', '0', '0', 200, 200, 1, NULL, NULL, 'active', '2020-02-29 17:40:08', '2020-02-29 17:40:08', 'Feb 29, 2020', '11:40:08 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(49, 'Avodart Combi', '0', '0', 200, 300, 1, NULL, NULL, 'active', '2020-02-29 17:40:43', '2020-02-29 17:40:43', 'Feb 29, 2020', '11:40:43 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(50, 'Azathioprine 50mg', '0', '0', 200, 60, 1, NULL, NULL, 'active', '2020-02-29 17:41:25', '2020-02-29 17:41:25', 'Feb 29, 2020', '11:41:25 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(51, 'Azithromycin 250mg', '0', '0', 200, 100, 1, NULL, NULL, 'active', '2020-02-29 17:42:24', '2020-02-29 17:42:24', 'Feb 29, 2020', '11:42:24 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(52, 'Azithromycin 500mg', '0', '0', 200, 200, 1, NULL, NULL, 'active', '2020-02-29 17:42:54', '2020-02-29 17:42:54', 'Feb 29, 2020', '11:42:54 PM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(53, 'Baclofen', '0', '0', 200, 0, 1, NULL, NULL, 'active', '2020-02-29 17:43:39', '2020-02-29 17:43:39', 'Feb 29, 2020', '11:43:39 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(54, 'Benzhexol 5mg (Artane)', '0', '0', 200, 5, 1, NULL, NULL, 'active', '2020-02-29 17:45:02', '2020-02-29 17:45:02', 'Feb 29, 2020', '11:45:02 PM', 'drug.jpg', 8, 16, 7, 7, '4', '0', 0, 3, 4),
(55, 'Bicalutamide 50mg', '0', '0', 200, 300, 1, NULL, NULL, 'active', '2020-02-29 17:46:14', '2020-02-29 17:46:14', 'Feb 29, 2020', '11:46:14 PM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(56, 'Bisacodyl 5mg (Ducolax)', '0', '0', 200, 10, 1, NULL, NULL, 'active', '2020-02-29 17:47:01', '2020-02-29 17:47:01', 'Feb 29, 2020', '11:47:01 PM', 'drug.jpg', 8, 30, 7, 7, '4', '0', 0, 3, 4),
(57, 'Bisacodyl Suppositories (Ducolax)', '0', '0', 200, 200, 1, NULL, NULL, 'active', '2020-02-29 17:47:38', '2020-02-29 17:47:38', 'Feb 29, 2020', '11:47:38 PM', 'drug.jpg', 8, 30, 7, 7, '4', '0', 0, 3, 4),
(58, 'Bromazepam 1.5mg (Lexotan)', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 17:51:52', '2020-02-29 17:51:52', 'Feb 29, 2020', '11:51:52 PM', 'drug.jpg', 8, 49, 7, 7, '4', '0', 0, 3, 4),
(59, 'Bromazepam 3mg (Lexotan)', '0', '0', 30, 60, 1, NULL, NULL, 'active', '2020-02-29 17:52:38', '2020-02-29 17:52:38', 'Feb 29, 2020', '11:52:38 PM', 'drug.jpg', 8, 49, 7, 7, '4', '0', 0, 3, 4),
(60, 'Bromocriptine 2.5mg', '0', '0', 30, 85, 1, NULL, NULL, 'active', '2020-02-29 17:53:45', '2020-02-29 17:53:45', 'Feb 29, 2020', '11:53:45 PM', 'drug.jpg', 8, 38, 7, 7, '4', '0', 0, 3, 4),
(61, 'CAC 100mg', '0', '0', 30, 180, 1, NULL, NULL, 'active', '2020-02-29 17:54:52', '2020-02-29 17:54:52', 'Feb 29, 2020', '11:54:52 PM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(62, 'Cadesartan 8mg', '0', '0', 30, 190, 1, NULL, NULL, 'active', '2020-02-29 17:55:51', '2020-02-29 17:55:51', 'Feb 29, 2020', '11:55:51 PM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(63, 'Calcium Carbonate', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 18:09:44', '2020-02-29 18:09:44', 'Mar 1, 2020', '12:09:44 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(64, 'Calcium Effervescent', '0', '0', 30, 100, 1, NULL, NULL, 'active', '2020-02-29 18:11:19', '2020-02-29 18:11:19', 'Mar 1, 2020', '12:11:19 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(65, 'Calcium Lactate 300mg', '0', '0', 30, 3, 1, NULL, NULL, 'active', '2020-02-29 18:12:02', '2020-02-29 18:12:02', 'Mar 1, 2020', '12:12:02 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(66, 'Carbamazepine 200mg (Tegretol)', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 18:16:10', '2020-02-29 18:16:10', 'Mar 1, 2020', '12:16:10 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(67, 'Carbamazepine CR', '0', '0', 30, 100, 1, NULL, NULL, 'active', '2020-02-29 18:18:26', '2020-02-29 18:18:26', 'Mar 1, 2020', '12:18:26 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(68, 'Carbimazole 5mg', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 18:19:04', '2020-02-29 18:19:04', 'Mar 1, 2020', '12:19:04 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(69, 'Carvedilol 12.5mg', '0', '0', 30, 50, 1, NULL, NULL, 'active', '2020-02-29 18:20:42', '2020-02-29 18:20:42', 'Mar 1, 2020', '12:20:42 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(70, 'Carvedilol 3.125mg', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 18:21:36', '2020-02-29 18:21:36', 'Mar 1, 2020', '12:21:36 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(71, 'Carvedilol 6.125mg', '0', '0', 30, 40, 1, NULL, NULL, 'active', '2020-02-29 18:22:16', '2020-02-29 18:22:16', 'Mar 1, 2020', '12:22:16 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(72, 'Captopril 25mg', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 18:22:55', '2020-02-29 18:22:55', 'Mar 1, 2020', '12:22:55 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(73, 'Cefixime 400mg', '0', '0', 30, 120, 1, NULL, NULL, 'active', '2020-02-29 18:23:44', '2020-02-29 18:23:44', 'Mar 1, 2020', '12:23:44 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(74, 'Cefuroxime 500mg', '0', '0', 30, 120, 1, NULL, NULL, 'active', '2020-02-29 18:24:32', '2020-02-29 18:24:32', 'Mar 1, 2020', '12:24:32 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(75, 'Centrum silver', '0', '0', 30, 50, 1, NULL, NULL, 'active', '2020-02-29 18:30:57', '2020-02-29 18:30:57', 'Mar 1, 2020', '12:30:57 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(76, 'Cetrizine 10mg', '0', '0', 30, 25, 1, NULL, NULL, 'active', '2020-02-29 18:32:32', '2020-02-29 18:32:32', 'Mar 1, 2020', '12:32:32 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(77, 'Chlorpheniramine 4mg (Piriton)', '0', '0', 30, 2, 1, NULL, NULL, 'active', '2020-02-29 18:33:51', '2020-02-29 18:33:51', 'Mar 1, 2020', '12:33:51 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(78, 'Chlorpromazine 100mg (Largatil)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 18:35:08', '2020-02-29 18:35:08', 'Mar 1, 2020', '12:35:08 AM', 'drug.jpg', 8, 16, 7, 7, '4', '0', 0, 3, 4),
(79, 'Chlorpropamide 250mg (Diabenese)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 18:39:00', '2020-02-29 18:39:00', 'Mar 1, 2020', '12:39:00 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(80, 'Cholecalciferol 400 i.u (Vitamin D3)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 18:40:47', '2020-02-29 18:40:47', 'Mar 1, 2020', '12:40:47 AM', 'drug.jpg', 8, 36, 7, 7, '4', '0', 0, 3, 4),
(81, 'Chymoral', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 18:42:21', '2020-02-29 18:42:21', 'Mar 1, 2020', '12:42:21 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(82, 'Cimetidine 200mg (Tagamet)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 18:44:45', '2020-02-29 18:44:45', 'Mar 1, 2020', '12:44:45 AM', 'drug.jpg', 8, 15, 7, 7, '4', '0', 0, 3, 4),
(83, 'Cinnarizine 25mg (Stugeron)', '0', '0', 30, 40, 1, NULL, NULL, 'active', '2020-02-29 18:46:08', '2020-02-29 18:46:08', 'Mar 1, 2020', '12:46:08 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(84, 'Ciprofloxacin 500mg (Ciprotab)', '0', '0', 30, 40, 1, NULL, NULL, 'active', '2020-02-29 18:47:48', '2020-02-29 18:47:48', 'Mar 1, 2020', '12:47:48 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(85, 'Clarithromycin 500mg', '0', '0', 30, 120, 1, NULL, NULL, 'active', '2020-02-29 18:48:54', '2020-02-29 18:48:54', 'Mar 1, 2020', '12:48:54 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(86, 'Clindamycin 300mg', '0', '0', 30, 200, 1, NULL, NULL, 'active', '2020-02-29 18:49:56', '2020-02-29 18:49:56', 'Mar 1, 2020', '12:49:56 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(87, 'Clindamycin 150mg', '0', '0', 30, 100, 1, NULL, NULL, 'active', '2020-02-29 18:50:20', '2020-02-29 18:50:20', 'Mar 1, 2020', '12:50:20 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(88, 'Clomiphene Citrate 50mg (Generic/Branded)', '0', '0', 30, 350, 1, NULL, NULL, 'active', '2020-02-29 18:52:11', '2020-02-29 18:52:11', 'Mar 1, 2020', '12:52:11 AM', 'drug.jpg', 8, 18, 7, 7, '4', '0', 0, 3, 4),
(89, 'Clopidogrel 75', '0', '0', 30, 60, 1, NULL, NULL, 'active', '2020-02-29 19:15:18', '2020-02-29 19:15:18', 'Mar 1, 2020', '01:15:18 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(90, 'Clotrimazole Pessaries 100mg (Canesten)', '0', '0', 30, 150, 1, NULL, NULL, 'active', '2020-02-29 19:17:56', '2020-02-29 19:17:56', 'Mar 1, 2020', '01:17:56 AM', 'drug.jpg', 8, 22, 7, 7, '4', '0', 0, 3, 4),
(91, 'Cloxacillin 500mg', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 19:18:53', '2020-02-29 19:18:53', 'Mar 1, 2020', '01:18:53 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(92, 'C0-Amiloride (Moduretic)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 19:20:04', '2020-02-29 19:20:04', 'Mar 1, 2020', '01:20:04 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(93, 'Cotrimoxazole 480mg (Septrin)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 19:21:27', '2020-02-29 19:21:27', 'Mar 1, 2020', '01:21:27 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(94, 'Danazole 200mg', '0', '0', 30, 250, 1, NULL, NULL, 'active', '2020-02-29 19:22:51', '2020-02-29 19:22:51', 'Mar 1, 2020', '01:22:51 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(95, 'Dequadin Lozenges 250mg', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 19:24:18', '2020-02-29 19:24:18', 'Mar 1, 2020', '01:24:18 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(96, 'Dexamethazone', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 19:25:22', '2020-02-29 19:25:22', 'Mar 1, 2020', '01:25:22 AM', 'drug.jpg', 8, 40, 7, 7, '4', '0', 0, 3, 4),
(97, 'Diazepam 5mg (Valium)', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 19:26:36', '2020-02-29 19:26:36', 'Mar 1, 2020', '01:26:36 AM', 'drug.jpg', 8, 49, 7, 7, '4', '0', 0, 3, 4),
(98, 'Diclofenac Potassium 50mg (Cataflam)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 19:28:08', '2020-02-29 19:28:08', 'Mar 1, 2020', '01:28:08 AM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(99, 'Dicynone 250mg', '0', '0', 30, 120, 1, NULL, NULL, 'active', '2020-02-29 19:28:59', '2020-02-29 19:28:59', 'Mar 1, 2020', '01:28:59 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(100, 'Dicynone 500mg', '0', '0', 30, 240, 1, NULL, NULL, 'active', '2020-02-29 19:30:31', '2020-02-29 19:30:31', 'Mar 1, 2020', '01:30:31 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(101, 'Diethylcarbamazine 50mg (Banocide)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 19:31:49', '2020-02-29 19:31:49', 'Mar 1, 2020', '01:31:49 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(102, 'Digoxin 250mg', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 19:32:40', '2020-02-29 19:32:40', 'Mar 1, 2020', '01:32:40 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(103, 'Dihydrocodeine 30mg (DF-118)', '0', '0', 30, 100, 1, NULL, NULL, 'active', '2020-02-29 19:34:26', '2020-02-29 19:34:26', 'Mar 1, 2020', '01:34:26 AM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(104, 'Diltiazem 60mg', '0', '0', 30, 150, 1, NULL, NULL, 'active', '2020-02-29 19:36:22', '2020-02-29 19:36:22', 'Mar 1, 2020', '01:36:22 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(105, 'Doxycycline 100mg', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 19:37:18', '2020-02-29 19:37:18', 'Mar 1, 2020', '01:37:18 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(106, 'Eproxen 500mg', '0', '0', 30, 130, 1, NULL, NULL, 'active', '2020-02-29 19:38:04', '2020-02-29 19:38:04', 'Mar 1, 2020', '01:38:04 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(107, 'Ergometrine 500mg', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 19:39:46', '2020-02-29 19:39:46', 'Mar 1, 2020', '01:39:46 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(108, 'Erthromycin 250mg', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 19:40:53', '2020-02-29 19:40:53', 'Mar 1, 2020', '01:40:53 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(109, 'Erthromycin 500mg', '0', '0', 30, 40, 1, NULL, NULL, 'active', '2020-02-29 19:41:24', '2020-02-29 19:41:24', 'Mar 1, 2020', '01:41:23 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(110, 'Exforge (Amilodipine/Valsartan/HCT/10/160/12.5mg', '0', '0', 30, 10350, 1, NULL, NULL, 'active', '2020-02-29 19:43:39', '2020-02-29 19:43:39', 'Mar 1, 2020', '01:43:39 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(111, 'Eye Antioxidant', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 19:44:31', '2020-02-29 19:44:31', 'Mar 1, 2020', '01:44:31 AM', 'drug.jpg', 8, 17, 7, 7, '4', '0', 0, 3, 4),
(112, 'Ferrotone', '0', '0', 30, 25, 1, NULL, NULL, 'active', '2020-02-29 19:45:15', '2020-02-29 19:45:15', 'Mar 1, 2020', '01:45:15 AM', 'drug.jpg', 8, 39, 7, 7, '4', '0', 0, 3, 4),
(113, 'Ferrous Sulphate 200mg', '0', '0', 30, 2, 1, NULL, NULL, 'active', '2020-02-29 19:46:03', '2020-02-29 19:46:03', 'Mar 1, 2020', '01:46:03 AM', 'drug.jpg', 8, 39, 7, 7, '4', '0', 0, 3, 4),
(114, 'Fluconazole 200mg (Flucamed)', '0', '0', 30, 80, 1, NULL, NULL, 'active', '2020-02-29 19:47:21', '2020-02-29 19:47:21', 'Mar 1, 2020', '01:47:21 AM', 'drug.jpg', 8, 22, 7, 7, '4', '0', 0, 3, 4),
(115, 'Fluconazole 50mg (Flucamed)', '0', '0', 30, 40, 1, NULL, NULL, 'active', '2020-02-29 19:47:45', '2020-02-29 19:47:45', 'Mar 1, 2020', '01:47:45 AM', 'drug.jpg', 8, 22, 7, 7, '4', '0', 0, 3, 4),
(116, 'Fluoxetine 20mg', '0', '0', 30, 100, 1, NULL, NULL, 'active', '2020-02-29 19:48:44', '2020-02-29 19:48:44', 'Mar 1, 2020', '01:48:44 AM', 'drug.jpg', 8, 35, 7, 7, '4', '0', 0, 3, 4),
(117, 'Flutamide 250mg', '0', '0', 30, 100, 1, NULL, NULL, 'active', '2020-02-29 19:49:25', '2020-02-29 19:49:25', 'Mar 1, 2020', '01:49:25 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(118, 'Frusemide 40mg (Lasix)', '0', '0', 30, 5, 1, NULL, NULL, 'active', '2020-02-29 19:51:22', '2020-02-29 19:51:22', 'Mar 1, 2020', '01:51:21 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(119, 'Galvus (Vildagliptin 50mg) 28 tab/Pack', '0', '0', 30, 6400, 1, NULL, NULL, 'active', '2020-02-29 19:53:22', '2020-02-29 19:53:22', 'Mar 1, 2020', '01:53:22 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(120, 'Ginsomin', '0', '0', 30, 90, 1, NULL, NULL, 'active', '2020-02-29 19:54:42', '2020-02-29 19:54:42', 'Mar 1, 2020', '01:54:42 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(121, 'Glibenclamide 5mg (Daonil)', '0', '0', 30, 12, 1, NULL, NULL, 'active', '2020-02-29 19:55:48', '2020-02-29 19:55:48', 'Mar 1, 2020', '01:55:48 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(122, 'Gliclazide 30mg (Diamicron)', '0', '0', 30, 70, 1, NULL, NULL, 'active', '2020-02-29 19:56:49', '2020-02-29 19:56:49', 'Mar 1, 2020', '01:56:49 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(123, 'Glimepiride 2mg', '0', '0', 30, 50, 1, NULL, NULL, 'active', '2020-02-29 19:57:51', '2020-02-29 19:57:51', 'Mar 1, 2020', '01:57:51 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(124, 'Glimepiride 4mg', '0', '0', 30, 80, 1, NULL, NULL, 'active', '2020-02-29 19:58:29', '2020-02-29 19:58:29', 'Mar 1, 2020', '01:58:29 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(125, 'Griseofulvin 500mg (Fulcin)', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 19:59:52', '2020-02-29 19:59:52', 'Mar 1, 2020', '01:59:52 AM', 'drug.jpg', 8, 22, 7, 7, '4', '0', 0, 3, 4),
(126, 'Haloperidol 5mg', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 20:00:35', '2020-02-29 20:00:35', 'Mar 1, 2020', '02:00:35 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(127, 'Healbatic', '0', '0', 30, 120, 1, NULL, NULL, 'active', '2020-02-29 20:01:10', '2020-02-29 20:01:10', 'Mar 1, 2020', '02:01:10 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(128, 'Hydrallazine 25mg (Apresoline)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 20:02:24', '2020-02-29 20:02:24', 'Mar 1, 2020', '02:02:24 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(129, 'Hydrochlorothiazide 25mg (Esidrex)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 20:04:16', '2020-02-29 20:04:16', 'Mar 1, 2020', '02:04:16 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(130, 'Hydrochlorothiazide 50mg (Esidrex)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 20:04:46', '2020-02-29 20:04:46', 'Mar 1, 2020', '02:04:46 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(131, 'Hydroxy Urea (30)', '0', '0', 30, 2700, 1, NULL, NULL, 'active', '2020-02-29 20:05:41', '2020-02-29 20:05:41', 'Mar 1, 2020', '02:05:41 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(132, 'Hyoscine Butylbromide 10mg (Buscopan)', '0', '0', 30, 15, 1, NULL, NULL, 'active', '2020-02-29 20:06:41', '2020-02-29 20:06:41', 'Mar 1, 2020', '02:06:41 AM', 'drug.jpg', 8, 47, 7, 7, '4', '0', 0, 3, 4),
(133, 'Ibuprofen 200mg', '0', '0', 30, 5, 1, NULL, NULL, 'active', '2020-02-29 20:08:13', '2020-02-29 20:08:13', 'Mar 1, 2020', '02:08:13 AM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(134, 'Ibuprofen 400mg', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 20:08:37', '2020-02-29 20:08:37', 'Mar 1, 2020', '02:08:37 AM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(135, 'Indapamide 1.5mg', '0', '0', 30, 110, 1, NULL, NULL, 'active', '2020-02-29 20:09:50', '2020-02-29 20:09:50', 'Mar 1, 2020', '02:09:50 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(136, 'Indapamide + Amlodipine 5mg', '0', '0', 30, 150, 1, NULL, NULL, 'active', '2020-02-29 20:10:44', '2020-02-29 20:10:44', 'Mar 1, 2020', '02:10:44 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(137, 'Indapamide + Amlodipine 10mg', '0', '0', 30, 170, 1, NULL, NULL, 'active', '2020-02-29 20:11:09', '2020-02-29 20:11:09', 'Mar 1, 2020', '02:11:09 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(138, 'Irbesartan 150mg', '0', '0', 30, 210, 1, NULL, NULL, 'active', '2020-02-29 20:11:49', '2020-02-29 20:11:49', 'Mar 1, 2020', '02:11:49 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(139, 'Irbesartan 300mg', '0', '0', 30, 250, 1, NULL, NULL, 'active', '2020-02-29 20:12:27', '2020-02-29 20:12:27', 'Mar 1, 2020', '02:12:27 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(140, 'Irbesartan/HCT300mg/2.5mg', '0', '0', 30, 250, 1, NULL, NULL, 'active', '2020-02-29 20:13:18', '2020-02-29 20:13:18', 'Mar 1, 2020', '02:13:18 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(141, 'Irbesartan+Amilidipine 300mg/5mg', '0', '0', 30, 280, 1, NULL, NULL, 'active', '2020-02-29 20:14:11', '2020-02-29 20:14:11', 'Mar 1, 2020', '02:14:11 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(142, 'Itraconizole 100mg', '0', '0', 30, 200, 1, NULL, NULL, 'active', '2020-02-29 20:15:00', '2020-02-29 20:15:00', 'Mar 1, 2020', '02:15:00 AM', 'drug.jpg', 8, 22, 7, 7, '4', '0', 0, 3, 4),
(143, 'Ivermectin 3mg', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 20:16:16', '2020-02-29 20:16:16', 'Mar 1, 2020', '02:16:16 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(144, 'Izosaorbid 5mg', '0', '0', 30, 45, 1, NULL, NULL, 'active', '2020-02-29 20:17:38', '2020-02-29 20:17:38', 'Mar 1, 2020', '02:17:38 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(145, 'Ketoconazole 200mg (Nizoral)', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 20:19:17', '2020-02-29 20:19:17', 'Mar 1, 2020', '02:19:17 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(146, 'Ketoprofen 200mg (Ketovail)', '0', '0', 30, 80, 1, NULL, NULL, 'active', '2020-02-29 20:20:30', '2020-02-29 20:20:30', 'Mar 1, 2020', '02:20:30 AM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(147, 'Labetalol 200mg', '0', '0', 30, 140, 1, NULL, NULL, 'active', '2020-02-29 20:22:00', '2020-02-29 20:22:00', 'Mar 1, 2020', '02:22:00 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(148, 'Levamisole 50mg (Ketrax)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 20:23:18', '2020-02-29 20:23:18', 'Mar 1, 2020', '02:23:18 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(149, 'Levofloxacin 500mg', '0', '0', 30, 60, 1, NULL, NULL, 'active', '2020-02-29 20:24:20', '2020-02-29 20:24:20', 'Mar 1, 2020', '02:24:20 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(150, 'Levothyroxine 100mg (Synthroid)', '0', '0', 30, 60, 1, NULL, NULL, 'active', '2020-02-29 20:25:26', '2020-02-29 20:25:26', 'Mar 1, 2020', '02:25:26 AM', 'drug.jpg', 8, 37, 7, 7, '4', '0', 0, 3, 4),
(151, 'Lisinopril 10mg (Zestril)', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 20:26:39', '2020-02-29 20:26:39', 'Mar 1, 2020', '02:26:39 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(152, 'Lisinopril 5mg (Zestril)', '0', '0', 30, 15, 1, NULL, NULL, 'active', '2020-02-29 20:26:59', '2020-02-29 20:26:59', 'Mar 1, 2020', '02:26:59 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(153, 'Livolin Forte', '0', '0', 30, 90, 1, NULL, NULL, 'active', '2020-02-29 20:27:52', '2020-02-29 20:27:52', 'Mar 1, 2020', '02:27:52 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(154, 'Loperamide 2mg', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 20:29:13', '2020-02-29 20:29:13', 'Mar 1, 2020', '02:29:13 AM', 'drug.jpg', 8, 29, 7, 7, '4', '0', 0, 3, 4),
(155, 'Loratadine 10mg', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 20:30:14', '2020-02-29 20:30:14', 'Mar 1, 2020', '02:30:14 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(156, 'Losartan 50mg', '0', '0', 30, 80, 1, NULL, NULL, 'active', '2020-02-29 20:30:49', '2020-02-29 20:30:49', 'Mar 1, 2020', '02:30:49 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(157, 'Mebendazole 100mg (Vermox)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 20:32:46', '2020-02-29 20:32:46', 'Mar 1, 2020', '02:32:46 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(158, 'Mesterolone 25mg (Proviron)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 20:34:21', '2020-02-29 20:34:21', 'Mar 1, 2020', '02:34:21 AM', 'drug.jpg', 8, 41, 7, 7, '4', '0', 0, 3, 4),
(159, 'Metformin 1000mg (Glucophage)', '0', '0', 30, 0, 1, NULL, NULL, 'active', '2020-02-29 20:35:38', '2020-02-29 20:35:38', 'Mar 1, 2020', '02:35:38 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(160, 'Metformin 500mg (Glucophage)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 20:36:02', '2020-02-29 20:36:02', 'Mar 1, 2020', '02:36:02 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(161, 'Metformin 1g SR (PANFOR SR)', '0', '0', 30, 45, 1, NULL, NULL, 'active', '2020-02-29 20:36:56', '2020-02-29 20:36:56', 'Mar 1, 2020', '02:36:56 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(162, 'Metformin 500 (PANFOR SR)', '0', '0', 30, 30, 1, NULL, NULL, 'active', '2020-02-29 20:37:22', '2020-02-29 20:37:22', 'Mar 1, 2020', '02:37:22 AM', 'drug.jpg', 8, 25, 7, 7, '4', '0', 0, 3, 4),
(163, 'Methyldopa 250mg (Aldomet)', '0', '0', 30, 20, 1, NULL, NULL, 'active', '2020-02-29 20:38:40', '2020-02-29 20:38:40', 'Mar 1, 2020', '02:38:40 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(164, 'Metoclopramide 10mg (Plasil)', '0', '0', 30, 10, 1, NULL, NULL, 'active', '2020-02-29 20:40:28', '2020-02-29 20:40:28', 'Mar 1, 2020', '02:40:28 AM', 'drug.jpg', 8, 34, 7, 7, '4', '0', 0, 3, 4),
(165, 'Metronidazole 200mg (Flagyl)', '0', '0', 30, 5, 1, NULL, NULL, 'active', '2020-02-29 20:42:39', '2020-02-29 20:42:39', 'Mar 1, 2020', '02:42:39 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(166, 'Metroprolol (Betalok) 25mg', '0', '0', 30, 150, 1, NULL, NULL, 'active', '2020-02-29 20:43:41', '2020-02-29 20:43:41', 'Mar 1, 2020', '02:43:41 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(167, 'Metroprolol (Betalok) 50mg', '0', '0', 30, 200, 1, NULL, NULL, 'active', '2020-02-29 20:44:01', '2020-02-29 20:44:01', 'Mar 1, 2020', '02:44:01 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(168, 'Misoprostol 200mg', '0', '0', 30, 110, 1, NULL, NULL, 'active', '2020-02-29 20:45:24', '2020-02-29 20:45:24', 'Mar 1, 2020', '02:45:24 AM', 'drug.jpg', 8, 20, 7, 7, '4', '0', 0, 3, 4),
(169, 'Mist Magnesium Trisilicate (Gelusil)', '0', '0', 5, 5, 1, NULL, NULL, 'active', '2020-02-29 20:51:34', '2020-02-29 20:51:34', 'Mar 1, 2020', '02:51:34 AM', 'drug.jpg', 8, 51, 7, 7, '4', '0', 0, 3, 4),
(170, 'Multivitamins', '0', '0', 5, 2, 1, NULL, NULL, 'active', '2020-02-29 20:52:14', '2020-02-29 20:52:14', 'Mar 1, 2020', '02:52:14 AM', 'drug.jpg', 8, 36, 7, 7, '4', '0', 0, 3, 4),
(171, 'Naproxen 500mg', '0', '0', 5, 60, 1, NULL, NULL, 'active', '2020-02-29 20:54:03', '2020-02-29 20:54:03', 'Mar 1, 2020', '02:54:03 AM', 'drug.jpg', 8, 9, 7, 7, '4', '0', 0, 3, 4),
(172, 'Nebivolol/HCT 5mg/12.5mg', '0', '0', 5, 90, 1, NULL, NULL, 'active', '2020-02-29 20:55:06', '2020-02-29 20:55:06', 'Mar 1, 2020', '02:55:06 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(173, 'Nebivolol 5mg', '0', '0', 5, 90, 1, NULL, NULL, 'active', '2020-02-29 20:55:39', '2020-02-29 20:55:39', 'Mar 1, 2020', '02:55:39 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(174, 'Neomycin 500mg', '0', '0', 5, 60, 1, NULL, NULL, 'active', '2020-02-29 20:59:19', '2020-02-29 20:59:19', 'Mar 1, 2020', '02:59:19 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(175, 'Neurovite Forte (Neurobion)', '0', '0', 5, 80, 1, NULL, NULL, 'active', '2020-02-29 21:00:08', '2020-02-29 21:00:08', 'Mar 1, 2020', '03:00:08 AM', 'drug.jpg', 8, 19, 7, 7, '4', '0', 0, 3, 4),
(176, 'Neurocalm 75mg', '0', '0', 150, 150, 1, NULL, NULL, 'active', '2020-02-29 21:04:40', '2020-02-29 21:04:40', 'Mar 1, 2020', '03:04:40 AM', 'drug.jpg', 8, 52, 7, 7, '4', '0', 0, 3, 4),
(177, 'Nifedipine 20mg', '0', '0', 150, 10, 1, NULL, NULL, 'active', '2020-02-29 21:09:17', '2020-02-29 21:09:17', 'Mar 1, 2020', '03:09:17 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(178, 'Nifedipine 60mg', '0', '0', 150, 60, 1, NULL, NULL, 'active', '2020-02-29 21:10:07', '2020-02-29 21:10:07', 'Mar 1, 2020', '03:10:07 AM', 'drug.jpg', 8, 10, 7, 7, '4', '0', 0, 3, 4),
(179, 'Nitrofurantoin 100mg (NFT)', '0', '0', 150, 10, 1, NULL, NULL, 'active', '2020-02-29 21:11:33', '2020-02-29 21:11:33', 'Mar 1, 2020', '03:11:33 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(180, 'Ofloxacin 200mg', '0', '0', 150, 40, 1, NULL, NULL, 'active', '2020-02-29 21:13:30', '2020-02-29 21:13:30', 'Mar 1, 2020', '03:13:30 AM', 'drug.jpg', 8, 11, 7, 7, '4', '0', 0, 3, 4),
(181, 'Olanzepine 10mg', '0', '0', 150, 30, 1, NULL, NULL, 'active', '2020-02-29 21:14:30', '2020-02-29 21:14:30', 'Mar 1, 2020', '03:14:30 AM', 'drug.jpg', 8, 16, 7, 7, '4', '0', 0, 3, 4),
(182, 'Omeprazol 20mg (Meprasil)', '0', '0', 150, 20, 1, NULL, NULL, 'active', '2020-02-29 21:16:48', '2020-02-29 21:16:48', 'Mar 1, 2020', '03:16:47 AM', 'drug.jpg', 8, 15, 7, 7, '4', '0', 0, 3, 4),
(183, 'jklflkd', '0', '0', 120, 30, 4, NULL, NULL, 'active', '2020-03-07 01:42:16', '2020-03-07 01:42:16', 'Mar 7, 2020', '02:42:15 AM', 'drug.jpg', 1, 20, 11, 7, '1', '10', 10, 3, 1),
(184, 'uyyuyu', '0', '0', 335, 67, 5, NULL, NULL, 'active', '2020-03-07 01:49:11', '2020-03-07 01:49:11', 'Mar 7, 2020', '02:49:11 AM', '1583693395.png', 1, 19, 4, 7, '1', '10', NULL, 3, 1),
(185, 'uyyu', '0', '0', 335, 67, 5, NULL, NULL, 'active', '2020-03-07 01:52:18', '2020-03-07 01:52:18', 'Mar 7, 2020', '02:52:18 AM', '1583545938.jpeg', 1, 19, 4, 7, '1', '10', 0, 3, 1),
(186, 'uyyughg', '0', '0', 335, 67, 5, NULL, NULL, 'active', '2020-03-07 01:58:57', '2020-03-07 01:58:57', 'Mar 7, 2020', '02:58:57 AM', '1583546337.jpeg', 1, 19, 4, 7, '1', '10', 0, 3, 1),
(187, 'uyyugjh', '0', '0', 335, 67, 5, NULL, NULL, 'active', '2020-03-07 02:00:09', '2020-03-07 02:00:09', 'Mar 7, 2020', '03:00:09 AM', '1583546409.jpeg', 1, 19, 4, 7, '1', '10', 0, 3, 1),
(188, 'tax remove item', '20', '15', 12, 12, 1, NULL, NULL, 'active', '2020-03-11 13:59:13', '2020-03-11 13:59:13', 'Mar 11, 2020', '02:59:13 PM', 'drug.jpg', 1, 9, 1, 7, '1', '0', 0, 3, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item_details`
--
ALTER TABLE `item_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `generic_name` (`generic_name`),
  ADD KEY `item_details_item_unit_id_index` (`item_unit_id`),
  ADD KEY `item_details_item_category_id_index` (`item_category_id`),
  ADD KEY `item_details_item_type_id_index` (`item_type_id`),
  ADD KEY `item_details_manufacturer_id_index` (`manufacturer_id`),
  ADD KEY `item_details_tax_id_index` (`tax_id`),
  ADD KEY `item_details_discount_id_index` (`discount_id`),
  ADD KEY `item_details_staff_id_index` (`staff_id`),
  ADD KEY `shelve_id` (`shelve_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;