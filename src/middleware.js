import { NextResponse } from "next/server"

// const user = true ;
const coo = 'nexthero'
export const middleware = (request) => {
    const cookie = request.cookies.get('token')
    console.log(cookie , coo)
    if(!cookie || coo != cookie.value){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher : ["/About" , "/dashboard"]
}