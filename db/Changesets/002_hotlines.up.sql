CREATE TABLE `scta`.`hotlines` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `areaCode` VARCHAR(3) NULL,
  `exchangeCode` VARCHAR(3) NULL,
  `subscriberNumber` VARCHAR(4) NULL,
  PRIMARY KEY (`Id`));