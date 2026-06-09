# 닷펫몬 일러스트 어셋

ChatGPT로 생성한 일러스트 파일들을 아래 폴더에 넣어주세요.

## 파일 구조 + 정확한 이름

### `species/` — 10종 (필수)

각 파일명은 **소문자 영문**으로 정확히 맞춰주세요. 코드에서 이 이름으로 참조합니다.

```
species/
├── pibbi.png       (Light)
├── mosshu.png      (Nature)
├── voltchi.png     (Electric)
├── bubloo.png      (Water)
├── fangroo.png     (Earth)
├── chikapi.png     (Fire)
├── turtloop.png    (Metal)
├── nibori.png      (Dream)
├── kricko.png      (Sound)
└── luminoa.png     (Spirit)
```

권장: 1024×1024, PNG 투명 배경.

### `trainer/` — 트레이너 캐릭터

```
trainer/
├── hero.png        (영웅 포즈, 3:4)
├── action.png      (액션 포즈, 1:1)
└── headshot.png    (헤드샷, 1:1)
```

### `keyart/` — 그룹 키 아트 (옵션, 타이틀 hero용)

```
keyart/
└── title-hero.png  (트레이너 + 종 단체 컴포지션, 16:9)
```

### `ui/` — 알 + 디바이스 (옵션)

```
ui/
├── egg.png         (부화 일러스트)
└── dotpad.png      (닷패드 디바이스)
```

### `regions/` — 8 지역 배경 (옵션, 후순위)

```
regions/
├── starter-plains.png
├── whispering-forest.png
├── ember-volcano.png
├── mirror-lake.png
├── storm-plain.png
├── iron-cave.png
├── sacred-grove.png
└── echo-sanctum.png
```

권장: 1920×1080, JPG 또는 PNG.

## 넣은 다음

파일 다 넣은 다음 Claude에게 알려주세요:
- "일러스트 다 넣었어, v0.7 코드 통합 진행해줘"

Claude가 자동으로:
1. 파일 존재 확인
2. index.html에 일러스트 레이어 추가 (CSS background-image + img 태그)
3. 픽셀 닷패드 미리보기와 side-by-side 배치
4. UI 톤 warm으로 조정 (cyan glow → amber glow)
5. 브라우저에서 바로 확인 가능
