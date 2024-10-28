import { RouterProvider } from 'react-router-dom';
import router from '@routes/router.tsx';
import { ThemeProvider } from '@/components/theme';
import RootLayout from '@/components/root-layout';

function App() {
  return (
    <>
      <RootLayout>
        <ThemeProvider defaultTheme="dark">
          <RouterProvider router={router} />
        </ThemeProvider>
      </RootLayout>
    </>
  );
}

export default App;
