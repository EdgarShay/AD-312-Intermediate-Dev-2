import {
    route,
    type RouteConfig,
} from "@react-router/dev/routes";

export default [

    route("/", "routes/home.tsx"),

    route(
        "about",
        "routes/about.tsx"
    ),

    route(
        "post/:postId",
        "routes/post.$postId.tsx"
    ),

] satisfies RouteConfig;