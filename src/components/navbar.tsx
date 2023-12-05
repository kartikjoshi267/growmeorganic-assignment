import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";


const Navbar: React.ElementType = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            style={{
              marginRight: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              ASSIGNMENT
            </Link>
          </Typography>
          <Typography
            marginLeft={'auto'}
          >
            <Link
              to={'/second-page'}
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              Go to Second Page
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
