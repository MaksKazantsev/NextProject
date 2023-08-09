import './globals.scss'
import type {Metadata} from 'next'
import {Montserrat, Poppins} from 'next/font/google'
import {COLORS} from "@/constants";
import {AppLayout} from "@/app/_ui/layout/AppLayout";

const montserrat = Montserrat({subsets: ['latin']})
const poppins = Poppins({subsets: ['latin'], weight: ['300', '400', '500', '600']})

export const metadata: Metadata = {
    title: 'Weather',
    description: 'Weather Forecast',
    icons: {
        icon: '/favicon.io'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${montserrat.className} no-margin body`} style={{backgroundColor: COLORS.secondary}}>
        <AppLayout>
            {children}
        </AppLayout>
        </body>
        </html>
    )
}
