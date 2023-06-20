import { styled } from '@mui/material/styles';

const PageDiv = styled('div')(() => ({
    margin: '20px 50px',
    height: '100%',
    overflow: 'auto',
}));

export const Page = ({ children }) => {

    return (
        <PageDiv id="page-div">
            {children}
        </PageDiv>
    );
};
