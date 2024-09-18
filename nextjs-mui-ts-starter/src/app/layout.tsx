
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import HeaderComponent from '@/components/header/app.header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>
          <ThemeRegistry>
              <HeaderComponent /> 
              {children}
          </ThemeRegistry>
        </>        
      </body>
    </html>
  );
}
