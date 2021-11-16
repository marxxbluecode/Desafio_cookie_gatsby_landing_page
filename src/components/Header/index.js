import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Header() {
    const data = useStaticQuery(graphql`
        query {
            alldata {
                headers {
                    headerline1left
                    headerline1right1
                    headerline1Right2
                    headerline1Iconzap {
                      url
                    }
                    headerline1IconDoubt {
                      url
                    }
                    headerline2Logo {
                      url
                    }
                    headerline2Searchicon {
                      url
                    }
                    headerline2Avataricon {
                      url
                    }
                    headerline2login
                    headerline2Bagicon {
                      url
                    }
                    headerline3pag
                    headerline3loja
                    headerline3Sobre
                    headerline3Contato
                    headerline3icons {
                      url
                    }
                    headerbackgroundimage {
                      url
                    }
                    headerTitle
                    headerSubTitle
                    headerBtn
                    headerBottomImg1 {
                      url
                    }
                    headerBottomImg2 {
                      url
                    }
                    headerBottomImg3 {
                      url
                    }
                    bottomCapsText2
                    bottomCapsText3
                    bottomSubText2
                    bottomSubText3
                    carrinho {
                        url
                      }
                  }
            }
        }
    `);

    const {headerline1left,  headerline1right1, headerline1Right2, headerline1Iconzap, headerline1IconDoubt, headerline2Logo, headerline2Searchicon,  headerline2Avataricon, headerline2login,  headerline2Bagicon, headerline3pag, headerline3loja, headerline3Sobre, headerline3Contato, headerline3icons, headerbackgroundimage, headerTitle, headerSubTitle, headerBtn, headerBottomImg1, headerBottomImg2, headerBottomImg3, bottomCapsText2, bottomCapsText3, bottomSubText2, bottomSubText3, carrinho  } = data.alldata.headers[0];

    return (
        <S.Container>
            <>
                <S.HeaderLine1>
                    <S.Line1Left>
                        <S.p>{headerline1left}</S.p>
                    </S.Line1Left>
                    <S.Line1Right>
                        <S.img src={headerline1Iconzap.url} alt="icon"/><S.p>{headerline1right1}</S.p>
                        <S.img src={headerline1IconDoubt.url} alt="icon"/><S.p>{headerline1Right2}</S.p>
                    </S.Line1Right>
                </S.HeaderLine1>

                <S.HeaderLine2>
                    <S.logo src={headerline2Logo.url} alt="logo"/>
                    <S.searchbar>
                    <S.searchicon src={headerline2Searchicon.url} alt="searchicon"/>
                    <S.input type="text" placeholder="Pesquisar"/>
                    </S.searchbar>
                    <>
                        <S.Line1Right>
                            <S.img src={headerline2Avataricon.url} alt="avataricon"/>
                            <S.p>{headerline2login}</S.p>
                            <S.img src={headerline2Bagicon.url} alt="bag icon"/>
                        </S.Line1Right>
                    </>
                </S.HeaderLine2>
                <S.HeaderLine3>
                    <S.Line1Right>
                        <S.p2>{headerline3pag}</S.p2>
                        <S.p2>{headerline3loja}</S.p2>
                        <S.p2>{headerline3Sobre}</S.p2>
                        <S.p2>{headerline3Contato}</S.p2>
                    </S.Line1Right>
                    <S.Line1Left>
                        <S.img2 src={headerline3icons.url} alt="icons"/>
                    </S.Line1Left>
                </S.HeaderLine3>
                <S.Middle>
                    <S.background>
                        <S.backgroundimg src={headerbackgroundimage.url} alt="kitchen utesils"/>
                        <S.Text>
                            <S.Title>{headerTitle}</S.Title>
                            <S.SubTitle>{headerSubTitle}</S.SubTitle>
                            <S.BuyBtn>
                                <S.carticon src={carrinho.url} alt=" cart icon"/>
                                <S.Btn>{headerBtn}</S.Btn>
                            </S.BuyBtn>
                        </S.Text>
                    </S.background>
                </S.Middle>
                <S.Bottom>
                    <S.div>

                    </S.div>
                        <S.Img src={headerBottomImg1.url} alt="bag icon"/>
                    <S.BottomImg>
                    <S.TextBox>
                            <S.Caps>NOVO SERVIÇO DE RETIRADA</S.Caps>
                            <S.paragraph>Sempre Frescos</S.paragraph>
                    </S.TextBox>
                    </S.BottomImg>
                                <S.barra></S.barra>
                    <S.BottomImg>
                        <S.Img2 src={headerBottomImg2.url} alt="delivery icon"/>
                    </S.BottomImg>
                       <S.TextBox>
                            <S.Caps>{bottomCapsText2}</S.Caps>
                            <S.paragraph>{bottomSubText2}</S.paragraph>
                       </S.TextBox>
                                <S.barra></S.barra>
                    <S.Img3 src={headerBottomImg3.url} alt="present icon"/>
                    <S.BottomImg>
                        <S.TextBox>
                            <S.Caps>{bottomCapsText3}</S.Caps>
                            <S.paragraph>{bottomSubText3}</S.paragraph>
                        </S.TextBox>
                    </S.BottomImg>
                </S.Bottom>
            </>
        </S.Container>
    );
}
