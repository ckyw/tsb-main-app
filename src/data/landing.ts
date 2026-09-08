export type ConceptItem = {
  key: "tap" | "shop" | "bar";
  title: string;
  tagline: string;
  description: string[];
  image: string;
  imageAlt: string;
};

export type AppFeature = {
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
};

export const heroContent = {
  eyebrow: "TAPSHOPBAR APP",
  title: "wine is\nsecond americano",
  description: "와인을 더 쉽게, 취향은 더 확실하게.\n탭샵바에서 시작해 보세요.",
  ctaLabel: "앱 설치하기",
};

export const conceptContent = {
  title: "와인의 새로운 패러다임\nTAP · SHOP · BAR",
  items: [
    {
      key: "tap",
      title: "TAP",
      tagline: "디스펜서에 탭 한 번, 원하는 만큼만 맛보고 선택",
      description: [
        "30ml 테이스팅부터 80ml 한 잔까지",
        "직원에게 묻지 않아도 내 취향을 직접 확인할 수 있어요.",
      ],
      image: "/images/features/tap.webp",
      imageAlt: "디스펜서에서 와인을 따르는 손그림",
    },
    {
      key: "shop",
      title: "SHOP",
      tagline: "마음에 든 와인은 그 자리에서 바로 구매",
      description: [
        "시음 후 마음에 들면 소매가 그대로 구매할 수 있어요.",
        "재고를 확인하고 픽업까지 가능해요.",
      ],
      image: "/images/features/shop.webp",
      imageAlt: "와인 두 병을 쇼핑백에 담는 손그림",
    },
    {
      key: "bar",
      title: "BAR",
      tagline: "가벼운 한 잔부터 식사까지, 편하게 머무는 공간",
      description: [
        "와인 한 잔에 미식을 더해 더욱 풍성한 시간을 즐겨보세요.",
        "혼술이든 데이트든 회식이든 각자의 방식대로 머물 수 있어요.",
      ],
      image: "/images/features/bar.webp",
      imageAlt: "와인과 음식을 함께 즐기는 테이블 손그림",
    },
  ] satisfies ConceptItem[],
};

export const appFeaturesContent = {
  title: "더 편리한 경험을 위한\n탭샵바의 새로운 시도",
  items: [
    {
      title: "매장 디스펜서를 스캔하고,\n월렛으로 바로 결제!",
      description: [
        "스캔하고 원하는 와인을 원하는 만큼 테이스팅해 보세요.",
        "여러 와인을 자유롭게 비교하며 나만의 취향을 발견할 수 있습니다.",
        "충전해둔 월렛으로 바로 결제할 수 있고, 이용할수록 멤버십 등급도 차곡차곡 쌓여요.",
      ],
      image: "/images/app/wallet-qr-screen.webp",
      imageAlt: "탭샵바 앱 월렛과 QR 결제 화면",
    },
    {
      title: "눈치 보지 않고\n테이블 QR로 주문",
      description: [
        "매장 테이블의 QR코드를 스캔하면 바로 주문 화면으로 연결됩니다.",
        "앱에서 메뉴를 고르고 실시간 재고를 확인해 픽업 또는 배달로 주문할 수 있어요.",
      ],
      image: "/images/app/order-screen.webp",
      imageAlt: "탭샵바 앱 주문 방식 선택 화면",
    },
    {
      title: "마신 와인과 탭 횟수가,\n나만의 취향으로",
      description: [
        "매장에서 마신 와인 종류와 탭 횟수가 마이셀러에 자동으로 기록됩니다.",
        "쌓인 히스토리를 바탕으로 오늘의 취향에 맞는 와인을 더 쉽게 고를 수 있습니다.",
      ],
      image: "/images/app/myseller-screen.webp",
      imageAlt: "탭샵바 앱 마이셀러 취향 기록 화면",
    },
  ] satisfies AppFeature[],
};

export const membershipContent = {
  title: "마시는 만큼 쌓이는 혜택들",
  description: "매일 즐기는 커피 한 잔의 여유부터 포인트 적립까지.\nVIP만의 특별한 혜택을 경험해보세요.",
  image: "/images/features/vip-benefits.webp",
  imageAlt: "VIP 카드, 커피, 캘린더와 포인트 손그림",
  benefits: [
    { label: "VIP 조건", value: "10만 원 이상 구매", tone: "red" },
    { label: "VIP 혜택", value: "30일간 매일 한 잔 커피 무료", tone: "blue" },
    { label: "VIP 혜택", value: "결제 금액 10% 포인트 적립", tone: "yellow" },
  ],
};

export const finalCtaContent = {
  title: "Find\nYour Wine.",
  description: "지금 앱을 다운로드하고,\n첫 번째 와인 취향을 발견해 보세요",
  panelText: "와인을 더 쉽게, 취향은 더 확실하게.\n탭샵바에서 시작해 보세요.",
  image: "/images/app/download.webp",
  imageAlt: "탭샵바 앱을 다운로드하는 손그림",
  ctaLabel: "앱 설치하기",
};
