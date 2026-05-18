import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const meta = () => ([
    {title: 'Resmind | Auth'},
    {name: 'description', content: 'Log into your account'}
])

export default [
    index("routes/home.tsx"),
    route("/auth", 'routes/auth.tsx'),
    route("/upload", 'routes/upload.tsx'),
] satisfies RouteConfig;
