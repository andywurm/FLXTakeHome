import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Properties', 'Attractions', 'Popular'];

const Navigation = () => {

    return (
        <div>
            <AppBar position="static" style={{ background: '#FFFFFF', boxShadow: 'none', width: '95%', margin: '0 auto' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Tripster
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Tripster
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 500, margin: '0 2%' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <button style={{
                            padding: '7px 20px',
                            borderRadius: '15px',
                            border: 'solid blue 1px',
                            color:'rgb(87, 87, 255)',
                            backgroundColor: 'transparent',
                            margin: '0 5px',
                            fontWeight: '600'
                        }}>Sign up</button>

                        <button style={{
                            padding: '7px 20px',
                            borderRadius: '15px',
                            border: 'solid rgb(87, 87, 255) 1px',
                            color:'white',
                            backgroundColor: 'rgb(87, 87, 255)',
                            margin: '0 5px',
                            fontWeight: '700'
                        }}>Log in</button>

                    </Toolbar>
                </Container>
            </AppBar>
            <div style={{ backgroundColor: '#F5F5F5', height: '2px' }}></div>
        </div>
    )

}

export default Navigation;