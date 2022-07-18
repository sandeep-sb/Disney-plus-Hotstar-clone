import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUP>GET ALL THERE</SignUP>
                    <Description>Get premium access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                        As of 03/26/2021, the price of Disney+ and The Disney Bundle will increase by $1. 
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Content = styled.div`
    height:100%;
    min-height: 100vh;
    margin-bottom: 10vh;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    margin-bottom: 2vw;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    transition-timing-function: ease-out;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUP = styled.a`
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #f9f9f9;
    margin-bottom: 12px;
    background-color: #0063e5;
    font-size: 18px;
    padding: 16.5px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;