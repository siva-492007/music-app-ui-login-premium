import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";

function Premium() {

    const [upi, setUpi] = React.useState(null);
    const [valid, setValid] = React.useState(false);
    const validUpi = "dummy@upi"

    const description = [
        'Download videos',
        '10 GB of storage',
        'Help center access',
        'Phone & email support',
    ]

    const BeforePremium = () => (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >

            </AppBar>
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Premium Membership
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Get access to Unlimited access to all newly released songs and
                    Download all available songs using our <strong>Premium Access</strong>
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main" align="centre" >
                <Card>
                    <CardHeader
                        title= "Premium"

                        TypographyProps={{ align: 'center'}}
                        action={'Premium' === 'Premium' ? <StarIcon /> : null}
                        subheaderTypographyProps={{
                            align: 'center'
                        }}
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[700],
                        }}
                    />
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2,
                            }}
                        >
                            <Typography component="h2" variant="h3" color="text.primary">
                                ${ '10'}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                /mo
                            </Typography>
                        </Box>
                        <ul>
                            {description.map((line) => (
                                <Typography
                                    component="li"
                                    variant="sub 'Premium'1"
                                    align="center"
                                    key={line}
                                >
                                    {line}
                                </Typography>
                            ))}
                        </ul>
                    </CardContent>
                    <TextField
                        value={upi}
                        margin="normal"
                        required
                        // fullWidth
                        type="text"
                        name="upi"
                        id="upi"
                        onChange={
                            (event) => setUpi(event.target.value)
                        }
                    />
                    <CardActions padding-left="250px">

                        <Button
                            fullWidth
                            variant={'outlined'}
                            onClick={() => {
                                if (upi === validUpi) {
                                    window.alert("$10 is deducted from your UPI successfully")
                                    setValid(true)
                                } else {
                                    window.alert("Enter valid UPI!")
                                }
                            }}
                        >
                            Get Premium
                        </Button>
                    </CardActions>
                </Card>
            </Container>

        </React.Fragment>
    )

    const AfterPremium = () => (
        <h2>Hurray! You are a Premium member</h2>
    )

  return (
      (!valid) ?
          <BeforePremium />:
          <AfterPremium />
  );
}

export default Premium;