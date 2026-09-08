# TapShopBar App Launch Landing Page

탭샵바 모바일 앱 출시를 위한 반응형 랜딩 페이지입니다. 현재 저장소의 `tsb_main.pdf`를 1차 디자인 기준으로 사용했으며, 이후 카피·이미지·캠페인·섹션 변경이 쉽도록 콘텐츠와 화면 구조를 분리했습니다.

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel 배포 호환

## 로컬 실행

```bash
npm install
npm run dev
```

프로덕션 확인:

```bash
npm run lint
npm run build
npm start
```

## 주요 구조

```text
src/
  app/             페이지, 전역 스타일, 메타데이터
  components/      섹션 단위 React 컴포넌트
  config/site.ts   앱 URL과 캠페인 설정
  data/landing.ts  랜딩 페이지 카피와 이미지 경로
public/
  images/          브랜드, 앱 화면, 기능, 캠페인 이미지
  lottie/          향후 적용 가능한 온보딩 Lottie 원본
```

## 자주 바꾸는 항목

- 히어로와 모든 섹션 카피: `src/data/landing.ts`
- 앱 설치 URL: `src/config/site.ts`의 `appDownloadUrl`
- 캠페인 문구와 조건: `src/config/site.ts`의 `campaignConfig`
- 앱 화면 이미지: `public/images/app/`에서 같은 파일명으로 교체하거나 `src/data/landing.ts`의 경로 변경
- 섹션 순서/노출: `src/app/page.tsx`의 컴포넌트 순서 변경 또는 해당 컴포넌트 제거
- 새 섹션: `src/components/`에 섹션 컴포넌트를 추가하고 `src/app/page.tsx`에서 배치

이미지는 현재 PDF에 포함된 원본을 추출해 WebP로 정리했습니다. 교체 시 가급적 기존 가로세로 비율을 유지하되, 컴포넌트는 다른 크기의 이미지도 수용하도록 구성되어 있습니다.

## 임시 자산과 TODO

- 앱 설치 링크는 `#download-todo` 임시값입니다.
- 인스타그램 링크는 `#social-todo` 임시값입니다.
- 이벤트 기간·대상·유의사항은 최종 운영안 확인이 필요합니다.
- `public/images/**`는 초안 PDF 추출본이며 최종 Figma 원본으로 교체해야 합니다.
- `public/lottie/**`는 제공된 온보딩 자산으로, 현재 정적 초안과의 시각적 일치를 위해 화면에는 노출하지 않았습니다.
- 소셜 공유 이미지는 `src/app/opengraph-image.tsx`에서 생성되는 임시 브랜드 카드입니다.

## Vercel 배포

1. GitHub에 이 폴더를 push합니다.
2. Vercel에서 **Add New → Project**로 저장소를 가져옵니다.
3. Framework Preset이 Next.js인지 확인합니다.
4. 별도 환경 변수 없이 **Deploy**를 실행합니다. 커스텀 도메인을 사용한다면 `NEXT_PUBLIC_SITE_URL`에 전체 HTTPS 주소를 설정할 수 있습니다.

CLI를 사용할 경우 `npx vercel`로 미리보기, `npx vercel --prod`로 프로덕션 배포할 수 있습니다.

## GitHub 최초 연결 예시

```bash
git init
git add .
git commit -m "Initial TapShopBar landing page"
git branch -M main
git remote add origin <REPOSITORY_URL>
git push -u origin main
```
