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
        image: 'images/werewolf.jpg',
        quantity: 2,
        isNew: false
    },
    {
        id: 2,
        name: "Dungeons & Dragons",
        category: "Tabletop RPG",
        players: "2-7",
        time: "120-240",
        description: "สวมบทบาทและผจญภัย สร้างตำนานของคุณเองผ่านการทอยลูกเต๋าและการตัดสินใจที่ท้าทาย",
        image: 'images/dnd.jpg',
        quantity: 3,
        isNew: false
    },
    {
        id: 3,
        name: "The Resistance: Avalon",
        category: "Social Deduction",
        players: "5-10",
        time: "30-60",
        description: "ตามหาอัศวินของอาเธอร์ท่ามกลางเหล่าสมุนของมอร์เดร็ด เกมที่มิตรภาพอาจจบลงที่นี่",
        image: 'images/the_resistance_avalon.jpg',
        quantity: 4,
        isNew: true
    },
    {
        id: 4,
        name: "Paranormal Detectives",
        category: "Deduction / Party",
        players: "2-6",
        time: "45",
        description: "เมื่อคนหนึ่งเป็นผี และคนอื่นเป็นนักสืบ ต้องใช้วิธีติดต่อสื่อสารสุดแปลกเพื่อไขคดีฆาตกรรม",
        image: 'images/paranormal_detectives.jpg',
        quantity: 5,
        isNew: true
    },
    {
        id: 5,
        name: "Catan",
        category: "Strategy",
        players: "3-4",
        time: "60-120",
        description: "สร้างบ้าน สร้างเมือง และแลกเปลี่ยนทรัพยากรบนเกาะ Catan เพื่อเป็นผู้ครอบครองที่ยิ่งใหญ่ที่สุด",
        image: 'images/catan.jpg',
        quantity: 1,
        isNew: false
    },
    {
        id: 6,
        name: "Exploding Kittens",
        category: "Party",
        players: "2-5",
        time: "15",
        description: "เกมการ์ดแนว Russian Roulette ที่มีน้องแมวระเบิดสุดกวน ใครจั่วโดนแมวระเบิดคือแพ้!",
        image: 'images/exploding_kittens.jpg',
        quantity: 2,
        isNew: false
    },
    {
        id: 7,
        name: "Splendor",
        category: "Strategy",
        players: "2-4",
        time: "30",
        description: "รับบทเป็นพ่อค้าอัญมณี สะสมเพชรเพื่อซื้อการ์ดและรับคะแนนเกียรติยศจากเหล่าขุนนาง",
        image: 'images/splendor.jpg',
        quantity: 3,
        isNew: false
    },
    {
        id: 8,
        name: "Dixit",
        category: "Imagination / Party",
        players: "3-6",
        time: "30",
        description: "ใช้จินตนาการผ่านภาพวาดสุดสวย ทายใจเพื่อนจากคำใบ้ปริศนาที่เต็มไปด้วยความหมายแฝง",
        image: 'images/dixit.jpg',
        quantity: 4,
        isNew: false
    },
    {
        id: 9,
        name: "Ticket to Ride",
        category: "Family / Strategy",
        players: "2-5",
        time: "30-60",
        description: "วางเส้นทางรถไฟเชื่อมต่อเมืองต่างๆ ทั่วอเมริกา ยิ่งระยะทางยาว คะแนนยิ่งเยอะ",
        image: 'images/ticket_to_ride.jpg',
        quantity: 5,
        isNew: false
    },
    {
        id: 10,
        name: "Codenames",
        category: "Party / Word",
        players: "2-8+",
        time: "15-20",
        description: "แบ่งทีมแข่งกันใบ้คำด้วยรหัสลับ ทีมไหนทายชื่อสายลับของตัวเองครบก่อนเป็นฝ่ายชนะ",
        image: 'images/codenames.jpg',
        quantity: 1,
        isNew: true
    },
    {
        id: 11,
        name: "Azul",
        category: "Abstract Strategy",
        players: "2-4",
        time: "30-45",
        description: "ตกแต่งผนังพระราชวังด้วยกระเบื้องหลากสี วางแผนการหยิบให้คุ้มค่าที่สุดเพื่อแต้มสูงสุด",
        image: 'images/azul.jpg',
        quantity: 2,
        isNew: false
    },
    {
        id: 12,
        name: "Salem 1692",
        category: "Social Deduction",
        players: "4-12",
        time: "20-40",
        description: "ล่าแม่มดในเมืองซาเลม ระวังความกลัวจะครอบงำจนทำให้คุณจับคนบริสุทธิ์เข้าคุก!",
        image: 'images/salem_1692.jpg',
        quantity: 3,
        isNew: true
    },
    {
        id: 13,
        name: "Coups",
        category: "Bluffing",
        players: "2-6",
        time: "15",
        description: "ใช้ความสามารถของตัวละครลับเข้ายึดอำนาจ ใครจะโกหกได้เนียนกว่ากันเพื่ออยู่รอดเป็นคนสุดท้าย",
        image: 'images/coups.jpg',
        quantity: 4,
        isNew: false
    },
    {
        id: 14,
        name: "7 Wonders",
        category: "Strategy",
        players: "2-7",
        time: "30",
        description: "สร้างสิ่งมหัศจรรย์ของโลกผ่านการดราฟการ์ด พัฒนาอารยธรรมและการทหารให้เหนือกว่าใคร",
        image: 'images/7_wonders.jpg',
        quantity: 5,
        isNew: false
    },
    {
        id: 15,
        name: "Root",
        category: "Strategy / War",
        players: "2-4",
        time: "60-90",
        description: "สงครามในป่าใหญ่ของเหล่าสรรพสัตว์ แต่ละเผ่าพันธุ์มีวิธีการเล่นและเงื่อนไขการชนะที่ต่างกันสิ้นเชิง",
        image: 'images/root.jpg',
        quantity: 1,
        isNew: true
    },
    {
        id: 16,
        name: "Gloomhaven",
        category: "Legacy / Adventure",
        players: "1-4",
        time: "60-120",
        description: "สุดยอดเกมผจญภัยในตำนานที่มีเนื้อเรื่องลุ่มลึก ทุกการตัดสินใจของคุณจะเปลี่ยนทิศทางของโลก",
        image: 'images/gloomhaven.jpg',
        quantity: 2,
        isNew: false
    },

    {
        id: 17,
        name: "Muffin Time",
        category: "Party",
        players: "2-8",
        time: "20-40",
        description: "เกมการ์ดสุดป่วนที่เต็มไปด้วยความกวนจาก asdfmovie สะสมการ์ดให้ครบ 10 ใบเพื่อตะโกนว่า It's Muffin Time!",
        image: 'images/muffin_time.png',
        quantity: 3,
        isNew: true
    },
    {
        id: 18,
        name: "Pandemic",
        category: "Strategy",
        players: "2-4",
        time: "45",
        description: "ร่วมมือกับทีมผู้เชี่ยวชาญเพื่อยับยั้งการแพร่ระบาดของโรคร้าย 4 ชนิดทั่วโลกก่อนที่ทุกอย่างจะสายเกินไป",
        image: 'images/pandemic.png',
        quantity: 4,
        isNew: false
    },
    {
        id: 19,
        name: "Wingspan",
        category: "Strategy",
        players: "1-5",
        time: "40-70",
        description: "สวมบทบาทเป็นผู้รักนก พยายามดึงดูดนกสายพันธุ์ต่างๆ มายังเขตรักษาพันธุ์สัตว์ป่าของคุณเพื่อทำคะแนนสูงสุด",
        image: 'images/wingspan.jpg',
        quantity: 5,
        isNew: false
    },
    {
        id: 20,
        name: "Unstable Unicorns",
        category: "Party / Strategy",
        players: "2-8",
        time: "30-45",
        description: "สร้างกองทัพยูนิคอร์นสุดแกร่งและขัดขวางเพื่อนของคุณ เกมการ์ดที่อาจทำลายมิตรภาพได้ในพริบตา",
        image: 'images/unstable_unicorns.jpg',
        quantity: 1,
        isNew: false
    },
    {
        id: 21,
        name: "Taco Cat Goat Cheese Pizza",
        category: "Party",
        players: "2-8",
        time: "10-15",
        description: "เกมตบการ์ดสุดมันส์ที่ต้องใช้ความไวของมือและสมอง ใครเหลือการ์ดคนสุดท้ายคือผู้แพ้!",
        image: 'images/taco_cat_goat_cheese_pizza.jpg',
        quantity: 2,
        isNew: true
    },
    {
        id: 22,
        name: "Cascadia",
        category: "Strategy",
        players: "1-4",
        time: "30-45",
        description: "สร้างระบบนิเวศที่สมดุลที่สุดในแถบแปซิฟิก ผ่านการวางแผ่นพื้นที่และสัตว์ป่าให้เหมาะสมตามเงื่อนไข",
        image: 'images/cascadia.jpg',
        quantity: 3,
        isNew: false
    },
    {
        id: 23,
        name: "Heat: Pedal to the Metal",
        category: "Strategy / Racing",
        players: "1-6",
        time: "30-60",
        description: "สวมบทนักแข่งรถยุค 60 จัดการความร้อนของเครื่องยนต์และแซงหน้าคู่แข่งเพื่อเข้าเส้นชัยเป็นคนแรก",
        image: 'images/heat_pedal_to_the_metal.jpg',
        quantity: 4,
        isNew: true
    },
    {
        id: 24,
        name: "The Quacks of Quedlinburg",
        category: "Strategy / Family",
        players: "2-4",
        time: "45",
        description: "สุ่มหยิบส่วนผสมเพื่อปรุงยาในหม้อใหญ่ ระวังอย่าให้หม้อระเบิดก่อนที่คุณจะปรุงเสร็จ!",
        image: 'images/the_quacks_of_quedlinburg.jpg',
        quantity: 5,
        isNew: false
    },
    {
        id: 25,
        name: "Sagrada",
        category: "Strategy / Abstract",
        players: "1-4",
        time: "30-60",
        description: "ออกแบบหน้าต่างกระจกสีในวิหารชื่อดัง ผ่านการเลือกและวางลูกเต๋าหลากสีตามเงื่อนไขสุดท้าทาย",
        image: 'images/sagrada.jpg',
        quantity: 1,
        isNew: false
    },
    {
        id: 26,
        name: "Sushi Go Party!",
        category: "Party / Family",
        players: "2-8",
        time: "20-30",
        description: "สนุกกับการเลือกซูชิบนสายพานที่หลากหลายขึ้น ปรุงเมนูสุดพิเศษเพื่อทำแต้มให้เหนือกว่าทุกคน",
        image: 'images/sushi_go_party.jpg',
        quantity: 2,
        isNew: false
    },
    {
        id: 27,
        name: "Everdell",
        category: "Strategy",
        players: "1-4",
        time: "40-80",
        description: "ช่วยเหล่าสัตว์น้อยใหญ่สร้างเมืองในหุบเขา Everdell ผ่านฤดูกาลต่างๆ ในเกมที่ภาพสวยงามที่สุด",
        image: 'images/everdell.jpg',
        quantity: 3,
        isNew: false
    },
    {
        id: 28,
        name: "Betrayal at House on the Hill",
        category: "Adventure / Horror",
        players: "3-6",
        time: "60-90",
        description: "สำรวจคฤหาสน์ร้างสุดสยองจนกว่าจะมีใครคนหนึ่งทรยศทีม และเปลี่ยนเกมให้กลายเป็นการเอาชีวิตรอด",
        image: 'images/betrayal_at_house_on_the_hill.jpg',
        quantity: 4,
        isNew: false
    }
];