-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2025 at 04:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `massage`
--

CREATE TABLE `massage` (
  `id` int(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `content` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `massage`
--

INSERT INTO `massage` (`id`, `type`, `content`, `date`) VALUES
(1, 'error', 'A Product Deleted', '2025/1/12'),
(2, 'info', 'A User Have Login in site', '10-10-2025'),
(3, 'success', 'Add a Product', '10-11-2025'),
(4, 'warning', 'Found XSS bug', '10-11-2025');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img_url` varchar(100) NOT NULL,
  `count` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `isInstock` varchar(100) NOT NULL,
  `desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `img_url`, `count`, `price`, `status`, `isInstock`, `desc`) VALUES
(1, 'IPhone 16 Pro Max', './assets/image/lt2.jfif', 12, 2147483647, 'yes', 'yes', 'Test Value'),
(2, 'IPhone 16 Pro Max', './assets/image/lt2.jfif', 121, 1000000000, 'yes', 'yes', 'Test Value');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(100) NOT NULL,
  `Theme_color` varchar(100) NOT NULL,
  `Site_Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `Theme_color`, `Site_Name`) VALUES
(0, '#000', 'Hesam CMS'),
(2, '#000', 'Hesam CMS 2h'),
(3, '#000', 'Hesam CMS 2h'),
(4, '#000', 'Hesam CMS 2h'),
(5, '#000', 'Hesam CMS 2h'),
(6, '#000', 'Hesam CMS 2h'),
(7, '#000', 'Hesam CMS 2h'),
(8, '#000', 'Hesam CMS 2h'),
(9, '#000', 'Hesam CMS 2h'),
(10, '#000', 'Hesam CMS 2h'),
(11, 'darkblue', 'SHOP CMS'),
(12, '#000', 'Hesam CMS');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `familly` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `familly`, `avatar`, `password`, `email`) VALUES
(1, 'He333am', 'Okati', './assets/image/face3.jfif', '1388', 'hesamokati@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `massage`
--
ALTER TABLE `massage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `massage`
--
ALTER TABLE `massage`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
