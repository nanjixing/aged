/*
 Navicat Premium Data Transfer

 Source Server         : tnx
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : shop_aged

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 02/06/2021 17:43:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `total` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 106 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES (72, 45, 62, 2, 100.00, '200.0');
INSERT INTO `car` VALUES (83, 45, 69, 1, 100.00, '100.0');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `item_id` int(11) NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `addTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (10, 62, 45, 'good', '2021-05-04 21:21:23');
INSERT INTO `comment` VALUES (11, 62, 45, '5-4 09:12', '2021-05-05 20:55:58');
INSERT INTO `comment` VALUES (12, 62, 45, '5-5 22', '2021-05-05 22:51:06');
INSERT INTO `comment` VALUES (13, 62, 45, '5-5 23', '2021-05-05 23:20:08');
INSERT INTO `comment` VALUES (14, 62, 45, '5-5 23', '2021-05-05 23:22:53');
INSERT INTO `comment` VALUES (15, 62, 45, 'last', '2021-05-05 23:29:38');
INSERT INTO `comment` VALUES (16, 62, 45, 'last2', '2021-05-05 23:31:03');
INSERT INTO `comment` VALUES (17, 68, 49, 'good goods', '2021-05-07 22:44:40');
INSERT INTO `comment` VALUES (18, 69, 44, 'good gods!', '2021-05-24 16:55:20');
INSERT INTO `comment` VALUES (19, 69, 54, 'good goods!', '2021-05-26 21:11:30');
INSERT INTO `comment` VALUES (20, 69, 55, '非常好用', '2021-06-01 21:14:59');

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `scNum` int(11) NULL DEFAULT NULL COMMENT '收藏数',
  `gmNum` int(11) NULL DEFAULT NULL COMMENT '购买数',
  `url1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `url2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `url3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `url4` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `url5` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ms` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `pam1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '参数1',
  `pam2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '参数2',
  `pam3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '参数3',
  `val3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '值3',
  `val2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '值2',
  `val1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '值1',
  `type` int(11) NULL DEFAULT NULL,
  `zk` int(10) NULL DEFAULT NULL COMMENT '折扣',
  `category_id_one` int(11) NULL DEFAULT NULL COMMENT '类别id',
  `category_id_two` int(11) NULL DEFAULT NULL COMMENT '类别2级',
  `isDelete` int(2) NULL DEFAULT NULL COMMENT '0否 1是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 57 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES (39, '老年女装T恤衫', '39.3', 1, 2, '/test1_war_exploded/resource/ueditor/upload/4d3f1bc0b0db11ebdeff09cfde08326fyifu2.jpg', '/test1_war_exploded/resource/ueditor/upload/4d429e30b0db11ebdeff09cfde08326fyifu1.jpg', '/test1_war_exploded/resource/ueditor/upload/4d4472f0b0db11ebdeff09cfde08326fyifu0.jpg', '/test1_war_exploded/resource/ueditor/upload/4d45ab70b0db11ebdeff09cfde08326fyifums1.jpg', '/test1_war_exploded/resource/ueditor/upload/4d4954f0b0db11ebdeff09cfde08326fyifums2.jpg', '<p><strong>好看的衣服</strong></p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/b205bcf0a67f11ebbe65f2ea95aed70cyifums1.jpg\" title=\"\" alt=\"yifums1.jpg\"/><img src=\"/test1_war_exploded/resource/ueditor/upload/b46b7250a67f11ebbe65f2ea95aed70cyifums2.jpg\" title=\"\" alt=\"yifums2.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 113, 118, 0);
INSERT INTO `item` VALUES (40, '护理床1', '80', 1, 0, '/test1_war_exploded/resource/ueditor/upload/3be54660b0db11ebdeff09cfde08326fhl3.jpg', '/test1_war_exploded/resource/ueditor/upload/3be6f410b0db11ebdeff09cfde08326fhl0.jpg', '/test1_war_exploded/resource/ueditor/upload/3be87ab0b0db11ebdeff09cfde08326fhl1.jpg', '/test1_war_exploded/resource/ueditor/upload/3beac4a0b0db11ebdeff09cfde08326fhl2.jpg', '/test1_war_exploded/resource/ueditor/upload/3bed5cb0b0db11ebdeff09cfde08326fhl4.jpg', '<p>护理床</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/c89603d0a69311ebbe65f2ea95aed70chl4.jpg\" title=\"\" alt=\"hl4.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 8, 114, 133, 0);
INSERT INTO `item` VALUES (41, '护理床2', '100', 6, 7, '/test1_war_exploded/resource/ueditor/upload/2e0b9710b0db11ebdeff09cfde08326fhl0.jpg', '/test1_war_exploded/resource/ueditor/upload/2e0de100b0db11ebdeff09cfde08326fhl1.jpg', '/test1_war_exploded/resource/ueditor/upload/2e0f8eb0b0db11ebdeff09cfde08326fhl2.jpg', '/test1_war_exploded/resource/ueditor/upload/2e129bf0b0db11ebdeff09cfde08326fhl3.jpg', '/test1_war_exploded/resource/ueditor/upload/2e14bed0b0db11ebdeff09cfde08326fhl4.jpg', '<p>护理床2</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/f0d757e0a69311ebbe65f2ea95aed70chl3.jpg\" title=\"\" alt=\"hl3.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 132, 0);
INSERT INTO `item` VALUES (42, '护理床3', '110', 4, 5, '/test1_war_exploded/resource/ueditor/upload/17533eb0b0db11ebdeff09cfde08326f床2.jpg', '/test1_war_exploded/resource/ueditor/upload/17567300b0db11ebdeff09cfde08326f床3.jpg', '/test1_war_exploded/resource/ueditor/upload/175b06e0b0db11ebdeff09cfde08326f床4.jpg', '/test1_war_exploded/resource/ueditor/upload/175fe8e0b0db11ebdeff09cfde08326f老年床0.jpg', '/test1_war_exploded/resource/ueditor/upload/1763b970b0db11ebdeff09cfde08326f床1.jpg', '<p>护理床3</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/15381660a69411ebbe65f2ea95aed70chl2.jpg\" title=\"\" alt=\"hl2.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 133, 0);
INSERT INTO `item` VALUES (43, '护理床4', '80', 0, 3, '/test1_war_exploded/resource/ueditor/upload/0a1a6340b0db11ebdeff09cfde08326f床2.jpg', '/test1_war_exploded/resource/ueditor/upload/0a1b9bc0b0db11ebdeff09cfde08326f床3.jpg', '/test1_war_exploded/resource/ueditor/upload/0a200890b0db11ebdeff09cfde08326f床4.jpg', '/test1_war_exploded/resource/ueditor/upload/0a255fc0b0db11ebdeff09cfde08326f老年床0.jpg', '/test1_war_exploded/resource/ueditor/upload/0a29cc90b0db11ebdeff09cfde08326f床1.jpg', '<p>护理床4</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/437da350a69411ebbe65f2ea95aed70chl0.jpg\" title=\"\" alt=\"hl0.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 133, 0);
INSERT INTO `item` VALUES (44, '护理床5', '80', 3, 14, '/test1_war_exploded/resource/ueditor/upload/fa7060c0b0da11ebdeff09cfde08326f老年床0.jpg', '/test1_war_exploded/resource/ueditor/upload/fa71c050b0da11ebdeff09cfde08326f床1.jpg', '/test1_war_exploded/resource/ueditor/upload/fa740a40b0da11ebdeff09cfde08326f床2.jpg', '/test1_war_exploded/resource/ueditor/upload/fa75b7f0b0da11ebdeff09cfde08326f床3.jpg', '/test1_war_exploded/resource/ueditor/upload/fa789e20b0da11ebdeff09cfde08326f床4.jpg', '<p>护理床5</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/3d360360a69511ebbe65f2ea95aed70chl0.jpg\" title=\"\" alt=\"hl0.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 133, 0);
INSERT INTO `item` VALUES (45, '垫子1', '100', 11, 13, '/test1_war_exploded/resource/ueditor/upload/e8640440b0da11ebdeff09cfde08326f老年垫子0.jpg', '/test1_war_exploded/resource/ueditor/upload/e8660010b0da11ebdeff09cfde08326f老年垫子3.jpg', '/test1_war_exploded/resource/ueditor/upload/e868e640b0da11ebdeff09cfde08326f老年垫子1.jpg', '/test1_war_exploded/resource/ueditor/upload/e86ba560b0da11ebdeff09cfde08326f老年垫子2.jpg', '/test1_war_exploded/resource/ueditor/upload/e86e8b90b0da11ebdeff09cfde08326f老年垫子4.jpg', '<p>老年垫子</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/82335590a71b11ebabf76e922bcfa403老年垫子2.jpg\" title=\"\" alt=\"老年垫子2.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 10, 114, 122, 0);
INSERT INTO `item` VALUES (46, '垫子2', '110', 1, 3, '/test1_war_exploded/resource/ueditor/upload/d98df390b0da11ebdeff09cfde08326f老年垫子3.jpg', '/test1_war_exploded/resource/ueditor/upload/d98f7a30b0da11ebdeff09cfde08326f老年垫子1.jpg', '/test1_war_exploded/resource/ueditor/upload/d9917600b0da11ebdeff09cfde08326f老年垫子3.jpg', '/test1_war_exploded/resource/ueditor/upload/d9943520b0da11ebdeff09cfde08326f老年垫子4.jpg', '/test1_war_exploded/resource/ueditor/upload/d995e2d0b0da11ebdeff09cfde08326f老年垫子1.jpg', '<p>垫子2</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/cfcd35a0a71b11ebabf76e922bcfa403老年垫子0.jpg\" title=\"\" alt=\"老年垫子0.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 122, 0);
INSERT INTO `item` VALUES (47, '助步器1', '100', 0, 1, '/test1_war_exploded/resource/ueditor/upload/c72a0130b0da11ebdeff09cfde08326f老年助步器0.jpg', '/test1_war_exploded/resource/ueditor/upload/c72bd5f0b0da11ebdeff09cfde08326f老年助步器1.jpg', '/test1_war_exploded/resource/ueditor/upload/c72d5c90b0da11ebdeff09cfde08326f老年助步器2.jpg', '/test1_war_exploded/resource/ueditor/upload/c72fa680b0da11ebdeff09cfde08326f老年助步器3.jpg', '/test1_war_exploded/resource/ueditor/upload/c731a250b0da11ebdeff09cfde08326f老年助步器4.jpg', '<p>老年助步器</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/ff75fc10a71b11ebabf76e922bcfa403老年助步器0.jpg\" title=\"\" alt=\"老年助步器0.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 117, 127, 0);
INSERT INTO `item` VALUES (48, '老年助步器2', '110', 0, 0, '/test1_war_exploded/resource/ueditor/upload/a9a7d600b0da11ebdeff09cfde08326f老年助步器0.jpg', '/test1_war_exploded/resource/ueditor/upload/a9a9aac0b0da11ebdeff09cfde08326f老年助步器4.jpg', '/test1_war_exploded/resource/ueditor/upload/a9ab5870b0da11ebdeff09cfde08326f老年助步器2.jpg', '/test1_war_exploded/resource/ueditor/upload/a9ada260b0da11ebdeff09cfde08326f老年助步器1.jpg', '/test1_war_exploded/resource/ueditor/upload/a9af7720b0da11ebdeff09cfde08326f老年助步器3.jpg', '<p>老年助步器2<img src=\"/test1_war_exploded/resource/ueditor/upload/1dbcafc0a71c11ebabf76e922bcfa403老年助步器1.jpg\" title=\"\" alt=\"老年助步器1.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 8, 117, 127, 0);
INSERT INTO `item` VALUES (49, '老年助步器3', '120', 4, 7, '/test1_war_exploded/resource/ueditor/upload/9d9244e0b0da11ebdeff09cfde08326f老年助步器4.jpg', '/test1_war_exploded/resource/ueditor/upload/9d93f290b0da11ebdeff09cfde08326f老年助步器0.jpg', '/test1_war_exploded/resource/ueditor/upload/9d95ee60b0da11ebdeff09cfde08326f老年助步器1.jpg', '/test1_war_exploded/resource/ueditor/upload/9d979c10b0da11ebdeff09cfde08326f老年助步器3.jpg', '/test1_war_exploded/resource/ueditor/upload/9d99e600b0da11ebdeff09cfde08326f老年助步器2.jpg', '<p>老年助步器3</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/3fbc73d0a71c11ebabf76e922bcfa403老年助步器4.jpg\" title=\"\" alt=\"老年助步器4.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 117, 127, 0);
INSERT INTO `item` VALUES (50, '垫子3', '200', 0, 0, '/test1_war_exploded/resource/ueditor/upload/0121da50b0bf11eba212ff9c6f2b35ab老年垫子0.jpg', '/test1_war_exploded/resource/ueditor/upload/012312d0b0bf11eba212ff9c6f2b35ab老年垫子1.jpg', '/test1_war_exploded\\resource\\ueditor\\upload\\01249970b0bf11eba212ff9c6f2b35ab老年垫子2.jpg', '/test1_war_exploded\\resource\\ueditor\\upload\\0125f900b0bf11eba212ff9c6f2b35ab老年垫子3.jpg', '/test1_war_exploded\\resource\\ueditor\\upload\\012a65d0b0bf11eba212ff9c6f2b35ab老年垫子4.jpg', '<p>good goods</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/ffb3cb60b0be11eba212ff9c6f2b35ab老年垫子1.jpg\" title=\"\" alt=\"老年垫子1.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 122, 1);
INSERT INTO `item` VALUES (51, '垫子3', '200', 0, 0, '/test1_war_exploded/resource/ueditor/upload/8d5c2f00b0da11ebdeff09cfde08326f老年垫子0.jpg', '/test1_war_exploded/resource/ueditor/upload/8d5db5a0b0da11ebdeff09cfde08326f老年垫子1.jpg', '/test1_war_exploded/resource/ueditor/upload/8d5ea000b0da11ebdeff09cfde08326f老年垫子2.jpg', '/test1_war_exploded/resource/ueditor/upload/8d60e9f0b0da11ebdeff09cfde08326f老年垫子3.jpg', '/test1_war_exploded/resource/ueditor/upload/8d6333e0b0da11ebdeff09cfde08326f老年垫子4.jpg', '<p><img class=\"loadingclass\" id=\"loading_koh5mfrn\" src=\"http://localhost:8080/test1_war_exploded/resource/ueditor/themes/default/images/spacer.gif\" title=\"正在上传...\"/>good goods</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/d9ac4870b0c311eb4a502c3d2a4b11cd老年垫子0.jpg\" title=\"\" alt=\"老年垫子0.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 114, 122, 0);
INSERT INTO `item` VALUES (52, '垫子4', '300', 0, 0, '/test1_war_exploded/resource/ueditor/upload/6b8ef730b0db11ebdeff09cfde08326f老年垫子0.jpg', '/test1_war_exploded/resource/ueditor/upload/6b90cbf0b0db11ebdeff09cfde08326f老年垫子1.jpg', '/test1_war_exploded/resource/ueditor/upload/6b9279a0b0db11ebdeff09cfde08326f老年垫子3.jpg', '/test1_war_exploded/resource/ueditor/upload/6b9511b0b0db11ebdeff09cfde08326f老年垫子4.jpg', '/test1_war_exploded/resource/ueditor/upload/6b96bf60b0db11ebdeff09cfde08326f老年垫子2.jpg', '<p>good goods!!!</p><p><img src=\"/test1_war_explodedhttp://391661q0s0.wicp.vip/test1_war_exploded/resource/ueditor/upload/8b53a5f0b26811ebd2ac65476181419b老年垫子0.jpg\" title=\"\" alt=\"老年垫子0.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 8, 114, 122, 0);
INSERT INTO `item` VALUES (53, 'lnzfq', '100', 0, 0, '/test1_war_exploded/resource/ueditor/upload/0e976d00b88811ebd0a273ff61cbfb68depositphotos_240529500-stock-illustration-barber-icon-vector-sign-symbol.jpg', NULL, NULL, NULL, NULL, '<p>sdfsf</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/05881700b88811ebd0a273ff61cbfb6827384959_125837289082_4.jpg\" title=\"\" alt=\"27384959_125837289082_4.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 117, 127, 1);
INSERT INTO `item` VALUES (54, '血糖仪01', '200', 3, 5, '/test1_war_exploded/resource/ueditor/upload/6fadee40be2111ebeb47e7a3809fbcfb血糖仪01.jpg', '/test1_war_exploded/resource/ueditor/upload/6faeffb0be2111ebeb47e7a3809fbcfb血糖仪02.jpg', '/test1_war_exploded/resource/ueditor/upload/6fb01120be2111ebeb47e7a3809fbcfb血糖仪03.jpg', '/test1_war_exploded/resource/ueditor/upload/6fb170b0be2111ebeb47e7a3809fbcfb血糖仪04.jpg', '/test1_war_exploded/resource/ueditor/upload/6fb31e60be2111ebeb47e7a3809fbcfb血糖仪03.jpg', '<p>血糖仪测血糖</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/6a2cef20be2111ebeb47e7a3809fbcfb血糖仪02.jpg\" title=\"\" alt=\"血糖仪02.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 8, 135, 136, 0);
INSERT INTO `item` VALUES (55, '血糖仪02', '300', 0, 5, '/test1_war_exploded/resource/ueditor/upload/4cf81790c1b911eb5027ab71659e8f2c血糖仪01.jpg', '/test1_war_exploded/resource/ueditor/upload/4cf9c540c1b911eb5027ab71659e8f2c血糖仪02.jpg', '/test1_war_exploded/resource/ueditor/upload/4cfb9a00c1b911eb5027ab71659e8f2c血糖仪03.jpg', '/test1_war_exploded/resource/ueditor/upload/4d016660c1b911eb5027ab71659e8f2c血糖仪04.jpg', NULL, '<p>good goods!</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/4b9a5c50c1b911eb5027ab71659e8f2c血糖仪04.jpg\" title=\"\" alt=\"血糖仪04.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 135, 136, 0);
INSERT INTO `item` VALUES (56, '血糖仪03', '300', 1, 4, '/test1_war_exploded/resource/ueditor/upload/b46b8d30c1b911eb076a3072d4b34ac2血糖仪04.jpg', '/test1_war_exploded/resource/ueditor/upload/b46ee890c1b911eb076a3072d4b34ac2血糖仪01.jpg', '/test1_war_exploded/resource/ueditor/upload/b4b01040c1b911eb076a3072d4b34ac2血糖仪02.jpg', '/test1_war_exploded/resource/ueditor/upload/b4b121b0c1b911eb076a3072d4b34ac2血糖仪03.jpg', NULL, '<p>血糖仪03</p><p><img src=\"/test1_war_exploded/resource/ueditor/upload/b2e1dff0c1b911eb076a3072d4b34ac2血糖仪04.jpg\" title=\"\" alt=\"血糖仪04.jpg\"/></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 8, 135, 136, 0);

-- ----------------------------
-- Table structure for item_category
-- ----------------------------
DROP TABLE IF EXISTS `item_category`;
CREATE TABLE `item_category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pid` int(11) NULL DEFAULT NULL,
  `isDelete` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 137 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item_category
-- ----------------------------
INSERT INTO `item_category` VALUES (113, '老人衣服', NULL, 0);
INSERT INTO `item_category` VALUES (114, '老人床', NULL, 0);
INSERT INTO `item_category` VALUES (115, '老人轮椅', NULL, 0);
INSERT INTO `item_category` VALUES (116, '老人家具', NULL, 0);
INSERT INTO `item_category` VALUES (117, '老人生活用品', NULL, 0);
INSERT INTO `item_category` VALUES (118, '上衣', 113, 0);
INSERT INTO `item_category` VALUES (119, '裤子', 113, 0);
INSERT INTO `item_category` VALUES (120, '鞋子', 113, 0);
INSERT INTO `item_category` VALUES (121, '褥子', 114, 0);
INSERT INTO `item_category` VALUES (122, '垫子', 114, 0);
INSERT INTO `item_category` VALUES (123, '老人按摩保健', NULL, 0);
INSERT INTO `item_category` VALUES (124, '脖子按摩仪', 123, 0);
INSERT INTO `item_category` VALUES (125, '按摩脚', 123, 0);
INSERT INTO `item_category` VALUES (126, '按摩椅', 123, 0);
INSERT INTO `item_category` VALUES (127, '辅助行走', 117, 0);
INSERT INTO `item_category` VALUES (128, '防滑扶手', 117, 0);
INSERT INTO `item_category` VALUES (129, '智能拐杖', 117, 0);
INSERT INTO `item_category` VALUES (130, '摇摇椅', 116, 0);
INSERT INTO `item_category` VALUES (131, '按摩椅', 116, 0);
INSERT INTO `item_category` VALUES (132, '陪护床', 114, 0);
INSERT INTO `item_category` VALUES (133, '护理床', 114, 0);
INSERT INTO `item_category` VALUES (134, '智能按摩仪', 117, 0);
INSERT INTO `item_category` VALUES (135, '仪器', NULL, 0);
INSERT INTO `item_category` VALUES (136, '血糖仪', 135, 0);

-- ----------------------------
-- Table structure for item_order
-- ----------------------------
DROP TABLE IF EXISTS `item_order`;
CREATE TABLE `item_order`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NULL DEFAULT NULL COMMENT '1表示线下扫码取货',
  `user_id` int(11) NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `addTime` datetime(0) NULL DEFAULT NULL,
  `total` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isDelete` int(255) NULL DEFAULT NULL,
  `status` int(255) NULL DEFAULT NULL COMMENT '-1.未付款0.待发货1.已取消 2已发货3.到收货（线下扫码完成收货）4已评价',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 125 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item_order
-- ----------------------------
INSERT INTO `item_order` VALUES (38, NULL, 62, '2021042714590001', '2021-04-27 14:59:09', '72.00', 0, 1);
INSERT INTO `item_order` VALUES (39, NULL, 62, '41BDF12F8F7D68F934D277C5C79C2059', '2021-04-27 22:54:43', '72.00', 0, 1);
INSERT INTO `item_order` VALUES (40, 1, 62, 'C75FD684E51C7591A15790C25DB3AFD9', '2021-04-27 23:46:35', '90.00', 0, 3);
INSERT INTO `item_order` VALUES (47, NULL, 62, '901407DF5DC8862CA0547DFE93E66D5D', '2021-04-28 15:41:47', '90.00', 0, 1);
INSERT INTO `item_order` VALUES (48, NULL, 62, 'C03FF808168203B48C105594BDDAA0AC', '2021-04-28 15:56:56', '108.00', 0, 1);
INSERT INTO `item_order` VALUES (49, NULL, 62, 'EF74FEB62B569D94339AB598D7A3F2DB', '2021-04-28 16:00:10', '108.00', 0, 1);
INSERT INTO `item_order` VALUES (50, 1, 62, '1401AAEA40BB24686BAF1305447CFB90', '2021-05-03 17:17:21', '100.00', 0, 5);
INSERT INTO `item_order` VALUES (51, 1, 62, 'E80ACAAD4739793885DB9C2C5D135515', '2021-05-03 17:22:06', '99.00', 0, 1);
INSERT INTO `item_order` VALUES (52, NULL, 62, 'FEA57511FFC30E80CEC4FD6789C40952', '2021-05-04 21:12:15', '100.00', 0, 3);
INSERT INTO `item_order` VALUES (53, NULL, 62, 'A9CEC9FEB21DE8A651A9A702B8CD523B', '2021-05-04 21:13:42', '100.00', 0, 1);
INSERT INTO `item_order` VALUES (54, NULL, 62, '5503008585435FD5B1B937DBC9122368', '2021-05-05 09:42:37', '108.00', 0, 1);
INSERT INTO `item_order` VALUES (55, 1, 62, '1C445B4ED5DA6F399B01B9855C87CDBD', '2021-05-05 13:24:55', '90.00', 0, 3);
INSERT INTO `item_order` VALUES (56, 0, 62, '6947A31424A1650EF5C63786BB6FB53D', '2021-05-05 22:27:15', '108.00', 0, 3);
INSERT INTO `item_order` VALUES (57, 0, 62, '2028550119595EFB2C560B94D2CC0A02', '2021-05-05 22:33:06', '100.00', 0, 4);
INSERT INTO `item_order` VALUES (58, 0, 62, '86FA8104141015135102362C475BB7BE', '2021-05-06 11:10:10', '99.00', 0, 1);
INSERT INTO `item_order` VALUES (59, 0, 62, 'F425D67E2D74243A7B79C28D8729802B', '2021-05-06 11:13:34', '72.00', 0, -1);
INSERT INTO `item_order` VALUES (60, 0, 62, '3CC48493F337FD98006928361217ABB8', '2021-05-06 11:17:20', '72.00', 0, -1);
INSERT INTO `item_order` VALUES (61, 0, 62, '53DA8C89139D0EAAC7D473B663357F85', '2021-05-06 12:39:28', '100.00', 0, -1);
INSERT INTO `item_order` VALUES (62, 0, 62, '7C049C5232279F7C17CD198FCA1CF690', '2021-05-06 12:51:29', '100.00', 0, -1);
INSERT INTO `item_order` VALUES (63, 0, 62, 'C4FFA255C64DBB99A3918098851CA553', '2021-05-06 13:03:20', '108.00', 0, -1);
INSERT INTO `item_order` VALUES (64, 0, 62, '4F61FA88D2AAE44333FE614CAF3BC177', '2021-05-06 13:06:26', '99.00', 0, -1);
INSERT INTO `item_order` VALUES (65, 0, 62, '43438B49863BF19F0180AB3A83C06952', '2021-05-06 13:08:19', '99.00', 0, -1);
INSERT INTO `item_order` VALUES (66, 0, 62, '45E93D04CB04F5B306F41194BBBCF626', '2021-05-06 13:09:14', '90.00', 0, -1);
INSERT INTO `item_order` VALUES (67, 0, 62, 'A53B8F1FAD09F21B7C65A3FD66E1C84A', '2021-05-06 13:10:45', '99.00', 0, -1);
INSERT INTO `item_order` VALUES (68, 1, 62, 'CD11F6F9263EC63226E0504A4FE81828', '2021-05-06 13:12:55', '72.00', 0, 0);
INSERT INTO `item_order` VALUES (69, 1, 62, '5B03631C38D4F12E6B0F9C6F9DA4D6BE', '2021-05-06 13:23:05', '108.00', 0, 3);
INSERT INTO `item_order` VALUES (70, 1, 62, 'BF65A1D4C0FABB897050704709D9796E', '2021-05-07 16:18:22', '172.00', 0, 3);
INSERT INTO `item_order` VALUES (71, 1, 62, 'D5E6FCBFFE1ADFC82A33EE4BCB4E3A98', '2021-05-07 16:23:04', '171.00', 0, 0);
INSERT INTO `item_order` VALUES (72, 1, 68, '1788F5DA4806A53F162D3A8DDD2D786F', '2021-05-07 22:32:58', '180.00', 0, 3);
INSERT INTO `item_order` VALUES (73, 1, 68, '49B389886A8F933D325855422343961A', '2021-05-07 22:41:03', '108.00', 0, 4);
INSERT INTO `item_order` VALUES (74, 1, 62, '3D3B12C9809AA244F3D14105CE83EE9C', '2021-05-08 10:24:17', '100.00', 0, 3);
INSERT INTO `item_order` VALUES (75, 1, 62, '363157F31D4E5CF6E23CB77C0F61ACF3', '2021-05-12 21:40:12', '100.00', 0, 0);
INSERT INTO `item_order` VALUES (76, 1, 62, '611BB12B2A97463E90D22CC3F7C57C59', '2021-05-12 21:49:19', '35.37', 0, 0);
INSERT INTO `item_order` VALUES (83, 1, 62, '49D8B43C148A9DB778869A614EF9C3A1', '2021-05-15 21:43:35', '110', 0, 3);
INSERT INTO `item_order` VALUES (84, 1, 62, '7DDBF708E8A6E1EBF24B4406D3B6F408', '2021-05-15 21:55:19', '110', 0, 3);
INSERT INTO `item_order` VALUES (85, 1, 62, '4D25C94CE1C5A3AF0503A66BF61DE815', '2021-05-19 14:15:29', '100', 0, 0);
INSERT INTO `item_order` VALUES (86, 1, 62, 'F41B10D4BFD4B9582D3216A48E50ACC9', '2021-05-19 14:15:32', '100', 0, 0);
INSERT INTO `item_order` VALUES (87, 1, 62, '92C67340F82CEF3579D9F5B60759306A', '2021-05-19 17:40:20', '35.37', 0, 1);
INSERT INTO `item_order` VALUES (88, 1, 62, '7746A8790202C92EAB6565E6193EBD1F', '2021-05-19 17:49:32', '120', 0, 3);
INSERT INTO `item_order` VALUES (89, 1, 62, 'D1678517EF946DEC8C5AC924EB7548DF', '2021-05-21 16:13:19', '80', 0, 0);
INSERT INTO `item_order` VALUES (90, 1, 62, '9268801281A10E950589A38EB5184042', '2021-05-21 21:19:17', '100', 0, 0);
INSERT INTO `item_order` VALUES (91, 1, 62, '48A3CFDFC8992C6166330F24E9DB859B', '2021-05-22 21:41:33', '100', 0, 0);
INSERT INTO `item_order` VALUES (92, 1, 62, '1998145CE8079D5EA65371CBDB8E13AF', '2021-05-22 23:54:01', '100', 0, 0);
INSERT INTO `item_order` VALUES (93, 1, 69, '225E950D32B18FEBBEF48D5B7FA382E0', '2021-05-24 16:12:01', '72.00', 0, 1);
INSERT INTO `item_order` VALUES (94, 1, 69, '3D023DB24A10B9B3CF6AB5E40B8CACE7', '2021-05-24 16:13:12', '72.00', 0, 1);
INSERT INTO `item_order` VALUES (95, 1, 69, 'DCE8D8A1B64A5ECA3472BE802B85B2F3', '2021-05-24 16:26:38', '72.00', 0, 3);
INSERT INTO `item_order` VALUES (96, 1, 69, 'E103A9E5A414357CC6AFF1F0745D58BA', '2021-05-24 16:35:27', '72.00', 0, 3);
INSERT INTO `item_order` VALUES (97, 1, 69, 'EEE8880779A820B477F1552D5A001267', '2021-05-24 16:42:16', '72.00', 0, 4);
INSERT INTO `item_order` VALUES (98, 1, 69, '3C5DC20D600986E42E06F8760D02E65E', '2021-05-24 16:46:58', '72.00', 0, 1);
INSERT INTO `item_order` VALUES (99, 1, 69, '0E28B2D113F1B22812D421B27611CCDD', '2021-05-24 16:50:09', '72.00', 0, 3);
INSERT INTO `item_order` VALUES (100, 1, 69, '00699A1C2D94F6DA9BB0D062FD9BD483', '2021-05-24 16:54:21', '72.00', 0, 3);
INSERT INTO `item_order` VALUES (101, 0, 69, 'F48507CBB82A6F6EFCAC64BF690EAC7C', '2021-05-24 20:27:32', '100.00', 0, 0);
INSERT INTO `item_order` VALUES (102, 1, 69, '9C7D171E5C85612570464F4931C5E104', '2021-05-26 21:05:00', '100', 0, 3);
INSERT INTO `item_order` VALUES (103, 1, 69, '39FDC0E0242D6EAA9B6C8ED448B8F3B0', '2021-05-26 21:09:18', '160.00', 0, 4);
INSERT INTO `item_order` VALUES (104, 1, 70, '890357F32C312AF2C03993750FFF0C96', '2021-05-28 10:55:56', '160.00', 0, 3);
INSERT INTO `item_order` VALUES (105, 1, 70, 'A68A7E73C061602AE97E643BAE664078', '2021-05-28 11:17:45', '100', 0, 3);
INSERT INTO `item_order` VALUES (106, 1, 69, 'DF0906234E7EBAD3FA06A8EAEF101A3D', '2021-05-30 20:42:32', '90.00', 0, 3);
INSERT INTO `item_order` VALUES (107, 1, 69, '72702719380F3CCE240FFB586D957312', '2021-05-31 10:59:41', '270.00', 0, 0);
INSERT INTO `item_order` VALUES (108, 0, 69, '5750477F7DC722E7B1F7C3472825DB85', '2021-05-31 11:05:31', '240.00', 0, 0);
INSERT INTO `item_order` VALUES (109, 1, 69, '2400F4155D40D4DD4FB536B196199ED8', '2021-05-31 11:10:06', '270.00', 0, 0);
INSERT INTO `item_order` VALUES (110, 1, 69, '71E412D04924C9B6860CCEC701C9AD77', '2021-05-31 11:11:52', '72.00', 0, 0);
INSERT INTO `item_order` VALUES (111, 1, 69, '7E717C74C53259C554F1846C9CAF89CA', '2021-05-31 11:13:35', '72.00', 0, 0);
INSERT INTO `item_order` VALUES (112, 0, 69, 'EB7C287C2AB24B05BDCA3CC5939C04C6', '2021-05-31 11:50:37', '90.00', 0, 0);
INSERT INTO `item_order` VALUES (113, 0, 69, '0A839CC4A7AF8AB0DEFCC15E308DAB08', '2021-05-31 11:54:21', '99.00', 0, 0);
INSERT INTO `item_order` VALUES (114, 1, 69, '8B6044F2AC9B9617F44575B31D72600F', '2021-05-31 20:43:30', '200', 0, 0);
INSERT INTO `item_order` VALUES (115, 1, 69, '1F8FFDD5EFF0AC2277D14E29846A0C06', '2021-06-01 09:29:15', '240.00', 0, 0);
INSERT INTO `item_order` VALUES (116, 1, 69, 'C7413235B199B3724CFBD2B28FDC9F9E', '2021-06-01 09:32:50', '270.00', 0, 0);
INSERT INTO `item_order` VALUES (117, 1, 69, '76B2EA7DEB8325662528448A61A0B465', '2021-06-01 09:41:33', '160.00', 0, 0);
INSERT INTO `item_order` VALUES (118, 1, 69, 'D9940F3CD6FEC79A6B03EDFB3EC039BC', '2021-06-01 09:46:26', '240.00', 0, 0);
INSERT INTO `item_order` VALUES (119, 1, 69, '78A3F35AC3671589A6308F4C0C7D9D77', '2021-06-01 09:49:55', '240.00', 0, 0);
INSERT INTO `item_order` VALUES (120, 1, 69, '3936DCF0C94EA7B9CF0F2C540C8AECA0', '2021-06-01 09:51:53', '270.00', 0, 4);
INSERT INTO `item_order` VALUES (121, 1, 69, 'DA8B0D5ACD4E78C4DD27339F17617BBC', '2021-06-01 21:15:43', '160.00', 0, 0);
INSERT INTO `item_order` VALUES (122, 1, 69, '92212A1CAEAE515E3C68A2FF1154491C', '2021-06-02 16:08:26', '160.00', 0, 0);
INSERT INTO `item_order` VALUES (123, 1, 69, 'F6BE885A6498C00F10479A2EF3C9C34C', '2021-06-02 16:09:45', '270.00', 0, 0);
INSERT INTO `item_order` VALUES (124, 1, 69, '4D0EB65C1EC7EEAF54D1BBC348F3C37C', '2021-06-02 16:24:49', '200', 0, 3);

-- ----------------------------
-- Table structure for manage
-- ----------------------------
DROP TABLE IF EXISTS `manage`;
CREATE TABLE `manage`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `passWord` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `realName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manage
-- ----------------------------
INSERT INTO `manage` VALUES (1, 'admin', '111111', '管理员');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `addTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (4, '测试公告21', '<p>123123</p>', '2018-04-27 14:03:09');
INSERT INTO `news` VALUES (5, '测试公告3', '<p style=\"margin: 10px auto; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, Verdana, Arial, sans-serif; font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 23.8px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">原来是我们自使用类似于Ant来获取类的时候是不能象UserLibaray来使用的,因为我们建立的是一个web app,而web app使用的是自定义的ClassLoader,而非JVM中的存在的三种ClassLoader(如上面所说),因此它无法识别出我们写在xml文件中的第三方类库的class文件,而只有我们写在src目录下的java文件才能使用,因此,我们必须要把第三方的类库放入到lib目录下,web app 才会识别我们定义在xml中的类了 &nbsp;.</p><p style=\"margin: 10px auto; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, Verdana, Arial, sans-serif; font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 23.8px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">&nbsp; &nbsp; 通这个错误,也让我对classloader的认识也进了一步.虽然以前看过周志明的深入JVM一书中关于类加载器分派体系的介绍,但是不太理解,这样一来,自己也多了一些体会.</p><p><br/></p>', '2018-04-27 14:03:32');
INSERT INTO `news` VALUES (7, '测试公告3', '<p>你好，测试！！！</p>', '2021-04-19 16:52:17');
INSERT INTO `news` VALUES (8, '测试公告4', '<p><em><strong>12341234</strong></em></p>', '2021-04-19 16:53:22');

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(255) NULL DEFAULT NULL,
  `order_id` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL COMMENT '0.未退货 1已退货',
  `num` int(11) NULL DEFAULT NULL,
  `total` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 148 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_detail
-- ----------------------------
INSERT INTO `order_detail` VALUES (73, 43, 38, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (74, 43, 39, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (75, 41, 40, 0, 1, '90.0', 62);
INSERT INTO `order_detail` VALUES (78, 45, 43, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (79, 42, NULL, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (80, 47, 47, 0, 1, '90.0', 62);
INSERT INTO `order_detail` VALUES (81, 49, 48, 0, 1, '108.0', 62);
INSERT INTO `order_detail` VALUES (82, 49, 49, 0, 1, '108.0', 62);
INSERT INTO `order_detail` VALUES (83, 45, 50, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (84, 46, 51, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (85, 45, 52, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (86, 45, 53, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (87, 49, 54, 0, 1, '108.0', 62);
INSERT INTO `order_detail` VALUES (88, 41, 55, 0, 1, '90.0', 62);
INSERT INTO `order_detail` VALUES (89, 49, 56, 0, 1, '108.0', 62);
INSERT INTO `order_detail` VALUES (90, 45, 57, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (91, 46, 58, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (92, 44, 59, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (93, 43, 60, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (94, 45, 61, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (95, 45, 62, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (96, 49, 63, 0, 1, '108.0', 62);
INSERT INTO `order_detail` VALUES (97, 42, 64, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (98, 42, 65, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (99, 41, 66, 0, 1, '90.0', 62);
INSERT INTO `order_detail` VALUES (100, 42, 67, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (101, 44, 68, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (102, 49, 69, 0, 1, '108.0', 62);
INSERT INTO `order_detail` VALUES (103, 44, 70, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (104, 45, 70, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (105, 44, 71, 0, 1, '72.0', 62);
INSERT INTO `order_detail` VALUES (106, 46, 71, 0, 1, '99.0', 62);
INSERT INTO `order_detail` VALUES (107, 41, 72, 0, 2, '180.0', 68);
INSERT INTO `order_detail` VALUES (108, 49, 73, 0, 1, '108.0', 68);
INSERT INTO `order_detail` VALUES (109, 45, 74, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (110, 45, 75, 0, 1, '100.0', 62);
INSERT INTO `order_detail` VALUES (111, 39, 76, 0, 1, '35.37', 62);
INSERT INTO `order_detail` VALUES (112, 39, 87, 0, 1, '35.37', 62);
INSERT INTO `order_detail` VALUES (113, 41, 90, 0, 1, '100', 62);
INSERT INTO `order_detail` VALUES (114, 45, 91, 0, 1, '100', 62);
INSERT INTO `order_detail` VALUES (115, 45, 92, 0, 1, '100', 62);
INSERT INTO `order_detail` VALUES (116, 44, 93, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (117, 44, 94, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (118, 44, 95, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (119, 44, 96, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (120, 44, 97, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (121, 44, 98, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (122, 44, 99, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (123, 44, 100, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (124, 45, 101, 0, 1, '100.0', 69);
INSERT INTO `order_detail` VALUES (125, 45, 102, 0, 1, '100', 69);
INSERT INTO `order_detail` VALUES (126, 54, 103, 0, 1, '160.0', 69);
INSERT INTO `order_detail` VALUES (127, 54, 104, 0, 1, '160.0', 70);
INSERT INTO `order_detail` VALUES (128, 45, 105, 0, 1, '100', 70);
INSERT INTO `order_detail` VALUES (129, 41, 106, 0, 1, '90.0', 69);
INSERT INTO `order_detail` VALUES (130, 55, 107, 0, 1, '270.0', 69);
INSERT INTO `order_detail` VALUES (131, 56, 108, 0, 1, '240.0', 69);
INSERT INTO `order_detail` VALUES (132, 55, 109, 0, 1, '270.0', 69);
INSERT INTO `order_detail` VALUES (133, 44, 110, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (134, 44, 111, 0, 1, '72.0', 69);
INSERT INTO `order_detail` VALUES (135, 41, 112, 0, 1, '90.0', 69);
INSERT INTO `order_detail` VALUES (136, 42, 113, 0, 1, '99.0', 69);
INSERT INTO `order_detail` VALUES (137, 54, 114, 0, 1, '200', 69);
INSERT INTO `order_detail` VALUES (138, 56, 115, 0, 1, '240.0', 69);
INSERT INTO `order_detail` VALUES (139, 55, 116, 0, 1, '270.0', 69);
INSERT INTO `order_detail` VALUES (140, 54, 117, 0, 1, '160.0', 69);
INSERT INTO `order_detail` VALUES (141, 56, 118, 0, 1, '240.0', 69);
INSERT INTO `order_detail` VALUES (142, 56, 119, 0, 1, '240.0', 69);
INSERT INTO `order_detail` VALUES (143, 55, 120, 0, 1, '270.0', 69);
INSERT INTO `order_detail` VALUES (144, 54, 121, 0, 1, '160.0', 69);
INSERT INTO `order_detail` VALUES (145, 54, 122, 0, 1, '160.0', 69);
INSERT INTO `order_detail` VALUES (146, 55, 123, 0, 1, '270.0', 69);
INSERT INTO `order_detail` VALUES (147, 54, 124, 0, 1, '200', 69);

-- ----------------------------
-- Table structure for pay
-- ----------------------------
DROP TABLE IF EXISTS `pay`;
CREATE TABLE `pay`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '订单号',
  `pay_sn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '支付宝交易号',
  `total_amount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '总金额',
  `info` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` int(255) NULL DEFAULT NULL COMMENT '支付状态，0表示未支付，1表示已支付',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '标题',
  `refund_sn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '退款编号',
  `refund_amount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '退款金额',
  `refund_info` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '退款记录买家登录账号',
  `item_order_id` int(11) NULL DEFAULT NULL COMMENT '订单表1对1关系',
  `add_time` datetime(0) NULL DEFAULT NULL COMMENT '支付时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 142 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pay
-- ----------------------------
INSERT INTO `pay` VALUES (62, '41BDF12F8F7D68F934D277C5C79C2059', '2021042822001438720501682349', '72.00', '护理床4,', 2, '护理床4,', 'TUIDBEABD0A433A3F5FBB64D07C20489477', '72.00', 'ute***@sandbox.com', 39, '2021-04-28 12:00:12');
INSERT INTO `pay` VALUES (63, 'C75FD684E51C7591A15790C25DB3AFD9', '2021042822001438720501682544', '90.00', '护理床2,', 2, '护理床2,', '', NULL, NULL, 40, '2021-04-28 15:03:32');
INSERT INTO `pay` VALUES (68, '901407DF5DC8862CA0547DFE93E66D5D', '2021042822001438720501682185', '90.00', '助步器1,', 2, '助步器1,', 'TUIB3F78F876814328D35259095799BA77C', NULL, NULL, 47, '2021-04-28 15:44:02');
INSERT INTO `pay` VALUES (69, 'C03FF808168203B48C105594BDDAA0AC', '2021042822001438720501682721', '108.00', '老年助步器3,', 2, '老年助步器3,', 'TUIFC3CD2B5839DBDE00532C6001CBD221D', NULL, NULL, 48, '2021-04-28 15:57:41');
INSERT INTO `pay` VALUES (70, 'EF74FEB62B569D94339AB598D7A3F2DB', '2021042822001438720501682361', '108.00', '老年助步器3,', 2, '老年助步器3,', 'TUI763A2181D7083B2D0AD74F453AB7E462', '', NULL, 49, '2021-04-28 16:00:40');
INSERT INTO `pay` VALUES (71, '1401AAEA40BB24686BAF1305447CFB90', '2021050322001438720501686146', '100.00', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 50, '2021-05-03 17:20:51');
INSERT INTO `pay` VALUES (72, 'E80ACAAD4739793885DB9C2C5D135515', '2021050322001438720501686147', '99.00', '垫子2,', 2, '垫子2,', 'TUI041764D7753D0979A9D8BB4F49D51DF5', '99.00', 'ute***@sandbox.com', 51, '2021-05-03 17:22:31');
INSERT INTO `pay` VALUES (73, 'FEA57511FFC30E80CEC4FD6789C40952', '2021050422001438720501687246', '100.00', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 52, '2021-05-04 21:12:56');
INSERT INTO `pay` VALUES (74, 'A9CEC9FEB21DE8A651A9A702B8CD523B', '2021050422001438720501687385', '100.00', '垫子1,', 2, '垫子1,', 'TUI9A352BF579E3C69D13BBF990FE3817D0', '100.00', 'ute***@sandbox.com', 53, '2021-05-04 21:14:17');
INSERT INTO `pay` VALUES (75, '5503008585435FD5B1B937DBC9122368', '2021050522001421670501495649', '108.00', '老年助步器3,', 2, '老年助步器3,', 'TUI6A1937131C3DCED64D6D77FE84FA3A4A', '108.00', 'dor***@sandbox.com', 54, '2021-05-05 09:52:04');
INSERT INTO `pay` VALUES (76, '1C445B4ED5DA6F399B01B9855C87CDBD', '2021050522001438720501687686', '90.00', '护理床2,', 1, '护理床2,', NULL, NULL, NULL, 55, '2021-05-05 13:25:29');
INSERT INTO `pay` VALUES (77, '6947A31424A1650EF5C63786BB6FB53D', '2021050522001438720501687702', '108.00', '老年助步器3,', 1, '老年助步器3,', NULL, NULL, NULL, 56, '2021-05-05 22:27:42');
INSERT INTO `pay` VALUES (78, '2028550119595EFB2C560B94D2CC0A02', '2021050522001438720501687951', '100.00', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 57, '2021-05-05 22:33:24');
INSERT INTO `pay` VALUES (79, '86FA8104141015135102362C475BB7BE', NULL, '99.00', '垫子2,', 0, '垫子2,', NULL, NULL, NULL, 58, NULL);
INSERT INTO `pay` VALUES (80, 'F425D67E2D74243A7B79C28D8729802B', NULL, '72.00', '护理床5,', 0, '护理床5,', NULL, NULL, NULL, 59, NULL);
INSERT INTO `pay` VALUES (81, '3CC48493F337FD98006928361217ABB8', NULL, '72.00', '护理床4,', 0, '护理床4,', NULL, NULL, NULL, 60, NULL);
INSERT INTO `pay` VALUES (82, '53DA8C89139D0EAAC7D473B663357F85', NULL, '100.00', '垫子1,', 0, '垫子1,', NULL, NULL, NULL, 61, NULL);
INSERT INTO `pay` VALUES (83, '7C049C5232279F7C17CD198FCA1CF690', NULL, '100.00', '垫子1,', 0, '垫子1,', NULL, NULL, NULL, 62, NULL);
INSERT INTO `pay` VALUES (84, 'C4FFA255C64DBB99A3918098851CA553', NULL, '108.00', '老年助步器3,', 0, '老年助步器3,', NULL, NULL, NULL, 63, NULL);
INSERT INTO `pay` VALUES (85, '4F61FA88D2AAE44333FE614CAF3BC177', NULL, '99.00', '护理床3,', 0, '护理床3,', NULL, NULL, NULL, 64, NULL);
INSERT INTO `pay` VALUES (86, '43438B49863BF19F0180AB3A83C06952', NULL, '99.00', '护理床3,', 0, '护理床3,', NULL, NULL, NULL, 65, NULL);
INSERT INTO `pay` VALUES (87, '45E93D04CB04F5B306F41194BBBCF626', NULL, '90.00', '护理床2,', 0, '护理床2,', NULL, NULL, NULL, 66, NULL);
INSERT INTO `pay` VALUES (88, 'A53B8F1FAD09F21B7C65A3FD66E1C84A', NULL, '99.00', '护理床3,', 0, '护理床3,', NULL, NULL, NULL, 67, NULL);
INSERT INTO `pay` VALUES (89, 'CD11F6F9263EC63226E0504A4FE81828', '2021051522001438720501694921', '72.00', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 68, '2021-05-15 21:59:10');
INSERT INTO `pay` VALUES (90, '5B03631C38D4F12E6B0F9C6F9DA4D6BE', '2021050622001438720501687724', '108.00', '老年助步器3,', 1, '老年助步器3,', NULL, NULL, NULL, 69, '2021-05-06 13:23:33');
INSERT INTO `pay` VALUES (91, 'BF65A1D4C0FABB897050704709D9796E', '2021050722001438720501689476', '172.00', '护理床5,垫子1,', 1, '护理床5,垫子1,', NULL, NULL, NULL, 70, '2021-05-07 16:20:22');
INSERT INTO `pay` VALUES (92, 'D5E6FCBFFE1ADFC82A33EE4BCB4E3A98', '2021050722001438720501689269', '171.00', '护理床5,垫子2,', 1, '护理床5,垫子2,', NULL, NULL, NULL, 71, '2021-05-07 16:24:06');
INSERT INTO `pay` VALUES (93, '1788F5DA4806A53F162D3A8DDD2D786F', '2021050722001438720501689091', '180.00', '护理床2,', 1, '护理床2,', NULL, NULL, NULL, 72, '2021-05-07 22:33:29');
INSERT INTO `pay` VALUES (94, '49B389886A8F933D325855422343961A', '2021050722001438720501689092', '108.00', '老年助步器3,', 1, '老年助步器3,', NULL, NULL, NULL, 73, '2021-05-07 22:42:04');
INSERT INTO `pay` VALUES (95, '3D3B12C9809AA244F3D14105CE83EE9C', '2021050822001438720501689682', '100.00', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 74, '2021-05-08 10:24:43');
INSERT INTO `pay` VALUES (96, '363157F31D4E5CF6E23CB77C0F61ACF3', '2021051222001438720501693188', '100.00', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 75, '2021-05-12 21:40:50');
INSERT INTO `pay` VALUES (97, '611BB12B2A97463E90D22CC3F7C57C59', '2021051222001438720501693307', '35.37', '老年女装T恤衫,', 1, '老年女装T恤衫,', NULL, NULL, NULL, 76, '2021-05-12 21:49:51');
INSERT INTO `pay` VALUES (100, '49D8B43C148A9DB778869A614EF9C3A1', NULL, '110', '垫子2,', 1, '垫子2,', NULL, NULL, NULL, 83, '2021-05-15 21:43:35');
INSERT INTO `pay` VALUES (101, '7DDBF708E8A6E1EBF24B4406D3B6F408', NULL, '110', '垫子2,', 1, '垫子2,', NULL, NULL, NULL, 84, '2021-05-15 21:55:19');
INSERT INTO `pay` VALUES (102, '4D25C94CE1C5A3AF0503A66BF61DE815', NULL, '100', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 85, '2021-05-19 14:15:29');
INSERT INTO `pay` VALUES (103, 'F41B10D4BFD4B9582D3216A48E50ACC9', NULL, '100', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 86, '2021-05-19 14:15:32');
INSERT INTO `pay` VALUES (104, '92C67340F82CEF3579D9F5B60759306A', '2021051922001438720501697649', '35.37', '老年女装T恤衫,', 2, '老年女装T恤衫,', 'TUI82F4CF383F389E190740B5A97472D33F', '35.37', 'ute***@sandbox.com', 87, '2021-05-19 17:48:00');
INSERT INTO `pay` VALUES (105, '7746A8790202C92EAB6565E6193EBD1F', NULL, '120', '老年助步器3,', 1, '老年助步器3,', NULL, NULL, NULL, 88, '2021-05-19 17:49:32');
INSERT INTO `pay` VALUES (106, 'D1678517EF946DEC8C5AC924EB7548DF', NULL, '80', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 89, '2021-05-21 16:13:19');
INSERT INTO `pay` VALUES (107, '9268801281A10E950589A38EB5184042', NULL, '100', '护理床2,', 1, '护理床2,', NULL, NULL, NULL, 90, '2021-05-21 21:19:17');
INSERT INTO `pay` VALUES (108, '48A3CFDFC8992C6166330F24E9DB859B', NULL, '100', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 91, '2021-05-22 21:41:33');
INSERT INTO `pay` VALUES (109, '1998145CE8079D5EA65371CBDB8E13AF', NULL, '100', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 92, '2021-05-22 23:54:01');
INSERT INTO `pay` VALUES (110, '225E950D32B18FEBBEF48D5B7FA382E0', NULL, '72.00', '护理床5,', 0, '护理床5,', NULL, NULL, NULL, 93, NULL);
INSERT INTO `pay` VALUES (111, '3D023DB24A10B9B3CF6AB5E40B8CACE7', '2021052422001438720501702542', '72.00', '护理床5,', 2, '护理床5,', 'TUI7263D558EB66C2ACF9C7D6F9A2E89EEB', '72.00', 'ute***@sandbox.com', 94, '2021-05-24 16:13:33');
INSERT INTO `pay` VALUES (112, 'DCE8D8A1B64A5ECA3472BE802B85B2F3', '2021052422001438720501702544', '72.00', '护理床5,', 2, '护理床5,', 'TUI98C0403ADBEE0601721489C606D49923', '72.00', 'ute***@sandbox.com', 95, '2021-05-24 16:26:59');
INSERT INTO `pay` VALUES (113, 'E103A9E5A414357CC6AFF1F0745D58BA', '2021052422001438720501701578', '72.00', '护理床5,', 2, '护理床5,', 'TUID7583A43E857F0450FAA8F968AF7EFFD', '72.00', 'ute***@sandbox.com', 96, '2021-05-24 16:36:37');
INSERT INTO `pay` VALUES (114, 'EEE8880779A820B477F1552D5A001267', '2021052422001438720501702546', '72.00', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 97, '2021-05-24 16:42:36');
INSERT INTO `pay` VALUES (115, '3C5DC20D600986E42E06F8760D02E65E', '2021052422001438720501702379', '72.00', '护理床5,', 2, '护理床5,', 'TUI354A4CEA58437D7615B71C02AD814A4C', '72.00', 'ute***@sandbox.com', 98, '2021-05-24 16:47:20');
INSERT INTO `pay` VALUES (116, '0E28B2D113F1B22812D421B27611CCDD', '2021052422001438720501702547', '72.00', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 99, '2021-05-24 16:50:40');
INSERT INTO `pay` VALUES (117, '00699A1C2D94F6DA9BB0D062FD9BD483', '2021052422001438720501701461', '72.00', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 100, '2021-05-24 16:54:39');
INSERT INTO `pay` VALUES (118, 'F48507CBB82A6F6EFCAC64BF690EAC7C', '2021052422001438720501702849', '100.00', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 101, '2021-05-24 20:29:27');
INSERT INTO `pay` VALUES (119, '9C7D171E5C85612570464F4931C5E104', NULL, '100', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 102, '2021-05-26 21:05:00');
INSERT INTO `pay` VALUES (120, '39FDC0E0242D6EAA9B6C8ED448B8F3B0', '2021052622001438720501704681', '160.00', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 103, '2021-05-26 21:09:42');
INSERT INTO `pay` VALUES (121, '890357F32C312AF2C03993750FFF0C96', '2021052822001438720501705434', '160.00', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 104, '2021-05-28 10:57:16');
INSERT INTO `pay` VALUES (122, 'A68A7E73C061602AE97E643BAE664078', NULL, '100', '垫子1,', 1, '垫子1,', NULL, NULL, NULL, 105, '2021-05-28 11:17:45');
INSERT INTO `pay` VALUES (123, 'DF0906234E7EBAD3FA06A8EAEF101A3D', '2021053022001438720501706730', '90.00', '护理床2,', 1, '护理床2,', NULL, NULL, NULL, 106, '2021-05-30 20:43:46');
INSERT INTO `pay` VALUES (124, '72702719380F3CCE240FFB586D957312', '2021053122001438720501707633', '270.00', '血糖仪02,', 1, '血糖仪02,', NULL, NULL, NULL, 107, '2021-05-31 11:01:23');
INSERT INTO `pay` VALUES (125, '5750477F7DC722E7B1F7C3472825DB85', '2021053122001438720501708322', '240.00', '血糖仪03,', 1, '血糖仪03,', NULL, NULL, NULL, 108, '2021-05-31 11:07:52');
INSERT INTO `pay` VALUES (126, '2400F4155D40D4DD4FB536B196199ED8', '2021053122001438720501707635', '270.00', '血糖仪02,', 1, '血糖仪02,', NULL, NULL, NULL, 109, '2021-05-31 11:10:24');
INSERT INTO `pay` VALUES (127, '71E412D04924C9B6860CCEC701C9AD77', '2021053122001438720501707939', '72.00', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 110, '2021-05-31 11:12:27');
INSERT INTO `pay` VALUES (128, '7E717C74C53259C554F1846C9CAF89CA', '2021053122001438720501707530', '72.00', '护理床5,', 1, '护理床5,', NULL, NULL, NULL, 111, '2021-05-31 11:46:41');
INSERT INTO `pay` VALUES (129, 'EB7C287C2AB24B05BDCA3CC5939C04C6', '2021053122001438720501707531', '90.00', '护理床2,', 1, '护理床2,', NULL, NULL, NULL, 112, '2021-05-31 11:50:55');
INSERT INTO `pay` VALUES (130, '0A839CC4A7AF8AB0DEFCC15E308DAB08', '2021053122001438720501708325', '99.00', '护理床3,', 1, '护理床3,', NULL, NULL, NULL, 113, '2021-05-31 11:54:37');
INSERT INTO `pay` VALUES (131, '8B6044F2AC9B9617F44575B31D72600F', NULL, '200', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 114, '2021-05-31 20:43:30');
INSERT INTO `pay` VALUES (132, '1F8FFDD5EFF0AC2277D14E29846A0C06', '2021060122001438720501709087', '240.00', '血糖仪03,', 1, '血糖仪03,', NULL, NULL, NULL, 115, '2021-06-01 09:29:47');
INSERT INTO `pay` VALUES (133, 'C7413235B199B3724CFBD2B28FDC9F9E', '2021060122001438720501708787', '270.00', '血糖仪02,', 1, '血糖仪02,', NULL, NULL, NULL, 116, '2021-06-01 09:33:11');
INSERT INTO `pay` VALUES (134, '76B2EA7DEB8325662528448A61A0B465', '2021060122001438720501709088', '160.00', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 117, '2021-06-01 09:41:59');
INSERT INTO `pay` VALUES (135, 'D9940F3CD6FEC79A6B03EDFB3EC039BC', '2021060122001438720501708788', '240.00', '血糖仪03,', 1, '血糖仪03,', NULL, NULL, NULL, 118, '2021-06-01 09:46:46');
INSERT INTO `pay` VALUES (136, '78A3F35AC3671589A6308F4C0C7D9D77', '2021060122001438720501708510', '240.00', '血糖仪03,', 1, '血糖仪03,', NULL, NULL, NULL, 119, '2021-06-01 09:50:16');
INSERT INTO `pay` VALUES (137, '3936DCF0C94EA7B9CF0F2C540C8AECA0', '2021060122001438720501708511', '270.00', '血糖仪02,', 1, '血糖仪02,', NULL, NULL, NULL, 120, '2021-06-01 09:52:12');
INSERT INTO `pay` VALUES (138, 'DA8B0D5ACD4E78C4DD27339F17617BBC', '2021060122001438720501709107', '160.00', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 121, '2021-06-01 21:16:04');
INSERT INTO `pay` VALUES (139, '92212A1CAEAE515E3C68A2FF1154491C', '2021060222001438720501709035', '160.00', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 122, '2021-06-02 16:09:00');
INSERT INTO `pay` VALUES (140, 'F6BE885A6498C00F10479A2EF3C9C34C', '2021060222001438720501709820', '270.00', '血糖仪02,', 1, '血糖仪02,', NULL, NULL, NULL, 123, '2021-06-02 16:10:04');
INSERT INTO `pay` VALUES (141, '4D0EB65C1EC7EEAF54D1BBC348F3C37C', NULL, '200', '血糖仪01,', 1, '血糖仪01,', NULL, NULL, NULL, 124, '2021-06-02 16:24:49');

-- ----------------------------
-- Table structure for sc
-- ----------------------------
DROP TABLE IF EXISTS `sc`;
CREATE TABLE `sc`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 60 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sc
-- ----------------------------
INSERT INTO `sc` VALUES (42, 45, 62);
INSERT INTO `sc` VALUES (43, 49, 62);
INSERT INTO `sc` VALUES (53, 54, 70);
INSERT INTO `sc` VALUES (54, 45, 70);
INSERT INTO `sc` VALUES (59, 54, 69);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `passWord` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `realName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (9, '汤', '123', '13253315799', '张三', '男', '河南省郑州市文化路97号', 'nanxingtang@163.com');
INSERT INTO `user` VALUES (10, '王', '123', '13253315799', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (60, '石独秀', 'qwe', '13253315799', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (61, '石独秀', 'qwe', '13253315799', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (62, 'dd', 'qwe123', '13253315798', '张三', '男', '郑州大学', 'nanxingtang@163.com');
INSERT INTO `user` VALUES (63, 'qwe', 'qwe123', '18338783996', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (64, 'asd', 'asd123', '18338783997', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (65, 'qweqwe', 'qweqwe123', '18338783999', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (66, 'asdasd', 'asdasd123', '18338783991', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (67, 'zxczxc', 'zxczxc123', '18338783993', NULL, NULL, NULL, 'nanxingtang@163.com');
INSERT INTO `user` VALUES (68, 'qwqw', 'qwqw123', '13253315791', '汤', '男', '金水区文化路97号', 'nanxingtang@163.com');
INSERT INTO `user` VALUES (69, '花开花落', 'qwe123qwe', '18338783998', '花开花落', '男', '河南省郑州市金水区文化路97号', 'nanxingtang@163.com');
INSERT INTO `user` VALUES (70, 'lsp', 'qwe123', '13253315790', '张三', '男', '郑州大学', 'nanxingtang@163.com');
INSERT INTO `user` VALUES (71, '李四', 'qwe123', '13253312345', NULL, NULL, NULL, 'nanxingtang@163.com');

SET FOREIGN_KEY_CHECKS = 1;
