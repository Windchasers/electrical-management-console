import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"
import { useRouter } from 'next/router'

export async function middleware(req: any) {

    //获取token
    const session = await getToken({
        req,
        secret: process.env.SECRET,
        secureCookie:
            process.env.NEXTAUTH_URL?.startsWith("https://") ??
            !!process.env.VERCEL_URL,
    })

    // try {
    //     session = await getToken({
    //         req,
    //         secret: process.env.SECRET,
    //         secureCookie:
    //             process.env.NEXTAUTH_URL?.startsWith("https://") ??
    //             !!process.env.VERCEL_URL,
    //     })

    // } catch (error) {
    //     console.log(error);

    // }

    // console.log('session', session);


    const checkToken = (session: any) => {
        if (!session) {
            return NextResponse.rewrite(new URL('/login', req.url))
        } else {
            return NextResponse.next()
        }

    }
    // if(req.nextUrl.pathname === '/'){
    //     return NextResponse.rewrite(new URL('/users/signed', req.url))
    // }


    console.log('req:', req.nextUrl.pathname)
    // return checkToken(session)


    if (req.nextUrl.pathname.startsWith('/users')) {
        // This logic is only applied to /users
        return checkToken(session)
    }

    if (req.nextUrl.pathname.startsWith('/count')) {
        // This logic is only applied to /count
        return checkToken(session)
    }

    if (req.nextUrl.pathname.startsWith('/contract')) {
        // This logic is only applied to /contract
        return checkToken(session)
    }

    if (req.nextUrl.pathname.startsWith('/data')) {
        // This logic is only applied to /data
        return checkToken(session)
    }

    if (req.nextUrl.pathname.startsWith('/trade')) {
        // This logic is only applied to /about
        return checkToken(session)
    }









}