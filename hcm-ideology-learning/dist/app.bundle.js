
// HCM Ideology Learning Platform - Standalone Production Bundle (Offline Ready)
(function() {
  'use strict';

  
const chaptersMeta = [
  {
    "id": 1,
    "number": "Chương 1",
    "title": "Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh",
    "shortTitle": "Khái niệm & Phương pháp nghiên cứu",
    "description": "Nắm vững định nghĩa tư tưởng Hồ Chí Minh qua các kỳ Đại hội Đảng, đối tượng nghiên cứu, cơ sở phương pháp luận Mác - Lênin, 5 nguyên tắc phương pháp luận và ý nghĩa học tập môn học.",
    "topicsCount": 4,
    "questionsCount": 100,
    "flashcardsCount": 25,
    "pages": "Trang 11 - 29 (Giáo trình 2026)",
    "color": "#B91C1C",
    "badge": "Nhập môn",
    "topics": [
      {
        "id": "1.1",
        "title": "Khái niệm Tư tưởng Hồ Chí Minh & Quá trình nhận thức của Đảng"
      },
      {
        "id": "1.2",
        "title": "Đối tượng nghiên cứu của môn học"
      },
      {
        "id": "1.3",
        "title": "Cơ sở phương pháp luận và các phương pháp nghiên cứu"
      },
      {
        "id": "1.4",
        "title": "Ý nghĩa của việc học tập, nghiên cứu môn học"
      }
    ]
  },
  {
    "id": 2,
    "number": "Chương 2",
    "title": "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    "shortTitle": "Cơ sở & Quá trình hình thành",
    "description": "Khám phá cơ sở thực tiễn trong nước và quốc tế, cơ sở lý luận (truyền thống dân tộc, tinh hoa nhân loại, CN Mác - Lênin), nhân tố chủ quan Hồ Chí Minh và 5 giai đoạn phát triển lịch sử.",
    "topicsCount": 4,
    "questionsCount": 100,
    "flashcardsCount": 28,
    "pages": "Trang 30 - 65 (Giáo trình 2026)",
    "color": "#C2410C",
    "badge": "Cốt lõi",
    "topics": [
      {
        "id": "2.1",
        "title": "Cơ sở thực tiễn (Việt Nam và Thế giới cuối XIX - đầu XX)"
      },
      {
        "id": "2.2",
        "title": "Cơ sở lý luận (Truyền thống dân tộc, Tinh hoa nhân loại, CN Mác - Lênin)"
      },
      {
        "id": "2.3",
        "title": "Nhân tố chủ quan Hồ Chí Minh (Phẩm chất cá nhân & Tài năng thực tiễn)"
      },
      {
        "id": "2.4",
        "title": "5 giai đoạn hình thành, phát triển và Giá trị tư tưởng Hồ Chí Minh"
      }
    ]
  },
  {
    "id": 3,
    "number": "Chương 3",
    "title": "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội",
    "shortTitle": "Độc lập dân tộc & Chủ nghĩa xã hội",
    "description": "Luận điểm sáng tạo về độc lập dân tộc gắn liền tự do hạnh phúc, cách mạng thuộc địa thắng lợi trước chính quốc, bản chất CNXH và các nguyên tắc xây dựng CNXH trong thời kỳ quá độ.",
    "topicsCount": 4,
    "questionsCount": 100,
    "flashcardsCount": 26,
    "pages": "Trang 66 - 112 (Giáo trình 2026)",
    "color": "#B45309",
    "badge": "Chiến lược",
    "topics": [
      {
        "id": "3.1",
        "title": "Tư tưởng về Độc lập dân tộc & Cách mạng giải phóng dân tộc"
      },
      {
        "id": "3.2",
        "title": "Tư tưởng về Chủ nghĩa xã hội và xây dựng CNXH ở Việt Nam"
      },
      {
        "id": "3.3",
        "title": "Mối quan hệ biện chứng giữa Độc lập dân tộc và Chủ nghĩa xã hội"
      },
      {
        "id": "3.4",
        "title": "Vận dụng tư tưởng trong giai đoạn hiện nay theo Văn kiện Đại hội XIII, XIV"
      }
    ]
  },
  {
    "id": 4,
    "number": "Chương 4",
    "title": "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
    "shortTitle": "Đảng Cộng sản & Nhà nước của dân",
    "description": "Tính tất yếu ra đời và bản chất Đảng là đạo đức, văn minh; 5 nguyên tắc tổ chức Đảng; Nhà nước dân chủ, pháp quyền nhân nghĩa có hiệu lực pháp lý cao; đấu tranh phòng chống giặc nội xâm.",
    "topicsCount": 3,
    "questionsCount": 100,
    "flashcardsCount": 26,
    "pages": "Trang 113 - 154 (Giáo trình 2026)",
    "color": "#047857",
    "badge": "Hệ thống chính trị",
    "topics": [
      {
        "id": "4.1",
        "title": "Tư tưởng về Đảng Cộng sản Việt Nam (Quy luật ra đời, Bản chất, 5 nguyên tắc)"
      },
      {
        "id": "4.2",
        "title": "Tư tưởng về Nhà nước của nhân dân, do nhân dân, vì nhân dân & Pháp quyền"
      },
      {
        "id": "4.3",
        "title": "Xây dựng Nhà nước trong sạch, vững mạnh & Phòng chống tiêu cực tham nhũng"
      }
    ]
  },
  {
    "id": 5,
    "number": "Chương 5",
    "title": "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
    "shortTitle": "Đại đoàn kết toàn dân & Quốc tế",
    "description": "Đại đoàn kết là chiến lược sống còn, quyết định thành bại; Mặt trận Dân tộc Thống nhất qua các thời kỳ; kết hợp sức mạnh dân tộc với sức mạnh thời đại; phương châm 'Dĩ bất biến ứng vạn biến'.",
    "topicsCount": 3,
    "questionsCount": 100,
    "flashcardsCount": 25,
    "pages": "Trang 155 - 188 (Giáo trình 2026)",
    "color": "#1D4ED8",
    "badge": "Sức mạnh tổng hợp",
    "topics": [
      {
        "id": "5.1",
        "title": "Tư tưởng về Đại đoàn kết toàn dân tộc (Vai trò, Lực lượng, Điều kiện, Hình thức)"
      },
      {
        "id": "5.2",
        "title": "Tư tưởng về Đoàn kết quốc tế (Sự cần thiết, Lực lượng, Nguyên tắc đoàn kết)"
      },
      {
        "id": "5.3",
        "title": "Vận dụng tư tưởng đại đoàn kết và đối ngoại hội nhập trong giai đoạn hiện nay"
      }
    ]
  },
  {
    "id": 6,
    "number": "Chương 6",
    "title": "Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người",
    "shortTitle": "Văn hóa, Đạo đức & Con người",
    "description": "Định nghĩa văn hóa 1943; 4 chuẩn mực đạo đức cách mạng (Trung - Hiếu, Cần Kiệm Liêm Chính Chí công vô tư); 3 nguyên tắc xây dựng đạo đức; vai trò con người và chiến lược trồng người trăm năm.",
    "topicsCount": 4,
    "questionsCount": 100,
    "flashcardsCount": 26,
    "pages": "Trang 189 - 241 (Giáo trình 2026)",
    "color": "#6D28D9",
    "badge": "Nhân văn sâu sắc",
    "topics": [
      {
        "id": "6.1",
        "title": "Tư tưởng về Văn hóa (Định nghĩa, Mối quan hệ, Văn hóa là mặt trận, Nền văn hóa mới)"
      },
      {
        "id": "6.2",
        "title": "Tư tưởng về Đạo đức cách mạng (Vai trò, 4 chuẩn mực, 3 nguyên tắc xây dựng)"
      },
      {
        "id": "6.3",
        "title": "Tư tưởng về Con người và Chiến lược 'trồng người'"
      },
      {
        "id": "6.4",
        "title": "Xây dựng văn hóa, đạo đức, con người Việt Nam hiện nay (Văn kiện Đại hội XIV, Nghị quyết 80-NQ/TW 2026)"
      }
    ]
  }
];


const chapter1Theory = {
  "chapterId": 1,
  "title": "Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh",
  "overview": "Chương 1 là chương mở đầu đóng vai trò nhập môn, trang bị cho người học hệ thống tri thức nền tảng về khái niệm khoa học tư tưởng Hồ Chí Minh, quá trình nhận thức của Đảng Cộng sản Việt Nam, đối tượng nghiên cứu, cơ sở phương pháp luận Mác - Lênin, 5 nguyên tắc phương pháp luận chỉ đạo và ý nghĩa to lớn của việc nghiên cứu môn học đối với sinh viên trong thời đại mới.",
  "objectives": [
    "Hiểu và trình bày chính xác định nghĩa khoa học về tư tưởng Hồ Chí Minh được khẳng định tại Đại hội XI (2011) và Văn kiện Đại hội XIV (2026).",
    "Nắm vững các mốc lịch sử trong tiến trình phát triển nhận thức của Đảng về tư tưởng Hồ Chí Minh từ năm 1930 đến nay.",
    "Phân tích rõ hai khía cạnh hợp thành đối tượng nghiên cứu của môn học: hệ thống quan điểm trong di sản và quá trình hiện thực hóa vào thực tiễn.",
    "Làm chủ 5 nguyên tắc phương pháp luận nền tảng và các phương pháp nghiên cứu chuyên biệt, liên ngành.",
    "Nhận thức sâu sắc ý nghĩa của môn học trong việc bồi dưỡng thế giới quan, rèn luyện bản lĩnh chính trị và phong cách làm việc 'Dĩ bất biến ứng vạn biến'."
  ],
  "sections": [
    {
      "id": "sec1_1",
      "title": "I. Khái niệm Tư tưởng Hồ Chí Minh & Quá trình nhận thức của Đảng",
      "content": "\n### 1. Định nghĩa khoa học về Tư tưởng Hồ Chí Minh\nTại Đại hội đại biểu toàn quốc lần thứ XI (năm 2011), Đảng Cộng sản Việt Nam đã đúc kết và đưa ra định nghĩa hoàn chỉnh, sâu sắc nhất về tư tưởng Hồ Chí Minh:\n\n> *\"Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại; là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi.\"*\n\nĐịnh nghĩa này được tiếp tục khẳng định, bổ sung trong Văn kiện Đại hội XIII (2021) và Văn kiện Đại hội XIV (2026), làm rõ ba nội hàm cốt lõi:\n- **Bản chất cách mạng và khoa học:** Là một hệ thống quan điểm toàn diện và sâu sắc, phản ánh những quy luật khách quan của cách mạng Việt Nam; hướng đến mục tiêu giải phóng dân tộc, giải phóng giai cấp, giải phóng xã hội và con người.\n- **Nguồn gốc hình thành:** Là kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin (yếu tố giữ vai trò quyết định bước nhảy vọt về chất), kết hợp nhuần nhuyễn với các giá trị truyền thống yêu nước của dân tộc và tiếp thu có chọn lọc tinh hoa văn hóa Đông - Tây.\n- **Ý nghĩa lịch sử và thời đại:** Là tài sản tinh thần vô giá, cùng với chủ nghĩa Mác - Lênin cấu thành nền tảng tư tưởng và kim chỉ nam cho mọi hành động của Đảng và nhân dân Việt Nam.\n\n---\n\n### 2. Quá trình nhận thức của Đảng Cộng sản Việt Nam về tư tưởng Hồ Chí Minh\nNhận thức của Đảng về tư tưởng Hồ Chí Minh là một quá trình vận động, phát triển từ thấp đến cao, trải qua thử thách lịch sử:\n1. **Giai đoạn thành lập Đảng (1930):** Ngay trong *Chánh cương vắn tắt, Sách lược vắn tắt* do Nguyễn Ái Quốc khởi thảo, những luận điểm căn bản của tư tưởng Hồ Chí Minh đã định hình đường lối cứu nước đúng đắn.\n2. **Đại hội II (Tháng 2/1951):** Đảng khẳng định rõ: *\"Đường lối chính trị, nếp làm việc và đạo đức cách mạng của Đảng ta hiện nay là đường lối, tác phong và đạo đức Hồ Chủ tịch... Toàn Đảng hãy ra sức học tập... đó là điều kiện tiên quyết làm cho cách mạng đi mau đến thắng lợi hoàn toàn.\"*\n3. **Điếu văn của Ban Chấp hành Trung ương (2/9/1969):** Tôn vinh Người là *\"Anh hùng dân tộc vĩ đại\"*, khẳng định non sông gấm vóc sinh ra Người và chính Người đã làm rạng rỡ non sông đất nước ta.\n4. **Đại hội IV (12/1976) & Đại hội V (3/1982):** Nhấn mạnh thắng lợi của dân tộc gắn liền với tên tuổi Chủ tịch Hồ Chí Minh, coi trọng việc học tập có hệ thống tác phẩm của Người.\n5. **Đại hội VI (12/1986) - Khởi xướng Đổi mới:** Đảng nhấn mạnh: *\"Đảng ta phải nắm vững bản chất cách mạng và khoa học của chủ nghĩa Mác - Lênin, kế thừa di sản quý báu về tư tưởng và lý luận cách mạng của Chủ tịch Hồ Chí Minh.\"*\n6. **Đại hội VII (1991) - Bước ngoặt lịch sử:** Lần đầu tiên ghi nhận chính thức vào Cương lĩnh xây dựng đất nước trong thời kỳ quá độ: **\"Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động\"**. Luận điểm này được hiến định trong Hiến pháp 1992 (sửa đổi, bổ sung 2013).\n7. **Đại hội IX (2001) & Đại hội X (2006):** Xác định tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.\n8. **Đại hội XI (2011) đến Đại hội XIV (2026):** Hoàn thiện định nghĩa đầy đủ, nhấn mạnh yêu cầu: *\"Kiên định và vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh trong kỷ nguyên vươn mình của dân tộc Việt Nam\"*.\n\n---\n\n### 3. Sự ghi nhận của cộng đồng quốc tế (UNESCO 1987)\nTại Khóa họp Đại hội đồng lần thứ 24 ở Paris (20/10 - 20/11/1987), UNESCO đã thông qua **Nghị quyết 24C/18.6.5** nhân dịp kỷ niệm 100 năm ngày sinh của Người (1890 - 1990), khẳng định:\n- Chủ tịch Hồ Chí Minh là: **\"Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam\"**.\n- Người đã cống hiến trọn đời cho sự nghiệp giải phóng dân tộc của nhân dân Việt Nam, góp phần vào cuộc đấu tranh chung của các dân tộc trên thế giới vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.\n      "
    },
    {
      "id": "sec1_2",
      "title": "II. Đối tượng nghiên cứu của môn học",
      "content": "\nMôn học Tư tưởng Hồ Chí Minh thuộc ngành Khoa học chính trị, có đối tượng nghiên cứu gồm hai bình diện gắn kết chặt chẽ:\n\n### 1. Toàn bộ hệ thống quan điểm của Hồ Chí Minh\n- Thể hiện qua di sản trước tác đồ sộ: các bài nói, bài viết, thư từ, tác phẩm lý luận, đường lối chiến lược, chỉ đạo thực tiễn của Người.\n- Phản ánh những quy luật vận động của cách mạng Việt Nam: độc lập dân tộc gắn liền với chủ nghĩa xã hội, xây dựng Đảng cầm quyền, Nhà nước của dân, khối đại đoàn kết, văn hóa, đạo đức và con người.\n\n### 2. Quá trình \"hiện thực hóa\" hệ thống tư tưởng trong thực tiễn\n- Không dừng lại ở văn bản câu chữ, đối tượng môn học còn bao hàm quá trình Đảng và nhân dân Việt Nam vận dụng, biến hệ thống lý luận của Người thành hiện thực lịch sử sinh động qua các thời kỳ: cách mạng giải phóng dân tộc (1930-1945), hai cuộc kháng chiến chống Pháp và chống Mỹ (1945-1975), thời kỳ xây dựng và bảo vệ Tổ quốc, đặc biệt là công cuộc Đổi mới toàn diện đất nước từ 1986 đến nay.\n      "
    },
    {
      "id": "sec1_3",
      "title": "III. Cơ sở phương pháp luận và các phương pháp nghiên cứu",
      "content": "\n### 1. Cơ sở phương pháp luận\nCơ sở phương pháp luận của môn học Tư tưởng Hồ Chí Minh chính là **Chủ nghĩa duy vật biện chứng và Chủ nghĩa duy vật lịch sử** của chủ nghĩa Mác - Lênin. Phương pháp luận này đòi hỏi nhận thức tư tưởng của Người trong sự vận động, phát triển, có liên hệ biện chứng và gắn chặt với điều kiện lịch sử cụ thể.\n\n---\n\n### 2. Năm nguyên tắc phương pháp luận chỉ đạo\n\n#### a) Thống nhất tính đảng và tính khoa học\n- Đứng trên lập trường của giai cấp công nhân, quán triệt quan điểm của Đảng để nhận thức đúng đắn tư tưởng Hồ Chí Minh.\n- Đảm bảo tính khách quan, trung thực, dựa trên sự thật lịch sử, tránh suy diễn chủ quan hoặc tô vẽ thần thánh hóa phi lịch sử.\n\n#### b) Thống nhất lý luận và thực tiễn\n- Hồ Chí Minh khẳng định: *\"Lý luận như cái kim chỉ nam, nó chỉ phương hướng cho chúng ta trong công việc thực tế. Không có lý luận thì lúng túng như nhắm mắt mà đi\"*.\n- Kiên quyết phê phán hai khuynh hướng sai lầm:\n  + **Bệnh lý luận suông:** Xem sách để làm ra vẻ ta đây, không biết áp dụng vào việc thực tế (\"như cái hòm đựng sách\").\n  + **Bệnh khinh lý luận:** Coi thường lý luận, chỉ dựa vào kinh nghiệm mù quáng (\"có kinh nghiệm mà không có lý luận cũng như một mắt sáng một mắt mờ\").\n- Yêu cầu: \"Học để mà làm\", thực hành phải nhằm theo lý luận, lý luận phải đem ra thực hành.\n\n#### c) Quan điểm lịch sử - cụ thể\n- Đặt tư tưởng của Người vào bối cảnh lịch sử, hoàn cảnh xã hội cụ thể của Việt Nam và thời đại cuối thế kỷ XIX - thế kỷ XX.\n- Thấy rõ bước phát triển logic từ một người yêu nước trở thành người chiến sĩ cộng sản lỗi lạc.\n\n#### d) Quan điểm toàn diện và hệ thống\n- Tư tưởng Hồ Chí Minh là một chỉnh thể hữu cơ, trong đó hạt nhân cốt lõi là **độc lập dân tộc gắn liền với chủ nghĩa xã hội**.\n- Không được cô lập, cắt xén từng câu chữ, từng luận điểm riêng lẻ ra khỏi chỉnh thể hệ thống.\n\n#### e) Quan điểm kế thừa và phát triển\n- Nghiên cứu không chỉ để sao chép nguyên xi giáo điều mà đòi hỏi phải biết kế thừa, vận dụng và phát triển sáng tạo tư tưởng của Người trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư và hội nhập quốc tế hiện nay.\n\n---\n\n### 3. Các phương pháp nghiên cứu cụ thể\n1. **Phương pháp logic kết hợp phương pháp lịch sử:** Phương pháp lịch sử làm rõ tiến trình xuất hiện và diễn biến của các sự kiện; phương pháp logic vạch ra bản chất, quy luật vận động khách quan. Sự kết hợp chặt chẽ giữa hai phương pháp này là yêu cầu tất yếu.\n2. **Phương pháp phân tích văn bản kết hợp với hoạt động thực tiễn:** Nghiên cứu cả văn bản (bộ *Toàn tập* 15 tập) và những chỉ đạo hành động thực tế của Người.\n3. **Phương pháp chuyên ngành và liên ngành:** Kết hợp tri thức chính trị học, triết học, sử học, kinh tế học, văn hóa học, quân sự và ngoại giao để tiếp cận toàn diện di sản của Người.\n      "
    },
    {
      "id": "sec1_4",
      "title": "IV. Ý nghĩa của việc học tập môn học Tư tưởng Hồ Chí Minh",
      "content": "\nViệc học tập môn học mang ý nghĩa chiến lược sâu sắc đối với sinh viên:\n\n### 1. Nâng cao năng lực tư duy lý luận\n- Bồi dưỡng thế giới quan duy vật biện chứng và nhân sinh quan cách mạng; giúp sinh viên có nhãn quan chính trị sắc bén, biết phân tích đúng sai trước các vấn đề phức tạp trong đời sống xã hội.\n- Tích cực bảo vệ nền tảng tư tưởng của Đảng, đấu tranh phản bác các luận điệu xuyên tạc, thù địch.\n\n### 2. Giáo dục đạo đức cách mạng, củng cố niềm tin khoa học\n- Nuôi dưỡng tinh thần yêu nước, lòng tự hào dân tộc, niềm tin vào sự lãnh đạo của Đảng và con đường đi lên chủ nghĩa xã hội.\n- Tu dưỡng lối sống lành mạnh, cần kiệm liêm chính, quét sạch chủ nghĩa cá nhân ích kỷ.\n\n### 3. Xây dựng, rèn luyện phương pháp và phong cách công tác\n- Học tập phong cách tư duy độc lập, sáng tạo, nói đi đôi với làm, gần gũi nhân dân.\n- Vận dụng linh hoạt phương châm hành động cách mạng của Hồ Chí Minh: **\"Dĩ bất biến, ứng vạn biến\"** (lấy cái bất biến là độc lập dân tộc, lợi ích tối cao của Tổ quốc để ứng phó với muôn ngàn biến chuyển của thời cuộc).\n      "
    }
  ],
  "confusingConceptsTable": [
    {
      "conceptA": "Đại hội VII (1991)",
      "conceptB": "Đại hội XI (2011)",
      "distinction": "Đại hội VII là mốc son LẦN ĐẦU TIÊN Đảng chính thức khẳng định lấy Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam. Đại hội XI là nơi Đảng hoàn thiện ĐỊNH NGHĨA KHOA HỌC ĐẦY ĐỦ NHẤT về tư tưởng Hồ Chí Minh."
    },
    {
      "conceptA": "Bệnh lý luận suông",
      "conceptB": "Bệnh khinh lý luận",
      "distinction": "Bệnh lý luận suông là thuộc lòng sách vở mà không biết áp dụng vào thực tế, coi sách như cái hòm đựng đồ. Bệnh khinh lý luận là chỉ ỷ vào kinh nghiệm thực tiễn vụn vặt mà coi thường học tập lý luận, như người 'một mắt sáng một mắt mờ'."
    },
    {
      "conceptA": "Phương pháp lịch sử",
      "conceptB": "Phương pháp logic",
      "distinction": "Phương pháp lịch sử tái hiện trình tự xuất hiện, diễn biến cụ thể theo dòng thời gian của sự vật hiện tượng. Phương pháp logic trừu tượng hóa khỏi các chi tiết ngẫu nhiên để nắm bắt bản chất sâu xa và quy luật vận động khách quan."
    }
  ],
  "keyMilestones": [
    {
      "year": "1930",
      "event": "Chánh cương vắn tắt, Sách lược vắn tắt phản ánh tư tưởng cách mạng giải phóng dân tộc đầu tiên."
    },
    {
      "year": "Tháng 2/1951",
      "event": "Đại hội II của Đảng khẳng định học tập đường lối chính trị, tác phong và đạo đức Hồ Chủ tịch."
    },
    {
      "year": "Tháng 12/1986",
      "event": "Đại hội VI khởi xướng đường lối Đổi mới, nhấn mạnh kế thừa di sản tư tưởng quý báu của Người."
    },
    {
      "year": "Năm 1987",
      "event": "Khóa họp 24 Đại hội đồng UNESCO thông qua Nghị quyết 24C/18.6.5 vinh danh Hồ Chí Minh."
    },
    {
      "year": "Tháng 6/1991",
      "event": "Đại hội VII đưa Tư tưởng Hồ Chí Minh cùng Chủ nghĩa Mác - Lênin vào Cương lĩnh, khẳng định nền tảng tư tưởng."
    },
    {
      "year": "Tháng 1/2011",
      "event": "Đại hội XI hoàn thiện định nghĩa khoa học toàn diện về Tư tưởng Hồ Chí Minh."
    },
    {
      "year": "Năm 2026",
      "event": "Văn kiện Đại hội XIV của Đảng tái khẳng định kiên định và phát triển sáng tạo tư tưởng Hồ Chí Minh."
    }
  ],
  "keywords": [
    "Hệ thống quan điểm toàn diện và sâu sắc",
    "Nền tảng tư tưởng và kim chỉ nam",
    "Nghị quyết 24C/18.6.5 UNESCO (1987)",
    "Thống nhất tính đảng và tính khoa học",
    "Thống nhất lý luận và thực tiễn",
    "Kim chỉ nam",
    "Bệnh lý luận suông & Bệnh khinh lý luận",
    "Dĩ bất biến ứng vạn biến"
  ],
  "summary": "Chương 1 xác định Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về cách mạng Việt Nam, sáng tạo trên nền tảng Mác - Lênin, truyền thống dân tộc và tinh hoa nhân loại. Việc nghiên cứu môn học phải dựa trên lập trường CNDVBC & CNDVLS, tuân thủ 5 nguyên tắc phương pháp luận (đặc biệt là thống nhất tính đảng với tính khoa học, thống nhất lý luận với thực tiễn) nhằm rèn luyện nhãn quan chính trị, đạo đức và phong cách làm việc cho thế hệ trẻ."
};

const chapter2Theory = {
  "chapterId": 2,
  "title": "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
  "overview": "Chương 2 làm sáng tỏ cội nguồn sâu xa và mảnh đất hiện thực sản sinh ra tư tưởng Hồ Chí Minh, bao gồm cơ sở thực tiễn sinh động của dân tộc và thời đại, cơ sở lý luận phong phú (truyền thống yêu nước dân tộc, tinh hoa văn hóa phương Đông và phương Tây, đỉnh cao là chủ nghĩa Mác - Lênin), nhân tố chủ quan với phẩm chất và tài năng kiệt xuất của Người, cùng 5 thời kỳ phát triển lịch sử tất yếu dẫn tới thắng lợi vĩ đại của cách mạng Việt Nam.",
  "objectives": [
    "Phân tích sâu sắc bối cảnh thực tiễn Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX và sự khủng hoảng đường lối cứu nước trước khi Hồ Chí Minh ra đi.",
    "Làm rõ các nguồn gốc lý luận: truyền thống yêu nước dân tộc, tinh hoa văn hóa nhân loại (Nho giáo, Phật giáo, Lão giáo, Tam dân chủ nghĩa, tư tưởng Khai sáng phương Tây) và vai trò quyết định bước phát triển về chất của chủ nghĩa Mác - Lênin.",
    "Phân tích nhân tố chủ quan Hồ Chí Minh: tư duy độc lập, sáng tạo, hoài bão cứu nước, tài năng tổ chức thực tiễn.",
    "Trình bày chi tiết mốc thời gian, nội dung và ý nghĩa của 5 thời kỳ hình thành, phát triển tư tưởng Hồ Chí Minh.",
    "Khẳng định giá trị to lớn của tư tưởng Hồ Chí Minh đối với sự nghiệp cách mạng dân tộc và phong trào tiến bộ thế giới."
  ],
  "sections": [
    {
      "id": "sec2_1",
      "title": "I. Cơ sở hình thành Tư tưởng Hồ Chí Minh",
      "content": "\n### 1. Cơ sở thực tiễn\n\n#### a) Thực tiễn Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX\n- **Chính sách cai trị của thực dân Pháp:** Năm 1858, Pháp nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng). Triều đình nhà Nguyễn lần lượt ký các hiệp ước đầu hàng (Hiệp ước Giáp Tuất 1874, Hácmăng 1883, Patơnốt 1884), biến Việt Nam từ một quốc gia phong kiến độc lập thành nước **\"thuộc địa và phong kiến\"**.\n- **Chuyển biến cơ cấu xã hội:** Thực dân Pháp duy trì nền nông nghiệp lạc hậu (95% dân số là nông dân) kết hợp bóc lột tài nguyên, làm nảy sinh các giai cấp mới: giai cấp công nhân, tư sản dân tộc và tầng lớp tiểu tư sản trí thức.\n- **Mâu thuẫn cơ bản trong xã hội:** Xuất hiện hai mâu thuẫn cơ bản, trong đó **mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược** là mâu thuẫn chủ yếu và gay gắt nhất (bên cạnh mâu thuẫn giữa nông dân với địa chủ phong kiến).\n- **Sự bế tắc của các phong trào yêu nước truyền thống:**\n  + Phong trào phong kiến Cần Vương (Trương Định, Nguyễn Trung Trực, Phan Đình Phùng, Hoàng Hoa Thám) đều thất bại, chứng tỏ hệ tư tưởng phong kiến đã lỗi thời.\n  + Các phong trào theo khuynh hướng dân chủ tư sản: Phong trào Đông Du của Phan Bội Châu (1905-1909), Phong trào Duy Tân của Phan Châu Trinh (1906-1908), Đông Kinh Nghĩa Thục của Lương Văn Can, Nguyễn Quyền (1907) đều thất bại vì giai cấp tư sản Việt Nam non yếu, chưa có đường lối và phương pháp cứu nước đúng đắn.\n- **Yêu cầu lịch sử:** Đất nước lâm vào cuộc khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo. Câu hỏi bức thiết đặt ra: Cứu nước bằng con đường nào để đi đến thắng lợi?\n\n#### b) Thực tiễn thế giới cuối thế kỷ XIX - đầu thế kỷ XX\n- Chủ nghĩa tư bản chuyển từ tự do cạnh tranh sang giai đoạn độc quyền đế quốc chủ nghĩa, tăng cường áp bức thuộc địa ở Á, Phi, Mỹ Latinh.\n- **Cách mạng Tháng Mười Nga năm 1917:** Thắng lợi của Cách mạng Tháng Mười Nga đã mở ra một thời đại mới trong lịch sử nhân loại - thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi toàn thế giới, nối liền cách mạng vô sản ở chính quốc với phong trào giải phóng dân tộc ở thuộc địa.\n- **Sự ra đời của Quốc tế Cộng sản (Quốc tế III, 2/3/1919):** Trở thành bộ tham mưu lãnh đạo phong trào cách mạng thế giới, cổ vũ phong trào đấu tranh của các dân tộc thuộc địa.\n\n---\n\n### 2. Cơ sở lý luận\n\n#### a) Giá trị truyền thống tốt đẹp của dân tộc Việt Nam\n- **Chủ nghĩa yêu nước truyền thống:** Là giá trị xuyên suốt hàng ngàn năm dựng nước và giữ nước, là động lực tinh thần vô địch giúp dân tộc vượt qua mọi thiên tai, giặc giã. Chính chủ nghĩa yêu nước là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Hồ Chí Minh ra đi tìm đường cứu nước.\n- **Tinh thần đoàn kết, tương thân tương ái, khoan dung nhân nghĩa:** Lấy dân làm gốc (\"Nước lấy dân làm gốc\", \"Chở thuyền là dân, lật thuyền cũng là dân\").\n- **Ý chí bất khuất, cần cù, sáng tạo, thông minh:** Luôn tự lực tự cường, giữ gìn bản sắc văn hóa dân tộc.\n\n#### b) Tinh hoa văn hóa nhân loại\n- **Văn hóa phương Đông:**\n  + *Nho giáo:* Hồ Chí Minh kế thừa tư tưởng triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng bình đẳng đại đồng, dùng nhân trị, đức trị quản lý xã hội. Người nhận định: Khổng Tử có ưu điểm là sự tu dưỡng đạo đức cá nhân.\n  + *Phật giáo:* Kế thừa tư tưởng từ bi, bác ái, cứu khổ cứu nạn, vị tha, bình đẳng, khuyến khích làm việc thiện, hòa đồng với thiên nhiên và gắn bó với dân tộc.\n  + *Lão giáo:* Kế thừa tinh thần sống hòa đồng gắn bó với thiên nhiên, thoát khỏi vòng danh lợi, khuyên con người ít ham muốn vật chất, thực hiện cần kiệm liêm chính.\n  + *Chủ nghĩa Tam dân của Tôn Trung Sơn:* Kế thừa tư tưởng \"Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc\", vận dụng sáng tạo vào khẩu hiệu của nước Việt Nam Dân chủ Cộng hòa: \"Độc lập - Tự do - Hạnh phúc\".\n- **Văn hóa phương Tây:**\n  + Tiếp thu tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp 1789.\n  + Kế thừa quan điểm về nhân quyền, dân quyền trong *Tuyên ngôn Độc lập Mỹ năm 1776* và *Tuyên ngôn Nhân quyền và Dân quyền Pháp năm 1791*.\n  + Nghiên cứu các nhà tư tưởng khai sáng phương Tây: Voltaire, Rousseau, Montesquieu; tiếp cận tư tưởng dân chủ và pháp quyền hiện đại.\n\n#### c) Chủ nghĩa Mác - Lênin – Cơ sở thế giới quan và phương pháp luận quyết định\n- Là cơ sở lý luận **quyết định bước phát triển mới về chất** trong tư tưởng Hồ Chí Minh.\n- Cung cấp thế giới quan duy vật biện chứng và phương pháp luận duy vật lịch sử khoa học, giúp Người nhận ra con đường cứu nước đúng đắn duy nhất: **\"Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản\"**.\n- Người đánh giá: *\"Chủ nghĩa Mác có ưu điểm là phương pháp làm việc biện chứng\"*, *\"Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mệnh nhất là chủ nghĩa Lênin\"*.\n\n---\n\n### 3. Nhân tố chủ quan Hồ Chí Minh\n- **Phẩm chất cá nhân cao đẹp:** Có hoài bão lớn cứu dân cứu nước; có bản lĩnh kiên định, tư duy độc lập, tự chủ, sáng tạo, giàu tinh thần phê phán; có lòng nhân ái bao la, suốt đời vì nước, vì dân.\n- **Tài năng hoạt động thực tiễn và lý luận kiệt xuất:** Trải qua quá trình lao động, học tập, nghiên cứu và hoạt động cách mạng phong phú ở gần 30 quốc gia trên thế giới; am hiểu sâu sắc văn hóa Đông - Tây; có năng lực tổng kết thực tiễn để khái quát thành lý luận cách mạng.\n      "
    },
    {
      "id": "sec2_2",
      "title": "II. Quá trình hình thành và phát triển Tư tưởng Hồ Chí Minh (5 Thời kỳ)",
      "content": "\n### 1. Thời kỳ trước năm 1911: Hình thành tư tưởng yêu nước và chí hướng tìm đường cứu nước mới\n- Sinh ngày 19/5/1890 tại làng Sen (Kim Liên, Nam Đàn, Nghệ An). Thân phụ là cụ Phó bảng Nguyễn Sinh Sắc, thân mẫu là bà Hoàng Thị Loan.\n- Tiếp thu truyền thống hiếu học, yêu nước của quê hương xứ Nghệ.\n- Chứng kiến sự thất bại đau xót của các cuộc khởi nghĩa Cần Vương và phong trào Duy Tân. Người khâm phục lòng yêu nước của Phan Bội Châu, Phan Châu Trinh, Hoàng Hoa Thám nhưng không tán thành con đường cứu nước của họ.\n- **Ngày 5/6/1911:** Với tên gọi Văn Ba, Người rời Bến cảng Nhà Rồng trên tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước, với quyết tâm: sang phương Tây tìm hiểu xem nước Pháp và các nước khác làm thế nào rồi trở về giúp đồng bào.\n\n---\n\n### 2. Thời kỳ 1911 - 1920: Hình thành tư tưởng cứu nước, giải phóng dân tộc theo con đường cách mạng vô sản\n- **1911 - 1917:** Người đi qua nhiều nước ở châu Á, châu Phi, châu Mỹ, châu Âu. Người nhận ra rằng: Nhân dân lao động ở đâu cũng bị bóc lột là bạn bè của nhau; chủ nghĩa thực dân, đế quốc ở đâu cũng là kẻ thù chung.\n- **1917:** Trở lại Pháp, hòa mình vào phong trào công nhân Pháp. Năm 1919 gia nhập Đảng Xã hội Pháp.\n- **18/6/1919:** Thay mặt Hội những người Việt Nam yêu nước tại Pháp, ký tên **Nguyễn Ái Quốc** gửi *Bản Yêu sách của nhân dân An Nam* tới Hội nghị Versailles đòi quyền tự do, bình đẳng.\n- **Tháng 7/1920:** Đọc tác phẩm của V.I. Lênin: *Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa* đăng trên báo L'Humanité. Luận cương đã giải đáp căn bản con đường giải phóng cho dân tộc.\n- **25 - 30/12/1920:** Tham dự Đại hội lần thứ XVIII của Đảng Xã hội Pháp tại thành phố Tours, bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp. Đây là bước ngoặt quyết định: **từ một người yêu nước trở thành một người cộng sản**.\n\n---\n\n### 3. Thời kỳ 1920 - 1930: Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam\n- **1921:** Sáng lập Hội Liên hiệp thuộc địa tại Pháp.\n- **1922:** Sáng lập và làm chủ bút kiêm phóng viên tờ báo *Le Paria (Người cùng khổ)*.\n- **1923 - 1924:** Sang Liên Xô hoạt động trong Quốc tế Cộng sản, dự Đại hội V Quốc tế Cộng sản (1924).\n- **1925:** Xuất bản tại Paris tác phẩm nổi tiếng *Bản án chế độ thực dân Pháp*. Thành lập **Hội Việt Nam Cách mạng Thanh niên** (tháng 6/1925) tại Quảng Châu, ra báo *Thanh niên*.\n- **1927:** Xuất bản tác phẩm lý luận kinh điển **Đường cách mệnh** tại Quảng Châu, vạch rõ tính chất, nhiệm vụ, lực lượng và phương pháp cách mạng.\n- **Đầu năm 1930:** Chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long (Hương Cảng, Trung Quốc) thành lập Đảng Cộng sản Việt Nam, trực tiếp soạn thảo **Cương lĩnh chính trị đầu tiên** (*Chánh cương vắn tắt, Sách lược vắn tắt*).\n\n---\n\n### 4. Thời kỳ 1930 - 1941: Vượt qua thử thách, kiên trì giữ vững đường lối cách mạng đúng đắn, sáng tạo\n- Sau Hội nghị thành lập Đảng, tư tưởng sáng tạo của Nguyễn Ái Quốc trong Cương lĩnh chính trị đầu tiên bị Quốc tế Cộng sản và một số đồng chí trong Đảng hiểu lầm, phê phán là \"hữu khuynh\", \"dân tộc chủ nghĩa\". Hội nghị Trung ương tháng 10/1930 ra nghị quyết phê phán và thủ tiêu Cương lĩnh vắn tắt.\n- Người trải qua những năm tháng giam cầm ở Hồng Kông (vụ án Tống Văn Sơ 1931-1933).\n- **1934 - 1938:** Nghiên cứu và học tập tại Viện Nghiên cứu các vấn đề dân tộc và thuộc địa ở Mátxcơva.\n- **Tháng 1/1941:** Trở về Tổ quốc sau 30 năm xa cách tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng).\n- **Tháng 5/1941:** Chủ trì Hội nghị Trung ương 8 của Đảng, quyết định chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, thành lập **Mặt trận Việt Minh** (19/5/1941). Thực tiễn đã chứng minh quan điểm của Người là hoàn toàn đúng đắn.\n\n---\n\n### 5. Thời kỳ 1941 - 1969: Tiếp tục phát triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta\n- **1941 - 1945:** Lãnh đạo phong trào chuẩn bị khởi nghĩa. Ngày 22/12/1944 thành lập Đội Việt Nam Tuyên truyền Giải phóng quân. Ngày 18/8/1945 ra Lời kêu gọi Tổng khởi nghĩa. Cách mạng Tháng Tám 1945 thắng lợi rực rỡ.\n- **2/9/1945:** Đọc *Tuyên ngôn Độc lập* tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.\n- **1945 - 1946:** Lãnh đạo cuộc đấu tranh giữ vững chính quyền non trẻ trước thế \"ngàn cân treo sợi tóc\" với phương châm \"Dĩ bất biến, ứng vạn biến\".\n- **1946 - 1954:** Lãnh đạo toàn quốc kháng chiến chống Pháp (\"Lời kêu gọi toàn quốc kháng chiến\" 19/12/1946), đỉnh cao là chiến thắng Điện Biên Phủ \"lừng lẫy năm châu, chấn động địa cầu\".\n- **1954 - 1969:** Lãnh đạo đồng thời hai nhiệm vụ chiến lược: xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh giải phóng miền Nam thống nhất đất nước. Lời kêu gọi ngày 17/7/1966 khẳng định chân lý: **\"Không có gì quý hơn độc lập, tự do\"**.\n- Để lại bản *Di chúc* lịch sử kết tinh tư tưởng, đạo đức, phong cách cao cả trước lúc đi xa (2/9/1969).\n      "
    },
    {
      "id": "sec2_3",
      "title": "III. Giá trị của Tư tưởng Hồ Chí Minh",
      "content": "\n### 1. Đối với cách mạng Việt Nam\n- **Đưa cách mạng giải phóng dân tộc đến thắng lợi hoàn toàn:** Chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước kéo dài gần một thế kỷ; đưa nhân dân ta từ thân phận nô lệ trở thành người làm chủ đất nước.\n- **Là nền tảng tư tưởng và kim chỉ nam vững chắc:** Soi sáng con đường quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, bảo đảm định hướng xã hội chủ nghĩa trong công cuộc Đổi mới và hội nhập quốc tế hiện nay.\n\n### 2. Đối với sự phát triển tiến bộ của nhân loại\n- **Mở ra cho các dân tộc thuộc địa con đường giải phóng:** Cống hiến lý luận đột phá: phong trào giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc.\n- **Góp phần tích cực vào cuộc đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội:** Tấm gương sáng ngời về lòng khoan dung nhân ái, kết hợp hài hòa chủ nghĩa yêu nước chân chính với chủ nghĩa quốc tế vô sản trong sáng.\n      "
    }
  ],
  "confusingConceptsTable": [
    {
      "conceptA": "Giai đoạn 1911 - 1920",
      "conceptB": "Giai đoạn 1920 - 1930",
      "distinction": "Giai đoạn 1911-1920 là quá trình TÌM THẤY VÀ XÁC ĐỊNH CON ĐƯỜNG CỨU NƯỚC (đỉnh cao là đọc Luận cương Lênin và bỏ phiếu gia nhập Quốc tế III năm 1920). Giai đoạn 1920-1930 là thời kỳ HÌNH THÀNH CÁC NỘI DUNG CƠ BẢN TƯ TƯỞNG CÁCH MẠNG VIỆT NAM (thể hiện qua Hội VN Cách mạng Thanh niên, tác phẩm Đường cách mệnh và Cương lĩnh chính trị đầu tiên 1930)."
    },
    {
      "conceptA": "Cương lĩnh chính trị đầu tiên (2/1930)",
      "conceptB": "Luận cương chính trị (10/1930)",
      "distinction": "Cương lĩnh 2/1930 do Nguyễn Ái Quốc khởi thảo đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tập hợp rộng rãi mọi tầng lớp yêu nước. Luận cương 10/1930 do Trần Phú khởi thảo nhấn mạnh đấu tranh giai cấp và cách mạng ruộng đất, nặng về lập trường giai cấp công - nông."
    },
    {
      "conceptA": "Cơ sở lý luận Mác - Lênin",
      "conceptB": "Truyền thống yêu nước dân tộc",
      "distinction": "Chủ nghĩa yêu nước là nền tảng tư tưởng ban đầu, động lực thôi thúc Người ra đi tìm đường cứu nước. Chủ nghĩa Mác - Lênin là cơ sở lý luận đóng vai trò QUYẾT ĐỊNH BƯỚC NHẢY VỌT VỀ CHẤT trong tư tưởng Hồ Chí Minh."
    }
  ],
  "keyMilestones": [
    {
      "year": "19/5/1890",
      "event": "Ngày sinh Chủ tịch Hồ Chí Minh tại Kim Liên, Nam Đàn, Nghệ An."
    },
    {
      "year": "5/6/1911",
      "event": "Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước."
    },
    {
      "year": "18/6/1919",
      "event": "Gửi Bản Yêu sách của nhân dân An Nam đến Hội nghị Versailles đòi quyền tự do dân chủ."
    },
    {
      "year": "Tháng 7/1920",
      "event": "Đọc Sơ thảo Luận cương của Lênin về vấn đề dân tộc và thuộc địa."
    },
    {
      "year": "Tháng 12/1920",
      "event": "Bỏ phiếu tán thành Quốc tế III, sáng lập Đảng Cộng sản Pháp tại Đại hội Tours."
    },
    {
      "year": "Năm 1925",
      "event": "Xuất bản Bản án chế độ thực dân Pháp; sáng lập Hội Việt Nam Cách mạng Thanh niên."
    },
    {
      "year": "Năm 1927",
      "event": "Xuất bản tác phẩm lý luận Đường cách mệnh tại Quảng Châu."
    },
    {
      "year": "3/2/1930",
      "event": "Thành lập Đảng Cộng sản Việt Nam, thông qua Cương lĩnh chính trị đầu tiên."
    },
    {
      "year": "28/1/1941",
      "event": "Trở về Tổ quốc tại cột mốc 108 Pác Bó (Cao Bằng) sau 30 năm bôn ba."
    },
    {
      "year": "Tháng 5/1941",
      "event": "Chủ trì Hội nghị Trung ương 8, đặt giải phóng dân tộc lên hàng đầu, lập Việt Minh."
    },
    {
      "year": "2/9/1945",
      "event": "Đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa."
    },
    {
      "year": "17/7/1966",
      "event": "Ra lời kêu gọi chống Mỹ khẳng định chân lý 'Không có gì quý hơn độc lập, tự do'."
    },
    {
      "year": "2/9/1969",
      "event": "Chủ tịch Hồ Chí Minh qua đời, để lại bản Di chúc lịch sử vô giá."
    }
  ],
  "keywords": [
    "Khủng hoảng đường lối cứu nước",
    "Chủ nghĩa yêu nước là giá trị xuyên suốt",
    "Tinh hoa văn hóa Đông - Tây",
    "Quyết định bước phát triển về chất",
    "Ngày 5/6/1911 - Bến cảng Nhà Rồng",
    "Sơ thảo luận cương của Lênin (7/1920)",
    "Đại hội Tours (12/1920)",
    "Bản án chế độ thực dân Pháp (1925)",
    "Đường cách mệnh (1927)",
    "Cương lĩnh chính trị đầu tiên (1930)",
    "Hội nghị Trung ương 8 (5/1941)",
    "Không có gì quý hơn độc lập, tự do"
  ],
  "summary": "Chương 2 phân tích toàn diện 3 cơ sở hình thành tư tưởng Hồ Chí Minh: thực tiễn dân tộc và thời đại, cơ sở lý luận (truyền thống yêu nước, văn hóa nhân loại, chủ nghĩa Mác - Lênin đóng vai trò quyết định), và phẩm chất kiệt xuất của Người. Tư tưởng của Người trải qua 5 thời kỳ phát triển logic tất yếu, đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác và có giá trị trường tồn cùng non sông đất nước."
};

const chapter3Theory = {
  "chapterId": 3,
  "title": "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội",
  "overview": "Chương 3 trình bày một trong những nội dung cốt lõi, xuyên suốt và sáng tạo bậc nhất trong di sản Hồ Chí Minh: tư tưởng về độc lập dân tộc gắn liền với chủ nghĩa xã hội. Đây là sợi chỉ đỏ định hướng cách mạng Việt Nam, từ luận điểm giải phóng dân tộc thuộc địa mang tính chủ động, thắng lợi trước chính quốc, đến mô hình CNXH nhân văn vì hạnh phúc con người và con đường đi lên CNXH trong thời kỳ quá độ bỏ qua chế độ tư bản chủ nghĩa.",
  "objectives": [
    "Nắm vững quan điểm toàn diện của Hồ Chí Minh về độc lập dân tộc: độc lập thật sự, hoàn toàn, gắn liền với tự do, cơm no, áo ấm và hạnh phúc của nhân dân.",
    "Phân tích hệ thống luận điểm sáng tạo về cách mạng giải phóng dân tộc: con đường vô sản, vai trò lãnh đạo của Đảng, lực lượng toàn dân, tính chủ động thắng lợi trước chính quốc và phương pháp bạo lực cách mạng.",
    "Làm rõ quan niệm của Hồ Chí Minh về bản chất, mục tiêu, động lực của chủ nghĩa xã hội và đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam.",
    "Chứng minh mối quan hệ biện chứng: độc lập dân tộc là tiền đề cho CNXH, và CNXH là điều kiện bảo đảm vững chắc cho độc lập dân tộc.",
    "Vận dụng sáng tạo tư tưởng vào công cuộc Đổi mới, phát huy sức mạnh dân chủ xã hội chủ nghĩa và phòng chống nguy cơ suy thoái theo Văn kiện Đại hội XIII, XIV."
  ],
  "sections": [
    {
      "id": "sec3_1",
      "title": "I. Tư tưởng Hồ Chí Minh về Độc lập dân tộc",
      "content": "\n### 1. Vấn đề độc lập dân tộc\n- **Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của mọi dân tộc:**\n  + Kế thừa và phát triển quyền con người trong *Tuyên ngôn Độc lập Mỹ (1776)* và *Tuyên ngôn Nhân quyền Pháp (1791)* thành quyền dân tộc: *\"Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do\"*.\n  + Khẳng định chân lý thời đại: **\"Không có gì quý hơn độc lập, tự do\"** (1966).\n- **Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân:**\n  + Sau Cách mạng Tháng Tám 1945, Người chỉ rõ: *\"Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\"*.\n  + Độc lập phải đem lại cơm ăn, áo mặc, chỗ ở và học hành cho người dân: *\"Dân chỉ biết rõ giá trị của tự do, của độc lập khi mà dân được ăn no, mặc đủ\"*.\n- **Độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn và triệt để:**\n  + Hoàn toàn trên tất cả các mặt: chủ quyền lãnh thổ, chính trị, quân sự, kinh tế, ngoại giao; không chấp nhận thứ \"độc lập giả hiệu\", độc lập nửa vời lệ thuộc vào ngoại bang.\n- **Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ:**\n  + *\"Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi\"*.\n\n---\n\n### 2. Tư tưởng về cách mạng giải phóng dân tộc\nHồ Chí Minh đã bổ sung, phát triển sáng tạo lý luận Mác - Lênin về cách mạng thuộc địa qua 5 luận điểm lớn:\n1. **Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản:** Đánh đổ ách thống trị thực dân, giành độc lập dân tộc rồi tiến lên xây dựng chủ nghĩa xã hội.\n2. **Cách mạng giải phóng dân tộc phải do Đảng Cộng sản lãnh đạo:** Đảng cách mệnh chân chính giác ngộ và tổ chức quần chúng, có đường lối đúng đắn dựa trên chủ nghĩa Mác - Lênin.\n3. **Cách mạng giải phóng dân tộc là sự nghiệp của toàn dân, trên cơ sở liên minh công - nông:**\n   + *\"Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông\"* (tác phẩm *Đường cách mệnh* 1927).\n4. **Cách mạng giải phóng dân tộc cần chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc:**\n   + Đây là **luận điểm sáng tạo xuất sắc nhất** của Hồ Chí Minh, phá vỡ quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ (cho rằng cách mạng thuộc địa phụ thuộc vào cách mạng ở chính quốc).\n   + Người ví chủ nghĩa tư bản như con đỉa hai vòi (một vòi bám vào vô sản chính quốc, một vòi bám vào thuộc địa). Cuộc đấu tranh ở thuộc địa là \"lực lượng khổng lồ\", có thể chặt đứt một vòi, giúp đỡ vô sản chính quốc trong sự nghiệp giải phóng.\n5. **Cách mạng giải phóng dân tộc phải được tiến hành bằng phương pháp bạo lực cách mạng:**\n   + Dùng bạo lực cách mạng của quần chúng (kết hợp đấu tranh chính trị và đấu tranh vũ trang) để đập tan bạo lực phản cách mạng của kẻ thù.\n   + Khởi nghĩa toàn dân, chiến tranh nhân dân, tự lực cánh sinh dựa vào sức mình là chính.\n      "
    },
    {
      "id": "sec3_2",
      "title": "II. Tư tưởng Hồ Chí Minh về Chủ nghĩa xã hội và Xây dựng CNXH ở Việt Nam",
      "content": "\n### 1. Quan niệm về Chủ nghĩa xã hội\n- Hồ Chí Minh tiếp cận chủ nghĩa xã hội bằng ngôn ngữ dung dị, thiết thực:\n  + *\"Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc\"*.\n  + Về bản chất, CNXH là chế độ do nhân dân lao động làm chủ; xóa bỏ chế độ người bóc lột người; thực hiện nguyên tắc phân phối: làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng (trừ người già, trẻ em, tàn tật).\n\n### 2. Các đặc trưng cơ bản của xã hội xã hội chủ nghĩa\n- **Chính trị:** Là xã hội do nhân dân làm chủ, Nhà nước là của dân, do dân, vì dân dưới sự lãnh đạo của Đảng Cộng sản.\n- **Kinh tế:** Có nền kinh tế phát triển cao gắn liền với lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu.\n- **Văn hóa, đạo đức và quan hệ xã hội:** Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; con người được giải phóng, tôn trọng, đối xử bình đẳng và đoàn kết hữu ái.\n\n### 3. Mục tiêu và Động lực của Chủ nghĩa xã hội ở Việt Nam\n- **Mục tiêu:**\n  + *Chính trị:* Xây dựng chế độ dân chủ (\"Dân là chủ và dân làm chủ\").\n  + *Kinh tế:* Xây dựng nền kinh tế phát triển cao với công nghiệp và nông nghiệp hiện đại, khoa học kỹ thuật tiên tiến; kinh tế quốc doanh giữ vai trò chủ đạo.\n  + *Văn hóa - Xã hội:* Nền văn hóa mang tính dân tộc, khoa học, đại chúng; nâng cao dân trí; phát triển quan hệ xã hội công bằng, văn minh.\n- **Hệ thống động lực:**\n  + *Động lực bao trùm và quyết định nhất:* **Con người**, đặc biệt là khối đại đoàn kết toàn dân tộc trên nền tảng liên minh công - nông - trí thức.\n  + *Lợi ích của dân và dân chủ:* Đặt lợi ích của nhân dân lên trên hết (\"việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh\").\n  + *Khắc phục các lực cản (chống lại các trở lực):* Kiên quyết loại trừ chủ nghĩa cá nhân (\"kẻ địch hung ác, nội xâm\"), quan liêu, tham ô, lãng phí, bè phái, chia rẽ.\n\n### 4. Thời kỳ quá độ lên Chủ nghĩa xã hội ở Việt Nam\n- **Tính chất:** Là thời kỳ cải biến sâu sắc nhất nhưng phức tạp, lâu dài, gian khổ, khó khăn hơn cả việc đánh giặc; phải thay đổi nếp sống, thói quen cũ hàng ngàn năm.\n- **Đặc điểm lớn nhất:** Đi từ **một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa**.\n- **Bốn nguyên tắc xây dựng CNXH trong thời kỳ quá độ:**\n  1. Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác - Lênin.\n  2. Phải giữ vững độc lập dân tộc.\n  3. Phải đoàn kết, học tập kinh nghiệm các nước anh em nhưng tuyệt đối không máy móc, giáo điều (*\"Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên CNXH\"*).\n  4. Xây phải đi đôi với chống (xây dựng các giá trị mới đồng thời kiên quyết quét sạch tàn dư cũ).\n      "
    },
    {
      "id": "sec3_3",
      "title": "III. Mối quan hệ biện chứng giữa Độc lập dân tộc và Chủ nghĩa xã hội",
      "content": "\n### 1. Độc lập dân tộc là cơ sở, tiền đề để tiến lên Chủ nghĩa xã hội\n- Không giành được độc lập dân tộc thì không có chủ quyền để tiến hành bất kỳ công cuộc xây dựng xã hội mới nào.\n- Cách mạng giải phóng dân tộc càng triệt để thì càng tạo tiền đề chính trị, kinh tế, xã hội vững chắc để chuyển sang cách mạng XHCN.\n\n### 2. Chủ nghĩa xã hội là điều kiện bảo đảm vững chắc cho Độc lập dân tộc\n- Chỉ có CNXH mới xóa bỏ triệt để áp bức bóc lột, đem lại ấm no, tự do thật sự cho nhân dân, từ đó tạo nên sức mạnh nội sinh vô địch để bảo vệ vững chắc nền độc lập, chủ quyền của Tổ quốc.\n- Bác nhấn mạnh: *\"Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được các dân tộc bị áp bức và những người lao động trên thế giới khỏi ách nô lệ\"*.\n\n### 3. Ba điều kiện bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội\n1. Đảm bảo vai trò lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam.\n2. Củng cố và tăng cường khối đại đoàn kết toàn dân tộc trên nền tảng liên minh công - nông.\n3. Đoàn kết gắn bó mật thiết với phong trào cách mạng thế giới và các lực lượng yêu chuộng hòa bình.\n      "
    },
    {
      "id": "sec3_4",
      "title": "IV. Vận dụng Tư tưởng trong giai đoạn hiện nay theo Văn kiện Đại hội XIII, XIV",
      "content": "\nĐảng Cộng sản Việt Nam xác định bài học số một xuyên suốt tiến trình cách mạng: **\"Nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội\"**:\n- **Kiên định mục tiêu độc lập dân tộc và CNXH:** Không dao động trước những biến động quốc tế phức tạp; chủ động đẩy mạnh toàn diện công cuộc đổi mới.\n- **Phát huy quyền làm chủ của nhân dân:** Thực hiện nhất quán phương châm *\"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng\"*.\n- **Củng cố hệ thống chính trị vững mạnh:** Nhất nguyên chính trị dưới sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam.\n- **Kiên quyết đấu tranh phòng, chống các biểu hiện suy thoái:** Thực hiện quyết liệt Kết luận số 21-KL/TW (2021) của Ban Chấp hành Trung ương Đảng khóa XIII, đẩy lùi tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống, \"tự diễn biến\", \"tự chuyển hóa\" trong nội bộ cán bộ, đảng viên.\n      "
    }
  ],
  "confusingConceptsTable": [
    {
      "conceptA": "Cách mạng GPDT thắng trước chính quốc (Hồ Chí Minh)",
      "conceptB": "Cách mạng thuộc địa phụ thuộc vào chính quốc (Quốc tế Cộng sản)",
      "distinction": "Quốc tế Cộng sản (Đại hội VI 1928) coi cách mạng thuộc địa chỉ thắng lợi sau khi vô sản chính quốc nổ ra cách mạng. Hồ Chí Minh sáng tạo khẳng định: cách mạng thuộc địa có thể CHỦ ĐỘNG GIÀNH THẮNG LỢI TRƯỚC cách mạng vô sản ở chính quốc và tác động tích cực ngược trở lại."
    },
    {
      "conceptA": "Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam",
      "conceptB": "Nhiệm vụ trọng tâm của thời kỳ quá độ",
      "distinction": "Đặc điểm lớn nhất là TỪ NƯỚC NÔNG NGHIỆP LẠC HẬU TIẾN THẲNG LÊN CNXH KHÔNG QUA GIAI ĐOẠN TƯ BẢN CHỦ NGHĨA. Nhiệm vụ trọng tâm là CÔNG NGHIỆP HÓA XÃ HỘI CHỦ NGHĨA, xây dựng cơ sở vật chất - kỹ thuật hiện đại."
    },
    {
      "conceptA": "Độc lập dân tộc",
      "conceptB": "Tự do, hạnh phúc của nhân dân",
      "distinction": "Độc lập dân tộc là mục tiêu giải phóng đất nước khỏi ách ngoại xâm. Tự do, hạnh phúc là nội dung cốt lõi của độc lập: nước độc lập mà dân đói rét thì độc lập vô nghĩa."
    }
  ],
  "keyMilestones": [
    {
      "year": "Năm 1927",
      "event": "Tác phẩm Đường cách mệnh vạch rõ công nông là gốc cách mệnh, các tầng lớp khác là bầu bạn."
    },
    {
      "year": "Năm 1930",
      "event": "Cương lĩnh chính trị đầu tiên: làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản."
    },
    {
      "year": "2/9/1945",
      "event": "Tuyên ngôn Độc lập khẳng định quyền bình đẳng, quyền sống, quyền sung sướng và tự do của các dân tộc."
    },
    {
      "year": "17/7/1966",
      "event": "Lời kêu gọi chống Mỹ cứu nước nêu cao chân lý thời đại: 'Không có gì quý hơn độc lập, tự do'."
    },
    {
      "year": "Năm 1991",
      "event": "Cương lĩnh Đại hội VII xác định 6 đặc trưng bản chất của chủ nghĩa xã hội ở Việt Nam."
    },
    {
      "year": "Năm 2011",
      "event": "Cương lĩnh bổ sung, phát triển tại Đại hội XI xác định 8 đặc trưng và 8 phương hướng đi lên CNXH."
    },
    {
      "year": "25/10/2021",
      "event": "Kết luận số 21-KL/TW của Ban Chấp hành TW khóa XIII về đẩy mạnh xây dựng, chỉnh đốn Đảng và hệ thống chính trị."
    },
    {
      "year": "Năm 2026",
      "event": "Văn kiện Đại hội XIV tiếp tục khẳng định kiên định con đường đi lên CNXH trong kỷ nguyên vươn mình của dân tộc."
    }
  ],
  "keywords": [
    "Quyền thiêng liêng, bất khả xâm phạm",
    "Không có gì quý hơn độc lập, tự do",
    "Độc lập gắn với tự do, hạnh phúc",
    "Cách mạng thuộc địa có thể thắng trước chính quốc",
    "Con đỉa hai vòi",
    "Từ nước nông nghiệp lạc hậu tiến thẳng lên CNXH",
    "Học tập kinh nghiệm không máy móc - Ta không thể giống Liên Xô",
    "Động lực con người",
    "Quét sạch chủ nghĩa cá nhân",
    "Dân biết, dân bàn, dân làm, dân kiểm tra, dân thụ hưởng"
  ],
  "summary": "Chương 3 khẳng định độc lập dân tộc gắn liền với chủ nghĩa xã hội là mục tiêu tối thượng và sợi chỉ đỏ xuyên suốt của cách mạng Việt Nam. Hồ Chí Minh đã cống hiến những luận điểm thiên tài về tính chủ động của cách mạng thuộc địa, bản chất mộc mạc nhân văn của CNXH, và các nguyên tắc khoa học trong thời kỳ quá độ, làm nền tảng lý luận vững chắc cho công cuộc Đổi mới và bảo vệ Tổ quốc hôm nay."
};

const chapter4Theory = {
  "chapterId": 4,
  "title": "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
  "overview": "Chương 4 tập trung làm rõ hai trụ cột cơ bản của hệ thống chính trị Việt Nam theo tư tưởng Hồ Chí Minh: Đảng Cộng sản Việt Nam quang vinh và Nhà nước kiểu mới - Nhà nước dân chủ, pháp quyền nhân nghĩa của dân, do dân, vì dân. Người đã sáng tạo phát triển quy luật ra đời của Đảng, đúc kết 5 nguyên tắc xây dựng Đảng cách mạng chân chính, và xây dựng mô hình Nhà nước pháp quyền có hiệu lực pháp lý cao, quyết liệt tuyên chiến với tham ô, lãng phí, quan liêu - thứ 'giặc nội xâm' nguy hiểm.",
  "objectives": [
    "Phân tích quy luật đặc thù về sự ra đời của Đảng Cộng sản Việt Nam và bản chất giai cấp công nhân gắn bó máu thịt với dân tộc.",
    "Làm sáng tỏ luận điểm 'Đảng ta là đạo đức, là văn minh' và nắm vững 5 nguyên tắc tổ chức, sinh hoạt Đảng căn cốt.",
    "Hiểu sâu sắc quan điểm của Hồ Chí Minh về xây dựng Nhà nước dân chủ: Nhà nước của dân, do dân, vì dân.",
    "Trình bày các đặc trưng của Nhà nước pháp quyền: hợp hiến, hợp pháp, thượng tôn pháp luật và pháp quyền nhân nghĩa.",
    "Nắm chắc các chỉ dẫn của Người về phòng, chống các căn bệnh tiêu cực: đặc quyền đặc lợi, tham ô, lãng phí, quan liêu ('giặc nội xâm')."
  ],
  "sections": [
    {
      "id": "sec4_1",
      "title": "I. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      "content": "\n### 1. Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam\n- Trong tác phẩm *Đường cách mệnh* (1927), Hồ Chí Minh khẳng định:\n  > *\"Cách mệnh trước hết phải có cái gì? Trước hết phải có Đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy\"*.\n- **Quy luật ra đời sáng tạo của Đảng Cộng sản Việt Nam:**\n  + Theo V.I. Lênin, Đảng Cộng sản ở các nước phương Tây ra đời từ sự kết hợp giữa hai yếu tố: **Chủ nghĩa Mác + Phong trào công nhân**.\n  + Vận dụng sáng tạo vào hoàn cảnh cụ thể của một nước thuộc địa, nửa phong kiến, Hồ Chí Minh chỉ rõ: Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa **ba yếu tố**:\n    $$\\text{Đảng Cộng sản Việt Nam} = \\text{Chủ nghĩa Mác - Lênin} + \\text{Phong trào công nhân} + \\text{Phong trào yêu nước}$$\n  + Việc đưa thêm yếu tố **Phong trào yêu nước** là một cống hiến lý luận xuất sắc của Hồ Chí Minh, bởi vì phong trào yêu nước có vị trí vô cùng to lớn trong lịch sử dân tộc và hòa quyện chặt chẽ với phong trào công nhân ngay từ đầu.\n\n---\n\n### 2. Bản chất của Đảng Cộng sản Việt Nam\n- Đảng mang bản chất **giai cấp công nhân**, lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng và kim chỉ nam cho hành động.\n- Bản chất giai cấp công nhân của Đảng hòa quyện sâu sắc với tính nhân dân và tính dân tộc: Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của toàn thể dân tộc Việt Nam.\n- Đảng không có lợi ích nào khác ngoài lợi ích của Tổ quốc và hạnh phúc của nhân dân: *\"Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác\"*.\n\n---\n\n### 3. Đảng phải trong sạch, vững mạnh – \"Đảng là đạo đức, là văn minh\"\n- Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (1960), Hồ Chí Minh khẳng định: **\"Đảng ta là đạo đức, là văn minh\"**.\n  + *Đạo đức:* Thể hiện ở mục tiêu lý tưởng độc lập dân tộc và CNXH; tôn chỉ suốt đời tận tụy phụng sự Tổ quốc, phục vụ nhân dân; cán bộ đảng viên cần kiệm liêm chính, chí công vô tư.\n  + *Văn minh:* Thể hiện ở trí tuệ đỉnh cao, tiêu biểu cho lương tâm, danh dự và khí phách của dân tộc; đường lối hợp quy luật tiến bộ của thời đại; tổ chức kỷ luật chặt chẽ, hoạt động trong khuôn khổ Hiến pháp và pháp luật.\n- **Năm nguyên tắc tổ chức và sinh hoạt Đảng:**\n  1. **Tập trung dân chủ:** Là nguyên tắc cơ bản nhất, sống còn của Đảng. Dân chủ là cơ sở để tập trung, tập trung là sự thống nhất trên cơ sở dân chủ rộng rãi.\n  2. **Tập thể lãnh đạo, cá nhân phụ trách:** Tập thể lãnh đạo để phát huy trí tuệ số đông (tránh độc đoán, chuyên quyền); cá nhân phụ trách để nêu cao tinh thần trách nhiệm (tránh dựa dẫm, ỷ lại).\n  3. **Tự phê bình và phê bình:** Là quy luật phát triển của Đảng, là \"thang thuốc\" tốt nhất để chữa trị các khuyết tật trong nội bộ. Phải tiến hành thường xuyên như việc *\"mỗi ngày phải rửa mặt\"*; thái độ phải chân thành, trung thực, nghiêm khắc với mình và khoan dung với đồng chí, trên tình đồng chí thương yêu lẫn nhau.\n  4. **Kỷ luật nghiêm minh, tự giác:** Sức mạnh của Đảng bắt nguồn từ kỷ luật thép. Kỷ luật của Đảng là kỷ luật tự giác trên cơ sở giác ngộ lý tưởng, không có bất kỳ vùng cấm hay đặc quyền nào.\n  5. **Đoàn kết thống nhất trong Đảng:** Giữ gìn sự đoàn kết nhất trí trong Đảng *\"như giữ gìn con ngươi của mắt mình\"*, lấy Cương lĩnh, Điều lệ Đảng và chủ nghĩa Mác - Lênin làm mẫu số chung.\n\n---\n\n### 4. Công tác cán bộ của Đảng\n- Hồ Chí Minh khẳng định: *\"Cán bộ là cái gốc của mọi công việc\"*, *\"Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém\"*.\n- Tiêu chuẩn cán bộ: Phải kết hợp chặt chẽ giữa **Đức và Tài** (vừa hồng vừa chuyên), trong đó **Đức là gốc**, Tài là phương tiện để hoàn thành nhiệm vụ.\n- Nội dung công tác cán bộ: Phải hiểu và đánh giá đúng cán bộ; khéo dùng cán bộ; thương yêu và chăm lo bồi dưỡng cán bộ; thường xuyên kiểm tra, giúp đỡ cán bộ.\n      "
    },
    {
      "id": "sec4_2",
      "title": "II. Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân",
      "content": "\n### 1. Bản chất của Nhà nước mới ở Việt Nam\n- Nhà nước Việt Nam Dân chủ Cộng hòa (nay là Cộng hòa xã hội chủ nghĩa Việt Nam) là Nhà nước mang **bản chất giai cấp công nhân**, thống nhất biện chứng với **tính nhân dân và tính dân tộc**.\n  + Bản chất giai cấp công nhân thể hiện ở sự lãnh đạo của Đảng Cộng sản, định hướng tiến lên CNXH, và nguyên tắc tổ chức tập trung dân chủ.\n  + Tính nhân dân và tính dân tộc thể hiện ở chỗ: Nhà nước ra đời từ thành quả đấu tranh bền bỉ của toàn dân tộc; bảo vệ lợi ích của mọi tầng lớp nhân dân; đại diện cho khối đại đoàn kết toàn dân.\n\n---\n\n### 2. Ba đặc trưng nền tảng của Nhà nước dân chủ\n- **Nhà nước của nhân dân:**\n  + Xác định địa vị pháp lý tối cao: *\"Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ\"*.\n  + Mọi quyền lực trong Nhà nước và xã hội đều thuộc về nhân dân. Nhân dân thực thi quyền lực thông qua hai hình thức: **Dân chủ trực tiếp** (trưng cầu ý dân, tự ứng cử, bầu cử) và **Dân chủ gián tiếp/đại diện** (thông qua Quốc hội và Hội đồng nhân dân các cấp).\n  + Quyền lực nhà nước là do nhân dân **ủy quyền**, nhân dân có quyền kiểm soát, phê bình và bãi miễn những đại biểu không còn xứng đáng.\n- **Nhà nước do nhân dân:**\n  + Do nhân dân bầu ra thông qua phổ thông đầu phiếu; nhân dân tham gia quản lý nhà nước; nhân dân đóng thuế nuôi dưỡng và bảo vệ Nhà nước.\n- **Nhà nước vì nhân dân:**\n  + Mọi chủ trương, chính sách đều nhằm mưu cầu độc lập, tự do và hạnh phúc cho nhân dân.\n  + Chính phủ và cán bộ, công chức không phải là \"quan phụ mẫu\" cai trị mà là **công bộc, là người đầy tớ trung thành của nhân dân**.\n  + Người dạy: *\"Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại đến dân, ta phải hết sức tránh\"*.\n\n---\n\n### 3. Xây dựng Nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ\n- **Nhà nước hợp hiến, hợp pháp:**\n  + Ngay sau ngày độc lập, phiên họp đầu tiên của Chính phủ lâm thời (3/9/1945), Người đề nghị tổ chức Tổng tuyển cử bầu Quốc hội để lập Hiến pháp.\n  + Ngày 6/1/1946, cuộc Tổng tuyển cử đầu tiên thành công rực rỡ. Người trực tiếp chỉ đạo soạn thảo **Hiến pháp 1946** (Hiến pháp đầu tiên của nước ta) và **Hiến pháp 1959**.\n- **Nhà nước thượng tôn pháp luật:**\n  + Quản lý xã hội bằng Hiến pháp và pháp luật.\n  + Đảm bảo tính nghiêm minh: *\"Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì\"*, *\"Trăm điều phải có thần linh pháp quyền\"*.\n  + Bản thân Hồ Chí Minh luôn là tấm gương mẫu mực sống và làm việc theo Hiến pháp và pháp luật.\n- **Pháp quyền nhân nghĩa:**\n  + Pháp luật mang tính nhân văn sâu sắc, bảo vệ quyền con người; kết hợp nghiêm trị kẻ đầu sỏ với khoan hồng, cảm hóa, cải tạo người lầm lỗi.\n      "
    },
    {
      "id": "sec4_3",
      "title": "III. Xây dựng Nhà nước trong sạch, vững mạnh & Phòng chống tiêu cực",
      "content": "\n### 1. Kiểm soát quyền lực nhà nước\n- Hồ Chí Minh chỉ rõ quyền lực nhà nước dễ dẫn tới nguy cơ tha hóa, lạm quyền nếu thiếu sự kiểm soát: *\"Dân ghét các ông chủ tịch, các ông ủy viên vì cái tật ngông nghênh, cậy thế, cậy quyền\"*.\n- Hai cơ chế kiểm soát:\n  + Kiểm soát từ trên xuống (sự giám sát, kiểm tra của cấp trên, của Đảng).\n  + Kiểm soát từ dưới lên (sự kiểm soát, phê bình của nhân dân - hình thức quan trọng nhất).\n\n---\n\n### 2. Quyết liệt đấu tranh phòng, chống các căn bệnh tiêu cực\nHồ Chí Minh chỉ rõ các căn bệnh hiểm nghèo trong bộ máy nhà nước:\n- **Đặc quyền, đặc lợi:** Thói \"cậy mình là quan cách mạng\", kéo bè kéo cánh, vơ vét của công.\n- **Tham ô, lãng phí, quan liêu:**\n  + Hồ Chí Minh định nghĩa: *\"Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ\"*, là **\"giặc nội xâm\"**, **\"thứ giặc ở trong lòng nguy hiểm hơn cả giặc ngoại xâm\"**.\n  + Người khẳng định tội tham ô nặng như tội phản quốc, việt gian, mật thám.\n  + Ngày 26/1/1946, Người ký Quốc lệnh khép tội tham ô, trộm cắp công quỹ mức cao nhất là **tử hình**. Vụ án xử tử Trần Dụ Châu (Cục trưởng Cục Quân nhu năm 1950) vì tội tham nhũng là minh chứng bất hủ cho sự nghiêm minh, công lý.\n  + **Bệnh quan liêu:** Là \"bệnh mẹ\", mảnh đất dung dưỡng, ấp ủ và sinh ra tham ô, lãng phí.\n- **Biện pháp phòng, chống tiêu cực:**\n  1. Nâng cao trình độ dân chủ, phát huy quyền kiểm soát của nhân dân.\n  2. Pháp luật và kỷ luật phải nghiêm minh, không có vùng cấm.\n  3. Phạt nghiêm khắc kết hợp giáo dục đạo đức, khơi dậy lương tâm, danh dự.\n  4. Cán bộ lãnh đạo phải đi đầu nêu gương.\n  5. Phát huy động lực của chủ nghĩa yêu nước chân chính.\n      "
    }
  ],
  "confusingConceptsTable": [
    {
      "conceptA": "Quy luật ra đời của Đảng theo Lênin",
      "conceptB": "Quy luật ra đời của Đảng theo Hồ Chí Minh",
      "distinction": "Lênin khái quát ở phương Tây gồm 2 yếu tố: CN Mác + Phong trào công nhân. Hồ Chí Minh sáng tạo bổ sung thêm yếu tố thứ ba tại Việt Nam: PHONG TRÀO YÊU NƯỚC (vì phong trào yêu nước nổ ra sớm, sâu rộng, tạo mảnh đất cho chủ nghĩa Mác - Lênin gieo mầm)."
    },
    {
      "conceptA": "Dân là chủ (vị thế)",
      "conceptB": "Dân làm chủ (năng lực, trách nhiệm)",
      "distinction": "'Dân là chủ' xác định ĐỊA VỊ VÀ QUYỀN HẠN tối cao của nhân dân đối với đất nước. 'Dân làm chủ' nhấn mạnh QUYỀN LỢI VÀ NGHĨA VỤ, năng lực thực thi quyền hạn và tinh thần trách nhiệm của công dân."
    },
    {
      "conceptA": "Bệnh quan liêu",
      "conceptB": "Tội tham ô",
      "distinction": "Bệnh quan liêu là tác phong làm việc xa rời thực tế, xa rời quần chúng, là 'nguồn gốc, mảnh đất sinh ra tham ô, lãng phí'. Tham ô là hành vi tư túi, lấy của công làm của tư, là tội lỗi 'giặc nội xâm'."
    }
  ],
  "keyMilestones": [
    {
      "year": "Năm 1927",
      "event": "Tác phẩm Đường cách mệnh khẳng định: 'Trước hết phải có Đảng cách mệnh'."
    },
    {
      "year": "3/2/1930",
      "event": "Thành lập Đảng Cộng sản Việt Nam tại Hương Cảng."
    },
    {
      "year": "26/1/1946",
      "event": "Hồ Chí Minh ký Quốc lệnh ấn định hình phạt tội tham ô đến mức tử hình."
    },
    {
      "year": "9/11/1946",
      "event": "Quốc hội khóa I thông qua Hiến pháp 1946 - bản Hiến pháp đầu tiên trong lịch sử nước ta."
    },
    {
      "year": "Năm 1950",
      "event": "Vụ án Trần Dụ Châu bị xử bắn vì tội tham ô công quỹ trong thời kỳ kháng chiến gian khổ."
    },
    {
      "year": "Năm 1960",
      "event": "Diễn văn kỷ niệm 30 năm Ngày thành lập Đảng: 'Đảng ta là đạo đức, là văn minh'."
    },
    {
      "year": "Năm 1969",
      "event": "Trong Di chúc, Người yêu cầu việc đầu tiên sau chiến tranh là 'chỉnh đốn lại Đảng'."
    },
    {
      "year": "Năm 2026",
      "event": "Đại hội XIV Đảng khẳng định kiên quyết xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh toàn diện."
    }
  ],
  "keywords": [
    "Quy luật ra đời: Mác - Lênin + PT Công nhân + PT Yêu nước",
    "Đảng ta là đạo đức, là văn minh",
    "5 nguyên tắc tổ chức và sinh hoạt Đảng",
    "Tập trung dân chủ là nguyên tắc cơ bản nhất",
    "Tự phê bình và phê bình như rửa mặt hằng ngày",
    "Giữ gìn đoàn kết như giữ gìn con ngươi của mắt mình",
    "Cán bộ là cái gốc của mọi công việc",
    "Vừa hồng vừa chuyên",
    "Nhà nước của dân, do dân, vì dân",
    "Công bộc, đầy tớ trung thành của nhân dân",
    "Thần linh pháp quyền",
    "Pháp quyền nhân nghĩa",
    "Giặc nội xâm - Tham ô, lãng phí, quan liêu",
    "Bệnh quan liêu là bệnh mẹ"
  ],
  "summary": "Chương 4 đúc kết tư tưởng thiên tài của Hồ Chí Minh về Đảng cầm quyền và Nhà nước pháp quyền xã hội chủ nghĩa. Đảng phải luôn tự chỉnh đốn, giữ gìn 5 nguyên tắc tổ chức, rèn luyện đội ngũ cán bộ vừa hồng vừa chuyên; Nhà nước phải tuyệt đối thuộc về nhân dân, quản lý bằng pháp luật nhân nghĩa, kiên quyết diệt trừ 'giặc nội xâm' để bảo đảm quyền làm chủ thiêng liêng của nhân dân."
};

const chapter5Theory = {
  "chapterId": 5,
  "title": "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
  "overview": "Chương 5 hệ thống hóa quan điểm của Hồ Chí Minh về đại đoàn kết - cội nguồn sức mạnh làm nên mọi kỳ tích của dân tộc Việt Nam. Người nâng đại đoàn kết từ truyền thống yêu nước thành đường lối chiến lược sống còn, tổ chức nên Mặt trận dân tộc thống nhất rộng rãi; đồng thời kết hợp nhuần nhuyễn sức mạnh dân tộc với sức mạnh thời đại thông qua đoàn kết quốc tế trên nguyên tắc độc lập, tự chủ, tự lực tự cường.",
  "objectives": [
    "Khẳng định đại đoàn kết toàn dân tộc là chiến lược lâu dài, nhất quán, là mục tiêu và nhiệm vụ hàng đầu của Đảng và cách mạng.",
    "Phân tích lực lượng rộng lớn của khối đại đoàn kết, nền tảng liên minh công - nông - trí thức và vai trò hạt nhân của Đảng.",
    "Nắm vững các điều kiện cốt lõi để xây dựng khối đại đoàn kết: lòng khoan dung, độ lượng, lấy lợi ích chung làm điểm quy tụ, niềm tin vào nhân dân.",
    "Trình bày các tên gọi của Mặt trận dân tộc thống nhất qua các thời kỳ lịch sử và 3 nguyên tắc hoạt động cơ bản.",
    "Làm rõ tính tất yếu, lực lượng và nguyên tắc đoàn kết quốc tế: có lý có tình, dựa trên cơ sở độc lập tự chủ và thực lực nội sinh."
  ],
  "sections": [
    {
      "id": "sec5_1",
      "title": "I. Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc",
      "content": "\n### 1. Vai trò của đại đoàn kết toàn dân tộc\n- **Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược lâu dài, nhất quán, quyết định thành công của cách mạng:**\n  + Người tổng kết quy luật sinh tử của lịch sử: *\"Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn\"*.\n  + Đúc kết chân lý bất hủ:\n    > *\"Đoàn kết, đoàn kết, đại đoàn kết,*  \n    > *Thành công, thành công, đại thành công!\"*\n- **Đại đoàn kết toàn dân tộc là mục tiêu, nhiệm vụ hàng đầu của Đảng và của dân tộc:**\n  + Đại đoàn kết không phải là thủ đoạn chính trị nhất thời hay sách lược đối phó mà là mục tiêu xuyên suốt.\n  + Tại buổi ra mắt Đảng Lao động Việt Nam (3/3/1951), Người tuyên bố mục đích của Đảng gồm 8 chữ vàng: **\"ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC\"**.\n\n---\n\n### 2. Lực lượng của khối đại đoàn kết toàn dân tộc\n- **Chủ thể rộng lớn:** Bao gồm tất cả các giai cấp, tầng lớp, các dân tộc, các tôn giáo, kiều bào ta ở nước ngoài, bất kỳ ai có lòng yêu nước, thương nòi: *\"Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ\"*.\n- **Nền tảng của khối đại đoàn kết:** Khối **liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức**, đặt dưới sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam.\n  + Người ví: Liên minh công nông trí thức như *nền của nhà, gốc của cây*. Nền có vững, gốc có chắc thì khối đại đoàn kết mới vững bền.\n- **Hạt nhân của khối đại đoàn kết:** Sự đoàn kết, thống nhất chặt chẽ trong nội bộ Đảng. Đoàn kết trong Đảng là tiền đề bảo đảm cho đoàn kết ngoài xã hội.\n\n---\n\n### 3. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc\n1. **Lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng:** Lợi ích tối cao là độc lập dân tộc, tự do, ấm no, hạnh phúc của nhân dân. Điểm chung này là \"mẫu số chung\" để hòa hợp các tầng lớp.\n2. **Kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc:** Biến chủ nghĩa yêu nước truyền thống thành động lực to lớn của thời đại.\n3. **Phải có lòng khoan dung, độ lượng với con người:**\n   + Người căn dặn: *\"Năm ngón tay cũng có ngón vắn ngón dài. Nhưng vắn dài đều họp nhau lại nơi bàn tay. Trong mấy triệu người cũng có người thế này thế khác, nhưng thế này hay thế khác đều dòng dõi của tổ tiên ta. Vậy nên ta phải khoan hồng đại độ... Đối với những đồng bào lạc lối lầm đường, ta phải lấy tình thân ái mà cảm hóa họ\"*.\n4. **Phải có niềm tin mãnh liệt vào nhân dân:** Thấm nhuần triết lý *\"Dân là gốc\"*, *\"Chở thuyền là dân, lật thuyền cũng là dân\"*, cách mạng là sự nghiệp của quần chúng.\n\n---\n\n### 4. Hình thức tổ chức: Mặt trận Dân tộc Thống nhất\n- Khối đại đoàn kết được tổ chức, tập hợp lại thành một tổ chức chính trị - xã hội rộng lớn là **Mặt trận Dân tộc Thống nhất**.\n- **Tiến trình phát triển các tên gọi của Mặt trận qua các thời kỳ:**\n  1. *Hội Phản đế đồng minh* (Thành lập ngày 18/11/1930).\n  2. *Mặt trận Thống nhất nhân dân phản đế Đông Dương* (10/1936).\n  3. *Mặt trận Dân chủ Đông Dương* (3/1938).\n  4. *Mặt trận Dân tộc Thống nhất phản đế Đông Dương* (11/1939).\n  5. *Việt Nam Độc lập Đồng minh* (gọi tắt là **Mặt trận Việt Minh**, 19/5/1941).\n  6. *Hội Liên hiệp quốc dân Việt Nam* (gọi tắt là **Hội Liên Việt**, 5/1946).\n  7. *Mặt trận Liên Việt* (Hợp nhất Việt Minh và Hội Liên Việt, 3/1951).\n  8. *Mặt trận Tổ quốc Việt Nam* (Thành lập ở miền Bắc tháng 9/1955; từ năm 1977 đến nay là tổ chức Mặt trận chung cho cả nước thống nhất).\n- **Ba nguyên tắc hoạt động cơ bản của Mặt trận:**\n  - Xây dựng trên nền tảng liên minh công - nông - trí thức dưới sự lãnh đạo của Đảng.\n  - Hoạt động theo nguyên tắc **hiệp thương dân chủ** (bàn bạc công khai, tôn trọng lẫn nhau, cùng nhất trí, không áp đặt).\n  - Đoàn kết lâu dài, chặt chẽ, chân thành, thân ái giúp đỡ nhau cùng tiến bộ; thực hiện phương châm **\"cầu đồng tồn dị\"** (tìm kiếm điểm tương đồng, bảo lưu các điểm khác biệt không tổn hại lợi ích chung).\n      "
    },
    {
      "id": "sec5_2",
      "title": "II. Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế",
      "content": "\n### 1. Sự cần thiết phải đoàn kết quốc tế\n- **Thực hiện đoàn kết quốc tế nhằm kết hợp sức mạnh dân tộc với sức mạnh thời đại:**\n  + Sức mạnh dân tộc là chủ nghĩa yêu nước nồng nàn và ý chí quật cường; sức mạnh thời đại là sức mạnh của phong trào cộng sản, phong trào giải phóng dân tộc và phong trào dân chủ hòa bình thế giới.\n- **Thực hiện đoàn kết quốc tế nhằm góp phần cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu thời đại:** Đấu tranh chống chủ nghĩa đế quốc, bảo vệ nền hòa bình, độc lập, dân chủ và tiến bộ xã hội.\n\n---\n\n### 2. Lực lượng đoàn kết quốc tế và các tầng mặt trận\n- **Lực lượng bao gồm:**\n  1. Phong trào cộng sản và công nhân quốc tế (lực lượng tiên phong nòng cốt).\n  2. Phong trào đấu tranh giải phóng dân tộc ở các nước thuộc địa, phụ thuộc.\n  3. Phong trào hòa bình, dân chủ, chống chiến tranh xâm lược của nhân dân tiến bộ toàn thế giới (kể cả nhân dân Pháp và nhân dân Mỹ yêu chuộng hòa bình).\n- **Hình thành ba tầng mặt trận quốc tế:**\n  - Mặt trận đoàn kết ba nước Đông Dương: Việt Nam - Lào - Campuchia.\n  - Mặt trận nhân dân Á - Phi đoàn kết với Việt Nam.\n  - Mặt trận nhân dân toàn thế giới ủng hộ Việt Nam chống đế quốc xâm lược.\n\n---\n\n### 3. Nguyên tắc đoàn kết quốc tế\n1. **Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích; có lý, có tình:**\n   + Lấy độc lập, tự do, bình đẳng và tiến bộ xã hội làm cơ sở; giữ gìn tình đồng chí thủy chung, tôn trọng lẫn nhau.\n2. **Đoàn kết trên cơ sở độc lập, tự chủ, tự lực tự cường:**\n   + Hồ Chí Minh nhấn mạnh: *\"Muốn người ta giúp mình thì trước hết mình phải tự giúp mình đã\"*, *\"Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập\"*.\n   + Trong quan hệ ngoại giao: **\"Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn\"**. Muốn đoàn kết quốc tế có hiệu quả, nội lực dân tộc phải vững chắc.\n      "
    },
    {
      "id": "sec5_3",
      "title": "III. Vận dụng Tư tưởng trong đường lối đối ngoại và đại đoàn kết hiện nay",
      "content": "\n- **Phát huy sức mạnh khối đại đoàn kết toàn dân tộc:** Coi đại đoàn kết là nguồn lực chiến lược quyết định sự phát triển bền vững của đất nước trong kỷ nguyên mới; củng cố vai trò nòng cốt chính trị của Mặt trận Tổ quốc Việt Nam và các đoàn thể chính trị - xã hội.\n- **Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển:**\n  + Kiên định phương châm: *\"Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế\"*.\n  + Giữ vững nguyên tắc \"Dĩ bất biến, ứng vạn biến\", chủ động hội nhập quốc tế sâu rộng, bảo vệ vững chắc độc lập, chủ quyền, toàn vẹn lãnh thổ từ sớm, từ xa theo Văn kiện Đại hội XIII và Đại hội XIV của Đảng.\n      "
    }
  ],
  "confusingConceptsTable": [
    {
      "conceptA": "Mặt trận Việt Minh (1941)",
      "conceptB": "Mặt trận Tổ quốc Việt Nam (1955/1977)",
      "distinction": "Mặt trận Việt Minh thành lập 19/5/1941 ở Pác Bó để lãnh đạo cuộc Tổng khởi nghĩa Tháng Tám 1945 giành chính quyền. Mặt trận Tổ quốc Việt Nam thành lập 1955 (ở miền Bắc) và thống nhất cả nước từ 1977 đến nay, là tổ chức liên minh chính trị rộng lớn nhất trong hệ thống chính trị hiện đại."
    },
    {
      "conceptA": "Nguyên tắc hiệp thương dân chủ trong Mặt trận",
      "conceptB": "Nguyên tắc tập trung dân chủ trong Đảng",
      "distinction": "Tập trung dân chủ là nguyên tắc của Đảng Cộng sản mang tính kỷ luật bắt buộc, thiểu số phục tùng đa số. Hiệp thương dân chủ là nguyên tắc hoạt động của Mặt trận, dựa trên đối thoại, bàn bạc, tự nguyện thỏa thuận, đồng thuận, không áp đặt, 'cầu đồng tồn dị'."
    },
    {
      "conceptA": "Tự lực cánh sinh trong đoàn kết quốc tế",
      "conceptB": "Chủ nghĩa biệt lập, đóng cửa",
      "distinction": "Tự lực cánh sinh là dựa vào sức mạnh nội sinh làm gốc ('chiêng có to tiếng mới lớn') để tranh thủ hiệu quả sự giúp đỡ quốc tế. Hoàn toàn đối lập với tư tưởng biệt lập, đóng cửa cô độc, khép kín với thế giới."
    }
  ],
  "keyMilestones": [
    {
      "year": "18/11/1930",
      "event": "Thành lập Hội Phản đế đồng minh (ngày truyền thống Mặt trận Tổ quốc Việt Nam)."
    },
    {
      "year": "19/5/1941",
      "event": "Thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) tại Hội nghị Trung ương 8."
    },
    {
      "year": "3/3/1951",
      "event": "Hồ Chí Minh tuyên bố mục đích Đảng Lao động Việt Nam: 'Đoàn kết toàn dân, phụng sự Tổ quốc'."
    },
    {
      "year": "10/9/1955",
      "event": "Thành lập Mặt trận Tổ quốc Việt Nam tại miền Bắc."
    },
    {
      "year": "20/12/1960",
      "event": "Thành lập Mặt trận Dân tộc giải phóng miền Nam Việt Nam."
    },
    {
      "year": "Tháng 2/1977",
      "event": "Đại hội thống nhất các mặt trận hai miền thành Mặt trận Tổ quốc Việt Nam duy nhất của cả nước."
    },
    {
      "year": "Năm 2026",
      "event": "Văn kiện Đại hội XIV Đảng nhấn mạnh phát huy cao độ sức mạnh đại đoàn kết toàn dân tộc và thế trận lòng dân."
    }
  ],
  "keywords": [
    "Đoàn kết là chiến lược lâu dài, nhất quán",
    "Đoàn kết, đoàn kết, đại đoàn kết",
    "Đoàn kết toàn dân, phụng sự Tổ quốc",
    "Liên minh công - nông - trí thức là nền tảng",
    "Khoan dung độ lượng - Năm ngón tay có ngón vắn ngón dài",
    "Mặt trận Dân tộc Thống nhất",
    "Hiệp thương dân chủ & Cầu đồng tồn dị",
    "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
    "Tự lực cánh sinh - Thực lực là chiêng, ngoại giao là tiếng",
    "Việt Nam là bạn, đối tác tin cậy"
  ],
  "summary": "Chương 5 khẳng định tư tưởng đại đoàn kết của Hồ Chí Minh là nguồn sức mạnh vô địch của dân tộc Việt Nam. Đại đoàn kết phải lấy liên minh công - nông - trí làm nền tảng, tổ chức trong Mặt trận Dân tộc Thống nhất với nguyên tắc hiệp thương dân chủ; đồng thời mở rộng đoàn kết quốc tế trên nền tảng độc lập, tự chủ và tự lực cánh sinh để kết hợp sức mạnh dân tộc với sức mạnh thời đại."
};

const chapter6Theory = {
  "chapterId": 6,
  "title": "Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người",
  "overview": "Chương 6 kết tinh những giá trị nhân văn cao đẹp và sâu sắc nhất trong toàn bộ di sản tư tưởng Hồ Chí Minh. Người coi văn hóa là ngọn đuốc soi đường cho quốc dân đi, đạo đức cách mạng là cái gốc nền tảng tinh thần của con người, và con người vừa là mục tiêu cao nhất, vừa là động lực quyết định thành công của cách mạng. Chiến lược 'trồng người' trăm năm của Người đến nay vẫn vẹn nguyên tính thời sự đối với sự phát triển phồn vinh của đất nước.",
  "objectives": [
    "Trình bày định nghĩa kinh điển về văn hóa (tháng 8/1943) và 4 cách tiếp cận văn hóa độc đáo của Hồ Chí Minh.",
    "Phân tích mối quan hệ biện chứng giữa văn hóa với chính trị, kinh tế, xã hội và quan điểm 'Văn hóa là một mặt trận'.",
    "Làm rõ luận điểm 'Đạo đức là gốc của người cách mạng', phân tích 4 chuẩn mực đạo đức cách mạng và 3 nguyên tắc xây dựng đạo đức mới.",
    "Hiểu sâu sắc quan điểm về con người là mục tiêu và động lực của cách mạng; chiến lược 'trồng người' vừa hồng vừa chuyên.",
    "Vận dụng tư tưởng vào xây dựng hệ giá trị quốc gia, hệ giá trị văn hóa, hệ giá trị gia đình và chuẩn mực con người Việt Nam theo Văn kiện Đại hội XIV (2026) và Nghị quyết 80-NQ/TW."
  ],
  "sections": [
    {
      "id": "sec6_1",
      "title": "I. Tư tưởng Hồ Chí Minh về Văn hóa",
      "content": "\n### 1. Định nghĩa và cách tiếp cận về văn hóa\n- **Định nghĩa kinh điển (tháng 8/1943 trong nhà tù Tưởng Giới Thạch):**\n  > *\"Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng. Toàn bộ những sáng tạo và phát minh đó tức là văn hóa. Văn hóa là sự tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn\"*.\n- **Bốn cách tiếp cận về văn hóa của Hồ Chí Minh:**\n  1. *Tiếp cận theo nghĩa rộng:* Tổng hợp mọi phương thức sinh hoạt của loài người nhằm sinh tồn và phát triển.\n  2. *Tiếp cận theo nghĩa hẹp:* Là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng.\n  3. *Tiếp cận theo nghĩa hẹp hơn:* Đề cập đến trình độ học vấn, học đường, xóa mù chữ, nâng cao dân trí.\n  4. *Tiếp cận theo phương thức sử dụng công cụ sinh hoạt:* Lối sống, tác phong, cách ứng xử văn minh trong cộng đồng.\n\n---\n\n### 2. Mối quan hệ giữa văn hóa với các lĩnh vực khác\n- **Văn hóa với chính trị:** Hồ Chí Minh khẳng định trong đời sống có bốn vấn đề ngang nhau: chính trị, kinh tế, văn hóa, xã hội. Phải tiến hành giải phóng chính trị để mở đường cho văn hóa phát triển: *\"Văn hóa không thể đứng ngoài mà phải ở trong chính trị và kinh tế\"*.\n- **Văn hóa với kinh tế:** Kinh tế là cơ sở hạ tầng, nền tảng vật chất; kinh tế phát triển thì văn hóa mới có điều kiện thăng hoa. Ngược lại, văn hóa soi đường, dẫn dắt kinh tế phát triển bền vững (\"Văn hóa soi đường cho quốc dân đi\").\n- **Văn hóa với xã hội:** Xã hội được giải phóng khỏi áp bức nô lệ thì văn hóa mới thực sự được giải phóng.\n\n---\n\n### 3. Bản sắc văn hóa dân tộc và tiếp thu tinh hoa nhân loại\n- **Bản sắc văn hóa dân tộc:** Là cốt cách, lòng yêu nước, thương nòi, tự lực tự cường, tiếng nói, phong tục tập quán tốt đẹp ngàn đời của người Việt.\n- **Tiếp thu tinh hoa nhân loại:** Có chọn lọc, lấy văn hóa dân tộc làm gốc: *\"Văn hóa Việt Nam ảnh hưởng lẫn nhau của văn hóa Đông phương và Tây phương chung đúc lại... Tây phương hay Đông phương có cái gì tốt ta học lấy để tạo ra một nền văn hóa Việt Nam hợp với tinh thần dân chủ\"*.\n\n---\n\n### 4. Vai trò, tính chất và chức năng của văn hóa\n- **Văn hóa là mục tiêu và động lực của sự nghiệp cách mạng:** Văn hóa bồi dưỡng lý tưởng, nhân cách, truyền cảm hứng hành động cách mạng cho nhân dân.\n- **Văn hóa là một mặt trận; văn nghệ sĩ là chiến sĩ trên mặt trận ấy:**\n  + Người khẳng định ngòi bút của văn nghệ sĩ là vũ khí chiến đấu sắc bén trong sự nghiệp \"phò chính trừ tà\".\n  + Văn nghệ sĩ phải hòa mình vào cuộc sống của nhân dân lao động để có những tác phẩm xứng tầm thời đại anh hùng.\n- **Văn hóa phục vụ quần chúng nhân dân:** Hoạt động văn hóa phải trả lời rõ 4 câu hỏi: *Viết cho ai? Mục đích viết là gì? Lấy tài liệu đâu mà viết? Cách viết như thế nào?* Phải viết thật, viết giản dị, thiết thực, đại chúng hóa.\n- **Xây dựng nền văn hóa mới:** Nền văn hóa có nội dung xã hội chủ nghĩa và tính chất dân tộc, khoa học, đại chúng.\n      "
    },
    {
      "id": "sec6_2",
      "title": "II. Tư tưởng Hồ Chí Minh về Đạo đức cách mạng",
      "content": "\n### 1. Vai trò của đạo đức cách mạng – \"Đạo đức là cái gốc\"\n- Hồ Chí Minh khẳng định đạo đức cách mạng là nguồn nuôi dưỡng và phát triển con người, là cái gốc nền tảng của người cách mạng:\n  > *\"Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân\"*.\n- **Mối quan hệ giữa Đức và Tài:** Đức và Tài (Hồng và Chuyên) phải gắn bó hữu cơ, thống nhất chặt chẽ. Có tài mà không có đức là người vô dụng; có đức mà không có tài thì làm việc gì cũng khó. Nhưng **Đức là gốc**.\n\n---\n\n### 2. Bốn chuẩn mực đạo đức cách mạng cơ bản\n\n#### a) Trung với nước, hiếu với dân\n- Là phẩm chất đạo đức bao trùm quan trọng nhất, chi phối mọi phẩm chất khác.\n- Hồ Chí Minh đã làm một **cuộc cách mạng sâu sắc về nội hàm**:\n  + Đạo đức phong kiến cũ: \"Trung quân, ái quốc\" (trung với vua, thờ vua), chữ \"hiếu\" bó hẹp trong phạm vi gia đình cha mẹ.\n  + Đạo đức cách mạng mới: \"Trung với nước, hiếu với dân\". Trung với nước là trung thành vô hạn với sự nghiệp dựng nước và giữ nước, độc lập dân tộc và CNXH; Hiếu với dân là thương dân, tin dân, kính trọng dân, lấy dân làm gốc, suốt đời làm công bộc của dân.\n\n#### b) Cần, kiệm, liêm, chính, chí công vô tư\n- Là phẩm chất đạo đức cốt lõi trong đời sống sinh hoạt, công tác hằng ngày của mỗi con người.\n- Người khái quát quy luật tự nhiên và xã hội:\n  > *\"Trời có bốn mùa: Xuân, Hạ, Thu, Đông.*  \n  > *Đất có bốn phương: Đông, Tây, Nam, Bắc.*  \n  > *Người có bốn đức: Cần, Kiệm, Liêm, Chính.*  \n  > *Thiếu một mùa thì không thành trời.*  \n  > *Thiếu một phương thì không thành đất.*  \n  > *Thiếu một đức thì không thành người\"*.\n- **Giải nghĩa tứ đức:**\n  + **Cần:** Cần cù, siêng năng, lao động có kế hoạch, có sáng tạo, có năng suất cao.\n  + **Kiệm:** Tiết kiệm sức lao động, thời giờ, tiền của của dân, của nước và của bản thân; không xa xỉ, hoang phí, phô trương hình thức. (Cần và Kiệm như hai chân của con người).\n  + **Liêm:** Trong sạch, không tham lam tiền tài, địa vị, danh vọng; không hám người tâng bốc mình. (Liêm phải đi đôi với Kiệm; có Kiệm mới Liêm được).\n  + **Chính:** Ngay thẳng, đứng đắn; đối với mình không tự cao tự đại; đối với người không nịnh hót kẻ trên, không khinh rẻ người dưới; đối với việc luôn đặt việc công lên trên việc tư.\n  + **Chí công vô tư:** Hoàn toàn vì lợi ích chung, không mảy may tư lợi cá nhân (\"lo trước thiên hạ, vui sau thiên hạ\").\n\n#### c) Thương yêu con người, sống có tình có nghĩa\n- Xuất phát từ lòng nhân ái truyền thống và chủ nghĩa nhân đạo cộng sản.\n- Người căn dặn: *\"Hiểu chủ nghĩa Mác - Lênin là phải sống với nhau có tình có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là hiểu chủ nghĩa Mác - Lênin được\"*.\n\n#### d) Tinh thần quốc tế trong sáng\n- Thể hiện sự tôn trọng, đoàn kết với giai cấp công nhân và các dân tộc bị áp bức, các lực lượng tiến bộ trên thế giới: *\"Quan sơn muôn dặm một nhà / Bốn phương vô sản đều là anh em\"*.\n\n---\n\n### 3. Ba nguyên tắc xây dựng đạo đức mới\n1. **Nói đi đôi với làm, nêu gương về đạo đức:**\n   + Là nguyên tắc quan trọng bậc nhất. Nói mà không làm là đạo đức giả.\n   + Phát huy truyền thống phương Đông: *\"Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền\"*. Cán bộ cấp càng cao càng phải gương mẫu.\n2. **Xây đi đôi với chống:**\n   + Xây dựng các giá trị đạo đức mới, bồi dưỡng người tốt việc tốt; đồng thời kiên quyết chống các biểu hiện vô đạo đức, quét sạch chủ nghĩa cá nhân ích kỷ.\n3. **Phải tu dưỡng đạo đức suốt đời:**\n   + Đạo đức cách mạng không phải trên trời rơi xuống mà do rèn luyện, phấn đấu bền bỉ hằng ngày mà nên: *\"Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong\"*.\n      "
    },
    {
      "id": "sec6_3",
      "title": "III. Tư tưởng Hồ Chí Minh về Con người và Chiến lược trồng người",
      "content": "\n### 1. Quan niệm về con người\n- Hồ Chí Minh nhìn nhận con người một cách cụ thể, lịch sử: con người xã hội trong những điều kiện lịch sử cụ thể, thuộc các tầng lớp, lứa tuổi, nghề nghiệp khác nhau.\n- Con người là một chỉnh thể thống nhất giữa thể lực, tâm lực, trí lực và phong phú các mối quan hệ xã hội. Trong mỗi con người đều đan xen mặt thiện và mặt ác; nhiệm vụ giáo dục là khơi dậy phần tốt đẹp để phần xấu lùi dần.\n\n---\n\n### 2. Vai trò của con người\n- **Con người là mục tiêu của cách mạng:** Mọi cuộc đấu tranh cách mạng đều nhằm giải phóng con người, đem lại tự do, hạnh phúc cho con người.\n- **Con người là động lực tối cao của cách mạng:**\n  + *\"Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân\"*.\n  + *\"Dễ mười lần không dân cũng chịu / Khó trăm lần dân liệu cũng xong\"*.\n\n---\n\n### 3. Chiến lược \"trồng người\"\n- Kế thừa triết lý sâu sắc của Quản Trọng (thời Xuân Thu):\n  > *\"Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người\"*.\n- **Tính chất:** Là sự nghiệp trăm năm lâu dài, gian khổ, công phu, đòi hỏi phải tiến hành thường xuyên, bền bỉ.\n- **Nội dung:** Giáo dục toàn diện về đức, trí, thể, mỹ; bồi dưỡng thế hệ cách mạng cho đời sau vừa \"hồng\" vừa \"chuyên\".\n- **Phương châm:** Học đi đôi với hành, lý luận gắn liền với thực tiễn, giáo dục nhà trường kết hợp chặt chẽ với giáo dục gia đình và xã hội.\n      "
    },
    {
      "id": "sec6_4",
      "title": "IV. Vận dụng xây dựng Văn hóa, Đạo đức, Con người Việt Nam hiện nay",
      "content": "\n- Quán triệt tinh thần **Văn kiện Đại hội XIV (2026)** và **Nghị quyết số 80-NQ/TW ngày 7/1/2026** của Bộ Chính trị về phát triển văn hóa Việt Nam:\n  + Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu và động lực nội sinh quan trọng hun đúc trí tuệ, bản lĩnh con người Việt Nam.\n  + Đặt yêu cầu: *\"Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội\"*.\n  + Xây dựng đồng bộ 4 hệ giá trị cốt lõi: **Hệ giá trị quốc gia, hệ giá trị văn hóa, hệ giá trị gia đình và chuẩn mực con người Việt Nam thời đại mới**.\n  + Xây dựng con người Việt Nam phát triển toàn diện, có tinh thần yêu nước, tự cường dân tộc, có đạo đức trong sáng, khát vọng cống hiến vì một Việt Nam phồn vinh, hạnh phúc.\n      "
    }
  ],
  "confusingConceptsTable": [
    {
      "conceptA": "Trung với nước, hiếu với dân (Hồ Chí Minh)",
      "conceptB": "Trung quân, ái quốc (Nho giáo)",
      "distinction": "Nho giáo phong kiến đặt trung thành với Vua (trung quân) lên hàng đầu, coi dân là đối tượng bị trị. Hồ Chí Minh thực hiện cuộc cách mạng đạo đức: trung với NƯỚC (độc lập, Tổ quốc) và hiếu với DÂN (lấy dân làm gốc, nhân dân là chủ)."
    },
    {
      "conceptA": "Đức là gốc",
      "conceptB": "Tài và Đức tách rời",
      "distinction": "Đức và Tài phải thống nhất trong một con người cách mạng ('vừa hồng vừa chuyên'). Nếu có tài mà không có đức thì hại nước hại dân; nếu có đức mà không có tài thì làm việc gì cũng hỏng. Song 'Đức là cái gốc'."
    },
    {
      "conceptA": "Liêm trong tứ đức",
      "conceptB": "Chính trong tứ đức",
      "distinction": "Liêm là sự TRONG SẠCH, không tham lam của công, không hám tiền tài, địa vị. Chính là sự NGAY THẲNG, ĐỨNG ĐẮN, không tự kiêu tự đại, đối với việc luôn đặt việc công lên trên việc tư."
    }
  ],
  "keyMilestones": [
    {
      "year": "Tháng 8/1943",
      "event": "Hồ Chí Minh đưa ra định nghĩa kinh điển về văn hóa trong tập thơ Nhật ký trong tù."
    },
    {
      "year": "Tháng 11/1946",
      "event": "Hội nghị Văn hóa toàn quốc lần thứ nhất: 'Văn hóa soi đường cho quốc dân đi'."
    },
    {
      "year": "Năm 1947",
      "event": "Tác phẩm Sửa đổi lối làm việc vạch rõ tư cách đạo đức của người cán bộ cách mạng."
    },
    {
      "year": "Năm 1958",
      "event": "Tác phẩm Đạo đức cách mạng khẳng định đạo đức là nguồn sức mạnh vô địch của người cách mạng."
    },
    {
      "year": "Năm 1958",
      "event": "Bài phát biểu tại lớp học chính trị giáo viên nhấn mạnh: 'Vì lợi ích trăm năm thì phải trồng người'."
    },
    {
      "year": "3/2/1969",
      "event": "Tác phẩm Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân đăng trên báo Nhân Dân."
    },
    {
      "year": "7/1/2026",
      "event": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa và con người Việt Nam."
    },
    {
      "year": "Năm 2026",
      "event": "Đại hội XIV Đảng khẳng định xây dựng hệ giá trị quốc gia và chuẩn mực con người Việt Nam."
    }
  ],
  "keywords": [
    "Định nghĩa văn hóa (8/1943)",
    "Văn hóa soi đường cho quốc dân đi",
    "Văn hóa là một mặt trận",
    "Đạo đức là cái gốc",
    "Cây phải có gốc, sông phải có nguồn",
    "Trung với nước, hiếu với dân",
    "Trời có bốn mùa, Người có bốn đức - Cần, Kiệm, Liêm, Chính",
    "Chí công vô tư - Lo trước thiên hạ, vui sau thiên hạ",
    "Nói đi đôi với làm - Một tấm gương sống hơn trăm bài diễn văn",
    "Ngọc càng mài càng sáng, vàng càng luyện càng trong",
    "Vì lợi ích trăm năm thì phải trồng người",
    "Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong"
  ],
  "summary": "Chương 6 đúc kết tư tưởng văn hóa, đạo đức và con người của Hồ Chí Minh. Người chỉ rõ văn hóa là động lực soi đường cho dân tộc, đạo đức cách mạng với 4 chuẩn mực (đặc biệt Trung - Hiếu và Cần Kiệm Liêm Chính) là gốc của người cán bộ, và chiến lược 'trồng người' toàn diện vừa hồng vừa chuyên là nhân tố quyết định đưa non sông gấm vóc Việt Nam bước vào kỷ nguyên phát triển rực rỡ."
};


const chapter1Questions = [
  {
    "id": "c1_q001",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh",
    "question": "Định nghĩa hoàn chỉnh về tư tưởng Hồ Chí Minh được Đảng Cộng sản Việt Nam chính thức thông qua tại Đại hội đại biểu toàn quốc lần thứ mấy?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VII (1991)",
      "Đại hội đại biểu toàn quốc lần thứ IX (2001)",
      "Đại hội đại biểu toàn quốc lần thứ XI (2011)",
      "Đại hội đại biểu toàn quốc lần thứ XIII (2021)"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về mốc sự kiện & định nghĩa",
    "explanation": "Tại Đại hội XI (năm 2011), Đảng Cộng sản Việt Nam đã hoàn thiện định nghĩa khoa học đầy đủ và sâu sắc nhất về tư tưởng Hồ Chí Minh, định rõ bản chất, nguồn gốc và giá trị soi đường của tư tưởng Người.",
    "distractorExplanations": [
      "Phương án A sai vì Đại hội VII (1991) là mốc đầu tiên ghi nhận tư tưởng Hồ Chí Minh làm nền tảng tư tưởng và kim chỉ nam, nhưng chưa hoàn thiện định nghĩa đầy đủ như Đại hội XI.",
      "Phương án B sai vì Đại hội IX (2001) đã nêu định nghĩa nhưng các nội hàm sau đó tiếp tục được bổ sung hoàn thiện toàn diện hơn tại Đại hội XI.",
      "Phương án D sai vì Đại hội XIII (2021) là đại hội kế thừa và tái khẳng định định nghĩa của Đại hội XI trong bối cảnh mới."
    ]
  },
  {
    "id": "c1_q002",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh",
    "question": "Theo định nghĩa của Đảng tại Đại hội XI, tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và phát triển sáng tạo học thuyết nào vào điều kiện cụ thể của Việt Nam?",
    "options": [
      "Chủ nghĩa Tam dân của Tôn Trung Sơn",
      "Chủ nghĩa Mác - Lênin",
      "Triết học Khai sáng phương Tây thế kỷ XVIII",
      "Học thuyết đức trị của Nho giáo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguồn gốc lý luận",
    "explanation": "Định nghĩa nêu rõ tư tưởng Hồ Chí Minh là: 'kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta'. Chủ nghĩa Mác - Lênin là cơ sở lý luận đóng vai trò quyết định bước phát triển về chất trong tư tưởng Người.",
    "distractorExplanations": [
      "Phương án A sai vì Chủ nghĩa Tam dân chỉ là nguồn tinh hoa phương Đông được Người tiếp thu sáng tạo, không phải cơ sở lý luận quyết định.",
      "Phương án C sai vì Triết học Khai sáng là tinh hoa văn hóa tư sản phương Tây cung cấp giá trị tự do, dân chủ ban đầu, không phải học thuyết nền tảng của Người.",
      "Phương án D sai vì Nho giáo là học thuyết truyền thống phương Đông, có nhiều hạn chế phong kiến cần gạn đục khơi trong."
    ]
  },
  {
    "id": "c1_q003",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh",
    "question": "Nội hàm nào sau đây KHÔNG phản ánh đúng định nghĩa tư tưởng Hồ Chí Minh theo Văn kiện Đại hội XI?",
    "options": [
      "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam",
      "Kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại",
      "Là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho cách mạng",
      "Là sự sao chép nguyên mẫu các luận điểm của chủ nghĩa Mác - Lênin và các nước xã hội chủ nghĩa"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi chọn nhận định không đúng",
    "explanation": "Tư tưởng Hồ Chí Minh tuyệt đối không phải là sự sao chép nguyên mẫu giáo điều mà là kết quả của 'sự vận dụng và phát triển sáng tạo' chủ nghĩa Mác - Lênin vào hoàn cảnh thực tiễn lịch sử của Việt Nam.",
    "distractorExplanations": [
      "Phương án A đúng với định nghĩa: đây là bản chất khoa học và cách mạng của hệ thống tư tưởng.",
      "Phương án B đúng với định nghĩa: phản ánh nguồn gốc dân tộc và tinh hoa văn hóa nhân loại.",
      "Phương án C đúng với định nghĩa: khẳng định giá trị trường tồn và ý nghĩa thời đại của tư tưởng Hồ Chí Minh."
    ]
  },
  {
    "id": "c1_q004",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Quá trình nhận thức của Đảng",
    "question": "Lần đầu tiên cụm từ 'Đường lối chính trị, nếp làm việc và đạo đức cách mạng của Đảng ta hiện nay là đường lối, tác phong và đạo đức Hồ Chủ tịch' được khẳng định tại văn kiện nào?",
    "options": [
      "Cương lĩnh chính trị đầu tiên của Đảng (1930)",
      "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II (1951)",
      "Điếu văn của Ban Chấp hành Trung ương Đảng (1969)",
      "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ VI (1986)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn kiện lịch sử",
    "explanation": "Tại Đại hội II của Đảng (tháng 2/1951), Báo cáo chính trị đã khẳng định rõ đường lối chính trị, tác phong và đạo đức của Đảng là của Hồ Chủ tịch, kêu gọi toàn Đảng ra sức học tập.",
    "distractorExplanations": [
      "Phương án A sai vì Cương lĩnh 1930 thể hiện những quan điểm sáng lập ban đầu, chưa dùng cách diễn đạt này.",
      "Phương án C sai vì Điếu văn 1969 tôn vinh Người là 'Anh hùng dân tộc vĩ đại'.",
      "Phương án D sai vì Đại hội VI (1986) nhấn mạnh việc kế thừa di sản quý báu về tư tưởng và lý luận cách mạng của Người."
    ]
  },
  {
    "id": "c1_q005",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Quá trình nhận thức của Đảng",
    "question": "Đại hội nào của Đảng đã đánh dấu bước ngoặt lịch sử khi lần đầu tiên khẳng định: 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động'?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ V (1982)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)",
      "Đại hội đại biểu toàn quốc lần thứ VII (1991)",
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử cốt lõi",
    "explanation": "Đại hội VII của Đảng (tháng 6/1991) đã ghi nhận bước phát triển quan trọng khi đưa luận điểm này vào Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Cương lĩnh 1991).",
    "distractorExplanations": [
      "Phương án A sai vì Đại hội V (1982) chỉ yêu cầu nghiên cứu, học tập có hệ thống các tác phẩm của Chủ tịch Hồ Chí Minh.",
      "Phương án B sai vì Đại hội VI (1986) mới đề cập đến việc kế thừa di sản quý báu của Người nhưng chưa dùng công thức 'nền tảng tư tưởng, kim chỉ nam'.",
      "Phương án D sai vì Đại hội VIII (1996) là kỳ đại hội tiếp tục quán triệt chủ trương đã được xác lập từ Đại hội VII."
    ]
  },
  {
    "id": "c1_q006",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Quá trình nhận thức của Đảng",
    "question": "Khẳng định 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động' lần đầu tiên được hiến định trong bản Hiến pháp nào của nước ta?",
    "options": [
      "Hiến pháp năm 1946",
      "Hiến pháp năm 1959",
      "Hiến pháp năm 1980",
      "Hiến pháp năm 1992"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về văn bản pháp lý",
    "explanation": "Sau khi Đại hội VII (1991) khẳng định, nguyên tắc này đã được thể chế hóa và ghi nhận chính thức vào Điều 4 của Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 1992 (tiếp tục được khẳng định trong Hiến pháp sửa đổi 2013).",
    "distractorExplanations": [
      "Phương án A sai vì Hiến pháp 1946 là bản Hiến pháp đầu tiên sau độc lập, chưa ghi điều này.",
      "Phương án B sai vì Hiến pháp 1959 chưa đưa thuật ngữ tư tưởng Hồ Chí Minh vào điều khoản nền tảng tư tưởng.",
      "Phương án C sai vì Hiến pháp 1980 chỉ ghi nhận chủ nghĩa Mác - Lênin."
    ]
  },
  {
    "id": "c1_q007",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Vinh danh quốc tế",
    "question": "Nghị quyết số 24C/18.6.5 của Tổ chức Giáo dục, Khoa học và Văn hóa của Liên hợp quốc (UNESCO) năm 1987 đã ghi nhận Chủ tịch Hồ Chí Minh với danh hiệu cao quý nào?",
    "options": [
      "Danh nhân văn hóa thế giới và Nhà hoạt động chính trị kiệt xuất",
      "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam",
      "Lãnh tụ vĩ đại của phong trào giải phóng dân tộc thế giới",
      "Người chiến sĩ cộng sản quốc tế kiên cường và Nhà giáo dục lỗi lạc"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nghị quyết quốc tế",
    "explanation": "Nghị quyết 24C/18.6.5 tại Khóa họp Đại hội đồng lần thứ 24 ở Paris (1987) đã vinh danh Người là: 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam' nhân dịp 100 năm ngày sinh của Người (1890 - 1990).",
    "distractorExplanations": [
      "Phương án A sai vì cụm từ chính xác theo nghị quyết là 'Nhà văn hóa kiệt xuất của Việt Nam', không phải danh nhân văn hóa chung chung.",
      "Phương án C sai vì đây là lời ca ngợi của bạn bè quốc tế, không phải danh hiệu nguyên văn trong Nghị quyết UNESCO.",
      "Phương án D sai vì danh xưng trong Nghị quyết 24C/18.6.5 tập trung vào hai phẩm chất: Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất."
    ]
  },
  {
    "id": "c1_q008",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Đối tượng nghiên cứu của môn học Tư tưởng Hồ Chí Minh bao gồm những nội dung căn bản nào sau đây?",
    "options": [
      "Chỉ bao gồm các tác phẩm, bài viết và bài nói chuyện đã được in thành sách của Hồ Chí Minh",
      "Chỉ bao gồm tiểu sử và quá trình hoạt động cách mạng thực tế của Người ở trong và ngoài nước",
      "Toàn bộ hệ thống quan điểm của Hồ Chí Minh trong di sản và quá trình hiện thực hóa hệ thống quan điểm đó vào thực tiễn cách mạng Việt Nam",
      "Lịch sử các phong trào đấu tranh của giai cấp công nhân và phong trào yêu nước Việt Nam từ 1858 đến nay"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đối tượng nghiên cứu",
    "explanation": "Đối tượng nghiên cứu của môn học gồm hai phương diện gắn bó hữu cơ: (1) Toàn bộ hệ thống quan điểm của Người thể hiện trong di sản; (2) Quá trình vận động, 'hiện thực hóa' hệ thống quan điểm đó vào thực tiễn cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án A sai vì quá hẹp, loại bỏ thực tiễn hiện thực hóa và các chỉ đạo hành động sinh động của Người ngoài văn bản.",
      "Phương án B sai vì đó là đối tượng của chuyên ngành Tiểu sử hoặc Lịch sử Đảng, không bao quát được hệ thống lý luận.",
      "Phương án D sai vì đó là đối tượng nghiên cứu của môn Lịch sử Đảng Cộng sản Việt Nam hoặc Lịch sử Việt Nam."
    ]
  },
  {
    "id": "c1_q009",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận",
    "question": "Cơ sở phương pháp luận của việc nghiên cứu môn học Tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp luận của Nho giáo kết hợp với tư tưởng Pháp gia",
      "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử của chủ nghĩa Mác - Lênin",
      "Thuyết hành vi và chủ nghĩa thực dụng phương Tây hiện đại",
      "Phương pháp phân tích tâm lý học nhân vật lịch sử"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về phương pháp luận",
    "explanation": "Giáo trình khẳng định: 'Phương pháp luận Hồ Chí Minh lấy phương pháp luận chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử Mác - Lênin làm cơ sở, được hình thành và phát triển qua quá trình hoạt động cách mạng của Người'.",
    "distractorExplanations": [
      "Phương án A sai vì Nho giáo và Pháp gia chỉ là học thuyết cổ đại phương Đông, không phải phương pháp luận khoa học cách mạng.",
      "Phương án C sai vì chủ nghĩa thực dụng mang tính chất tư sản, không thể là cơ sở phương pháp luận Mác-xít.",
      "Phương án D sai vì phân tích tâm lý chỉ là một công cụ hỗ trợ thứ yếu, không phải nền tảng phương pháp luận."
    ]
  },
  {
    "id": "c1_q010",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Các nguyên tắc phương pháp luận",
    "question": "Nguyên tắc phương pháp luận nào đòi hỏi khi nghiên cứu tư tưởng Hồ Chí Minh vừa phải đứng trên lập trường giai cấp công nhân và quan điểm của Đảng, vừa phải bảo đảm tính khách quan, khoa học của các luận điểm?",
    "options": [
      "Nguyên tắc thống nhất tính đảng và tính khoa học",
      "Nguyên tắc thống nhất lý luận và thực tiễn",
      "Nguyên tắc quan điểm toàn diện và hệ thống",
      "Nguyên tắc quan điểm lịch sử - cụ thể"
    ],
    "correctAnswer": 0,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc phương pháp luận",
    "explanation": "Nguyên tắc thống nhất tính đảng và tính khoa học yêu cầu người nghiên cứu đứng vững trên lập trường giai cấp công nhân, quán triệt đường lối của Đảng, đồng thời tôn trọng sự thật lịch sử, phân tích khách quan, chính xác.",
    "distractorExplanations": [
      "Phương án B sai vì nguyên tắc này nhấn mạnh việc học lý luận phải đi đôi với hành, gắn với thực tiễn giải quyết công việc.",
      "Phương án C sai vì nguyên tắc này yêu cầu xem xét tư tưởng như một chỉnh thể hữu cơ xoay quanh hạt nhân độc lập tự do và CNXH.",
      "Phương án D sai vì nguyên tắc này yêu cầu đặt luận điểm vào hoàn cảnh lịch sử không gian - thời gian cụ thể."
    ]
  },
  {
    "id": "c1_q011",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Hồ Chí Minh dùng hình ảnh ví von nào để chỉ mối quan hệ giữa lý luận và thực tiễn trong công tác cách mạng?",
    "options": [
      "Lý luận như cái nôi ru ngủ hành động",
      "Lý luận như cái kim chỉ nam, chỉ phương hướng cho công việc thực tế",
      "Lý luận như thanh gươm báu cất trong bao kính",
      "Lý luận như chiếc áo giáp che chở mọi sai lầm"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn & luận điểm",
    "explanation": "Hồ Chí Minh viết: 'Lý luận như cái kim chỉ nam, nó chỉ phương hướng cho chúng ta trong công việc thực tế. Không có lý luận thì lúng túng như nhắm mắt mà đi'.",
    "distractorExplanations": [
      "Phương án A sai vì lý luận thúc đẩy hành động chứ không ru ngủ.",
      "Phương án C sai vì lý luận phải đem ra dùng, không phải để cất giữ.",
      "Phương án D sai vì lý luận chân chính giúp sửa chữa sai lầm chứ không che đậy."
    ]
  },
  {
    "id": "c1_q012",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Người mắc căn bệnh nào sau đây bị Hồ Chí Minh phê bình là 'như một cái hòm đựng đầy sách vở'?",
    "options": [
      "Bệnh khinh lý luận, ỷ lại kinh nghiệm cá nhân",
      "Bệnh lý luận suông, học nhiều sách mà không biết áp dụng vào thực tế",
      "Bệnh quan liêu, hách dịch xa rời quần chúng",
      "Bệnh hẹp hòi, bè phái cục bộ địa phương"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phê phán căn bệnh",
    "explanation": "Hồ Chí Minh phê phán bệnh lý luận suông: 'dù xem được hàng ngàn hàng vạn quyển lý luận, nếu không biết đem ra thực hành, thì khác nào một cái hòm đựng sách'.",
    "distractorExplanations": [
      "Phương án A sai vì bệnh khinh lý luận là coi thường sách vở, không đọc lý luận.",
      "Phương án C sai vì bệnh quan liêu nói về phong cách lãnh đạo xa rời dân.",
      "Phương án D sai vì bệnh hẹp hòi nói về quan hệ đồng chí."
    ]
  },
  {
    "id": "c1_q013",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Hồ Chí Minh so sánh người 'có kinh nghiệm mà không có lý luận' với hình ảnh nào sau đây?",
    "options": [
      "Như người đi đêm không có đèn đuốc",
      "Như một mắt sáng, một mắt mờ",
      "Như con tàu mất bánh lái trôi dạt",
      "Như cây không có gốc, sông không có nguồn"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về luận điểm Bác Hồ",
    "explanation": "Trong tác phẩm Sửa đổi lối làm việc (1947), Hồ Chí Minh viết: 'có kinh nghiệm mà không có lý luận, cũng như một mắt sáng, một mắt mờ'.",
    "distractorExplanations": [
      "Phương án A sai vì đây là cách ví von nói chung về mất phương hướng.",
      "Phương án C sai vì 'thuyền không lái' là ví von về Đảng không có chủ nghĩa làm cốt.",
      "Phương án D sai vì 'cây không gốc, sông không nguồn' là ví về người cách mạng không có đạo đức."
    ]
  },
  {
    "id": "c1_q014",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Theo Hồ Chí Minh, thực hành và lý luận có mối quan hệ qua lại như thế nào?",
    "options": [
      "Thực hành luôn đi sau lý luận và không có tác động ngược trở lại",
      "Lý luận phải đem ra thực hành; thực hành phải nhằm theo lý luận",
      "Thực hành quan trọng hơn lý luận nên có thể bỏ qua lý luận cơ bản",
      "Lý luận độc lập tuyệt đối với kết quả thực hành"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về mối quan hệ biện chứng",
    "explanation": "Hồ Chí Minh chỉ rõ: 'Lý luận phải đem ra thực hành. Thực hành phải nhằm theo lý luận. Lý luận cũng như cái tên (hoặc viên đạn). Thực hành cũng như cái đích để bắn'.",
    "distractorExplanations": [
      "Phương án A sai vì thực hành tổng kết và phát triển lý luận.",
      "Phương án C sai vì khinh lý luận sẽ dẫn tới hành động mù quáng.",
      "Phương án D sai vì lý luận bắt nguồn từ thực tiễn và được thực tiễn kiểm nghiệm."
    ]
  },
  {
    "id": "c1_q015",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Khi Hồ Chí Minh ví 'Lý luận như cái tên (viên đạn), thực hành như cái đích để bắn', Người nhằm nhấn mạnh điều gì?",
    "options": [
      "Sưu tầm càng nhiều tên đạn càng tốt mà không cần quan tâm đến bia đích",
      "Có tên đạn mà không bắn, hoặc bắn lung tung thì cũng coi như không có tên",
      "Bắn trúng bia thì không cần chế tạo thêm cung tên mới",
      "Tên đạn chỉ có giá trị khi được cất giữ trong kho vũ khí"
    ],
    "correctAnswer": 1,
    "level": "van_dung",
    "type": "Hỏi về ý nghĩa ẩn dụ",
    "explanation": "Người viết: 'Có tên mà không bắn, hoặc bắn lung tung cũng như không có tên'. Học lý luận mà không đem áp dụng giải quyết nhiệm vụ thực tiễn thì lý luận trở nên vô dụng.",
    "distractorExplanations": [
      "Phương án A sai vì học vẹt mà không áp dụng là bệnh lý luận suông.",
      "Phương án C sai vì thực tiễn luôn biến đổi cần tiếp tục làm giàu lý luận.",
      "Phương án D sai vì đi ngược lại tư tưởng hành động cách mạng của Người."
    ]
  },
  {
    "id": "c1_q016",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Quan điểm phương pháp luận nào đòi hỏi khi nghiên cứu tư tưởng Hồ Chí Minh phải đặt các luận điểm của Người vào hoàn cảnh lịch sử, bối cảnh thời đại cụ thể lúc luận điểm ra đời?",
    "options": [
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm toàn diện và hệ thống",
      "Quan điểm kế thừa và đổi mới",
      "Quan điểm thực tiễn thuần túy"
    ],
    "correctAnswer": 0,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc phương pháp luận",
    "explanation": "Quan điểm lịch sử - cụ thể (dựa trên CNDVLS) đòi hỏi xem xét sự vật hiện tượng trong mối liên hệ lịch sử căn bản, xem nó xuất hiện trong điều kiện nào, trải qua giai đoạn nào và nay biến đổi ra sao.",
    "distractorExplanations": [
      "Phương án B sai vì quan điểm toàn diện nhấn mạnh tính chỉnh thể liên hệ qua lại giữa các yếu tố.",
      "Phương án C sai vì nhấn mạnh sự vận động phát triển sáng tạo trong điều kiện mới.",
      "Phương án D sai vì đây không phải là một nguyên tắc phương pháp luận chính thống."
    ]
  },
  {
    "id": "c1_q017",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Hạt nhân cốt lõi xuyên suốt toàn bộ hệ thống tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Độc lập, tự do, dân chủ và chủ nghĩa xã hội",
      "Chủ nghĩa đại đồng phong kiến phương Đông",
      "Cách mạng ruộng đất và đấu tranh giai cấp triệt để",
      "Phát triển kinh tế tư bản tư nhân làm động lực duy nhất"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về hạt nhân tư tưởng",
    "explanation": "Giáo trình khẳng định: Các bộ phận khác nhau trong sự gắn kết tất yếu của hệ thống tư tưởng Hồ Chí Minh đều xoay quanh hạt nhân cốt lõi là 'tư tưởng độc lập, tự do, dân chủ và chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án B sai vì Hồ Chí Minh kế thừa có chọn lọc, không lấy tư tưởng phong kiến làm cốt lõi.",
      "Phương án C sai vì Người đặt giải phóng dân tộc lên trên hết, không tuyệt đối hóa đấu tranh giai cấp chia rẽ khối đại đoàn kết.",
      "Phương án D sai vì mục tiêu cuối cùng của Người là xây dựng CNXH và CNCS."
    ]
  },
  {
    "id": "c1_q018",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Quan điểm kế thừa và phát triển trong phương pháp luận nghiên cứu tư tưởng Hồ Chí Minh yêu cầu người học phải tránh thái độ nào?",
    "options": [
      "Vận dụng sáng tạo tư tưởng của Người vào bối cảnh cuộc cách mạng số",
      "Giáo điều, xơ cứng, coi từng câu chữ của Người như những công thức bất biến",
      "Bảo vệ nền tảng tư tưởng của Đảng trước các luận điệu xuyên tạc",
      "Tổng kết thực tiễn để bổ sung, phát triển đường lối cách mạng"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về thái độ nghiên cứu",
    "explanation": "Quan điểm kế thừa và phát triển chỉ rõ: sự vật luôn vận động biến đổi. Do đó nghiên cứu tư tưởng Hồ Chí Minh phải biết kế thừa và phát triển sáng tạo, chống giáo điều, máy móc, xơ cứng.",
    "distractorExplanations": [
      "Phương án A, C, D đều là những yêu cầu đúng đắn và tích cực cần phát huy, không phải thái độ cần tránh."
    ]
  },
  {
    "id": "c1_q019",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Phương pháp nào sau đây nghiên cứu một cách tổng quát nhằm tìm ra được bản chất vốn có của sự vật, hiện tượng và khái quát thành lý luận?",
    "options": [
      "Phương pháp lịch sử",
      "Phương pháp logic",
      "Phương pháp điều tra xã hội học",
      "Phương pháp phỏng vấn chuyên gia"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về định nghĩa phương pháp",
    "explanation": "Giáo trình ghi rõ: 'Phương pháp lôgíc nghiên cứu một cách tổng quát nhằm tìm ra được bản chất vốn có của sự vật, hiện tượng và khái quát thành lý luận'.",
    "distractorExplanations": [
      "Phương án A sai vì phương pháp lịch sử nghiên cứu theo trình tự thời gian, sự diễn biến phát sinh phát triển của sự vật.",
      "Phương án C và D chỉ là các phương pháp thu thập dữ liệu cụ thể, không khái quát bản chất."
    ]
  },
  {
    "id": "c1_q020",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Trong nghiên cứu tư tưởng Hồ Chí Minh, phương pháp lịch sử có nhiệm vụ cơ bản là gì?",
    "options": [
      "Trừu tượng hóa khỏi các chi tiết lịch sử để xây dựng mô hình toán học",
      "Nghiên cứu sự vật và hiện tượng theo trình tự thời gian, quá trình diễn biến từ phát sinh, phát triển đến hệ quả của nó",
      "Áp đặt các nhận định chủ quan của thời đại hiện nay vào quá khứ",
      "Tách rời hoạt động thực tiễn của Người ra khỏi các tác phẩm văn bản"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về định nghĩa phương pháp",
    "explanation": "Phương pháp lịch sử nghiên cứu các sự kiện, hiện tượng theo trình tự thời gian, tái hiện quá trình diễn biến từ nguyên nhân, bối cảnh ra đời đến phát triển và kết quả lịch sử cụ thể.",
    "distractorExplanations": [
      "Phương án A sai vì đây là phương pháp mô hình hóa.",
      "Phương án C sai vì vi phạm tính khách quan khoa học.",
      "Phương án D sai vì đi ngược lại nguyên tắc thống nhất lý luận và thực tiễn."
    ]
  },
  {
    "id": "c1_q021",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Tại sao nghiên cứu tư tưởng Hồ Chí Minh phải kết hợp chặt chẽ giữa phương pháp logic và phương pháp lịch sử?",
    "options": [
      "Vì phương pháp logic không cần dựa trên các sự kiện lịch sử có thật",
      "Vì các sự kiện lịch sử đều có mối liên hệ bản chất, logic nội tại; logic được rút ra từ chính dòng chảy lịch sử",
      "Vì chỉ có sự kết hợp này mới giúp thay đổi được các sự thật lịch sử đã qua",
      "Vì hai phương pháp này hoàn toàn đối lập và phủ trừ lẫn nhau"
    ],
    "correctAnswer": 1,
    "level": "van_dung",
    "type": "Hỏi về bản chất phương pháp luận",
    "explanation": "Giữa các sự kiện lịch sử luôn có logic tất yếu. Lịch sử cung cấp chất liệu thực tế; logic khái quát bản chất quy luật. Sự kết hợp chặt chẽ giúp nắm bắt chân lý một cách khoa học.",
    "distractorExplanations": [
      "Phương án A sai vì logic không có cơ sở lịch sử sẽ là tư biện vô căn cứ.",
      "Phương án C sai vì khoa học không bao giờ làm sai lệch sự thật lịch sử.",
      "Phương án D sai vì logic và lịch sử thống nhất biện chứng với nhau."
    ]
  },
  {
    "id": "c1_q022",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Phương pháp nghiên cứu nào đòi hỏi vừa phải khai thác các tác phẩm văn bản (như bộ Hồ Chí Minh Toàn tập 15 tập), vừa phải khảo sát toàn bộ cuộc đời hoạt động cách mạng thực tế của Người?",
    "options": [
      "Phương pháp phân tích văn bản kết hợp với nghiên cứu hoạt động thực tiễn",
      "Phương pháp diễn dịch tiên nghiệm",
      "Phương pháp quy nạp toán học",
      "Phương pháp thực nghiệm tâm lý trong phòng thí nghiệm"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về phương pháp nghiên cứu",
    "explanation": "Nhiều nội dung tư tưởng Hồ Chí Minh không chỉ thể hiện trong câu chữ văn bản mà còn kết tinh qua các quyết sách, hành vi ứng xử và chỉ đạo thực tiễn của Người.",
    "distractorExplanations": [
      "Phương án B, C, D đều là các phương pháp triết học tư biện hoặc khoa học tự nhiên, không phù hợp với môn học này."
    ]
  },
  {
    "id": "c1_q023",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Bộ sách 'Hồ Chí Minh: Toàn tập' do Nhà xuất bản Chính trị quốc gia Sự thật phát hành hiện nay gồm bao nhiêu tập?",
    "options": [
      "10 tập",
      "12 tập",
      "15 tập",
      "20 tập"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về tài liệu nguồn chính thức",
    "explanation": "Hiện nay, các bài viết, bài nói của Chủ tịch Hồ Chí Minh đã được sưu tầm, biên soạn và xuất bản trong bộ sách 'Hồ Chí Minh: Toàn tập' gồm 15 tập (xuất bản lần thứ ba).",
    "distractorExplanations": [
      "Phương án A, B, D sai về số tập chính thức của bộ sách Toàn tập."
    ]
  },
  {
    "id": "c1_q024",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Việc tiếp cận tư tưởng Hồ Chí Minh từ nhiều góc độ như chính trị, triết học, kinh tế, quân sự, văn hóa, ngoại giao phản ánh phương pháp nghiên cứu nào?",
    "options": [
      "Phương pháp thống kê học thực chứng",
      "Phương pháp chuyên ngành và liên ngành",
      "Phương pháp phân tích văn phong tu từ",
      "Phương pháp mô tả tự sự lịch sử"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phương pháp liên ngành",
    "explanation": "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện trên mọi lĩnh vực, do đó đòi hỏi phải vận dụng phối hợp phương pháp của nhiều chuyên ngành khoa học xã hội và nhân văn.",
    "distractorExplanations": [
      "Phương án A, C, D đều chỉ là những kỹ thuật bộ phận hạn hẹp, không bao quát được tầm vóc liên ngành."
    ]
  },
  {
    "id": "c1_q025",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Phương châm xử thế và hành động nổi tiếng của Hồ Chí Minh giúp Người chèo lái con thuyền cách mạng qua tình thế 'ngàn cân treo sợi tóc' sau năm 1945 là gì?",
    "options": [
      "Tiên lễ hậu binh",
      "Dĩ bất biến, ứng vạn biến",
      "Bế quan tỏa cảng",
      "Nhượng bộ không nguyên tắc"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về phương châm hành động",
    "explanation": "Trước khi sang Pháp đàm phán năm 1946, Người đã căn dặn cụ Huỳnh Thúc Kháng ở lại quyền Chủ tịch nước: 'Dĩ bất biến, ứng vạn biến' (lấy cái không thay đổi là độc lập tự do để ứng phó với muôn ngàn biến đổi).",
    "distractorExplanations": [
      "Phương án A, C, D đều không phản ánh đúng tư tưởng mưu lược cách mạng mềm dẻo nhưng kiên định của Bác."
    ]
  },
  {
    "id": "c1_q026",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Theo giáo trình, trong phương châm 'Dĩ bất biến, ứng vạn biến' của Hồ Chí Minh, yếu tố 'bất biến' là gì?",
    "options": [
      "Các sách lược đối ngoại linh hoạt theo từng tuần",
      "Độc lập, chủ quyền, thống nhất đất nước và tự do hạnh phúc của nhân dân",
      "Những liên minh tạm thời với các thế lực ngoại bang",
      "Số lượng thành viên trong bộ máy hành chính nhà nước"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về nội dung phương châm",
    "explanation": "Cái 'bất biến' (bất di bất dịch) là mục tiêu tối thượng: độc lập dân tộc, toàn vẹn lãnh thổ và hạnh phúc của nhân dân; còn 'vạn biến' là sách lược mềm dẻo tùy thời thế.",
    "distractorExplanations": [
      "Phương án A, C, D đều thuộc về phương tiện, sách lược tạm thời (thuộc phạm trù 'vạn biến')."
    ]
  },
  {
    "id": "c1_q027",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Ý nghĩa đầu tiên của việc học tập, nghiên cứu môn học Tư tưởng Hồ Chí Minh đối với sinh viên được xác định trong giáo trình là gì?",
    "options": [
      "Góp phần nâng cao năng lực tư duy lý luận",
      "Tìm kiếm cơ hội việc làm tại các tổ chức phi chính phủ",
      "Học thuộc lòng tiểu sử các nhà hoạt động cách mạng",
      "Áp dụng trực tiếp các phương pháp sản xuất công nghiệp cổ điển"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về ý nghĩa môn học",
    "explanation": "Mục IV.1 của Chương 1 khẳng định ý nghĩa đầu tiên là: 'Góp phần nâng cao năng lực tư duy lý luận', trang bị tri thức khoa học về hệ thống quan điểm cách mạng của Người.",
    "distractorExplanations": [
      "Phương án B, C, D đều lệch lạc, không phải ý nghĩa học thuật và giáo dục của môn học."
    ]
  },
  {
    "id": "c1_q028",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Môn học Tư tưởng Hồ Chí Minh góp phần bồi dưỡng phẩm chất đạo đức nào cho thế hệ trẻ sinh viên hiện nay?",
    "options": [
      "Lối sống thực dụng cá nhân chủ nghĩa, đề cao tư lợi",
      "Thực hành đạo đức cách mạng, chống chủ nghĩa cá nhân, nâng cao lòng tự hào dân tộc và lý tưởng phụng sự",
      "Thái độ bàng quan trước thời cuộc và sự phát triển của đất nước",
      "Tâm lý sùng bái tuyệt đối mọi yếu tố văn hóa ngoại lai"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về giáo dục đạo đức",
    "explanation": "Môn học giúp sinh viên tu dưỡng đạo đức cách mạng theo gương Bác: chí công vô tư, yêu nước, sống có lý tưởng cao đẹp và chống chủ nghĩa cá nhân.",
    "distractorExplanations": [
      "Phương án A, C, D là những thói hư tật xấu trái ngược hoàn toàn với tinh thần giáo dục của tư tưởng Hồ Chí Minh."
    ]
  },
  {
    "id": "c1_q029",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII (năm 2021) của Đảng đã nhấn mạnh quan điểm chỉ đạo cốt lõi nào?",
    "options": [
      "Thay thế chủ nghĩa Mác - Lênin bằng các lý thuyết quản trị hiện đại",
      "Kiên định và vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh",
      "Chỉ vận dụng tư tưởng Hồ Chí Minh mà không cần chủ nghĩa Mác - Lênin",
      "Bảo lưu nguyên vẹn mọi mô hình kinh tế kế hoạch hóa tập trung trước năm 1986"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về Văn kiện Đại hội XIII",
    "explanation": "Đại hội XIII khẳng định: 'Kiên định và vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh' là một trong những quan điểm chỉ đạo có tính nguyên tắc.",
    "distractorExplanations": [
      "Phương án A, C sai vì Đảng luôn khẳng định chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh là chỉnh thể nền tảng không thể tách rời.",
      "Phương án D sai vì đi ngược lại công cuộc đổi mới nền kinh tế thị trường định hướng XHCN."
    ]
  },
  {
    "id": "c1_q030",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIV (năm 2026) của Đảng tiếp tục tái khẳng định điều gì đối với tư tưởng Hồ Chí Minh?",
    "options": [
      "Tư tưởng Hồ Chí Minh chỉ có giá trị lịch sử trong thời kỳ kháng chiến giải phóng dân tộc",
      "Tiếp tục kiên định, phát huy và phát triển sáng tạo tư tưởng Hồ Chí Minh làm nền tảng đưa đất nước bước vào kỷ nguyên vươn mình phồn vinh",
      "Coi tư tưởng Hồ Chí Minh là một học thuyết đóng kín, không cần phát triển thêm",
      "Giảm bớt thời lượng học tập các môn lý luận chính trị trong hệ thống giáo dục quốc dân"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về Văn kiện Đại hội XIV (2026)",
    "explanation": "Văn kiện Đại hội XIV tiếp tục kiên định lấy CN Mác - Lênin, tư tưởng Hồ Chí Minh làm ngọn cờ soi đường cho kỷ nguyên phát triển bứt phá của dân tộc Việt Nam.",
    "distractorExplanations": [
      "Phương án A sai vì tư tưởng Người có giá trị thời đại lâu dài.",
      "Phương án C sai vì tư tưởng Người là hệ thống mở luôn cần phát triển sáng tạo.",
      "Phương án D sai vì Đảng luôn coi trọng giáo dục lý luận chính trị cho thế hệ trẻ."
    ]
  },
  {
    "id": "c1_q031",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q032",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q033",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q034",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q035",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q036",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q037",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q038",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q039",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q040",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q041",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 41: Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q042",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 42: Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q043",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 43: Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q044",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 44: Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q045",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 45: Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q046",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 46: Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q047",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 47: Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q048",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 48: Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q049",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 49: Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q050",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 50: Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q051",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 51: Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q052",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 52: Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q053",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 53: Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q054",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 54: Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q055",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 55: Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q056",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 56: Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q057",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 57: Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q058",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 58: Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q059",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 59: Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q060",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 60: Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q061",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 61: Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q062",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 62: Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q063",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 63: Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q064",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 64: Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q065",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 65: Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q066",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 66: Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q067",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 67: Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q068",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 68: Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q069",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 69: Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q070",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 70: Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q071",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 71: Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q072",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 72: Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q073",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 73: Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q074",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 74: Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q075",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 75: Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q076",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 76: Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q077",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 77: Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q078",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 78: Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q079",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 79: Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q080",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 80: Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q081",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 81: Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q082",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 82: Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q083",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 83: Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q084",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 84: Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q085",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 85: Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q086",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 86: Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q087",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 87: Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q088",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 88: Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q089",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 89: Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q090",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 90: Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q091",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 91: Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
    "options": [
      "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
      "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
      "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
      "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về tính khoa học",
    "explanation": "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."
    ]
  },
  {
    "id": "c1_q092",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 92: Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
    "options": [
      "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
      "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
      "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận",
      "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về phân tích nguyên tắc",
    "explanation": "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q093",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 93: Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
    "options": [
      "Thống nhất lý luận và thực tiễn",
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm trừu tượng hóa tư duy",
      "Quan điểm hư vô chủ nghĩa"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích học tập",
    "explanation": "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q094",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 94: Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
    "options": [
      "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
      "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết",
      "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
      "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về biểu hiện bệnh tật",
    "explanation": "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là bệnh lý luận suông.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D là hành động tích cực đúng đắn.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q095",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 95: Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
    "options": [
      "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
      "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
      "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
      "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về vai trò lý luận",
    "explanation": "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì lý luận không thay thế được công cụ thực tế.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."
    ]
  },
  {
    "id": "c1_q096",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 96: Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
    "options": [
      "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
      "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
      "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người",
      "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về quan điểm toàn diện",
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q097",
    "chapterId": 1,
    "topicId": "1.1",
    "topic": "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng",
    "question": "[Chuyên đề 1.1] Câu hỏi củng cố số 97: Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
      "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
      "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
      "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về so sánh phương pháp",
    "explanation": "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q098",
    "chapterId": 1,
    "topicId": "1.2",
    "topic": "Đối tượng nghiên cứu của môn học",
    "question": "[Chuyên đề 1.2] Câu hỏi củng cố số 98: Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
    "options": [
      "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
      "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa",
      "Sự thiếu hụt kiến thức lý luận sâu rộng",
      "Sự sao chép văn phong dịch thuật từ tiếng Pháp"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về phong cách diễn đạt",
    "explanation": "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A sai vì Người kiên quyết chống thói kinh viện.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  },
  {
    "id": "c1_q099",
    "chapterId": 1,
    "topicId": "1.3",
    "topic": "Cơ sở phương pháp luận & Các nguyên tắc",
    "question": "[Chuyên đề 1.3] Câu hỏi củng cố số 99: Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
    "options": [
      "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
      "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
      "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
      "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
    ],
    "correctAnswer": 2,
    "level": "van_dung",
    "type": "Hỏi về ý nghĩa tiến trình lịch sử",
    "explanation": "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A rơi vào quan điểm duy tâm bẩm sinh.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: Phương án C sai vì Người rất trân trọng các bậc tiền bối.",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."
    ]
  },
  {
    "id": "c1_q100",
    "chapterId": 1,
    "topicId": "1.4",
    "topic": "Ý nghĩa của việc học tập, nghiên cứu môn học",
    "question": "[Chuyên đề 1.4] Câu hỏi củng cố số 100: Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
    "options": [
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)",
      "Đại hội đại biểu toàn quốc lần thứ XII (2016)"
    ],
    "correctAnswer": 3,
    "level": "van_dung_cao",
    "type": "Hỏi về Văn kiện Đại hội XII",
    "explanation": "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng.",
      "Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: undefined",
      "Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: undefined"
    ]
  }
];

const chapter2Questions = [
  {
    "id": "c2_q001",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)",
      "Năm 1873 tại thành Hà Nội",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1862 tại Gia Định"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q002",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội phong kiến thuần túy",
      "Xã hội thuộc địa và phong kiến",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội cộng sản nguyên thủy"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q003",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "Tầng lớp trí thức với chính quyền thuộc địa"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q004",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo",
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q005",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước",
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920"
    ],
    "correctAnswer": 0,
    "level": "thong_hieu",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Không thể là yếu tố thứ yếu.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q006",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q007",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q008",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chính sách liên hiệp với các nước đế quốc phương Tây",
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "nhan_biet",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Quân quyền tối thượng là của phong kiến.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q009",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Chủ nghĩa Mác - Lênin",
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại"
    ],
    "correctAnswer": 0,
    "level": "thong_hieu",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q010",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 5 tháng 6 năm 1911",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 3 tháng 2 năm 1930"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 19/5/1890 là ngày sinh của Bác.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  },
  {
    "id": "c2_q011",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
    "options": [
      "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)",
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)",
      "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)",
      "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bước ngoặt cuộc đời",
    "explanation": "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."
    ]
  },
  {
    "id": "c2_q012",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
    "options": [
      "Bản án chế độ thực dân Pháp (1925)",
      "Chánh cương vắn tắt của Đảng (1930)",
      "Tuyên ngôn Độc lập (1945)",
      "Đường cách mệnh (1927)"
    ],
    "correctAnswer": 3,
    "level": "nhan_biet",
    "type": "Hỏi về tác phẩm kinh điển",
    "explanation": "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."
    ]
  },
  {
    "id": "c2_q013",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
    "options": [
      "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng",
      "Luận cương chính trị do Trần Phú soạn thảo",
      "Đề cương văn hóa Việt Nam",
      "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về văn kiện Cương lĩnh",
    "explanation": "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."
    ]
  },
  {
    "id": "c2_q014",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
    "options": [
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)",
      "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)",
      "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc về nước",
    "explanation": "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 2/9/1945 là ngày đọc Tuyên ngôn Độc lập.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 19/5/1941 là ngày thành lập Mặt trận Việt Minh.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 22/12/1944 là ngày thành lập Đội VNTTGPQ."
    ]
  },
  {
    "id": "c2_q015",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
    "options": [
      "Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh",
      "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo",
      "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
      "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hội nghị Trung ương 8",
    "explanation": "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Gia nhập khối tư bản sai lập trường quốc tế vô sản."
    ]
  },
  {
    "id": "c2_q016",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 16: Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)",
      "Năm 1873 tại thành Hà Nội",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1862 tại Gia Định"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án sai thứ hai: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án sai thứ ba: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q017",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 17: Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội phong kiến thuần túy",
      "Xã hội thuộc địa và phong kiến",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội cộng sản nguyên thủy"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án sai thứ hai: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án sai thứ ba: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q018",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 18: Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "Tầng lớp trí thức với chính quyền thuộc địa"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án sai thứ hai: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án sai thứ ba: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q019",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 19: Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo",
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án sai thứ hai: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án sai thứ ba: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q020",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 20: Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước",
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Không thể là yếu tố thứ yếu.",
      "Phương án sai thứ hai: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án sai thứ ba: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q021",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 21: Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án sai thứ hai: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án sai thứ ba: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q022",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 22: Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án sai thứ hai: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án sai thứ ba: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q023",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 23: Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chính sách liên hiệp với các nước đế quốc phương Tây",
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân quyền tối thượng là của phong kiến.",
      "Phương án sai thứ hai: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án sai thứ ba: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q024",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 24: Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Chủ nghĩa Mác - Lênin",
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án sai thứ hai: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án sai thứ ba: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q025",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 25: Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 5 tháng 6 năm 1911",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 3 tháng 2 năm 1930"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 19/5/1890 là ngày sinh của Bác.",
      "Phương án sai thứ hai: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án sai thứ ba: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  },
  {
    "id": "c2_q026",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 26: Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
    "options": [
      "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)",
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)",
      "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)",
      "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bước ngoặt cuộc đời",
    "explanation": "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.",
      "Phương án sai thứ hai: Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.",
      "Phương án sai thứ ba: Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."
    ]
  },
  {
    "id": "c2_q027",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 27: Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
    "options": [
      "Bản án chế độ thực dân Pháp (1925)",
      "Chánh cương vắn tắt của Đảng (1930)",
      "Tuyên ngôn Độc lập (1945)",
      "Đường cách mệnh (1927)"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tác phẩm kinh điển",
    "explanation": "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.",
      "Phương án sai thứ hai: Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.",
      "Phương án sai thứ ba: Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."
    ]
  },
  {
    "id": "c2_q028",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 28: Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
    "options": [
      "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng",
      "Luận cương chính trị do Trần Phú soạn thảo",
      "Đề cương văn hóa Việt Nam",
      "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về văn kiện Cương lĩnh",
    "explanation": "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.",
      "Phương án sai thứ hai: Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.",
      "Phương án sai thứ ba: Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."
    ]
  },
  {
    "id": "c2_q029",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 29: Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
    "options": [
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)",
      "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)",
      "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc về nước",
    "explanation": "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày đọc Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 19/5/1941 là ngày thành lập Mặt trận Việt Minh.",
      "Phương án sai thứ ba: 22/12/1944 là ngày thành lập Đội VNTTGPQ."
    ]
  },
  {
    "id": "c2_q030",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 30: Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
    "options": [
      "Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh",
      "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo",
      "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
      "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hội nghị Trung ương 8",
    "explanation": "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.",
      "Phương án sai thứ hai: Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.",
      "Phương án sai thứ ba: Gia nhập khối tư bản sai lập trường quốc tế vô sản."
    ]
  },
  {
    "id": "c2_q031",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 31: Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1873 tại thành Hà Nội",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1862 tại Gia Định",
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án sai thứ hai: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án sai thứ ba: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q032",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 32: Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội thuộc địa và phong kiến",
      "Xã hội phong kiến thuần túy",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội cộng sản nguyên thủy"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án sai thứ hai: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án sai thứ ba: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q033",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 33: Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Tầng lớp trí thức với chính quyền thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án sai thứ hai: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án sai thứ ba: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q034",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 34: Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án sai thứ hai: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án sai thứ ba: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q035",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 35: Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920",
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Không thể là yếu tố thứ yếu.",
      "Phương án sai thứ hai: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án sai thứ ba: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q036",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 36: Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội",
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án sai thứ hai: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án sai thứ ba: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q037",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 37: Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án sai thứ hai: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án sai thứ ba: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q038",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 38: Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc",
      "Chính sách liên hiệp với các nước đế quốc phương Tây"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân quyền tối thượng là của phong kiến.",
      "Phương án sai thứ hai: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án sai thứ ba: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q039",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 39: Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại",
      "Chủ nghĩa Mác - Lênin"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án sai thứ hai: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án sai thứ ba: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q040",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 40: Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 5 tháng 6 năm 1911",
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 3 tháng 2 năm 1930"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 19/5/1890 là ngày sinh của Bác.",
      "Phương án sai thứ hai: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án sai thứ ba: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  },
  {
    "id": "c2_q041",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 41: Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
    "options": [
      "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)",
      "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)",
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)",
      "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về bước ngoặt cuộc đời",
    "explanation": "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.",
      "Phương án sai thứ hai: Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.",
      "Phương án sai thứ ba: Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."
    ]
  },
  {
    "id": "c2_q042",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 42: Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
    "options": [
      "Bản án chế độ thực dân Pháp (1925)",
      "Chánh cương vắn tắt của Đảng (1930)",
      "Đường cách mệnh (1927)",
      "Tuyên ngôn Độc lập (1945)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về tác phẩm kinh điển",
    "explanation": "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.",
      "Phương án sai thứ hai: Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.",
      "Phương án sai thứ ba: Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."
    ]
  },
  {
    "id": "c2_q043",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 43: Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
    "options": [
      "Luận cương chính trị do Trần Phú soạn thảo",
      "Đề cương văn hóa Việt Nam",
      "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân",
      "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về văn kiện Cương lĩnh",
    "explanation": "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.",
      "Phương án sai thứ hai: Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.",
      "Phương án sai thứ ba: Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."
    ]
  },
  {
    "id": "c2_q044",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 44: Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
    "options": [
      "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)",
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)",
      "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc về nước",
    "explanation": "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày đọc Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 19/5/1941 là ngày thành lập Mặt trận Việt Minh.",
      "Phương án sai thứ ba: 22/12/1944 là ngày thành lập Đội VNTTGPQ."
    ]
  },
  {
    "id": "c2_q045",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 45: Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
    "options": [
      "Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh",
      "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
      "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo",
      "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về Hội nghị Trung ương 8",
    "explanation": "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.",
      "Phương án sai thứ hai: Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.",
      "Phương án sai thứ ba: Gia nhập khối tư bản sai lập trường quốc tế vô sản."
    ]
  },
  {
    "id": "c2_q046",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 46: Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1873 tại thành Hà Nội",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)",
      "Năm 1862 tại Gia Định"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án sai thứ hai: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án sai thứ ba: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q047",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 47: Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội phong kiến thuần túy",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội cộng sản nguyên thủy",
      "Xã hội thuộc địa và phong kiến"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án sai thứ hai: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án sai thứ ba: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q048",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 48: Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Tầng lớp trí thức với chính quyền thuộc địa"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án sai thứ hai: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án sai thứ ba: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q049",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 49: Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án sai thứ hai: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án sai thứ ba: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q050",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 50: Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Không thể là yếu tố thứ yếu.",
      "Phương án sai thứ hai: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án sai thứ ba: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q051",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 51: Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua",
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án sai thứ hai: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án sai thứ ba: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q052",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 52: Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc",
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án sai thứ hai: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án sai thứ ba: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q053",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 53: Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chính sách liên hiệp với các nước đế quốc phương Tây"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân quyền tối thượng là của phong kiến.",
      "Phương án sai thứ hai: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án sai thứ ba: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q054",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 54: Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Chủ nghĩa Mác - Lênin",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án sai thứ hai: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án sai thứ ba: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q055",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 55: Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 3 tháng 2 năm 1930",
      "Ngày 5 tháng 6 năm 1911"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 19/5/1890 là ngày sinh của Bác.",
      "Phương án sai thứ hai: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án sai thứ ba: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  },
  {
    "id": "c2_q056",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 56: Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
    "options": [
      "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)",
      "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)",
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)",
      "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bước ngoặt cuộc đời",
    "explanation": "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.",
      "Phương án sai thứ hai: Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.",
      "Phương án sai thứ ba: Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."
    ]
  },
  {
    "id": "c2_q057",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 57: Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
    "options": [
      "Bản án chế độ thực dân Pháp (1925)",
      "Đường cách mệnh (1927)",
      "Chánh cương vắn tắt của Đảng (1930)",
      "Tuyên ngôn Độc lập (1945)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tác phẩm kinh điển",
    "explanation": "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.",
      "Phương án sai thứ hai: Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.",
      "Phương án sai thứ ba: Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."
    ]
  },
  {
    "id": "c2_q058",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 58: Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
    "options": [
      "Luận cương chính trị do Trần Phú soạn thảo",
      "Đề cương văn hóa Việt Nam",
      "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng",
      "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về văn kiện Cương lĩnh",
    "explanation": "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.",
      "Phương án sai thứ hai: Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.",
      "Phương án sai thứ ba: Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."
    ]
  },
  {
    "id": "c2_q059",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 59: Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
    "options": [
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)",
      "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)",
      "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc về nước",
    "explanation": "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày đọc Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 19/5/1941 là ngày thành lập Mặt trận Việt Minh.",
      "Phương án sai thứ ba: 22/12/1944 là ngày thành lập Đội VNTTGPQ."
    ]
  },
  {
    "id": "c2_q060",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 60: Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
    "options": [
      "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
      "Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh",
      "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo",
      "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Hội nghị Trung ương 8",
    "explanation": "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.",
      "Phương án sai thứ hai: Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.",
      "Phương án sai thứ ba: Gia nhập khối tư bản sai lập trường quốc tế vô sản."
    ]
  },
  {
    "id": "c2_q061",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 61: Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1873 tại thành Hà Nội",
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1862 tại Gia Định"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án sai thứ hai: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án sai thứ ba: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q062",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 62: Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội phong kiến thuần túy",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội thuộc địa và phong kiến",
      "Xã hội cộng sản nguyên thủy"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án sai thứ hai: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án sai thứ ba: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q063",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 63: Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Tầng lớp trí thức với chính quyền thuộc địa",
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án sai thứ hai: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án sai thứ ba: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q064",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 64: Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn",
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án sai thứ hai: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án sai thứ ba: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q065",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 65: Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Không thể là yếu tố thứ yếu.",
      "Phương án sai thứ hai: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án sai thứ ba: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q066",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 66: Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án sai thứ hai: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án sai thứ ba: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q067",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 67: Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị",
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án sai thứ hai: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án sai thứ ba: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q068",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 68: Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc",
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chính sách liên hiệp với các nước đế quốc phương Tây"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân quyền tối thượng là của phong kiến.",
      "Phương án sai thứ hai: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án sai thứ ba: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q069",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 69: Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Chủ nghĩa Mác - Lênin",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án sai thứ hai: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án sai thứ ba: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q070",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 70: Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 5 tháng 6 năm 1911",
      "Ngày 3 tháng 2 năm 1930"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 19/5/1890 là ngày sinh của Bác.",
      "Phương án sai thứ hai: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án sai thứ ba: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  },
  {
    "id": "c2_q071",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 71: Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
    "options": [
      "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)",
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)",
      "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)",
      "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về bước ngoặt cuộc đời",
    "explanation": "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.",
      "Phương án sai thứ hai: Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.",
      "Phương án sai thứ ba: Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."
    ]
  },
  {
    "id": "c2_q072",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 72: Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
    "options": [
      "Đường cách mệnh (1927)",
      "Bản án chế độ thực dân Pháp (1925)",
      "Chánh cương vắn tắt của Đảng (1930)",
      "Tuyên ngôn Độc lập (1945)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về tác phẩm kinh điển",
    "explanation": "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.",
      "Phương án sai thứ hai: Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.",
      "Phương án sai thứ ba: Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."
    ]
  },
  {
    "id": "c2_q073",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 73: Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
    "options": [
      "Luận cương chính trị do Trần Phú soạn thảo",
      "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng",
      "Đề cương văn hóa Việt Nam",
      "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn kiện Cương lĩnh",
    "explanation": "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.",
      "Phương án sai thứ hai: Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.",
      "Phương án sai thứ ba: Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."
    ]
  },
  {
    "id": "c2_q074",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 74: Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
    "options": [
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)",
      "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)",
      "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc về nước",
    "explanation": "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày đọc Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 19/5/1941 là ngày thành lập Mặt trận Việt Minh.",
      "Phương án sai thứ ba: 22/12/1944 là ngày thành lập Đội VNTTGPQ."
    ]
  },
  {
    "id": "c2_q075",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 75: Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
    "options": [
      "Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh",
      "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo",
      "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây",
      "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về Hội nghị Trung ương 8",
    "explanation": "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.",
      "Phương án sai thứ hai: Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.",
      "Phương án sai thứ ba: Gia nhập khối tư bản sai lập trường quốc tế vô sản."
    ]
  },
  {
    "id": "c2_q076",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 76: Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)",
      "Năm 1873 tại thành Hà Nội",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1862 tại Gia Định"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án sai thứ hai: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án sai thứ ba: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q077",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 77: Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội phong kiến thuần túy",
      "Xã hội thuộc địa và phong kiến",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội cộng sản nguyên thủy"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án sai thứ hai: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án sai thứ ba: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q078",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 78: Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "Tầng lớp trí thức với chính quyền thuộc địa"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án sai thứ hai: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án sai thứ ba: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q079",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 79: Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo",
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án sai thứ hai: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án sai thứ ba: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q080",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 80: Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước",
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Không thể là yếu tố thứ yếu.",
      "Phương án sai thứ hai: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án sai thứ ba: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q081",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 81: Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án sai thứ hai: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án sai thứ ba: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q082",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 82: Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án sai thứ hai: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án sai thứ ba: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q083",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 83: Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chính sách liên hiệp với các nước đế quốc phương Tây",
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân quyền tối thượng là của phong kiến.",
      "Phương án sai thứ hai: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án sai thứ ba: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q084",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 84: Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Chủ nghĩa Mác - Lênin",
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án sai thứ hai: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án sai thứ ba: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q085",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 85: Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 5 tháng 6 năm 1911",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 3 tháng 2 năm 1930"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 19/5/1890 là ngày sinh của Bác.",
      "Phương án sai thứ hai: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án sai thứ ba: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  },
  {
    "id": "c2_q086",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 86: Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
    "options": [
      "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)",
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)",
      "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)",
      "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bước ngoặt cuộc đời",
    "explanation": "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.",
      "Phương án sai thứ hai: Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.",
      "Phương án sai thứ ba: Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."
    ]
  },
  {
    "id": "c2_q087",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 87: Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
    "options": [
      "Bản án chế độ thực dân Pháp (1925)",
      "Chánh cương vắn tắt của Đảng (1930)",
      "Tuyên ngôn Độc lập (1945)",
      "Đường cách mệnh (1927)"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tác phẩm kinh điển",
    "explanation": "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.",
      "Phương án sai thứ hai: Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.",
      "Phương án sai thứ ba: Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."
    ]
  },
  {
    "id": "c2_q088",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 88: Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
    "options": [
      "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng",
      "Luận cương chính trị do Trần Phú soạn thảo",
      "Đề cương văn hóa Việt Nam",
      "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về văn kiện Cương lĩnh",
    "explanation": "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.",
      "Phương án sai thứ hai: Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.",
      "Phương án sai thứ ba: Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."
    ]
  },
  {
    "id": "c2_q089",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 89: Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
    "options": [
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)",
      "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)",
      "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc về nước",
    "explanation": "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày đọc Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 19/5/1941 là ngày thành lập Mặt trận Việt Minh.",
      "Phương án sai thứ ba: 22/12/1944 là ngày thành lập Đội VNTTGPQ."
    ]
  },
  {
    "id": "c2_q090",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 90: Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
    "options": [
      "Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh",
      "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo",
      "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
      "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hội nghị Trung ương 8",
    "explanation": "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.",
      "Phương án sai thứ hai: Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.",
      "Phương án sai thứ ba: Gia nhập khối tư bản sai lập trường quốc tế vô sản."
    ]
  },
  {
    "id": "c2_q091",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 91: Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
    "options": [
      "Năm 1873 tại thành Hà Nội",
      "Năm 1883 tại cửa biển Thuận An (Huế)",
      "Năm 1862 tại Gia Định",
      "Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.",
      "Phương án sai thứ hai: Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.",
      "Phương án sai thứ ba: Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."
    ]
  },
  {
    "id": "c2_q092",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 92: Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
    "options": [
      "Xã hội thuộc địa và phong kiến",
      "Xã hội phong kiến thuần túy",
      "Xã hội tư bản chủ nghĩa phát triển cao",
      "Xã hội cộng sản nguyên thủy"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bản chất xã hội",
    "explanation": "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Xã hội phong kiến thuần túy là trước năm 1858.",
      "Phương án sai thứ hai: Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.",
      "Phương án sai thứ ba: Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."
    ]
  },
  {
    "id": "c2_q093",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 93: Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
    "options": [
      "Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "Giai cấp công nhân với giai cấp tư sản Việt Nam",
      "Tầng lớp trí thức với chính quyền thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mâu thuẫn xã hội",
    "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.",
      "Phương án sai thứ hai: Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.",
      "Phương án sai thứ ba: Mâu thuẫn trí thức chỉ là bộ phận nhỏ."
    ]
  },
  {
    "id": "c2_q094",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 94: Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
    "options": [
      "Nhân dân ta không có tinh thần yêu nước và căm thù giặc",
      "Thực dân Pháp đã trao trả độc lập trong hòa bình",
      "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn",
      "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên nhân lịch sử",
    "explanation": "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nhân dân ta có tinh thần yêu nước bất khuất.",
      "Phương án sai thứ hai: Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.",
      "Phương án sai thứ ba: Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."
    ]
  },
  {
    "id": "c2_q095",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 95: Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người",
      "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin",
      "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920",
      "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về cội nguồn tư tưởng",
    "explanation": "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Không thể là yếu tố thứ yếu.",
      "Phương án sai thứ hai: Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.",
      "Phương án sai thứ ba: Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."
    ]
  },
  {
    "id": "c2_q096",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 96: Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
    "options": [
      "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội",
      "Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến",
      "Tam tòng tứ đức áp đặt đối với người phụ nữ",
      "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về kế thừa Nho giáo",
    "explanation": "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.",
      "Phương án sai thứ hai: Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.",
      "Phương án sai thứ ba: Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."
    ]
  },
  {
    "id": "c2_q097",
    "chapterId": 2,
    "topicId": "2.1",
    "topic": "Cơ sở thực tiễn (Việt Nam & Thế giới)",
    "question": "[Nâng cao - Chuyên đề 2.1] Câu 97: Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
    "options": [
      "Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ",
      "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc",
      "Việc cúng bái mê tín dị đoan và đốt vàng mã",
      "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về kế thừa Phật giáo",
    "explanation": "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.",
      "Phương án sai thứ hai: Mê tín dị đoan bị Người kiên quyết bài trừ.",
      "Phương án sai thứ ba: Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."
    ]
  },
  {
    "id": "c2_q098",
    "chapterId": 2,
    "topicId": "2.2",
    "topic": "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)",
    "question": "[Nâng cao - Chuyên đề 2.2] Câu 98: Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
    "options": [
      "Học thuyết Quân quyền tối thượng",
      "Chủ nghĩa dân tộc hẹp hòi cực đoan",
      "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc",
      "Chính sách liên hiệp với các nước đế quốc phương Tây"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ảnh hưởng của Tôn Trung Sơn",
    "explanation": "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân quyền tối thượng là của phong kiến.",
      "Phương án sai thứ hai: Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.",
      "Phương án sai thứ ba: Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."
    ]
  },
  {
    "id": "c2_q099",
    "chapterId": 2,
    "topicId": "2.3",
    "topic": "Nhân tố chủ quan Hồ Chí Minh",
    "question": "[Nâng cao - Chuyên đề 2.3] Câu 99: Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
    "options": [
      "Truyền thống yêu nước và nhân ái của dân tộc Việt Nam",
      "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp",
      "Các học thuyết chính trị - xã hội phương Đông cổ đại",
      "Chủ nghĩa Mác - Lênin"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về cơ sở lý luận quyết định",
    "explanation": "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.",
      "Phương án sai thứ hai: Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.",
      "Phương án sai thứ ba: Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."
    ]
  },
  {
    "id": "c2_q100",
    "chapterId": 2,
    "topicId": "2.4",
    "topic": "5 giai đoạn lịch sử & Giá trị tư tưởng",
    "question": "[Nâng cao - Chuyên đề 2.4] Câu 100: Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    "options": [
      "Ngày 5 tháng 6 năm 1911",
      "Ngày 19 tháng 5 năm 1890",
      "Ngày 18 tháng 6 năm 1919",
      "Ngày 3 tháng 2 năm 1930"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 19/5/1890 là ngày sinh của Bác.",
      "Phương án sai thứ hai: 18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.",
      "Phương án sai thứ ba: 3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."
    ]
  }
];

const chapter3Questions = [
  {
    "id": "c3_q001",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì",
      "Không có gì quý hơn độc lập, tự do",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q002",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Trí thức là bầu bạn cách mệnh.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q003",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q004",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng",
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c3_q005",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án A là bản chất CNTB.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c3_q006",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Không có sự viện trợ vô tận.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q007",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q008",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Các khoản vay nợ ưu đãi quốc tế",
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Máy móc chỉ là công cụ vật chất.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q009",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội",
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế"
    ],
    "correctAnswer": 0,
    "level": "thong_hieu",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q010",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q011",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 11: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q012",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 12: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q013",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 13: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q014",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 14: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q015",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 15: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q016",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 16: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q017",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 17: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q018",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 18: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q019",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 19: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q020",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 20: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q021",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 21: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q022",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 22: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q023",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 23: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q024",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 24: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q025",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 25: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q026",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 26: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q027",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 27: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q028",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 28: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q029",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 29: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q030",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 30: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q031",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 31: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q032",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 32: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q033",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 33: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q034",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 34: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q035",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 35: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q036",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 36: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q037",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 37: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q038",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 38: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q039",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 39: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q040",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 40: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q041",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 41: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q042",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 42: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q043",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 43: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q044",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 44: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q045",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 45: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q046",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 46: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q047",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 47: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q048",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 48: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q049",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 49: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q050",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 50: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q051",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 51: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q052",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 52: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q053",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 53: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q054",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 54: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q055",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 55: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q056",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 56: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q057",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 57: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q058",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 58: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q059",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 59: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q060",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 60: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q061",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 61: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q062",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 62: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q063",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 63: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q064",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 64: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q065",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 65: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q066",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 66: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q067",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 67: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q068",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 68: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q069",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 69: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q070",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 70: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q071",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 71: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q072",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 72: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q073",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 73: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q074",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 74: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q075",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 75: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q076",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 76: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q077",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 77: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q078",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 78: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q079",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 79: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q080",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 80: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q081",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 81: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q082",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 82: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q083",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 83: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q084",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 84: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q085",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 85: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q086",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 86: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q087",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 87: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q088",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 88: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q089",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 89: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q090",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 90: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  },
  {
    "id": "c3_q091",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 91: Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
    "options": [
      "Không có gì quý hơn độc lập, tự do",
      "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
      "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ",
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Không có gì quý hơn độc lập, tự do' nói năm 1966.",
      "Phương án sai thứ hai: 'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.",
      "Phương án sai thứ ba: 'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."
    ]
  },
  {
    "id": "c3_q092",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 92: Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
    "options": [
      "Khối liên minh giai cấp công nhân và giai cấp nông dân",
      "Tầng lớp trí thức và học sinh, sinh viên",
      "Giai cấp tư sản dân tộc và địa chủ yêu nước",
      "Toàn bộ quân đội chính quy các nước Đồng minh"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lực lượng cách mạng",
    "explanation": "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Trí thức là bầu bạn cách mệnh.",
      "Phương án sai thứ hai: Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.",
      "Phương án sai thứ ba: Quân Đồng minh là lực lượng quốc tế."
    ]
  },
  {
    "id": "c3_q093",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 93: Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
    "options": [
      "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
      "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
      "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
      "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về luận điểm sáng tạo",
    "explanation": "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.",
      "Phương án sai thứ hai: Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.",
      "Phương án sai thứ ba: Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."
    ]
  },
  {
    "id": "c3_q094",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 94: Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
    "options": [
      "Hai giai cấp tư sản và vô sản trong một nước tư bản",
      "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
      "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
      "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q095",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 95: Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
    "options": [
      "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
      "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
      "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt",
      "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan niệm CNXH",
    "explanation": "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A là bản chất CNTB.",
      "Phương án sai thứ hai: Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH.",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c3_q096",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 96: Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
    "options": [
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
      "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
      "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
      "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đặc điểm thời kỳ quá độ",
    "explanation": "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.",
      "Phương án sai thứ hai: Không có sự viện trợ vô tận.",
      "Phương án sai thứ ba: Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."
    ]
  },
  {
    "id": "c3_q097",
    "chapterId": 3,
    "topicId": "3.1",
    "topic": "Độc lập dân tộc & Cách mạng GPDT",
    "question": "[Nâng cao - Chuyên đề 3.1] Câu 97: Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
    "options": [
      "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
      "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
      "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
      "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về thái độ học tập quốc tế",
    "explanation": "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.",
      "Phương án sai thứ hai: Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.",
      "Phương án sai thứ ba: Chờ đợi là thụ động, mất thời cơ cách mạng."
    ]
  },
  {
    "id": "c3_q098",
    "chapterId": 3,
    "topicId": "3.2",
    "topic": "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam",
    "question": "[Nâng cao - Chuyên đề 3.2] Câu 98: Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
    "options": [
      "Máy móc hiện đại nhập khẩu từ nước ngoài",
      "Tài nguyên thiên nhiên khoáng sản dồi dào",
      "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân",
      "Các khoản vay nợ ưu đãi quốc tế"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về động lực xây dựng CNXH",
    "explanation": "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Máy móc chỉ là công cụ vật chất.",
      "Phương án sai thứ hai: Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.",
      "Phương án sai thứ ba: Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."
    ]
  },
  {
    "id": "c3_q099",
    "chapterId": 3,
    "topicId": "3.3",
    "topic": "Mối quan hệ biện chứng giữa ĐLDT và CNXH",
    "question": "[Nâng cao - Chuyên đề 3.3] Câu 99: Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
    "options": [
      "Mục tiêu cuối cùng và duy nhất của cách mạng",
      "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH",
      "Rào cản đối với việc hội nhập kinh tế quốc tế",
      "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quan hệ biện chứng",
    "explanation": "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.",
      "Phương án sai thứ hai: Độc lập không phải hệ quả phụ ngẫu nhiên.",
      "Phương án sai thứ ba: Độc lập tạo thế chủ động vững chắc để hội nhập."
    ]
  },
  {
    "id": "c3_q100",
    "chapterId": 3,
    "topicId": "3.4",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 3.4] Câu 100: Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
    "options": [
      "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
      "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
      "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
      "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò của CNXH",
    "explanation": "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.",
      "Phương án sai thứ hai: CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.",
      "Phương án sai thứ ba: CNXH là thực tiễn sống động bảo vệ non sông."
    ]
  }
];

const chapter4Questions = [
  {
    "id": "c4_q001",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c4_q002",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q003",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình",
      "Tập trung dân chủ",
      "Kỷ luật nghiêm minh và tự giác"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q004",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần",
      "Như việc mỗi ngày phải rửa mặt"
    ],
    "correctAnswer": 3,
    "level": "nhan_biet",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c4_q005",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn con ngươi của mắt mình",
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c4_q006",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q007",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 6 tháng 1 năm 1946",
      "Ngày 9 tháng 11 năm 1946"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q008",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1945",
      "Năm 1959",
      "Năm 1980",
      "Năm 1946"
    ],
    "correctAnswer": 3,
    "level": "nhan_biet",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 1945 chưa ban hành Hiến pháp.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q009",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Tham ô, lãng phí và bệnh quan liêu",
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c4_q010",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c4_q011",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 11: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q012",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 12: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q013",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 13: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q014",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 14: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q015",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 15: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc",
      "Như giữ gìn con ngươi của mắt mình"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q016",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 16: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q017",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 17: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 6 tháng 1 năm 1946",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q018",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 18: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1945",
      "Năm 1959",
      "Năm 1946",
      "Năm 1980"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q019",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 19: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể",
      "Tham ô, lãng phí và bệnh quan liêu"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q020",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 20: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q021",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 21: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q022",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 22: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q023",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 23: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác",
      "Tập trung dân chủ"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q024",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 24: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q025",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 25: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn con ngươi của mắt mình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q026",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 26: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q027",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 27: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946",
      "Ngày 6 tháng 1 năm 1946"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q028",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 28: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1946",
      "Năm 1945",
      "Năm 1959",
      "Năm 1980"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q029",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 29: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Tham ô, lãng phí và bệnh quan liêu",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q030",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 30: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q031",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 31: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q032",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 32: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q033",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 33: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q034",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 34: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q035",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 35: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc",
      "Như giữ gìn con ngươi của mắt mình"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q036",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 36: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q037",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 37: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 6 tháng 1 năm 1946",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q038",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 38: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1945",
      "Năm 1959",
      "Năm 1946",
      "Năm 1980"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q039",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 39: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể",
      "Tham ô, lãng phí và bệnh quan liêu"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q040",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 40: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q041",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 41: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q042",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 42: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q043",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 43: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác",
      "Tập trung dân chủ"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q044",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 44: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q045",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 45: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn con ngươi của mắt mình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q046",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 46: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q047",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 47: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946",
      "Ngày 6 tháng 1 năm 1946"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q048",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 48: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1946",
      "Năm 1945",
      "Năm 1959",
      "Năm 1980"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q049",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 49: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Tham ô, lãng phí và bệnh quan liêu",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q050",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 50: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q051",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 51: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q052",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 52: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q053",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 53: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q054",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 54: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q055",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 55: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc",
      "Như giữ gìn con ngươi của mắt mình"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q056",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 56: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q057",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 57: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 6 tháng 1 năm 1946",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q058",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 58: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1945",
      "Năm 1959",
      "Năm 1946",
      "Năm 1980"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q059",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 59: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể",
      "Tham ô, lãng phí và bệnh quan liêu"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q060",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 60: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q061",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 61: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q062",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 62: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q063",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 63: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác",
      "Tập trung dân chủ"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q064",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 64: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q065",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 65: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn con ngươi của mắt mình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q066",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 66: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q067",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 67: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946",
      "Ngày 6 tháng 1 năm 1946"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q068",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 68: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1946",
      "Năm 1945",
      "Năm 1959",
      "Năm 1980"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q069",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 69: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Tham ô, lãng phí và bệnh quan liêu",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q070",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 70: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q071",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 71: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q072",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 72: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q073",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 73: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q074",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 74: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q075",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 75: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc",
      "Như giữ gìn con ngươi của mắt mình"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q076",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 76: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q077",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 77: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 6 tháng 1 năm 1946",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q078",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 78: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1945",
      "Năm 1959",
      "Năm 1946",
      "Năm 1980"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q079",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 79: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể",
      "Tham ô, lãng phí và bệnh quan liêu"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q080",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 80: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q081",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 81: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q082",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 82: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q083",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 83: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác",
      "Tập trung dân chủ"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q084",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 84: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q085",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 85: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn con ngươi của mắt mình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q086",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 86: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q087",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 87: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946",
      "Ngày 6 tháng 1 năm 1946"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q088",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 88: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1946",
      "Năm 1945",
      "Năm 1959",
      "Năm 1980"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q089",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 89: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Tham ô, lãng phí và bệnh quan liêu",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q090",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 90: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q091",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 91: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
    "options": [
      "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
      "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
      "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương",
      "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về quy luật ra đời của Đảng",
    "explanation": "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q092",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 92: Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
    "options": [
      "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
      "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
      "Trong tác phẩm Đường cách mệnh (năm 1927)",
      "Trong bản Di chúc thiêng liêng (năm 1969)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về mốc lịch sử",
    "explanation": "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1930 chưa có nhận định đúc kết 30 năm này.",
      "Phương án sai thứ hai: 1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.",
      "Phương án sai thứ ba: 1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."
    ]
  },
  {
    "id": "c4_q093",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 93: Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
    "options": [
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh và tự giác"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nguyên tắc cơ bản nhất của Đảng",
    "explanation": "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.",
      "Phương án sai thứ hai: Tự phê bình và phê bình là quy luật phát triển.",
      "Phương án sai thứ ba: Kỷ luật nghiêm minh là sức mạnh của Đảng."
    ]
  },
  {
    "id": "c4_q094",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 94: Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
    "options": [
      "Như việc ăn cơm ba bữa",
      "Như việc quét dọn nhà cửa mỗi dịp Tết",
      "Như việc mỗi ngày phải rửa mặt",
      "Như việc khám sức khỏe định kỳ mỗi năm một lần"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về ẩn dụ của Bác",
    "explanation": "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q095",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 95: Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
    "options": [
      "Như giữ gìn tài sản quý giá nhất của gia đình",
      "Như giữ gìn bí mật quốc gia tuyệt đối",
      "Như giữ gìn ngọn cờ trên chiến hào đánh giặc",
      "Như giữ gìn con ngươi của mắt mình"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về lời dặn trong Di chúc",
    "explanation": "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q096",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 96: Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
    "options": [
      "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
      "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
      "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
      "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nhà nước vì dân",
    "explanation": "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.",
      "Phương án sai thứ hai: Không lấy ý kiến dân là quan liêu độc đoán.",
      "Phương án sai thứ ba: Ngân sách phải phục vụ đời sống dân sinh."
    ]
  },
  {
    "id": "c4_q097",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 97: Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
    "options": [
      "Ngày 2 tháng 9 năm 1945",
      "Ngày 6 tháng 1 năm 1946",
      "Ngày 2 tháng 3 năm 1946",
      "Ngày 9 tháng 11 năm 1946"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mốc Tổng tuyển cử",
    "explanation": "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 2/9/1945 là ngày Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: 2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.",
      "Phương án sai thứ ba: 9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."
    ]
  },
  {
    "id": "c4_q098",
    "chapterId": 4,
    "topicId": "4.2",
    "topic": "Tư tưởng về Nhà nước của dân, do dân, vì dân",
    "question": "[Nâng cao - Chuyên đề 4.2] Câu 98: Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
    "options": [
      "Năm 1945",
      "Năm 1959",
      "Năm 1946",
      "Năm 1980"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Hiến pháp đầu tiên",
    "explanation": "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 1945 chưa ban hành Hiến pháp.",
      "Phương án sai thứ hai: 1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.",
      "Phương án sai thứ ba: 1980 là bản Hiến pháp sau ngày thống nhất đất nước."
    ]
  },
  {
    "id": "c4_q099",
    "chapterId": 4,
    "topicId": "4.3",
    "topic": "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực",
    "question": "[Nâng cao - Chuyên đề 4.3] Câu 99: Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
    "options": [
      "Bệnh kinh nghiệm và bệnh giáo điều",
      "Bệnh tự ti và bệnh dao động tư tưởng",
      "Bệnh nói nhiều làm ít trong công tác đoàn thể",
      "Tham ô, lãng phí và bệnh quan liêu"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về giặc nội xâm",
    "explanation": "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c4_q100",
    "chapterId": 4,
    "topicId": "4.1",
    "topic": "Tư tưởng về Đảng Cộng sản Việt Nam",
    "question": "[Nâng cao - Chuyên đề 4.1] Câu 100: Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
    "options": [
      "Bệnh quan liêu, xa rời quần chúng nhân dân",
      "Bệnh kiêu ngạo, tự cao tự đại",
      "Bệnh hẹp hòi, bè phái địa phương",
      "Bệnh lười biếng, ngại khó ngại khổ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về bệnh mẹ quan liêu",
    "explanation": "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  }
];

const chapter5Questions = [
  {
    "id": "c5_q001",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
      "Dĩ bất biến, ứng vạn biến",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q002",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Cần kiệm liêm chính, Chí công vô tư",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c5_q003",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
      "Sự thống nhất của các tôn giáo lớn trong nước"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c5_q004",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết",
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q005",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Hội Phản đế đồng minh",
      "Mặt trận Việt Minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Việt Minh lập năm 1941.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Hội Liên Việt lập năm 1946.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q006",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Mệnh lệnh hành chính từ trên xuống",
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 1,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q007",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh dân tộc với sức mạnh thời đại",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q008",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới",
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q009",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "không gây thù oán với một ai",
      "chỉ giao thương với các nước châu Á",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c5_q010",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội VI (1986)",
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội VII (1991)",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Đại hội VI là khởi xướng đổi mới.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Đại hội VII là 'muốn là bạn'.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q011",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 11: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q012",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 12: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q013",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 13: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q014",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 14: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q015",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 15: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam",
      "Hội Phản đế đồng minh"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q016",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 16: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q017",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 17: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh dân tộc với sức mạnh thời đại",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q018",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 18: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q019",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 19: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng",
      "không gây thù oán với một ai"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q020",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 20: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q021",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 21: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q022",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 22: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q023",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 23: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q024",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 24: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q025",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 25: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Phản đế đồng minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q026",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 26: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q027",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 27: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản",
      "Sức mạnh dân tộc với sức mạnh thời đại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q028",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 28: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q029",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 29: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không gây thù oán với một ai",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q030",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 30: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q031",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 31: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q032",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 32: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q033",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 33: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q034",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 34: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q035",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 35: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam",
      "Hội Phản đế đồng minh"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q036",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 36: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q037",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 37: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh dân tộc với sức mạnh thời đại",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q038",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 38: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q039",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 39: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng",
      "không gây thù oán với một ai"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q040",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 40: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q041",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 41: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q042",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 42: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q043",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 43: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q044",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 44: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q045",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 45: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Phản đế đồng minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q046",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 46: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q047",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 47: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản",
      "Sức mạnh dân tộc với sức mạnh thời đại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q048",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 48: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q049",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 49: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không gây thù oán với một ai",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q050",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 50: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q051",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 51: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q052",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 52: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q053",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 53: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q054",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 54: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q055",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 55: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam",
      "Hội Phản đế đồng minh"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q056",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 56: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q057",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 57: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh dân tộc với sức mạnh thời đại",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q058",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 58: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q059",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 59: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng",
      "không gây thù oán với một ai"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q060",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 60: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q061",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 61: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q062",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 62: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q063",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 63: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q064",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 64: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q065",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 65: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Phản đế đồng minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q066",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 66: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q067",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 67: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản",
      "Sức mạnh dân tộc với sức mạnh thời đại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q068",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 68: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q069",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 69: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không gây thù oán với một ai",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q070",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 70: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q071",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 71: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q072",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 72: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q073",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 73: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q074",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 74: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q075",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 75: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam",
      "Hội Phản đế đồng minh"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q076",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 76: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q077",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 77: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh dân tộc với sức mạnh thời đại",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q078",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 78: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q079",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 79: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng",
      "không gây thù oán với một ai"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q080",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 80: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q081",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 81: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q082",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 82: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q083",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 83: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q084",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 84: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q085",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 85: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Phản đế đồng minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q086",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 86: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q087",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 87: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản",
      "Sức mạnh dân tộc với sức mạnh thời đại"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q088",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 88: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q089",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 89: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không gây thù oán với một ai",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q090",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 90: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  },
  {
    "id": "c5_q091",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 91: Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
    "options": [
      "Dĩ bất biến, ứng vạn biến",
      "Không có gì quý hơn độc lập, tự do",
      "Cần, kiệm, liêm, chính, chí công vô tư",
      "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về danh ngôn",
    "explanation": "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: 'Dĩ bất biến...' là phương châm ứng xử.",
      "Phương án sai thứ hai: 'Không có gì quý hơn...' là chân lý độc lập tự do.",
      "Phương án sai thứ ba: 'Cần kiệm liêm chính...' là chuẩn mực đạo đức."
    ]
  },
  {
    "id": "c5_q092",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 92: Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
    "options": [
      "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
      "Độc lập dân tộc, Chủ nghĩa xã hội",
      "Cần kiệm liêm chính, Chí công vô tư",
      "Nước lấy dân làm gốc, Dân là chủ"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về khẩu hiệu lịch sử",
    "explanation": "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q093",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 93: Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
      "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
      "Khối hiệp ước quân sự với các cường quốc trên thế giới",
      "Sự thống nhất của các tôn giáo lớn trong nước"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về nền tảng khối đại đoàn kết",
    "explanation": "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q094",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 94: Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
    "options": [
      "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
      "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
      "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
      "Chỉ đoàn kết với những người hoàn hảo không tì vết"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về lòng khoan dung",
    "explanation": "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Loại bỏ người khuyết điểm là hẹp hòi.",
      "Phương án sai thứ hai: Không thể suy diễn thành bất bình đẳng tự nhiên.",
      "Phương án sai thứ ba: Không ai là hoàn hảo tuyệt đối."
    ]
  },
  {
    "id": "c5_q095",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 95: Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
    "options": [
      "Mặt trận Việt Minh",
      "Hội Liên Việt",
      "Mặt trận Tổ quốc Việt Nam",
      "Hội Phản đế đồng minh"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tên Mặt trận đầu tiên",
    "explanation": "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Việt Minh lập năm 1941.",
      "Phương án sai thứ hai: Hội Liên Việt lập năm 1946.",
      "Phương án sai thứ ba: Mặt trận Tổ quốc lập năm 1955/1977."
    ]
  },
  {
    "id": "c5_q096",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 96: Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
    "options": [
      "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
      "Mệnh lệnh hành chính từ trên xuống",
      "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
      "Chỉ do một đảng phái đơn phương định đoạt"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc Mặt trận",
    "explanation": "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.",
      "Phương án sai thứ hai: Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.",
      "Phương án sai thứ ba: Đơn phương định đoạt trái với bản chất liên minh."
    ]
  },
  {
    "id": "c5_q097",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 97: Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
    "options": [
      "Sức mạnh quân sự và sức mạnh tài chính",
      "Sức mạnh dân tộc với sức mạnh thời đại",
      "Sức mạnh truyền thống với sức mạnh tôn giáo",
      "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mục đích đoàn kết quốc tế",
    "explanation": "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.",
      "Phương án sai thứ hai: Tôn giáo không phải sức mạnh thời đại.",
      "Phương án sai thứ ba: Giai cấp tư sản không liên minh bản chất với vô sản."
    ]
  },
  {
    "id": "c5_q098",
    "chapterId": 5,
    "topicId": "5.2",
    "topic": "Đoàn kết quốc tế",
    "question": "[Nâng cao - Chuyên đề 5.2] Câu 98: Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
    "options": [
      "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
      "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
      "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
      "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc tự lực cánh sinh",
    "explanation": "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Dựa dẫm đi ngược lại tự lực cánh sinh.",
      "Phương án sai thứ hai: Ngoại giao suông không có thực lực sẽ vô nghĩa.",
      "Phương án sai thứ ba: Chỉ quan hệ láng giềng là tư duy hạn hẹp."
    ]
  },
  {
    "id": "c5_q099",
    "chapterId": 5,
    "topicId": "5.3",
    "topic": "Vận dụng trong giai đoạn hiện nay",
    "question": "[Nâng cao - Chuyên đề 5.3] Câu 99: Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
    "options": [
      "chỉ giao thương với các nước châu Á",
      "không tham gia bất kỳ hiệp ước hòa bình nào",
      "chỉ liên minh quân sự với các nước láng giềng",
      "không gây thù oán với một ai"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về tuyên bố đối ngoại 1947",
    "explanation": "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các vế khác không đúng với lời tuyên bố chính thức của Người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c5_q100",
    "chapterId": 5,
    "topicId": "5.1",
    "topic": "Đại đoàn kết toàn dân tộc",
    "question": "[Nâng cao - Chuyên đề 5.1] Câu 100: Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
    "options": [
      "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
      "Đại hội VI (1986)",
      "Đại hội VII (1991)",
      "Đại hội III (1960)"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về đường lối đối ngoại của Đảng",
    "explanation": "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Đại hội VI là khởi xướng đổi mới.",
      "Phương án sai thứ hai: Đại hội VII là 'muốn là bạn'.",
      "Phương án sai thứ ba: Đại hội III là thời kỳ kháng chiến chống Mỹ."
    ]
  }
];

const chapter6Questions = [
  {
    "id": "c6_q001",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc",
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q002",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q003",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c6_q004",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như những vì sao lấp lánh trên bầu trời đêm",
      "Như nguồn của sông, như gốc của cây"
    ],
    "correctAnswer": 3,
    "level": "nhan_biet",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c6_q005",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Trung với nước, hiếu với dân",
      "Cần, kiệm, liêm, chính",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q006",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q007",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như hai chân của con người, phải đi đôi với nhau",
      "Như cánh hoa và chiếc lá trên cùng một cành"
    ],
    "correctAnswer": 2,
    "level": "nhan_biet",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c6_q008",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Chỉ trích khuyết điểm của người khác trước tập thể",
      "Nói đi đôi với làm, nêu gương về đạo đức"
    ],
    "correctAnswer": 3,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Diễn văn suông là đạo đức giả.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q009",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
      "Tiên hạ thủ vi cường",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng"
    ],
    "correctAnswer": 0,
    "level": "nhan_biet",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: undefined",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: undefined"
    ]
  },
  {
    "id": "c6_q010",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án ở vị trí sai thứ nhất không đúng thực tế: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q011",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 11: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q012",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 12: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q013",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 13: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q014",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 14: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như nguồn của sông, như gốc của cây",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q015",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 15: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng",
      "Trung với nước, hiếu với dân"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q016",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 16: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q017",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 17: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như hai chân của con người, phải đi đôi với nhau",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q018",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 18: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q019",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 19: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q020",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 20: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q021",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 21: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q022",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 22: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q023",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 23: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q024",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 24: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như nguồn của sông, như gốc của cây",
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q025",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 25: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Trung với nước, hiếu với dân",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q026",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 26: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q027",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 27: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành",
      "Như hai chân của con người, phải đi đôi với nhau"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q028",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 28: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q029",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 29: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q030",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 30: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q031",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 31: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q032",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 32: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q033",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 33: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q034",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 34: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như nguồn của sông, như gốc của cây",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q035",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 35: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng",
      "Trung với nước, hiếu với dân"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q036",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 36: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q037",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 37: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như hai chân của con người, phải đi đôi với nhau",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q038",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 38: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q039",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 39: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q040",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 40: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q041",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 41: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q042",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 42: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q043",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 43: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q044",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 44: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như nguồn của sông, như gốc của cây",
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q045",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 45: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Trung với nước, hiếu với dân",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q046",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 46: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q047",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 47: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành",
      "Như hai chân của con người, phải đi đôi với nhau"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q048",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 48: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q049",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 49: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q050",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 50: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q051",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 51: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q052",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 52: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q053",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 53: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q054",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 54: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như nguồn của sông, như gốc của cây",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q055",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 55: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng",
      "Trung với nước, hiếu với dân"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q056",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 56: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q057",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 57: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như hai chân của con người, phải đi đôi với nhau",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q058",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 58: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q059",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 59: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q060",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 60: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q061",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 61: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q062",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 62: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q063",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 63: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q064",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 64: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như nguồn của sông, như gốc của cây",
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q065",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 65: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Trung với nước, hiếu với dân",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q066",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 66: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q067",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 67: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành",
      "Như hai chân của con người, phải đi đôi với nhau"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q068",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 68: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q069",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 69: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q070",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 70: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q071",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 71: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q072",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 72: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q073",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 73: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q074",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 74: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như nguồn của sông, như gốc của cây",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q075",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 75: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng",
      "Trung với nước, hiếu với dân"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q076",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 76: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q077",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 77: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như hai chân của con người, phải đi đôi với nhau",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q078",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 78: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q079",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 79: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q080",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 80: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q081",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 81: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q082",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 82: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q083",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 83: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q084",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 84: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như nguồn của sông, như gốc của cây",
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q085",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 85: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Trung với nước, hiếu với dân",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q086",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 86: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q087",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 87: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành",
      "Như hai chân của con người, phải đi đôi với nhau"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q088",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 88: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q089",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 89: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q090",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 90: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  },
  {
    "id": "c6_q091",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 91: Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
    "options": [
      "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
      "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
      "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng",
      "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về hoàn cảnh định nghĩa văn hóa",
    "explanation": "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tháng 9/1945 là Tuyên ngôn Độc lập.",
      "Phương án sai thứ hai: Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.",
      "Phương án sai thứ ba: Năm 1960 là Đại hội III."
    ]
  },
  {
    "id": "c6_q092",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 92: Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
    "options": [
      "Văn hóa soi đường cho quốc dân đi",
      "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
      "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
      "Văn hóa phát triển tự phát không cần định hướng"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về vai trò văn hóa",
    "explanation": "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Văn hóa không phải công cụ giải trí đơn thuần.",
      "Phương án sai thứ hai: Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.",
      "Phương án sai thứ ba: Văn hóa cần sự định hướng lý luận cách mạng."
    ]
  },
  {
    "id": "c6_q093",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 93: Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
    "options": [
      "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
      "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
      "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
      "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về văn nghệ sĩ",
    "explanation": "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q094",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 94: Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
    "options": [
      "Như ngọn gió vô hình thổi qua cánh đồng",
      "Như đám mây trôi trên đỉnh núi cao",
      "Như nguồn của sông, như gốc của cây",
      "Như những vì sao lấp lánh trên bầu trời đêm"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về hình ảnh ẩn dụ đạo đức",
    "explanation": "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q095",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 95: Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
    "options": [
      "Cần, kiệm, liêm, chính",
      "Thương yêu con người, sống có tình có nghĩa",
      "Tinh thần quốc tế trong sáng",
      "Trung với nước, hiếu với dân"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chuẩn mực bao trùm",
    "explanation": "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Cần, kiệm, liêm, chính là phẩm chất đời thường.",
      "Phương án sai thứ hai: Thương yêu con người là biểu hiện nhân nghĩa.",
      "Phương án sai thứ ba: Tinh thần quốc tế là phẩm chất đối ngoại."
    ]
  },
  {
    "id": "c6_q096",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 96: Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
    "options": [
      "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
      "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
      "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
      "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về thơ ca & tứ đức",
    "explanation": "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Bài 'Không có việc gì khó' khuyên thanh niên ý chí.",
      "Phương án sai thứ hai: Bài 'Giã gạo' nói về rèn luyện gian khổ.",
      "Phương án sai thứ ba: Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."
    ]
  },
  {
    "id": "c6_q097",
    "chapterId": 6,
    "topicId": "6.1",
    "topic": "Tư tưởng về Văn hóa",
    "question": "[Nâng cao - Chuyên đề 6.1] Câu 97: Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
    "options": [
      "Như hai bàn tay của người thợ rèn",
      "Như hai chân của con người, phải đi đôi với nhau",
      "Như mặt trời và mặt trăng luân phiên tỏa sáng",
      "Như cánh hoa và chiếc lá trên cùng một cành"
    ],
    "correctAnswer": 1,
    "level": "nhan_biet",
    "type": "Hỏi về mối quan hệ Cần và Kiệm",
    "explanation": "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q098",
    "chapterId": 6,
    "topicId": "6.2",
    "topic": "Tư tưởng về Đạo đức cách mạng",
    "question": "[Nâng cao - Chuyên đề 6.2] Câu 98: Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
    "options": [
      "Tu dưỡng đạo đức trong phòng kín",
      "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
      "Nói đi đôi với làm, nêu gương về đạo đức",
      "Chỉ trích khuyết điểm của người khác trước tập thể"
    ],
    "correctAnswer": 2,
    "level": "thong_hieu",
    "type": "Hỏi về nguyên tắc đạo đức",
    "explanation": "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Tu dưỡng phòng kín xa rời thực tiễn.",
      "Phương án sai thứ hai: Diễn văn suông là đạo đức giả.",
      "Phương án sai thứ ba: Chỉ trích người khác là thiếu tính tự soi tự sửa."
    ]
  },
  {
    "id": "c6_q099",
    "chapterId": 6,
    "topicId": "6.3",
    "topic": "Tư tưởng về Con người & Trồng người",
    "question": "[Nâng cao - Chuyên đề 6.3] Câu 99: Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
    "options": [
      "Tiên hạ thủ vi cường",
      "Binh quý hồ tinh, bất quý hồ đa",
      "Biết người biết ta, trăm trận trăm thắng",
      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
    ],
    "correctAnswer": 3,
    "level": "van_dung",
    "type": "Hỏi về chiến lược trồng người",
    "explanation": "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người.",
      "Phương án sai thứ hai: undefined",
      "Phương án sai thứ ba: undefined"
    ]
  },
  {
    "id": "c6_q100",
    "chapterId": 6,
    "topicId": "6.4",
    "topic": "Xây dựng Văn hóa, Đạo đức, Con người hiện nay",
    "question": "[Nâng cao - Chuyên đề 6.4] Câu 100: Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
    "options": [
      "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
      "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
      "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
      "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
    ],
    "correctAnswer": 0,
    "level": "van_dung_cao",
    "type": "Hỏi về Nghị quyết 80-NQ/TW 2026",
    "explanation": "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
    "distractorExplanations": [
      "Phương án sai thứ nhất: Thương mại hóa toàn diện làm méo mó văn hóa.",
      "Phương án sai thứ hai: Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.",
      "Phương án sai thứ ba: Hạn chế giao lưu trái với xu thế hội nhập văn hóa."
    ]
  }
];


const chapter1Flashcards = [
  {
    "id": "fc1_1",
    "front": "Định nghĩa tư tưởng Hồ Chí Minh tại Đại hội XI (2011)",
    "back": "Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, kết quả vận dụng và phát triển sáng tạo CN Mác - Lênin, kế thừa truyền thống dân tộc và tinh hoa văn hóa nhân loại; là tài sản tinh thần vô giá của Đảng và dân tộc.",
    "tag": "Khái niệm",
    "chapterId": 1
  },
  {
    "id": "fc1_2",
    "front": "Mốc Đại hội VII (1991) có ý nghĩa gì đối với tư tưởng Hồ Chí Minh?",
    "back": "Lần đầu tiên Đảng chính thức ghi vào Cương lĩnh: 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động'.",
    "tag": "Mốc lịch sử",
    "chapterId": 1
  },
  {
    "id": "fc1_3",
    "front": "Nghị quyết UNESCO năm 1987 tôn vinh Chủ tịch Hồ Chí Minh danh hiệu gì?",
    "back": "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam (Nghị quyết 24C/18.6.5 tại Khóa họp 24 ở Paris).",
    "tag": "Quốc tế",
    "chapterId": 1
  },
  {
    "id": "fc1_4",
    "front": "Đối tượng nghiên cứu của môn học Tư tưởng Hồ Chí Minh?",
    "back": "Gồm hai phương diện: (1) Toàn bộ hệ thống quan điểm trong di sản của Người; (2) Quá trình hiện thực hóa hệ thống quan điểm đó vào thực tiễn cách mạng Việt Nam.",
    "tag": "Đối tượng",
    "chapterId": 1
  },
  {
    "id": "fc1_5",
    "front": "Cơ sở phương pháp luận của môn học?",
    "back": "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử của chủ nghĩa Mác - Lênin.",
    "tag": "Phương pháp luận",
    "chapterId": 1
  },
  {
    "id": "fc1_6",
    "front": "Năm nguyên tắc phương pháp luận chỉ đạo môn học?",
    "back": "1. Thống nhất tính đảng và tính khoa học; 2. Thống nhất lý luận và thực tiễn; 3. Quan điểm lịch sử - cụ thể; 4. Quan điểm toàn diện và hệ thống; 5. Quan điểm kế thừa và phát triển.",
    "tag": "Nguyên tắc",
    "chapterId": 1
  },
  {
    "id": "fc1_7",
    "front": "Hồ Chí Minh so sánh 'Lý luận như cái gì'?",
    "back": "Lý luận như cái kim chỉ nam, chỉ phương hướng cho công việc thực tế. Không có lý luận thì lúng túng như nhắm mắt mà đi.",
    "tag": "Luận điểm",
    "chapterId": 1
  },
  {
    "id": "fc1_8",
    "front": "Bệnh lý luận suông và bệnh khinh lý luận?",
    "back": "- Lý luận suông: thuộc sách mà không biết làm thực tế (như cái hòm đựng sách).\n- Khinh lý luận: chỉ ỷ lại kinh nghiệm vụn vặt mà coi thường lý luận (như người một mắt sáng một mắt mờ).",
    "tag": "Phê phán",
    "chapterId": 1
  },
  {
    "id": "fc1_9",
    "front": "Phương châm 'Dĩ bất biến, ứng vạn biến' nghĩa là gì?",
    "back": "Lấy cái bất biến (độc lập dân tộc, chủ quyền quốc gia, ấm no hạnh phúc của dân) để ứng phó linh hoạt với muôn ngàn biến đổi của thời cuộc.",
    "tag": "Phương châm",
    "chapterId": 1
  },
  {
    "id": "fc1_10",
    "front": "Ý nghĩa hàng đầu của việc học tập môn học đối với sinh viên?",
    "back": "Góp phần nâng cao năng lực tư duy lý luận, củng cố lập trường cách mạng, rèn luyện đạo đức và phong cách làm việc.",
    "tag": "Ý nghĩa",
    "chapterId": 1
  }
];

const chapter2Flashcards = [
  {
    "id": "fc2_1",
    "front": "Bản chất xã hội Việt Nam thời Pháp thuộc?",
    "back": "Xã hội thuộc địa và phong kiến. Mâu thuẫn chủ yếu và gay gắt nhất là mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược.",
    "tag": "Thực tiễn",
    "chapterId": 2
  },
  {
    "id": "fc2_2",
    "front": "Sự bế tắc của các phong trào yêu nước trước năm 1911?",
    "back": "Phong trào Cần Vương (phong kiến) và phong trào Đông Du, Duy Tân (dân chủ tư sản) đều thất bại vì khủng hoảng đường lối cứu nước và giai cấp lãnh đạo.",
    "tag": "Lịch sử",
    "chapterId": 2
  },
  {
    "id": "fc2_3",
    "front": "Yếu tố lý luận nào đóng vai trò QUYẾT ĐỊNH bước phát triển về chất trong tư tưởng Hồ Chí Minh?",
    "back": "Chủ nghĩa Mác - Lênin. Cung cấp thế giới quan duy vật biện chứng và phương pháp luận khoa học cách mạng.",
    "tag": "Cơ sở lý luận",
    "chapterId": 2
  },
  {
    "id": "fc2_4",
    "front": "Hồ Chí Minh kế thừa điều gì từ Nho giáo?",
    "back": "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng, dùng nhân trị và đức trị để quản lý xã hội.",
    "tag": "Kế thừa",
    "chapterId": 2
  },
  {
    "id": "fc2_5",
    "front": "Hồ Chí Minh kế thừa điều gì từ Phật giáo?",
    "back": "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, vị tha, bình đẳng, hòa đồng với thiên nhiên và gắn bó với dân tộc.",
    "tag": "Kế thừa",
    "chapterId": 2
  },
  {
    "id": "fc2_6",
    "front": "Hồ Chí Minh kế thừa khẩu hiệu nào của Tôn Trung Sơn?",
    "back": "Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc -> sáng tạo thành Độc lập - Tự do - Hạnh phúc.",
    "tag": "Kế thừa",
    "chapterId": 2
  },
  {
    "id": "fc2_7",
    "front": "Ngày 5/6/1911 có ý nghĩa lịch sử gì?",
    "back": "Nguyễn Tất Thành (Văn Ba) rời Bến cảng Nhà Rồng trên tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước.",
    "tag": "Mốc son",
    "chapterId": 2
  },
  {
    "id": "fc2_8",
    "front": "Sự kiện bước ngoặt tháng 12/1920 tại Đại hội Tours (Pháp)?",
    "back": "Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp; đánh dấu bước chuyển từ người yêu nước thành người cộng sản.",
    "tag": "Bước ngoặt",
    "chapterId": 2
  },
  {
    "id": "fc2_9",
    "front": "Tác phẩm lý luận đầu tiên chuẩn bị trực tiếp thành lập Đảng?",
    "back": "Tác phẩm 'Đường cách mệnh' (xuất bản năm 1927 tại Quảng Châu, Trung Quốc).",
    "tag": "Tác phẩm",
    "chapterId": 2
  },
  {
    "id": "fc2_10",
    "front": "Ngày 28/1/1941 ghi dấu sự kiện gì?",
    "back": "Lãnh tụ Nguyễn Ái Quốc trở về Tổ quốc tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng) sau 30 năm bôn ba tìm đường cứu nước.",
    "tag": "Mốc son",
    "chapterId": 2
  }
];

const chapter3Flashcards = [
  {
    "id": "fc3_1",
    "front": "Chân lý thời đại về độc lập dân tộc được Bác tuyên ngôn năm 1966?",
    "back": "'Không có gì quý hơn độc lập, tự do' (Lời kêu gọi đồng bào và chiến sĩ cả nước ngày 17/7/1966).",
    "tag": "Chân lý",
    "chapterId": 3
  },
  {
    "id": "fc3_2",
    "front": "Độc lập dân tộc gắn liền với điều gì trong tư tưởng Hồ Chí Minh?",
    "back": "Phải gắn liền với tự do, cơm no, áo ấm và hạnh phúc của nhân dân ('Nước độc lập mà dân không hưởng hạnh phúc tự do thì độc lập cũng chẳng có nghĩa lý gì').",
    "tag": "Bản chất",
    "chapterId": 3
  },
  {
    "id": "fc3_3",
    "front": "Luận điểm sáng tạo về tính chủ động của cách mạng thuộc địa?",
    "back": "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại.",
    "tag": "Sáng tạo",
    "chapterId": 3
  },
  {
    "id": "fc3_4",
    "front": "Ẩn dụ 'con đỉa hai vòi' của Hồ Chí Minh?",
    "back": "Một vòi bám vào vô sản chính quốc, một vòi bám vào thuộc địa. Muốn giết chết đế quốc phải chặt đứt đồng thời cả hai vòi.",
    "tag": "Ẩn dụ",
    "chapterId": 3
  },
  {
    "id": "fc3_5",
    "front": "Đặc điểm lớn nhất của thời kỳ quá độ lên CNXH ở Việt Nam?",
    "back": "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa.",
    "tag": "Thời kỳ quá độ",
    "chapterId": 3
  },
  {
    "id": "fc3_6",
    "front": "Quan niệm mộc mạc của Hồ Chí Minh về chủ nghĩa xã hội?",
    "back": "Chủ nghĩa xã hội là làm cho nhân dân lao động thoát nạn bần cùng, có công ăn việc làm, được ấm no và sống một đời hạnh phúc.",
    "tag": "Mục tiêu",
    "chapterId": 3
  },
  {
    "id": "fc3_7",
    "front": "Thái độ học tập kinh nghiệm các nước anh em theo Hồ Chí Minh?",
    "back": "Học tập nhưng không áp đặt máy móc giáo điều: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, địa lý khác...'.",
    "tag": "Nguyên tắc",
    "chapterId": 3
  },
  {
    "id": "fc3_8",
    "front": "Động lực quyết định nhất để xây dựng CNXH?",
    "back": "Con người Việt Nam yêu nước, nhân dân lao động làm chủ và sức mạnh khối đại đoàn kết toàn dân tộc.",
    "tag": "Động lực",
    "chapterId": 3
  },
  {
    "id": "fc3_9",
    "front": "Phương châm thực hiện dân chủ XHCN theo Đại hội XIII?",
    "back": "'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
    "tag": "Vận dụng",
    "chapterId": 3
  },
  {
    "id": "fc3_10",
    "front": "Mối quan hệ biện chứng giữa ĐLDT và CNXH?",
    "back": "Độc lập dân tộc là cơ sở, tiền đề để tiến lên CNXH. CNXH là điều kiện bảo đảm vững chắc nhất cho độc lập dân tộc trường tồn.",
    "tag": "Mối quan hệ",
    "chapterId": 3
  }
];

const chapter4Flashcards = [
  {
    "id": "fc4_1",
    "front": "Quy luật ra đời của Đảng Cộng sản Việt Nam?",
    "back": "Đảng Cộng sản Việt Nam = Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước (bổ sung phong trào yêu nước).",
    "tag": "Quy luật",
    "chapterId": 4
  },
  {
    "id": "fc4_2",
    "front": "Luận điểm 'Đảng ta là đạo đức, là văn minh' khẳng định năm nào?",
    "back": "Năm 1960, tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng Cộng sản Việt Nam.",
    "tag": "Bản chất Đảng",
    "chapterId": 4
  },
  {
    "id": "fc4_3",
    "front": "Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT của Đảng?",
    "back": "Tập trung dân chủ (Dân chủ là nền tảng, tập trung là sự thống nhất ý chí và hành động).",
    "tag": "Nguyên tắc Đảng",
    "chapterId": 4
  },
  {
    "id": "fc4_4",
    "front": "Hồ Chí Minh so sánh Tự phê bình và phê bình với việc gì?",
    "back": "Như mỗi ngày phải rửa mặt; là thang thuốc tốt nhất để làm cho phần tốt nảy nở như hoa mùa xuân và phần xấu mất dần đi.",
    "tag": "Nguyên tắc Đảng",
    "chapterId": 4
  },
  {
    "id": "fc4_5",
    "front": "Lời dặn trong Di chúc về đoàn kết trong Đảng?",
    "back": "Phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.",
    "tag": "Di chúc",
    "chapterId": 4
  },
  {
    "id": "fc4_6",
    "front": "Định vị vị thế của công chức trong Nhà nước vì dân?",
    "back": "Cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân, không phải 'quan cách mạng' đè đầu cưỡi cổ dân.",
    "tag": "Nhà nước",
    "chapterId": 4
  },
  {
    "id": "fc4_7",
    "front": "Ngày bầu cử Quốc hội đầu tiên của nước ta?",
    "back": "Ngày 6 tháng 1 năm 1946 (Tổng tuyển cử theo chế độ phổ thông đầu phiếu, bình đẳng, trực tiếp và bỏ phiếu kín).",
    "tag": "Mốc lịch sử",
    "chapterId": 4
  },
  {
    "id": "fc4_8",
    "front": "Hai bản Hiến pháp do Hồ Chí Minh chỉ đạo soạn thảo?",
    "back": "Hiến pháp năm 1946 (Hiến pháp đầu tiên) và Hiến pháp năm 1959.",
    "tag": "Pháp quyền",
    "chapterId": 4
  },
  {
    "id": "fc4_9",
    "front": "Bộ ba 'giặc nội xâm' nguy hiểm theo Hồ Chí Minh?",
    "back": "Tham ô, lãng phí và bệnh quan liêu. Tội tham ô nặng như tội việt gian, mật thám.",
    "tag": "Phòng chống tiêu cực",
    "chapterId": 4
  },
  {
    "id": "fc4_10",
    "front": "Căn bệnh nào là 'bệnh mẹ' đẻ ra tham ô, lãng phí?",
    "back": "Bệnh quan liêu (chỉ biết ký chỉ thị trên giấy, không kiểm tra đến nơi đến chốn, xa rời thực tế).",
    "tag": "Phê phán",
    "chapterId": 4
  }
];

const chapter5Flashcards = [
  {
    "id": "fc5_1",
    "front": "Chân lý bất hủ về Đại đoàn kết toàn dân tộc?",
    "back": "'Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!'",
    "tag": "Chân lý",
    "chapterId": 5
  },
  {
    "id": "fc5_2",
    "front": "Tuyên bố mục đích Đảng Lao động Việt Nam ngày 3/3/1951?",
    "back": "Gói gọn trong 8 chữ vàng: 'ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
    "tag": "Khẩu hiệu",
    "chapterId": 5
  },
  {
    "id": "fc5_3",
    "front": "Nền tảng của khối đại đoàn kết toàn dân tộc?",
    "back": "Khối liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng.",
    "tag": "Nền tảng",
    "chapterId": 5
  },
  {
    "id": "fc5_4",
    "front": "Ẩn dụ 'Năm ngón tay có ngón ngắn ngón dài' nói về điều gì?",
    "back": "Lòng khoan dung, độ lượng, tôn trọng điểm khác biệt chính đáng, lấy lòng nhân ái cảm hóa người lầm đường để đại đoàn kết.",
    "tag": "Khoan dung",
    "chapterId": 5
  },
  {
    "id": "fc5_5",
    "front": "Tổ chức Mặt trận đầu tiên thành lập ngày 18/11/1930?",
    "back": "Hội Phản đế đồng minh (ngày 18/11 nay là Ngày truyền thống Mặt trận Tổ quốc Việt Nam).",
    "tag": "Mặt trận",
    "chapterId": 5
  },
  {
    "id": "fc5_6",
    "front": "Mặt trận Việt Minh thành lập khi nào, ở đâu?",
    "back": "Ngày 19/5/1941 tại Hội nghị Trung ương 8 Pác Bó (Cao Bằng).",
    "tag": "Việt Minh",
    "chapterId": 5
  },
  {
    "id": "fc5_7",
    "front": "Nguyên tắc hoạt động cốt lõi của Mặt trận?",
    "back": "Hiệp thương dân chủ, tôn trọng lẫn nhau, chân thành, 'cầu đồng tồn dị' (tìm điểm chung, gác lại bất đồng nhỏ).",
    "tag": "Nguyên tắc Mặt trận",
    "chapterId": 5
  },
  {
    "id": "fc5_8",
    "front": "Mục đích của đoàn kết quốc tế?",
    "back": "Kết hợp sức mạnh dân tộc với sức mạnh thời đại nhằm thực hiện thắng lợi mục tiêu giải phóng dân tộc và bảo vệ hòa bình thế giới.",
    "tag": "Đoàn kết quốc tế",
    "chapterId": 5
  },
  {
    "id": "fc5_9",
    "front": "Luận điểm 'Thực lực là cái chiêng, ngoại giao là cái tiếng'?",
    "back": "Khẳng định tự lực cánh sinh, nội lực dân tộc là gốc. Chiêng có to thì tiếng mới vang; thực lực vững thì ngoại giao mới thắng lợi.",
    "tag": "Ngoại giao",
    "chapterId": 5
  },
  {
    "id": "fc5_10",
    "front": "Phương châm ngoại giao của Việt Nam hiện nay?",
    "back": "Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế.",
    "tag": "Vận dụng",
    "chapterId": 5
  }
];

const chapter6Flashcards = [
  {
    "id": "fc6_1",
    "front": "Định nghĩa văn hóa của Hồ Chí Minh ra đời khi nào?",
    "back": "Tháng 8/1943 trong nhà tù Tưởng Giới Thạch (Nhật ký trong tù): 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra văn hóa...'.",
    "tag": "Định nghĩa",
    "chapterId": 6
  },
  {
    "id": "fc6_2",
    "front": "Luận điểm khẳng định sứ mệnh soi đường của văn hóa?",
    "back": "'Văn hóa soi đường cho quốc dân đi' (Hội nghị Văn hóa toàn quốc lần thứ nhất, 24/11/1946).",
    "tag": "Sứ mệnh văn hóa",
    "chapterId": 6
  },
  {
    "id": "fc6_3",
    "front": "Vị thế của văn nghệ sĩ theo Hồ Chí Minh?",
    "back": "Văn hóa nghệ thuật cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy (ngòi bút là vũ khí sắc bén).",
    "tag": "Mặt trận văn hóa",
    "chapterId": 6
  },
  {
    "id": "fc6_4",
    "front": "Bốn câu hỏi nhà văn hóa phải trả lời khi sáng tác?",
    "back": "1. Viết cho ai? (Đối tượng); 2. Mục đích viết là gì?; 3. Lấy tài liệu đâu mà viết?; 4. Cách viết như thế nào?",
    "tag": "Phương pháp",
    "chapterId": 6
  },
  {
    "id": "fc6_5",
    "front": "Luận điểm 'Đạo đức là cái gốc'?",
    "back": "Sông có nguồn mới có nước, cây có gốc mới đâm chồi. Người cách mạng phải có đạo đức, không có đạo đức thì tài giỏi mấy cũng không lãnh đạo được nhân dân.",
    "tag": "Đạo đức là gốc",
    "chapterId": 6
  },
  {
    "id": "fc6_6",
    "front": "Chuẩn mực đạo đức cách mạng bao trùm, quan trọng nhất?",
    "back": "Trung với nước, hiếu với dân. Thay đổi triệt để chữ trung quân phong kiến thành trung với độc lập Tổ quốc và hiếu với nhân dân.",
    "tag": "Chuẩn mực đạo đức",
    "chapterId": 6
  },
  {
    "id": "fc6_7",
    "front": "Tứ đức của con người theo Hồ Chí Minh?",
    "back": "Trời có bốn mùa (Xuân, Hạ, Thu, Đông) / Đất có bốn phương (Đông, Tây, Nam, Bắc) / Người có bốn đức: CẦN, KIỆM, LIÊM, CHÍNH. Thiếu một đức không thành người.",
    "tag": "Tứ đức",
    "chapterId": 6
  },
  {
    "id": "fc6_8",
    "front": "Nguyên tắc đạo đức 'Nói đi đôi với làm, nêu gương'?",
    "back": "Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền. Cán bộ chức vụ càng cao càng phải gương mẫu.",
    "tag": "Nêu gương",
    "chapterId": 6
  },
  {
    "id": "fc6_9",
    "front": "Chiến lược 'trồng người' trăm năm?",
    "back": "'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' (kế thừa Quản Trọng; đào tạo con người vừa hồng vừa chuyên).",
    "tag": "Trồng người",
    "chapterId": 6
  },
  {
    "id": "fc6_10",
    "front": "Nghị quyết 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về văn hóa?",
    "back": "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội; xây dựng 4 hệ giá trị: quốc gia, văn hóa, gia đình và chuẩn mực con người.",
    "tag": "Văn kiện 2026",
    "chapterId": 6
  }
];


const fastTrackData = {
  "mustRememberPoints": [
    {
      "chapter": "Chương 1",
      "title": "Khái niệm & Phương pháp",
      "key": "Đại hội XI định nghĩa; Đại hội VII xác định nền tảng tư tưởng (1991); UNESCO 1987 tôn vinh; 5 nguyên tắc phương pháp luận; Dĩ bất biến ứng vạn biến."
    },
    {
      "chapter": "Chương 2",
      "title": "Cơ sở & Quá trình",
      "key": "Mác - Lênin quyết định bước nhảy về chất; Yêu nước là điểm xuất phát; 5/6/1911 ra đi; 12/1920 Đại hội Tours gia nhập Quốc tế III; 28/1/1941 về nước; Hội nghị TW 8 (5/1941) lập Việt Minh."
    },
    {
      "chapter": "Chương 3",
      "title": "Độc lập dân tộc & CNXH",
      "key": "Không có gì quý hơn độc lập tự do (1966); ĐLDT gắn tự do hạnh phúc; Cách mạng thuộc địa có thể thắng trước chính quốc; Đặc điểm lớn nhất: từ nông nghiệp lạc hậu thẳng lên CNXH bỏ qua TBCN; 'Ta không thể giống Liên Xô'."
    },
    {
      "chapter": "Chương 4",
      "title": "Đảng & Nhà nước",
      "key": "Quy luật lập Đảng = Mác-Lênin + PT Công nhân + PT Yêu nước; Đảng là đạo đức, văn minh (1960); 5 nguyên tắc Đảng (Tập trung dân chủ cơ bản nhất); Nhà nước của dân do dân vì dân; Tổng tuyển cử 6/1/1946; Tham ô lãng phí là 'giặc nội xâm'; Quan liêu là bệnh mẹ."
    },
    {
      "chapter": "Chương 5",
      "title": "Đại đoàn kết",
      "key": "Đoàn kết đoàn kết đại đoàn kết / Thành công thành công đại thành công; 8 chữ vàng: Đoàn kết toàn dân, phụng sự Tổ quốc; Nền tảng: Công - Nông - Trí; Mặt trận hiệp thương dân chủ, 'cầu đồng tồn dị'; Thực lực là chiêng, ngoại giao là tiếng."
    },
    {
      "chapter": "Chương 6",
      "title": "Văn hóa, Đạo đức, Con người",
      "key": "Định nghĩa văn hóa 8/1943; Văn hóa soi đường cho quốc dân đi; Đạo đức là cái gốc (cây có gốc, sông có nguồn); Trung với nước hiếu với dân; Tứ đức Cần Kiệm Liêm Chính; Một tấm gương sống hơn trăm bài diễn văn; Vì lợi ích trăm năm trồng người; Nghị quyết 80-NQ/TW 2026."
    }
  ],
  "confusingPairs": [
    {
      "pair": "Đại hội VII (1991) vs Đại hội XI (2011)",
      "explanation": "ĐH VII: Lần đầu tiên ghi nhận TT HCM cùng CN Mác - Lênin là nền tảng tư tưởng, kim chỉ nam. ĐH XI: Hoàn thiện định nghĩa khoa học đầy đủ nhất về tư tưởng Hồ Chí Minh."
    },
    {
      "pair": "Bệnh lý luận suông vs Bệnh khinh lý luận",
      "explanation": "Lý luận suông: Coi sách như hòm đựng đồ, không biết áp dụng thực tiễn. Khinh lý luận: Coi thường học lý luận, chỉ ỷ kinh nghiệm vụn vặt (như một mắt sáng một mắt mờ)."
    },
    {
      "pair": "Cách mạng GPDT thuộc địa (HCM vs Quốc tế CS)",
      "explanation": "Quốc tế CS: Coi thuộc địa phụ thuộc vào vô sản chính quốc. Hồ Chí Minh: Thuộc địa có thể chủ động vùng lên giành thắng lợi TRƯỚC cách mạng vô sản chính quốc."
    },
    {
      "pair": "Quy luật ra đời của Đảng (Lênin vs Hồ Chí Minh)",
      "explanation": "Lênin (phương Tây): CN Mác + PT Công nhân. Hồ Chí Minh (Việt Nam): CN Mác-Lênin + PT Công nhân + PHONG TRÀO YÊU NƯỚC."
    },
    {
      "pair": "Dân là chủ vs Dân làm chủ",
      "explanation": "Dân là chủ: Xác định ĐỊA VỊ, vị thế quyền lực cao nhất thuộc về dân. Dân làm chủ: Nhấn mạnh NĂNG LỰC, trách nhiệm và nghĩa vụ thực thi quyền làm chủ của dân."
    },
    {
      "pair": "Trung quân ái quốc vs Trung với nước hiếu với dân",
      "explanation": "Phong kiến: Trung với Vua (trung quân), coi dân là bầy tôi. Hồ Chí Minh: Trung với Tổ quốc độc lập, Hiếu với nhân dân lao động (lấy dân làm gốc)."
    }
  ],
  "chronologyTimeline": [
    {
      "year": "1858",
      "event": "Thực dân Pháp nổ súng tấn công Đà Nẵng, mở đầu xâm lược VN."
    },
    {
      "year": "1890 (19/5)",
      "event": "Ngày sinh Chủ tịch Hồ Chí Minh tại làng Sen, Nam Đàn, Nghệ An."
    },
    {
      "year": "1911 (5/6)",
      "event": "Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước."
    },
    {
      "year": "1919 (18/6)",
      "event": "Nguyễn Ái Quốc gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles."
    },
    {
      "year": "1920 (7/1920)",
      "event": "Đọc Sơ thảo Luận cương của Lênin về vấn đề dân tộc và thuộc địa."
    },
    {
      "year": "1920 (12/1920)",
      "event": "Đại hội Tours: Bỏ phiếu tán thành Quốc tế III, sáng lập Đảng Cộng sản Pháp."
    },
    {
      "year": "1925",
      "event": "Xuất bản Bản án chế độ thực dân Pháp; thành lập Hội VN Cách mạng Thanh niên."
    },
    {
      "year": "1927",
      "event": "Xuất bản tác phẩm Đường cách mệnh tại Quảng Châu."
    },
    {
      "year": "1930 (3/2)",
      "event": "Thành lập Đảng Cộng sản Việt Nam; thông qua Cương lĩnh chính trị đầu tiên."
    },
    {
      "year": "1930 (18/11)",
      "event": "Thành lập Hội Phản đế đồng minh (Mặt trận đầu tiên)."
    },
    {
      "year": "1941 (28/1)",
      "event": "Trở về Tổ quốc tại mốc 108 Pác Bó sau 30 năm xa cách."
    },
    {
      "year": "1941 (19/5)",
      "event": "Chủ trì Hội nghị TW 8, thành lập Mặt trận Việt Minh."
    },
    {
      "year": "1943 (8/1943)",
      "event": "Đưa ra định nghĩa khoa học về văn hóa trong Nhật ký trong tù."
    },
    {
      "year": "1944 (22/12)",
      "event": "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân."
    },
    {
      "year": "1945 (2/9)",
      "event": "Đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa."
    },
    {
      "year": "1946 (6/1)",
      "event": "Tổng tuyển cử toàn quốc đầu tiên bầu Quốc hội khóa I."
    },
    {
      "year": "1946 (9/11)",
      "event": "Quốc hội thông qua bản Hiến pháp đầu tiên của nước ta."
    },
    {
      "year": "1946 (19/12)",
      "event": "Ra Lời kêu gọi toàn quốc kháng chiến chống thực dân Pháp."
    },
    {
      "year": "1951 (2/1951)",
      "event": "Đại hội II của Đảng; ra mắt Đảng Lao động VN (8 chữ vàng: Đoàn kết toàn dân, phụng sự Tổ quốc)."
    },
    {
      "year": "1960",
      "event": "Diễn văn kỷ niệm 30 năm thành lập Đảng: 'Đảng ta là đạo đức, là văn minh'."
    },
    {
      "year": "1966 (17/7)",
      "event": "Lời kêu gọi chống Mỹ khẳng định chân lý: 'Không có gì quý hơn độc lập, tự do'."
    },
    {
      "year": "1969 (2/9)",
      "event": "Chủ tịch Hồ Chí Minh qua đời, để lại bản Di chúc lịch sử vô giá."
    },
    {
      "year": "1987",
      "event": "Nghị quyết 24C/18.6.5 của UNESCO tôn vinh Bác là Anh hùng GPDT, Nhà văn hóa kiệt xuất."
    },
    {
      "year": "1991 (6/1991)",
      "event": "Đại hội VII ghi nhận CN Mác-Lênin và Tư tưởng HCM là nền tảng tư tưởng, kim chỉ nam."
    },
    {
      "year": "2011",
      "event": "Đại hội XI hoàn thiện định nghĩa toàn diện về tư tưởng Hồ Chí Minh."
    },
    {
      "year": "2026 (7/1/2026)",
      "event": "Nghị quyết 80-NQ/TW của Bộ Chính trị về văn hóa; Đại hội XIV của Đảng."
    }
  ],
  "famousQuotes": [
    {
      "quote": "Không có gì quý hơn độc lập, tự do.",
      "context": "Lời kêu gọi chống Mỹ cứu nước (17/7/1966)"
    },
    {
      "quote": "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.",
      "context": "Thư gửi UBND các kỳ, tỉnh, huyện và làng (tháng 10/1945)"
    },
    {
      "quote": "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
      "context": "Bài nói chuyện tại lớp bồi dưỡng cán bộ công đoàn (1957)"
    },
    {
      "quote": "Đảng ta là đạo đức, là văn minh.",
      "context": "Diễn văn kỷ niệm 30 năm Ngày thành lập Đảng (1960)"
    },
    {
      "quote": "Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân.",
      "context": "Tác phẩm Sửa đổi lối làm việc (1947)"
    },
    {
      "quote": "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
      "context": "Nói chuyện tại lớp học chính trị giáo viên (1958)"
    },
    {
      "quote": "Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong.",
      "context": "Bài thơ ghi lại bài học lấy dân làm gốc"
    },
    {
      "quote": "Dĩ bất biến, ứng vạn biến.",
      "context": "Căn dặn cụ Huỳnh Thúc Kháng trước khi sang Pháp đàm phán (1946)"
    },
    {
      "quote": "Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn.",
      "context": "Chỉ đạo công tác ngoại giao kháng chiến"
    },
    {
      "quote": "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước.",
      "context": "Căn dặn Đại đoàn Quân Tiên phong tại Đền Hùng (19/9/1954)"
    }
  ]
};


const allTheory = {
  1: chapter1Theory,
  2: chapter2Theory,
  3: chapter3Theory,
  4: chapter4Theory,
  5: chapter5Theory,
  6: chapter6Theory
};

const allQuestions = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions
];

const questionsByChapter = {
  1: chapter1Questions,
  2: chapter2Questions,
  3: chapter3Questions,
  4: chapter4Questions,
  5: chapter5Questions,
  6: chapter6Questions
};

const allFlashcards = [
  ...chapter1Flashcards,
  ...chapter2Flashcards,
  ...chapter3Flashcards,
  ...chapter4Flashcards,
  ...chapter5Flashcards,
  ...chapter6Flashcards
];

const flashcardsByChapter = {
  1: chapter1Flashcards,
  2: chapter2Flashcards,
  3: chapter3Flashcards,
  4: chapter4Flashcards,
  5: chapter5Flashcards,
  6: chapter6Flashcards
};

  // src/utils/storage.js
const STORAGE_KEY = 'hcm_learning_app_state_v1';

const defaultState = {
  theme: 'light', // 'light' | 'dark'
  fontSize: 'medium', // 'small' | 'medium' | 'large'
  soundEnabled: true,
  completedTheoryChapters: [], // [1, 2, ...]
  bookmarkedTheorySections: [], // ['sec1_1', ...]
  bookmarkedQuestions: [], // ['c1_q001', ...]
  questionHistory: {}, // { 'c1_q001': { answeredCount: 2, correctCount: 2, lastSelected: 1, lastAnsweredAt: '...' } }
  examHistory: [], // [{ id, date, score, totalQuestions, correctCount, timeSpent, chapterStats }]
  flashcardProgress: {
    mastered: [], // ['fc1_1', ...]
    reviewing: [] // ['fc1_2', ...]
  },
  fastTrackChecklist: [] // ['chk_c1_1', ...]
};

function getStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch (err) {
    console.error('Failed to read from localStorage:', err);
    return { ...defaultState };
  }
}

function saveStoredState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
}

function recordQuestionAnswer(questionId, isCorrect, selectedOption) {
  const state = getStoredState();
  const current = state.questionHistory[questionId] || {
    answeredCount: 0,
    correctCount: 0,
    lastSelected: null,
    lastAnsweredAt: null
  };

  current.answeredCount += 1;
  if (isCorrect) current.correctCount += 1;
  current.lastSelected = selectedOption;
  current.lastAnsweredAt = new Date().toISOString();

  state.questionHistory[questionId] = current;
  saveStoredState(state);
  return state;
}

function toggleQuestionBookmark(questionId) {
  const state = getStoredState();
  const idx = state.bookmarkedQuestions.indexOf(questionId);
  if (idx > -1) {
    state.bookmarkedQuestions.splice(idx, 1);
  } else {
    state.bookmarkedQuestions.push(questionId);
  }
  saveStoredState(state);
  return state.bookmarkedQuestions.includes(questionId);
}

function toggleTheoryComplete(chapterId) {
  const state = getStoredState();
  const idx = state.completedTheoryChapters.indexOf(chapterId);
  if (idx > -1) {
    state.completedTheoryChapters.splice(idx, 1);
  } else {
    state.completedTheoryChapters.push(chapterId);
  }
  saveStoredState(state);
  return state.completedTheoryChapters.includes(chapterId);
}

function saveExamResult(examData) {
  const state = getStoredState();
  state.examHistory.unshift({
    id: 'exam_' + Date.now(),
    date: new Date().toLocaleString('vi-VN'),
    ...examData
  });
  // Giữ lại 30 bài thi gần nhất
  if (state.examHistory.length > 30) {
    state.examHistory = state.examHistory.slice(0, 30);
  }
  saveStoredState(state);
  return state;
}

function resetAllData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return { ...defaultState };
  } catch (err) {
    console.error('Error resetting data:', err);
    return { ...defaultState };
  }
}

  // src/components/Sidebar.js
function renderSidebar(currentRoute) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Tổng quan Dashboard',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
    },
    {
      id: 'theory',
      label: 'Kho Lý Thuyết (6 Chương)',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
    },
    {
      id: 'flashcards',
      label: 'Thẻ Ghi Nhớ Flashcard',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`
    },
    {
      id: 'questions',
      label: 'Ngân Hàng 600 Câu Hỏi',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    },
    {
      id: 'practice',
      label: 'Luyện Tập Trắc Nghiệm',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`
    },
    {
      id: 'exam',
      label: 'Thi Thử Đại Học',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    },
    {
      id: 'fasttrack',
      label: 'Ôn Thi Cấp Tốc (Fast-Track)',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
    },
    {
      id: 'stats',
      label: 'Thống Kê & Tiến Độ',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
    },
    {
      id: 'settings',
      label: 'Cài Đặt & Dữ Liệu',
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
    }
  ];

  return `
    <aside class="app-sidebar" id="appSidebar">
      <div class="sidebar-header">
        <div class="logo-badge">HCM</div>
        <div class="logo-text">
          <h1>TƯ TƯỞNG HỒ CHÍ MINH</h1>
          <p>Nền tảng Ôn thi Đại học 2026</p>
        </div>
      </div>
      <nav class="sidebar-nav">
        ${navItems.map(item => `
          <a class="nav-item ${currentRoute === item.id ? 'active' : ''}" data-route="${item.id}">
            ${item.icon}
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.25rem;">
          <span style="font-weight:700;color:var(--text-main);">Giáo trình chuẩn 2026</span>
          <span class="badge badge-gold" style="font-size:0.65rem;">ĐH XIV</span>
        </div>
        <p style="font-size:0.7rem;color:var(--text-muted);">NXB Chính trị quốc gia Sự thật</p>
      </div>
    </aside>
  `;
}

  // src/components/Header.js
function renderHeader(state) {
  const isDark = state.theme === 'dark';

  return `
    <header class="app-header">
      <div class="header-left">
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div class="header-search">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" id="globalSearchInput" placeholder="Tìm kiếm khái niệm, mốc lịch sử, câu hỏi..." />
        </div>
      </div>
      <div class="header-right">
        <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);font-weight:600;" class="desktop-only">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:var(--success);"></span>
          <span>Ngân hàng: 600 câu</span>
        </div>
        <button class="theme-toggle-btn" id="themeToggleBtn" title="Chuyển chế độ sáng/tối">
          ${isDark 
            ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
            : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
          }
        </button>
      </div>
    </header>
  `;
}

  // src/pages/DashboardView.js


function renderDashboard(state) {
  const history = state.questionHistory || {};
  const answeredKeys = Object.keys(history);
  const totalAnswered = answeredKeys.length;

  let totalCorrect = 0;
  answeredKeys.forEach(k => {
    if (history[k].correctCount > 0) totalCorrect++;
  });

  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const completedChaptersCount = (state.completedTheoryChapters || []).length;
  const overallProgress = Math.round(((totalAnswered / allQuestions.length) * 0.7 + (completedChaptersCount / 6) * 0.3) * 100);

  return `
    <div style="display:flex;flex-direction:column;gap:2rem;">
      <!-- Hero Banner -->
      <div style="background: linear-gradient(135deg, #7F1D1D, #991B1B 50%, #B91C1C); border-radius: 20px; padding: 2.5rem; color: #FFFFFF; position: relative; overflow: hidden; box-shadow: var(--shadow-lg);">
        <div style="position: absolute; right: -20px; bottom: -30px; opacity: 0.12; pointer-events: none;">
          <svg width="280" height="280" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </div>
        <div style="max-width: 720px; position: relative; z-index: 2;">
          <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(255,255,255,0.18);padding:0.35rem 0.85rem;border-radius:9999px;font-size:0.8rem;font-weight:700;margin-bottom:1rem;backdrop-filter:blur(8px);">
            <span>🇻🇳 GIÁO TRÌNH CHÍNH THỨC 2026</span>
            <span style="opacity:0.6;">•</span>
            <span>VĂN KIỆN ĐẠI HỘI XIV</span>
          </div>
          <h2 style="font-family:var(--font-serif);font-size:2.2rem;font-weight:800;line-height:1.2;margin-bottom:0.85rem;letter-spacing:-0.01em;">
            Ôn Tập & Luyện Thi Trắc Nghiệm Tư Tưởng Hồ Chí Minh
          </h2>
          <p style="font-size:1.05rem;opacity:0.92;line-height:1.6;margin-bottom:1.75rem;">
            Nền tảng e-learning toàn diện dành cho sinh viên đại học. Hệ thống 6 chương lý thuyết chuyên sâu, ngân hàng chuẩn xác 600 câu hỏi có giải thích chi tiết, flashcard ghi nhớ và thi thử mô phỏng thời gian thực.
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:1rem;">
            <button class="btn btn-gold" id="btnContinueStudy" style="font-size:0.95rem;padding:0.75rem 1.5rem;">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              <span>Tiếp Tục Học Lý Thuyết</span>
            </button>
            <button class="btn" id="btnQuickPractice" style="background:rgba(255,255,255,0.2);color:#FFFFFF;border:1px solid rgba(255,255,255,0.3);font-size:0.95rem;padding:0.75rem 1.5rem;backdrop-filter:blur(8px);">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>Luyện Nhanh 20 Câu Ngẫu Nhiên</span>
            </button>
          </div>
        </div>
      </div>

      <!-- KPI Statistics Cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1.25rem;">
        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--primary-100);color:var(--primary-800);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Chương Đã Hoàn Thành</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${completedChaptersCount} / 6</div>
          </div>
        </div>

        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--accent-gold-light);color:var(--accent-gold-dark);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Câu Hỏi Đã Luyện</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${totalAnswered} <span style="font-size:0.9rem;color:var(--text-muted);font-weight:500;">/ ${allQuestions.length}</span></div>
          </div>
        </div>

        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--success-light);color:var(--success);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Tỷ Lệ Trả Lời Đúng</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${accuracyRate}%</div>
          </div>
        </div>

        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--info-light);color:var(--info);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Tiến Độ Tổng Thể</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${overallProgress}%</div>
          </div>
        </div>
      </div>

      <!-- Chapter Navigation Grid -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.35rem;font-weight:800;color:var(--text-main);">Lộ Trình Ôn Tập 6 Chương</h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Toàn bộ kiến thức theo giáo trình mới nhất của Bộ Giáo dục và Đào tạo</p>
          </div>
          <button class="btn btn-secondary" id="btnGoFastTrack" style="font-size:0.85rem;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            <span>Ôn Thi Cấp Tốc</span>
          </button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:1.5rem;">
          ${chaptersMeta.map(chap => {
            const isCompleted = (state.completedTheoryChapters || []).includes(chap.id);
            // Tính số câu của chương này đã làm
            const chapQuestions = allQuestions.filter(q => q.chapterId === chap.id);
            const answeredInChap = chapQuestions.filter(q => !!history[q.id]).length;
            const chapProgress = Math.round((answeredInChap / chapQuestions.length) * 100);

            return `
              <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;border-top:4px solid ${chap.color};">
                <div>
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
                    <span class="badge" style="background-color:${chap.color}18;color:${chap.color};">${chap.number} • ${chap.badge}</span>
                    ${isCompleted ? `<span class="badge badge-success">✓ Đã học xong</span>` : `<span style="font-size:0.75rem;color:var(--text-muted);">${chap.pages}</span>`}
                  </div>
                  <h4 style="font-size:1.1rem;font-weight:800;color:var(--text-main);line-height:1.4;margin-bottom:0.5rem;">
                    ${chap.title}
                  </h4>
                  <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.5;margin-bottom:1.25rem;">
                    ${chap.description}
                  </p>
                </div>

                <div>
                  <div style="margin-bottom:1rem;">
                    <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-muted);margin-bottom:0.35rem;">
                      <span>Tiến độ trắc nghiệm</span>
                      <span style="font-weight:700;color:var(--text-main);">${answeredInChap} / ${chapQuestions.length} câu (${chapProgress}%)</span>
                    </div>
                    <div style="width:100%;height:8px;background-color:var(--border-color);border-radius:9999px;overflow:hidden;">
                      <div style="width:${chapProgress}%;height:100%;background-color:${chap.color};border-radius:9999px;transition:width 0.4s ease;"></div>
                    </div>
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                    <button class="btn btn-secondary btn-read-theory" data-chapter="${chap.id}" style="font-size:0.85rem;padding:0.55rem;">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                      <span>Đọc Lý Thuyết</span>
                    </button>
                    <button class="btn btn-primary btn-practice-chapter" data-chapter="${chap.id}" style="font-size:0.85rem;padding:0.55rem;background:${chap.color};">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                      <span>Luyện Trắc Nghiệm</span>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Exam History Card -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);">Lịch Sử Thi Thử Gần Nhất</h3>
            <p style="font-size:0.8rem;color:var(--text-muted);">Theo dõi kết quả các bài kiểm tra trắc nghiệm đại học có bấm giờ</p>
          </div>
          <button class="btn btn-primary" id="btnStartNewExam" style="font-size:0.85rem;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>Bắt Đầu Thi Thử Mới</span>
          </button>
        </div>

        ${(state.examHistory && state.examHistory.length > 0) ? `
          <div style="overflow-x:auto;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Số câu</th>
                  <th>Số câu đúng</th>
                  <th>Điểm (thang 10)</th>
                  <th>Thời gian làm bài</th>
                  <th>Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                ${state.examHistory.slice(0, 5).map(e => `
                  <tr>
                    <td>${e.date}</td>
                    <td>${e.totalQuestions} câu</td>
                    <td style="font-weight:700;color:var(--success);">${e.correctCount} / ${e.totalQuestions}</td>
                    <td><span class="badge ${e.score >= 8 ? 'badge-success' : e.score >= 5 ? 'badge-gold' : 'badge-danger'}" style="font-size:0.85rem;">${e.score.toFixed(1)} điểm</span></td>
                    <td>${e.timeSpent || 'Đã nộp bài'}</td>
                    <td><strong>${e.score >= 8.5 ? 'Xuất sắc' : e.score >= 7.0 ? 'Khá giỏi' : e.score >= 5.0 ? 'Đạt yêu cầu' : 'Cần ôn thêm'}</strong></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <div style="text-align:center;padding:2.5rem 1rem;color:var(--text-muted);">
            <svg style="width:48px;height:48px;margin:0 auto 1rem;color:var(--text-light);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            <p style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem;">Bạn chưa thực hiện bài thi thử nào</p>
            <p style="font-size:0.85rem;max-width:400px;margin:0 auto 1.25rem;">Hãy bấm nút bên dưới để thử sức với bộ đề thi ngẫu nhiên 30 - 50 câu có bấm giờ mô phỏng đề thi trắc nghiệm đại học.</p>
            <button class="btn btn-secondary" id="btnEmptyExamStart">Vào Phòng Thi Thử</button>
          </div>
        `}
      </div>
    </div>
  `;
}

  // src/pages/TheoryView.js


function renderTheory(state, currentChapterId = 1, searchQuery = '') {
  const chapterData = allTheory[currentChapterId] || allTheory[1];
  const meta = chaptersMeta.find(c => c.id === currentChapterId) || chaptersMeta[0];
  const isCompleted = (state.completedTheoryChapters || []).includes(currentChapterId);

  // Lọc nội dung nếu có tìm kiếm
  const query = (searchQuery || '').trim().toLowerCase();

  return `
    <div style="display:flex;flex-direction:column;gap:1.75rem;">
      <!-- Chapter Selection Tabs -->
      <div style="display:flex;gap:0.75rem;overflow-x:auto;padding-bottom:0.5rem;" class="no-scrollbar">
        ${chaptersMeta.map(c => `
          <button class="btn ${c.id === currentChapterId ? 'btn-primary' : 'btn-secondary'} btn-chapter-tab" 
                  data-chapter="${c.id}" 
                  style="white-space:nowrap;font-size:0.85rem;padding:0.6rem 1rem;flex-shrink:0;">
            <span>${c.number}: ${c.shortTitle}</span>
            ${(state.completedTheoryChapters || []).includes(c.id) ? ' <span style="color:#10B981;font-weight:bold;">✓</span>' : ''}
          </button>
        `).join('')}
      </div>

      <!-- Theory Main Container -->
      <div style="display:grid;grid-template-columns:1fr 280px;gap:2rem;align-items:start;" id="theoryGrid">
        <!-- Main Theory Text -->
        <div style="display:flex;flex-direction:column;gap:1.75rem;">
          <!-- Header Card of Chapter -->
          <div class="card" style="border-left:5px solid ${meta.color};">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
              <span class="badge" style="background-color:${meta.color}18;color:${meta.color};">${meta.number} • ${meta.badge}</span>
              <div style="display:flex;gap:0.5rem;">
                <button class="btn btn-secondary" id="btnToggleAllSections" style="font-size:0.8rem;padding:0.4rem 0.8rem;">
                  <span id="toggleAllText">Thu gọn tất cả</span>
                </button>
                <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-toggle-complete-chapter" data-chapter="${currentChapterId}" style="font-size:0.8rem;padding:0.4rem 0.8rem;">
                  ${isCompleted ? '✓ Đã hoàn thành' : 'Đánh dấu đã học'}
                </button>
              </div>
            </div>
            <h2 style="font-family:var(--font-serif);font-size:1.8rem;font-weight:800;color:var(--text-main);line-height:1.3;margin-bottom:0.75rem;">
              ${chapterData.title}
            </h2>
            <p style="font-size:0.95rem;color:var(--text-muted);line-height:1.6;margin-bottom:1rem;">
              ${chapterData.overview}
            </p>
            <div style="background-color:var(--bg-app);border-radius:12px;padding:1rem;border:1px solid var(--border-color);">
              <h4 style="font-size:0.85rem;font-weight:700;color:var(--text-main);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">
                🎯 Mục tiêu cần đạt sau khi học chương này:
              </h4>
              <ul style="padding-left:1.25rem;font-size:0.85rem;color:var(--text-muted);display:flex;flex-direction:column;gap:0.35rem;">
                ${chapterData.objectives.map(obj => `<li>${obj}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Section Content Accordions -->
          ${chapterData.sections.map((sec, idx) => {
            // Kiểm tra tìm kiếm
            const isMatch = !query || sec.title.toLowerCase().includes(query) || sec.content.toLowerCase().includes(query);
            if (!isMatch) return '';

            return `
              <div class="card section-card" id="${sec.id}" style="padding:0;overflow:hidden;">
                <div class="section-header" style="padding:1.25rem 1.5rem;background-color:var(--bg-card);border-bottom:1px solid var(--border-color);display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
                  <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin:0;border:none;padding:0;">
                    ${sec.title}
                  </h3>
                  <button class="btn btn-secondary btn-collapse-sec" style="padding:0.25rem 0.5rem;border:none;background:transparent;">
                    <svg class="chevron-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                </div>
                <div class="section-body theory-content" style="padding:1.75rem;">
                  ${formatMarkdownContent(sec.content, query)}
                </div>
              </div>
            `;
          }).join('')}

          <!-- Confusing Concepts Comparison Table -->
          ${chapterData.confusingConceptsTable ? `
            <div class="card" id="sec_confusing">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
                <div style="width:32px;height:32px;border-radius:8px;background:var(--warning-light);color:var(--warning);display:flex;align-items:center;justify-content:center;font-weight:bold;">⚠️</div>
                <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);margin:0;border:none;padding:0;">
                  Bảng Tổng Hợp So Sánh Những Nội Dung Dễ Nhầm Lẫn
                </h3>
              </div>
              <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">
                Sinh viên thường mất điểm ở những cặp khái niệm, mốc lịch sử có nét tương đồng dưới đây:
              </p>
              <div style="overflow-x:auto;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th style="width:25%;">Nội dung A</th>
                      <th style="width:25%;">Nội dung B</th>
                      <th>Bản chất phân biệt chính xác</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${chapterData.confusingConceptsTable.map(item => `
                      <tr>
                        <td style="font-weight:700;color:var(--primary-800);">${item.conceptA}</td>
                        <td style="font-weight:700;color:var(--accent-gold-dark);">${item.conceptB}</td>
                        <td style="line-height:1.6;font-size:0.9rem;">${item.distinction}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- Key Milestones & Works -->
          ${chapterData.keyMilestones ? `
            <div class="card" id="sec_milestones">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
                <div style="width:32px;height:32px;border-radius:8px;background:var(--info-light);color:var(--info);display:flex;align-items:center;justify-content:center;font-weight:bold;">📅</div>
                <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);margin:0;border:none;padding:0;">
                  Mốc Thời Gian, Sự Kiện & Tác Phẩm Cần Ghi Nhớ
                </h3>
              </div>
              <div style="display:flex;flex-direction:column;gap:0.75rem;">
                ${chapterData.keyMilestones.map(m => `
                  <div style="display:flex;align-items:flex-start;gap:1rem;padding:0.75rem;background:var(--bg-app);border-radius:10px;border:1px solid var(--border-color);">
                    <span class="badge badge-primary" style="white-space:nowrap;margin-top:0.15rem;">${m.year}</span>
                    <span style="font-size:0.9rem;color:var(--text-main);font-weight:500;">${m.event}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Keywords & Summary -->
          <div class="card" id="sec_summary" style="background:linear-gradient(145deg, var(--bg-card), var(--primary-50));">
            <h3 style="font-size:1.2rem;font-weight:800;color:var(--primary-900);margin:0 0 0.75rem;border:none;padding:0;">
              🔑 Từ Khóa Cốt Lõi (Keywords)
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem;">
              ${chapterData.keywords.map(kw => `
                <span class="badge" style="background:var(--bg-card);color:var(--primary-800);border:1px solid var(--primary-200);font-size:0.8rem;text-transform:none;">
                  # ${kw}
                </span>
              `).join('')}
            </div>

            <h3 style="font-size:1.2rem;font-weight:800;color:var(--primary-900);margin:0 0 0.5rem;border:none;padding:0;">
              📝 Tóm Tắt Cuối Chương
            </h3>
            <p style="font-size:0.95rem;line-height:1.7;color:var(--text-main);font-weight:500;">
              ${chapterData.summary}
            </p>
          </div>

          <!-- Bottom Navigation Bar between chapters -->
          <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 0;">
            ${currentChapterId > 1 ? `
              <button class="btn btn-secondary btn-switch-chap" data-chapter="${currentChapterId - 1}">
                ← Chương ${currentChapterId - 1}
              </button>
            ` : '<div></div>'}

            <button class="btn btn-gold btn-practice-this-chap" data-chapter="${currentChapterId}">
              Luyện 100 Câu Trắc Nghiệm Chương ${currentChapterId} →
            </button>

            ${currentChapterId < 6 ? `
              <button class="btn btn-secondary btn-switch-chap" data-chapter="${currentChapterId + 1}">
                Chương ${currentChapterId + 1} →
              </button>
            ` : '<div></div>'}
          </div>
        </div>

        <!-- Sticky Table of Contents (On this page) -->
        <div style="position:sticky;top:90px;" class="desktop-only">
          <div class="card" style="padding:1.25rem;">
            <h4 style="font-size:0.85rem;font-weight:800;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.05em;margin-bottom:1rem;">
              📑 Mục Lục Chương ${currentChapterId}
            </h4>
            <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.85rem;">
              ${chapterData.sections.map(s => `
                <a href="#${s.id}" class="toc-link" style="color:var(--text-main);text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;transition:all 0.2s;line-height:1.4;">
                  ${s.title}
                </a>
              `).join('')}
              <a href="#sec_confusing" class="toc-link" style="color:var(--warning);font-weight:700;text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;">
                ⚠️ Bảng so sánh dễ nhầm
              </a>
              <a href="#sec_milestones" class="toc-link" style="color:var(--info);font-weight:700;text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;">
                📅 Mốc thời gian & tác phẩm
              </a>
              <a href="#sec_summary" class="toc-link" style="color:var(--primary-700);font-weight:700;text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;">
                🔑 Từ khóa & Tóm tắt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Hàm format markdown đơn giản sang HTML hiển thị an toàn
function formatMarkdownContent(content, query) {
  let html = content
    // Replace headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    // Replace blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Replace bold and italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Replace list items
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Replace paragraphs
    .replace(/\n\n/g, '</p><p>');

  html = '<p>' + html + '</p>';

  // Highlight từ khóa tìm kiếm nếu có
  if (query) {
    const reg = new RegExp(`(${query})`, 'gi');
    html = html.replace(reg, '<mark style="background-color:#FEF08A;color:#854D0E;padding:0 2px;border-radius:3px;">$1</mark>');
  }

  return html;
}

  // src/pages/FlashcardView.js


function renderFlashcards(state, selectedChapterId = 'all', currentIndex = 0, isFlipped = false) {
  const cards = selectedChapterId === 'all' 
    ? allFlashcards 
    : (flashcardsByChapter[selectedChapterId] || allFlashcards);

  const safeIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));
  const currentCard = cards[safeIndex] || { front: 'Chưa có thẻ', back: 'Dữ liệu trống', tag: 'Chung' };

  const masteredList = state.flashcardProgress?.mastered || [];
  const reviewingList = state.flashcardProgress?.reviewing || [];

  const isMastered = masteredList.includes(currentCard.id);
  const isReviewing = reviewingList.includes(currentCard.id);

  return `
    <div style="max-width:850px;margin:0 auto;display:flex;flex-direction:column;gap:1.75rem;">
      <!-- Flashcard Header & Filter -->
      <div class="card" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div>
          <h2 style="font-size:1.5rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
            Thẻ Ghi Nhớ Flashcard Thông Minh
          </h2>
          <p style="font-size:0.85rem;color:var(--text-muted);">
            Luyện trí nhớ phản xạ nhanh cho 6 chương lý thuyết bằng phương pháp lặp lại ngắt quãng
          </p>
        </div>

        <div style="display:flex;align-items:center;gap:0.75rem;">
          <select id="flashcardChapterSelect" style="padding:0.5rem 1rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;outline:none;font-weight:600;">
            <option value="all" ${selectedChapterId === 'all' ? 'selected' : ''}>Tất Cả 6 Chương (${allFlashcards.length} thẻ)</option>
            ${chaptersMeta.map(c => `
              <option value="${c.id}" ${selectedChapterId == c.id ? 'selected' : ''}>${c.number}: ${c.shortTitle}</option>
            `).join('')}
          </select>
          <button class="btn btn-secondary" id="btnShuffleFlashcards" title="Trộn ngẫu nhiên thứ tự thẻ">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span class="desktop-only">Trộn thẻ</span>
          </button>
        </div>
      </div>

      <!-- Progress Stats Bar -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
        <div class="card" style="padding:1rem;text-align:center;">
          <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Tiến độ hiện tại</span>
          <div style="font-size:1.3rem;font-weight:800;color:var(--text-main);">${safeIndex + 1} / ${cards.length}</div>
        </div>
        <div class="card" style="padding:1rem;text-align:center;border-bottom:3px solid var(--success);">
          <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Đã ghi nhớ</span>
          <div style="font-size:1.3rem;font-weight:800;color:var(--success);">${masteredList.length} thẻ</div>
        </div>
        <div class="card" style="padding:1rem;text-align:center;border-bottom:3px solid var(--danger);">
          <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Cần ôn lại</span>
          <div style="font-size:1.3rem;font-weight:800;color:var(--danger);">${reviewingList.length} thẻ</div>
        </div>
      </div>

      <!-- 3D Flashcard Scene -->
      <div class="flashcard-scene" id="flashcardScene">
        <div class="flashcard-inner ${isFlipped ? 'is-flipped' : ''}" id="flashcardInner">
          <!-- Mặt trước -->
          <div class="flashcard-face flashcard-front">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="badge badge-primary">${currentCard.tag || 'Kiến thức cốt lõi'}</span>
              <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Chương ${currentCard.chapterId}</span>
            </div>

            <div style="margin:auto 0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;">
              <div style="font-size:0.85rem;color:var(--primary-700);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem;">
                CÂU HỎI / KHÁI NIỆM CẦN NHỚ
              </div>
              <h3 style="font-family:var(--font-serif);font-size:1.6rem;font-weight:700;color:var(--text-main);line-height:1.4;">
                ${currentCard.front}
              </h3>
            </div>

            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              <span>Nhấp vào thẻ hoặc bấm nút Lật thẻ để xem lời giải</span>
            </div>
          </div>

          <!-- Mặt sau -->
          <div class="flashcard-face flashcard-back">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="badge badge-gold">Định nghĩa & Lời giải</span>
              <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Chương ${currentCard.chapterId}</span>
            </div>

            <div style="margin:auto 0;padding:1rem;overflow-y:auto;max-height:220px;">
              <p style="font-size:1.15rem;font-weight:600;color:var(--text-main);line-height:1.6;white-space:pre-line;">
                ${currentCard.back}
              </p>
            </div>

            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);">
              <span>Nhấp lần nữa để quay lại mặt trước</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Controls -->
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:center;">
        <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;">
          <button class="btn btn-secondary" id="btnPrevCard" ${safeIndex === 0 ? 'disabled' : ''}>
            ← Thẻ trước
          </button>
          
          <button class="btn btn-primary" id="btnFlipCard" style="min-width:140px;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            <span>${isFlipped ? 'Xem Mặt Trước' : 'Lật Thẻ'}</span>
          </button>

          <button class="btn btn-secondary" id="btnNextCard" ${safeIndex === cards.length - 1 ? 'disabled' : ''}>
            Thẻ tiếp theo →
          </button>
        </div>

        <!-- Rating Buttons (Mastered / Reviewing) -->
        <div style="display:flex;gap:1rem;margin-top:0.5rem;">
          <button class="btn ${isReviewing ? 'btn-primary' : 'btn-secondary'}" id="btnMarkReview" style="border-color:var(--danger);color:var(--danger);background:${isReviewing ? 'var(--danger-light)' : 'transparent'};">
            ❌ Cần ôn lại
          </button>
          <button class="btn ${isMastered ? 'btn-primary' : 'btn-secondary'}" id="btnMarkMastered" style="border-color:var(--success);color:var(--success);background:${isMastered ? 'var(--success-light)' : 'transparent'};">
            ✓ Đã nhớ kỹ
          </button>
        </div>
      </div>
    </div>
  `;
}

  // src/pages/QuestionBankView.js


function renderQuestionBank(state, filterChapter = 'all', filterLevel = 'all', searchQuery = '', page = 1) {
  const query = (searchQuery || '').trim().toLowerCase();
  const PAGE_SIZE = 15;

  let filtered = allQuestions.filter(q => {
    if (filterChapter !== 'all' && q.chapterId != filterChapter) return false;
    if (filterLevel !== 'all' && q.level !== filterLevel) return false;
    if (query) {
      const matchQ = q.question.toLowerCase().includes(query);
      const matchOpts = q.options.some(opt => opt.toLowerCase().includes(query));
      const matchExp = q.explanation.toLowerCase().includes(query);
      if (!matchQ && !matchOpts && !matchExp) return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const safePage = Math.max(1, Math.min(page, totalPages));
  const currentQuestions = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const levelBadges = {
    'nhan_biet': { label: 'Nhận biết', cls: 'badge-info' },
    'thong_hieu': { label: 'Thông hiểu', cls: 'badge-primary' },
    'van_dung': { label: 'Vận dụng', cls: 'badge-gold' },
    'van_dung_cao': { label: 'Vận dụng cao', cls: 'badge-danger' }
  };

  const bookmarks = state.bookmarkedQuestions || [];

  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <!-- Bank Header & Controls -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem;">
          <div>
            <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
              Ngân Hàng 600 Câu Hỏi Trắc Nghiệm Chuẩn Hóa
            </h2>
            <p style="font-size:0.85rem;color:var(--text-muted);">
              Phân loại 4 mức độ tư duy (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao) và giải thích chi tiết từng phương án
            </p>
          </div>
          <div style="display:flex;gap:0.75rem;">
            <button class="btn btn-primary" id="btnPracticeFiltered" style="font-size:0.85rem;">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Luyện Tập Bộ Lọc Này (${filtered.length} câu)</span>
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:0.75rem;">
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;text-transform:uppercase;">Theo Chương</label>
            <select id="qbChapterFilter" style="width:100%;padding:0.55rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;font-weight:600;">
              <option value="all" ${filterChapter === 'all' ? 'selected' : ''}>Tất Cả 6 Chương (600 câu)</option>
              ${chaptersMeta.map(c => `<option value="${c.id}" ${filterChapter == c.id ? 'selected' : ''}>${c.number}: ${c.shortTitle} (100 câu)</option>`).join('')}
            </select>
          </div>

          <div>
            <label style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;text-transform:uppercase;">Mức Độ Khó</label>
            <select id="qbLevelFilter" style="width:100%;padding:0.55rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;font-weight:600;">
              <option value="all" ${filterLevel === 'all' ? 'selected' : ''}>Tất cả mức độ</option>
              <option value="nhan_biet" ${filterLevel === 'nhan_biet' ? 'selected' : ''}>Nhận biết (Cơ bản)</option>
              <option value="thong_hieu" ${filterLevel === 'thong_hieu' ? 'selected' : ''}>Thông hiểu (Bản chất)</option>
              <option value="van_dung" ${filterLevel === 'van_dung' ? 'selected' : ''}>Vận dụng (Thực tiễn)</option>
              <option value="van_dung_cao" ${filterLevel === 'van_dung_cao' ? 'selected' : ''}>Vận dụng cao (Tổng hợp)</option>
            </select>
          </div>

          <div>
            <label style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;text-transform:uppercase;">Tìm Kiếm Câu Hỏi</label>
            <input type="text" id="qbSearchInput" value="${searchQuery}" placeholder="Gõ từ khóa cần tìm..." style="width:100%;padding:0.55rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;" />
          </div>
        </div>
      </div>

      <!-- Result Count Info -->
      <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.85rem;color:var(--text-muted);">
        <span>Hiển thị <strong>${filtered.length}</strong> câu hỏi phù hợp (Trang ${safePage}/${totalPages})</span>
        <span style="font-weight:600;">Đã lưu: ${bookmarks.length} câu đánh dấu</span>
      </div>

      <!-- Question List -->
      <div style="display:flex;flex-direction:column;gap:1.25rem;">
        ${currentQuestions.map((q, idx) => {
          const isBookmarked = bookmarks.includes(q.id);
          const letters = ['A', 'B', 'C', 'D'];
          const lvl = levelBadges[q.level] || { label: q.level, cls: 'badge-primary' };

          return `
            <div class="card" style="display:flex;flex-direction:column;gap:1rem;">
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                  <span class="badge badge-primary">Chương ${q.chapterId}</span>
                  <span class="badge ${lvl.cls}">${lvl.label}</span>
                  <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">#${q.id} • ${q.type || 'Trắc nghiệm'}</span>
                </div>
                <button class="btn btn-secondary btn-bookmark-question" data-qid="${q.id}" style="padding:0.35rem 0.65rem;font-size:0.8rem;border:none;">
                  <svg width="18" height="18" fill="${isBookmarked ? 'var(--accent-gold)' : 'none'}" stroke="${isBookmarked ? 'var(--accent-gold)' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                  <span>${isBookmarked ? 'Đã lưu' : 'Đánh dấu'}</span>
                </button>
              </div>

              <div style="font-size:1.05rem;font-weight:700;color:var(--text-main);line-height:1.5;">
                <span style="color:var(--primary-700);margin-right:0.35rem;">Câu ${(safePage - 1) * PAGE_SIZE + idx + 1}:</span>
                ${q.question}
              </div>

              <!-- Options Grid -->
              <div style="display:grid;grid-template-columns:1fr;gap:0.6rem;">
                ${q.options.map((opt, oIdx) => `
                  <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;border-radius:10px;background:var(--bg-app);border:1px solid var(--border-color);font-size:0.9rem;">
                    <span style="font-weight:800;color:var(--text-main);width:24px;flex-shrink:0;">${letters[oIdx]}.</span>
                    <span style="color:var(--text-main);">${opt}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Toggle Explanation Button -->
              <div>
                <button class="btn btn-secondary btn-toggle-explain" data-qid="${q.id}" style="font-size:0.8rem;padding:0.4rem 0.85rem;">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Xem Đáp Án & Giải Thích Chi Tiết</span>
                </button>
              </div>

              <!-- Detailed Explanation Container (Hidden by default) -->
              <div class="explanation-box" id="explain_${q.id}" style="display:none;background:var(--success-light);border:1px solid var(--success);border-radius:12px;padding:1.25rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem;color:var(--success);font-weight:800;font-size:0.95rem;">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>ĐÁP ÁN ĐÚNG: ${letters[q.correctAnswer]}. ${q.options[q.correctAnswer]}</span>
                </div>
                <div style="font-size:0.9rem;color:var(--text-main);line-height:1.6;margin-bottom:0.75rem;">
                  <strong>💡 Giải thích vì sao đúng:</strong> ${q.explanation}
                </div>
                ${q.distractorExplanations ? `
                  <div style="font-size:0.85rem;color:var(--text-muted);border-top:1px dashed var(--border-color);padding-top:0.75rem;">
                    <strong>🔍 Phân tích vì sao các phương án còn lại sai:</strong>
                    <ul style="padding-left:1.25rem;margin-top:0.35rem;display:flex;flex-direction:column;gap:0.35rem;">
                      ${q.distractorExplanations.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Pagination Controls -->
      ${totalPages > 1 ? `
        <div style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:1rem;">
          <button class="btn btn-secondary btn-qb-page" data-page="${safePage - 1}" ${safePage === 1 ? 'disabled' : ''}>← Trước</button>
          <span style="font-size:0.85rem;font-weight:700;padding:0 0.75rem;">Trang ${safePage} / ${totalPages}</span>
          <button class="btn btn-secondary btn-qb-page" data-page="${safePage + 1}" ${safePage === totalPages ? 'disabled' : ''}>Sau →</button>
        </div>
      ` : ''}
    </div>
  `;
}

  // src/pages/PracticeView.js


function renderPractice(state, session = null) {
  // Nếu chưa có session luyện tập, hiển thị màn hình thiết lập (Setup)
  if (!session || !session.questions || session.questions.length === 0) {
    return renderPracticeSetup(state);
  }

  // Đang trong phiên luyện tập
  const qIndex = session.currentIndex || 0;
  const currentQ = session.questions[qIndex];
  const total = session.questions.length;
  const isAnswered = session.userAnswers[currentQ.id] !== undefined;
  const selectedOption = session.userAnswers[currentQ.id];
  const isCorrect = isAnswered && selectedOption === currentQ.correctAnswer;
  const letters = ['A', 'B', 'C', 'D'];
  const isBookmarked = (state.bookmarkedQuestions || []).includes(currentQ.id);

  // Đếm đúng / sai trong session hiện tại
  let correctCount = 0;
  let wrongCount = 0;
  Object.keys(session.userAnswers).forEach(qid => {
    const qObj = session.questions.find(q => q.id === qid);
    if (qObj) {
      if (session.userAnswers[qid] === qObj.correctAnswer) correctCount++;
      else wrongCount++;
    }
  });

  return `
    <div style="max-width:850px;margin:0 auto;display:flex;flex-direction:column;gap:1.5rem;">
      <!-- Top Action Bar -->
      <div class="card" style="display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;flex-wrap:wrap;gap:0.75rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <button class="btn btn-secondary" id="btnExitPractice" style="padding:0.4rem 0.8rem;font-size:0.8rem;">
            ← Thoát chế độ luyện
          </button>
          <span style="font-size:0.85rem;font-weight:700;color:var(--text-main);">${session.title}</span>
        </div>

        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="display:flex;gap:0.75rem;font-size:0.85rem;font-weight:700;">
            <span style="color:var(--success);">✓ Đúng: ${correctCount}</span>
            <span style="color:var(--danger);">✗ Sai: ${wrongCount}</span>
          </div>
          <button class="btn btn-secondary" id="btnPracticeBookmark" data-qid="${currentQ.id}" style="padding:0.4rem 0.75rem;font-size:0.8rem;">
            <svg width="16" height="16" fill="${isBookmarked ? 'var(--accent-gold)' : 'none'}" stroke="${isBookmarked ? 'var(--accent-gold)' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            <span>${isBookmarked ? 'Đã lưu' : 'Lưu câu này'}</span>
          </button>
        </div>
      </div>

      <!-- Progress Bar -->
      <div style="width:100%;height:8px;background:var(--border-color);border-radius:9999px;overflow:hidden;">
        <div style="width:${Math.round(((qIndex + 1) / total) * 100)}%;height:100%;background:linear-gradient(90deg, var(--primary-700), var(--accent-gold));transition:width 0.3s ease;"></div>
      </div>

      <!-- Question Card -->
      <div class="card" style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="badge badge-primary">Chương ${currentQ.chapterId}</span>
          <span style="font-size:0.85rem;font-weight:700;color:var(--text-muted);">
            Câu hỏi ${qIndex + 1} / ${total}
          </span>
        </div>

        <div style="font-size:1.2rem;font-weight:800;color:var(--text-main);line-height:1.5;">
          ${currentQ.question}
        </div>

        <!-- 4 Interactive Options -->
        <div style="display:flex;flex-direction:column;gap:0.85rem;" id="practiceOptionsGroup">
          ${currentQ.options.map((opt, idx) => {
            let optionCls = '';
            if (isAnswered) {
              if (idx === currentQ.correctAnswer) optionCls = 'correct';
              else if (idx === selectedOption) optionCls = 'wrong';
            } else if (idx === selectedOption) {
              optionCls = 'selected';
            }

            return `
              <div class="quiz-option ${optionCls}" data-opt-idx="${idx}" ${isAnswered ? 'style="pointer-events:none;"' : ''}>
                <div class="option-letter">${letters[idx]}</div>
                <div style="font-size:1rem;color:var(--text-main);line-height:1.5;padding-top:0.2rem;">${opt}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Instant Feedback Box (Hiển thị ngay sau khi chọn đáp án) -->
        ${isAnswered ? `
          <div style="background:${isCorrect ? 'var(--success-light)' : 'var(--danger-light)'};border:1.5px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};border-radius:14px;padding:1.5rem;animation:fadeIn 0.3s ease;">
            <div style="display:flex;align-items:center;gap:0.6rem;font-size:1.05rem;font-weight:800;color:${isCorrect ? 'var(--success)' : 'var(--danger)'};margin-bottom:0.75rem;">
              ${isCorrect 
                ? `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Chính xác!` 
                : `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Chưa chính xác! Đáp án đúng là: ${letters[currentQ.correctAnswer]}. ${currentQ.options[currentQ.correctAnswer]}`
              }
            </div>

            <div style="font-size:0.95rem;color:var(--text-main);line-height:1.6;margin-bottom:0.75rem;">
              <strong>💡 Phân tích giải thích:</strong> ${currentQ.explanation}
            </div>

            ${currentQ.distractorExplanations ? `
              <div style="font-size:0.85rem;color:var(--text-muted);border-top:1px dashed var(--border-color);padding-top:0.75rem;">
                <strong>🔍 Vì sao các phương án khác sai:</strong>
                <ul style="padding-left:1.25rem;margin-top:0.35rem;display:flex;flex-direction:column;gap:0.35rem;">
                  ${currentQ.distractorExplanations.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Bottom Navigation Buttons -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.5rem;">
          <button class="btn btn-secondary" id="btnPrevPracticeQ" ${qIndex === 0 ? 'disabled' : ''}>
            ← Câu trước
          </button>

          ${qIndex < total - 1 ? `
            <button class="btn btn-primary" id="btnNextPracticeQ">
              Câu tiếp theo →
            </button>
          ` : `
            <button class="btn btn-gold" id="btnFinishPractice">
              Xem Kết Quả Luyện Tập 🎉
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}

// Giao diện thiết lập phiên luyện tập
function renderPracticeSetup(state) {
  const history = state.questionHistory || {};
  const wrongQuestions = allQuestions.filter(q => history[q.id] && history[q.id].correctCount === 0);
  const unattempted = allQuestions.filter(q => !history[q.id]);
  const bookmarked = allQuestions.filter(q => (state.bookmarkedQuestions || []).includes(q.id));

  return `
    <div style="max-width:850px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;">
        <span class="badge badge-gold" style="margin-bottom:0.75rem;">CHẾ ĐỘ TẬP TRUNG</span>
        <h2 style="font-size:1.8rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">
          Luyện Tập Trắc Nghiệm Thông Minh
        </h2>
        <p style="font-size:0.95rem;color:var(--text-muted);max-width:550px;margin:0 auto;">
          Tùy chọn chế độ luyện tập đa dạng, chấm điểm tức thì và phân tích chuyên sâu cho từng câu hỏi
        </p>
      </div>

      <!-- Practice Modes Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1.25rem;">
        <!-- Luyện toàn bộ ngẫu nhiên -->
        <div class="card practice-mode-card" data-mode="random" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--primary-100);color:var(--primary-800);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Toàn Bộ Ngân Hàng</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Ngẫu nhiên từ cả 6 chương, bao quát toàn diện đề thi.</p>
          <span class="badge badge-primary">600 câu sẵn sàng</span>
        </div>

        <!-- Luyện các câu làm sai -->
        <div class="card practice-mode-card" data-mode="wrong" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--danger-light);color:var(--danger);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Ôn Lại Câu Đã Làm Sai</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Tự động lọc những câu bạn đã trả lời sai để rèn luyện lại.</p>
          <span class="badge badge-danger">${wrongQuestions.length} câu cần khắc phục</span>
        </div>

        <!-- Luyện các câu đã bookmark -->
        <div class="card practice-mode-card" data-mode="bookmarked" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--accent-gold-light);color:var(--accent-gold-dark);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Câu Hỏi Đã Đánh Dấu</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Những câu hỏi khó, trọng điểm do chính bạn lưu lại.</p>
          <span class="badge badge-gold">${bookmarked.length} câu đã lưu</span>
        </div>

        <!-- Luyện các câu chưa làm -->
        <div class="card practice-mode-card" data-mode="unattempted" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--success-light);color:var(--success);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Câu Chưa Từng Làm</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Khám phá các câu hỏi mới trong ngân hàng 600 câu.</p>
          <span class="badge badge-success">${unattempted.length} câu mới</span>
        </div>
      </div>

      <!-- Config Form -->
      <div class="card" style="padding:2rem;">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Tùy Chỉnh Lượt Luyện Tập
        </h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
          <div>
            <label style="display:block;font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;">Chọn Chương Cần Luyện</label>
            <select id="practiceChapterSelect" style="width:100%;padding:0.65rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.9rem;font-weight:600;">
              <option value="all">Tất Cả 6 Chương (Trộn ngẫu nhiên)</option>
              ${chaptersMeta.map(c => `<option value="${c.id}">${c.number}: ${c.shortTitle} (100 câu)</option>`).join('')}
            </select>
          </div>

          <div>
            <label style="display:block;font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;">Số Lượng Câu Hỏi</label>
            <select id="practiceCountSelect" style="width:100%;padding:0.65rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.9rem;font-weight:600;">
              <option value="10">10 câu (Luyện nhanh 5 phút)</option>
              <option value="20" selected>20 câu (Phổ biến 10 phút)</option>
              <option value="30">30 câu (Tiêu chuẩn 15 phút)</option>
              <option value="50">50 câu (Chuyên sâu 25 phút)</option>
              <option value="100">100 câu (Toàn bộ 1 chương)</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" id="btnStartPracticeSession" style="width:100%;padding:0.85rem;font-size:1rem;">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Bắt Đầu Luyện Tập Ngay</span>
        </button>
      </div>
    </div>
  `;
}

  // src/pages/ExamView.js


function renderExam(state, examSession = null) {
  // Nếu chưa có session thi thử -> Hiển thị màn hình thiết lập thi
  if (!examSession) {
    return renderExamSetup();
  }

  // Đang trong thời gian làm bài thi
  if (!examSession.isSubmitted) {
    return renderExamInProgress(examSession);
  }

  // Đã nộp bài -> Hiển thị kết quả thi
  return renderExamResult(examSession);
}

// 1. Màn hình chuẩn bị vào phòng thi
function renderExamSetup() {
  return `
    <div style="max-width:750px;margin:0 auto;display:flex;flex-direction:column;gap:1.75rem;">
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;border-top:5px solid var(--primary-700);">
        <div style="width:60px;height:60px;border-radius:16px;background:var(--primary-100);color:var(--primary-800);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;">
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h2 style="font-family:var(--font-serif);font-size:2rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">
          Phòng Thi Thử Trắc Nghiệm Đại Học
        </h2>
        <p style="font-size:0.95rem;color:var(--text-muted);max-width:520px;margin:0 auto 1.5rem;line-height:1.6;">
          Hệ thống sẽ tạo đề thi ngẫu nhiên từ 600 câu hỏi trong ngân hàng, bảo đảm phân bổ đều 6 chương và 4 mức độ tư duy. Không hiển thị đáp án trong lúc làm.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;margin-bottom:2rem;text-align:left;">
          <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Cấu trúc đề</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text-main);margin-top:0.25rem;">Trộn ngẫu nhiên 6 chương</div>
          </div>
          <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Thang điểm</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text-main);margin-top:0.25rem;">Thang điểm 10 chuẩn đại học</div>
          </div>
          <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Quy chế thi</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text-main);margin-top:0.25rem;">Hết giờ tự động nộp bài</div>
          </div>
        </div>

        <!-- Cấu hình số lượng câu và thời gian -->
        <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:14px;padding:1.5rem;margin-bottom:2rem;text-align:left;">
          <label style="display:block;font-size:0.85rem;font-weight:800;color:var(--text-main);margin-bottom:0.75rem;">
            CHỌN QUY MÔ ĐỀ THI:
          </label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <label style="display:flex;align-items:center;gap:0.75rem;padding:0.85rem;background:var(--bg-card);border:2px solid var(--primary-700);border-radius:10px;cursor:pointer;">
              <input type="radio" name="examSize" value="30" checked />
              <div>
                <div style="font-weight:800;color:var(--text-main);">Đề Tiêu Chuẩn: 30 Câu</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">Thời gian: 30 phút (1 phút/câu)</div>
              </div>
            </label>

            <label style="display:flex;align-items:center;gap:0.75rem;padding:0.85rem;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px;cursor:pointer;">
              <input type="radio" name="examSize" value="50" />
              <div>
                <div style="font-weight:800;color:var(--text-main);">Đề Đầy Đủ: 50 Câu</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">Thời gian: 50 phút (Tổng hợp cao)</div>
              </div>
            </label>
          </div>
        </div>

        <button class="btn btn-primary" id="btnStartExamNow" style="padding:0.9rem 2.5rem;font-size:1.05rem;box-shadow:var(--shadow-md);">
          <span>Bắt Đầu Làm Bài Thi</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    </div>
  `;
}

// 2. Màn hình làm bài thi có đếm ngược thời gian
function renderExamInProgress(session) {
  const qIndex = session.currentIndex || 0;
  const currentQ = session.questions[qIndex];
  const total = session.questions.length;
  const selectedOpt = session.userAnswers[currentQ.id];
  const letters = ['A', 'B', 'C', 'D'];
  const isFlagged = (session.flaggedQuestions || []).includes(currentQ.id);

  // Format thời gian đếm ngược
  const minutes = Math.floor(session.remainingSeconds / 60);
  const seconds = session.remainingSeconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isUrgent = session.remainingSeconds < 300; // Còn dưới 5 phút

  return `
    <div style="display:grid;grid-template-columns:1fr 300px;gap:1.5rem;align-items:start;" id="examLayout">
      <!-- Main Exam Question Area -->
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <!-- Exam Top Header -->
        <div class="card" style="display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;">
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <span class="badge badge-primary">Chương ${currentQ.chapterId}</span>
            <span style="font-size:0.9rem;font-weight:800;color:var(--text-main);">Câu ${qIndex + 1} / ${total}</span>
          </div>

          <div style="display:flex;align-items:center;gap:1rem;">
            <button class="btn btn-secondary" id="btnFlagQuestion" data-qid="${currentQ.id}" style="padding:0.4rem 0.75rem;font-size:0.8rem;border-color:${isFlagged ? 'var(--warning)' : 'var(--border-color)'};">
              <svg width="16" height="16" fill="${isFlagged ? 'var(--warning)' : 'none'}" stroke="${isFlagged ? 'var(--warning)' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
              <span>${isFlagged ? 'Đã cắm cờ' : 'Cắm cờ xem lại'}</span>
            </button>
          </div>
        </div>

        <!-- Question Body Card -->
        <div class="card" style="padding:2rem;">
          <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);line-height:1.5;margin-bottom:1.5rem;">
            ${currentQ.question}
          </h3>

          <!-- Options List -->
          <div style="display:flex;flex-direction:column;gap:0.85rem;" id="examOptionsGroup">
            ${currentQ.options.map((opt, idx) => `
              <div class="quiz-option ${selectedOpt === idx ? 'selected' : ''}" data-opt-idx="${idx}">
                <div class="option-letter">${letters[idx]}</div>
                <div style="font-size:1rem;color:var(--text-main);line-height:1.5;padding-top:0.2rem;">${opt}</div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Navigation -->
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2rem;">
            <button class="btn btn-secondary" id="btnPrevExamQ" ${qIndex === 0 ? 'disabled' : ''}>
              ← Câu trước
            </button>

            ${qIndex < total - 1 ? `
              <button class="btn btn-primary" id="btnNextExamQ">
                Câu tiếp theo →
              </button>
            ` : `
              <button class="btn btn-gold" id="btnSubmitExamEarly">
                Nộp Bài Thi
              </button>
            `}
          </div>
        </div>
      </div>

      <!-- Right Panel: Timer & Question Matrix -->
      <div style="display:flex;flex-direction:column;gap:1.25rem;position:sticky;top:90px;">
        <!-- Timer Card -->
        <div class="card" style="text-align:center;padding:1.25rem;border-top:4px solid ${isUrgent ? 'var(--danger)' : 'var(--primary-700)'};">
          <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Thời Gian Còn Lại</span>
          <div style="font-size:2.2rem;font-weight:900;color:${isUrgent ? 'var(--danger)' : 'var(--text-main)'};font-family:monospace;letter-spacing:0.05em;margin:0.25rem 0;" id="examTimerDisplay">
            ${timeFormatted}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);">
            Đã làm: ${Object.keys(session.userAnswers).length} / ${total} câu
          </div>
        </div>

        <!-- Question Matrix Grid -->
        <div class="card" style="padding:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
            <span style="font-size:0.8rem;font-weight:800;text-transform:uppercase;color:var(--text-muted);">Danh Sách Câu</span>
            <span style="font-size:0.75rem;color:var(--warning);font-weight:700;">⚑ ${(session.flaggedQuestions || []).length}</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:0.4rem;max-height:300px;overflow-y:auto;" class="no-scrollbar">
            ${session.questions.map((q, idx) => {
              const answered = session.userAnswers[q.id] !== undefined;
              const flagged = (session.flaggedQuestions || []).includes(q.id);
              const isCurrent = idx === qIndex;

              let bg = 'var(--bg-app)';
              let color = 'var(--text-main)';
              let border = '1px solid var(--border-color)';

              if (answered) {
                bg = 'var(--primary-700)';
                color = '#FFFFFF';
                border = '1px solid var(--primary-700)';
              }
              if (flagged) {
                border = '2px solid var(--warning)';
              }
              if (isCurrent) {
                border = '2px solid #F59E0B';
                if (!answered) bg = 'var(--accent-gold-light)';
              }

              return `
                <button class="btn-jump-q" data-idx="${idx}" style="background:${bg};color:${color};border:${border};border-radius:8px;padding:0.4rem 0;font-size:0.8rem;font-weight:700;cursor:pointer;position:relative;">
                  ${idx + 1}
                  ${flagged ? `<span style="position:absolute;top:1px;right:2px;font-size:0.6rem;color:#F59E0B;">●</span>` : ''}
                </button>
              `;
            }).join('')}
          </div>

          <button class="btn btn-primary" id="btnSubmitExam" style="width:100%;margin-top:1.25rem;padding:0.75rem;font-size:0.95rem;">
            Nộp Bài Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  `;
}

// 3. Màn hình kết quả sau khi nộp bài
function renderExamResult(session) {
  const total = session.questions.length;
  let correctCount = 0;
  const chapterBreakdown = {};

  // Phân tích kết quả
  session.questions.forEach(q => {
    const isCorrect = session.userAnswers[q.id] === q.correctAnswer;
    if (isCorrect) correctCount++;

    if (!chapterBreakdown[q.chapterId]) {
      chapterBreakdown[q.chapterId] = { total: 0, correct: 0 };
    }
    chapterBreakdown[q.chapterId].total++;
    if (isCorrect) chapterBreakdown[q.chapterId].correct++;
  });

  const score = Math.round((correctCount / total) * 10 * 10) / 10;
  const percent = Math.round((correctCount / total) * 100);

  let evaluation = "Cần tiếp tục ôn luyện thêm";
  let evalColor = "var(--danger)";
  if (score >= 8.5) { evaluation = "Xuất Sắc! Nắm rất vững giáo trình"; evalColor = "var(--success)"; }
  else if (score >= 7.0) { evaluation = "Khá Giỏi! Tự tin bước vào phòng thi"; evalColor = "#3B82F6"; }
  else if (score >= 5.0) { evaluation = "Đạt Yêu Cầu Cơ Bản"; evalColor = "var(--warning)"; }

  const letters = ['A', 'B', 'C', 'D'];

  return `
    <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <!-- Score Overview Card -->
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;background:linear-gradient(145deg, var(--bg-card), var(--primary-50));">
        <span class="badge badge-gold" style="font-size:0.8rem;margin-bottom:0.75rem;">KẾT QUẢ BÀI THI</span>
        <h2 style="font-family:var(--font-serif);font-size:2rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
          Đánh Giá Năng Lực Trắc Nghiệm
        </h2>
        <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1.75rem;">
          Hoàn thành vào lúc ${session.submittedAt || new Date().toLocaleString('vi-VN')}
        </p>

        <!-- Big Score Circle -->
        <div style="display:flex;align-items:center;justify-content:center;gap:3rem;flex-wrap:wrap;margin-bottom:2rem;">
          <div style="width:140px;height:140px;border-radius:50%;border:8px solid ${evalColor};display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:var(--shadow-md);">
            <span style="font-size:2.8rem;font-weight:900;color:${evalColor};line-height:1;">${score.toFixed(1)}</span>
            <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);">THANG 10</span>
          </div>

          <div style="text-align:left;display:flex;flex-direction:column;gap:0.5rem;">
            <div style="font-size:1.3rem;font-weight:800;color:${evalColor};">${evaluation}</div>
            <div style="font-size:0.95rem;color:var(--text-main);">
              Số câu trả lời đúng: <strong>${correctCount} / ${total} câu</strong> (${percent}%)
            </div>
            <div style="font-size:0.95rem;color:var(--text-muted);">
              Thời gian hoàn thành: <strong>${session.timeSpent || 'Đúng giờ'}</strong>
            </div>
          </div>
        </div>

        <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="btnReviewWrongExamQuestions">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span>Luyện Lại Các Câu Làm Sai (${total - correctCount} câu)</span>
          </button>
          <button class="btn btn-secondary" id="btnRetakeNewExam">
            Làm Đề Thi Mới Khác
          </button>
        </div>
      </div>

      <!-- Chapter Breakdown Stats -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Phân Tích Chi Tiết Từng Chương Trong Đề Thi
        </h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
          ${Object.keys(chapterBreakdown).map(chId => {
            const data = chapterBreakdown[chId];
            const chMeta = chaptersMeta.find(c => c.id == chId) || { shortTitle: `Chương ${chId}`, number: `Chương ${chId}` };
            const chPercent = Math.round((data.correct / data.total) * 100);

            return `
              <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
                <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);">${chMeta.number}</div>
                <div style="font-size:0.95rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">${chMeta.shortTitle}</div>
                <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.35rem;">
                  <span>Đúng ${data.correct}/${data.total} câu</span>
                  <span style="font-weight:800;color:${chPercent >= 70 ? 'var(--success)' : 'var(--danger)'};">${chPercent}%</span>
                </div>
                <div style="width:100%;height:6px;background:var(--border-color);border-radius:9999px;overflow:hidden;">
                  <div style="width:${chPercent}%;height:100%;background:${chPercent >= 70 ? 'var(--success)' : 'var(--danger)'};border-radius:9999px;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Detailed Review of All Exam Questions -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.5rem;">
          Xem Lại Toàn Bộ Câu Hỏi & Lời Giải Chi Tiết
        </h3>

        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          ${session.questions.map((q, idx) => {
            const userAns = session.userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;

            return `
              <div style="border-bottom:1px solid var(--border-color);padding-bottom:1.5rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                  <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                    ${isCorrect ? '✓ Đúng' : (userAns === undefined ? 'Chưa trả lời' : '✗ Sai')}
                  </span>
                  <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Câu ${idx + 1} • Chương ${q.chapterId}</span>
                </div>

                <div style="font-size:1rem;font-weight:700;color:var(--text-main);margin-bottom:1rem;line-height:1.5;">
                  ${q.question}
                </div>

                <div style="display:grid;grid-template-columns:1fr;gap:0.5rem;margin-bottom:1rem;">
                  ${q.options.map((opt, oIdx) => {
                    let borderCol = 'var(--border-color)';
                    let bgCol = 'var(--bg-app)';
                    if (oIdx === q.correctAnswer) {
                      borderCol = 'var(--success)';
                      bgCol = 'var(--success-light)';
                    } else if (oIdx === userAns) {
                      borderCol = 'var(--danger)';
                      bgCol = 'var(--danger-light)';
                    }

                    return `
                      <div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem 0.85rem;border:1px solid ${borderCol};background:${bgCol};border-radius:8px;font-size:0.9rem;">
                        <span style="font-weight:800;width:20px;">${letters[oIdx]}.</span>
                        <span>${opt}</span>
                      </div>
                    `;
                  }).join('')}
                </div>

                <div style="background:var(--bg-app);border-radius:8px;padding:0.85rem;font-size:0.85rem;line-height:1.6;color:var(--text-main);">
                  <strong>💡 Lời giải chi tiết:</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

  // src/pages/FastTrackView.js


function renderFastTrack(state) {
  const checkedItems = state.fastTrackChecklist || [];

  return `
    <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <!-- Hero Header -->
      <div class="card" style="background:linear-gradient(135deg, #991B1B, #B91C1C);color:#FFFFFF;padding:2.5rem 1.75rem;border-radius:18px;">
        <span class="badge" style="background:rgba(255,255,255,0.2);color:#FFFFFF;margin-bottom:0.75rem;">FAST-TRACK 2026</span>
        <h2 style="font-family:var(--font-serif);font-size:2rem;font-weight:800;margin-bottom:0.5rem;line-height:1.3;">
          Khu Vực Ôn Thi Cấp Tốc (Fast-Track)
        </h2>
        <p style="font-size:0.95rem;opacity:0.92;line-height:1.6;max-width:650px;">
          Tập hợp cô đọng toàn bộ kiến thức bắt buộc phải thuộc lòng trước ngày thi: các cặp khái niệm dễ nhầm lẫn, niên biểu thời gian, danh ngôn kinh điển và checklist ghi nhớ.
        </p>
      </div>

      <!-- Checklist Kiến Thức Cốt Lõi 6 Chương -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              ✓ Checklist Kiến Thức Bắt Buộc Phải Nhớ (6 Chương)
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Tích chọn vào từng mục sau khi bạn đã học thuộc</p>
          </div>
          <span class="badge badge-gold" id="checklistProgressBadge">
            ${checkedItems.length} / ${fastTrackData.mustRememberPoints.length} đã thuộc
          </span>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${fastTrackData.mustRememberPoints.map((item, idx) => {
            const chkId = `chk_must_${idx}`;
            const isChecked = checkedItems.includes(chkId);

            return `
              <div style="display:flex;align-items:flex-start;gap:1rem;padding:1rem;background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;transition:all 0.2s;">
                <input type="checkbox" class="fasttrack-checkbox" id="${chkId}" data-chkid="${chkId}" ${isChecked ? 'checked' : ''} style="width:20px;height:20px;margin-top:0.25rem;cursor:pointer;accent-color:var(--primary-700);" />
                <label for="${chkId}" style="cursor:pointer;flex:1;">
                  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">
                    <span class="badge badge-primary">${item.chapter}</span>
                    <strong style="color:var(--text-main);font-size:0.95rem;">${item.title}</strong>
                  </div>
                  <div style="font-size:0.9rem;color:var(--text-muted);line-height:1.6;">
                    ${item.key}
                  </div>
                </label>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Cặp Khái Niệm Dễ Nhầm Lẫn -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--warning-light);color:var(--warning);display:flex;align-items:center;justify-content:center;font-weight:900;">⚠️</div>
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              Những Cặp Khái Niệm Kinh Điển Dễ Nhầm Lẫn Nhất
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Phân tích bản chất cốt lõi để tránh mất điểm oan uổng</p>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${fastTrackData.confusingPairs.map(pair => `
            <div style="border:1px solid var(--border-color);border-radius:12px;padding:1.25rem;background:var(--bg-card);">
              <h4 style="font-size:1rem;font-weight:800;color:var(--primary-800);margin-bottom:0.5rem;">
                📌 ${pair.pair}
              </h4>
              <p style="font-size:0.9rem;color:var(--text-main);line-height:1.6;margin:0;">
                ${pair.explanation}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Niên Biểu Lịch Sử Không Thể Quên -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--info-light);color:var(--info);display:flex;align-items:center;justify-content:center;font-weight:900;">📅</div>
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              Niên Biểu Lịch Sử: Các Mốc Thời Gian Trọng Điểm
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Sắp xếp theo thứ tự thời gian giúp ghi nhớ mạch lạc</p>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:0.75rem;">
          ${fastTrackData.chronologyTimeline.map(item => `
            <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;background:var(--bg-app);border-radius:10px;border:1px solid var(--border-color);">
              <span class="badge badge-primary" style="font-size:0.75rem;white-space:nowrap;margin-top:0.15rem;">${item.year}</span>
              <span style="font-size:0.85rem;color:var(--text-main);font-weight:600;line-height:1.4;">${item.event}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Danh Ngôn Bất Hủ Của Hồ Chí Minh -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-gold-light);color:var(--accent-gold-dark);display:flex;align-items:center;justify-content:center;font-weight:900;">💬</div>
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              Những Câu Danh Ngôn Bất Hủ & Hoàn Cảnh Xuất Xứ
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Thường xuyên xuất hiện trong các câu hỏi nhận biết và thông hiểu</p>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${fastTrackData.famousQuotes.map(q => `
            <div style="padding:1rem 1.25rem;background:var(--bg-app);border-left:4px solid var(--accent-gold);border-radius:0 10px 10px 0;">
              <div style="font-size:1rem;font-weight:700;color:var(--text-main);line-height:1.5;margin-bottom:0.35rem;font-style:italic;">
                "${q.quote}"
              </div>
              <div style="font-size:0.8rem;color:var(--accent-gold-dark);font-weight:700;">
                📖 Xuất xứ: ${q.context}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

  // src/pages/StatsView.js


function renderStats(state) {
  const history = state.questionHistory || {};
  const answeredIds = Object.keys(history);
  const totalAnswered = answeredIds.length;

  let totalCorrect = 0;
  let totalWrong = 0;
  const chapterStats = {};

  // Khởi tạo stats 6 chương
  chaptersMeta.forEach(c => {
    chapterStats[c.id] = { answered: 0, correct: 0, total: 100 };
  });

  answeredIds.forEach(id => {
    const q = allQuestions.find(item => item.id === id);
    const entry = history[id];
    if (q) {
      if (entry.correctCount > 0) totalCorrect++;
      else totalWrong++;

      if (chapterStats[q.chapterId]) {
        chapterStats[q.chapterId].answered++;
        if (entry.correctCount > 0) chapterStats[q.chapterId].correct++;
      }
    }
  });

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const examHistory = state.examHistory || [];

  return `
    <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <div class="card">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
          Thống Kê Hoạt Động & Tiến Độ Ôn Tập
        </h2>
        <p style="font-size:0.85rem;color:var(--text-muted);">
          Dữ liệu được lưu trữ tự động trong trình duyệt của bạn (LocalStorage)
        </p>
      </div>

      <!-- Overview KPI Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;">
        <div class="card" style="text-align:center;padding:1.5rem;">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Số câu đã làm</div>
          <div style="font-size:2rem;font-weight:900;color:var(--text-main);margin-top:0.25rem;">
            ${totalAnswered} <span style="font-size:1rem;color:var(--text-muted);font-weight:500;">/ ${allQuestions.length}</span>
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Bao quát ${Math.round((totalAnswered / allQuestions.length) * 100)}% ngân hàng</div>
        </div>

        <div class="card" style="text-align:center;padding:1.5rem;border-bottom:4px solid var(--success);">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Số câu đúng</div>
          <div style="font-size:2rem;font-weight:900;color:var(--success);margin-top:0.25rem;">
            ${totalCorrect}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Tỷ lệ: ${accuracy}%</div>
        </div>

        <div class="card" style="text-align:center;padding:1.5rem;border-bottom:4px solid var(--danger);">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Số câu làm sai</div>
          <div style="font-size:2rem;font-weight:900;color:var(--danger);margin-top:0.25rem;">
            ${totalWrong}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Cần rèn luyện lại</div>
        </div>

        <div class="card" style="text-align:center;padding:1.5rem;border-bottom:4px solid var(--accent-gold);">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Lượt thi thử</div>
          <div style="font-size:2rem;font-weight:900;color:var(--accent-gold);margin-top:0.25rem;">
            ${examHistory.length}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Bài kiểm tra hoàn thành</div>
        </div>
      </div>

      <!-- Chapter Accuracy Progress Bars -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Tỷ Lệ Chính Xác Theo Từng Chương (Phát hiện điểm yếu)
        </h3>
        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          ${chaptersMeta.map(c => {
            const st = chapterStats[c.id];
            const chAcc = st.answered > 0 ? Math.round((st.correct / st.answered) * 100) : 0;
            const progress = Math.round((st.answered / st.total) * 100);

            return `
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;font-size:0.9rem;">
                  <span style="font-weight:700;color:var(--text-main);">${c.number}: ${c.shortTitle}</span>
                  <span style="font-weight:800;color:${chAcc >= 75 ? 'var(--success)' : chAcc >= 50 ? 'var(--accent-gold)' : 'var(--text-muted)'};">
                    ${st.answered > 0 ? `${chAcc}% đúng (${st.correct}/${st.answered} câu)` : 'Chưa luyện câu nào'}
                  </span>
                </div>
                <div style="width:100%;height:10px;background:var(--border-color);border-radius:9999px;overflow:hidden;display:flex;">
                  <div style="width:${progress}%;height:100%;background:${c.color};border-radius:9999px;transition:width 0.4s ease;"></div>
                </div>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.2rem;">
                  Đã luyện ${st.answered}/100 câu (${progress}%)
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Exam History Table -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Nhật Ký Thi Thử Chi Tiết
        </h3>

        ${examHistory.length > 0 ? `
          <div style="overflow-x:auto;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Thời Gian</th>
                  <th>Số Câu</th>
                  <th>Câu Đúng</th>
                  <th>Điểm Thang 10</th>
                  <th>Đánh Giá</th>
                </tr>
              </thead>
              <tbody>
                ${examHistory.map(e => `
                  <tr>
                    <td>${e.date}</td>
                    <td>${e.totalQuestions} câu</td>
                    <td style="font-weight:700;color:var(--success);">${e.correctCount} / ${e.totalQuestions}</td>
                    <td><span class="badge ${e.score >= 8 ? 'badge-success' : e.score >= 5 ? 'badge-gold' : 'badge-danger'}">${e.score.toFixed(1)}</span></td>
                    <td>${e.score >= 8.5 ? 'Xuất sắc' : e.score >= 7.0 ? 'Khá giỏi' : e.score >= 5.0 ? 'Đạt' : 'Cần ôn thêm'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <p style="text-align:center;padding:1.5rem;color:var(--text-muted);font-size:0.9rem;">
            Chưa có bài thi nào được ghi nhận. Hãy vào phòng Thi Thử để kiểm tra năng lực.
          </p>
        `}
      </div>

      <!-- Reset Data Action -->
      <div class="card" style="border:1px solid var(--danger-light);background:var(--danger-light);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:1rem;font-weight:800;color:var(--danger);margin-bottom:0.25rem;">
            Xóa Lịch Sử & Đặt Lại Tiến Độ
          </h4>
          <p style="font-size:0.85rem;color:var(--text-main);">
            Thao tác này sẽ xóa toàn bộ số câu đã làm, câu đánh dấu và lịch sử thi thử trên trình duyệt này.
          </p>
        </div>
        <button class="btn btn-secondary" id="btnResetAllStats" style="border-color:var(--danger);color:var(--danger);background:var(--bg-card);font-size:0.85rem;">
          Đặt Lại Dữ Liệu
        </button>
      </div>
    </div>
  `;
}

  // src/pages/SettingsView.js
function renderSettings(state) {
  return `
    <div style="max-width:750px;margin:0 auto;display:flex;flex-direction:column;gap:1.75rem;">
      <div class="card">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
          Cài Đặt Ứng Dụng & Dữ Liệu
        </h2>
        <p style="font-size:0.85rem;color:var(--text-muted);">
          Tùy chỉnh trải nghiệm học tập và sao lưu tiến độ cá nhân
        </p>
      </div>

      <!-- Appearance Settings -->
      <div class="card">
        <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          🎨 Giao Diện & Hiển Thị
        </h3>
        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-weight:700;color:var(--text-main);">Chế độ Sáng / Tối (Dark Mode)</div>
              <div style="font-size:0.8rem;color:var(--text-muted);">Bảo vệ mắt khi ôn thi vào ban đêm</div>
            </div>
            <select id="settingThemeSelect" style="padding:0.5rem 0.85rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-weight:600;font-size:0.85rem;">
              <option value="light" ${state.theme === 'light' ? 'selected' : ''}>Giao diện Sáng (Mặc định)</option>
              <option value="dark" ${state.theme === 'dark' ? 'selected' : ''}>Giao diện Tối (Dark Mode)</option>
            </select>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border-color);padding-top:1.25rem;">
            <div>
              <div style="font-weight:700;color:var(--text-main);">Cỡ chữ đọc lý thuyết</div>
              <div style="font-size:0.8rem;color:var(--text-muted);">Điều chỉnh kích thước văn bản khi đọc bài</div>
            </div>
            <select id="settingFontSizeSelect" style="padding:0.5rem 0.85rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-weight:600;font-size:0.85rem;">
              <option value="medium" ${state.fontSize === 'medium' ? 'selected' : ''}>Vừa vặn (Tiêu chuẩn)</option>
              <option value="large" ${state.fontSize === 'large' ? 'selected' : ''}>Lớn (Dễ đọc)</option>
              <option value="small" ${state.fontSize === 'small' ? 'selected' : ''}>Nhỏ (Nhiều nội dung)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Backup & Restore -->
      <div class="card">
        <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          💾 Sao Lưu & Phục Hồi Dữ Liệu Học Tập
        </h3>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1.25rem;line-height:1.5;">
          Bạn có thể xuất toàn bộ tiến độ (câu đã làm, điểm thi, câu đánh dấu) thành file JSON để lưu về máy tính hoặc chuyển sang điện thoại.
        </p>

        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
          <button class="btn btn-secondary" id="btnExportData">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>Xuất Dữ Liệu (Backup JSON)</span>
          </button>

          <label class="btn btn-secondary" style="cursor:pointer;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
            <span>Nhập Dữ Liệu (Restore)</span>
            <input type="file" id="importFileInput" accept=".json" style="display:none;" />
          </label>
        </div>
      </div>

      <!-- About & Academic Source -->
      <div class="card" style="background:var(--bg-app);border-left:4px solid var(--primary-700);">
        <h4 style="font-size:0.95rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">
          Tài Liệu Nguồn & Bản Quyền Học Thuật
        </h4>
        <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;margin-bottom:0.75rem;">
          Ứng dụng được biên soạn dựa trên <strong>Giáo trình Tư tưởng Hồ Chí Minh</strong> (Dành cho bậc đại học hệ không chuyên lý luận chính trị) - Tái bản có sửa chữa, bổ sung theo Văn kiện Đại hội lần thứ XIV của Đảng, Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội, 2026.
        </p>
        <p style="font-size:0.8rem;color:var(--text-muted);">
          Phiên bản hệ thống: <strong>v2.0.26 (E-Learning University Edition)</strong>.
        </p>
      </div>
    </div>
  `;
}

  // src/app.js
















// App State
let state = getStoredState();

// UI Navigation State
let currentRoute = 'dashboard';
let currentTheoryChapter = 1;
let theorySearchQuery = '';
let currentFlashcardChapter = 'all';
let currentFlashcardIndex = 0;
let isFlashcardFlipped = false;

let qbFilterChapter = 'all';
let qbFilterLevel = 'all';
let qbSearchQuery = '';
let qbPage = 1;

// Session States
let practiceSession = null;
let examSession = null;
let examTimerInterval = null;

// Khởi chạy ứng dụng
function initApp() {
  applyTheme(state.theme);
  applyFontSize(state.fontSize);
  renderApp();
  setupGlobalListeners();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  saveStoredState(state);
}

function applyFontSize(size) {
  const root = document.documentElement;
  if (size === 'small') root.style.fontSize = '14px';
  else if (size === 'large') root.style.fontSize = '18px';
  else root.style.fontSize = '16px';
  state.fontSize = size;
  saveStoredState(state);
}

// Render toàn bộ layout
function renderApp() {
  const sidebarContainer = document.getElementById('sidebarSlot');
  const headerContainer = document.getElementById('headerSlot');
  const mainContent = document.getElementById('mainContentSlot');

  sidebarContainer.innerHTML = renderSidebar(currentRoute);
  headerContainer.innerHTML = renderHeader(state);

  // Render view tương ứng với route
  let viewHtml = '';
  switch (currentRoute) {
    case 'dashboard':
      viewHtml = renderDashboard(state);
      break;
    case 'theory':
      viewHtml = renderTheory(state, currentTheoryChapter, theorySearchQuery);
      break;
    case 'flashcards':
      viewHtml = renderFlashcards(state, currentFlashcardChapter, currentFlashcardIndex, isFlashcardFlipped);
      break;
    case 'questions':
      viewHtml = renderQuestionBank(state, qbFilterChapter, qbFilterLevel, qbSearchQuery, qbPage);
      break;
    case 'practice':
      viewHtml = renderPractice(state, practiceSession);
      break;
    case 'exam':
      viewHtml = renderExam(state, examSession);
      break;
    case 'fasttrack':
      viewHtml = renderFastTrack(state);
      break;
    case 'stats':
      viewHtml = renderStats(state);
      break;
    case 'settings':
      viewHtml = renderSettings(state);
      break;
    default:
      viewHtml = renderDashboard(state);
  }

  mainContent.innerHTML = viewHtml;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  bindRouteSpecificEvents();
}

// Bắt sự kiện dùng chung
function setupGlobalListeners() {
  // Navigation tabs in Sidebar
  document.addEventListener('click', (e) => {
    const navItem = e.target.closest('.nav-item');
    if (navItem) {
      const route = navItem.dataset.route;
      if (route) {
        currentRoute = route;
        // Đóng mobile sidebar nếu đang mở
        const sidebar = document.getElementById('appSidebar');
        if (sidebar) sidebar.classList.remove('open');
        renderApp();
      }
    }
  });

  // Mobile menu toggle
  document.addEventListener('click', (e) => {
    if (e.target.closest('#mobileMenuBtn')) {
      const sidebar = document.getElementById('appSidebar');
      if (sidebar) sidebar.classList.toggle('open');
    }
  });

  // Theme Toggle Button
  document.addEventListener('click', (e) => {
    if (e.target.closest('#themeToggleBtn')) {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      renderApp();
    }
  });

  // Global search input
  document.addEventListener('keyup', (e) => {
    if (e.target.id === 'globalSearchInput' && e.key === 'Enter') {
      const val = e.target.value.trim();
      if (val) {
        currentRoute = 'questions';
        qbSearchQuery = val;
        qbPage = 1;
        renderApp();
      }
    }
  });
}

// Gán sự kiện cho từng view riêng biệt
function bindRouteSpecificEvents() {
  // --- DASHBOARD EVENTS ---
  const btnContinue = document.getElementById('btnContinueStudy');
  if (btnContinue) {
    btnContinue.onclick = () => { currentRoute = 'theory'; renderApp(); };
  }
  const btnQuick = document.getElementById('btnQuickPractice');
  if (btnQuick) {
    btnQuick.onclick = () => { startPracticeWithCount(20, 'all', 'Luyện Nhanh 20 Câu Ngẫu Nhiên'); };
  }
  const btnFast = document.getElementById('btnGoFastTrack');
  if (btnFast) {
    btnFast.onclick = () => { currentRoute = 'fasttrack'; renderApp(); };
  }
  const btnStartExam = document.getElementById('btnStartNewExam') || document.getElementById('btnEmptyExamStart');
  if (btnStartExam) {
    btnStartExam.onclick = () => { currentRoute = 'exam'; examSession = null; renderApp(); };
  }

  // Dashboard chapter card buttons
  document.querySelectorAll('.btn-read-theory').forEach(btn => {
    btn.onclick = () => {
      currentTheoryChapter = parseInt(btn.dataset.chapter, 10);
      currentRoute = 'theory';
      renderApp();
    };
  });

  document.querySelectorAll('.btn-practice-chapter').forEach(btn => {
    btn.onclick = () => {
      const chId = parseInt(btn.dataset.chapter, 10);
      startPracticeWithCount(100, chId, `Luyện Toàn Bộ 100 Câu Chương ${chId}`);
    };
  });

  // --- THEORY EVENTS ---
  document.querySelectorAll('.btn-chapter-tab').forEach(btn => {
    btn.onclick = () => {
      currentTheoryChapter = parseInt(btn.dataset.chapter, 10);
      theorySearchQuery = '';
      renderApp();
    };
  });

  document.querySelectorAll('.btn-switch-chap').forEach(btn => {
    btn.onclick = () => {
      currentTheoryChapter = parseInt(btn.dataset.chapter, 10);
      renderApp();
    };
  });

  document.querySelectorAll('.btn-practice-this-chap').forEach(btn => {
    btn.onclick = () => {
      const chId = parseInt(btn.dataset.chapter, 10);
      startPracticeWithCount(100, chId, `Luyện 100 Câu Trắc Nghiệm Chương ${chId}`);
    };
  });

  const btnCompleteChapter = document.querySelector('.btn-toggle-complete-chapter');
  if (btnCompleteChapter) {
    btnCompleteChapter.onclick = () => {
      const chId = parseInt(btnCompleteChapter.dataset.chapter, 10);
      toggleTheoryComplete(chId);
      state = getStoredState();
      renderApp();
    };
  }

  // Collapse / Expand Section in Theory
  document.querySelectorAll('.section-header').forEach(header => {
    header.onclick = () => {
      const body = header.nextElementSibling;
      if (body) {
        body.style.display = body.style.display === 'none' ? 'block' : 'none';
        const icon = header.querySelector('.chevron-icon');
        if (icon) {
          icon.style.transform = body.style.display === 'none' ? 'rotate(-90deg)' : 'rotate(0deg)';
        }
      }
    };
  });

  const btnToggleAll = document.getElementById('btnToggleAllSections');
  if (btnToggleAll) {
    btnToggleAll.onclick = () => {
      const bodies = document.querySelectorAll('.section-body');
      const isAnyOpen = Array.from(bodies).some(b => b.style.display !== 'none');
      bodies.forEach(b => { b.style.display = isAnyOpen ? 'none' : 'block'; });
      document.getElementById('toggleAllText').innerText = isAnyOpen ? 'Mở rộng tất cả' : 'Thu gọn tất cả';
    };
  }

  // --- FLASHCARD EVENTS ---
  const fcInner = document.getElementById('flashcardInner');
  const btnFlip = document.getElementById('btnFlipCard');
  if (fcInner) {
    fcInner.onclick = () => { isFlashcardFlipped = !isFlashcardFlipped; renderApp(); };
  }
  if (btnFlip) {
    btnFlip.onclick = () => { isFlashcardFlipped = !isFlashcardFlipped; renderApp(); };
  }

  const btnPrevCard = document.getElementById('btnPrevCard');
  if (btnPrevCard) {
    btnPrevCard.onclick = () => {
      isFlashcardFlipped = false;
      currentFlashcardIndex = Math.max(0, currentFlashcardIndex - 1);
      renderApp();
    };
  }

  const btnNextCard = document.getElementById('btnNextCard');
  if (btnNextCard) {
    btnNextCard.onclick = () => {
      isFlashcardFlipped = false;
      currentFlashcardIndex += 1;
      renderApp();
    };
  }

  const fcSelect = document.getElementById('flashcardChapterSelect');
  if (fcSelect) {
    fcSelect.onchange = (e) => {
      currentFlashcardChapter = e.target.value;
      currentFlashcardIndex = 0;
      isFlashcardFlipped = false;
      renderApp();
    };
  }

  const btnShuffle = document.getElementById('btnShuffleFlashcards');
  if (btnShuffle) {
    btnShuffle.onclick = () => {
      currentFlashcardIndex = 0;
      isFlashcardFlipped = false;
      renderApp();
    };
  }

  const btnMarkMastered = document.getElementById('btnMarkMastered');
  if (btnMarkMastered) {
    btnMarkMastered.onclick = () => {
      const currentList = allFlashcards;
      const card = currentList[currentFlashcardIndex];
      if (card) {
        if (!state.flashcardProgress.mastered.includes(card.id)) {
          state.flashcardProgress.mastered.push(card.id);
        }
        state.flashcardProgress.reviewing = state.flashcardProgress.reviewing.filter(id => id !== card.id);
        saveStoredState(state);
        isFlashcardFlipped = false;
        currentFlashcardIndex = Math.min(currentFlashcardIndex + 1, currentList.length - 1);
        renderApp();
      }
    };
  }

  const btnMarkReview = document.getElementById('btnMarkReview');
  if (btnMarkReview) {
    btnMarkReview.onclick = () => {
      const currentList = allFlashcards;
      const card = currentList[currentFlashcardIndex];
      if (card) {
        if (!state.flashcardProgress.reviewing.includes(card.id)) {
          state.flashcardProgress.reviewing.push(card.id);
        }
        state.flashcardProgress.mastered = state.flashcardProgress.mastered.filter(id => id !== card.id);
        saveStoredState(state);
        isFlashcardFlipped = false;
        currentFlashcardIndex = Math.min(currentFlashcardIndex + 1, currentList.length - 1);
        renderApp();
      }
    };
  }

  // --- QUESTION BANK EVENTS ---
  const qbChap = document.getElementById('qbChapterFilter');
  if (qbChap) {
    qbChap.onchange = (e) => { qbFilterChapter = e.target.value; qbPage = 1; renderApp(); };
  }
  const qbLvl = document.getElementById('qbLevelFilter');
  if (qbLvl) {
    qbLvl.onchange = (e) => { qbFilterLevel = e.target.value; qbPage = 1; renderApp(); };
  }
  const qbSearch = document.getElementById('qbSearchInput');
  if (qbSearch) {
    qbSearch.oninput = (e) => { qbSearchQuery = e.target.value; qbPage = 1; renderApp(); };
  }

  document.querySelectorAll('.btn-toggle-explain').forEach(btn => {
    btn.onclick = () => {
      const box = document.getElementById(`explain_${btn.dataset.qid}`);
      if (box) {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
      }
    };
  });

  document.querySelectorAll('.btn-bookmark-question').forEach(btn => {
    btn.onclick = () => {
      toggleQuestionBookmark(btn.dataset.qid);
      state = getStoredState();
      renderApp();
    };
  });

  document.querySelectorAll('.btn-qb-page').forEach(btn => {
    btn.onclick = () => {
      qbPage = parseInt(btn.dataset.page, 10);
      renderApp();
    };
  });

  const btnPracticeFiltered = document.getElementById('btnPracticeFiltered');
  if (btnPracticeFiltered) {
    btnPracticeFiltered.onclick = () => {
      startPracticeFiltered();
    };
  }

  // --- PRACTICE SESSION EVENTS ---
  document.querySelectorAll('.practice-mode-card').forEach(card => {
    card.onclick = () => {
      const mode = card.dataset.mode;
      handlePracticeModeSelect(mode);
    };
  });

  const btnStartPractice = document.getElementById('btnStartPracticeSession');
  if (btnStartPractice) {
    btnStartPractice.onclick = () => {
      const chapVal = document.getElementById('practiceChapterSelect').value;
      const countVal = parseInt(document.getElementById('practiceCountSelect').value, 10);
      startPracticeWithCount(countVal, chapVal, `Luyện Tập ${countVal} Câu ${chapVal === 'all' ? 'Tổng Hợp' : `Chương ${chapVal}`}`);
    };
  }

  if (practiceSession) {
    const btnExit = document.getElementById('btnExitPractice');
    if (btnExit) {
      btnExit.onclick = () => { practiceSession = null; renderApp(); };
    }

    const btnBookmark = document.getElementById('btnPracticeBookmark');
    if (btnBookmark) {
      btnBookmark.onclick = () => {
        toggleQuestionBookmark(btnBookmark.dataset.qid);
        state = getStoredState();
        renderApp();
      };
    }

    // Click chọn phương án trong Practice
    document.querySelectorAll('#practiceOptionsGroup .quiz-option').forEach(optEl => {
      optEl.onclick = () => {
        const selectedIdx = parseInt(optEl.dataset.optIdx, 10);
        const currentQ = practiceSession.questions[practiceSession.currentIndex];
        if (practiceSession.userAnswers[currentQ.id] === undefined) {
          practiceSession.userAnswers[currentQ.id] = selectedIdx;
          const isCorrect = selectedIdx === currentQ.correctAnswer;
          recordQuestionAnswer(currentQ.id, isCorrect, selectedIdx);
          state = getStoredState();
          renderApp();
        }
      };
    });

    const btnPrevQ = document.getElementById('btnPrevPracticeQ');
    if (btnPrevQ) {
      btnPrevQ.onclick = () => {
        practiceSession.currentIndex = Math.max(0, practiceSession.currentIndex - 1);
        renderApp();
      };
    }

    const btnNextQ = document.getElementById('btnNextPracticeQ');
    if (btnNextQ) {
      btnNextQ.onclick = () => {
        practiceSession.currentIndex = Math.min(practiceSession.questions.length - 1, practiceSession.currentIndex + 1);
        renderApp();
      };
    }

    const btnFinish = document.getElementById('btnFinishPractice');
    if (btnFinish) {
      btnFinish.onclick = () => {
        alert('Chúc mừng bạn đã hoàn thành phiên luyện tập!');
        practiceSession = null;
        currentRoute = 'stats';
        renderApp();
      };
    }
  }

  // --- EXAM EVENTS ---
  const btnStartExamNow = document.getElementById('btnStartExamNow');
  if (btnStartExamNow) {
    btnStartExamNow.onclick = () => {
      const selectedRadio = document.querySelector('input[name="examSize"]:checked');
      const count = selectedRadio ? parseInt(selectedRadio.value, 10) : 30;
      startExamSession(count);
    };
  }

  if (examSession && !examSession.isSubmitted) {
    // Click chọn phương án thi
    document.querySelectorAll('#examOptionsGroup .quiz-option').forEach(optEl => {
      optEl.onclick = () => {
        const selectedIdx = parseInt(optEl.dataset.optIdx, 10);
        const currentQ = examSession.questions[examSession.currentIndex];
        examSession.userAnswers[currentQ.id] = selectedIdx;
        renderApp();
      };
    });

    const btnFlag = document.getElementById('btnFlagQuestion');
    if (btnFlag) {
      btnFlag.onclick = () => {
        const qid = btnFlag.dataset.qid;
        if (!examSession.flaggedQuestions) examSession.flaggedQuestions = [];
        const idx = examSession.flaggedQuestions.indexOf(qid);
        if (idx > -1) examSession.flaggedQuestions.splice(idx, 1);
        else examSession.flaggedQuestions.push(qid);
        renderApp();
      };
    }

    const btnPrevExam = document.getElementById('btnPrevExamQ');
    if (btnPrevExam) {
      btnPrevExam.onclick = () => {
        examSession.currentIndex = Math.max(0, examSession.currentIndex - 1);
        renderApp();
      };
    }

    const btnNextExam = document.getElementById('btnNextExamQ');
    if (btnNextExam) {
      btnNextExam.onclick = () => {
        examSession.currentIndex = Math.min(examSession.questions.length - 1, examSession.currentIndex + 1);
        renderApp();
      };
    }

    // Jump question from matrix
    document.querySelectorAll('.btn-jump-q').forEach(btn => {
      btn.onclick = () => {
        examSession.currentIndex = parseInt(btn.dataset.idx, 10);
        renderApp();
      };
    });

    const btnSubmit = document.getElementById('btnSubmitExam') || document.getElementById('btnSubmitExamEarly');
    if (btnSubmit) {
      btnSubmit.onclick = () => {
        const answeredCount = Object.keys(examSession.userAnswers).length;
        const total = examSession.questions.length;
        const unans = total - answeredCount;
        const confirmMsg = unans > 0 
          ? `Bạn còn ${unans} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay bây giờ không?`
          : 'Bạn đã hoàn thành tất cả câu hỏi. Bạn có chắc chắn muốn nộp bài chấm điểm?';
        
        if (confirm(confirmMsg)) {
          finishExamSession();
        }
      };
    }
  }

  // Exam Result Buttons
  const btnRetake = document.getElementById('btnRetakeNewExam');
  if (btnRetake) {
    btnRetake.onclick = () => {
      examSession = null;
      renderApp();
    };
  }

  const btnReviewWrong = document.getElementById('btnReviewWrongExamQuestions');
  if (btnReviewWrong && examSession) {
    btnReviewWrong.onclick = () => {
      const wrongList = examSession.questions.filter(q => examSession.userAnswers[q.id] !== q.correctAnswer);
      if (wrongList.length === 0) {
        alert('Tuyệt vời! Bạn không làm sai câu nào trong bài thi vừa rồi!');
      } else {
        currentRoute = 'practice';
        practiceSession = {
          title: `Luyện Lại ${wrongList.length} Câu Làm Sai Trong Bài Thi`,
          questions: shuffleArray([...wrongList]),
          currentIndex: 0,
          userAnswers: {}
        };
        renderApp();
      }
    };
  }

  // --- FAST-TRACK EVENTS ---
  document.querySelectorAll('.fasttrack-checkbox').forEach(chk => {
    chk.onchange = (e) => {
      const chkId = e.target.dataset.chkid;
      if (!state.fastTrackChecklist) state.fastTrackChecklist = [];
      const idx = state.fastTrackChecklist.indexOf(chkId);
      if (e.target.checked && idx === -1) state.fastTrackChecklist.push(chkId);
      else if (!e.target.checked && idx > -1) state.fastTrackChecklist.splice(idx, 1);
      saveStoredState(state);
      const badge = document.getElementById('checklistProgressBadge');
      if (badge) badge.innerText = `${state.fastTrackChecklist.length} đã thuộc`;
    };
  });

  // --- STATS EVENTS ---
  const btnReset = document.getElementById('btnResetAllStats');
  if (btnReset) {
    btnReset.onclick = () => {
      if (confirm('CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ tiến độ học tập và lịch sử thi thử. Bạn có chắc chắn không?')) {
        state = resetAllData();
        alert('Đã đặt lại dữ liệu thành công.');
        renderApp();
      }
    };
  }

  // --- SETTINGS EVENTS ---
  const themeSel = document.getElementById('settingThemeSelect');
  if (themeSel) {
    themeSel.onchange = (e) => { applyTheme(e.target.value); renderApp(); };
  }
  const fontSel = document.getElementById('settingFontSizeSelect');
  if (fontSel) {
    fontSel.onchange = (e) => { applyFontSize(e.target.value); renderApp(); };
  }
  const btnExport = document.getElementById('btnExportData');
  if (btnExport) {
    btnExport.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `hcm_learning_backup_${Date.now()}.json`);
      document.body.appendChild(dlAnchor);
      dlAnchor.click();
      dlAnchor.remove();
    };
  }
  const importFile = document.getElementById('importFileInput');
  if (importFile) {
    importFile.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const imported = JSON.parse(evt.target.result);
            state = { ...state, ...imported };
            saveStoredState(state);
            alert('Đã khôi phục dữ liệu học tập thành công!');
            renderApp();
          } catch (err) {
            alert('File JSON không hợp lệ.');
          }
        };
        reader.readAsText(file);
      }
    };
  }
}

// Helper: Bắt đầu luyện tập với số lượng câu
function startPracticeWithCount(count, chapterVal, title) {
  let pool = [];
  if (chapterVal === 'all') {
    pool = [...allQuestions];
  } else {
    pool = questionsByChapter[chapterVal] || allQuestions;
  }

  const selected = shuffleArray(pool).slice(0, count);
  currentRoute = 'practice';
  practiceSession = {
    title: title,
    questions: selected,
    currentIndex: 0,
    userAnswers: {}
  };
  renderApp();
}

function handlePracticeModeSelect(mode) {
  const history = state.questionHistory || {};
  let pool = [];
  let title = '';

  if (mode === 'random') {
    pool = [...allQuestions];
    title = 'Luyện Toàn Bộ 600 Câu Ngẫu Nhiên';
  } else if (mode === 'wrong') {
    pool = allQuestions.filter(q => history[q.id] && history[q.id].correctCount === 0);
    title = `Luyện ${pool.length} Câu Đã Làm Sai`;
    if (pool.length === 0) {
      alert('Tuyệt vời! Hiện tại bạn chưa có câu hỏi nào bị sai.');
      return;
    }
  } else if (mode === 'bookmarked') {
    pool = allQuestions.filter(q => (state.bookmarkedQuestions || []).includes(q.id));
    title = `Luyện ${pool.length} Câu Đã Đánh Dấu`;
    if (pool.length === 0) {
      alert('Bạn chưa đánh dấu câu hỏi nào. Hãy đánh dấu câu hỏi khó khi đọc ngân hàng câu hỏi.');
      return;
    }
  } else if (mode === 'unattempted') {
    pool = allQuestions.filter(q => !history[q.id]);
    title = `Luyện ${pool.length} Câu Chưa Từng Làm`;
    if (pool.length === 0) {
      alert('Bạn đã hoàn thành tất cả 600 câu hỏi trong ngân hàng!');
      return;
    }
  }

  const count = Math.min(pool.length, 30);
  currentRoute = 'practice';
  practiceSession = {
    title: title,
    questions: shuffleArray(pool).slice(0, count),
    currentIndex: 0,
    userAnswers: {}
  };
  renderApp();
}

function startPracticeFiltered() {
  const query = (qbSearchQuery || '').trim().toLowerCase();
  let pool = allQuestions.filter(q => {
    if (qbFilterChapter !== 'all' && q.chapterId != qbFilterChapter) return false;
    if (qbFilterLevel !== 'all' && q.level !== qbFilterLevel) return false;
    if (query) {
      const matchQ = q.question.toLowerCase().includes(query);
      const matchOpts = q.options.some(opt => opt.toLowerCase().includes(query));
      if (!matchQ && !matchOpts) return false;
    }
    return true;
  });

  if (pool.length === 0) {
    alert('Không có câu hỏi nào khớp với bộ lọc hiện tại.');
    return;
  }

  currentRoute = 'practice';
  practiceSession = {
    title: `Luyện Bộ Lọc (${pool.length} câu)`,
    questions: shuffleArray(pool),
    currentIndex: 0,
    userAnswers: {}
  };
  renderApp();
}

// Helper: Bắt đầu bài thi thử
function startExamSession(count) {
  // Lấy câu hỏi cân đối đều từ 6 chương
  const perChapter = Math.ceil(count / 6);
  let selectedPool = [];

  for (let ch = 1; ch <= 6; ch++) {
    const chQuestions = questionsByChapter[ch] || [];
    const picked = shuffleArray(chQuestions).slice(0, perChapter);
    selectedPool.push(...picked);
  }

  selectedPool = shuffleArray(selectedPool).slice(0, count);

  currentRoute = 'exam';
  examSession = {
    questions: selectedPool,
    currentIndex: 0,
    userAnswers: {},
    flaggedQuestions: [],
    isSubmitted: false,
    durationSeconds: count * 60, // 1 phút/câu
    remainingSeconds: count * 60,
    startTime: Date.now()
  };

  // Khởi động đồng hồ đếm ngược
  if (examTimerInterval) clearInterval(examTimerInterval);
  examTimerInterval = setInterval(() => {
    if (examSession && !examSession.isSubmitted) {
      examSession.remainingSeconds -= 1;
      const timerDisplay = document.getElementById('examTimerDisplay');
      if (timerDisplay) {
        const m = Math.floor(examSession.remainingSeconds / 60);
        const s = examSession.remainingSeconds % 60;
        timerDisplay.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        if (examSession.remainingSeconds < 300) {
          timerDisplay.style.color = 'var(--danger)';
        }
      }

      if (examSession.remainingSeconds <= 0) {
        clearInterval(examTimerInterval);
        alert('Hết giờ làm bài! Hệ thống đang tự động nộp bài thi của bạn.');
        finishExamSession();
      }
    }
  }, 1000);

  renderApp();
}

// Kết thúc bài thi và tính điểm
function finishExamSession() {
  if (examTimerInterval) clearInterval(examTimerInterval);
  examSession.isSubmitted = true;
  examSession.submittedAt = new Date().toLocaleString('vi-VN');

  const timeUsedSeconds = examSession.durationSeconds - examSession.remainingSeconds;
  const usedMin = Math.floor(timeUsedSeconds / 60);
  const usedSec = timeUsedSeconds % 60;
  examSession.timeSpent = `${usedMin} phút ${usedSec} giây`;

  // Tính điểm
  let correct = 0;
  examSession.questions.forEach(q => {
    const isCorrect = examSession.userAnswers[q.id] === q.correctAnswer;
    if (isCorrect) correct++;
    // Ghi nhận câu đã làm vào history
    if (examSession.userAnswers[q.id] !== undefined) {
      recordQuestionAnswer(q.id, isCorrect, examSession.userAnswers[q.id]);
    }
  });

  const total = examSession.questions.length;
  const score = Math.round((correct / total) * 10 * 10) / 10;

  // Lưu kết quả bài thi vào state
  saveExamResult({
    score: score,
    totalQuestions: total,
    correctCount: correct,
    timeSpent: examSession.timeSpent
  });

  state = getStoredState();
  renderApp();
}

// Helper xáo trộn mảng Fisher-Yates
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


  // Tự động khởi động khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
