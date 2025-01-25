// 'use client'
import React from 'react';
import styles from "./SFDropdownMenu.module.css";
import Image from 'next/image';

type MenuItem = {
    label: string;
    items: string[];
}

type MenuItems = string[] | MenuItem[];

interface SFDropdownMenuProps {
    label: string;
    items: MenuItems;
}

const SFDropdownMenu: React.FC<SFDropdownMenuProps> = ({ label, items }) => {
    const isNestedMenu = (items: MenuItems): items is MenuItem[] => {
      return items.length > 0 && typeof items[0] === 'object' && items[0] !== null && 'label' in items[0];
    };
  
    return (
      <div className={styles.dropdown}>
        <span className={styles.dropdownButton}>{label}</span>
        <div className={styles.dropdownContentContainer}>
            <div className={styles.dropdownContent}>
                {isNestedMenu(items) ? (
                items.map((item, index) => (
                    <div key={index}>
                    <span className={styles.dropdownSubMenuHeader}>{item.label}</span>
                    {item.items.map((subItem, subIndex) => (
                        <a href="#" key={`${index}-${subIndex}`}>
                        {subItem}
                        </a>
                    ))}
                    </div>
                ))
                ) : (
                items.map((item, index) => (
                    <a href="#" key={index}>
                    {item}
                    </a>
                ))
                )}
            </div>
        </div>
      </div>
    );
  };
  

  
  export default SFDropdownMenu;
  