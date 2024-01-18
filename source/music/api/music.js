const allMusic = [
  {
    name: "나의 X에게",
    artist: "경서",
    img: "나의 X에게 (경서)",
    audio: "나의 X에게 (경서)"
  },
  {
    name: "밤하늘의 별을(2020)",
    artist: "경서",
    img: "밤하늘의 별을 2020 (경서)",
    audio: "밤하늘의 별을 2020 (경서)"
  },
  {
    name: "봄이야",
    artist: "경서",
    img: "봄이야 (경서)",
    audio: "봄이야 (경서)"
  },
  {
    name: "계절범죄 (feat. 새빛)",
    artist: "Miiro (미로)",
    img: "계절범죄 (feat. 새빛)",
    audio: "계절범죄"
  },
  {
    name: "빛이 나는 너에게",
    artist: "던 (DAWN)",
    img: "빛이 나는 너에게 (던)",
    audio: "빛이 나는 너에게 (던)"
  },
  {
    name: "스티커 사진",
    artist: "21학번",
    img: "스티커 사진 - 21학번",
    audio: "스티커 사진 - 21학번"
  },
  {
    name: "가끔 연락하던 애",
    artist: "10cm (십센치)",
    img: "가끔 연락하던 애 - 10cm",
    audio: "가끔 연락하던 애 - 10cm"
  },
  {
    name: "피차일반 (彼此一般)",
    artist: "음율",
    img: "피차일반 (彼此一般) - 음율",
    audio: "피차일반 (彼此一般) - 음율"
  },
  {
    name: "잠깐 시간 될까",
    artist: "이무진",
    img: "잠깐 시간 될까 - 이무진",
    audio: "잠깐 시간 될까 - 이무진"
  },
  {
    name: "첫 키스에 내 심장은 120BPM",
    artist: "경서",
    img: "첫 키스에 내 심장은 120BPM - 경서",
    audio: "첫 키스에 내 심장은 120BPM - 경서"
  },
  {
    name: "고백",
    artist: "장범준",
    img: "고백 - 장범준",
    audio: "고백 - 장범준"
  },
  {
    name: "밤을 달리다 (夜に駆ける)",
    artist: "도비비 (Dovivi)",
    img: "밤을 달리다 - 도비비",
    audio: "밤을 달리다 - 도비비"
  },
  {
    name: "Hello Mr. My yesterday",
    artist: "꽃감이",
    img: "Hello Mr. My yesterday - 꽃감이",
    audio: "Hello Mr. My yesterday - 꽃감이"
  },
  {
    name: "Yesterday",
    artist: "블락비 (Block.B)",
    img: "Yesterday - 블락비",
    audio: "Yesterday - 블락비"
  },
  {
    name: "Rainy day",
    artist: "파테코 (PATEKO)",
    img: "Rainy day - 파테코",
    audio: "Rainy day - 파테코"
  },
  {
    name: "끼부리지마",
    artist: "위너 (Winner)",
    img: "끼부리지마 - 위너",
    audio: "끼부리지마 - 위너"
  },
  {
    name: "Ohayo my night",
    artist: "디핵",
    img: "Ohayo my night - 디핵",
    audio: "Ohayo my night - 디핵"
  },
  {
    name: "거절은 거절할게",
    artist: "경서",
    img: "거절은 거절할게 - 경서",
    audio: "거절은 거절할게 - 경서"
  },
  {
    name: "아로하",
    artist: "조정석",
    img: "아로하 - 조정석",
    audio: "아로하 - 조정석"
  },
  {
    name: "밤이 되니까",
    artist: "펀치",
    img: "밤이 되니까 - 펀치",
    audio: "밤이 되니까 - 펀치"
  },
  {
    name: "Friend the end",
    artist: "볼빨간 사춘기",
    img: "Friend the end - 볼빨간 사춘기",
    audio: "Friend the end - 볼빨간 사춘기"
  },
  {
    name: "어제처럼",
    artist: "폴킴",
    img: "어제처럼 - 폴킴",
    audio: "어제처럼 - 폴킴"
  },
  {
    name: "나도 모르는 사이에",
    artist: "적재",
    img: "나도 모르는 사이에 - 적재",
    audio: "나도 모르는 사이에 - 적재"
  },
  {
    name: "걷자 집앞이야",
    artist: "스무살, 주예인",
    img: "걷자 집앞이야 - 스무살",
    audio: "걷자 집앞이야 - 스무살"
  },
  {
    name: "Way back home",
    artist: "숀",
    img: "Way back home - 숀",
    audio: "Way back home - 숀"
  },
  {
    name: "너없인 안된다",
    artist: "비투비 (BTOB)",
    img: "너없인 안된다 - 비투비",
    audio: "너없인 안된다 - 비투비"
  },
  {
    name: "나랑 사귈래",
    artist: "이진이",
    img: "나랑 사귈래 - 이진이",
    audio: "나랑 사귈래 - 이진이"
  },
  {
    name: "그저 목소리 하나",
    artist: "로쿠데나시",
    img: "그저 목소리 하나 - 로쿠데나시",
    audio: "그저 목소리 하나 - 로쿠데나시"
  },
  {
    name: "그라데이션",
    artist: "10cm (십센치)",
    img: "그라데이션 - 10cm",
    audio: "그라데이션 - 10cm"
  },
  {
    name: "Discord",
    artist: "QWER",
    img: "Discord - QWER",
    audio: "Discord - QWER"
  },
  {
    name: "파도혁명",
    artist: "음율",
    img: "파도혁명 - 음율",
    audio: "파도혁명 - 음율"
  },
  {
    name: "행복이론",
    artist: "음율",
    img: "행복이론 - 음율",
    audio: "행복이론 - 음율"
  },
  {
    name: "밤 Night",
    artist: "dori",
    img: "밤 Night - dori",
    audio: "밤 Night - dori"
  },
  {
    name: "이뻐이뻐",
    artist: "크레파스",
    img: "이뻐이뻐 - 크레파스",
    audio: "이뻐이뻐 - 크레파스"
  },
  {
    name: "나의 바람",
    artist: "비투비 (BTOB)",
    img: "나의 바람 - 비투비",
    audio: "나의 바람 - 비투비"
  },
  {
    name: "Perfect night",
    artist: "LE SSERAFIM (르세라핌)",
    img: "Perfect night - 르세라핌",
    audio: "Perfect night - 르세라핌"
  },
  {
    name: "후라이의 꿈",
    artist: "악동뮤지션 (AKMU)",
    img: "후라이의 꿈 - 악동뮤지션",
    audio: "후라이의 꿈 - 악동뮤지션"
  }
]