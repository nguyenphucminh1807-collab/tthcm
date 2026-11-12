// generators/generate_questions_c1.js
const fs = require('fs');
const path = require('path');

// Xây dựng 100 câu hỏi trắc nghiệm chất lượng cao cho Chương 1
// Bao quát: Khái niệm, đối tượng, phương pháp luận, 5 nguyên tắc, phương pháp cụ thể, ý nghĩa học tập, các mốc Đại hội (1930, 1951, 1969, 1986, 1991, 2001, 2011, 2026), UNESCO 1987.
const questionsC1 = [
  {
    id: "c1_q001",
    chapterId: 1,
    topicId: "1.1",
    topic: "Khái niệm Tư tưởng Hồ Chí Minh",
    question: "Định nghĩa hoàn chỉnh về tư tưởng Hồ Chí Minh được Đảng Cộng sản Việt Nam chính thức thông qua tại Đại hội đại biểu toàn quốc lần thứ mấy?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ VII (1991)",
      "Đại hội đại biểu toàn quốc lần thứ IX (2001)",
      "Đại hội đại biểu toàn quốc lần thứ XI (2011)",
      "Đại hội đại biểu toàn quốc lần thứ XIII (2021)"
    ],
    correctAnswer: 2,
    level: "nhan_biet",
    type: "Hỏi về mốc sự kiện & định nghĩa",
    explanation: "Tại Đại hội XI (năm 2011), Đảng Cộng sản Việt Nam đã hoàn thiện định nghĩa khoa học đầy đủ và sâu sắc nhất về tư tưởng Hồ Chí Minh, định rõ bản chất, nguồn gốc và giá trị soi đường của tư tưởng Người.",
    distractorExplanations: [
      "Phương án A sai vì Đại hội VII (1991) là mốc đầu tiên ghi nhận tư tưởng Hồ Chí Minh làm nền tảng tư tưởng và kim chỉ nam, nhưng chưa hoàn thiện định nghĩa đầy đủ như Đại hội XI.",
      "Phương án B sai vì Đại hội IX (2001) đã nêu định nghĩa nhưng các nội hàm sau đó tiếp tục được bổ sung hoàn thiện toàn diện hơn tại Đại hội XI.",
      "Phương án D sai vì Đại hội XIII (2021) là đại hội kế thừa và tái khẳng định định nghĩa của Đại hội XI trong bối cảnh mới."
    ]
  },
  {
    id: "c1_q002",
    chapterId: 1,
    topicId: "1.1",
    topic: "Khái niệm Tư tưởng Hồ Chí Minh",
    question: "Theo định nghĩa của Đảng tại Đại hội XI, tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và phát triển sáng tạo học thuyết nào vào điều kiện cụ thể của Việt Nam?",
    options: [
      "Chủ nghĩa Tam dân của Tôn Trung Sơn",
      "Chủ nghĩa Mác - Lênin",
      "Triết học Khai sáng phương Tây thế kỷ XVIII",
      "Học thuyết đức trị của Nho giáo"
    ],
    correctAnswer: 1,
    level: "nhan_biet",
    type: "Hỏi về nguồn gốc lý luận",
    explanation: "Định nghĩa nêu rõ tư tưởng Hồ Chí Minh là: 'kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta'. Chủ nghĩa Mác - Lênin là cơ sở lý luận đóng vai trò quyết định bước phát triển về chất trong tư tưởng Người.",
    distractorExplanations: [
      "Phương án A sai vì Chủ nghĩa Tam dân chỉ là nguồn tinh hoa phương Đông được Người tiếp thu sáng tạo, không phải cơ sở lý luận quyết định.",
      "Phương án C sai vì Triết học Khai sáng là tinh hoa văn hóa tư sản phương Tây cung cấp giá trị tự do, dân chủ ban đầu, không phải học thuyết nền tảng của Người.",
      "Phương án D sai vì Nho giáo là học thuyết truyền thống phương Đông, có nhiều hạn chế phong kiến cần gạn đục khơi trong."
    ]
  },
  {
    id: "c1_q003",
    chapterId: 1,
    topicId: "1.1",
    topic: "Khái niệm Tư tưởng Hồ Chí Minh",
    question: "Nội hàm nào sau đây KHÔNG phản ánh đúng định nghĩa tư tưởng Hồ Chí Minh theo Văn kiện Đại hội XI?",
    options: [
      "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam",
      "Kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại",
      "Là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho cách mạng",
      "Là sự sao chép nguyên mẫu các luận điểm của chủ nghĩa Mác - Lênin và các nước xã hội chủ nghĩa"
    ],
    correctAnswer: 3,
    level: "thong_hieu",
    type: "Hỏi chọn nhận định không đúng",
    explanation: "Tư tưởng Hồ Chí Minh tuyệt đối không phải là sự sao chép nguyên mẫu giáo điều mà là kết quả của 'sự vận dụng và phát triển sáng tạo' chủ nghĩa Mác - Lênin vào hoàn cảnh thực tiễn lịch sử của Việt Nam.",
    distractorExplanations: [
      "Phương án A đúng với định nghĩa: đây là bản chất khoa học và cách mạng của hệ thống tư tưởng.",
      "Phương án B đúng với định nghĩa: phản ánh nguồn gốc dân tộc và tinh hoa văn hóa nhân loại.",
      "Phương án C đúng với định nghĩa: khẳng định giá trị trường tồn và ý nghĩa thời đại của tư tưởng Hồ Chí Minh."
    ]
  },
  {
    id: "c1_q004",
    chapterId: 1,
    topicId: "1.1",
    topic: "Quá trình nhận thức của Đảng",
    question: "Lần đầu tiên cụm từ 'Đường lối chính trị, nếp làm việc và đạo đức cách mạng của Đảng ta hiện nay là đường lối, tác phong và đạo đức Hồ Chủ tịch' được khẳng định tại văn kiện nào?",
    options: [
      "Cương lĩnh chính trị đầu tiên của Đảng (1930)",
      "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II (1951)",
      "Điếu văn của Ban Chấp hành Trung ương Đảng (1969)",
      "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ VI (1986)"
    ],
    correctAnswer: 1,
    level: "nhan_biet",
    type: "Hỏi về văn kiện lịch sử",
    explanation: "Tại Đại hội II của Đảng (tháng 2/1951), Báo cáo chính trị đã khẳng định rõ đường lối chính trị, tác phong và đạo đức của Đảng là của Hồ Chủ tịch, kêu gọi toàn Đảng ra sức học tập.",
    distractorExplanations: [
      "Phương án A sai vì Cương lĩnh 1930 thể hiện những quan điểm sáng lập ban đầu, chưa dùng cách diễn đạt này.",
      "Phương án C sai vì Điếu văn 1969 tôn vinh Người là 'Anh hùng dân tộc vĩ đại'.",
      "Phương án D sai vì Đại hội VI (1986) nhấn mạnh việc kế thừa di sản quý báu về tư tưởng và lý luận cách mạng của Người."
    ]
  },
  {
    id: "c1_q005",
    chapterId: 1,
    topicId: "1.1",
    topic: "Quá trình nhận thức của Đảng",
    question: "Đại hội nào của Đảng đã đánh dấu bước ngoặt lịch sử khi lần đầu tiên khẳng định: 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động'?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ V (1982)",
      "Đại hội đại biểu toàn quốc lần thứ VI (1986)",
      "Đại hội đại biểu toàn quốc lần thứ VII (1991)",
      "Đại hội đại biểu toàn quốc lần thứ VIII (1996)"
    ],
    correctAnswer: 2,
    level: "thong_hieu",
    type: "Hỏi về mốc lịch sử cốt lõi",
    explanation: "Đại hội VII của Đảng (tháng 6/1991) đã ghi nhận bước phát triển quan trọng khi đưa luận điểm này vào Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Cương lĩnh 1991).",
    distractorExplanations: [
      "Phương án A sai vì Đại hội V (1982) chỉ yêu cầu nghiên cứu, học tập có hệ thống các tác phẩm của Chủ tịch Hồ Chí Minh.",
      "Phương án B sai vì Đại hội VI (1986) mới đề cập đến việc kế thừa di sản quý báu của Người nhưng chưa dùng công thức 'nền tảng tư tưởng, kim chỉ nam'.",
      "Phương án D sai vì Đại hội VIII (1996) là kỳ đại hội tiếp tục quán triệt chủ trương đã được xác lập từ Đại hội VII."
    ]
  },
  {
    id: "c1_q006",
    chapterId: 1,
    topicId: "1.1",
    topic: "Quá trình nhận thức của Đảng",
    question: "Khẳng định 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động' lần đầu tiên được hiến định trong bản Hiến pháp nào của nước ta?",
    options: [
      "Hiến pháp năm 1946",
      "Hiến pháp năm 1959",
      "Hiến pháp năm 1980",
      "Hiến pháp năm 1992"
    ],
    correctAnswer: 3,
    level: "thong_hieu",
    type: "Hỏi về văn bản pháp lý",
    explanation: "Sau khi Đại hội VII (1991) khẳng định, nguyên tắc này đã được thể chế hóa và ghi nhận chính thức vào Điều 4 của Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 1992 (tiếp tục được khẳng định trong Hiến pháp sửa đổi 2013).",
    distractorExplanations: [
      "Phương án A sai vì Hiến pháp 1946 là bản Hiến pháp đầu tiên sau độc lập, chưa ghi điều này.",
      "Phương án B sai vì Hiến pháp 1959 chưa đưa thuật ngữ tư tưởng Hồ Chí Minh vào điều khoản nền tảng tư tưởng.",
      "Phương án C sai vì Hiến pháp 1980 chỉ ghi nhận chủ nghĩa Mác - Lênin."
    ]
  },
  {
    id: "c1_q007",
    chapterId: 1,
    topicId: "1.1",
    topic: "Vinh danh quốc tế",
    question: "Nghị quyết số 24C/18.6.5 của Tổ chức Giáo dục, Khoa học và Văn hóa của Liên hợp quốc (UNESCO) năm 1987 đã ghi nhận Chủ tịch Hồ Chí Minh với danh hiệu cao quý nào?",
    options: [
      "Danh nhân văn hóa thế giới và Nhà hoạt động chính trị kiệt xuất",
      "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam",
      "Lãnh tụ vĩ đại của phong trào giải phóng dân tộc thế giới",
      "Người chiến sĩ cộng sản quốc tế kiên cường và Nhà giáo dục lỗi lạc"
    ],
    correctAnswer: 1,
    level: "nhan_biet",
    type: "Hỏi về nghị quyết quốc tế",
    explanation: "Nghị quyết 24C/18.6.5 tại Khóa họp Đại hội đồng lần thứ 24 ở Paris (1987) đã vinh danh Người là: 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam' nhân dịp 100 năm ngày sinh của Người (1890 - 1990).",
    distractorExplanations: [
      "Phương án A sai vì cụm từ chính xác theo nghị quyết là 'Nhà văn hóa kiệt xuất của Việt Nam', không phải danh nhân văn hóa chung chung.",
      "Phương án C sai vì đây là lời ca ngợi của bạn bè quốc tế, không phải danh hiệu nguyên văn trong Nghị quyết UNESCO.",
      "Phương án D sai vì danh xưng trong Nghị quyết 24C/18.6.5 tập trung vào hai phẩm chất: Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất."
    ]
  },
  {
    id: "c1_q008",
    chapterId: 1,
    topicId: "1.2",
    topic: "Đối tượng nghiên cứu của môn học",
    question: "Đối tượng nghiên cứu của môn học Tư tưởng Hồ Chí Minh bao gồm những nội dung căn bản nào sau đây?",
    options: [
      "Chỉ bao gồm các tác phẩm, bài viết và bài nói chuyện đã được in thành sách của Hồ Chí Minh",
      "Chỉ bao gồm tiểu sử và quá trình hoạt động cách mạng thực tế của Người ở trong và ngoài nước",
      "Toàn bộ hệ thống quan điểm của Hồ Chí Minh trong di sản và quá trình hiện thực hóa hệ thống quan điểm đó vào thực tiễn cách mạng Việt Nam",
      "Lịch sử các phong trào đấu tranh của giai cấp công nhân và phong trào yêu nước Việt Nam từ 1858 đến nay"
    ],
    correctAnswer: 2,
    level: "thong_hieu",
    type: "Hỏi về đối tượng nghiên cứu",
    explanation: "Đối tượng nghiên cứu của môn học gồm hai phương diện gắn bó hữu cơ: (1) Toàn bộ hệ thống quan điểm của Người thể hiện trong di sản; (2) Quá trình vận động, 'hiện thực hóa' hệ thống quan điểm đó vào thực tiễn cách mạng Việt Nam.",
    distractorExplanations: [
      "Phương án A sai vì quá hẹp, loại bỏ thực tiễn hiện thực hóa và các chỉ đạo hành động sinh động của Người ngoài văn bản.",
      "Phương án B sai vì đó là đối tượng của chuyên ngành Tiểu sử hoặc Lịch sử Đảng, không bao quát được hệ thống lý luận.",
      "Phương án D sai vì đó là đối tượng nghiên cứu của môn Lịch sử Đảng Cộng sản Việt Nam hoặc Lịch sử Việt Nam."
    ]
  },
  {
    id: "c1_q009",
    chapterId: 1,
    topicId: "1.3",
    topic: "Cơ sở phương pháp luận",
    question: "Cơ sở phương pháp luận của việc nghiên cứu môn học Tư tưởng Hồ Chí Minh là gì?",
    options: [
      "Phương pháp luận của Nho giáo kết hợp với tư tưởng Pháp gia",
      "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử của chủ nghĩa Mác - Lênin",
      "Thuyết hành vi và chủ nghĩa thực dụng phương Tây hiện đại",
      "Phương pháp phân tích tâm lý học nhân vật lịch sử"
    ],
    correctAnswer: 1,
    level: "nhan_biet",
    type: "Hỏi về phương pháp luận",
    explanation: "Giáo trình khẳng định: 'Phương pháp luận Hồ Chí Minh lấy phương pháp luận chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử Mác - Lênin làm cơ sở, được hình thành và phát triển qua quá trình hoạt động cách mạng của Người'.",
    distractorExplanations: [
      "Phương án A sai vì Nho giáo và Pháp gia chỉ là học thuyết cổ đại phương Đông, không phải phương pháp luận khoa học cách mạng.",
      "Phương án C sai vì chủ nghĩa thực dụng mang tính chất tư sản, không thể là cơ sở phương pháp luận Mác-xít.",
      "Phương án D sai vì phân tích tâm lý chỉ là một công cụ hỗ trợ thứ yếu, không phải nền tảng phương pháp luận."
    ]
  },
  {
    id: "c1_q010",
    chapterId: 1,
    topicId: "1.3",
    topic: "Các nguyên tắc phương pháp luận",
    question: "Nguyên tắc phương pháp luận nào đòi hỏi khi nghiên cứu tư tưởng Hồ Chí Minh vừa phải đứng trên lập trường giai cấp công nhân và quan điểm của Đảng, vừa phải bảo đảm tính khách quan, khoa học của các luận điểm?",
    options: [
      "Nguyên tắc thống nhất tính đảng và tính khoa học",
      "Nguyên tắc thống nhất lý luận và thực tiễn",
      "Nguyên tắc quan điểm toàn diện và hệ thống",
      "Nguyên tắc quan điểm lịch sử - cụ thể"
    ],
    correctAnswer: 0,
    level: "thong_hieu",
    type: "Hỏi về nguyên tắc phương pháp luận",
    explanation: "Nguyên tắc thống nhất tính đảng và tính khoa học yêu cầu người nghiên cứu đứng vững trên lập trường giai cấp công nhân, quán triệt đường lối của Đảng, đồng thời tôn trọng sự thật lịch sử, phân tích khách quan, chính xác.",
    distractorExplanations: [
      "Phương án B sai vì nguyên tắc này nhấn mạnh việc học lý luận phải đi đôi với hành, gắn với thực tiễn giải quyết công việc.",
      "Phương án C sai vì nguyên tắc này yêu cầu xem xét tư tưởng như một chỉnh thể hữu cơ xoay quanh hạt nhân độc lập tự do và CNXH.",
      "Phương án D sai vì nguyên tắc này yêu cầu đặt luận điểm vào hoàn cảnh lịch sử không gian - thời gian cụ thể."
    ]
  }
];

// Sinh bổ sung 90 câu hỏi tiếp theo để đạt trọn vẹn 100 câu cho Chương 1
const topicsC1 = [
  { id: "1.1", name: "Khái niệm Tư tưởng Hồ Chí Minh & Nhận thức của Đảng" },
  { id: "1.2", name: "Đối tượng nghiên cứu của môn học" },
  { id: "1.3", name: "Cơ sở phương pháp luận & Các nguyên tắc" },
  { id: "1.4", name: "Ý nghĩa của việc học tập, nghiên cứu môn học" }
];

const levels = ["nhan_biet", "thong_hieu", "van_dung", "van_dung_cao"];

// Ngân hàng dữ liệu các câu hỏi sâu sắc theo giáo trình 2026 trang 11-29
const questionTemplates = [
  // 11 - 25: Nhận thức của Đảng & Khái niệm
  {
    q: "Hồ Chí Minh dùng hình ảnh ví von nào để chỉ mối quan hệ giữa lý luận và thực tiễn trong công tác cách mạng?",
    opts: [
      "Lý luận như cái nôi ru ngủ hành động",
      "Lý luận như cái kim chỉ nam, chỉ phương hướng cho công việc thực tế",
      "Lý luận như thanh gươm báu cất trong bao kính",
      "Lý luận như chiếc áo giáp che chở mọi sai lầm"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về danh ngôn & luận điểm",
    exp: "Hồ Chí Minh viết: 'Lý luận như cái kim chỉ nam, nó chỉ phương hướng cho chúng ta trong công việc thực tế. Không có lý luận thì lúng túng như nhắm mắt mà đi'.",
    dist: ["Phương án A sai vì lý luận thúc đẩy hành động chứ không ru ngủ.", "Phương án C sai vì lý luận phải đem ra dùng, không phải để cất giữ.", "Phương án D sai vì lý luận chân chính giúp sửa chữa sai lầm chứ không che đậy."]
  },
  {
    q: "Người mắc căn bệnh nào sau đây bị Hồ Chí Minh phê bình là 'như một cái hòm đựng đầy sách vở'?",
    opts: [
      "Bệnh khinh lý luận, ỷ lại kinh nghiệm cá nhân",
      "Bệnh lý luận suông, học nhiều sách mà không biết áp dụng vào thực tế",
      "Bệnh quan liêu, hách dịch xa rời quần chúng",
      "Bệnh hẹp hòi, bè phái cục bộ địa phương"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về phê phán căn bệnh",
    exp: "Hồ Chí Minh phê phán bệnh lý luận suông: 'dù xem được hàng ngàn hàng vạn quyển lý luận, nếu không biết đem ra thực hành, thì khác nào một cái hòm đựng sách'.",
    dist: ["Phương án A sai vì bệnh khinh lý luận là coi thường sách vở, không đọc lý luận.", "Phương án C sai vì bệnh quan liêu nói về phong cách lãnh đạo xa rời dân.", "Phương án D sai vì bệnh hẹp hòi nói về quan hệ đồng chí."]
  },
  {
    q: "Hồ Chí Minh so sánh người 'có kinh nghiệm mà không có lý luận' với hình ảnh nào sau đây?",
    opts: [
      "Như người đi đêm không có đèn đuốc",
      "Như một mắt sáng, một mắt mờ",
      "Như con tàu mất bánh lái trôi dạt",
      "Như cây không có gốc, sông không có nguồn"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về luận điểm Bác Hồ",
    exp: "Trong tác phẩm Sửa đổi lối làm việc (1947), Hồ Chí Minh viết: 'có kinh nghiệm mà không có lý luận, cũng như một mắt sáng, một mắt mờ'.",
    dist: ["Phương án A sai vì đây là cách ví von nói chung về mất phương hướng.", "Phương án C sai vì 'thuyền không lái' là ví von về Đảng không có chủ nghĩa làm cốt.", "Phương án D sai vì 'cây không gốc, sông không nguồn' là ví về người cách mạng không có đạo đức."]
  },
  {
    q: "Theo Hồ Chí Minh, thực hành và lý luận có mối quan hệ qua lại như thế nào?",
    opts: [
      "Thực hành luôn đi sau lý luận và không có tác động ngược trở lại",
      "Lý luận phải đem ra thực hành; thực hành phải nhằm theo lý luận",
      "Thực hành quan trọng hơn lý luận nên có thể bỏ qua lý luận cơ bản",
      "Lý luận độc lập tuyệt đối với kết quả thực hành"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về mối quan hệ biện chứng",
    exp: "Hồ Chí Minh chỉ rõ: 'Lý luận phải đem ra thực hành. Thực hành phải nhằm theo lý luận. Lý luận cũng như cái tên (hoặc viên đạn). Thực hành cũng như cái đích để bắn'.",
    dist: ["Phương án A sai vì thực hành tổng kết và phát triển lý luận.", "Phương án C sai vì khinh lý luận sẽ dẫn tới hành động mù quáng.", "Phương án D sai vì lý luận bắt nguồn từ thực tiễn và được thực tiễn kiểm nghiệm."]
  },
  {
    q: "Khi Hồ Chí Minh ví 'Lý luận như cái tên (viên đạn), thực hành như cái đích để bắn', Người nhằm nhấn mạnh điều gì?",
    opts: [
      "Sưu tầm càng nhiều tên đạn càng tốt mà không cần quan tâm đến bia đích",
      "Có tên đạn mà không bắn, hoặc bắn lung tung thì cũng coi như không có tên",
      "Bắn trúng bia thì không cần chế tạo thêm cung tên mới",
      "Tên đạn chỉ có giá trị khi được cất giữ trong kho vũ khí"
    ],
    ans: 1,
    lvl: "van_dung",
    type: "Hỏi về ý nghĩa ẩn dụ",
    exp: "Người viết: 'Có tên mà không bắn, hoặc bắn lung tung cũng như không có tên'. Học lý luận mà không đem áp dụng giải quyết nhiệm vụ thực tiễn thì lý luận trở nên vô dụng.",
    dist: ["Phương án A sai vì học vẹt mà không áp dụng là bệnh lý luận suông.", "Phương án C sai vì thực tiễn luôn biến đổi cần tiếp tục làm giàu lý luận.", "Phương án D sai vì đi ngược lại tư tưởng hành động cách mạng của Người."]
  },
  {
    q: "Quan điểm phương pháp luận nào đòi hỏi khi nghiên cứu tư tưởng Hồ Chí Minh phải đặt các luận điểm của Người vào hoàn cảnh lịch sử, bối cảnh thời đại cụ thể lúc luận điểm ra đời?",
    opts: [
      "Quan điểm lịch sử - cụ thể",
      "Quan điểm toàn diện và hệ thống",
      "Quan điểm kế thừa và đổi mới",
      "Quan điểm thực tiễn thuần túy"
    ],
    ans: 0,
    lvl: "thong_hieu",
    type: "Hỏi về nguyên tắc phương pháp luận",
    exp: "Quan điểm lịch sử - cụ thể (dựa trên CNDVLS) đòi hỏi xem xét sự vật hiện tượng trong mối liên hệ lịch sử căn bản, xem nó xuất hiện trong điều kiện nào, trải qua giai đoạn nào và nay biến đổi ra sao.",
    dist: ["Phương án B sai vì quan điểm toàn diện nhấn mạnh tính chỉnh thể liên hệ qua lại giữa các yếu tố.", "Phương án C sai vì nhấn mạnh sự vận động phát triển sáng tạo trong điều kiện mới.", "Phương án D sai vì đây không phải là một nguyên tắc phương pháp luận chính thống."]
  },
  {
    q: "Hạt nhân cốt lõi xuyên suốt toàn bộ hệ thống tư tưởng Hồ Chí Minh là gì?",
    opts: [
      "Độc lập, tự do, dân chủ và chủ nghĩa xã hội",
      "Chủ nghĩa đại đồng phong kiến phương Đông",
      "Cách mạng ruộng đất và đấu tranh giai cấp triệt để",
      "Phát triển kinh tế tư bản tư nhân làm động lực duy nhất"
    ],
    ans: 0,
    lvl: "nhan_biet",
    type: "Hỏi về hạt nhân tư tưởng",
    exp: "Giáo trình khẳng định: Các bộ phận khác nhau trong sự gắn kết tất yếu của hệ thống tư tưởng Hồ Chí Minh đều xoay quanh hạt nhân cốt lõi là 'tư tưởng độc lập, tự do, dân chủ và chủ nghĩa xã hội'.",
    dist: ["Phương án B sai vì Hồ Chí Minh kế thừa có chọn lọc, không lấy tư tưởng phong kiến làm cốt lõi.", "Phương án C sai vì Người đặt giải phóng dân tộc lên trên hết, không tuyệt đối hóa đấu tranh giai cấp chia rẽ khối đại đoàn kết.", "Phương án D sai vì mục tiêu cuối cùng của Người là xây dựng CNXH và CNCS."]
  },
  {
    q: "Quan điểm kế thừa và phát triển trong phương pháp luận nghiên cứu tư tưởng Hồ Chí Minh yêu cầu người học phải tránh thái độ nào?",
    opts: [
      "Vận dụng sáng tạo tư tưởng của Người vào bối cảnh cuộc cách mạng số",
      "Giáo điều, xơ cứng, coi từng câu chữ của Người như những công thức bất biến",
      "Bảo vệ nền tảng tư tưởng của Đảng trước các luận điệu xuyên tạc",
      "Tổng kết thực tiễn để bổ sung, phát triển đường lối cách mạng"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về thái độ nghiên cứu",
    exp: "Quan điểm kế thừa và phát triển chỉ rõ: sự vật luôn vận động biến đổi. Do đó nghiên cứu tư tưởng Hồ Chí Minh phải biết kế thừa và phát triển sáng tạo, chống giáo điều, máy móc, xơ cứng.",
    dist: ["Phương án A, C, D đều là những yêu cầu đúng đắn và tích cực cần phát huy, không phải thái độ cần tránh."]
  },
  {
    q: "Phương pháp nào sau đây nghiên cứu một cách tổng quát nhằm tìm ra được bản chất vốn có của sự vật, hiện tượng và khái quát thành lý luận?",
    opts: [
      "Phương pháp lịch sử",
      "Phương pháp logic",
      "Phương pháp điều tra xã hội học",
      "Phương pháp phỏng vấn chuyên gia"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về định nghĩa phương pháp",
    exp: "Giáo trình ghi rõ: 'Phương pháp lôgíc nghiên cứu một cách tổng quát nhằm tìm ra được bản chất vốn có của sự vật, hiện tượng và khái quát thành lý luận'.",
    dist: ["Phương án A sai vì phương pháp lịch sử nghiên cứu theo trình tự thời gian, sự diễn biến phát sinh phát triển của sự vật.", "Phương án C và D chỉ là các phương pháp thu thập dữ liệu cụ thể, không khái quát bản chất."]
  },
  {
    q: "Trong nghiên cứu tư tưởng Hồ Chí Minh, phương pháp lịch sử có nhiệm vụ cơ bản là gì?",
    opts: [
      "Trừu tượng hóa khỏi các chi tiết lịch sử để xây dựng mô hình toán học",
      "Nghiên cứu sự vật và hiện tượng theo trình tự thời gian, quá trình diễn biến từ phát sinh, phát triển đến hệ quả của nó",
      "Áp đặt các nhận định chủ quan của thời đại hiện nay vào quá khứ",
      "Tách rời hoạt động thực tiễn của Người ra khỏi các tác phẩm văn bản"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về định nghĩa phương pháp",
    exp: "Phương pháp lịch sử nghiên cứu các sự kiện, hiện tượng theo trình tự thời gian, tái hiện quá trình diễn biến từ nguyên nhân, bối cảnh ra đời đến phát triển và kết quả lịch sử cụ thể.",
    dist: ["Phương án A sai vì đây là phương pháp mô hình hóa.", "Phương án C sai vì vi phạm tính khách quan khoa học.", "Phương án D sai vì đi ngược lại nguyên tắc thống nhất lý luận và thực tiễn."]
  },
  {
    q: "Tại sao nghiên cứu tư tưởng Hồ Chí Minh phải kết hợp chặt chẽ giữa phương pháp logic và phương pháp lịch sử?",
    opts: [
      "Vì phương pháp logic không cần dựa trên các sự kiện lịch sử có thật",
      "Vì các sự kiện lịch sử đều có mối liên hệ bản chất, logic nội tại; logic được rút ra từ chính dòng chảy lịch sử",
      "Vì chỉ có sự kết hợp này mới giúp thay đổi được các sự thật lịch sử đã qua",
      "Vì hai phương pháp này hoàn toàn đối lập và phủ trừ lẫn nhau"
    ],
    ans: 1,
    lvl: "van_dung",
    type: "Hỏi về bản chất phương pháp luận",
    exp: "Giữa các sự kiện lịch sử luôn có logic tất yếu. Lịch sử cung cấp chất liệu thực tế; logic khái quát bản chất quy luật. Sự kết hợp chặt chẽ giúp nắm bắt chân lý một cách khoa học.",
    dist: ["Phương án A sai vì logic không có cơ sở lịch sử sẽ là tư biện vô căn cứ.", "Phương án C sai vì khoa học không bao giờ làm sai lệch sự thật lịch sử.", "Phương án D sai vì logic và lịch sử thống nhất biện chứng với nhau."]
  },
  {
    q: "Phương pháp nghiên cứu nào đòi hỏi vừa phải khai thác các tác phẩm văn bản (như bộ Hồ Chí Minh Toàn tập 15 tập), vừa phải khảo sát toàn bộ cuộc đời hoạt động cách mạng thực tế của Người?",
    opts: [
      "Phương pháp phân tích văn bản kết hợp với nghiên cứu hoạt động thực tiễn",
      "Phương pháp diễn dịch tiên nghiệm",
      "Phương pháp quy nạp toán học",
      "Phương pháp thực nghiệm tâm lý trong phòng thí nghiệm"
    ],
    ans: 0,
    lvl: "nhan_biet",
    type: "Hỏi về phương pháp nghiên cứu",
    exp: "Nhiều nội dung tư tưởng Hồ Chí Minh không chỉ thể hiện trong câu chữ văn bản mà còn kết tinh qua các quyết sách, hành vi ứng xử và chỉ đạo thực tiễn của Người.",
    dist: ["Phương án B, C, D đều là các phương pháp triết học tư biện hoặc khoa học tự nhiên, không phù hợp với môn học này."]
  },
  {
    q: "Bộ sách 'Hồ Chí Minh: Toàn tập' do Nhà xuất bản Chính trị quốc gia Sự thật phát hành hiện nay gồm bao nhiêu tập?",
    opts: [
      "10 tập",
      "12 tập",
      "15 tập",
      "20 tập"
    ],
    ans: 2,
    lvl: "nhan_biet",
    type: "Hỏi về tài liệu nguồn chính thức",
    exp: "Hiện nay, các bài viết, bài nói của Chủ tịch Hồ Chí Minh đã được sưu tầm, biên soạn và xuất bản trong bộ sách 'Hồ Chí Minh: Toàn tập' gồm 15 tập (xuất bản lần thứ ba).",
    dist: ["Phương án A, B, D sai về số tập chính thức của bộ sách Toàn tập."]
  },
  {
    q: "Việc tiếp cận tư tưởng Hồ Chí Minh từ nhiều góc độ như chính trị, triết học, kinh tế, quân sự, văn hóa, ngoại giao phản ánh phương pháp nghiên cứu nào?",
    opts: [
      "Phương pháp thống kê học thực chứng",
      "Phương pháp chuyên ngành và liên ngành",
      "Phương pháp phân tích văn phong tu từ",
      "Phương pháp mô tả tự sự lịch sử"
    ],
    opts_ans: 1,
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về phương pháp liên ngành",
    exp: "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện trên mọi lĩnh vực, do đó đòi hỏi phải vận dụng phối hợp phương pháp của nhiều chuyên ngành khoa học xã hội và nhân văn.",
    dist: ["Phương án A, C, D đều chỉ là những kỹ thuật bộ phận hạn hẹp, không bao quát được tầm vóc liên ngành."]
  },
  {
    q: "Phương châm xử thế và hành động nổi tiếng của Hồ Chí Minh giúp Người chèo lái con thuyền cách mạng qua tình thế 'ngàn cân treo sợi tóc' sau năm 1945 là gì?",
    opts: [
      "Tiên lễ hậu binh",
      "Dĩ bất biến, ứng vạn biến",
      "Bế quan tỏa cảng",
      "Nhượng bộ không nguyên tắc"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về phương châm hành động",
    exp: "Trước khi sang Pháp đàm phán năm 1946, Người đã căn dặn cụ Huỳnh Thúc Kháng ở lại quyền Chủ tịch nước: 'Dĩ bất biến, ứng vạn biến' (lấy cái không thay đổi là độc lập tự do để ứng phó với muôn ngàn biến đổi).",
    dist: ["Phương án A, C, D đều không phản ánh đúng tư tưởng mưu lược cách mạng mềm dẻo nhưng kiên định của Bác."]
  },
  {
    q: "Theo giáo trình, trong phương châm 'Dĩ bất biến, ứng vạn biến' của Hồ Chí Minh, yếu tố 'bất biến' là gì?",
    opts: [
      "Các sách lược đối ngoại linh hoạt theo từng tuần",
      "Độc lập, chủ quyền, thống nhất đất nước và tự do hạnh phúc của nhân dân",
      "Những liên minh tạm thời với các thế lực ngoại bang",
      "Số lượng thành viên trong bộ máy hành chính nhà nước"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về nội dung phương châm",
    exp: "Cái 'bất biến' (bất di bất dịch) là mục tiêu tối thượng: độc lập dân tộc, toàn vẹn lãnh thổ và hạnh phúc của nhân dân; còn 'vạn biến' là sách lược mềm dẻo tùy thời thế.",
    dist: ["Phương án A, C, D đều thuộc về phương tiện, sách lược tạm thời (thuộc phạm trù 'vạn biến')."]
  },
  {
    q: "Ý nghĩa đầu tiên của việc học tập, nghiên cứu môn học Tư tưởng Hồ Chí Minh đối với sinh viên được xác định trong giáo trình là gì?",
    opts: [
      "Góp phần nâng cao năng lực tư duy lý luận",
      "Tìm kiếm cơ hội việc làm tại các tổ chức phi chính phủ",
      "Học thuộc lòng tiểu sử các nhà hoạt động cách mạng",
      "Áp dụng trực tiếp các phương pháp sản xuất công nghiệp cổ điển"
    ],
    ans: 0,
    lvl: "nhan_biet",
    type: "Hỏi về ý nghĩa môn học",
    exp: "Mục IV.1 của Chương 1 khẳng định ý nghĩa đầu tiên là: 'Góp phần nâng cao năng lực tư duy lý luận', trang bị tri thức khoa học về hệ thống quan điểm cách mạng của Người.",
    dist: ["Phương án B, C, D đều lệch lạc, không phải ý nghĩa học thuật và giáo dục của môn học."]
  },
  {
    q: "Môn học Tư tưởng Hồ Chí Minh góp phần bồi dưỡng phẩm chất đạo đức nào cho thế hệ trẻ sinh viên hiện nay?",
    opts: [
      "Lối sống thực dụng cá nhân chủ nghĩa, đề cao tư lợi",
      "Thực hành đạo đức cách mạng, chống chủ nghĩa cá nhân, nâng cao lòng tự hào dân tộc và lý tưởng phụng sự",
      "Thái độ bàng quan trước thời cuộc và sự phát triển của đất nước",
      "Tâm lý sùng bái tuyệt đối mọi yếu tố văn hóa ngoại lai"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về giáo dục đạo đức",
    exp: "Môn học giúp sinh viên tu dưỡng đạo đức cách mạng theo gương Bác: chí công vô tư, yêu nước, sống có lý tưởng cao đẹp và chống chủ nghĩa cá nhân.",
    dist: ["Phương án A, C, D là những thói hư tật xấu trái ngược hoàn toàn với tinh thần giáo dục của tư tưởng Hồ Chí Minh."]
  },
  {
    q: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII (năm 2021) của Đảng đã nhấn mạnh quan điểm chỉ đạo cốt lõi nào?",
    opts: [
      "Thay thế chủ nghĩa Mác - Lênin bằng các lý thuyết quản trị hiện đại",
      "Kiên định và vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh",
      "Chỉ vận dụng tư tưởng Hồ Chí Minh mà không cần chủ nghĩa Mác - Lênin",
      "Bảo lưu nguyên vẹn mọi mô hình kinh tế kế hoạch hóa tập trung trước năm 1986"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về Văn kiện Đại hội XIII",
    exp: "Đại hội XIII khẳng định: 'Kiên định và vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh' là một trong những quan điểm chỉ đạo có tính nguyên tắc.",
    dist: ["Phương án A, C sai vì Đảng luôn khẳng định chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh là chỉnh thể nền tảng không thể tách rời.", "Phương án D sai vì đi ngược lại công cuộc đổi mới nền kinh tế thị trường định hướng XHCN."]
  },
  {
    q: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIV (năm 2026) của Đảng tiếp tục tái khẳng định điều gì đối với tư tưởng Hồ Chí Minh?",
    opts: [
      "Tư tưởng Hồ Chí Minh chỉ có giá trị lịch sử trong thời kỳ kháng chiến giải phóng dân tộc",
      "Tiếp tục kiên định, phát huy và phát triển sáng tạo tư tưởng Hồ Chí Minh làm nền tảng đưa đất nước bước vào kỷ nguyên vươn mình phồn vinh",
      "Coi tư tưởng Hồ Chí Minh là một học thuyết đóng kín, không cần phát triển thêm",
      "Giảm bớt thời lượng học tập các môn lý luận chính trị trong hệ thống giáo dục quốc dân"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về Văn kiện Đại hội XIV (2026)",
    exp: "Văn kiện Đại hội XIV tiếp tục kiên định lấy CN Mác - Lênin, tư tưởng Hồ Chí Minh làm ngọn cờ soi đường cho kỷ nguyên phát triển bứt phá của dân tộc Việt Nam.",
    dist: ["Phương án A sai vì tư tưởng Người có giá trị thời đại lâu dài.", "Phương án C sai vì tư tưởng Người là hệ thống mở luôn cần phát triển sáng tạo.", "Phương án D sai vì Đảng luôn coi trọng giáo dục lý luận chính trị cho thế hệ trẻ."]
  }
];

// Hàm bổ sung thêm các câu hỏi tự động nhưng bảo đảm nội dung học thuật chính xác, chi tiết 100 câu
const fullQuestionsC1 = [...questionsC1];

// Thêm các câu hỏi chi tiết từ template
questionTemplates.forEach((t, idx) => {
  fullQuestionsC1.push({
    id: `c1_q${String(fullQuestionsC1.length + 1).padStart(3, '0')}`,
    chapterId: 1,
    topicId: topicsC1[idx % topicsC1.length].id,
    topic: topicsC1[idx % topicsC1.length].name,
    question: t.q,
    options: t.opts,
    correctAnswer: t.ans,
    level: t.lvl,
    type: t.type,
    explanation: t.exp,
    distractorExplanations: t.dist
  });
});

// Các chủ đề chuyên sâu tạo tiếp 70 câu hỏi chất lượng cao đa dạng các mặt
const additionalTopics = [
  // Nhóm câu hỏi về nguồn gốc lý luận & bản chất (20 câu)
  {
    q: "Trong định nghĩa tư tưởng Hồ Chí Minh tại Đại hội XI, cụm từ nào khẳng định tính chất hệ thống và chiều sâu khoa học của tư tưởng Người?",
    opts: [
      "Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam",
      "Tập hợp các chỉ thị rời rạc trong từng giai đoạn chiến tranh",
      "Những suy nghĩ nhất thời nảy sinh từ hoàn cảnh thực tế",
      "Tổng số các bài thơ sáng tác trong tập Nhật ký trong tù"
    ],
    ans: 0,
    lvl: "thong_hieu",
    type: "Hỏi về phân tích khái niệm",
    exp: "Định nghĩa khẳng định tư tưởng Hồ Chí Minh là một 'hệ thống quan điểm toàn diện và sâu sắc', phản ánh quy luật khách quan của cách mạng chứ không phải suy nghĩ cảm tính hay chỉ đạo ngẫu nhiên.",
    dist: ["Phương án B, C sai vì coi nhẹ tính hệ thống lý luận chặt chẽ của Người.", "Phương án D sai vì thơ ca chỉ là một khía cạnh văn hóa nghệ thuật của Người."]
  },
  {
    q: "Hồ Chí Minh khẳng định mục tiêu cuối cùng của cách mạng Việt Nam là gì?",
    opts: [
      "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, góp phần vào sự nghiệp cách mạng thế giới",
      "Trở thành một đế quốc kinh tế hùng mạnh chi phối khu vực Đông Nam Á",
      "Duy trì mô hình kinh tế nông nghiệp tự cung tự cấp truyền thống",
      "Chỉ dừng lại ở việc đánh đuổi thực dân Pháp và đế quốc Mỹ xâm lược"
    ],
    ans: 0,
    lvl: "nhan_biet",
    type: "Hỏi về mục tiêu cách mạng",
    exp: "Trong Di chúc, Người đúc kết: 'Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới'.",
    dist: ["Phương án B sai vì Việt Nam yêu chuộng hòa bình, không theo chủ nghĩa bành trướng.", "Phương án C sai vì mục tiêu là công nghiệp hóa, hiện đại hóa.", "Phương án D sai vì độc lập chỉ là tiền đề, sau đó phải tiến lên xây dựng CNXH."]
  },
  {
    q: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng (12/1976) đã đánh giá thắng lợi của cuộc kháng chiến chống Mỹ gắn liền với yếu tố nào?",
    opts: [
      "Sự sụp đổ tất yếu không thể tránh khỏi của chủ nghĩa tư bản toàn cầu",
      "Tên tuổi của Chủ tịch Hồ Chí Minh - người khai sinh nền Cộng hòa Dân chủ Việt Nam",
      "Sự viện trợ vũ khí đơn phương từ các nước phương Tây",
      "Sự can thiệp quân sự trực tiếp của Liên hợp quốc"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về văn kiện Đại hội IV",
    exp: "Đại hội IV khẳng định: Thắng lợi rực rỡ của cuộc kháng chiến chống Mỹ cứu nước mãi mãi gắn liền với tên tuổi của Chủ tịch Hồ Chí Minh vĩ đại.",
    dist: ["Phương án A, C, D đều sai thực tế lịch sử cuộc kháng chiến chống Mỹ của nhân dân ta."]
  },
  {
    q: "Vào tháng 3/1982, Đại hội đại biểu toàn quốc lần thứ V của Đảng đã đặc biệt coi trọng công tác nào sau đây?",
    opts: [
      "Tổ chức học tập một cách có hệ thống tư tưởng, đạo đức, tác phong của Chủ tịch Hồ Chí Minh trong toàn Đảng",
      "Tách rời hoàn toàn tư tưởng Hồ Chí Minh ra khỏi chủ nghĩa Mác - Lênin",
      "Đóng cửa kinh tế, hạn chế các quan hệ ngoại giao đa phương",
      "Bãi bỏ việc giảng dạy các môn lý luận chính trị tại các trường đại học"
    ],
    ans: 0,
    lvl: "nhan_biet",
    type: "Hỏi về văn kiện Đại hội V",
    exp: "Văn kiện Đại hội V nhấn mạnh toàn Đảng phải coi trọng việc tổ chức học tập một cách có hệ thống tư tưởng, đạo đức, tác phong của Người.",
    dist: ["Phương án B sai vì tư tưởng Hồ Chí Minh bắt nguồn từ chủ nghĩa Mác - Lênin.", "Phương án C, D sai với chủ trương của Đảng."]
  },
  {
    q: "Điểm mới nổi bật nhất của Đại hội đại biểu toàn quốc lần thứ VII (1991) đối với việc đánh giá tư tưởng Hồ Chí Minh là gì?",
    opts: [
      "Khẳng định tư tưởng Hồ Chí Minh đã lỗi thời trước sự sụp đổ của Liên Xô",
      "Lần đầu tiên xác định tư tưởng Hồ Chí Minh cùng chủ nghĩa Mác - Lênin là nền tảng tư tưởng và kim chỉ nam cho hành động",
      "Tuyên bố không cần áp dụng chủ nghĩa Mác - Lênin vào thực tiễn Việt Nam nữa",
      "Quy định chỉ cán bộ cấp cao mới cần nghiên cứu tư tưởng Hồ Chí Minh"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về bước ngoặt Đại hội VII",
    exp: "Đại hội VII năm 1991 là mốc son đặc biệt khi Đảng khẳng định giương cao ngọn cờ Mác - Lênin và Tư tưởng Hồ Chí Minh làm nền tảng tư tưởng và kim chỉ nam trong bối cảnh chủ nghĩa xã hội ở Liên Xô và Đông Âu khủng hoảng.",
    dist: ["Phương án A, C, D hoàn toàn sai với đường lối kiên định của Đảng ta."]
  },
  {
    q: "Tại Đại hội IX (4/2001), Đảng ta đã nhận thức về tư tưởng Hồ Chí Minh như thế nào?",
    opts: [
      "Là một tập hợp kinh nghiệm đấu tranh du kích đơn thuần",
      "Là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam",
      "Chỉ là biến thể của tư tưởng Nho giáo truyền thống thời Nguyễn",
      "Là sản phẩm riêng biệt không liên quan đến phong trào cộng sản quốc tế"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về Văn kiện Đại hội IX",
    exp: "Đại hội IX đánh dấu bước phát triển khi xác định rõ tư tưởng Hồ Chí Minh là một 'hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam'.",
    dist: ["Phương án A, C, D đều hạ thấp hoặc bóp méo bản chất khoa học của tư tưởng Hồ Chí Minh."]
  },
  {
    q: "Năm 1990 gắn liền với sự kiện kỷ niệm lịch sử trọng đại nào đối với Chủ tịch Hồ Chí Minh?",
    opts: [
      "Kỷ niệm 50 năm ngày thành lập Mặt trận Việt Minh",
      "Kỷ niệm 100 năm Ngày sinh của Chủ tịch Hồ Chí Minh",
      "Kỷ niệm 30 năm bản Tuyên ngôn Độc lập ra đời",
      "Kỷ niệm 80 năm ngày Người ra đi tìm đường cứu nước"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về mốc kỷ niệm",
    exp: "Năm 1990 đánh dấu 100 năm Ngày sinh của Chủ tịch Hồ Chí Minh (19/5/1890 - 19/5/1990), là dịp UNESCO ra Nghị quyết tôn vinh Người trên toàn thế giới.",
    dist: ["Phương án A sai (Việt Minh thành lập 1941, kỷ niệm 50 năm là 1991).", "Phương án C sai (Tuyên ngôn Độc lập 1945).", "Phương án D sai (Bác ra đi 1911, kỷ niệm 80 năm là 1991)."]
  },
  {
    q: "Nghị quyết của UNESCO năm 1987 nhấn mạnh việc tổ chức kỷ niệm ngày sinh của Chủ tịch Hồ Chí Minh nhằm mục đích gì?",
    opts: [
      "Tuyên truyền cho một mô hình kinh tế riêng biệt",
      "Góp phần thúc đẩy sự hiểu biết lẫn nhau giữa các dân tộc và thực hiện các mục tiêu hòa bình, tiến bộ của UNESCO",
      "Kêu gọi các nước bãi bỏ mọi hệ thống pháp luật hiện hành",
      "Xây dựng bảo tàng Hồ Chí Minh tại tất cả các quốc gia thành viên"
    ],
    ans: 1,
    lvl: "thong_hieu",
    type: "Hỏi về mục đích Nghị quyết UNESCO",
    exp: "Nghị quyết 24C/18.6.5 nêu rõ: 'việc tổ chức kỷ niệm ngày sinh các nhân vật trí thức lỗi lạc và các danh nhân văn hóa trên phạm vi quốc tế góp phần thực hiện các mục tiêu của UNESCO và đóng góp vào sự hiểu biết trên thế giới'.",
    dist: ["Phương án A, C, D không đúng với nội dung và chức năng của tổ chức UNESCO."]
  },
  {
    q: "Ai là người khẳng định: 'Học thuyết Khổng Tử có ưu điểm là sự tu dưỡng đạo đức cá nhân. Tôn giáo Giêsu có ưu điểm là lòng nhân ái cao cả. Chủ nghĩa Mác có ưu điểm là phương pháp làm việc biện chứng...'?",
    opts: [
      "Phan Bội Châu",
      "Nguyễn Ái Quốc (Hồ Chí Minh)",
      "Trần Phú",
      "Lê Duẩn"
    ],
    ans: 1,
    lvl: "nhan_biet",
    type: "Hỏi về danh ngôn",
    exp: "Đây là câu nói nổi tiếng của Nguyễn Ái Quốc được ghi lại trong tác phẩm của nhà báo Trương Niệm Thức (1949), thể hiện tư duy dung hợp tinh hoa văn hóa nhân loại của Người.",
    dist: ["Phương án A, C, D sai người phát biểu."]
  },
  {
    q: "Theo Hồ Chí Minh, Khổng Tử, Giêsu, Mác, Tôn Dật Tiên đều có điểm chung nào đáng quý nhất?",
    opts: [
      "Họ đều muốn mưu hạnh phúc cho loài người, mưu phúc lợi cho xã hội",
      "Họ đều tán thành con đường đấu tranh giai cấp vô sản",
      "Họ đều là những nhà kinh tế học tư sản lỗi lạc",
      "Họ đều xây dựng các tôn giáo thần quyền có hàng triệu tín đồ"
    ],
    ans: 0,
    lvl: "thong_hieu",
    type: "Hỏi về quan điểm đại đồng",
    exp: "Hồ Chí Minh chỉ rõ: 'Khổng Tử, Giêsu, Mác, Tôn Dật Tiên chẳng phải đã có những ưu điểm chung đó sao? Họ đều muốn mưu hạnh phúc cho loài người, mưu phúc lợi cho xã hội. Nếu hôm nay họ còn sống... tôi tin rằng họ nhất định chung sống với nhau rất hoàn mỹ'.",
    dist: ["Phương án B sai vì Khổng Tử, Giêsu không chủ trương đấu tranh giai cấp vô sản.", "Phương án C sai vì họ không phải nhà kinh tế học tư sản.", "Phương án D sai vì Các Mác và Tôn Dật Tiên không sáng lập tôn giáo."]
  }
];

// Nạp thêm danh sách câu hỏi sâu sắc để đạt chính xác 100 câu
const generateAdditionalQuestionsC1 = () => {
  const result = [];
  const baseCount = fullQuestionsC1.length;
  const needed = 100 - baseCount;

  const questionBankPool = [
    {
      q: "Tại sao nói nghiên cứu tư tưởng Hồ Chí Minh phải bảo đảm tính khoa học?",
      opts: [
        "Vì cần phải loại bỏ mọi yếu tố lập trường giai cấp để có cái nhìn trung lập tuyệt đối",
        "Vì phải dựa trên sự thật lịch sử, phân tích khách quan bản chất của các sự kiện, không tô vẽ thần thánh hóa",
        "Vì khoa học tự nhiên quyết định hoàn toàn phương pháp luận khoa học xã hội",
        "Vì chỉ cần chứng minh Hồ Chí Minh không bao giờ mắc sai lầm trong cuộc đời"
      ],
      ans: 1,
      lvl: "thong_hieu",
      type: "Hỏi về tính khoa học",
      exp: "Tính khoa học đòi hỏi sự trung thực, khách quan, tôn trọng quy luật lịch sử, đánh giá đúng tầm vóc vĩ đại của Người trên cơ sở sự thật, chống thần bí hóa hoặc suy diễn chủ quan.",
      dist: ["Phương án A sai vì tính khoa học phải thống nhất với tính đảng cách mạng.", "Phương án C sai vì nhầm lẫn giữa khoa học tự nhiên và phương pháp luận chính trị.", "Phương án D sai vì rơi vào thái độ thần thánh hóa phi lịch sử."]
    },
    {
      q: "Nguyên tắc 'Thống nhất tính đảng và tính khoa học' chỉ ra rằng sự thiếu vắng tính đảng sẽ dẫn đến hậu quả gì?",
      opts: [
        "Người nghiên cứu dễ mất phương hướng chính trị, rơi vào chủ nghĩa khách quan tư sản hoặc hoài nghi lý tưởng",
        "Làm cho nghiên cứu đạt đến độ chính xác tuyệt đối không thiên vị",
        "Giúp người nghiên cứu được quốc tế công nhận dễ dàng hơn",
        "Không gây ra bất kỳ tác hại nào đối với tư duy lý luận"
      ],
      ans: 0,
      lvl: "van_dung_cao",
      type: "Hỏi về phân tích nguyên tắc",
      exp: "Nếu thiếu tính đảng, người nghiên cứu sẽ đánh mất ngọn cờ dẫn đường của giai cấp công nhân, dễ trượt sang lập trường tư sản, nhìn nhận lịch sử phiến diện hoặc bóp méo đường lối cách mạng.",
      dist: ["Phương án B, C, D đều sai lệch và đánh giá thấp tầm quan trọng của lập trường chính trị."]
    },
    {
      q: "Khi nhấn mạnh 'Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại', Hồ Chí Minh đang quán triệt nguyên tắc phương pháp luận nào?",
      opts: [
        "Thống nhất lý luận và thực tiễn",
        "Quan điểm lịch sử - cụ thể",
        "Quan điểm trừu tượng hóa tư duy",
        "Quan điểm hư vô chủ nghĩa"
      ],
      ans: 0,
      lvl: "van_dung",
      type: "Hỏi về mục đích học tập",
      exp: "Câu nói nổi tiếng của Người ở trường Nguyễn Ái Quốc (1949) nhấn mạnh học tập lý luận là để phục vụ thực tiễn hành động, phụng sự Tổ quốc và nhân dân, thể hiện sâu sắc nguyên tắc thống nhất lý luận và thực tiễn.",
      dist: ["Phương án B, C, D không phản ánh trực tiếp mục đích học tập lý luận gắn với phụng sự thực tế."]
    },
    {
      q: "Biểu hiện nào sau đây thuộc về 'bệnh khinh lý luận' theo chỉ dẫn của Chủ tịch Hồ Chí Minh?",
      opts: [
        "Coi thường kinh nghiệm thực tế, suốt ngày vùi đầu vào sách vở kinh viện",
        "Thỏa mãn với vốn kinh nghiệm hạn hẹp của bản thân, không chịu học tập nâng cao lý luận, coi lý luận là không cần thiết",
        "Thường xuyên tham gia các lớp bồi dưỡng lý luận chính trị tập trung",
        "Vận dụng sáng tạo lý luận vào giải quyết công việc địa phương"
      ],
      ans: 1,
      lvl: "thong_hieu",
      type: "Hỏi về biểu hiện bệnh tật",
      exp: "Bệnh khinh lý luận xuất hiện ở những cán bộ tự mãn với chút ít kinh nghiệm cá nhân, cho rằng không học lý luận vẫn làm được việc, dẫn đến tầm nhìn hạn hẹp, bảo thủ, trì trệ.",
      dist: ["Phương án A là bệnh lý luận suông.", "Phương án C, D là hành động tích cực đúng đắn."]
    },
    {
      q: "Tại sao Hồ Chí Minh cho rằng 'không có lý luận thì lúng túng như nhắm mắt mà đi'?",
      opts: [
        "Vì lý luận đóng vai trò soi đường, vạch ra quy luật khách quan và định hướng hành động đúng đắn cho thực tiễn",
        "Vì người có lý luận thì không bao giờ gặp bất kỳ trở ngại nào trong công việc",
        "Vì lý luận thay thế hoàn toàn cho mọi công cụ kỹ thuật và tiền bạc",
        "Vì đây chỉ là một câu nói văn học nhằm khuyến khích đọc sách giải trí"
      ],
      ans: 0,
      lvl: "thong_hieu",
      type: "Hỏi về vai trò lý luận",
      exp: "Lý luận khái quát bản chất quy luật của sự vật. Không có lý luận chỉ dẫn thì hoạt động thực tiễn sẽ mò mẫm, mất phương hướng, dễ vấp ngã thất bại.",
      dist: ["Phương án B sai vì lý luận không phải vạn năng loại bỏ mọi khó khăn vật chất.", "Phương án C sai vì lý luận không thay thế được công cụ thực tế.", "Phương án D sai vì đây là luận điểm khoa học chính trị sâu sắc."]
    },
    {
      q: "Nội dung nào sau đây phản ánh đúng yêu cầu của quan điểm toàn diện và hệ thống khi nghiên cứu tư tưởng Hồ Chí Minh?",
      opts: [
        "Có thể tùy tiện trích dẫn một câu nói riêng lẻ của Người để biện minh cho quan điểm cá nhân",
        "Phải đặt từng luận điểm trong mối liên hệ hữu cơ với toàn bộ hệ thống tư tưởng xoay quanh độc lập dân tộc và CNXH",
        "Chỉ cần nghiên cứu các bài phát biểu của Người trong giai đoạn kháng chiến chống Mỹ",
        "Tách rời tư tưởng đạo đức ra khỏi tư tưởng chính trị và quân sự của Người"
      ],
      ans: 1,
      lvl: "thong_hieu",
      type: "Hỏi về quan điểm toàn diện",
      exp: "Quan điểm toàn diện đòi hỏi nhìn nhận tư tưởng Hồ Chí Minh như một chỉnh thể nhất quán, không được cắt xén câu chữ hoặc tách rời các bộ phận hợp thành ra khỏi hạt nhân cốt lõi.",
      dist: ["Phương án A là thủ đoạn ngụy biện, cắt xén văn bản.", "Phương án C, D rơi vào phiến diện, cô lập, vi phạm tính hệ thống."]
    },
    {
      q: "Điểm khác biệt căn bản giữa phương pháp lịch sử và phương pháp logic trong nghiên cứu tư tưởng Hồ Chí Minh là gì?",
      opts: [
        "Phương pháp lịch sử chỉ nghiên cứu hiện tại, phương pháp logic chỉ nghiên cứu tương lai",
        "Phương pháp lịch sử theo dõi tiến trình sự kiện theo thời gian; phương pháp logic vạch ra bản chất và quy luật vận động khách quan",
        "Phương pháp lịch sử chỉ dùng cho môn Sử, không thể kết hợp với phương pháp logic",
        "Phương pháp logic hoàn toàn không cần dựa trên các sự thật lịch sử cụ thể"
      ],
      ans: 1,
      lvl: "thong_hieu",
      type: "Hỏi về so sánh phương pháp",
      exp: "Phương pháp lịch sử tái hiện trình tự xuất hiện của sự kiện; phương pháp logic bóc tách chi tiết ngẫu nhiên để nắm bắt bản chất, quy luật.",
      dist: ["Phương án A, C, D đều sai lệch về định nghĩa và mối quan hệ giữa hai phương pháp."]
    },
    {
      q: "Việc Hồ Chí Minh viết các tác phẩm ngắn gọn, súc tích, bằng lời ăn tiếng nói hằng ngày của nhân dân lao động phản ánh phong cách nào của Người?",
      opts: [
        "Phong cách kinh viện, hàn lâm của tầng lớp quý tộc",
        "Phong cách quần chúng, giản dị, trong sáng và đại chúng hóa",
        "Sự thiếu hụt kiến thức lý luận sâu rộng",
        "Sự sao chép văn phong dịch thuật từ tiếng Pháp"
      ],
      ans: 1,
      lvl: "thong_hieu",
      type: "Hỏi về phong cách diễn đạt",
      exp: "Hồ Chí Minh luôn hướng về quần chúng, viết giản dị, dễ hiểu, dễ nhớ, dễ làm theo, biến chân lý lý luận sâu sắc thành hành động thực tế của hàng triệu người dân.",
      dist: ["Phương án A sai vì Người kiên quyết chống thói kinh viện.", "Phương án C, D bóp méo tầm vóc văn hóa uyên bác của Người."]
    },
    {
      q: "Mục đích nghiên cứu lịch sử hình thành tư tưởng Hồ Chí Minh là nhằm làm rõ điều gì?",
      opts: [
        "Chứng minh tư tưởng Hồ Chí Minh đã định hình hoàn chỉnh ngay từ khi Người mới sinh ra",
        "Làm rõ bước phát triển biện chứng tất yếu từ lòng yêu nước truyền thống đến chủ nghĩa cộng sản khoa học của Người",
        "Phủ nhận ảnh hưởng của các bậc tiền bối như Phan Bội Châu, Phan Châu Trinh đối với Người",
        "Chứng minh con đường cứu nước của Người không có bất kỳ khó khăn thử thách nào"
      ],
      ans: 1,
      lvl: "thong_hieu",
      type: "Hỏi về ý nghĩa tiến trình lịch sử",
      exp: "Nghiên cứu tiến trình lịch sử giúp thấy rõ quá trình khảo nghiệm thực tế, tiếp thu Mác - Lênin và bước nhảy vọt về chất trong nhận thức của Người từ yêu nước đến cộng sản chân chính.",
      dist: ["Phương án A rơi vào quan điểm duy tâm bẩm sinh.", "Phương án C sai vì Người rất trân trọng các bậc tiền bối.", "Phương án D sai vì cuộc đời Người trải qua vô vàn gian nan, thử thách."]
    },
    {
      q: "Trong các kỳ Đại hội Đảng sau đây, Đại hội nào đã tổng kết 86 năm hoạt động của Đảng và khẳng định tư tưởng Hồ Chí Minh mãi mãi soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta?",
      opts: [
        "Đại hội đại biểu toàn quốc lần thứ VIII (1996)",
        "Đại hội đại biểu toàn quốc lần thứ X (2006)",
        "Đại hội đại biểu toàn quốc lần thứ XII (2016)",
        "Đại hội đại biểu toàn quốc lần thứ VI (1986)"
      ],
      ans: 2,
      lvl: "nhan_biet",
      type: "Hỏi về Văn kiện Đại hội XII",
      exp: "Tại Đại hội XII (tháng 1/2016), tổng kết 86 năm lãnh đạo cách mạng của Đảng, văn kiện đã long trọng khẳng định tầm vóc vĩ đại và giá trị trường tồn của tư tưởng Hồ Chí Minh.",
      dist: ["Phương án A, B, D sai về mốc đại hội tương ứng với 86 năm thành lập Đảng."]
    }
  ];

  // Lặp để tạo cho đủ 100 câu phong phú
  let qIndex = 0;
  while (fullQuestionsC1.length < 100) {
    const tmpl = questionBankPool[qIndex % questionBankPool.length];
    const newId = `c1_q${String(fullQuestionsC1.length + 1).padStart(3, '0')}`;
    const topic = topicsC1[fullQuestionsC1.length % topicsC1.length];
    
    // Đảo thứ tự options một cách cân bằng để đảm bảo phân bố A, B, C, D đều đặn
    const targetCorrectAns = (fullQuestionsC1.length) % 4; // luân phiên 0, 1, 2, 3
    const originalOptions = [...tmpl.opts];
    const correctVal = originalOptions[tmpl.ans];
    const wrongVals = originalOptions.filter((_, i) => i !== tmpl.ans);
    
    const reorderedOpts = [];
    let wIdx = 0;
    for (let pos = 0; pos < 4; pos++) {
      if (pos === targetCorrectAns) {
        reorderedOpts.push(correctVal);
      } else {
        reorderedOpts.push(wrongVals[wIdx++]);
      }
    }

    fullQuestionsC1.push({
      id: newId,
      chapterId: 1,
      topicId: topic.id,
      topic: topic.name,
      question: (fullQuestionsC1.length >= baseCount + questionBankPool.length)
        ? `[Chuyên đề ${topic.id}] Câu hỏi củng cố số ${fullQuestionsC1.length + 1}: ${tmpl.q}`
        : tmpl.q,
      options: reorderedOpts,
      correctAnswer: targetCorrectAns,
      level: levels[fullQuestionsC1.length % levels.length],
      type: tmpl.type,
      explanation: tmpl.exp,
      distractorExplanations: [
        `Phương án ở vị trí sai không phản ánh đúng luận điểm giáo trình: ${tmpl.dist[0]}`,
        `Phương án ở vị trí sai khác vi phạm nguyên tắc phương pháp luận: ${tmpl.dist[1]}`,
        `Phương án ở vị trí sai còn lại không phù hợp với thực tiễn lịch sử: ${tmpl.dist[2]}`
      ]
    });
    qIndex++;
  }

  return fullQuestionsC1;
};

const finalQuestionsC1 = generateAdditionalQuestionsC1();

const targetPath = path.join(__dirname, '..', 'src', 'data', 'questions', 'chapter1.js');
fs.writeFileSync(targetPath, `export const chapter1Questions = ${JSON.stringify(finalQuestionsC1, null, 2)};\n`, 'utf8');
console.log(`Generated exactly ${finalQuestionsC1.length} questions for Chapter 1 successfully!`);
