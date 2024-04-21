-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 07:31 AM
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
-- Table structure for table `sicklecell`
--

CREATE TABLE `sicklecell` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `content` mediumtext NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sicklecell`
--

INSERT INTO `sicklecell` (`id`, `title`, `image`, `content`, `url`) VALUES
(1, 'What is Sickle Cell Disease (SCD)?', '/sicklecell/rbc.jpg', '<p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      Sickle cell disease is an inherited blood disorder that affects\r\n      red blood cells. People with sickle cell disease have red blood\r\n      cells that contain mostly hemoglobin S, an abnormal type of\r\n      hemoglobin. Sometimes these red blood cells become sickle-shaped\r\n      (crescent shaped) and have difficulty passing through small blood\r\n      vessels. When sickle-shaped cells block small blood vessels, less\r\n      blood can reach that part of the body. Tissue that does not\r\n      receive a normal blood flow eventually becomes damaged. This is\r\n      what causes the complications of sickle cell disease. There is\r\n      currently no universal cure for sickle cell disease.\r\n    </span>\r\n  </p>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      Hemoglobin is the main substance of the red blood cell. It helps\r\n      red blood cells carry oxygen from the air in our lungs to all\r\n      parts of the body. Normal red blood cells contain hemoglobin A.\r\n      Normal red blood cells that contain hemoglobin A are soft and\r\n      round and can squeeze through tiny blood tubes (vessels).\r\n      Normally, red blood cells live for about 120 days before new ones\r\n      replace them.\r\n    </span>\r\n  </p>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      People with sickle cell conditions make a different form of\r\n      hemoglobin A called hemoglobin S (S stands for sickle). Red blood\r\n      cells containing mostly hemoglobin S do not live as long as normal\r\n      red blood cells (normally about 16 days). They also become stiff,\r\n      distorted in shape and have difficulty passing through the\r\n      body&rsquo;s small blood vessels. When sickle-shaped cells block\r\n      small blood vessels, less blood can reach that part of the body.\r\n      Parts of the body that don&rsquo;t receive a normal blood flow\r\n      eventually become damaged. This is what causes the complications\r\n      of sickle cell disease&nbsp;although some individuals may be\r\n      eligible for a curative bone marrow transplant.\r\n    </span>\r\n  </p>\r\n  <h2 style=\"text-align: center; color: rgb(0, 0, 0); font-size: 1.5em; line-height: 2;\">\r\n    <span style=\"font-size: 22px; color: rgb(184, 49, 47);\">\r\n      Inheritance\r\n    </span>\r\n  </h2>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      Sickle cell conditions are inherited from parents in much the same\r\n      way as blood type, hair color and texture, eye color and other\r\n      physical traits. The types of hemoglobin a person makes in the red\r\n      blood cells depend upon what hemoglobin genes the person inherits\r\n      from his or her parents. Like most genes, hemoglobin genes are\r\n      inherited in two sets, one from each parent.\r\n    </span>\r\n  </p>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px; color: rgb(184, 49, 47);\">\r\n      Examples:\r\n    </span>\r\n  </p>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      <em>\r\n        If one parent has Sickle Cell Anemia (SS disease) and the other\r\n        is Normal, all of the children will have sickle cell trait.\r\n      </em>\r\n    </span>\r\n  </p>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      <em>\r\n        If one parent has Sickle Cell Anemia (SS) and the other has\r\n        Sickle Cell Trait (AS), there is a 50% chance (or 1 out of 2) of\r\n        having a baby with either sickle cell disease or sickle cell\r\n        trait with <strong>each&nbsp;</strong>pregnancy.\r\n      </em>\r\n    </span>\r\n  </p>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      <em>\r\n        When both parents have Sickle Cell Trait, they have a 25% chance\r\n        (1 of 4) of having a baby with sickle cell disease with{\" \"}\r\n        <strong>each</strong> pregnancy.\r\n      </em>\r\n    </span>\r\n  </p>\r\n  <h2 style=\"text-align: center; color: rgb(0, 0, 0); font-size: 1.5em; line-height: 2;\">\r\n    <span style=\"font-size: 22px; color: rgb(184, 49, 47);\">\r\n      Types of Sickle Cell Disease\r\n    </span>\r\n  </h2>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      There are several types of sickle cell disease. The most common\r\n      are:\r\n    </span>\r\n  </p>\r\n  <ul style=\"text-align: start;color: rgb(0, 0, 0);font-size: 10px;\">\r\n    <li style=\"font-size: 16px; line-height: 2;\">\r\n      Hemoglobin SS Disease, Hemoglobin SC Disease\r\n    </li>\r\n    <li style=\"font-size: 16px; line-height: 2;\">\r\n      Sickle Beta-Plus Thalassemia\r\n    </li>\r\n    <li style=\"font-size: 16px; line-height: 2;\">\r\n      Sickle Beta-Zero Thalassemia.\r\n    </li>\r\n  </ul>\r\n  <p style=\"text-align: start; color: rgb(0, 0, 0); font-size: 10px; line-height: 2;\">\r\n    <span style=\"font-size: 16px;\">\r\n      The majority of individuals with sickle cell disease have\r\n      hemoglobin S, but some make a different type of abnormal\r\n      hemoglobin like hemoglobin C, hemoglobin D, or hemoglobin E. Also,\r\n      some individuals can have sickle cell disease because of\r\n      co-inheritance of beta thalassemia. It is important to speak to\r\n      your physician to understand what type you have.\r\n    </span>\r\n  </p>', 'types'),
(2, 'What is Sickle Cell Trait (SCT)?', '/sicklecell/rbc.jpg', '<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Sickle Cell trait (AS) is an inherited condition in which both hemoglobin A and S are produced in the red blood cells. Sickle cell trait is not a type of sickle cell disease. People with sickle cell trait are generally healthy and often do not know that they have it.<br><img src=\"/sicklecell/img2.jpg\" alt=\"\" width=\"300\" height=\"200\" style=\"float: left; padding-right: 10px\"></span></p>\r\n<h3 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.25rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">How will I know if I have Sickle Cell Disease or Trait?</span></h3>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">A simple blood test, followed by a laboratory technique called Hemoglobin Electrophoresis, will determine the type of hemoglobin you have. When you pass an electric charge through a solution of hemoglobin, distinct hemoglobins move different distances, depending on their composition. This technique differentiates between normal hemoglobin (A), Sickle hemoglobin (S), and other different kinds of hemoglobin (such as C, D, E, etc.). It is important that the testing also includes a complete blood count with assessment of the mean corpuscular volume (MCV).</span></p>', 'complications'),
(3, 'Complications & Treatments', '/sicklecell/rbc.jpg', '<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Medical Problems</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">Sickle cells are destroyed rapidly in the body of people with the disease causing anemia, jaundice and the formation of gallstones.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">The sickle cells also block the flow of blood through vessels resulting in lung tissue damage (acute chest syndrome), pain episodes (commonly in the&nbsp;arms, legs, chest and abdomen), stroke and priapism (painful prolonged&nbsp;and unwanted erection). It also causes damage to most organs including the spleen, kidneys, eyes&nbsp;and liver. Damage to the spleen makes sickle cell disease patients, especially young children, easily infected by certain bacterial.&nbsp;Therefore, any fever in someone with sickle cell disease must be taken very seriously.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Treatment</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">Health maintenance for patients with sickle cell disease starts with early diagnosis, preferably in the newborn period and includes penicillin prophylaxis, vaccination against pneumococcus bacteria and folic acid supplementation.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">Treatment of complications often includes antibiotics, pain management, intravenous fluids, blood transfusion and surgery all backed by psychosocial support. Like all patients with chronic disease patients are best managed in a comprehensive multi-disciplinary program of care.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 20px;\"><em><em>Blood Transfusions</em></em></span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">Blood transfusions help benefit sickle cell disease patients by reducing recurrent pain crises, risk of stroke and other complications. Because red blood cells contain iron, and there is no natural way for the body to eliminate it, patients who receive repeated blood transfusions can accumulate iron in the body until it reaches toxic levels. It is important to remove excess iron from the body, because it can gather in the heart, liver, and other organs and may lead to&nbsp;serious organ damage and even death. Treatments are available to eliminate iron overload (see below).</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 20px;\"><em><em>Hydroxyurea for treating Sickle Cell Disease</em></em></span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">A single randomized clinical&nbsp;trial of 299 patients with SCD demonstrated that compared to placebo, hydroxyurea was associated with lower annual rates of pain crises, pain episodes of acute chest syndrome&nbsp;and need for transfusions. Hydroxyurea was first approved by the FDA for SCD in 1998 and is now available for adults and children with sickle cell anemia.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 20px;\"><em><em>Transfusional Iron Overload</em></em></span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 16px;\">Patients with sickle-cell disease (SCD) receiving chronic transfusions of red blood cells are at risk of developing transfusional iron overload over time. Transfusional iron overload is characterized by an increase of labile plasma iron (i.e., non-transferrin bound iron) in the body, which can lead to functional impairment in vital organs. The organs that are at risk of damage due to iron overload include the liver, heart, pancreas, thyroid, pituitary gland, and other endocrine organs. Buildup of labile plasma iron in these organs can lead to hepatic cirrhosis, cardiomyopathy, diabetes mellitus, hypoparathyroidism, impaired growth, infertility, hypogonadism and even death. The body does not have a way to get rid of iron received from blood transfusions. An agent that chelates iron is therefore needed to get rid of excess iron in the body. There are two agents. One agent is given intravenously and the other is by mouth.</span></p>', 'treatments'),
(4, 'Glossary', '/sicklecell/rbc.jpg', '<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Anemia</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Anemia&nbsp;(uh-NEE-me-uh) is a condition in which your blood has a lower than normal number of red blood cells. Anemia also can occur if your red blood cells don&rsquo;t contain enough hemoglobin (HEE-muh-glow-bin). Hemoglobin is an iron-rich protein that gives blood its red color. This protein helps red blood cells carry oxygen from the lungs to the rest of the body. If you have&nbsp;anemia, your body doesn&rsquo;t get enough oxygen-rich blood. As a result, you may feel tired or weak. You also may have other symptoms, such as shortness of breath, dizziness, or headaches. Severe or long-lasting anemia can damage your heart, brain, and other organs in your body. Very severe anemia may even cause death.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Overview</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Blood is made up of many parts, including red blood cells, white blood cells, platelets (PLATE-lets), and plasma (the fluid portion of blood). Red blood cells are disc-shaped and look like doughnuts without holes in the center. They carry oxygen and remove carbon dioxide (a waste product) from your body. These cells are made in the bone marrow&mdash;a sponge-like tissue inside the bones.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">White blood cells and platelets (PLATE-lets) also are made in the bone marrow. White blood cells help fight infection. Platelets stick together to seal small cuts or breaks on the blood vessel walls and stop bleeding. With some types of anemia, you may have low numbers of all three types of blood cells.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Anemia has three main causes: blood loss, lack of red blood cell production, or high rates of red blood cell destruction. These causes might be the result of diseases, conditions, or other factors&nbsp;such as a hereditary disease.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Outlook</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Many types of anemia can be mild, short term, and easily treated. You can even prevent some types with a healthy diet. Other types can be treated with dietary supplements.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">However, certain types of anemia can be severe, long lasting, and even life threatening if not diagnosed and treated.<br>If you have signs or symptoms of anemia, see your doctor to find out whether you have the condition. Treatment will depend on the cause of the anemia and how severe it is.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Chromosomes</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">In the nucleus of each cell, the DNA molecule is packaged into thread-like structures called chromosomes. Each chromosome is made up of DNA tightly coiled many times around proteins called histones that support its structure.<br>Chromosomes are not visible in the cell&rsquo;s nucleus&mdash;not even under a microscope&mdash;when the cell is not dividing. However, the DNA that makes up chromosomes becomes more tightly packed during cell division and is then visible under a microscope. Most of what researchers know about chromosomes was learned by observing chromosomes during cell division.</span></p>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Each chromosome has a constriction point called the centromere, which divides the chromosome into two sections, or &ldquo;arms.&rdquo; The short arm of the chromosome is labeled the &ldquo;p arm.&rdquo; The long arm of the chromosome is labeled the &ldquo;q arm.&rdquo; The location of the centromere on each chromosome gives the chromosome its characteristic shape, and can be used to help describe the location of specific genes.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Fetal Hemoglobin (Hgb.F)</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">A kind of hemoglobin usually present during fetal (intrauterine) life, which has a different chemical structure from normal adult hemoglobin. After birth, the fetal hemoglobin in the red blood cells is gradually replaced by the adult type of hemoglobin, this process is usually complete during the first 6 months of life.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Gene</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">A Gene is the ultimate unit of inheritance, and is&nbsp;carried by the chromosome. Genes determine our various characteristics such as hair texture, skin color, height, shape of nose, lips, etc., including the kind of hemoglobin in the red blood cells. Genes, which are made up of DNA, act as instructions to make molecules called proteins. In humans, genes vary in size from a few hundred DNA bases to more than 2 million bases. The Human Genome Project has estimated that humans have between 20,000 and 25,000 genes.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Genetic Counseling</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">In genetic counseling, specially-trained professionals help people learn about genetic conditions, find out their chances of being affected by or having a child or other family member with a genetic condition, and make informed decisions about testing and treatment. This communication process between health care provider and client, emphasizes providing accurate and up-to-date information about a genetic disorder in a sensitive and supportive, non-directive manner.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Genetic Mutation</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Genetic mutation is a permanent alteration in the DNA (a change in hereditary characteristics due to a permanent change in a gene) sequence that makes up a gene, such that the sequence differs from what is found in most people. Mutations range in size; they can affect anywhere from a single DNA building block (base pair) to a large segment of a chromosome that includes multiple genes.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Hemoglobin</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">The chemical substance (an iron containing protein) of the red blood cell which carries oxygen to the tissues, and gives the cell its red color.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Hemoglobin Electrophoresis</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">A laboratory technique to determine the type of hemoglobin the individual has. When you pass an electric charge through a solution of hemoglobin, distinct hemoglobins move different distances, depending on their composition. This technique differentiates between usual hemoglobin (A), sickle hemoglobin (S) and many other different kinds of hemoglobin (such as C, D, E, etc.).</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Inherit</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">To receive certain defined characteristics from a parent by transmission of the genes in the egg and sperm.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Red Blood Cell</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">Red blood cells play an important role in your health by carrying fresh oxygen throughout the body. Red blood cells are round with a flattish, indented center, like doughnuts without a hole. These cell, which contain hemoglobin, circulate throughout the body. Your healthcare provider can check on the size, shape, and health of your red blood cells using tests, such as the complete blood count screening.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Sickle Cell Anemia</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">An inherited disorder of the red blood cells in which the hemoglobin (the red oxygen carrying pigment of the cell) is different from the usual type. This unusual hemoglobin results in the production of unusually shaped cells, which do not survive the usual length of time in the blood circulation. Thus, anemia results. Sickle cell anemia is the result of the inheritance of the gene for sickle hemoglobin (S) from both parents.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Sickle Cell Disease</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">The term&nbsp;sickle cell disease&nbsp;(SCD) describes a group of inherited red blood cell disorders. People with SCD have abnormal hemoglobin, called&nbsp;hemoglobin S or&nbsp;sickle hemoglobin, in their red blood cells. People who have SCD inherit two abnormal hemoglobin genes, one from each parent. In all forms of SCD, at least one of the two abnormal genes causes a person&rsquo;s body to make hemoglobin S. When a person has two hemoglobin S genes, Hemoglobin SS, the disease is called sickle cell anemia. This is the most common and often most severe kind of SCD. Other forms of Sickle Cell Disease include SC, CC, S Beta Zero thalassemia, S Beta+ thalassemia, SD, and SE.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Sickle Cell Trait</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">The inheritance of one gene for the usual hemoglobin (A) and one gene for sickle hemoglobin (S). A person who has sickle cell trait (AS) is a carrier of the sickle gene, does not have the disease, does not have painful episodes, and is generally not affected by the sickle hemoglobin.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Thalassemia (Thal)</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">An inherited disorder of a gene in the red blood cells which results in the impaired ability to produce hemoglobin.</span></p>\r\n<h2 style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 1.625rem; line-height: 2;\"><span style=\"font-size: 20px; color: rgb(184, 49, 47);\">Unusual Hemoglobins</span></h2>\r\n<p style=\"text-align: start; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 16px; line-height: 2;\"><span style=\"font-size: 17px;\">In 1989, there were 489 unusual hemoglobins identified. The unusual hemoglobins most commonly seen (frequency in population greater than 1%) are hemoglobins: S (sickle), C, Thal, E, and D (Punjab).</span></p>', 'glossary');

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
-- Indexes for table `sicklecell`
--
ALTER TABLE `sicklecell`
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

--
-- AUTO_INCREMENT for table `sicklecell`
--
ALTER TABLE `sicklecell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
