-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2022 at 01:10 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usermanage`
--

-- --------------------------------------------------------

--
-- Table structure for table `khet`
--

CREATE TABLE `khet` (
  `ProvinceID` int(11) NOT NULL,
  `KhetID` int(11) NOT NULL,
  `KhetName` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `khet`
--

INSERT INTO `khet` (`ProvinceID`, `KhetID`, `KhetName`) VALUES
(1, 1, 'bangmod'),
(2, 2, 'banglamong');

-- --------------------------------------------------------

--
-- Table structure for table `khwang`
--

CREATE TABLE `khwang` (
  `ProvinceID` int(11) NOT NULL,
  `KhetID` int(11) NOT NULL,
  `KhwangID` int(11) NOT NULL,
  `KhwangName` int(11) DEFAULT NULL,
  `Zipcode` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `khwangnew`
--

CREATE TABLE `khwangnew` (
  `ProvinceID` int(11) NOT NULL,
  `KhetID` int(11) NOT NULL,
  `KhwangID` int(11) NOT NULL,
  `KhwangName` varchar(100) DEFAULT NULL,
  `Zipcode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `khwangnew`
--

INSERT INTO `khwangnew` (`ProvinceID`, `KhetID`, `KhwangID`, `KhwangName`, `Zipcode`) VALUES
(1, 1, 1, 'test', 10150),
(2, 2, 2, 'test', 11106);

-- --------------------------------------------------------

--
-- Table structure for table `province`
--

CREATE TABLE `province` (
  `ProvinceID` int(10) NOT NULL,
  `ProvinceName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `province`
--

INSERT INTO `province` (`ProvinceID`, `ProvinceName`) VALUES
(1, 'bangkok'),
(2, 'chonburi');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `fist_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `create_by` varchar(100) DEFAULT NULL,
  `create_dete` date DEFAULT NULL,
  `last_update_by` varchar(100) DEFAULT NULL,
  `last_update_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UserName`, `fist_name`, `last_name`, `email`, `address`, `create_by`, `create_dete`, `last_update_by`, `last_update_date`) VALUES
(1, 'nex123', 'nex', 'apiwanchai', 'yintavorn', '1/283', 'admin', '2022-08-04', 'admin', '2022-08-04'),
(2, 'bank123', 'rachata', 'llll', 'oooo1234', 'test', 'admin', '2022-08-03', 'test', '2022-08-04'),
(3, 'test', 'test', 'test', NULL, 'test', NULL, '0000-00-00', 'test', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `khet`
--
ALTER TABLE `khet`
  ADD PRIMARY KEY (`KhetID`),
  ADD KEY `ProvinceID` (`ProvinceID`);

--
-- Indexes for table `khwang`
--
ALTER TABLE `khwang`
  ADD PRIMARY KEY (`KhwangID`),
  ADD UNIQUE KEY `ProvinceID` (`ProvinceID`),
  ADD KEY `KhetID` (`KhetID`);

--
-- Indexes for table `khwangnew`
--
ALTER TABLE `khwangnew`
  ADD PRIMARY KEY (`KhwangID`),
  ADD KEY `ProvinceID` (`ProvinceID`),
  ADD KEY `KhetID` (`KhetID`);

--
-- Indexes for table `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`ProvinceID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `khet`
--
ALTER TABLE `khet`
  ADD CONSTRAINT `khet_ibfk_1` FOREIGN KEY (`ProvinceID`) REFERENCES `province` (`ProvinceID`);

--
-- Constraints for table `khwang`
--
ALTER TABLE `khwang`
  ADD CONSTRAINT `khwang_ibfk_1` FOREIGN KEY (`ProvinceID`) REFERENCES `khet` (`ProvinceID`),
  ADD CONSTRAINT `khwang_ibfk_2` FOREIGN KEY (`KhetID`) REFERENCES `khet` (`KhetID`);

--
-- Constraints for table `khwangnew`
--
ALTER TABLE `khwangnew`
  ADD CONSTRAINT `khwangnew_ibfk_1` FOREIGN KEY (`ProvinceID`) REFERENCES `province` (`ProvinceID`),
  ADD CONSTRAINT `khwangnew_ibfk_2` FOREIGN KEY (`KhetID`) REFERENCES `khet` (`KhetID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
