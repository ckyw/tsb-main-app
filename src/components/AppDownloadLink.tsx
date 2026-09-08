import { siteConfig } from "@/config/site";

type AppDownloadLinkProps = {
  analyticsId: string;
  label: string;
  className?: string;
};

export function AppDownloadLink({ analyticsId, label, className = "" }: AppDownloadLinkProps) {
  return (
    <a
      className={`download-link ${className}`}
      data-analytics-id={analyticsId}
      href={siteConfig.appDownloadUrl}
      aria-label={`${label} - 다운로드 링크 준비 중`}
    >
      {label}
    </a>
  );
}
