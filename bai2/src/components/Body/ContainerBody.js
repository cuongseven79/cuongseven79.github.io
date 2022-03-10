import { FaAmazon, FaArrowAltCircleRight, FaFacebook, FaRegEnvelope, FaTelegram, FaTimes, FaTwitter, FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeHeader from "../Header/Home";
import BlogHeader from "../Header/Blog"
import AcQui from "./AcQui";
import BepGas from "./BepGas";
import CamBien from "./CamBien";
import IntroHeader from "../Header/Introduction";
import ServiceHeader from '../Header/Service';
import Motua from "./Motua";
import PhuKienDungDien from "./PhuKienDungDien";
import ThietBiAmThanh from "./ThietBiAmThanh";
import ThietBiChieuSang from "./ThietBiChieuSang";
import ThietBiDanDung from "./ThietBiDanDung";
import ThietBiNgoaiVi from "./ThietBiNgoaiVi";
import TiVi from "./TiVi";



const DataSlides = [
  {
    link: [
      "https://nshopvn.com/tich-diem-hoan-tien/",
      "https://nshopvn.com/mien-phi-van-chuyen/",
      "https://nshopvn.com/blog/san-qua-tang-va-khuyen-mai-vao-20h-thu-6-hang-tuan-cung-dien-tu-nshop/",
      "https://nshopvn.com/mien-phi-van-chuyen/",
    ],
    image: [
      "https://nshopvn.com/img/banner/032221-tich-diem-hoan-tien.gif",
      "https://nshopvn.com/img/banner/022421-banner-4h.jpg",
      "https://nshopvn.com/img/banner/2021-12-29-banner-livestream-new.jpg",
      "https://nshopvn.com/img/banner/0720-banner-free-toanquoc.png",
    ]

  },

]
const dataHome = [
  {
    id: 1,
    name: "Tivi LED Darling HD 32 inch 32HD962S2",
    price: "3.599.000 ₫",
    service: "Freeship",
    description: "serviceED Freeship HD 32 inch 32HD962S2 có thiết kế màn hình siêu mỏng, tông màu đen ấn tượng tạo điểm nhấn cho tivi.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/13/eb/67/b0194f7a2be17e853fc2ce6502887bc1.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/2a/22/29/6f30614f403cfbcd9a74f13df271c62b.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/58/6c/93/dbe86152f40814dbb042fd8e210f28d7.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/dc/bb/e3/69f775ab7cd161f410dc3055f77c1c1f.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/b5/e4/67/48c313bed6d109f73f8eef173c2f4015.jpg",


    ]

  },
  {
    id: 2,
    name: "Smart Tivi Casper 32 Inch 32HG5200",
    price: "4.980.000 ₫",
    service: "Freeship",
    description: "Smart Tivi Casper 32 Inch 32HG5200 có thiết kế vân ngang, được tiết giảm, khiến cho phần viền thu gọn từ 14,2mm (phiên bản cũ) xuống còn 9,9mm ở phiên bản mới này.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/a7/e2/3a/16e26e9f3d6500df2e4c319ac9119f45.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/09/2e/5e/b29b408e1a12a6439ec3d71ecb47cfb4.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/32/b4/71/34b3f8c8e7a27ea8c0be8780792e8571.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/4c/33/eb/08bcec8c5ca93e1e4fe260cfe104c523.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/71/f3/55/d38dc8ebbcb15ed1cf3166b3a150d787.jpg",
    ]

  },
  {
    id: 3,
    name: "Bếp ga đôi Electrolux ETG727GKR - Hàng Chính Hãng",
    price: "1.509.000 ₫",
    service: "Freeship",
    description: "Bếp gas đôi Electrolux ETG727GKR của nhãn hàng nổi tiếng Thụy Điển – Electrolux, sản phẩm bền đẹp, nấu nướng dễ dàng, dùng tiết kiệm gas.      ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/e5/4b/5d/cf80aebc61ad1cace488b7c6a613f19c.jpg  ",
    ]
  },
  {
    id: 4,
    name: "Bếp Gas Dương Paloma PA - J51CE - Hàng Chính Hãng",
    price: "2.333.600 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Paloma PA-7MEJ được thiết kế bằng công nghệ Nhật Bản chất lượng hoàn hảo, hiện đại, cao, an toàn và dễ vệ sinh, mang đến sự tiện lợi cho người dùng. Gam màu đen dễ dàng phù hợp với tất cả kiểu dáng, màu sắc nội thất căn bếp của gia đình bạn.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/25/81/92/5bae048fa90a94e263d9a4642b7d348c.jpg ",

    ]
  },
  {
    id: 5,
    name: "Công tắc cảm ứng đèn LED 12VDC 4A",
    price: "120.000₫",
    service: "Freeship",
    description: "Công tắc cảm ứng đèn LED 12VDC 4A là loại công tắc cảm biến 1 chạm có độ nhạy tốt, được thiết kế với mẫu mã đẹp mắt với vòng tròn LED màu xanh dương ở vùng cảm biến giúp xác định vị trí công tắc trong bóng tối. Có thể điều chỉnh ánh sáng bằng cách nhấn giữ, chỉ sử dụng trong nhà, không lắp đặt bề mặt kim loại.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/10/cong-tac-cam-ung-den-led-12vdc-4a-6ywu-2-dd-600x600.jpg",
    ]
  },
  {
    id: 6,
    name: "Cảm biến khí dễ cháy MP-4",
    price: "110.000₫",
    service: "Freeship",
    description: "Cảm biến khí dễ cháy MP-4 sử dụng để kiểm tra các loại khí dễ cháy, hoạt động trên nguyên lí thay đổi độ dẫn điện của các lớp vật liệu, nồng độ gas càng cao thì độ dẫn điện càng lớn, từ đó biến đổi thành tín hiệu ngõ ra.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/05/cam-bien-khi-de-chay-mp-4-od7d-1-600x600.jpg",
    ]
  },
  {
    id: 7,
    name: "Bộ cảm biến cân nặng loadcell 180kg + khung bàn cân mica",
    price: "437.000₫  ",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/05/bo-cam-bien-can-nang-loadcell-180kg-khung-ban-can-mica-vghk-3-600x600.jpg",
    ]
  },
  {
    id: 8,
    name: "Ắc quy Vision 6FM120E-X (12V - 120Ah)",
    price: "4.150.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/ff/80/7c/d970a449fbd75ee49e93dfcf4f324fb2.jpg",
    ]
  },
  {
    id: 9,
    name: "Ắc quy Vision 6FM100D-X (12V-100Ah) NLMT - Hàng chính hãng",
    price: "4.150.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/65/7a/87/e1eb54b0e6f214965740d8a92595f5e4.jpg",
    ]
  },
]
const dataTv = [
  {
    id: 1,
    name: "Tivi LED Darling HD 32 inch 32HD962S2",
    price: "3.599.000 ₫",
    service: "Freeship",
    description: "serviceED Freeship HD 32 inch 32HD962S2 có thiết kế màn hình siêu mỏng, tông màu đen ấn tượng tạo điểm nhấn cho tivi.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/13/eb/67/b0194f7a2be17e853fc2ce6502887bc1.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/2a/22/29/6f30614f403cfbcd9a74f13df271c62b.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/58/6c/93/dbe86152f40814dbb042fd8e210f28d7.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/dc/bb/e3/69f775ab7cd161f410dc3055f77c1c1f.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/b5/e4/67/48c313bed6d109f73f8eef173c2f4015.jpg",


    ]

  },
  {
    id: 2,
    name: "Smart Tivi Casper 32 Inch 32HG5200",
    price: "4.980.000 ₫",
    service: "Freeship",
    description: "Smart Tivi Casper 32 Inch 32HG5200 có thiết kế vân ngang, được tiết giảm, khiến cho phần viền thu gọn từ 14,2mm (phiên bản cũ) xuống còn 9,9mm ở phiên bản mới này.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/a7/e2/3a/16e26e9f3d6500df2e4c319ac9119f45.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/09/2e/5e/b29b408e1a12a6439ec3d71ecb47cfb4.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/32/b4/71/34b3f8c8e7a27ea8c0be8780792e8571.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/4c/33/eb/08bcec8c5ca93e1e4fe260cfe104c523.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/71/f3/55/d38dc8ebbcb15ed1cf3166b3a150d787.jpg",
    ]

  }
  ,
  {
    id: 3,
    name: "Smart Tivi Samsung HD 32 inch UA32T4500",
    price: "7.312.000 ₫",
    service: "Freeship",
    description: "Smart Tivi Samsung HD 32 inch UA32T4500 sở hữu thiết kế tinh giản với độ mỏng tối ưu mang đến vẻ đẹp hiện đại và thanh lịch cho TV HD, giúp nâng tầm không gian sống, kiến tạo nên trải nghiệm xem hoàn hảo. Đặc biệt cùng chân đế vững chắc phù hợp đặt lên kệ hay treo tường trong không gian của phòng làm việc, phòng khách, phòng ngủ,",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/b2/3f/d3/5ac25ec288294b492e0d85c749e9c11e.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/b2/3e/92/a9ea15e3f84dce291839e9b84fbbf759.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/b7/66/d7/62b93df63c64c31ad15a122f8d112b88.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/cb/cd/55/03502300e63aa58803e553a2c9f8999d.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/ba/c0/f5/200145d3491333caf7984d365e90d5da.jpg",
    ]

  },
  {
    id: 4,
    name: "Smart Tivi QLED Samsung 4K 65 inch QA65Q60A Mới 2021",
    price: "24.690.000 ₫",
    service: "Freeship",
    description: "Smart Tivi QLED Samsung 4K 65 inch QA65Q70A Mới 2021. Bộ xử lý Quantum 4K mạnh mẽ giúp tối ưu hiệu suất toàn diện, tinh chỉnh thông minh hình ảnh, âm thanh và nhiều yếu tố khác, mang đến cho bạn trải nghiệm xem hoàn hảo xứng tầm tuyệt tác.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/30/a3/c8/9ae28c0d835f01ec78850cf521ce80f9.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/1a/fe/ec/b2d7a961a738c8c32652f5d8efb742a6.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/3b/c2/04/7e308919887074e7ce773498b00db7d6.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/d7/5e/a5/53f07908ea06b5018ae2e2144156e2bc.jpg",

    ]
  },
  {
    id: 5,
    name: "Smart Tivi QLED Samsung 8K 65 inch QA65Q800TA",
    price: "49.790.000 ₫",
    service: "Freeship",
    description: "Sự hoà quyện ấn tượng giữa viền và chân đứng tạo thành một bộ khung tổng thể liền mạch, Smart Tivi QLED Samsung 8K 65 inch QA65Q800TA đậm dấu ấn tinh giản mà vẫn truyền tải trọn vẹn vẻ đẹp tinh tế và sang trọng với thiết kế không viền 4 cạnh, nâng tầm không gian sống thời thượng.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/77/cc/99/0675329ae8587c001cb7e3db9f67ede6.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/f1/56/76/a009b980c355b9a429bcc09ac1c844a2.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/77/cc/99/0675329ae8587c001cb7e3db9f67ede6.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/a2/5c/e1/65d98708a4a12f95f4b459deb355df8d.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/c3/bc/9b/a76bc2d5f9e0b64677019d32a4440fa8.jpg",
    ]
  },
  {
    id: 6,
    name: "Smart Tivi Casper Full HD 43 inch 43FG5200",
    price: "8.219.000 ₫",
    service: "Freeship",
    description: "Smart Tivi Casper Full HD 43 inch 43FG5200 có thiết kế vân ngang, được tiết giảm, khiến cho phần viền thu gọn từ 14,2mm (phiên bản cũ) xuống còn 9,9mm ở phiên bản mới này.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/78/e7/67/32f78cab265549132d6bb98a15e91720.png",
      "https://salt.tikicdn.com/cache/w1200/ts/product/ea/0e/e8/c4531627b19efbdbcb580ccb52cdcf52.png",
      "https://salt.tikicdn.com/cache/w1200/ts/product/f3/e7/f5/1666c4d4716d59c621bc76bd89b12868.png",
    ]
  },
  {
    id: 7,
    name: "Android Tivi QLED TCL 4K 55 inch 55Q716",
    price: "11.959.000 ₫",
    service: "Freeship",
    description: "Android Tivi QLED TCL 4K 55 inch 55Q716 được thiết kế với viền màn hình siêu mỏng, đường nét thanh mảnh tinh tế tạo nên tổng thể hài hòa và sang trọng, phù hợp với mọi không gian sống của người dùng. Đặc biệt, với chân đế và viền màn hình được làm từ thép có bề mặt phay xướt màu xanh là điểm nhấn tạo nên sự khác biệt trong thiết kế của tivi so với những dòng khác.  ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/8a/5c/58/24ebe59fc9327ffa5820f281bdd89b87.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/6a/87/9d/7ad4ea24c3ae99e14aa010afb2385498.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/bb/6c/e3/2010204caafd1467a4f357371bf480e2.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/96/20/15/843acafa422475dc7ac751f0efe75b44.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/13/0d/fe/c403d38ac1db212b0a1882617f1e7013.jpg",
    ]
  }, {
    id: 8,
    name: "Android Tivi QLED TCL 4K 65 inch L65C715",
    price: "18.796.000 ₫",
    service: "Freeship",
    description: "Thế hệ màn hình Tivi của tương lai. Màn hình LED nay đã được cách mạng hóa với công nghệ Quantum Dot bổ sung hàng tỷ tinh thể nano lượng tử. Tivi QLED mang lại màu sắc tinh khiết nhất, tái tạo màu sắc chi tiết nhất thông qua tấm nền Chấm lượng tử (Quantum Dot) – Mang lại Gam màu và độ sáng lên đến 98%.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/44/4f/fb/d3f5cd91e302052f87eff3ee501445d8.jpg"
    ]
  }, {
    id: 9,
    name: "Smart Tivi QLED Samsung 4K 55 inch QA55Q80TA",
    price: "24.879.000 ₫",
    service: "Freeship",
    description: "Smart Tivi QLED Samsung 55 inch 4K UHD QA55Q75RAKXXV được thiết kế sang trọng với viền màn hình mỏng đi kèm kích thước màn hình lớn thích hợp để đặt ở những gian phòng rộng như phòng khách, phòng hội họp,",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/6d/37/25/07abdda24fc399cb026e1b8e22f9f165.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/40/f0/0f/c5880279167b317cafb8186fe22fd63a.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/6d/37/25/07abdda24fc399cb026e1b8e22f9f165.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/c3/7f/78/5b0085aae51d3e6237c00d3e35ad241e.jpg",
      "https://salt.tikicdn.com/cache/w1200/ts/product/aa/ca/13/85bb4d340434600748e5d0a06b761229.jpg",
    ]
  },

]
const dataBepGas = [
  {
    id: 1,
    name: "Bếp ga đôi Electrolux ETG727GKR - Hàng Chính Hãng",
    price: "1.509.000 ₫",
    service: "Freeship",
    description: "Bếp gas đôi Electrolux ETG727GKR của nhãn hàng nổi tiếng Thụy Điển – Electrolux, sản phẩm bền đẹp, nấu nướng dễ dàng, dùng tiết kiệm gas.      ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/e5/4b/5d/cf80aebc61ad1cace488b7c6a613f19c.jpg  ",
    ]
  },
  {
    id: 2,
    name: "Bếp Gas Dương Paloma PA - J51CE - Hàng Chính Hãng",
    price: "2.333.600 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Paloma PA-7MEJ được thiết kế bằng công nghệ Nhật Bản chất lượng hoàn hảo, hiện đại, cao, an toàn và dễ vệ sinh, mang đến sự tiện lợi cho người dùng. Gam màu đen dễ dàng phù hợp với tất cả kiểu dáng, màu sắc nội thất căn bếp của gia đình bạn.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/25/81/92/5bae048fa90a94e263d9a4642b7d348c.jpg ",

    ]
  },
  {
    id: 3,
    name: "Bếp Gas Dương Paloma PA-7MEJ - Hàng chính hãng",
    price: "2.885.600 ₫",
    service: "Freeship",
    description: "Bếp gas đôi Electrolux ETG727GKR của nhãn hàng nổi tiếng Thụy Điển – Electrolux, sản phẩm bền đẹp, nấu nướng dễ dàng, dùng tiết kiệm gas.      ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/e5/4b/5d/cf80aebc61ad1cace488b7c6a613f19c.jpg",

    ]
  },
  {
    id: 4,
    name: "Bếp Gas Dương Paloma PA-V71ER - Hàng chính hãng",
    price: "1.509.000 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Paloma PA-V71ER có kiểu dáng đơn giản, màu sắc sang trọng, mang đến nét hiện đại, thời trang cho mọi không gian bếp, thiết kế dễ dàng lắp đặt.  ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/15/07/78/c9a31a370922743c574ca1f9ba491ffc.jpg",

    ]
  }, {
    id: 5,
    name: "Bếp Gas Dương Paloma PA-V71SB - Hàng Chính Hãng",
    price: "1.653.500 ₫",
    service: "Freeship",
    description: "Bếp gas đôi Electrolux ETG727GKR của nhãn hàng nổi tiếng Thụy Điển – Electrolux, sản phẩm bền đẹp, nấu nướng dễ dàng, dùng tiết kiệm gas.      ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/60/7c/76/d080386610487db7d20151e58822d896.jpg",
    ]
  },
  {
    id: 6,
    name: "Bếp Gas Dương Paloma PA-V72ES - Hàng chính hãng",
    price: "1.540.000 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Paloma PA-V72ES được thiết kế bằng công nghệ Nhật Bản chất lượng hoàn hảo, hiện đại, cao, an toàn và dễ vệ sinh, mang đến sự tiện lợi cho người dùng. Gam màu đen dễ dàng phù hợp với tất cả kiểu dáng, màu sắc nội thất căn bếp của gia đình bạn. ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/80/19/78/2f930c47aac6b259b6f7f35f215a6193.jpg",
    ]
  },
  {
    id: 7,
    name: "Bếp Gas Dương Electrolux ETG728GKR - Hàng chính hãng",
    price: "2.012.700 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Paloma PA - J61PE được nhập khẩu nguyên kiện 100% từ Nhật Bản, được áp dụng công nghệ dây chuyền lắp ráp đạt tiêu chuẩn công nghiệp Nhật Bản.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/0/-/0--1-.u2769.d20170607.t092011.845126.jpg",
    ]
  },
  {
    id: 8,
    name: "Bếp Gas Dương Paloma PA - J61PE - Hàng Chính Hãng",
    price: "3.389.900 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Paloma PA-V72ES được thiết kế bằng công nghệ Nhật Bản chất lượng hoàn hảo, hiện đại, cao, an toàn và dễ vệ sinh, mang đến sự tiện lợi cho người dùng. Gam màu đen dễ dàng phù hợp với tất cả kiểu dáng, màu sắc nội thất căn bếp của gia đình bạn. ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/df/ea/68/a76fb35f7962f6fd525432d552c757d7.jpg",
    ]
  },
  {
    id: 9,
    name: "Bếp Gas Dương Đôi Kangaroo KG8G1A - Hàng Chính Hãng",
    price: "559.000 ₫",
    service: "Freeship",
    description: "Bếp Gas Dương Đôi Kangaroo KG8G1A với thiết kế bếp gas đôi với 2 vùng nấu tiện dụng để nấu nhiều món cùng lúc. ",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/3a/df/06/c52eab9c31c0f9df744f7c7b01e5293a.jpg",
    ]
  },
]
const dataCamBien = [

  {
    id: 1,
    name: "Công tắc cảm ứng chuyển động radar vi sóng SK-700 220VAC",
    price: "238.000₫",
    service: "Freeship",
    description: "Công tắc cảm ứng chuyển động radar vi sóng SK-700 220VAC là sản phẩm tự động phát hiện chuyển động để bật tắt thiết bị, có thể điều chỉnh cường độ ánh sáng để cảm biến có thể hoạt động ban đêm hoặc ban ngày. Cảm biến sử dụng vi sóng radar 5.8G có khả năng chống nhiễu mạnh, lắp đặt bình thường sẽ không gây nhiễu lẫn nhau, khoảng cách cảm ứng, độ nhạy và thời gian trễ đều có thể điều chỉnh nên rất thuận tiện khi sử dụng sản phẩm này.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/12/cong-tac-cam-ung-chuyen-dong-radar-vi-song-sk-700-220vac-16bj-1.jpg",
    ]
  },
  {
    id: 2,
    name: "Bút kiểm tra chất lượng nước TDS - EC và nhiệt độ của nước 3 trong 1",
    price: "190.000₫",
    service: "Freeship",
    description: "Bút kiểm tra chất lượng nước TDS – EC và nhiệt độ của nước giúp kiểm tra chất lượng và nhiệt độ của nước sinh hoạt, nước uống cũng như nước trong phòng thí nghiệm nhà máy sản xuất nước tinh khiết, là một thiết bị không thể thiếu trong mỗi gia đình nhà máy. Sản phẩm có thiết kế chắc chắn, màn hình hiển thị rõ ràng đẹp mắt, dễ dàng sử dụng, có thể hiện giá trị cảnh báo thông qua đèn nền, màu xanh chỉ số ppm < 40 là nước có thể uống trực tiếp, màu đỏ chỉ số ppm > 40 là nước không được uống trực tiếp",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/12/but-kiem-tra-chat-luong-nuoc-tds-ec-va-nhiet-do-cua-nuoc-3-trong-1-jtkf-1.jpg",
    ]
  },
  {
    id: 3,
    name: "Cảm biến nhận dạng vân tay điện dung R503 15mm không chống nước",
    price: "510.000₫",
    service: "Freeship",
    description: "Cảm biến nhận dạng vân tay điện dung R305 tích hợp chip thuật toán vân tay, được thiết kế nhỏ gọn, tiện ích, tiêu thụ điện năng thấp. Được ứng dụng để mở cửa, mở khóa xe máy, máy chấm công…",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2019/12/cam-bien-nhan-dang-van-tay-dien-dung-r503-19mm-chong-nuoc-05mt-1-600x600.jpg",
    ]
  },
  {
    id: 4,
    name: "Vỏ hợp kim bảo vệ cảm biến vân tay R503-19 mm",
    price: "160.000₫",
    service: "Freeship",
    description: "Vỏ hợp kim bảo vệ cảm biến vân tay R503-19 mm, Vỏ bảo vệ bằng hợp kim, được phát triển đặc biệt cho mô-đun vân tay dòng R503, tất cả đều được đúc bằng hợp kim kẽm, vỏ bằng kính độ nét cao.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/12/vo-bao-ve-cam-bien-r503-19-mm-vo-bao-ve-bang-hop-kim-vbh3-6-600x600.jpg",
    ]
  },
  {
    id: 5,
    name: "Công tắc cảm ứng đèn LED 12VDC 4A",
    price: "120.000₫",
    service: "Freeship",
    description: "Công tắc cảm ứng đèn LED 12VDC 4A là loại công tắc cảm biến 1 chạm có độ nhạy tốt, được thiết kế với mẫu mã đẹp mắt với vòng tròn LED màu xanh dương ở vùng cảm biến giúp xác định vị trí công tắc trong bóng tối. Có thể điều chỉnh ánh sáng bằng cách nhấn giữ, chỉ sử dụng trong nhà, không lắp đặt bề mặt kim loại.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/10/cong-tac-cam-ung-den-led-12vdc-4a-6ywu-2-dd-600x600.jpg",
    ]
  },
  {
    id: 6,
    name: "Cảm biến khí dễ cháy MP-4",
    price: "110.000₫",
    service: "Freeship",
    description: "Cảm biến khí dễ cháy MP-4 sử dụng để kiểm tra các loại khí dễ cháy, hoạt động trên nguyên lí thay đổi độ dẫn điện của các lớp vật liệu, nồng độ gas càng cao thì độ dẫn điện càng lớn, từ đó biến đổi thành tín hiệu ngõ ra.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/05/cam-bien-khi-de-chay-mp-4-od7d-1-600x600.jpg",
    ]
  },
  {
    id: 7,
    name: "Bộ cảm biến cân nặng loadcell 180kg + khung bàn cân mica",
    price: "437.000₫  ",
    service: "Freeship",
    description: "Bộ cảm biến cân nặng loadcell 180kg + khung bàn cân mica thường được sử dụng để làm cân điện tử, kết hợp với vi điều khiển để làm mô hình phân loại sản phẩm, mô hình máy tính tiền tự động… Cảm biến có thể đo khối lượng của vật thể tối đa 180kg, cảm biến làm bằng kim loại với thiết kế nhỏ gọn, dễ dàng lắp đặt, độ chính xác cao. Khung bàn cân mica nhỏ gọn, trọng lượng nhẹ, dễ dàng sử dụng và mang theo. Kết cấu đủ cứng vững để đảm bảo tải trọng tối đa.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/05/bo-cam-bien-can-nang-loadcell-180kg-khung-ban-can-mica-vghk-3-600x600.jpg",
    ]
  },
  {
    id: 8,
    name: "Dây Cảm Biến Nhiệt Độ Loại K 500°C dài 1 mét",
    price: "23.000₫",
    service: "Freeship",
    description: "Dây Cảm Biến Nhiệt Độ Loại K 500°C 1 mét / 2 mét / 3 mét là loại cảm biến có giải đo rộng từ  -60 ℃ đến 500 ℃ phù hợp với các ứng dụng cần giải đo rộng, nhiệt độ cao, đo nhiệt độ trong công nghiệp, dây cảm biến được bọc lớp vỏ kim loại cho độ bền độ chính xác ổn định cao. Có nhiều loại độ dài phục vụ cho các mục đích khác nhau.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/04/day-cam-bien-nhiet-do-loai-k-500degc-dai-1-met-dai-2-met-iktw-o8eb-4-600x600.jpg",
    ]
  },
  {
    id: 9,
    name: "Bộ Cảm Biến Cân Nặng Loadcell 20kg + Khung Bàn Cân Mica",
    price: "140.000₫",
    service: "Freeship",
    description: "Dây Cảm Biến Nhiệt Độ Loại K 500°C 1 mét / 2 mét / 3 mét là loại cảm biến có giải đo rộng từ  -60 ℃ đến 500 ℃ phù hợp với các ứng dụng cần giải đo rộng, nhiệt độ cao, đo nhiệt độ trong công nghiệp, dây cảm biến được bọc lớp vỏ kim loại cho độ bền độ chính xác ổn định cao. Có nhiều loại độ dài phục vụ cho các mục đích khác nhau.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/05/bo-cam-bien-can-nang-loadcell-20kg-khung-ban-can-mica-kw1e-2-600x600.jpg",
    ]
  },
]
const dataAcQui = [

  {
    id: 1,
    name: "Ắc quy Ô tô ĐỒNG NAI NS60L (12V-45Ah) - HÀNG CHÍNH HÃNG",
    price: "898.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/77/59/e2/a2098dd9198ac36446c844b0fef62f2c.jpg",
    ]
  },
  {
    id: 2,
    name: "Ắc quy Ô tô ĐỒNG NAI CMF 80D26 (12V-70Ah) - HÀNG CHÍNH HÃNG",
    price: "1.557.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/ba/27/f7/12742d36cf5168e63312372c413371d6.png",
    ]
  },
  {
    id: 3,
    name: "Ắc quy Ô tô ĐỒNG NAI CMF 105D31L (12V-90Ah) - HÀNG CHÍNH HÃNG",
    price: "1.839.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/d6/de/6c/169f4cb56605bd53b1353cd9f6d6b22b.png",
    ]
  },
  {
    id: 4,
    name: "Ắc quy Ô tô ĐỒNG NAI CMF 55D23L (12V-60Ah) - HÀNG CHÍNH HÃNG",
    price: "1.368.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:.",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/c2/68/28/8825d1a5b606091bf55c929ecc93a620.png",
    ]
  },
  {
    id: 5,
    name: "Ắc quy Vision 6FM55-X 12V 55Ah",
    price: "2.600.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/7b/42/3d/6c01536ba3ae761ca27621305bde9e73.jpg",
    ]
  },
  {
    id: 6,
    name: "Ắc quy Vision 6FM75-X (12V - 75Ah)",
    price: "3.000.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/bd/11/c8/b39a213537d4a6770a02b989c2e85753.jpg",
    ]
  },
  {
    id: 7,
    name: "Bộ cảm biến cân nặng loadcell 180kg + khung bàn cân mica",
    price: "437.000₫  ",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://nshopvn.com/wp-content/uploads/2021/05/bo-cam-bien-can-nang-loadcell-180kg-khung-ban-can-mica-vghk-3-600x600.jpg",
    ]
  },
  {
    id: 8,
    name: "Ắc quy Vision 6FM120E-X (12V - 120Ah)",
    price: "4.150.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/ff/80/7c/d970a449fbd75ee49e93dfcf4f324fb2.jpg",
    ]
  },
  {
    id: 9,
    name: "Ắc quy Vision 6FM100D-X (12V-100Ah) NLMT - Hàng chính hãng",
    price: "4.150.000 ₫",
    service: "Freeship",
    description: "Các sản phẩm của PINACO được sản xuất theo công nghệ Châu Âu trên dây chuyền hiện đại của các công ty hàng đầu thế giới về máy móc thiết bị pin và ắc quy. Nhờ vậy sản phẩm của PINACO luôn bảo đảm những ưu thế vượt trội:",
    logo: "https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg",
    images: [
      "https://salt.tikicdn.com/cache/w1200/ts/product/65/7a/87/e1eb54b0e6f214965740d8a92595f5e4.jpg",
    ]
  },
]
const dataBlog = [
  {
    id: 1,
    image: "https://nshopvn.com/wp-content/uploads/2022/01/3-300x150.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  12/01/2022",
    title: "Cảm biến khí là gì ? Ứng dụng của cảm biến khí. Có những loại cảm biến khí nào ? Tự chế một bộ cảnh báo khí rò rỉ qua điện thoại và còi bằng Arduino",
    content: "Trong bài viết này, chúng ta sẽ tìm hiểu thêm về cảm biến khí , cấu tạo, loại và cách hoạt động của chúng và cách chúng được sử dụng để đo loại và nồng độ khí trong bầu không khí chúng ta đang thở. Có rất nhiều loại cảm biến khí nhưng cảm biến gas loại MQ & MP được sử dụng phổ biến và rộng rãi nên sẽ tập trung nhiều hơn vào các loại cảm biến loại này. Cùng với đó chúng ta sẽ cùng nhau chế độ 1 bộ cảnh báo khí rò rỉ bằng Arduino"
  },
  {
    id: 2,
    image: "https://nshopvn.com/wp-content/uploads/2021/12/1-300x150.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  11/08/2022",
    title: "Mạch tạo trễ là gì, ứng dụng của mạch tạo trễ, tìm mạch tạo trễ phù hợp",
    content: "Mạch tạo trễ từ trước đến nay luôn được sử dụng phổ biến trong các lĩnh vực đời sống hàng ngày hôm nay mình cùng các bạn tìm hiểu mạch tạo trễ là gì ưu và nhược điểm của từng loại, cùng vơi đó là tìm ra mạch tạo trễ phù hợp với ứng dụng của mình"
  },
  {
    id: 3,
    image: "https://nshopvn.com/wp-content/uploads/2021/12/chi-so-tds-la-gi-ec-la-gi-anh-huong-cua-tds-ec-doi-voi-doi-song-1-300x177.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/vhttps://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  19/10/2022",
    title: "Chỉ số TDS là gì, EC là gì, ảnh hưởng của TDS EC đối với đời sống",
    content: "Nước là một vật chất gần gũi cần thiết không thể thiếu trong đời sống hằng ngày, tuy nhiên ngày nay do các hoạt động của con người làm ảnh hưởng không nhỏ đến chất lượng nguồn nước khiến cho chất lượng nguồn nước đầu vào không được đảm bảo. Tuy nhiên chúng ta vẫn chưa biết đánh giá chất lượng nguồn nước như thế nào thì một trong những tiêu chí hàng đầu để đánh giá một nguồn nước là chỉ số TDS."
  },
  {
    id: 4,
    image: "https://nshopvn.com/wp-content/uploads/2021/11/anh-dai-dien-1-300x212.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  25/11/2022",
    title: " Giới thiệu mạch thu phát Wifi BLE ESP32-CAM Ai-Thinker, hướng dẫn cài đặt với Arduino IDE, thực hành làm bộ mở khóa cửa nhận diện khuôn mặt bằng ESP32-CAM",
    content: "Bài viết này là hướng dẫn sử dụng nhanh cho bo mạch ESP32-CAM. Chúng tôi sẽ hướng dẫn bạn cách thiết lập máy chủ web phát trực tuyến video với tính năng nhận dạng và phát hiện khuôn mặt trong vòng chưa đầy 5 phút với Arduino IDE"
  },
  {
    id: 5,
    image: "https://nshopvn.com/wp-content/uploads/2021/10/Led-ambilight-la-gi-huong-dan-lam-led-amblight-voi-arduino-11-1-300x300.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  03/05/2022",
    title: "Led Ambilight là gì, hướng dẫn làm led Ambilight với Arduino",
    content: "Trong bài viết này mình sẽ hướng dẫn các bạn làm một bộ led ambilight xịn xò với arduino mà cách làm thì cực kỳ đơn giản dễ hiểu những người không am hiểu điện tử cũng làm được"
  },
  {
    id: 6,
    image: "https://nshopvn.com/wp-content/uploads/2021/11/anh-dai-dien-2-300x197.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  14/02/2022",
    title: "Hướng dẫn cài đặt và sử dụng Blynk New 2.0 trên Arduino IDE với ESP8266",
    content: "Bài viết này sẽ hướng các bạn cài đặt và sử dụng app Blynk new 2.0 trên Arduino IDE với Esp8266, giúp các bạn có cái nhìn tổng quan những ưu và nhược điểm so với app cũ."
  },
  {
    id: 7,
    image: "https://nshopvn.com/wp-content/uploads/2021/10/blog-cam-bien-van-tay-nshop-300x225.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  12/02/2022",
    title: " Giới thiệu cảm biến vân tay, hướng dẫn sử dụng cảm biến vân tay với Arduino, thực hành làm bộ mở khóa cửa bằng cảm biến vân tay và Arduino",
    content: "Cảm biến vân tay ngày càng trở nên phổ biến, nó được ứng dụng nhiều trong cuộc sống hằng ngày như: điện thoại thông minh, ipad, hệ thống cửa vân tay… Blog này sẽ tìm hiểu rõ hơn về cảm biến và cách để làm một khóa cửa thông minh…"
  },
  {
    id: 8,
    image: "https://nshopvn.com/wp-content/uploads/2021/11/anh-dai-dien-2-300x197.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  12/01/2022",
    title: "Cảm biến khí là gì ? Ứng dụng của cảm biến khí. Có những loại cảm biến khí nào ? Tự chế một bộ cảnh báo khí rò rỉ qua điện thoại và còi bằng Arduino",
    content: "Trong bài viết này, chúng ta sẽ tìm hiểu thêm về cảm biến khí , cấu tạo, loại và cách hoạt động của chúng và cách chúng được sử dụng để đo loại và nồng độ khí trong bầu không khí chúng ta đang thở. Có rất nhiều loại cảm biến khí nhưng cảm biến gas loại MQ & MP được sử dụng phổ biến và rộng rãi nên sẽ tập trung nhiều hơn vào các loại cảm biến loại này. Cùng với đó chúng ta sẽ cùng nhau chế độ 1 bộ cảnh báo khí rò rỉ bằng Arduino"
  },
  {
    id: 9,
    image: "https://nshopvn.com/wp-content/uploads/2021/10/Huong-dan-nap-Firmware-cho-ESP-01-ESP01S-nap-firmware-cho-esp8266-Node-MCU-cach-tao-file-HEX-file-Bin-tren-Arduino-va-nap-file-hex-cho-Arduino-cach-nap-file-bin-cho-Esp-8266-2-300x150.jpg",
    link: "https://nshopvn.com/blog/cam-bien-khi-la-gi-ung-dung-cua-cam-bien-khi-co-nhung-loai-cam-bien-khi-nao-tu-che-bo-canh-bao-chat-luong-khi-bao-dong-qua-dien-thoai-va-coi/v",
    statusUpdate: "Updated",
    date: "|  03/02/2022",
    title: " Hướng dẫn nạp Firmware cho ESP-01, ESP01S, nạp firmware cho esp8266 Node MCU, cách tạo file HEX, file Bin trên Arduino và nạp file hex cho Arduino, cách nạp file bin cho Esp 8266",
    content: "Cách nạp firmware cho ESP-01, ESP-01S, esp8266 Node MCU, Cách tạo file HEX, file BIN trên Arduino"
  },



]
const dataIntro = [
  {
    id: 1,
    image: "https://jobsgo.vn/media/img/employer/33726-cover-app.jpg",
    imageStaff: "https://viethoa.com.vn/image/data/gioi-thieu/doi-ngu-nhan-vien/nhan-vien-viet-hoa.jpg",
    history: "- Cửa hàng điện tử Seven (tiền thân Tiệm điện tử Seven) chính thức được thành lập và đi vào hoạt động ngày 24/11/2001 với ngành nghề kinh doanh chủ yếu là Điện máy – Nội thất. Bắt đầu hoạt động từ một cửa hàng kinh doanh các mặt hàng điện – điện tử - điện lạnh nhỏ tại Tp Hồ Chí Minh, đến nay Điện tử Seven đã phát triển thành chuỗi hệ thống trung tâm Điện máy – Nội thất quy mô với 10 trung tâm lớn tiện nghi thu hút đông đảo khách hàng đến tham quan và mua sắm.",
    achievement: "- Điện tử Seven khẳng định tên tuổi và uy tín của mình thông qua việc tổ chức hệ thống bán lẻ các sản phẩm điện máy, gia dụng, nội thất cao cấp với một mô hình bán lẻ hiện đại và tiên tiến nhất hiện nay. với hơn 80.000 sản phẩm chính hãng của các thương hiệu hàng đầu thế giới như: Sony, Toshiba, LG, Panasonic, Samsung, Sharp, Sanyo, Toshiba, Elextrolux, Deawoo, Fujiyama, Canon, Nokia, HP, Black&White, Hitachi, Philips, TCL, Acer, JVC, Reetech, … Qua kết quả bình chọn, 90% khách hàng chọn Điện tử Seven làm nơi mua sắm hàng tuần với các lý do:Sản phẩm chính hãng – chất lượng cao – giá cả hợp lý. . Sản phẩm đa dạng, phong phú – tiện lợi cho việc mua sắm. Trung tâm rộng lớn, thoáng mát – cách bài trí sản phẩm đẹp – dễ tìm kiếm.Chương trình chăm sóc khách hàng – hậu mãi chu đáo. Bên cạnh đó, Điện tử Seven còn là doanh nghiệp luôn đi đầu trong công tác xã hội vì cộng đồng nhằm góp phần chia sẻ những khó khăn của người dân sống trong vùng thiên tai, bão lụt, những gia đình nghèo còn gặp nhiều khó khăn trong cuộc sống. Trong tương lai, hệ thống Trung tâm Điện máy – Nội thất Điện tử Seven sẽ được nhân rộng khắp với hơn 10 trung tâm mua sắm tại Tp. Hồ Chí Minh và các trung tâm tại các tỉnh lân cận như Bình Dương, Đồng Nai, Long An, Cần Thơ, Bà Rịa - Vũng Tàu, Vĩnh Long,... sau đó sẽ nhân rộng khắp đến các tỉnh thành khác trên cả nước.",
    develop: "- Với sự phát triển không ngừng của thị trường điện máy, Điện tử Seven đã và đang nổ lực hết mình nhằm mang lại sự tin tưởng tuyệt đối cho khách hàng. Đặt ra sứ mệnh, “SỰ TIỆN ÍCH CỦA KHÁCH HÀNG LÀ NỀN TẢNG CHO SỰ TỒN TẠI VÀ PHÁT TRIỂN”, Điện tử Seven luôn hướng đến sự hoàn thiện trong công tác chăm sóc và phục vụ khách hàng tốt nhất. Với quy mô như hiện nay, Điện tử Seven tự tin sẽ trở thành hệ thống chuỗi siêu thị điện máy hiện đại nhất, rộng khắp đứng đầu Việt Nam, là nơi hội tụ sự tín nhiệm của các hãng điện tử hàng đầu trên thế giới và khách hàng. Trong tương lai, hệ thống Trung tâm Điện máy – Nội thất Điện tử Seven sẽ được nhân rộng khắp với hơn 10 trung tâm mua sắm tại Tp. Hồ Chí Minh và các trung tâm tại các tỉnh lân cận như Bình Dương, Đồng Nai, Long An, Cần Thơ, Bà Rịa - Vũng Tàu, Vĩnh Long,... sau đó sẽ nhân rộng khắp đến các tỉnh thành khác trên cả nước. Điện tử Seven sẽ còn phát triển nhiều tiện ích hơn nữa để xứng đáng với khẩu hiệu đề ra Điện tử Seven – Tiện Ích Cho Mọi Nhà.",
    promise: "- Tiếp tục đem đến cho khách hàng những quyền lợi mua sắm tốt nhất với phong cách phục vụ chuyên nghiệp và các chương trình khuyến mãi hấp dẫn.Nâng cao chất lượng dịch vụ bảo hành, bảo trì, giao hàng, lắp đặt và các dịch vụ khác. Cam kết cung cấp cho khách hàng những sản phẩm chất lượng cao, giá cả hợp lý và thương hiệu uy tín.Thường xuyên tìm kiếm, khai thác và phân phối các sản phẩm mới, hiện đại, phù hợp với nhu cầu khách hàng. Cam kết sẽ tiếp tục đổi mới về mọi mặt để đưa Điện tử Seven lên một tầm vóc mới chuyên nghiệp hơn hiện đại hơn.",
  },

]


const ContainerBody = (props) => {
  const { } = props;
  const DataBarLeft = [
    {
      id: 1,
      name: "Tivi",
      image: "https://meta.vn/Data/image/2020/04/29/smart-tivi-oled-lg-4k-55-inch-55c8pta-2.jpg"

    },
    {
      id: 2,
      name: "Máy giặt",
      image: "https://cdn.nguyenkimmall.com/images/detailed/727/10048924-may-giat-samsung-inverter-8-5-kg-ww85t4040ce-sv-1.jpg"
    },
    {
      id: 3,
      name: "Máy lạnh",
      image: "https://meta.vn/Data/image/2019/06/01/may-lanh-panasonic-cu-cs-u12vkh-8-1-chieu-1-5hp-inverter-model-2019.jpg"
    },
    {
      id: 4,
      name: "Nồi cơm",
      image: "https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/292/10034684-noi-com-dien-sharp-2-2-lit-ksh-d22v-1.jpg"
    },
    {
      id: 5,
      name: "Quạt gió",
      image: "https://s.meta.com.vn/Data/image/2021/03/03/quat-ban-senko-b1612-2.jpg"
    },
    {
      id: 6,
      name: "Tủ lạnh",
      image: "https://hangdienmaygiare.com/images/products/2019/11/07/original/tu-lanh-aqua-aqr-t249ma-pb-2-org_1573103727.jpg"

    },
    {
      id: 7,
      name: "Bóng đèn",
      image: "https://product.hstatic.net/1000360166/product/l68_0727f2dda52e4d5cbf095959c32c283a.jpg"
    },
    {
      id: 8,
      name: "Camera",
      image: "https://cdn.tgdd.vn/Products/Images/4728/242566/camera-ip-360-do-3mp-tp-link-tapo-c210-2-1-org.jpg"
    },
    {
      id: 9,
      name: "Đồ điện dân dụng",
      image: "https://cf.shopee.vn/file/fdeaac17292433cdae313feff73289e5"
    },
  ];



  const [newProduct, setNewProDuct] = useState(dataHome);
  const [slides, setSlides] = useState(DataSlides);
  const [tivi, setTivi] = useState(dataTv);
  const [bepgas, setBepgas] = useState(dataBepGas);
  const [cambien, setCambien] = useState(dataCamBien);
  const [acqui, setAcqui] = useState(dataAcQui);
  const [blogs, setBlogs] = useState(dataBlog);
  const [content, setIntro] = useState(dataIntro);
  






  return (
    <section className="body-container">

      {/* -------------------------- Bar Left  ---------------------- */}

      <div className="body-bar">
        <div className="bar-left">
          <div className="bar-left-name">
            {DataBarLeft.map((item) => (
              <div className="bar-left-icons">
                <img src={item.image} alt="Icons" />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* -------------------------- Bar Right  ---------------------- */}
        <Routes className="bar-right">
          <Route path="/" element={<HomeHeader newProduct={newProduct} slides={slides} />} />
          <Route path="/intro" element={<IntroHeader contents={content} />} />
          <Route path="/service" element={<ServiceHeader />} />
          <Route path="/blog" element={<BlogHeader blogs={blogs} />} />

          <Route path="/ti-vi" element={<TiVi tivi={tivi} slides={slides} />} />
          <Route path="/bep-gas" element={<BepGas bepgas={bepgas} slides={slides} />} />
          <Route path="/cam-bien" element={<CamBien cambien={cambien} slides={slides} />} />
          <Route path="/ac-qui" element={<AcQui acqui={acqui} slides={slides} />} />
          <Route path="/motua" element={<Motua bepgas={bepgas} slides={slides} />} />
          <Route path="/thiet-bi-ngoai-vi" element={<ThietBiNgoaiVi bepgas={bepgas} slides={slides} />} />
          <Route path="/thiet-bi-am-thanh" element={<ThietBiAmThanh cambien={cambien} slides={slides} />} />
          <Route path="/thiet-bi-chieu-sang" element={<ThietBiChieuSang bepgas={bepgas} slides={slides} />} />
          <Route path="/thiet-bi-dan-dung" element={<ThietBiDanDung cambien={cambien} slides={slides} />} />
          <Route path="/phu-kien-dung-cu-dien" element={<PhuKienDungDien tivi={tivi} slides={slides} />} />
        </Routes>

              {/* ------------------------SHOW MODAL-LOGIN-FRAMES------------------- */}
              
   

        </div>
      <footer className="footer">
        <div className="footes">
          <div className="foot-logo">
            <img src="https://seeklogo.com/images/S/seven-logo-9538CA3439-seeklogo.com.png" alt="logo" />
            <h4>HỆ THỐNG CỬA  HÀNG<div className="underline"><span></span></div></h4>
            <ul>
              <li> 11 Trương Định, TP Rạch Giá, Kiên Giang</li>
              <li> 30 Quang Trung, TP Rạch Giá, Kiên Giang</li>
              <li> 79 Trần Phú, TP Rạch Giá, Kiên Giang</li>
            </ul>
          </div>
          <div className="foot-buyOnline">
            <h3>MUA HÀNG ONLINE<div className="underline"><span></span></div></h3>
            <ul>
              <li>Thông tin chuyển khoản</li>
              <li>Lợi ích mua hàng online</li>
              <li>Hướng dẫn mua hàng</li>
              <li>Câu hỏi thường gặp</li>
              <li>Dịch vụ vận chuyển</li>
            </ul>
          </div>
          <div className="foot-policy">
            <h3>CHÍNH SÁCH CHUNG <div className="underline"><span></span></div></h3>
            <ul>
              <li>Bảo trì - Bảo hành - Đổi trả</li>
              <li>Quy định giao hàng</li>
              <li>Điều khoản sử dụng</li>
              <li>Chính sách hoàn tiền</li>
              <li>Thỏa thuận người dùng</li>
              <li>Chính sách vận chuyển</li>

            </ul>
          </div>
          <div className="foot-contact">
            <h3>THÔNG TIN LIÊN HỆ<div className="underline"><span></span></div></h3>
            <div className="message">Hãy để lại thông tin chúng tôi sẽ liên hệ lại với bạn</div>
            <div className="email"><label><FaRegEnvelope /><input input type="email" placeholder="Enter your email" /><FaArrowAltCircleRight /> </label></div>
            <div className="line"></div>

            <div className="logo" >
              <a href="https://www.facebook.com/TGCDTN/"><FaFacebook /></a>
              <a href="https://twitter.com/?lang=vi"><FaTwitter /></a>
              <a href="https://web.telegram.org/z/"><FaTelegram /></a>
              <a href="https://www.amazon.com/"><FaAmazon /></a>
            </div>

          </div>
        </div>
        <div className="foot-imagePolicy">
          {/* <div className="emailUs"><a href="mailto:trangiacuong2018@gmail.com"><FaRegEnvelope/>  Email: trangiacuong2018@gmail.com</a>  </div>   
                      <span className="phoneUs">Số diện thoại: <a href="tel:+079.777.999"><b>079.777.999</b></a></span> */}

          <img src="https://360boutique.vn/wp-content/uploads/2019/04/da-thong-bao.png" alt="logo bộ công thương" />
          <img src="//cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/FE/images/hompage_50.png" alt="logo bộ công thương" />
          <img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=a18beee7-f292-4cf1-83c7-0768fdd869e2" alt="logo bộ công thương" />
        </div>
        <p className="foot-copyRight">
          Copyright © 2022 <b>CỬA HÀNG ĐIỆN TỬ SEVEN</b> . All Rights Reserved
        </p>
      </footer>
    </section>
  );

}

export default ContainerBody;

