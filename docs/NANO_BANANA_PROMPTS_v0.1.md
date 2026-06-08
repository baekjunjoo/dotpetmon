# 닷펫몬 나노바나나 아트 프롬프트 세트 v0.1

**스타일 레퍼런스**: Cassette Beasts — New Wirral Edition 키 아트
**모델**: Google Gemini 2.5 Flash Image (Nano Banana)
**사용처**: 닷펫몬 게임 UI / 타이틀 화면 / 캐릭터 일러스트

---

## 0. 공통 스타일 디스크립터 (모든 프롬프트에 베이크인)

모든 이미지에 일관성을 주기 위해 다음 스타일 단어 세트를 항상 포함:

### 0.1 영문 마스터 스타일 디스크립터 (복사용)

```
vibrant cartoon illustration, hand-drawn lineart with varied bold weights,
saturated pastel color palette with purples blues yellows and oranges,
playful Y2K and 90s anime aesthetic, sticker-art quality with crisp white outlines,
clean flat shading with subtle highlights, energetic dynamic composition,
cute friendly character designs, soft cloud backgrounds, kinetic floating elements
```

### 0.2 색상 팔레트 명시

```
Color palette: lavender purple #AFA9EC, sky blue #85B7EB, sunny yellow #FAC775,
warm orange #ff7a45, soft pink #F4C0D1, mint green #9FE1CB, white #ffffff,
deep navy outlines #1A1F3A
```

### 0.3 네거티브 (피해야 할 것)

```
Negative prompt: realistic, photorealistic, dark gritty, horror, blood, gore,
copyrighted Pokemon characters, copyrighted Pikachu, no Nintendo IP,
no anime cliches, no excessive detail, no muddy colors
```

---

## 1. 메인 키 아트 (타이틀 화면) — 최우선

### 1.1 풀 컴포지션 (16:9, 1920×1080)

```
A vibrant cartoon illustration in Cassette Beasts art style, depicting a heroic
title screen composition.

In the center-left, a young trainer character with messy auburn hair holding a
rectangular tactile braille reading device (Dot Pad — a small black device with
grid of small white tactile dots, 40 columns wide), wearing headphones and a
purple zip-up jacket with white sleeves, denim shorts over leggings, sneakers,
caught mid-jump with arms spread, joyful expression. The trainer has accessible
design — wearing dark sunglasses or smart glasses, with a guide cane visible.

To the right, ten unique cute monster creatures floating dynamically through
the air, each with distinct silhouettes:
- A mouse with huge round ears and a star-shaped tail (yellow)
- A teardrop-shaped hill creature with a sprout on top (green)
- A four-legged feline creature with a lightning bolt tail going up (yellow electric)
- A whale-like creature with a water spout on its head (blue)
- A kangaroo-rabbit hybrid with long floppy ears and thick tail (orange-brown)
- A round body with flame crown on head (red-orange)
- A turtle with spiral shell pattern (gray-silver)
- A sleeping cat curled up with tail wrapped (purple lavender)
- An insect creature with long antennae and small drum (pink)
- An elegant deer with elaborate branching antlers and glowing light orbs (teal-mint)

Background: bright pastel blue sky with fluffy white clouds, scattered floating
papers and tactile dot patterns drifting in the air.

Bottom-left area: stylized logo space for "닷펫몬" (DotPetMon) text logo,
hand-lettered brush-style typography with white outline and purple shadow.

Style: vibrant cartoon illustration, hand-drawn lineart with varied bold weights,
saturated pastel color palette, playful Y2K and 90s anime aesthetic, sticker-art
quality with crisp white outlines, clean flat shading, energetic dynamic composition,
cute friendly character designs, soft cloud backgrounds, kinetic floating elements.

Color palette: lavender purple #AFA9EC, sky blue #85B7EB, sunny yellow #FAC775,
warm orange #ff7a45, soft pink #F4C0D1, mint green #9FE1CB.

Aspect ratio: 16:9 widescreen.

Negative: realistic, photorealistic, dark, horror, copyrighted Pokemon,
copyrighted Pikachu, Nintendo IP.
```

### 1.2 모바일/세로 버전 (9:16)

위 프롬프트에서 마지막 줄만 변경:
```
Aspect ratio: 9:16 vertical mobile. Trainer in center, creatures arranged
above and below in vertical composition.
```

---

## 2. 로고 디자인

### 2.1 메인 로고 (한글 + 영문)

```
A hand-drawn brush-style logo for a video game called "닷펫몬" (DotPetMon).

Top line: large bold Korean characters "닷펫몬" in graffiti brush calligraphy
style, thick black strokes with bright orange #ff7a45 fill and white outer border.
The characters should feel energetic and bouncy, slightly tilted, with rough
edges suggesting paint brush texture.

Bottom line: subtitle "DOTPETMON" in smaller English brush lettering, navy blue
with white outline.

Decorative elements: a small purple sparkle star to the upper-left of the logo,
a cute tactile braille dot pattern (3 small white dots in a triangle) integrated
into the design.

Background: transparent or solid white.

Style: graffiti street art logo, hand-painted brush calligraphy, video game
title typography, vibrant cartoon aesthetic, crisp white outlines, thick bold
strokes, slightly imperfect organic letterforms, sticker-art quality.

Color palette: orange #ff7a45 primary, navy #1A1F3A outlines, purple #AFA9EC
accents, white #ffffff borders.

Aspect ratio: 16:9 landscape. Transparent PNG output preferred.

Negative: clean digital fonts, sans-serif, generic typography, copyrighted logos.
```

### 2.2 미니 로고 (UI 헤더용, 작은 사이즈)

```
A compact version of the DotPetMon logo for use in game UI headers. Single line
brush-style Korean "닷펫몬" with English "DOTPETMON" beneath in smaller text.
Hand-drawn, orange and navy, white outline, sticker-art quality.

Aspect ratio: 4:1 horizontal banner. Transparent background.
```

---

## 3. 트레이너 (주인공) 캐릭터

### 3.1 풀바디 캐릭터 시트 (4 포즈)

```
Character design sheet for the main protagonist of "DotPetMon", an inclusive
accessibility-focused monster collection RPG.

Character: a young trainer in their late teens with messy auburn hair styled
in a casual ponytail, wearing dark round smart-glasses (suggests blind or
low-vision character), purple zip-up hoodie with white sleeve stripes and
collar trim, denim shorts over black leggings, chunky white sneakers with
orange laces, headphones around neck. They wear a small backpack containing
a rectangular tactile reading device (Dot Pad) and they carry a foldable
white guide cane clipped to their belt.

Show four views from left to right:
1. Front view standing pose, holding a glowing egg in cupped hands, soft smile
2. Side profile walking, cane extended, confident stride
3. Action pose mid-jump, arms spread, joyful expression, hair flying
4. Back view facing right, looking over shoulder, showing backpack with Dot Pad

Style: vibrant cartoon illustration, hand-drawn lineart with bold varied weights,
saturated pastel colors, clean flat shading with simple highlights, sticker-art
quality with crisp outlines, friendly approachable design, Y2K and 90s anime
influenced. Character should look inclusive, athletic, joyful.

Background: plain off-white #F5F2E8 with subtle paper texture.

Color palette: purple #AFA9EC for hoodie, white #ffffff for stripes,
denim blue #5C7AA8 for shorts, orange #ff7a45 for accents, auburn red-brown
#A8553A for hair.

Aspect ratio: 21:9 ultrawide reference sheet.
```

### 3.2 단일 영웅 포즈 (메인 메뉴용)

```
Hero pose portrait of the DotPetMon protagonist: young trainer with messy auburn
ponytail, round dark smart-glasses, purple hoodie, denim shorts, white sneakers,
headphones around neck, holding a rectangular tactile dot pad device in left
hand and a glowing speckled egg in right hand. Standing confidently with feet
planted, soft confident smile.

Background: simple pastel sky gradient (light blue to lavender) with a few
white cloud puffs and floating dot patterns.

Style: vibrant cartoon illustration, hand-drawn lineart, saturated colors,
sticker-art quality, Cassette Beasts visual style.

Aspect ratio: 3:4 portrait.
```

### 3.3 트레이너 페이스 (대화 / 닷펫몬 도감 헤더용)

```
Headshot portrait of the DotPetMon protagonist: friendly young trainer face,
messy auburn hair, round dark smart-glasses reflecting soft light, gentle
smile, hint of orange-purple gradient behind.

Style: cartoon character portrait, hand-drawn lineart, flat shading with cute
highlights, sticker-art quality.

Aspect ratio: 1:1 square.
```

---

## 4. 10종 컬러 일러스트 (각 종 일러스트)

각 종을 게임 도감, 카드, 카탈로그 등에 쓸 컬러 일러스트로. 우리가 픽셀 스프라이트로 디자인한 디테일을 컬러로 옮김.

### 4.1 #1 Pibbi (Light)

```
Cute cartoon monster illustration: a small mouse-like creature with massive
round ears (almost completely circular, taking up half its body size), short
fluffy body, two big round black eyes, tiny pink nose, small smile, and a
sparkling 5-pointed star at the tip of its tail. Color: bright sunny yellow
#FAC775 body, cream white belly, deep yellow ear interiors, glowing white
star tail with soft yellow aura.

Personality: cheerful, energetic, sparkly. Floating sparkles around it.

Style: vibrant cartoon illustration, hand-drawn lineart with bold varied weights,
sticker-art quality with crisp white outline, flat color with subtle highlights,
Cassette Beasts visual style.

Background: solid pastel lavender or transparent.

Aspect ratio: 1:1 square.
```

### 4.2 #2 Mosshu (Nature)

```
Cute cartoon monster illustration: a teardrop-shaped hill creature, fluffy
moss-covered round body that's wide at the base and narrows toward the top,
with a small green sprout (two tiny leaves on a short stem) growing from
the very top of its head. Half-closed sleepy eyes and a tiny content smile.
Small stubby feet underneath.

Color: deep moss green #97C459 body, lighter green #C0DD97 belly, vibrant
fresh green sprout, subtle texture suggesting fluffy moss.

Personality: peaceful, slow-moving, gentle. Small flower petals or pollen
floating around.

Style: vibrant cartoon illustration, hand-drawn lineart, sticker-art quality.
Background: pastel mint or transparent.
```

### 4.3 #3 Voltchi (Electric)

```
Cute cartoon monster illustration: a four-legged fox-cat hybrid creature with
two large pointed triangular ears, fluffy body, four small paws, mischievous
expression with a wide smirk and one fang showing. Most distinctive feature:
a lightning-bolt-shaped tail extending UPWARD from its rear in sharp zigzags,
crackling with electric energy.

Color: bright electric yellow #F2C14E body, cream belly, black-tipped ears,
electric blue lightning tail with white core. Static electricity sparks around it.

Personality: hyperactive, fast, playful trickster.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel yellow with crackling electric arcs.
```

### 4.4 #4 Bubloo (Water)

```
Cute cartoon monster illustration: a small whale creature with a round chubby
horizontal body, single large expressive eye on the left side, smiling mouth,
a wide fan-shaped tail fin on the right with two flukes spreading top and
bottom. Most distinctive feature: a water spout shooting up from the top of
its head with spray droplets fanning out.

Color: ocean blue #85B7EB body, lighter blue belly, deep navy tail fin edges,
sparkling clear blue water spout. Bubbles floating around.

Personality: calm, friendly, contemplative.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel sky blue with bubble accents.
```

### 4.5 #5 Fangroo (Earth)

```
Cute cartoon monster illustration: a sturdy kangaroo-rabbit hybrid standing
upright on two strong back legs, with two long floppy ears HANGING DOWN past
its head (not pointing up), round body, small front paws crossed at chest,
big strong tail extending behind for balance, large powerful hind feet.

Color: warm earth-orange #D85A30 body, cream belly, darker brown ear tips
and tail, hint of clay or terracotta texture. Small rocks and dust kicked up
around its feet.

Personality: sturdy, dependable, ground-pounder.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel terracotta or transparent.
```

### 4.6 #6 Chikapi (Fire)

```
Cute cartoon monster illustration: a round chubby creature with a body shaped
like an egg, big wide smile showing inner mouth, two small black eyes,
prominent feature is a CROWN OF FIVE FLAMES on top of its head (one tall
center flame, two medium side flames, two small outer flames). Small stubby
arms and feet.

Color: warm red-orange #E24B4A body, cream belly, vibrant orange-to-yellow
gradient flames on head, embers and sparks floating around.

Personality: passionate, enthusiastic, warm.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel coral with heat shimmer.
```

### 4.7 #7 Turtloop (Metal)

```
Cute cartoon monster illustration: a turtle creature with a large dome-shaped
shell decorated with a clear SPIRAL PATTERN (like a snail-shell spiral) etched
into metallic plating. Small round head poking out front with happy expression,
four stubby legs with metallic plating, small pointed tail. Shell looks like
hammered metal or polished steel.

Color: gunmetal gray #888780 shell with silver highlights, light gray plating
edges, warm tan #B4B2A9 head and legs, dark metallic spiral pattern.

Personality: stoic, slow, defensive, ancient.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel gray or transparent.
```

### 4.8 #8 Nibori (Dream)

```
Cute cartoon monster illustration: a sleeping cat creature lying on its side
in a curled position, two big pointed cat ears, eyes closed in peaceful curves
(suggesting deep sleep), small smile, very long fluffy tail wrapping all the
way around its body. Soft "Zzz" zzz floating above its head suggesting dream.

Color: dreamy lavender purple #AFA9EC body, darker purple stripes or markings,
soft pink nose, cream belly, pastel rainbow Zzz letters above.

Personality: dreamy, peaceful, mysterious, mystical.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel purple with subtle stars and crescent moon.
```

### 4.9 #9 Kricko (Sound)

```
Cute cartoon monster illustration: a beetle-cricket hybrid creature with a
round body, two LONG curved antennae extending up from its head ending in
small round bulbs, six small insect legs, friendly bug face with two big
round eyes. Holding or accompanied by a small SHOULDER DRUM or hand drum,
with sound wave ripples emanating outward.

Color: soft pink #F4C0D1 body, warm rose belly, gold accents on antennae bulbs
and drum, white sound waves rippling outward. Small music notes floating around.

Personality: rhythmic, social, vibrating with energy.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality.
Background: pastel pink with music note pattern.
```

### 4.10 #10 Luminoa (Spirit)

```
Cute cartoon monster illustration: an elegant slender deer creature with
graceful proportions, four slim long legs ending in small hooves, slim
elongated body, small refined head, big soft eyes. MOST DISTINCTIVE FEATURE:
an elaborate branching antler crown on its head, with multiple Y-branches
forming a delicate tree-like structure, each tip glowing with a small white
ORB OF LIGHT.

Color: ethereal mint teal #9FE1CB body with darker forest-green markings,
white belly, glowing white-gold antler tips, soft golden light orbs floating
around its body. Magical aura.

Personality: spiritual, gentle, otherworldly, ancient wisdom.

Style: vibrant cartoon, hand-drawn lineart, sticker-art quality, with subtle
glow effects on light orbs.
Background: pastel teal with floating light particles.
```

---

## 5. 8 지역 배경 일러스트

각 지역의 분위기를 담은 풍경 배경 (게임 내 지역 선택 / 탐험 화면 배경용).

### 5.1 #1 Starter Plains (스타터 평원)

```
A peaceful rolling grassland landscape, soft gentle hills covered in vibrant
green grass with small pink wildflowers, a few large fluffy clouds in a bright
clear sky, scattered round bushes, distant smaller hills on horizon, a winding
dirt path leading into the scene. Warm sunlight, golden hour quality.

Style: vibrant cartoon illustration, hand-drawn lineart with bold weights, flat
colors with subtle gradient skies, Cassette Beasts visual style, no people or
creatures visible.

Color palette: fresh green #97C459 grass, sky blue #85B7EB sky, soft pink
flowers, golden sunlight.

Aspect ratio: 16:9 widescreen environment.
```

### 5.2 #2 Whispering Forest (속삭이는 숲)

```
A misty enchanted forest scene at dawn, tall ancient trees with twisted trunks
forming a canopy, soft pastel fog rolling between trees, ferns and moss covering
the forest floor, gentle light beams filtering through the canopy in soft
purple-pink hues, mysterious atmosphere. Hints of magical sparkles floating
in the air.

Style: vibrant cartoon illustration, hand-drawn lineart, dreamy soft palette
with pastel purples and mossy greens.

Aspect ratio: 16:9.
```

### 5.3 #3 Ember Volcano (불꽃 화산)

```
A dramatic volcanic landscape with a large smoking volcano in the background,
flowing lava rivers in the midground, glowing orange embers floating in the
air, dark rocky terrain with cracked stone patterns, occasional small fire
plumes. Warm orange-red lighting with deep purple sky above.

Style: vibrant cartoon illustration, hand-drawn lineart, bold warm colors,
cartoon stylized volcano.

Aspect ratio: 16:9.
```

### 5.4 #4 Mirror Lake (거울 호수)

```
A serene crystal-clear lake with perfect mirror reflections of the sky, ringed
by smooth pebble beach and small water-eroded boulders. A few tall reed plants
near the shore. Pastel blue sky with soft pink and lavender sunset clouds
reflected in the still water. Subtle ripples in the distance.

Style: vibrant cartoon illustration, hand-drawn lineart, soft pastel palette,
emphasis on reflection and tranquility.

Aspect ratio: 16:9.
```

### 5.5 #5 Storm Plain (폭풍 평원)

```
A dramatic open plain under stormy skies, dark navy clouds with bright cyan
lightning bolts striking down in multiple places, tall waving grass blown
sideways by wind, scattered ancient standing stones, electric energy crackling
across the landscape, dramatic mood with intense energy.

Style: vibrant cartoon illustration, hand-drawn lineart, bold contrasting
colors, dynamic stormy atmosphere.

Aspect ratio: 16:9.
```

### 5.6 #6 Iron Cave (철의 동굴)

```
The interior of a deep cave with metallic ore veins running through dark
stone walls, glowing crystals embedded in rock formations, stalactites and
stalagmites, mysterious underground river, soft blue-purple cave lighting
from glowing mineral deposits, sparkles of silver light.

Style: vibrant cartoon illustration, hand-drawn lineart, cool blue-purple
palette with metallic silver accents.

Aspect ratio: 16:9.
```

### 5.7 #7 Sacred Grove (성스러운 숲)

```
A mystical grove with ancient massive trees forming a circular clearing, soft
glowing light orbs floating between trees, ethereal mist on the ground, ancient
moss-covered stone shrines, fireflies twinkling, magical golden-teal aura
permeating everything, sense of spiritual presence.

Style: vibrant cartoon illustration, hand-drawn lineart, ethereal pastel palette
with mint teal and gold accents, magical mystical atmosphere.

Aspect ratio: 16:9.
```

### 5.8 #8 Echo Sanctum (메아리 신전)

```
A grand ancient temple ruin with towering columns, dramatic crumbling stone
architecture, floating glowing tactile dot patterns in the air (suggesting the
Dot Pad theme), dramatic shafts of light from above, mystical floating
platforms, sense of climactic final destination, regal and imposing.

Style: vibrant cartoon illustration, hand-drawn lineart, dramatic regal palette
with gold purple and white, epic boss-arena atmosphere.

Aspect ratio: 16:9.
```

---

## 6. UI 요소 (게임 화면 디자인)

### 6.1 메뉴 프레임 / 패널 보더

```
A hand-drawn cartoon UI frame for a video game menu, rectangular shape with
rounded corners. Border: thick varied-weight black brush lines on the outside,
bright purple #AFA9EC inner fill with white #ffffff inner highlight border.
Four corners decorated with small white sparkle stars. Slight imperfect organic
edges suggesting hand-drawn quality. Inside center area transparent for content.

Style: sticker-art UI element, Cassette Beasts aesthetic, video game frame.

Aspect ratio: 3:2 horizontal panel. Transparent inside, opaque border. PNG with
transparent background.
```

### 6.2 버튼 디자인 세트 (3 상태)

```
A set of three cartoon UI buttons in a horizontal row, all the same shape (wide
pill rounded rectangle) but different states:

Left button (Normal): orange #ff7a45 background with white text "버튼", thick
black brush outline, white highlight on top edge, slight shadow underneath.

Middle button (Hover): same shape but lifted up slightly, brighter orange,
glowing effect around edges, small sparkles to the sides.

Right button (Pressed): same shape but pressed down (deeper position), darker
orange, indented appearance, no shadow.

All buttons have rough hand-drawn quality, varied stroke weights, sticker-art
look.

Style: cartoon UI button set, hand-drawn, video game design, sticker-art
quality, Cassette Beasts aesthetic.

Aspect ratio: 6:1 wide horizontal layout showing all three states.
```

### 6.3 10 타입 배지 디자인 시트

```
A clean reference sheet showing 10 cartoon-style type badges for a monster
collection game, arranged in a 5x2 grid. Each badge is a round circular icon
with bold colored border, distinct symbol inside, and the type name below.

Row 1 (left to right):
1. LIGHT — yellow #FAC775, 4-pointed star symbol
2. NATURE — green #97C459, leaf symbol
3. ELECTRIC — bright yellow #F2C14E, lightning bolt symbol
4. WATER — blue #85B7EB, water droplet symbol
5. EARTH — orange-brown #D85A30, mountain/diamond symbol

Row 2:
6. FIRE — red #E24B4A, flame symbol
7. METAL — gray #888780, gear/cog symbol
8. DREAM — purple #AFA9EC, crescent moon symbol
9. SOUND — pink #F4C0D1, music note symbol
10. SPIRIT — mint teal #9FE1CB, flower/sparkle symbol

Each badge has thick black brush outline, white inner highlight, slightly
imperfect hand-drawn quality, sticker-art finish.

Style: cartoon UI badge set, hand-drawn, video game icons, sticker-art
quality.

Aspect ratio: 5:2 horizontal sheet.
```

### 6.4 닷펫몬 카드 (도감용)

```
A cute trading-card style template for a monster collection game. Card has
rounded rectangle shape with thick decorative border. Top section: large area
for monster illustration. Middle section: monster name in brush lettering with
type badge in the corner. Bottom section: stat bars (HP, ATK, DEF) and short
descriptive text area.

Border: thick varied-weight black brush lines, inner white highlight, decorative
sparkle stars in corners, slight aged paper texture inside.

Background: cream off-white #F5F2E8 with subtle dot pattern texture.

Style: hand-drawn cartoon UI card, sticker-art quality, video game collectible
card aesthetic, Cassette Beasts style.

Aspect ratio: 2:3 portrait trading card.
```

### 6.5 알 (Egg) — 부화 미니게임용

```
A glowing speckled monster egg, oval-shaped, slightly cracked at the top with
faint magical light glowing through the cracks. Egg shell has soft pastel
spots in multiple colors (pink, blue, yellow, mint), with a few cracks running
along the top half showing inner glow.

Render in 3 stages for the hatching animation:
1. Whole egg, no cracks
2. Egg with small cracks
3. Egg with large cracks, bright glow inside

Style: vibrant cartoon illustration, hand-drawn lineart, sticker-art quality,
magical glowing effect.

Background: transparent or soft white halo.

Aspect ratio: 3:1 horizontal showing all three stages.
```

### 6.6 닷패드 디바이스 일러스트

```
A friendly cartoon illustration of the Dot Pad — a real tactile braille reading
device. The device is a thin black rectangular tablet, approximately 2:1 aspect
ratio (wider than tall), with a grid of small white circular tactile dots
covering most of the surface (40 columns × 60 rows of dots). At the bottom
edge: 4 small function buttons labeled F1, F2, F3, F4 and panning keys.
The device is shown at a slight 3/4 angle.

Render in two states:
1. OFF state — all dots flush flat
2. ON state — some dots raised showing a cute monster silhouette in the middle
   of the grid (a small star pattern would work)

Style: hand-drawn cartoon illustration, clean lineart, friendly tech device
aesthetic, sticker-art quality.

Color: matte black device, white tactile dots, orange button accents.

Aspect ratio: 3:2 horizontal product shot.
```

---

## 7. 화면 컴포지션 (전체 화면 모형)

### 7.1 타이틀 화면 모형 (전체 화면 컴포지션)

```
Full game title screen mockup for "닷펫몬 (DotPetMon)", an inclusive monster
collection RPG. Composition guide:

Background: vibrant pastel sky with fluffy clouds, soft blue gradient.

Top-center: large brush-lettered logo "닷펫몬" in orange with navy outline,
subtitle "DOTPETMON" below.

Center: hero pose of the trainer protagonist (auburn hair, smart-glasses,
purple hoodie) holding a glowing speckled egg, surrounded by floating
cute monster creatures of various types.

Bottom: three large cartoon-style menu buttons:
- "새 게임" (New Game) in orange
- "이어하기" (Continue) in blue
- "도감" (DexDex) in purple

Bottom-right corner: small Dot Pad device illustration suggesting accessibility.

Bottom-left corner: small copyright text "© 2026 Dot Incorporation"

Style: vibrant cartoon illustration, hand-drawn lineart, sticker-art quality,
Cassette Beasts visual style, energetic playful composition.

Aspect ratio: 16:9 widescreen title screen.
```

### 7.2 메인 메뉴 컴포지션

```
In-game main menu screen mockup. Composition:

Left panel: large illustrated portrait of the trainer's currently active starter
monster (full color illustration), with name and level below.

Center panel: stylized menu list with 6 options in cartoon buttons:
- 모험 (Adventure)
- 도감 (Dex)
- 파티 (Party)
- 상점 (Shop)
- 트레이드 (Trade)
- 설정 (Settings)

Right panel: small section showing trainer stats — Dex completion %, money,
play time.

Top banner: brush-lettered "닷펫몬" logo on left, save slot info on right.

Background: subtle pastel pattern with floating dot textures.

Style: vibrant cartoon UI, hand-drawn lineart, sticker-art quality.

Aspect ratio: 16:9 widescreen game UI.
```

### 7.3 지역 선택 화면

```
Region selection screen for a monster collection RPG. Composition:

A large central area showing the currently focused region as a beautiful
illustrated landscape painting (e.g., Starter Plains rolling green hills).
Below the landscape: region name in brush lettering "Starter Plains 스타터 평원"
with subtitle "Lv 3-8 · Light, Nature".

Around the central image, 7 smaller circular preview thumbnails of other
regions arranged in an arc — each showing a tiny version of the landscape
with the region number. Unlocked regions have bright colors, locked regions
have a darker overlay with a small lock icon.

Bottom: button "출발하기" (Go!) in orange, "돌아가기" (Back) in gray.

Top banner: 닷펫몬 logo, current region count "1/8 해금"

Style: vibrant cartoon UI, hand-drawn lineart, sticker-art quality, video game
travel/map screen.

Aspect ratio: 16:9.
```

### 7.4 배틀 화면

```
Turn-based battle screen mockup. Composition:

Background: lightly faded environment matching current region (e.g., a forest
clearing).

Top-left: opponent's monster (large illustration) with HP bar above and type
badge.

Bottom-right: player's monster (large illustration, facing right) with HP bar
above, type badge, and current level.

Bottom panel: 4 large cartoon-style move buttons in a 2x2 grid, each showing
the move name and type icon.

Left side panel: small action menu — Fight, Catch, Bag, Run icons in a
vertical stack.

Top-right: turn indicator showing "당신 차례" (Your Turn) in brush lettering.

Style: vibrant cartoon battle UI, hand-drawn, sticker-art quality, dynamic
energetic layout.

Aspect ratio: 16:9.
```

---

## 8. 사용 가이드

### 8.1 우선순위 (제작 순서 추천)

1. **메인 키 아트** (1.1) — 게임의 비주얼 톤 결정. 가장 중요
2. **로고** (2.1) — 모든 화면에 들어감
3. **트레이너 캐릭터** (3.1) — 주인공이라 자주 등장
4. **10종 컬러 일러스트** (4.1~4.10) — 도감 + 카드 + 메뉴용. 점진적 제작 OK
5. **UI 요소** (6.1~6.6) — 게임 디자인 시스템 베이스
6. **화면 컴포지션** (7.1~7.4) — 레퍼런스용. 실제는 코드로 구현
7. **지역 배경** (5.1~5.8) — 후순위, 일단 placeholder로 가능

### 8.2 생성 팁

- **씨드 고정**: 한 스타일 잡히면 같은 seed로 일관성 유지
- **반복 생성**: 같은 프롬프트 4-8회 생성 → 베스트 1개 선택
- **부분 수정**: 결과 마음에 들면 specific 디테일만 수정 (예: "change Pibbi's color to brighter yellow")
- **배경 분리**: 캐릭터 + 배경 따로 생성 → 합성이 더 깔끔
- **레퍼런스 첨부**: Cassette Beasts 키아트 이미지를 같이 첨부하면 톤 매칭 잘됨

### 8.3 후처리

- 모든 PNG는 게임 어셋용 → 배경 투명 처리 (Photoshop/Figma)
- 일러스트는 1024×1024 또는 2048×2048 추천
- 게임 내에서 다운스케일해서 사용

### 8.4 라이센스 안전

- Cassette Beasts 캐릭터/로고를 직접 모방하지 말 것 — 스타일만 차용
- 포켓몬 IP 절대 언급 금지 (negative prompt에 명시)
- 우리 닷펫몬 종은 모두 오리지널 — 픽셀 스프라이트의 특징을 컬러 일러스트로 옮기는 것
- 트레이너 캐릭터는 inclusive accessibility 디자인 — 시각장애 표현 (smart glasses + cane) 자연스럽게

---

## 9. 다음 단계

1. **나노바나나로 1.1 메인 키 아트 먼저 생성** → 톤 컨펌
2. **로고 (2.1)** → 헤더용 미니 버전까지
3. **트레이너 (3.1, 3.2)** → 캐릭터 시트 + 영웅 포즈
4. **10종 (4.1~4.10)** → 각 4-8회 생성 → 베스트 셀렉트
5. **UI 요소 (6.1~6.6)** → 디자인 시스템 베이스 마련
6. **결과물 → `assets/illustrations/` 저장 → v0.4 프로토타입에서 사용**
