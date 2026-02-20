import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { lazy, Suspense } from "solid-js";
import "./assets/design/tokens.css";
import { ThemeProvider } from "./providers/ThemeProvider";
const Nav = lazy(() => import("./components/app/Nav"));

export default function App() {
    return (
        <ThemeProvider>
            <Router
                root={(props) => (
                    <>
                        <Suspense>
                            <Nav />
                            <main class="pt-16 min-h-[calc(100svh-4.2rem)] overflow-y-auto">
                                {props.children}
                                {/*<div class="h-screen"></div>*/}
                            </main>
                            <footer class="border-t">
                                <div class="container mx-auto px-1 py-5 text-fg-muted flex items-center">
                                    <h6>
                                        Ahmed Ragab © {new Date().getFullYear()}
                                    </h6>
                                </div>
                            </footer>
                        </Suspense>
                    </>
                )}
            >
                <FileRoutes />
            </Router>
        </ThemeProvider>
    );
}
