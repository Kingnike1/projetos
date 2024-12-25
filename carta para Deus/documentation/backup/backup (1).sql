CREATE DATABASE  IF NOT EXISTS `cartas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `cartas`;
-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: cartas
-- ------------------------------------------------------
-- Server version	5.5.5-10.5.26-MariaDB-ubu2004

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cartas`
--

DROP TABLE IF EXISTS `cartas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `mensagem` text NOT NULL,
  `data_envio` timestamp NOT NULL DEFAULT current_timestamp(),
  `anonimo` tinyint(1) DEFAULT 0,
  `assunto` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartas`
--

LOCK TABLES `cartas` WRITE;
/*!40000 ALTER TABLE `cartas` DISABLE KEYS */;
INSERT INTO `cartas` VALUES (1,'Jesus','como vai a vida meu filho ou filha','2024-12-14 18:33:53',0,'um carta para você'),(2,'Anônimo','Querido Deus,\r\n\r\nHoje eu venho te pedir que proteja a minha família. Que a mamãe, o papai, meus irmãos e meus avós fiquem bem e saudáveis. Que nenhum mal aconteça com eles. Eu sei que você está sempre com a gente, mas queria te pedir para cuidar deles com muito carinho.\r\n\r\nAgradeço por me dar uma casa para morar e amigos para brincar. Eu quero ser uma pessoa boa, ajudar quem precisa e ser feliz.\r\n\r\nAmém.','2024-12-14 18:37:11',1,'Pedido de proteção para a família'),(3,'Anônimo','Querido Papai do Céu,\r\n\r\nQuero te agradecer por este dia tão bonito. Hoje, brinquei com os meus amigos, fizemos muitas coisas legais, e eu me diverti muito! Agradeço também pela minha casa quentinha, pela comida e por tudo de bom que tenho.\r\n\r\nEu sei que você cuida de mim e me dá forças para ser feliz. Quero sempre lembrar de ser grato por tudo o que tenho.\r\n\r\nTe amo, Deus!','2024-12-14 18:37:32',1,'Gratidão pelo dia'),(4,'Anônimo','Querido Deus,\r\n\r\nEu tenho algumas dificuldades e, às vezes, fico triste porque não sei como resolver tudo sozinho. Por favor, me ajude a entender melhor as coisas, especialmente quando estou na escola ou com os meus amigos. Quero aprender sempre mais e ser uma pessoa melhor.\r\n\r\nPor favor, me dê sabedoria para saber o que é certo e o que é errado, e me ajude a fazer boas escolhas.\r\n\r\nObrigado, Papai do Céu, por sempre me ouvir.\r\n','2024-12-14 18:37:47',1,'Sabedoria para enfrentar os desafios'),(5,'Anônimo','Querido Deus,\r\n\r\nHoje, meu amigo Pedro estava triste. Ele me disse que não está bem e não sabe o que fazer. Eu queria que ele fosse feliz de novo. Por favor, cuida dele e mostra a ele como sair dessa tristeza. Que ele sinta a tua presença e saiba que tudo vai melhorar.\r\n\r\nEu também preciso de um pouco da tua ajuda para ser um bom amigo para ele. Obrigado por me ensinar a cuidar dos outros.\r\n\r\nCom carinho','2024-12-14 18:38:14',1,'Ajudar um amigo'),(6,'Anônimo','Querido Deus,\r\n\r\nEu sei que o mundo tem muitas coisas boas, mas também tem muita briga e gente triste. Eu te peço que traga mais paz para as pessoas. Que elas possam conversar e se entender, e que todos possam viver sem medo e com muito amor.\r\n\r\nQue o mundo inteiro sinta a tua paz e amor.\r\n\r\nObrigado por tudo que faz por mim.','2024-12-14 18:38:39',1,'Paz no mundo'),(7,'Anônimo','Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplica, com ação de graças, apresentai os vossos pedidos a Deus. - Fp 4:6\r\n\r\npai me ajudar com a minha ansiedade','2024-12-14 19:55:18',1,'ando muito ansioso ultimamente');
/*!40000 ALTER TABLE `cartas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-14 17:07:01
