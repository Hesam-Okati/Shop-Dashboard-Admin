-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2025 at 04:48 PM
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
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(100) NOT NULL,
  `title` String(120) NOT NULL,
  `descs` text NOT NULL,
  `rate` int(100) NOT NULL,
  `date` String(100) NOT NULL,
  `unset` String(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `title`, `descs`, `rate`, `date`, `unset`) VALUES
(6, 'Products', 'Your Products isnot Expensive.', 5, '10-2-25', '0'),
(7, 'Products', 'Your Products isnot Expensive.', 5, '10-2-25', '0'),
(8, 'Products', 'Your Products isnot Expensive.', 5, '10-2-25', '0'),
(9, 'Products', 'Your Products isnot Expensive.', 5, '10-2-25', '1'),
(10, 'Products', 'Your Products isnot Expensive.', 5, '10-2-25', '1'),
(11, 'Products', 'Your Products isnot Expensive.', 5, '10-2-25', '1');

-- --------------------------------------------------------

--
-- Table structure for table `mail`
--

CREATE TABLE `mail` (
  `id` int(100) NOT NULL,
  `title` String(120) NOT NULL,
  `descs` text NOT NULL,
  `auther` String(100) NOT NULL,
  `date` String(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `massage`
--

CREATE TABLE `massage` (
  `id` int(100) NOT NULL,
  `type` String(100) NOT NULL,
  `content` String(100) NOT NULL,
  `date` String(100) NOT NULL
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
  `title` String(100) NOT NULL,
  `img_url` String(100) NOT NULL,
  `count` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `status` String(100) NOT NULL,
  `isInstock` String(100) NOT NULL,
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
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `id` int(100) NOT NULL,
  `product_ID` int(120) NOT NULL,
  `date` String(100) NOT NULL,
  `count` int(100) NOT NULL,
  `color` String(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `sale`
--

INSERT INTO `sale` (`id`, `product_ID`, `date`, `count`, `color`) VALUES
(1, 12958, '20-1-2025', 2, 'red'),
(2, 12958, '20-1-2025', 2, 'red'),
(3, 12958, '20-1-2025', 2, 'red');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(100) NOT NULL,
  `Theme_color` String(100) NOT NULL,
  `Site_Name` String(100) NOT NULL
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
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(100) NOT NULL,
  `Transaction_ID` String(120) NOT NULL,
  `Customer` String(100) NOT NULL,
  `Payment_Method` String(100) NOT NULL,
  `date` String(100) NOT NULL,
  `Amount` int(100) NOT NULL,
  `Status` String(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `name` String(100) NOT NULL,
  `familly` String(100) NOT NULL,
  `avatar` String(100) NOT NULL,
  `password` String(100) NOT NULL,
  `email` String(100) NOT NULL
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
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mail`
--
ALTER TABLE `mail`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
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
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `mail`
--
ALTER TABLE `mail`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
