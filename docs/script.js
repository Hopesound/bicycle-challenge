const themeMeta = {
  all: {
    label: '전체 보기',
    color: '#2f8f57',
    deep: '#1f5d3a',
    soft: '#e5f5ea',
    mood: '전주의 숨은 보물 36곳을 가나다순으로 살펴보는 아카이브'
  },
  history: {
    label: '역사·기억',
    color: '#2d76c8',
    deep: '#1d4d85',
    soft: '#e7f0fd',
    mood: '한옥, 성문, 기념 공간을 따라 전주의 시간을 읽는 코스'
  },
  nature: {
    label: '호수·숲',
    color: '#3f9961',
    deep: '#27613c',
    soft: '#e5f4ea',
    mood: '공원, 저수지, 숲길을 이어 천천히 회복하는 라이딩'
  },
  art: {
    label: '예술·기록',
    color: '#d48825',
    deep: '#8e5713',
    soft: '#fbf1df',
    mood: '예술공간과 기록 거점을 잇는 감상형 도시 탐방'
  },
  local: {
    label: '생활·미식',
    color: '#ca6842',
    deep: '#83432a',
    soft: '#f8e8e1',
    mood: '시장, 식당, 생활 거점을 묶어 현지 감각을 만나는 코스'
  }
};

const places = [
  {
    name: '경기전',
    theme: 'history',
    district: '완산구 풍남동',
    scene: 'scene-hanok',
    tagline: '왕조의 기억이 남은 전주 도심의 상징 공간',
    intro:
      '태조 이성계의 어진을 모신 경기전은 전주의 역사 서사를 가장 직관적으로 보여주는 장소다. 담장과 전각, 넓은 마당이 차분하게 이어져 자전거를 잠시 세우고 도시의 시간감을 정리하기 좋다.',
    nearby: ['풍남문', '전라감영', '전동성당'],
    nearbyText:
      '주변에는 풍남문과 전라감영, 전동성당, 한옥마을 골목이 가까이 이어져 역사권역을 한 번에 묶어 보기 좋다.',
    course:
      '한옥마을 외곽 진입로에서 경기전-풍남문-전라감영으로 연결하면 초행자도 이해하기 쉬운 역사 입문 코스가 된다.'
  },
  {
    name: '건지산 편백나무숲',
    theme: 'nature',
    district: '덕진구 금암동',
    scene: 'scene-forest',
    tagline: '도심 가까이서 만나는 향기로운 숲길 쉼터',
    intro:
      '건지산 편백나무숲은 짧은 오르막 뒤에 상쾌한 숲 공기를 보상처럼 내어주는 장소다. 도심 가까이에 있으면서도 숲 특유의 정적이 살아 있어 휴식형 라이딩의 전환점으로 잘 어울린다.',
    nearby: ['전북대학교 자연사박물관', '덕진공원', '동물원'],
    nearbyText:
      '근처에는 전북대학교 권역, 덕진공원, 전주동물원 방향으로 이어지는 녹지축이 있어 반나절 생태 코스로 확장하기 좋다.',
    course:
      '덕진공원에서 출발해 건지산 숲길을 찍고 동물원이나 자연사박물관으로 내려오는 흐름은 오르막과 휴식의 균형이 좋다.'
  },
  {
    name: '기지제',
    theme: 'nature',
    district: '덕진구 장동',
    scene: 'scene-lake',
    tagline: '들판과 수면이 함께 열리는 서쪽 수변 풍경',
    intro:
      '기지제는 전주 서부의 넓은 하늘과 잔잔한 수면을 동시에 느낄 수 있는 저수지 권역이다. 복잡한 시가지를 잠시 벗어나 시야가 확 트이는 구간을 만들고 싶을 때 좋은 목적지가 된다.',
    nearby: ['전주월드컵경기장', '전주수목원', '만성지구 산책로'],
    nearbyText:
      '월드컵경기장과 전주수목원, 만성지구 수변 산책축이 가까워 가족형 라이딩과 사진 촬영 동선을 함께 짜기 쉽다.',
    course:
      '서부 신도심에서 기지제까지 완만하게 접근한 뒤 수목원과 월드컵경기장을 원형으로 묶으면 넓고 쉬운 코스가 완성된다.'
  },
  {
    name: '남고사',
    theme: 'history',
    district: '완산구 동완산동',
    scene: 'scene-temple',
    tagline: '도심 가장자리에서 만나는 고요한 산사',
    intro:
      '남고사는 완산 일대의 숲과 마을 풍경을 함께 느낄 수 있는 사찰 공간이다. 번화한 구도심과 가깝지만 경내에 들어서면 속도가 자연스럽게 느려져 라이딩의 리듬을 정돈해 준다.',
    nearby: ['완산공원', '다가공원(호국 영렬탑)', '전주3.1운동 발상지'],
    nearbyText:
      '완산공원과 다가공원, 구도심 역사 거점이 가까워 산과 시가지를 잇는 입체적인 탐방 구성이 가능하다.',
    course:
      '완산공원 능선 아래를 따라 남고사에 들른 뒤 다가공원과 구도심으로 내려오면 조용한 역사 산책 코스로 이어진다.'
  },
  {
    name: '남부시장',
    theme: 'local',
    district: '완산구 전동',
    scene: 'scene-market',
    tagline: '전주의 생활 감각이 가장 생생하게 모이는 시장',
    intro:
      '남부시장은 음식, 생활용품, 오래된 상점의 결이 한데 겹치는 전주의 대표 생활 현장이다. 자전거 이용자에게는 한옥마을과 구도심 사이에서 쉬어 가기 좋은 현지형 허브가 된다.',
    nearby: ['풍남문', '전라감영', '청년몰'],
    nearbyText:
      '풍남문과 전라감영, 청년몰, 한옥마을 남쪽 골목이 가까워 먹거리와 역사 탐방을 한 번에 묶기 편하다.',
    course:
      '풍남문에서 남부시장으로 진입해 점심이나 간식을 해결한 뒤 전라감영과 한옥마을로 이동하는 흐름이 가장 직관적이다.'
  },
  {
    name: '다가공원(호국 영렬탑)',
    theme: 'history',
    district: '완산구 다가동',
    scene: 'scene-park',
    tagline: '도심 기억을 올려다보게 만드는 언덕 공원',
    intro:
      '다가공원은 구도심을 내려다보는 위치 덕분에 쉬는 장소이면서 동시에 추모와 기억의 무게를 느끼게 하는 거점이다. 호국 영렬탑 주변은 짧은 체류에도 공간의 성격이 또렷하게 남는다.',
    nearby: ['전북지역독립운동추념탑', '전주3.1운동 발상지', '남고사'],
    nearbyText:
      '구도심 독립운동 사적과 완산 권역 산책로가 이어져 기억의 테마를 따라 조용히 이동하기 좋다.',
    course:
      '전주3.1운동 발상지에서 다가공원으로 올라 추념탑과 완산 자락을 잇는 코스는 짧지만 메시지가 분명하다.'
  },
  {
    name: '덕진공원',
    theme: 'nature',
    district: '덕진구 덕진동',
    scene: 'scene-lake',
    tagline: '연못과 정자가 어우러진 전주의 대표 수변 명소',
    intro:
      '덕진공원은 전주에서 가장 친숙한 수변 풍경을 보여주는 공간이다. 평지 위주로 동선이 편안하고 호수 둘레의 풍경 변화가 분명해 초보 라이더와 방문객 모두 접근하기 좋다.',
    nearby: ['동물원', '건지산 편백나무숲', '전북대학교 자연사박물관'],
    nearbyText:
      '동물원과 건지산, 전북대학교 권역이 인접해 있어 생태 체험과 캠퍼스 풍경을 함께 묶기 좋다.',
    course:
      '덕진공원에서 호수 둘레를 천천히 돈 뒤 동물원이나 건지산 쪽으로 이어 가면 난도가 낮고 만족감이 높은 코스가 된다.'
  },
  {
    name: '돈까스 현',
    theme: 'local',
    district: '덕진구 반월동',
    scene: 'scene-food',
    tagline: '라이딩 뒤 허기를 편하게 채우는 동네 식당 포인트',
    intro:
      '돈까스 현은 반월동 생활권에서 편하게 들를 수 있는 미식 포인트다. 한 끼 식사와 짧은 휴식을 해결하기 좋아 북서부 자전거 코스의 종착지나 재출발 지점으로 잘 맞는다.',
    nearby: ['전주월드컵경기장', '전주수목원', '기지제'],
    nearbyText:
      '반월동과 가까운 전주월드컵경기장, 전주수목원, 기지제를 함께 묶으면 넓은 도로와 녹지 풍경을 따라 여유롭게 둘러보는 코스로 연결하기 좋다.',
    course:
      '전주월드컵경기장과 전주수목원을 지나 기지제 쪽 풍경을 둘러본 뒤 돈까스 현에서 식사를 마무리하면 반월동 생활권 추천 코스로 안내하기 좋다.'
  },
  {
    name: '동물원',
    theme: 'nature',
    district: '덕진구 소리로',
    scene: 'scene-park',
    tagline: '가족형 라이딩과 체험형 방문이 잘 맞는 넓은 공간',
    intro:
      '전주동물원은 넓은 보행권과 주변 녹지 덕분에 자전거 코스와 함께 안내하기 좋은 가족형 거점이다. 목적지가 분명하고 체류 시간이 길어 초보 이용자에게도 설명하기 쉽다.',
    nearby: ['덕진공원', '건지산 편백나무숲', '전북대학교 자연사박물관'],
    nearbyText:
      '덕진공원과 건지산, 자연사박물관을 묶으면 하루 코스가 자연스럽게 완성된다.',
    course:
      '덕진공원에서 출발해 동물원까지 편하게 접근하고 건지산이나 캠퍼스 권역으로 이어 가면 체험형 코스로 구성이 좋다.'
  },
  {
    name: '바이크박스',
    theme: 'local',
    district: '덕진구 인후동',
    scene: 'scene-bike',
    tagline: '라이더의 정비와 재출발을 돕는 실전 거점',
    intro:
      '바이크박스는 관광지와는 다른 방식으로 전주의 자전거 문화를 보여주는 장소다. 코스 소개집 안에서는 실제 라이딩을 유지하게 만드는 정비·보급 거점으로 설명할 가치가 크다.',
    nearby: ['아중저수지', '덕진공원', '자전거도로 연결축'],
    nearbyText:
      '아중저수지와 덕진권 진입로가 이어져 있어 정비 후 곧바로 수변 코스로 넘어가기 좋다.',
    course:
      '도심권에서 장거리 코스를 시작하기 전 바이크박스를 경유하면 정비와 휴식을 포함한 실용형 동선으로 소개할 수 있다.'
  },
  {
    name: '삼천동막걸리골목',
    theme: 'local',
    district: '완산구 삼천동',
    scene: 'scene-food',
    tagline: '전주의 밤 분위기와 식문화를 한 번에 만나는 골목',
    intro:
      '삼천동막걸리골목은 전주 미식 문화의 현장성을 보여 주는 대표 공간이다. 식당 간판과 골목의 활기가 살아 있어 낮 라이딩 뒤 저녁 추천 코스로 소개하기에 인상이 분명하다.',
    nearby: ['효자공원묘지', '완산공원', '삼천 산책로'],
    nearbyText:
      '삼천 산책축과 완산 남부 권역이 가까워 낮에는 자연 코스, 저녁에는 미식 코스로 확장할 수 있다.',
    course:
      '완산 남부를 한 바퀴 돈 뒤 삼천동막걸리골목으로 마무리하면 전주의 하루를 체감하는 저녁형 코스가 된다.'
  },
  {
    name: '서학동 예술마을',
    theme: 'art',
    district: '완산구 서학동',
    scene: 'scene-street',
    tagline: '골목 자체가 전시와 산책로가 되는 창작 마을',
    intro:
      '서학동 예술마을은 주택가와 작업실, 작은 전시 공간이 뒤섞인 동네형 예술 권역이다. 속도를 줄일수록 더 많은 장면이 보여 자전거 여행의 밀도를 높여 준다.',
    nearby: ['오목대', '이목대', '자만벽화마을'],
    nearbyText:
      '오목대와 이목대, 자만벽화마을이 이어져 있어 예술과 전망, 골목 산책을 함께 묶기 좋다.',
    course:
      '한옥마을 외곽에서 오목대-서학동 예술마을-자만벽화마을로 이어 가면 짧고 강한 감상형 코스가 완성된다.'
  },
  {
    name: '아중저수지',
    theme: 'nature',
    district: '덕진구 우아동',
    scene: 'scene-lake',
    tagline: '도심 동쪽에서 여유 있게 돌기 좋은 수변 코스',
    intro:
      '아중저수지는 완만한 수변 풍경과 접근성이 좋아 초보자에게 추천하기 쉬운 장소다. 물가를 따라 이동하며 경관 변화를 꾸준히 느낄 수 있어 짧은 시간에도 만족도가 높다.',
    nearby: ['자만벽화마을', '오목대', '전주천 자전거길'],
    nearbyText:
      '전주천 축과 한옥마을 동쪽 권역이 연결되어 있어 수변 라이딩 뒤 골목 탐방으로 이어 가기 좋다.',
    course:
      '아중저수지 둘레를 기본 코스로 잡고 자만벽화마을이나 오목대까지 더하면 전주의 동쪽 풍경을 입체적으로 소개할 수 있다.'
  },
  {
    name: '아태무형문화유산전당',
    theme: 'art',
    district: '완산구 서노송동',
    scene: 'scene-modern',
    tagline: '무형문화와 현대 전시가 만나는 문화 플랫폼',
    intro:
      '아태무형문화유산전당은 전통을 현대적인 전시 언어로 풀어내는 문화 공간이다. 전주의 역사 이미지를 오늘의 문화 감각으로 확장해 보여 주기 때문에 테마 전환 지점으로 적합하다.',
    nearby: ['전주시민기록관', '전라감영', '전주한옥마을'],
    nearbyText:
      '기록관과 감영, 한옥마을이 가까워 역사와 현대 문화 전시를 한 흐름 안에 묶을 수 있다.',
    course:
      '전라감영에서 유산전당으로 넘어오면 전통 권역에서 현대 문화 권역으로 자연스럽게 전환되는 도심 코스가 된다.'
  },
  {
    name: '오목대',
    theme: 'history',
    district: '완산구 교동',
    scene: 'scene-hanok',
    tagline: '한옥지붕과 전주 시가를 함께 조망하는 전망 포인트',
    intro:
      '오목대는 전주 한옥마을을 위에서 읽어 볼 수 있는 상징적인 조망 공간이다. 짧은 오르막이 있지만 도착 후 얻는 전망이 분명해 사진과 해설 포인트로 활용하기 좋다.',
    nearby: ['이목대', '자만벽화마을', '서학동 예술마을'],
    nearbyText:
      '이목대와 자만벽화마을, 서학동 예술마을이 가까워 걸으며 또는 천천히 자전거를 끌며 둘러보는 복합 동선이 가능하다.',
    course:
      '한옥마을 외곽에서 오목대로 올라 전망을 본 뒤 이목대와 서학동 권역으로 이어 가면 짧고 인상적인 언덕 코스가 된다.'
  },
  {
    name: '완산공원',
    theme: 'nature',
    district: '완산구 동완산동',
    scene: 'scene-park',
    tagline: '도심 남쪽을 감싸는 언덕형 공원과 산책 숲',
    intro:
      '완산공원은 전주 도심 가까이에서 숲길과 전망을 함께 얻을 수 있는 대표 공원이다. 짧은 경사와 평탄 구간이 섞여 있어 가볍게 운동하는 라이딩과 잘 어울린다.',
    nearby: ['남고사', '치명자산', '다가공원(호국 영렬탑)'],
    nearbyText:
      '남고사와 치명자산, 다가공원 권역이 가까워 자연과 기억의 장소를 한 번에 묶을 수 있다.',
    course:
      '완산공원을 중심으로 남고사와 치명자산을 연결하면 남부권 숲길과 역사성을 함께 체감하는 코스가 된다.'
  },
  {
    name: '우석대학교 부속 전주한방병원',
    theme: 'local',
    district: '완산구 중화산동',
    scene: 'scene-health',
    aliases: ['우석대학교 부석 전주한방병원'],
    tagline: '건강과 회복의 관점으로 전주를 읽게 하는 생활 거점',
    intro:
      '우석대학교 부속 전주한방병원은 관광 명소와는 다른 결의 장소지만, 지역 생활권과 건강한 회복이라는 이야기를 더해 준다. 무리하지 않는 라이딩과 휴식의 관점을 설명하기 좋다.',
    nearby: ['효자동 생활권', '전주시립도서관꽃심', '삼천동막걸리골목'],
    nearbyText:
      '중화산동과 효자동 생활축이 가깝고 도서관, 식당가, 주거지 풍경이 이어져 지역 생활성을 보여 주기 좋다.',
    course:
      '강도가 낮은 생활권 코스를 구성할 때 병원과 도서관, 카페 거리, 식당을 연결하면 회복형 추천 코스로 안내하기 쉽다.'
  },
  {
    name: '이목대',
    theme: 'history',
    district: '완산구 교동',
    scene: 'scene-hanok',
    tagline: '오목대와 짝을 이루는 한옥마을 동쪽의 조망 지점',
    intro:
      '이목대는 오목대보다 한층 차분한 분위기로 한옥마을 동쪽의 풍경을 바라보게 해 준다. 이동 거리는 짧지만 이야기와 전망을 함께 담기 좋아 소규모 코스의 포인트가 된다.',
    nearby: ['오목대', '자만벽화마을', '서학동 예술마을'],
    nearbyText:
      '오목대와 자만벽화마을, 서학동 예술마을이 밀집해 있어 언덕과 골목, 예술 공간을 촘촘하게 연결할 수 있다.',
    course:
      '오목대와 이목대를 함께 보고 자만벽화마을로 내려오면 전망에서 골목으로 이어지는 전환이 분명한 코스가 된다.'
  },
  {
    name: '자만벽화마을',
    theme: 'art',
    district: '완산구 교동',
    scene: 'scene-street',
    tagline: '벽화와 골목 풍경이 겹쳐지는 언덕 마을 산책 코스',
    intro:
      '자만벽화마을은 언덕 골목의 생활감과 벽화가 함께 남아 있는 전주형 마을 풍경이다. 빠르게 지나가기보다 천천히 둘러보며 장면을 찾는 방식이 잘 어울린다.',
    nearby: ['오목대', '이목대', '아중저수지'],
    nearbyText:
      '오목대와 이목대, 전주천과 아중 방향 동선이 이어져 있어 전망과 수변을 묶은 코스 설계가 쉽다.',
    course:
      '오목대 전망 후 자만벽화마을 골목을 천천히 지나 아중저수지 방향으로 넘어가면 이야기와 풍경이 자연스럽게 이어진다.'
  },
  {
    name: '전라감영',
    theme: 'history',
    district: '완산구 중앙동',
    scene: 'scene-gate',
    tagline: '전주 도심 한복판에서 만나는 행정과 권위의 흔적',
    intro:
      '전라감영은 전주 구도심의 흐름 속에서 행정 중심지의 기억을 읽게 해 주는 장소다. 최근 정비된 공간감 덕분에 경기전과는 또 다른 방식으로 전주의 역사 서사를 보여 준다.',
    nearby: ['경기전', '남부시장', '풍남문'],
    nearbyText:
      '경기전과 남부시장, 풍남문이 모두 가까워 전통 관광지와 생활권을 함께 엮는 중간 거점으로 좋다.',
    course:
      '경기전과 풍남문을 본 뒤 전라감영으로 넘어오면 역사 설명의 축이 자연스럽게 확장된다.'
  },
  {
    name: '전북대학교 자연사박물관',
    theme: 'nature',
    district: '덕진구 금암동',
    scene: 'scene-campus',
    tagline: '캠퍼스 안에서 생태와 과학의 시선을 더하는 장소',
    intro:
      '전북대학교 자연사박물관은 자연을 단지 풍경으로 보는 데서 한 걸음 더 나아가 관찰과 이해의 관점을 더해 준다. 덕진 생태 코스 안에서 학습형 방문지로 소개하기 좋다.',
    nearby: ['건지산 편백나무숲', '덕진공원', '동물원'],
    nearbyText:
      '캠퍼스 녹지와 건지산, 덕진공원이 가까워 생태와 교육, 휴식을 한 흐름으로 묶을 수 있다.',
    course:
      '덕진공원과 건지산을 돈 뒤 자연사박물관에 들르면 풍경 감상 코스에 학습 요소를 더하는 구성이 된다.'
  },
  {
    name: '전북지역독립운동추념탑',
    theme: 'history',
    district: '완산구 다가동',
    scene: 'scene-park',
    tagline: '도시의 현재 위에서 독립운동의 기억을 되새기는 지점',
    intro:
      '전북지역독립운동추념탑은 화려한 관광지보다 기억의 밀도를 우선하게 만드는 공간이다. 구도심을 바라보며 멈춰 서기 좋은 장소라 코스 안에 의미 있는 쉼표를 만들어 준다.',
    nearby: ['다가공원(호국 영렬탑)', '전주3.1운동 발상지', '남고사'],
    nearbyText:
      '다가공원과 전주3.1운동 발상지, 완산 자락이 가까워 근대 기억의 흐름을 따라 차분히 이동할 수 있다.',
    course:
      '발상지에서 시작해 추념탑까지 오르는 짧은 코스는 전주의 독립운동 서사를 압축적으로 보여 준다.'
  },
  {
    name: '전북환경운동연합',
    theme: 'local',
    district: '완산구 서신동',
    scene: 'scene-archive',
    tagline: '도시 환경과 생활을 다른 각도로 읽게 하는 시민 거점',
    intro:
      '전북환경운동연합은 관광 명소라기보다 전주라는 도시가 어떻게 살아가고 환경을 고민하는지를 보여 주는 생활형 장소다. 숨은 보물 아카이브에 관점의 폭을 넓혀 주는 역할을 한다.',
    nearby: ['서신동 생활권', '삼천천 자전거길', '전주의료생활협동조합'],
    nearbyText:
      '시민단체와 주거지, 자전거길이 가까워 생활 속 전주를 설명하는 주변 맥락을 붙이기 좋다.',
    course:
      '서신동 생활권과 자전거길을 연결하는 낮은 강도의 코스 안에 넣으면 지속가능한 도시라는 메시지를 전할 수 있다.'
  },
  {
    name: '전주3.1운동 발상지',
    theme: 'history',
    district: '완산구 중앙동',
    scene: 'scene-archive',
    tagline: '전주의 근대 시민사를 직접 떠올리게 하는 장소',
    intro:
      '전주3.1운동 발상지는 화려한 조형보다 사건의 의미로 기억되는 공간이다. 짧게 들르더라도 도시의 현재와 과거를 함께 생각하게 만들어 역사 코스의 밀도를 높여 준다.',
    nearby: ['전라감영', '다가공원(호국 영렬탑)', '전북지역독립운동추념탑'],
    nearbyText:
      '전라감영과 다가공원 권역이 가깝고 구도심 골목을 따라 이동하기 좋아 기억 테마 코스를 설계하기 쉽다.',
    course:
      '전라감영에서 발상지로 이동한 뒤 다가공원과 추념탑까지 잇는 코스는 근대 기억의 흐름을 명확히 보여 준다.'
  },
  {
    name: '전주공동체라디오 전주FM',
    theme: 'art',
    district: '완산구 중앙동',
    scene: 'scene-radio',
    tagline: '도시의 목소리와 지역 이야기가 쌓이는 방송 거점',
    intro:
      '전주공동체라디오 전주FM은 전주의 삶을 목소리와 기록으로 남기는 장소다. 전시나 건축과는 다른 방식으로 지역 문화를 보여 주기 때문에 아카이브 구성에 독특한 결을 더해 준다.',
    nearby: ['전주시민기록관', '전라감영', '남부시장'],
    nearbyText:
      '기록관과 감영, 남부시장 권역이 가까워 생활과 기록, 역사라는 세 축을 함께 설명하기 좋다.',
    course:
      '중앙동 기록 공간들을 묶는 도심 코스 안에 전주FM을 포함하면 소리와 기억을 함께 소개하는 테마가 완성된다.'
  },
  {
    name: '전주국립박물관',
    theme: 'history',
    district: '완산구 쑥고개로',
    scene: 'scene-modern',
    tagline: '전북의 역사와 문화 층위를 한눈에 읽는 배움의 공간',
    intro:
      '전주국립박물관은 개별 명소를 보기 전에 지역 전체의 역사 맥락을 잡아 주는 장소다. 실내 전시를 통해 전주와 전북의 배경지식을 얻은 뒤 야외 코스로 나가면 이해의 깊이가 달라진다.',
    nearby: ['치명자산', '완산공원', '하얀양옥집(도지사관사)'],
    nearbyText:
      '치명자산과 완산 남부 권역이 가까워 박물관 관람 후 자연·역사 공간으로 이어 가기 좋다.',
    course:
      '박물관에서 전시를 본 뒤 치명자산과 완산공원으로 연결하면 실내 학습과 야외 체험이 균형을 이룬다.'
  },
  {
    name: '전주의료생활협동조합',
    theme: 'local',
    district: '완산구 서신동',
    scene: 'scene-health',
    tagline: '지역의 돌봄과 일상을 보여 주는 생활 기반 공간',
    intro:
      '전주의료생활협동조합은 전주 시민의 생활과 돌봄 체계를 보여 주는 장소다. 관광 중심의 이야기에서 한 걸음 벗어나 실제 지역 공동체의 결을 보여 주는 데 의미가 있다.',
    nearby: ['전북환경운동연합', '서신동 생활권', '삼천천 자전거길'],
    nearbyText:
      '서신동 주거지와 시민단체, 자전거길이 가까워 생활 도시 전주를 설명하는 콘텐츠와 잘 맞는다.',
    course:
      '서신동 생활권을 천천히 도는 생활형 코스에 포함하면 건강, 돌봄, 지역 공동체라는 주제를 자연스럽게 담을 수 있다.'
  },
  {
    name: '전주시립도서관꽃심',
    theme: 'art',
    district: '완산구 효자동',
    scene: 'scene-modern',
    tagline: '머무는 독서와 조용한 감상이 가능한 현대적 문화 공간',
    intro:
      '전주시립도서관꽃심은 화려한 관광지보다 오래 머무는 문화 경험을 제안하는 장소다. 내부 공간의 밀도와 주변 생활권의 분위기가 잘 어우러져 차분한 도시 탐방 코스에 적합하다.',
    nearby: ['효자동 카페거리', '우석대학교 부속 전주한방병원', '완산공원'],
    nearbyText:
      '효자동 생활권과 식당, 카페, 공공 문화 공간이 가까워 여유로운 체류형 코스를 설계하기 좋다.',
    course:
      '효자동 남부 생활권을 돌며 꽃심도서관에서 한 템포 쉬어 가는 코스는 조용한 추천 코스로 안내하기 좋다.'
  },
  {
    name: '전주시민기록관',
    theme: 'art',
    district: '완산구 중앙동',
    scene: 'scene-archive',
    tagline: '전주 사람들의 기억이 아카이브로 쌓이는 장소',
    intro:
      '전주시민기록관은 도시를 거대한 관광지 대신 살아 있는 기록의 집합으로 보게 만든다. 시민의 일상과 사건, 물건의 이야기가 축적되어 전주의 층위를 읽는 데 도움을 준다.',
    nearby: ['전주공동체라디오 전주FM', '전라감영', '아태무형문화유산전당'],
    nearbyText:
      '중앙동과 서노송동 문화 권역이 맞닿아 있어 기록과 전시, 역사 공간을 한 흐름으로 연결할 수 있다.',
    course:
      '감영과 기록관, 전주FM, 유산전당을 잇는 도심 코스는 전주의 이야기를 듣고 읽는 탐방 코스로 적합하다.'
  },
  {
    name: '전주수목원',
    theme: 'nature',
    district: '덕진구 번영로',
    scene: 'scene-forest',
    tagline: '서쪽 도시 경계에서 만나는 넓은 녹색 정원',
    intro:
      '전주수목원은 계절 변화를 가장 편안하게 체감할 수 있는 녹지 공간이다. 수목과 정원 동선이 정돈되어 있어 길 찾기가 쉽고, 휴식형 라이딩의 목적지로 안내하기 좋다.',
    nearby: ['전주월드컵경기장', '기지제', '만성지구'],
    nearbyText:
      '월드컵경기장과 기지제, 만성지구가 가까워 서부권을 넓게 순환하는 평지 코스를 짜기 쉽다.',
    course:
      '기지제와 수목원, 월드컵경기장을 한 바퀴로 묶으면 초보자도 부담 없는 서부 녹지 코스가 된다.'
  },
  {
    name: '전주월드컵경기장',
    theme: 'nature',
    district: '덕진구 반월동',
    scene: 'scene-modern',
    tagline: '넓은 공간감으로 서부 라이딩의 기준점이 되는 장소',
    intro:
      '전주월드컵경기장은 스포츠 시설 이상의 의미로, 서부권의 넓은 도로와 개방감을 체감하게 하는 기준점이다. 비교적 시야가 트여 있어 단체 코스 안내에도 활용하기 쉽다.',
    nearby: ['전주수목원', '기지제', '만성지구 수변공간'],
    nearbyText:
      '수목원과 기지제, 만성지구가 가까워 서부 신도심 라이딩을 넉넉하게 묶을 수 있다.',
    course:
      '월드컵경기장을 기준으로 수목원과 기지제를 연결하면 초보자용 평지 코스와 가족 코스 모두 설명하기 좋다.'
  },
  {
    name: '치명자산',
    theme: 'history',
    district: '완산구 중인동',
    scene: 'scene-church',
    tagline: '신앙과 기억, 조망이 함께 남는 남부 언덕',
    intro:
      '치명자산은 종교적 기억과 전주 남부의 풍경이 겹쳐지는 장소다. 도시를 내려다보는 조망과 묵직한 서사가 함께 있어 조용한 분위기의 역사 코스에 깊이를 더한다.',
    nearby: ['전주국립박물관', '완산공원', '하얀양옥집(도지사관사)'],
    nearbyText:
      '전주국립박물관과 완산공원, 남부 주거지가 가까워 실내 학습과 야외 탐방을 함께 연결하기 좋다.',
    course:
      '박물관을 본 뒤 치명자산으로 올라 완산공원 쪽으로 내려오면 남부 역사·자연 코스로 완성도가 높다.'
  },
  {
    name: '팔복예술공장',
    theme: 'art',
    district: '덕진구 팔복동',
    scene: 'scene-modern',
    tagline: '산업 공간을 예술로 전환한 전주의 재생 거점',
    intro:
      '팔복예술공장은 공장 건축의 결을 남기면서 예술 공간으로 다시 태어난 장소다. 전주의 전통 이미지와는 다른 얼굴을 보여 주기 때문에 구성집 안에서 시각적 전환점 역할을 한다.',
    nearby: ['전주천 산업권 산책로', '서부권 자전거길', '전주시민기록관'],
    nearbyText:
      '팔복동 산업권과 서부 자전거길, 도심 문화 거점이 이어져 도시 재생과 이동 이야기를 함께 담을 수 있다.',
    course:
      '팔복예술공장을 목적지로 두고 서부 자전거길을 따라 접근하면 산업 재생과 현대 예술을 체감하는 코스가 된다.'
  },
  {
    name: '풍남문',
    theme: 'history',
    district: '완산구 전동',
    scene: 'scene-gate',
    tagline: '전주 구도심의 관문 역할을 하는 상징적 성문',
    intro:
      '풍남문은 전주 구도심으로 진입할 때 가장 분명한 장면을 만들어 주는 장소다. 한눈에 알아볼 수 있는 건축 형태 덕분에 코스의 시작점이나 만남 장소로 소개하기 좋다.',
    nearby: ['경기전', '남부시장', '전동성당'],
    nearbyText:
      '경기전과 남부시장, 전동성당이 바로 이어져 있어 전주의 대표 역사·생활 장면을 짧은 거리 안에서 경험할 수 있다.',
    course:
      '풍남문에서 출발해 경기전과 남부시장, 전라감영으로 연결하면 가장 이해하기 쉬운 구도심 역사 코스가 된다.'
  },
  {
    name: '하얀양옥집(도지사관사)',
    theme: 'history',
    district: '완산구 서완산동',
    scene: 'scene-modern',
    tagline: '근대 건축의 결을 통해 시대 변화를 읽는 공간',
    intro:
      '하얀양옥집은 전주의 전통 이미지와 대비되는 근대 양옥 건축의 인상을 보여 준다. 담백한 외관과 역사적 배경이 함께 남아 있어 시대 전환을 설명하기에 적합한 장소다.',
    nearby: ['치명자산', '전주국립박물관', '완산공원'],
    nearbyText:
      '치명자산과 박물관, 완산 남부 공원권이 가까워 근대 건축과 자연, 역사 해설을 한 흐름으로 묶을 수 있다.',
    course:
      '박물관에서 하얀양옥집을 거쳐 치명자산으로 이동하면 남부권 근대·역사 코스로 자연스럽게 이어진다.'
  },
  {
    name: '효자공원묘지',
    theme: 'nature',
    district: '완산구 효자동',
    scene: 'scene-park',
    tagline: '조용한 언덕과 넓은 시야가 남는 남쪽의 쉼표',
    intro:
      '효자공원묘지는 추모 공간의 성격을 지니면서도 남부권 언덕 풍경을 조용히 체감하게 하는 장소다. 북적이는 관광 동선과 거리가 있어 사색형 코스로 소개하기 좋다.',
    nearby: ['삼천동막걸리골목', '완산공원', '효자동 생활권'],
    nearbyText:
      '삼천동과 효자동 생활권, 완산공원이 이어져 낮에는 조용한 산책, 저녁에는 생활권 미식 코스로 전환할 수 있다.',
    course:
      '효자동 권역을 천천히 순환하다 효자공원묘지에서 잠시 머문 뒤 삼천동으로 내려오면 완급이 있는 남부 코스가 된다.'
  }
];

const collator = new Intl.Collator('ko-KR', {
  numeric: true,
  sensitivity: 'base'
});

const routeShapes = {
  history: [
    [24, 176],
    [62, 144],
    [88, 116],
    [126, 90],
    [168, 68],
    [210, 84],
    [250, 54],
    [284, 82]
  ],
  nature: [
    [28, 164],
    [66, 122],
    [110, 80],
    [150, 58],
    [198, 76],
    [228, 124],
    [268, 160],
    [296, 130]
  ],
  art: [
    [26, 150],
    [62, 112],
    [92, 74],
    [136, 96],
    [174, 62],
    [220, 84],
    [260, 118],
    [294, 92]
  ],
  local: [
    [24, 170],
    [74, 150],
    [110, 118],
    [154, 132],
    [194, 102],
    [232, 124],
    [268, 88],
    [294, 120]
  ]
};

const placeImages = {
  '풍남문': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/163599143544279.jpg',
  '경기전': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176352730702312.jpg',
  '남부시장': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176345145441142.jpg',
  '동물원': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/173225353559003.jpg',
  '덕진공원': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/173165947742003.jpg',
  '전주수목원': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000022/177207349358436.jpg',
  '전주국립박물관': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176094585179723.jpg',
  '완산공원': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/172351329982410.jpg',
  '전주월드컵경기장': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176345942496080.jpg',
  '기지제': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/171521521467123.jpg',
  '자만벽화마을': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176214832141895.jpg',
  '아중저수지': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/173225466963822.jpg',
  '팔복예술공장': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/175066192675612.jpg',
  '오목대': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/175317831898777.jpg',
  '이목대': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/175317831898777.jpg',
  '전라감영': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/169925393272395.jpg',
  '건지산 편백나무숲': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000022/172491260329284.jpg',
  '서학동 예술마을': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/177217586697779.jpg',
  '하얀양옥집(도지사관사)': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176465121839708.jpg',
  '치명자산': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176353381757141.jpg',
  '아태무형문화유산전당': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/172428853775507.jpg',
  '남고사': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/171516222089096.jpg',
  '삼천동막걸리골목': 'https://image.fnnews.com/resource/media/image/2020/10/20/202010201659218330_l.jpg',
  '전주공동체라디오 전주FM': 'https://contents.sixshop.com/uploadedFiles/207956/default/image_1690505965557.jpg',
  '전주시립도서관꽃심': 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/164394227638520.jpg',
  '전북대학교 자연사박물관': 'https://nhm.jbnu.ac.kr/sites/nhm/atchmnfl_mngr/imageSlide/850/temp_1533024189384100.jpg',
  '전주시민기록관': 'https://cdn.pressian.com/data/photos/cdn/20191249/art_1575251410.jpg',
  '전주3.1운동 발상지': 'https://cdn.jjan.kr/data2/content/image/2018/12/09/.cache/512/20181209238239.jpg',
  '다가공원(호국 영렬탑)': 'https://cdn.jjan.kr/data2/content/image/2025/06/16/.cache/512/20250616580272.jpg',
  '전북지역독립운동추념탑': 'https://www.domin.co.kr/news/thumbnail/201908/1259224_377673_345_v150.jpg',
  '효자공원묘지': 'https://image.fnnews.com/resource/media/image/2025/09/22/202509221411137820_l.jpg',
  '전북환경운동연합': 'https://image.thum.io/get/width/1200/crop/800/https://greenjeonbuk.org/',
  '전주의료생활협동조합': 'https://cdn.jjan.kr/data2/content/image/2004/08/11/.cache/512/20040811003590.jpg',
  '우석대학교 부속 전주한방병원': 'https://image.fnnews.com/resource/media/image/2025/02/26/202502261339217097_l.jpg',
  '바이크박스': 'https://image.thum.io/get/width/1200/crop/800/https://www.daangn.com/kr/local-profile/%EB%B0%94%EC%9D%B4%ED%81%AC%EB%B0%95%EC%8A%A4-vtfb9fam7fso/',
  '돈까스 현': 'https://d12zq4w4guyljn.cloudfront.net/750_750_20241106104058_photo1_XwBUxFtiFlIY.webp'
};

const placePositions = {
  '풍남문': [152, 148],
  '경기전': [164, 136],
  '남부시장': [144, 156],
  '동물원': [204, 74],
  '덕진공원': [176, 92],
  '전주수목원': [54, 82],
  '전주국립박물관': [92, 142],
  '완산공원': [112, 116],
  '전주월드컵경기장': [72, 64],
  '기지제': [36, 92],
  '자만벽화마을': [214, 126],
  '아중저수지': [248, 102],
  '팔복예술공장': [92, 120],
  '오목대': [188, 128],
  '이목대': [196, 120],
  '전라감영': [176, 144],
  '건지산 편백나무숲': [158, 58],
  '서학동 예술마을': [192, 164],
  '하얀양옥집(도지사관사)': [118, 146],
  '치명자산': [84, 132],
  '아태무형문화유산전당': [206, 148],
  '남고사': [118, 100],
  '삼천동막걸리골목': [86, 194],
  '전주공동체라디오 전주FM': [192, 152],
  '전주시립도서관꽃심': [108, 174],
  '전북대학교 자연사박물관': [150, 80],
  '전주시민기록관': [186, 146],
  '전주3.1운동 발상지': [168, 150],
  '다가공원(호국 영렬탑)': [154, 124],
  '전북지역독립운동추념탑': [148, 116],
  '효자공원묘지': [58, 204],
  '전북환경운동연합': [62, 158],
  '전주의료생활협동조합': [78, 164],
  '우석대학교 부속 전주한방병원': [98, 168],
  '바이크박스': [104, 160],
  '돈까스 현': [62, 70]
};

const mapGeoBounds = {
  north: 35.91,
  south: 35.74,
  west: 126.88,
  east: 127.23
};

const allPlaces = derivePlaces();

const state = {
  theme: 'all',
  search: '',
  selected: allPlaces[0]?.name || ''
};

const naverMapState = {
  loadPromise: null,
  renderToken: 0,
  map: null,
  markers: [],
  infoWindows: [],
  polyline: null
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
  detailTheme: document.getElementById('detailTheme'),
  detailMood: document.getElementById('detailMood'),
  detailIntro: document.getElementById('detailIntro'),
  nearbyList: document.getElementById('nearbyList'),
  detailNearbyText: document.getElementById('detailNearbyText'),
  detailCourse: document.getElementById('detailCourse'),
  routeTitle: document.getElementById('routeTitle'),
  routeChip: document.getElementById('routeChip'),
  routeMap: document.getElementById('routeMap'),
  routeStops: document.getElementById('routeStops')
};

function projectPositionToLatLng(position) {
  const [x, y] = position;
  const lng =
    mapGeoBounds.west + (x / 320) * (mapGeoBounds.east - mapGeoBounds.west);
  const lat =
    mapGeoBounds.north - (y / 220) * (mapGeoBounds.north - mapGeoBounds.south);

  return { lat, lng };
}

function focusDetailOnMobile() {
  if (!elements.detailPanel) {
    return;
  }

  if (!window.matchMedia('(max-width: 1240px)').matches) {
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

function derivePlaces() {
  const sorted = [...places].sort((a, b) => collator.compare(a.name, b.name));

  sorted.forEach((place, index) => {
    place.alphaOrder = index + 1;
    place.imageUrl = placeImages[place.name] || '';
    place.position = placePositions[place.name] || [160, 110];
    place.latLng = projectPositionToLatLng(place.position);
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
    .filter((key) => key !== 'all')
    .forEach((themeKey) => {
      const themePlaces = sorted.filter((place) => place.theme === themeKey);
      themePlaces.forEach((place, index) => {
        place.themeOrder = index + 1;
        place.themeCount = themePlaces.length;
      });
    });

  return sorted;
}

function getThemePlaces(themeKey) {
  if (themeKey === 'all') {
    return allPlaces;
  }

  return allPlaces.filter((place) => place.theme === themeKey);
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

  const exists = list.find((place) => place.name === state.selected);
  if (exists) {
    return exists;
  }

  state.selected = list[0].name;
  return list[0];
}

function setThemeColors(themeKey) {
  const activeTheme = themeMeta[themeKey] ? themeKey : 'all';
  const meta = themeMeta[activeTheme];

  document.documentElement.style.setProperty('--theme-main', meta.color);
  document.documentElement.style.setProperty('--theme-deep', meta.deep);
  document.documentElement.style.setProperty('--theme-soft', meta.soft);
}

function buildPolyline(points) {
  return points.map(([x, y]) => `${x},${y}`).join(' ');
}

function findPlaceByName(name) {
  return allPlaces.find((place) => {
    if (place.name === name) {
      return true;
    }

    return (place.aliases || []).includes(name);
  });
}

function shortenPlaceLabel(name) {
  const compact = name
    .replace(/\(.*?\)/g, '')
    .replace('우석대학교 부속 ', '')
    .replace('전주공동체라디오 ', '')
    .replace('전주시립도서관', '')
    .trim();

  if (compact.length <= 8) {
    return compact;
  }

  return `${compact.slice(0, 8)}…`;
}

function buildFlowPlaces(place) {
  const themePlaces = getThemePlaces(place.theme);
  const currentIndex = themePlaces.findIndex((item) => item.name === place.name);
  const flowPlaces = [];

  const pushPlace = (target, label) => {
    if (!target || flowPlaces.some((item) => item.name === target.name)) {
      return;
    }

    flowPlaces.push({
      ...target,
      flowLabel: label,
      position: target.position || placePositions[target.name] || [160, 110]
    });
  };

  pushPlace(themePlaces[currentIndex - 1], '이전');
  pushPlace(place, '현재');
  pushPlace(themePlaces[currentIndex + 1], '다음');

  place.nearby
    .map((name) => findPlaceByName(name))
    .forEach((target) => pushPlace(target, '연결'));

  if (flowPlaces.length < 3) {
    themePlaces.forEach((target) => pushPlace(target, '테마'));
  }

  return flowPlaces.slice(0, 5);
}

function createAerialMap(place, flowPlaces = []) {
  const route = flowPlaces.length > 1 ? buildPolyline(flowPlaces.map((item) => item.position)) : '';
  const markers = flowPlaces
    .map((item) => {
      const [x, y] = item.position;
      const label = shortenPlaceLabel(item.name);
      const width = Math.max(64, label.length * 9 + 18);
      const alignRight = x > 182;
      const labelX = alignRight ? -width - 14 : 14;
      const labelY = y < 68 ? 16 : -40;
      const labelRectX = alignRight ? -width : 0;
      const labelTextX = alignRight ? -(width / 2) : width / 2;

      return `
        <g class="aerial-point${item.flowLabel === '현재' ? ' current' : ''}" transform="translate(${x} ${y})">
          <circle class="point-halo" r="${item.flowLabel === '현재' ? 18 : 13}"></circle>
          <path class="point-pin" d="M0 -12 C6.6 -12 12 -6.6 12 0 C12 8.8 0 20 0 20 C0 20 -12 8.8 -12 0 C-12 -6.6 -6.6 -12 0 -12 Z"></path>
          <circle class="point-core" r="${item.flowLabel === '현재' ? 4.8 : 3.8}"></circle>
          <g class="point-label" transform="translate(${labelX} ${labelY})">
            <rect x="${labelRectX}" y="0" width="${width}" height="26" rx="13"></rect>
            <text x="${labelTextX}" y="17">${label}</text>
          </g>
        </g>
      `;
    })
    .join('');

  const focusCard = place
    ? `
        <g class="aerial-focus-card" transform="translate(18 16)">
          <rect x="0" y="0" width="116" height="44" rx="16"></rect>
          <text class="focus-kicker" x="16" y="18">전주 항공사진형 오버뷰</text>
          <text class="focus-name" x="16" y="34">${shortenPlaceLabel(place.name)}</text>
        </g>
      `
    : '';

  return `
    <svg class="aerial-svg" viewBox="0 0 320 220" aria-hidden="true" role="img">
      <defs>
        <linearGradient id="aerialBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#5f7f61"></stop>
          <stop offset="34%" stop-color="#8e9c72"></stop>
          <stop offset="66%" stop-color="#6f8774"></stop>
          <stop offset="100%" stop-color="#536a57"></stop>
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
      <path class="aerial-river" d="M18 170 C54 158, 88 166, 116 150 S172 114, 212 126 S278 166, 304 156"></path>
      <path class="aerial-water-shadow" d="M18 176 C54 164, 88 172, 116 156 S172 120, 212 132 S278 172, 304 162"></path>
      <g class="aerial-roads">
        <path d="M20 38 C78 44, 114 62, 176 58 S264 36, 300 44"></path>
        <path d="M54 18 C70 52, 86 88, 106 126 S136 184, 154 206"></path>
        <path d="M132 18 C140 44, 150 70, 168 100 S194 162, 214 200"></path>
        <path d="M226 18 C230 42, 238 70, 254 100 S282 154, 300 188"></path>
        <path d="M18 122 C60 114, 94 108, 134 110 S224 118, 300 108"></path>
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
      ${
        route
          ? `
            <polyline class="aerial-flow-base" points="${route}"></polyline>
            <polyline class="aerial-flow-main" points="${route}"></polyline>
          `
          : ''
      }
      ${focusCard}
      ${markers}
    </svg>
  `;
}

function createRouteMap(themeKey, stepIndex, totalCount) {
  const points = routeShapes[themeKey] || routeShapes.all || routeShapes.history;
  const currentIndex =
    totalCount > 1
      ? Math.round((stepIndex / Math.max(1, totalCount - 1)) * (points.length - 1))
      : 0;
  const progress = buildPolyline(points.slice(0, Math.max(currentIndex + 1, 2)));
  const route = buildPolyline(points);

  const markers = points
    .map(
      ([x, y], index) =>
        `<circle class="marker${index === currentIndex ? ' current' : ''}" cx="${x}" cy="${y}" r="${
          index === currentIndex ? 8 : 5
        }"></circle>`
    )
    .join('');

  return `
    <svg class="route-svg" viewBox="0 0 320 220" aria-hidden="true" role="img">
      <line class="road" x1="12" y1="48" x2="308" y2="48"></line>
      <line class="road" x1="26" y1="24" x2="26" y2="206"></line>
      <line class="road" x1="86" y1="18" x2="286" y2="198"></line>
      <line class="road" x1="126" y1="18" x2="108" y2="206"></line>
      <line class="road" x1="198" y1="24" x2="302" y2="180"></line>
      <rect class="water" x="188" y="128" width="82" height="44" rx="22"></rect>
      <rect class="park" x="44" y="74" width="58" height="34" rx="17"></rect>
      <rect class="park" x="226" y="34" width="44" height="26" rx="13"></rect>
      <polyline class="route-base" points="${route}"></polyline>
      <polyline class="route-progress" points="${progress}"></polyline>
      <polyline class="route-main" points="${route}"></polyline>
      ${markers}
    </svg>
  `;
}

function buildRouteStops(place) {
  return buildFlowPlaces(place).map((item) => ({
    label: item.flowLabel,
    name: item.name
  }));
}

function getNaverMapsKeyId() {
  return String(window.NAVER_MAPS_KEY_ID || '').trim();
}

function getFlowLatLng(item) {
  return item.latLng || projectPositionToLatLng(item.position || [160, 110]);
}

function createMapPinSvg(fill, innerFill) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44">
      <path fill="${fill}" d="M17 0C7.61 0 0 7.61 0 17c0 11.92 14.79 25.55 15.42 26.12a2.3 2.3 0 0 0 3.16 0C19.21 42.55 34 28.92 34 17 34 7.61 26.39 0 17 0z"/>
      <circle cx="17" cy="17" r="7.3" fill="${innerFill}"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createMapMarkerIcon(isCurrent, color) {
  const fill = isCurrent ? '#ff8c42' : color;
  const innerFill = isCurrent ? '#fff4e8' : '#ffffff';

  return {
    url: createMapPinSvg(fill, innerFill),
    size: new naver.maps.Size(34, 44),
    scaledSize: new naver.maps.Size(34, 44),
    anchor: new naver.maps.Point(17, 42)
  };
}

function createInfoWindowContent(item) {
  return `
    <div class="naver-info-window">
      <strong>${item.name}</strong>
      <span>${item.flowLabel}</span>
    </div>
  `;
}

function createNaverMapShell(statusText = '') {
  return `
    <div class="naver-map-shell">
      <div class="naver-map-canvas" id="naverMapCanvas"></div>
      ${
        statusText
          ? `<div class="naver-map-status" id="naverMapStatus">${statusText}</div>`
          : ''
      }
    </div>
  `;
}

function clearNaverMapObjects() {
  naverMapState.markers.forEach((marker) => marker.setMap(null));
  naverMapState.infoWindows.forEach((infoWindow) => infoWindow.close());

  if (naverMapState.polyline) {
    naverMapState.polyline.setMap(null);
  }

  naverMapState.markers = [];
  naverMapState.infoWindows = [];
  naverMapState.polyline = null;
}

function loadNaverMapsApi() {
  if (window.naver?.maps) {
    return Promise.resolve(window.naver.maps);
  }

  if (naverMapState.loadPromise) {
    return naverMapState.loadPromise;
  }

  const keyId = getNaverMapsKeyId();

  if (!keyId) {
    return Promise.reject(new Error('NAVER_MAPS_KEY_ID_MISSING'));
  }

  naverMapState.loadPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById('naverMapsApiScript');

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.naver.maps), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('NAVER_MAPS_SCRIPT_ERROR')), {
        once: true
      });
      return;
    }

    window.__onNaverMapsLoaded = () => {
      resolve(window.naver.maps);
      delete window.__onNaverMapsLoaded;
    };

    const script = document.createElement('script');
    script.id = 'naverMapsApiScript';
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(keyId)}&callback=__onNaverMapsLoaded`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      naverMapState.loadPromise = null;
      reject(new Error('NAVER_MAPS_SCRIPT_ERROR'));
    };
    document.head.appendChild(script);
  });

  return naverMapState.loadPromise;
}

function renderMapFallback(place, flowPlaces, reason = '') {
  elements.routeMap.innerHTML = createAerialMap(place, flowPlaces);

  if (!place) {
    return;
  }

  if (!getNaverMapsKeyId()) {
    elements.routeChip.textContent = `API 키 필요 · ${flowPlaces.length}곳`;
    return;
  }

  if (reason) {
    elements.routeChip.textContent = `지도 대체 보기 · ${flowPlaces.length}곳`;
  }
}

function renderNaverMap(place, flowPlaces) {
  const renderToken = ++naverMapState.renderToken;
  const waitingText = getNaverMapsKeyId()
    ? '네이버 항공지도를 불러오는 중입니다.'
    : 'NAVER_MAPS_KEY_ID를 넣으면 실제 항공지도가 표시됩니다.';

  if (!getNaverMapsKeyId()) {
    renderMapFallback(place, flowPlaces, 'missing-key');
    return;
  }

  elements.routeMap.innerHTML = createNaverMapShell(waitingText);

  loadNaverMapsApi()
    .then(() => {
      if (renderToken !== naverMapState.renderToken) {
        return;
      }

      const canvas = document.getElementById('naverMapCanvas');
      if (!canvas) {
        return;
      }

      clearNaverMapObjects();

      const center = place ? getFlowLatLng(place) : { lat: 35.824, lng: 127.148 };
      const map = new naver.maps.Map(canvas, {
        center: new naver.maps.LatLng(center.lat, center.lng),
        zoom: 13,
        minZoom: 11,
        mapTypeId: naver.maps.MapTypeId.HYBRID,
        logoControl: true,
        scaleControl: false,
        mapDataControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT
        }
      });

      naverMapState.map = map;

      const bounds = new naver.maps.LatLngBounds();

      flowPlaces.forEach((item) => {
        const point = getFlowLatLng(item);
        const position = new naver.maps.LatLng(point.lat, point.lng);
        const marker = new naver.maps.Marker({
          map,
          position,
          title: `${item.flowLabel} · ${item.name}`,
          icon: createMapMarkerIcon(item.flowLabel === '현재', themeMeta[place.theme].color)
        });
        const infoWindow = new naver.maps.InfoWindow({
          content: createInfoWindowContent(item),
          borderWidth: 0,
          disableAnchor: false,
          backgroundColor: 'transparent'
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          naverMapState.infoWindows.forEach((windowRef) => windowRef.close());
          infoWindow.open(map, marker);
        });

        if (item.flowLabel === '현재') {
          infoWindow.open(map, marker);
        }

        naverMapState.markers.push(marker);
        naverMapState.infoWindows.push(infoWindow);
        bounds.extend(position);
      });

      if (flowPlaces.length > 1) {
        naverMapState.polyline = new naver.maps.Polyline({
          map,
          path: flowPlaces.map((item) => {
            const point = getFlowLatLng(item);
            return new naver.maps.LatLng(point.lat, point.lng);
          }),
          strokeColor: themeMeta[place.theme].color,
          strokeOpacity: 0.85,
          strokeWeight: 5,
          strokeLineCap: 'round',
          strokeLineJoin: 'round'
        });
      }

      if (flowPlaces.length > 1) {
        map.fitBounds(bounds, {
          top: 48,
          right: 48,
          bottom: 48,
          left: 48
        });
      }

      const status = document.getElementById('naverMapStatus');
      if (status) {
        status.remove();
      }

      elements.routeChip.textContent = `실제 항공지도 · ${flowPlaces.length}곳`;
    })
    .catch(() => {
      if (renderToken !== naverMapState.renderToken) {
        return;
      }

      renderMapFallback(place, flowPlaces, 'load-error');
    });
}

function renderHeroPhoto(place) {
  if (!elements.detailPhoto) {
    return;
  }

  if (!place || !place.imageUrl) {
    elements.detailPhoto.classList.add('is-hidden');
    elements.detailPhoto.removeAttribute('src');
    elements.detailPhoto.alt = '';
    elements.detailPhoto.onerror = null;
    return;
  }

  elements.detailPhoto.onerror = () => {
    elements.detailPhoto.classList.add('is-hidden');
    elements.detailPhoto.removeAttribute('src');
    elements.detailPhoto.alt = '';
    elements.detailPhoto.onerror = null;
  };
  elements.detailPhoto.src = place.imageUrl;
  elements.detailPhoto.alt = `${place.name} 대표 이미지`;
  elements.detailPhoto.classList.remove('is-hidden');
}

function renderThemeTabs() {
  const tabs = Object.keys(themeMeta).map((themeKey) => {
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
  });

  elements.themeTabs.innerHTML = tabs.join('');
}

function renderPlaceList(list) {
  if (!list.length) {
    elements.placeList.innerHTML =
      `
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
    .map(
      (place) => `
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
            <span class="place-arrow">↗</span>
          </span>
          <span class="place-summary">${place.tagline}</span>
        </button>
      `
    )
    .join('');
}

function renderEmptyDetail() {
  setThemeColors(state.theme === 'all' ? 'all' : state.theme);
  elements.detailThemeLabel.textContent = '숨은 보물';
  elements.detailTitle.textContent = '장소를 선택해 주세요';
  elements.detailSubtitle.textContent = '검색 결과나 테마 목록에서 장소를 고르면 상세 페이지가 열립니다.';
  elements.detailThemeBadge.textContent = '선택 대기';
  elements.detailOrder.textContent = '0 / 0';
  elements.detailHero.className = 'detail-hero scene-park';
  renderHeroPhoto(null);
  elements.detailHeroTitle.textContent = '전주의 숨은 보물 36곳';
  elements.detailHeroText.textContent = '각 장소의 소개, 주변 볼거리, 추천 코스를 한 화면에서 볼 수 있도록 구성했습니다.';
  elements.detailDistrict.textContent = '-';
  elements.detailTheme.textContent = '-';
  elements.detailMood.textContent = themeMeta.all.mood;
  elements.detailIntro.textContent = '왼쪽 목록에서 장소를 선택하면 상세 소개가 표시됩니다.';
  elements.nearbyList.innerHTML = '';
  elements.detailNearbyText.textContent = '주변 권역 정보가 여기에 표시됩니다.';
  elements.detailCourse.textContent = '추천 코스 설명이 여기에 표시됩니다.';
  elements.routeTitle.textContent = '네이버 항공지도 위치 흐름';
  elements.routeChip.textContent = '장소 선택 대기';
  renderNaverMap(null, []);
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
  elements.detailTheme.textContent = `${theme.label} 테마`;
  elements.detailMood.textContent = theme.mood;
  elements.detailIntro.textContent = place.intro;
  elements.nearbyList.innerHTML = place.nearby
    .map((item) => `<span class="nearby-chip">${item}</span>`)
    .join('');
  elements.detailNearbyText.textContent = place.nearbyText;
  elements.detailCourse.textContent = place.course;
  const flowPlaces = buildFlowPlaces(place);

  elements.routeTitle.textContent = `${theme.label} 네이버 항공지도 위치 흐름`;
  elements.routeChip.textContent = getNaverMapsKeyId()
    ? `실제 항공지도 준비 중 · ${flowPlaces.length}곳`
    : `API 키 필요 · ${flowPlaces.length}곳`;
  renderNaverMap(place, flowPlaces);
  elements.routeStops.innerHTML = buildRouteStops(place)
    .map(
      (stop) => `
        <article class="route-stop${stop.label === '현재' ? ' active' : ''}">
          <strong>${stop.name}</strong>
          <span>${stop.label}</span>
        </article>
      `
    )
    .join('');
}

function syncHash() {
  if (!state.selected) {
    return;
  }

  const nextHash = encodeURIComponent(state.selected);
  if (location.hash.slice(1) !== nextHash) {
    location.hash = nextHash;
  }
}

function render() {
  const filtered = getFilteredPlaces();
  const selectedPlace = ensureSelectedPlace(filtered);

  if (elements.statCurrent) {
    elements.statCurrent.textContent = `${allPlaces.length}곳`;
  }
  elements.filteredCount.textContent = `${filtered.length}곳`;
  renderThemeTabs();
  renderPlaceList(filtered);

  if (!selectedPlace) {
    renderEmptyDetail();
    return;
  }

  renderDetail(selectedPlace);
  syncHash();
}

function restoreFromHash() {
  const raw = location.hash.replace(/^#/, '');
  if (!raw) {
    return;
  }

  const decoded = decodeURIComponent(raw);
  const found = allPlaces.find((place) => place.name === decoded);
  if (found) {
    state.selected = found.name;
  }
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

window.addEventListener('hashchange', () => {
  restoreFromHash();
  render();
});

restoreFromHash();
render();
