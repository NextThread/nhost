import { Box } from '@/components/ui/v2/Box';
import { createTheme } from '@/components/ui/v2/createTheme';
import { ThemeProvider } from '@mui/material';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import getColor from './getColor';

export default function triggerToast(text: string) {
  const color = getColor();

  toast.custom((t) => (
    <ThemeProvider theme={createTheme(color)}>
      <Box
        className={clsx(
          'rounded-sm+ px-2 py-1.5 font-normal shadow-md',
          t.visible ? 'animate-enter' : 'animate-leave',
        )}
        sx={{
          color: 'common.white',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
        }}
      >
        {text}
      </Box>
    </ThemeProvider>
  ));
}
