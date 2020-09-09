import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // Changed from primary to main
    // React told me so
    main: { light: '#2D2D35'},
  },
});

export default theme;