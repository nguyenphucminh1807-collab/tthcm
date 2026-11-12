// generators/generate_flashcards_and_fasttrack.js
const fs = require('fs');
const path = require('path');

const flashcardsDir = path.join(__dirname, '..', 'src', 'data', 'flashcards');
const dataDir = path.join(__dirname, '..', 'src', 'data');

const flashcardsByChapter = {
  1: [
    { id: "fc1_1", front: "Định nghĩa tư tưởng Hồ Chí Minh tại Đại hội XI (2011)", back: "Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, kết quả vận dụng và phát triển sáng tạo CN Mác - Lênin, kế thừa truyền thống dân tộc và tinh hoa văn hóa nhân loại; là tài sản tinh thần vô giá của Đảng và dân tộc.", tag: "Khái niệm", chapterId: 1 },
    { id: "fc1_2", front: "Mốc Đại hội VII (1991) có ý nghĩa gì đối với tư tưởng Hồ Chí Minh?", back: "Lần đầu tiên Đảng chính thức ghi vào Cương lĩnh: 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động'.", tag: "Mốc lịch sử", chapterId: 1 },
    { id: "fc1_3", front: "Nghị quyết UNESCO năm 1987 tôn vinh Chủ tịch Hồ Chí Minh danh hiệu gì?", back: "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam (Nghị quyết 24C/18.6.5 tại Khóa họp 24 ở Paris).", tag: "Quốc tế", chapterId: 1 },
    { id: "fc1_4", front: "Đối tượng nghiên cứu của môn học Tư tưởng Hồ Chí Minh?", back: "Gồm hai phương diện: (1) Toàn bộ hệ thống quan điểm trong di sản của Người; (2) Quá trình hiện thực hóa hệ thống quan điểm đó vào thực tiễn cách mạng Việt Nam.", tag: "Đối tượng", chapterId: 1 },
    { id: "fc1_5", front: "Cơ sở phương pháp luận của môn học?", back: "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử của chủ nghĩa Mác - Lênin.", tag: "Phương pháp luận", chapterId: 1 },
    { id: "fc1_6", front: "Năm nguyên tắc phương pháp luận chỉ đạo môn học?", back: "1. Thống nhất tính đảng và tính khoa học; 2. Thống nhất lý luận và thực tiễn; 3. Quan điểm lịch sử - cụ thể; 4. Quan điểm toàn diện và hệ thống; 5. Quan điểm kế thừa và phát triển.", tag: "Nguyên tắc", chapterId: 1 },
    { id: "fc1_7", front: "Hồ Chí Minh so sánh 'Lý luận như cái gì'?", back: "Lý luận như cái kim chỉ nam, chỉ phương hướng cho công việc thực tế. Không có lý luận thì lúng túng như nhắm mắt mà đi.", tag: "Luận điểm", chapterId: 1 },
    { id: "fc1_8", front: "Bệnh lý luận suông và bệnh khinh lý luận?", back: "- Lý luận suông: thuộc sách mà không biết làm thực tế (như cái hòm đựng sách).\n- Khinh lý luận: chỉ ỷ lại kinh nghiệm vụn vặt mà coi thường lý luận (như người một mắt sáng một mắt mờ).", tag: "Phê phán", chapterId: 1 },
    { id: "fc1_9", front: "Phương châm 'Dĩ bất biến, ứng vạn biến' nghĩa là gì?", back: "Lấy cái bất biến (độc lập dân tộc, chủ quyền quốc gia, ấm no hạnh phúc của dân) để ứng phó linh hoạt với muôn ngàn biến đổi của thời cuộc.", tag: "Phương châm", chapterId: 1 },
    { id: "fc1_10", front: "Ý nghĩa hàng đầu của việc học tập môn học đối với sinh viên?", back: "Góp phần nâng cao năng lực tư duy lý luận, củng cố lập trường cách mạng, rèn luyện đạo đức và phong cách làm việc.", tag: "Ý nghĩa", chapterId: 1 }
  ],
  2: [
    { id: "fc2_1", front: "Bản chất xã hội Việt Nam thời Pháp thuộc?", back: "Xã hội thuộc địa và phong kiến. Mâu thuẫn chủ yếu và gay gắt nhất là mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược.", tag: "Thực tiễn", chapterId: 2 },
    { id: "fc2_2", front: "Sự bế tắc của các phong trào yêu nước trước năm 1911?", back: "Phong trào Cần Vương (phong kiến) và phong trào Đông Du, Duy Tân (dân chủ tư sản) đều thất bại vì khủng hoảng đường lối cứu nước và giai cấp lãnh đạo.", tag: "Lịch sử", chapterId: 2 },
    { id: "fc2_3", front: "Yếu tố lý luận nào đóng vai trò QUYẾT ĐỊNH bước phát triển về chất trong tư tưởng Hồ Chí Minh?", back: "Chủ nghĩa Mác - Lênin. Cung cấp thế giới quan duy vật biện chứng và phương pháp luận khoa học cách mạng.", tag: "Cơ sở lý luận", chapterId: 2 },
    { id: "fc2_4", front: "Hồ Chí Minh kế thừa điều gì từ Nho giáo?", back: "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng, dùng nhân trị và đức trị để quản lý xã hội.", tag: "Kế thừa", chapterId: 2 },
    { id: "fc2_5", front: "Hồ Chí Minh kế thừa điều gì từ Phật giáo?", back: "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, vị tha, bình đẳng, hòa đồng với thiên nhiên và gắn bó với dân tộc.", tag: "Kế thừa", chapterId: 2 },
    { id: "fc2_6", front: "Hồ Chí Minh kế thừa khẩu hiệu nào của Tôn Trung Sơn?", back: "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc -> sáng tạo thành Độc lập - Tự do - Hạnh phúc.", tag: "Kế thừa", chapterId: 2 },
    { id: "fc2_7", front: "Ngày 5/6/1911 có ý nghĩa lịch sử gì?", back: "Nguyễn Tất Thành (Văn Ba) rời Bến cảng Nhà Rồng trên tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước.", tag: "Mốc son", chapterId: 2 },
    { id: "fc2_8", front: "Sự kiện bước ngoặt tháng 12/1920 tại Đại hội Tours (Pháp)?", back: "Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp; đánh dấu bước chuyển từ người yêu nước thành người cộng sản.", tag: "Bước ngoặt", chapterId: 2 },
    { id: "fc2_9", front: "Tác phẩm lý luận đầu tiên chuẩn bị trực tiếp thành lập Đảng?", back: "Tác phẩm 'Đường cách mệnh' (xuất bản năm 1927 tại Quảng Châu, Trung Quốc).", tag: "Tác phẩm", chapterId: 2 },
    { id: "fc2_10", front: "Ngày 28/1/1941 ghi dấu sự kiện gì?", back: "Lãnh tụ Nguyễn Ái Quốc trở về Tổ quốc tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng) sau 30 năm bôn ba tìm đường cứu nước.", tag: "Mốc son", chapterId: 2 }
  ],
  3: [
    { id: "fc3_1", front: "Chân lý thời đại về độc lập dân tộc được Bác tuyên ngôn năm 1966?", back: "'Không có gì quý hơn độc lập, tự do' (Lời kêu gọi đồng bào và chiến sĩ cả nước ngày 17/7/1966).", tag: "Chân lý", chapterId: 3 },
    { id: "fc3_2", front: "Độc lập dân tộc gắn liền với điều gì trong tư tưởng Hồ Chí Minh?", back: "Phải gắn liền với tự do, cơm no, áo ấm và hạnh phúc của nhân dân ('Nước độc lập mà dân không hưởng hạnh phúc tự do thì độc lập cũng chẳng có nghĩa lý gì').", tag: "Bản chất", chapterId: 3 },
    { id: "fc3_3", front: "Luận điểm sáng tạo về tính chủ động của cách mạng thuộc địa?", back: "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại.", tag: "Sáng tạo", chapterId: 3 },
    { id: "fc3_4", front: "Ẩn dụ 'con đỉa hai vòi' của Hồ Chí Minh?", back: "Một vòi bám vào vô sản chính quốc, một vòi bám vào thuộc địa. Muốn giết chết đế quốc phải chặt đứt đồng thời cả hai vòi.", tag: "Ẩn dụ", chapterId: 3 },
    { id: "fc3_5", front: "Đặc điểm lớn nhất của thời kỳ quá độ lên CNXH ở Việt Nam?", back: "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa.", tag: "Thời kỳ quá độ", chapterId: 3 },
    { id: "fc3_6", front: "Quan niệm mộc mạc của Hồ Chí Minh về chủ nghĩa xã hội?", back: "Chủ nghĩa xã hội là làm cho nhân dân lao động thoát nạn bần cùng, có công ăn việc làm, được ấm no và sống một đời hạnh phúc.", tag: "Mục tiêu", chapterId: 3 },
    { id: "fc3_7", front: "Thái độ học tập kinh nghiệm các nước anh em theo Hồ Chí Minh?", back: "Học tập nhưng không áp đặt máy móc giáo điều: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, địa lý khác...'.", tag: "Nguyên tắc", chapterId: 3 },
    { id: "fc3_8", front: "Động lực quyết định nhất để xây dựng CNXH?", back: "Con người Việt Nam yêu nước, nhân dân lao động làm chủ và sức mạnh khối đại đoàn kết toàn dân tộc.", tag: "Động lực", chapterId: 3 },
    { id: "fc3_9", front: "Phương châm thực hiện dân chủ XHCN theo Đại hội XIII?", back: "'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.", tag: "Vận dụng", chapterId: 3 },
    { id: "fc3_10", front: "Mối quan hệ biện chứng giữa ĐLDT và CNXH?", back: "Độc lập dân tộc là cơ sở, tiền đề để tiến lên CNXH. CNXH là điều kiện bảo đảm vững chắc nhất cho độc lập dân tộc trường tồn.", tag: "Mối quan hệ", chapterId: 3 }
  ],
  4: [
    { id: "fc4_1", front: "Quy luật ra đời của Đảng Cộng sản Việt Nam?", back: "Đảng Cộng sản Việt Nam = Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước (bổ sung phong trào yêu nước).", tag: "Quy luật", chapterId: 4 },
    { id: "fc4_2", front: "Luận điểm 'Đảng ta là đạo đức, là văn minh' khẳng định năm nào?", back: "Năm 1960, tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng Cộng sản Việt Nam.", tag: "Bản chất Đảng", chapterId: 4 },
    { id: "fc4_3", front: "Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT của Đảng?", back: "Tập trung dân chủ (Dân chủ là nền tảng, tập trung là sự thống nhất ý chí và hành động).", tag: "Nguyên tắc Đảng", chapterId: 4 },
    { id: "fc4_4", front: "Hồ Chí Minh so sánh Tự phê bình và phê bình với việc gì?", back: "Như mỗi ngày phải rửa mặt; là thang thuốc tốt nhất để làm cho phần tốt nảy nở như hoa mùa xuân và phần xấu mất dần đi.", tag: "Nguyên tắc Đảng", chapterId: 4 },
    { id: "fc4_5", front: "Lời dặn trong Di chúc về đoàn kết trong Đảng?", back: "Phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.", tag: "Di chúc", chapterId: 4 },
    { id: "fc4_6", front: "Định vị vị thế của công chức trong Nhà nước vì dân?", back: "Cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân, không phải 'quan cách mạng' đè đầu cưỡi cổ dân.", tag: "Nhà nước", chapterId: 4 },
    { id: "fc4_7", front: "Ngày bầu cử Quốc hội đầu tiên của nước ta?", back: "Ngày 6 tháng 1 năm 1946 (Tổng tuyển cử theo chế độ phổ thông đầu phiếu, bình đẳng, trực tiếp và bỏ phiếu kín).", tag: "Mốc lịch sử", chapterId: 4 },
    { id: "fc4_8", front: "Hai bản Hiến pháp do Hồ Chí Minh chỉ đạo soạn thảo?", back: "Hiến pháp năm 1946 (Hiến pháp đầu tiên) và Hiến pháp năm 1959.", tag: "Pháp quyền", chapterId: 4 },
    { id: "fc4_9", front: "Bộ ba 'giặc nội xâm' nguy hiểm theo Hồ Chí Minh?", back: "Tham ô, lãng phí và bệnh quan liêu. Tội tham ô nặng như tội việt gian, mật thám.", tag: "Phòng chống tiêu cực", chapterId: 4 },
    { id: "fc4_10", front: "Căn bệnh nào là 'bệnh mẹ' đẻ ra tham ô, lãng phí?", back: "Bệnh quan liêu (chỉ biết ký chỉ thị trên giấy, không kiểm tra đến nơi đến chốn, xa rời thực tế).", tag: "Phê phán", chapterId: 4 }
  ],
  5: [
    { id: "fc5_1", front: "Chân lý bất hủ về Đại đoàn kết toàn dân tộc?", back: "'Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!'", tag: "Chân lý", chapterId: 5 },
    { id: "fc5_2", front: "Tuyên bố mục đích Đảng Lao động Việt Nam ngày 3/3/1951?", back: "Gói gọn trong 8 chữ vàng: 'ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.", tag: "Khẩu hiệu", chapterId: 5 },
    { id: "fc5_3", front: "Nền tảng của khối đại đoàn kết toàn dân tộc?", back: "Khối liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng.", tag: "Nền tảng", chapterId: 5 },
    { id: "fc5_4", front: "Ẩn dụ 'Năm ngón tay có ngón ngắn ngón dài' nói về điều gì?", back: "Lòng khoan dung, độ lượng, tôn trọng điểm khác biệt chính đáng, lấy lòng nhân ái cảm hóa người lầm đường để đại đoàn kết.", tag: "Khoan dung", chapterId: 5 },
    { id: "fc5_5", front: "Tổ chức Mặt trận đầu tiên thành lập ngày 18/11/1930?", back: "Hội Phản đế đồng minh (ngày 18/11 nay là Ngày truyền thống Mặt trận Tổ quốc Việt Nam).", tag: "Mặt trận", chapterId: 5 },
    { id: "fc5_6", front: "Mặt trận Việt Minh thành lập khi nào, ở đâu?", back: "Ngày 19/5/1941 tại Hội nghị Trung ương 8 Pác Bó (Cao Bằng).", tag: "Việt Minh", chapterId: 5 },
    { id: "fc5_7", front: "Nguyên tắc hoạt động cốt lõi của Mặt trận?", back: "Hiệp thương dân chủ, tôn trọng lẫn nhau, chân thành, 'cầu đồng tồn dị' (tìm điểm chung, gác lại bất đồng nhỏ).", tag: "Nguyên tắc Mặt trận", chapterId: 5 },
    { id: "fc5_8", front: "Mục đích của đoàn kết quốc tế?", back: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại nhằm thực hiện thắng lợi mục tiêu giải phóng dân tộc và bảo vệ hòa bình thế giới.", tag: "Đoàn kết quốc tế", chapterId: 5 },
    { id: "fc5_9", front: "Luận điểm 'Thực lực là cái chiêng, ngoại giao là cái tiếng'?", back: "Khẳng định tự lực cánh sinh, nội lực dân tộc là gốc. Chiêng có to thì tiếng mới vang; thực lực vững thì ngoại giao mới thắng lợi.", tag: "Ngoại giao", chapterId: 5 },
    { id: "fc5_10", front: "Phương châm ngoại giao của Việt Nam hiện nay?", back: "Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế.", tag: "Vận dụng", chapterId: 5 }
  ],
  6: [
    { id: "fc6_1", front: "Định nghĩa văn hóa của Hồ Chí Minh ra đời khi nào?", back: "Tháng 8/1943 trong nhà tù Tưởng Giới Thạch (Nhật ký trong tù): 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra văn hóa...'.", tag: "Định nghĩa", chapterId: 6 },
    { id: "fc6_2", front: "Luận điểm khẳng định sứ mệnh soi đường của văn hóa?", back: "'Văn hóa soi đường cho quốc dân đi' (Hội nghị Văn hóa toàn quốc lần thứ nhất, 24/11/1946).", tag: "Sứ mệnh văn hóa", chapterId: 6 },
    { id: "fc6_3", front: "Vị thế của văn nghệ sĩ theo Hồ Chí Minh?", back: "Văn hóa nghệ thuật cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy (ngòi bút là vũ khí sắc bén).", tag: "Mặt trận văn hóa", chapterId: 6 },
    { id: "fc6_4", front: "Bốn câu hỏi nhà văn hóa phải trả lời khi sáng tác?", back: "1. Viết cho ai? (Đối tượng); 2. Mục đích viết là gì?; 3. Lấy tài liệu đâu mà viết?; 4. Cách viết như thế nào?", tag: "Phương pháp", chapterId: 6 },
    { id: "fc6_5", front: "Luận điểm 'Đạo đức là cái gốc'?", back: "Sông có nguồn mới có nước, cây có gốc mới đâm chồi. Người cách mạng phải có đạo đức, không có đạo đức thì tài giỏi mấy cũng không lãnh đạo được nhân dân.", tag: "Đạo đức là gốc", chapterId: 6 },
    { id: "fc6_6", front: "Chuẩn mực đạo đức cách mạng bao trùm, quan trọng nhất?", back: "Trung với nước, hiếu với dân. Thay đổi triệt để chữ trung quân phong kiến thành trung với độc lập Tổ quốc và hiếu với nhân dân.", tag: "Chuẩn mực đạo đức", chapterId: 6 },
    { id: "fc6_7", front: "Tứ đức của con người theo Hồ Chí Minh?", back: "Trời có bốn mùa (Xuân, Hạ, Thu, Đông) / Đất có bốn phương (Đông, Tây, Nam, Bắc) / Người có bốn đức: CẦN, KIỆM, LIÊM, CHÍNH. Thiếu một đức không thành người.", tag: "Tứ đức", chapterId: 6 },
    { id: "fc6_8", front: "Nguyên tắc đạo đức 'Nói đi đôi với làm, nêu gương'?", back: "Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền. Cán bộ chức vụ càng cao càng phải gương mẫu.", tag: "Nêu gương", chapterId: 6 },
    { id: "fc6_9", front: "Chiến lược 'trồng người' trăm năm?", back: "'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' (kế thừa Quản Trọng; đào tạo con người vừa hồng vừa chuyên).", tag: "Trồng người", chapterId: 6 },
    { id: "fc6_10", front: "Nghị quyết 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về văn hóa?", back: "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội; xây dựng 4 hệ giá trị: quốc gia, văn hóa, gia đình và chuẩn mực con người.", tag: "Văn kiện 2026", chapterId: 6 }
  ]
};

// Ghi các file flashcards
Object.keys(flashcardsByChapter).forEach(chId => {
  const cards = flashcardsByChapter[chId];
  const filePath = path.join(flashcardsDir, `chapter${chId}.js`);
  fs.writeFileSync(filePath, `export const chapter${chId}Flashcards = ${JSON.stringify(cards, null, 2)};\n`, 'utf8');
  console.log(`Generated ${cards.length} flashcards for Chapter ${chId}`);
});

// Tạo fastTrack.js (Ôn thi cấp tốc)
const fastTrackData = {
  mustRememberPoints: [
    { chapter: "Chương 1", title: "Khái niệm & Phương pháp", key: "Đại hội XI định nghĩa; Đại hội VII xác định nền tảng tư tưởng (1991); UNESCO 1987 tôn vinh; 5 nguyên tắc phương pháp luận; Dĩ bất biến ứng vạn biến." },
    { chapter: "Chương 2", title: "Cơ sở & Quá trình", key: "Mác - Lênin quyết định bước nhảy về chất; Yêu nước là điểm xuất phát; 5/6/1911 ra đi; 12/1920 Đại hội Tours gia nhập Quốc tế III; 28/1/1941 về nước; Hội nghị TW 8 (5/1941) lập Việt Minh." },
    { chapter: "Chương 3", title: "Độc lập dân tộc & CNXH", key: "Không có gì quý hơn độc lập tự do (1966); ĐLDT gắn tự do hạnh phúc; Cách mạng thuộc địa có thể thắng trước chính quốc; Đặc điểm lớn nhất: từ nông nghiệp lạc hậu thẳng lên CNXH bỏ qua TBCN; 'Ta không thể giống Liên Xô'." },
    { chapter: "Chương 4", title: "Đảng & Nhà nước", key: "Quy luật lập Đảng = Mác-Lênin + PT Công nhân + PT Yêu nước; Đảng là đạo đức, văn minh (1960); 5 nguyên tắc Đảng (Tập trung dân chủ cơ bản nhất); Nhà nước của dân do dân vì dân; Tổng tuyển cử 6/1/1946; Tham ô lãng phí là 'giặc nội xâm'; Quan liêu là bệnh mẹ." },
    { chapter: "Chương 5", title: "Đại đoàn kết", key: "Đoàn kết đoàn kết đại đoàn kết / Thành công thành công đại thành công; 8 chữ vàng: Đoàn kết toàn dân, phụng sự Tổ quốc; Nền tảng: Công - Nông - Trí; Mặt trận hiệp thương dân chủ, 'cầu đồng tồn dị'; Thực lực là chiêng, ngoại giao là tiếng." },
    { chapter: "Chương 6", title: "Văn hóa, Đạo đức, Con người", key: "Định nghĩa văn hóa 8/1943; Văn hóa soi đường cho quốc dân đi; Đạo đức là cái gốc (cây có gốc, sông có nguồn); Trung với nước hiếu với dân; Tứ đức Cần Kiệm Liêm Chính; Một tấm gương sống hơn trăm bài diễn văn; Vì lợi ích trăm năm trồng người; Nghị quyết 80-NQ/TW 2026." }
  ],
  confusingPairs: [
    {
      pair: "Đại hội VII (1991) vs Đại hội XI (2011)",
      explanation: "ĐH VII: Lần đầu tiên ghi nhận TT HCM cùng CN Mác - Lênin là nền tảng tư tưởng, kim chỉ nam. ĐH XI: Hoàn thiện định nghĩa khoa học đầy đủ nhất về tư tưởng Hồ Chí Minh."
    },
    {
      pair: "Bệnh lý luận suông vs Bệnh khinh lý luận",
      explanation: "Lý luận suông: Coi sách như hòm đựng đồ, không biết áp dụng thực tiễn. Khinh lý luận: Coi thường học lý luận, chỉ ỷ kinh nghiệm vụn vặt (như một mắt sáng một mắt mờ)."
    },
    {
      pair: "Cách mạng GPDT thuộc địa (HCM vs Quốc tế CS)",
      explanation: "Quốc tế CS: Coi thuộc địa phụ thuộc vào vô sản chính quốc. Hồ Chí Minh: Thuộc địa có thể chủ động vùng lên giành thắng lợi TRƯỚC cách mạng vô sản chính quốc."
    },
    {
      pair: "Quy luật ra đời của Đảng (Lênin vs Hồ Chí Minh)",
      explanation: "Lênin (phương Tây): CN Mác + PT Công nhân. Hồ Chí Minh (Việt Nam): CN Mác-Lênin + PT Công nhân + PHONG TRÀO YÊU NƯỚC."
    },
    {
      pair: "Dân là chủ vs Dân làm chủ",
      explanation: "Dân là chủ: Xác định ĐỊA VỊ, vị thế quyền lực cao nhất thuộc về dân. Dân làm chủ: Nhấn mạnh NĂNG LỰC, trách nhiệm và nghĩa vụ thực thi quyền làm chủ của dân."
    },
    {
      pair: "Trung quân ái quốc vs Trung với nước hiếu với dân",
      explanation: "Phong kiến: Trung với Vua (trung quân), coi dân là bầy tôi. Hồ Chí Minh: Trung với Tổ quốc độc lập, Hiếu với nhân dân lao động (lấy dân làm gốc)."
    }
  ],
  chronologyTimeline: [
    { year: "1858", event: "Thực dân Pháp nổ súng tấn công Đà Nẵng, mở đầu xâm lược VN." },
    { year: "1890 (19/5)", event: "Ngày sinh Chủ tịch Hồ Chí Minh tại làng Sen, Nam Đàn, Nghệ An." },
    { year: "1911 (5/6)", event: "Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước." },
    { year: "1919 (18/6)", event: "Nguyễn Ái Quốc gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles." },
    { year: "1920 (7/1920)", event: "Đọc Sơ thảo Luận cương của Lênin về vấn đề dân tộc và thuộc địa." },
    { year: "1920 (12/1920)", event: "Đại hội Tours: Bỏ phiếu tán thành Quốc tế III, sáng lập Đảng Cộng sản Pháp." },
    { year: "1925", event: "Xuất bản Bản án chế độ thực dân Pháp; thành lập Hội VN Cách mạng Thanh niên." },
    { year: "1927", event: "Xuất bản tác phẩm Đường cách mệnh tại Quảng Châu." },
    { year: "1930 (3/2)", event: "Thành lập Đảng Cộng sản Việt Nam; thông qua Cương lĩnh chính trị đầu tiên." },
    { year: "1930 (18/11)", event: "Thành lập Hội Phản đế đồng minh (Mặt trận đầu tiên)." },
    { year: "1941 (28/1)", event: "Trở về Tổ quốc tại mốc 108 Pác Bó sau 30 năm xa cách." },
    { year: "1941 (19/5)", event: "Chủ trì Hội nghị TW 8, thành lập Mặt trận Việt Minh." },
    { year: "1943 (8/1943)", event: "Đưa ra định nghĩa khoa học về văn hóa trong Nhật ký trong tù." },
    { year: "1944 (22/12)", event: "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân." },
    { year: "1945 (2/9)", event: "Đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa." },
    { year: "1946 (6/1)", event: "Tổng tuyển cử toàn quốc đầu tiên bầu Quốc hội khóa I." },
    { year: "1946 (9/11)", event: "Quốc hội thông qua bản Hiến pháp đầu tiên của nước ta." },
    { year: "1946 (19/12)", event: "Ra Lời kêu gọi toàn quốc kháng chiến chống thực dân Pháp." },
    { year: "1951 (2/1951)", event: "Đại hội II của Đảng; ra mắt Đảng Lao động VN (8 chữ vàng: Đoàn kết toàn dân, phụng sự Tổ quốc)." },
    { year: "1960", event: "Diễn văn kỷ niệm 30 năm thành lập Đảng: 'Đảng ta là đạo đức, là văn minh'." },
    { year: "1966 (17/7)", event: "Lời kêu gọi chống Mỹ khẳng định chân lý: 'Không có gì quý hơn độc lập, tự do'." },
    { year: "1969 (2/9)", event: "Chủ tịch Hồ Chí Minh qua đời, để lại bản Di chúc lịch sử vô giá." },
    { year: "1987", event: "Nghị quyết 24C/18.6.5 của UNESCO tôn vinh Bác là Anh hùng GPDT, Nhà văn hóa kiệt xuất." },
    { year: "1991 (6/1991)", event: "Đại hội VII ghi nhận CN Mác-Lênin và Tư tưởng HCM là nền tảng tư tưởng, kim chỉ nam." },
    { year: "2011", event: "Đại hội XI hoàn thiện định nghĩa toàn diện về tư tưởng Hồ Chí Minh." },
    { year: "2026 (7/1/2026)", event: "Nghị quyết 80-NQ/TW của Bộ Chính trị về văn hóa; Đại hội XIV của Đảng." }
  ],
  famousQuotes: [
    { quote: "Không có gì quý hơn độc lập, tự do.", context: "Lời kêu gọi chống Mỹ cứu nước (17/7/1966)" },
    { quote: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.", context: "Thư gửi UBND các kỳ, tỉnh, huyện và làng (tháng 10/1945)" },
    { quote: "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!", context: "Bài nói chuyện tại lớp bồi dưỡng cán bộ công đoàn (1957)" },
    { quote: "Đảng ta là đạo đức, là văn minh.", context: "Diễn văn kỷ niệm 30 năm Ngày thành lập Đảng (1960)" },
    { quote: "Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân.", context: "Tác phẩm Sửa đổi lối làm việc (1947)" },
    { quote: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.", context: "Nói chuyện tại lớp học chính trị giáo viên (1958)" },
    { quote: "Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong.", context: "Bài thơ ghi lại bài học lấy dân làm gốc" },
    { quote: "Dĩ bất biến, ứng vạn biến.", context: "Căn dặn cụ Huỳnh Thúc Kháng trước khi sang Pháp đàm phán (1946)" },
    { quote: "Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn.", context: "Chỉ đạo công tác ngoại giao kháng chiến" },
    { quote: "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước.", context: "Căn dặn Đại đoàn Quân Tiên phong tại Đền Hùng (19/9/1954)" }
  ]
};

const fastTrackPath = path.join(dataDir, 'fastTrack.js');
fs.writeFileSync(fastTrackPath, `export const fastTrackData = ${JSON.stringify(fastTrackData, null, 2)};\n`, 'utf8');
console.log('Generated fastTrackData successfully!');
