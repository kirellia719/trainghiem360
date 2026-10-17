const PROVINCES = {
    VN01: {
        name: "Tuyên Quang",
        desc: "Nổi tiếng với di tích lịch sử cách mạng và cảnh quan núi rừng hùng vĩ.",
        href: "/vietnam/tinhthanh.html?province=tuyenquang",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 185, translateY: 300 }
        }
    },
    VN02: {
        name: "Cao Bằng",
        desc: "Nơi có thác Bản Giốc hùng vĩ - một trong những thác đẹp nhất thế giới.",
        href: "/vietnam/tinhthanh.html?province=caobang",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 185, translateY: 300 }
        }
    },
    VN03: {
        name: "Lai Châu",
        desc: "Vùng đất Tây Bắc với ruộng bậc thang và văn hóa dân tộc phong phú.",
        href: "/vietnam/tinhthanh.html?province=laichau",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN04: {
        name: "Lào Cai",
        desc: "Cửa ngõ biên giới, nổi tiếng với Sa Pa, Fansipan và chợ tình.",
        href: "/vietnam/tinhthanh.html?province=laocai",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN05: {
        name: "Thái Nguyên",
        desc: "Thủ phủ công nghiệp nặng và trung tâm giáo dục lớn của miền Bắc.",
        href: "/vietnam/tinhthanh.html?province=thainguyen",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN06: {
        name: "Điện Biên",
        desc: "Chiến thắng lịch sử Điện Biên Phủ năm 1954 - biểu tượng của dân tộc.",
        href: "/vietnam/tinhthanh.html?province=dienbien",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN07: {
        name: "Lạng Sơn",
        desc: "Cửa khẩu quan trọng, nổi tiếng với chợ Kỳ Lừa và cảnh quan núi non.",
        href: "/vietnam/tinhthanh.html?province=langson",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN08: {
        name: "Sơn La",
        desc: "Vùng cao Tây Bắc với hồ Sơn La và văn hóa dân tộc Thái, Mông.",
        href: "/vietnam/tinhthanh.html?province=sonla",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN09: {
        name: "Phú Thọ",
        desc: "Cái nôi của văn hóa Việt với Đền Hùng - biểu tượng thiêng liêng của dân tộc.",
        href: "/vietnam/tinhthanh.html?province=phutho",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN10: {
        name: "Bắc Ninh",
        desc: "Đất Quan họ, trung tâm công nghiệp và di sản văn hóa phi vật thể.",
        href: "/vietnam/tinhthanh.html?province=bacninh",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN11: {
        name: "Quảng Ninh",
        desc: "Vịnh Hạ Long - di sản thiên nhiên thế giới, trung tâm du lịch lớn.",
        href: "/vietnam/tinhthanh.html?province=qninh",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 185, translateY: 300 }
        }
    },
    VN12: {
        name: "Hà Nội",
        desc: "Thủ đô ngàn năm văn hiến, trung tâm chính trị, văn hóa và kinh tế của Việt Nam.",
        href: "/vietnam/tinhthanh.html?province=hanoi",
        zoom: {
            desktop: { translateX: 359, translateY: 450 },
            mobile: { translateX: 230, translateY: 300 }
        }
    },
    VN13: {
        name: "Hải Phòng",
        desc: "Thành phố Cảng, trung tâm công nghiệp và logistics quan trọng.",
        href: "/vietnam/tinhthanh.html?province=haiphong",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 185, translateY: 300 }
        }
    },
    VN14: {
        name: "Hưng Yên",
        desc: "Vùng đất văn hiến với nhiều di tích lịch sử và làng nghề truyền thống.",
        href: "/vietnam/tinhthanh.html?province=hungyen",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 185, translateY: 300 }
        }
    },
    VN15: {
        name: "Ninh Bình",
        desc: "Nơi có Tràng An, Tam Cốc - Bích Động, di sản văn hóa và thiên nhiên thế giới.",
        href: "/vietnam/tinhthanh.html?province=ninhbinh",
        zoom: {
            desktop: { translateX: 350, translateY: 450 },
            mobile: { translateX: 185, translateY: 100 }
        }
    },
    VN16: {
        name: "Thanh Hóa",
        desc: "Xứ Thanh giàu truyền thống cách mạng và văn hóa, quê hương Lam Sơn.",
        href: "/vietnam/tinhthanh.html?province=thanhhoa",
        zoom: {
            desktop: { translateX: 350, translateY: 50 },
            mobile: { translateX: 185, translateY: 100 }
        }
    },
    VN17: {
        name: "Nghệ An",
        desc: "Quê hương Bác Hồ, có biển Cửa Lò và nhiều di tích lịch sử.",
        href: "/vietnam/tinhthanh.html?province=nghean",
        zoom: {
            desktop: { translateX: 350, translateY: 350 },
            mobile: { translateX: 185, translateY: 100 }
        }
    },
    VN18: {
        name: "Hà Tĩnh",
        desc: "Đất học, quê hương của nhiều danh nhân văn hóa và cách mạng.",
        href: "/vietnam/tinhthanh.html?province=hatinh",
        zoom: {
            desktop: {
                translateX: 221, translateY: 350
            },
            mobile: { translateX: 185, translateY: 100 }
        }
    },
    VN19: {
        name: "Quảng Trị",
        desc: "Thành địa cách mạng với Thành cổ Quảng Trị và đường Hồ Chí Minh.",
        href: "/vietnam/tinhthanh.html?province=quangtri",
        zoom: {
            desktop: { translateX: 254, translateY: 80 },
            mobile: { translateX: 155, translateY: 100 }
        }
    },
    VN20: {
        name: "Huế",
        desc: "Cố đô Huế với Kinh thành, sông Hương, núi Ngự và di sản văn hóa thế giới.",
        href: "/vietnam/tinhthanh.html?province=hue",
        zoom: {
            desktop: { translateX: 306, translateY: 80 },
            mobile: { translateX: 95, translateY: 100 }
        }
    },
    VN21: {
        name: "Đà Nẵng",
        desc: "Thành phố đáng sống nhất Việt Nam với bãi biển Mỹ Khê và cầu Rồng.",
        href: "/vietnam/tinhthanh.html?province=danang",
        zoom: {
            desktop: { translateX: 324, translateY: 50 },
            mobile: { translateX: 55, translateY: -10 }
        }
    },
    VN22: {
        name: "Quảng Ngãi",
        desc: "Nổi tiếng với đảo Lý Sơn và di tích lịch sử Sơn Mỹ.",
        href: "/vietnam/tinhthanh.html?province=quangngai",
        zoom: {
            desktop: { translateX: 226, translateY: 40 },
            mobile: { translateX: 55, translateY: -90 }
        }
    },
    VN23: {
        name: "Gia Lai",
        desc: "Vùng đất Tây Nguyên với hồ T'Nưng và văn hóa cồng chiêng.",
        href: "/vietnam/tinhthanh.html?province=gialai",
        zoom: {
            desktop: { translateX: 344, translateY: -150 },
            mobile: { translateX: 55, translateY: -90 }
        }
    },
    VN24: {
        name: "Đắk Lắk",
        desc: "Thủ phủ cà phê Việt Nam, có hồ Lắk và buôn làng dân tộc.",
        href: "/vietnam/tinhthanh.html?province=daklak",
        zoom: {
            desktop: { translateX: 348, translateY: -150 },
            mobile: { translateX: 55, translateY: -150 }
        }
    },
    VN25: {
        name: "Khánh Hòa",
        desc: "Thiên đường du lịch với Nha Trang, vịnh Cam Ranh và đảo đẹp.",
        href: "/vietnam/tinhthanh.html?province=khanhhoa",
        zoom: {
            desktop: { translateX: 374, translateY: -100 },
            mobile: { translateX: 55, translateY: -250 }
        }
    },
    VN26: {
        name: "Lâm Đồng",
        desc: "Thành phố ngàn hoa Đà Lạt với khí hậu ôn đới và cảnh quan tuyệt đẹp.",
        href: "/vietnam/tinhthanh.html?province=lamdong",
        zoom: {
            desktop: { translateX: 355, translateY: -350 },
            mobile: { translateX: 55, translateY: -250 }
        }
    },
    VN27: {
        name: "Đồng Nai",
        desc: "Trung tâm công nghiệp lớn của miền Nam.",
        href: "/vietnam/tinhthanh.html?province=dongnai",
        zoom: {
            desktop: { translateX: 327, translateY: -350 },
            mobile: { translateX: 55, translateY: -300 }
        }
    },
    VN28: {
        name: "Tây Ninh",
        desc: "Nổi tiếng với núi Bà Đen và Tòa Thánh Cao Đài.",
        href: "/vietnam/tinhthanh.html?province=tayninh",
        zoom: {
            desktop: { translateX: 326, translateY: -350 },
            mobile: { translateX: 65, translateY: -300 }
        }
    },
    VN29: {
        name: "TP.HCM",
        desc: "Trung tâm kinh tế lớn nhất Việt Nam, năng động và hiện đại.",
        href: "/vietnam/tinhthanh.html?province=hcm",
        zoom: {
            desktop: { translateX: 276, translateY: -350 },
            mobile: { translateX: 65, translateY: -300 }
        }
    },
    VN30: {
        name: "An Giang",
        desc: "Vùng đất biên giới với núi Sam và miếu Bà Chợ Vải.",
        href: "/vietnam/tinhthanh.html?province=angiang",
        zoom: {
            desktop: { translateX: 231, translateY: -350 },
            mobile: { translateX: 85, translateY: -350 }
        }
    },
    VN31: {
        name: "Đồng Tháp",
        desc: "Vùng đất sen hồng, quê hương của Bác Hồ và nhiều di tích lịch sử.",
        href: "/vietnam/tinhthanh.html?province=dongthap",
        zoom: {
            desktop: { translateX: 183, translateY: -350 },
            mobile: { translateX: 85, translateY: -350 }
        }
    },
    VN32: {
        name: "Vĩnh Long",
        desc: "Vùng đất sông nước miền Tây với vườn trái cây và chợ nổi.",
        href: "/vietnam/tinhthanh.html?province=vinhlong",
        zoom: {
            desktop: { translateX: 242, translateY: -350 },
            mobile: { translateX: 85, translateY: -350 }
        }
    },
    VN33: {
        name: "Cần Thơ",
        desc: "Thủ phủ miền Tây Nam Bộ, nổi tiếng với chợ nổi Cái Răng.",
        href: "/vietnam/tinhthanh.html?province=cantho",
        zoom: {
            desktop: { translateX: 219, translateY: -350 },
            mobile: { translateX: 85, translateY: -350 }
        }
    },
    VN34: {
        name: "Cà Mau",
        desc: "Mũi Cà Mau - điểm cực Nam của Tổ quốc, giàu tài nguyên rừng ngập mặn.",
        href: "/vietnam/tinhthanh.html?province=camau",
        zoom: {
            desktop: { translateX: 196, translateY: -350 },
            mobile: { translateX: 85, translateY: -400 }
        }
    }
};