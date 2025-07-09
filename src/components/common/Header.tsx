/* =======================================
 * 西川塗装 HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */
'use client';
import { navMenu } from '@/data/navMenuData';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [hoverStyle, setHoverStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const [activeStyle, setActiveStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen]);

  const handleHover = (index: number) => {
    const link = linkRefs.current[index];
    if (link && containerRef.current) {
      const linkRect = link.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setHoverStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  };

  const handleLeave = () => {
    setHoverStyle(null);
  };

  // Set activeStyle on load and pathname change
  useEffect(() => {
    const activeIndex = navMenu.findIndex((link) => link.href === pathname);
    if (activeIndex !== -1) {
      const link = linkRefs.current[activeIndex];
      if (link && containerRef.current) {
        const linkRect = link.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        setActiveStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [pathname]);

  return (
    <header className={styles.containerHeader}>
      <article>
        <div className={styles.titleEn}>Nishikawa Painting</div>
        <nav>
          <div className={styles.linkContainer} ref={containerRef}>
            {navMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.itemLink} ${index === 0 ? styles.linkTop : ''}`}
                ref={(el) => {
                  if (el) linkRefs.current[index] = el;
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                {item.label}
              </Link>
            ))}
            <span
              className={styles.hoverBar}
              style={{
                left: (hoverStyle?.left ?? activeStyle?.left) + 'px',
                width: (hoverStyle?.width ?? activeStyle?.width) + 'px',
                opacity: hoverStyle || activeStyle ? 1 : 0,
              }}
            />
          </div>
        </nav>
      </article>
      <button
        type="button"
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
