// games-data.js
const defaultImg = "https://placehold.co/500x350/212529/ffffff?text=DICE+%26+DESTINY";

const boardgames = [
    {
        id: 1,
        name: "Ultimate Werewolf",
        category: "Social Deduction",
        players: "5-75",
        time: "30-90",
        description: "เกมล่าหมาป่าสุดคลาสสิก แบ่งฝ่ายชาวบ้านและหมาป่า ใช้การบลัฟและจับโกหกเพื่อหาตัวคนร้าย",
        image: defaultImg,
        isNew: false
    },
    {
        id: 2,
        name: "Dungeons & Dragons",
        category: "Tabletop RPG",
        players: "2-7",
        time: "120-240",
        description: "สวมบทบาทเป็นผู้กล้าในโลกแฟนตาซี ผจญภัยตามเนื้อเรื่องที่ Dungeon Master เป็นผู้กำหนด",
        image: defaultImg,
        isNew: true
    },
    {
        id: 3,
        name: "The Resistance: Avalon",
        category: "Social Deduction",
        players: "5-10",
        time: "30-60",
        description: "ตามหาอัศวินของอาเธอร์ท่ามกลางเหล่าสมุนของมอร์เดร็ด เกมที่มิตรภาพอาจจบลงที่นี่",
        image: defaultImg,
        isNew: false
    },
    {
        id: 4,
        name: "Paranormal Detectives",
        category: "Deduction / Party",
        players: "2-6",
        time: "45",
        description: "เมื่อคนหนึ่งเป็นผี และคนอื่นเป็นนักสืบ ต้องใช้วิธีติดต่อสื่อสารสุดแปลกเพื่อไขคดีฆาตกรรม",
        image: defaultImg,
        isNew: true
    },
    {
        id: 5,
        name: "Catan",
        category: "Strategy",
        players: "3-4",
        time: "60-120",
        description: "สร้างบ้าน สร้างเมือง และแลกเปลี่ยนทรัพยากรบนเกาะ Catan เพื่อเป็นผู้ครอบครองที่ยิ่งใหญ่ที่สุด",
        image: defaultImg,
        isNew: false
    },
    {
        id: 6,
        name: "Exploding Kittens",
        category: "Party",
        players: "2-5",
        time: "15",
        description: "เกมการ์ดแนว Russian Roulette ที่มีน้องแมวระเบิดสุดกวน ใครจั่วโดนแมวระเบิดคือแพ้!",
        image: defaultImg,
        isNew: false
    },
    {
        id: 7,
        name: "Splendor",
        category: "Strategy",
        players: "2-4",
        time: "30",
        description: "รับบทเป็นพ่อค้าอัญมณี สะสมเพชรเพื่อซื้อการ์ดและรับคะแนนเกียรติยศจากเหล่าขุนนาง",
        image: defaultImg,
        isNew: false
    },
    {
        id: 8,
        name: "Dixit",
        category: "Imagination / Party",
        players: "3-6",
        time: "30",
        description: "ใช้จินตนาการผ่านภาพวาดสุดสวย ทายใจเพื่อนจากคำใบ้ปริศนาที่เต็มไปด้วยความหมายแฝง",
        image: defaultImg,
        isNew: false
    },
    {
        id: 9,
        name: "Ticket to Ride",
        category: "Family / Strategy",
        players: "2-5",
        time: "30-60",
        description: "วางเส้นทางรถไฟเชื่อมต่อเมืองต่างๆ ทั่วอเมริกา ยิ่งระยะทางยาว คะแนนยิ่งเยอะ",
        image: defaultImg,
        isNew: false
    },
    {
        id: 10,
        name: "Codenames",
        category: "Party / Word",
        players: "2-8+",
        time: "15-20",
        description: "แบ่งทีมแข่งกันใบ้คำด้วยรหัสลับ ทีมไหนทายชื่อสายลับของตัวเองครบก่อนเป็นฝ่ายชนะ",
        image: defaultImg,
        isNew: true
    },
    {
        id: 11,
        name: "Azul",
        category: "Abstract Strategy",
        players: "2-4",
        time: "30-45",
        description: "ตกแต่งผนังพระราชวังด้วยกระเบื้องหลากสี วางแผนการหยิบให้คุ้มค่าที่สุดเพื่อแต้มสูงสุด",
        image: defaultImg,
        isNew: false
    },
    {
        id: 12,
        name: "Salem 1692",
        category: "Social Deduction",
        players: "4-12",
        time: "20-40",
        description: "ล่าแม่มดในเมืองซาเลม ระวังความกลัวจะครอบงำจนทำให้คุณจับคนบริสุทธิ์เข้าคุก!",
        image: defaultImg,
        isNew: true
    },
    {
        id: 13,
        name: "Coups",
        category: "Bluffing",
        players: "2-6",
        time: "15",
        description: "ใช้ความสามารถของตัวละครลับเข้ายึดอำนาจ ใครจะโกหกได้เนียนกว่ากันเพื่ออยู่รอดเป็นคนสุดท้าย",
        image: defaultImg,
        isNew: false
    },
    {
        id: 14,
        name: "7 Wonders",
        category: "Strategy",
        players: "2-7",
        time: "30",
        description: "สร้างสิ่งมหัศจรรย์ของโลกผ่านการดราฟการ์ด พัฒนาอารยธรรมและการทหารให้เหนือกว่าใคร",
        image: defaultImg,
        isNew: false
    },
    {
        id: 15,
        name: "Root",
        category: "Strategy / War",
        players: "2-4",
        time: "60-90",
        description: "สงครามในป่าใหญ่ของเหล่าสรรพสัตว์ แต่ละเผ่าพันธุ์มีวิธีการเล่นและเงื่อนไขการชนะที่ต่างกันสิ้นเชิง",
        image: defaultImg,
        isNew: true
    },
    {
        id: 16,
        name: "Gloomhaven",
        category: "Legacy / Adventure",
        players: "1-4",
        time: "60-120",
        description: "สุดยอดเกมผจญภัยในตำนานที่มีเนื้อเรื่องลุ่มลึก ทุกการตัดสินใจของคุณจะเปลี่ยนทิศทางของโลก",
        image: defaultImg,
        isNew: false
    }
];