const themeMeta = {
  all: {
    label: '전체 보기',
    color: '#2f8f57',
    deep: '#1f5d3a',
    soft: '#e5f5ea',
    mood: '전주와 인근 지역의 역사, 생태, 문화, 생활 거점을 한 흐름으로 읽는 시즌 아카이브'
  },
  history: {
    label: '역사·기억',
    color: '#2d76c8',
    deep: '#1d4d85',
    soft: '#e7f0fd',
    mood: '다리와 기념공간, 사찰과 기록 장소를 따라 지역의 시간층을 읽는 코스'
  },
  nature: {
    label: '호수·생태',
    color: '#3f9961',
    deep: '#27613c',
    soft: '#e5f4ea',
    mood: '호수와 공원, 숲길과 수변 산책로를 중심으로 천천히 달리는 회복형 코스'
  },
  art: {
    label: '문화·기록',
    color: '#d48825',
    deep: '#8e5713',
    soft: '#fbf1df',
    mood: '도서관과 문화공간, 공동체 기록 거점을 연결해 머무는 감상형 코스'
  },
  local: {
    label: '생활·거점',
    color: '#ca6842',
    deep: '#83432a',
    soft: '#f8e8e1',
    mood: '자전거 대여소, 의료·봉사 거점, 시장과 쉼터를 잇는 실제 이용형 코스'
  }
};

function stableHash(text) {
  return Array.from(String(text || '')).reduce((accumulator, character) => {
    return (accumulator * 31 + character.charCodeAt(0)) % 100000;
  }, 7);
}

function getPhotoTags(query) {
  const normalized = String(query || '').replace(/\s+/g, '').toLowerCase();

  if (normalized.includes('다리') || normalized.endsWith('교')) {
    return ['bridge', 'river', 'korea'];
  }

  if (normalized.includes('호수') || normalized.includes('저수지') || normalized.includes('기지제') || normalized.includes('세병호')) {
    return ['lake', 'park', 'korea'];
  }

  if (normalized.includes('수목원') || normalized.includes('편백숲') || normalized.includes('숲')) {
    return ['forest', 'trail', 'korea'];
  }

  if (normalized.includes('공원')) {
    return ['park', 'trees', 'korea'];
  }

  if (normalized.includes('박물관')) {
    return ['museum', 'building', 'korea'];
  }

  if (normalized.includes('도서관')) {
    return ['library', 'building', 'korea'];
  }

  if (normalized.includes('예술공장')) {
    return ['gallery', 'industrial', 'building'];
  }

  if (normalized.includes('시장')) {
    return ['market', 'street', 'korea'];
  }

  if (normalized.includes('병원')) {
    return ['hospital', 'building', 'korea'];
  }

  if (normalized.includes('교회')) {
    return ['church', 'building', 'korea'];
  }

  if (normalized.includes('카페')) {
    return ['cafe', 'building', 'korea'];
  }

  if (normalized.includes('대여소') || normalized.includes('자전거') || normalized.includes('바이크')) {
    return ['bicycle', 'shop', 'city'];
  }

  if (normalized.includes('송광사') || normalized.endsWith('사')) {
    return ['temple', 'architecture', 'korea'];
  }

  if (normalized.includes('비비정') || normalized.includes('오목대') || normalized.includes('추천대')) {
    return ['pavilion', 'river', 'korea'];
  }

  if (normalized.includes('자연사') || normalized.includes('미소시장') || normalized.includes('기록관') || normalized.includes('센터') || normalized.includes('연합') || normalized.includes('협빌딩')) {
    return ['building', 'exterior', 'korea'];
  }

  if (normalized.includes('초등학교')) {
    return ['school', 'building', 'korea'];
  }

  if (normalized.includes('바람쐬는길')) {
    return ['mountain', 'viewpoint', 'road'];
  }

  if (normalized.includes('fm')) {
    return ['studio', 'building', 'korea'];
  }

  return ['landscape', 'korea', 'outdoor'];
}

function previewImage(query) {
  const tags = getPhotoTags(query).join(',');
  const lock = stableHash(query);
  return `https://loremflickr.com/1200/800/${tags}?lock=${lock}`;
}

const places = [
  {
    name: '새창이다리',
    theme: 'history',
    district: '김제 청하면·군산 대야면 경계',
    scene: 'scene-gate',
    tagline: '만경강 하구와 들녘의 시간을 품은 근대 교량 유산',
    intro:
      '새창이다리는 1933년에 준공된 전북권의 오래된 근대 시멘트 다리로 알려져 있습니다. 김제와 군산 사이 만경강 물길과 넓은 평야를 함께 보여 주는 장소라서, 한강 이남의 산업·수탈·교통사를 자전거 답사 언어로 풀어내기 좋습니다.',
    nearby: ['비비정', '하리교', '봉동 상장기공원'],
    nearbyText:
      '새창이다리, 비비정, 하리교, 봉동 상장기공원을 함께 보면 만경강을 따라 형성된 전북 서부 수변 이동축과 교량의 역할을 한 흐름으로 읽을 수 있습니다.',
    course:
      '새창이다리에서 만경강 하류의 분위기를 먼저 보고, 완주권 비비정과 하리교 방향으로 이어 가면 물길과 다리, 생활권 이동축을 비교하는 광역 라이딩 코스로 확장됩니다.',
    mapKeyword: '새창이다리 김제 청하면',
    imageUrl: previewImage('새창이다리 김제 청하면'),
    latLng: { lat: 35.906, lng: 126.777 }
  },
  {
    name: '어은 쌍다리',
    aliases: ['어은쌍다리'],
    theme: 'history',
    district: '전주시 덕진구 진북동',
    scene: 'scene-street',
    tagline: '전주천 생활권을 잇는 오래된 보행 다리의 기억',
    intro:
      '어은 쌍다리는 전주천을 사이에 두고 주민 생활권을 이어 주던 낮은 보행 교량군의 기억을 담고 있습니다. 대형 명소는 아니지만, 전주 도심이 하천을 중심으로 어떻게 이어졌는지 보여 주는 생활형 근현대 공간이라는 점에서 의미가 큽니다.',
    nearby: ['전주시민기록관', '전주3.1운동발상지', '전주공동체라디오 전주FM'],
    nearbyText:
      '전주시민기록관과 전주3.1운동발상지, 전주FM을 함께 보면 전주천 주변 생활권이 기억과 기록, 시민 미디어 공간으로 어떻게 이어지는지 자연스럽게 읽힙니다.',
    course:
      '어은 쌍다리에서 전주천을 따라 이동한 뒤 중앙동 기록 거점으로 들어가면, 하천 생활사와 시민 기록을 결합한 도심형 라이딩 코스를 만들 수 있습니다.',
    mapKeyword: '어은 쌍다리 전주 진북동',
    imageUrl: previewImage('어은 쌍다리 전주 진북동'),
    latLng: { lat: 35.829, lng: 127.141 }
  },
  {
    name: '전주시 공영자전거 꽃싱이 송천대여소',
    aliases: ['꽃싱이 송천대여소', '꽃싱이 송천'],
    theme: 'local',
    district: '전주시 덕진구 송천동',
    scene: 'scene-bike',
    tagline: '북부 생활권 라이딩의 실제 출발점이 되는 공영자전거 거점',
    intro:
      '꽃싱이 송천대여소는 전주시 공영자전거를 가장 생활권답게 체감할 수 있는 곳입니다. 전주가 자전거 관광을 넘어 생활 이동 수단으로 공영자전거를 운영하고 있다는 점을 보여 주기 때문에, 미션형 챌린지의 출발점으로 매우 적합합니다.',
    nearby: ['세병호', '덕진공원', '전북대 자연사박물관'],
    nearbyText:
      '세병호, 덕진공원, 전북대 자연사박물관이 가까워 공영자전거를 빌린 뒤 북부 생태·가족 코스로 부드럽게 이어 가기 좋습니다.',
    course:
      '송천대여소에서 출발해 세병호를 한 바퀴 돈 뒤 덕진공원과 전북대 자연사박물관 쪽으로 이동하면 초보자도 부담 적은 북부권 입문 코스가 됩니다.',
    mapKeyword: '꽃싱이 송천대여소 전주',
    imageUrl: previewImage('전주시 공영자전거 꽃싱이 송천대여소'),
    latLng: { lat: 35.874, lng: 127.122 }
  },
  {
    name: '추천대',
    theme: 'history',
    district: '전주시 덕진구 팔복동',
    scene: 'scene-park',
    tagline: '전주천과 삼천이 만나는 합수 지점의 풍경을 품은 누정',
    intro:
      '추천대는 전주천과 삼천이 합류하는 지점을 내려다보는 정자이자, 전주 서북권 수변 지형을 읽게 해 주는 장소입니다. 전주 수변 경관의 변화를 조용히 보여 주는 작은 전망 거점으로, 역사 이야기와 생태 해설을 함께 붙이기 좋습니다.',
    nearby: ['팔복예술공장', '하리교', '비비정'],
    nearbyText:
      '팔복예술공장과 하리교, 비비정을 함께 보면 전주 서북부에서 완주 봉동·삼례로 이어지는 만경강·전주천 축의 역사와 재생 풍경을 연결해 볼 수 있습니다.',
    course:
      '추천대에서 합수 지점을 조망한 뒤 팔복예술공장으로 내려가고, 여건이 되면 하리교와 비비정까지 확장하면 수변-산업-정자 풍경이 이어지는 코스가 완성됩니다.',
    mapKeyword: '전주 추천대',
    imageUrl: previewImage('전주 추천대'),
    latLng: { lat: 35.847, lng: 127.089 }
  },
  {
    name: '익산 삼일교회(참새방앗간)',
    aliases: ['익산 삼일교회', '참새방앗간'],
    theme: 'history',
    district: '익산시 석탄동',
    scene: 'scene-church',
    tagline: '쉼터와 나눔을 실천하는 지역 교회의 생활 선교 공간',
    intro:
      '익산 삼일교회 앞 참새방앗간은 마을 주민과 지나가는 사람을 위해 물과 책, 쉼을 제공하는 생활형 나눔 공간으로 알려져 있습니다. 거대한 종교 명소가 아니라 일상 속 환대가 어떻게 장소가 되는지를 보여 준다는 점에서 챌린지 코스에 색다른 결을 더해 줍니다.',
    nearby: ['새창이다리', '비비정', '대덕초등학교'],
    nearbyText:
      '새창이다리, 비비정, 대덕초등학교와 묶으면 전북 서부권의 교회·교량·생활권 거점을 잇는 느슨한 광역 코스를 구성할 수 있습니다.',
    course:
      '익산권에서는 참새방앗간을 짧은 휴식 거점으로 삼고, 전주·완주권으로 넘어갈 때는 새창이다리나 비비정 축과 연결해 장거리 인증 코스로 설계하기 좋습니다.',
    mapKeyword: '익산 삼일교회 참새방앗간',
    imageUrl: previewImage('익산 삼일교회 참새방앗간'),
    latLng: { lat: 35.954, lng: 126.945 }
  },
  {
    name: '하리교',
    theme: 'history',
    district: '완주군 삼례읍·전주시 전미동 축',
    scene: 'scene-gate',
    tagline: '전주와 완주를 실질적으로 연결하는 북서부 생활 교량',
    intro:
      '하리교는 전주와 완주 삼례·봉동 생활권을 잇는 핵심 교량입니다. 통근과 통학, 물류 이동의 압력을 받아 재가설된 장소라는 점에서, 행정구역을 넘어 실제 생활권이 어떻게 맞물리는지를 보여 줍니다.',
    nearby: ['비비정', '봉동 상장기공원', '팔복예술공장'],
    nearbyText:
      '비비정과 봉동 상장기공원, 팔복예술공장을 함께 보면 만경강과 산업·생활권 이동이 전주와 완주 사이를 어떻게 묶는지 선명하게 드러납니다.',
    course:
      '하리교를 건너며 생활권 경계를 체감하고, 봉동 상장기공원 쪽으로 올라가거나 팔복예술공장으로 내려오면 광역형 인증 코스를 만들 수 있습니다.',
    mapKeyword: '하리교 완주 삼례',
    imageUrl: previewImage('하리교 완주 삼례'),
    latLng: { lat: 35.876, lng: 127.053 }
  },
  {
    name: '전주공동체라디오 전주FM',
    aliases: ['전주FM'],
    theme: 'art',
    district: '전주시 완산구 중앙동',
    scene: 'scene-radio',
    tagline: '도시의 목소리를 시민이 직접 만드는 공동체 미디어 거점',
    intro:
      '전주FM은 전주의 동네 이야기와 시민 목소리를 직접 방송으로 만드는 공동체 라디오입니다. 기록과 아카이브, 시민 참여라는 관점에서 전주를 설명하기에 좋은 장소라서, 단순 관광지를 넘어 살아 있는 도시 문화 인프라로 읽을 수 있습니다.',
    nearby: ['전주시민기록관', '전주3.1운동발상지', '전주시 자원봉사센터'],
    nearbyText:
      '전주시민기록관과 전주3.1운동발상지, 자원봉사센터와 묶으면 시민 기록, 참여, 연대의 축을 하나의 이야기로 풀어 낼 수 있습니다.',
    course:
      '중앙동 기록 거점을 따라 전주FM과 시민기록관, 3.1운동발상지를 잇는 도심 코스는 도시가 스스로를 말하는 방식을 보여 주는 교육형 코스가 됩니다.',
    mapKeyword: '전주공동체라디오 전주FM',
    imageUrl: previewImage('전주공동체라디오 전주FM'),
    latLng: { lat: 35.818, lng: 127.146 }
  },
  {
    name: '우석대학교 부속 전주한방병원',
    aliases: ['우석대학교 부석 전주한방병원', '우석대학교 부속 전주한방병원'],
    theme: 'local',
    district: '전주시 완산구 중화산동',
    scene: 'scene-health',
    tagline: '전통의학과 지역 돌봄을 읽는 의료 기반 거점',
    intro:
      '우석대학교 부속 전주한방병원은 전통 한의학과 현대 의료 시스템이 만나는 지역 의료 거점입니다. 관광 장소는 아니지만, 도시를 움직이는 건강·돌봄 인프라라는 점에서 생활형 챌린지 코스의 중요한 결절점이 됩니다.',
    nearby: ['전주의료사협빌딩', '전주시 자원봉사센터', '환경운동연합'],
    nearbyText:
      '전주의료사협빌딩, 자원봉사센터, 환경운동연합과 묶으면 의료·시민사회·공공참여가 어떻게 생활권 안에서 연결되는지 설명하기 좋습니다.',
    course:
      '중화산동 생활권을 천천히 훑으며 의료와 복지, 시민 거점을 연결하는 코스로 구성하면 관광지 중심 라이딩과 다른 전주의 실제 구조를 보여 줄 수 있습니다.',
    mapKeyword: '우석대학교 부속 전주한방병원',
    imageUrl: previewImage('우석대학교 부속 전주한방병원'),
    latLng: { lat: 35.805, lng: 127.123 }
  },
  {
    name: '덕진공원',
    theme: 'nature',
    district: '전주시 덕진구 덕진동',
    scene: 'scene-lake',
    tagline: '연못과 산책로, 시민 여가가 겹치는 전주의 대표 호수공원',
    intro:
      '덕진공원은 전주의 대표적인 수변 여가 공간으로, 연못과 산책로, 계절 풍경이 잘 결합된 도시공원입니다. 전주 북부권에서 자전거로 접근하기 좋고, 가족형 방문객이 많은 만큼 미션형 챌린지에서도 완급 조절 지점으로 활용하기 좋습니다.',
    nearby: ['전북대 자연사박물관', '세병호', '전주시 공영자전거 꽃싱이 송천대여소'],
    nearbyText:
      '전북대 자연사박물관, 세병호, 송천 꽃싱이 대여소와 함께 보면 북부 생활권의 공원·교육·공영자전거 축이 자연스럽게 이어집니다.',
    course:
      '덕진공원을 기준점으로 세병호와 자연사박물관을 오가는 코스는 초보자도 부담 적고, 북부 생태·가족형 인증 미션으로 운영하기 좋습니다.',
    mapKeyword: '전주 덕진공원',
    imageUrl: previewImage('전주 덕진공원'),
    latLng: { lat: 35.849, lng: 127.123 }
  },
  {
    name: '전북대 자연사박물관',
    aliases: ['전북대학교 자연사박물관'],
    theme: 'nature',
    district: '전주시 덕진구 금암동',
    scene: 'scene-campus',
    tagline: '도시 생태와 과학 해설을 함께 붙이기 좋은 대학 박물관',
    intro:
      '전북대 자연사박물관은 화석과 지질, 동식물 표본을 통해 자연을 과학적으로 읽게 해 주는 공간입니다. 북부권 라이딩 중 실내 학습 거점으로 들르기 좋고, 덕진공원 같은 야외 공간과 함께 묶으면 생태 교육 효과가 높아집니다.',
    nearby: ['덕진공원', '세병호', '전주시 공영자전거 꽃싱이 송천대여소'],
    nearbyText:
      '덕진공원, 세병호, 송천 꽃싱이 대여소와 연계하면 호수 풍경과 생태 학습, 실제 자전거 이동이 한 코스로 묶입니다.',
    course:
      '자연사박물관에서 전시를 본 뒤 덕진공원과 세병호로 이어 달리면 실내 학습과 야외 관찰을 결합한 북부권 코스가 완성됩니다.',
    mapKeyword: '전북대학교 자연사박물관',
    imageUrl: previewImage('전북대학교 자연사박물관'),
    latLng: { lat: 35.845, lng: 127.132 }
  },
  {
    name: '비비정',
    theme: 'history',
    district: '완주군 삼례읍',
    scene: 'scene-hanok',
    tagline: '만경강 풍경과 철교, 예술열차가 겹치는 완주의 대표 정자',
    intro:
      '비비정은 만경강을 바라보는 조선시대 정자이자, 비비정 예술열차와 함께 완주 수변 관광의 상징처럼 읽히는 장소입니다. 다리와 강, 철길 풍경이 겹쳐 보여 자전거 코스의 장면 전환이 분명합니다.',
    nearby: ['하리교', '봉동 상장기공원', '새창이다리'],
    nearbyText:
      '하리교와 봉동 상장기공원, 새창이다리와 함께 보면 만경강 축의 다리·정자·강변 경관이 광역적으로 이어지는 모습을 이해하기 좋습니다.',
    course:
      '비비정을 중심으로 하리교와 봉동 상장기공원까지 이어 달리면 완주 수변의 풍경과 생활권 확장을 함께 체감하는 코스가 됩니다.',
    mapKeyword: '완주 비비정',
    imageUrl: previewImage('완주 비비정'),
    latLng: { lat: 35.845, lng: 127.052 }
  },
  {
    name: '전주시 자원봉사센터',
    theme: 'local',
    district: '전주시 완산구 서신동',
    scene: 'scene-archive',
    tagline: '도시의 참여와 연대를 실무로 움직이는 자원봉사 허브',
    intro:
      '전주시 자원봉사센터는 전주의 시민 참여와 연대가 실제 프로그램과 현장 활동으로 연결되는 실무 허브입니다. 관광성은 낮지만, 도시가 공동체성을 유지하는 방식 자체를 보여 주는 장소라는 점에서 챌린지의 의미를 넓혀 줍니다.',
    nearby: ['전주공동체라디오 전주FM', '전주의료사협빌딩', '환경운동연합'],
    nearbyText:
      '전주FM, 전주의료사협빌딩, 환경운동연합과 묶으면 참여·돌봄·환경이라는 시민사회 인프라를 하나의 축으로 소개하기 좋습니다.',
    course:
      '서신·효자동 생활권을 따라 자원봉사센터와 시민사회 거점을 연결하면 전주가 실제로 어떻게 협력하며 움직이는지 보여 주는 생활형 코스가 됩니다.',
    mapKeyword: '전주시 자원봉사센터',
    imageUrl: previewImage('전주시 자원봉사센터'),
    latLng: { lat: 35.821, lng: 127.119 }
  },
  {
    name: '기지제',
    theme: 'nature',
    district: '전주시 덕진구 만성동',
    scene: 'scene-lake',
    tagline: '혁신도시 생활권을 보여 주는 대표 수변 공원',
    intro:
      '기지제는 농업용 저수지에서 도시 수변공원으로 전환된 전주 서부권의 대표 장소입니다. 수상 데크와 순환형 산책로, 혁신도시 배후 주거지가 함께 보이기 때문에 전주의 확장된 도시 이미지를 읽는 데 적합합니다.',
    nearby: ['전주수목원', '바이크박스', '세병호'],
    nearbyText:
      '전주수목원과 바이크박스, 세병호를 연결하면 서부 녹지축과 북부 수변축을 비교하는 넓은 라이딩 흐름을 설계할 수 있습니다.',
    course:
      '기지제 순환길을 먼저 돌고 전주수목원 쪽으로 이어 달리면 서부권의 자연형 코스가 되고, 장거리 이용자는 세병호 축까지 확장할 수 있습니다.',
    mapKeyword: '전주 기지제',
    imageUrl: previewImage('전주 기지제'),
    latLng: { lat: 35.848, lng: 127.067 }
  },
  {
    name: '세병호',
    theme: 'nature',
    district: '전주시 덕진구 송천동',
    scene: 'scene-lake',
    tagline: '에코시티 일상의 풍경을 압축해 보여 주는 신생활권 호수',
    intro:
      '세병호는 전주 에코시티의 중심 호수이자, 신도시형 생활권의 수변 공공공간을 보여 주는 장소입니다. 잔디와 산책로, 호수뷰가 잘 정리돼 있어 가족형 라이딩과 도심 피크닉 코스 모두에 잘 어울립니다.',
    nearby: ['전주시 공영자전거 꽃싱이 송천대여소', '덕진공원', '전북대 자연사박물관'],
    nearbyText:
      '꽃싱이 송천대여소와 덕진공원, 자연사박물관을 묶으면 북부권의 공영자전거·공원·교육 공간을 촘촘하게 잇는 코스가 됩니다.',
    course:
      '세병호를 한 바퀴 돌아 에코시티 생활권을 체감한 뒤 덕진공원 쪽으로 이어 달리면 전주 북부의 새 풍경과 오래된 공원을 함께 경험할 수 있습니다.',
    mapKeyword: '전주 세병호',
    imageUrl: previewImage('전주 세병호'),
    latLng: { lat: 35.872, lng: 127.127 }
  },
  {
    name: '대덕초등학교',
    theme: 'local',
    district: '완주군 봉동읍',
    scene: 'scene-campus',
    tagline: '지역 생활권의 중심을 보여 주는 학교 앞 자전거 동선 거점',
    intro:
      '대덕초등학교는 학교 자체보다도 봉동 생활권의 통학과 보행, 자전거 이동 흐름을 읽기 좋은 지점으로 볼 수 있습니다. 생활권 코스를 운영할 때 학교 주변의 안전한 속도와 지역 일상성을 함께 설명하기에 적합합니다.',
    nearby: ['봉동 상장기공원', '비비정', '하리교'],
    nearbyText:
      '봉동 상장기공원과 비비정, 하리교가 가까워 봉동읍 생활권과 만경강 축을 함께 읽는 생활형 코스로 묶기 좋습니다.',
    course:
      '대덕초등학교 인근의 차분한 생활권 도로를 지나 상장기공원과 하리교 방향으로 이동하면 봉동 일상의 규모를 체감하는 코스가 됩니다.',
    mapKeyword: '대덕초등학교 완주 봉동',
    imageUrl: previewImage('대덕초등학교 완주 봉동'),
    latLng: { lat: 35.939, lng: 127.141 }
  },
  {
    name: '봉동 상장기공원',
    theme: 'nature',
    district: '완주군 봉동읍',
    scene: 'scene-park',
    tagline: '만경강과 봉동의 풍경, 스토리가 벽면에 쌓이는 강변 공원',
    intro:
      '봉동 상장기공원은 만경강변 생활권 경관사업과 함께 정비된 공간으로, 봉상정과 스토리월, 강변 산책 요소가 함께 있는 공원입니다. 완주의 읍생활권과 강변 재생이 어떻게 결합하는지 보여 주는 사례로 읽기 좋습니다.',
    nearby: ['하리교', '비비정', '대덕초등학교'],
    nearbyText:
      '하리교와 비비정, 대덕초등학교를 함께 보면 봉동읍 생활권과 만경강 수변축, 통학권이 어떻게 이어지는지 살펴볼 수 있습니다.',
    course:
      '상장기공원에서 만경강을 따라 달리며 비비정이나 하리교 방향으로 이어 가면 완주 북서부 수변 라이딩 코스가 자연스럽게 형성됩니다.',
    mapKeyword: '봉동 상장기공원',
    imageUrl: previewImage('봉동 상장기공원'),
    latLng: { lat: 35.941, lng: 127.131 }
  },
  {
    name: '고산 미소시장',
    theme: 'local',
    district: '완주군 고산면',
    scene: 'scene-market',
    tagline: '완주 산간 생활권의 장터와 청년 거점이 공존하는 읍면 시장',
    intro:
      '고산 미소시장은 완주 고산권의 농산물과 생활 소비가 오가는 읍면 시장입니다. 곶감 직거래 장터나 청년 점포 같은 프로그램이 함께 언급될 만큼, 전통시장과 지역 재생 흐름을 함께 읽기 좋은 장소입니다.',
    nearby: ['완주군 송광사', '완주군 상관편백숲 관광안내소', '바람쐬는길'],
    nearbyText:
      '송광사와 상관편백숲 관광안내소, 바람쐬는길을 묶으면 완주 동부·산간권의 장터, 숲길, 사찰 코스로 확장할 수 있습니다.',
    course:
      '고산 미소시장에서 간단히 쉬고 먹은 뒤 완주 동부 산간 방향으로 이어 달리면 시장과 자연, 사찰 풍경이 결합된 완주형 광역 코스가 됩니다.',
    mapKeyword: '고산 미소시장 완주',
    imageUrl: previewImage('고산 미소시장 완주'),
    latLng: { lat: 35.976, lng: 127.205 }
  },
  {
    name: '완주군 송광사',
    aliases: ['송광사'],
    theme: 'history',
    district: '완주군 소양면',
    scene: 'scene-temple',
    tagline: '종남산 자락에서 깊은 시간과 문화재 층위를 품은 사찰',
    intro:
      '완주 송광사는 통일신라 말에서 조선 후기 중창을 거친 전통 사찰로, 다양한 문화재와 가람 배치를 함께 볼 수 있는 곳입니다. 완주 동부 산지권에서 역사와 종교, 숲길을 함께 묶는 거점으로 적합합니다.',
    nearby: ['완주군 상관편백숲 관광안내소', '무인카페여유(구이로1575)', '구이저수지'],
    nearbyText:
      '상관편백숲 관광안내소와 구이저수지, 무인카페여유를 함께 보면 완주 남동부 산지·호수·사찰 축이 하나의 사색형 코스로 이어집니다.',
    course:
      '송광사에서 시작해 상관편백숲과 구이저수지 방향으로 이동하면 숲과 수변, 사찰이 어우러진 완주 동남부 힐링 코스를 만들 수 있습니다.',
    mapKeyword: '완주 송광사',
    imageUrl: previewImage('완주 송광사'),
    latLng: { lat: 35.879, lng: 127.208 }
  },
  {
    name: '아중호수도서관',
    theme: 'art',
    district: '전주시 덕진구 우아동',
    scene: 'scene-modern',
    tagline: '호수와 음악, 독서가 한 공간에 겹쳐진 수변 문화도서관',
    intro:
      '아중호수도서관은 아중호수 수변에 자리한 음악 특화 공공도서관으로, 호수 경관과 실내 문화 체험을 함께 제공합니다. 최근 개관한 새 문화 인프라라는 점에서, 전주 동부권의 생활권 변화와 문화 확장을 보여 주는 장소이기도 합니다.',
    nearby: ['오목대', '전주시민기록관', '전주3.1운동발상지'],
    nearbyText:
      '오목대와 시민기록관, 3.1운동발상지를 함께 보면 전주 동부 수변과 도심 기록권, 한옥마을 주변의 역사 축을 이어 볼 수 있습니다.',
    course:
      '아중호수도서관에서 물가를 따라 출발해 도심 방향으로 내려오면 동부 수변의 차분함과 구도심 기록·역사축을 함께 경험하는 코스가 됩니다.',
    mapKeyword: '아중호수도서관',
    imageUrl: previewImage('아중호수도서관'),
    latLng: { lat: 35.835, lng: 127.166 }
  },
  {
    name: '팔복예술공장',
    theme: 'art',
    district: '전주시 덕진구 팔복동',
    scene: 'scene-modern',
    tagline: '공장을 예술 공간으로 바꾼 전주 서부의 대표 재생 거점',
    intro:
      '팔복예술공장은 옛 산업시설을 전시와 공연, 창작교육 공간으로 재생한 복합문화공간입니다. 전주가 전통문화뿐 아니라 산업유산 재생과 실험적 예술기획의 도시라는 사실을 보여 주는 대표 사례입니다.',
    nearby: ['추천대', '하리교', '봉동 상장기공원'],
    nearbyText:
      '추천대와 하리교, 봉동 상장기공원을 묶으면 전주 서부와 완주 봉동권을 관통하는 재생·수변 코스로 확장하기 좋습니다.',
    course:
      '팔복예술공장에서 출발해 추천대와 하리교 방향으로 달리면 산업유산, 수변, 생활권 연결의 흐름을 느끼는 서북권 코스가 완성됩니다.',
    mapKeyword: '팔복예술공장',
    imageUrl: previewImage('팔복예술공장'),
    latLng: { lat: 35.861, lng: 127.094 }
  },
  {
    name: '바람쐬는길',
    theme: 'nature',
    district: '완주군 구이면',
    scene: 'scene-forest',
    tagline: '호수와 산자락을 따라 완주 남부의 바람을 느끼는 전망 길',
    intro:
      '바람쐬는길은 구이권의 산지와 수변 풍경을 느리게 체감하기 좋은 드라이브·산책형 길로 알려져 있습니다. 자전거 코스에 넣으면 속도보다 풍경 전환과 휴식을 중심으로 한 감상형 구간을 만들 수 있습니다.',
    nearby: ['구이저수지', '무인카페여유(구이로1575)', '완주군 상관편백숲 관광안내소'],
    nearbyText:
      '구이저수지와 무인카페여유, 상관편백숲 안내소와 함께 보면 구이·상관권의 물과 숲, 쉼터가 이어지는 완주 남부 코스가 완성됩니다.',
    course:
      '바람쐬는길을 따라 천천히 이동한 뒤 구이저수지와 무인카페여유에서 쉬고, 여건이 되면 상관편백숲까지 이어 가는 느린 라이딩 코스를 권합니다.',
    mapKeyword: '완주 바람쐬는길',
    imageUrl: previewImage('완주 바람쐬는길'),
    latLng: { lat: 35.742, lng: 127.145 }
  },
  {
    name: '전주시민기록관',
    theme: 'art',
    district: '전주시 완산구 중앙동',
    scene: 'scene-archive',
    tagline: '도시의 일상 기록이 모여 전주의 기억 지형을 만드는 아카이브',
    intro:
      '전주시민기록관은 시민이 남긴 사진과 문서, 생활 자료를 수집해 도시의 기억을 아카이브하는 공간입니다. 왕조나 행정 중심 서사를 넘어, 전주를 살아간 보통 사람들의 시간을 함께 보여 준다는 점에서 해설 가치가 큽니다.',
    nearby: ['전주공동체라디오 전주FM', '전주3.1운동발상지', '전주시 자원봉사센터'],
    nearbyText:
      '전주FM과 전주3.1운동발상지, 자원봉사센터를 함께 보면 전주의 기록·시민참여·공공성 이야기를 밀도 있게 엮을 수 있습니다.',
    course:
      '중앙동 기록축을 따라 시민기록관과 전주FM, 3.1운동발상지를 잇는 코스는 전주를 살아 있는 기록 도시로 소개하기 좋습니다.',
    mapKeyword: '전주시민기록관',
    imageUrl: previewImage('전주시민기록관'),
    latLng: { lat: 35.817, lng: 127.147 }
  },
  {
    name: '전주3.1운동발상지',
    aliases: ['전주 3.1운동 발상지'],
    theme: 'history',
    district: '전주시 완산구 중앙동',
    scene: 'scene-archive',
    tagline: '전주 만세운동의 출발을 기억하는 작은 도심 현장',
    intro:
      '전주3.1운동발상지는 거대한 기념관 대신 도시 골목 안에 남아 있는 항일운동의 시작점입니다. 시장과 거리, 시민 이동의 장소가 역사 현장이 될 수 있다는 점을 실제 공간으로 보여 준다는 데 의미가 있습니다.',
    nearby: ['전주시민기록관', '전주공동체라디오 전주FM', '오목대'],
    nearbyText:
      '전주시민기록관과 전주FM, 오목대를 함께 보면 기록과 시민사, 전주의 상징 공간이 어떻게 맞물리는지 입체적으로 설명할 수 있습니다.',
    course:
      '전주3.1운동발상지에서 시민기록관과 전주FM을 거쳐 한옥마을 언덕의 오목대까지 이어 가면 기억과 상징, 도시의 현재가 함께 보이는 코스가 됩니다.',
    mapKeyword: '전주 3.1운동발상지',
    imageUrl: previewImage('전주 3.1운동발상지'),
    latLng: { lat: 35.816, lng: 127.145 }
  },
  {
    name: '오목대',
    theme: 'history',
    district: '전주시 완산구 교동',
    scene: 'scene-hanok',
    tagline: '한옥마을 지붕과 전주 분지를 내려다보는 상징적 전망지',
    intro:
      '오목대는 조선 건국 서사와 연결되는 상징적 장소이면서, 한옥마을을 내려다보는 전망지입니다. 전주를 처음 찾는 사람에게는 공간 구조를 한눈에 설명해 주는 시각적 거점이 되고, 이미 아는 사람에게는 도시 상징을 되새기는 장소가 됩니다.',
    nearby: ['전주3.1운동발상지', '아중호수도서관', '전주시민기록관'],
    nearbyText:
      '전주3.1운동발상지와 시민기록관, 아중호수도서관을 함께 보면 전통 상징 공간과 근현대 기록·수변 문화가 연결된 전주의 다층적 구조가 드러납니다.',
    course:
      '오목대를 도보로 오른 뒤 도심 기록 거점이나 아중권 수변으로 내려오면 전통 상징과 현재의 생활 문화를 함께 체감하는 코스로 확장됩니다.',
    mapKeyword: '전주 오목대',
    imageUrl: previewImage('전주 오목대'),
    latLng: { lat: 35.812, lng: 127.153 }
  },
  {
    name: '전주의료사협빌딩',
    aliases: ['전주의료생활협동조합', '전주의료사협'],
    theme: 'local',
    district: '전주시 완산구 효자동',
    scene: 'scene-health',
    tagline: '생활 의료와 협동조합 실험이 머무는 지역 돌봄 거점',
    intro:
      '전주의료사협빌딩은 주민 출자와 참여를 바탕으로 한 지역 의료 협동조합의 활동 기반을 읽게 해 주는 장소입니다. 병원 건물 그 자체보다도, 건강과 돌봄을 공동체가 어떻게 조직하는지를 보여 준다는 데 의미가 있습니다.',
    nearby: ['우석대학교 부속 전주한방병원', '전주시 자원봉사센터', '환경운동연합'],
    nearbyText:
      '우석 한방병원, 자원봉사센터, 환경운동연합과 함께 보면 의료·봉사·환경이 생활권 안에서 교차하는 전주의 시민사회 구조를 설명하기 좋습니다.',
    course:
      '효자동 생활권에서 전주의료사협빌딩과 의료·시민사회 거점을 잇는 코스는 관광지 중심이 아닌 실제 도시 운영 구조를 보여 주는 라이딩이 됩니다.',
    mapKeyword: '전주의료사협빌딩 전주',
    imageUrl: previewImage('전주의료사협빌딩 전주'),
    latLng: { lat: 35.803, lng: 127.113 }
  },
  {
    name: '구이저수지',
    theme: 'nature',
    district: '완주군 구이면',
    scene: 'scene-lake',
    tagline: '완주 남부 수변 라이딩의 중심이 되는 큰 물그릇',
    intro:
      '구이저수지는 완주 남부권에서 자전거와 드라이브, 카페 코스를 함께 묶기 좋은 대표 수변 공간입니다. 넓은 수면과 완만한 도로, 주변 카페와 전망 포인트가 있어 챌린지 코스 중 휴식형 구간으로 쓰기 좋습니다.',
    nearby: ['바람쐬는길', '무인카페여유(구이로1575)', '완주군 상관편백숲 관광안내소'],
    nearbyText:
      '바람쐬는길과 무인카페여유, 상관편백숲 안내소를 함께 보면 구이·상관권의 물, 숲, 쉼터가 연결된 완주 남부 자연 코스가 완성됩니다.',
    course:
      '구이저수지를 중심으로 수변을 한 바퀴 돌고 카페와 전망길로 이어 가면 라이딩과 쉼, 인증 사진 포인트가 잘 결합된 코스가 됩니다.',
    mapKeyword: '구이저수지 완주',
    imageUrl: previewImage('구이저수지 완주'),
    latLng: { lat: 35.733, lng: 127.127 }
  },
  {
    name: '전주수목원',
    theme: 'nature',
    district: '전주시 덕진구 여의동',
    scene: 'scene-forest',
    tagline: '계절 변화가 분명한 서북부의 대표 식물·정원 공간',
    intro:
      '전주수목원은 계절에 따라 다른 표정을 보여 주는 공공 녹지 공간으로, 서북부 라이딩 코스의 핵심 자연 거점입니다. 식물과 정원, 산책, 사진 촬영 수요가 함께 모이기 때문에 누구에게나 설명하기 쉬운 장소입니다.',
    nearby: ['기지제', '바이크박스', '세병호'],
    nearbyText:
      '기지제와 바이크박스, 세병호를 함께 묶으면 전주 서북·북부의 자연 거점과 실제 라이딩 인프라를 넓은 흐름으로 이어 볼 수 있습니다.',
    course:
      '전주수목원에서 출발해 기지제 쪽 수변으로 이동하고, 여건이 되면 세병호까지 연결하는 코스는 녹지와 호수를 번갈아 경험하는 장거리형 코스가 됩니다.',
    mapKeyword: '전주수목원',
    imageUrl: previewImage('전주수목원'),
    latLng: { lat: 35.873, lng: 127.072 }
  },
  {
    name: '바이크박스',
    theme: 'local',
    district: '전주시 덕진구 송천동',
    scene: 'scene-bike',
    tagline: '장거리 출발 전에 자전거 상태를 점검하는 실용 거점',
    intro:
      '바이크박스는 자전거 정비와 장비 구매, 점검 상담이 가능한 실용 거점입니다. 챌린지 코스가 실제 이용으로 이어지려면 이런 정비 거점이 필수이기 때문에, 명소와는 다른 방식으로 중요한 장소입니다.',
    nearby: ['전주수목원', '전주시 공영자전거 꽃싱이 송천대여소', '기지제'],
    nearbyText:
      '전주수목원과 꽃싱이 송천대여소, 기지제를 연결하면 대여·정비·수변 라이딩이 이어지는 실사용형 자전거 코스를 설명하기 쉽습니다.',
    course:
      '바이크박스에서 간단한 정비를 마친 뒤 송천권이나 서북부 수목원·기지제 방향으로 나가면 실제 자전거 이용자에게 가장 현실적인 코스 운영이 가능합니다.',
    mapKeyword: '전주 바이크박스',
    imageUrl: previewImage('전주 바이크박스'),
    latLng: { lat: 35.867, lng: 127.129 }
  },
  {
    name: '환경운동연합',
    aliases: ['전북환경운동연합'],
    theme: 'local',
    district: '전주시 완산구 서신동',
    scene: 'scene-archive',
    tagline: '하천과 녹지, 기후 의제를 시민 관점에서 읽게 하는 환경 거점',
    intro:
      '환경운동연합은 전북 지역의 하천과 녹지, 기후위기, 생활 환경문제를 시민의 언어로 풀어내는 활동 거점입니다. 관광지 중심 설명만으로는 보이지 않는 도시의 또 다른 축, 즉 공론장과 참여의 구조를 보여 줍니다.',
    nearby: ['전주시 자원봉사센터', '전주의료사협빌딩', '전주공동체라디오 전주FM'],
    nearbyText:
      '자원봉사센터, 전주의료사협빌딩, 전주FM과 함께 보면 환경·의료·미디어가 시민사회 네트워크로 얽혀 있는 전주의 실제 작동 방식을 설명하기 좋습니다.',
    course:
      '서신동과 효자동 생활권을 따라 환경운동연합과 시민사회 거점을 잇는 코스는 참여형 도시 전주를 이해하는 대안적 챌린지 코스가 됩니다.',
    mapKeyword: '전북환경운동연합 전주',
    imageUrl: previewImage('전북환경운동연합 전주'),
    latLng: { lat: 35.821, lng: 127.112 }
  },
  {
    name: '무인카페여유(구이로1575)',
    aliases: ['무인카페여유', '구이로1575'],
    theme: 'local',
    district: '완주군 구이면',
    scene: 'scene-food',
    tagline: '구이권 장거리 코스 중간에 들르기 좋은 무인 쉼터형 카페',
    intro:
      '무인카페여유는 구이권 라이딩 중 짧게 쉬어 가기 좋은 실용형 카페 거점입니다. 풍경 감상과 수분 보충, 간단한 휴식을 위한 장소로 넣어 두면 장거리 코스의 이용성이 훨씬 높아집니다.',
    nearby: ['구이저수지', '바람쐬는길', '완주군 상관편백숲 관광안내소'],
    nearbyText:
      '구이저수지와 바람쐬는길, 상관편백숲 안내소와 함께 묶으면 완주 남부의 호수·숲·휴식형 코스를 안정적으로 운영할 수 있습니다.',
    course:
      '구이저수지와 바람쐬는길을 돈 뒤 무인카페여유에서 쉬고, 체력이 남으면 상관편백숲 방향으로 이어 가는 순환 코스를 추천합니다.',
    mapKeyword: '무인카페여유 구이로1575',
    imageUrl: previewImage('무인카페여유 구이로1575'),
    latLng: { lat: 35.724, lng: 127.130 }
  },
  {
    name: '완주군 상관편백숲 관광안내소',
    aliases: ['상관편백숲 관광안내소', '상관편백숲'],
    theme: 'nature',
    district: '완주군 상관면',
    scene: 'scene-forest',
    tagline: '완주 남부 숲길 진입을 돕는 안내 거점이자 힐링 코스 출발점',
    intro:
      '완주군 상관편백숲 관광안내소는 편백숲 진입과 이용 정보를 제공하는 출발 거점입니다. 숲길 자체의 치유성과 안내 거점의 실용성이 함께 있어, 완주 남부 힐링 코스를 조직하는 데 중심 역할을 합니다.',
    nearby: ['구이저수지', '바람쐬는길', '무인카페여유(구이로1575)'],
    nearbyText:
      '구이저수지와 바람쐬는길, 무인카페여유와 묶으면 호수·숲·쉼터가 이어지는 완주 남부권 대표 힐링 코스를 구성할 수 있습니다.',
    course:
      '상관편백숲 안내소에서 출발해 숲길을 체험하고 구이권 수변과 카페로 이동하는 코스는 경사와 휴식의 균형이 좋아 미션형 운영에 적합합니다.',
    mapKeyword: '완주 상관편백숲 관광안내소',
    imageUrl: previewImage('완주 상관편백숲 관광안내소'),
    latLng: { lat: 35.774, lng: 127.166 }
  }
];

const collator = new Intl.Collator('ko-KR', {
  numeric: true,
  sensitivity: 'base'
});

const mapGeoBounds = {
  west: 126.72,
  east: 127.25,
  south: 35.71,
  north: 35.99
};

const DEFAULT_KAKAO_MAPS_APP_KEY = '13eca9e7bcd70daffbc728ddce4553dc';
const MISSION_START_DATE = new Date(2026, 4, 1);
const MISSION_WEEK_COUNT = 4;
const MISSION_PREVIEW_WEEK_INDEX = 0;
const MISSION_SEED = 'jeonju-nearby-season2-2026-05-01-v2';
const MISSION_STORAGE_KEY = 'jeonju-nearby-season2-verifications-v2';
const DAY_MS = 24 * 60 * 60 * 1000;

function addDays(baseDate, days) {
  return new Date(baseDate.getTime() + days * DAY_MS);
}

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatMissionDateRange(startDate, endDate = startDate) {
  const startText = `${startDate.getMonth() + 1}월 ${startDate.getDate()}일`;
  const endText = `${endDate.getMonth() + 1}월 ${endDate.getDate()}일`;
  return startText === endText ? startText : `${startText} - ${endText}`;
}

function createSeededRandom(seedText) {
  let seed = 0;

  for (let index = 0; index < seedText.length; index += 1) {
    seed = (seed * 31 + seedText.charCodeAt(index)) >>> 0;
  }

  return () => {
    seed += 0x6d2b79f5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function projectLatLngToPosition(latLng) {
  const x =
    ((latLng.lng - mapGeoBounds.west) / (mapGeoBounds.east - mapGeoBounds.west)) * 320;
  const y =
    ((mapGeoBounds.north - latLng.lat) / (mapGeoBounds.north - mapGeoBounds.south)) * 220;

  return [Math.max(18, Math.min(302, x)), Math.max(18, Math.min(202, y))];
}

function loadMissionVerificationState() {
  try {
    const saved = window.localStorage.getItem(MISSION_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

const missionVerificationState = loadMissionVerificationState();

function saveMissionVerificationState() {
  try {
    window.localStorage.setItem(
      MISSION_STORAGE_KEY,
      JSON.stringify(missionVerificationState)
    );
  } catch {
    // Ignore storage failures.
  }
}

function derivePlaces() {
  const sorted = [...places].sort((a, b) => collator.compare(a.name, b.name));

  sorted.forEach((place, index) => {
    place.alphaOrder = index + 1;
    place.position = projectLatLngToPosition(place.latLng);
    place.searchText = [
      place.name,
      ...(place.aliases || []),
      place.district,
      place.tagline,
      place.intro,
      place.nearbyText,
      place.nearby.join(' ')
    ]
      .join(' ')
      .toLowerCase();
  });

  Object.keys(themeMeta)
    .filter((themeKey) => themeKey !== 'all')
    .forEach((themeKey) => {
      const themePlaces = sorted.filter((place) => place.theme === themeKey);
      themePlaces.forEach((place, index) => {
        place.themeOrder = index + 1;
        place.themeCount = themePlaces.length;
      });
    });

  return sorted;
}

const allPlaces = derivePlaces();

function buildMissionSchedule() {
  const shuffled = [...allPlaces];
  const random = createSeededRandom(MISSION_SEED);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  const weekCount = MISSION_WEEK_COUNT;
  const baseCount = Math.floor(shuffled.length / weekCount);
  const remainder = shuffled.length % weekCount;
  const schedule = [];
  let cursor = 0;

  for (let weekIndex = 0; weekIndex < weekCount; weekIndex += 1) {
    const count = baseCount + (weekIndex < remainder ? 1 : 0);
    const weekPlaces = shuffled.slice(cursor, cursor + count);
    const startDate = addDays(MISSION_START_DATE, weekIndex * 7);
    const endDate = addDays(startDate, 6);

    schedule.push({
      weekIndex,
      weekNumber: weekIndex + 1,
      startDate,
      endDate,
      places: weekPlaces
    });

    cursor += count;
  }

  return schedule;
}

const missionSchedule = buildMissionSchedule();

function buildMissionPlaceLookup(schedule) {
  const lookup = new Map();

  schedule.forEach((week) => {
    week.places.forEach((place) => {
      lookup.set(place.name, {
        weekIndex: week.weekIndex,
        weekNumber: week.weekNumber,
        startDate: week.startDate,
        endDate: week.endDate
      });
    });
  });

  return lookup;
}

const missionPlaceLookup = buildMissionPlaceLookup(missionSchedule);

function isMissionWeekReleased(weekIndex, today = new Date()) {
  if (weekIndex === MISSION_PREVIEW_WEEK_INDEX) {
    return true;
  }

  const currentDate = normalizeDate(today);
  const missionWeek = missionSchedule[weekIndex];

  return Boolean(missionWeek && currentDate >= missionWeek.startDate);
}

function getMissionWindowInfo(today = new Date()) {
  const currentDate = normalizeDate(today);

  if (currentDate < MISSION_START_DATE) {
    return {
      phase: 'preview',
      currentWeekIndex: MISSION_PREVIEW_WEEK_INDEX
    };
  }

  const elapsedDays = Math.floor((currentDate - MISSION_START_DATE) / DAY_MS);
  const rawWeekIndex = Math.floor(elapsedDays / 7);

  if (rawWeekIndex >= missionSchedule.length) {
    return {
      phase: 'after',
      currentWeekIndex: missionSchedule.length - 1
    };
  }

  return {
    phase: 'active',
    currentWeekIndex: rawWeekIndex
  };
}

function getCurrentMissionPlaces(today = new Date()) {
  const { currentWeekIndex } = getMissionWindowInfo(today);
  return missionSchedule[currentWeekIndex]?.places || [];
}

function getPlaceMissionInfo(place, today = new Date()) {
  const meta = missionPlaceLookup.get(place.name);

  if (!meta) {
    return null;
  }

  const { phase, currentWeekIndex } = getMissionWindowInfo(today);
  const released = isMissionWeekReleased(meta.weekIndex, today);
  const preview = phase === 'preview' && meta.weekIndex === MISSION_PREVIEW_WEEK_INDEX;
  const current = phase === 'active' && meta.weekIndex === currentWeekIndex;
  const verified = Boolean(missionVerificationState[place.name]);
  const statusKey = verified
    ? 'verified'
    : preview
      ? 'current'
      : current
        ? 'current'
        : released
          ? 'released'
          : 'upcoming';
  const statusLabel = verified
    ? '인증 완료'
    : preview
      ? '선공개'
      : current
        ? '이번 주'
        : released
          ? '공개 완료'
          : `${meta.weekNumber}주차 예정`;

  return {
    ...meta,
    phase,
    preview,
    current,
    released,
    upcoming: !released,
    verified,
    statusKey,
    statusLabel,
    dateRangeText: formatMissionDateRange(meta.startDate, meta.endDate)
  };
}

const state = {
  theme: 'all',
  search: '',
  selected: allPlaces[0]?.name || ''
};

const elements = {
  statCurrent: document.getElementById('statCurrent'),
  themeTabs: document.getElementById('themeTabs'),
  searchInput: document.getElementById('searchInput'),
  filteredCount: document.getElementById('filteredCount'),
  placeList: document.getElementById('placeList'),
  detailPanel: document.querySelector('.detail-panel'),
  detailThemeLabel: document.getElementById('detailThemeLabel'),
  detailTitle: document.getElementById('detailTitle'),
  detailSubtitle: document.getElementById('detailSubtitle'),
  detailThemeBadge: document.getElementById('detailThemeBadge'),
  detailOrder: document.getElementById('detailOrder'),
  detailHero: document.getElementById('detailHero'),
  detailPhoto: document.getElementById('detailPhoto'),
  detailHeroTitle: document.getElementById('detailHeroTitle'),
  detailHeroText: document.getElementById('detailHeroText'),
  detailDistrict: document.getElementById('detailDistrict'),
  detailAddress: document.getElementById('detailAddress'),
  detailTheme: document.getElementById('detailTheme'),
  detailMood: document.getElementById('detailMood'),
  detailIntro: document.getElementById('detailIntro'),
  nearbyList: document.getElementById('nearbyList'),
  detailNearbyText: document.getElementById('detailNearbyText'),
  detailCourse: document.getElementById('detailCourse'),
  missionBoardTitle: document.getElementById('missionBoardTitle'),
  missionBoardText: document.getElementById('missionBoardText'),
  missionCurrentRange: document.getElementById('missionCurrentRange'),
  missionCurrentList: document.getElementById('missionCurrentList'),
  missionWeekGrid: document.getElementById('missionWeekGrid'),
  missionTitle: document.getElementById('missionTitle'),
  missionStatus: document.getElementById('missionStatus'),
  missionDescription: document.getElementById('missionDescription'),
  missionScheduleText: document.getElementById('missionScheduleText'),
  missionProofText: document.getElementById('missionProofText'),
  missionVerifyButton: document.getElementById('missionVerifyButton'),
  routeTitle: document.getElementById('routeTitle'),
  routeChip: document.getElementById('routeChip'),
  routeMap: document.getElementById('routeMap'),
  routeStops: document.getElementById('routeStops')
};

function getThemePlaces(themeKey) {
  return themeKey === 'all'
    ? allPlaces
    : allPlaces.filter((place) => place.theme === themeKey);
}

function getFilteredPlaces() {
  const keyword = state.search.trim().toLowerCase();

  return allPlaces.filter((place) => {
    const matchesTheme = state.theme === 'all' || place.theme === state.theme;
    const matchesSearch = !keyword || place.searchText.includes(keyword);
    return matchesTheme && matchesSearch;
  });
}

function ensureSelectedPlace(list) {
  if (!list.length) {
    state.selected = '';
    return null;
  }

  const current = list.find((place) => place.name === state.selected);
  if (current) {
    return current;
  }

  state.selected = list[0].name;
  return list[0];
}

function findPlaceByName(name) {
  return allPlaces.find(
    (place) => place.name === name || (place.aliases || []).includes(name)
  );
}

function setThemeColors(themeKey) {
  const meta = themeMeta[themeKey] || themeMeta.all;
  document.documentElement.style.setProperty('--theme-main', meta.color);
  document.documentElement.style.setProperty('--theme-deep', meta.deep);
  document.documentElement.style.setProperty('--theme-soft', meta.soft);
}

function focusDetailOnMobile() {
  if (!elements.detailPanel || !window.matchMedia('(max-width: 1240px)').matches) {
    return;
  }

  elements.detailPanel.classList.add('mobile-focus');
  window.setTimeout(() => {
    elements.detailPanel.classList.remove('mobile-focus');
  }, 1600);

  window.requestAnimationFrame(() => {
    elements.detailPanel.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

function shortenPlaceLabel(name) {
  return name.length <= 9 ? name : `${name.slice(0, 9)}…`;
}

function buildMapPlaces(selectedPlace = null) {
  if (!selectedPlace) {
    return [];
  }

  const mapPlaces = [];
  const pushPlace = (target, label) => {
    if (!target || mapPlaces.some((item) => item.name === target.name)) {
      return;
    }

    mapPlaces.push({
      ...target,
      flowLabel: label
    });
  };

  pushPlace(selectedPlace, '현재');
  (selectedPlace.nearby || [])
    .map((name) => findPlaceByName(name))
    .forEach((target) => pushPlace(target, '주변 볼거리'));

  return mapPlaces;
}

function buildRouteStops(place) {
  return buildMapPlaces(place).map((item) => ({
    label: item.flowLabel,
    name: item.name,
    district: item.district,
    tagline: item.tagline,
    imageUrl: item.imageUrl
  }));
}

function createAerialMap(place, mapPlaces = []) {
  const markers = mapPlaces
    .map((item) => {
      const [x, y] = item.position;
      const label = shortenPlaceLabel(item.name);
      const width = Math.max(72, label.length * 10 + 18);
      const alignRight = x > 182;
      const labelX = alignRight ? -width - 14 : 14;
      const labelRectX = alignRight ? -width : 0;
      const labelTextX = alignRight ? -(width / 2) : width / 2;
      const showLabel = item.flowLabel === '현재';

      return `
        <g class="aerial-point${item.flowLabel === '현재' ? ' current' : ''}" transform="translate(${x} ${y})">
          <circle class="point-halo" r="${item.flowLabel === '현재' ? 18 : 12}"></circle>
          <path class="point-pin" d="M0 -12 C6.6 -12 12 -6.6 12 0 C12 8.8 0 20 0 20 C0 20 -12 8.8 -12 0 C-12 -6.6 -6.6 -12 0 -12 Z"></path>
          <circle class="point-core" r="${item.flowLabel === '현재' ? 4.8 : 3.8}"></circle>
          ${
            showLabel
              ? `
                <g class="point-label" transform="translate(${labelX} -38)">
                  <rect x="${labelRectX}" y="0" width="${width}" height="26" rx="13"></rect>
                  <text x="${labelTextX}" y="17">${label}</text>
                </g>
              `
              : ''
          }
        </g>
      `;
    })
    .join('');

  const focusCard = place
    ? `
      <g class="aerial-focus-card" transform="translate(18 16)">
        <rect x="0" y="0" width="150" height="46" rx="16"></rect>
        <text class="focus-kicker" x="16" y="18">전주·인근 항공 오버뷰</text>
        <text class="focus-name" x="16" y="34">${shortenPlaceLabel(place.name)}</text>
      </g>
    `
    : '';

  return `
    <svg class="aerial-svg" viewBox="0 0 320 220" aria-hidden="true" role="img">
      <defs>
        <linearGradient id="aerialBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#587261"></stop>
          <stop offset="34%" stop-color="#7b8f69"></stop>
          <stop offset="66%" stop-color="#617f7b"></stop>
          <stop offset="100%" stop-color="#49625b"></stop>
        </linearGradient>
        <filter id="aerialSoft">
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
        </filter>
      </defs>
      <rect class="aerial-base" x="0" y="0" width="320" height="220" rx="26"></rect>
      <g class="aerial-terrain" filter="url(#aerialSoft)">
        <ellipse cx="74" cy="72" rx="72" ry="48"></ellipse>
        <ellipse cx="238" cy="62" rx="70" ry="38"></ellipse>
        <ellipse cx="92" cy="176" rx="86" ry="36"></ellipse>
        <ellipse cx="262" cy="162" rx="92" ry="42"></ellipse>
      </g>
      <path class="aerial-river" d="M10 170 C36 156, 74 164, 112 150 S176 114, 214 126 S284 168, 314 154"></path>
      <path class="aerial-water-shadow" d="M10 176 C36 162, 74 170, 112 156 S176 120, 214 132 S284 174, 314 160"></path>
      <g class="aerial-roads">
        <path d="M18 38 C78 44, 114 62, 176 58 S264 36, 302 44"></path>
        <path d="M54 18 C70 52, 86 88, 106 126 S136 184, 154 206"></path>
        <path d="M132 18 C140 44, 150 70, 168 100 S194 162, 214 200"></path>
        <path d="M226 18 C230 42, 238 70, 254 100 S282 154, 300 188"></path>
        <path d="M18 122 C60 114, 94 108, 134 110 S224 118, 302 108"></path>
      </g>
      <g class="aerial-blocks">
        <rect x="34" y="42" width="30" height="18" rx="5"></rect>
        <rect x="74" y="48" width="40" height="20" rx="5"></rect>
        <rect x="128" y="38" width="46" height="22" rx="5"></rect>
        <rect x="194" y="44" width="44" height="20" rx="5"></rect>
        <rect x="246" y="46" width="36" height="18" rx="5"></rect>
        <rect x="32" y="92" width="34" height="22" rx="5"></rect>
        <rect x="78" y="88" width="42" height="24" rx="5"></rect>
        <rect x="132" y="84" width="56" height="26" rx="6"></rect>
        <rect x="204" y="84" width="50" height="24" rx="6"></rect>
        <rect x="264" y="88" width="26" height="20" rx="5"></rect>
        <rect x="34" y="142" width="40" height="22" rx="6"></rect>
        <rect x="92" y="136" width="48" height="24" rx="6"></rect>
        <rect x="156" y="142" width="46" height="22" rx="6"></rect>
        <rect x="220" y="138" width="54" height="26" rx="6"></rect>
      </g>
      ${focusCard}
      ${markers}
    </svg>
  `;
}

const kakaoMapState = {
  loadPromise: null,
  renderToken: 0,
  map: null,
  markers: [],
  infoWindows: []
};

const addressState = {
  requestToken: 0,
  cache: new Map()
};

function getKakaoMapsAppKey() {
  return window.KAKAO_MAPS_APP_KEY || DEFAULT_KAKAO_MAPS_APP_KEY || '';
}

function loadKakaoMapsApi() {
  if (window.kakao?.maps?.load) {
    return Promise.resolve(window.kakao.maps);
  }

  if (kakaoMapState.loadPromise) {
    return kakaoMapState.loadPromise;
  }

  const appKey = getKakaoMapsAppKey();

  if (!appKey) {
    return Promise.reject(new Error('KAKAO_MAPS_APP_KEY_MISSING'));
  }

  kakaoMapState.loadPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById('kakaoMapsApiScript');

    const finish = () => {
      window.kakao.maps.load(() => resolve(window.kakao.maps));
    };

    if (existingScript) {
      existingScript.addEventListener('load', finish, { once: true });
      existingScript.addEventListener('error', () => reject(new Error('KAKAO_MAPS_SCRIPT_ERROR')), {
        once: true
      });
      return;
    }

    const script = document.createElement('script');
    script.id = 'kakaoMapsApiScript';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(appKey)}&autoload=false&libraries=services`;
    script.async = true;
    script.defer = true;
    script.onload = finish;
    script.onerror = () => reject(new Error('KAKAO_MAPS_SCRIPT_ERROR'));
    document.head.appendChild(script);
  });

  return kakaoMapState.loadPromise;
}

function clearKakaoMapObjects() {
  kakaoMapState.markers.forEach((marker) => marker.setMap(null));
  kakaoMapState.infoWindows.forEach((windowRef) => windowRef.close());
  kakaoMapState.markers = [];
  kakaoMapState.infoWindows = [];
  kakaoMapState.map = null;
}

function getFallbackAddress(place) {
  return place?.district ? `${place.district} 일대` : '-';
}

function resolveAddressText(result) {
  const primary = result?.road_address?.address_name?.trim();
  if (primary) {
    return primary;
  }

  const secondary = result?.address?.address_name?.trim();
  if (secondary) {
    return secondary;
  }

  return '';
}

function resolvePlaceAddress(place) {
  if (!place) {
    return Promise.resolve('-');
  }

  if (addressState.cache.has(place.name)) {
    return Promise.resolve(addressState.cache.get(place.name));
  }

  if (!place.latLng) {
    const fallback = getFallbackAddress(place);
    addressState.cache.set(place.name, fallback);
    return Promise.resolve(fallback);
  }

  return loadKakaoMapsApi()
    .then(() => {
      if (!window.kakao?.maps?.services?.Geocoder) {
        throw new Error('KAKAO_GEOCODER_UNAVAILABLE');
      }

      const geocoder = new kakao.maps.services.Geocoder();

      return new Promise((resolve, reject) => {
        geocoder.coord2Address(place.latLng.lng, place.latLng.lat, (result, status) => {
          if (status !== kakao.maps.services.Status.OK || !result?.length) {
            reject(new Error('KAKAO_GEOCODER_FAILED'));
            return;
          }

          resolve(resolveAddressText(result[0]));
        });
      });
    })
    .then((addressText) => {
      const resolved = addressText || getFallbackAddress(place);
      addressState.cache.set(place.name, resolved);
      return resolved;
    })
    .catch(() => {
      const fallback = getFallbackAddress(place);
      addressState.cache.set(place.name, fallback);
      return fallback;
    });
}

function renderDetailAddress(place) {
  if (!elements.detailAddress) {
    return;
  }

  if (!place) {
    elements.detailAddress.textContent = '-';
    return;
  }

  const requestToken = ++addressState.requestToken;
  elements.detailAddress.textContent = '주소 확인 중';

  resolvePlaceAddress(place).then((addressText) => {
    if (requestToken !== addressState.requestToken) {
      return;
    }

    elements.detailAddress.textContent = addressText || getFallbackAddress(place);
  });
}

function createMapPinSvg(fill, innerFill) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" viewBox="0 0 26 34">
      <path fill="${fill}" d="M13 0C5.82 0 0 5.82 0 13c0 9.12 11.31 19.54 11.79 19.97a1.76 1.76 0 0 0 2.42 0C14.69 32.54 26 22.12 26 13 26 5.82 20.18 0 13 0z"/>
      <circle cx="13" cy="13" r="5.5" fill="${innerFill}"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createMapMarkerImage(isCurrent, color) {
  return new kakao.maps.MarkerImage(
    createMapPinSvg(isCurrent ? '#ff8c42' : color, isCurrent ? '#fff4e8' : '#ffffff'),
    new kakao.maps.Size(26, 34),
    {
      offset: new kakao.maps.Point(13, 32)
    }
  );
}

function createInfoWindowContent(item) {
  return `
    <div class="kakao-info-window">
      <strong>${item.name}</strong>
      <span>${item.flowLabel || item.district}</span>
    </div>
  `;
}

function renderKakaoMap(place, mapPlaces) {
  const renderToken = ++kakaoMapState.renderToken;

  if (!getKakaoMapsAppKey()) {
    elements.routeMap.innerHTML = `
      <div class="kakao-map-shell is-fallback">
        ${createAerialMap(place, mapPlaces)}
        <div class="kakao-map-status">카카오 지도 키가 없어서 항공 오버뷰만 표시합니다.</div>
      </div>
    `;
    return;
  }

  if (!place || !mapPlaces.length) {
    elements.routeMap.innerHTML = `
      <div class="kakao-map-shell is-fallback">
        ${createAerialMap(place, mapPlaces)}
        <div class="kakao-map-status">장소를 선택하면 주변 볼거리 지도가 표시됩니다.</div>
      </div>
    `;
    return;
  }

  elements.routeMap.innerHTML = `
    <div class="kakao-map-shell">
      <div class="kakao-map-canvas" id="kakaoMapCanvas"></div>
      <div class="kakao-map-status" id="kakaoMapStatus">카카오 하이브리드 지도를 불러오는 중입니다.</div>
    </div>
  `;

  loadKakaoMapsApi()
    .then(() => {
      if (renderToken !== kakaoMapState.renderToken) {
        return;
      }

      const canvas = document.getElementById('kakaoMapCanvas');
      if (!canvas) {
        return;
      }

      clearKakaoMapObjects();

      const center = place.latLng;
      const map = new kakao.maps.Map(canvas, {
        center: new kakao.maps.LatLng(center.lat, center.lng),
        level: 6
      });

      map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      map.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

      const bounds = new kakao.maps.LatLngBounds();

      mapPlaces.forEach((item) => {
        const position = new kakao.maps.LatLng(item.latLng.lat, item.latLng.lng);
        const marker = new kakao.maps.Marker({
          map,
          position,
          title: item.flowLabel ? `${item.name} · ${item.flowLabel}` : item.name,
          image: createMapMarkerImage(
            item.flowLabel === '현재',
            themeMeta[item.theme]?.color || themeMeta.all.color
          )
        });
        const infoWindow = new kakao.maps.InfoWindow({
          content: createInfoWindowContent(item)
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          kakaoMapState.infoWindows.forEach((windowRef) => windowRef.close());
          infoWindow.open(map, marker);
        });

        if (item.flowLabel === '현재') {
          infoWindow.open(map, marker);
        }

        kakaoMapState.markers.push(marker);
        kakaoMapState.infoWindows.push(infoWindow);
        bounds.extend(position);
      });

      if (mapPlaces.length > 1) {
        map.setBounds(bounds);
      }

      kakaoMapState.map = map;
      const status = document.getElementById('kakaoMapStatus');
      if (status) {
        status.remove();
      }
    })
    .catch(() => {
      if (renderToken !== kakaoMapState.renderToken) {
        return;
      }

      elements.routeMap.innerHTML = `
        <div class="kakao-map-shell is-fallback">
          ${createAerialMap(place, mapPlaces)}
          <div class="kakao-map-status">지도를 불러오지 못해 항공 오버뷰로 대체했습니다.</div>
        </div>
      `;
    });
}

function renderHeroPhoto(place) {
  if (!place || !place.imageUrl) {
    elements.detailPhoto.classList.add('is-hidden');
    elements.detailPhoto.removeAttribute('src');
    elements.detailPhoto.alt = '';
    return;
  }

  elements.detailPhoto.src = place.imageUrl;
  elements.detailPhoto.alt = `${place.name} 대표 이미지`;
  elements.detailPhoto.classList.remove('is-hidden');
}

function renderThemeTabs() {
  elements.themeTabs.innerHTML = Object.keys(themeMeta)
    .map((themeKey) => {
      const count =
        themeKey === 'all'
          ? allPlaces.length
          : allPlaces.filter((place) => place.theme === themeKey).length;

      return `
        <button
          type="button"
          class="theme-tab${state.theme === themeKey ? ' active' : ''}"
          data-theme="${themeKey}"
          aria-pressed="${state.theme === themeKey ? 'true' : 'false'}"
        >
          <span class="theme-tab-label">${themeMeta[themeKey].label}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join('');
}

function renderMissionBoard() {
  const today = new Date();
  const { phase, currentWeekIndex } = getMissionWindowInfo(today);
  const activeWeek = missionSchedule[currentWeekIndex] || missionSchedule.at(-1);

  if (!activeWeek) {
    return;
  }

  if (phase === 'preview') {
    elements.missionBoardTitle.textContent = '1주차 미션이 선공개된 상태입니다';
    elements.missionBoardText.textContent =
      `총 ${missionSchedule.length}주 운영으로 구성했고, 1주차는 지금 바로 공개했습니다. 2주차부터 4주차는 각 공개 시작일에 자동으로 열립니다.`;
    elements.missionCurrentRange.textContent = `1주차 선공개 · ${formatMissionDateRange(activeWeek.startDate, activeWeek.endDate)}`;
  } else if (phase === 'after') {
    elements.missionBoardTitle.textContent = '전체 4주차 미션 공개가 완료되었습니다';
    elements.missionBoardText.textContent =
      '모든 주차 미션이 공개 완료된 상태입니다. 이미 공개된 장소를 다시 방문해 인증하거나 놓친 장소를 이어서 수행할 수 있습니다.';
    elements.missionCurrentRange.textContent = `전체 공개 완료 · 총 ${missionSchedule.length}주차 운영`;
  } else {
    elements.missionBoardTitle.textContent = `${activeWeek.weekNumber}주차 미션이 공개되었습니다`;
    elements.missionBoardText.textContent =
      '이번 주에 공개된 장소를 방문해 현장 인증을 완료해 보세요. 이전 공개 주차 장소도 계속 인증할 수 있습니다.';
    elements.missionCurrentRange.textContent = `${activeWeek.weekNumber}주차 진행 중 · ${formatMissionDateRange(activeWeek.startDate, activeWeek.endDate)}`;
  }

  elements.missionCurrentList.innerHTML = activeWeek.places
    .map(
      (place) =>
        `<button type="button" class="mission-place-chip is-button" data-mission-place="${place.name}">${place.name}</button>`
    )
    .join('');

  elements.missionWeekGrid.innerHTML = missionSchedule
    .map((week) => {
      const isReleased = phase === 'after' || isMissionWeekReleased(week.weekIndex, today);
      const isCurrent =
        phase === 'preview'
          ? week.weekIndex === MISSION_PREVIEW_WEEK_INDEX
          : phase === 'active' && week.weekIndex === currentWeekIndex;
      const isUpcoming = !isReleased;
      const badgeClass = isCurrent ? 'is-current' : isUpcoming ? 'is-upcoming' : 'is-released';
      const cardClass = isCurrent ? 'is-current' : isUpcoming ? 'is-upcoming' : 'is-complete';
      const badgeText = isCurrent
        ? phase === 'preview'
          ? '선공개'
          : '이번 주'
        : isUpcoming
          ? '공개 예정'
          : '공개 완료';
      const note = isCurrent
        ? phase === 'preview'
          ? '1주차는 시작 전이라도 장소를 먼저 볼 수 있습니다.'
          : '이번 주 현장 방문 인증이 가능한 장소입니다.'
        : isUpcoming
          ? '해당 주차 시작일이 되면 자동으로 장소명이 공개됩니다.'
          : '이미 공개된 주차입니다. 계속 인증할 수 있습니다.';
      const placeMarkup = isUpcoming
        ? `<span class="mission-place-chip">비공개 ${week.places.length}곳</span>`
        : week.places
            .map(
              (place) =>
                `<button type="button" class="mission-place-chip is-button" data-mission-place="${place.name}">${place.name}</button>`
            )
            .join('');

      return `
        <article class="mission-week-card ${cardClass}">
          <div class="mission-week-head">
            <strong>${week.weekNumber}주차</strong>
            <span class="mission-week-badge ${badgeClass}">${badgeText}</span>
          </div>
          <p class="mission-week-date">${formatMissionDateRange(week.startDate, week.endDate)}</p>
          <div class="mission-week-places">${placeMarkup}</div>
          <p class="mission-week-note">${note}</p>
        </article>
      `;
    })
    .join('');
}

function renderMissionDetail(place) {
  const missionInfo = getPlaceMissionInfo(place);

  if (!missionInfo) {
    return;
  }

  elements.missionTitle.textContent = `${missionInfo.weekNumber}주차 공개 미션`;
  elements.missionStatus.textContent = missionInfo.statusLabel;
  elements.missionStatus.className = `mission-status-badge is-${missionInfo.statusKey}`;
  elements.missionScheduleText.textContent = `공개 기간 · ${missionInfo.dateRangeText}`;

  if (missionInfo.verified) {
    elements.missionProofText.textContent = '인증 상태 · 완료';
  } else if (missionInfo.upcoming) {
    elements.missionProofText.textContent = '인증 상태 · 공개 후 가능';
  } else if (missionInfo.preview) {
    elements.missionProofText.textContent = '인증 상태 · 5월 1일부터 가능';
  } else {
    elements.missionProofText.textContent = '인증 상태 · 미완료';
  }

  if (missionInfo.upcoming) {
    elements.missionDescription.textContent =
      `${place.name}은 ${missionInfo.weekNumber}주차(${missionInfo.dateRangeText})에 공개되는 랜덤 미션 장소입니다. 지금은 미리 살펴볼 수 없고, 해당 주차 시작일에 자동으로 공개됩니다.`;
    elements.missionVerifyButton.disabled = true;
    elements.missionVerifyButton.textContent = `${missionInfo.weekNumber}주차 공개 후 인증 가능`;
    return;
  }

  if (missionInfo.preview) {
    elements.missionDescription.textContent =
      `${place.name}은 1주차 선공개 장소입니다. 장소는 지금 바로 확인할 수 있지만, 현장 인증은 2026년 5월 1일부터 시작됩니다.`;
    elements.missionVerifyButton.disabled = true;
    elements.missionVerifyButton.textContent = '5월 1일부터 인증 가능';
    return;
  }

  if (missionInfo.current) {
    elements.missionDescription.textContent =
      `${place.name}은 이번 주에 공개된 미션 장소입니다. 현장 방문 후 인증 완료 버튼을 눌러 이번 주 챌린지를 기록해 보세요.`;
  } else {
    elements.missionDescription.textContent =
      `${place.name}은 이미 공개가 완료된 미션 장소입니다. 공개 주차가 지난 뒤에도 방문 인증 기록은 계속 남길 수 있습니다.`;
  }

  elements.missionVerifyButton.disabled = false;
  elements.missionVerifyButton.textContent = missionInfo.verified
    ? '인증 완료 취소'
    : '현장 인증 완료';
}

function renderMissionEmptyState() {
  elements.missionTitle.textContent = '주차별 공개 미션 준비 중';
  elements.missionStatus.textContent = '장소 선택 전';
  elements.missionStatus.className = 'mission-status-badge';
  elements.missionDescription.textContent =
    '장소를 선택하면 공개 주차와 현재 인증 가능 여부를 함께 확인할 수 있습니다.';
  elements.missionScheduleText.textContent = '공개 일정 · 장소 선택 후 표시';
  elements.missionProofText.textContent = '인증 상태 · 장소 선택 후 표시';
  elements.missionVerifyButton.disabled = true;
  elements.missionVerifyButton.textContent = '장소 선택 후 인증 가능';
}

function renderPlaceList(list) {
  if (!list.length) {
    elements.placeList.innerHTML = `
      <article class="place-item active">
        <div class="place-item-top">
          <span class="place-index">!</span>
          <span class="place-title-group">
            <strong>검색 결과가 없습니다</strong>
            <span class="place-subline">다른 키워드나 테마를 선택해 주세요.</span>
          </span>
        </div>
      </article>
    `;
    return;
  }

  elements.placeList.innerHTML = list
    .map((place) => {
      const missionInfo = getPlaceMissionInfo(place);

      return `
        <button
          type="button"
          class="place-item${state.selected === place.name ? ' active' : ''}"
          data-name="${place.name}"
        >
          <span class="place-item-top">
            <span class="place-index">${String(place.alphaOrder).padStart(2, '0')}</span>
            <span class="place-title-group">
              <strong>${place.name}</strong>
              <span class="place-subline">${themeMeta[place.theme].label} · ${place.district}</span>
            </span>
            <span class="place-mission-tag is-${missionInfo.statusKey}">${missionInfo.statusLabel}</span>
            <span class="place-arrow">›</span>
          </span>
          <span class="place-summary">${place.tagline}</span>
        </button>
      `;
    })
    .join('');
}

function enhanceRouteStopImages() {
  elements.routeStops.querySelectorAll('.route-stop-image').forEach((image) => {
    image.onerror = () => {
      image.closest('.route-stop')?.classList.add('is-fallback');
      image.removeAttribute('src');
      image.alt = '';
      image.onerror = null;
    };
  });
}

function renderRouteStops(place) {
  elements.routeStops.innerHTML = buildRouteStops(place)
    .map(
      (stop) => `
        <article class="route-stop${stop.label === '현재' ? ' active' : ''}">
          <div class="route-stop-media">
            ${
              stop.imageUrl
                ? `<img class="route-stop-image" src="${stop.imageUrl}" alt="${stop.name} 대표 이미지" loading="lazy" decoding="async" referrerpolicy="no-referrer" />`
                : ''
            }
            <span class="route-stop-label">${stop.label}</span>
          </div>
          <div class="route-stop-body">
            <strong>${stop.name}</strong>
            <span class="route-stop-district">${stop.district}</span>
            <p>${stop.tagline}</p>
          </div>
        </article>
      `
    )
    .join('');

  enhanceRouteStopImages();
}

function renderEmptyDetail() {
  setThemeColors(state.theme);
  elements.detailThemeLabel.textContent = '전주·인근 시즌';
  elements.detailTitle.textContent = '장소를 선택해 주세요';
  elements.detailSubtitle.textContent = '목록에서 장소를 고르면 장소 소개, 주변 볼거리, 주차 미션 정보가 함께 열립니다.';
  elements.detailThemeBadge.textContent = '선택 대기';
  elements.detailOrder.textContent = '0 / 0';
  elements.detailHero.className = 'detail-hero scene-park';
  renderHeroPhoto(null);
  elements.detailHeroTitle.textContent = '전주와 인근 지역 숨은 보물 31선';
  elements.detailHeroText.textContent =
    '전주, 완주, 익산, 김제·군산 경계까지 확장된 장소를 따라 생활권과 수변, 기록과 쉼을 함께 읽는 시즌형 챌린지입니다.';
  addressState.requestToken += 1;
  elements.detailDistrict.textContent = '-';
  elements.detailAddress.textContent = '-';
  elements.detailTheme.textContent = '-';
  elements.detailMood.textContent = themeMeta.all.mood;
  elements.detailIntro.textContent = '장소를 선택하면 상세 소개가 표시됩니다.';
  elements.nearbyList.innerHTML = '';
  elements.detailNearbyText.textContent = '주변 볼거리 설명은 장소를 선택하면 표시됩니다.';
  elements.detailCourse.textContent = '추천 코스 설명은 장소를 선택하면 표시됩니다.';
  renderMissionEmptyState();
  elements.routeTitle.textContent = '카카오 하이브리드 주변 볼거리 지도';
  elements.routeChip.textContent = '장소 선택 대기';
  renderKakaoMap(null, []);
  elements.routeStops.innerHTML = '';
}

function renderDetail(place) {
  const theme = themeMeta[place.theme];
  setThemeColors(place.theme);

  elements.detailThemeLabel.textContent = theme.label;
  elements.detailTitle.textContent = place.name;
  elements.detailSubtitle.textContent = `${place.district} · ${place.tagline}`;
  elements.detailThemeBadge.textContent = theme.label;
  elements.detailOrder.textContent = `${place.themeOrder} / ${place.themeCount}`;
  elements.detailHero.className = `detail-hero ${place.scene}`;
  renderHeroPhoto(place);
  elements.detailHeroTitle.textContent = place.name;
  elements.detailHeroText.textContent = place.tagline;
  elements.detailDistrict.textContent = place.district;
  renderDetailAddress(place);
  elements.detailTheme.textContent = theme.label;
  elements.detailMood.textContent = theme.mood;
  elements.detailIntro.textContent = place.intro;
  elements.nearbyList.innerHTML = place.nearby
    .map((item) => `<span class="nearby-chip">${item}</span>`)
    .join('');
  elements.detailNearbyText.textContent = place.nearbyText;
  elements.detailCourse.textContent = place.course;
  renderMissionDetail(place);

  const mapPlaces = buildMapPlaces(place);
  elements.routeTitle.textContent = '카카오 하이브리드 주변 볼거리 지도';
  elements.routeChip.textContent = `선택 장소 강조 · 주변 볼거리 ${Math.max(mapPlaces.length - 1, 0)}곳`;
  renderKakaoMap(place, mapPlaces);
  renderRouteStops(place);
}

function syncHash() {
  if (!state.selected) {
    return;
  }

  const encoded = encodeURIComponent(state.selected);
  if (location.hash.slice(1) !== encoded) {
    location.hash = encoded;
  }
}

function restoreFromHash() {
  const raw = location.hash.replace(/^#/, '');
  if (!raw) {
    return;
  }

  const decoded = decodeURIComponent(raw);
  const found = findPlaceByName(decoded);
  if (found) {
    state.selected = found.name;
  }
}

function selectMissionPlace(name) {
  const found = findPlaceByName(name);
  if (!found) {
    return;
  }

  state.selected = found.name;
  render();
  focusDetailOnMobile();
}

function render() {
  const filtered = getFilteredPlaces();
  const selectedPlace = ensureSelectedPlace(filtered);

  if (elements.statCurrent) {
    elements.statCurrent.textContent = `${allPlaces.length}곳`;
  }

  elements.filteredCount.textContent = `${filtered.length}곳`;
  renderMissionBoard();
  renderThemeTabs();
  renderPlaceList(filtered);

  if (!selectedPlace) {
    renderEmptyDetail();
    return;
  }

  renderDetail(selectedPlace);
  syncHash();
}

elements.themeTabs.addEventListener('click', (event) => {
  const button = event.target.closest('[data-theme]');
  if (!button) {
    return;
  }

  state.theme = button.dataset.theme;
  render();
});

elements.placeList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-name]');
  if (!button) {
    return;
  }

  state.selected = button.dataset.name;
  render();
  focusDetailOnMobile();
});

elements.searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  render();
});

elements.missionCurrentList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-mission-place]');
  if (!button) {
    return;
  }

  selectMissionPlace(button.dataset.missionPlace);
});

elements.missionWeekGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-mission-place]');
  if (!button) {
    return;
  }

  selectMissionPlace(button.dataset.missionPlace);
});

elements.missionVerifyButton.addEventListener('click', () => {
  const place = findPlaceByName(state.selected);
  if (!place) {
    return;
  }

  const missionInfo = getPlaceMissionInfo(place);
  if (!missionInfo || missionInfo.upcoming || missionInfo.preview) {
    return;
  }

  if (missionInfo.verified) {
    delete missionVerificationState[place.name];
  } else {
    missionVerificationState[place.name] = {
      verifiedAt: new Date().toISOString()
    };
  }

  saveMissionVerificationState();
  render();
});

window.addEventListener('hashchange', () => {
  restoreFromHash();
  render();
});

restoreFromHash();
render();
