export { default } from "next-auth/middleware"

// untuk menentukan routing mana saja yang dapat diakses 
export const config = { matcher: [
    "/listing/:id/checkout",
    "/booking-success/:path*",
    "/dashboard/:path*"
] }