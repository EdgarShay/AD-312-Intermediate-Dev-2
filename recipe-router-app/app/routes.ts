import {
    type RouteConfig,
    index,
    route,
} from "@react-router/dev/routes";

export default [
    index("routes/index.jsx"),

    route("gallery", "routes/gallery.jsx"),

    route("recipe/:id", "routes/recipe.$id.jsx"),
] satisfies RouteConfig;