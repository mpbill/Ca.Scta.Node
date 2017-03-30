CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street1` varchar(100) NOT NULL,
  `street2` varchar(100) DEFAULT NULL,
  `street3` varchar(100) DEFAULT NULL,
  `zipCode` varchar(5) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(2) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `positions` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `positionName` varchar(45) NOT NULL,
  `positionEmail` varchar(45) NOT NULL,
  `volunteerName` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
