import { StyledComponentsRegistry } from './StyledComponentsRegistry'
import type { Metadata } from 'next'
import Providers from '@/lib/components/Providers'

export const metadata: Metadata = {
  title: 'Tag app',
  description: 'Add, edit and delete tags',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
