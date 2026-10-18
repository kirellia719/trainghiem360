const ethnicGroups = [
    {
        id: 1,
        name: "Mảng",
        other: "Mảng Ư, Xá Mảng, Niểng O, Xá Bá O",
        region: "Lai Châu",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e406cef779629409146d0b544b9a324b571cd484c0f8b603c3f84873f566dba140/mang9-8400.jpg.avif",
        intro: "Tên tự gọi: Mảng. Tên gọi khác: Mảng Ư, Xá Mảng, Niểng O, Xá Bá O. Dân số khoảng 4.650 người. Người Mảng cư trú chủ yếu tại tỉnh Lai Châu. Tiếng nói thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á). Nhiều người Mảng sử dụng được tiếng Thái trong giao tiếp hằng ngày.",
        history: "Người Mảng là một trong những cư dân lâu đời ở vùng Tây Bắc Việt Nam. Trải qua nhiều thế hệ, họ sinh sống gắn bó với núi rừng, hình thành bản sắc văn hóa riêng và duy trì nhiều phong tục truyền thống đặc sắc.",
        production: "Nguồn sống chủ yếu dựa vào nương rẫy, trồng lúa nương, ngô, sắn và các loại cây lương thực khác. Ngoài ra còn chăn nuôi gia súc, gia cầm, săn bắt và khai thác lâm sản phục vụ đời sống.",
        customs: "Người Mảng có nhiều nghi lễ gắn với sản xuất nông nghiệp như lễ cúng bản, lễ cầu mùa, lễ mừng cơm mới. Đám cưới thường được tổ chức với sự tham gia của cả cộng đồng. Họ tin vào nhiều vị thần như thần núi, thần rừng, thần sông và vẫn lưu giữ một số tín ngưỡng dân gian truyền thống. Các trò chơi dân gian gồm kéo co, ném còn và các hoạt động múa hát tập thể.",
        lifestyle: "Người Mảng thường ở nhà sàn bằng gỗ, mái lợp tranh hoặc lá. Thức ăn chủ yếu là cơm, rau rừng, cá suối và thịt săn bắt. Nam giới mặc áo ngắn, quần đơn giản; phụ nữ mặc váy truyền thống, áo có hoa văn đặc trưng được dệt thủ công từ sợi bông và nhuộm màu tự nhiên.",
        culture: "Văn nghệ dân gian phong phú với các làn điệu dân ca, múa tập thể và nhạc cụ truyền thống như trống, chiêng, sáo. Các bài hát thường phản ánh lao động sản xuất, tình yêu đôi lứa và cuộc sống cộng đồng.",
        sound: '/assets/sounds/dantoc/DAN TOC MANG.mp3',
        images: [
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8c5ae1e27fe3be8a38ff27f4a87502c6a5cfacd5ee898d181029010948d9846a0/dongbaomang2.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4db8cc3dae7862691eb786be816d8de4599b1b468a74722cf3765eef137efb38b/mang3-971.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8edf0a5010bc7d4ec4604b88c0a3889a4/lehoi11.jpg.avif"
        ]
    },

    {
        id: 2,
        name: "Cống",
        other: "Xắm Khống, Mông Nhé",
        region: "Điện Biên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115f4a1f57e848fcfdca6d8d83162f9dc900fdb41db7b3bf285baac70824424337be667d376bf869970b83bd2a9ea12e0ea/cong-dat1.jpg.avif",
        intro: "Tên tự gọi: Cống. Tên gọi khác: Xắm Khống, Mông Nhé. Dân số khoảng 2.700 người. Người Cống cư trú chủ yếu ở tỉnh Điện Biên. Ngôn ngữ thuộc nhóm Tạng - Miến (ngữ hệ Hán - Tạng).",
        history: "Người Cống sinh sống lâu đời tại vùng biên giới Tây Bắc. Cộng đồng có quy mô dân số nhỏ nhưng vẫn bảo tồn được nhiều nét văn hóa truyền thống đặc sắc.",
        production: "Canh tác lúa nương, ngô, sắn là nghề chính. Ngoài ra còn chăn nuôi trâu bò, lợn gà và khai thác các nguồn lợi từ rừng.",
        customs: "Người Cống tổ chức lễ cúng tổ tiên, lễ cầu mùa và nhiều nghi lễ liên quan đến nông nghiệp. Họ tin vào thần linh và linh hồn của thiên nhiên. Các dịp lễ thường có múa hát cộng đồng và uống rượu cần.",
        lifestyle: "Nhà ở phổ biến là nhà sàn. Trang phục truyền thống được làm từ vải tự dệt. Phụ nữ thường đeo nhiều đồ trang sức bằng bạc. Thức ăn chủ yếu gồm cơm, rau rừng, thịt và cá suối.",
        culture: "Dân ca, dân vũ đóng vai trò quan trọng trong đời sống tinh thần. Những bài hát thường được trình diễn trong đám cưới, lễ hội và các dịp sinh hoạt cộng đồng.",
        sound: '/assets/sounds/dantoc/DAN TOC CONG.mp3',
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc903c513397b0edb4984d201437df44ef5b63a899dc0d598a8828a44264337440e8/congdat2.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2344579346d54efce47330c5faf7c0d28d66404ca85fd260b30b5c5ee8246d331/congbn-6232.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90a0106c3e02cae82d7c7362d52bc6bbbcb7ae13cda333b1a658a4aa09dbd85477/congdat.jpg.avif"
        ]
    },

    {
        id: 3,
        name: "Si La",
        other: "Cú Dề Xử",
        region: "Lai Châu, Điện Biên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a234b75f8e2cf271ed86c4511820cebf8ce378cac481ce53d46de8d9ef8d79a322/sila-dat1-3761.jpg.avif",
        intro: "Tên tự gọi: Si La. Tên gọi khác: Cú Dề Xử. Dân số khoảng 900 người. Người Si La cư trú chủ yếu tại Lai Châu và Điện Biên. Ngôn ngữ thuộc nhóm Tạng - Miến.",
        history: "Đây là một trong những dân tộc có dân số ít nhất Việt Nam. Người Si La vẫn lưu giữ được nhiều giá trị văn hóa truyền thống qua nhiều thế hệ.",
        production: "Canh tác nương rẫy, trồng lúa, ngô và chăn nuôi gia súc nhỏ. Hoạt động kinh tế gắn liền với điều kiện tự nhiên miền núi.",
        customs: "Người Si La có lễ cúng bản, lễ cầu mùa và các nghi lễ vòng đời. Họ tin vào thần linh và các lực lượng siêu nhiên trong tự nhiên. Một số tập tục tín ngưỡng cổ truyền vẫn còn được duy trì.",
        lifestyle: "Nhà ở thường là nhà sàn nhỏ. Trang phục phụ nữ nổi bật với khăn đội đầu và các hạt trang trí nhiều màu sắc. Thức ăn chủ yếu là cơm, ngô, rau rừng và thịt gia súc.",
        culture: "Âm nhạc dân gian, các điệu múa tập thể và truyện kể dân gian là những nét văn hóa tiêu biểu của người Si La.",
        sound: '/assets/sounds/dantoc/DAN TOC SI LA.mp3',
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a234b75f8e2cf271ed86c4511820cebf8cbd0c11a66814e4c79d415647b47e9ca9/sila-dat2-1493.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a24164e6fa41199cdb9c56f05d51c4f56b391da9f9516655dd1dc2b0c8d6ee4519/sila4-4470.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2302584e35c3811ac6f5ed41293bfe282a9fbe1ad6612fb754e16cef8317bf2ed/sila2-9294.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a22ce5f0e2c5c8b5222399659d53cfa5a4dee7f8feb84a418ab1c6dfc50be7977f/sila3-4804.jpg.avif"
        ]
    },

    {
        id: 4,
        name: "La Hủ",
        other: "Xá Lá Vàng, Cò Xung",
        region: "Lai Châu",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115f4a1f57e848fcfdca6d8d83162f9dc907803838c674daa768e50b5f0289b2f5063a899dc0d598a8828a44264337440e8/lahu-dat.jpg.avif",
        intro: "Tên tự gọi: La Hủ. Tên gọi khác: Xá Lá Vàng, Cò Xung. Dân số khoảng 13.000 người. Người La Hủ cư trú chủ yếu tại tỉnh Lai Châu. Ngôn ngữ thuộc nhóm Tạng - Miến.",
        history: "Người La Hủ có truyền thống sinh sống ở vùng núi cao Tây Bắc. Trong lịch sử họ từng nổi tiếng với tập quán du canh du cư.",
        production: "Canh tác nương rẫy, trồng lúa, ngô, sắn và chăn nuôi gia súc. Một số nơi còn phát triển nghề thủ công truyền thống.",
        customs: "Có nhiều nghi lễ liên quan đến thần rừng, thần núi và tổ tiên. Lễ cầu mùa là một trong những hoạt động cộng đồng quan trọng. Các trò chơi dân gian gồm đánh quay, kéo co và múa hát tập thể.",
        lifestyle: "Nhà ở thường làm bằng gỗ và tre nứa. Trang phục được may từ vải tự dệt, màu sắc giản dị. Bữa ăn gồm cơm, ngô, rau rừng và thịt chăn nuôi.",
        culture: "Người La Hủ có kho tàng truyện cổ, dân ca và các làn điệu hát giao duyên phong phú, phản ánh đời sống lao động và tình cảm cộng đồng.",
        sound: '/assets/sounds/dantoc/DAN TOC LA HU.mp3',
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc9025dec4b6acef1945c8d13271b9073a7c63a899dc0d598a8828a44264337440e8/lahu1dat.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc908136884488ef57e5f302dfe7118edbade667d376bf869970b83bd2a9ea12e0ea/lahubadat.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90ba6b7c1fa554f52151c6d5121a93c79f5cfacd5ee898d181029010948d9846a0/lahunamdat.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2ef4befdfb99feb042d3d90044bdb9baedbcb4d044e7897e7ca898b8bb4dae9fa/lahusuoi-1736.jpg.avif"
        ]
    },

    {
        id: 5,
        name: "Lự",
        other: "Nhuồn, Duồn",
        region: "Lai Châu",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f456957652d0c45ed5bf29606a11d377f6a579ab3413cfd5ad55e6fdaa1f80b5519f7341d/dat-6347-1-8292.jpg.avif",
        intro: "Tên tự gọi: Lự. Tên gọi khác: Nhuồn, Duồn. Dân số khoảng 7.000 người. Người Lự sinh sống chủ yếu ở Lai Châu. Ngôn ngữ thuộc nhóm Thái (ngữ hệ Thái - Ka Đai).",
        history: "Người Lự có lịch sử cư trú lâu đời ở vùng Tây Bắc. Họ có nhiều nét văn hóa gần gũi với các dân tộc thuộc nhóm Thái.",
        production: "Giỏi trồng lúa nước, kết hợp chăn nuôi và nghề thủ công như dệt vải, đan lát. Kinh tế truyền thống khá ổn định so với nhiều dân tộc miền núi khác.",
        customs: "Các lễ hội lớn gồm lễ mừng cơm mới, lễ cầu mùa và các nghi lễ liên quan đến tổ tiên. Trong sinh hoạt cộng đồng thường có múa xòe, hát dân ca và các trò chơi dân gian.",
        lifestyle: "Nhà ở là nhà sàn rộng rãi. Phụ nữ nổi tiếng với nghề dệt vải và trang phục truyền thống có hoa văn tinh tế. Thức ăn chính là cơm, cá, rau và các món chế biến từ nông sản địa phương.",
        culture: "Người Lự có nhiều làn điệu dân ca, truyện thơ và nghệ thuật múa truyền thống. Nghề dệt thổ cẩm là một trong những nét văn hóa nổi bật nhất.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dai_minority_in_China.JPG/500px-Dai_minority_in_China.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dai_Buddhist_temple_in_Jinghong%2C_Yunnan%2C_China.jpg/500px-Dai_Buddhist_temple_in_Jinghong%2C_Yunnan%2C_China.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tai_Lue_clothes.jpg.jpg/500px-Tai_Lue_clothes.jpg.jpg",

        ]
    },

    {
        id: 6,
        name: "Nùng",
        other: "",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2e8c1bad3a83f1f5f45fec3c7ce9fc7ea30970a3cf0dd3db683fd07a70f7c7ed6/nung-1853.jpg.avif",
        intro: "Tên tự gọi: Nùng\nTên gọi khác: Không có\nDân số: Khoảng 1.083.000 người\nNgôn ngữ: Tiếng Nùng thuộc nhóm ngôn ngữ Tày - Thái (ngữ hệ Thái - Ka Đai). Người Nùng sinh sống chủ yếu ở vùng Đông Bắc Việt Nam và có truyền thống đoàn kết, cần cù lao động.",
        history: "Dân tộc Nùng có nguồn gốc lâu đời ở vùng Đông Bắc Việt Nam. Trải qua nhiều giai đoạn lịch sử, người Nùng đã góp phần bảo vệ biên giới, phát triển kinh tế miền núi và giữ gìn bản sắc văn hóa dân tộc.",
        production: "Người Nùng chủ yếu trồng lúa nước, lúa nương, ngô và cây ăn quả. Ngoài ra còn chăn nuôi gia súc, gia cầm, làm nghề rèn, dệt vải, đan lát và buôn bán tại các chợ phiên.",
        customs: "Người Nùng tổ chức lễ cưới theo nghi thức truyền thống với nhiều nghi lễ giữa hai họ. Các lễ hội tiêu biểu gồm Lồng Tồng (xuống đồng), hội xuân, hát sli, hát lượn. Họ thờ cúng tổ tiên và tin vào thần núi, thần sông, thần đất.",
        lifestyle: "Người Nùng thường ở nhà sàn hoặc nhà đất. Trang phục truyền thống chủ yếu màu chàm, phụ nữ mặc áo năm thân, đội khăn. Thức ăn phổ biến là xôi ngũ sắc, bánh khảo, vịt quay và các món chế biến từ gạo nếp.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2e8c1bad3a83f1f5f45fec3c7ce9fc7ea30970a3cf0dd3db683fd07a70f7c7ed6/nung-1853.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2d48630bf3e6cfd411668e6d18eedfde0a746b520c83791b64958ba5146b084f1/dtnungthen-1491.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a20c23099674dbba3e32849477bff8ebfa0cbeca8a4d08c77e19fca4b787a1f940/nung1-4218.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a248d60d6c541ad755e157621aff6410c87f8b042a1845cdadaa57996283c31228/nung2-1718.jpg.avif"
        ]
    },
    {
        id: 7,
        name: "Dao",
        other: "Mán",
        region: "Trung du và miền núi phía Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115f4a1f57e848fcfdca6d8d83162f9dc903f0276aa58325ed123eeb608b853efff6092314dacf3cea306995bef6d6c928d8181c345ebef9886929c052b36ed3ccf/ruoc-dau-tac-gia-nguyen-thanh-mien.jpg.avif",
        intro: "Tên tự gọi: Dao\nTên gọi khác: Mán, Động\nDân số: Khoảng 891.000 người\nNgôn ngữ: Tiếng Dao thuộc nhóm ngôn ngữ H'Mông - Dao. Người Dao nổi tiếng với nhiều nhóm địa phương như Dao Đỏ, Dao Tiền, Dao Quần Chẹt...",
        history: "Người Dao cư trú lâu đời tại các vùng núi phía Bắc Việt Nam. Họ lưu giữ nhiều sách cổ viết bằng chữ Nôm Dao và có nền văn hóa dân gian phong phú.",
        production: "Canh tác nương rẫy, trồng lúa, ngô, quế, chè và cây dược liệu. Ngoài ra còn nổi tiếng với nghề làm giấy bản, thêu trang phục và bốc thuốc nam.",
        customs: "Lễ cấp sắc là nghi lễ quan trọng nhất đánh dấu sự trưởng thành của nam giới. Người Dao còn tổ chức Tết Nhảy, lễ cầu mùa và nhiều nghi lễ tín ngưỡng thờ tổ tiên, thần rừng.",
        lifestyle: "Nhà ở thường là nhà đất hoặc nhà nửa sàn. Trang phục được thêu hoa văn rất cầu kỳ, màu đỏ nổi bật. Ẩm thực gồm cơm, rượu men lá, thịt hun khói và các món chế biến từ rau rừng.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc9025ba9c9db5d36f75c82f45fad12235c2/dao.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90016367827d1b46e585727b6295c33582b7ae13cda333b1a658a4aa09dbd85477/daotien.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a20961de7654512f70d9f57c603ae53f0a3eeef1884b9cc8ef90d9231768ac0d80/daodaiban-4175.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2552002093a88129fd082f40d7abac4e81c4105e207821a189a29141310853c25/dtdaoquanchet-6633.jpg.avif"
        ]
    },
    {
        id: 8,
        name: "H'Mông",
        other: "Mèo",
        region: "Miền núi phía Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a291b8e99863f05ded9da1ef441ab205af163e0c64faf45df3dca2f569955f72d5498793ce918e4d5f298c3cde0554b762/xuanbenthem-ngmanhhai-1463.jpg.avif",
        intro: "Tên tự gọi: H'Mông\nTên gọi khác: Mèo\nDân số: Khoảng 1.393.000 người\nNgôn ngữ: Tiếng H'Mông thuộc nhóm ngôn ngữ H'Mông - Dao. Người H'Mông sinh sống chủ yếu ở vùng núi cao phía Bắc.",
        history: "Người H'Mông có truyền thống sinh sống trên các vùng núi cao, gắn bó với thiên nhiên. Họ nổi tiếng với nghề dệt lanh và các lễ hội truyền thống đặc sắc.",
        production: "Canh tác trên nương đá, trồng ngô, lúa nương, cây lanh và cây ăn quả. Chăn nuôi trâu, bò, ngựa, lợn và gia cầm là nguồn thu nhập quan trọng.",
        customs: "Lễ hội Gầu Tào là lễ hội lớn nhất nhằm cầu phúc, cầu sức khỏe và mùa màng. Người H'Mông còn có tục thổi khèn, ném pao, múa khèn và nhiều nghi lễ tín ngưỡng truyền thống.",
        lifestyle: "Nhà ở thường là nhà trình tường hoặc nhà gỗ. Trang phục làm từ vải lanh nhuộm chàm, thêu sáp ong nhiều hoa văn. Thức ăn phổ biến gồm mèn mén, thắng cố, rượu ngô.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc901aa907a2df8a29f16e0886dd54a4d26c/anh207.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90d8e7374a007a5409493e56304ac27c19/anh106.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90c29e38503e5c35ef1e0bc5d54a2ae7feb7ae13cda333b1a658a4aa09dbd85477/mongmc1.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90d8c863fd2ae90af142435a28054dd73d/anh313.jpg.avif"
        ]
    },
    {
        id: 9,
        name: "Hoa",
        other: "Hán",
        region: "ĐBB và ĐBSCL",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611590b4cafef6765d59c079519d0b9b88f4620aaa4e6acc1fce91e25d8f4c2ec2e376329a17486c2697a025597343738597/e36112608773402d1962.jpg.avif",
        intro: "Tên tự gọi: Hoa\nTên gọi khác: Hán\nDân số: Khoảng 750.000 người\nNgôn ngữ: Chủ yếu sử dụng tiếng Hoa thuộc các phương ngữ Quảng Đông, Triều Châu, Phúc Kiến, Hải Nam và tiếng Việt.",
        history: "Người Hoa đến Việt Nam qua nhiều đợt di cư và sinh sống lâu đời. Họ có nhiều đóng góp trong lĩnh vực thương mại, thủ công nghiệp và văn hóa.",
        production: "Chủ yếu kinh doanh, buôn bán, sản xuất thủ công mỹ nghệ, chế biến thực phẩm và dịch vụ thương mại.",
        customs: "Tổ chức Tết Nguyên Đán, Tết Nguyên Tiêu, Tết Đoan Ngọ và nhiều lễ hội truyền thống. Các hội quán, chùa miếu là trung tâm sinh hoạt văn hóa cộng đồng.",
        lifestyle: "Nhà ở chủ yếu tại đô thị. Trang phục hiện đại kết hợp truyền thống trong các dịp lễ. Ẩm thực phong phú với các món như há cảo, vịt quay, mì, bánh bao, chè.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc290b4cafef6765d59c079519d0b9b88f458fa338980da29e01eb14e7220f96b45/hoa1.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f45695765fe0256de82c557a3831397525a0f892b49ddde958f1f9420a6513fd3bfa6054a/dat-0700-5749.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f456957654caf72b4c3dd0ebb0aa78ca5b2a1fdfd4260b3300c75810c80a87d464130300c/hoa1-3606.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc290b4cafef6765d59c079519d0b9b88f45340eab8134454109a1fbd095254d292/hao3.jpeg.avif"
        ]
    },
    {
        id: 10,
        name: "Khơ-me",
        other: "Khmer",
        region: "ĐBSCL",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261158f58dcfed78b36f75768c51c0d3d7c320f025c00e3dea2c366c16d4f06c5a6a125bfb68deb417754aad6c659dd41c94d7cf10a12c31871ed476f73b9428bc0f35cfacd5ee898d181029010948d9846a0/dieu_mua_khmernguyen_thi_thanh_kieu_phuong.jpg.avif",
        intro: "Tên tự gọi: Khmer\nTên gọi khác: Khơ-me\nDân số: Khoảng 1.319.000 người\nNgôn ngữ: Tiếng Khmer thuộc nhóm ngôn ngữ Môn - Khmer (ngữ hệ Nam Á).",
        history: "Người Khmer là cư dân bản địa lâu đời ở vùng đồng bằng sông Cửu Long, có nền văn hóa gắn liền với Phật giáo Nam tông và nhiều công trình chùa tháp đặc sắc.",
        production: "Canh tác lúa nước, trồng màu, nuôi thủy sản và chăn nuôi. Một số địa phương phát triển nghề dệt chiếu, đan lát và làm đường thốt nốt.",
        customs: "Các lễ hội nổi bật gồm Chol Chnam Thmay, Sen Dolta và Oóc Om Bóc. Người Khmer theo Phật giáo Nam tông, coi chùa là trung tâm sinh hoạt văn hóa và tín ngưỡng.",
        lifestyle: "Nhà ở truyền thống là nhà sàn hoặc nhà đất. Trang phục phổ biến là xà rông, khăn rằn và áo bà ba. Món ăn đặc trưng gồm bún nước lèo, cốm dẹp, cà ri Khmer và các món từ thốt nốt.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c324283c4d8fc7eba392bd95aa0ffd0607bb96cf64dac302cd1da812fabb93d1ed2/dscn9692sua.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94a285b0c7e0a961af4c6d117106c82314c2381094306107c33e4c998a37d06158/dat-3757-4944.jpg.avif",
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43ea054aa82f5d36831c1386ab68db9435312432b99cc4e0b22b3526bfbb1bca0b1cfa8beb3bcb6e7f404e3ab7d1d198a6b19f1a765291ca7958b1fb8539c86df17b7500438e4868d4f2e5234407d8ade39eb7ae13cda333b1a658a4aa09dbd85477/langnghedandattruyenthongcuadongbaokhmersoctrangtacgianguyenthithanhkieu.jpg.avif"
        ]
    },

    {
        id: 11,
        name: "Mường",
        other: "Mol, Mual",
        region: "TD và miền núi phía Bắc, BTB",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e9bfb3936a52789705b06d526eebcf7f55cfacd5ee898d181029010948d9846a0/muong3-6526.jpg.avif",
        intro: "Tên tự gọi: Mol (hoặc Mual)\nTên gọi khác: Mọi, Mual\nDân số: Khoảng 1.452.000 người\nNgôn ngữ: Tiếng Mường thuộc nhóm ngôn ngữ Việt - Mường (ngữ hệ Nam Á). Người Mường là một trong những dân tộc có lịch sử lâu đời, có nhiều nét văn hóa gần gũi với người Kinh.",
        history: "Người Mường được xem là hậu duệ của cộng đồng Việt cổ. Trải qua nhiều thế kỷ, họ vẫn bảo tồn được bản sắc văn hóa với các sử thi, truyện cổ và không gian văn hóa cồng chiêng đặc sắc.",
        production: "Sản xuất chủ yếu bằng nghề trồng lúa nước, ngô, sắn và chăn nuôi gia súc. Ngoài ra còn phát triển nghề dệt thổ cẩm, đan lát, làm mộc và khai thác lâm sản.",
        customs: "Người Mường có tục thờ cúng tổ tiên, tổ chức lễ hội Khai Hạ, lễ xuống đồng và nhiều nghi lễ nông nghiệp. Văn hóa cồng chiêng, hát ví, hát thường rang và sử thi 'Đẻ đất đẻ nước' là những giá trị nổi bật.",
        lifestyle: "Nhà ở truyền thống là nhà sàn bằng gỗ lợp cọ hoặc tranh. Phụ nữ mặc váy đen dài, áo cánh ngắn và thắt lưng nhiều màu sắc. Món ăn nổi tiếng gồm cơm lam, thịt lợn muối chua, rượu cần và các món chế biến từ rau rừng.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8ed3d252bb95f4fb0bb762ffbafeabe656916c59155e9d2a01be61f6ea02b8af51/img-1021-5047.jpg.avif",
            "https://cdn.nhandan.vn/images/8836b36b8a921198b62d58be2bd95777b69f283b21aff3cfc077dab6d24e77d7a05f628f3e50943f790cd8d1037e0707/ns.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8ebf83f933df29ae4865e70f42f679d738e667d376bf869970b83bd2a9ea12e0ea/muong2-317.jpg.avif"
        ]
    },
    {
        id: 12,
        name: "Ngái",
        other: "Sán Ngái",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f45695765206d428e6a18e8c994a3159c442b9c24236b71749e834bd6225855557df84a69/ngai-4713.jpg.avif",
        intro: "Tên tự gọi: Ngái\nTên gọi khác: Sán Ngái\nDân số: Khoảng 1.600 người\nNgôn ngữ: Tiếng Ngái thuộc nhóm ngôn ngữ Hán (ngữ hệ Hán - Tạng). Hiện nay đa số người Ngái sử dụng thành thạo tiếng Việt.",
        history: "Người Ngái có nguồn gốc từ các đợt di cư từ Trung Quốc sang Việt Nam nhiều thế kỷ trước. Họ nhanh chóng hòa nhập với cộng đồng các dân tộc khác nhưng vẫn giữ được nhiều phong tục truyền thống.",
        production: "Người Ngái chủ yếu làm ruộng nước, trồng màu, chăn nuôi và buôn bán nhỏ. Một số nơi còn làm nghề thủ công truyền thống.",
        customs: "Người Ngái coi trọng việc thờ cúng tổ tiên, tổ chức lễ cưới hỏi theo phong tục truyền thống và đón Tết Nguyên Đán như người Kinh. Họ cũng duy trì nhiều bài hát dân ca và lễ cúng cầu mùa.",
        lifestyle: "Nhà ở chủ yếu là nhà đất hoặc nhà xây. Trang phục truyền thống khá giản dị, sử dụng vải bông nhuộm màu sẫm. Ẩm thực có các món từ gạo nếp, bánh truyền thống và các món chế biến từ thịt lợn.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f4569576555b7844bcf8c50c789105ed4bc9308e48b3e4b4e8bc3f9a16c32e31fb69ecc5b/ngai-3339.jpg.avif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0BcJKCfwz07h7_tEomtdvq8_LAt9mK7ONrFBzWKRbQ&s=10",
            "https://vietnamtourism.vn/imguploads/tourist/2014/VNDatNuocConNguoi/01Khaiquatchung/03Dancu/Cacdantoc/35DantocNgai.jpg"
        ]
    },
    {
        id: 13,
        name: "Sán Chay",
        other: "Cao Lan, Sán Chỉ",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261158f58dcfed78b36f75768c51c0d3d7c32f25b1e255c6b2bec092750c188a6ee4f/h3_14.jpeg.avif",
        intro: "Tên tự gọi: Cao Lan, Sán Chỉ\nTên gọi khác: Sán Chay\nDân số: Khoảng 201.000 người\nNgôn ngữ: Tiếng Cao Lan thuộc nhóm Tày - Thái, tiếng Sán Chỉ thuộc nhóm Hán (ngữ hệ Hán - Tạng).",
        history: "Người Sán Chay sinh sống lâu đời tại vùng trung du và miền núi phía Bắc. Họ nổi tiếng với kho tàng dân ca Sình ca và nhiều giá trị văn hóa truyền thống đặc sắc.",
        production: "Canh tác lúa nước, trồng ngô, chè và cây ăn quả. Ngoài ra còn chăn nuôi gia súc, gia cầm và làm nghề đan lát.",
        customs: "Người Sán Chay tổ chức lễ hội cầu mùa, lễ hội Lồng Tồng và hát Sình ca trong các dịp hội xuân. Họ thờ cúng tổ tiên và các vị thần bảo hộ mùa màng.",
        lifestyle: "Nhà ở là nhà sàn hoặc nhà đất. Trang phục làm từ vải chàm, phụ nữ đội khăn và đeo nhiều đồ trang sức bạc. Món ăn truyền thống gồm bánh ngải, xôi ngũ sắc và rượu men lá.",
        images: [
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43eae19e04bc65c96da8826e424aa0aa44df/lecung.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe9418e58a2a2b75df94d6403fc2c5f6b866/7-1-2208.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c327d539566b4b8ef839e23e65bfedd3c11/10.jpeg.avif",
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43eac9c1f4a692b0794f7461ac478543e20a548103f157b9b1b326b76d6c766fe1f37c9275aba83e03d8294fff5b374bf1af/5codauchuremoiruoumoitrau.jpeg.avif"
        ]
    },
    {
        id: 14,
        name: "Chăm",
        other: "",
        region: "Duyên Hải NTB và ĐBSCL",
        img: "https://cdn.nhandan.vn/images/ada75e7126290fd54816a4df188ba1c6a5ca6427f0b4fc8e077cf2ec7a2620b4ae3617cb8be5f351561309f4a27b8223961c50dae5403ccd73ffb13f154858ec5e210519f4c5d8e69be832eba3ea8b7a/ndo_br_thiet-ke-chua-co-ten-231.png.avif",
        intro: "Tên tự gọi: Chăm\nTên gọi khác: Không có\nDân số: Khoảng 179.000 người\nNgôn ngữ: Tiếng Chăm thuộc nhóm ngôn ngữ Mã Lai - Đa Đảo (ngữ hệ Nam Đảo). Người Chăm có nền văn hóa lâu đời gắn với Vương quốc Champa.",
        history: "Người Chăm là hậu duệ của cư dân Vương quốc Champa cổ. Họ để lại nhiều công trình kiến trúc nổi tiếng như các tháp Chăm và kho tàng văn hóa đặc sắc.",
        production: "Người Chăm trồng lúa, bắp, nho, táo và chăn nuôi dê, cừu. Họ nổi tiếng với nghề dệt thổ cẩm, làm gốm thủ công và chế tác trang sức.",
        customs: "Người Chăm tổ chức lễ hội Katê, Ramưwan và nhiều nghi lễ tôn giáo. Cộng đồng Chăm theo Bàlamôn giáo hoặc Hồi giáo. Họ có nhiều làn điệu dân ca, múa truyền thống và nhạc cụ như trống Ginăng, kèn Saranai.",
        lifestyle: "Nhà ở thường là nhà trệt. Phụ nữ mặc váy dài, áo truyền thống và đội khăn; nam mặc xà rông. Món ăn đặc trưng gồm cà ri dê, cơm nị, bánh hồng và nhiều món mang hương vị Nam Trung Bộ.",
        images: [
            "https://cdn.nhandan.vn/images/e53b3df5710fb57b6bbd10e5f5208389bfa788a53dc6a3dd4c2a792d22bb02b341e7392518d3fee2ea3d2ead60859dcd0fb738d71059a7a22f0558ac4f7623a2/my-son-5630.jpg.avif",
            "https://cdn.nhandan.vn/images/6e7c11c79f8e755392f0c5a3337fe0d6875abc7766841fee066cd74ffcf3d80046d9e3974e143d51da1a6234806d03c917ceab64e087be3b09929c81ca7f6433927a61f968a64405db2375e00074692263a899dc0d598a8828a44264337440e8/nguoi-cham-2215-1457-2128-7362.png.avif",
            "https://cdn.nhandan.vn/images/6e7c11c79f8e755392f0c5a3337fe0d6858d04da78e44708cb5276d71907649292a186ddd50609f6d7302411622aae41365a4b9fb1c31329ff0eb885288fb485b7ae13cda333b1a658a4aa09dbd85477/bai-nguyen-trung3-3834.jpg.avif"
        ]
    },
    {
        id: 15,
        name: "Cơ Ho",
        other: "K'ho",
        region: "Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94584e9d10c0e2fd7b1f72a95b97d80fb5e667d376bf869970b83bd2a9ea12e0ea/co-ho3-2753.jpg.avif",
        intro: "Tên tự gọi: K'ho\nTên gọi khác: Cơ Ho\nDân số: Khoảng 201.000 người\nNgôn ngữ: Tiếng Cơ Ho thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Cơ Ho là cư dân bản địa lâu đời của vùng Tây Nguyên. Họ có nền văn hóa cồng chiêng đặc sắc và nhiều sử thi, truyện kể dân gian được lưu truyền qua nhiều thế hệ.",
        production: "Người Cơ Ho làm rẫy, trồng lúa, cà phê, chè, hồ tiêu và chăn nuôi. Nghề dệt thổ cẩm, đan lát và rèn công cụ cũng khá phát triển.",
        customs: "Người Cơ Ho tổ chức lễ mừng lúa mới, lễ đâm trâu và nhiều nghi lễ gắn với tín ngưỡng đa thần. Văn nghệ dân gian gồm cồng chiêng, múa xoang và hát kể sử thi.",
        lifestyle: "Nhà ở truyền thống là nhà sàn dài bằng gỗ và tre nứa. Trang phục dệt từ sợi bông với hoa văn đơn giản. Người Cơ Ho thường ăn cơm, rau rừng, thịt nướng, uống rượu cần trong các dịp lễ hội cộng đồng.",
        images: [
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43ea4ba50ecb3e187c2abad34558ae47cb86b7ae13cda333b1a658a4aa09dbd85477/img0267.jpeg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c3229eddbec863bda080c6a774d105632df7c9275aba83e03d8294fff5b374bf1af/img03261.jpeg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c321c4728a0e43f1c449ee783b18d3d39b0b7ae13cda333b1a658a4aa09dbd85477/anuong.jpeg.avif"
        ]
    },

    {
        id: 16,
        name: "Xơ Đăng",
        other: "Xê Đăng, Sedang",
        region: "Miền Trung - Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94f8aee0e915cc80cae3b75c58af66d1b964a25046fd43bca4750b56cbed913a66/xo-dang16-9469.jpg.avif",
        intro: "Tên tự gọi: Xơ Đăng\nTên gọi khác: Xê Đăng, Sedang\nDân số: Khoảng 212.000 người\nNgôn ngữ: Tiếng Xơ Đăng thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á). Người Xơ Đăng cư trú chủ yếu ở khu vực Bắc Tây Nguyên.",
        history: "Người Xơ Đăng là một trong những cư dân bản địa lâu đời của Tây Nguyên. Họ nổi tiếng với truyền thống đoàn kết cộng đồng, kho tàng sử thi, truyện kể dân gian và văn hóa cồng chiêng.",
        production: "Chủ yếu làm nương rẫy, trồng lúa, ngô, sắn, cà phê và hồ tiêu. Ngoài ra còn săn bắt, hái lượm, đan lát, dệt thổ cẩm và rèn công cụ lao động.",
        customs: "Có các lễ hội như mừng lúa mới, lễ đâm trâu, lễ bỏ mả và lễ cúng bến nước. Người Xơ Đăng tin vào các vị thần tự nhiên, thờ cúng tổ tiên và rất coi trọng nhà rông - trung tâm sinh hoạt cộng đồng.",
        lifestyle: "Người Xơ Đăng sống trong nhà sàn hoặc nhà dài bằng gỗ và tre. Trang phục dệt bằng sợi bông với hoa văn đỏ, đen đặc trưng. Thực phẩm chủ yếu là cơm, rau rừng, thịt nướng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c32807bcd9b63497f7252e7033cdb00837c/24.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94fe39fb647efbfc32dbc5855bd531efa55cfacd5ee898d181029010948d9846a0/xo-dang4-185.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c32fa7bc1374dbe4f00c5c3faa372561602/h21.jpeg.avif"
        ]
    },
    {
        id: 17,
        name: "Sán Dìu",
        other: "Sơn Dao",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611590b4cafef6765d59c079519d0b9b88f4f2547809c4ec347f44097aeb58db70edb4c4b5461f4b472bd34d2b220fccd20657ed7acb4d544ab353c252131d673bf92428d55b7f980144278baf4c7f8b2c641b7ebca4412219d11aaa9a154302594dc073a814021a6c84dc8368fb0a816729f74284b5731f75b1c2262815014ec0862e5731ac51e3c45d2aa780283db4b11f/3252-mua-hoa-tren-dinh-tay-thien11-1643685023-16470791441601689231894-15-0-415-640-crop-1647079152293849116224.jpeg.avif",
        intro: "Tên tự gọi: Sán Dìu\nTên gọi khác: Sơn Dao\nDân số: Khoảng 184.000 người\nNgôn ngữ: Tiếng Sán Dìu thuộc nhóm ngôn ngữ Hán (ngữ hệ Hán - Tạng), hiện nay nhiều người sử dụng thành thạo tiếng Việt.",
        history: "Người Sán Dìu có nguồn gốc từ các đợt di cư đến Việt Nam cách đây vài thế kỷ. Họ đã định cư lâu dài tại vùng trung du Bắc Bộ và phát triển nền văn hóa riêng.",
        production: "Người Sán Dìu chủ yếu trồng lúa nước, chè, cây ăn quả và chăn nuôi gia súc, gia cầm. Ngoài ra còn làm nghề thủ công và buôn bán nhỏ.",
        customs: "Người Sán Dìu có tục hát Soọng cô nổi tiếng trong các dịp lễ hội và giao duyên. Họ tổ chức cưới hỏi theo nghi lễ truyền thống, thờ cúng tổ tiên và tổ chức các lễ cầu mùa hằng năm.",
        lifestyle: "Nhà ở thường là nhà đất hoặc nhà xây. Trang phục truyền thống màu chàm đơn giản. Ẩm thực gồm bánh chưng gù, bánh tro, xôi và nhiều món ăn từ gạo nếp.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f456957651ccc8b8f5fb6b5d50161aa71b7b944cd10b422c739dd00f3ca8d0330ef5d01eb/dat-1026-2773.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f456957653b2c37b3be9620d8c838c5edcc264a385f87059df069f45e3a32749f3a2d00d2/dat-1188-9164.jpg.avif",
        ]
    },
    {
        id: 18,
        name: "Hrê",
        other: "",
        region: "Miền Trung",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94c4030c40c6ff0f7b806547b408ad7f13b7ae13cda333b1a658a4aa09dbd85477/hre4-7959.jpg.avif",
        intro: "Tên tự gọi: Hrê\nTên gọi khác: Không có\nDân số: Khoảng 150.000 người\nNgôn ngữ: Tiếng Hrê thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Hrê sinh sống lâu đời tại khu vực miền núi miền Trung. Họ có truyền thống chống giặc ngoại xâm và lưu giữ nhiều sử thi, truyện cổ và dân ca đặc sắc.",
        production: "Người Hrê làm ruộng nước, trồng lúa rẫy, ngô, sắn và chăn nuôi trâu, bò. Nghề đan lát và dệt thổ cẩm cũng khá phát triển.",
        customs: "Lễ hội mừng lúa mới, lễ ăn trâu và các nghi lễ cầu mùa được tổ chức hằng năm. Người Hrê tin vào thần linh, thờ cúng tổ tiên và yêu thích các điệu hát Ka choi, Ta lêu.",
        lifestyle: "Nhà ở chủ yếu là nhà sàn. Trang phục truyền thống dệt thủ công với hoa văn đơn giản. Người Hrê thường ăn cơm, rau rừng, cá suối, thịt nướng và uống rượu cần trong các dịp lễ hội.",
        images: [
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43eaec2f2b6de068f9043d0117c63b552c41/8.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe941f1ee6aadc4cce19097665a07df9d538b7ae13cda333b1a658a4aa09dbd85477/hre5-2823.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe9470f497b09cc5e12e8614cd16b0baf642b7ae13cda333b1a658a4aa09dbd85477/hre2-2340.jpg.avif"
        ]
    },
    {
        id: 19,
        name: "Ra Glai",
        other: "Raglai",
        region: "Nam Trung Bộ",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f45695765283493bdaeb9a4e30c09ae1d6a4e74a947ee6eec5f98a1c13f0c0143dbe9b94b/raglai11-8631.jpg.avif",
        intro: "Tên tự gọi: Raglai\nTên gọi khác: Ra Glai\nDân số: Khoảng 147.000 người\nNgôn ngữ: Tiếng Raglai thuộc nhóm ngôn ngữ Nam Đảo. Người Raglai có quan hệ gần gũi với dân tộc Chăm.",
        history: "Người Raglai cư trú lâu đời ở vùng núi Nam Trung Bộ. Họ nổi tiếng với kho tàng truyện cổ, sử thi và nhiều nhạc cụ truyền thống độc đáo.",
        production: "Chủ yếu làm rẫy, trồng lúa, bắp, sắn, điều và cây ăn quả. Ngoài ra còn săn bắt, hái lượm, chăn nuôi và đan lát.",
        customs: "Người Raglai tổ chức lễ bỏ mả, lễ mừng lúa mới, lễ cưới và nhiều nghi lễ tín ngưỡng. Họ theo chế độ mẫu hệ, có nhiều làn điệu dân ca và sử dụng đàn Chapi nổi tiếng.",
        lifestyle: "Nhà ở truyền thống là nhà sàn nhỏ bằng gỗ và tre. Trang phục đơn giản, dệt thủ công. Thực phẩm gồm cơm, rau rừng, thịt nướng và rượu cần trong các dịp lễ hội.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f45695765283493bdaeb9a4e30c09ae1d6a4e74a950f5b2d3471b67f18a07f0b031121996/raglai13-6030.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f456957651e32c3017f7212252148ca12d73590bd1eb2f0d3927c0071aaac374707844c2e/raglai4-3564.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f4569576584749c567b62e1ca6fdeead986cf4756e7edee3a59414d701b8004aa8036e1ee/raglai-963.jpg.avif"
        ]
    },
    {
        id: 20,
        name: "M'Nông",
        other: "Mnông",
        region: "Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94c95faca23d5f49dcd8dd4c25414dd3b163a899dc0d598a8828a44264337440e8/mnong-8759.jpg.avif",
        intro: "Tên tự gọi: M'Nông\nTên gọi khác: Mnông\nDân số: Khoảng 127.000 người\nNgôn ngữ: Tiếng M'Nông thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người M'Nông là cư dân bản địa lâu đời ở Tây Nguyên. Họ nổi tiếng với truyền thống săn bắt voi, sử thi Ot Ndrong và không gian văn hóa cồng chiêng Tây Nguyên được UNESCO công nhận.",
        production: "Canh tác lúa rẫy, cà phê, hồ tiêu, cao su và chăn nuôi gia súc. Người M'Nông còn làm nghề đan lát, rèn và chế tác nhạc cụ truyền thống.",
        customs: "Có lễ hội đâm trâu, lễ cúng bến nước, lễ mừng lúa mới và lễ cúng sức khỏe. Người M'Nông tin vào thần linh, thờ cúng tổ tiên và duy trì nhiều nghi thức truyền thống.",
        lifestyle: "Nhà ở là nhà dài hoặc nhà sàn bằng gỗ. Trang phục dệt thủ công màu đen kết hợp hoa văn đỏ, trắng. Người M'Nông thường ăn cơm, thịt nướng, cá suối, rau rừng và uống rượu cần trong các dịp lễ.",
        images: [
            "https://cdn.nhandan.vn/images/a7f7a3d09022451960afcabc731d1d70f28c018f6d7e0bb14594547716c7786a0893fd98a467c326d8a12d535684642163a899dc0d598a8828a44264337440e8/mnong3-5362.jpg.avif",
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43eaba27137b51f5d9424ae2b0bf8197d861eb36e926d13332dc4a23700d24d68a07/viewimagehandler2.jpeg.avif",
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43ea9a6ec1f3436f263c3055f4a8f9b46894f8a72c14a226e92545b7341d6e7cca3d7ad7e51b9fa894576566a9d0de7c39bb/images522615a4chieckhohoamnong1.jpeg.avif"
        ]
    },

    {
        id: 21,
        name: "Thổ",
        other: "Tày Poọng, Cuối, Mọn, Họ, Đan Lai, Ly Hà",
        region: "Bắc Trung Bộ",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e83ba1d89a7bf7e6e13b2c8986e099831/tho-108.jpg.avif",
        intro: "Tên tự gọi: Thổ\nTên gọi khác: Tày Poọng, Cuối, Mọn, Họ, Đan Lai, Ly Hà\nDân số: Khoảng 91.000 người\nNgôn ngữ: Tiếng Thổ thuộc nhóm ngôn ngữ Việt - Mường (ngữ hệ Nam Á). Một số nhóm sử dụng tiếng gần với tiếng Mường hoặc tiếng Kinh.",
        history: "Người Thổ cư trú lâu đời ở vùng miền tây Nghệ An và Thanh Hóa. Họ hình thành từ nhiều nhóm cư dân bản địa khác nhau và có nền văn hóa mang đậm bản sắc vùng Bắc Trung Bộ.",
        production: "Chủ yếu trồng lúa nước, lúa rẫy, ngô, sắn, chăn nuôi trâu, bò, lợn, gà và làm nghề đan lát, dệt vải.",
        customs: "Người Thổ thờ cúng tổ tiên, thần núi, thần sông. Họ tổ chức lễ mừng cơm mới, lễ cầu mùa và có các làn điệu dân ca như hát Ví, hát Giặm.",
        lifestyle: "Nhà ở truyền thống là nhà sàn hoặc nhà đất. Trang phục đơn giản, dệt bằng vải bông nhuộm chàm. Món ăn quen thuộc là cơm nếp, cá suối, rau rừng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8ee2f9a2e2b922af9d42bbab261b4e97fc63a899dc0d598a8828a44264337440e8/tho1-7048.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e9fd575decc751cdbffe8d5d5b2e6bb487d071577ce164f655b624116f2a30782b20297f5a1cdf32a3a8d119a2198c09a82efdd08e5c71261960fc65a666f59b7/z3855491850033-e5d9659f1a57339603cd25b1a608a402-9086.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e2f32334079fd5a4722099d368220807f5cfacd5ee898d181029010948d9846a0/tho2-1-4540.jpg.avif"
        ]
    },
    {
        id: 22,
        name: "Khơ Mú",
        other: "Xá Cẩu, Mứn Xen, Pu Thênh",
        region: "Tây Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4fba2f40d0b5382845204500990a6edeae6a8f521b978213e988999c4c68e04ce/kho-mu8-1-8519.jpg.avif",
        intro: "Tên tự gọi: Khơ Mú\nTên gọi khác: Xá Cẩu, Mứn Xen, Pu Thênh\nDân số: Khoảng 91.000 người\nNgôn ngữ: Tiếng Khơ Mú thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Khơ Mú là cư dân sinh sống lâu đời ở vùng Tây Bắc Việt Nam. Họ có nhiều truyền thuyết về nguồn gốc dân tộc và vẫn lưu giữ được nhiều phong tục truyền thống.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn, chăn nuôi gia súc, gia cầm. Ngoài ra còn săn bắt, hái lượm và đan lát.",
        customs: "Người Khơ Mú tổ chức lễ mừng cơm mới, lễ cầu mùa và nhiều nghi lễ cúng thần rừng, thần núi. Dân ca, múa xòe và tiếng khèn là những nét văn hóa đặc sắc.",
        lifestyle: "Nhà ở là nhà sàn bằng gỗ và tre. Trang phục chủ yếu màu chàm, phụ nữ mặc váy dài và đeo nhiều đồ trang sức bạc. Thực phẩm gồm cơm nếp, cá suối, rau rừng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8a0da9ae950339b8d3ca51c3a46c555cee667d376bf869970b83bd2a9ea12e0ea/khomutrahat.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8c4f48643f869ee02d3edbaf1011295a1b7ae13cda333b1a658a4aa09dbd85477/khomugoro.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4fba2f40d0b5382845204500990a6edea8c0830969fc8f2316d22ff5386bb0f56/kho-mu1-6305.jpg.avif"
        ]
    },
    {
        id: 23,
        name: "Cơ Tu",
        other: "Ca Tu",
        region: "Duyên Hải Miền Trung",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94489fecb29724b3d25d9cc6261b140a1e63a899dc0d598a8828a44264337440e8/cotu3-8006.jpg.avif",
        intro: "Tên tự gọi: Cơ Tu\nTên gọi khác: Ca Tu\nDân số: Khoảng 75.000 người\nNgôn ngữ: Tiếng Cơ Tu thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Cơ Tu sinh sống lâu đời dọc dãy Trường Sơn. Họ nổi tiếng với kiến trúc nhà Gươl, nghệ thuật điêu khắc gỗ và văn hóa cồng chiêng.",
        production: "Làm nương rẫy, trồng lúa, sắn, bắp, chăn nuôi trâu bò, săn bắt và dệt thổ cẩm.",
        customs: "Có lễ hội mừng lúa mới, lễ dựng nhà Gươl, lễ đâm trâu và nhiều nghi lễ cúng thần linh. Người Cơ Tu yêu thích múa tung tung da dá và diễn tấu cồng chiêng.",
        lifestyle: "Nhà ở truyền thống là nhà sàn và nhà Gươl ở trung tâm làng. Trang phục dệt thủ công với hoa văn đỏ, trắng, đen. Người dân thường ăn cơm, thịt nướng, rau rừng và uống rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43ea2f088a36c4e5b8e8a44b683f7e47d08fb7ae13cda333b1a658a4aa09dbd85477/img0996.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94b69461acead410f3e9a19ccdb52851a563a899dc0d598a8828a44264337440e8/cotu1-3645.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c323364ec835261c1e9206eca4833123df8/15.jpeg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c321e0c1a13c5d95f7911ab11bb907b957bddfc830d6d524d318fcf4691de7296fd6c7eced9e3b39627b15cce031aca83dd2eebd0608237e4e52a9e184b8f664a462589ec623533b6ce2231024f64ee4492/79957vhttdtgioithieuamthucdactrungcuadongbaodantoccactinhmientrung.jpeg.avif"
        ]
    },
    {
        id: 24,
        name: "Giáy",
        other: "Nhắng, Dẳng",
        region: "Tây Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115f4a1f57e848fcfdca6d8d83162f9dc903588fba9f9b2033e44a8d0bf3ead4312e667d376bf869970b83bd2a9ea12e0ea/giay-dat1.jpg.avif",
        intro: "Tên tự gọi: Giáy\nTên gọi khác: Nhắng, Dẳng\nDân số: Khoảng 67.000 người\nNgôn ngữ: Tiếng Giáy thuộc nhóm ngôn ngữ Tày - Thái (ngữ hệ Thái - Ka Đai).",
        history: "Người Giáy cư trú chủ yếu ở vùng Tây Bắc. Họ có truyền thống làm ruộng nước và sở hữu nhiều làn điệu dân ca, truyện cổ đặc sắc.",
        production: "Canh tác lúa nước, trồng ngô, rau màu, chăn nuôi gia súc và làm nghề dệt, đan lát.",
        customs: "Người Giáy tổ chức lễ hội Roóng Poọc đầu năm để cầu cho mùa màng bội thu. Họ thờ cúng tổ tiên, thần đất và duy trì nhiều hình thức hát giao duyên.",
        lifestyle: "Nhà ở là nhà sàn hoặc nhà đất. Trang phục truyền thống màu chàm, phụ nữ mặc áo năm thân và đội khăn. Ẩm thực gồm xôi ngũ sắc, bánh truyền thống và rượu ngô.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc9074d755e64aed2314bbb2e613f904f53cb7ae13cda333b1a658a4aa09dbd85477/giaydat.jpg.avif",
            "https://icdn.dantri.com.vn/thumb_w/960/2019/07/20/xao-xuyen-net-dep-sac-nuoc-huong-troidocx-1563631475561.jpeg",
            "https://tptravel.com.vn/mediacenter/media/images/1850/news/2/s900_0/36_1518497034_835a826d0a9d32d.jpg"
        ]
    },
    {
        id: 25,
        name: "Gié-Triêng",
        other: "Giẻ Triêng",
        region: "Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe943abf99f060c9c2c60f55daf6b24e9eff16e5c8ada5c99a3a1e97cc82e8af1fe3/gietrieng5-6832.jpg.avif",
        intro: "Tên tự gọi: Gié-Triêng\nTên gọi khác: Giẻ Triêng\nDân số: Khoảng 63.000 người\nNgôn ngữ: Tiếng Gié-Triêng thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Gié-Triêng là cư dân bản địa ở khu vực Bắc Tây Nguyên. Họ có truyền thống gắn bó với rừng núi và vẫn bảo tồn được nhiều sử thi, truyện kể dân gian.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn, chăn nuôi trâu bò, săn bắt, hái lượm và đan lát.",
        customs: "Người Gié-Triêng tổ chức lễ mừng lúa mới, lễ cúng bến nước, lễ đâm trâu và nhiều nghi lễ tín ngưỡng dân gian. Cồng chiêng và múa truyền thống là nét văn hóa nổi bật.",
        lifestyle: "Nhà ở là nhà sàn bằng gỗ và tre. Trang phục dệt thủ công với hoa văn truyền thống. Thức ăn chủ yếu là cơm, rau rừng, cá suối, thịt nướng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c3210223c0a122522e31cda5eb50a933fdd/gt1.jpeg.avif",
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43ea7453986be35fae71bba1dbe257bf612a/gie11.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe94ff85fa488ba3b39b6f1f4b4c888b3b58c50d3376a1fe6b1e1860cf8f6d366f7e/gietrieng10-9461.jpg.avif"
        ]
    },

    {
        id: 26,
        name: "Mạ",
        other: "Châu Mạ, Mạ Ngăn, Mạ Tô",
        region: "TN và ĐNB",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e438fe7a8bdbd0a71f864fcddf322bd2bdc633b927451e8a1b06f8f7aca1260128/ma15-9458.jpg.avif",
        intro: "Tên tự gọi: Mạ\nTên gọi khác: Châu Mạ, Mạ Ngăn, Mạ Tô\nDân số: Khoảng 50.000 người\nNgôn ngữ: Tiếng Mạ thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á). Người Mạ cư trú lâu đời ở vùng Nam Tây Nguyên và Đông Nam Bộ.",
        history: "Người Mạ là một trong những cư dân bản địa lâu đời của vùng Nam Tây Nguyên. Họ từng sinh sống chủ yếu bằng săn bắt, hái lượm và canh tác nương rẫy trước khi phát triển nông nghiệp ổn định.",
        production: "Trồng lúa rẫy, lúa nước, bắp, sắn, cà phê, điều; chăn nuôi gia súc, gia cầm. Ngoài ra còn nổi tiếng với nghề đan lát và dệt thổ cẩm.",
        customs: "Người Mạ tổ chức lễ mừng lúa mới, lễ cúng bến nước, lễ bỏ mả và nhiều nghi lễ nông nghiệp. Họ tin vào thần núi, thần rừng, thần lúa và duy trì văn hóa cồng chiêng.",
        lifestyle: "Nhà ở truyền thống là nhà sàn bằng gỗ và tre. Trang phục dệt thủ công màu đen kết hợp hoa văn đỏ. Thực phẩm chủ yếu gồm cơm, rau rừng, thịt nướng, cá suối và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8794e7624c9ae8bd1d84ebdb3ebbd5c6e245ad5c0295cd64df78be707a9af2a32/images2253130a325.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d871bb9159dd810df5921766c250104233/ma2.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e448057cdfe3d5e8f6bbaf0fbc46f770d5c7b40cfc1513ec6e00787ea52f359317/ma6-7412.jpg.avif"
        ]
    },
    {
        id: 27,
        name: "Co",
        other: "Cor",
        region: "DH NTB",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4b214feb7fee412315a92440d19a4e1aa0c9fe513d20315cafd088e45c938b7f6/cor15-6920.jpg.avif",
        intro: "Tên tự gọi: Co\nTên gọi khác: Cor\nDân số: Khoảng 40.000 người\nNgôn ngữ: Tiếng Co thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Co sinh sống lâu đời ở vùng núi miền Trung. Họ có nền văn hóa truyền thống phong phú gắn với rừng và nền nông nghiệp nương rẫy.",
        production: "Làm nương rẫy, trồng lúa, quế, keo, sắn, ngô; chăn nuôi gia súc và phát triển nghề đan lát, rèn công cụ sản xuất.",
        customs: "Các lễ hội truyền thống gồm lễ mừng lúa mới, lễ cầu mùa, lễ cúng thần làng. Người Co yêu thích nghệ thuật cồng chiêng, múa và hát dân gian.",
        lifestyle: "Người Co sống trong nhà sàn bằng gỗ, tre nứa. Trang phục dệt thủ công với màu chàm chủ đạo. Thức ăn gồm cơm, rau rừng, cá suối, thịt nướng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4f0560f7a6e890c4ee1730b45377afb63eadc5858eaf1cb76759856f251564ad0/cor16-4031.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d89b232fc1fca77ee4283fb872a87c4cde/cor4.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e40c0908bda1a2d517ab1fd74775ce2278a29efc92934202c3bee2048a2b89664d/cor7-9020.jpg.avif"
        ]
    },
    {
        id: 28,
        name: "Chơ Ro",
        other: "Châu Ro, Dơ Ro",
        region: "ĐNB",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e462a467d7b97d4f683a586edd803cafe18d556b2342d2b22477c3244d6d1b1e2c/tha-4428-1527.jpg.avif",
        intro: "Tên tự gọi: Chơ Ro\nTên gọi khác: Châu Ro, Dơ Ro\nDân số: Khoảng 30.000 người\nNgôn ngữ: Tiếng Chơ Ro thuộc nhóm ngôn ngữ Môn - Khơ Me (ngữ hệ Nam Á).",
        history: "Người Chơ Ro là cư dân bản địa ở khu vực Đông Nam Bộ. Họ có truyền thống sinh sống bằng nông nghiệp và vẫn bảo tồn được nhiều phong tục cổ truyền.",
        production: "Canh tác lúa nước, trồng điều, cao su, hồ tiêu, chăn nuôi gia súc, gia cầm và làm nghề đan lát.",
        customs: "Người Chơ Ro tổ chức lễ Sayangva (lễ cúng thần lúa), lễ mừng lúa mới và nhiều nghi lễ tín ngưỡng dân gian. Họ thờ cúng tổ tiên và các vị thần bảo hộ mùa màng.",
        lifestyle: "Nhà ở truyền thống là nhà sàn hoặc nhà đất. Trang phục đơn giản làm từ vải dệt thủ công. Người Chơ Ro thường ăn cơm, rau rừng, cá suối, thịt nướng và uống rượu cần trong các dịp lễ.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e462a467d7b97d4f683a586edd803cafe1eae1a6395f2cdf21eff2b843fa137ef6/tha-4421a-5918.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d82b83f14a4559c7dd1391d771b1f36722/5.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8060f69aad713a372b3ff5813fcbde77f/nhachoro.jpg.avif"
        ]
    },
    {
        id: 29,
        name: "Xinh Mun",
        other: "Puộc, Pụa",
        region: "Tây Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4e3c7370d9fd6091e5242652be576453d8efa895e47d03b33f8f0bb4abb1c0a38/xinh-mun-184.jpg.avif",
        intro: "Tên tự gọi: Xinh Mun\nTên gọi khác: Puộc, Pụa\nDân số: Khoảng 29.000 người\nNgôn ngữ: Tiếng Xinh Mun thuộc nhóm ngôn ngữ Khơ Mú (ngữ hệ Nam Á).",
        history: "Người Xinh Mun cư trú lâu đời ở vùng Tây Bắc Việt Nam. Họ có đời sống gắn bó với rừng núi và vẫn lưu giữ nhiều phong tục, tập quán truyền thống.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn; chăn nuôi gia súc, gia cầm; săn bắt, hái lượm và đan lát.",
        customs: "Người Xinh Mun tổ chức lễ mừng cơm mới, lễ cầu mùa và nhiều nghi lễ thờ thần rừng, thần núi. Họ có các điệu múa và dân ca truyền thống trong lễ hội.",
        lifestyle: "Nhà ở thường là nhà sàn bằng gỗ. Trang phục chủ yếu màu chàm, phụ nữ mặc váy dài và đeo trang sức bạc. Món ăn truyền thống gồm xôi, cơm nếp, thịt hun khói và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4e3c7370d9fd6091e5242652be576453d2cded4eb3d6c707dcdfb69587de6a5e7/xinh-mun5-4245.jpg.avif",
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bdbcf239d544505bd4ba7aed763df3ba5fdcb5c86b5cd5cf9d2dbd74d2756d0e58/x1-1-7659.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4e3c7370d9fd6091e5242652be576453d73322bf96cb4bedd54db593aec71d7d8/xinh-mun6-9217.jpg.avif"
        ]
    },
    {
        id: 30,
        name: "Hà Nhì",
        other: "U Ní, Cồ Chồ",
        region: "Tây Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2be5e00854f35e9641aac9051cc0454dbc4192b0ee3649d7ea7b3d8542eba6705/hanhi-3239.jpg.avif",
        intro: "Tên tự gọi: Hà Nhì\nTên gọi khác: U Ní, Cồ Chồ\nDân số: Khoảng 25.000 người\nNgôn ngữ: Tiếng Hà Nhì thuộc nhóm ngôn ngữ Tạng - Miến (ngữ hệ Hán - Tạng).",
        history: "Người Hà Nhì sinh sống từ lâu đời ở vùng núi cao biên giới Tây Bắc. Họ nổi tiếng với những bản làng cổ, ruộng bậc thang và nền văn hóa đặc sắc.",
        production: "Canh tác ruộng bậc thang, trồng lúa, ngô, chè, thảo quả; chăn nuôi trâu, bò, ngựa và gia cầm.",
        customs: "Người Hà Nhì có Tết Hồ Sự Chà, lễ cúng rừng và nhiều nghi lễ cầu mùa. Họ tin vào thần rừng, thần đất và rất coi trọng việc bảo vệ rừng thiêng của bản làng.",
        lifestyle: "Nhà ở truyền thống là nhà trình tường bằng đất hoặc nhà gỗ mái cỏ. Trang phục được dệt thủ công với nhiều hoa văn sặc sỡ, đặc biệt là trang phục nữ. Ẩm thực gồm cơm nếp, thịt hun khói, rau rừng và rượu ngô.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXDZhm0cCqoZ4MS3hkMI1NJiOfE22cwQsmTFSxYhY_w&s",
            "https://file3.qdnd.vn/data/images/0/2023/10/14/upload_2080/ha%20nhi%202.jpeg?dpi=150&quality=100&w=870",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQARoaGKEZlEl6m6uQg6t67Z0TCgE5dTBHHr4_IY8MGPN4uINXm21onb7&s=10"
        ]
    },

    {
        id: 31,
        name: "Chu Ru",
        other: "Chơ Ru",
        region: "Tây Nguyên và NTB",
        img: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2026/4/19/nguoi-chu-ru-mang-mua-vang-tu-dai-ngan-ve-thu-do002-1776585754819701794126.jpg",
        intro: "Tên tự gọi: Chu Ru\nTên gọi khác: Chơ Ru\nDân số: Khoảng 23.000 người\nNgôn ngữ: Tiếng Chu Ru thuộc ngữ hệ Nam Đảo. Người Chu Ru có nhiều nét văn hóa gần gũi với dân tộc Chăm.",
        history: "Người Chu Ru cư trú lâu đời ở Nam Tây Nguyên. Họ có truyền thống làm nông nghiệp và chịu ảnh hưởng văn hóa Champa.",
        production: "Trồng lúa nước, bắp, rau màu, cà phê; chăn nuôi trâu, bò, gia cầm; làm gốm và đan lát.",
        customs: "Theo chế độ mẫu hệ. Có lễ mừng lúa mới, lễ bỏ mả, lễ cưới truyền thống. Thờ thần núi, thần sông và tổ tiên.",
        lifestyle: "Sống trong nhà sàn dài. Phụ nữ mặc váy, áo ngắn; nam đóng khố. Thức ăn chủ yếu là cơm, thịt nướng và rượu cần.",
        images: ["http://files.ubdt.gov.vn/ContentFolder/ubdt/source_files/2016/06/06/f4c66cb5-d1a7-445a-949e-81896351562d_201606062.jpeg",
            "http://files.ubdt.gov.vn/ContentFolder/ubdt/source_files/2016/06/06/29aa7db0-2774-4c93-b4ef-607bc3bbcf6b_201606061.jpeg",
            "http://files.ubdt.gov.vn/ContentFolder/ubdt/source_files/2016/06/06/b8763f55-9965-44cd-9bb6-6188a29fa258_201606060.jpeg"
        ]
    },
    {
        id: 32,
        name: "Lào",
        other: "Láo",
        region: "Điện Biên, Sơn La, Lai Châu",
        img: "https://laichau.gov.vn/upload/2000066/fck/files/ggf.jpg",
        intro: "Tên tự gọi: Lào\nTên gọi khác: Láo\nDân số: Khoảng 18.000 người\nNgôn ngữ: Tiếng Lào thuộc nhóm ngôn ngữ Thái - Ka Đai.",
        history: "Người Lào di cư sang Việt Nam từ nhiều thế kỷ trước và sinh sống chủ yếu dọc biên giới Tây Bắc.",
        production: "Làm ruộng nước, trồng lúa, ngô, chăn nuôi trâu bò và đánh bắt cá.",
        customs: "Có Tết Bunpimay, lễ buộc chỉ cổ tay, lễ cầu mưa và nhiều điệu múa truyền thống.",
        lifestyle: "Nhà sàn bằng gỗ, mặc trang phục dệt thủ công, ăn xôi, cá nướng, lạp và uống rượu cần.",
        images: ["https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2b70e0a824f2aa261e192d93ca3248de9bdb15ae31ac2f9da28bf0452899fbe89/dtlao-nam-9448.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90640a7005aae247a011eb4fc0abccf724b7ae13cda333b1a658a4aa09dbd85477/laodat2.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90fb8be64f1d2a33db4b237625ad2adbc3b7ae13cda333b1a658a4aa09dbd85477/laodat3.jpg.avif"
        ]
    },
    {
        id: 33,
        name: "La Chí",
        other: "Cù Tê",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611590b4cafef6765d59c079519d0b9b88f4b198026c20ef1b08f9c27db98745601b63a899dc0d598a8828a44264337440e8/dat6644.jpg.avif",
        intro: "Tên tự gọi: La Chí\nTên gọi khác: Cù Tê\nDân số: Khoảng 16.000 người\nNgôn ngữ: Tiếng La Chí thuộc nhóm ngôn ngữ Thái - Ka Đai.",
        history: "Người La Chí cư trú lâu đời tại vùng núi Hà Giang và nổi tiếng với nghề làm ruộng bậc thang.",
        production: "Trồng lúa nước, chè, ngô, cây ăn quả; chăn nuôi trâu, bò.",
        customs: "Có lễ Khu Cù Tê, lễ mừng cơm mới, thờ tổ tiên và thần nông nghiệp.",
        lifestyle: "Nhà sàn truyền thống, trang phục chàm thêu hoa văn nhiều màu. Món ăn phổ biến là xôi ngũ sắc, thịt hun khói.",
        images: ["https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc290b4cafef6765d59c079519d0b9b88f4413e444b5add1e1ab2d7d0a902d3b1b5/lachi.jpg.avif",
            "https://files.bdttg.gov.vn/contentfolder/ubdt/source_files/2015/11/04/10261937_ng%C6%B0%E1%BB%9Di%20la%20ch%C3%AD_15-11-04.jpg",
            "https://mia.vn/media/uploads/blog-du-lich/kham-pha-doi-song-cua-nguoi-la-chi-o-hoang-su-phi-ha-giang-04-1644469973.png"
        ]
    },
    {
        id: 34,
        name: "Phù Lá",
        other: "Xá Phó",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2cb770a77db69cdd6f9fded79a834ba8a8c305a1de2eb964180f2b4573ed4e831/phula-dat-893.jpg.avif",
        intro: "Tên tự gọi: Phù Lá\nTên gọi khác: Xá Phó\nDân số: Khoảng 12.000 người\nNgôn ngữ: Tiếng Phù Lá thuộc nhóm ngôn ngữ Tạng - Miến.",
        history: "Người Phù Lá sinh sống lâu đời tại vùng núi phía Bắc và còn lưu giữ nhiều tập tục cổ truyền.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn, chăn nuôi gia súc.",
        customs: "Có lễ cúng rừng, lễ cầu mùa, lễ cưới truyền thống và nhiều điệu múa dân gian.",
        lifestyle: "Nhà đất hoặc nhà sàn, trang phục nhiều màu sắc, thích đeo trang sức bạc.",
        images: ["https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2cb770a77db69cdd6f9fded79a834ba8ad4cfb71c347e84d307e1526b91d63cd6/phula-dat1-784.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90ff40b5390732fb769becd5dafc932b155cfacd5ee898d181029010948d9846a0/phulabatma.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc902f4e7b7f6fe5c4dbf6d64eced3b514b6f5526c435e9171ca426233c25d7cc8fc/phuladuoima1.jpg.avif"
        ]
    },
    {
        id: 35,
        name: "Ê Đê",
        other: "Ede, Rhade",
        region: "Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611590b4cafef6765d59c079519d0b9b88f47d48c1e1e294a23245250efeed9d65ee1ead718eb38f27066f8623ff674cce676fee0311a3d839de7f6e91b32862d50f/deb2680fb72dfcb5bf715b25c3ba06b5.jpeg.avif",
        intro: "Tên tự gọi: Ê Đê (hay Rhade). Tên gọi khác: Ede, Kpah, Adham. Dân số khoảng 331.000 người. Người Ê Đê cư trú chủ yếu tại Đắk Lắk, Đắk Nông và một phần Gia Lai. Ngôn ngữ thuộc nhóm Chăm (ngữ hệ Nam Đảo).",
        history: "Người Ê Đê là một trong những dân tộc bản địa lâu đời nhất của Tây Nguyên. Họ có truyền thống mẫu hệ rõ rệt và nền văn hóa cồng chiêng đặc sắc.",
        production: "Làm rẫy, trồng lúa, cà phê, cao su, hồ tiêu; chăn nuôi gia súc và săn bắt. Nghề dệt thổ cẩm rất phát triển.",
        customs: "Theo chế độ mẫu hệ. Có lễ cúng bến nước, lễ đâm trâu, lễ mừng lúa mới. Văn hóa cồng chiêng và sử thi là di sản quý giá.",
        lifestyle: "Sống trong nhà dài (nhà rông). Phụ nữ mặc váy thổ cẩm, nam đóng khố. Ẩm thực nổi tiếng với cơm lam, thịt nướng, canh chua và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f45695765a74434b5bcb341a66129195e77177c6934323f474be908eda1b216c9bb4c51dd/dat-5672-1092.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f4569576530c12ed055cb247c472e797f7bdecca1ff9f9d2a9af813acf8c1a189ec3b96c3/dat-5173-723.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc290b4cafef6765d59c079519d0b9b88f4f07a0b0f3cf3ddba18987f12e9f1c78db7ae13cda333b1a658a4aa09dbd85477/levat.jpeg.avif"
        ]
    },
    {
        id: 36,
        name: "Ba Na",
        other: "Bana, Bahnar",
        region: "Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe945b774f4a3846682e30c401f73f8342c7/11-1918.jpg.avif",
        intro: "Tên tự gọi: Ba Na. Tên gọi khác: Bana, Bahnar. Dân số khoảng 252.000 người. Người Ba Na cư trú chủ yếu ở Kon Tum, Gia Lai và Bình Định. Ngôn ngữ thuộc nhóm Môn - Khơ Me.",
        history: "Người Ba Na là cư dân bản địa lâu đời của Tây Nguyên với kho tàng sử thi phong phú và truyền thống cộng đồng mạnh mẽ.",
        production: "Làm nương rẫy, trồng lúa, ngô, cà phê, chăn nuôi gia súc và săn bắt. Nghề dệt thổ cẩm và đan lát phát triển.",
        customs: "Tổ chức lễ mừng lúa mới, lễ cúng yang (thần linh), lễ đâm trâu. Nhà rông là trung tâm sinh hoạt cộng đồng quan trọng.",
        lifestyle: "Sống trong nhà sàn hoặc nhà dài. Trang phục dệt thủ công với hoa văn đặc trưng. Thức ăn chủ yếu là cơm, rau rừng, thịt nướng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43eaab56fad856abacf06160c4228362dcd0d8e5787c328cf6f4025a891cbc364b317c9275aba83e03d8294fff5b374bf1af/camnhi205121015152nharong.jpeg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c32aa6b74a70901e5db80464bc8a49a639e/3.jpeg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe941192222cf5883a1f4637a0e1663f934c63a899dc0d598a8828a44264337440e8/ba-na6-692.jpg.avif"
        ]
    },
    {
        id: 37,
        name: "Lô Lô",
        other: "Màn Di",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2b7a0677d4dd05ea2fd720fa59bd8371bf2b8a245a2451f074d578ec5c36797ea/lolo2-2060.jpg.avif",
        intro: "Tên tự gọi: Lô Lô\nTên gọi khác: Màn Di\nDân số: Khoảng 4.800 người\nNgôn ngữ: Tiếng Lô Lô thuộc nhóm ngôn ngữ Tạng - Miến.",
        history: "Người Lô Lô nổi tiếng với nền văn hóa lâu đời và nghệ thuật trống đồng độc đáo.",
        production: "Trồng ngô trên núi đá, lúa nương, chăn nuôi bò, dê.",
        customs: "Có lễ hội cầu mưa, lễ cúng tổ tiên, múa trống đồng và nhiều nghi thức truyền thống.",
        lifestyle: "Trang phục phụ nữ thêu ghép hàng nghìn mảnh vải màu rực rỡ. Nhà trình tường bằng đất.",
        images: ["https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc903b260679b77608e1bee6987844f6da0db7ae13cda333b1a658a4aa09dbd85477/img2299.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2aca525bd2889c8bfb45622b21d2461628f87b88e33691a6f62d5ebaff8ace6c7/lolo5-2052.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2a425d38c5d6e7daaed3020b60e9ef48f34e3df719b7f5651c4d5448da76a7f01/lolo-1982.jpg.avif"
        ]
    },
    {
        id: 38,
        name: "Chứt",
        other: "Rục, Mày, Sách, A Rem",
        region: "Bắc Trung Bộ",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8ee9d932b6ea437a33e0c90ef4c6dc575564a25046fd43bca4750b56cbed913a66/chut14-2-1169.jpg.avif",
        intro: "Tên tự gọi: Chứt\nTên gọi khác: Rục, Mày, Sách, A Rem\nDân số: Khoảng 8.000 người\nNgôn ngữ: Tiếng Chứt thuộc nhóm Việt - Mường.",
        history: "Người Chứt từng sống trong hang đá và rừng sâu, hiện nay đã định cư ổn định.",
        production: "Làm rẫy, trồng lúa, sắn, ngô, chăn nuôi và khai thác lâm sản.",
        customs: "Có lễ cúng tổ tiên, lễ cầu mùa và nhiều hình thức hát dân ca.",
        lifestyle: "Nhà sàn hoặc nhà đất, mặc trang phục đơn giản, ăn cơm, cá suối và rau rừng.",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67kEcW_kvIDdIoQfUJTo6Ne2NSJWErod51siN9M-hQ74b9VVmwGZr0Zo&s=10",
            "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/8/10/z5717868124876fb2d157db3996b058ec28def5519d5cd-17232818172311058113968.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkLt2jJWy2pJ5MTR0GWZqaY34BcC_w8fSh4WpSkH9bXNi4XTmPYVhb73-&s=10"]
    },
    {
        id: 39,
        name: "Gia Rai",
        other: "Jarai, Gia Rai",
        region: "Tây Nguyên",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611590b4cafef6765d59c079519d0b9b88f4029561c2867ca47261c05e3f3e8b7ac8b96cf64dac302cd1da812fabb93d1ed2/download_2.jpeg.avif",
        intro: "Tên tự gọi: Gia Rai. Tên gọi khác: Jarai, Jorai. Dân số khoảng 412.000 người. Người Gia Rai cư trú chủ yếu tại Gia Lai, Kon Tum và một phần Đắk Lắk. Ngôn ngữ thuộc nhóm Môn - Khơ Me.",
        history: "Người Gia Rai là cư dân bản địa lâu đời của Tây Nguyên với truyền thống cộng đồng mạnh mẽ và kho tàng sử thi phong phú.",
        production: "Làm nương rẫy, trồng lúa, ngô, cà phê, hồ tiêu; chăn nuôi gia súc và săn bắt.",
        customs: "Lễ mừng lúa mới, lễ cúng bến nước, lễ đâm trâu. Nhà rông là trung tâm sinh hoạt cộng đồng. Văn hóa cồng chiêng rất nổi bật.",
        lifestyle: "Sống trong nhà sàn hoặc nhà dài. Trang phục dệt thủ công với hoa văn đặc trưng. Ẩm thực gồm cơm lam, thịt nướng, rau rừng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115bb4be614861eca710cf0d58f456957654474659b2e12ba612d4e3723bb15d377d2fe5b35562981361324096cf175a024/img-3471-4362.jpg.avif",
            "https://baotuyenquang.com.vn/file/4028eaa4679b32c401679c0c74382a7e/112025/a2-3826_20251104090043.jpg",
            "https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_11_14/1_ZFDB.jpg"
        ]
    },
    {
        id: 40,
        name: "Pà Thẻn",
        other: "Pà Hưng",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2a2ba62fcb208c6b31067dfc0773799b2cb44824ad225d56398898ffdad7d20e7/pathen-1988.jpg.avif",
        intro: "Tên tự gọi: Pà Thẻn\nTên gọi khác: Pà Hưng\nDân số: Khoảng 8.200 người\nNgôn ngữ: Tiếng Pà Thẻn thuộc nhóm ngôn ngữ H'Mông - Dao.",
        history: "Người Pà Thẻn sinh sống lâu đời ở vùng núi phía Bắc và nổi tiếng với nghi lễ nhảy lửa.",
        production: "Làm ruộng nước, nương rẫy, trồng chè, ngô và chăn nuôi.",
        customs: "Lễ hội nhảy lửa là nét văn hóa tiêu biểu. Ngoài ra còn có lễ cầu mùa, lễ cưới và thờ cúng tổ tiên.",
        lifestyle: "Nhà sàn hoặc nhà đất. Phụ nữ mặc trang phục đỏ nổi bật được thêu thủ công. Món ăn phổ biến là xôi ngũ sắc, thịt hun khói và rượu ngô.",
        images: ["https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2f4a1f57e848fcfdca6d8d83162f9dc90c55b544b3c1f02f6a1c0539d886eeb4a5cfacd5ee898d181029010948d9846a0/pathen1dat.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a2a2ba62fcb208c6b31067dfc0773799b250a5a2ce2e7dfc04115196143b703197/pathen-dat-832.jpg.avif"
        ]
    },

    {
        id: 41,
        name: "Kinh",
        other: "Việt",
        region: "Toàn quốc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e18709d648bda20cec536b1f6ea6dc92533187edb235c85e6d0d044f476af891aa9c08e93dd1a537379245f4f8a13f2fe63a899dc0d598a8828a44264337440e8/ngay-hanh-phuc-tac-gia-tran-duy-tinh-6391.jpg.avif",
        intro: "Tên tự gọi: Kinh\nTên gọi khác: Việt\nDân số: Khoảng 85,3 triệu người\nNgôn ngữ: Tiếng Việt thuộc nhóm ngôn ngữ Việt - Mường (ngữ hệ Nam Á). Người Kinh là dân tộc chiếm đa số ở Việt Nam.",
        history: "Người Kinh có nguồn gốc từ cộng đồng Lạc Việt cổ, trải qua hàng nghìn năm dựng nước và giữ nước, tạo nên nền văn minh lúa nước và bản sắc văn hóa Việt Nam.",
        production: "Làm nông nghiệp lúa nước, công nghiệp, thương mại, dịch vụ và nhiều ngành nghề truyền thống như gốm, dệt, mộc.",
        customs: "Có các lễ hội như Tết Nguyên Đán, Giỗ Tổ Hùng Vương, Trung Thu, lễ hội làng. Thờ cúng tổ tiên là nét văn hóa đặc trưng.",
        lifestyle: "Nhà ở đa dạng từ nhà truyền thống đến hiện đại. Ẩm thực phong phú với phở, bún, bánh chưng, bánh tét, nem và nhiều món ăn đặc sản.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8ee9292659cb47edb3d2c542825fcb9169a7c4fc33cca891ca9d46f394e8368285f2d5ad6cfc1214d688affa3ade4498d3c78e135349de875fa2343f8ce4f50d7a63a899dc0d598a8828a44264337440e8/hon-nhien-trong-ta-ao-trang-tac-gia-nguyen-manh-cuong-873.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2413c936b1b6825b8a6d6e957c64a6bb96e93b7038fcb5c17877071cff201eaa447e42d2894a85b7d58ed65c704cef4a8b7ae13cda333b1a658a4aa09dbd85477/goibanhchungtacgiavukhoi.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2413c936b1b6825b8a6d6e957c64a6bb996f2ccd8df15cae6e4d74fcabe9c183b8773cfd9b3c0c49b4f7398a2c40756b3b7ae13cda333b1a658a4aa09dbd85477/muavangtacgiahieuminhvu1.jpg.avif"
        ]
    },
    {
        id: 42,
        name: "Tày",
        other: "Thổ, Ngạn",
        region: "Đông Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe947adba0d0588ec6cc7a375e408c5b91d6c2381094306107c33e4c998a37d06158/dat-9910-2499.jpg.avif",
        intro: "Tên tự gọi: Tày\nTên gọi khác: Thổ, Ngạn\nDân số: Khoảng 1,85 triệu người\nNgôn ngữ: Tiếng Tày thuộc nhóm ngôn ngữ Tày - Thái.",
        history: "Người Tày là một trong những dân tộc cư trú lâu đời ở vùng Đông Bắc Việt Nam với nền văn hóa phong phú.",
        production: "Trồng lúa nước, ngô, chè, cây ăn quả; chăn nuôi và nghề dệt thổ cẩm.",
        customs: "Lễ hội Lồng Tồng, hát Then, đàn Tính, thờ cúng tổ tiên và thần nông.",
        lifestyle: "Nhà sàn gỗ, trang phục chàm truyền thống, nổi tiếng với các món bánh khảo, khâu nhục, vịt quay.",
        images: [
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43ea533b65def1243ea6b756435bf753e636/le3.jpeg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c3297447277fc41872623a565ea44142f93/1.jpeg.avif",
            "https://cdn.nhandan.vn/images/e6b4132c7bac2d44cea9c591f9480818e6fd39f751cab8ae57652fd0bd6e43eaf42391e3280354169e75fd3471d53155244ef0301e2f4b92b8d46967af2784412005e185a37d7d073f03e0d2e6315f96b96cf64dac302cd1da812fabb93d1ed2/1302826027159642526383704999964382030282951n.jpeg.avif"
        ]
    },
    {
        id: 43,
        name: "Thái",
        other: "Tày Đăm, Tày Khao",
        region: "Tây Bắc – BTB",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261158f58dcfed78b36f75768c51c0d3d7c320de64441ea1b26dd1594c38310b88c5eb7ae13cda333b1a658a4aa09dbd85477/dat0644.jpg.avif",
        intro: "Tên tự gọi: Thái\nTên gọi khác: Tày Đăm, Tày Khao\nDân số: Khoảng 1,82 triệu người\nNgôn ngữ: Tiếng Thái thuộc nhóm ngôn ngữ Thái - Ka Đai.",
        history: "Người Thái có lịch sử lâu đời ở vùng Tây Bắc, nổi tiếng với nghệ thuật xòe Thái được UNESCO ghi danh.",
        production: "Canh tác lúa nước, dệt thổ cẩm, nuôi cá và chăn nuôi gia súc.",
        customs: "Lễ hội Xên Bản, Xên Mường, múa xòe, hát khắp và tục thờ tổ tiên.",
        lifestyle: "Nhà sàn lớn, phụ nữ mặc áo cóm, váy đen; ẩm thực nổi tiếng với cơm lam, pa pỉnh tộp, xôi ngũ sắc.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc28f58dcfed78b36f75768c51c0d3d7c32dc4a4abae7e34ce63d12167a837943fcb7ae13cda333b1a658a4aa09dbd85477/dat1513.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe942e58d61fa867a5740d14d1c3a7735301c2381094306107c33e4c998a37d06158/dat-1524-5566.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261153db45666ade1b00696e46e3ebcd8fe941ea7df37c5c50c9d4577eaa4dad1efbdedda76813129b114dc77f655f0a1c5b5962d909b0f22483e2e00ac2f8eb38ec563a899dc0d598a8828a44264337440e8/don-nang-trang-cua-nguoi-thai-nghe-an-1064.jpg.avif"
        ]
    },
    {
        id: 44,
        name: "Bru - Vân Kiều",
        other: "Vân Kiều, Bru",
        region: "Bắc Trung Bộ",
        img: "https://ttdn.vn/Uploads/Images/2024/3/10/5/7734-7-3-10-3.9.jpg",
        intro: "Tên tự gọi: Bru - Vân Kiều. Dân số khoảng 95.000 người. Người Bru - Vân Kiều cư trú chủ yếu ở Quảng Bình và Quảng Trị. Ngôn ngữ thuộc nhóm Môn - Khơ Me.",
        history: "Người Bru - Vân Kiều sinh sống lâu đời dọc dãy Trường Sơn với truyền thống chống giặc và gắn bó với rừng núi.",
        production: "Làm rẫy, trồng lúa, ngô, sắn, chăn nuôi trâu bò và khai thác lâm sản.",
        customs: "Lễ cúng yang (thần linh), lễ mừng lúa mới, lễ bỏ mả. Có nhiều nghi lễ thờ thần sông, thần núi.",
        lifestyle: "Nhà sàn truyền thống. Trang phục dệt thủ công đơn giản. Ẩm thực gồm cơm, rau rừng, thịt nướng và rượu cần.",
        images: [
            "https://phongnhadiscovery.com/sites/default/files/anh-1.jpg",
            "https://eggyolk.vn/wp-content/uploads/2024/10/lemungluamoi4_aven.jpg.webp",
            "https://vietnamhoc.net/wp-content/uploads/2020/06/bruvankieu-nhasan-vietnamhoc.net_.jpg"
        ]
    },
    {
        id: 45,
        name: "Tà Ôi",
        other: "Pa Co, Tà Uốt",
        region: "Bắc Trung Bộ",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e44e0177e5975da3ce7e7e1ccab9dc6c166a04dedee78f54874407a0a7b06b7819/ta-oi10-594.jpg.avif",
        intro: "Tên tự gọi: Tà Ôi. Tên gọi khác: Pa Co, Tà Uốt, Kan Tua. Dân số khoảng 52.000 người. Ngôn ngữ thuộc nhóm Môn - Khơ Me.",
        history: "Người Tà Ôi là cư dân bản địa dọc dãy Trường Sơn, có lịch sử lâu đời và truyền thống gắn bó với rừng núi.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn, chăn nuôi trâu bò.",
        customs: "Lễ mừng lúa mới, lễ cúng thần linh, lễ bỏ mả. Văn hóa gần gũi với Bru - Vân Kiều và Cơ Tu.",
        lifestyle: "Nhà sàn, trang phục dệt thủ công. Thức ăn gồm cơm, rau rừng, thịt nướng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bdfd33798e4983f0b6cb275a92b2526be22f12af9a0273b46f556982f6ce8b39cd/taoi3-1192.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d81e61f1bfb6336d816c716730650759d0e667d376bf869970b83bd2a9ea12e0ea/detzengtaoi.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc20733e83e918151b39513c127de5899237a9c57b8373bfa9684505f4c829b6d35/taoi1.jpg.avif"
        ]
    },
    {
        id: 46,
        name: "Pa Kô",
        other: "Pakô, Pa Kô",
        region: "Quảng Trị",
        img: "https://bqn.1cdn.vn/2025/10/09/2d02941f-1-.jpg",
        intro: "Tên tự gọi: Pa Kô. Dân số khoảng 25.000 người. Người Pa Kô cư trú chủ yếu ở huyện Hướng Hóa và Đakrông, tỉnh Quảng Trị. Ngôn ngữ thuộc nhóm Môn - Khơ Me.",
        history: "Người Pa Kô sinh sống lâu đời ở vùng núi Trường Sơn với truyền thống canh tác nương rẫy và bảo vệ biên giới.",
        production: "Làm rẫy, trồng lúa, ngô, sắn, chăn nuôi và khai thác lâm sản.",
        customs: "Lễ cúng thần linh, lễ mừng lúa mới, các nghi lễ vòng đời. Văn hóa gần với Bru - Vân Kiều và Tà Ôi.",
        lifestyle: "Nhà sàn truyền thống. Trang phục dệt thủ công. Ẩm thực gồm cơm nếp, rau rừng, thịt nướng và rượu cần.",
        images: [
            "https://api.sovaba.travel/uploads/Nguoi_pa_co_co_nhieu_le_hoi_dac_sac_7efbe163bb.jpg",
            "https://phunuvietnam.mediacdn.vn/2020/3/6/e84729d82bbdd0e389ac-15835052420671787443582.jpg",
            "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2024/6/6/o-doi-bien-phong-la-lay-tang-rat-nhieu-phan-qua-cho-dan-ban-la-lay-a-soi-o-ben-kia-duong-bienthanh-loc-1717671641349494762225-0-0-800-1280-crop-1717671855941501020785.jpg"
        ]
    },
    {
        id: 47,
        name: "Kháng",
        other: "Xá Khang, Mang",
        region: "Tây Bắc",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261150733e83e918151b39513c127de589923a1f77528307245932d345cdbf74e8918/khang_3.jpg.avif",
        intro: "Tên tự gọi: Kháng. Tên gọi khác: Xá Khang, Mang. Dân số khoảng 15.000 người. Người Kháng cư trú chủ yếu ở Sơn La, Điện Biên và Lai Châu. Ngôn ngữ thuộc nhóm Môn - Khơ Me.",
        history: "Người Kháng sinh sống lâu đời ở vùng Tây Bắc với truyền thống du canh du cư trước đây.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn, chăn nuôi gia súc và đan lát.",
        customs: "Lễ mừng cơm mới, lễ cúng thần rừng, thần núi. Có nhiều nghi lễ tín ngưỡng dân gian.",
        lifestyle: "Nhà sàn bằng gỗ và tre. Trang phục chủ yếu màu chàm. Thực phẩm gồm xôi, cơm nếp, thịt hun khói và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4067dd8f72c060e45ac0a5cb81fb64732c0246ecbb04d58f9f6455c21f8c0c67f/dat-1495-1647.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d8b8976be7c71a4bcfe50da91d593cdc88/khang1.jpg.avif",
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bd8b46a880d244973b75b5e8066dfc6ca7f4aa4ee72575ae399ebf7cafd63302dada6b5f44e1f441a59f4cfd279c3157a4/5da3a250e3df5dd481-5218.jpg.avif"
        ]
    },
    {
        id: 48,
        name: "Brâu",
        other: "Brao",
        region: "Kon Tum",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e47d7dfd6d46e37e7a9ce33c37d9c612fbd696d18c521ac8c24497fa07610b175d/brau6-1453.jpg.avif",
        intro: "Tên tự gọi: Brâu\nTên gọi khác: Brao\nDân số: Khoảng 500 người\nNgôn ngữ: Tiếng Brâu thuộc nhóm ngôn ngữ Môn - Khơ Me.",
        history: "Brâu là một trong những dân tộc ít người nhất Việt Nam, cư trú chủ yếu tại huyện Ngọc Hồi, Kon Tum.",
        production: "Làm nương rẫy, trồng lúa, ngô, sắn và chăn nuôi nhỏ.",
        customs: "Có lễ mừng lúa mới, lễ cúng thần làng, văn hóa cồng chiêng và tín ngưỡng đa thần.",
        lifestyle: "Nhà sàn, trang phục truyền thống đơn giản, ăn cơm, rau rừng, thịt nướng và uống rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e4f660837be8912a86c9566948f642dbd2a4611765ee9a9f714404b5c224cdfd18/brau-2506.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d862a47af3719661ba8b87fb36ecfd22d3/brau4.jpg.avif",
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bdc1eb428278bd5d39c212f4263bd116dbb68cb752b5e21ee966dbecfd29ab7eae/brau1-4999.jpg.avif"
        ]
    },
    {
        id: 49,
        name: "Ơ Đu",
        other: "Tày Hạt",
        region: "Nghệ An",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261150733e83e918151b39513c127de5899232cf9b854c6e63bc5d25ffa87bed07821/6.jpg.avif",
        intro: "Tên tự gọi: Ơ Đu\nTên gọi khác: Tày Hạt\nDân số: Khoảng 400 người\nNgôn ngữ: Tiếng Ơ Đu thuộc nhóm Môn - Khơ Me.",
        history: "Đây là một trong những dân tộc có dân số ít nhất Việt Nam, sinh sống chủ yếu ở Nghệ An.",
        production: "Làm nương rẫy, trồng lúa, ngô, đánh bắt cá và chăn nuôi.",
        customs: "Thờ cúng tổ tiên, thần núi, thần sông; tổ chức lễ mừng lúa mới.",
        lifestyle: "Nhà sàn nhỏ, trang phục truyền thống đơn giản, thực phẩm chủ yếu là cơm nếp và cá suối.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e48fbaaa4de53ee4570228cc6128d0cad424a7adc15b9cf070ea30f395c422927d/o-du-2167.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d80aed8376c61b162eeeb0eae43c29cb44/odu3.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc20733e83e918151b39513c127de589923dfe492dba3798d5e56df505972d52480/61.jpg.avif"
        ]
    },
    {
        id: 50,
        name: "Rơ Măm",
        other: "",
        region: "Kon Tum",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e408429f64b711497ef5cdee4def5f0d370f32d24642979fa709d957dc0c401414/ro-mam4-8605.jpg.avif",
        intro: "Tên tự gọi: Rơ Măm\nTên gọi khác: Không có\nDân số: Khoảng 700 người\nNgôn ngữ: Tiếng Rơ Măm thuộc nhóm Môn - Khơ Me.",
        history: "Người Rơ Măm là cư dân bản địa ở Tây Nguyên và thuộc nhóm dân tộc rất ít người.",
        production: "Làm rẫy, trồng lúa, ngô, chăn nuôi và đan lát.",
        customs: "Có lễ mừng lúa mới, lễ cúng thần linh, văn hóa cồng chiêng và nhà rông.",
        lifestyle: "Sống trong nhà sàn, mặc trang phục dệt thủ công, sử dụng rượu cần trong các dịp lễ hội.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e408429f64b711497ef5cdee4def5f0d378a6e7ebc13ccaf502a426e5a494f6eb5/ro-mam5-7337.jpg.avif",
            "https://cdn.nhandan.vn/images/2be182691a0b5864a20bb7e57d45ea5a95fc6baf90fc087fb12a13aa8e8fa2d805c8676c12942763a9118ec45386ce0e/romam1.jpg.avif",
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bdf3e10bfb54c9419782766120afa03e9aabb813e33a3e804bd23073acf086d3c7/romam3-8484.jpg.avif"
        ]
    },
    {
        id: 51,
        name: "Pu Péo",
        other: "Ka Beo",
        region: "Hà Giang",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e98cb04306ead4337db177d6f197d35cd5cfacd5ee898d181029010948d9846a0/pubeo5-8547.jpg.avif",
        intro: "Tên tự gọi: Pu Péo\nTên gọi khác: Ka Beo\nDân số: Khoảng 900 người\nNgôn ngữ: Tiếng Pu Péo thuộc nhóm Ka Đai.",
        history: "Người Pu Péo cư trú lâu đời ở cao nguyên đá Đồng Văn.",
        production: "Trồng ngô, lúa nương, chăn nuôi bò, dê.",
        customs: "Thờ cúng tổ tiên, thần núi, lễ cầu mùa và nhiều nghi lễ nông nghiệp.",
        lifestyle: "Nhà trình tường bằng đất, trang phục truyền thống nhiều màu sắc.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2413c936b1b6825b8a6d6e957c64a6bb9b69ec3f132563e43c85d419a73db0987/pupeo.png.avif",
            "https://cdn.nhandan.vn/images/8836b36b8a921198b62d58be2bd95777b69f283b21aff3cfc077dab6d24e77d7eb2dde6dfb5d44d085f32c1bf9ffbb88/dat8820.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8e1aada409365bfa7f70c86231855f6f9cc2381094306107c33e4c998a37d06158/pubeo-1-6704.jpg.avif"
        ]
    },
    {
        id: 52,
        name: "Bố Y",
        other: "Chủng Chá, Tu Dí",
        region: "Lào Cai, Hà Giang",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e44f4de6689a2d33f72079a70ab68961333f54cf39e9adf88c99d502796f2fa4d2/dat-5870-2093.jpg.avif",
        intro: "Tên tự gọi: Bố Y\nTên gọi khác: Chủng Chá, Tu Dí\nDân số: Khoảng 4.000 người\nNgôn ngữ: Tiếng Bố Y thuộc nhóm ngôn ngữ Tày - Thái.",
        history: "Người Bố Y sinh sống chủ yếu ở vùng núi phía Bắc và có truyền thống trồng lúa nước.",
        production: "Trồng lúa, ngô, cây ăn quả và chăn nuôi.",
        customs: "Lễ cúng tổ tiên, lễ xuống đồng, hát dân ca và múa truyền thống.",
        lifestyle: "Nhà sàn, trang phục chàm truyền thống, ẩm thực với xôi, bánh và rượu ngô.",
        images: [
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e483374d27fe30124ce128cc791ef051755fd331830bfef2b716389fe4c4723c4a/dat-6061-1-7142.jpg.avif",
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bd6d3e9ba208cb8b19cd4e35e819de73d981d98d468ad22c714f842392ce7c14ec3d111c6a01fd8d2f1dc134328c27526b46f1c0d57334a8ccca018616c8dc9ffbd3eb8ab2d63575a28ac4902b67d8ef08e667d376bf869970b83bd2a9ea12e0ea/a10-doi-vo-chong-tre-lam-le-bai-to-tien-16280497145461262756331-8293.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e44f4de6689a2d33f72079a70ab689613390d7017461526fdb27c60b745735ccf8/dat-5423-1-6872.jpg.avif"
        ]
    },
    {
        id: 53,
        name: "Cờ Lao",
        other: "Klau",
        region: "Hà Giang",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261150733e83e918151b39513c127de589923eccf746288f5198d6887bffa0e3d9ef1/colao1.jpg.avif",
        intro: "Tên tự gọi: Cờ Lao\nTên gọi khác: Klau\nDân số: Khoảng 3.000 người\nNgôn ngữ: Tiếng Cờ Lao thuộc nhóm Ka Đai.",
        history: "Người Cờ Lao cư trú tại vùng núi đá Hà Giang và có nhiều phong tục truyền thống độc đáo.",
        production: "Trồng ngô, lúa nương, chăn nuôi bò, dê và lợn.",
        customs: "Thờ cúng tổ tiên, lễ cầu mùa và các nghi lễ nông nghiệp truyền thống.",
        lifestyle: "Nhà trình tường bằng đất, trang phục truyền thống nhiều màu sắc.",
        images: [
            "https://cdn.nhandan.vn/images/a067269c151fc3a154b8cebacb00e55d4ff8e4f24f92f2adad15397f1c9349bd4a2a3acc493b0938b70413bc808fe80986cafa20a2db445ef3f7adbc779b5527209f54d52270779fb7b413b5b95b3c98/trang-phuc-co-lao-2-2-6787.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e422f2a4f4e0f13579e1a4aea8146bb8c5d9ec8dd305974a918e28d78ea41c048e/cungcolao-3653.jpg.avif",
            "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261156da51f0c0ad991901283c66f347bc9e47ff66a5841436c20d16d1e35557191096e7150545e9d522f8374cbe102476bd9/colao4-6125.jpg.avif"
        ]
    },
    {
        id: 54,
        name: "La Ha",
        other: "Khla Phlao",
        region: "Sơn La, Lai Châu",
        img: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf4369608261157360b89b00bf2c33c2dc0c5a36c5ab8ef3fb6e30d64f996afd728b2b4b7d885ac2381094306107c33e4c998a37d06158/la-ha17-4111.jpg.avif",
        intro: "Tên tự gọi: La Ha\nTên gọi khác: Khla Phlao\nDân số: Khoảng 10.000 người\nNgôn ngữ: Tiếng La Ha thuộc nhóm ngôn ngữ Ka Đai.",
        history: "Người La Ha cư trú lâu đời ở Tây Bắc Việt Nam và có nhiều nét văn hóa gần gũi với người Thái.",
        production: "Trồng lúa nước, lúa nương, ngô, chăn nuôi và đánh bắt cá.",
        customs: "Có lễ Pang A, lễ cầu mùa, thờ cúng tổ tiên và thần nông.",
        lifestyle: "Nhà sàn truyền thống, trang phục dệt thủ công, ẩm thực gồm xôi, cá nướng và rượu cần.",
        images: [
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2413c936b1b6825b8a6d6e957c64a6bb9cc408e752662b4f0c948a15ce94cfd7a/laha22.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2413c936b1b6825b8a6d6e957c64a6bb9248bd2374f1c19072f1508ea3fb741ce/laha11.jpg.avif",
            "https://cdn.nhandan.vn/images/a2fb952abd4504389bfea2e4f7b4acc2413c936b1b6825b8a6d6e957c64a6bb9db00f8358b7e5662e67959041c984632/laha23.jpg.avif"
        ]
    },
];