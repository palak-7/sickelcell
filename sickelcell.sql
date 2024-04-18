-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2024 at 02:21 PM
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
-- Database: `sickelcell`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin table`
--

CREATE TABLE `admin table` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin table`
--

INSERT INTO `admin table` (`id`, `name`, `email`, `password`) VALUES
('SCD2024-0422-ABC123', 'admin', '', 'hello123');

-- --------------------------------------------------------

--
-- Table structure for table `initiatives`
--

CREATE TABLE `initiatives` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `content` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `content`) VALUES
(1, 'Gene Therapy is Approved!', 'December 8, 2023', 'We are very excited to share that today, Dec. 8, the Food and Drug Administration approved two gene therapies to treat sickle cell disease! These potentially curative therapies are the first treatments of their kind available to individuals with SCD. We are heartened by this approval and are proud to support our community during this milestone moment. SCDAA will be releasing a full statement and additional information for patients and caregivers soon.'),
(2, 'The Nod to “Naz” Exhibit', 'March 7, 2024', 'During our 50th Annual National Convention in 2023, SCDAA was proud to exhibit the artwork of Hertz Nazaire at a pop-up exhibit. Known for his advocacy work and “Finding Your Colors” adult coloring book series, Hertz created mixed-media visual art reflective of his personal experiences with pain and sickle cell disease. He died of sickle cell-related complications at the age of 48 in 2021.\r\n\r\nHertz immigrated from Port-au-Prince, Haiti, when he was eight years old. His childhood in Haiti inspired the colors in his large, vibrant paintings, he said. Hertz began painting in New York City, where he lived with his mother before moving to Bridgeport, Connecticut. He studied art at The Art Institute of Fort Lauderdale and University of Bridgeport.\r\n\r\n'),
(3, 'CMO Speaks: Cyberattacks on Health Care Companies', 'March 5, 2024', 'A national cybersecurity incident recently caused certain pharmacy services that affect individuals with sickle cell disease (SCD) and other chronic diseases to shut down. The problems were first reported on February 21 and have so far impacted pharmacies across the country for over a week. The Sickle Cell Disease Association of America, Inc., (SCDAA) condemns these attacks and the extreme strain they place on our health care system and community.\r\n\r\nMany individuals with SCD rely on their pharmacy to stay healthy and functional. Because of these cyberattacks, individuals with sickle cell disease report difficulty getting their pain medication prescriptions filled at certain pharmacy systems. Individuals with SCD are unable to keep a reserve supply of this medication at home due to the Centers for Disease Control and Prevention’s opioid regulations. Those stuck in this loophole are suffering with more days of sickle cell vaso occlusive pain. Individuals with chronic pain who rely on combination therapy to stay functional are suffering disruptions to parts of their Individualized Pain Plan. Patients who take hydroxyurea are experiencing gaps in their daily therapy because prescriptions cannot be filled.\r\n\r\nSome families can switch pharmacies, but they must ask their doctor to rewrite the prescription to send to a different pharmacy. Other families who reside in rural or suburban areas may have fewer pharmacy options or no alternative to the affected pharmacy. Working parents who are already stretched thin trying to manage SCD along with work, childcare, eldercare, etc., might have much more difficulty with these issues.\r\n\r\nSome health care systems have shut down email and other electronic communication channels as each informatics team struggles to limit the spread of the cyberattack into their electronic health records system. This may cause doctors to struggle to know what to do with referral patients.');

-- --------------------------------------------------------

--
-- Table structure for table `pending`
--

CREATE TABLE `pending` (
  `id` varchar(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` int(12) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `pincode` varchar(200) NOT NULL,
  `suffering` varchar(200) NOT NULL,
  `relation` varchar(200) NOT NULL,
  `govt_id` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `pincode` varchar(200) NOT NULL,
  `suffering` varchar(200) NOT NULL,
  `relation` varchar(200) NOT NULL,
  `govt_id` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `phone`, `address`, `city`, `country`, `state`, `pincode`, `suffering`, `relation`, `govt_id`, `password`) VALUES
('95db04d0-dc6f-44b3-8da1-4e4572fe0735', 'abc', 'd', 'abc@gmail.com', '1234567878', 'b-1', 'delhi', 'india', 'delhi', '110085', 'myself', '', '1234567890', '$2a$09$sC7aYL5Bh98PykW9fqVqeOKKjz/rYCjengKBxauWezOjg.84Q2P/C'),
('a2aafed8-0385-4dda-8fd5-84ff8e6ddba4', 'admin', '', 'meenusehgal@gmail.com', '', '', '', '', '', '', '', '', '', '$2a$09$m/H7bkaBLLtuc19IAIAD0.C/54o1WkMH3mpQVjtxIvYrNdFT/qjGS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `initiatives`
--
ALTER TABLE `initiatives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pending`
--
ALTER TABLE `pending`
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
-- AUTO_INCREMENT for table `initiatives`
--
ALTER TABLE `initiatives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
