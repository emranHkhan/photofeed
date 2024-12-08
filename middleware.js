import { match } from "@formatjs/intl-localematcher"
import { NextResponse } from "next/server"

const Negotiator = require("negotiator")

const locales = ['bn', 'en']
const defaultLocale = 'en'

function getLocale(request) {
    const accpetedLanguage = request.headers.get('accept-language') ?? undefined

    const headers = { 'accept-language': accpetedLanguage }
    const languages = new Negotiator({ headers }).languages()

    return match(languages, locales, defaultLocale)
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname

    const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }

}

export const config = {
    matcher: [
        '/((?!api|assets|.*\\..*|_next).*)'
    ]
}

