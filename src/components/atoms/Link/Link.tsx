import { splitProps, type JSX } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import { A, type AnchorProps } from "@solidjs/router";

const link = tv({
    base: "px-4 py-2 rounded font-medium transition-all focus:outline-none border-transparent focus:ring-2 focus:ring-fg-main inline-flex items-center gap-2",
    variants: {
        variant: {
            solid: "border-2",
            subtle: "border-2",
            text: "bg-transparent",
            outline: "border-2 bg-transparent",
            link: "bg-transparent underline-offset-4",
        },
        color: {
            accent: "",
            success: "",
            warning: "",
            error: "",
        },
        size: {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        },
        state: {
            default: "",
            disabled: "!opacity-50 cursor-not-allowed",
        },
    },
    compoundVariants: [
        // Solid variant with colors
        {
            variant: "solid",
            color: "accent",
            class: "bg-accent text-primary hover:opacity-90",
        },
        {
            variant: "solid",
            color: "success",
            class: "bg-success text-primary hover:opacity-90",
        },
        {
            variant: "solid",
            color: "warning",
            class: "bg-warning text-primary hover:opacity-90",
        },
        {
            variant: "solid",
            color: "error",
            class: "bg-error text-primary hover:opacity-90",
        },
        // Subtle variant with colors
        {
            variant: "subtle",
            color: "accent",
            class: "bg-accent/20 text-accent hover:bg-accent/30",
        },
        {
            variant: "subtle",
            color: "success",
            class: "bg-success/20 text-success hover:bg-success/30",
        },
        {
            variant: "subtle",
            color: "warning",
            class: "bg-warning/20 text-warning hover:bg-warning/30",
        },
        {
            variant: "subtle",
            color: "error",
            class: "bg-error/20 text-error hover:bg-error/30",
        },
        // Text variant with colors
        {
            variant: "text",
            color: "accent",
            class: "text-accent hover:bg-accent/10",
        },
        {
            variant: "text",
            color: "success",
            class: "text-success hover:bg-success/10",
        },
        {
            variant: "text",
            color: "warning",
            class: "text-warning hover:bg-warning/10",
        },
        {
            variant: "text",
            color: "error",
            class: "text-error hover:bg-error/10",
        },
        // Outline variant with colors
        {
            variant: "outline",
            color: "accent",
            class: "border-accent text-accent hover:bg-accent/10",
        },
        {
            variant: "outline",
            color: "success",
            class: "border-success text-success hover:bg-success/10",
        },
        {
            variant: "outline",
            color: "warning",
            class: "border-warning text-warning hover:bg-warning/10",
        },
        {
            variant: "outline",
            color: "error",
            class: "border-error text-error hover:bg-error/10",
        },
        // Link variant with colors
        {
            variant: "link",
            color: "accent",
            class: "text-accent hover:underline",
        },
        {
            variant: "link",
            color: "success",
            class: "text-success hover:underline",
        },
        {
            variant: "link",
            color: "warning",
            class: "text-warning hover:underline",
        },
        {
            variant: "link",
            color: "error",
            class: "text-error hover:underline",
        },
    ],
    defaultVariants: {
        variant: "solid",
        color: "accent",
        size: "md",
        state: "default",
    },
});

type LinkVariants = VariantProps<typeof link>;

export interface LinkProps extends Omit<AnchorProps, "color"> {
    children?: JSX.Element;
    variant?: LinkVariants["variant"];
    color?: LinkVariants["color"];
    size?: LinkVariants["size"];
    disabled?: boolean;
}

export function Link(props: LinkProps) {
    const [local, others] = splitProps(props, [
        "children",
        "variant",
        "color",
        "size",
        "disabled",
        "class",
        "href",
        "onClick",
    ]);

    const linkState = () => {
        if (local.disabled) return "disabled";
        return "default";
    };

    return (
        <A
            href={local.href || "#"}
            class={link({
                variant: local.variant,
                color: local.color,
                size: local.size,
                state: linkState(),
                class: local.class,
            })}
            aria-disabled={local.disabled}
            onClick={(e) => {
                if (local.disabled) {
                    e.preventDefault();
                    return;
                }
                if (typeof local.onClick === "function") {
                    // @ts-ignore
                    local.onClick(e);
                } else if (Array.isArray(local.onClick)) {
                    // @ts-ignore
                    local.onClick[0](local.onClick[1], e);
                }
            }}
            {...others}
        >
            {local.children}
        </A>
    );
}
