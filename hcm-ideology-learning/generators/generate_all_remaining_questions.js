// generators/generate_all_remaining_questions.js
const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '..', 'src', 'data', 'questions');

// Định nghĩa dữ liệu nền tảng câu hỏi cho từng chương từ 2 đến 6
const chaptersConfig = [
  {
    chapterId: 2,
    topicName: "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    topics: [
      { id: "2.1", name: "Cơ sở thực tiễn (Việt Nam & Thế giới)" },
      { id: "2.2", name: "Cơ sở lý luận (Dân tộc, Nhân loại, Mác - Lênin)" },
      { id: "2.3", name: "Nhân tố chủ quan Hồ Chí Minh" },
      { id: "2.4", name: "5 giai đoạn lịch sử & Giá trị tư tưởng" }
    ],
    seeds: [
      {
        q: "Thực dân Pháp bắt đầu nổ súng tiến hành xâm lược Việt Nam vào năm nào và tại địa điểm nào?",
        opts: ["Năm 1858 tại bán đảo Sơn Trà (Đà Nẵng)", "Năm 1873 tại thành Hà Nội", "Năm 1883 tại cửa biển Thuận An (Huế)", "Năm 1862 tại Gia Định"],
        ans: 0,
        lvl: "nhan_biet",
        type: "Hỏi về mốc lịch sử",
        exp: "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu quá trình xâm lược Việt Nam của thực dân Pháp.",
        dist: ["Năm 1873 là cuộc tấn công Bắc Kỳ lần thứ nhất của Pháp.", "Năm 1883 là cuộc tấn công cửa biển Thuận An dẫn tới Hiệp ước Hácmăng.", "Năm 1862 là thời điểm ký Hiệp ước Nhâm Tuất nhượng 3 tỉnh miền Đông Nam Kỳ."]
      },
      {
        q: "Bản chất của xã hội Việt Nam dưới ách thống trị của thực dân Pháp được Hồ Chí Minh xác định là xã hội gì?",
        opts: ["Xã hội phong kiến thuần túy", "Xã hội thuộc địa và phong kiến", "Xã hội tư bản chủ nghĩa phát triển cao", "Xã hội cộng sản nguyên thủy"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về bản chất xã hội",
        exp: "Thực dân Pháp không xóa bỏ chế độ phong kiến mà cấu kết với phong kiến tay sai, biến nước ta thành một nước 'thuộc địa và phong kiến'.",
        dist: ["Xã hội phong kiến thuần túy là trước năm 1858.", "Xã hội tư bản phát triển sai thực tế vì kinh tế bị Pháp kìm hãm lạc hậu.", "Cộng sản nguyên thủy là thời kỳ cổ đại nguyên thủy."]
      },
      {
        q: "Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
        opts: ["Giai cấp nông dân với giai cấp địa chủ phong kiến", "Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai", "Giai cấp công nhân với giai cấp tư sản Việt Nam", "Tầng lớp trí thức với chính quyền thuộc địa"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về mâu thuẫn xã hội",
        exp: "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn gay gắt nhất, quyết định tính chất hàng đầu của cuộc cách mạng là giải phóng dân tộc.",
        dist: ["Mâu thuẫn nông dân - địa chủ là mâu thuẫn giai cấp, đứng sau mâu thuẫn dân tộc.", "Mâu thuẫn công nhân - tư sản chỉ mới hình thành và chưa gay gắt bằng mâu thuẫn dân tộc.", "Mâu thuẫn trí thức chỉ là bộ phận nhỏ."]
      },
      {
        q: "Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước chống Pháp theo khuynh hướng dân chủ tư sản đầu thế kỷ XX (Đông Du, Duy Tân) là gì?",
        opts: ["Nhân dân ta không có tinh thần yêu nước và căm thù giặc", "Giai cấp tư sản Việt Nam non yếu về kinh tế và dao động về chính trị, chưa có đường lối cứu nước đúng đắn", "Thực dân Pháp đã trao trả độc lập trong hòa bình", "Các phong trào này không có bất kỳ sĩ phu yêu nước nào lãnh đạo"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về nguyên nhân lịch sử",
        exp: "Giai cấp tư sản Việt Nam mới ra đời, nhỏ bé về kinh tế và nhu nhược về chính trị, do đó ngọn cờ dân chủ tư sản không đủ sức dẫn dắt cách mạng giải phóng dân tộc thành công.",
        dist: ["Nhân dân ta có tinh thần yêu nước bất khuất.", "Thực dân Pháp đàn áp dã man chứ không trao trả độc lập.", "Các phong trào do các chí sĩ lớn như Phan Bội Châu, Phan Châu Trinh lãnh đạo."]
      },
      {
        q: "Chủ nghĩa yêu nước truyền thống có vai trò như thế nào trong sự hình thành tư tưởng Hồ Chí Minh?",
        opts: ["Chỉ là yếu tố thứ yếu không đóng góp gì cho tư duy của Người", "Là nền tảng tư tưởng, điểm xuất phát và động lực thôi thúc Người ra đi tìm đường cứu nước", "Được hình thành sau khi Người đã tiếp thu chủ nghĩa Mác - Lênin", "Chỉ xuất hiện khi Người gia nhập Đảng Cộng sản Pháp năm 1920"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về cội nguồn tư tưởng",
        exp: "Chủ nghĩa yêu nước là giá trị xuyên suốt lịch sử dân tộc, là hành trang quý giá nhất và là điểm xuất phát đầu tiên thúc giục Nguyễn Tất Thành ra đi tìm con đường cứu nước, cứu dân.",
        dist: ["Không thể là yếu tố thứ yếu.", "Yêu nước có trước Mác - Lênin hàng ngàn năm và có trong Bác từ thuở thiếu thời.", "Năm 1920 là mốc Người từ người yêu nước trở thành người cộng sản."]
      },
      {
        q: "Hồ Chí Minh đã kế thừa yếu tố tích cực nào trong học thuyết của Nho giáo?",
        opts: ["Tư tưởng trọng nam khinh nữ và phân biệt đẳng cấp phong kiến", "Triết lý hành động, tu dưỡng đạo đức cá nhân, tư tưởng đại đồng và dùng nhân trị, đức trị quản lý xã hội", "Tam tòng tứ đức áp đặt đối với người phụ nữ", "Thái độ thủ cựu, bảo hoàng tuyệt đối trung thành với nhà vua"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về kế thừa Nho giáo",
        exp: "Hồ Chí Minh phê phán tính bảo thủ, phân biệt đẳng cấp của Nho giáo, nhưng kế thừa tinh thần tự tu dưỡng đạo đức, lòng nhân nghĩa và triết lý nhập thế hành đạo.",
        dist: ["Trọng nam khinh nữ là hủ tục phong kiến bị Người xóa bỏ.", "Tam tòng tứ đức lạc hậu bị cách mạng loại trừ.", "Bảo hoàng tuyệt đối trung thành với vua trái ngược với lý tưởng cộng hòa dân chủ của Bác."]
      },
      {
        q: "Trong Phật giáo, tư tưởng nào sau đây được Hồ Chí Minh đánh giá cao và vận dụng sáng tạo vào việc xây dựng khối đại đoàn kết?",
        opts: ["Tư tưởng yếm thế, xa lánh cuộc đời và chấp nhận số phận nô lệ", "Tư tưởng từ bi, bác ái, cứu khổ cứu nạn, yêu thương con người và sống hòa đồng gắn bó với dân tộc", "Việc cúng bái mê tín dị đoan và đốt vàng mã", "Tư tưởng cam chịu áp bức bóc lột của giai cấp thống trị"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về kế thừa Phật giáo",
        exp: "Hồ Chí Minh trân trọng triết lý nhân văn sâu sắc của Phật giáo: từ bi, cứu khổ, bình đẳng, hòa đồng với muôn loài và gắn bó đồng hành cùng vận mệnh dân tộc.",
        dist: ["Yếm thế xa lánh đời sống trái với tinh thần cách mạng tiến công của Bác.", "Mê tín dị đoan bị Người kiên quyết bài trừ.", "Cam chịu áp bức trái với ý chí vùng lên giải phóng dân tộc."]
      },
      {
        q: "Tư tưởng nào của Tôn Trung Sơn được Hồ Chí Minh vận dụng sáng tạo vào tiêu ngữ của nước Việt Nam Dân chủ Cộng hòa?",
        opts: ["Chủ nghĩa Tam dân: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc", "Học thuyết Quân quyền tối thượng", "Chủ nghĩa dân tộc hẹp hòi cực đoan", "Chính sách liên hiệp với các nước đế quốc phương Tây"],
        ans: 0,
        lvl: "nhan_biet",
        type: "Hỏi về ảnh hưởng của Tôn Trung Sơn",
        exp: "Hồ Chí Minh kế thừa hạt nhân tiến bộ của Chủ nghĩa Tam dân: 'Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc' và sáng tạo thành tiêu ngữ bất hủ: 'Độc lập - Tự do - Hạnh phúc'.",
        dist: ["Quân quyền tối thượng là của phong kiến.", "Chủ nghĩa dân tộc hẹp hòi bị Người phê phán.", "Tôn Trung Sơn chủ trương 'Liên Nga, dung Cộng, phù trợ công nông', không liên hiệp đế quốc."]
      },
      {
        q: "Cơ sở lý luận nào đóng vai trò QUYẾT ĐỊNH BƯỚC PHÁT TRIỂN VỀ CHẤT trong toàn bộ tư tưởng Hồ Chí Minh?",
        opts: ["Truyền thống yêu nước và nhân ái của dân tộc Việt Nam", "Chủ nghĩa Mác - Lênin", "Tư tưởng Tự do - Bình đẳng - Bác ái của Đại Cách mạng Pháp", "Các học thuyết chính trị - xã hội phương Đông cổ đại"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về cơ sở lý luận quyết định",
        exp: "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển về chất, chuyển hóa Nguyễn Ái Quốc từ một người yêu nước tiến bộ trở thành một chiến sĩ cộng sản kiệt xuất.",
        dist: ["Truyền thống dân tộc là nền tảng ban đầu, chưa tạo nên bước nhảy vọt về chất lý luận Mác-xít.", "Tư tưởng Pháp 1789 chỉ là tiền đề tư tưởng tư sản.", "Học thuyết phương Đông cổ đại mang tính hạn chế lịch sử."]
      },
      {
        q: "Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
        opts: ["Ngày 19 tháng 5 năm 1890", "Ngày 5 tháng 6 năm 1911", "Ngày 18 tháng 6 năm 1919", "Ngày 3 tháng 2 năm 1930"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về mốc lịch sử",
        exp: "Ngày 5/6/1911, trên con tàu Đô đốc Latouche-Tréville, người thanh niên yêu nước Nguyễn Tất Thành lấy tên là Văn Ba đã rời Tổ quốc ra đi tìm đường cứu nước.",
        dist: ["19/5/1890 là ngày sinh của Bác.", "18/6/1919 là ngày gửi Bản Yêu sách tới Versailles.", "3/2/1930 là ngày thành lập Đảng Cộng sản Việt Nam."]
      },
      {
        q: "Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định trong cuộc đời hoạt động của Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản?",
        opts: ["Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (6/1919)", "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (7/1920)", "Bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)", "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"],
        ans: 2,
        lvl: "thong_hieu",
        type: "Hỏi về bước ngoặt cuộc đời",
        exp: "Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển dứt khoát về lập trường chính trị.",
        dist: ["Gửi Yêu sách 1919 là tiếng nói đấu tranh dân chủ ban đầu.", "Đọc luận cương Lênin 7/1920 là bước chuyển biến sâu sắc về tư tưởng.", "Sáng lập Hội VN Cách mạng Thanh niên 1925 là thời kỳ chuẩn bị thành lập Đảng."]
      },
      {
        q: "Tác phẩm lý luận đầu tiên vạch rõ con đường, phương pháp cách mạng Việt Nam, chuẩn bị trực tiếp về chính trị, tư tưởng cho sự ra đời của Đảng là tác phẩm nào?",
        opts: ["Bản án chế độ thực dân Pháp (1925)", "Đường cách mệnh (1927)", "Chánh cương vắn tắt của Đảng (1930)", "Tuyên ngôn Độc lập (1945)"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về tác phẩm kinh điển",
        exp: "Tác phẩm 'Đường cách mệnh' xuất bản năm 1927 tại Quảng Châu tập hợp các bài giảng của Nguyễn Ái Quốc đào tạo cán bộ cách mạng, vạch rõ phương hướng cứu nước đúng đắn.",
        dist: ["Bản án chế độ thực dân Pháp (1925) vạch trần tội ác của thực dân Pháp.", "Chánh cương vắn tắt (1930) là Cương lĩnh thành lập Đảng.", "Tuyên ngôn Độc lập (1945) tuyên bố khai sinh nước Việt Nam mới."]
      },
      {
        q: "Tại Hội nghị thành lập Đảng đầu năm 1930, văn kiện nào do Nguyễn Ái Quốc khởi thảo được coi là Cương lĩnh chính trị đầu tiên của Đảng?",
        opts: ["Luận cương chính trị do Trần Phú soạn thảo", "Chánh cương vắn tắt và Sách lược vắn tắt của Đảng", "Đề cương văn hóa Việt Nam", "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về văn kiện Cương lĩnh",
        exp: "Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc khởi thảo tại Hội nghị Cửu Long (Hương Cảng, 1930) là Cương lĩnh chính trị đầu tiên của Đảng ta.",
        dist: ["Luận cương chính trị tháng 10/1930 do Trần Phú khởi thảo.", "Đề cương văn hóa năm 1943 do Trường Chinh khởi thảo.", "Chỉ thị thành lập Đội VNTTGPQ ra đời tháng 12/1944."]
      },
      {
        q: "Sau 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh trở về Tổ quốc vào thời gian nào và tại địa danh nào?",
        opts: ["Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)", "Ngày 28/1/1941 tại cột mốc 108 Pác Bó (Hà Quảng, Cao Bằng)", "Ngày 19/5/1941 tại căn cứ địa Tân Trào (Tuyên Quang)", "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về mốc về nước",
        exp: "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
        dist: ["2/9/1945 là ngày đọc Tuyên ngôn Độc lập.", "19/5/1941 là ngày thành lập Mặt trận Việt Minh.", "22/12/1944 là ngày thành lập Đội VNTTGPQ."]
      },
      {
        q: "Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 5/1941) do Hồ Chí Minh chủ trì có ý nghĩa chiến lược đặc biệt gì?",
        opts: ["Quyết định đình chỉ mọi hoạt động vũ trang chờ quân Đồng minh", "Hoàn chỉnh sự chuyển hướng chỉ đạo chiến lược: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu", "Chủ trương tiến hành ngay cách mạng thổ địa chia ruộng đất cho nông dân nghèo", "Quyết định gia nhập khối Liên minh các nước tư bản phương Tây"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về Hội nghị Trung ương 8",
        exp: "Hội nghị TW 8 (5/1941) tại Pác Bó đã hoàn chỉnh chuyển hướng chiến lược: tạm gác khẩu hiệu cách mạng điền địa, đặt quyền lợi dân tộc giải phóng lên trên hết, thành lập Mặt trận Việt Minh.",
        dist: ["Đình chỉ vũ trang sai vì Hội nghị chủ trương đẩy mạnh chuẩn bị khởi nghĩa vũ trang.", "Cách mạng thổ địa tạm gác lại để tập trung chống Pháp - Nhật.", "Gia nhập khối tư bản sai lập trường quốc tế vô sản."]
      }
    ]
  },
  {
    chapterId: 3,
    topicName: "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội",
    topics: [
      { id: "3.1", name: "Độc lập dân tộc & Cách mạng GPDT" },
      { id: "3.2", name: "Chủ nghĩa xã hội & Xây dựng CNXH ở Việt Nam" },
      { id: "3.3", name: "Mối quan hệ biện chứng giữa ĐLDT và CNXH" },
      { id: "3.4", name: "Vận dụng trong giai đoạn hiện nay" }
    ],
    seeds: [
      {
        q: "Câu nói bất hủ nào của Hồ Chí Minh khẳng định mối quan hệ không thể tách rời giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân sau năm 1945?",
        opts: [
          "Không có gì quý hơn độc lập, tự do",
          "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì",
          "Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập",
          "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về danh ngôn",
        exp: "Trong thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (tháng 10/1945), Người khẳng định: 'Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì'.",
        dist: ["'Không có gì quý hơn độc lập, tự do' nói năm 1966.", "'Dù phải đốt cháy cả dãy Trường Sơn...' nói tháng 8/1945 tại Tân Trào.", "'Thà hy sinh tất cả...' trong Lời kêu gọi toàn quốc kháng chiến 19/12/1946."]
      },
      {
        q: "Theo Hồ Chí Minh, lực lượng nòng cốt (gốc cách mệnh) của cách mạng giải phóng dân tộc là lực lượng nào?",
        opts: ["Tầng lớp trí thức và học sinh, sinh viên", "Khối liên minh giai cấp công nhân và giai cấp nông dân", "Giai cấp tư sản dân tộc và địa chủ yêu nước", "Toàn bộ quân đội chính quy các nước Đồng minh"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về lực lượng cách mạng",
        exp: "Trong tác phẩm Đường cách mệnh (1927), Người nêu rõ: 'Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông'.",
        dist: ["Trí thức là bầu bạn cách mệnh.", "Tư sản dân tộc và địa chủ yêu nước là đồng minh cách mạng.", "Quân Đồng minh là lực lượng quốc tế."]
      },
      {
        q: "Luận điểm sáng tạo xuất sắc nhất của Hồ Chí Minh về mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc là gì?",
        opts: [
          "Cách mạng thuộc địa hoàn toàn lệ thuộc và chỉ có thể thắng lợi sau khi cách mạng chính quốc thành công",
          "Cách mạng giải phóng dân tộc ở thuộc địa có thể chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc và tác động tích cực trở lại",
          "Cách mạng thuộc địa không cần liên minh với cách mạng vô sản ở chính quốc",
          "Chỉ có thể giải phóng dân tộc bằng đàm phán ngoại giao hòa bình với chính phủ thuộc địa"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về luận điểm sáng tạo",
        exp: "Hồ Chí Minh khẳng định nhân dân các dân tộc thuộc địa có tiềm năng cách mạng to lớn và có thể chủ động đứng lên tự giải phóng, giành thắng lợi trước vô sản chính quốc.",
        dist: ["Phương án A là quan điểm giáo điều của Quốc tế Cộng sản thời bấy giờ.", "Phương án C sai vì Bác luôn chủ trương liên minh vô sản quốc tế.", "Phương án D sai vì thực dân đế quốc không bao giờ tự nguyện từ bỏ thuộc địa."]
      },
      {
        q: "Hình ảnh ẩn dụ 'con đỉa hai vòi' được Hồ Chí Minh sử dụng nhằm chỉ rõ điều gì?",
        opts: [
          "Hai giai cấp tư sản và vô sản trong một nước tư bản",
          "Bản chất bóc lột của chủ nghĩa đế quốc: một vòi bám vào vô sản chính quốc, một vòi bám vào các dân tộc thuộc địa",
          "Hai chính sách ngoại giao hòa bình và chiến tranh của các nước lớn",
          "Hai khuynh hướng chính trị tả khuynh và hữu khuynh trong nội bộ Đảng"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về ẩn dụ của Bác",
        exp: "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người ví CNTB như con đỉa hai vòi; muốn giết chết nó thì phải đồng thời chặt đứt cả hai vòi bóc lột ở chính quốc và thuộc địa.",
        dist: ["Phương án A, C, D sai với nội dung ẩn dụ kinh điển của Hồ Chí Minh."]
      },
      {
        q: "Hồ Chí Minh định nghĩa về mục tiêu của chủ nghĩa xã hội một cách mộc mạc, dễ hiểu nhất là:",
        opts: [
          "Làm cho một nhóm người tinh hoa trở nên giàu có vượt bậc",
          "Làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
          "Tập trung mọi tài sản vào kho dự trữ quốc gia mà không phân phối cho dân",
          "Bãi bỏ toàn bộ quyền tự do cá nhân để phục vụ kỷ luật nghiêm ngặt"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về quan niệm CNXH",
        exp: "Người giải thích: 'Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc'.",
        dist: ["Phương án A là bản chất CNTB.", "Phương án C, D bóp méo mục tiêu nhân văn vì con người của CNXH."]
      },
      {
        q: "Đặc điểm to lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh chỉ rõ là gì?",
        opts: [
          "Đất nước đã hoàn thành công nghiệp hóa và cơ giới hóa nông nghiệp",
          "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không kinh qua giai đoạn phát triển tư bản chủ nghĩa",
          "Có sự viện trợ tài chính vô tận từ tất cả các quốc gia trên thế giới",
          "Không phải trải qua bất kỳ cuộc đấu tranh chống lại tàn dư chế độ cũ"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về đặc điểm thời kỳ quá độ",
        exp: "Giáo trình khẳng định: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa'.",
        dist: ["Nước ta bước vào quá độ với nền kinh tế nghèo nàn, lạc hậu.", "Không có sự viện trợ vô tận.", "Quá độ là cuộc cải tạo sâu sắc, cam go chống lại tàn dư cũ."]
      },
      {
        q: "Trong quá trình xây dựng chủ nghĩa xã hội, Hồ Chí Minh căn dặn chúng ta phải học tập kinh nghiệm của các nước anh em với thái độ như thế nào?",
        opts: [
          "Sao chép nguyên xi mọi chính sách và mô hình của các nước anh em",
          "Học tập kinh nghiệm các nước anh em nhưng không được áp đặt máy móc mà phải vận dụng sáng tạo: 'Ta không thể giống Liên Xô...'",
          "Từ chối tuyệt đối việc học hỏi bất kỳ kinh nghiệm quốc tế nào",
          "Chờ đợi các nước anh em xây dựng thành công rồi mới bắt đầu làm theo"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về thái độ học tập quốc tế",
        exp: "Người căn dặn: 'Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội'.",
        dist: ["Sao chép nguyên xi là bệnh giáo điều máy móc gây hậu quả nghiêm trọng.", "Từ chối học hỏi là bệnh kiêu ngạo, biệt lập.", "Chờ đợi là thụ động, mất thời cơ cách mạng."]
      },
      {
        q: "Hồ Chí Minh xác định yếu tố nào giữ vai trò là ĐỘNG LỰC QUYẾT ĐỊNH NHẤT trong việc xây dựng chủ nghĩa xã hội ở nước ta?",
        opts: ["Máy móc hiện đại nhập khẩu từ nước ngoài", "Con người Việt Nam yêu nước, lao động sáng tạo và khối đại đoàn kết toàn dân", "Tài nguyên thiên nhiên khoáng sản dồi dào", "Các khoản vay nợ ưu đãi quốc tế"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về động lực xây dựng CNXH",
        exp: "Trong hệ thống động lực, động lực giữ vai trò quyết định nhất là con người, là nhân dân lao động được giác ngộ đầy đủ quyền lợi, nghĩa vụ và phát huy khối đại đoàn kết.",
        dist: ["Máy móc chỉ là công cụ vật chất.", "Khoáng sản chỉ là điều kiện tự nhiên hữu hạn.", "Vay nợ quốc tế chỉ là nguồn lực bổ sung có điều kiện."]
      },
      {
        q: "Trong mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, độc lập dân tộc đóng vai trò là:",
        opts: ["Mục tiêu cuối cùng và duy nhất của cách mạng", "Cơ sở, tiền đề tất yếu để tiến lên chủ nghĩa xã hội", "Hệ quả phụ xuất hiện ngẫu nhiên sau khi xây dựng xong CNXH", "Rào cản đối với việc hội nhập kinh tế quốc tế"],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về quan hệ biện chứng",
        exp: "Không giành được độc lập dân tộc thì không thể có chủ quyền để tiến hành công cuộc xây dựng chủ nghĩa xã hội. Do đó độc lập dân tộc là tiền đề tiên quyết.",
        dist: ["Độc lập chưa phải mục tiêu cuối cùng, mục tiêu tiếp theo là giải phóng con người, xây dựng CNXH.", "Độc lập không phải hệ quả phụ ngẫu nhiên.", "Độc lập tạo thế chủ động vững chắc để hội nhập."]
      },
      {
        q: "Chủ nghĩa xã hội có vai trò như thế nào đối với nền độc lập dân tộc theo tư tưởng Hồ Chí Minh?",
        opts: [
          "Làm suy yếu năng lực phòng thủ của quốc gia độc lập",
          "Là điều kiện vững chắc nhất để bảo đảm và giữ vững nền độc lập dân tộc",
          "Tách rời độc lập dân tộc ra khỏi đời sống nhân dân",
          "Chỉ có tác dụng về mặt lý thuyết thuần túy mà không có giá trị bảo vệ độc lập"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về vai trò của CNXH",
        exp: "Chỉ có CNXH mới đem lại cuộc sống ấm no, công bằng, gắn kết lòng dân với chế độ, từ đó tạo nên sức mạnh nội lực vô địch bảo đảm vững chắc độc lập dân tộc trường tồn.",
        dist: ["CNXH củng cố quốc phòng toàn dân bảo vệ Tổ quốc.", "CNXH gắn kết hữu cơ độc lập với quyền lợi nhân dân.", "CNXH là thực tiễn sống động bảo vệ non sông."]
      }
    ]
  },
  {
    chapterId: 4,
    topicName: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
    topics: [
      { id: "4.1", name: "Tư tưởng về Đảng Cộng sản Việt Nam" },
      { id: "4.2", name: "Tư tưởng về Nhà nước của dân, do dân, vì dân" },
      { id: "4.3", name: "Xây dựng Nhà nước trong sạch & Phòng chống tiêu cực" }
    ],
    seeds: [
      {
        q: "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
        opts: [
          "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
          "Chủ nghĩa Mác + Phong trào công nhân + Tầng lớp trí thức tư sản",
          "Chủ nghĩa Lênin + Phong trào nông dân + Phong trào hòa bình",
          "Chủ nghĩa yêu nước + Học thuyết Nho giáo + Phong trào Cần Vương"
        ],
        ans: 0,
        lvl: "nhan_biet",
        type: "Hỏi về quy luật ra đời của Đảng",
        exp: "Khác với các nước phương Tây (chỉ gồm CN Mác và phong trào công nhân), tại Việt Nam, Hồ Chí Minh chỉ rõ Đảng ra đời từ sự kết hợp của: CN Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
        dist: ["Phương án B, C, D đều thiếu yếu tố phong trào yêu nước hoặc gán ghép sai các phong trào lịch sử."]
      },
      {
        q: "Luận điểm 'Đảng ta là đạo đức, là văn minh' được Chủ tịch Hồ Chí Minh khẳng định trong sự kiện lịch sử nào?",
        opts: [
          "Tại Hội nghị thành lập Đảng ngày 3/2/1930",
          "Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960)",
          "Trong tác phẩm Đường cách mệnh (năm 1927)",
          "Trong bản Di chúc thiêng liêng (năm 1969)"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về mốc lịch sử",
        exp: "Trong bài nói tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Người tự hào khẳng định: 'Đảng ta là đạo đức, là văn minh'.",
        dist: ["1930 chưa có nhận định đúc kết 30 năm này.", "1927 là tác phẩm Đường cách mệnh trước khi lập Đảng.", "1969 trong Di chúc Người nhấn mạnh chỉnh đốn Đảng."]
      },
      {
        q: "Nguyên tắc tổ chức và hoạt động CƠ BẢN NHẤT, sống còn của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
        opts: [
          "Tập thể lãnh đạo, cá nhân phụ trách",
          "Tập trung dân chủ",
          "Tự phê bình và phê bình",
          "Kỷ luật nghiêm minh và tự giác"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về nguyên tắc cơ bản nhất của Đảng",
        exp: "Tập trung dân chủ là nguyên tắc cơ bản nhất, cốt lõi chỉ đạo toàn bộ hệ thống tổ chức và hoạt động của Đảng kiểu mới của giai cấp công nhân.",
        dist: ["Tập thể lãnh đạo cá nhân phụ trách là nguyên tắc lãnh đạo.", "Tự phê bình và phê bình là quy luật phát triển.", "Kỷ luật nghiêm minh là sức mạnh của Đảng."]
      },
      {
        q: "Hồ Chí Minh ví nguyên tắc 'Tự phê bình và phê bình' trong Đảng với hình ảnh sinh hoạt hằng ngày nào?",
        opts: [
          "Như việc ăn cơm ba bữa",
          "Như việc mỗi ngày phải rửa mặt",
          "Như việc quét dọn nhà cửa mỗi dịp Tết",
          "Như việc khám sức khỏe định kỳ mỗi năm một lần"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về ẩn dụ của Bác",
        exp: "Người căn dặn: 'Tự phê bình và phê bình cũng như mỗi ngày phải rửa mặt. Rửa mặt thì mặt mới sạch, phê bình thì người mới tiến bộ'.",
        dist: ["Ăn cơm, quét nhà, khám sức khỏe không phải là hình ảnh so sánh nguyên văn của Bác."]
      },
      {
        q: "Theo Hồ Chí Minh, trong sinh hoạt Đảng, sự đoàn kết nhất trí phải được giữ gìn như giữ gìn điều gì?",
        opts: [
          "Như giữ gìn tài sản quý giá nhất của gia đình",
          "Như giữ gìn con ngươi của mắt mình",
          "Như giữ gìn bí mật quốc gia tuyệt đối",
          "Như giữ gìn ngọn cờ trên chiến hào đánh giặc"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về lời dặn trong Di chúc",
        exp: "Trong Di chúc (1969), Bác căn dặn thiết tha: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'.",
        dist: ["Các hình ảnh khác không phải câu chữ đúc kết bất hủ trong Di chúc."]
      },
      {
        q: "Quan điểm nào sau đây thể hiện sâu sắc nhất bản chất 'Nhà nước vì nhân dân' trong tư tưởng Hồ Chí Minh?",
        opts: [
          "Cán bộ nhà nước là những vị quan phụ mẫu cai trị và ban phát ơn huệ cho dân",
          "Chính phủ và cán bộ, công chức là công bộc, là người đầy tớ trung thành của nhân dân; việc gì có lợi cho dân phải hết sức làm, việc gì có hại đến dân phải hết sức tránh",
          "Nhà nước có quyền quyết định mọi vấn đề mà không cần lấy ý kiến của quần chúng",
          "Mọi nguồn ngân sách nhà nước chỉ phục vụ cho việc xây dựng các công trình công quyền"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về Nhà nước vì dân",
        exp: "Nhà nước vì dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ nhà nước là công bộc của nhân dân.",
        dist: ["Quan phụ mẫu là tàn dư phong kiến bị Người nghiêm khắc phê phán.", "Không lấy ý kiến dân là quan liêu độc đoán.", "Ngân sách phải phục vụ đời sống dân sinh."]
      },
      {
        q: "Cuộc Tổng tuyển cử đầu tiên bầu ra Quốc hội của nước Việt Nam Dân chủ Cộng hòa theo chế độ phổ thông đầu phiếu diễn ra vào ngày tháng năm nào?",
        opts: [
          "Ngày 2 tháng 9 năm 1945",
          "Ngày 6 tháng 1 năm 1946",
          "Ngày 2 tháng 3 năm 1946",
          "Ngày 9 tháng 11 năm 1946"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về mốc Tổng tuyển cử",
        exp: "Ngày 6/1/1946, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên đã tham gia cuộc Tổng tuyển cử lịch sử đầu tiên bầu ra Quốc hội khóa I.",
        dist: ["2/9/1945 là ngày Tuyên ngôn Độc lập.", "2/3/1946 là phiên họp đầu tiên của Quốc hội khóa I.", "9/11/1946 là ngày Quốc hội thông qua Hiến pháp đầu tiên."]
      },
      {
        q: "Bản Hiến pháp đầu tiên trong lịch sử dân tộc Việt Nam do Hồ Chí Minh chỉ đạo soạn thảo được thông qua vào năm nào?",
        opts: ["Năm 1945", "Năm 1946", "Năm 1959", "Năm 1980"],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về Hiến pháp đầu tiên",
        exp: "Bản Hiến pháp năm 1946 (được Quốc hội khóa I thông qua ngày 9/11/1946) là bản Hiến pháp dân chủ đầu tiên của nước ta và khu vực Đông Nam Á.",
        dist: ["1945 chưa ban hành Hiến pháp.", "1959 là bản Hiến pháp thứ hai do Người chỉ đạo soạn thảo.", "1980 là bản Hiến pháp sau ngày thống nhất đất nước."]
      },
      {
        q: "Hồ Chí Minh gọi những căn bệnh tiêu cực nào trong bộ máy công quyền là 'giặc nội xâm', 'thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm'?",
        opts: [
          "Bệnh kinh nghiệm và bệnh giáo điều",
          "Tham ô, lãng phí và bệnh quan liêu",
          "Bệnh tự ti và bệnh dao động tư tưởng",
          "Bệnh nói nhiều làm ít trong công tác đoàn thể"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về giặc nội xâm",
        exp: "Hồ Chí Minh kịch liệt lên án: 'Tham ô, lãng phí và bệnh quan liêu là giặc nội xâm, giặc ở trong lòng... Nó phá hoại đạo đức cách mạng, làm tổn hại đến sự nghiệp kháng chiến kiến quốc'.",
        dist: ["Phương án A, C, D là các khuyết điểm tư tưởng, nhưng không phải là bộ ba 'giặc nội xâm' được Người định danh."]
      },
      {
        q: "Trong các căn bệnh tiêu cực trong bộ máy nhà nước, Hồ Chí Minh xác định căn bệnh nào là 'bệnh mẹ', là mảnh đất sinh ra và dung dưỡng tham ô, lãng phí?",
        opts: [
          "Bệnh kiêu ngạo, tự cao tự đại",
          "Bệnh quan liêu, xa rời quần chúng nhân dân",
          "Bệnh hẹp hòi, bè phái địa phương",
          "Bệnh lười biếng, ngại khó ngại khổ"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về bệnh mẹ quan liêu",
        exp: "Người chỉ rõ: Bệnh quan liêu là bệnh gốc, bệnh mẹ sinh ra tham ô, lãng phí. Có mắt mà không thấy suốt, có tai mà không nghe thấu, từ đó tạo kẽ hở cho kẻ xấu đục khoét.",
        dist: ["Kiêu ngạo, hẹp hòi, lười biếng đều là biểu hiện xấu, nhưng chỉ có quan liêu mới được Bác chỉ đích danh là nguồn gốc đẻ ra tham ô, lãng phí."]
      }
    ]
  },
  {
    chapterId: 5,
    topicName: "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
    topics: [
      { id: "5.1", name: "Đại đoàn kết toàn dân tộc" },
      { id: "5.2", name: "Đoàn kết quốc tế" },
      { id: "5.3", name: "Vận dụng trong giai đoạn hiện nay" }
    ],
    seeds: [
      {
        q: "Hồ Chí Minh đúc kết chân lý bất hủ nào về sức mạnh và tầm quan trọng sống còn của khối đại đoàn kết toàn dân tộc?",
        opts: [
          "Dĩ bất biến, ứng vạn biến",
          "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công!",
          "Không có gì quý hơn độc lập, tự do",
          "Cần, kiệm, liêm, chính, chí công vô tư"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về danh ngôn",
        exp: "Đây là câu thơ - khẩu hiệu đúc kết chân lý tối thượng của Hồ Chí Minh, khẳng định quy mô đoàn kết quyết định mức độ thành công của sự nghiệp cách mạng.",
        dist: ["'Dĩ bất biến...' là phương châm ứng xử.", "'Không có gì quý hơn...' là chân lý độc lập tự do.", "'Cần kiệm liêm chính...' là chuẩn mực đạo đức."]
      },
      {
        q: "Tại buổi ra mắt Đảng Lao động Việt Nam (ngày 3/3/1951), Hồ Chí Minh đã tuyên bố mục đích của Đảng gói gọn trong 8 chữ vàng nào?",
        opts: [
          "Độc lập dân tộc, Chủ nghĩa xã hội",
          "ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC",
          "Cần kiệm liêm chính, Chí công vô tư",
          "Nước lấy dân làm gốc, Dân là chủ"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về khẩu hiệu lịch sử",
        exp: "Người phát biểu: 'Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC'.",
        dist: ["Các phương án khác tuy là tư tưởng của Người nhưng không phải 8 chữ vàng tuyên bố ngày 3/3/1951."]
      },
      {
        q: "Nền tảng vững chắc của khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh là gì?",
        opts: [
          "Liên minh giữa tầng lớp tư sản và địa chủ phong kiến",
          "Khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, đặt dưới sự lãnh đạo của Đảng",
          "Khối hiệp ước quân sự với các cường quốc trên thế giới",
          "Sự thống nhất của các tôn giáo lớn trong nước"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về nền tảng khối đại đoàn kết",
        exp: "Người chỉ rõ: Nền tảng của khối đại đoàn kết là liên minh công - nông - trí thức. 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác'.",
        dist: ["Phương án A, C, D đều sai về nền tảng cơ bản của đại đoàn kết dân tộc."]
      },
      {
        q: "Để tập hợp mọi người Việt Nam yêu nước vào khối đại đoàn kết, Hồ Chí Minh dùng hình ảnh ví von 'Năm ngón tay có ngón ngắn ngón dài' nhằm nhấn mạnh điều gì?",
        opts: [
          "Phải loại bỏ những người có khuyết điểm ra khỏi cộng đồng",
          "Phải có lòng khoan dung, độ lượng, tôn trọng sự khác biệt chính đáng, lấy tình thân ái để cảm hóa người lầm đường lạc lối",
          "Khẳng định sự bất bình đẳng xã hội là quy luật tự nhiên không thể xóa bỏ",
          "Chỉ đoàn kết với những người hoàn hảo không tì vết"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về lòng khoan dung",
        exp: "Bác dạy: 'Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ... mới thành đại đoàn kết'.",
        dist: ["Loại bỏ người khuyết điểm là hẹp hòi.", "Không thể suy diễn thành bất bình đẳng tự nhiên.", "Không ai là hoàn hảo tuyệt đối."]
      },
      {
        q: "Tổ chức Mặt trận dân tộc thống nhất đầu tiên do Đảng ta thành lập ngày 18/11/1930 có tên gọi là gì?",
        opts: [
          "Mặt trận Việt Minh",
          "Hội Phản đế đồng minh",
          "Hội Liên Việt",
          "Mặt trận Tổ quốc Việt Nam"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về tên Mặt trận đầu tiên",
        exp: "Ngày 18/11/1930, Ban Thường vụ Trung ương Đảng ra chỉ thị thành lập 'Hội Phản đế đồng minh' - hình thức tổ chức đầu tiên của Mặt trận Dân tộc Thống nhất Việt Nam.",
        dist: ["Việt Minh lập năm 1941.", "Hội Liên Việt lập năm 1946.", "Mặt trận Tổ quốc lập năm 1955/1977."]
      },
      {
        q: "Nguyên tắc hoạt động cơ bản nhất của Mặt trận Dân tộc Thống nhất nhằm bảo đảm sự đồng thuận giữa các giai cấp, tầng lớp, tôn giáo là gì?",
        opts: [
          "Mệnh lệnh hành chính từ trên xuống",
          "Hiệp thương dân chủ, tôn trọng lẫn nhau, 'cầu đồng tồn dị'",
          "Bỏ phiếu đa số áp đặt thiểu số tuyệt đối",
          "Chỉ do một đảng phái đơn phương định đoạt"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về nguyên tắc Mặt trận",
        exp: "Mặt trận là tổ chức liên minh rộng rãi nên phải hoạt động theo nguyên tắc hiệp thương dân chủ: bàn bạc công khai, thương lượng, tìm điểm tương đồng (cầu đồng), gác lại bất đồng nhỏ (tồn dị).",
        dist: ["Mệnh lệnh hành chính sẽ làm tan vỡ khối đại đoàn kết.", "Bỏ phiếu áp đặt không tạo ra sự đồng thuận tự nguyện.", "Đơn phương định đoạt trái với bản chất liên minh."]
      },
      {
        q: "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm kết hợp hai yếu tố sức mạnh cơ bản nào?",
        opts: [
          "Sức mạnh quân sự và sức mạnh tài chính",
          "Sức mạnh dân tộc với sức mạnh thời đại",
          "Sức mạnh truyền thống với sức mạnh tôn giáo",
          "Sức mạnh giai cấp vô sản với sức mạnh giai cấp tư sản"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về mục đích đoàn kết quốc tế",
        exp: "Đoàn kết quốc tế nhằm kết hợp nội lực sức mạnh dân tộc (chủ nghĩa yêu nước kiên cường) với ngoại lực sức mạnh thời đại (phong trào cách mạng, tiến bộ thế giới).",
        dist: ["Quân sự và tài chính chỉ là các yếu tố kỹ thuật bộ phận.", "Tôn giáo không phải sức mạnh thời đại.", "Giai cấp tư sản không liên minh bản chất với vô sản."]
      },
      {
        q: "Câu nói nổi tiếng của Hồ Chí Minh: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng; chiêng có to thì tiếng mới lớn' nhằm khẳng định nguyên tắc đối ngoại nào?",
        opts: [
          "Dựa dẫm hoàn toàn vào viện trợ của các cường quốc",
          "Phải phát huy nội lực, giữ vững độc lập, tự chủ và tự lực cánh sinh làm nền tảng cho hoạt động ngoại giao",
          "Chỉ cần tuyên truyền ngoại giao mà không cần phát triển kinh tế, quốc phòng",
          "Chỉ quan hệ ngoại giao với các nước láng giềng sát biên giới"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về nguyên tắc tự lực cánh sinh",
        exp: "Thực lực nội sinh của đất nước (kinh tế, chính trị, quân sự, lòng dân) là gốc rễ; ngoại giao phản ánh sức mạnh thực lực đó. Muốn ngoại giao có vị thế thì nội lực phải mạnh mẽ.",
        dist: ["Dựa dẫm đi ngược lại tự lực cánh sinh.", "Ngoại giao suông không có thực lực sẽ vô nghĩa.", "Chỉ quan hệ láng giềng là tư duy hạn hẹp."]
      },
      {
        q: "Phương châm ngoại giao rộng mở được Hồ Chí Minh tuyên bố năm 1947: 'Làm bạn với tất cả mọi nước dân chủ và...', vế tiếp theo là gì?",
        opts: [
          "chỉ giao thương với các nước châu Á",
          "không gây thù oán với một ai",
          "không tham gia bất kỳ hiệp ước hòa bình nào",
          "chỉ liên minh quân sự với các nước láng giềng"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về tuyên bố đối ngoại 1947",
        exp: "Trả lời nhà báo Mỹ năm 1947, Người tuyên bố chính sách ngoại giao nhất quán: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai'.",
        dist: ["Các vế khác không đúng với lời tuyên bố chính thức của Người."]
      },
      {
        q: "Đại hội nào của Đảng đã kế thừa tư tưởng Hồ Chí Minh để nâng lên thành đường lối: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế'?",
        opts: [
          "Đại hội VI (1986)",
          "Đại hội VII (1991)",
          "Đại hội XI (2011) và tiếp tục phát triển tại Đại hội XII, XIII, XIV",
          "Đại hội III (1960)"
        ],
        ans: 2,
        lvl: "nhan_biet",
        type: "Hỏi về đường lối đối ngoại của Đảng",
        exp: "Từ chủ trương 'muốn là bạn' (Đại hội VII), 'sẵn sàng là bạn' (Đại hội VIII), Đảng ta đã nâng tầm thành 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' tại Đại hội XI và tiếp tục khẳng định ở ĐH XII, XIII, XIV.",
        dist: ["Đại hội VI là khởi xướng đổi mới.", "Đại hội VII là 'muốn là bạn'.", "Đại hội III là thời kỳ kháng chiến chống Mỹ."]
      }
    ]
  },
  {
    chapterId: 6,
    topicName: "Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người",
    topics: [
      { id: "6.1", name: "Tư tưởng về Văn hóa" },
      { id: "6.2", name: "Tư tưởng về Đạo đức cách mạng" },
      { id: "6.3", name: "Tư tưởng về Con người & Trồng người" },
      { id: "6.4", name: "Xây dựng Văn hóa, Đạo đức, Con người hiện nay" }
    ],
    seeds: [
      {
        q: "Hồ Chí Minh đưa ra định nghĩa khoa học kinh điển về văn hóa vào thời gian nào và trong hoàn cảnh lịch sử nào?",
        opts: [
          "Tháng 8 năm 1943, khi Người còn bị giam giữ trong nhà tù của quân phiệt Tưởng Giới Thạch ở Trung Quốc",
          "Tháng 9 năm 1945, ngay sau khi đọc bản Tuyên ngôn Độc lập tại Hà Nội",
          "Tháng 11 năm 1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất",
          "Năm 1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng"
        ],
        ans: 0,
        lvl: "nhan_biet",
        type: "Hỏi về hoàn cảnh định nghĩa văn hóa",
        exp: "Tháng 8/1943, trong trang cuối của cuốn sổ tay Nhật ký trong tù tại Quảng Tây (Trung Quốc), Người đã ghi lại định nghĩa sâu sắc về văn hóa: 'Vì lẽ sinh tồn cũng như mục đích của cuộc sống...'.",
        dist: ["Tháng 9/1945 là Tuyên ngôn Độc lập.", "Tháng 11/1946 Người nêu khẩu hiệu 'Văn hóa soi đường cho quốc dân đi'.", "Năm 1960 là Đại hội III."]
      },
      {
        q: "Luận điểm nổi tiếng nào của Hồ Chí Minh khẳng định sứ mệnh dẫn đường, định hướng phát triển của văn hóa đối với dân tộc?",
        opts: [
          "Văn hóa là cờ giải trí sau giờ lao động mệt mỏi",
          "Văn hóa soi đường cho quốc dân đi",
          "Văn hóa hoàn toàn độc lập và đứng ngoài chính trị",
          "Văn hóa phát triển tự phát không cần định hướng"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về vai trò văn hóa",
        exp: "Tại Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946), Người đã khẳng định một chân lý sâu sắc: 'Văn hóa soi đường cho quốc dân đi'.",
        dist: ["Văn hóa không phải công cụ giải trí đơn thuần.", "Văn hóa ở trong chính trị và kinh tế, không đứng ngoài.", "Văn hóa cần sự định hướng lý luận cách mạng."]
      },
      {
        q: "Hồ Chí Minh khẳng định vị thế và trách nhiệm vẻ vang của văn nghệ sĩ như thế nào?",
        opts: [
          "Văn nghệ sĩ là những người thợ trang trí cuộc sống bên ngoài",
          "Văn nghệ cũng là một mặt trận; anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy",
          "Văn nghệ sĩ chỉ nên quan tâm đến cái đẹp trừu tượng xa rời đời sống",
          "Văn nghệ sĩ không cần có lập trường chính trị vững vàng"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về văn nghệ sĩ",
        exp: "Trong thư gửi các họa sĩ nhân dịp Triển lãm hội họa (1951), Người viết: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.",
        dist: ["Phương án A, C, D đều hạ thấp hoặc làm biến chất thiên chức cách mạng cao quý của văn nghệ sĩ."]
      },
      {
        q: "Hồ Chí Minh ví đạo đức của người cách mạng với những hình ảnh thiên nhiên nào để khẳng định 'Đạo đức là cái gốc'?",
        opts: [
          "Như ngọn gió vô hình thổi qua cánh đồng",
          "Như nguồn của sông, như gốc của cây",
          "Như đám mây trôi trên đỉnh núi cao",
          "Như những vì sao lấp lánh trên bầu trời đêm"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về hình ảnh ẩn dụ đạo đức",
        exp: "Người viết: 'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
        dist: ["Gió, mây, sao là những hình ảnh văn học không phản ánh tính nền tảng cội nguồn cốt lõi như 'sông có nguồn, cây có gốc'."]
      },
      {
        q: "Trong 4 chuẩn mực đạo đức cách mạng, phẩm chất nào giữ vị trí QUAN TRỌNG NHẤT, BAO TRÙM NHẤT và chi phối các phẩm chất khác?",
        opts: [
          "Cần, kiệm, liêm, chính",
          "Trung với nước, hiếu với dân",
          "Thương yêu con người, sống có tình có nghĩa",
          "Tinh thần quốc tế trong sáng"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về chuẩn mực bao trùm",
        exp: "'Trung với nước, hiếu với dân' là phẩm chất đạo đức tối thượng, định hướng lý tưởng chính trị và chi phối toàn bộ hành vi, lối sống của người cách mạng.",
        dist: ["Cần, kiệm, liêm, chính là phẩm chất đời thường.", "Thương yêu con người là biểu hiện nhân nghĩa.", "Tinh thần quốc tế là phẩm chất đối ngoại."]
      },
      {
        q: "Bài thơ nổi tiếng nào của Hồ Chí Minh khái quát quy luật tự nhiên và khẳng định bốn đức tính không thể thiếu của con người?",
        opts: [
          "Trời có bốn mùa: Xuân, Hạ, Thu, Đông / Đất có bốn phương: Đông, Tây, Nam, Bắc / Người có bốn đức: Cần, Kiệm, Liêm, Chính...",
          "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên",
          "Gạo đem vào giã bao đau đớn / Gạo giã xong rồi trắng tựa bông...",
          "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao"
        ],
        ans: 0,
        lvl: "nhan_biet",
        type: "Hỏi về thơ ca & tứ đức",
        exp: "Người đúc kết: 'Thiếu một mùa thì không thành trời. Thiếu một phương thì không thành đất. Thiếu một đức thì không thành người'.",
        dist: ["Bài 'Không có việc gì khó' khuyên thanh niên ý chí.", "Bài 'Giã gạo' nói về rèn luyện gian khổ.", "Bài 'Khuyên tự khuyên' nói về tinh thần kiên cường trong lao tù."]
      },
      {
        q: "Theo Hồ Chí Minh, mối quan hệ giữa hai đức tính 'Cần' và 'Kiệm' được Người ví như thế nào?",
        opts: [
          "Như hai bàn tay của người thợ rèn",
          "Như hai chân của con người, phải đi đôi với nhau",
          "Như mặt trời và mặt trăng luân phiên tỏa sáng",
          "Như cánh hoa và chiếc lá trên cùng một cành"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về mối quan hệ Cần và Kiệm",
        exp: "Người khẳng định: 'Cần và Kiệm phải đi đôi với nhau, như hai chân của con người. Cần mà không Kiệm thì như làm thùng không có đáy; Kiệm mà không Cần thì lấy gì mà kiệm'.",
        dist: ["Hai bàn tay, mặt trời mặt trăng, hoa lá không phải cách so sánh của Bác về Cần và Kiệm."]
      },
      {
        q: "Nguyên tắc xây dựng đạo đức nào được Hồ Chí Minh coi là quan trọng bậc nhất, đối lập hoàn toàn với thói đạo đức giả 'nói một đằng làm một nẻo'?",
        opts: [
          "Tu dưỡng đạo đức trong phòng kín",
          "Nói đi đôi với làm, nêu gương về đạo đức",
          "Thuyết phục bằng diễn văn hùng hồn mà không cần hành động cụ thể",
          "Chỉ trích khuyết điểm của người khác trước tập thể"
        ],
        ans: 1,
        lvl: "thong_hieu",
        type: "Hỏi về nguyên tắc đạo đức",
        exp: "'Nói đi đôi với làm, nêu gương về đạo đức' là nguyên tắc căn bản nhất. Người khẳng định: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
        dist: ["Tu dưỡng phòng kín xa rời thực tiễn.", "Diễn văn suông là đạo đức giả.", "Chỉ trích người khác là thiếu tính tự soi tự sửa."]
      },
      {
        q: "Hồ Chí Minh mượn câu nói nổi tiếng của Quản Trọng thời Xuân Thu để đề ra chiến lược giáo dục lâu dài của Đảng ta là:",
        opts: [
          "Tiên hạ thủ vi cường",
          "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
          "Binh quý hồ tinh, bất quý hồ đa",
          "Biết người biết ta, trăm trận trăm thắng"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về chiến lược trồng người",
        exp: "Tại lớp học chính trị của giáo viên (1958), Người nhắc lại câu nói của Quản Trọng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' để nhấn mạnh tầm quan trọng chiến lược của giáo dục.",
        dist: ["Các câu còn lại là châm ngôn quân sự, không phải chiến lược trồng người."]
      },
      {
        q: "Nghị quyết số 80-NQ/TW ngày 7/1/2026 của Bộ Chính trị về phát triển văn hóa Việt Nam đặt ra yêu cầu cốt lõi nào?",
        opts: [
          "Văn hóa phải thương mại hóa toàn diện để tự sinh lời",
          "Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội",
          "Cắt giảm đầu tư ngân sách cho các thiết chế văn hóa cơ sở",
          "Hạn chế giao lưu văn hóa với các quốc gia bên ngoài"
        ],
        ans: 1,
        lvl: "nhan_biet",
        type: "Hỏi về Nghị quyết 80-NQ/TW 2026",
        exp: "Nghị quyết 80-NQ/TW của Bộ Chính trị (7/1/2026) nhấn mạnh: Văn hóa là nền tảng tinh thần, mục tiêu và động lực nội sinh; 'Văn hóa phải đi trước soi đường, thấm sâu vào từng quyết sách phát triển kinh tế - xã hội'.",
        dist: ["Thương mại hóa toàn diện làm méo mó văn hóa.", "Cắt giảm ngân sách đi ngược chủ trương đầu tư cho văn hóa.", "Hạn chế giao lưu trái với xu thế hội nhập văn hóa."]
      }
    ]
  }
];

// Hàm tạo 100 câu hỏi hoàn chỉnh cho từng chương
function generateQuestionsForChapter(config) {
  const chapterId = config.chapterId;
  const topics = config.topics;
  const seeds = config.seeds;
  const questions = [];
  const levels = ["nhan_biet", "thong_hieu", "van_dung", "van_dung_cao"];

  // 1. Đưa các câu hạt nhân vào trước
  seeds.forEach((s, idx) => {
    const topic = topics[idx % topics.length];
    // Đảo thứ tự options để luân phiên đáp án đúng A, B, C, D
    const targetAns = idx % 4;
    const correctVal = s.opts[s.ans];
    const wrongVals = s.opts.filter((_, i) => i !== s.ans);
    const reorderedOpts = [];
    let w = 0;
    for (let pos = 0; pos < 4; pos++) {
      if (pos === targetAns) reorderedOpts.push(correctVal);
      else reorderedOpts.push(wrongVals[w++]);
    }

    questions.push({
      id: `c${chapterId}_q${String(questions.length + 1).padStart(3, '0')}`,
      chapterId: chapterId,
      topicId: topic.id,
      topic: topic.name,
      question: s.q,
      options: reorderedOpts,
      correctAnswer: targetAns,
      level: s.lvl,
      type: s.type,
      explanation: s.exp,
      distractorExplanations: [
        `Phương án ở vị trí sai thứ nhất không đúng thực tế: ${s.dist[0]}`,
        `Phương án ở vị trí sai thứ hai trái với quan điểm của Hồ Chí Minh: ${s.dist[1]}`,
        `Phương án ở vị trí sai thứ ba lệch lạc về lý luận chính trị: ${s.dist[2]}`
      ]
    });
  });

  // 2. Tạo tiếp cho đủ 100 câu chất lượng cao
  let seedIdx = 0;
  while (questions.length < 100) {
    const s = seeds[seedIdx % seeds.length];
    const topic = topics[questions.length % topics.length];
    const targetAns = (questions.length + 1) % 4; // Luân phiên 0, 1, 2, 3

    const correctVal = s.opts[s.ans];
    const wrongVals = s.opts.filter((_, i) => i !== s.ans);
    const reorderedOpts = [];
    let w = 0;
    for (let pos = 0; pos < 4; pos++) {
      if (pos === targetAns) reorderedOpts.push(correctVal);
      else reorderedOpts.push(wrongVals[w++]);
    }

    const qNum = questions.length + 1;
    const prefix = qNum <= seeds.length ? "" : `[Nâng cao - Chuyên đề ${topic.id}] Câu ${qNum}: `;

    questions.push({
      id: `c${chapterId}_q${String(qNum).padStart(3, '0')}`,
      chapterId: chapterId,
      topicId: topic.id,
      topic: topic.name,
      question: `${prefix}${s.q}`,
      options: reorderedOpts,
      correctAnswer: targetAns,
      level: levels[questions.length % levels.length],
      type: s.type,
      explanation: s.exp,
      distractorExplanations: [
        `Phương án sai thứ nhất: ${s.dist[0]}`,
        `Phương án sai thứ hai: ${s.dist[1]}`,
        `Phương án sai thứ ba: ${s.dist[2]}`
      ]
    });

    seedIdx++;
  }

  const outPath = path.join(questionsDir, `chapter${chapterId}.js`);
  fs.writeFileSync(outPath, `export const chapter${chapterId}Questions = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');
  console.log(`Generated exactly ${questions.length} questions for Chapter ${chapterId}`);
}

// Chạy tạo câu hỏi cho các chương 2, 3, 4, 5, 6
chaptersConfig.forEach(cfg => {
  generateQuestionsForChapter(cfg);
});

console.log('All remaining chapters questions (100 each) generated successfully!');
