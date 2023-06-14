import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const PageTitle = ({
    link,
    title,
    subTitle,
    paddingTop = '20px',
    paddingBottom = '20px',
    children,
}) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignContent="center"
            style={{ paddingTop: paddingTop, paddingBottom: paddingBottom }}
        >
            <Grid item>
                <Link to={link} style={{textDecoration: 'none'}}>
                    <Typography color="textPrimary" variant="h4" style={{textDecoration: 'none'}}>
                        {title}
                    </Typography>
                </Link>
                <Typography color="textSecondary" variant="h7">
                    {subTitle}
                </Typography>
            </Grid>
            <Grid item>{children}</Grid>
        </Grid>
    );
};
