import { navItems } from "./nav";

/**
 * The six real service pages, derived from the header nav rather than typed
 * out again, so the two can't drift apart. Used as the fixed option list
 * wherever a project is tagged with the service it was delivered under.
 * "Company" is the only dropdown that isn't a service group.
 */
export const SERVICES: { label: string; href: string }[] = navItems
  .filter((item) => item.children && item.label !== "Company")
  .flatMap((item) => item.children ?? [])
  .map(({ label, href }) => ({ label, href }));

export const SERVICE_LABELS = SERVICES.map((s) => s.label);
