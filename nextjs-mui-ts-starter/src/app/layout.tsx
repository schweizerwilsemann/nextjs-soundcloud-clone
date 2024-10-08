'use client'
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import HeaderComponent from '@/components/header/app.header';
import Player from '@/components/footer/app.footer';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>
          <ThemeRegistry>
              <HeaderComponent /> 
              {children}
                <Player />
              
          </ThemeRegistry>
        </>        
      </body>
    </html>
  );
}
