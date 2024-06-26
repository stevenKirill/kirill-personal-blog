export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  // @ts-ignore
  action, category, label, value,
}) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
