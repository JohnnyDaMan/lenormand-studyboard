export interface LenormandCard {
  id: number;
  nameKr: string;
  nameEn: string;
  keywords: {
    nouns: string[];
    adjectives: string[];
  };
  image: string;
  playingCard: string;
  type: "positive" | "positive-neutral" | "neutral" | "neutral-negative" | "negative";
}

export const LENORMAND_CARDS: LenormandCard[] = [
  {
    id: 1,
    nameKr: "기사",
    nameEn: "Cavalier",
    keywords: { nouns: ["소식", "방문객"], adjectives: ["빠른", "직접적인"] },
    image: "🏇",
    playingCard: "9 of Hearts",
    type: "positive-neutral"
  },
  {
    id: 2,
    nameKr: "클로버",
    nameEn: "Clover",
    keywords: { nouns: ["기쁨", "작은 행운"], adjectives: ["운이 좋은", "짧은"] },
    image: "🍀",
    playingCard: "6 of Diamonds",
    type: "positive"
  },
  {
    id: 3,
    nameKr: "배",
    nameEn: "Ship",
    keywords: { nouns: ["여행", "기회"], adjectives: ["먼", "이동하는"] },
    image: "🚢",
    playingCard: "10 of Spades",
    type: "positive-neutral"
  },
  {
    id: 4,
    nameKr: "집",
    nameEn: "House",
    keywords: { nouns: ["가정", "안정"], adjectives: ["안전한", "편안한"] },
    image: "🏠",
    playingCard: "King of Hearts",
    type: "positive-neutral"
  },
  {
    id: 5,
    nameKr: "나무",
    nameEn: "Tree",
    keywords: { nouns: ["건강", "성장"], adjectives: ["만성적인", "영적인"] },
    image: "🌳",
    playingCard: "7 of Hearts",
    type: "neutral-negative"
  },
  {
    id: 6,
    nameKr: "구름",
    nameEn: "Clouds",
    keywords: { nouns: ["장애물", "혼란"], adjectives: ["흐린", "불확실한"] },
    image: "☁️",
    playingCard: "King of Clubs",
    type: "negative"
  },
  {
    id: 7,
    nameKr: "뱀",
    nameEn: "Snake",
    keywords: { nouns: ["배신", "책략"], adjectives: ["복잡한", "기만적인"] },
    image: "🐍",
    playingCard: "Queen of Clubs",
    type: "neutral-negative"
  },
  {
    id: 8,
    nameKr: "관",
    nameEn: "Coffin",
    keywords: { nouns: ["종결", "상실"], adjectives: ["슬픈", "파괴적인"] },
    image: "⚰️",
    playingCard: "9 of Diamonds",
    type: "negative"
  },
  {
    id: 9,
    nameKr: "꽃다발",
    nameEn: "Bouquet",
    keywords: { nouns: ["선물", "기쁨"], adjectives: ["아름다운", "친근한"] },
    image: "💐",
    playingCard: "Queen of Spades",
    type: "positive"
  },
  {
    id: 10,
    nameKr: "낫",
    nameEn: "Scythe",
    keywords: { nouns: ["위험", "수확"], adjectives: ["갑작스러운", "날카로운"] },
    image: "✂️",
    playingCard: "Jack of Diamonds",
    type: "negative"
  },
  {
    id: 11,
    nameKr: "채찍",
    nameEn: "Rod",
    keywords: { nouns: ["갈등", "반복"], adjectives: ["고통스러운", "논쟁적인"] },
    image: "🧹",
    playingCard: "Jack of Clubs",
    type: "negative"
  },
  {
    id: 12,
    nameKr: "새",
    nameEn: "Birds",
    keywords: { nouns: ["소통", "대화"], adjectives: ["불안한", "바쁜"] },
    image: "🦉",
    playingCard: "7 of Diamonds",
    type: "neutral-negative"
  },
  {
    id: 13,
    nameKr: "아이",
    nameEn: "Child",
    keywords: { nouns: ["자녀", "새로운 시작"], adjectives: ["순수한", "작은"] },
    image: "👶",
    playingCard: "Jack of Spades",
    type: "positive-neutral"
  },
  {
    id: 14,
    nameKr: "여우",
    nameEn: "Fox",
    keywords: { nouns: ["경쟁자", "일"], adjectives: ["영리한", "교활한"] },
    image: "🦊",
    playingCard: "9 of Clubs",
    type: "negative"
  },
  {
    id: 15,
    nameKr: "곰",
    nameEn: "Bear",
    keywords: { nouns: ["힘", "재정"], adjectives: ["보호하는", "질투하는"] },
    image: "🐻",
    playingCard: "10 of Clubs",
    type: "neutral"
  },
  {
    id: 16,
    nameKr: "별",
    nameEn: "Stars",
    keywords: { nouns: ["희망", "행운"], adjectives: ["우주적인", "명확한"] },
    image: "⭐",
    playingCard: "6 of Hearts",
    type: "positive"
  },
  {
    id: 17,
    nameKr: "황새",
    nameEn: "Storks",
    keywords: { nouns: ["변화", "이동"], adjectives: ["임박한", "개선되는"] },
    image: "🦢",
    playingCard: "Queen of Hearts",
    type: "positive-neutral"
  },
  {
    id: 18,
    nameKr: "개",
    nameEn: "Dog",
    keywords: { nouns: ["친구", "동료"], adjectives: ["충직한", "친숙한"] },
    image: "🐶",
    playingCard: "10 of Hearts",
    type: "positive-neutral"
  },
  {
    id: 19,
    nameKr: "탑",
    nameEn: "Tower",
    keywords: { nouns: ["기관", "고독"], adjectives: ["공식적인", "높은"] },
    image: "🏰",
    playingCard: "6 of Spades",
    type: "neutral"
  },
  {
    id: 20,
    nameKr: "정원",
    nameEn: "Garden",
    keywords: { nouns: ["대중", "사교 모임"], adjectives: ["공개적인", "사회적인"] },
    image: "🏡",
    playingCard: "8 of Spades",
    type: "neutral"
  },
  {
    id: 21,
    nameKr: "산",
    nameEn: "Mountain",
    keywords: { nouns: ["장애물", "지연"], adjectives: ["차가운", "차단된"] },
    image: "⛰️",
    playingCard: "8 of Clubs",
    type: "negative"
  },
  {
    id: 22,
    nameKr: "길",
    nameEn: "Paths",
    keywords: { nouns: ["선택", "결정"], adjectives: ["갈라지는", "자유로운"] },
    image: "🛣️",
    playingCard: "Queen of Diamonds",
    type: "neutral"
  },
  {
    id: 23,
    nameKr: "생쥐",
    nameEn: "Mice",
    keywords: { nouns: ["상실", "도난"], adjectives: ["스트레스 받는", "갉아먹는"] },
    image: "🐭",
    playingCard: "7 of Clubs",
    type: "negative"
  },
  {
    id: 24,
    nameKr: "하트",
    nameEn: "Heart",
    keywords: { nouns: ["사랑", "감정"], adjectives: ["열정적인", "애정 어린"] },
    image: "❤️",
    playingCard: "Jack of Hearts",
    type: "positive"
  },
  {
    id: 25,
    nameKr: "반지",
    nameEn: "Ring",
    keywords: { nouns: ["약속", "계약"], adjectives: ["공식적인", "반복되는"] },
    image: "💍",
    playingCard: "Ace of Clubs",
    type: "neutral"
  },
  {
    id: 26,
    nameKr: "책",
    nameEn: "Book",
    keywords: { nouns: ["비밀", "스터디"], adjectives: ["숨겨진", "알려지지 않은"] },
    image: "📖",
    playingCard: "10 of Diamonds",
    type: "neutral-negative"
  },
  {
    id: 27,
    nameKr: "편지",
    nameEn: "Letter",
    keywords: { nouns: ["서류", "메시지"], adjectives: ["서면의", "공식적인"] },
    image: "✉️",
    playingCard: "7 of Spades",
    type: "neutral"
  },
  {
    id: 28,
    nameKr: "신사",
    nameEn: "Lord",
    keywords: { nouns: ["남성", "질문자"], adjectives: ["이성적인", "중요한"] },
    image: "👨",
    playingCard: "Ace of Hearts",
    type: "neutral"
  },
  {
    id: 29,
    nameKr: "숙녀",
    nameEn: "Lady",
    keywords: { nouns: ["여성", "질문자"], adjectives: ["직관적인", "중요한"] },
    image: "👩",
    playingCard: "Ace of Spades",
    type: "neutral"
  },
  {
    id: 30,
    nameKr: "백합",
    nameEn: "Lily",
    keywords: { nouns: ["가족", "평화"], adjectives: ["행복한", "성숙한"] },
    image: "🪻",
    playingCard: "King of Spades",
    type: "positive-neutral"
  },
  {
    id: 31,
    nameKr: "태양",
    nameEn: "Sun",
    keywords: { nouns: ["성공", "에너지"], adjectives: ["밝은", "확실한"] },
    image: "☀️",
    playingCard: "Ace of Diamonds",
    type: "positive"
  },
  {
    id: 32,
    nameKr: "달",
    nameEn: "Moon",
    keywords: { nouns: ["직업", "명성"], adjectives: ["감성적인", "빛나는"] },
    image: "🌙",
    playingCard: "8 of Hearts",
    type: "positive"
  },
  {
    id: 33,
    nameKr: "열쇠",
    nameEn: "Key",
    keywords: { nouns: ["해결책", "섭리"], adjectives: ["결정적인", "중요한"] },
    image: "🔑",
    playingCard: "8 of Diamonds",
    type: "positive"
  },
  {
    id: 34,
    nameKr: "물고기",
    nameEn: "Fish",
    keywords: { nouns: ["재정", "수입"], adjectives: ["풍요로운", "유동적인"] },
    image: "🐟",
    playingCard: "King of Diamonds",
    type: "positive"
  },
  {
    id: 35,
    nameKr: "닻",
    nameEn: "Anchor",
    keywords: { nouns: ["안정성", "목표"], adjectives: ["안전한", "지속적인"] },
    image: "⚓",
    playingCard: "9 of Spades",
    type: "positive-neutral"
  },
  {
    id: 36,
    nameKr: "십자가",
    nameEn: "Cross",
    keywords: { nouns: ["비탄", "시련"], adjectives: ["운명적인", "고통스러운"] },
    image: "✝️",
    playingCard: "6 of Clubs",
    type: "negative"
  }
];

export const CARD_BACK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663647956884/ejgy8oorPjCnGNW9CiNrpB/lenormand_card_back-JuWSDtyjq3y6DcCXEtZqL8.webp";
export const MYSTICAL_BG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663647956884/ejgy8oorPjCnGNW9CiNrpB/mystical_studyboard_bg-euwQYaEES8xa56pCYDUsdb.webp";
