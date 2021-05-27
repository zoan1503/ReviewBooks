/*
 Navicat Premium Data Transfer

 Source Server         : review
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : reviewbook

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 27/05/2021 07:57:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`  (
  `id_book` int(0) NOT NULL AUTO_INCREMENT,
  `book_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(20000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rate_average` float NULL DEFAULT NULL,
  `image_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `idcate` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id_book`) USING BTREE,
  UNIQUE INDEX `id_book`(`id_book`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES (1, 'SA MÔN KHÔNG HẢI THẾT YẾN BẦY QUỶ ĐẠI ĐƯỜNG', 'Yumemakura Baku', 'Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg', 1);
INSERT INTO `books` VALUES (2, 'MUỐN LÀM NỮ HOÀNG, ĐỪNG YÊU NHƯ HẦU GÁI', 'Blog của May', 'Khi nàng biết cách làm một người đàn bà thực sự, ấy là khi nàng xứng được yêu.\r\nĐược yêu, trong lý lẽ của nàng, là được sóng bước bên cạnh người đàn ông chứ không phải lặng thầm núp sau lưng họ. Được yêu, là được nâng niu theo cái cách mà nàng chờ đợi. Được yêu, là được kiêu hãnh trong tình yêu ấy, được là mình, và yêu không gắng gượng.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/11/14/2QAYBLJW.jpg', 1);
INSERT INTO `books` VALUES (3, 'KÝ TÚC XÁ PHÒNG 307', 'Zihua Nguyễn', '“Thời sinh viên, trong tôi, ý nghĩ trở thành vĩ nhân luôn thường trực.\r\nBill Gates, Steve Jobs, Mark Zuckerberg.\r\nĐặc điểm chung của các vĩ nhân là họ luôn bỏ ngang đại học.\r\nSuốt năm năm ngồi trên giảng đường, ý nghĩ “mình sẽ bỏ học” lóe lên trong đầu\r\ntôi 226 lần. Nhưng rốt cuộc, tôi không đi theo tiếng gọi của các vĩ nhân. Tôi hoàn\r\nthành 180 tín chỉ học phần. Tốt nghiệp đại học, cầm tấm bằng đỏ chót, rồi lao vào\r\nđời.”\r\nNhững câu chuyện chân thực, hài hước, mang nhiều niềm vui xen lẫn những nỗi\r\nngậm ngùi của những cậu sinh viên nghèo sống trong Ký túc xá phòng 307.\r\nMột cuốn sách dành tặng cho những ai đã-đang-và-sẽ là sinh viên.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/11/14/C3F24YNQ.jpg', 1);
INSERT INTO `books` VALUES (4, 'THẢM KỊCH VĨ NHÂN', 'Hoàng Minh Tường', 'Gần 600 năm trước, khi cuộc chiến chống ngoại bang kết thúc, cũng là lúc cuộc chiến phe cánh trong nội bộ triều đình nhà Lê mở ra. Trong cơn khủng hoảng đó, Nguyễn Trãi trở thành nạn nhân hứng chịu tấn thảm kịch oan khiên nhất, dã man nhất lịch sử nước Việt, mang tên Thảm kịch vĩ nhân.\r\nToàn bộ câu chuyện được kể lại xảy ra vỏn vẹn trong 27 ngày, từ ngày sinh Hoàng tử Lê Tư Thành (vua Lê Thánh Tông sau này), đến ngày Ức Trai Nguyễn Trãi và Lễ nghi học sĩ Nguyễn Thị Lộ cùng ba họ lên đoạn đầu đài. Vén bỏ bức màn hắc ám chốn thâm cung, nhà văn Hoàng Minh Tườngdẫn dụ người đọc lần theo những tình tiết ly kỳ, bóc tách những dấu vết mờ nhòe của lịch sử nhằm phơi bày màn kịch tội ác đã được dựng lên để sát hại một bậc vĩ nhân như Nguyễn Trãi.\r\nThảm kịch vĩ nhân không chỉ là câu chuyện của một cá nhân Nguyễn Trãi, đó còn là câu chuyện về người trí thức trong mối quan hệ với quyền lực, với dân tộc, với lẽ phải và lý tưởng mà họ theo đuổi. Tư cách người trí thức trước giông bão thời đại, chẳng phải là điều cốt lõi của một vĩ nhân sao!', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/10/29/3GX3U5U3.jpg', 1);
INSERT INTO `books` VALUES (5, 'VỀ NHÀ (TB 2019)', 'Phan Việt', 'Bắt đầu từ những bước chân bỡ ngỡ, háo hức nhưng cũng đơn côi, cô độc trong Một mình ở Châu Âu, tác giả, người phụ nữ kể chuyện, trong Xuyên Mỹ đã bươn chải qua nhiều chặng đường đầy nhọc nhằn, tâm trạng dọc ngang nước Mỹ. Với tập sách này, cô tiếp tục hành trình đa chiều, phức tạp, cả trong nội tâm lẫn giữa những dặm dài địa lý, sau những tổn thương và sợ hãi. Về nhà, với cách tường thuật cụ thể và trung thực tra vấn đến tận cùng, chính là tự truyện về một cá tính, một con người không mệt mỏi truy tìm nguyên nhân của hạnh phúc và bất hạnh, hòng nhìn thấy cái \"chân bản lai diện mục\" của chính mình, để lại bình an cất bước, sau bao nhiêu đau khổ, đổ vỡ, trên con đường \"về nhà\".', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/6/21/C5FA2DHX.jpg', 1);
INSERT INTO `books` VALUES (6, 'MAMA- MẸ', 'Hélène Delforge Quentin Greban', 'Giới thiệu sách\r\nMẸ là ai?\r\n\r\nLà tiếng gọi đầu tiên trên đôi môi hầu như mọi đứa trẻ.\r\n\r\nLà tên chung cho hàng tỉ phụ nữ trên thế giới này.\r\n\r\nLà người nói với ta những lời yêu thương, khiến ta nghĩ đến sự dịu dàng, mối ràng buộc ruột thịt, sự nhung nhớ và những hy sinh lặng thầm.\r\n\r\nỞ mỗi thời đại, mỗi xứ sở, mỗi gia đình, những người phụ nữ thật khác nhau biết mấy, nhưng khi ôm đứa con thơ trong lòng, tất cả họ đều giống nhau, bởi họ đều là MẸ.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/4/19/WAXUV1L7.jpg', 1);
INSERT INTO `books` VALUES (7, 'NHỠ BỐ Ở XA QUÁ', 'Astrid Desbordes - Pauline Martin', '“Nhỡ bố ở quá xa” nằm cùng bộ về tình cảm gia đình ấm áp với hai cuốn \"Tình yêu của mẹ\" và \"Em gái nhỏ của tớ\". Cuốn sách xoay quanh cuộc trò chuyện của hai bố con, Archibald lo lắng về những khó khăn mình sẽ gặp phải trong chuyến hành trình cuộc sống, với mỗi thử thách khiến Archibald lo lắng chùn lòng, bố lại đưa ra một lời khuyên giúp bạn vững vàng hơn trên con đường trưởng thành.\r\n\r\nKhác với tình yêu nồng nàn của mẹ, tình cảm của bố nhẹ nhàng hơn, ẩn hiện trong những bài học mà bố gửi gắm đến con. Một cuốn sách tranh kinh điển đầy chất thơ của nước Pháp về tình yêu của bố.\r\nDành cho bạn nhỏ 3-6 tuổi', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2021/4/20/D2MFZH3Z.jpg', 2);
INSERT INTO `books` VALUES (8, 'GIÁO DỤC GIỚI TÍNH NHI ĐỒNG - CON TRAI, CON GÁI KHÁC NHAU Ạ?', 'Tam Tam , Lưu Tự Long', '1. Khi thấy khó chịu kiên quyết nói KHÔNG!\r\nCon luôn là bảo bối nhé con yêu! Khi gặp phải những hành vi khó chịu từ người lạ hay người quen, con hãy kiên quyết nhé!\r\n\r\n2. Bố mẹ ơi, con từ đâu tới?\r\nCon là kết tinh từ tình yêu của bố mẹ, yêu con rất nhiều! Cùng nhau tìm hiểu quá trình tạo nên sự sống nhé con!\r\n\r\n3. Con trai con gái khác nhau ạ?\r\nCon trai và con gái chúng mình có điểm giống nhau, mà cũng có chỗ khác nhau đấy. Cùng đọc sách xem nhé!', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2021/4/14/63DD258C.jpg', 2);
INSERT INTO `books` VALUES (9, 'LŨ TRẺ HƯ NHẤT QUẢ ĐẤT 1', 'David Walliams', 'Lũ trẻ hư nhất quả đất - Bestseller hài hước SỐ MỘT nước Anh\r\n\r\n“Đây là phiên bản Walliams kinh tởm và ngu ngốc nhất - sự pha trộn hoàn hảo của hàng ngàn fan trung thành của anh ấy… đi kèm những hình minh họa choáng ngợp của Ross, người hoàn toàn nắm bắt được năng lượng và độ loạn xí ngầu của các câu truyện.” - Daily Mail\r\n\r\n“Cười bể bụng và… tởm không lời nào tả xiết.” - Daily Express\r\n\r\n“Được người đời ca tụng như phiên bản hiện đại của Roald Dahl, Walliams là một tác giả đáng nể với những ý tưởng lớn và những cuốn sách luôn đầy ắp hình minh họa, tất cả cùng nhau khiến người đọc không thể dừng lật trang, cho dù đó có là những đứa trẻ từng nhìn bạn như thể bạn đã hóa điên khi khuyên chúng nên đọc sách để giải trí.” - The Independent\r\n\r\nLũ trẻ hư nhất quả đất 1:\r\nMột lô một lốc những chiếc quần không ngừng xì hơi, những đứa trẻ dạy cho bọ chấy của chúng làm điều xằng bậy và những đứa trẻ không ngừng ngoáy mũi cho tới khi chúng ngoáy ra được viên gỉ mũi bự nhất thế giới. Cuốn sách này là tập hợp các câu chuyện về 5 cậu trai hư và 5 cô nàng tinh quái nhất quả đất.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/11/16/GKDX4FB2.jpg', 2);
INSERT INTO `books` VALUES (10, 'BĂNG ĐẢNG NỬA ĐÊM', 'David Walliams', 'Tác phẩm hài hước siêu hấp dẫn mới nhất của nhà văn thiếu nhi Anh ăn khách David Walliams.\r\n\r\nMột cuốn sách phiêu lưu kỳ thú mang đậm phong cách David Walliams vốn đã được độc giả Việt Nam yêu thích qua Bà nội Gangster, Ông nội đào tẩu, Nha sĩ yêu quái, Bố tốt bố xấu...\r\n\r\nNội dung tóm tắt:\r\nTrong một trận thi đấu ở trường, Tom bị quả bóng cricket va vào đầu mạnh đến nỗi bất tỉnh. Khi tỉnh lại, cậu thấy mình đang ở trong bệnh viện Công tước Funt, và trước mặt cậu là một ông đẩy xe có diện mạo kỳ quái đáng sợ. Mọi chuyện dần trở nên tồi tệ hơn khi Tom phải chịu sự quản lý của y tá trưởng phụ trách phòng bệnh nhi - một người cực kì thích hành hạ trẻ con. Nhưng tất cả những điều đó không ngăn được cậu cùng với những người bạn cùng phòng bệnh của mình tham gia vào những chuyến phiêu lưu kỳ thú nhất đời người. Cùng nhau họ tạo nên Băng đảng Nửa đêm, với sứ mệnh mỗi đêm lại biến một ước mơ tưởng chừng hoang đường của một cô bé hay cậu bé trong phòng bệnh thành hiện thực.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/7/30/4BK8T37Z.jpg', 2);
INSERT INTO `books` VALUES (11, 'PHÁT TRIỂN TRÍ TUỆ CẢM XÚC- CẢM XÚC CỦA CON MÀU GÌ?', 'Jayneen Sanders', 'Ai cũng có cảm xúc. Một cảm xúc có thể tồn tại lâu ơi là lâu, hoặc cũng có thể chỉ trong một chốc. Cảm xúc của chúng mình luôn luôn thay đổi.\r\n\r\n“Cảm xúc của con màu gì?” hỗ trợ phụ huynh trò chuyện cùng con về cách quản lý cảm xúc qua những tình huống gần gũi.\r\n\r\n- Tình huống gần gũi\r\n\r\n- Câu hỏi thảo luận ở mỗi trang\r\n\r\n- Hệ thống từ vựng phong phú giúp trẻ gọi tên cảm xúc.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/9/8/UVBTGPGC.jpg', 2);
INSERT INTO `books` VALUES (12, 'LÍNH TRƠN - KHOA HỌC LẠ KỲ VỀ LOÀI NGƯỜI TRONG CHIẾN TRANH', 'Mary Roach', 'Từ Chiến tranh thế giới thứ hai đến nay, chúng ta đã luôn chứng kiến một quân đội Hoa Kỳ hùng mạnh, tinh nhuệ và uy hiếp bậc nhất hoàn cầu. Chúng ta thấy bom nguyên tử, tên lửa hành trình, hàng không mẫu hạm, máy bay trực thăng, xe tăng tối tân hay những đơn vị đặc nhiệm SEAL sát thủ….\r\n\r\n \r\n\r\nNhưng có lẽ hiếm khi người ta có thể có cái nhìn vào đằng sau cỗ máy chiến tranh đó như trong cuốn sách này. Bên dưới tấm màn sắt của khoa học quân sự chính là những thứ khoa học kỹ thuật rất nhân bản, rất đời thường, với trung tâm là “lính trơn”. Tác giả Mary Roach sẽ dẫn chúng ta trải qua một hành trình khám phá và trải nghiệm thực sự lạ kỳ về hậu cần chiến tranh, từ cách người ta lo cái ăn cái mặc cho binh lính, cho đến cách giúp các quân nhân đối phó với “Tào Tháo đuổi” trong khi làm nhiệm vụ, hay những nỗ lực của các bác sĩ quân y trong việc phục hồi khả năng “yêu” của thương binh, hay cách họ “hỏi chuyện” những tử sĩ để cải thiện an toàn cho những người sống…\r\n\r\n \r\n\r\nChiến tranh vẫn gắn liền với sự tàn khốc và cái chết, nhưng nó cũng có thể rất đời thường, đầy ắp hơi thở của sự sống cùng những vấn đề dở khóc dở cười vô cùng sinh động, dưới góc nhìn của một người Mỹ.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/12/11/ROWH1CL4.jpg', 3);
INSERT INTO `books` VALUES (13, '21 BÀI HỌC CHO THẾ KỶ 21', 'Yuval Noah Harari', 'Những triển vọng đầy hứa hẹn của công nghệ sẽ được đưa ra bàn luận bên cạnh những hiểm họa như “đứt gãy” do công nghệ gây ra, việc kiểm soát thế giới bên trong dẫn tới sự sụp đổ của hệ thần kinh hay “tự do trong khuôn khổ”. Chính trị và tôn giáo có còn bắt tay nhau như trong quá khứ hay sẽ thao túng con người theo những cách riêng rẽ, mới mẻ hơn? Và những vấn đề toàn cầu ấy liên quan mật thiết tới hành vi và đạo đức của từng cá nhân riêng lẻ như thế nào? Xét cho cùng, những thách thức lớn nhất và những lựa chọn quan trọng nhất của ngày nay là gì? Ta cần chú ý đến điều gì? Ta nên dạy con cái ta những gì?', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/10/1/1TN5N61N.jpg', 3);
INSERT INTO `books` VALUES (14, 'LƯỢC SỬ TÔN GIÁO', 'RICHARD HOLLOWAY', 'Hơn bảy tỷ người trên thế giới có thể viết một thứ gì đó khác chữ “Không” vào mục Tôn giáo trong hồ sơ của mình. Một số sinh ra đã theo một tôn giáo được chọn sẵn; số khác có thể tự lựa chọn theo sở thích, theo định hướng, theo đám đông... Thế rồi họ thực hành đức tin của mình hằng ngày, tự hào về nó và muốn truyền bá nó cho nhiều người khác nữa. Đó là con đường phát triển hết sức tự nhiên của tôn giáo suốt hàng nghìn năm qua, kết quả là vô số tín ngưỡng với cành nhánh xum xuê mà chúng ta thấy ngày nay. Nhiều tôn giáo ra đời cách đây hàng nghìn năm với số lượng tín đồ hùng hậu, một số khác non trẻ hơn nhưng không kém phần đình đám vì những tín đồ ít ỏi nhưng nổi tiếng của mình. Thế nhưng, ai trong số họ dám chắc những gì mình đang làm là đúng nguyên bản và không khiến các vị khai sinh ra tôn giáo ấy lắc đầu, thất vọng?', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/8/19/B85QRJOU.jpg', 3);
INSERT INTO `books` VALUES (15, '18 PHÁT MINH VĨ ĐẠI', 'Axelle Doppelt', 'Hãy cùng khám phá 18 phát minh vĩ đại đánh dấu lịch sử loài người trong cuốn sách LẬT-GIỞ tương tác vô cùng độc đáo này! Ở đó, mỗi phát minh sẽ biến thành một trò chơi tương tác thú vị, đi kèm một đoạn văn bản giải thích ngắn gọn về phát minh, người sáng tạo ra nó và những thay đổi nó tạo ra cho cuộc sống con người. Nào ta cùng HỌC MÀ CHƠI, CHƠI MÀ HỌC!', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/9/17/XMQWDM1U.jpg', 3);
INSERT INTO `books` VALUES (16, 'BIẾT ĂN NÓI CHẲNG LO THUA THIỆT', 'Li Jing', 'Có một sự thật rằng: trong cuộc sống cũng như trong công việc, những người có khả năng diễn đạt tốt thường có mối quan hệ xã hội tốt,  do vậy họ gặp nhiều thuận lợi hơn.  Khả năng diễn đạt tốt không chỉ giúp người ta thành công mà còn mang lại hạnh phúc. Có nghiên cứu cho thấy, những người tính cách vui vẻ, biết ăn nói, thường hài lòng với cuộc sống hơn những người ăn nói vụng về.\r\n\r\n \r\n\r\nNhưng rốt cuộc, làm thế nào có được khả năng diễn đạt tốt? Trên thực tế, khả năng biểu đạt của tuyệt đại đa số chúng ta không hề kém, chỉ là ta không biết cách vận dụng thôi.\r\n\r\n \r\n\r\nCuốn sách này đem đến cho bạn cách khéo léo giải quyết những tình huống khó xử trong cuộc sống nhờ ăn nói. Bạn sẽ phát hiện ra rằng, khả năng diễn đạt bằng lời nói không chỉ là một công cụ, mà còn là một môn nghệ thuật đích thực của cuộc sống.\r\n\r\n \r\n\r\nHọc nghệ thuật ăn nói được ưa chuộng nhất, đừng để mình thua thiệt vì không biết diễn đạt!\r\n\r\n Có một sự thật rằng: trong cuộc sống cũng như trong công việc, những người có khả năng diễn đạt tốt thường có mối quan hệ xã hội tốt,  do vậy họ gặp nhiều thuận lợi hơn.  Khả năng diễn đạt tốt không chỉ giúp người ta thành công mà còn mang lại hạnh phúc. Có nghiên cứu cho thấy, những người tính cách vui vẻ, biết ăn nói, thường hài lòng với cuộc sống hơn những người ăn nói vụng về.\r\n\r\n \r\n\r\nNhưng rốt cuộc, làm thế nào có được khả năng diễn đạt tốt? Trên thực tế, khả năng biểu đạt của tuyệt đại đa số chúng ta không hề kém, chỉ là ta không biết cách vận dụng thôi.\r\n\r\n \r\n\r\nCuốn sách này đem đến cho bạn cách khéo léo giải quyết những tình huống khó xử trong cuộc sống nhờ ăn nói. Bạn sẽ phát hiện ra rằng, khả năng diễn đạt bằng lời nói không chỉ là một công cụ, mà còn là một môn nghệ thuật đích thực của cuộc sống.\r\n\r\n \r\n\r\nHọc nghệ thuật ăn nói được ưa chuộng nhất, đừng để mình thua thiệt vì không biết diễn đạt!\r\n\r\n ', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/6/27/45CW6K4Z.jpg', 3);
INSERT INTO `books` VALUES (17, 'LỊCH TRIỀU TẠP KỶ', 'Cao Lãng biên soạn , Xiển Trai bổ sung', 'Lịch triều tạp kỷ do Cao Lãng biên soạn, Xiển Trai con trai tác giả bổ sung, là một cuốn sử ghi chép khá toàn diện về giai đoạn lịch sử cuối thời Lê-Trịnh. Trong khoảng thời gian kéo dài hơn 100 năm, từ Lê Gia Tông năm Dương Đức thứ nhất (1672) đến Lê Mẫn đế năm Chiêu Thống thứ tư (1789), hầu hết các phương diện trong đời sống chính trị, xã hội ở Đàng ngoài đều được tác giả ghi nhận, từ các pháp lệnh được ban ra ở chính quyền trung ương, trong đó có vai trò chủ đạo của phủ chúa, đến các hoạt động của quan quân và dân chúng ở địa phương. Các sự kiện chính trị, kinh tế, văn hóa, giáo dục, quân sự được ghi chép một cách khá đầy đủ, kỹ lưỡng và sinh động.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2021/3/31/6KCM16U4.jpg', 4);
INSERT INTO `books` VALUES (18, 'CHUYỆN PHIẾM SỬ HỌC', 'Tạ Chí Đại Trường', '“Tạ Chí Đại Trường là một nhà sử học có tính độc lập và phong cách riêng trong nghiên cứu lịch sử. Ông có những công trình nghiên cứu sâu sắc trên phương pháp luận sử học nghiêm túc mà tiêu biểu là Lịch sử nội chiến Việt Nam từ 1771 đến 1802. Các tác phẩm của Tạ Chí Đại Trường mang nặng tính suy ngẫm lịch sử, gần như một thứ triết lý lịch sử, như Những bài dã sử Việt, hay Thần, người và đất Việt. Tạ Chí Đại Trường luôn nhìn lịch sử Việt Nam với tấm lòng của một con người Việt Nam.”\r\n\r\n- GS Phan Huy Lê', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2021/3/31/AJZ467BW.jpg', 4);
INSERT INTO `books` VALUES (19, 'NHO GIÁO', 'Trần Trọng Kim', 'Nho giáo của Trần Trọng Kim là một trong những bộ sách đầu tiên ở Việt Nam thời hiện đại nghiên cứu về Nho giáo Trung Hoa và những ảnh hưởng lớn lao của nó đến đời sống văn hóa Việt Nam. Không giấu giếm niềm ngưỡng mộ đối với một học thuyết từng là bệ đỡ tinh thần cho nhiều dân tộc Á Đông suốt hàng nghìn năm, Trần Trọng Kim đã tổng thuật và chứng minh tính hoàn chỉnh của một hệ thống triết học ở Nho giáo. Bằng phương pháp làm việc cẩn chỉ và nghiêm túc, Trần Trọng Kim đã đứng vững trên tư cách một nhà khoa học để thăm dò, miêu tả học thuyết phức tạp này, kể từ thời điểm nó ra đời, qua quá trình phái sinh, mở rộng bởi vô số học phái ở nhiều thời kỳ khác nhau, cho đến khi nó suy tàn vào đầu thế kỷ XX. Với việc cung cấp lượng tri thức uyên bác, khả tín, và bằng một văn phong giản dị, kết cấu mạch lạc, bộ sách của Lệ Thần Trần Trọng Kim là một công trình khảo cứu quyền uy và được tham khảo rộng rãi trong các nghiên cứu về Nho giáo ở Việt Nam.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/7/30/WSYSTKMW.jpg', 4);
INSERT INTO `books` VALUES (20, 'CÁC THẾ GIỚI SONG SONG (TB 128.000)', 'Michio Kaku', 'Một chuyến du hành đầy trí tuệ qua các vũ trụ, được dẫn dắt tài tình bởi \"thuyền trưởng\" Michio Kaku và độc giả có dịp chiêm ngưỡng vẻ đẹp kì vĩ của vũ trụ kể từ vụ nổ lớn, vượt qua những hố đen, lỗ sâu, bước vào các thế giới lượng tử muôn màu kì lạ nằm ngay trước mũi chúng ta, vốn dĩ tồn tại song song trên một màng bên ngoài không - thời gian bốn chiều, ngắm nhìn thực tại vật chất quen thuộc hòa quyện với thế giới của những điều diệu kỳ như năng lượng và vật chất tối, sự này chồi của các vũ trụ, những chiều không gian bí ẩn và sự biến ảo của các dây rung siêu nhỏ...', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/3/4/GFAC9WGQ.jpg', 4);
INSERT INTO `books` VALUES (21, 'ECONOMIX - CÁC NỀN KINH TẾ VẬN HÀNH (VÀ KHÔNG VẬN HÀNH) THẾ NÀO VÀ TẠI SAO?', 'Michael Goodwin', 'Nếucác bạn từng tìm cách hiểu những khái niệm kinh tế qua việc đọc vô số giáo trình kinh tế học, nhưng vẫn thấy thật khó hình dung được bức tranh toàn cảnh về bộ môn này, thì cuốn sách sẽ cung cấp cho các bạnmột mảnh ghép hoàn chỉnh cho những mảnh nho nhỏ mà các bạn đã đọc qua.\r\n\r\n \r\n\r\nChúng ta sẽ hiểu rõ hơn về những khái niệm kinh tế cơ bản cùng những học thuyết kinh tế lớn còn ảnh hưởng tới ngày nay, qua tư tưởng của các nhà kinh tế học lớn như: Adam Smith, John Keynes...\r\n\r\n \r\n\r\nCó thể coi đây là một cuốn sử về lịch sử kinh tế thế giới kể từ khi nền kinh tế hàng hóa ra đời. Chúng ta sẽ lướt qua vài thế kỷ với vô số học thuyết về kinh tế học cùng những vụ khủng hoảng kinh tế lớn như thể đang đọc một cuốn truyện tranh, cả bi lẫn hài, căng thẳng mà không kém phần sảng khoái.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/12/11/SHZGPK19.jpg', 4);
INSERT INTO `books` VALUES (22, 'SỰ LÊN NGÔI CỦA CÁC NỀN TẢNG ĐA CHIỀU', 'David S. Evans , Richard Schmalensee', 'Thế giới có lẽ chưa bao giờ nhỏ đến thế! Chúng ta có thể ngồi tại nhà và đặt phòng cho chuyến công tác vào 6 tháng sau ở tận bên kia bán cầu; nhân thể ta cũng đặt bàn ăn cùng đối tác luôn; thậm chí, nếu còn độc thân, ta có thể có cơ hội hẹn hò nhân dịp này… Tất cả đều được thực hiện trên chiếc điện thoại cầm tay của bạn, với những thao tác đơn giản, dựa trên các trang mạng kết nối người có nhu cầu với người cung cấp dịch vụ!\r\n\r\n \r\n\r\nNhững công ty đại chúng lớn như Alibaba hay Facebook cũng như các công ty khởi nghiệp giá trị nhất hiện nay như Airbnb và Uber đều là những doanh nghiệp “mai mối” kiểu này – kết nối một nhóm khách hàng này với một nhóm khách hàng khác. Các nhà kinh tế học gọi đó này là các nền tảng đa chiều, vì họ cung cấp nền tảng thực tế hoặc ảo cho các nhóm khác nhau cùng kết nối.', NULL, 'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/7/2/G69YGHOO.jpg', 4);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Văn học');
INSERT INTO `category` VALUES (2, 'Thiếu nhi');
INSERT INTO `category` VALUES (3, 'Thời sự - Chính trị');
INSERT INTO `category` VALUES (4, 'Khoa học tự nhiên - Nhân văn');

-- ----------------------------
-- Table structure for rating
-- ----------------------------
DROP TABLE IF EXISTS `rating`;
CREATE TABLE `rating`  (
  `rating_id` int(0) NOT NULL AUTO_INCREMENT,
  `rating_value` int(0) NULL DEFAULT NULL,
  `id_user` int(0) NOT NULL,
  `id_book` int(0) NOT NULL,
  PRIMARY KEY (`rating_id`) USING BTREE,
  INDEX `id_user1_idx`(`id_user`) USING BTREE,
  INDEX `id_book1_idx`(`id_book`) USING BTREE,
  CONSTRAINT `id_book1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rating
-- ----------------------------
INSERT INTO `rating` VALUES (1, 5, 4, 1);
INSERT INTO `rating` VALUES (2, 5, 4, 2);
INSERT INTO `rating` VALUES (3, 5, 4, 3);
INSERT INTO `rating` VALUES (4, 5, 4, 4);
INSERT INTO `rating` VALUES (6, 1, 5, 4);
INSERT INTO `rating` VALUES (7, 2, 5, 1);
INSERT INTO `rating` VALUES (8, 3, 5, 2);
INSERT INTO `rating` VALUES (9, 4, 6, 3);
INSERT INTO `rating` VALUES (10, 1, 6, 2);
INSERT INTO `rating` VALUES (11, 3, 1, 2);
INSERT INTO `rating` VALUES (12, 5, 2, 2);
INSERT INTO `rating` VALUES (13, 4, 3, 2);
INSERT INTO `rating` VALUES (14, 4, 1, 3);
INSERT INTO `rating` VALUES (15, 2, 1, 1);

-- ----------------------------
-- Table structure for reaction
-- ----------------------------
DROP TABLE IF EXISTS `reaction`;
CREATE TABLE `reaction`  (
  `reaction_id` int(0) NOT NULL AUTO_INCREMENT,
  `reaction_choice` int(0) NULL DEFAULT NULL,
  `id_user` int(0) NOT NULL,
  `review_id` int(0) NOT NULL,
  PRIMARY KEY (`reaction_id`) USING BTREE,
  UNIQUE INDEX `reaction_id`(`reaction_id`) USING BTREE,
  INDEX `id_user2_idx`(`id_user`) USING BTREE,
  INDEX `review_id_idx`(`review_id`) USING BTREE,
  CONSTRAINT `id_user2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `review_id` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reaction
-- ----------------------------
INSERT INTO `reaction` VALUES (1, 1, 1, 1);
INSERT INTO `reaction` VALUES (2, 1, 2, 1);
INSERT INTO `reaction` VALUES (3, 1, 3, 1);
INSERT INTO `reaction` VALUES (4, 1, 4, 1);
INSERT INTO `reaction` VALUES (5, 0, 5, 1);
INSERT INTO `reaction` VALUES (6, 0, 6, 1);
INSERT INTO `reaction` VALUES (7, 1, 6, 2);
INSERT INTO `reaction` VALUES (8, 0, 5, 2);
INSERT INTO `reaction` VALUES (9, 0, 4, 2);
INSERT INTO `reaction` VALUES (10, 0, 2, 2);
INSERT INTO `reaction` VALUES (11, 1, 3, 2);
INSERT INTO `reaction` VALUES (12, 1, 1, 3);
INSERT INTO `reaction` VALUES (13, 1, 1, 4);
INSERT INTO `reaction` VALUES (14, 1, 1, 5);
INSERT INTO `reaction` VALUES (15, 1, 1, 6);
INSERT INTO `reaction` VALUES (16, 1, 1, 7);
INSERT INTO `reaction` VALUES (17, 0, 1, 8);
INSERT INTO `reaction` VALUES (18, 0, 1, 9);
INSERT INTO `reaction` VALUES (19, 0, 5, 9);
INSERT INTO `reaction` VALUES (20, 0, 4, 9);
INSERT INTO `reaction` VALUES (21, 1, 4, 8);
INSERT INTO `reaction` VALUES (22, 1, 3, 8);

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review`  (
  `review_id` int(0) NOT NULL AUTO_INCREMENT,
  `content_review` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `like_reaction` int(0) NULL DEFAULT NULL,
  `dislike_reaction` int(0) NULL DEFAULT NULL,
  `id_user` int(0) NOT NULL,
  `id_book` int(0) NOT NULL,
  PRIMARY KEY (`review_id`) USING BTREE,
  INDEX `id_user_idx`(`id_user`) USING BTREE,
  INDEX `id_book_idx`(`id_book`) USING BTREE,
  CONSTRAINT `id_book` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of review
-- ----------------------------
INSERT INTO `review` VALUES (1, 'Sách hay quá', NULL, NULL, 1, 1);
INSERT INTO `review` VALUES (2, 'Sách khá hay', NULL, NULL, 1, 2);
INSERT INTO `review` VALUES (3, 'Sách thật bổ ích', NULL, NULL, 4, 2);
INSERT INTO `review` VALUES (4, 'Không xuất sắc lắm', NULL, NULL, 5, 3);
INSERT INTO `review` VALUES (5, 'HAY!!!', NULL, NULL, 2, 4);
INSERT INTO `review` VALUES (6, 'Tẻ nhạt quá!!', NULL, NULL, 3, 4);
INSERT INTO `review` VALUES (7, 'SáCh HaY', NULL, NULL, 1, 5);
INSERT INTO `review` VALUES (8, 'Không thực tế', NULL, NULL, 4, 6);
INSERT INTO `review` VALUES (9, 'Sách xuất sắc', NULL, NULL, 4, 7);
INSERT INTO `review` VALUES (10, 'Sách không hay', NULL, NULL, 2, 8);
INSERT INTO `review` VALUES (11, 'Tuyệt vời', NULL, NULL, 1, 8);
INSERT INTO `review` VALUES (12, 'Không hay', NULL, NULL, 4, 9);
INSERT INTO `review` VALUES (13, 'Hay', NULL, NULL, 4, 10);
INSERT INTO `review` VALUES (14, 'Sách rất bổ ích', NULL, NULL, 3, 10);
INSERT INTO `review` VALUES (15, 'rất ok', NULL, NULL, 1, 11);
INSERT INTO `review` VALUES (16, 'Sách không hay', NULL, NULL, 1, 12);
INSERT INTO `review` VALUES (17, 'Tác giả viết rất tuyệt vời', NULL, NULL, 4, 12);
INSERT INTO `review` VALUES (18, 'Sách cực hay', NULL, NULL, 4, 13);
INSERT INTO `review` VALUES (19, 'sách không hay', NULL, NULL, 1, 14);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id_user` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `age` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`) USING BTREE,
  UNIQUE INDEX `id_user`(`id_user`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'quang1', '123321', 'Duong Dang Quang', 'Vinh Phuc', 'quang@gmail.com', 22);
INSERT INTO `users` VALUES (2, 'quang2', '123321', 'Duong Dang Quang', 'Vinh Phuc', 'quang2@gmail.com', 22);
INSERT INTO `users` VALUES (3, 'quang3', '123321', 'Duong Dang Quang', 'Vinh Phuc', 'quang3@gmail.com', 22);
INSERT INTO `users` VALUES (4, 'duyanh1', '123321', 'Vu Duy Anh', 'Thai Binh', 'duyanh1@gmail.com', 26);
INSERT INTO `users` VALUES (5, 'duyanh2', '123321', 'Duy Anh', 'Vinh Phuc', 'duyanh2@gmail.com', 27);
INSERT INTO `users` VALUES (6, 'thanhmoose', '123321', 'Thanh Do', 'Ha Noi', 'thanh@gmail.com', 19);

SET FOREIGN_KEY_CHECKS = 1;
