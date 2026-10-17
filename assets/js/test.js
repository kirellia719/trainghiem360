
const provinces = {
    1: {
        id: 1,
        name: "Phường Hải Châu",
        other: "Thanh Bình, Thuận Phước, Thạch Thang, Phước Ninh, Hải Châu",
        region: "Quận Hải Châu, TP. Đà Nẵng",
        intro: "Phường trung tâm hành chính, kinh tế và văn hóa của quận Hải Châu.",
        history: "Là một trong những phường có lịch sử hình thành sớm nhất của Đà Nẵng.",
        production: "Thương mại, dịch vụ, du lịch và hành chính nhà nước.",
        customs: "Lễ hội truyền thống, các hoạt động văn hóa cộng đồng sôi nổi.",
        lifestyle: "Đô thị hiện đại, dân cư đông đúc, nhịp sống năng động.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    2: {
        id: 2,
        name: "Phường Hòa Cường",
        other: "Bình Thuận, Hòa Thuận Tây, Hòa Cường Bắc, Hòa Cường Nam",
        region: "Quận Hải Châu, TP. Đà Nẵng",
        intro: "Phường có vị trí quan trọng trong phát triển kinh tế - xã hội.",
        history: "Được hình thành từ quá trình đô thị hóa mạnh mẽ của Đà Nẵng.",
        production: "Công nghiệp nhẹ, thương mại và dịch vụ.",
        customs: "Giữ gìn bản sắc văn hóa trong môi trường đô thị.",
        lifestyle: "Hiện đại, tiện nghi, gần các khu công nghiệp.",
         zoom: {
            desktop: { translateX: 2, translateY: 250 },
           mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    3: {
        id: 3,
        name: "Phường Thanh Khê",
        other: "Xuân Hà, Chính Gián, Thạc Gián, Thanh Khê Tây, Thanh Khê Đông",
        region: "Quận Thanh Khê, TP. Đà Nẵng",
        intro: "Phường dân cư đông đúc và sầm uất.",
        history: "Một trong những phường cũ của thành phố Đà Nẵng.",
        production: "Thương mại, dịch vụ, giáo dục.",
        customs: "Phong tục tập quán của người dân miền Trung.",
        lifestyle: "Đô thị sôi động, gần biển.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    4: {
        id: 4,
        name: "Phường An Khê",
        other: "Hòa An, Hòa Phát, An Khê",
        region: "Quận Thanh Khê, TP. Đà Nẵng",
        intro: "Khu vực phát triển mạnh về dân cư và hạ tầng.",
        history: "Phát triển từ vùng đất nông nghiệp thành đô thị.",
        production: "Dịch vụ, tiểu thủ công nghiệp.",
        customs: "Bảo tồn văn hóa cộng đồng.",
        lifestyle: "Hiện đại, gần các khu dân cư mới.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    5: {
        id: 5,
        name: "Phường An Hải",
        other: "Phước Mỹ, An Hải Bắc, An Hải Nam",
        region: "Quận Sơn Trà, TP. Đà Nẵng",
        intro: "Phường ven biển đẹp, thu hút du lịch.",
        history: "Nổi tiếng với bãi biển Mỹ Khê.",
        production: "Du lịch, dịch vụ lưu trú, thương mại.",
        customs: "Lễ hội biển, văn hóa ngư dân.",
        lifestyle: "Hiện đại, du lịch sôi động.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
           mobile:  { translateX: -50, translateY: 200 }  
         }
    },
        6: {
        id: 6,
        name: "Phường Sơn Trà",
        other: "Thọ Quang, Nại Hiên Đông, Mân Thái",
        region: "Quận Sơn Trà, TP. Đà Nẵng",
        intro: "Phường ven biển nổi tiếng với bán đảo Sơn Trà.",
        history: "Nơi có nhiều di tích lịch sử và cảnh quan thiên nhiên.",
        production: "Du lịch sinh thái, dịch vụ nghỉ dưỡng.",
        customs: "Lễ hội truyền thống và văn hóa ngư dân.",
        lifestyle: "Kết hợp giữa đô thị và thiên nhiên.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
           mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    7: {
        id: 7,
        name: "Phường Ngũ Hành Sơn",
        other: "Mỹ An, Khuê Mỹ, Hòa Hải, Hòa Quý",
        region: "Quận Ngũ Hành Sơn, TP. Đà Nẵng",
        intro: "Phường nổi tiếng với danh thắng Ngũ Hành Sơn.",
        history: "Vùng đất văn hóa và du lịch lâu đời.",
        production: "Du lịch, dịch vụ, tiểu thủ công nghiệp đá mỹ nghệ.",
        customs: "Lễ hội chùa Non Nước, văn hóa Phật giáo.",
        lifestyle: "Thanh bình, gần gũi với thiên nhiên.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    8: {
        id: 8,
        name: "Phường Hòa Khánh",
        other: "Hòa Khánh Nam, Hòa Minh, Hòa Sơn",
        region: "Quận Liên Chiểu, TP. Đà Nẵng",
        intro: "Khu vực công nghiệp và dân cư phát triển mạnh.",
        history: "Từng là vùng đất nông nghiệp, nay đô thị hóa nhanh.",
        production: "Công nghiệp, dịch vụ logistics.",
        customs: "Gìn giữ bản sắc văn hóa trong môi trường công nghiệp.",
        lifestyle: "Năng động, hiện đại.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
          mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    9: {
        id: 9,
        name: "Phường Hải Vân",
        other: "Hòa Hiệp Bắc, Hòa Hiệp Nam, Hòa Bắc, một phần Hòa Liên",
        region: "Quận Liên Chiểu, TP. Đà Nẵng",
        intro: "Phường có đèo Hải Vân hùng vĩ.",
        history: "Nơi có tuyến đường sắt và quốc lộ quan trọng.",
        production: "Giao thông vận tải, du lịch.",
        customs: "Phong tục của người dân vùng đèo.",
        lifestyle: "Nông thôn kết hợp đô thị.",
          zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: 50, translateY: 200 }  
         }
    },
    10: {
        id: 10,
        name: "Phường Liên Chiểu",
        other: "Hòa Khánh Bắc, phần còn lại của Hòa Liên",
        region: "Quận Liên Chiểu, TP. Đà Nẵng",
        intro: "Phường lớn với nhiều khu công nghiệp.",
        history: "Trung tâm công nghiệp phía Bắc Đà Nẵng.",
        production: "Công nghiệp nặng và nhẹ.",
        customs: "Đa dạng văn hóa do nhiều công nhân từ khắp nơi đến.",
        lifestyle: "Hiện đại, sôi động.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
             mobile:  { translateX: -50, translateY: 200 }  
         }
    },

        11: {
        id: 11,
        name: "Phường Cẩm Lệ",
        other: "Hòa Thọ Tây, Hòa Thọ Đông, Khuê Trung",
        region: "Quận Cẩm Lệ, TP. Đà Nẵng",
        intro: "Phường đang phát triển mạnh về đô thị và hạ tầng.",
        history: "Được thành lập từ quá trình mở rộng thành phố.",
        production: "Thương mại, dịch vụ, công nghiệp nhỏ.",
        customs: "Gìn giữ văn hóa cộng đồng trong đô thị mới.",
        lifestyle: "Hiện đại, dân cư trẻ.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
         mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    12: {
        id: 12,
        name: "Phường Hòa Xuân",
        other: "Hòa Xuân, Hòa Châu, Hòa Phước",
        region: "Quận Cẩm Lệ, TP. Đà Nẵng",
        intro: "Khu đô thị mới ven sông.",
        history: "Từng là vùng đất nông nghiệp màu mỡ.",
        production: "Dịch vụ, du lịch sinh thái, nông nghiệp đô thị.",
        customs: "Phong tục làng quê vẫn được bảo tồn.",
        lifestyle: "Hiện đại nhưng vẫn giữ nét thôn quê.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
           mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    13: {
        id: 13,
        name: "Phường Tam Kỳ",
        other: "An Mỹ, An Xuân, Trường Xuân",
        region: "TP. Tam Kỳ, Quảng Nam",
        intro: "Phường trung tâm của thành phố Tam Kỳ.",
        history: "Trung tâm hành chính và kinh tế của tỉnh Quảng Nam.",
        production: "Thương mại, dịch vụ, giáo dục.",
        customs: "Lễ hội truyền thống Quảng Nam.",
        lifestyle: "Đô thị sầm uất.",
         zoom: {
            desktop: { translateX: -60, translateY: 100 },
            mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    14: {
        id: 14,
        name: "Phường Quảng Phú",
        other: "An Phú, Tam Thanh, Tam Phú",
        region: "TP. Tam Kỳ, Quảng Nam",
        intro: "Phường phát triển về thương mại và dân cư.",
        history: "Khu vực lịch sử của Tam Kỳ.",
        production: "Thương mại, tiểu thủ công nghiệp.",
        customs: "Bản sắc văn hóa Quảng Nam.",
        lifestyle: "Năng động, gần trung tâm.",
         zoom: {
            desktop: { translateX: -60, translateY: 100 },
             mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    15: {
        id: 15,
        name: "Phường Hương Trà",
        other: "An Sơn, Hòa Hương, Tam Ngọc",
        region: "TP. Tam Kỳ, Quảng Nam",
        intro: "Phường có nhiều di tích lịch sử.",
        history: "Vùng đất cách mạng và văn hóa.",
        production: "Nông nghiệp, dịch vụ.",
        customs: "Lễ hội làng nghề truyền thống.",
        lifestyle: "Kết hợp nông thôn và đô thị.",
         zoom: {
            desktop: { translateX: -60, translateY: 100 },
             mobile:  { translateX: -200, translateY: -100 }  
         }
    },
        16: {
        id: 16,
        name: "Phường Bàn Thạch",
        other: "Tân Thạnh, Hòa Thuận, Tam Thăng",
        region: "TP. Tam Kỳ, Quảng Nam",
        intro: "Phường có vị trí quan trọng trong phát triển đô thị Tam Kỳ.",
        history: "Khu vực phát triển từ làng nghề truyền thống.",
        production: "Thương mại, dịch vụ, nông nghiệp đô thị.",
        customs: "Gìn giữ các phong tục làng xã.",
        lifestyle: "Hiện đại, gần trung tâm hành chính.",
         zoom: {
            desktop: { translateX: -60, translateY: 100 },
              mobile:  { translateX: -200, translateY: -100 }   
         }
    },
    17: {
        id: 17,
        name: "Phường Điện Bàn",
        other: "Điện Phương, Điện Minh, Vĩnh Điện",
        region: "Thị xã Điện Bàn, Quảng Nam",
        intro: "Trung tâm hành chính và kinh tế của thị xã Điện Bàn.",
        history: "Vùng đất cổ với nhiều di tích lịch sử.",
        production: "Thương mại, dịch vụ, công nghiệp.",
        customs: "Lễ hội truyền thống và văn hóa Chăm.",
        lifestyle: "Năng động, phát triển nhanh.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -150, translateY: 100 }  
         }
    },
    18: {
        id: 18,
        name: "Phường Điện Bàn Đông",
        other: "Điện Nam Đông, Điện Nam Trung, Điện Dương, Điện Ngọc, Điện Nam Bắc",
        region: "Thị xã Điện Bàn, Quảng Nam",
        intro: "Khu vực đông dân cư và phát triển công nghiệp.",
        history: "Thuộc vùng đất Điện Bàn lịch sử.",
        production: "Công nghiệp, thương mại.",
        customs: "Phong tục tập quán người Quảng Nam.",
        lifestyle: "Hiện đại, gần các khu công nghiệp.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
          mobile:  { translateX: -150, translateY: 100 } 
         }
    },
    19: {
        id: 19,
        name: "Phường An Thắng",
        other: "Điện An, Điện Thắng Nam, Điện Thắng Trung",
        region: "Thị xã Điện Bàn, Quảng Nam",
        intro: "Phường đang đô thị hóa mạnh mẽ.",
        history: "Từ làng quê đến khu dân cư mới.",
        production: "Dịch vụ, nông nghiệp công nghệ cao.",
        customs: "Bảo tồn văn hóa địa phương.",
        lifestyle: "Hiện đại, tiện nghi.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
          mobile:  { translateX: -150, translateY: 100 } 
         }
    },
    20: {
        id: 20,
        name: "Phường Điện Bàn Bắc",
        other: "Điện Thắng Bắc, Điện Hòa, Điện Tiến",
        region: "Thị xã Điện Bàn, Quảng Nam",
        intro: "Phường phía Bắc thị xã Điện Bàn.",
        history: "Vùng đất nông nghiệp truyền thống.",
        production: "Nông nghiệp, chăn nuôi, dịch vụ.",
        customs: "Lễ hội làng, phong tục miền Trung.",
        lifestyle: "Bình yên, gần gũi thiên nhiên.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
          mobile:  { translateX: -150, translateY: 100 } 
         }
    },
    21: {
        id: 21,
        name: "Phường Hội An",
        other: "Minh An, Cẩm Phô, Sơn Phong, Cẩm Nam, Cẩm Kim",
        region: "TP. Hội An, Quảng Nam",
        intro: "Phường trung tâm của phố cổ Hội An.",
        history: "Di sản văn hóa thế giới, lịch sử thương cảng sầm uất.",
        production: "Du lịch, thương mại, thủ công mỹ nghệ.",
        customs: "Lễ hội đèn lồng, văn hóa cổ trấn.",
        lifestyle: "Kết hợp hài hòa giữa bảo tồn và phát triển.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
           mobile:  { translateX: -150, translateY: 100 } 
         }
    },
    22: {
        id: 22,
        name: "Phường Hội An Đông",
        other: "Hội An Đông",
        region: "TP. Hội An, Quảng Nam",
        intro: "Khu vực phía Đông của thành phố Hội An.",
        history: "Phát triển từ vùng ven sông.",
        production: "Du lịch nghỉ dưỡng, dịch vụ.",
        customs: "Phong tục ngư dân và làng nghề.",
        lifestyle: "Thanh bình, gần sông ngòi.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
          mobile:  { translateX: -150, translateY: 100 } 
         }
    },
    23: {
        id: 23,
        name: "Phường Hội An Tây",
        other: "Thanh Hà, Tân An, Cẩm An, Cẩm Hà",
        region: "TP. Hội An, Quảng Nam",
        intro: "Khu vực phía Tây phố cổ.",
        history: "Nổi tiếng với làng nghề gốm Thanh Hà.",
        production: "Du lịch, làng nghề truyền thống.",
        customs: "Lễ hội làng nghề, văn hóa dân gian.",
        lifestyle: "Gần gũi với di sản và thiên nhiên.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
           mobile:  { translateX: -150, translateY: 100 } 
         }
    },
    24: {
        id: 24,
        name: "Xã Hòa Vang",
        other: "Hòa Phong, Hòa Phú",
        region: "Huyện Hòa Vang, TP. Đà Nẵng",
        intro: "Xã lớn thuộc huyện Hòa Vang.",
        history: "Vùng đất cách mạng anh hùng.",
        production: "Nông nghiệp, du lịch sinh thái.",
        customs: "Phong tục làng quê Quảng Nam - Đà Nẵng.",
        lifestyle: "Nông thôn mới, gần núi.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    25: {
        id: 25,
        name: "Xã Hòa Tiến",
        other: "Hòa Khương, Hòa Tiến",
        region: "Huyện Hòa Vang, TP. Đà Nẵng",
        intro: "Xã ven sông và gần khu công nghệ cao.",
        history: "Phát triển mạnh trong những năm gần đây.",
        production: "Nông nghiệp công nghệ cao, dịch vụ.",
        customs: "Gìn giữ bản sắc văn hóa địa phương.",
        lifestyle: "Nông thôn đang đô thị hóa.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
          mobile:  { translateX: -50, translateY: 200 }   
         }
    },
        26: {
        id: 26,
        name: "Xã Bà Nà",
        other: "Hòa Ninh, Hòa Nhơn",
        region: "Huyện Hòa Vang, TP. Đà Nẵng",
        intro: "Xã có khu du lịch Bà Nà Hills nổi tiếng.",
        history: "Vùng núi cao lịch sử với khí hậu ôn đới.",
        production: "Du lịch, nông nghiệp núi, chăn nuôi.",
        customs: "Phong tục của đồng bào dân tộc và người miền núi.",
        lifestyle: "Thanh bình, gần gũi thiên nhiên.",
         zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: -50, translateY: 200 }  
         }
    },
    27: {
        id: 27,
        name: "Xã Núi Thành",
        other: "Thị trấn Núi Thành, Tam Quang, Tam Nghĩa, Tam Hiệp, Tam Giang",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã trung tâm huyện Núi Thành.",
        history: "Vùng đất ven biển với lịch sử khai hoang.",
        production: "Nông nghiệp, nuôi trồng thủy sản, công nghiệp.",
        customs: "Lễ hội làng, văn hóa ngư dân.",
        lifestyle: "Kết hợp nông thôn và công nghiệp.",
         zoom: {
            desktop: { translateX: -290, translateY: -60 },
            mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    28: {
        id: 28,
        name: "Xã Tam Mỹ",
        other: "Tam Mỹ Đông, Tam Mỹ Tây, Tam Trà",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã ven biển với tiềm năng du lịch.",
        history: "Làng chài truyền thống.",
        production: "Nuôi trồng thủy sản, du lịch biển.",
        customs: "Phong tục ngư dân miền Trung.",
        lifestyle: "Bình dị, gần biển.",
         zoom: {
            desktop: { translateX: -120, translateY: 50 },
            mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    29: {
        id: 29,
        name: "Xã Tam Anh",
        other: "Tam Hòa, Tam Anh Bắc, Tam Anh Nam",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã có bãi biển Tam Anh đẹp.",
        history: "Vùng đất giàu truyền thống cách mạng.",
        production: "Thủy sản, du lịch, nông nghiệp.",
        customs: "Lễ hội cầu ngư, văn hóa biển.",
        lifestyle: "Nông thôn ven biển.",
         zoom: {
            desktop: { translateX:-120, translateY: 50 },
             mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    30: {
        id: 30,
        name: "Xã Đức Phú",
        other: "Tam Sơn, Tam Thạnh",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã nông nghiệp tiêu biểu.",
        history: "Được hình thành từ các làng quê cổ.",
        production: "Trồng lúa, hoa màu, chăn nuôi.",
        customs: "Phong tục nông thôn Quảng Nam.",
        lifestyle: "Bình yên, gắn bó với ruộng đồng.",
         zoom: {
            desktop: { translateX: -120, translateY: 50 },
            mobile:  { translateX: -250, translateY: -50 }  
         }
    },
        31: {
        id: 31,
        name: "Xã Tam Xuân",
        other: "Tam Xuân I, Tam Xuân II, Tam Tiến",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã có nhiều khu vực sản xuất nông nghiệp.",
        history: "Vùng đất được khai phá từ lâu đời.",
        production: "Nông nghiệp, cây ăn quả, chăn nuôi.",
        customs: "Phong tục làng quê truyền thống.",
        lifestyle: "Nông thôn yên bình.",
         zoom: {
            desktop: { translateX: -120, translateY: 50 },
            mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    32: {
        id: 32,
        name: "Xã Tây Hồ",
        other: "Tam An, Tam Thành, Tam Phước, Tam Lộc",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã nằm ở phía Tây huyện Núi Thành.",
        history: "Khu vực đồi núi và đồng bằng.",
        production: "Nông lâm nghiệp, cây công nghiệp.",
        customs: "Bản sắc văn hóa miền núi - đồng bằng.",
        lifestyle: "Gần gũi thiên nhiên, giản dị.",
        zoom: {
            desktop: { translateX: -120, translateY: 50 },
          mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    33: {
        id: 33,
        name: "Xã Chiên Đàn",
        other: "Thị trấn Phú Thịnh, Tam Đàn, Tam Thái",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã có thị trấn Phú Thịnh sầm uất.",
        history: "Trung tâm kinh tế một phần của huyện.",
        production: "Thương mại, dịch vụ, nông nghiệp.",
        customs: "Lễ hội truyền thống.",
        lifestyle: "Nửa đô thị nửa nông thôn.",
        zoom: {
            desktop: { translateX: -120, translateY: 50 },
             mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    34: {
        id: 34,
        name: "Xã Phú Ninh",
        other: "Tam Dân, Tam Đại, Tam Lãnh",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã thuộc vùng hồ Phú Ninh.",
        history: "Vùng đất có hồ nước ngọt lớn.",
        production: "Nông nghiệp, thủy sản, du lịch hồ.",
        customs: "Phong tục ngư dân và nông dân.",
        lifestyle: "Thanh bình bên hồ.",
        zoom: {
            desktop: { translateX: -120, translateY: -100 },
            mobile:  { translateX: -250, translateY: -50 }  
         }
    },
    35: {
        id: 35,
        name: "Xã Lãnh Ngọc",
        other: "Tiên Lãnh, Tiên Ngọc, Tiên Hiệp",
        region: "Huyện Tiên Phước, Quảng Nam",
        intro: "Xã vùng cao huyện Tiên Phước.",
        history: "Vùng núi cao với truyền thống cách mạng.",
        production: "Nông lâm nghiệp, cây ăn quả.",
        customs: "Phong tục đồng bào dân tộc và người Kinh.",
        lifestyle: "Miền núi giản dị.",
        zoom: {
            desktop: { translateX: -120, translateY: -100 },
            mobile:  { translateX: -100, translateY: -50 }  
         }
    },
        36: {
        id: 36,
        name: "Xã Tiên Phước",
        other: "Thị trấn Tiên Kỳ, Tiên Mỹ, Tiên Phong, Tiên Thọ",
        region: "Huyện Tiên Phước, Quảng Nam",
        intro: "Xã trung tâm huyện Tiên Phước.",
        history: "Vùng đất cách mạng anh hùng.",
        production: "Nông nghiệp, lâm nghiệp, dịch vụ.",
        customs: "Lễ hội truyền thống, văn hóa dân gian.",
        lifestyle: "Nông thôn miền núi.",
       zoom: {
            desktop: { translateX: -120, translateY: -100 },
             mobile:  { translateX: -100, translateY: -50 }   
         }
    },
    37: {
        id: 37,
        name: "Xã Thạnh Bình",
        other: "Tiên Lập, Tiên Lộc, Tiên An, Tiên Cảnh",
        region: "Huyện Tiên Phước, Quảng Nam",
        intro: "Xã có nhiều di tích lịch sử.",
        history: "Nơi diễn ra nhiều sự kiện cách mạng.",
        production: "Trồng lúa, cây ăn quả.",
        customs: "Phong tục làng xã Quảng Nam.",
        lifestyle: "Bình dị, gắn bó với quê hương.",
       zoom: {
            desktop: { translateX: -120, translateY: -100 },
             mobile:  { translateX: -100, translateY: -50 }  
         }
    },
    38: {
        id: 38,
        name: "Xã Sơn Cẩm Hà",
        other: "Tiên Sơn, Tiên Hà, Tiên Châu",
        region: "Huyện Tiên Phước, Quảng Nam",
        intro: "Xã vùng đồi núi.",
        history: "Làng quê truyền thống.",
        production: "Nông lâm nghiệp.",
        customs: "Bản sắc văn hóa địa phương.",
        lifestyle: "Miền núi yên bình.",
       zoom: {
            desktop: { translateX: -120, translateY: -100 },
             mobile:  { translateX: -100, translateY: -50 }  
         }
    },
    39: {
        id: 39,
        name: "Xã Trà Liên",
        other: "Trà Đông, Trà Nú, Trà Kót",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã vùng cao Trà My.",
        history: "Vùng đất đồng bào dân tộc thiểu số.",
        production: "Lâm nghiệp, cây ăn quả, chăn nuôi.",
        customs: "Phong tục dân tộc Cor, M'Nam...",
        lifestyle: "Miền núi, gần gũi thiên nhiên.",
        zoom: {
            desktop: { translateX: -120, translateY: -100 },
            mobile:  { translateX: -100, translateY: -200 }  
         }
    },
    40: {
        id: 40,
        name: "Xã Trà Giáp",
        other: "Trà Ka, Trà Giáp",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã xa xôi của huyện Trà My.",
        history: "Vùng đất rừng núi.",
        production: "Nông lâm sản.",
        customs: "Văn hóa dân tộc bản địa.",
        lifestyle: "Giản dị, truyền thống.",
        zoom: {
            desktop: { translateX: -120, translateY: -350 },
            mobile:  { translateX: -100, translateY: -200 }  
         }
    },
        41: {
        id: 41,
        name: "Xã Trà Tân",
        other: "Trà Giác, Trà Tân",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã thuộc vùng cao Trà My.",
        history: "Vùng đất giàu truyền thống cách mạng.",
        production: "Lâm nghiệp, cây công nghiệp, chăn nuôi.",
        customs: "Phong tục của đồng bào dân tộc.",
        lifestyle: "Miền núi, đời sống giản dị.",
        zoom: {
            desktop: { translateX: -120, translateY: -350 },
            mobile:  { translateX: -100, translateY: -200 }  
         }
    },
    42: {
        id: 42,
        name: "Xã Trà Đốc",
        other: "Trà Bui, Trà Đốc",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã xa xôi của huyện Trà My.",
        history: "Vùng rừng núi hiểm trở.",
        production: "Nông lâm nghiệp.",
        customs: "Bản sắc văn hóa dân tộc thiểu số.",
        lifestyle: "Gắn bó với rừng núi.",
        zoom: {
            desktop: { translateX: -120, translateY: -350 },
           mobile:  { translateX: -100, translateY: -200 }  
         }
    },
    43: {
        id: 43,
        name: "Xã Trà My",
        other: "Thị trấn Trà My, Trà Sơn, Trà Giang, Trà Dương",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Trung tâm huyện Trà My.",
        history: "Vùng đất cách mạng nổi tiếng.",
        production: "Nông lâm nghiệp, dịch vụ.",
        customs: "Lễ hội truyền thống dân tộc.",
        lifestyle: "Nông thôn miền núi.",
        zoom: {
            desktop: { translateX: -120, translateY: -350 },
            mobile:  { translateX: -100, translateY: -200 }   
         }
    },
    44: {
        id: 44,
        name: "Xã Nam Trà My",
        other: "Trà Mai, Trà Don",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã phía Nam huyện Trà My.",
        history: "Vùng đất đồng bào dân tộc sinh sống.",
        production: "Lâm sản, cây ăn quả.",
        customs: "Phong tục tập quán dân tộc.",
        lifestyle: "Miền núi, đời sống giản dị.",
         zoom: {
            desktop: { translateX: -120, translateY: -350 },
           mobile:  { translateX: -100, translateY: -200 }  
         }
    },
    45: {
        id: 45,
        name: "Xã Trà Tập",
        other: "Trà Cang, Trà Tập",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã vùng sâu huyện Trà My.",
        history: "Khu vực rừng núi.",
        production: "Nông lâm nghiệp.",
        customs: "Văn hóa dân tộc bản địa.",
        lifestyle: "Truyền thống, gần gũi thiên nhiên.",
         zoom: {
            desktop: { translateX: -120, translateY: -350 },
            mobile:  { translateX: -100, translateY: -200 }  
         }
    },
        46: {
        id: 46,
        name: "Xã Trà Vân",
        other: "Trà Vinh, Trà Vân",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã vùng cao huyện Trà My.",
        history: "Vùng đất đồng bào dân tộc sinh sống lâu đời.",
        production: "Lâm nghiệp, cây ăn quả, chăn nuôi.",
        customs: "Phong tục tập quán dân tộc thiểu số.",
        lifestyle: "Miền núi giản dị.",
         zoom: {
            desktop: { translateX: -120, translateY: -350 },
           mobile:  { translateX: -100, translateY: -200 }  
         }
    },
    47: {
        id: 47,
        name: "Xã Trà Linh",
        other: "Trà Nam, Trà Linh",
        region: "Huyện Trà My, Quảng Nam",
        intro: "Xã xa xôi của huyện Trà My.",
        history: "Vùng rừng núi hiểm trở.",
        production: "Nông lâm sản.",
        customs: "Bản sắc văn hóa dân tộc.",
        lifestyle: "Gắn bó với rừng.",
         zoom: {
            desktop: { translateX: -120, translateY: -350 },
           mobile:  { translateX: -100, translateY: -200 }   
         }

    },
    48: {
        id: 48,
        name: "Xã Trà Leng",
        other: "Trà Dơn, Trà Leng",
        region: "Huyện Trà My, Quảng Nam",
        history: "Khu vực có nhiều di tích lịch sử.",
        production: "Lâm nghiệp, nông nghiệp.",
        customs: "Phong tục dân tộc.",
        lifestyle: "Miền núi thanh bình.",
         zoom: {
            desktop: { translateX: -120, translateY: -350 },
             mobile:  { translateX: -50, translateY: -200 }  
         }
    },
    49: {
        id: 49,
        name: "Xã Thăng Bình",
        other: "Thị trấn Hà Lam, Bình Nguyên, Bình Quý, Bình Phục",
        region: "Huyện Thăng Bình, Quảng Nam",
        intro: "Xã trung tâm huyện Thăng Bình.",
        history: "Vùng đất trù phú của Quảng Nam.",
        production: "Nông nghiệp, thương mại.",
        customs: "Lễ hội làng nghề.",
        lifestyle: "Nông thôn phát triển.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
             mobile:  { translateX: -200, translateY: -100 }   
         }
    },
    50: {
        id: 50,
        name: "Xã Thăng An",
        other: "Bình Triều, Bình Giang, Bình Đào, Bình Minh, Bình Dương",
        region: "Huyện Thăng Bình, Quảng Nam",
        intro: "Xã ven sông Thu Bồn.",
        history: "Làng quê trù phú.",
        production: "Trồng lúa, hoa màu.",
        customs: "Phong tục nông thôn Quảng Nam.",
        lifestyle: "Bình yên bên sông.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
              mobile:  { translateX: -200, translateY: -100 }  
         }
    },
        51: {
        id: 51,
        name: "Xã Thăng Trường",
        other: "Bình Nam, Bình Hải, Bình Sa",
        region: "Huyện Thăng Bình, Quảng Nam",
        intro: "Xã ven biển huyện Thăng Bình.",
        history: "Vùng đất ngư nghiệp truyền thống.",
        production: "Nuôi trồng thủy sản, đánh bắt cá.",
        customs: "Lễ hội cầu ngư, văn hóa biển.",
        lifestyle: "Ngư dân ven biển.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
             mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    52: {
        id: 52,
        name: "Xã Thăng Điền",
        other: "Bình An, Bình Trung, Bình Tú",
        region: "Huyện Thăng Bình, Quảng Nam",
        intro: "Xã có tiềm năng phát triển kinh tế.",
        history: "Làng quê cổ của Quảng Nam.",
        production: "Nông nghiệp, dịch vụ.",
        customs: "Phong tục làng xã.",
        lifestyle: "Nông thôn đang phát triển.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
             mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    53: {
        id: 53,
        name: "Xã Thăng Phú",
        other: "Bình Phú, Bình Quế",
        region: "Huyện Thăng Bình, Quảng Nam",
        intro: "Xã nằm ở khu vực trung tâm huyện.",
        history: "Vùng đất màu mỡ.",
        production: "Trồng lúa nước, hoa màu.",
        customs: "Bản sắc văn hóa Quảng Nam.",
        lifestyle: "Nông thôn trù phú.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    54: {
        id: 54,
        name: "Xã Đồng Dương",
        other: "Bình Lãnh, Bình Trị, Bình Định",
        region: "Huyện Thăng Bình, Quảng Nam",
        intro: "Xã có nhiều làng nghề.",
        history: "Khu vực có di tích lịch sử.",
        production: "Nông nghiệp, làng nghề.",
        customs: "Lễ hội làng nghề truyền thống.",
        lifestyle: "Bình dị, gắn với quê hương.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    55: {
        id: 55,
        name: "Xã Quế Sơn Trung",
        other: "Quế Mỹ, Quế Hiệp, Quế Thuận, Quế Châu",
        region: "Huyện Quế Sơn, Quảng Nam",
        intro: "Xã trung tâm huyện Quế Sơn.",
        history: "Vùng đất anh hùng cách mạng.",
        production: "Nông nghiệp, công nghiệp nhỏ.",
        customs: "Phong tục miền Trung.",
        lifestyle: "Nông thôn phát triển.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -150, translateY: -50 }  
         }
    },
        56: {
        id: 56,
        name: "Xã Quế Sơn",
        other: "Thị trấn Đông Phú, Quế Minh, Quế An, Quế Long, Quế Phong",
        region: "Huyện Quế Sơn, Quảng Nam",
        intro: "Xã trung tâm huyện Quế Sơn.",
        history: "Vùng đất cách mạng nổi tiếng của Quảng Nam.",
        production: "Nông nghiệp, dịch vụ, tiểu thủ công nghiệp.",
        customs: "Lễ hội truyền thống, văn hóa làng quê.",
        lifestyle: "Nông thôn đang đô thị hóa.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
           mobile:  { translateX: -150, translateY: -50 }  
         }
    },
    57: {
        id: 57,
        name: "Xã Xuân Phú",
        other: "Thị trấn Hương An, Quế Xuân 1, Quế Xuân 2, Quế Phú",
        region: "Huyện Quế Sơn, Quảng Nam",
        intro: "Xã có nhiều di tích lịch sử.",
        history: "Khu vực kháng chiến anh hùng.",
        production: "Nông nghiệp, chăn nuôi.",
        customs: "Phong tục tập quán Quảng Nam.",
        lifestyle: "Bình yên, gần gũi thiên nhiên.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
           mobile:  { translateX: -150, translateY: -50 }  
         }
    },
    58: {
        id: 58,
        name: "Xã Nông Sơn",
        other: "Thị trấn Trung Phước, Quế Lộc",
        region: "Huyện Nông Sơn, Quảng Nam",
        intro: "Xã thuộc huyện miền núi Nông Sơn.",
        history: "Vùng đất rừng núi.",
        production: "Lâm nghiệp, nông nghiệp.",
        customs: "Văn hóa dân tộc và người Kinh.",
        lifestyle: "Miền núi giản dị.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -50, translateY: -50 }  
         }
    },
    59: {
        id: 59,
        name: "Xã Quế Phước",
        other: "Quế Lâm, Phước Ninh, Ninh Phước",
        region: "Huyện Quế Sơn, Quảng Nam",
        intro: "Xã có tiềm năng phát triển du lịch sinh thái.",
        history: "Vùng đất cổ kính.",
        production: "Nông lâm nghiệp.",
        customs: "Bản sắc văn hóa địa phương.",
        lifestyle: "Nông thôn miền núi.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
          mobile:  { translateX: -50, translateY: -50 }  
         }
    },
    60: {
        id: 60,
        name: "Xã Duy Nghĩa",
        other: "Duy Thành, Duy Hải, Duy Nghĩa",
        region: "Huyện Duy Xuyên, Quảng Nam",
        intro: "Xã ven sông Thu Bồn.",
        history: "Làng nghề và nông nghiệp nổi tiếng.",
        production: "Nông nghiệp, làng nghề mây tre.",
        customs: "Phong tục làng nghề truyền thống.",
        lifestyle: "Nông thôn trù phú.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
           mobile:  { translateX: -200, translateY: -100 }  
         }
    },
        61: {
        id: 61,
        name: "Xã Nam Phước",
        other: "Thị trấn Nam Phước, Duy Phước, Duy Vinh",
        region: "Huyện Duy Xuyên, Quảng Nam",
        intro: "Xã trung tâm huyện Duy Xuyên.",
        history: "Vùng đất văn hóa và lịch sử.",
        production: "Thương mại, dịch vụ, nông nghiệp.",
        customs: "Lễ hội làng nghề, văn hóa dân gian.",
        lifestyle: "Nông thôn sầm uất.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -200, translateY: -100 }  
         }
    },
    62: {
        id: 62,
        name: "Xã Duy Xuyên",
        other: "Duy Trung, Duy Sơn, Duy Trinh",
        region: "Huyện Duy Xuyên, Quảng Nam",
        intro: "Xã có nhiều làng nghề truyền thống.",
        history: "Khu vực cổ kính bên sông Thu Bồn.",
        production: "Làng nghề, nông nghiệp.",
        customs: "Phong tục làng nghề Quảng Nam.",
        lifestyle: "Bình dị, giữ gìn bản sắc.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
           mobile:  { translateX: -50, translateY: -50 }  
         }
    },
    63: {
        id: 63,
        name: "Xã Thu Bồn",
        other: "Duy Châu, Duy Hòa, Duy Phú, Duy Tân",
        region: "Huyện Duy Xuyên, Quảng Nam",
        intro: "Xã ven sông Thu Bồn.",
        history: "Vùng đất màu mỡ, lịch sử lâu đời.",
        production: "Nông nghiệp lúa nước, hoa màu.",
        customs: "Phong tục nông thôn miền Trung.",
        lifestyle: "Gần gũi với sông nước.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
          mobile:  { translateX: -50, translateY: -50 } 
         }
    },
    64: {
        id: 64,
        name: "Xã Điện Bàn Tây",
        other: "Điện Hồng, Điện Thọ, Điện Phước",
        region: "Thị xã Điện Bàn, Quảng Nam",
        intro: "Xã phía Tây thị xã Điện Bàn.",
        history: "Vùng đất lịch sử.",
        production: "Nông nghiệp, dịch vụ.",
        customs: "Bản sắc văn hóa địa phương.",
        lifestyle: "Nông thôn gần đô thị.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
           mobile:  { translateX: -50, translateY: -50 } 
         }
    },
    65: {
        id: 65,
        name: "Xã Gò Nổi",
        other: "Điện Phong, Điện Trung, Điện Quang",
        region: "Thị xã Điện Bàn, Quảng Nam",
        intro: "Xã có địa hình đặc trưng.",
        history: "Làng quê truyền thống.",
        production: "Nông nghiệp, chăn nuôi.",
        customs: "Phong tục làng xã.",
        lifestyle: "Bình yên.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -50, translateY: -50 } 
         }
    },
        66: {
        id: 66,
        name: "Xã Đại Lộc",
        other: "Thị trấn Ái Nghĩa, Đại Hiệp, Đại Hòa, Đại An, Đại Nghĩa",
        region: "Huyện Đại Lộc, Quảng Nam",
        intro: "Xã trung tâm huyện Đại Lộc.",
        history: "Vùng đất trù phú bên sông Vu Gia.",
        production: "Nông nghiệp, thương mại, dịch vụ.",
        customs: "Lễ hội truyền thống, văn hóa làng quê.",
        lifestyle: "Nông thôn phát triển.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
             mobile:  { translateX: -50, translateY: -50 } 
         }
    },
    67: {
        id: 67,
        name: "Xã Hà Nha",
        other: "Đại Đồng, Đại Hồng, Đại Quang",
        region: "Huyện Đại Lộc, Quảng Nam",
        intro: "Xã ven sông Vu Gia.",
        history: "Làng quê cổ kính.",
        production: "Nông nghiệp, chăn nuôi.",
        customs: "Phong tục miền Trung.",
        lifestyle: "Bình dị, gần sông nước.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -50, translateY: -50 } 
         }
    },
    68: {
        id: 68,
        name: "Xã Thượng Đức",
        other: "Đại Lãnh, Đại Hưng, Đại Sơn",
        region: "Huyện Đại Lộc, Quảng Nam",
        intro: "Xã vùng thượng nguồn.",
        history: "Vùng đất miền núi.",
        production: "Lâm nghiệp, nông nghiệp.",
        customs: "Văn hóa dân tộc và người Kinh.",
        lifestyle: "Miền núi thanh bình.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -10, translateY: -50 }  
         }
    },
    69: {
        id: 69,
        name: "Xã Vu Gia",
        other: "Đại Phong, Đại Minh, Đại Cường",
        region: "Huyện Đại Lộc, Quảng Nam",
        intro: "Xã dọc theo sông Vu Gia.",
        history: "Vùng đất sông nước.",
        production: "Nông nghiệp, thủy sản.",
        customs: "Phong tục ngư nông.",
        lifestyle: "Gắn bó với sông.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
          mobile:  { translateX: -10, translateY: -50 }  
         }
    },
    70: {
        id: 70,
        name: "Xã Phú Thuận",
        other: "Đại Tân, Đại Thắng, Đại Chánh, Đại Thạnh",
        region: "Huyện Đại Lộc, Quảng Nam",
        intro: "Xã phía Đông huyện Đại Lộc.",
        history: "Làng quê truyền thống.",
        production: "Nông nghiệp, dịch vụ.",
        customs: "Bản sắc làng xã Quảng Nam.",
        lifestyle: "Nông thôn yên bình.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: -10, translateY: -50 }  
         }
    },
        71: {
        id: 71,
        name: "Xã Thạnh Mỹ",
        other: "Thị trấn Thạnh Mỹ",
        region: "Huyện Nam Giang, Quảng Nam",
        intro: "Trung tâm huyện Nam Giang.",
        history: "Vùng đất miền núi phía Tây Quảng Nam.",
        production: "Nông lâm nghiệp, thương mại biên giới.",
        customs: "Phong tục của đồng bào dân tộc thiểu số.",
        lifestyle: "Miền núi, đời sống giản dị.",
         zoom: {
            desktop: { translateX: -50, translateY: 100 },
            mobile:  { translateX: 100, translateY: -50 }   
         }
    },
    72: {
        id: 72,
        name: "Xã Bến Giằng",
        other: "Cà Dy, Tà Bhing, Tà Pơơ",
        region: "Huyện Nam Giang, Quảng Nam",
        intro: "Xã vùng sâu huyện Nam Giang.",
        history: "Vùng đất đồng bào dân tộc.",
        production: "Lâm nghiệp, chăn nuôi.",
        customs: "Văn hóa dân tộc Co, Gié Triêng...",
        lifestyle: "Miền núi truyền thống.",
        zoom: {
            desktop: { translateX: 90, translateY: -30 },
            mobile:  { translateX: 100, translateY: -50 }   
         }
    },
    73: {
        id: 73,
        name: "Xã Nam Giang",
        other: "Zuôih, Chà Vàl",
        region: "Huyện Nam Giang, Quảng Nam",
        intro: "Xã giáp biên giới.",
        history: "Vùng đất biên giới anh hùng.",
        production: "Nông lâm nghiệp.",
        customs: "Phong tục dân tộc thiểu số.",
        lifestyle: "Gần gũi thiên nhiên.",
        zoom: {
            desktop: { translateX: 90, translateY: -30 },
            mobile:  { translateX: 150, translateY: -50 }   
         }
    },
    74: {
        id: 74,
        name: "Xã Đắc Pring",
        other: "Đắc Pre, Đắc Pring",
        region: "Huyện Nam Giang, Quảng Nam",
        intro: "Xã vùng cao.",
        history: "Khu vực rừng núi.",
        production: "Lâm sản, cây ăn quả.",
        customs: "Bản sắc văn hóa dân tộc.",
        lifestyle: "Miền núi.",
        zoom: {
            desktop: { translateX: 90, translateY: -30 },
            mobile:  { translateX: 150, translateY: -50 }   
         }
    },
    75: {
        id: 75,
        name: "Xã La Dêê",
        other: "Đắc Tôi, La Dêê",
        region: "Huyện Nam Giang, Quảng Nam",
        intro: "Xã xa xôi của huyện Nam Giang.",
        history: "Vùng đất đồng bào dân tộc.",
        production: "Nông lâm nghiệp.",
        customs: "Phong tục tập quán dân tộc.",
        lifestyle: "Giản dị, truyền thống.",
        zoom: {
            desktop: { translateX: 350, translateY: -30 },
           mobile:  { translateX: 270, translateY: -50 }   
         }
    },
        76: {
        id: 76,
        name: "Xã La Êê",
        other: "Chơ Chun, La Êê",
        region: "Huyện Nam Giang, Quảng Nam",
        intro: "Xã vùng cao huyện Nam Giang.",
        history: "Vùng đất đồng bào dân tộc sinh sống.",
        production: "Lâm nghiệp, chăn nuôi.",
        customs: "Văn hóa dân tộc thiểu số.",
        lifestyle: "Miền núi giản dị.",
        zoom: {
            desktop: { translateX: 350, translateY: -30 },
           mobile:  { translateX: 270, translateY: -50 }   
         }
    },
    77: {
        id: 77,
        name: "Xã Sông Vàng",
        other: "Tư, Ba",
        region: "Huyện Tây Giang, Quảng Nam",
        intro: "Xã thuộc huyện Tây Giang.",
        history: "Vùng đất miền núi phía Tây.",
        production: "Nông lâm nghiệp.",
        customs: "Phong tục dân tộc.",
        lifestyle: "Gần gũi rừng núi.",
        zoom: {
            desktop: { translateX: 5, translateY: 300 },
            mobile:  { translateX: 50, translateY: 200 }  
         }
    },
    78: {
        id: 78,
        name: "Xã Sông Kôn",
        other: "A Ting, Jơ Ngây, Sông Kôn",
        region: "Huyện Đông Giang, Quảng Nam",
        intro: "Xã ven sông Kôn.",
        history: "Vùng đất sông nước miền núi.",
        production: "Nông nghiệp, lâm nghiệp.",
        customs: "Bản sắc văn hóa địa phương.",
        lifestyle: "Thanh bình.",
          zoom: {
            desktop: { translateX: 5, translateY: 300 },
            mobile:  { translateX: 50, translateY: 200 }  
         }
    },
    79: {
        id: 79,
        name: "Xã Đông Giang",
        other: "Thị trấn Prao, Tà Lu, A Rooi, Zà Hung",
        region: "Huyện Đông Giang, Quảng Nam",
        intro: "Trung tâm huyện Đông Giang.",
        history: "Vùng đất cách mạng.",
        production: "Nông lâm nghiệp, dịch vụ.",
        customs: "Phong tục dân tộc.",
        lifestyle: "Miền núi.",
            zoom: {
            desktop: { translateX: 5, translateY: 300 },
            mobile:  { translateX: 50, translateY: 200 }  
         }
    },
        80: {
        id: 80,
        name: "Xã Bến Hiên",
        other: "Kà Dăng, Mà Cooih",
        region: "Huyện Đông Giang, Quảng Nam",
        intro: "Xã vùng sâu huyện Đông Giang.",
        history: "Khu vực rừng núi.",
        production: "Lâm nghiệp.",
        customs: "Văn hóa dân tộc.",
        lifestyle: "Truyền thống miền núi.",
            zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: 50, translateY: 200 }  
         }
    },
    81: {
        id: 81,
        name: "Xã Avương",
        other: "Bhalêê, Avương",
        region: "Huyện Tây Giang, Quảng Nam",
        intro: "Xã thuộc huyện Tây Giang.",
        history: "Vùng đất đồng bào dân tộc.",
        production: "Nông lâm nghiệp.",
        customs: "Phong tục dân tộc thiểu số.",
        lifestyle: "Miền núi.",
           zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: 150, translateY: 200 }  
         }
    },
    82: {
        id: 82,
        name: "Xã Tây Giang",
        other: "Atiêng, Dang, Anông, Lăng",
        region: "Huyện Tây Giang, Quảng Nam",
        intro: "Trung tâm huyện Tây Giang.",
        history: "Vùng đất biên giới miền núi.",
        production: "Lâm nghiệp, nông nghiệp.",
        customs: "Văn hóa dân tộc.",
        lifestyle: "Giản dị, gần thiên nhiên.",
           zoom: {
            desktop: { translateX: 5, translateY: 250 },
            mobile:  { translateX: 250, translateY: 100 }  
         }
    },
    83: {
        id: 83,
        name: "Xã Hùng Sơn",
        other: "Ch’ơm, Gari, Tr’hy, Axan",
        region: "Huyện Hiệp Đức, Quảng Nam",
        intro: "Xã huyện Hiệp Đức.",
        history: "Vùng đất lịch sử.",
        production: "Nông lâm nghiệp.",
        customs: "Phong tục địa phương.",
        lifestyle: "Nông thôn miền núi.",
           zoom: {
            desktop: { translateX: 350, translateY: 250 },
            mobile:  { translateX: 250, translateY: 100 }  
         }
    },
    84: {
        id: 84,
        name: "Xã Hiệp Đức",
        other: "Thị trấn Tân Bình, Quế Tân, Quế Lưu",
        region: "Huyện Hiệp Đức, Quảng Nam",
        intro: "Trung tâm huyện Hiệp Đức.",
        history: "Vùng đất cách mạng.",
        production: "Nông nghiệp, dịch vụ.",
        customs: "Lễ hội truyền thống.",
        lifestyle: "Nông thôn phát triển.",
           zoom: {
            desktop: { translateX: 120, translateY: -80 },
            mobile:  { translateX: -50, translateY: -100 }   
         }
    },
    85: {
        id: 85,
        name: "Xã Việt An",
        other: "Thăng Phước, Bình Sơn, Quế Thọ, Bình Lâm",
        region: "Huyện Hiệp Đức, Quảng Nam",
        intro: "Xã thuộc huyện Hiệp Đức.",
        history: "Làng quê truyền thống.",
        production: "Nông nghiệp.",
        customs: "Phong tục Quảng Nam.",
        lifestyle: "Bình yên.",
        zoom: {
            desktop: { translateX: 120, translateY: -80 },
           mobile:  { translateX: -50, translateY: -100 }   
         }
    },
        86: {
        id: 86,
        name: "Xã Phước Trà",
        other: "Sông Trà, Phước Gia, Phước Trà",
        region: "Huyện Hiệp Đức, Quảng Nam",
        intro: "Xã vùng núi huyện Hiệp Đức.",
        history: "Vùng đất rừng núi.",
        production: "Lâm nghiệp, cây công nghiệp.",
        customs: "Phong tục dân tộc và người Kinh.",
        lifestyle: "Miền núi giản dị.",
        zoom: {
            desktop: { translateX: 120, translateY: -80 },
            mobile:  { translateX: -50, translateY: -100 } 
         }
    },
    87: {
        id: 87,
        name: "Xã Khâm Đức",
        other: "Thị trấn Khâm Đức, Phước Xuân",
        region: "Huyện Phước Sơn, Quảng Nam",
        intro: "Trung tâm huyện Phước Sơn.",
        history: "Vùng đất khai thác vàng và lâm nghiệp.",
        production: "Lâm nghiệp, nông nghiệp, khai khoáng.",
        customs: "Văn hóa dân tộc thiểu số.",
        lifestyle: "Miền núi.",
        zoom: {
            desktop: { translateX: 120, translateY: -80 },
            mobile:  { translateX: 80, translateY: -100 }  
         }
    },
    88: {
        id: 88,
        name: "Xã Phước Năng",
        other: "Phước Đức, Phước Mỹ, Phước Năng",
        region: "Huyện Phước Sơn, Quảng Nam",
        intro: "Xã vùng sâu huyện Phước Sơn.",
        history: "Khu vực rừng núi.",
        production: "Lâm sản, nông nghiệp.",
        customs: "Phong tục dân tộc.",
        lifestyle: "Truyền thống miền núi.",
       zoom: {
            desktop: { translateX: 120, translateY: -180 },
          mobile:  { translateX: 80, translateY: -100 } 
         }
    },
    89: {
        id: 89,
        name: "Xã Phước Chánh",
        other: "Phước Công, Phước Chánh",
        region: "Huyện Phước Sơn, Quảng Nam",
        intro: "Xã huyện Phước Sơn.",
        history: "Vùng đất biên giới.",
        production: "Nông lâm nghiệp.",
        customs: "Bản sắc văn hóa.",
        lifestyle: "Giản dị.",
         zoom: {
            desktop: { translateX: 120, translateY: -180 },
            mobile:  { translateX: 80, translateY: -100 } 
         }
    },
    90: {
        id: 90,
        name: "Xã Phước Thành",
        other: "Phước Lộc, Phước Kim, Phước Thành",
        region: "Huyện Phước Sơn, Quảng Nam",
        intro: "Xã xa xôi của huyện Phước Sơn.",
        history: "Vùng đất rừng núi.",
        production: "Lâm nghiệp.",
        customs: "Phong tục dân tộc.",
        lifestyle: "Miền núi thanh bình.",
         zoom: {
            desktop: { translateX: 120, translateY: -180 },
             mobile:  { translateX: 80, translateY: -100 } 
         }
    },
    91: {
        id: 91,
        name: "Xã Phước Hiệp",
        other: "Phước Hòa, Phước Hiệp",
        region: "Huyện Phước Sơn, Quảng Nam",
        intro: "Xã vùng sâu huyện Phước Sơn.",
        history: "Vùng đất miền núi.",
        production: "Nông lâm nghiệp.",
        customs: "Phong tục dân tộc thiểu số.",
        lifestyle: "Giản dị, truyền thống.",
         zoom: {
            desktop: { translateX: 120, translateY: -180 },
           mobile:  { translateX: 80, translateY: -100 } 
         }
    },
    92: {
        id: 92,
        name: "Đặc khu Hoàng Sa",
        other: "Huyện Hoàng Sa",
        region: "TP. Đà Nẵng",
        intro: "Quần đảo Hoàng Sa thiêng liêng của Tổ quốc.",
        history: "Lịch sử chủ quyền lâu đời của Việt Nam.",
        production: "Thủy sản, du lịch, quốc phòng.",
        customs: "Tinh thần yêu nước, truyền thống ngư dân.",
        lifestyle: "Vùng biển đảo anh hùng.",
         zoom: {
            desktop: { translateX: -400, translateY: 350 },
            mobile:  { translateX: -300, translateY: 100 }  
         }
    },
    93: {
        id: 93,
        name: "Xã Tam Hải",
        other: "",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã ven biển huyện Núi Thành.",
        history: "Làng chài truyền thống.",
        production: "Nuôi trồng thủy sản.",
        customs: "Lễ hội cầu ngư.",
        lifestyle: "Ngư dân ven biển.",
         zoom: {
            desktop: { translateX: -80, translateY: -100 },
            mobile:  { translateX: -250, translateY: -50 }  }
    },
    94: {
        id: 94,
        name: "Xã Tân Hiệp",
        other: "",
        region: "Huyện Núi Thành, Quảng Nam",
        intro: "Xã Tân Hiệp thuộc huyện Núi Thành.",
        history: "Thuộc vùng đất Quảng Nam lịch sử.",
        production: "Nông nghiệp, cây công nghiệp.",
        customs: "Phong tục tập quán của người dân miền Trung.",
        lifestyle: "Nông thôn, gần biển.",
         zoom: {
            desktop: { translateX: -120, translateY: 100 },
            mobile:  { translateX: -150, translateY: 100 } 
         }
    }
};

const DEFAULT_SCALE = { desktop: 1.8, mobile: 2 };

const map = document.getElementById("map");
const infoPanel = document.getElementById("infoPanel");
const provinceInfo = document.getElementById("provinceInfo");
const searchInput = document.getElementById("searchInput");
let suggestionsContainer = null;

// ==================== KHỞI TẠO ====================
map.addEventListener("load", () => {
    const svgDoc = map.contentDocument;
    if (!svgDoc) return;

    const svg = svgDoc.querySelector("svg");

    // Thêm tên lên bản đồ
    Object.keys(provinces).forEach(id => {
        const el = svgDoc.getElementById(id);
        if (!el) return;
        const box = el.getBBox();
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", box.x + box.width / 2);
        text.setAttribute("y", box.y + box.height / 2 + 3);
        text.setAttribute("font-size", "11");
        text.setAttribute("font-weight", "700");
        text.setAttribute("fill", "#ffffff");
        text.setAttribute("stroke", "#1a1a1a");
        text.setAttribute("stroke-width", "1.5");
        text.setAttribute("paint-order", "stroke fill");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.textContent = provinces[id].name;
        svg.appendChild(text);
    });

    // Click vào vùng
    svg.querySelectorAll("path[id]").forEach(path => {
        const id = path.id;
        if (!provinces[id]) return;

        const originalFill = path.getAttribute("fill") || "#ED1C24";
        path.dataset.originalFill = originalFill;
        path.style.cursor = "pointer";

        path.addEventListener("click", (e) => {
            e.stopPropagation();
            resetHighlight();
            selectProvince(id);
        });
    });

    setupInteractiveMap(svg); // nếu hàm này tồn tại
});

// ==================== HIỂN THỊ PANEL ====================
function showInfo(id) {
    const p = provinces[id];
    if (!p) return;

    provinceInfo.innerHTML = `
        <div class="info-header">
            <h2>${p.name}</h2>
            <button id="closePanel" class="close-btn">✕</button>
        </div>
        <div class="info-body">
            <p><strong>Vùng:</strong> ${p.region}</p>
            <p><strong>Giới thiệu:</strong> ${p.intro}</p>
            <p><strong>Lịch sử:</strong> ${p.history}</p>
            <p><strong>Sản xuất:</strong> ${p.production}</p>
            <p><strong>Phong tục:</strong> ${p.customs}</p>
            <p><strong>Đời sống:</strong> ${p.lifestyle}</p>
            ${p.other ? `<p><strong>Các khu vực khác:</strong> ${p.other}</p>` : ''}
        </div>
        <div class="info-footer">
            <button onclick="alert('Đang mở chi tiết đầy đủ...')" class="btn-more">
                Xem chi tiết đầy đủ →
            </button>
        </div>
    `;

    const w = window.innerWidth;
    infoPanel.classList.remove("mobile", "large-mobile", "tablet", "desktop");
    
    if (w <= 480) infoPanel.classList.add("mobile");
    else if (w <= 767) infoPanel.classList.add("large-mobile");
    else if (w <= 1023) infoPanel.classList.add("tablet");
    else infoPanel.classList.add("desktop");

    infoPanel.style.display = "block";
    setTimeout(() => infoPanel.classList.add("active"), 10);
}

// ==================== ZOOM (TRANSCALE) ====================
function zoomTo({ scale, translateX, translateY }) {
    const svgDoc = map.contentDocument;
    if (!svgDoc) return;
    const svg = svgDoc.querySelector("svg");
    if (!svg) return;

    svg.style.transition = "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)";
    svg.style.transformOrigin = "center center";
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function zoomToProvince(path) {
    const id = path.id;
    const p = provinces[id];
    const isMobile = window.innerWidth <= 767;

    let scale, translateX, translateY;

    // Ưu tiên dùng zoom tùy chỉnh nếu có
    if (p.zoom) {
        const zoomData = isMobile ? p.zoom.mobile : p.zoom.desktop;
        scale = zoomData.scale || (isMobile ? DEFAULT_SCALE.mobile : DEFAULT_SCALE.desktop);
        translateX = zoomData.translateX;
        translateY = zoomData.translateY;
    } 
    // Nếu không có zoom tùy chỉnh thì tính tự động
    else {
        const bbox = path.getBBox();
        const svg = path.ownerSVGElement;
        if (!svg) return;

        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;

        scale = isMobile ? DEFAULT_SCALE.mobile : DEFAULT_SCALE.desktop;
        translateX = (svg.clientWidth / 2) - centerX * scale;
        translateY = (svg.clientHeight / 2) - centerY * scale * 0.85;
    }

    zoomTo({ scale, translateX, translateY });
}

// ==================== SELECT & RESET ====================
function selectProvince(id) {
    const svgDoc = map.contentDocument;
    if (!svgDoc) return;

    resetHighlight();

    const path = svgDoc.getElementById(id);
    if (!path) return;

    path.style.fill = "#ffeb3b";
    path.style.stroke = "#d97706";
    path.style.strokeWidth = "6";

    showInfo(id);
    zoomToProvince(path);
    searchInput.value = provinces[id].name;
}

function resetHighlight() {
    const svgDoc = map.contentDocument;
    if (!svgDoc) return;
    svgDoc.querySelectorAll("path[id]").forEach(path => {
        if (path.dataset.originalFill) path.style.fill = path.dataset.originalFill;
        path.style.stroke = "";
        path.style.strokeWidth = "";
    });
}

function resetMap() {
    resetHighlight();

    const svgDoc = map.contentDocument;
    if (svgDoc) {
        const svg = svgDoc.querySelector("svg");
        if (svg) {
            svg.style.transition = "transform 0.6s ease";
            svg.style.transform = "scale(1) translate(0px, 0px)";
        }
    }

    infoPanel.classList.remove("active");
    setTimeout(() => infoPanel.style.display = "none", 300);
}

// ==================== AUTOCOMPLETE ====================
function createSuggestionsContainer() {
    if (suggestionsContainer) return;
    suggestionsContainer = document.createElement("div");
    suggestionsContainer.className = "suggestions-container";
    
    const searchBox = searchInput.parentElement;
    searchBox.style.position = "relative";
    searchBox.appendChild(suggestionsContainer);

    Object.assign(suggestionsContainer.style, {
        position: "absolute", top: "calc(100% + 8px)", left: "0", width: "100%",
        background: "white", border: "1px solid #ddd", borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)", maxHeight: "320px",
        overflowY: "auto", zIndex: "10000", display: "none", fontSize: "16px"
    });
}

createSuggestionsContainer();

searchInput.addEventListener("input", function () {
    const query = removeAccents(this.value.toLowerCase().trim());
    if (!query) {
        suggestionsContainer.style.display = "none";
        return;
    }

    resetHighlight();

    const matches = Object.entries(provinces)
        .filter(([id, p]) => removeAccents(p.name.toLowerCase()).includes(query))
        .slice(0, 10);

    suggestionsContainer.innerHTML = "";

    matches.forEach(([id, p]) => {
        const item = document.createElement("div");
        item.textContent = p.name;
        Object.assign(item.style, { padding: "14px 18px", cursor: "pointer", borderBottom: "1px solid #eee" });
        item.onmouseenter = () => item.style.background = "#f5f5f5";
        item.onmouseleave = () => item.style.background = "#fff";

        item.onclick = () => {
            resetHighlight();
            selectProvince(id);
            suggestionsContainer.style.display = "none";
        };
        suggestionsContainer.appendChild(item);
    });

    suggestionsContainer.style.display = "block";
});

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// ==================== ĐÓNG PANEL ====================
document.addEventListener("click", (e) => {
    if (e.target.id === "closePanel") {
        resetMap();
        return;
    }

    const isClickOnMap = map.contains(e.target) || e.target.closest("#map");
    const isClickOnPanel = infoPanel.contains(e.target);

    if (!isClickOnMap && !isClickOnPanel && infoPanel.classList.contains("active")) {
        resetMap();
    }

    // Ẩn suggestions
    if (suggestionsContainer && 
        !searchInput.contains(e.target) && 
        !suggestionsContainer.contains(e.target)) {
        suggestionsContainer.style.display = "none";
    }
});