import { Tab, Tabs, TabsProps } from "@heroui/tabs";
import Link from "next/link";
import {
  BlogIcon,
  ContactIcon,
  HomeIcon,
  PortfolioIcon,
  ServiceIcon,
} from "../icons";
import { usePathname } from "next/navigation";


export default function MenuTab({
  tabsProps,
  setIsMenuOpen,
}: {
  tabsProps?: TabsProps;
  setIsMenuOpen?: (value: boolean) => void;
}) {
  const pathname = usePathname();
  return (
    <Tabs
      selectedKey={pathname}
      onSelectionChange={(key) => {
        key;
        if (setIsMenuOpen) {
          setIsMenuOpen(false);
        }
      }}
      aria-label="Options"
      variant="light"
      classNames={{cursor: "w-full bg-secondary-100 dark:bg-secondary-100"}}
      {...tabsProps}
    >
      <Tab
        key="/"
        href="/"
        as={Link}
        title={
          <div className="flex items-center space-x-2">
            <HomeIcon />
            <span>Home</span>
          </div>
        }
      />

      <Tab
        key="/services"
        href="/services"
        as={Link}
        title={
          <div className="flex items-center space-x-2">
            <ServiceIcon />
            <span>Services</span>
          </div>
        }
      />
      <Tab
        key="/portfolio"
        href="/portfolio"
        as={Link}
        title={
          <div className="flex items-center space-x-2">
            <PortfolioIcon />
            <span>Portfolio</span>
          </div>
        }
      />

      <Tab
        key="/contact"
        href="/contact"
        as={Link}
        title={
          <div className="flex items-center space-x-2">
            <ContactIcon />
            <span>Contact</span>
          </div>
        }
      />
      <Tab
        key="/blog"
        href="/blog"
        as={Link}
        title={
          <div className="flex items-center space-x-2">
            <BlogIcon />
            <span>Blog</span>
          </div>
        }
      />
    </Tabs>
  );
}
