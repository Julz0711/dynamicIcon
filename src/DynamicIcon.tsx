import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface DynamicIconProps {
  name: string; // e.g. "faCoffee"
  color?: string; // Tailwind CSS classes
  size?: number; // in pixels
}

const iconCache: Record<string, IconDefinition | null> = {};

async function importIcon(name: string): Promise<IconDefinition | null> {
  try {
    const icons = await import("@fortawesome/free-solid-svg-icons");
    // Only allow keys that exist in the module and are IconDefinition
    const icon = (icons as Record<string, unknown>)[name];
    if (icon && typeof icon === "object" && "iconName" in icon) {
      return icon as IconDefinition;
    }
    return null;
  } catch {
    return null;
  }
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, color = "", size = 24 }) => {
  const [icon, setIcon] = useState<IconDefinition | null | undefined>(iconCache[name]);

  useEffect(() => {
    let isMounted = true;
    if (iconCache[name] !== undefined) {
      setIcon(iconCache[name]);
      return;
    }
    setIcon(undefined); // loading
    importIcon(name).then((i) => {
      iconCache[name] = i;
      if (isMounted) setIcon(i);
    });
    return () => {
      isMounted = false;
    };
  }, [name]);

  if (icon === undefined) {
    return <span className={color} style={{ fontSize: size }}>...</span>; // loading
  }
  if (!icon) {
    return <span className={color} style={{ fontSize: size }}>?</span>; // not found
  }
  return <FontAwesomeIcon icon={icon} className={color} style={{ fontSize: size }} />;
};
