CREATE TABLE `ht_property_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(30) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ht_property` (
  `id` int NOT NULL AUTO_INCREMENT,
  `schoolId` int NOT NULL,
  `userId` int NOT NULL,
  `propertyTypeId` int NOT NULL,
  `ownerId` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `apartment` varchar(30) DEFAULT NULL,
  `address` varchar(70) DEFAULT NULL,
  `streetAddress` varchar(30) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `rent` double(10,2) DEFAULT NULL,
  `isPrimary` char(1) DEFAULT '0',
  `lease_expiry_date` date DEFAULT NULL,
  `canTenantInitiate` tinyint(1) NOT NULL DEFAULT '0',
  `status` enum('Active') DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `schoolId` (`schoolId`),
  KEY `userId` (`userId`),
  KEY `propertyTypeId` (`propertyTypeId`),
  KEY `ownerId` (`ownerId`),
  CONSTRAINT `htPropertyIbfk3` FOREIGN KEY (`propertyTypeId`) REFERENCES `ht_property_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ht_rent_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `propertyId` int NOT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `ats` double(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Credit from Background company',
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `propertyId` (`propertyId`),
  CONSTRAINT `htRentDetailIbfk1` FOREIGN KEY (`propertyId`) REFERENCES `ht_property` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ht_tenant_property` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenantId` int NOT NULL,
  `propertyId` int NOT NULL,
  `moveIn` date DEFAULT NULL,
  `moveOut` date DEFAULT NULL,
  `status` enum('Active','Disengaged') NOT NULL DEFAULT 'Active',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tenantId` (`tenantId`),
  KEY `propertyId` (`propertyId`),
  CONSTRAINT `htTenantPropertyIbfk_2` FOREIGN KEY (`propertyId`) REFERENCES `ht_property` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;