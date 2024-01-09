import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Loading from "@/Components/Loading";

function SignatureCard({ name, description, price, benefits, processing }) {

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardContent sx={{ padding: 4 }}>
                <Typography sx={{ fontSize: 28, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    {description}
                </Typography>
                <Typography sx={{ textAlign: 'justify', fontSize: 28 }} color="text.secondary">
                    R$:{price}
                </Typography>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        disabled={processing}
                        disableElevation
                        fullWidth
                        endIcon={processing && <Loading />}
                        sx={{ marginY: 1.5 }}
                    >
                        {!processing && "Comprar"}
                    </Button>
                </Grid>
                <Typography variant="body2" sx={{ textAlign: 'justify', fontWeight: 'bold' }}>
                    Benefits:{benefits}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SignatureCard;
