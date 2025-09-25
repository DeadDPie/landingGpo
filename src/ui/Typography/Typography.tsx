import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import styles from "./Typography.module.css";
import cn from "classnames";

export type TypographyVariant = "h1" | "h2" | "h3" | "p1" | "p2";

type Props<T extends ElementType> = {
  variant?: TypographyVariant;
  as?: T;
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

const defaultTagFor: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p1: "p",
  p2: "p",
};

export default function Typography<T extends ElementType = "p">({
  variant = "p1",
  as,
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = as || defaultTagFor[variant];
  const variantClass = styles[variant] || styles.p1;

  return (
    <Component className={cn(variantClass, className)} {...rest}>
      {children}
    </Component>
  );
}
