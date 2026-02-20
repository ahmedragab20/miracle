import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Link } from "./Link";
import { Router, Route } from "@solidjs/router"; // Need Router to test A

describe("Link", () => {
    describe("Rendering", () => {
        it("renders with children", () => {
            render(() => (
                <Router>
                    <Route path="/" component={() => <Link href="/test">Click me</Link>} />
                </Router>
            ));
            expect(screen.getByText("Click me")).toBeInTheDocument();
        });

        it("renders as anchor tag", () => {
            const { container } = render(() => (
                <Router>
                    <Route path="/" component={() => <Link href="/test">Link</Link>} />
                </Router>
            ));
            const anchor = container.querySelector("a");
            expect(anchor).toBeInTheDocument();
            expect(anchor).toHaveAttribute("href", "/test");
        });

        it("renders with custom class", () => {
            const { container } = render(() => (
                <Router>
                   <Route path="/" component={() => <Link href="/test" class="custom-class">Test</Link>} />
                </Router>
            ));
            const anchor = container.querySelector("a");
            expect(anchor?.className).toContain("custom-class");
        });
    });

    describe("Variants", () => {
        const variantMap = {
            solid: "bg-accent",
            subtle: "bg-accent/20",
            text: "bg-transparent",
            outline: "border-2",
            link: "bg-transparent",
        } as const;

        Object.entries(variantMap).forEach(([variant, expectedClass]) => {
            it(`applies correct classes for ${variant} variant`, () => {
                const { container } = render(() => (
                    <Router>
                        <Route path="/" component={() => <Link href="/" variant={variant as any}>Test</Link>} />
                    </Router>
                ));
                const element = container.querySelector("a");
                expect(element?.className).toContain(expectedClass);
            });
        });
    });

    describe("States", () => {
        it("is disabled when disabled prop is true", () => {
            render(() => (
                <Router>
                    <Route path="/" component={() => <Link href="/" disabled>Disabled</Link>} />
                </Router>
            ));
            const link = screen.getByText("Disabled");
            expect(link).toHaveAttribute("aria-disabled", "true");
            expect(link.className).toContain("opacity-50");
        });

        it("prevents interactions when disabled", () => {
            const handleClick = vi.fn();
            render(() => (
                <Router>
                    <Route path="/" component={() => <Link href="/" disabled onClick={handleClick}>Disabled</Link>} />
                </Router>
            ));
            const link = screen.getByText("Disabled");
            link.click();
            expect(handleClick).not.toHaveBeenCalled();
        });
    });
});
