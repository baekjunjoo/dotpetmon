# 닷펫몬 ChatGPT 프롬프트 v0.4 (코지 anime 피벗)

**도구**: ChatGPT + DALL-E 3 (또는 GPT-4o 이미지 생성)
**스타일 레퍼런스**: 따뜻한 anime 일러스트 (Studio Ghibli + 한국 만화 + 부드러운 watercolor + 랜턴 조명)
**v0.3에서 변경**: Cassette Beasts 스티커-아트 → 부드러운 storybook anime
**전제**: 사용자가 ChatGPT에 레퍼런스 이미지 첨부

---

## DALL-E 3 프롬프트 원칙 (vs Nano Banana)

- **자연어 문장** 위주 (DALL-E는 콤마 나열보다 흐르는 문장을 더 잘 따름)
- **분위기 + 조명** 먼저 명시 (DALL-E가 atmosphere 잡고 시작)
- **단일 subject** 위주 (한 이미지에 한 캐릭터)
- **DALL-E는 텍스트 못 생성** → 로고/배지 prompt에 글자 넣지 말 것
- **negative prompt 없음** → 긍정문으로 "make sure the style is X, not Y"

---

## 마스터 스타일 디스크립터 (매 프롬프트 첫 문장)

```
A warm cozy anime-style digital illustration in soft watercolor and clean
linework, inspired by Studio Ghibli warmth and modern Korean manhwa softness.
Lit by gentle golden lantern light. Storybook atmosphere with hygge comfort.
Earthy pastel palette: warm browns, soft oranges, cream beiges, muted teal
greens, dusty pinks. Subjects feel plush and huggable.
```

이 문장을 **모든 캐릭터 프롬프트 맨 앞에** 붙임. ChatGPT가 톤을 잡고 들어감.

---

## 1. 10종 컬러 일러스트 (새 컨셉 — 코지 chibi anime)

레퍼런스의 작은 몬스터 어린이들처럼 디자인. 각자 우리가 정한 시그너처는 유지하되 표현은 부드럽게.

### #1 Pibbi (Light)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a plush mouse-child with HUGE round velvety ears
(almost as big as its body), a chubby round body in soft butter yellow, big
glossy black eyes catching warm light, a tiny pink heart-shaped nose. Holding
a small glowing star in its paws — the star is the tip of its tail brought
forward like a lantern. Sitting on a warm wooden floor, soft golden light from
nearby paper lantern. Tiny sparkles drifting in the air.

Composition: front-facing, slightly tilted head, soft smile. Square 1:1.
Transparent background or warm cream.
```

### #2 Mosshu (Nature)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a sleepy round teardrop-shaped child made of soft
moss and dough, body wide at base narrowing toward the top. Two half-closed
sleepy eyes, blushing cheeks, tiny smile. A small green sprout with two tender
leaves growing from the very top of its head, slightly drooping. Sitting in a
patch of warm sunlight. Soft mossy texture on body.

Composition: front view, peaceful resting pose. 1:1.
```

### #3 Voltchi (Electric)

```
[마스터 스타일 디스크ripター]

A small soft chibi creature: a fox-cat baby with two tall pointed velvety ears,
fluffy plush body in warm cream and golden yellow, four small paws tucked under,
mischievous bright eyes with one small fang showing. Distinctive feature: a
lightning-bolt-shaped tail in soft gold and pale blue, extending UP from the
rear in a gentle zigzag. Crackling faint static sparkles around it. Standing
playfully on a wooden floor.

Composition: 3/4 view, dynamic alert pose. 1:1.
```

### #4 Bubloo (Water)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a baby whale child with round chubby horizontal
body in soft ocean blue and cream belly. One big glossy expressive eye on the
left side with sparkle highlight, smiling mouth, a small wide fan-shaped tail
fin (two flukes) on the right. A gentle water spout shooting up from the top
of its head with sparkly clear droplets, looking like a fountain crown.
Floating in calm shallow water with ripples.

Composition: side view facing right. 1:1.
```

### #5 Fangroo (Earth)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a kangaroo-rabbit baby standing upright on strong
soft back legs. Two LONG floppy plush ears hanging DOWN past head (not pointing
up). Round chubby body in warm earth orange-brown with cream belly, small front
paws crossed at chest. A big strong soft tail extending behind for balance.
Standing on a warm dirt path with small pebbles around its feet.

Composition: front-facing standing pose. 1:1.
```

### #6 Chikapi (Fire)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a round chubby child with body shaped like a warm
soft egg in warm coral red with cream belly. Big open smile showing inner mouth,
two small glossy black eyes, rosy cheeks. Crown of five soft gentle flame
tongues on top of its head, more like cozy candle flames than aggressive fire
— in warm orange-to-yellow gradient. Small stubby arms and feet. Sitting by a
warm hearth.

Composition: front view, cheerful smile. 1:1.
```

### #7 Turtloop (Metal)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a turtle child with a large dome-shaped shell
decorated with a clear soft spiral pattern (like a snail-shell spiral) etched
into bronze-gold plating that looks polished and warm. Small round happy head
poking out front with sleepy expression, four stubby legs with bronze plating,
small pointed tail. Shell looks like hand-hammered warm metal, not cold.
Sitting in a cozy nook.

Composition: 3/4 angle showing shell pattern. 1:1.
```

### #8 Nibori (Dream)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a sleeping cat child lying curled on a soft
cushion. Two pointed cat ears, eyes closed in peaceful curves (deep sleep),
content smile, long fluffy plush tail wrapping all the way around its body
like a blanket. Body in dreamy soft lavender purple with darker purple stripes,
cream belly. Tiny "Zzz" floating above its head suggesting sweet dreams. Small
crescent moon decoration in the background.

Composition: side view, peaceful curled sleeping pose. 1:1.
```

### #9 Kricko (Sound)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: a beetle-cricket child with round soft body in
warm dusty pink. Two long curved antennae extending UP from head ending in
small round gold bulbs. Six tiny soft insect legs. Holding a small wooden
shoulder drum with gentle sound waves rippling outward like soft pulses.
Friendly bug face with two big round shiny eyes. Small music notes drifting
in the warm air.

Composition: 3/4 view, sitting with drum. 1:1.
```

### #10 Luminoa (Spirit)

```
[마스터 스타일 디스크립터]

A small soft chibi creature: an elegant slender deer child with graceful soft
proportions, four slim long legs ending in tiny hooves, soft slender body in
ethereal mint teal with white belly and small forest-green markings. Big soft
glossy eyes. MOST DISTINCTIVE: an elaborate branching antler crown on its head,
with multiple delicate Y-branches forming a tree-like structure, each tip
glowing with a small warm white-gold orb of light, like floating candles.
Standing in a mystical clearing with soft floating light particles.

Composition: side profile, gentle elegant stance. 1:1.
```

---

## 2. 트레이너 캐릭터 (코지 anime 스타일)

레퍼런스 이미지의 인간 캐릭터들처럼: 부드러운 anime 페이스, 따뜻한 캐주얼 옷.

### 2.1 트레이너 영웅 포즈 (3:4)

```
[마스터 스타일 디스크립터]

A young trainer character (late teens) for a video game, standing softly in a
hero pose. Messy auburn hair in a casual ponytail with stray strands catching
golden lantern light. Dark round smart-glasses (suggests blind or low-vision)
that reflect warm light. Wearing a soft cream and warm orange knit cardigan
with white sleeve stripes, comfortable denim shorts over warm tights, plush
white sneakers with orange laces. A small canvas backpack with a slim black
rectangular tactile braille device (Dot Pad) tucked inside, visible at the
top. A foldable white guide cane gently clipped to belt.

Holding a softly glowing speckled monster egg in cupped hands, looking down at
it with gentle excitement and a soft confident smile.

Background: warm interior space, paper lantern glow, hint of cozy wooden floor.
Soft warm color palette throughout.

Composition: 3/4 view, full body, 3:4 portrait orientation.
```

### 2.2 트레이너 액션 (1:1)

```
[마스터 스타일 디스크립터]

The same trainer character (auburn ponytail, smart-glasses, cream cardigan,
denim shorts, white sneakers, backpack with Dot Pad, guide cane on belt)
captured mid-laugh, arms slightly raised in joyful surprise as small chibi
creatures float around her playfully. Soft hair flying. Warm lantern light
catching her glasses.

Background: cozy interior with paper lanterns, blurred warm bokeh.

Composition: 3/4 view, half body, 1:1 square. Soft dynamic but gentle pose
(not aggressive action).
```

### 2.3 트레이너 헤드샷 (1:1)

```
[마스터 스타일 디스크립터]

A close-up portrait of the trainer character: friendly young face, messy
auburn hair in ponytail with some strands escaping. Dark round smart-glasses
reflecting warm golden lantern glow. Gentle confident smile, soft freckles
across nose, blushing cheeks from warmth. Cream cardigan visible at neckline.

Background: soft warm bokeh of paper lanterns and wooden interior.

Composition: shoulders-up portrait, soft front-facing, 1:1 square.
```

### 2.4 그룹 키 아트 (옵션 — 레퍼런스에 가까운 컴포지션)

```
[마스터 스타일 디스크립터]

A large warm cozy group scene illustration for the title screen of "DotPetMon",
a monster collection RPG. Composition inspired by celebratory gatherings:

Center: a young trainer with auburn ponytail and smart-glasses, smiling
softly while small chibi monster creatures gather around her — about 6-8 of
the 10 species visible, each interacting with food, gifts, or each other on
a wooden table. Some perched on her shoulder, some sitting on the floor.

Visible creatures (small chibi style): a yellow mouse with huge round ears
and a star at its tail, a teardrop green moss creature with a sprout, a
golden electric fox-kit, a soft blue baby whale, an orange kangaroo-rabbit,
a cream-and-coral fire-crowned chibi, a bronze-shelled turtle, a sleeping
lavender cat curled on a cushion, a pink bug with antennae and a drum,
a mint-green deer with glowing antlers.

Setting: a warm interior space with paper lanterns hanging above, a wooden
table covered in small gifts, a birthday-style cake with candles, scattered
confetti and ribbons, dim warm glow. Storybook celebration atmosphere.

A few other young people (background, slightly blurred) gather around as
guests, all in soft cozy clothing.

Style: warm cozy anime watercolor, Studio Ghibli warmth, gentle line art,
golden lantern lighting, rich earthy palette. Storybook quality.

Composition: 16:9 widescreen ensemble illustration.
```

---

## 3. 알 일러스트 (코지 스타일)

```
[마스터 스타일 디스크립터]

A small glowing speckled monster egg resting on a soft wool blanket in a
wooden basket, warm lantern light from above. Cream pearl shell with gentle
pastel speckles in soft pink, dusty blue, warm gold, mint green. The egg
appears to breathe softly with a faint inner warm glow. Tiny hairline crack
beginning to form on top, hinting at hatching soon.

Composition: close-up still life, soft warm bokeh background. 1:1 square.
```

---

## 4. ChatGPT용 작업 브리프 (한 번에 던질 텍스트)

```
안녕! 닷펫몬(DotPetMon)이라는 비디오 게임의 캐릭터 일러스트를 만들고 싶어.

【프로젝트】
- 게임: 시각장애 친화 턴제 몬스터 수집 RPG
- 비시각장애 친구/가족과 함께 즐길 수 있는 co-play 디자인
- 모든 캐릭터는 우리 오리지널 (포켓몬 IP 모방 절대 금지)

【비주얼 스타일】
첨부한 레퍼런스 이미지의 톤을 그대로 유지해줘:
- 따뜻한 anime 워터컬러 일러스트
- Studio Ghibli + 한국 만화 영향
- 부드러운 line art + 코지한 분위기
- 랜턴 조명, hygge 무드
- 따뜻한 earth tone 팔레트 (warm brown / soft orange / cream / muted teal / dusty pink)
- 작은 chibi 몬스터 + 부드러운 anime 휴먼

【출력】
- 1:1 정사각형 (트레이너 영웅 포즈만 3:4)
- 1024×1024 이상
- 캐릭터 단독, 따뜻한 배경 또는 투명
- 한 번에 한 캐릭터씩 (시리즈 톤 일관성 유지)

【중요: 절대 하지 말 것】
- 포켓몬 캐릭터 모방 (Pikachu, Charmander, Wailord 등)
- 너무 sharp / aggressive / digital한 느낌
- 어둡거나 무서운 톤
- 너무 cute해서 unsettling한 느낌

【중요: 항상 OK】
- 부드럽고 plush한 느낌, 안고 싶은 quality
- inclusive 트레이너 (smart glasses + 가이드 케인)
- 닷 인코퍼레이션 닷패드 디바이스

【순서】
아래 프롬프트들을 하나씩 따로 생성해줘. 각 캐릭터의 시그너처 (큰 귀, 별 꼬리, 가지뿔 등)를
명확하게 살리되 전체 톤은 코지하고 부드럽게.

첫 번째: Pibbi (큰 귀 + 별 꼬리 mouse-child)
[Pibbi 프롬프트 붙여넣기]

→ 결과 마음에 들면 이어서 나머지 9종 진행할게.
```

---

## 5. v0.3 (Cassette Beasts 풍) 대비 차이

| 항목 | v0.3 (Nano Banana) | v0.4 (ChatGPT) |
|---|---|---|
| 톤 | 채도 높은 sticker art | 따뜻한 코지 watercolor |
| 외곽선 | 굵고 가변 sticker border | 부드러운 anime line art |
| 색감 | 비비드 pastel (purple/cyan) | warm earth tone (brown/orange/cream) |
| 분위기 | 활기차고 dynamic | 코지하고 hygge, 차분함 |
| 캐릭터 표정 | 큰 미소, 흥분 | 부드러운 미소, 평온 |
| 배경 | 하늘/구름 | 따뜻한 실내, 랜턴 |
| 영감 | Cassette Beasts | Studio Ghibli + 만화 |
| 트레이너 | 점프하는 스케이터 | 코지 카디건 + 잔잔한 미소 |

→ 게임의 톤도 같이 바뀜: "활기찬 모험" → "따뜻한 동반자 발견"

---

## 6. 코드/UI에 미치는 영향

v0.5.1 타이틀 화면도 톤 조정 필요:
- Hero 배경: 밝은 cyan glow → 따뜻한 amber glow
- 보더: 강한 cyan/purple → 부드러운 cream/warm brown
- Sparkles: purple 별 → 따뜻한 gold orb (랜턴 분위기)
- 폰트: 그래픽 → 더 둥글고 부드럽게 (가능하면)

이건 일러스트 받은 후에 v0.7 코드 통합 작업 시 같이 조정 가능.

---

## 7. 작업 체크리스트

ChatGPT에서 받은 후:
- [ ] 1단계: 종 10종 (가장 중요)
  - [ ] Pibbi, Mosshu, Voltchi, Bubloo, Fangroo
  - [ ] Chikapi, Turtloop, Nibori, Kricko, Luminoa
  - [ ] 10개 나란히 비교 → 시리즈 일관성 OK
- [ ] 2단계: 트레이너 3 포즈
  - [ ] 영웅 포즈 (3:4)
  - [ ] 액션 (1:1)
  - [ ] 헤드샷 (1:1)
- [ ] 3단계 (옵션): 그룹 키 아트 (16:9, 타이틀 hero용)
- [ ] 알 일러스트 (부화 미니게임용)
- [ ] 모든 PNG → `dotpetmon-prototype/assets/illustrations/` 저장
- [ ] Claude에게 v0.7 코드 통합 요청 (UI 톤 조정 포함)

---

## 8. 라이센스

레퍼런스 이미지가 누구의 작품인지 확인 필요:
- 만약 특정 아티스트의 작품이면 → **스타일 차용은 OK이나, 캐릭터 직접 모방 금지**
- 트레이너 / 종 모두 우리 오리지널 디자인 (시그너처는 우리 픽셀 스프라이트 기반)
- 작품 게시 시 "Inspired by [reference artist] style" 명시 권장 (안전)

ChatGPT는 작품 일부 디테일을 학습 데이터에서 빌릴 수 있으니 결과물에 익숙한 캐릭터가
보이면 즉시 regenerate. **포켓몬 모방** + **레퍼런스 그림의 실제 캐릭터 복사**는 둘 다 X.
