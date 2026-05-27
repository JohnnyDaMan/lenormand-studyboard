export interface LenormandCard {
  id: number;
  name: string;
  krName: string;
  playingCard: string;
  // 근거리 명사 키워드 (2개)
  nearNouns: string[];
  // 원거리 명사 키워드 (2개)
  farNouns: string[];
  // 형용사 키워드 (2개)
  adjectives: string[];
  polarity: 'positive' | 'neutral' | 'negative' | 'positive-neutral' | 'neutral-negative';
  description: string;
}

export const LENORMAND_CARDS: LenormandCard[] = [
  {
    id: 1,
    name: "Cavalier",
    krName: "기사",
    playingCard: "9 of Hearts",
    nearNouns: ["가정소식", "방문"],
    farNouns: ["타인소식", "외부소식"],
    adjectives: ["신속한", "활동적인"],
    polarity: "positive-neutral",
    description: "신속하게 다가오는 소식이나 방문자. 지인 또는 가정 내부로부터 오는 중요한 기별."
  },
  {
    id: 2,
    name: "Clover",
    krName: "클로버",
    playingCard: "6 of Diamonds",
    nearNouns: ["기쁨", "행운"],
    farNouns: ["외로움", "불안"],
    adjectives: ["가벼운", "일시적인"],
    polarity: "positive",
    description: "짧고 확실한 기쁨과 소소한 행운. 단, 멀어질 경우 일시적인 외로움이나 작은 불안을 나타냄."
  },
  {
    id: 3,
    name: "Ship",
    krName: "배",
    playingCard: "10 of Spades",
    nearNouns: ["여행", "기회"],
    farNouns: ["갈망", "원거리"],
    adjectives: ["이동적인", "발전적인"],
    polarity: "positive-neutral",
    description: "이동과 여행, 비즈니스의 발전과 새로운 기회. 멀어질 경우 먼 거리감이나 아득한 갈망을 상징."
  },
  {
    id: 4,
    name: "House",
    krName: "집",
    playingCard: "King of Hearts",
    nearNouns: ["안식처", "사생활"],
    farNouns: ["가정문제", "이웃문제"],
    adjectives: ["안정적인", "사적인"],
    polarity: "positive-neutral",
    description: "가족, 주거, 안정적인 안식처와 사생활. 멀어질 경우 이웃 간의 마찰이나 가정 내 사소한 문제."
  },
  {
    id: 5,
    name: "Tree",
    krName: "나무",
    playingCard: "7 of Hearts",
    nearNouns: ["건강문제", "회복"],
    farNouns: ["장수", "지연"],
    adjectives: ["느린", "지속적인"],
    polarity: "neutral",
    description: "건강 상태, 생명력 및 영적 성장. 멀리 있을 때는 지연되지만 결국 단단해지는 장수와 영속성."
  },
  {
    id: 6,
    name: "Clouds",
    krName: "구름",
    playingCard: "King of Clubs",
    nearNouns: ["혼란", "고난"],
    farNouns: ["불운", "흐림"],
    adjectives: ["불확실한", "우울한"],
    polarity: "negative",
    description: "일시적인 판단 장애와 혼란, 가려진 진실. 멀리 있어도 여전히 흐린 상황과 불운을 유발."
  },
  {
    id: 7,
    name: "Snake",
    krName: "뱀",
    playingCard: "Queen of Clubs",
    nearNouns: ["배신", "복잡성"],
    farNouns: ["해결", "우회"],
    adjectives: ["교활한", "꼬인"],
    polarity: "negative",
    description: "교활한 적, 위선, 배신 또는 복잡하게 얽힌 문제. 멀어질 경우 오히려 우회로를 찾거나 서서히 해결됨."
  },
  {
    id: 8,
    name: "Coffin",
    krName: "관",
    playingCard: "9 of Diamonds",
    nearNouns: ["상실", "종결"],
    farNouns: ["일시상실", "쇠약"],
    adjectives: ["치명적인", "폐쇄적인"],
    polarity: "negative",
    description: "피할 수 없는 중대한 상실, 종결, 관계의 단절. 멀어질 때는 일시적인 기력 쇠약이나 경미한 손실."
  },
  {
    id: 9,
    name: "Bouquet",
    krName: "꽃다발",
    playingCard: "Queen of Spades",
    nearNouns: ["행복", "선물"],
    farNouns: ["조력자", "위로"],
    adjectives: ["우아한", "호의적인"],
    polarity: "positive",
    description: "큰 기쁨, 사회적 인정, 아름다운 선물과 행복. 멀어질 때는 따뜻한 조력자의 등장이나 마음의 위로."
  },
  {
    id: 10,
    name: "Scythe",
    krName: "낫",
    playingCard: "Jack of Diamonds",
    nearNouns: ["위험", "절단"],
    farNouns: ["공격성", "지인피해"],
    adjectives: ["날카로운", "갑작스러운"],
    polarity: "negative",
    description: "갑작스러운 위험, 수술, 신속한 단절이나 결정. 멀리 있을 경우 주변 지인의 피해나 간접적 공격성."
  },
  {
    id: 11,
    name: "Whip",
    krName: "채찍",
    playingCard: "Jack of Clubs",
    nearNouns: ["갈등", "대면"],
    farNouns: ["긴장", "불안"],
    adjectives: ["논쟁적인", "반복적인"],
    polarity: "negative",
    description: "폭력, 신체적 학대, 갈등, 반복되는 다툼과 소송. 멀어질 경우 지속적인 심리적 긴장과 불안."
  },
  {
    id: 12,
    name: "Birds",
    krName: "새",
    playingCard: "7 of Diamonds",
    nearNouns: ["스트레스", "동요"],
    farNouns: ["여행", "발표"],
    adjectives: ["불안한", "수다스러운"],
    polarity: "neutral-negative",
    description: "사소한 걱정, 구설수, 흥분, 대화와 수다. 멀어질 때는 가벼운 단기 여행이나 공식적인 발표."
  },
  {
    id: 13,
    name: "Child",
    krName: "아이",
    playingCard: "Jack of Spades",
    nearNouns: ["신뢰", "도움"],
    farNouns: ["무력감", "순진함"],
    adjectives: ["작은", "순수한"],
    polarity: "positive-neutral",
    description: "새로운 시작, 아이, 신뢰와 호의적인 도움. 멀리 있을 경우 미성숙함으로 인한 무력감이나 지나친 순진함."
  },
  {
    id: 14,
    name: "Fox",
    krName: "여우",
    playingCard: "9 of Clubs",
    nearNouns: ["기만", "사기"],
    farNouns: ["오해", "경계"],
    adjectives: ["거짓된", "잘못된"],
    polarity: "negative",
    description: "교활한 속임수, 직장 내의 모함, 생존을 위한 기만. 멀리 있을 경우 가벼운 오해나 단순한 경계 경보."
  },
  {
    id: 15,
    name: "Bear",
    krName: "곰",
    playingCard: "10 of Clubs",
    nearNouns: ["보호", "권력"],
    farNouns: ["질투", "음모"],
    adjectives: ["강력한", "보호적인"],
    polarity: "positive-neutral",
    description: "힘과 재정적 안정, 어머니 같은 든든한 보호와 권력. 멀리 있을 때는 타인의 질투나 시샘, 은밀한 음모."
  },
  {
    id: 16,
    name: "Star",
    krName: "별",
    playingCard: "6 of Hearts",
    nearNouns: ["성공", "행운"],
    farNouns: ["불운", "오판"],
    adjectives: ["희망적인", "통찰적인"],
    polarity: "positive",
    description: "꿈과 소망의 실현, 우주적 가이드, 영감과 행운. 멀리 떨어지면 일시적인 오판이나 소소한 불운."
  },
  {
    id: 17,
    name: "Stork",
    krName: "황새",
    playingCard: "Queen of Hearts",
    nearNouns: ["변화", "개선"],
    farNouns: ["정체", "좌절"],
    adjectives: ["변화하는", "상승적인"],
    polarity: "positive-neutral",
    description: "이사, 이직, 출산 등 긍정적이고 건설적인 환경 변화. 멀어지면 변화가 가로막히는 정체나 좌절."
  },
  {
    id: 18,
    name: "Dog",
    krName: "개",
    playingCard: "10 of Hearts",
    nearNouns: ["우정", "동맹"],
    farNouns: ["실망", "불충"],
    adjectives: ["충실한", "믿음직한"],
    polarity: "positive",
    description: "충직한 친구, 파트너십, 흔들리지 않는 신뢰와 우정. 멀어지면 배신이나 동료에 대한 실망감 유발."
  },
  {
    id: 19,
    name: "Tower",
    krName: "탑",
    playingCard: "6 of Spades",
    nearNouns: ["장수", "은퇴"],
    farNouns: ["고립", "분리"],
    adjectives: ["공식적인", "고독한"],
    polarity: "neutral",
    description: "정부 기관, 대기업, 법적 보호, 장수와 은퇴 생활. 멀리 있을 때는 고독감, 사회적 단절과 분리."
  },
  {
    id: 20,
    name: "Garden",
    krName: "정원",
    playingCard: "8 of Spades",
    nearNouns: ["인맥", "교류"],
    farNouns: ["고립", "거부"],
    adjectives: ["사회적인", "공개적인"],
    polarity: "positive-neutral",
    description: "대중 행사, 사교 모임, 넓은 인간관계와 네트워킹. 멀어지면 대중으로부터의 거부나 고립을 의미."
  },
  {
    id: 21,
    name: "Mountain",
    krName: "산",
    playingCard: "8 of Clubs",
    nearNouns: ["장애물", "적"],
    farNouns: ["조력자", "보호벽"],
    adjectives: ["막힌", "완고한"],
    polarity: "negative",
    description: "앞을 가로막는 거대한 장애물, 지연, 강력한 적수. 멀리 떨어지면 든든한 보호벽이나 조력자의 방어막."
  },
  {
    id: 22,
    name: "Road",
    krName: "길",
    playingCard: "Queen of Diamonds",
    nearNouns: ["선택", "불안"],
    farNouns: ["극복", "주도권"],
    adjectives: ["갈림길의", "결정적인"],
    polarity: "neutral",
    description: "인생의 갈림길, 여러 대안, 결단이 필요한 순간의 불안. 멀어지면 갈등을 극복하고 주도권을 잡음."
  },
  {
    id: 23,
    name: "Mouse",
    krName: "쥐",
    playingCard: "7 of Clubs",
    nearNouns: ["손실", "불안"],
    farNouns: ["보전실패", "침식"],
    adjectives: ["소모적인", "불안정한"],
    polarity: "negative",
    description: "서서히 갉아먹는 재정적 손실, 스트레스, 도난. 멀어지면 대규모 상실은 면하나 보전 실패 및 야금야금 침식됨."
  },
  {
    id: 24,
    name: "Heart",
    krName: "하트",
    playingCard: "Jack of Hearts",
    nearNouns: ["로맨스", "애정"],
    farNouns: ["우정", "플라토닉사랑"],
    adjectives: ["따뜻한", "애정 어린"],
    polarity: "positive",
    description: "뜨거운 사랑, 연애 감정, 로맨스와 강렬한 열정. 멀리 떨어지면 연애보다 끈끈한 우정이나 플라토닉한 관계."
  },
  {
    id: 25,
    name: "Ring",
    krName: "반지",
    playingCard: "Ace of Clubs",
    nearNouns: ["관계", "계약"],
    farNouns: ["이별", "단절"],
    adjectives: ["결속된", "지속적인"],
    polarity: "positive",
    description: "결혼, 파트너십, 비즈니스 계약 및 결속력. 멀어질 경우 약속의 불이행, 이별 및 계약의 파기/단절."
  },
  {
    id: 26,
    name: "Book",
    krName: "책",
    playingCard: "10 of Diamonds",
    nearNouns: ["비밀폭로", "당혹감"],
    farNouns: ["비밀", "놀라움"],
    adjectives: ["숨겨진", "학구적인"],
    polarity: "neutral",
    description: "숨겨진 정보, 연구, 일기, 비밀스러운 프로젝트. 가까울 때는 비밀이 폭로되어 당혹감을 느끼게 됨."
  },
  {
    id: 27,
    name: "Letter",
    krName: "편지",
    playingCard: "7 of Spades",
    nearNouns: ["통신", "문서"],
    farNouns: ["소식", "피상성"],
    adjectives: ["비대면의", "일시적인"],
    polarity: "neutral",
    description: "이메일, 우편물, 계약서 등 서면 통신과 서류. 멀어질 경우 깊이 없는 소식이나 피상적인 연락."
  },
  {
    id: 28,
    name: "Man",
    krName: "신사",
    playingCard: "Ace of Hearts",
    nearNouns: ["질문자", "중요남성"],
    farNouns: ["남성인물", "관심남성"],
    adjectives: ["남성적인", "의지적인"],
    polarity: "neutral",
    description: "남성 질문자 본인, 혹은 질문자의 인생에서 가장 중요한 핵심 남성 인물."
  },
  {
    id: 29,
    name: "Lady",
    krName: "숙녀",
    playingCard: "Ace of Spades",
    nearNouns: ["질문자", "중요여성"],
    farNouns: ["여성인물", "관심여성"],
    adjectives: ["여성적인", "수용적인"],
    polarity: "neutral",
    description: "여성 질문자 본인, 혹은 질문자의 인생에서 가장 중요한 핵심 여성 인물."
  },
  {
    id: 30,
    name: "Lily",
    krName: "백합",
    playingCard: "King of Spades",
    nearNouns: ["행복감", "보호"],
    farNouns: ["가족문제", "슬픔"],
    adjectives: ["관능적인", "고결한"],
    polarity: "positive-neutral",
    description: "순수함, 평화, 조화로운 성취, 가문의 보호와 행복. 멀어지면 슬픔이나 가족 간의 숨겨진 불화."
  },
  {
    id: 31,
    name: "Sun",
    krName: "태양",
    playingCard: "Ace of Diamonds",
    nearNouns: ["성공", "큰행운"],
    farNouns: ["의기저하", "시련"],
    adjectives: ["밝은", "낙관적인"],
    polarity: "positive",
    description: "최고의 에너지, 성공, 승리, 모든 부정적인 성향의 완화. 멀어지면 빛을 잃어 의기가 저하되거나 작은 시련."
  },
  {
    id: 32,
    name: "Moon",
    krName: "달",
    playingCard: "8 of Hearts",
    nearNouns: ["인정", "승진"],
    farNouns: ["누락", "정체"],
    adjectives: ["명예로운", "직업적인"],
    polarity: "positive-neutral",
    description: "직업적 명성, 대중적 인기, 사회적 인정과 승진. 멀어지면 승진 누락, 대중의 외면, 혹은 감정적 정체."
  },
  {
    id: 33,
    name: "Key",
    krName: "열쇠",
    playingCard: "8 of Diamonds",
    nearNouns: ["확정", "성취"],
    farNouns: ["좌절", "불발"],
    adjectives: ["결정적인", "필연적인"],
    polarity: "positive",
    description: "해결책, 필연적인 운명, 확고한 성취와 진리. 멀어지면 답을 찾지 못하는 좌절이나 기회의 불발."
  },
  {
    id: 34,
    name: "Fish",
    krName: "물고기",
    playingCard: "King of Diamonds",
    nearNouns: ["수입", "기회"],
    farNouns: ["궁핍", "재정시련"],
    adjectives: ["풍요로운", "유동적인"],
    polarity: "positive",
    description: "재정적 풍요, 비즈니스 성공, 큰 수입과 유동성. 멀어지면 금전적 가뭄, 궁핍 및 심각한 재정 시련."
  },
  {
    id: 35,
    name: "Anchor",
    krName: "닻",
    playingCard: "9 of Spades",
    nearNouns: ["안정", "희망"],
    farNouns: ["좌절", "불안정"],
    adjectives: ["견고한", "장기적인"],
    polarity: "positive-neutral",
    description: "목표의 도달, 장기적인 안정감, 확고한 신뢰와 희망. 멀어지면 정착하지 못하는 좌절감과 흔들리는 불안정."
  },
  {
    id: 36,
    name: "Cross",
    krName: "십자가",
    playingCard: "6 of Clubs",
    nearNouns: ["완화", "통과시험"],
    farNouns: ["고난", "숙명"],
    adjectives: ["무거운", "숙명적인"],
    polarity: "negative",
    description: "피할 수 없는 무거운 책임, 카르마, 종교적 숙명. 가까우면 고난이 완화되거나 극복 가능한 통과 시험이 됨."
  }
];
