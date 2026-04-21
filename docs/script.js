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

const officialImages = {
  '전주시 공영자전거 꽃싱이 송천대여소': {
    imageUrl: 'https://tour.jeonju.go.kr/images/visitjj/contents/month/2405_spring/2405_jeonju_spring_23.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000023&dataSid=13494&menuCd=DOM_000000112001000000&paging=ok&startPage=2'
  },
  '추천대': {
    imageUrl: 'https://daum.jeonju.go.kr/_data/sys_webzine_list/1774311735_kpoWholnAokOvrmcnplET9i2TzIQP0QtxCvODz7sy69c1d937.jpg',
    sourceName: '전주다움',
    sourceUrl: 'https://daum.jeonju.go.kr/main/menu?do=view&gc=WEBZINE2&webzine_code=vfsgoUqiY-_69c0ef0a&wgroup_code=wdpXktqquCY69c0ca1a'
  },
  '덕진공원': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/173165947742003.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&contentsSid=1&dataSid=9772'
  },
  '전북대 자연사박물관': {
    imageUrl: 'https://daum.jeonju.go.kr/_data/sys_webzine_list/1758528078_C1mj1pzy4oIk6-iMFODw47rU-MdfdhM-xp3_PRuKG68d1024e.jpg',
    sourceName: '전주다움',
    sourceUrl: 'https://daum.jeonju.go.kr/main/menu?do=view&gc=WEBZINE7&page=1&webzine_code=EwrgMdb9hXd68d10302&wgroup_code=h2U9qzCN9zm68d0ebec'
  },
  '비비정': {
    imageUrl: 'https://www.wanju.go.kr/planweb/upload/ff8080818a49961a018a6cf30e81128b/board/ff8080818c5d9e6d018ca480691c6a56/original/1705659085119279813.jpg',
    sourceName: '완주군 문화관광',
    sourceUrl: 'https://www.wanju.go.kr/tour/planweb/board/view.9is?boardUid=ff8080818c5d9e6d018ca480691c6a56&categoryUid1=&contentUid=ff8080818c5d9e6d018ca465556768af&dataUid=335d11cc95be427286d09b5859cc2173&page=1&subPath=%2Ftour&tmpField14='
  },
  '기지제': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/171521521467123.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&contentsSid=1&dataSid=9757&paging=ok&startPage=1'
  },
  '세병호': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/176215039084209.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&categoryCode1=A11&dataSid=13612&menuCd=DOM_000000101006002000&paging=ok&startPage=1'
  },
  '고산 미소시장': {
    imageUrl: 'https://www.wanju.go.kr/www/images/contents/market_0301.jpg',
    locationImageUrl: 'https://www.wanju.go.kr/www/images/contents/market_0302.jpg',
    sourceName: '완주군청',
    sourceUrl: 'https://www.wanju.go.kr/index.9is?contentUid=ff8080818b024d8e018b274f6bdf2c6d'
  },
  '완주군 송광사': {
    imageUrl: 'https://www.wanju.go.kr/planweb/upload/ff8080818a49961a018a6cf30e81128b/board/ff8080818c5d9e6d018ca480691c6a56/original/1705659085371279811.jpg',
    sourceName: '완주군 문화관광',
    sourceUrl: 'https://www.wanju.go.kr/tour/planweb/board/view.9is?boardUid=ff8080818c5d9e6d018ca480691c6a56&contentUid=ff8080818c5d9e6d018ca465556768af&dataUid=13b40824d7e94b309705e54227e7a283&page=1&subPath=%2Ftour&tmpField14='
  },
  '아중호수도서관': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/177218050397488.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&contentsSid=1&dataSid=16677&paging=ok&startPage=1'
  },
  '팔복예술공장': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/175066192675612.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&contentsSid=1&dataSid=9769&paging=ok&startPage=1'
  },
  '전주시민기록관': {
    imageUrl: 'https://daum.jeonju.go.kr/data/sys_webzine_list/3740062266_UIYRDToi_2364d0372ecbd9eed3ab1aab324a5f2d776780ba.jpg',
    sourceName: '전주다움',
    sourceUrl: 'https://daum.jeonju.go.kr/main/menu?do=view&gc=WEBZINE1&page=1&webzine_code=6h9fmh8yqi2fi7ss&wgroup_code=zi8033sr1ggpurr0'
  },
  '전주3.1운동발상지': {
    imageUrl: 'https://daum.jeonju.go.kr/data/sys_webzine_list/2042236394_gEJcs62W_b5be3fa9363b7a57aa74fa4661242f83d7e58611.jpg',
    sourceName: '전주다움',
    sourceUrl: 'https://daum.jeonju.go.kr/main/menu?do=view&gc=WEBZINE2&page=1&webzine_code=qlxjc66mfk81rztb&wgroup_code=tv4ljucl5gjkmqjb'
  },
  '오목대': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/175317831898777.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&dataSid=9742&menuCd=DOM_000000101006001000'
  },
  '구이저수지': {
    imageUrl: 'https://www.wanju.go.kr/planweb/upload/ff808081898ba9ba0189f1b459a700af/board/ff8080818b024d8e018b1c99655f1226/original/7bec9297-2059-4214-961c-b3cbfd1939ca.jpg',
    sourceName: '완주군 인터넷신문',
    sourceUrl: 'https://www.wanju.go.kr/news/planweb/board/view.9is?boardUid=ff8080818b024d8e018b1c99655f1226&categoryUid1=ff8080818b024d8e018b1c9ae4f91243&contentUid=ff808081898ba9ba0189f1e5b90d01a8&dataUid=4028a6029bdaa74e019c1b7f42487b85'
  },
  '전주수목원': {
    imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/171444352729634.jpg',
    sourceName: '비짓전주',
    sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&contentsSid=1&dataSid=9775&paging=ok&startPage=1'
  },
  '완주군 상관편백숲 관광안내소': {
    imageUrl: 'https://www.wanju.go.kr/planweb/upload/ff8080818a49961a018a6cf30e81128b/board/ff8080818c5d9e6d018ca480691c6a56/original/1705659039535265177.jpg',
    sourceName: '완주군 문화관광',
    sourceUrl: 'https://www.wanju.go.kr/tour/planweb/board/view.9is?boardUid=ff8080818c5d9e6d018ca480691c6a56&contentUid=ff8080818c5d9e6d018ca465556768af&dataUid=196cc2390b4b4acd9bb4b4eff2534391&page=2&subPath=%2Ftour&tmpField14='
  },
'대덕초등학교': {
  imageUrl: 'https://school.jbedu.kr/hosts/daedeok/M01/tpl004/images/main_img.png',
  sourceName: '대덕초등학교',
  sourceUrl: 'https://school.jbedu.kr/daedeok/'
},
'무인카페여유(구이로1575)': {
  imageUrl: previewImage('무인카페여유 구이로1575'),
  sourceName: '완주군 위생업소 자료',
  sourceUrl: 'https://www.wanju.go.kr/planweb/board/download.9is?boardUid=ff8080818ccd5216018cf71fcc692fc8&fileUid=4028a60291218d370191dfc269391f0b'
},
'바람쐬는길': {
  imageUrl: 'https://tour.jeonju.go.kr/upload_data/board_data/BBS_0000003/thumbnail/176353381759802.jpg',
  sourceName: '비짓전주',
  sourceUrl: 'https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&dataSid=9738&menuCd=DOM_000000101006001000'
},
'바이크박스': {
  imageUrl: previewImage('전주 바이크박스 자전거 정비'),
  sourceName: '바이크박스',
  sourceUrl: 'https://www.instagram.com/bikebox3/'
},
'봉동 상장기공원': {
  imageUrl: 'https://www.wanju.go.kr/planweb/upload/ff808081898ba9ba0189f1b459a700af/board/ff8080818b024d8e018b1c99655f1226/original/539749_432795.jpg',
  sourceName: '완주군 인터넷신문',
  sourceUrl: 'https://www.wanju.go.kr/planweb/board/view.9is?boardUid=ff8080818b024d8e018b1c99655f1226&categoryUid1=ff8080818b024d8e018b1c9ae4f91243&contentUid=ff808081898ba9ba0189f1e5b90d01a8&dataUid=26d79cb6e2a8428283e51f78fa06267d'
},
'새창이다리': {
  imageUrl: 'https://cdn.jjan.kr/data2/content/image/2025/11/06/.cache/512/20251106500009.jpg',
  sourceName: '전북일보',
  sourceUrl: 'https://www.jjan.kr/article/20251106500012'
},
'어은 쌍다리': {
  imageUrl: 'https://daum.jeonju.go.kr/data/sys_webzine_list/3232243990_OM8e1yrd_cc7007002eb1c1b9d9bd081ed5719938749616b9.jpg',
  sourceName: '전주다움',
  sourceUrl: 'https://daum.jeonju.go.kr/main/menu?do=view&gc=WEBZINE2&page=1&webzine_code=khwwb35i26gf8lme&wgroup_code=ir7kbsbzoob3rf5n'
},
'우석대학교 부속 전주한방병원': {
  imageUrl: previewImage('우석대학교 부속 전주한방병원'),
  sourceName: '우석대부속전주한방병원',
  sourceUrl: 'https://www.woosukmed.co.kr/'
},
'익산 삼일교회(참새방앗간)': {
  imageUrl: 'https://jangro.kr/wp-content/uploads/2021/10/07-%EC%B0%B8%EC%83%88%EB%B0%A9%EC%95%97%EA%B0%84-scaled.jpg',
  sourceName: '한국장로신문',
  sourceUrl: 'https://jangro.kr/2021/10/05/%EA%B5%90%ED%9A%8C%ED%83%90%EB%B0%A9-%EC%A7%84%EC%98%81%ED%9B%88-%EB%AA%A9%EC%82%AC%EC%9D%B5%EC%82%B0%EC%82%BC%EC%9D%BC%EA%B5%90%ED%9A%8C/'
},
'전주공동체라디오 전주FM': {
  imageUrl: 'https://contents.sixshop.com/thumbnails/uploadedFiles/207956/default/image_1773660173986_1000.jpg',
  sourceName: '전주공동체라디오 전주FM',
  sourceUrl: 'https://jcfm.kr/'
},
'전주시 자원봉사센터': {
  imageUrl: 'https://www.jeonjuvc.or.kr/upData/editor/NQg4MwgwCDEIMAgzCDEIOTMIODMINggeq0.JPG',
  sourceName: '전주시자원봉사센터',
  sourceUrl: 'https://www.jeonjuvc.or.kr/photo.html?bid=&code=1725524833&page=35&pmode=view&set=4&skey=&sword='
},
'전주의료사협빌딩': {
  imageUrl: 'https://jlcc.or.kr/data/file/jsocial/20200910_044603_95002.jpg',
  sourceName: '전주소통협력센터',
  sourceUrl: 'https://jlcc.or.kr/jsocial/27?cate=&item=&page=9'
},
'하리교': {
  imageUrl: 'https://www.wanju.go.kr/planweb/upload/ff808081898ba9ba0189f1b459a700af/board/ff8080818b024d8e018b1c99655f1226/original/468492_264452.jpg',
  sourceName: '완주군 인터넷신문',
  sourceUrl: 'https://www.wanju.go.kr/news/planweb/board/view.9is?boardUid=ff8080818b024d8e018b1c99655f1226&categoryUid1=ff8080818b024d8e018b1c9b78a7124c&contentUid=ff808081898ba9ba0189f1e5b91901ab&dataUid=9ce7f8a49362430d8dc118a4e13ecebe'
},
'전북환경운동연합': {
  imageUrl: 'https://jeonbuk.ekfem.or.kr/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA3Nzg1MiwicHVyIjoiYmxvYl9pZCJ9fQ==--7a35fab6a1a7a4ac95d284d80cbb4f3246f9d5eb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlsxNzI4LG51bGxdfSwicHVyIjoidmFyaWF0aW9uIn19--b22ed4bd5759b38182b4766ea74146f7c2b3875d/%EA%B7%B8%EB%A6%BC21.jpg',
  sourceName: '전북환경운동연합',
  sourceUrl: 'https://jeonbuk.ekfem.or.kr/'
},
'환경운동연합': {
  imageUrl: 'https://jeonbuk.ekfem.or.kr/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA3Nzg1MiwicHVyIjoiYmxvYl9pZCJ9fQ==--7a35fab6a1a7a4ac95d284d80cbb4f3246f9d5eb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlsxNzI4LG51bGxdfSwicHVyIjoidmFyaWF0aW9uIn19--b22ed4bd5759b38182b4766ea74146f7c2b3875d/%EA%B7%B8%EB%A6%BC21.jpg',
  sourceName: '전북환경운동연합',
  sourceUrl: 'https://jeonbuk.ekfem.or.kr/'
}
};

function officialImage(name, fallbackQuery) {
  return officialImages[name]?.imageUrl || previewImage(fallbackQuery || name);
}

function officialImageSource(name) {
  return officialImages[name] || null;
}

function officialLocationImage(name) {
  return officialImages[name]?.locationImageUrl || '';
}

function stableHash(text) {
  return Array.from(String(text || '')).reduce((accumulator, character) => {
    return (accumulator * 31 + character.charCodeAt(0)) % 100000;
  }, 7);
}

function escapeSvgText(text) {
  return String(text || '').replace(/[&<>"']/g, (character) => {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return entityMap[character] || character;
  });
}

function escapeHtmlAttribute(text) {
  return String(text || '').replace(/[&<>"']/g, (character) => {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return entityMap[character] || character;
  });
}

function splitPreviewTitle(query) {
  const tokens = String(query || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const titleTokens = tokens.length > 2 ? tokens.slice(0, -2) : tokens;
  const caption = tokens.length > 2 ? tokens.slice(-2).join(' ') : '';
  const lines = [];
  let currentLine = '';

  titleTokens.forEach((token) => {
    if (!currentLine) {
      currentLine = token;
      return;
    }

    if (`${currentLine} ${token}`.length <= 14) {
      currentLine = `${currentLine} ${token}`;
      return;
    }

    if (lines.length < 2) {
      lines.push(currentLine);
    }

    currentLine = token;
  });

  if (currentLine && lines.length < 2) {
    lines.push(currentLine);
  }

  if (!lines.length) {
    lines.push(String(query || '대표 장소'));
  }

  return {
    lines,
    caption
  };
}

function getPreviewVisualMeta(query) {
  const normalized = String(query || '').replace(/\s+/g, '').toLowerCase();

  if (normalized.includes('다리') || normalized.endsWith('교')) {
    return {
      label: '교량·수변',
      skyTop: '#9fd6ff',
      skyBottom: '#eef8ff',
      accent: '#2d76c8',
      surface: '#6fb6de',
      ground: '#315b78',
      kind: 'bridge'
    };
  }

  if (
    normalized.includes('호수') ||
    normalized.includes('저수지') ||
    normalized.includes('기지제') ||
    normalized.includes('세병호') ||
    normalized.includes('비비정') ||
    normalized.includes('오목대') ||
    normalized.includes('추천대')
  ) {
    return {
      label: '호수·전망',
      skyTop: '#8ad6df',
      skyBottom: '#f0fbfb',
      accent: '#2f8f57',
      surface: '#67c3cb',
      ground: '#2c6d5f',
      kind: 'waterfront'
    };
  }

  if (normalized.includes('수목원') || normalized.includes('편백숲') || normalized.includes('숲') || normalized.includes('바람쐬는길')) {
    return {
      label: '숲길·생태',
      skyTop: '#b9edb9',
      skyBottom: '#f5fdf4',
      accent: '#3f9961',
      surface: '#8ad09b',
      ground: '#2b5f3a',
      kind: 'forest'
    };
  }

  if (normalized.includes('대여소') || normalized.includes('자전거') || normalized.includes('바이크')) {
    return {
      label: '자전거 거점',
      skyTop: '#ffd88f',
      skyBottom: '#fff8ea',
      accent: '#dd8a16',
      surface: '#ffc861',
      ground: '#6b4a1e',
      kind: 'bike'
    };
  }

  if (normalized.includes('시장')) {
    return {
      label: '시장·생활권',
      skyTop: '#ffd0b5',
      skyBottom: '#fff4ed',
      accent: '#ca6842',
      surface: '#ffbf95',
      ground: '#7f3e28',
      kind: 'market'
    };
  }

  if (normalized.includes('송광사') || normalized.endsWith('사') || normalized.includes('한옥')) {
    return {
      label: '전통·유산',
      skyTop: '#d7c3a7',
      skyBottom: '#f8f1e8',
      accent: '#91653d',
      surface: '#b98d64',
      ground: '#5a3d25',
      kind: 'heritage'
    };
  }

  if (normalized.includes('교회')) {
    return {
      label: '공동체 공간',
      skyTop: '#c1d8ff',
      skyBottom: '#f3f7ff',
      accent: '#5676c8',
      surface: '#9cb7eb',
      ground: '#354d80',
      kind: 'church'
    };
  }

  if (normalized.includes('병원') || normalized.includes('의료')) {
    return {
      label: '의료·돌봄',
      skyTop: '#a7e1dc',
      skyBottom: '#f2fcfa',
      accent: '#2d8f84',
      surface: '#88d0c8',
      ground: '#2c5b64',
      kind: 'health'
    };
  }

  if (normalized.includes('도서관') || normalized.includes('기록관') || normalized.includes('fm')) {
    return {
      label: '기록·문화',
      skyTop: '#ffd89d',
      skyBottom: '#fff6ea',
      accent: '#d48825',
      surface: '#ffc46a',
      ground: '#75511c',
      kind: 'archive'
    };
  }

  if (
    normalized.includes('박물관') ||
    normalized.includes('예술공장') ||
    normalized.includes('센터') ||
    normalized.includes('연합') ||
    normalized.includes('협빌딩') ||
    normalized.includes('초등학교')
  ) {
    return {
      label: '도시 거점',
      skyTop: '#d8dff2',
      skyBottom: '#f7f9ff',
      accent: '#556b95',
      surface: '#b5c3e4',
      ground: '#3b4f73',
      kind: 'building'
    };
  }

  if (normalized.includes('카페')) {
    return {
      label: '쉼터·카페',
      skyTop: '#f1c8ad',
      skyBottom: '#fff7f2',
      accent: '#b46a3c',
      surface: '#e5a977',
      ground: '#6e4528',
      kind: 'cafe'
    };
  }

  return {
    label: '대표 장소',
    skyTop: '#bfd8f0',
    skyBottom: '#f5f9fd',
    accent: '#557d9f',
    surface: '#a8c4de',
    ground: '#39556d',
    kind: 'building'
  };
}

function getPreviewSceneMarkup(kind, palette) {
  const artMap = {
    bridge: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 590 C160 560 290 620 420 592 C560 562 690 622 820 594 C970 562 1090 620 1200 586 V800 H0 Z" fill="#8fd4f4" opacity="0.88" />
      <path d="M730 500 H1030 V540 H730 Z" fill="${palette.ground}" />
      <path d="M760 500 C800 430 860 430 900 500" fill="none" stroke="${palette.ground}" stroke-width="16" stroke-linecap="round" />
      <path d="M890 500 C930 430 990 430 1030 500" fill="none" stroke="${palette.ground}" stroke-width="16" stroke-linecap="round" />
      <path d="M780 540 V618 M900 540 V618 M1015 540 V618" stroke="${palette.ground}" stroke-width="14" stroke-linecap="round" />
    `,
    waterfront: `
      <circle cx="910" cy="200" r="74" fill="#fff5b6" opacity="0.9" />
      <path d="M0 540 C160 500 320 564 470 542 C630 520 780 584 920 548 C1035 520 1120 546 1200 528 V800 H0 Z" fill="${palette.surface}" />
      <path d="M0 612 C190 576 380 650 560 618 C730 588 930 652 1200 606 V800 H0 Z" fill="#77d2df" opacity="0.92" />
      <path d="M780 450 L870 362 L965 450 Z" fill="${palette.ground}" opacity="0.88" />
      <rect x="850" y="450" width="48" height="108" rx="12" fill="${palette.ground}" />
      <path d="M852 474 H896" stroke="#fff3d6" stroke-width="8" stroke-linecap="round" />
    `,
    forest: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 640 C150 598 310 680 440 632 C590 578 740 660 910 618 C1040 584 1120 628 1200 612 V800 H0 Z" fill="${palette.ground}" />
      <g fill="#2f6d3a">
        <path d="M790 546 L840 430 L890 546 Z" />
        <rect x="832" y="546" width="16" height="88" rx="8" fill="#5a3d25" />
        <path d="M900 564 L968 416 L1036 564 Z" />
        <rect x="960" y="564" width="18" height="86" rx="9" fill="#5a3d25" />
        <path d="M1006 542 L1060 436 L1114 542 Z" />
        <rect x="1052" y="542" width="16" height="94" rx="8" fill="#5a3d25" />
      </g>
      <path d="M692 658 C744 624 790 602 864 586" fill="none" stroke="#ecf5de" stroke-width="16" stroke-linecap="round" />
    `,
    bike: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 654 C174 612 328 686 516 644 C664 612 850 684 1200 630 V800 H0 Z" fill="${palette.ground}" />
      <circle cx="812" cy="576" r="84" fill="none" stroke="${palette.ground}" stroke-width="18" />
      <circle cx="1048" cy="576" r="84" fill="none" stroke="${palette.ground}" stroke-width="18" />
      <path d="M812 576 L910 510 L968 576 L894 576 L850 492 H910" fill="none" stroke="${palette.ground}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M968 576 L1048 576 L996 474" fill="none" stroke="${palette.ground}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M968 460 H1036" stroke="${palette.ground}" stroke-width="14" stroke-linecap="round" />
    `,
    market: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 660 C180 626 346 700 520 650 C690 602 898 694 1200 638 V800 H0 Z" fill="${palette.ground}" />
      <rect x="778" y="344" width="280" height="196" rx="26" fill="#fff9f2" />
      <path d="M778 344 H1058 V418 H778 Z" fill="${palette.accent}" />
      <path d="M792 344 L844 418 L896 344 L948 418 L1000 344 L1052 418" fill="none" stroke="#fff1e3" stroke-width="22" stroke-linecap="round" />
      <rect x="836" y="430" width="72" height="110" rx="16" fill="${palette.surface}" />
      <rect x="930" y="430" width="88" height="64" rx="14" fill="${palette.surface}" />
    `,
    heritage: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 666 C150 624 336 698 500 650 C670 602 842 692 1200 640 V800 H0 Z" fill="${palette.ground}" />
      <path d="M756 502 L920 388 L1084 502 Z" fill="${palette.ground}" />
      <rect x="812" y="502" width="216" height="98" rx="14" fill="#8d6543" />
      <path d="M782 532 H1058" stroke="#f0d5ba" stroke-width="12" stroke-linecap="round" />
      <rect x="914" y="532" width="26" height="68" rx="12" fill="#f3dfca" />
    `,
    church: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 654 C170 614 330 688 526 646 C694 610 872 690 1200 638 V800 H0 Z" fill="${palette.ground}" />
      <rect x="820" y="388" width="208" height="204" rx="22" fill="#f7fbff" />
      <path d="M790 422 L924 316 L1058 422 Z" fill="${palette.ground}" />
      <rect x="912" y="326" width="24" height="66" rx="10" fill="${palette.ground}" />
      <path d="M882 356 H966 M924 328 V386" stroke="#f6f8ff" stroke-width="14" stroke-linecap="round" />
    `,
    health: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 656 C180 616 350 692 522 648 C682 608 900 688 1200 636 V800 H0 Z" fill="${palette.ground}" />
      <rect x="782" y="352" width="284" height="220" rx="28" fill="#f3fffd" />
      <rect x="900" y="392" width="48" height="142" rx="16" fill="${palette.accent}" />
      <rect x="852" y="440" width="144" height="48" rx="16" fill="${palette.accent}" />
      <rect x="822" y="604" width="208" height="20" rx="10" fill="#dbf7f3" opacity="0.85" />
    `,
    archive: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 652 C174 616 360 692 518 646 C700 598 900 688 1200 632 V800 H0 Z" fill="${palette.ground}" />
      <rect x="794" y="370" width="250" height="184" rx="26" fill="#fffaf2" />
      <rect x="826" y="402" width="184" height="18" rx="9" fill="${palette.accent}" opacity="0.92" />
      <rect x="826" y="440" width="146" height="18" rx="9" fill="${palette.accent}" opacity="0.64" />
      <rect x="826" y="478" width="172" height="18" rx="9" fill="${palette.accent}" opacity="0.78" />
      <path d="M1062 334 C1090 362 1090 412 1062 440" fill="none" stroke="${palette.accent}" stroke-width="14" stroke-linecap="round" />
      <path d="M1090 316 C1132 358 1132 418 1090 460" fill="none" stroke="${palette.accent}" stroke-width="12" stroke-linecap="round" opacity="0.72" />
    `,
    building: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 652 C172 618 346 692 522 646 C706 598 898 688 1200 636 V800 H0 Z" fill="${palette.ground}" />
      <rect x="786" y="332" width="92" height="236" rx="20" fill="#f8fbff" />
      <rect x="882" y="276" width="116" height="292" rx="24" fill="#f2f6ff" />
      <rect x="1004" y="352" width="82" height="216" rx="18" fill="#fbfcff" />
      <g fill="${palette.surface}">
        <rect x="812" y="366" width="24" height="24" rx="8" />
        <rect x="836" y="408" width="24" height="24" rx="8" />
        <rect x="920" y="330" width="28" height="28" rx="8" />
        <rect x="954" y="384" width="28" height="28" rx="8" />
        <rect x="1018" y="392" width="24" height="24" rx="8" />
      </g>
    `,
    cafe: `
      <rect x="0" y="560" width="1200" height="240" fill="${palette.surface}" />
      <path d="M0 660 C172 622 354 700 534 652 C692 610 888 694 1200 640 V800 H0 Z" fill="${palette.ground}" />
      <path d="M810 426 H1018 C1026 510 994 570 914 570 C832 570 800 510 810 426 Z" fill="#fff8f2" />
      <path d="M1008 450 C1058 450 1084 476 1084 520 C1084 558 1058 586 1018 586" fill="none" stroke="#fff8f2" stroke-width="22" stroke-linecap="round" />
      <path d="M858 360 C840 328 860 300 886 282" fill="none" stroke="#ffe3cf" stroke-width="12" stroke-linecap="round" />
      <path d="M930 354 C912 320 930 294 958 272" fill="none" stroke="#ffe3cf" stroke-width="12" stroke-linecap="round" />
    `
  };

  return artMap[kind] || artMap.building;
}

function previewImage(query) {
  const palette = getPreviewVisualMeta(query);
  const { lines, caption } = splitPreviewTitle(query);
  const seed = stableHash(query);
  const burstX = 780 + (seed % 170);
  const burstY = 110 + ((seed * 3) % 120);
  const chipWidth = Math.min(360, Math.max(180, palette.label.length * 22 + 80));
  const titleText = lines
    .map(
      (line, index) =>
        `<text x="72" y="${190 + index * 74}" font-size="58" font-weight="800" fill="#ffffff">${escapeSvgText(line)}</text>`
    )
    .join('');
  const captionMarkup = caption
    ? `<text x="72" y="${228 + lines.length * 74}" font-size="28" font-weight="600" fill="#ebf4ff">${escapeSvgText(caption)}</text>`
    : '';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${escapeSvgText(query)} 대표 이미지" font-family="Pretendard, 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.skyTop}" />
          <stop offset="100%" stop-color="${palette.skyBottom}" />
        </linearGradient>
        <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.28" />
          <stop offset="100%" stop-color="${palette.accent}" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="34" fill="url(#bg)" />
      <circle cx="${burstX}" cy="${burstY}" r="126" fill="${palette.accent}" opacity="0.12" />
      <circle cx="${burstX + 84}" cy="${burstY + 42}" r="56" fill="${palette.accent}" opacity="0.1" />
      <path d="M0 0 H1200 V290 C1036 332 890 310 722 278 C532 242 338 260 0 348 Z" fill="url(#glow)" />
      <rect x="58" y="54" width="${chipWidth}" height="52" rx="26" fill="rgba(16, 36, 24, 0.18)" />
      <text x="84" y="88" font-size="28" font-weight="700" fill="#133421">${escapeSvgText(palette.label)}</text>
      <rect x="48" y="126" width="522" height="${caption ? 206 : 172}" rx="34" fill="rgba(18, 38, 48, 0.46)" />
      ${titleText}
      ${captionMarkup}
      ${getPreviewSceneMarkup(palette.kind, palette)}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const places = [
  {
  name: '새창이다리',
  theme: 'history',
  district: '김제시 청하면·군산시 대야면 경계',
  scene: 'scene-gate',
  tagline: '만경강과 평야의 기억을 품은 1930년대 근대 교량 유산',
  intro:
    '새창이다리는 김제시 청하면 동지산리와 군산시 대야면 복교리 사이를 잇는 옛 만경강 교량입니다. 1933년에 준공된 전북권의 대표적인 근대 시멘트 교량으로 알려져 있으며, 김제평야의 곡물 이동과 군산항으로 이어지는 물류·수탈의 역사를 함께 떠올리게 합니다. 지금은 단순 이동로보다 근대 교통사와 만경강 경관을 읽는 답사 지점으로 소개하는 것이 적절합니다.',
  nearby: ['비비정', '하리교', '봉동 상장기공원'],
  nearbyText:
    '새창이다리에서 만경강 하류의 역사적 경관을 먼저 보고, 비비정·하리교·봉동 상장기공원으로 이어 가면 다리와 강변 공원이 완주·전주 생활권을 어떻게 잇는지 비교할 수 있습니다.',
  course:
    '새창이다리는 전주 도심권에서 거리가 있어 장거리 인증 코스의 확장 지점으로 두는 것이 좋습니다. 만경강 하류의 옛 교량을 본 뒤 완주 삼례·봉동권의 비비정과 하리교 방향으로 이어 달리면 근대 교량, 수변 경관, 생활 교통축을 함께 살피는 광역 코스가 됩니다.',
  mapKeyword: '새창이다리 김제 청하면 군산 대야면',
  officialAddress: '전북특별자치도 김제시 청하면 동지산리·군산시 대야면 복교리 일대',
  officialInfo: '김제 청하면과 군산 대야면 사이 만경강을 잇는 1930년대 근대 교량 유산',
  imageUrl: officialImage('새창이다리', '새창이다리 김제 청하면'),
  imageSource: officialImageSource('새창이다리'),
  fallbackImageUrl: previewImage('새창이다리 김제 청하면'),
  latLng: { lat: 35.906, lng: 126.777 }
},
  {
  name: '어은 쌍다리',
  aliases: ['어은쌍다리'],
  theme: 'history',
  district: '전주시 덕진구 진북동',
  scene: 'scene-street',
  tagline: '전주천 생활권을 잇는 전주 미래유산 보행·생활 교량',
  intro:
    '어은 쌍다리는 전주천을 사이에 둔 진북동 생활권을 이어 주던 낮은 교량의 기억을 담고 있습니다. 보행 다리와 차량 통행 다리가 나란히 붙어 있어 쌍다리로 불렸고, 전주 미래유산으로도 소개되는 장소입니다. 거대한 관광 명소는 아니지만 전주 도심이 하천과 다리를 통해 어떻게 연결되어 왔는지를 보여 주는 생활사 포인트입니다.',
  nearby: ['전주시민기록관', '전주3.1운동발상지', '전주공동체라디오 전주FM'],
  nearbyText:
    '전주시민기록관과 전주3.1운동발상지, 전주FM을 함께 보면 전주천 주변 생활권이 기억과 기록, 시민 미디어 공간으로 어떻게 이어지는지 자연스럽게 읽힙니다.',
  course:
    '어은 쌍다리에서 전주천을 따라 이동한 뒤 중앙동 기록 거점으로 들어가면 하천 생활사와 시민 기록을 결합한 도심형 라이딩 코스를 만들 수 있습니다.',
  mapKeyword: '어은쌍다리 전주 진북동',
  officialAddress: '전북특별자치도 전주시 덕진구 진북동 전주천 일대',
  officialInfo: '보행 다리와 차량 통행 다리가 나란히 붙어 있는 전주 미래유산 생활 교량',
  imageUrl: officialImage('어은 쌍다리', '어은 쌍다리 전주 진북동'),
  imageSource: officialImageSource('어은 쌍다리'),
  fallbackImageUrl: previewImage('어은 쌍다리 전주 진북동'),
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
    imageUrl: officialImage('전주시 공영자전거 꽃싱이 송천대여소', '전주시 공영자전거 꽃싱이 송천대여소'),
    imageSource: officialImageSource('전주시 공영자전거 꽃싱이 송천대여소'),
    fallbackImageUrl: previewImage('전주시 공영자전거 꽃싱이 송천대여소'),
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
    imageUrl: officialImage('추천대', '전주 추천대'),
    imageSource: officialImageSource('추천대'),
    fallbackImageUrl: previewImage('전주 추천대'),
    latLng: { lat: 35.847, lng: 127.089 }
  },
  {
  name: '익산 삼일교회(참새방앗간)',
  aliases: ['익산 삼일교회', '참새방앗간'],
  theme: 'history',
  district: '익산시 석탄동',
  scene: 'scene-church',
  tagline: '생수와 책, 쉼을 나누는 익산 삼일교회의 마을 환대 공간',
  intro:
    '익산 삼일교회 앞 참새방앗간은 교회가 컨테이너 공간을 활용해 주민과 지나가는 사람에게 생수, 도서, 음료, 잠시 머물 자리를 제공하는 생활형 나눔 공간입니다. 특히 주변 자전거 길 이용자에게도 쉬어 갈 수 있는 장소로 소개되어, 챌린지에서는 종교 시설 자체보다 지역사회 환대와 돌봄이 공간이 되는 사례로 읽는 것이 좋습니다.',
  nearby: ['새창이다리', '비비정', '대덕초등학교'],
  nearbyText:
    '새창이다리, 비비정, 대덕초등학교와 묶으면 전북 서부권의 교회·교량·생활권 거점을 잇는 느슨한 광역 코스를 구성할 수 있습니다.',
  course:
    '익산권에서는 참새방앗간을 짧은 휴식 거점으로 삼고, 전주·완주권으로 넘어갈 때는 새창이다리나 비비정 축과 연결해 장거리 인증 코스로 설계하기 좋습니다.',
  mapKeyword: '익산 삼일교회 참새방앗간',
  officialAddress: '전북특별자치도 익산시 석탄동 삼일교회 앞 참새방앗간 일대',
  officialInfo: '마을 주민과 자전거 이용자에게 생수와 책, 쉼을 제공하는 생활형 나눔 공간',
  imageUrl: officialImage('익산 삼일교회(참새방앗간)', '익산 삼일교회 참새방앗간'),
  imageSource: officialImageSource('익산 삼일교회(참새방앗간)'),
  fallbackImageUrl: previewImage('익산 삼일교회 참새방앗간'),
  latLng: { lat: 35.954, lng: 126.945 }
},
  {
  name: '하리교',
  theme: 'history',
  district: '완주군 삼례읍 하리·전주시 덕진구 전미동 축',
  scene: 'scene-gate',
  tagline: '완주 삼례·봉동과 전주 북부권을 잇는 만경강 생활 교량',
  intro:
    '하리교는 완주군 하리와 전주시 전미동을 연결하는 만경강 주요 교량입니다. 기존 2차로 교량의 병목 문제를 해소하기 위해 재가설되어 총연장 404m, 폭 22m의 4차로 교량으로 다시 개통된 곳입니다. 행정구역은 다르지만 실제 통근, 통학, 생활 이동은 하나의 권역으로 이어진다는 점을 보여 주는 상생 교통 인프라로 소개하면 좋습니다.',
  nearby: ['비비정', '봉동 상장기공원', '팔복예술공장'],
  nearbyText:
    '비비정과 봉동 상장기공원, 팔복예술공장을 함께 보면 만경강과 산업·생활권 이동이 전주와 완주 사이를 어떻게 묶는지 선명하게 드러납니다.',
  course:
    '하리교를 건너며 전주와 완주의 생활권 경계를 체감하고, 봉동 상장기공원 쪽으로 올라가거나 팔복예술공장으로 내려오면 광역형 인증 코스를 만들 수 있습니다.',
  mapKeyword: '하리교 완주 삼례 전주 전미동',
  officialAddress: '전북특별자치도 완주군 삼례읍 하리·전주시 덕진구 전미동 만경강 일대',
  officialInfo: '완주군 하리와 전주시 전미동을 잇는 총연장 404m, 폭 22m 규모의 4차로 교량',
  imageUrl: officialImage('하리교', '하리교 완주 삼례'),
  imageSource: officialImageSource('하리교'),
  fallbackImageUrl: previewImage('하리교 완주 삼례'),
  latLng: { lat: 35.876, lng: 127.053 }
},
  {
  name: '전주공동체라디오 전주FM',
  aliases: ['전주FM'],
  theme: 'art',
  district: '전주시 덕진구 우아동',
  scene: 'scene-radio',
  tagline: '지역의 목소리를 시민이 직접 만드는 FM 93.5MHz 공동체 미디어 거점',
  intro:
    '전주공동체라디오 전주FM은 지역 주민과 시민이 직접 전주의 동네 이야기, 생활 의제, 문화 활동을 방송으로 만들어 가는 공동체 미디어 거점입니다. 관광 명소는 아니지만 도시가 스스로를 기록하고 말하는 구조를 보여 주기 때문에 시민기록관, 3.1운동발상지와 함께 소개하면 교육적 맥락이 살아납니다.',
  nearby: ['전주시민기록관', '전주3.1운동발상지', '전주시 자원봉사센터'],
  nearbyText:
    '전주시민기록관과 전주3.1운동발상지, 자원봉사센터와 묶으면 시민 기록, 참여, 연대의 축을 하나의 이야기로 풀어 낼 수 있습니다.',
  course:
    '전주FM과 시민기록관, 3.1운동발상지를 잇는 도심 코스는 전주가 스스로를 기록하고 말하는 방식을 보여 주는 시민 미디어·기록 교육형 코스가 됩니다.',
  mapKeyword: '전주공동체라디오 전주FM 백제대로 825',
  officialAddress: '전북특별자치도 전주시 덕진구 백제대로 825, 4층',
  officialInfo: 'FM 93.5MHz로 지역민의 목소리와 동네 의제를 담는 전주 공동체 라디오 방송국',
  imageUrl: officialImage('전주공동체라디오 전주FM', '전주공동체라디오 전주FM'),
  imageSource: officialImageSource('전주공동체라디오 전주FM'),
  fallbackImageUrl: previewImage('전주공동체라디오 전주FM'),
  latLng: { lat: 35.8489557, lng: 127.1583223 }
},
  {
  name: '우석대학교 부속 전주한방병원',
  aliases: ['우석대학교 부석 전주한방병원', '우석대학교 부속 전주한방병원', '우석대전주한방병원'],
  theme: 'local',
  district: '전주시 완산구 중화산동',
  scene: 'scene-health',
  tagline: '전통 한의학과 지역 돌봄이 만나는 전주 의료 기반 거점',
  intro:
    '우석대학교 부속 전주한방병원은 어은로 일대에 자리한 한방 의료 거점입니다. 관광지라기보다 생활권을 유지하는 건강·돌봄 인프라로 보는 것이 맞고, 자전거 챌린지에서는 전주의 도시 기능이 공원, 하천, 의료기관, 시민사회 공간과 함께 작동한다는 점을 설명하는 지점으로 활용할 수 있습니다.',
  nearby: ['전주의료사협빌딩', '전주시 자원봉사센터', '전북환경운동연합'],
  nearbyText:
    '전주의료사협빌딩, 자원봉사센터, 전북환경운동연합과 묶으면 의료·시민사회·공공참여가 생활권 안에서 어떻게 연결되는지 설명하기 좋습니다.',
  course:
    '중화산동과 평화동·서신동 생활권을 천천히 훑으며 의료와 복지, 시민 거점을 연결하는 코스로 구성하면 관광지 중심 라이딩과 다른 전주의 실제 구조를 보여 줄 수 있습니다.',
  mapKeyword: '우석대학교 부속 전주한방병원 어은로 46',
  officialAddress: '전북특별자치도 전주시 완산구 어은로 46',
  officialInfo: '전통 한의학 진료와 지역 의료 서비스를 제공하는 우석대학교 부속 한방병원',
  imageUrl: officialImage('우석대학교 부속 전주한방병원', '우석대학교 부속 전주한방병원'),
  imageSource: officialImageSource('우석대학교 부속 전주한방병원'),
  fallbackImageUrl: previewImage('우석대학교 부속 전주한방병원'),
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
    imageUrl: officialImage('덕진공원', '전주 덕진공원'),
    imageSource: officialImageSource('덕진공원'),
    fallbackImageUrl: previewImage('전주 덕진공원'),
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
    imageUrl: officialImage('전북대 자연사박물관', '전북대학교 자연사박물관'),
    imageSource: officialImageSource('전북대 자연사박물관'),
    fallbackImageUrl: previewImage('전북대학교 자연사박물관'),
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
    imageUrl: officialImage('비비정', '완주 비비정'),
    imageSource: officialImageSource('비비정'),
    fallbackImageUrl: previewImage('완주 비비정'),
    latLng: { lat: 35.845, lng: 127.052 }
  },
  {
  name: '전주시 자원봉사센터',
  aliases: ['전주시자원봉사센터'],
  theme: 'local',
  district: '전주시 덕진구 진북동',
  scene: 'scene-archive',
  tagline: '시민 참여와 나눔 활동을 연결하는 전주의 자원봉사 허브',
  intro:
    '전주시 자원봉사센터는 개인, 단체, 기관의 자원봉사 활동을 연결하고 지역의 나눔 프로그램을 운영하는 전주의 시민 참여 허브입니다. 관광 명소성은 낮지만 도시가 공동체성을 유지하고 재난·복지·생활 지원을 조직하는 방식을 보여 주는 장소라서 챌린지의 생활권 의미를 넓혀 줍니다.',
  nearby: ['전주공동체라디오 전주FM', '전주의료사협빌딩', '전북환경운동연합'],
  nearbyText:
    '전주FM, 전주의료사협빌딩, 전북환경운동연합과 묶으면 미디어·봉사·의료·환경이라는 시민사회 인프라를 하나의 축으로 소개하기 좋습니다.',
  course:
    '진북동에서 중앙동·평화동·서신동 방향으로 시민사회 거점을 이어 가면 전주가 실제로 어떻게 협력하며 움직이는지 보여 주는 생활형 코스가 됩니다.',
  mapKeyword: '전주시자원봉사센터 전주천동로 455',
  officialAddress: '전북특별자치도 전주시 덕진구 전주천동로 455',
  officialInfo: '전주시 자원봉사 활동을 연결하고 지원하는 시민 참여 거점',
  imageUrl: officialImage('전주시 자원봉사센터', '전주시 자원봉사센터'),
  imageSource: officialImageSource('전주시 자원봉사센터'),
  fallbackImageUrl: previewImage('전주시 자원봉사센터'),
  latLng: { lat: 35.832, lng: 127.137 }
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
    imageUrl: officialImage('기지제', '전주 기지제'),
    imageSource: officialImageSource('기지제'),
    fallbackImageUrl: previewImage('전주 기지제'),
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
    imageUrl: officialImage('세병호', '전주 세병호'),
    imageSource: officialImageSource('세병호'),
    fallbackImageUrl: previewImage('전주 세병호'),
    latLng: { lat: 35.872, lng: 127.127 }
  },
  {
  name: '대덕초등학교',
  theme: 'local',
  district: '완주군 구이면',
  scene: 'scene-campus',
  tagline: '구이 생활권의 통학·마을 이동 흐름을 보여 주는 학교 거점',
  intro:
    '대덕초등학교는 완주군 구이면 구이로에 자리한 초등학교입니다. 학교 자체를 관광지처럼 소비하기보다, 구이 생활권의 통학길과 마을 이동, 자전거 안전 속도를 생각하게 하는 생활 거점으로 소개하는 것이 적절합니다. 구이저수지·무인카페여유·바람쐬는길과 함께 묶으면 남부권의 마을길과 쉼터, 수변 코스를 자연스럽게 설명할 수 있습니다.',
  nearby: ['무인카페여유(구이로1575)', '구이저수지', '바람쐬는길'],
  nearbyText:
    '무인카페여유, 구이저수지, 바람쐬는길을 함께 보면 완주 구이 생활권의 통학로와 마을 쉼터, 전주 치명자산 방향의 바람쐬는 길이 연결되는 흐름을 볼 수 있습니다.',
  course:
    '대덕초등학교 인근에서는 학교 주변의 안전한 속도와 보행자 우선 원칙을 먼저 안내하고, 구이저수지와 무인카페여유 방향으로 이어 가는 완만한 생활권 코스로 구성하는 것이 좋습니다.',
  mapKeyword: '대덕초등학교 완주 구이면 구이로 641',
  officialAddress: '전북특별자치도 완주군 구이면 구이로 641',
  officialInfo: '완주군 구이면 구이로에 위치한 초등학교이자 구이 생활권 통학 거점',
  imageUrl: officialImage('대덕초등학교', '대덕초등학교 완주 구이면'),
  imageSource: officialImageSource('대덕초등학교'),
  fallbackImageUrl: previewImage('대덕초등학교 완주 구이면'),
  latLng: { lat: 35.66076431, lng: 127.1106128 }
},
  {
  name: '봉동 상장기공원',
  theme: 'nature',
  district: '완주군 봉동읍',
  scene: 'scene-park',
  tagline: '만경강과 봉동 생활권의 이야기를 벽면과 산책로로 보여 주는 강변 공원',
  intro:
    '봉동 상장기공원은 만경강변 생활권 경관사업과 함께 정비된 공원으로, 봉상정과 스토리 가벽, 포토존, 강변 산책 요소가 함께 있는 공간입니다. 완주군이 만경강 역사와 봉동생강, 봉동씨름 같은 지역 이야기를 공원 경관으로 엮어 소개한 장소라서, 단순한 쉼터보다 봉동의 생활 문화와 수변 재생을 읽는 거점으로 적합합니다.',
  nearby: ['하리교', '비비정', '대덕초등학교'],
  nearbyText:
    '하리교와 비비정, 대덕초등학교를 함께 보면 봉동읍 생활권과 만경강 수변축, 통학권이 어떻게 이어지는지 살펴볼 수 있습니다.',
  course:
    '상장기공원에서 만경강을 따라 달리며 비비정이나 하리교 방향으로 이어 가면 완주 북서부 수변 라이딩 코스가 자연스럽게 형성됩니다.',
  mapKeyword: '봉동 상장기공원 완주',
  officialAddress: '전북특별자치도 완주군 봉동읍 장기리 만경강변 일대',
  officialInfo: '만경강 역사와 봉동 지역 이야기를 담은 스토리 가벽·포토존·강변 산책 공원',
  imageUrl: officialImage('봉동 상장기공원', '봉동 상장기공원'),
  imageSource: officialImageSource('봉동 상장기공원'),
  fallbackImageUrl: previewImage('봉동 상장기공원'),
  latLng: { lat: 35.941, lng: 127.131 }
},
  {
    name: '고산 미소시장',
    theme: 'local',
    district: '완주군 고산면',
    scene: 'scene-market',
    tagline: '완주 동부권 5일장과 로컬 상점이 모이는 문화관광형 전통시장',
    intro:
      '완주군 홈페이지에 따르면 고산 미소시장은 1964년에 개설된 뒤 2013년에 현대화된 전통시장으로, 상설시장과 4일·9일 정기시장이 함께 운영됩니다. 고산면 중심 생활권 입구에 자리하고 있으며 한우, 지역 먹거리, 생활 점포가 모여 있어 완주 동부권의 일상 소비와 장날 풍경을 함께 보여 주는 대표 시장입니다.',
    nearby: ['완주군 송광사', '완주군 상관편백숲 관광안내소', '바람쐬는길'],
    nearbyText:
      '송광사와 상관편백숲 관광안내소, 바람쐬는길을 함께 묶으면 완주 동부 산간권의 장터, 숲길, 사찰 흐름을 한 코스로 이어 볼 수 있습니다.',
    course:
      '고산 미소시장에서 장터 분위기와 먹거리 거점을 먼저 보고 난 뒤 송광사나 상관편백숲 방향으로 이어 달리면 시장과 자연, 사찰 풍경이 결합된 완주형 광역 코스를 만들기 좋습니다.',
    mapKeyword: '고산 미소시장 완주',
    officialAddress: '전북특별자치도 완주군 고산면 남봉로 134, 135',
    officialInfo: '상설시장과 4일·9일장이 함께 운영되는 완주군 고산면 전통시장',
    imageUrl: officialImage('고산 미소시장', '고산 미소시장 완주'),
    imageSource: officialImageSource('고산 미소시장'),
    locationImageUrl: officialLocationImage('고산 미소시장'),
    fallbackImageUrl: previewImage('고산 미소시장 완주'),
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
    imageUrl: officialImage('완주군 송광사', '완주 송광사'),
    imageSource: officialImageSource('완주군 송광사'),
    fallbackImageUrl: previewImage('완주 송광사'),
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
    imageUrl: officialImage('아중호수도서관', '아중호수도서관'),
    imageSource: officialImageSource('아중호수도서관'),
    fallbackImageUrl: previewImage('아중호수도서관'),
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
    imageUrl: officialImage('팔복예술공장', '팔복예술공장'),
    imageSource: officialImageSource('팔복예술공장'),
    fallbackImageUrl: previewImage('팔복예술공장'),
    latLng: { lat: 35.861, lng: 127.094 }
  },
  {
  name: '바람쐬는길',
  aliases: ['바람 쐬는 길', '바람쐬러가는길', '바람 쐬러 가는 길', '치명자산성지'],
  theme: 'nature',
  district: '전주시 완산구 대성동·바람쐬는길',
  scene: 'scene-forest',
  tagline: '치명자산성지와 전주천을 따라 바람과 전망을 만나는 전주 동남부 길',
  intro:
    '바람쐬는길은 완주 구이면이 아니라 전주 치명자산성지와 한벽루·색장동 방향의 전주 동남부 길로 잡는 것이 맞습니다. 전주천과 치명자산 산자락, 한옥마을에서 이어지는 산책·자전거 흐름을 함께 느낄 수 있어 “잠깐 바람 쐬러 가는 길”이라는 이름에 어울립니다. 챌린지에서는 구이저수지보다 오목대, 아중호수도서관, 치명자산성지와 함께 묶는 편이 공간 맥락이 정확합니다.',
  nearby: ['오목대', '아중호수도서관', '전주3.1운동발상지'],
  nearbyText:
    '오목대와 아중호수도서관, 전주3.1운동발상지를 함께 보면 한옥마을 동남부 언덕길, 전주천, 동부 수변 문화축이 자연스럽게 이어집니다.',
  course:
    '오목대나 한옥마을에서 전주천을 따라 치명자산성지 방향으로 천천히 이동한 뒤 바람쐬는길을 지나 아중권 수변으로 연결하면 전주 동남부의 전망과 바람, 역사 경관을 함께 느낄 수 있습니다.',
  mapKeyword: '전주 바람쐬는길 치명자산성지',
  officialAddress: '전북특별자치도 전주시 완산구 바람쐬는길 87 일대',
  officialInfo: '치명자산성지와 전주천, 한옥마을 동남부 경관을 잇는 전주 바람쐬는길',
  imageUrl: officialImage('바람쐬는길', '전주 바람쐬는길 치명자산'),
  imageSource: officialImageSource('바람쐬는길'),
  fallbackImageUrl: previewImage('전주 바람쐬는길 치명자산'),
  latLng: { lat: 35.805, lng: 127.166 }
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
    imageUrl: officialImage('전주시민기록관', '전주시민기록관'),
    imageSource: officialImageSource('전주시민기록관'),
    fallbackImageUrl: previewImage('전주시민기록관'),
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
    imageUrl: officialImage('전주3.1운동발상지', '전주 3.1운동발상지'),
    imageSource: officialImageSource('전주3.1운동발상지'),
    fallbackImageUrl: previewImage('전주 3.1운동발상지'),
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
    imageUrl: officialImage('오목대', '전주 오목대'),
    imageSource: officialImageSource('오목대'),
    fallbackImageUrl: previewImage('전주 오목대'),
    latLng: { lat: 35.812, lng: 127.153 }
  },
  {
  name: '전주의료사협빌딩',
  aliases: ['전주의료생활협동조합', '전주의료사협', '전주의료복지사회적협동조합'],
  theme: 'local',
  district: '전주시 완산구 평화동1가',
  scene: 'scene-health',
  tagline: '주민 참여와 협동조합 방식으로 건강 돌봄을 실험하는 지역 의료 거점',
  intro:
    '전주의료사협빌딩은 전주의료복지사회적협동조합의 활동 기반으로, 주민과 의료인이 함께 지역의 건강과 돌봄을 조직하는 사회적경제 거점입니다. 건강한마을한의원·치과 등 생활 의료 활동과 연결되며, 관광 명소가 아닌 도시의 건강 안전망을 보여 주는 장소로 소개하는 것이 적절합니다.',
  nearby: ['우석대학교 부속 전주한방병원', '전주시 자원봉사센터', '전북환경운동연합'],
  nearbyText:
    '우석 한방병원, 자원봉사센터, 전북환경운동연합과 함께 보면 의료·봉사·환경이 생활권 안에서 교차하는 전주의 시민사회 구조를 설명하기 좋습니다.',
  course:
    '평화동·중화산동·진북동 생활권에서 의료사협빌딩과 의료·시민사회 거점을 잇는 코스는 관광지 중심이 아닌 실제 도시 운영 구조를 보여 주는 라이딩이 됩니다.',
  mapKeyword: '전주의료사협빌딩 장승배기로 168',
  officialAddress: '전북특별자치도 전주시 완산구 장승배기로 168',
  officialInfo: '전주의료복지사회적협동조합과 건강한마을 의료 활동이 자리한 지역 돌봄 거점',
  imageUrl: officialImage('전주의료사협빌딩', '전주의료사협빌딩 전주'),
  imageSource: officialImageSource('전주의료사협빌딩'),
  fallbackImageUrl: previewImage('전주의료사협빌딩 전주'),
  latLng: { lat: 35.792, lng: 127.131 }
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
    imageUrl: officialImage('구이저수지', '구이저수지 완주'),
    imageSource: officialImageSource('구이저수지'),
    fallbackImageUrl: previewImage('구이저수지 완주'),
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
    imageUrl: officialImage('전주수목원', '전주수목원'),
    imageSource: officialImageSource('전주수목원'),
    fallbackImageUrl: previewImage('전주수목원'),
    latLng: { lat: 35.873, lng: 127.072 }
  },
  {
  name: '바이크박스',
  theme: 'local',
  district: '전주시 완산구 효자동2가',
  scene: 'scene-bike',
  tagline: '장거리 라이딩 전 자전거 상태와 장비를 점검할 수 있는 전문 바이크샵',
  intro:
    '바이크박스는 전주권 자전거 이용자가 정비와 장비 상담을 위해 들를 수 있는 전문 바이크샵입니다. 공식 관광지나 공공시설은 아니지만 자전거 챌린지가 실제 이용으로 이어지려면 대여소와 함께 이런 정비 거점이 필요합니다. 대표 이미지는 외부 상업시설 사진을 안정적으로 확보하기 어려워, 파일 내부에서 자전거 정비 거점용 대체 이미지를 쓰도록 했습니다.',
  nearby: ['전주수목원', '전주시 공영자전거 꽃싱이 송천대여소', '기지제'],
  nearbyText:
    '전주수목원과 꽃싱이 송천대여소, 기지제를 연결하면 대여·정비·수변 라이딩이 이어지는 실사용형 자전거 코스를 설명하기 쉽습니다.',
  course:
    '바이크박스에서 간단한 정비를 마친 뒤 서부권 수목원·기지제 방향으로 나가거나 송천 공영자전거 거점과 비교하면 실제 자전거 이용자에게 현실적인 코스 운영이 가능합니다.',
  mapKeyword: '전주 바이크박스 세내로 253',
  officialAddress: '전북특별자치도 전주시 완산구 세내로 253, 바이크박스 1층',
  officialInfo: '전주권 자전거 정비·장비 상담 거점',
  imageUrl: officialImage('바이크박스', '전주 바이크박스 자전거 정비'),
  imageSource: officialImageSource('바이크박스'),
  fallbackImageUrl: previewImage('전주 바이크박스 자전거 정비'),
  latLng: { lat: 35.812, lng: 127.104 }
},
  {
  name: '전북환경운동연합',
  aliases: ['환경운동연합', '전북환경운동연합'],
  theme: 'local',
  district: '전주시 완산구 중앙동',
  scene: 'scene-archive',
  tagline: '하천과 녹지, 기후 의제를 시민 관점에서 읽게 하는 전북 환경운동 거점',
  intro:
    '전북환경운동연합은 하천과 녹지, 기후위기, 생태 보전 같은 지역 환경 의제를 시민의 언어로 풀어내는 활동 거점입니다. 생태교육, 새만금 모니터링, 전주천 수달, 완산습지원 등 지역 생태계 보전 활동과 연결해 설명할 수 있어, 관광지 중심 설명만으로는 보이지 않는 도시의 공론장과 참여 구조를 보여 줍니다.',
  nearby: ['전주시 자원봉사센터', '전주의료사협빌딩', '전주공동체라디오 전주FM'],
  nearbyText:
    '자원봉사센터, 전주의료사협빌딩, 전주FM과 함께 보면 환경·의료·미디어가 시민사회 네트워크로 얽혀 있는 전주의 실제 작동 방식을 설명하기 좋습니다.',
  course:
    '중앙동과 진북동, 평화동 생활권을 따라 전북환경운동연합과 시민사회 거점을 잇는 코스는 참여형 도시 전주를 이해하는 대안적 챌린지 코스가 됩니다.',
  mapKeyword: '전북환경운동연합 전라감영2길 25-23',
  officialAddress: '전북특별자치도 전주시 완산구 전라감영2길 25-23',
  officialInfo: '1993년 창립한 전북 지역 환경운동 단체이자 시민 생태·기후 의제 활동 거점',
  imageUrl: officialImage('전북환경운동연합', '전북환경운동연합 전주'),
  imageSource: officialImageSource('전북환경운동연합'),
  fallbackImageUrl: previewImage('전북환경운동연합 전주'),
  latLng: { lat: 35.816, lng: 127.146 }
},
  {
  name: '무인카페여유(구이로1575)',
  aliases: ['무인카페여유', '구이로1575', '무인카페 여유'],
  theme: 'local',
  district: '완주군 구이면 두현리',
  scene: 'scene-food',
  tagline: '구이로 1575 일대에서 장거리 라이딩 중 쉬어 가기 좋은 무인 쉼터형 카페',
  intro:
    '무인카페여유는 완주군 구이면 구이로 1575 일대에 있는 무인 쉼터형 카페 거점입니다. 대형 관광지라기보다 수분 보충, 잠깐의 휴식, 주변 마을길 확인을 위한 생활 편의 지점으로 넣는 것이 적절합니다. 공식 대표 사진을 안정적으로 확인하기 어려워, 파일 내부에서는 카페 쉼터 성격이 드러나는 대체 이미지를 사용하도록 했습니다.',
  nearby: ['대덕초등학교', '구이저수지', '완주군 상관편백숲 관광안내소'],
  nearbyText:
    '대덕초등학교와 구이저수지, 상관편백숲 안내소와 함께 묶으면 완주 구이 생활권의 마을길, 수변, 숲길, 휴식형 거점이 안정적으로 이어집니다.',
  course:
    '구이저수지와 구이 생활권을 돈 뒤 무인카페여유에서 쉬고, 체력이 남으면 상관편백숲 방향으로 이어 가는 순환 코스를 추천합니다.',
  mapKeyword: '무인카페여유 구이로1575 완주 구이면',
  officialAddress: '전북특별자치도 완주군 구이면 구이로 1575 일대',
  officialInfo: '완주군 구이면 구이로 1575 일대의 무인 쉼터형 카페 거점',
  imageUrl: officialImage('무인카페여유(구이로1575)', '무인카페여유 구이로1575'),
  imageSource: officialImageSource('무인카페여유(구이로1575)'),
  fallbackImageUrl: previewImage('무인카페여유 구이로1575'),
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
    imageUrl: officialImage('완주군 상관편백숲 관광안내소', '완주 상관편백숲 관광안내소'),
    imageSource: officialImageSource('완주군 상관편백숲 관광안내소'),
    fallbackImageUrl: previewImage('완주 상관편백숲 관광안내소'),
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
  south: 35.64,
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
    imageUrl: item.imageUrl,
    imageFallbackUrl: item.fallbackImageUrl || previewImage(item.mapKeyword || item.name)
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
  if (place?.officialAddress) {
    return place.officialAddress;
  }

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

  if (place.officialAddress) {
    addressState.cache.set(place.name, place.officialAddress);
    return Promise.resolve(place.officialAddress);
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

function createStaticLocationMap(place) {
  if (!place?.locationImageUrl) {
    return '';
  }

  return `
    <img
      class="route-static-map"
      src="${place.locationImageUrl}"
      alt="${place.name} 위치도"
      loading="lazy"
      decoding="async"
      referrerpolicy="no-referrer"
    />
  `;
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
        ${createStaticLocationMap(place) || createAerialMap(place, mapPlaces)}
        <div class="kakao-map-status">카카오 지도를 불러올 수 없어 기본 위치 이미지를 표시합니다.</div>
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
          ${createStaticLocationMap(place) || createAerialMap(place, mapPlaces)}
          <div class="kakao-map-status">지도를 불러오지 못해 기본 위치 이미지로 대체했습니다.</div>
        </div>
      `;
    });
}

function renderHeroPhoto(place) {
  const hidePhoto = () => {
    elements.detailHero?.classList.remove('has-photo');
    elements.detailPhoto.classList.add('is-hidden');
    elements.detailPhoto.removeAttribute('src');
    elements.detailPhoto.alt = '';
    elements.detailPhoto.onload = null;
    elements.detailPhoto.onerror = null;
    delete elements.detailPhoto.dataset.fallbackUsed;
  };

  if (!place || (!place.imageUrl && !place.fallbackImageUrl)) {
    hidePhoto();
    return;
  }

  const fallbackImageUrl = place.fallbackImageUrl || previewImage(place.mapKeyword || place.name);

  elements.detailPhoto.dataset.fallbackUsed = 'false';
  elements.detailPhoto.referrerPolicy = 'no-referrer';
  elements.detailPhoto.onload = () => {
    elements.detailHero?.classList.add('has-photo');
    elements.detailPhoto.classList.remove('is-hidden');
  };
  elements.detailPhoto.onerror = () => {
    if (fallbackImageUrl && elements.detailPhoto.dataset.fallbackUsed !== 'true') {
      elements.detailPhoto.dataset.fallbackUsed = 'true';
      elements.detailPhoto.onerror = hidePhoto;
      elements.detailPhoto.src = fallbackImageUrl;
      elements.detailPhoto.alt = `${place.name} 대표 이미지 대체 이미지`;
      elements.detailPhoto.classList.remove('is-hidden');
      return;
    }

    hidePhoto();
  };
  elements.detailHero?.classList.remove('has-photo');
  elements.detailPhoto.src = place.imageUrl || fallbackImageUrl;
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
    image.dataset.fallbackUsed = 'false';
    image.onerror = () => {
      const fallbackSrc = image.dataset.fallbackSrc;

      if (fallbackSrc && image.dataset.fallbackUsed !== 'true') {
        image.dataset.fallbackUsed = 'true';
        image.src = fallbackSrc;
        return;
      }

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
                ? `<img class="route-stop-image" src="${escapeHtmlAttribute(stop.imageUrl)}" data-fallback-src="${escapeHtmlAttribute(stop.imageFallbackUrl || '')}" alt="${escapeHtmlAttribute(stop.name)} 대표 이미지" loading="lazy" decoding="async" referrerpolicy="no-referrer" />`
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
