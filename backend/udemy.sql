-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2023 a las 12:32:23
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `udemy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add user', 6, 'add_user'),
(22, 'Can change user', 6, 'change_user'),
(23, 'Can delete user', 6, 'delete_user'),
(24, 'Can view user', 6, 'view_user'),
(25, 'Can add course', 7, 'add_course'),
(26, 'Can change course', 7, 'change_course'),
(27, 'Can delete course', 7, 'delete_course'),
(28, 'Can view course', 7, 'view_course'),
(29, 'Can add comment', 8, 'add_comment'),
(30, 'Can change comment', 8, 'change_comment'),
(31, 'Can delete comment', 8, 'delete_comment'),
(32, 'Can view comment', 8, 'view_comment'),
(33, 'Can add rate', 9, 'add_rate'),
(34, 'Can change rate', 9, 'change_rate'),
(35, 'Can delete rate', 9, 'delete_rate'),
(36, 'Can view rate', 9, 'view_rate'),
(37, 'Can add requisite', 10, 'add_requisite'),
(38, 'Can change requisite', 10, 'change_requisite'),
(39, 'Can delete requisite', 10, 'delete_requisite'),
(40, 'Can view requisite', 10, 'view_requisite'),
(41, 'Can add what learnt', 11, 'add_whatlearnt'),
(42, 'Can change what learnt', 11, 'change_whatlearnt'),
(43, 'Can delete what learnt', 11, 'delete_whatlearnt'),
(44, 'Can view what learnt', 11, 'view_whatlearnt'),
(45, 'Can add courses library', 12, 'add_courseslibrary'),
(46, 'Can change courses library', 12, 'change_courseslibrary'),
(47, 'Can delete courses library', 12, 'delete_courseslibrary'),
(48, 'Can view courses library', 12, 'view_courseslibrary'),
(49, 'Can add paid courses library', 13, 'add_paidcourseslibrary'),
(50, 'Can change paid courses library', 13, 'change_paidcourseslibrary'),
(51, 'Can delete paid courses library', 13, 'delete_paidcourseslibrary'),
(52, 'Can view paid courses library', 13, 'view_paidcourseslibrary'),
(53, 'Can add Category', 14, 'add_category'),
(54, 'Can change Category', 14, 'change_category'),
(55, 'Can delete Category', 14, 'delete_category'),
(56, 'Can view Category', 14, 'view_category'),
(57, 'Can add comment', 15, 'add_comment'),
(58, 'Can change comment', 15, 'change_comment'),
(59, 'Can delete comment', 15, 'delete_comment'),
(60, 'Can view comment', 15, 'view_comment');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category_category`
--

CREATE TABLE `category_category` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category_category`
--

INSERT INTO `category_category` (`id`, `name`, `parent_id`) VALUES
(1, 'Javascript', 11),
(2, 'Python', 10),
(3, 'Excel', NULL),
(4, 'Django', 10),
(5, 'Php', 10),
(6, 'Data Science', NULL),
(7, 'React Js', 11),
(8, 'Vue JS', 11),
(9, 'Desarrollo web', NULL),
(10, 'Backend', 12),
(11, 'Frontend', 12),
(12, 'Full Stack', NULL),
(13, 'Laravel', 5),
(14, 'Next Js', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category_comment`
--

CREATE TABLE `category_comment` (
  `id` bigint(20) NOT NULL,
  `user` varchar(255) NOT NULL,
  `message` longtext NOT NULL,
  `created` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_comment`
--

CREATE TABLE `courses_comment` (
  `id` bigint(20) NOT NULL,
  `user` varchar(255) NOT NULL,
  `message` longtext NOT NULL,
  `created` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_comment`
--

INSERT INTO `courses_comment` (`id`, `user`, `message`, `created`) VALUES
(1, '2', 'test caaa 4', '2023-01-12 11:51:56.229955'),
(2, '1', 'test coment', '2023-01-12 11:52:06.217465');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_course`
--

CREATE TABLE `courses_course` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `language` varchar(50) NOT NULL,
  `course_length` varchar(20) NOT NULL,
  `payment` varchar(100) NOT NULL,
  `price` decimal(18,2) NOT NULL,
  `compare_price` decimal(18,18) DEFAULT NULL,
  `published` datetime(6) NOT NULL,
  `status` varchar(10) NOT NULL,
  `author_id` bigint(20) NOT NULL,
  `category_id` bigint(20) NOT NULL,
  `student_rating` int(11) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_course`
--

INSERT INTO `courses_course` (`id`, `title`, `description`, `created`, `updated`, `language`, `course_length`, `payment`, `price`, `compare_price`, `published`, `status`, `author_id`, `category_id`, `student_rating`, `image`) VALUES
(1, 'Python Django - The Practical Guide', 'Learn how to build web applications and websites with Python and the Django  framework', '2022-12-12 11:07:00.986253', '2022-12-12 11:07:00.986253', 'espanol', '0', 'free', '12.00', NULL, '2022-12-12 11:07:00.983235', 'draft', 1, 4, 0, 'courses/romacode/django.jpg'),
(3, 'Microsoft Excel - Excel from Beginner to Advanced', 'Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Microsoft/Office 365', '2022-12-12 11:10:52.866607', '2022-12-12 11:10:52.866607', 'espanol', '0', 'free', '5.00', NULL, '2022-12-12 11:10:52.866607', 'published', 1, 3, 0, 'courses/romacode/excel.jpg'),
(4, 'Python Django - Complete Course', 'Learn to build awesome websites with Python & Django!', '2022-12-12 11:10:52.932300', '2022-12-12 11:10:52.932300', 'espanol', '0', 'free', '8.00', NULL, '2022-12-12 11:10:52.932300', 'published', 1, 4, 0, 'courses/romacode/django1.jpg'),
(5, 'Django Masterclass : Build 9 Real World Django Projects', 'Learn Django from scratch, build an E-commerce store, web based PDF generators, web crawlers, APIs using Python & Django', '2022-12-12 11:10:52.948301', '2022-12-12 11:10:52.948301', 'espanol', '0', 'free', '13.00', NULL, '2022-12-12 11:10:52.948301', 'published', 1, 2, 0, 'courses/romacode/django3.jpg'),
(6, 'Python Django: Build an E-commerce Store - 2023', 'Build an E-commerce Store with Django | Hands-on demonstrations | Deploy a Django Web Application', '2022-12-12 11:10:52.963552', '2022-12-12 11:10:52.963552', 'espanol', '0', 'free', '6.00', NULL, '2022-12-12 11:10:52.963552', 'published', 1, 4, 0, 'courses/romacode/django2.jpg'),
(7, 'Django for Python Developers', 'Master Django and Create Python Web Applications in Simple StepsTraining rest wonder house news list. Up film listen probably fall scientist.', '2022-12-12 11:10:52.980550', '2022-12-12 11:10:52.980550', 'espanol', '0', 'free', '18.00', NULL, '2022-12-12 11:10:52.980550', 'published', 1, 4, 0, 'courses/romacode/django4.jpg'),
(8, 'React - The Complete Guide (incl Hooks, React Router, Redux)', 'test', '2022-12-12 11:10:52.996441', '2023-01-12 11:07:12.845929', 'espanol', '0', 'free', '12.00', NULL, '2022-12-12 11:10:52.996441', 'published', 2, 7, 0, 'courses/test/a60775df-507f-463c-b26d-dba1960f4892.png'),
(9, 'React Tutorial and Projects Course (2023)', 'Learn React by Building 25+ Interesting ProjectsStage we bar he think particular my by. Have ten wish American trouble every decade.\nCup statement word easy heart. Figure power party perform campaign sell.', '2022-12-12 11:10:53.012110', '2022-12-12 11:10:53.012110', 'espanol', '0', 'free', '18.00', NULL, '2022-12-12 11:10:53.012110', 'published', 1, 7, 0, 'courses/romacode/react1.jpg'),
(10, 'Microsoft Excel - Advanced Excel Formulas & Functions', 'Master 75+ MS Excel formulas and learn data analysis with a top Microsoft Excel & business intelligence instructorOnto strong nice region this. Push public share single leave hit. Rule by appear.', '2022-12-12 11:10:53.026906', '2022-12-12 11:10:53.026906', 'espanol', '0', 'free', '8.00', NULL, '2022-12-12 11:10:53.026906', 'draft', 1, 3, 0, 'courses/romacode/excel1.jpg'),
(11, 'PHP Unit Testing with PHPUnit', 'Unit test your PHP code using the PHPUnit testing framework: find bugs quickly and early, and improve your code quality.', '2022-12-12 11:10:53.042908', '2022-12-12 11:10:53.042908', 'espanol', '0', 'free', '10.00', NULL, '2022-12-12 11:10:53.042908', 'published', 1, 5, 0, 'courses/romacode/php4.jpg'),
(12, 'The Complete Object Oriented PHP Developer Course', 'Your fast-track to becoming a professional PHP developer.\nTable myself hear trial continue. True raise recognize ok for. Team new blue kitchen opportunity.', '2022-12-12 11:10:53.058005', '2022-12-12 11:10:53.058005', 'espanol', '0', 'free', '20.00', NULL, '2022-12-12 11:10:53.058005', 'published', 1, 5, 0, 'courses/romacode/php3.jpg'),
(13, 'PHP for Beginners', 'Build a Content Management System from Scratch with PHP and MySQLFormer southern water authority itself. Difference since whose us.\nTeam traditional take practice position. However street year room use.', '2022-12-12 11:10:53.072682', '2022-12-12 11:10:53.072682', 'espanol', '0', 'free', '8.00', NULL, '2022-12-12 11:10:53.072682', 'published', 1, 5, 0, 'courses/romacode/php1.jpg'),
(14, 'PHP for Beginners Part 1: all code used is fully explained', 'PHP for Beginners: Learn to Code in PHP. Every line of code explained in detail. A true PHP for Beginners Course 2022', '2022-12-12 11:10:53.091625', '2022-12-12 11:10:53.091625', 'espanol', '0', 'free', '1.00', NULL, '2022-12-12 11:10:53.091625', 'published', 1, 5, 0, 'courses/romacode/php2.jpg'),
(15, 'Django 4 and Python Full-Stack Developer Masterclass', 'Learn the entire technology stack to create beautiful and responsive websites with Python and Django!', '2022-12-12 11:10:53.107513', '2022-12-12 11:10:53.107513', 'espanol', '0', 'free', '20.00', NULL, '2022-12-12 11:10:53.107513', 'published', 1, 4, 0, 'courses/romacode/django5.jpg'),
(16, 'Python Django 4 Masterclass | Build a Real World Project', 'Become an Expert Django Web Developer and Dramatically Increase Your Career PotentialItself with participant pass growth while out company. Catch store senior travel author.', '2022-12-12 11:10:53.125500', '2022-12-12 11:10:53.125500', 'espanol', '0', 'free', '14.00', NULL, '2022-12-12 11:10:53.125500', 'published', 1, 4, 0, 'courses/romacode/django6.jpg'),
(17, 'Build Python Django Real Project: Django Web Development', 'Step By Step Develop Real Django Project with PostgreSQL & Deploy on Heroku. Most Powerful Way of Learning Django', '2022-12-12 11:10:53.141578', '2022-12-12 11:10:53.141578', 'espanol', '0', 'free', '11.00', NULL, '2022-12-12 11:10:53.141578', 'published', 1, 4, 0, 'courses/romacode/django7.jpg'),
(18, 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2023', 'They machine ahead. College quite everything subject Republican mouth sing. Old back me knowledge well provide. Avoid station identify fall plant stand decision.', '2022-12-12 11:10:53.156239', '2022-12-12 11:10:53.156239', 'espanol', '0', 'free', '16.00', NULL, '2022-12-12 11:10:53.156239', 'published', 1, 7, 0, 'courses/romacode/658b9653-2144-49c6-a562-554b0ef7aeef.jpg'),
(19, 'Statistics / Data Analysis in SPSS: Inferential Statistics', 'Increase Your Data Analytic Skills – Highly Valued And Sought After By Employers', '2022-12-12 11:10:53.171589', '2022-12-12 11:10:53.171589', 'espanol', '0', 'free', '9.00', NULL, '2022-12-12 11:10:53.171589', 'published', 1, 6, 0, 'courses/romacode/data.jpg'),
(20, 'Master the Coding Interview: Data Structures + Algorithms', 'Face low best hear media author. American sometimes drug glass dream work. Smile many say attorney part never.\nTelevision someone those relate as shake computer. His effort although dog mean war.', '2022-12-12 11:10:53.187591', '2022-12-12 11:10:53.187591', 'espanol', '0', 'free', '1.00', NULL, '2022-12-12 11:10:53.187591', 'published', 1, 6, 0, 'courses/romacode/data1.jpg'),
(21, 'R Programming A-Z™: R For Data Science With Real Exercises!', 'Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2Suggest few war necessary full center. Purpose organization detail radio run discover create.', '2022-12-12 11:10:53.201872', '2022-12-12 11:10:53.201872', 'espanol', '0', 'free', '17.00', NULL, '2022-12-12 11:10:53.201872', 'published', 1, 6, 0, 'courses/romacode/data2.jpg'),
(22, 'Introduction to Machine Learning for Data Science', 'A primer on Machine Learning for Data Science. Revealed for everyday people, by the Backyard Data Scientist.Yet would administration total effort. Market home certainly player. Executive hit best inside community.', '2022-12-12 11:10:53.215547', '2022-12-12 11:10:53.216549', 'espanol', '0', 'free', '1.00', NULL, '2022-12-12 11:10:53.215547', 'published', 1, 6, 0, 'courses/romacode/data3.jpg'),
(23, 'PHP for Beginners - Become a PHP Master - CMS Project', 'PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.Hot each same main. Environmental so bit ago fish from.\nSecurity data though property kind maintain.', '2022-12-12 11:10:53.234519', '2022-12-12 11:10:53.234519', 'espanol', '0', 'free', '6.00', NULL, '2022-12-12 11:10:53.234519', 'published', 1, 5, 0, 'courses/romacode/php.jpg'),
(24, 'The JavaScript Bible - JavaScript Bootcamp', 'Understand and learn JavaScript and ES6 in a one challenge-based JavaScript Bootcamp course!', '2022-12-12 11:10:53.253548', '2022-12-12 11:10:53.253548', 'espanol', '0', 'free', '9.00', NULL, '2022-12-12 11:10:53.253548', 'published', 1, 1, 0, 'courses/romacode/javascript5.jpg'),
(25, 'Build REST APIs with Django REST Framework and Python', 'Learn Basics to Advanced Django REST Framework by building IMDB API Clone (JWT, Token, Throttling, Pagination, Testing)', '2022-12-12 11:10:53.268546', '2022-12-12 11:10:53.268546', 'espanol', '0', 'free', '19.00', NULL, '2022-12-12 11:10:53.268546', 'published', 1, 4, 0, 'courses/romacode/django8.jpg'),
(26, 'The Complete JavaScript Course 2023: From Zero to Expert!', 'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!Baby need write she. Into way nation. Perform interview speak operation detail put.', '2022-12-12 11:10:53.291555', '2022-12-12 11:10:53.291555', 'espanol', '0', 'free', '10.00', NULL, '2022-12-12 11:10:53.290524', 'published', 1, 1, 0, 'courses/romacode/javascript4.jpg'),
(27, 'JavaScript Web Projects: 20 Projects to Build Your Portfolio', 'Modern HTML5, CSS3, and JavaScript to build Responsive and Mobile Friendly projects for your dream portfolio and resume!Discussion since mouth process from former. Republican explain put owner.', '2022-12-12 11:10:53.310532', '2022-12-12 11:10:53.310532', 'espanol', '0', 'free', '15.00', NULL, '2022-12-12 11:10:53.310532', 'published', 1, 1, 0, 'courses/romacode/javascript3.jpg'),
(28, 'Modern JavaScript (Complete guide, from Novice to Ninja)', 'Learn Modern JavaScript from the very start to ninja-level & build awesome JavaScript applications.\n', '2022-12-12 11:10:53.326517', '2022-12-12 11:10:53.326517', 'espanol', '0', 'free', '5.00', NULL, '2022-12-12 11:10:53.325541', 'published', 1, 1, 0, 'courses/romacode/javascript2.jpg'),
(29, 'Javascript Tutorial and Projects Course (2023)', 'Learn Javascript by Building 30+ Interesting Projects\nIn call manager catch within on. Wear color claim fill offer image young. Get rule friend may although stand identify program.', '2022-12-12 11:10:53.344520', '2022-12-12 11:10:53.344520', 'espanol', '0', 'free', '20.00', NULL, '2022-12-12 11:10:53.344520', 'published', 1, 1, 0, 'courses/romacode/javascript1.jpg'),
(30, 'JavaScript Basics for Beginners', 'JavaScript - Master the Fundamentals in 6 Hours\nRight same could memory health talk. Concern hear owner conference but. Crime specific along sit.', '2022-12-12 11:10:53.363516', '2022-12-12 11:10:53.363516', 'espanol', '0', 'free', '17.00', NULL, '2022-12-12 11:10:53.363516', 'published', 1, 1, 0, 'courses/romacode/javascript.jpg'),
(31, 'Python for beginners', 'Master the fundamentals of Python while working on various usecases in easy steps\nMouth anyone sister attorney staff. Ok national color start building his teacher kitchen.', '2022-12-12 11:10:53.378549', '2022-12-12 11:10:53.379548', 'espanol', '0', 'free', '11.00', NULL, '2022-12-12 11:10:53.378549', 'published', 1, 2, 0, 'courses/romacode/python3.jpg'),
(32, 'Python Course From Zero | Python For All (Updated 2023)', 'Python Course From Zero | Python For All (Updated 2023)Food population so million then save article station. Project teacher once law.', '2022-12-12 11:10:53.393517', '2022-12-12 11:10:53.393517', 'espanol', '0', 'free', '1.00', NULL, '2022-12-12 11:10:53.392545', 'published', 1, 2, 0, 'courses/romacode/python2.jpg'),
(35, 'The Python Mega Course: Learn Python in 40 Days with 20 Apps', '2022 Redone! Take the full course to become a Python programmer, or pick any project to master specific areas of Python.', '2023-01-12 09:08:14.031968', '2023-01-12 09:08:14.031968', 'espanol', '0', 'free', '12.00', NULL, '2023-01-12 09:08:14.029970', 'draft', 2, 2, 0, 'courses/romacode/python1.jpg'),
(36, 'Complete Python Developer in 2023: Zero to Mastery', 'How to become a Python 3 Developer and get hired! Build 12+ projects, learn Web Development, Machine Learning + more!', '2023-01-12 09:11:33.432825', '2023-01-12 09:11:33.432825', 'espanol', '0', 'free', '12.00', NULL, '2023-01-12 09:11:33.430825', 'draft', 2, 2, 0, 'courses/romacode/python.jpg'),
(37, 'Vue - The Complete Guide (incl. Router & Composition API)', 'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!Red seven lead owner air business. His investment eye prevent for brother risk. Maybe science positive speak name style.', '2023-02-06 09:48:37.951811', '2023-02-06 09:48:37.951811', 'espanol', '0', 'free', '6.00', NULL, '2023-02-06 09:48:37.951811', 'published', 1, 8, 0, 'courses/romacode/vue.jpg'),
(38, 'Build Web Apps with Vue JS 3 & Firebase', 'Learn Vue JS 3 & Firebase by creating & deploying dynamic web apps (including Authentication).According decade term truth practice deep.\nFire southern bar time blue cost despite. Pattern day the.', '2023-02-06 09:48:38.016074', '2023-02-06 09:48:38.016074', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 09:48:38.016074', 'published', 1, 8, 0, 'courses/romacode/vue1.jpg'),
(39, 'The complete VUE JS course ( 2022 edition )', 'Learn to build beautiful web apps using VUE JS, version 3 and 2. Composition API included.Book mind sometimes catch I visit team part. Against blue explain else man beat.', '2023-02-06 09:48:38.037039', '2023-02-06 09:48:38.037039', 'espanol', '0', 'free', '13.00', NULL, '2023-02-06 09:48:38.036034', 'published', 1, 8, 0, 'courses/romacode/vue2.jpg'),
(40, 'Vue from Scratch with Real Life Vue JS Web Applications', 'Vue with basic Vue js applications. Vue.js is a popular frontend JavaScript Framework. Learn vuejs, become vue developerEmployee apply company design popular perform until. Themselves toward deal sometimes born model Mr my.', '2023-02-06 09:48:38.052032', '2023-02-06 09:48:38.052032', 'espanol', '0', 'free', '1.00', NULL, '2023-02-06 09:48:38.052032', 'published', 1, 8, 0, 'courses/romacode/vue3.jpg'),
(41, 'Complete Vue.js 3 Course: Vuejs 3, Vite, TailwindCSS, Pinia', 'Vue3, TailwindCSS, VueX, Vue Router, Composition API, Pinia, and Vite; A Step-by-Step Guide to Building Vue ProgramsCollege billion this. Operation tend charge.', '2023-02-06 09:48:38.071341', '2023-02-06 09:48:38.071341', 'espanol', '0', 'free', '6.00', NULL, '2023-02-06 09:48:38.071341', 'published', 1, 8, 0, 'courses/romacode/vue4.jpg'),
(42, 'Vue & Typescript | Vue Js, Type script, JavaScript Projects', 'Vue Js, JavaScript & Typescript for front end web development with vue.js, type script, java script, Javascript ProjectsControl big pull economic.\nWish plan guess drop star discover seven. Nice few during bag seat. Think floor open shake.', '2023-02-06 09:48:38.086307', '2023-02-06 09:48:38.086307', 'espanol', '0', 'free', '19.00', NULL, '2023-02-06 09:48:38.086307', 'published', 1, 8, 0, 'courses/romacode/vue5.jpg'),
(43, 'Vue JS 3 Modern Web Development with Vuex & Vue Router', 'Learn Vue3 Web Development Quickly From the Absolute Beginning. Exercises and Challenges Included for fast learning.Provide now claim great nature production. Have care ask education sell. Allow dream bring member. Phone often pretty.', '2023-02-06 09:48:38.102062', '2023-02-06 09:48:38.102062', 'espanol', '0', 'free', '18.00', NULL, '2023-02-06 09:48:38.102062', 'published', 1, 8, 0, 'courses/romacode/vue6.jpg'),
(44, 'Nuxt.js 2 - Vue.js on Steroids', 'Build highly engaging Vue JS apps with Nuxt.js. Nuxt adds easy server-side-rendering and a folder-based config approach.\n', '2023-02-06 09:48:38.117059', '2023-02-06 09:48:38.117059', 'espanol', '0', 'free', '17.00', NULL, '2023-02-06 09:48:38.117059', 'published', 1, 8, 0, 'courses/romacode/vue7.jpg'),
(45, 'Vue JS 3: The Composition API (Inc Script Setup, TypeScript)', 'Learn Vue.js 3 with TypeScript, the Composition API and Pinia (2022)Poor be view science lot. Amount walk population be decide research itself.', '2023-02-06 09:48:38.132060', '2023-02-06 09:48:38.132060', 'espanol', '0', 'free', '1.00', NULL, '2023-02-06 09:48:38.132060', 'published', 1, 8, 0, 'courses/romacode/vue8.jpg'),
(46, 'Master Laravel 9, Vue 3 & Inertia Fullstack 2023', 'Effort line appear reveal similar. Yourself education rise. Image thus present hand film rise treat.\nLearn to build great SPA with Laravel 9, Vue 3, Inertia & Tailwind CSS! Fully Re-Recorded for 2023!', '2023-02-06 09:48:38.147864', '2023-02-06 09:48:38.147864', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 09:48:38.147864', 'published', 1, 8, 0, 'courses/romacode/vue9.jpg'),
(48, 'PHP with Laravel for beginners - Become a Master in Laravel', 'Learn to master Laravel to make advanced applications like the real CMS app we build on this course', '2023-02-06 10:14:35.982276', '2023-02-06 10:14:35.982276', 'espanol', '0', 'free', '1.00', NULL, '2023-02-06 10:14:35.982276', 'published', 1, 13, 0, 'courses/romacode/laravel.jpg'),
(49, 'Let\'s Learn Laravel: A Guided Path For Beginners', 'Learn The Essential Concepts of PHP, Laravel & Linux To Launch A New Career!', '2023-02-06 10:14:36.034291', '2023-02-06 10:14:36.034291', 'espanol', '0', 'free', '19.00', NULL, '2023-02-06 10:14:36.034291', 'published', 1, 13, 0, 'courses/romacode/laravel1.jpg'),
(50, 'Laravel 9 - Build Complete Inventory Management System A-Z', 'In This Course, You Will Build Two Different Projects With Laravel 9 including Inventory Management System A-ZDiscuss ok customer practice affect provide girl. Wait friend according research kitchen. State teach hotel.\nClass budget crime about cup send test.', '2023-02-06 10:14:36.057960', '2023-02-06 10:14:36.057960', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 10:14:36.057960', 'published', 1, 13, 0, 'courses/romacode/laravel2.jpg'),
(51, 'Beginning Laravel 9 - From Novice to Professional (2022)', 'Get from novice to professional in Laravel by learning the concepts and build Two Real World Laravel projectsMouth loss industry decide out. Capital from similar instead add company activity.', '2023-02-06 10:14:36.073164', '2023-02-06 10:14:36.073164', 'espanol', '0', 'free', '9.00', NULL, '2023-02-06 10:14:36.073164', 'published', 1, 13, 0, 'courses/romacode/laravel3.jpg'),
(52, 'Laravel 8 PHP Framework A - Z Build Professional Ecommerce', 'In This Course, You Will Learn Laravel 8 Fundamentals and Build Two Different Ecommerce with lots of Advance FeaturesCould administration food office knowledge.', '2023-02-06 10:14:36.088749', '2023-02-06 10:14:36.088749', 'espanol', '0', 'free', '12.00', NULL, '2023-02-06 10:14:36.088749', 'published', 1, 13, 0, 'courses/romacode/laravel4.jpg'),
(53, 'Master Laravel 8 for Beginners & Intermediate', 'Get from zero to proficiency in the Laravel Framework! Course for beginners and intermediate students!', '2023-02-06 10:14:36.105753', '2023-02-06 10:14:36.105753', 'espanol', '0', 'free', '2.00', NULL, '2023-02-06 10:14:36.105753', 'published', 1, 13, 0, 'courses/romacode/laravel5.jpg'),
(54, 'Laravel 9 Admin Panel - Learn Roles and Permissions', 'Laravel Roles and Permissions without PackageBody some issue each. Movement policy foreign person mind scientist.\nUpon bit here event. Friend report daughter.', '2023-02-06 10:14:36.123891', '2023-02-06 10:14:36.123891', 'espanol', '0', 'free', '18.00', NULL, '2023-02-06 10:14:36.123891', 'published', 1, 13, 0, 'courses/romacode/laravel6.jpg'),
(55, 'Laravel & Realtime: Build Several Realtime Apps with Laravel', 'Build realtime notifications, games, chat rooms, and more realtime applications with Laravel and Websockets.Skin throughout yes trial store clear usually. Third sport standard reach.', '2023-02-06 10:14:36.138892', '2023-02-06 10:14:36.138892', 'espanol', '0', 'free', '15.00', NULL, '2023-02-06 10:14:36.138892', 'published', 1, 13, 0, 'courses/romacode/laravel7.jpg'),
(56, 'Laravel : Make six projects with PHP and Laravel', 'Restaurant app,Quiz app, Ecommerce app,Photo share app, Ringtone&Wallpaper app,Employee management System app.They should town home ability tend. Part take area wife teach site.', '2023-02-06 10:14:36.155152', '2023-02-06 10:14:36.155152', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 10:14:36.155152', 'published', 1, 13, 0, 'courses/romacode/laravel8.jpg'),
(57, 'Laravel 8 Vuejs & RESTful API Course With Complete Project', 'Learn Basic Larave 8 , Vuejs, Restful Api Fundamentals Then Together All, Create Inventory Management System ProjectLike whose while.\nWall friend individual significant they month. Pattern western room finish animal. Machine whether nothing dark senior.', '2023-02-06 10:14:36.179199', '2023-02-06 10:14:36.179199', 'espanol', '0', 'free', '19.00', NULL, '2023-02-06 10:14:36.179199', 'published', 1, 13, 0, 'courses/romacode/laravel9.jpg'),
(59, 'Next.js & React - The Complete Guide (incl. Two Paths!)', 'Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!Same data sound into security. Fall rather data teacher notice. Station require study system.', '2023-02-06 10:31:50.628889', '2023-02-06 10:31:50.628889', 'espanol', '0', 'free', '18.00', NULL, '2023-02-06 10:31:50.628889', 'published', 1, 14, 0, 'courses/romacode/next.jpg'),
(60, 'Complete Next.js Developer in 2023: Zero to Mastery', 'Master NextJS and build enterprise level fullstack ReactJS apps. Taught by industry expert, using modern best practices!Provide increase really trouble head thousand. Technology form buy culture game.', '2023-02-06 10:31:50.676240', '2023-02-06 10:31:50.676240', 'espanol', '0', 'free', '9.00', NULL, '2023-02-06 10:31:50.676240', 'published', 1, 14, 0, 'courses/romacode/next1.jpg'),
(61, 'Next.js Projects - 4 NextJS projects (Instagram, Google,...)', 'Next.js (react js framework) Projects. 4 NextJS hands on projects. IMDB, Instagram, Twitter & Google clone using Next jsBill consider provide provide particularly water hope sell.', '2023-02-06 10:31:50.692821', '2023-02-06 10:31:50.692821', 'espanol', '0', 'free', '13.00', NULL, '2023-02-06 10:31:50.692821', 'published', 1, 14, 0, 'courses/romacode/next2.jpg'),
(62, 'Next JS & WordPress: Build rapid NextJS sites with Next & WP', 'Next JS & Headless WordPress: Build a fully functioning real estate property website with Next.js & WordPress ~Next 2023', '2023-02-06 10:31:50.709800', '2023-02-06 10:31:50.709800', 'espanol', '0', 'free', '8.00', NULL, '2023-02-06 10:31:50.708828', 'published', 1, 14, 0, 'courses/romacode/next3.jpg'),
(63, 'Full Stack Development With Next JS & Typescript', 'Learn Next JS from scratch with Typescript and Tailwind CSS by building a real world fullstack blog application.Technology guy perhaps third north thank. Body necessary itself plan series travel.', '2023-02-06 10:31:50.725605', '2023-02-06 10:31:50.725605', 'espanol', '0', 'free', '9.00', NULL, '2023-02-06 10:31:50.725605', 'published', 1, 14, 0, 'courses/romacode/next4.jpg'),
(64, 'Complete Next.js with React & Node - Beautiful Portfolio App', 'Build Serverless Web Apps with Next.js. Learn Hooks. Deploy to Vercel. Next.js (Next JS 10+), React (React 16+) & Node.Democratic deep true move benefit. Tree trouble respond many life specific.', '2023-02-06 10:31:50.741335', '2023-02-06 10:31:50.741335', 'espanol', '0', 'free', '7.00', NULL, '2023-02-06 10:31:50.741335', 'published', 1, 14, 0, 'courses/romacode/next5.jpg'),
(65, 'Testing Next.js Apps with Jest, Testing Library and Cypress', 'Learn to test a real-world serverless React app with routes, authentication, database and more!Much keep suffer into again allow. Least clear pretty down which easy computer.', '2023-02-06 10:31:50.757360', '2023-02-06 10:31:50.757360', 'espanol', '0', 'free', '15.00', NULL, '2023-02-06 10:31:50.757360', 'published', 1, 14, 0, 'courses/romacode/next6.jpg'),
(66, 'Next.js & Django - Build Complete Jobs Portal with Postgres', 'Build Full Stack Jobs Portal App with Next.js & Django with Postgres - with Authentication, Maps Rendering, DeploymentBut new brother catch collection too other including. Together develop check attention four. Respond positive line piece head.', '2023-02-06 10:31:50.773359', '2023-02-06 10:31:50.773359', 'espanol', '0', 'free', '18.00', NULL, '2023-02-06 10:31:50.773359', 'published', 1, 14, 0, 'courses/romacode/next7.jpg'),
(67, 'Practical Next.js & React - Build a real WebApp with Next.js', 'Build Fullstack WebApp with Next.js, React, and Strapi backend. Storybook components library. Practical Next.js & React', '2023-02-06 10:31:50.787905', '2023-02-06 10:31:50.787905', 'espanol', '0', 'free', '8.00', NULL, '2023-02-06 10:31:50.787905', 'published', 1, 14, 0, 'courses/romacode/next8.jpg'),
(68, 'Next JS & Typescript with Shopify Integration - Full Guide', 'Learn modern Next JS(Next 10+). Code everything in Typescript and integrate with Shopify. Professional app architecture.\n', '2023-02-06 10:31:50.804535', '2023-02-06 10:31:50.804535', 'espanol', '0', 'free', '16.00', NULL, '2023-02-06 10:31:50.804535', 'published', 1, 14, 0, 'courses/romacode/next9.jpg'),
(69, 'The Complete 2023 Web Development Course - Build 15 Projects', 'The only course you need to become a full-stack web developer. Covers HTML5, CSS3, JS, ES6, Node, APIs, Mobile & more!Deal describe western fire out. Establish very chair senior.', '2023-02-06 10:56:15.909836', '2023-02-06 10:56:15.909836', 'espanol', '0', 'free', '11.00', NULL, '2023-02-06 10:56:15.909836', 'published', 1, 9, 0, 'courses/romacode/development2.jpg'),
(70, 'The Ultimate 2023 Fullstack Web Development Bootcamp', 'Become a fullstack web developer (and get a job) by taking this ONE course, even if you\'ve never coded before.', '2023-02-06 10:56:15.964083', '2023-02-06 10:56:15.964083', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 10:56:15.964083', 'published', 1, 9, 0, 'courses/romacode/development3.jpg'),
(71, 'The Full Stack Web Development Bootcamp 2023', 'Learn HTML, CSS, JavaScript, jQuery, PHP & mySQL to become a talented, confident full-stack web developer in 2022.', '2023-02-06 10:56:15.985114', '2023-02-06 10:56:15.985114', 'espanol', '0', 'free', '18.00', NULL, '2023-02-06 10:56:15.985114', 'published', 1, 9, 0, 'courses/romacode/development4.jpg'),
(72, 'The Complete Front-End Web Development Course', 'Get started as a front-end web developer using HTML, CSS, JavaScript, jQuery, and Bootstrap!Democrat charge factor child. President dog decade church create.', '2023-02-06 10:56:16.001133', '2023-02-06 10:56:16.001133', 'espanol', '0', 'free', '16.00', NULL, '2023-02-06 10:56:16.001133', 'published', 1, 9, 0, 'courses/romacode/development5.jpg'),
(73, 'Full Stack Web Development with React JS, Angular and NodeJS', 'What another clearly others recently gas community open. Dark best respond game. Republican myself organization west return.\nFull stack web development. Up full stack developer career with HTML CSS Javascript, React JS, Angular, NodeJS, MongoDB', '2023-02-06 10:56:16.016079', '2023-02-06 10:56:16.016079', 'espanol', '0', 'free', '1.00', NULL, '2023-02-06 10:56:16.016079', 'published', 1, 9, 0, 'courses/romacode/development6.jpg'),
(74, 'Fundamentals of Backend Communications and Protocols', 'Understand backend communication design patterns, protocols, execution and proxying', '2023-02-06 11:05:47.175075', '2023-02-06 11:05:47.175075', 'espanol', '0', 'free', '13.00', NULL, '2023-02-06 11:05:47.175075', 'published', 1, 10, 0, 'courses/romacode/backend.jpg'),
(75, 'Backend Master Class [Golang + Postgres + Kubernetes + gRPC]', 'Learn everything about backend web development: Golang, Postgres, Redis, Gin, gRPC, Docker, Kubernetes, AWS, CI/CDDetail partner strategy responsibility. Start dream different race receive local result.', '2023-02-06 11:05:47.221983', '2023-02-06 11:05:47.221983', 'espanol', '0', 'free', '16.00', NULL, '2023-02-06 11:05:47.221983', 'published', 1, 10, 0, 'courses/romacode/backend1.jpg'),
(76, 'Build a Backend REST API with Python & Django - Advanced', 'Create an advanced REST API with Python, Django REST Framework and Docker using Test Driven Development (TDD)Personal my again toward middle goal. Mention onto her most research computer beat.', '2023-02-06 11:05:47.238957', '2023-02-06 11:05:47.238957', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 11:05:47.238957', 'published', 1, 10, 0, 'courses/romacode/backend2.jpg'),
(77, 'Node.js, Express, MongoDB & More backend: The Complete Bootcamp 2023', 'Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)', '2023-02-06 11:05:47.255956', '2023-02-06 11:05:47.255956', 'espanol', '0', 'free', '1.00', NULL, '2023-02-06 11:05:47.255956', 'published', 1, 10, 0, 'courses/romacode/backend3.jpg'),
(78, 'API Testing with Python 3 & PyTest, Backend Automation 2023', 'Learn to build framework for API automation testing (backend testing) using Python and PyTest, SQL, Reports, DockerDiscussion interest see worker direction floor.\nParticular form candidate point understand believe.', '2023-02-06 11:05:47.272956', '2023-02-06 11:05:47.272956', 'espanol', '0', 'free', '5.00', NULL, '2023-02-06 11:05:47.272956', 'published', 1, 10, 0, 'courses/romacode/backend4.jpg'),
(79, 'Modern Frontend Web Development: Angular, Javascript JS', 'Advanced modern web development with Angular, JavaScipt JS, Bootstrap, HTML CSS. Become Front end web development master', '2023-02-06 11:12:46.328087', '2023-02-06 11:12:46.328087', 'espanol', '0', 'free', '10.00', NULL, '2023-02-06 11:12:46.327090', 'published', 1, 11, 0, 'courses/romacode/frontend.jpg'),
(80, 'Frontend Web Development for Beginners', 'Build Mini ProjectsHappy teach that maintain. Dark identify likely economy who again ahead. White catch law example season character.', '2023-02-06 11:12:46.376776', '2023-02-06 11:12:46.376776', 'espanol', '0', 'free', '8.00', NULL, '2023-02-06 11:12:46.375778', 'published', 1, 11, 0, 'courses/romacode/frontend1.jpg'),
(81, 'Complete FrontEnd Web Development and Design HTML CSS JS', 'Complete guide to learning how to program online HTML CSS HTML5 CSS3 JavaScript jQuery', '2023-02-06 11:12:46.396263', '2023-02-06 11:12:46.396263', 'espanol', '0', 'free', '15.00', NULL, '2023-02-06 11:12:46.395294', 'published', 1, 11, 0, 'courses/romacode/frontend2.jpg'),
(82, 'React JS- Complete Guide for Frontend Web Development [2023]', 'Become an expert React JS Developer. Learn HTML, CSS, JavaScript, ES6, React JS and jQuery.Those sport back sense. Fish opportunity say cost.', '2023-02-06 11:12:46.411635', '2023-02-06 11:12:46.411635', 'espanol', '0', 'free', '8.00', NULL, '2023-02-06 11:12:46.411635', 'published', 1, 11, 0, 'courses/romacode/frontend3.jpg'),
(83, 'Complete Angular 14 Course - Learn Frontend Development', 'Learn Angular the correct way. Build your own web-apps using components, modules, services etc.Receive first likely never current rule pressure. Perhaps personal Congress thought building yeah. Wonder small quickly time.', '2023-02-06 11:12:46.427390', '2023-02-06 11:12:46.427390', 'espanol', '0', 'free', '2.00', NULL, '2023-02-06 11:12:46.427390', 'published', 1, 11, 0, 'courses/romacode/frontend4.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_courseslibrary`
--

CREATE TABLE `courses_courseslibrary` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_courseslibrary`
--

INSERT INTO `courses_courseslibrary` (`id`, `user_id`, `course_id`) VALUES
(1, 1, 1),
(2, 2, 10),
(3, 1, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_course_comments`
--

CREATE TABLE `courses_course_comments` (
  `id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `comment_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_course_comments`
--

INSERT INTO `courses_course_comments` (`id`, `course_id`, `comment_id`) VALUES
(1, 8, 1),
(2, 8, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_course_rating`
--

CREATE TABLE `courses_course_rating` (
  `id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `rate_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_course_rating`
--

INSERT INTO `courses_course_rating` (`id`, `course_id`, `rate_id`) VALUES
(29, 3, 29),
(30, 3, 30),
(31, 3, 31),
(35, 11, 35),
(44, 11, 44),
(36, 12, 36),
(41, 20, 41),
(38, 25, 38),
(42, 26, 42);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_course_requisite`
--

CREATE TABLE `courses_course_requisite` (
  `id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `requisite_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_course_requisite`
--

INSERT INTO `courses_course_requisite` (`id`, `course_id`, `requisite_id`) VALUES
(1, 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_course_what_learnt`
--

CREATE TABLE `courses_course_what_learnt` (
  `id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `whatlearnt_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_paidcourseslibrary`
--

CREATE TABLE `courses_paidcourseslibrary` (
  `id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_paidcourseslibrary`
--

INSERT INTO `courses_paidcourseslibrary` (`id`, `course_id`, `user_id`) VALUES
(1, 10, 1),
(2, 10, 2),
(3, 1, 2),
(4, 1, 1),
(5, 20, 1),
(6, 30, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_rate`
--

CREATE TABLE `courses_rate` (
  `id` bigint(20) NOT NULL,
  `rate_number` int(11) NOT NULL,
  `user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_rate`
--

INSERT INTO `courses_rate` (`id`, `rate_number`, `user`) VALUES
(29, 2, '2'),
(30, 3, '1'),
(31, 5, '1'),
(35, 2, '1'),
(36, 1, '1'),
(38, 1, '1'),
(41, 4, '1'),
(42, 5, '1'),
(44, 4, '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_requisite`
--

CREATE TABLE `courses_requisite` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses_requisite`
--

INSERT INTO `courses_requisite` (`id`, `title`, `user`) VALUES
(1, 'saber js', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses_whatlearnt`
--

CREATE TABLE `courses_whatlearnt` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2022-12-14 11:17:16.569323', '2', 'test', 1, '[{\"added\": {}}]', 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(14, 'category', 'category'),
(15, 'category', 'comment'),
(4, 'contenttypes', 'contenttype'),
(8, 'courses', 'comment'),
(7, 'courses', 'course'),
(12, 'courses', 'courseslibrary'),
(13, 'courses', 'paidcourseslibrary'),
(9, 'courses', 'rate'),
(10, 'courses', 'requisite'),
(11, 'courses', 'whatlearnt'),
(5, 'sessions', 'session'),
(6, 'users', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-12-12 11:02:22.230344'),
(2, 'contenttypes', '0002_remove_content_type_name', '2022-12-12 11:02:22.287001'),
(3, 'auth', '0001_initial', '2022-12-12 11:02:22.492345'),
(4, 'auth', '0002_alter_permission_name_max_length', '2022-12-12 11:02:22.531618'),
(5, 'auth', '0003_alter_user_email_max_length', '2022-12-12 11:02:22.539617'),
(6, 'auth', '0004_alter_user_username_opts', '2022-12-12 11:02:22.544736'),
(7, 'auth', '0005_alter_user_last_login_null', '2022-12-12 11:02:22.550610'),
(8, 'auth', '0006_require_contenttypes_0002', '2022-12-12 11:02:22.554612'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2022-12-12 11:02:22.560008'),
(10, 'auth', '0008_alter_user_username_max_length', '2022-12-12 11:02:22.565006'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2022-12-12 11:02:22.572006'),
(12, 'auth', '0010_alter_group_name_max_length', '2022-12-12 11:02:22.583581'),
(13, 'auth', '0011_update_proxy_permissions', '2022-12-12 11:02:22.600018'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2022-12-12 11:02:22.613047'),
(15, 'users', '0001_initial', '2022-12-12 11:02:22.868693'),
(16, 'admin', '0001_initial', '2022-12-12 11:02:22.970399'),
(17, 'admin', '0002_logentry_remove_auto_add', '2022-12-12 11:02:22.979401'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-12 11:02:22.987376'),
(19, 'category', '0001_initial', '2022-12-12 11:02:23.049731'),
(20, 'category', '0002_comment', '2022-12-12 11:02:23.072872'),
(21, 'courses', '0001_initial', '2022-12-12 11:02:23.135843'),
(22, 'courses', '0002_comment_course_comments', '2022-12-12 11:02:23.286865'),
(23, 'courses', '0003_course_category', '2022-12-12 11:02:23.344399'),
(24, 'courses', '0004_rate_requisite_whatlearnt_course_student_rating_and_more', '2022-12-12 11:02:23.819871'),
(25, 'courses', '0005_courseslibrary', '2022-12-12 11:02:23.848871'),
(26, 'courses', '0006_alter_courseslibrary_user', '2022-12-12 11:02:23.950871'),
(27, 'courses', '0007_alter_courseslibrary_course', '2022-12-12 11:02:24.061872'),
(28, 'courses', '0008_paidcourseslibrary', '2022-12-12 11:02:24.198872'),
(29, 'courses', '0009_course_image', '2022-12-12 11:02:24.230870'),
(30, 'sessions', '0001_initial', '2022-12-12 11:02:24.264901'),
(31, 'users', '0002_user_age_limit_user_birthday_user_location_and_more', '2022-12-12 11:02:24.450902');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user`
--

CREATE TABLE `users_user` (
  `id` bigint(20) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL,
  `age_limit` varchar(14) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `profile_info` longtext DEFAULT NULL,
  `sales` int(11) NOT NULL,
  `total_earnings` int(11) NOT NULL,
  `total_spent` int(11) NOT NULL,
  `url` varchar(80) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_user`
--

INSERT INTO `users_user` (`id`, `last_login`, `is_superuser`, `first_name`, `last_name`, `is_staff`, `is_active`, `date_joined`, `username`, `name`, `email`, `password`, `role`, `age_limit`, `birthday`, `location`, `profile_info`, `sales`, `total_earnings`, `total_spent`, `url`, `verified`) VALUES
(1, '2023-01-12 12:14:57.258556', 1, '', '', 1, 1, '2022-12-12 11:04:06.961765', 'romacode', 'Roman Gómez', 'romacode@gmail.com', 'pbkdf2_sha256$390000$NyjGLI42gtadVEQYPNid1s$YdPkWVxRfZzLcdp7ouk745Vrh58lWv2J5l5cniOgxss=', '', NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0),
(2, '2022-12-13 06:00:00.000000', 0, 'test', 'test', 0, 1, '2022-12-14 11:16:35.000000', 'test', 'test', 'test@gmail.com', 'pbkdf2_sha256$390000$NyjGLI42gtadVEQYPNid1s$YdPkWVxRfZzLcdp7ouk745Vrh58lWv2J5l5cniOgxss=', 'user', NULL, NULL, NULL, '', 0, 0, 0, NULL, 0),
(3, NULL, 0, '', '', 0, 1, '2023-01-16 11:58:55.827016', 'test2', 'test2', 'test2@gmail.com', 'pbkdf2_sha256$390000$2TDd62Fc2qAXTB9DHIADtR$GAwlnnM08Usct4h9USO4mR56UUzi+TlrxkUdIvgRuB8=', 'user', NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0),
(4, NULL, 0, '', '', 0, 1, '2023-01-16 12:12:35.303281', 'test4', 'test4', 'test4@gmail.com', 'pbkdf2_sha256$390000$aJTmzRinjpc9JT4l3Uhyo2$xzfX/WccOLbrI4bi+lF7Jd53J0kp06TVtsMMt5xhSCI=', 'user', NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0),
(5, NULL, 0, '', '', 0, 1, '2023-01-16 12:24:43.094961', 'roma', 'romacode', 'roma@gmail.com', 'pbkdf2_sha256$390000$hBxKeyISf7HcfY0BBckH0l$Ycrax/ubCeJky8IGbXoO5yIKWQvV0WKR/cTHjhjgyyo=', 'user', NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0),
(6, NULL, 0, '', '', 0, 1, '2023-01-17 12:31:31.336090', 'romacodead', 'roma', 'romaasd@gmail.com', 'pbkdf2_sha256$390000$azhxqDL4lJ3Vazdpc6mswC$FQifnGUcqEWRl/ToWOlOo436msljYyrbOgP8nBlAuzs=', 'user', NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0),
(7, NULL, 0, '', '', 0, 1, '2023-01-17 12:33:32.017488', 'romacodeads', 'romas', 'romaasdsa@gmail.com', 'pbkdf2_sha256$390000$dJr4aJRbJSs6tb8k5aDbMR$dxQVxnZtK7j78SvXdd5qZRMoaDaJ1MLBKxS1CjwBDNU=', 'user', NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user_groups`
--

CREATE TABLE `users_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user_user_permissions`
--

CREATE TABLE `users_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `category_category`
--
ALTER TABLE `category_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category_category_parent_id_bce0763d_fk_category_category_id` (`parent_id`);

--
-- Indices de la tabla `category_comment`
--
ALTER TABLE `category_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses_comment`
--
ALTER TABLE `courses_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses_course`
--
ALTER TABLE `courses_course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_course_author_id_9c5b6b34_fk_users_user_id` (`author_id`),
  ADD KEY `courses_course_category_id_d64b93bf_fk_category_category_id` (`category_id`);

--
-- Indices de la tabla `courses_courseslibrary`
--
ALTER TABLE `courses_courseslibrary`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_courseslibrary_user_id_e02d1a04` (`user_id`),
  ADD KEY `courses_courseslibrary_course_id_b84646be` (`course_id`);

--
-- Indices de la tabla `courses_course_comments`
--
ALTER TABLE `courses_course_comments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_course_comments_course_id_comment_id_37e87a3c_uniq` (`course_id`,`comment_id`),
  ADD KEY `courses_course_comme_comment_id_cc5d0b24_fk_courses_c` (`comment_id`);

--
-- Indices de la tabla `courses_course_rating`
--
ALTER TABLE `courses_course_rating`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_course_rating_course_id_rate_id_29c6f312_uniq` (`course_id`,`rate_id`),
  ADD KEY `courses_course_rating_rate_id_e05d3c93_fk_courses_rate_id` (`rate_id`);

--
-- Indices de la tabla `courses_course_requisite`
--
ALTER TABLE `courses_course_requisite`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_course_requisite_course_id_requisite_id_a44eb0c8_uniq` (`course_id`,`requisite_id`),
  ADD KEY `courses_course_requi_requisite_id_1f05c5ca_fk_courses_r` (`requisite_id`);

--
-- Indices de la tabla `courses_course_what_learnt`
--
ALTER TABLE `courses_course_what_learnt`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_course_what_learnt_course_id_whatlearnt_id_81c6cffd_uniq` (`course_id`,`whatlearnt_id`),
  ADD KEY `courses_course_what__whatlearnt_id_63b79cda_fk_courses_w` (`whatlearnt_id`);

--
-- Indices de la tabla `courses_paidcourseslibrary`
--
ALTER TABLE `courses_paidcourseslibrary`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_paidcoursesl_course_id_337a1dd7_fk_courses_c` (`course_id`),
  ADD KEY `courses_paidcourseslibrary_user_id_ec9051bc_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `courses_rate`
--
ALTER TABLE `courses_rate`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses_requisite`
--
ALTER TABLE `courses_requisite`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses_whatlearnt`
--
ALTER TABLE `courses_whatlearnt`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `users_user`
--
ALTER TABLE `users_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_groups_user_id_group_id_b88eab82_uniq` (`user_id`,`group_id`),
  ADD KEY `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_user_permissions_user_id_permission_id_43338c45_uniq` (`user_id`,`permission_id`),
  ADD KEY `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `category_category`
--
ALTER TABLE `category_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `category_comment`
--
ALTER TABLE `category_comment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `courses_comment`
--
ALTER TABLE `courses_comment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `courses_course`
--
ALTER TABLE `courses_course`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT de la tabla `courses_courseslibrary`
--
ALTER TABLE `courses_courseslibrary`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `courses_course_comments`
--
ALTER TABLE `courses_course_comments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `courses_course_rating`
--
ALTER TABLE `courses_course_rating`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `courses_course_requisite`
--
ALTER TABLE `courses_course_requisite`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `courses_course_what_learnt`
--
ALTER TABLE `courses_course_what_learnt`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `courses_paidcourseslibrary`
--
ALTER TABLE `courses_paidcourseslibrary`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `courses_rate`
--
ALTER TABLE `courses_rate`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `courses_requisite`
--
ALTER TABLE `courses_requisite`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `courses_whatlearnt`
--
ALTER TABLE `courses_whatlearnt`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `users_user`
--
ALTER TABLE `users_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `category_category`
--
ALTER TABLE `category_category`
  ADD CONSTRAINT `category_category_parent_id_bce0763d_fk_category_category_id` FOREIGN KEY (`parent_id`) REFERENCES `category_category` (`id`);

--
-- Filtros para la tabla `courses_course`
--
ALTER TABLE `courses_course`
  ADD CONSTRAINT `courses_course_author_id_9c5b6b34_fk_users_user_id` FOREIGN KEY (`author_id`) REFERENCES `users_user` (`id`),
  ADD CONSTRAINT `courses_course_category_id_d64b93bf_fk_category_category_id` FOREIGN KEY (`category_id`) REFERENCES `category_category` (`id`);

--
-- Filtros para la tabla `courses_courseslibrary`
--
ALTER TABLE `courses_courseslibrary`
  ADD CONSTRAINT `courses_courseslibrary_course_id_b84646be_fk_courses_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses_course` (`id`),
  ADD CONSTRAINT `courses_courseslibrary_user_id_e02d1a04_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `courses_course_comments`
--
ALTER TABLE `courses_course_comments`
  ADD CONSTRAINT `courses_course_comme_comment_id_cc5d0b24_fk_courses_c` FOREIGN KEY (`comment_id`) REFERENCES `courses_comment` (`id`),
  ADD CONSTRAINT `courses_course_comments_course_id_c93759e2_fk_courses_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses_course` (`id`);

--
-- Filtros para la tabla `courses_course_rating`
--
ALTER TABLE `courses_course_rating`
  ADD CONSTRAINT `courses_course_rating_course_id_247f811f_fk_courses_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses_course` (`id`),
  ADD CONSTRAINT `courses_course_rating_rate_id_e05d3c93_fk_courses_rate_id` FOREIGN KEY (`rate_id`) REFERENCES `courses_rate` (`id`);

--
-- Filtros para la tabla `courses_course_requisite`
--
ALTER TABLE `courses_course_requisite`
  ADD CONSTRAINT `courses_course_requi_requisite_id_1f05c5ca_fk_courses_r` FOREIGN KEY (`requisite_id`) REFERENCES `courses_requisite` (`id`),
  ADD CONSTRAINT `courses_course_requisite_course_id_7892b89d_fk_courses_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses_course` (`id`);

--
-- Filtros para la tabla `courses_course_what_learnt`
--
ALTER TABLE `courses_course_what_learnt`
  ADD CONSTRAINT `courses_course_what__course_id_81da8a17_fk_courses_c` FOREIGN KEY (`course_id`) REFERENCES `courses_course` (`id`),
  ADD CONSTRAINT `courses_course_what__whatlearnt_id_63b79cda_fk_courses_w` FOREIGN KEY (`whatlearnt_id`) REFERENCES `courses_whatlearnt` (`id`);

--
-- Filtros para la tabla `courses_paidcourseslibrary`
--
ALTER TABLE `courses_paidcourseslibrary`
  ADD CONSTRAINT `courses_paidcoursesl_course_id_337a1dd7_fk_courses_c` FOREIGN KEY (`course_id`) REFERENCES `courses_course` (`id`),
  ADD CONSTRAINT `courses_paidcourseslibrary_user_id_ec9051bc_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD CONSTRAINT `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `users_user_groups_user_id_5f6f5a90_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD CONSTRAINT `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `users_user_user_permissions_user_id_20aca447_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
