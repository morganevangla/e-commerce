-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 18 Décembre 2019 à 14:57
-- Version du serveur :  5.7.28-0ubuntu0.18.04.4
-- Version de PHP :  7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `e-commerce`
--

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `title`, `picture`, `description`) VALUES
(2, 'Vin Rouge', '', NULL),
(3, 'Vin Blanc', '', NULL),
(4, 'Vin rosé', '', NULL),
(5, 'Prestiges', '', NULL),
(6, 'Promotions', '', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comments` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `dcomment` date DEFAULT NULL COMMENT 'Date commentaire'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `comments`
--

INSERT INTO `comments` (`id`, `comments`, `user_id`, `product_id`, `dcomment`) VALUES
(15, 'Bon vin', 9, 5, '2020-01-14'),
(17, 'Très bon vin, je le recommande !', 10, 7, '2020-01-02'),
(18, 'Très bon vin, je le recommande !', 10, 6, '2020-01-13'),
(19, 'Très bon vin, je le recommande !', 10, 15, '2020-01-06'),
(20, 'Très bon vin, je le recommande !', 10, 14, '2020-01-04'),
(21, 'Très bon vin, je le recommande !', 10, 13, '2020-01-03'),
(22, 'Très bon vin, je le recommande !', 10, 12, '2020-01-06'),
(23, 'Très bon vin, je le recommande !', 10, 11, '2020-01-10'),
(24, 'Très bon vin, je le recommande !', 10, 10, '2020-01-07'),
(25, 'Très bon vin, je le recommande !', 10, 9, '2020-01-03'),
(26, 'Très bon vin, je le recommande !', 10, 8, '2020-01-01');

-- --------------------------------------------------------

--
-- Structure de la table `credit_card`
--

CREATE TABLE `credit_card` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` int(11) NOT NULL,
  `datecard` datetime NOT NULL,
  `crypt` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `kart`
--

CREATE TABLE `kart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `products` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20191216145007', '2019-12-16 14:50:42'),
('20191216154333', '2019-12-16 15:43:57'),
('20191216160215', '2019-12-16 16:02:23'),
('20191216161315', '2019-12-16 16:13:19'),
('20191216161525', '2019-12-16 16:15:29');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desclong` text COLLATE utf8mb4_unicode_ci,
  `score` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `reduction` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `products`
-- 

INSERT INTO `products` (`id`, `categorie_id`, `title`, `picture`, `description`, `desclong`, `score`, `price`, `reduction`) VALUES
(4, 2, ' CHEMIN DE MOSCOU 2016 - DOMAINE GAYDA ', 'https://www.vinatis.com/38922-fine_default/chemin-de-moscou-2016-domaine-gayda.png', 'Vin Rouge / Languedoc-Roussillon / Pays d\'Oc IGP / 14 % vol', 'Chemin de Moscou : un incontournable chez Vinatis d\'autant plus sur ce millésime d\'exception médaillé d\'or à millésime bio !\r\nTout est fait pour obtenir le meilleur : vendange à la main, tri manuel, éraflage, sélection grain par grain, vinification traditionnelle et élévage en fût de 21 mois. Le résultat de ce vin du Languedoc est superbe. Nul doute, c\'est un très grand vin! Une cuvée haut de gamme à découvrir de toute urgence..', 5, 19, NULL),
(5, 2, 'OCCULTUM LAPIDEM 2017 - DOMAINE DE BILA HAUT ', 'https://www.vinatis.com/39243-fine_default/occultum-lapidem-2017-domaine-de-bila-haut.png', 'Vin Rouge / Languedoc-Roussillon / Côtes du Roussillon Villages AOC / 14,5 % vol', '\" Une finesse admirable pour ce millésime\" - Joe Czerwinski pour Robert Parker\r\nPlein en bouche, puissant et gorgé de fruits noirs, poivre et réglisse, pariez sur lui pour les 10 ans à venir. Cépages, terroir, savoir-faire sont harmonieusement conjugués. Epicé juste ce qu\'il faut, la bouche dévoile une texture velouté, fruité, et une fraîcheur de belle persistance. La première gorgée est déjà convaincante, le reste n\'est que plaisir. En quelques millésimes, cette cuvée s\'impose comme une référence parmi les vins du Languedoc Roussillon !', 5, 20, NULL),
(6, 2, 'CROZES-HERMITAGE GRAND CLASSIQUE 2017 - CAVE DE TAIN ', 'https://www.vinatis.com/36886-fine_default/crozes-hermitage-grand-classique-2017-cave-de-tain.png', 'Vin Rouge / Rhône / Crozes-Hermitage AOC / 13 % vol / 100% Syrah', 'STOP-AFFAIRE  : Un Crozes-Hermitage à prix imbattable sur un millésime 2017 rempli de fraîcheur : une valeur sûre sans faille !\r\nParmi toutes les appellations, Crozes-Hermitage est sans doute la grande spécialité de la Cave de Tain : à elle seule, elle produit près de 50% de l’appellation. Elle en tire un rouge particulièrement frais et fruité, aux arômes intenses et délicats de fruits rouges, de fruits noirs et d’épices. On aime sa belle ampleur en bouche, on se laisse envahir par sa générosité remarquable, on succombe à sa finale persistante et fraîche sur le cassis, la violette et les épices orientales. Une très belle réussite de la Cave de Tain !', 5, 10, NULL),
(7, 2, 'RESERVE 2017 - MAISON PERRIN ET FILS ', 'https://www.vinatis.com/44304-fine_default/reserve-2017-maison-perrin-et-fils.png', 'Vin Rouge / Rhône / Côtes du Rhône AOC / 13,5 % vol', 'Du corps et du fruit, de la finesse et de la profondeur, l\'harmonie règne en maître. \r\nCréé par les fils Perrin, propriétaires d’un des plus célèbres Chateauneuf-du-Pape, le Château de Beaucastel, porte le sceau de leur savoir-faire. Fruité, gourmand, charnu, c’est LE Côtes du Rhône par excellence. Soyeux, d’une irrésistible fraîcheur, cette cuvée Réserve se montre élégante et subtile, et fera sensation à coup sûr !  Avec la Maison Perrin et Fils, un simple Côtes du Rhône est un grand vin !', 5, 8, NULL),
(8, 2, 'COTES DU RHONE 2016 - E. GUIGAL ', 'https://www.vinatis.com/44243-fine_default/cotes-du-rhone-2016-e-guigal.png', 'Vin Rouge / Rhône / Côtes du Rhône AOC / 14,5 % vol', 'Le Best-Sellers en Côtes du Rhône ! Une régularité sans faille pour la valeur sûre signée GUIGAL !\r\nSon nez de fruits noirs, associé à ses jolies notes épicées de garrigue, en fait un vrai vin de plaisir, de finesse et d’élégance. Millésime après millésime on a de cesse d\'apprécier sa régularité et sa consistance ! Un vin haut de gamme au rapport qualité-prix imbattable ! La qualité Guigal à moindre coût !', 5, 20, NULL),
(9, 2, 'BAROLO 2014 - MARIO GIRIBALDI ', 'https://www.vinatis.com/44485-fine_default/barolo-2014-mario-giribaldi.png', 'Vin Rouge / Italie / Piémont / Barolo DOC / 14 % vol / 100% Nebbiolo', '\" Un Barolo riche et sombre, qui s\'ouvre et se développe sur une intensité et une profondeur impressionnantes. \" R. Parker\r\nExprimant dès sa jeunesse une merveilleuse gourmandise de fruits et des tanins déjà patinés, ce Barolo 2014 incarne parfaitement ce beau millésime : Un vin italien mûr et généreux, doté d’une belle structure complexe. Long et équilibré, il rendra parfaitement compte de son terroir après quelques années de garde. Il sera alors délicieux en accompagnement d’un gibier ou d’une viande rouge. Un véritable régal...', 5, 20, NULL),
(10, 3, 'CONDRIEU LES GRANDES CHAILLEES 2018 - STEPHANE MONTEZ DU MONTEILLET ', 'https://www.vinatis.com/45190-fine_default/condrieu-les-grandes-chaillees-2018-stephane-montez-du-monteillet.png', ' Vin Blanc / Rhône / Condrieu AOC / 14 % vol / 100% Viognier', 'Un Condrieu exemplaire... Un succès, millésime après millésime, et ce 2018 promet, lui aussi, de grandes choses!\nUn Condrieu équilibré et ciselé qui exprime tous ses arômes tout au long de la dégustation, du nez jusqu’à sa belle et longue finale. Une référence incontournable… Aux vues du talent de ce vigneron prodige, son Condrieu ne peut se définir que par sa justesse et sa précision ! Fruité et rondeur sont au rendez-vous de ce vin d\'une belle fraîcheur en bouche qui ne manquera pas de vous régaler ! Une référence devenue incontournable…', 5, 31, NULL),
(11, 5, 'RIVESALTES AMBRE HORS D\'AGE - DOMAINE LAFAGE ', 'https://www.vinatis.com/25014-fine_default/rivesaltes-ambre-hors-d-age-domaine-lafage.png', 'Vin Ambré / Languedoc-Roussillon / Rivesaltes AOC / 15 % vol', 'Récompensé de la meilleure note dans son appellation par la RVF, applaudi par le Guide Hachette et salué par Robert Parker, ce Rivesaltes ambré a fait l’unanimité auprès des plus grands experts !\n  Comment résister au charme de ce vin ambré, profond et si complexe ! Dès le premier nez, on se laisse immédiatement séduire par ses notes florales et ses nuances d’abricots secs et de café grillé. En bouche, l’équilibre parfait entre sa puissance, son velouté et ses notes gourmandes de fruits confits et de brioche est tout simplement éblouissant. Un joli souvenir de dégustation ! Idéal avec le chocolat ! En savoir plus sur notre blog : Quel vin avec le chocolat ?', 5, 17, NULL),
(12, 3, 'PREMIERES GRIVES 2018 - DOMAINE TARIQUET ', 'https://www.vinatis.com/42874-fine_default/premieres-grives-2018-domaine-tariquet.png', 'Vin Blanc / Sud-Ouest / Côtes de Gascogne IGP / 11,5 % vol', 'Dangereusement bon, cette cuvée a fait la notoriété et le succès du Domaine Tariquet. Ne pas le connaître est un péché... \nLes Premières Grives ou le plaisir de se faire plaisir... ! Succès mondial, les \" Premières Grives \" du Domaine du Tariquet c\'est avant tout : \"une bouche gourmande, fruitée , vive et moelleuse (fruits exotiques, agrumes et raisins frais).\" C\'est un vin qui se glisse entre 2 sensations : celle d\'une onctuosité enjôleuse, conjuguée à une profonde fraîcheur. Ce duo moelleux/fraîcheur, qui fonctionne à merveille, lui donne cette originalité si recherchée. Il se boit et se partage en toutes occasions, avec des atouts si redoutables qu\'à l\'aveugle, on ne peut se douter de son formidable rapport qualité-prix...! Dangereusement bon, cette cuvée a fait la notoriété et le succès du Domaine Tariquet. Ne pas le connaître est un péché...!', 5, 11, NULL),
(13, 5, 'AUREO SOLERA DULCE 1954 - DE MULLER ', 'https://www.vinatis.com/28581-fine_default/aureo-solera-dulce-1954-de-muller.png', 'Vin Ambré / Espagne / Catalogne / Tarragona DO / 20 % vol', 'Une cuvée de 1954 qui sublimera vos papilles... Les notes des critiques internationaux sont unanimes... 93/100 et 95/100 que dire de plus ? Parfait pour un apéritif ou avec un dessert au chocolat !\nCette cuvée est élaborée selon la méthode Solera qui consiste à assembler en continu des vins anciens et des vins jeunes. La première élaboration a commencé en 1954, puis chaque année, 1/3 des vins est enlevé, et remplacé par des vins d\'autres millésimes. Nos sommeliers ont été subjugués par autant de saveurs et de douceur dès la première gorgée...Un vin espagnol vraiment à part pour une dégustation des plus spéciales !', 5, 17, NULL),
(14, 3, 'MORILLON BLANC 2017 - BY JEFF CARREL ', 'https://www.vinatis.com/42329-fine_default/morillon-blanc-2017-by-jeff-carrel.png', 'Vin Blanc / Languedoc-Roussillon / Pays d\'Aude IGP / 14,5 % vol / 100% Chardonnay', 'Médaille d\'or, ce 100% chardonnay, frais et équilibré va vous subjuguer et vous surprendre ! Encore une réussite signée Jeff Carrel !\nLa cuvée mono-cépage Morillon Blanc, élaborée à base de raisins botrytisés et vinifiée en sec, dévoile des arômes mûrs et expressifs sur des notes de fruits blancs comme la poire, la pêche, avec de légers arômes grillés. Ample, rond, dense avec une acidité équilibré, rafraîchissant, ce vin à l\'excellent rapport qualité-prix s\'accordera à perfection pour vos apéros estivaux ou accompagné d\'un foie gras mi-cuit, d\'une pintade aux champignons ou encore d\'une tarte aux pommes. Une petite pépite !', 5, 8, NULL),
(15, 3, 'DOMAINE HORGELUS - LE BAL DES PAPILLONS 2018 ', 'https://www.vinatis.com/38655-fine_default/domaine-horgelus-le-bal-des-papillons-2018.png', 'Vin Blanc / Sud-Ouest / Côtes de Gascogne IGP / 11 % vol', 'A ce prix, c\'est \"Coup de Cœur\" ! Ce vin est devenu en quelques millésimes un incontournable du Sud-Ouest. Vous étonnerez vos amis, sans vous tromper!\nMoelleux mais tout en finesse, ce vin possède un remarquable équilibre entre le sucre résiduel et sa belle acidité, typique du cépage. Les notes de fruits jaunes, de pêche au sirop, d’ananas vous séduiront de l’apéritif au dessert. On en devient vite addict !!! A garder sous la main !', 5, 12, NULL),
(16, 4, 'L\'ETE GASCON ROSE 2018 - DOMAINE PELLEHAUT ', 'https://www.vinatis.com/39792-fine_default/l-ete-gascon-rose-2018-domaine-pellehaut.png', 'Vin Rosé / Sud-Ouest / Côtes de Gascogne IGP / 11 % vol', 'Un véritable dessert à lui tout seul, foncez sur ce rosé doux à consommer à tout moment!\nSitué à 180m d\'altitude, les vignobles du domaine de Pellehaut bénéficient d\'un terroir idéal, d\'un ensoleillement maximal et d\'un savoir-faire de près de 4 siècles! D\'une belle oculeur dynamique, ce rosé offre un nez d\'agrumes et de fruits rouges. En bouche, le sucre ne faiblit pas et est porté par la fraîcheur du fruit. La framboise, la pêche et le pamplemousse enrobés de douceur, chatouillent le nez et caressent les papilles.. A consommer frais à tout moment!!', 5, 18, NULL),
(17, 2, 'CHATEAU DE LISSE 2012 ', 'https://www.vinatis.com/42220-fine_default/estate-blue-edition-2016-dona-paula.png', 'Vin Rouge / Bordeaux / Saint-Emilion Grand Cru AOC / 13 % vol', 'L\'affaire en Saint-Emilion Grand Cru : médaillé d\'or à Paris, ne passez pas à côté de ce Château de Lisse 2012 à prix introuvable !\nPropriété familiale depuis trois générations (famille Petit), le Château est en plein dynamisme et renouveau depuis la restructuration du vignoble, des bâtiments, ainsi que la modernisation des chais. Il en résulte un vin moderne et riche au rapport qualité-prix saisissant! Intense au nez, souple et fruité en bouche avec des tanins soyeux, la finale se prolonge sur des notes épicées et une belle longueur. Foncez sur ce vin de plaisir à prix doux! Pensez à ouvrir la bouteille au moins 30 minutes avant dégustation pour profiter pleinement de ses arômes.', 5, 16, NULL),
(18, 5, 'RIVESALTES GRANDE RESERVE 1989 - VIGNOBLES DOM BRIAL ', 'https://www.vinatis.com/38224-fine_default/rivesaltes-grande-reserve-1989-vignobles-dom-brial.png', 'Vin Ambré / Languedoc-Roussillon / Rivesaltes AOC / 16 % vol', 'Une offre rare et limitée\nUn vin d\'exception sur un millésime d\'exception ! Un véritable trésor élaboré, élevé et affiné avec soin, traduisant à merveille le savoir-faire vigneron. Les années en 9 sont connues pour leur excellence... Alors à ce prix là, il n\'y a aucunes hésitations !', 5, 20, NULL),
(19, 3, 'VGROS ET PETIT MANSENG DOUX N°4 2018 - DOMAINE UBY', 'https://www.vinatis.com/38917-fine_default/gros-et-petit-manseng-doux-n4-2018-domaine-uby.png', 'Vin Blanc / Sud-Ouest / Côtes de Gascogne IGP / 11 % vol', 'Une véritable explosion de fruits pour cette petite gourmandise au rapport qualité-prix imbattable. Sa côte de popularité ne cesse de grimper...\nElégance et fraîcheur sont au rendez-vous dans ce concentré de fruits exotiques (passion, ananas, mangue...) à la bouche veloutée et onctueuse, exprimant des notes de coing et de citron confit. Un compagnon plein de douceur et de fraîcheur, qui fera le bonheur de vos repas !', 5, 7, NULL),
(20, 3, 'COMTESSE DE SEGUR 2017 - CHÂTEAU LAULERIE ', 'https://www.vinatis.com/43557-fine_default/cotes-du-rhone-air-baloon-2016-xavier-vignon.png', ' Vin Blanc / Sud-Ouest / Montravel AOC / 13 % vol / 100% Sauvignon blanc', 'Un Montravel qui n\'a rien à envier aux grands Sancerre !\nD’un jaune doré brillant, ce Montravel 2017 propose un bouquet subtil de fleurs blanches et de buis, agrémenté de notes minérales et d’un très léger boisé. Tout en rondeur et en délicatesse, la bouche présente du gras, de la fraîcheur et toujours de arômes floraux enrichis de touches d’agrumes. L’équilibre est remarquable, ainsi que l’élevage, parfaitement fondu. Déjà savoureux, ce magnifique montravel pourra aussi être gardé en cave.', 5, 11, NULL),
(21, 4, 'ROSE DE PRESSEE 2018 - DOMAINE TARIQUET ', 'https://www.vinatis.com/39761-fine_default/rose-de-pressee-2018-domaine-tariquet.png', 'Vin Rosé / Sud-Ouest / Côtes de Gascogne IGP / 11,5 % vol', 'Compagnon de soif et de plaisir, le vin rosé de Tariquet est à boire avec la plus grande simplicité pour la saveur et la fraîcheur de son fruit !\nDe sa robe grenadine s’échappe un nez intense et subtil aux nuances d’épices douces, de framboises sauvages et de pétales de fleurs. Opulent, frais et gourmand, le fruit de ce rosé charnu et aérien est magnifiquement préservé par une capsule à vis, comme une incitation à boire ce rosé dans l’immédiateté de sa prime jeunesse. Idéal à consommer à l’apéritif ou au cours d’un repas, il accompagne à merveille les tapas, la cuisine d’été, italienne, épicée et exotique. Le rosé \"passe-partout\" qui ne vous décevra jamais !', 5, 14, NULL),
(22, 4, 'UBY BYO ROSE 2018 - DOMAINE UBY ', 'https://www.vinatis.com/39511-fine_default/uby-byo-rose-2018-domaine-uby.png', 'Vin Rosé / Sud-Ouest / Côtes de Gascogne IGP / 11,5 % vol', 'Un Rosé 100% Estival ! Encore une belle réussite signée UBY. Un rosé qui va plaire !\nAvec ses arômes de framboise et de fraise présents aussi bien au nez qu\'en bouche, ce rosé est plus que gourmand. C\'est un véritable délice de fraîcheur qui s\'abattra sur vos apéritifs et barbecues de cet été 2019 ! Vous pouvez nous croire, vous ne serez pas déçus par cette cuvée aussi légère que son prix... Uby fait encore un carton plein !', 5, 20, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anniversary` date NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal` int(11) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `anniversary`, `adress`, `state`, `postal`, `phone`, `picture`, `admin`, `country`) VALUES
(9, 'Blanche', 'Alexandre', 'blanche.alex@gmail.com', '$2y$10$0id/ZS4DWeEtUi.O1tnSZeoX86ELz2Q/d78n0MRPh9jda64k6AmdK', '1990-07-10', '1 Passage des forges', 'France', 53410, 613249301, 'https://media-exp1.licdn.com/dms/image/C4D03AQEYMF_T9nHmWA/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=wQnYFWZ0FTrx3fEIfm7DXt3jT6q7JheKPphYUO7IAQ0', 1, 'Port-Brillet'),
(10, 'utilisateur123', 'siovdoivhsdo', 'dovisdovihsd@sdvisdhvsdiohv.fr', 'odivhsdvoiho', '2020-01-01', '1 rue jesaispas', 'France', 132345, 652248465, 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png', 0, 'laval');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5F9E962AA76ED395` (`user_id`),
  ADD KEY `IDX_5F9E962A4584665A` (`product_id`);

--
-- Index pour la table `credit_card`
--
ALTER TABLE `credit_card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_11D627EE67B3B43D` (`users_id`);

--
-- Index pour la table `kart`
--
ALTER TABLE `kart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_CE17A058A76ED395` (`user_id`);

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B3BA5A5ABCF5E72D` (`categorie_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT pour la table `credit_card`
--
ALTER TABLE `credit_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `kart`
--
ALTER TABLE `kart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_5F9E962A4584665A` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_5F9E962AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `credit_card`
--
ALTER TABLE `credit_card`
  ADD CONSTRAINT `FK_11D627EE67B3B43D` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `kart`
--
ALTER TABLE `kart`
  ADD CONSTRAINT `FK_CE17A058A76ED395` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_B3BA5A5ABCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
