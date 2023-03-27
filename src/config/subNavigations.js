export const SUB_NAVIGATIONS = [
  {
    id: 1,
    parentId:1,
    dropdownType : 'box',
    menuLayouts :[
      {
        id: 1,
        widthCssClass : 'c-4',
        order: 1,
      },
      {
        id: 2,
        widthCssClass : 'c-2',
        order: 2,
      },
      {
        id: 3,
        widthCssClass : 'c-6',
        order: 3,
      },
    ],
    childrens: [
      {
        id: 1,
        category: "Hãng sản xuất",
        order: 1,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: true,
        listLink: [
          {
            id: 1,
            text: 'Apple (iphone)',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Samsung',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Oppo',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Xiaomi',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 5,
            text: 'Vivo',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 6,
            text: 'Nokia',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 7,
            text: 'Masstel',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 8,
            text: 'Realme',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 9,
            text: 'Tecno',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ],
      },
      {
        id: 2,
        category: "Đồng hồ thông minh",
        order: 2,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Apple Watch',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Samsung',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Garmin',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Masstel',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 5,
            text: 'Xiaomi',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 6,
            text: 'Amazfit',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 7,
            text: 'Huawei',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 8,
            text: 'Oppo',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ]
      },
      {
        id: 3,
        category: "Mức Giá",
        order: 1,
        menuLayoutId: 2,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Dưới 2 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 2,
            text: 'Từ 2 - 4 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 3,
            text: 'Từ 4 - 7 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 4,
            text: 'Từ 7 - 13 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 5,
            text: 'Trên 13 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
        ]
      },
      {
        id: 4,
        category: "Bán chạy nhất",
        order: 1,
        menuLayoutId: 3,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Samsung Galaxy A14 4G',
            link: '#',
            price: '4.490.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/3/638134385008402132_samsung-galaxy-a14-4g-dd-moi.jpg',
            widthCssClass:'c-12',
          },
          {
            id: 2,
            text: 'OPPO A57 4GB-128GB',
            link: '#',
            price: '4.590.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/20/638071500758726769_oppo-a57-dd.jpg',
            widthCssClass:'c-12',
          },
        ]
      },
      {
        id: 5,
        category: "ADS",
        order: 2,
        menuLayoutId: 3,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: '',
            link: '#',
            image: 'https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/17/638122426805162395_F-H4_248x248@2x.png'
          },
        ]
      },
    ]
  },
  {
    id: 2,
    parentId: 2,
    dropdownType : 'box',
    menuLayouts :[
      {
        id: 1,
        widthCssClass : 'c-6',
        order: 1,
      },
      {
        id: 2,
        widthCssClass : 'c-2',
        order: 2,
      },
      {
        id: 3,
        widthCssClass : 'c-4',
        order: 3,
      },
    ],
    childrens: [
      {
        id: 1,
        category: "Hãng sản xuất",
        order: 1,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: true,
        listLink: [
          {
            id: 1,
            text: 'Apple (Mackbook)',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Asus',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Hp',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Lenovo',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 5,
            text: 'Msi',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 6,
            text: 'Gigabyte',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 7,
            text: 'Dell',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 8,
            text: 'Ace',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 9,
            text: 'Masstel',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 10,
            text: 'Microsoft (Surface)',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 11,
            text: 'Chuwi',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 12,
            text: 'LG',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ],
      },
      {
        id: 2,
        category: "PHẦN MỀM",
        order: 2,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Diệt Virus',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Microsoft Office',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Windows',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Phần mềm khác',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ]
      },
      {
        id: 3,
        category: "MÁY IN",
        order: 3,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'HP',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Cannon',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Brother',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ]
      },
      {
        id: 4,
        category: "Mức Giá",
        order: 1,
        menuLayoutId: 2,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Dưới 5 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 2,
            text: 'Từ 5 - 10 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 3,
            text: 'Từ 10 - 15 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 4,
            text: 'Từ 15 - 20 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 5,
            text: 'Từ 20 - 25 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 6,
            text: 'Từ 25 - 30 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 7,
            text: 'Trên 30 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
        ]
      },
      {
        id: 5,
        category: "ADS",
        order: 2,
        menuLayoutId: 3,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: '',
            link: '#',
            image: 'https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638108057833550936_F-H4_248x248.png'
          },
        ]
      },
    ]
  },
  {
    id: 3,
    parentId:3,
    dropdownType : 'box',
    menuLayouts :[
      {
        id: 1,
        widthCssClass : 'c-4',
        order: 1,
      },
      {
        id: 2,
        widthCssClass : 'c-2',
        order: 2,
      },
      {
        id: 3,
        widthCssClass : 'c-6',
        order: 3,
      },
    ],
    childrens: [
      {
        id: 1,
        category: "Hãng sản xuất",
        order: 1,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: true,
        listLink: [
          {
            id: 1,
            text: 'Apple (ipad)',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Samsung',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Masstel',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Lenovo',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 5,
            text: 'Xiaomi',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 6,
            text: 'OPPO',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 7,
            text: 'Coolpad',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ],
      },
      {
        id: 2,
        category: "Mức Giá",
        order: 1,
        menuLayoutId: 2,
        widthCssClass: 'c-12',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Dưới 2 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 2,
            text: 'Từ 2 - 5 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 3,
            text: 'Từ 5 - 8 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
          {
            id: 4,
            text: 'Trên 8 triệu',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-12'
          },
        ]
      },
      {
        id: 4,
        category: "Bán chạy nhất",
        order: 1,
        menuLayoutId: 3,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'iPad Gen 9 2021 10.2 inch WiFi 64GB',
            link: '#',
            price: '7.990.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059452014421919_ipad-gen-9-wifi-dd.jpg',
            widthCssClass:'c-12',
          },
          {
            id: 2,
            text: 'Samsung Galaxy Tab S6 Lite 2022',
            link: '#',
            price: '6.990.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/22/637994560710957944_samsung-galaxy-tab-s6-lite-2022--dd-docquyen.jpg',
            widthCssClass:'c-12',
          },
        ]
      },
      {
        id: 5,
        category: "ADS",
        order: 2,
        menuLayoutId: 3,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: '',
            link: '#',
            image: 'https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/1/638132268052604246_F-H4_360x60.png'
          },
        ]
      },
    ]
  },
  {
    id: 4,
    parentId:4,
    dropdownType : 'box',
    menuLayouts :[
      {
        id: 1,
        widthCssClass : 'c-5',
        order: 1,
      },
      {
        id: 2,
        widthCssClass : 'c-7',
        order: 2,
      },
    ],
    childrens: [
      {
        id: 1,
        category: "CÁC SẢN PHẨM APPLE",
        order: 1,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: true,
        listLink: [
          {
            id: 1,
            text: 'Iphone',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Ipad',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Macbook',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Apple Watch',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 5,
            text: 'Apple tai nghe',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 6,
            text: 'iMac',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 7,
            text: 'Mac Mini',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 8,
            text: 'Sạc & Cáp',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 9,
            text: 'Ốp lưng & Bao da',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 10,
            text: 'Apple TV',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 11,
            text: 'Chuột & Trackpad',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 12,
            text: 'Bàn phím',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 13,
            text: 'AirTag',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 14,
            text: 'Hàng dự án',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
        ],
      },
      {
        id: 2,
        category: "Bán chạy nhất",
        order: 1,
        menuLayoutId: 2,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'iPhone 14 Pro Max 128GB',
            link: '#',
            price: '27.990.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg',
            widthCssClass:'c-12',
          },
          {
            id: 2,
            text: 'iPhone 13 128GB',
            link: '#',
            price: '17.990.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846050335072_iphone-13-dd-1.jpg',
            widthCssClass:'c-12',
          },
        ]
      },
      {
        id: 3,
        category: "ADS",
        order: 2,
        menuLayoutId: 2,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: '',
            link: '#',
            image: 'https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/19/638148286933953197_F-H4_248x248.png'
          },
        ]
      },
    ]
  },
  {
    id: 5,
    parentId: 5,
    dropdownType : 'list',
    childrens: [
      {
        link: "#",
        text: "PC"
      },
      {
        link: "#",
        text: "Link Kiện"
      },
      {
        link: "#",
        text: "Màn hình"
      },
      {
        link: "#",
        text: "Xây dựng pc"
      },

    ]
  },
  {
    id: 6,
    parentId:6,
    dropdownType : 'box',
    menuLayouts :[
      {
        id: 1,
        widthCssClass : 'c-5',
        order: 1,
      },
      {
        id: 2,
        widthCssClass : 'c-7',
        order: 2,
      },
    ],
    childrens: [
      {
        id: 1,
        category: "CÁC SẢN PHẨM PHỤ KIỆN",
        order: 1,
        menuLayoutId: 1,
        widthCssClass: 'c-12',
        mobileDisplay: true,
        listLink: [
          {
            id: 1,
            text: 'Router',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 2,
            text: 'Bao da ốp lưng',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 3,
            text: 'Sạc dự phòng',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 4,
            text: 'Thẻ nhớ',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 5,
            text: 'Phụ kiện Apple',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 6,
            text: 'Miếng dán màn hình',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 7,
            text: 'Loa',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 8,
            text: 'USB - Ổ cứng',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 9,
            text: 'Sạc cáp',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 10,
            text: 'Tai nghe',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 11,
            text: 'Chuột',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 12,
            text: 'Bàn ghế gaming',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 13,
            text: 'Balo - Túi xách',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 14,
            text: 'TV BOX',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 15,
            text: 'Phụ kiện khác',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 16,
            text: 'Phụ kiện khẩu trang lọc khí',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          {
            id: 17,
            text: 'Bàn phím',
            link: '#',
            image: '',
            price: '',
            widthCssClass:'c-4'
          },
          
        ],
      },
      {
        id: 2,
        category: "Bán chạy nhất",
        order: 1,
        menuLayoutId: 2,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: 'Combo Loa Bluetooth Karaoke Soundmax M22 + Mic không dây',
            link: '#',
            price: '1.845.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/23/637968458856440391_HASP-LOA-BLUETOOTH-KARAOKE-SOUNDMAX-M22-AVT.jpg',
            widthCssClass:'c-12',
          },
          {
            id: 2,
            text: 'Pin sạc dự phòng UmeTravel 10000mAh TRIP10000 Quick Charge',
            link: '#',
            price: '539.000 ₫',
            image: 'https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146111983706760_Trip10000_Black.jpg',
            widthCssClass:'c-12',
          },
        ]
      },
      {
        id: 3,
        category: "ADS",
        order: 2,
        menuLayoutId: 2,
        widthCssClass: 'c-6',
        mobileDisplay: false,
        listLink:[
          {
            id: 1,
            text: '',
            link: '#',
            image: 'https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108094886397103_F-H4_248x248.jpg'
          },
        ]
      },
    ]
  },
  {
    id: 7,
    parentId: 10,
    dropdownType : 'list',
    childrens: [
      {
        link: "#",
        text: "Thông  tin trao thưởng"
      },
      {
        link: "#",
        text: "Tất cả khuyến mại"
      },
    ]
  },
]












